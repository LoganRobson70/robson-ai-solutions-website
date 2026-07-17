import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

import { startStaticServer } from "./lib/static-server.mjs";

const ROUTES = [
  "/",
  "/building-analyst",
  "/who-its-for",
  "/privacy",
  "/404.html",
  "/holding.html",
  "/buildscan-viewer.html"
];

const VIEWPORTS = [
  { name: "small-mobile", width: 320, height: 760, isMobile: true },
  { name: "mobile", width: 390, height: 844, isMobile: true },
  { name: "tablet", width: 768, height: 1024, isMobile: true },
  { name: "small-desktop", width: 1024, height: 900, isMobile: false },
  { name: "reference-desktop", width: 1363, height: 936, isMobile: false },
  { name: "desktop", width: 1440, height: 1000, isMobile: false }
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

function productionVerificationAllowed() {
  return process.env.ROBSON_ALLOW_PRODUCTION_QA === "true";
}

function resolvePreviewUrl(input) {
  if (!input) {
    throw new Error("Responsive route preview smoke requires QA_BASE_URL or --base-url; refusing to fall back to production or local.");
  }

  let url;
  try {
    url = new URL(input);
  } catch {
    throw new Error(`Responsive route preview smoke requires a valid absolute URL; received ${JSON.stringify(input)}.`);
  }

  if (url.protocol !== "https:") {
    throw new Error(`Responsive route preview smoke requires an https URL; received ${url.href}.`);
  }

  const host = url.hostname.toLowerCase();
  if ((host === "robsonai.co.uk" || host === "www.robsonai.co.uk") && !productionVerificationAllowed()) {
    throw new Error("Responsive route preview smoke was given the production host. Use a Netlify preview URL.");
  }

  return url.href.replace(/\/$/, "");
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
  page.on("requestfailed", (request) => {
    failedRequests.push({
      url: request.url(),
      error: request.failure()?.errorText || ""
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

  return {
    consoleMessages,
    failedRequests,
    responses
  };
}

function getBlockingFailedRequests(route, diagnostics, routeState) {
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
    const isModelAbortAfterReady = (
      route === "/buildscan-viewer.html" &&
      routeState?.buildscanViewer?.ready &&
      hadSuccessfulGlbResponse &&
      failure.error === "net::ERR_ABORTED"
    );

    if (failure.error === "net::ERR_ABORTED" && (hadSuccessfulResponse || !isRequiredSiteAsset)) {
      return false;
    }

    return !isModelAbortAfterReady;
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

async function readResponsiveMetrics(page) {
  return page.evaluate(() => {
    const overflowX = document.documentElement.scrollWidth > window.innerWidth + 1;
    const visibleTextOverflows = [...document.querySelectorAll("a, button, h1, h2, h3, p, span, strong, li")]
      .filter((element) => {
        const style = window.getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        const text = element.textContent?.trim() || "";

        if (!text || style.visibility === "hidden" || style.display === "none" || rect.width < 2 || rect.height < 2) {
          return false;
        }

        return element.scrollWidth > element.clientWidth + 2 && style.whiteSpace === "nowrap";
      })
      .slice(0, 10)
      .map((element) => ({
        tag: element.tagName.toLowerCase(),
        text: element.textContent?.trim().slice(0, 100) || "",
        clientWidth: element.clientWidth,
        scrollWidth: element.scrollWidth
      }));

    const visibleControls = [...document.querySelectorAll("a, button")]
      .filter((element) => {
        const style = window.getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        const text = element.textContent?.trim() || element.getAttribute("aria-label") || "";

        if (!text || style.visibility === "hidden" || style.display === "none" || rect.width < 2 || rect.height < 2) {
          return false;
        }

        return rect.bottom > 0 && rect.top < window.innerHeight && rect.right > 0 && rect.left < window.innerWidth;
      })
      .map((element) => {
        const rect = element.getBoundingClientRect();
        return {
          tag: element.tagName.toLowerCase(),
          text: (element.textContent?.trim() || element.getAttribute("aria-label") || "").slice(0, 80),
          width: Math.round(rect.width),
          height: Math.round(rect.height),
          href: element.getAttribute("href") || ""
        };
      });

    const smallPrimaryControls = visibleControls.filter((control) => {
      const isPrimary = /btn|nav|contact|conversation|email|copy|privacy|workflow|model|home/i.test(`${control.text} ${control.href}`);
      return isPrimary && (control.width < 24 || control.height < 24);
    });

    return {
      overflowX,
      scrollWidth: document.documentElement.scrollWidth,
      viewportWidth: window.innerWidth,
      visibleTextOverflows,
      visibleControlCount: visibleControls.length,
      smallPrimaryControls
    };
  });
}

async function assertRouteSpecific(page, route) {
  const bodyText = await page.locator("body").innerText();

  if (route === "/") {
    await page.locator("h1").first().waitFor({ state: "visible", timeout: 10000 });
    assert(/Keep building evidence, professional review and reporting connected/i.test(bodyText), "Homepage should keep the approved connected-evidence proposition visible.");
    assert(/surveying practices, in-house estates teams and organisations that commission building advice/i.test(bodyText), "Homepage should name professional and buyer audiences.");
    assert(/Discuss a Building Analyst workflow/i.test(bodyText), "Homepage should keep the primary Building Analyst CTA.");
    assert(/View BuildScan development proof/i.test(bodyText), "Homepage should keep the secondary BuildScan development-proof CTA.");
    assert(/Guided professional review/i.test(bodyText), "Homepage should keep the detailed Building Analyst explorer.");
    assert(/BuildScan/i.test(bodyText), "Homepage should expose the BuildScan workstream.");
    assert(/Property operations/i.test(bodyText), "Homepage should expose property operations.");
    assert(/Professional expertise stays central/i.test(bodyText), "Homepage should keep the professional judgement boundary visible.");
  }

  if (route === "/building-analyst") {
    assert(/Keep building evidence/i.test(bodyText) && /ready for professional review/i.test(bodyText), "Building Analyst page should keep the evidence-review proposition.");
    assert(/Discuss a Building Analyst workflow/i.test(bodyText), "Building Analyst page should keep its primary contact CTA.");
  }

  if (route === "/who-its-for") {
    assert(/Organisations commissioning building advice/i.test(bodyText), "Who It Fits page should include commissioning organisations.");
    assert(/In-house property and estates teams/i.test(bodyText), "Who It Fits page should include in-house professional teams.");
    assert(/Surveying practices and consultants/i.test(bodyText), "Who It Fits page should include professional practices.");
    assert(/Discuss a Building Analyst workflow/i.test(bodyText), "Who It Fits page should keep the primary contact CTA.");
  }

  if (route === "/privacy") {
    assert(/optional analytics/i.test(bodyText), "Privacy page should keep optional analytics wording.");
    assert(/Back to contact/i.test(bodyText), "Privacy page should route visitors back to contact.");
  }

  if (route === "/404.html") {
    assert(/This page is not available/i.test(bodyText), "404 page should keep recovery heading.");
    assert(/Discuss a Building Analyst workflow/i.test(bodyText), "404 page should include contact recovery.");
  }

  if (route === "/holding.html") {
    assert(/website is live/i.test(bodyText), "Holding fallback should say the public website is live.");
    assert(/Visit the live website/i.test(bodyText), "Holding fallback should route to the live site.");
  }

  if (route === "/buildscan-viewer.html") {
    const title = await page.title();
    assert(/BuildScan interactive model viewer/i.test(title), "BuildScan viewer should keep its document title.");
    await page.locator('[aria-label="BuildScan model viewer controls"]').waitFor({ state: "visible", timeout: 10000 });
    await page
      .waitForFunction(() => window.__buildscanViewerReady === true || window.__buildscanViewerError, null, { timeout: 30000 })
      .catch(() => undefined);
    const statusText = await page.locator("#viewerStatus").innerText();
    assert(/Loading optimised model|Drag to orbit|Unable to load|Could not load/i.test(statusText), "BuildScan viewer should expose status text.");
  }
}

async function readRouteState(page, route) {
  if (route !== "/buildscan-viewer.html") {
    return {};
  }

  return page.evaluate(() => ({
    buildscanViewer: {
      ready: window.__buildscanViewerReady === true,
      error: window.__buildscanViewerError || null,
      statusText: document.querySelector("#viewerStatus")?.textContent || ""
    }
  }));
}

async function inspectRoute(browser, baseUrl, route, viewport) {
  const context = await browser.newContext({
    viewport: {
      width: viewport.width,
      height: viewport.height
    },
    isMobile: viewport.isMobile
  });
  const page = await context.newPage();
  const diagnostics = captureDiagnostics(page);

  try {
    const response = await page.goto(new URL(route, baseUrl).toString(), { waitUntil: "networkidle" });
    assert(response?.status() === 200, `${route} should return HTTP 200 at ${viewport.name}.`);
    await assertRouteSpecific(page, route);

    const hasSharedMobileMenu = !["/holding.html", "/buildscan-viewer.html"].includes(route);

    if (hasSharedMobileMenu && viewport.width <= 1040) {
      await page.locator("[data-nav-toggle]").click();
      const mobileCta = page.locator(".studio-nav-mobile-cta");
      await mobileCta.waitFor({ state: "visible" });
      const mobileCtaBox = await mobileCta.boundingBox();
      assert(/Discuss a Building Analyst workflow/i.test(await mobileCta.innerText()), "Mobile menu should expose the primary Building Analyst CTA.");
      assert((mobileCtaBox?.height || 0) >= 44, `Mobile menu CTA should be at least 44px high; actual ${mobileCtaBox?.height || 0}.`);
      await page.locator("[data-product-nav-toggle]").click();
      await page.locator("[data-product-nav-menu]").waitFor({ state: "visible" });

      const mobileMenuLayout = await page.evaluate(() => {
        const nav = document.querySelector(".studio-nav");
        const controls = [...(nav?.querySelectorAll("a, button") || [])].filter((control) => {
          const rect = control.getBoundingClientRect();
          return rect.width > 0 && rect.height > 0;
        });
        const navRect = nav?.getBoundingClientRect();

        return {
          columnCount: getComputedStyle(nav).gridTemplateColumns.split(" ").filter(Boolean).length,
          controlCount: controls.length,
          productLinkCount: nav?.querySelectorAll("[data-product-nav-menu] a").length || 0,
          controls: controls.map((control) => {
            const rect = control.getBoundingClientRect();
            return {
              height: rect.height,
              left: rect.left,
              right: rect.right,
              top: rect.top,
              width: rect.width
            };
          }),
          navLeft: navRect?.left || 0,
          navRight: navRect?.right || 0
        };
      });
      assert(mobileMenuLayout.columnCount === 1, `Mobile menu should use one column: ${JSON.stringify(mobileMenuLayout)}.`);
      assert(mobileMenuLayout.controlCount === 9 && mobileMenuLayout.productLinkCount === 4, `Mobile menu should expose the Products parent, its four destinations, two peer destinations and one CTA: ${JSON.stringify(mobileMenuLayout)}.`);
      assert(mobileMenuLayout.controls.every((control) => control.height >= 44), `Every mobile menu control should be at least 44px high: ${JSON.stringify(mobileMenuLayout)}.`);
      assert(mobileMenuLayout.controls.every((control) => control.left >= mobileMenuLayout.navLeft && control.right <= mobileMenuLayout.navRight), `Mobile menu controls should stay inside the menu: ${JSON.stringify(mobileMenuLayout)}.`);
      await page.locator("[data-nav-toggle]").click();
    }

    if (route === "/" && viewport.width <= 1040) {
      const explorerOrder = await page.evaluate(() => {
        const top = (selector) => document.querySelector(selector)?.getBoundingClientRect().top ?? -1;
        return {
          selector: top(".studio-explorer-issue-nav"),
          image: top(".studio-explorer-figure"),
          result: top(".studio-explorer-panel")
        };
      });
      assert(explorerOrder.selector < explorerOrder.image && explorerOrder.image < explorerOrder.result, `Mobile Building Analyst explorer should read selector, image, result: ${JSON.stringify(explorerOrder)}.`);
    }

    const routeState = await readRouteState(page, route);
    const metrics = await readResponsiveMetrics(page);
    const blockingConsoleMessages = getBlockingConsoleMessages(diagnostics);
    const blockingFailedRequests = getBlockingFailedRequests(route, diagnostics, routeState);
    assert(!metrics.overflowX, `${route} should not have horizontal overflow at ${viewport.name}: ${metrics.scrollWidth} > ${metrics.viewportWidth}.`);
    assert(metrics.visibleTextOverflows.length === 0, `${route} should not have obvious nowrap text overflow at ${viewport.name}: ${JSON.stringify(metrics.visibleTextOverflows)}.`);
    assert(metrics.smallPrimaryControls.length === 0, `${route} should not have primary controls smaller than 24px at ${viewport.name}: ${JSON.stringify(metrics.smallPrimaryControls)}.`);
    assert(blockingConsoleMessages.length === 0, `${route} should not emit blocking console/page errors at ${viewport.name}: ${JSON.stringify(blockingConsoleMessages)}.`);
    assert(blockingFailedRequests.length === 0, `${route} should not have failed requests at ${viewport.name}: ${JSON.stringify(blockingFailedRequests)}.`);

    return {
      route,
      viewport: viewport.name,
      viewportWidth: viewport.width,
      viewportHeight: viewport.height,
      visibleControlCount: metrics.visibleControlCount,
      scrollWidth: metrics.scrollWidth,
      status: "pass"
    };
  } finally {
    await context.close();
  }
}

async function writeJson(filePath, value) {
  await writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

export async function runResponsiveRouteSmoke({
  artifactDir = path.resolve("output/responsive-route", `smoke-${timestampLabel()}`),
  baseUrl,
  mode = "local"
} = {}) {
  const server = mode === "local" ? await startStaticServer(process.cwd()) : null;
  const resolvedBaseUrl = mode === "local" ? server.baseUrl : resolvePreviewUrl(baseUrl);
  const browser = await chromium.launch({
    channel: "chrome",
    headless: true
  });

  try {
    const checks = [];
    const checkedRoutes = mode === "preview" ? ROUTES.filter((route) => route !== "/holding.html") : ROUTES;

    for (const route of checkedRoutes) {
      for (const viewport of VIEWPORTS) {
        checks.push(await inspectRoute(browser, resolvedBaseUrl, route, viewport));
      }
    }

    await mkdir(artifactDir, { recursive: true });
    const summary = {
      status: "pass",
      mode,
      baseUrl: resolvedBaseUrl,
      checkedRoutes,
      checkedViewports: VIEWPORTS.map(({ name, width, height }) => ({ name, width, height })),
      checkCount: checks.length,
      checks
    };
    const summaryPath = path.join(artifactDir, "responsive-route-smoke.json");
    await writeJson(summaryPath, summary);

    return {
      ...summary,
      summaryPath
    };
  } finally {
    await browser.close();
    if (server) {
      await server.stop();
    }
  }
}

const executedDirectly = process.argv[1] && import.meta.url === new URL(`file://${process.argv[1]}`).href;

if (executedDirectly) {
  const args = parseArgs(process.argv.slice(2));
  const mode = args.mode || "local";

  runResponsiveRouteSmoke({
    artifactDir: args["artifact-dir"],
    baseUrl: args["base-url"] || process.env.QA_BASE_URL,
    mode
  })
    .then((summary) => {
      console.log(JSON.stringify({
        status: summary.status,
        mode: summary.mode,
        baseUrl: summary.baseUrl,
        checkCount: summary.checkCount,
        summaryPath: summary.summaryPath
      }, null, 2));
    })
    .catch((error) => {
      console.error(error instanceof Error ? error.message : String(error));
      process.exitCode = 1;
    });
}
