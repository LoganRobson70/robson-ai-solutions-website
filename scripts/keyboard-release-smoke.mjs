import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

import { startStaticServer } from "./lib/static-server.mjs";

const __filename = fileURLToPath(import.meta.url);

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
    headless: true,
    args: ["--use-angle=metal", "--enable-gpu", "--ignore-gpu-blocklist"]
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

async function installClipboardStub(page) {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: {
        writeText: async () => undefined
      }
    });
  });
}

async function setConsentDenied(context) {
  await context.addInitScript(() => {
    window.localStorage.setItem("robsonai.analytics-consent", "denied");
  });
}

async function getActiveElementState(page) {
  return page.evaluate(() => {
    const element = document.activeElement;

    if (!element) {
      return null;
    }

    return {
      ariaSelected: element.getAttribute("aria-selected"),
      dataPanelTrigger: element.getAttribute("data-panel-trigger"),
      href: element.getAttribute("href"),
      id: element.id || "",
      role: element.getAttribute("role"),
      tagName: element.tagName,
      text: element.textContent?.trim().replace(/\s+/g, " ").slice(0, 120) || ""
    };
  });
}

async function activateFocusedElement(page, key = "Enter") {
  await page.keyboard.press(key);
  await page.waitForTimeout(120);
}

function filterBlockingFailures(diagnostics) {
  return diagnostics.failedRequests.filter((failure) => {
    let pathname = "";
    try {
      pathname = new URL(failure.url).pathname;
    } catch {
      pathname = failure.url;
    }

    const isRequiredSiteAsset =
      pathname === "/" ||
      pathname === "/index.html" ||
      pathname === "/building-analyst" ||
      pathname === "/buildscan-viewer.html" ||
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

function filterBlockingConsoleMessages(diagnostics) {
  return diagnostics.consoleMessages.filter((message) => {
    if (message.type === "info" && message.text.startsWith("Slow network is detected.")) {
      return false;
    }

    return true;
  });
}

async function runHomepageKeyboardJourney(browser, baseUrl, artifactDir) {
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await context.newPage();
  await installClipboardStub(page);
  const diagnostics = captureDiagnostics(page);

  try {
    const response = await page.goto(new URL("/", baseUrl).toString(), { waitUntil: "networkidle" });
    assert(response?.status() === 200, "Homepage keyboard journey should load HTTP 200.");

    const initialCurrentNavCount = await page.locator(".site-nav a[aria-current]").count();
    assert(initialCurrentNavCount === 0, `Homepage hero should not mark a section link as current; actual count: ${initialCurrentNavCount}.`);

    await page.keyboard.press("Tab");
    const skipFocus = await getActiveElementState(page);
    assert(skipFocus?.href === "#main-content", `First Tab should reach the skip link: ${JSON.stringify(skipFocus)}.`);
    await activateFocusedElement(page);
    await page.waitForFunction(() => window.location.hash === "#main-content");

    const bannerVisible = await page.locator("[data-consent-banner]").evaluate((banner) => !banner.hidden);
    assert(!bannerVisible, "Consent banner should stay hidden on first load while GA4 measurement is unset.");

    const productToggle = page.locator("[data-product-nav-toggle]");
    await productToggle.focus();
    await activateFocusedElement(page);
    await page.locator("[data-product-nav-menu]").waitFor({ state: "visible" });
    const productMenuState = {
      expanded: await productToggle.getAttribute("aria-expanded"),
      linkCount: await page.locator("[data-product-nav-menu] a").count(),
      buildingAnalystLabel: (await page.locator('[data-analytics-id="nav-building-analyst"] strong').textContent())?.trim() || ""
    };
    assert(productMenuState.expanded === "true" && productMenuState.linkCount === 4 && productMenuState.buildingAnalystLabel === "Building Analyst", `Products disclosure should expose the four product destinations: ${JSON.stringify(productMenuState)}.`);
    await page.keyboard.press("Escape");
    await page.locator("[data-product-nav-menu]").waitFor({ state: "hidden" });
    assert(await productToggle.getAttribute("aria-expanded") === "false", "Escape should close the Products disclosure.");

    await page.locator('[data-analytics-id="nav-products"]').focus();
    const productNavFocus = await getActiveElementState(page);
    assert(productNavFocus?.href === "/#products" && /Product/i.test(productNavFocus?.text || ""), `Product nav link should be keyboard focusable: ${JSON.stringify(productNavFocus)}.`);
    await activateFocusedElement(page);
    await page.waitForFunction(() => window.location.hash === "#products").catch(() => {
      throw new Error("Products parent link should navigate to the product overview section.");
    });
    await page.waitForFunction(() => document.querySelector('[data-product-nav]')?.getAttribute("data-current-product") === "true").catch(async () => {
      const state = await page.evaluate(() => ({
        current: [...document.querySelectorAll(".site-nav a[aria-current]")].map((link) => ({ id: link.dataset.analyticsId, value: link.getAttribute("aria-current") })),
        hash: window.location.hash,
        productsTop: document.querySelector("#products")?.getBoundingClientRect().top
      }));
      throw new Error(`Products parent link should become the current homepage section: ${JSON.stringify(state)}.`);
    });
    assert(await page.locator("[data-product-nav]").getAttribute("data-current-product") === "true", "Products should be visibly current when a product overview or product child section is active.");

    await page.locator('[data-analytics-id="nav-about"]').focus();
    const aboutNavFocus = await getActiveElementState(page);
    assert(aboutNavFocus?.href === "/#about" && /About/i.test(aboutNavFocus?.text || ""), `About nav link should be keyboard focusable: ${JSON.stringify(aboutNavFocus)}.`);
    await activateFocusedElement(page);
    await page.waitForFunction(() => window.location.hash === "#about").catch(() => {
      throw new Error("About link should navigate to the About section.");
    });
    await page.waitForFunction(() => document.querySelector('[data-analytics-id="nav-about"]')?.getAttribute("aria-current") === "location").catch(() => {
      throw new Error("About link should become the current homepage section.");
    });
    assert(await page.locator('[data-analytics-id="nav-about"]').getAttribute("aria-current") === "location", "About should be the current homepage section after keyboard activation.");
    assert(await page.locator('[data-analytics-id="nav-products"]').getAttribute("aria-current") === null, "Products should not remain current after About is activated.");
    assert(await page.locator("[data-product-nav]").getAttribute("data-current-product") === null, "Products parent should not remain visually current after About is activated.");

    await page.locator('[data-analytics-id="hero-discuss-building-analyst"]').focus();
    const explorerCtaFocus = await getActiveElementState(page);
    assert(explorerCtaFocus?.href?.startsWith("mailto:hello@robsonai.co.uk") && /Discuss a Building Analyst workflow/i.test(explorerCtaFocus?.text || ""), `Hero Building Analyst CTA should be keyboard focusable: ${JSON.stringify(explorerCtaFocus)}.`);
    await page.locator("#building-analyst-explorer").scrollIntoViewIfNeeded();

    const explorerCounts = {
      list: await page.locator("[data-explorer-list] .studio-explorer-issue-button").count(),
      markers: await page.locator("[data-explorer-markers] .studio-explorer-marker").count()
    };
    assert(explorerCounts.list === 6 && explorerCounts.markers === 6, `Explorer should expose exactly six list controls and six matching markers: ${JSON.stringify(explorerCounts)}.`);

    const firstIssue = page.locator('[data-analytics-id="building-analyst-issue-list-roof-drainage"]');
    await firstIssue.focus();
    await page.keyboard.press("ArrowDown");
    await page.waitForFunction(() => document.querySelector('[data-analytics-id="building-analyst-issue-list-masonry"]')?.getAttribute("aria-pressed") === "true");
    const masonryState = await page.evaluate(() => ({
      listPressed: document.querySelector('[data-analytics-id="building-analyst-issue-list-masonry"]')?.getAttribute("aria-pressed"),
      markerPressed: document.querySelector('[data-analytics-id="building-analyst-issue-marker-masonry"]')?.getAttribute("aria-pressed"),
      panelTitle: document.querySelector("[data-explorer-title]")?.textContent?.trim() || ""
    }));
    assert(masonryState.listPressed === "true" && masonryState.markerPressed === "true" && masonryState.panelTitle === "Masonry", `Issue 2 should synchronize list, marker and panel: ${JSON.stringify(masonryState)}.`);

    const serviceMarker = page.locator('[data-analytics-id="building-analyst-issue-marker-service-penetration"]');
    await serviceMarker.focus();
    await activateFocusedElement(page);
    const serviceState = await page.evaluate(() => ({
      listPressed: document.querySelector('[data-analytics-id="building-analyst-issue-list-service-penetration"]')?.getAttribute("aria-pressed"),
      markerPressed: document.querySelector('[data-analytics-id="building-analyst-issue-marker-service-penetration"]')?.getAttribute("aria-pressed"),
      panelTitle: document.querySelector("[data-explorer-title]")?.textContent?.trim() || ""
    }));
    assert(serviceState.listPressed === "true" && serviceState.markerPressed === "true" && serviceState.panelTitle === "Service penetration", `Issue 6 should synchronize list, marker and panel: ${JSON.stringify(serviceState)}.`);

    await page.locator("#building-analyst-explorer").screenshot({
      path: path.join(artifactDir, "building-analyst-explorer-keyboard.png")
    });

    await page.locator('[data-analytics-id="contact-email"]').focus();
    const aboutCtaFocus = await getActiveElementState(page);
    assert(aboutCtaFocus?.href?.startsWith("mailto:hello@robsonai.co.uk") && /Discuss a Building Analyst workflow/i.test(aboutCtaFocus?.text || ""), `Building Analyst contact CTA should be keyboard focusable: ${JSON.stringify(aboutCtaFocus)}.`);
    await page.locator("#contact").scrollIntoViewIfNeeded();

    await page.locator("[data-copy-email]").first().focus();
    const copyFocus = await getActiveElementState(page);
    assert(/Copy Email Address/i.test(copyFocus?.text || ""), `Copy email button should be keyboard focusable: ${JSON.stringify(copyFocus)}.`);
    await activateFocusedElement(page);
    const copyFeedback = (await page.locator("[data-copy-feedback]").first().textContent())?.trim() || "";
    assert(copyFeedback === "Email address copied.", `Keyboard copy-email action should report success; actual: ${copyFeedback}`);

    await page.locator("[data-buildscan-load-model]").focus();
    const buildScanFocus = await getActiveElementState(page);
    assert(/Load 10.77 MB interactive model/i.test(buildScanFocus?.text || ""), `BuildScan load button should be keyboard focusable: ${JSON.stringify(buildScanFocus)}.`);
    await activateFocusedElement(page);
    await page
      .waitForFunction(() => {
        const frame = document.querySelector("[data-buildscan-interactive] iframe");
        return frame?.contentWindow?.__buildscanViewerReady === true || frame?.contentWindow?.__buildscanViewerError;
      }, null, { timeout: 30000 })
      .catch(() => undefined);
    await page.waitForTimeout(500);

    const buildScanState = await page.evaluate(() => {
      const viewer = document.querySelector("[data-buildscan-interactive]");
      const frame = viewer?.querySelector("iframe");

      return {
        buttonText: viewer?.querySelector("[data-buildscan-load-model]")?.textContent?.trim() || "",
        childReady: frame?.contentWindow?.__buildscanViewerReady === true,
        loaded: viewer?.classList.contains("is-loaded") || false,
        statusText: viewer?.querySelector("[data-buildscan-load-status]")?.textContent?.trim() || ""
      };
    });
    assert(buildScanState.loaded && buildScanState.childReady, `Keyboard BuildScan load should reach model-ready state: ${JSON.stringify(buildScanState)}.`);

    await page.screenshot({
      path: path.join(artifactDir, "homepage-keyboard-journey.png"),
      fullPage: false
    });

    return {
      aboutCtaFocus,
      aboutNavFocus,
      bannerVisible,
      buildScanState,
      copyFeedback,
      diagnostics,
      explorerCounts,
      explorerCtaFocus,
      masonryState,
      productMenuState,
      productNavFocus,
      serviceState,
      skipFocus
    };
  } finally {
    await context.close();
  }
}

async function runBuildingAnalystKeyboardJourney(browser, baseUrl, artifactDir) {
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  await setConsentDenied(context);
  const page = await context.newPage();
  await installClipboardStub(page);
  const diagnostics = captureDiagnostics(page);

  try {
    const response = await page.goto(new URL("/building-analyst", baseUrl).toString(), { waitUntil: "networkidle" });
    assert(response?.status() === 200, "Building Analyst keyboard journey should load HTTP 200.");

    await page.locator("[data-product-nav-toggle]").focus();
    await activateFocusedElement(page);
    await page.locator("[data-product-nav-menu]").waitFor({ state: "visible" });
    await page.locator('[data-analytics-id="nav-building-analyst"]').focus();
    const buildingAnalystNavFocus = await getActiveElementState(page);
    assert(buildingAnalystNavFocus?.href === "/building-analyst" && /Building Analyst/i.test(buildingAnalystNavFocus?.text || ""), `Building Analyst nav link should be keyboard focusable: ${JSON.stringify(buildingAnalystNavFocus)}.`);
    assert(await page.locator('[data-analytics-id="nav-building-analyst"]').getAttribute("aria-current") === "page", "Building Analyst should be the current page in the primary navigation.");
    await activateFocusedElement(page);
    await page.waitForFunction(() => window.location.pathname === "/building-analyst" && window.location.hash === "");

    await page.locator('[data-analytics-id="building-hero-see-workflow"]').focus();
    const seeWorkflowFocus = await getActiveElementState(page);
    assert(seeWorkflowFocus?.href === "#workflow" && /See how it works/i.test(seeWorkflowFocus?.text || ""), `Building Analyst local workflow link should be keyboard focusable: ${JSON.stringify(seeWorkflowFocus)}.`);
    await activateFocusedElement(page);
    await page.waitForFunction(() => window.location.hash === "#workflow");

    await page.locator('[data-analytics-id="nav-building-analyst-workflow"]').focus();
    const contactNavFocus = await getActiveElementState(page);
    assert(contactNavFocus?.href?.startsWith("mailto:hello@robsonai.co.uk") && /Discuss a Building Analyst workflow/i.test(contactNavFocus?.text || ""), `Building Analyst workflow CTA should be keyboard focusable: ${JSON.stringify(contactNavFocus)}.`);
    await page.locator("#contact").scrollIntoViewIfNeeded();

    await page.locator("[data-copy-email]").first().focus();
    await activateFocusedElement(page);
    const copyFeedback = (await page.locator("[data-copy-feedback]").first().textContent())?.trim() || "";
    assert(copyFeedback === "Email address copied.", `Building Analyst copy-email keyboard action should report success; actual: ${copyFeedback}`);

    await page.screenshot({
      path: path.join(artifactDir, "building-analyst-keyboard-journey.png"),
      fullPage: false
    });

    return {
      contactNavFocus,
      copyFeedback,
      diagnostics,
      buildingAnalystNavFocus,
      seeWorkflowFocus
    };
  } finally {
    await context.close();
  }
}

function assertNoDiagnosticsFailures(summary) {
  const diagnostics = [
    summary.homepage.diagnostics,
    summary.buildingAnalyst.diagnostics
  ];
  const consoleMessages = diagnostics.flatMap(filterBlockingConsoleMessages);
  const failedRequests = diagnostics.flatMap(filterBlockingFailures);

  assert(failedRequests.length === 0, `Keyboard release smoke should have no blocking failed requests: ${JSON.stringify(failedRequests)}`);
  assert(consoleMessages.length === 0, `Keyboard release smoke should have no blocking console messages: ${JSON.stringify(consoleMessages)}`);
}

export async function runKeyboardReleaseSmoke({
  artifactDir = path.resolve("output/playwright", `keyboard-release-smoke-${timestampLabel()}`),
  baseUrl,
  mode = baseUrl ? "preview" : "local"
} = {}) {
  if (mode === "preview" && !baseUrl) {
    throw new Error("Preview keyboard release smoke requires QA_BASE_URL or --base-url; refusing to fall back to local.");
  }

  await mkdir(artifactDir, { recursive: true });
  let server;

  if (!baseUrl) {
    server = await startStaticServer(process.cwd());
    baseUrl = server.baseUrl;
  }

  const browser = await launchBrowser();

  try {
    const summary = {
      artifactDir,
      baseUrl,
      mode,
      homepage: await runHomepageKeyboardJourney(browser, baseUrl, artifactDir),
      buildingAnalyst: await runBuildingAnalystKeyboardJourney(browser, baseUrl, artifactDir)
    };

    assertNoDiagnosticsFailures(summary);
    await writeJson(path.join(artifactDir, "summary.json"), summary);

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

  runKeyboardReleaseSmoke({
    artifactDir: args["artifact-dir"],
    baseUrl: args["base-url"] || process.env.QA_BASE_URL || undefined,
    mode: args.mode || (args["base-url"] || process.env.QA_BASE_URL ? "preview" : "local")
  })
    .then((summary) => {
      console.log(JSON.stringify({
        artifactDir: summary.artifactDir,
        baseUrl: summary.baseUrl,
        mode: summary.mode,
        screenshots: [
          "homepage-keyboard-journey.png",
          "building-analyst-explorer-keyboard.png",
          "building-analyst-keyboard-journey.png"
        ]
      }, null, 2));
    })
    .catch((error) => {
      console.error(error instanceof Error ? error.message : String(error));
      process.exitCode = 1;
    });
}
