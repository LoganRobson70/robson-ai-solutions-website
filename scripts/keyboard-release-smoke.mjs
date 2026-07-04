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
    const hadSuccessfulGlbResponse = diagnostics.responses.some(
      (response) => response.url === failure.url && response.status === 200 && response.url.includes("buildscan-ludgershall-public.glb")
    );

    return !(hadSuccessfulGlbResponse && failure.error === "net::ERR_ABORTED");
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

    await page.keyboard.press("Tab");
    const skipFocus = await getActiveElementState(page);
    assert(skipFocus?.href === "#main-content", `First Tab should reach the skip link: ${JSON.stringify(skipFocus)}.`);
    await activateFocusedElement(page);
    await page.waitForFunction(() => window.location.hash === "#main-content");

    const bannerVisible = await page.locator("[data-consent-banner]").evaluate((banner) => !banner.hidden);
    assert(!bannerVisible, "Consent banner should stay hidden on first load while GA4 measurement is unset.");

    await page.locator('.zip-site-nav a[href="#product"]').focus();
    const productNavFocus = await getActiveElementState(page);
    assert(productNavFocus?.href === "#product" && /Product/i.test(productNavFocus?.text || ""), `Product nav link should be keyboard focusable: ${JSON.stringify(productNavFocus)}.`);
    await activateFocusedElement(page);
    await page.waitForFunction(() => window.location.hash === "#product");

    await page.locator('[data-analytics-id="hero-why-robson-ai"]').focus();
    const aboutCtaFocus = await getActiveElementState(page);
    assert(aboutCtaFocus?.href === "#about" && /Why Robson AI/i.test(aboutCtaFocus?.text || ""), `Hero About CTA should be keyboard focusable: ${JSON.stringify(aboutCtaFocus)}.`);
    await activateFocusedElement(page);
    await page.waitForFunction(() => window.location.hash === "#about");

    await page.locator("[data-copy-email]").first().focus();
    const copyFocus = await getActiveElementState(page);
    assert(/Copy Email Address/i.test(copyFocus?.text || ""), `Copy email button should be keyboard focusable: ${JSON.stringify(copyFocus)}.`);
    await activateFocusedElement(page);
    const copyFeedback = (await page.locator("[data-copy-feedback]").first().textContent())?.trim() || "";
    assert(copyFeedback === "Email address copied.", `Keyboard copy-email action should report success; actual: ${copyFeedback}`);

    await page.locator("[data-buildscan-load-model]").focus();
    const buildScanFocus = await getActiveElementState(page);
    assert(/Load interactive 3D model/i.test(buildScanFocus?.text || ""), `BuildScan load button should be keyboard focusable: ${JSON.stringify(buildScanFocus)}.`);
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
      bannerVisible,
      buildScanState,
      copyFeedback,
      diagnostics,
      productNavFocus,
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
    const response = await page.goto(new URL("/building-analyst.html#workflow-proof", baseUrl).toString(), { waitUntil: "networkidle" });
    assert(response?.status() === 200, "Building Analyst keyboard journey should load HTTP 200.");

    await page.locator("#lens-tab-surveyor").focus();
    await page.keyboard.press("ArrowRight");
    await page.waitForFunction(() => document.querySelector("#lens-tab-manager")?.getAttribute("aria-selected") === "true");
    const managerFocus = await getActiveElementState(page);
    assert(managerFocus?.dataPanelTrigger === "manager", `ArrowRight should move to manager lens: ${JSON.stringify(managerFocus)}.`);

    await page.keyboard.press("End");
    await page.waitForFunction(() => document.querySelector("#lens-tab-client")?.getAttribute("aria-selected") === "true");
    const clientFocus = await getActiveElementState(page);
    assert(clientFocus?.dataPanelTrigger === "client", `End should move to client lens: ${JSON.stringify(clientFocus)}.`);

    await page.locator("[data-copy-email]").first().focus();
    await activateFocusedElement(page);
    const copyFeedback = (await page.locator("[data-copy-feedback]").first().textContent())?.trim() || "";
    assert(copyFeedback === "Email address copied.", `Building Analyst copy-email keyboard action should report success; actual: ${copyFeedback}`);

    await page.screenshot({
      path: path.join(artifactDir, "building-analyst-keyboard-journey.png"),
      fullPage: false
    });

    return {
      clientFocus,
      copyFeedback,
      diagnostics,
      managerFocus
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
  const consoleMessages = diagnostics.flatMap((group) => group.consoleMessages);
  const failedRequests = diagnostics.flatMap(filterBlockingFailures);

  assert(failedRequests.length === 0, `Keyboard release smoke should have no blocking failed requests: ${JSON.stringify(failedRequests)}`);
  assert(consoleMessages.length === 0, `Keyboard release smoke should have no console messages: ${JSON.stringify(consoleMessages)}`);
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
          "building-analyst-keyboard-journey.png"
        ]
      }, null, 2));
    })
    .catch((error) => {
      console.error(error instanceof Error ? error.message : String(error));
      process.exitCode = 1;
    });
}
