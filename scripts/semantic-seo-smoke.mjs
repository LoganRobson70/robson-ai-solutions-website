import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

import { startStaticServer } from "./lib/static-server.mjs";

const __filename = fileURLToPath(import.meta.url);
const PUBLIC_PAGES = [
  {
    path: "/",
    canonical: "https://robsonai.co.uk/",
    minDescriptionLength: 70,
    titlePattern: /Robson AI/i
  },
  {
    path: "/building-analyst",
    canonical: "https://robsonai.co.uk/building-analyst",
    minDescriptionLength: 80,
    titlePattern: /Building Analyst/i
  },
  {
    path: "/who-its-for",
    canonical: "https://robsonai.co.uk/who-its-for",
    minDescriptionLength: 80,
    titlePattern: /Who It Is For/i
  },
  {
    path: "/privacy",
    canonical: "https://robsonai.co.uk/privacy",
    minDescriptionLength: 80,
    titlePattern: /Privacy Notice/i
  }
];

const NOINDEX_PAGES = [
  {
    path: "/holding.html",
    canonical: "https://robsonai.co.uk/holding.html"
  },
  {
    path: "/404.html",
    canonical: null
  },
  {
    path: "/buildscan-viewer.html",
    canonical: null
  }
];

function parseArgs(argv) {
  const parsed = {};

  argv.forEach((argument) => {
    if (!argument.startsWith("--")) {
      return;
    }

    const [rawKey, rawValue] = argument.slice(2).split("=");
    parsed[rawKey] = rawValue ?? "true";
  });

  return parsed;
}

function timestampLabel() {
  return new Date().toISOString().replace(/[:.]/g, "-");
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

async function writeJson(filePath, value) {
  await writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

async function launchBrowser() {
  return chromium.launch({
    channel: "chrome",
    headless: true
  });
}

function captureDiagnostics(page) {
  const consoleMessages = [];
  const failedRequests = [];
  const responses = [];

  page.on("console", (message) => {
    consoleMessages.push({
      type: message.type(),
      text: message.text()
    });
  });
  page.on("pageerror", (error) => {
    consoleMessages.push({
      type: "pageerror",
      text: error.message
    });
  });
  page.on("response", (response) => {
    if (response.url().startsWith("blob:")) {
      return;
    }

    responses.push({
      url: response.url(),
      status: response.status()
    });
  });
  page.on("requestfailed", (request) => {
    failedRequests.push({
      url: request.url(),
      error: request.failure()?.errorText || ""
    });
  });

  return {
    consoleMessages,
    failedRequests,
    responses
  };
}

function getBlockingFailedRequests(diagnostics) {
  return diagnostics.failedRequests.filter((failure) => {
    let pathname = "";
    try {
      pathname = new URL(failure.url).pathname;
    } catch {
      pathname = failure.url;
    }

    const isRequiredSiteAsset =
      pathname === "/" ||
      pathname.endsWith(".html") ||
      pathname === "/styles.css" ||
      pathname === "/script.js" ||
      pathname.startsWith("/assets/");
    const hadSuccessfulResponse = diagnostics.responses.some(
      (response) => response.url === failure.url && response.status >= 200 && response.status < 400
    );
    const hadSuccessfulGlbResponse = diagnostics.responses.some(
      (response) => response.url === failure.url && response.status === 200 && response.url.includes("buildscan-ludgershall-public.glb")
    );

    if (failure.error === "net::ERR_ABORTED" && (hadSuccessfulResponse || !isRequiredSiteAsset)) {
      return false;
    }

    return !(hadSuccessfulGlbResponse && failure.error === "net::ERR_ABORTED");
  });
}

function getBlockingConsoleMessages(diagnostics) {
  return diagnostics.consoleMessages.filter((message) => {
    if (message.type === "info" && message.text.startsWith("Slow network is detected.")) {
      return false;
    }

    return true;
  });
}

async function readPageSemantics(page) {
  return page.evaluate(() => {
    const getMeta = (selector) => document.querySelector(selector)?.getAttribute("content")?.trim() || "";
    const getLink = (selector) => document.querySelector(selector)?.getAttribute("href")?.trim() || "";

    const images = [...document.querySelectorAll("img")].map((image) => ({
      alt: image.getAttribute("alt"),
      ariaHidden: image.getAttribute("aria-hidden"),
      height: image.getAttribute("height"),
      src: image.getAttribute("src") || "",
      width: image.getAttribute("width")
    }));

    const jsonLd = [...document.querySelectorAll('script[type="application/ld+json"]')].map((script) => script.textContent || "");

    return {
      brandCasingErrors: document.documentElement.outerHTML.match(/Robson Ai/g) || [],
      canonical: getLink('link[rel="canonical"]'),
      description: getMeta('meta[name="description"]'),
      h1Texts: [...document.querySelectorAll("h1")].map((heading) => heading.textContent?.trim() || ""),
      htmlLang: document.documentElement.getAttribute("lang") || "",
      images,
      jsonLd,
      mainCount: document.querySelectorAll("main").length,
      navLabels: [...document.querySelectorAll("nav")].map((nav) => nav.getAttribute("aria-label") || ""),
      ogDescription: getMeta('meta[property="og:description"]'),
      ogImage: getMeta('meta[property="og:image"]'),
      ogTitle: getMeta('meta[property="og:title"]'),
      ogType: getMeta('meta[property="og:type"]'),
      robots: getMeta('meta[name="robots"]'),
      skipLinkHref: document.querySelector(".skip-link")?.getAttribute("href") || "",
      title: document.title,
      twitterCard: getMeta('meta[name="twitter:card"]'),
      twitterDescription: getMeta('meta[name="twitter:description"]'),
      twitterImage: getMeta('meta[name="twitter:image"]'),
      twitterTitle: getMeta('meta[name="twitter:title"]')
    };
  });
}

function assertImageSemantics(result, pagePath) {
  result.images.forEach((image) => {
    assert(image.alt !== null, `${pagePath} image ${image.src} should declare alt text, even when decorative.`);
    assert(image.width && image.height, `${pagePath} image ${image.src} should declare width and height.`);
  });
}

function assertPublicPageSemantics(result, pageSpec) {
  assert(result.htmlLang === "en-GB", `${pageSpec.path} should declare html lang en-GB.`);
  assert(pageSpec.titlePattern.test(result.title), `${pageSpec.path} title should match expected page purpose; actual: ${result.title}`);
  assert(!result.brandCasingErrors.length, `${pageSpec.path} should use Robson AI casing, not Robson Ai.`);
  assert(result.title.length >= 15 && result.title.length <= 80, `${pageSpec.path} title should be concise and descriptive; actual length ${result.title.length}.`);
  assert(result.description.length >= pageSpec.minDescriptionLength && result.description.length <= 180, `${pageSpec.path} description should be useful and concise; actual length ${result.description.length}.`);
  assert(result.canonical === pageSpec.canonical, `${pageSpec.path} canonical mismatch; expected ${pageSpec.canonical}, actual ${result.canonical}.`);
  assert(/^index,\s*follow$/i.test(result.robots), `${pageSpec.path} should be index, follow; actual ${result.robots}.`);
  assert(result.mainCount === 1, `${pageSpec.path} should have one main landmark; actual ${result.mainCount}.`);
  assert(result.h1Texts.length === 1 && result.h1Texts[0].length > 10, `${pageSpec.path} should have one meaningful H1.`);
  assert(result.navLabels.includes("Primary"), `${pageSpec.path} should include a primary navigation landmark.`);
  assert(result.skipLinkHref === "#main-content", `${pageSpec.path} should include a skip link to #main-content.`);
  assert(result.ogType === "website", `${pageSpec.path} should set og:type website.`);
  assert(result.ogTitle && result.ogDescription && result.ogImage, `${pageSpec.path} should include complete Open Graph title, description and image.`);
  assert(result.twitterCard === "summary_large_image", `${pageSpec.path} should use summary_large_image Twitter card.`);
  assert(result.twitterTitle && result.twitterDescription && result.twitterImage, `${pageSpec.path} should include complete Twitter metadata.`);
  assertImageSemantics(result, pageSpec.path);
}

function assertNoindexPageSemantics(result, pageSpec) {
  assert(/^noindex,?\s*nofollow$/i.test(result.robots), `${pageSpec.path} should be noindex,nofollow; actual ${result.robots}.`);
  assert(!result.brandCasingErrors.length, `${pageSpec.path} should use Robson AI casing, not Robson Ai.`);

  if (pageSpec.canonical) {
    assert(result.canonical === pageSpec.canonical, `${pageSpec.path} canonical mismatch; expected ${pageSpec.canonical}, actual ${result.canonical}.`);
  }
}

function assertHomepageJsonLd(result) {
  assert(result.jsonLd.length === 1, "Homepage should include one JSON-LD block.");
  const parsed = JSON.parse(result.jsonLd[0]);
  const graph = parsed["@graph"] || [];
  const organization = graph.find((entry) => entry["@type"] === "Organization");
  const website = graph.find((entry) => entry["@type"] === "WebSite");
  assert(organization, "Homepage JSON-LD should describe the organization.");
  assert(website, "Homepage JSON-LD should describe the website.");
  assert(organization.name === "Robson AI Solutions", `Homepage JSON-LD name should be Robson AI Solutions; actual ${organization.name}.`);
  assert(organization.url === "https://robsonai.co.uk/", `Homepage JSON-LD organization URL should be canonical root; actual ${organization.url}.`);
  assert(website.url === "https://robsonai.co.uk/", `Homepage JSON-LD website URL should be canonical root; actual ${website.url}.`);
}

function assertSecondaryJsonLd(result, pageSpec) {
  assert(result.jsonLd.length === 1, `${pageSpec.path} should include one JSON-LD block.`);
  const parsed = JSON.parse(result.jsonLd[0]);
  const graph = parsed["@graph"] || [];
  const webPage = graph.find((entry) => entry["@type"] === "WebPage");
  const breadcrumb = graph.find((entry) => entry["@type"] === "BreadcrumbList");
  assert(webPage?.url === pageSpec.canonical, `${pageSpec.path} WebPage schema should use its canonical URL.`);
  assert(breadcrumb?.itemListElement?.length === 2, `${pageSpec.path} should include a two-level breadcrumb schema.`);
}

async function validatePage(browser, baseUrl, pageSpec, mode) {
  const page = await browser.newPage();
  const diagnostics = captureDiagnostics(page);

  try {
    const response = await page.goto(new URL(pageSpec.path, baseUrl).toString(), { waitUntil: "networkidle" });
    assert(response?.status() === 200, `${pageSpec.path} should return HTTP 200 in ${mode} mode.`);
    const semantics = await readPageSemantics(page);

    if (PUBLIC_PAGES.includes(pageSpec)) {
      assertPublicPageSemantics(semantics, pageSpec);

      if (pageSpec.path === "/") {
        assertHomepageJsonLd(semantics);
      } else {
        assertSecondaryJsonLd(semantics, pageSpec);
      }
    } else {
      assertNoindexPageSemantics(semantics, pageSpec);
    }

    const blockingConsoleMessages = getBlockingConsoleMessages(diagnostics);
    assert(blockingConsoleMessages.length === 0, `${pageSpec.path} should not emit blocking console messages: ${JSON.stringify(blockingConsoleMessages)}.`);
    const blockingFailedRequests = getBlockingFailedRequests(diagnostics);
    assert(blockingFailedRequests.length === 0, `${pageSpec.path} should not have blocking failed requests: ${JSON.stringify(blockingFailedRequests)}.`);

    return {
      path: pageSpec.path,
      title: semantics.title,
      descriptionLength: semantics.description.length,
      h1: semantics.h1Texts[0] || null,
      robots: semantics.robots
    };
  } finally {
    await page.close();
  }
}

async function validateRobotsAndSitemap(baseUrl, mode) {
  const [robotsResponse, sitemapResponse] = await Promise.all([
    fetch(new URL("/robots.txt", baseUrl).toString()),
    fetch(new URL("/sitemap.xml", baseUrl).toString())
  ]);
  assert(robotsResponse.status === 200, `robots.txt should return HTTP 200 in ${mode} mode.`);
  assert(sitemapResponse.status === 200, `sitemap.xml should return HTTP 200 in ${mode} mode.`);

  const robots = await robotsResponse.text();
  const sitemap = await sitemapResponse.text();
  const expectedLocs = PUBLIC_PAGES.map((page) => page.canonical);

  expectedLocs.forEach((loc) => {
    assert(sitemap.includes(`<loc>${loc}</loc>`), `sitemap.xml should include ${loc}.`);
  });
  NOINDEX_PAGES.forEach((page) => {
    if (page.canonical) {
      assert(!sitemap.includes(page.canonical), `sitemap.xml should not include noindex page ${page.canonical}.`);
    }
  });
  assert(/Disallow:\s*\/holding\.html/i.test(robots), "robots.txt should disallow holding.html.");
  assert(/Disallow:\s*\/preview\.html/i.test(robots), "robots.txt should disallow preview.html.");
  assert(/Sitemap:\s*https:\/\/robsonai\.co\.uk\/sitemap\.xml/i.test(robots), "robots.txt should reference the canonical sitemap.");

  if (mode === "local") {
    const localSitemap = await readFile("sitemap.xml", "utf8");
    assert(localSitemap === sitemap, "Served local sitemap should match repository sitemap.xml.");
  }

  return {
    robotsDisallowHolding: true,
    robotsDisallowPreview: true,
    sitemapLocs: expectedLocs
  };
}

export async function runSemanticSeoSmoke({
  artifactDir = path.resolve("output/semantic-seo", `smoke-${timestampLabel()}`),
  baseUrl,
  mode = baseUrl ? "preview" : "local"
} = {}) {
  if (mode === "preview" && !baseUrl) {
    throw new Error("Preview semantic/SEO smoke requires QA_BASE_URL or --base-url; refusing to fall back to local.");
  }

  await mkdir(artifactDir, { recursive: true });
  let server;

  if (!baseUrl) {
    server = await startStaticServer(process.cwd());
    baseUrl = server.baseUrl;
  }

  const browser = await launchBrowser();

  try {
    const pages = [];
    const pageSpecs = [
      ...PUBLIC_PAGES,
      ...(mode === "preview" ? NOINDEX_PAGES.filter((page) => page.path !== "/holding.html") : NOINDEX_PAGES)
    ];

    for (const pageSpec of pageSpecs) {
      pages.push(await validatePage(browser, baseUrl, pageSpec, mode));
    }

    const summary = {
      artifactDir,
      baseUrl,
      mode,
      pages,
      robotsAndSitemap: await validateRobotsAndSitemap(baseUrl, mode)
    };

    await writeJson(path.join(artifactDir, "semantic-seo-smoke.json"), summary);

    return summary;
  } finally {
    await browser.close();

    if (server) {
      await server.stop();
    }
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  const args = parseArgs(process.argv.slice(2));

  runSemanticSeoSmoke({
    artifactDir: args["artifact-dir"],
    baseUrl: args["base-url"] || process.env.QA_BASE_URL || undefined,
    mode: args.mode || (args["base-url"] || process.env.QA_BASE_URL ? "preview" : "local")
  })
    .then((summary) => {
      console.log(JSON.stringify({
        summaryPath: path.join(summary.artifactDir, "semantic-seo-smoke.json"),
        checkedPages: summary.pages.length,
        mode: summary.mode
      }, null, 2));
    })
    .catch((error) => {
      console.error(error instanceof Error ? error.message : String(error));
      process.exitCode = 1;
    });
}
