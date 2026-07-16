import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

import { startStaticServer } from "./lib/static-server.mjs";

const PUBLIC_ROUTES = ["/", "/building-analyst", "/who-its-for", "/privacy", "/404.html", "/holding.html"];

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

function normalizeText(value) {
  return (value || "").replace(/\s+/g, " ").trim();
}

function includesAll(text, phrases) {
  const lowerText = text.toLowerCase();
  return phrases.every((phrase) => lowerText.includes(phrase.toLowerCase()));
}

function productionVerificationAllowed() {
  return process.env.ROBSON_ALLOW_PRODUCTION_QA === "true";
}

function resolvePreviewUrl(input) {
  if (!input) {
    throw new Error("Product/design acceptance preview smoke requires QA_BASE_URL or --base-url; refusing to fall back to production or local.");
  }

  let url;
  try {
    url = new URL(input);
  } catch {
    throw new Error(`Product/design acceptance preview smoke requires a valid absolute URL; received ${JSON.stringify(input)}.`);
  }

  if (url.protocol !== "https:") {
    throw new Error(`Product/design acceptance preview smoke requires an https URL; received ${url.href}.`);
  }

  const host = url.hostname.toLowerCase();
  if ((host === "robsonai.co.uk" || host === "www.robsonai.co.uk") && !productionVerificationAllowed()) {
    throw new Error("Product/design acceptance preview smoke was given the production host. Use a Netlify preview URL.");
  }

  return url.href.replace(/\/$/, "");
}

async function readRenderedText(page) {
  return page.evaluate(() => document.body.innerText || "");
}

async function readViewportText(page) {
  return page.evaluate(() => {
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
    const visibleText = [];

    while (walker.nextNode()) {
      const element = walker.currentNode;
      const rect = element.getBoundingClientRect();
      const style = window.getComputedStyle(element);
      const text = element.innerText?.trim();

      if (!text || style.visibility === "hidden" || style.display === "none") {
        continue;
      }

      if (rect.bottom <= 0 || rect.top >= viewportHeight || rect.right <= 0 || rect.left >= viewportWidth) {
        continue;
      }

      visibleText.push(text);
    }

    return visibleText.join(" ");
  });
}

async function readLinksAndControls(page) {
  return page.evaluate(() => {
    const links = [...document.querySelectorAll("a")].map((link) => ({
      text: link.textContent?.trim() || "",
      href: link.getAttribute("href") || "",
      analyticsId: link.getAttribute("data-analytics-id") || "",
      ctaLocation: link.getAttribute("data-cta-location") || ""
    }));
    const buttons = [...document.querySelectorAll("button")].map((button) => ({
      text: button.textContent?.trim() || "",
      analyticsId: button.getAttribute("data-analytics-id") || "",
      ariaLabel: button.getAttribute("aria-label") || "",
      issueId: button.getAttribute("data-issue-id") || ""
    }));
    const marketingVisuals = [...document.querySelectorAll("[data-building-analyst-marketing-visual]")].map((image) => ({
      alt: image.getAttribute("alt") || "",
      src: image.getAttribute("src") || "",
      srcset: image.getAttribute("srcset") || ""
    }));
    const darkBrandSurfaces = [...document.querySelectorAll('[data-brand-surface="dark"]')].map((surface) => {
      const shadow = surface.querySelector('[data-brand-contrast="rotated-blue-shadow"]');
      const shadowImage = shadow?.querySelector("img");

      return {
        hasShadow: Boolean(shadow),
        nestedImageCount: shadow?.querySelectorAll("img").length || 0,
        shadowSource: shadowImage?.getAttribute("src") || ""
      };
    });

    return { links, buttons, marketingVisuals, darkBrandSurfaces };
  });
}

async function collectRoute(browser, baseUrl, route) {
  const page = await browser.newPage({
    viewport: route === "/" ? { width: 1440, height: 900 } : { width: 1366, height: 900 }
  });
  const diagnostics = {
    consoleMessages: [],
    failedRequests: [],
    responses: []
  };

  page.on("console", (message) => {
    diagnostics.consoleMessages.push({ type: message.type(), text: message.text() });
  });
  page.on("pageerror", (error) => {
    diagnostics.consoleMessages.push({ type: "pageerror", text: error.message });
  });
  page.on("requestfailed", (request) => {
    diagnostics.failedRequests.push({ url: request.url(), error: request.failure()?.errorText || "" });
  });
  page.on("response", (response) => {
    if (!response.url().startsWith("blob:")) {
      diagnostics.responses.push({ url: response.url(), status: response.status() });
    }
  });

  try {
    const response = await page.goto(new URL(route, baseUrl).toString(), { waitUntil: "networkidle" });
    assert(response?.status() === 200, `${route} should return HTTP 200.`);

    return {
      route,
      title: await page.title(),
      text: normalizeText(await readRenderedText(page)),
      viewportText: normalizeText(await readViewportText(page)),
      controls: await readLinksAndControls(page),
      diagnostics
    };
  } finally {
    await page.close();
  }
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

    if (failure.error === "net::ERR_ABORTED" && (hadSuccessfulResponse || !isRequiredSiteAsset)) {
      return false;
    }

    return true;
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

function assertNoBlockingDiagnostics(routeResult) {
  const blockingConsoleMessages = getBlockingConsoleMessages(routeResult.diagnostics);
  const blockingFailedRequests = getBlockingFailedRequests(routeResult.diagnostics);

  assert(blockingConsoleMessages.length === 0, `${routeResult.route} should not emit blocking console/page errors: ${JSON.stringify(blockingConsoleMessages)}.`);
  assert(blockingFailedRequests.length === 0, `${routeResult.route} should not have blocking failed requests: ${JSON.stringify(blockingFailedRequests)}.`);
}

function assertFirstViewport(home) {
  assert(includesAll(home.viewportText, [
    "Robson AI Solutions",
    "Surveying-led software for building professionals",
    "Keep building evidence, professional review and reporting connected",
    "organisations that commission building advice",
    "Building Analyst is our flagship product in development",
    "Discuss a Building Analyst workflow",
    "View BuildScan proof",
    "Software supports the process. Qualified professionals make the decisions"
  ]), `Homepage first viewport should explain the professional proposition and next actions. Actual viewport text: ${home.viewportText}`);
}

function assertProofStatus(home, buildingAnalyst) {
  assert(includesAll(home.text, [
    "Building Analyst",
    "BuildScan",
    "Property operations",
    "In development",
    "Working product proof",
    "Roadmap exploration",
    "Professional expertise stays central",
    "without replacing qualified judgement",
    "Guided professional review",
    "Select an issue",
    "Roof drainage",
    "Service penetration",
    "Building Analyst supports the workflow. A qualified professional evaluates and approves the finding",
    "Real BuildScan application view",
    "No maps, floor plans or connected customer systems are claimed"
  ]), "Homepage should separate the three workstreams, label maturity and use real BuildScan proof without implying an integration.");

  assert(includesAll(buildingAnalyst.text, [
    "Flagship product — in development",
    "not a finished app screenshot or launch promise",
    "does not claim App Store availability, autonomous diagnosis or a finished user interface",
    "professional remains responsible",
    "Product visuals",
    "current Building Analyst screens and product behaviour",
    "without presenting AI as autonomous diagnosis or final authority"
  ]), "Building Analyst should label maturity, example status and judgement boundaries.");

  assert(buildingAnalyst.controls.marketingVisuals.length === 3, `Building Analyst should show exactly three marketing visuals; actual: ${buildingAnalyst.controls.marketingVisuals.length}.`);
  assert(includesAll(buildingAnalyst.controls.marketingVisuals.map((visual) => visual.alt).join(" "), ["Riverside Library"]), "Building Analyst marketing visual descriptions should use the approved Riverside Library example name.");
  buildingAnalyst.controls.marketingVisuals.forEach((visual) => {
    assert(visual.alt.length > 30, `Building Analyst marketing visual should have useful alt text: ${JSON.stringify(visual)}.`);
    assert(visual.src.includes("-840.webp"), `Building Analyst marketing visual should use the compact default source: ${JSON.stringify(visual)}.`);
    assert(visual.srcset.includes("-1600.webp 1600w"), `Building Analyst marketing visual should expose a high-resolution source: ${JSON.stringify(visual)}.`);
  });
  assert(buildingAnalyst.controls.darkBrandSurfaces.length === 2, `Building Analyst should identify both dark marketing compositions as protected brand surfaces; actual: ${buildingAnalyst.controls.darkBrandSurfaces.length}.`);
  buildingAnalyst.controls.darkBrandSurfaces.forEach((surface) => {
    assert(surface.hasShadow, `Every dark marketing composition should use Wayne's approved rotated blue shadow: ${JSON.stringify(surface)}.`);
    assert(surface.nestedImageCount === 1, `Each rotated blue shadow treatment must use exactly one composite icon asset: ${JSON.stringify(surface)}.`);
    assert(surface.shadowSource.includes("robson-ai-icon-v3-rotated-blue-shadow.webp"), `Brand contrast treatments must use the approved Version 3 shadow asset: ${JSON.stringify(surface)}.`);
  });
}

function assertExplorerCorrespondence(home) {
  const issueButtons = home.controls.buttons.filter((button) => button.analyticsId.startsWith("building-analyst-issue-list-"));
  const markerButtons = home.controls.buttons.filter((button) => button.analyticsId.startsWith("building-analyst-issue-marker-"));
  const expected = [
    ["roof-drainage", "Issue 1: Roof drainage"],
    ["masonry", "Issue 2: Masonry"],
    ["glazing-sealant", "Issue 3: Glazing and sealant"],
    ["entrance-threshold", "Issue 4: Entrance threshold"],
    ["cladding-joint", "Issue 5: Cladding joint"],
    ["service-penetration", "Issue 6: Service penetration"]
  ];

  assert(issueButtons.length === 6, `Building Analyst explorer should have exactly six numbered issue-list controls; actual: ${issueButtons.length}.`);
  assert(markerButtons.length === 6, `Building Analyst explorer should have exactly six matching image markers; actual: ${markerButtons.length}.`);
  expected.forEach(([issueId, label], index) => {
    assert(issueButtons[index]?.issueId === issueId && issueButtons[index]?.ariaLabel === label, `Issue list item ${index + 1} should be ${label}; actual: ${JSON.stringify(issueButtons[index])}.`);
    assert(markerButtons[index]?.issueId === issueId && markerButtons[index]?.ariaLabel === label, `Image marker ${index + 1} should match ${label}; actual: ${JSON.stringify(markerButtons[index])}.`);
  });
}

function assertReleaseStageClaims(allText) {
  const requiredCaution = [
    "in development",
    "roadmap exploration",
    "opt-in viewer",
    "no integration between them is implied",
    "no current product or live system integration",
    "qualified professionals make the decisions",
    "no contact form"
  ];

  requiredCaution.forEach((phrase) => {
    assert(allText.toLowerCase().includes(phrase), `Public copy should include cautious release-stage or privacy boundary phrase: ${phrase}.`);
  });

  const forbiddenClaims = [
    "autonomous diagnosis platform",
    "replaces professional judgement",
    "live council integration",
    "live tenant integration",
    "live microsoft integration",
    "app store now available",
    "procurement-ready and deployed",
    "finished enterprise suite"
  ];

  forbiddenClaims.forEach((phrase) => {
    assert(!allText.toLowerCase().includes(phrase), `Public copy should not make unsupported claim: ${phrase}.`);
  });
}

function assertAudiencePaths(home, who) {
  const combinedLinks = [...home.controls.links, ...who.controls.links];
  const linkText = combinedLinks.map((link) => `${link.text} ${link.href}`).join(" ");

  assert(includesAll(linkText, [
    "Explore Building Analyst",
    "View the interactive proof",
    "Discuss a Building Analyst workflow"
  ]), "Homepage/Who It Fits should provide one-click paths for Building Analyst, real BuildScan proof and workflow conversations.");
}

function assertCtaHierarchy(home, buildingAnalyst, who, privacy, notFound, holding) {
  const routes = [home, buildingAnalyst, who, privacy, notFound, holding].filter(Boolean);
  const allLinks = routes.flatMap((route) => route.controls.links.map((link) => ({ ...link, route: route.route })));
  const allButtons = routes.flatMap((route) => route.controls.buttons.map((button) => ({ ...button, route: route.route })));

  assert(allLinks.some((link) => link.href.startsWith("mailto:hello@robsonai.co.uk")), "Public routes should include an email-first contact route.");
  assert(allButtons.some((button) => /copy email/i.test(button.text)), "Public routes should include a copy-email fallback.");
  assert(allLinks.some((link) => /privacy/i.test(link.text) || link.href === "/privacy"), "Public routes should expose the privacy notice.");

  routes.map((result) => result.route).forEach((route) => {
    const routeLinks = allLinks.filter((link) => link.route === route);
    const hasContactPath = routeLinks.some((link) => link.href.includes("#contact") || link.href.startsWith("mailto:hello@robsonai.co.uk"));
    assert(hasContactPath, `${route} should not dead-end; it needs a contact path.`);
  });

  const buildingAnalystSubjects = allLinks
    .filter((link) => link.href.startsWith("mailto:hello@robsonai.co.uk"))
    .map((link) => decodeURIComponent(link.href).toLowerCase());
  assert(buildingAnalystSubjects.some((href) => href.includes("building analyst workflow")), "Contact routes should use the single Building Analyst conversion subject.");
}

function assertTrustProof(home, privacy, who) {
  const combined = `${home.text} ${privacy.text} ${who.text}`;
  assert(includesAll(combined, [
    "surveying practice",
    "professionals make the decisions",
    "qualified professionals make the decisions",
    "no integration between them is implied",
    "early-stage",
    "analytics is currently inactive",
    "No contact form is used",
    "real BuildScan application view"
  ]), "Public copy should expose professional context, judgement boundaries, maturity boundaries and privacy posture before contact.");
}

function assertMotionAndInteraction(stylesText, home) {
  assert(stylesText.includes("prefers-reduced-motion"), "Stylesheet should include reduced-motion support.");
  assert(includesAll(home.text, ["opt-in viewer", "static image is a real BuildScan application view", "Load 10.77 MB interactive model"]), "BuildScan interactive proof should remain opt-in with real-product static fallback language and a disclosed download size.");
}

async function writeJson(filePath, value) {
  await writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

export async function runProductDesignAcceptanceSmoke({
  artifactDir = path.resolve("output/product-design-acceptance", `smoke-${timestampLabel()}`),
  baseUrl,
  mode = "local"
} = {}) {
  const server = mode === "local" ? await startStaticServer(process.cwd()) : null;
  const resolvedBaseUrl = mode === "local" ? server.baseUrl : resolvePreviewUrl(baseUrl);
  const browser = await chromium.launch({ channel: "chrome", headless: true });

  try {
    const results = {};
    const checkedRoutes = mode === "preview" ? PUBLIC_ROUTES.filter((route) => route !== "/holding.html") : PUBLIC_ROUTES;
    for (const route of checkedRoutes) {
      results[route] = await collectRoute(browser, resolvedBaseUrl, route);
      assertNoBlockingDiagnostics(results[route]);
    }

    const stylesText = await readFile(path.resolve("styles.css"), "utf8");
    const allText = Object.values(results).map((result) => result.text).join(" ");

    assertFirstViewport(results["/"]);
    assertProofStatus(results["/"], results["/building-analyst"]);
    assertExplorerCorrespondence(results["/"]);
    assertReleaseStageClaims(allText);
    assertAudiencePaths(results["/"], results["/who-its-for"]);
    assertCtaHierarchy(
      results["/"],
      results["/building-analyst"],
      results["/who-its-for"],
      results["/privacy"],
      results["/404.html"],
      results["/holding.html"]
    );
    assertTrustProof(results["/"], results["/privacy"], results["/who-its-for"]);
    assertMotionAndInteraction(stylesText, results["/"]);

    await mkdir(artifactDir, { recursive: true });
    const summary = {
      status: "pass",
      mode,
      baseUrl: resolvedBaseUrl,
      checkedRoutes,
      acceptanceChecks: [
        "first viewport",
        "proof status",
        "one-to-one explorer issue correspondence",
        "release-stage claims",
        "audience paths",
        "CTA hierarchy",
        "trust proof",
        "motion and interaction"
      ],
      caveats: [
        "Interactive BuildScan GLB remains opt-in and must keep static fallback language.",
        "Deployed preview validation is still required before production.",
        "This smoke checks rendered copy/structure; it complements, not replaces, visual screenshot review."
      ],
      routes: Object.fromEntries(Object.entries(results).map(([route, result]) => [
        route,
        {
          title: result.title,
          linkCount: result.controls.links.length,
          buttonCount: result.controls.buttons.length,
          textLength: result.text.length
        }
      ]))
    };
    const summaryPath = path.join(artifactDir, "product-design-acceptance-smoke.json");
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

  runProductDesignAcceptanceSmoke({
    artifactDir: args["artifact-dir"],
    baseUrl: args["base-url"] || process.env.QA_BASE_URL,
    mode
  })
    .then((summary) => {
      console.log(JSON.stringify({
        status: summary.status,
        mode: summary.mode,
        baseUrl: summary.baseUrl,
        checkedRoutes: summary.checkedRoutes,
        summaryPath: summary.summaryPath
      }, null, 2));
    })
    .catch((error) => {
      console.error(error instanceof Error ? error.message : String(error));
      process.exitCode = 1;
    });
}
