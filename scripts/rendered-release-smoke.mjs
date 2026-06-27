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
  const requests = [];
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
  page.on("request", (request) => {
    const url = request.url();

    if (!url.startsWith("blob:")) {
      requests.push(url);
    }
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
    requests,
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

async function getPageMetrics(page) {
  return page.evaluate(() => {
    const overflowX = document.documentElement.scrollWidth > window.innerWidth + 1;
    const visibleTextOverflows = [...document.querySelectorAll("a, button, h1, h2, h3, p, span, strong")]
      .filter((element) => {
        const style = window.getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        const text = element.textContent?.trim() || "";

        if (!text || style.visibility === "hidden" || style.display === "none" || rect.width < 2 || rect.height < 2) {
          return false;
        }

        return element.scrollWidth > element.clientWidth + 2 && style.whiteSpace === "nowrap";
      })
      .slice(0, 8)
      .map((element) => ({
        selector: element.tagName.toLowerCase(),
        text: element.textContent?.trim().slice(0, 100) || "",
        clientWidth: element.clientWidth,
        scrollWidth: element.scrollWidth
      }));

    return {
      overflowX,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      },
      scroll: {
        width: document.documentElement.scrollWidth,
        height: document.documentElement.scrollHeight
      },
      visibleTextOverflows
    };
  });
}

async function assertNoPageRegression(page, label) {
  const metrics = await getPageMetrics(page);
  assert(!metrics.overflowX, `${label} should not have page-level horizontal overflow.`);
  assert(
    metrics.visibleTextOverflows.length === 0,
    `${label} should not have obvious nowrap text overflow: ${JSON.stringify(metrics.visibleTextOverflows)}`
  );

  return metrics;
}

async function expectVisible(page, selector, label) {
  const locator = page.locator(selector).first();
  await locator.waitFor({ state: "visible", timeout: 10000 });
  assert(await locator.isVisible(), `${label} should be visible.`);

  return locator;
}

async function assertHoldingFallbackCurrentState(page) {
  const bodyText = await page.locator("body").innerText();
  const stalePatterns = [
    /website relaunch in progress/i,
    /a new robson ai website is on the way/i,
    /fuller site is private/i,
    /work-in-progress site is kept private/i,
    /fuller site is being shaped/i,
    /fuller site is being refined/i,
    /public launch page only/i
  ];
  const matchedPattern = stalePatterns.find((pattern) => pattern.test(bodyText));

  assert(!matchedPattern, `Holding fallback should not show stale holding/private-site copy: ${matchedPattern}.`);
  assert(/The Robson AI Solutions website is live\./.test(bodyText), "Holding fallback should tell visitors the public website is live.");
  await expectVisible(page, 'a[href="/"]', "Holding fallback live website link");
}

async function runDesktopHomepage(browser, baseUrl, artifactDir) {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1100 } });
  await setConsentDenied(context);
  const page = await context.newPage();
  await installClipboardStub(page);
  const diagnostics = captureDiagnostics(page);

  try {
    const response = await page.goto(new URL("/", baseUrl).toString(), { waitUntil: "networkidle" });
    assert(response?.status() === 200, "Homepage should return HTTP 200.");
    await expectVisible(page, "h1", "Homepage H1");
    await expectVisible(page, "#property-operations", "Property operations section");
    await expectVisible(page, "#buildscan-model-view", "BuildScan model section");
    await expectVisible(page, "#contact", "Contact section");

    const heroText = (await page.locator("h1").first().textContent())?.trim() || "";
    assert(/building/i.test(heroText) || /Robson/i.test(heroText), `Homepage H1 should carry the Robson/building proposition; actual: ${heroText}`);

    const staticImage = page.locator(".buildscan-model-image").first();
    await staticImage.scrollIntoViewIfNeeded();
    await page.waitForFunction(() => {
      const image = document.querySelector(".buildscan-model-image");
      return image?.complete && image.naturalWidth > 0;
    });
    const imageState = await staticImage.evaluate((image) => ({
      complete: image.complete,
      naturalWidth: image.naturalWidth,
      naturalHeight: image.naturalHeight,
      currentSrc: image.currentSrc
    }));
    assert(imageState.complete && imageState.naturalWidth > 0, "BuildScan static image should load before interactive opt-in.");
    assert(/buildscan-ludgershall-model-view-840\.webp|buildscan-ludgershall-model-view\.png/.test(imageState.currentSrc), `Desktop BuildScan image should use an expected asset; actual: ${imageState.currentSrc}`);

    await page.locator("#contact").scrollIntoViewIfNeeded();
    await page.getByRole("button", { name: "Copy Email Address" }).click();
    const copyFeedback = (await page.locator("[data-copy-feedback]").first().textContent())?.trim() || "";
    assert(copyFeedback === "Email address copied.", "Homepage copy-email action should show success feedback.");

    await page.screenshot({
      path: path.join(artifactDir, "desktop-homepage.png"),
      fullPage: true
    });

    return {
      metrics: await assertNoPageRegression(page, "Desktop homepage"),
      imageState,
      copyFeedback,
      diagnostics
    };
  } finally {
    await context.close();
  }
}

async function runMobileConsentAndHomepage(browser, baseUrl, artifactDir) {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true });
  const page = await context.newPage();
  const diagnostics = captureDiagnostics(page);

  try {
    const response = await page.goto(new URL("/", baseUrl).toString(), { waitUntil: "networkidle" });
    assert(response?.status() === 200, "Mobile homepage should return HTTP 200.");

    const banner = await expectVisible(page, "[data-consent-banner]", "Mobile consent banner");
    await expectVisible(page, "[data-consent-accept]", "Mobile consent accept button");
    await expectVisible(page, "[data-consent-decline]", "Mobile consent decline button");
    await expectVisible(
      page,
      '[data-consent-banner] a[href="./privacy.html"], [data-consent-banner] a[href="/privacy"], [data-consent-banner] a[href="/privacy.html"]',
      "Mobile consent privacy link"
    );

    const bannerBox = await banner.boundingBox();
    assert(bannerBox && bannerBox.height <= 260, `Mobile consent banner should stay compact; actual height ${bannerBox?.height}.`);

    await page.screenshot({
      path: path.join(artifactDir, "mobile-consent-first-load.png"),
      fullPage: false
    });

    await page.getByRole("button", { name: "Decline" }).click();
    await page.waitForFunction(() => document.querySelector("[data-consent-banner]")?.hidden === true);

    await page.locator("#buildscan-model-view").scrollIntoViewIfNeeded();
    const loadButton = page.locator("[data-buildscan-load-model]").first();
    await loadButton.waitFor({ state: "visible", timeout: 10000 });
    await loadButton.evaluate((button) => button.scrollIntoView({ block: "center", inline: "center" }));
    await page.waitForTimeout(200);
    const buttonHitTest = await loadButton.evaluate((button) => {
      const rect = button.getBoundingClientRect();
      const target = document.elementFromPoint(rect.left + rect.width / 2, rect.top + rect.height / 2);
      return button === target || button.contains(target);
    });
    assert(buttonHitTest, "Mobile BuildScan load button should not be obscured.");

    await page.screenshot({
      path: path.join(artifactDir, "mobile-buildscan-before-load.png"),
      fullPage: false
    });

    return {
      metrics: await assertNoPageRegression(page, "Mobile homepage"),
      bannerHeight: bannerBox.height,
      buildscanLoadButtonClear: buttonHitTest,
      diagnostics
    };
  } finally {
    await context.close();
  }
}

async function runBuildScanInteractive(browser, baseUrl, artifactDir) {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1100 } });
  await setConsentDenied(context);
  const page = await context.newPage();
  const diagnostics = captureDiagnostics(page);

  try {
    const response = await page.goto(new URL("/index.html#buildscan-model-view", baseUrl).toString(), { waitUntil: "networkidle" });
    assert(response?.status() === 200, "BuildScan section route should return HTTP 200.");
    await page.locator("[data-buildscan-interactive]").scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);

    const requestsBeforeClick = [...diagnostics.requests];
    assert(!requestsBeforeClick.some((url) => url.includes("buildscan-ludgershall-public.glb")), "Interactive GLB should not load before user opt-in.");

    await page.locator("[data-buildscan-load-model]").click();
    await page
      .waitForFunction(() => {
        const frame = document.querySelector("[data-buildscan-interactive] iframe");
        return frame?.contentWindow?.__buildscanViewerReady === true || frame?.contentWindow?.__buildscanViewerError;
      }, null, { timeout: 30000 })
      .catch(() => undefined);
    await page.waitForTimeout(800);

    const viewerState = await page.evaluate(() => {
      const viewer = document.querySelector("[data-buildscan-interactive]");
      const frame = viewer?.querySelector("iframe");
      const childWindow = frame?.contentWindow;

      return {
        loaded: viewer?.classList.contains("is-loaded") || false,
        loading: viewer?.classList.contains("is-loading") || false,
        errored: viewer?.classList.contains("is-error") || false,
        childReady: childWindow?.__buildscanViewerReady === true,
        childError: childWindow?.__buildscanViewerError || null,
        childCanvasPresent: Boolean(frame?.contentDocument?.querySelector("canvas")),
        statusText: viewer?.querySelector("[data-buildscan-load-status]")?.textContent?.trim() || ""
      };
    });

    assert(viewerState.loaded, "BuildScan interactive viewer should mark loaded after model-ready signal.");
    assert(!viewerState.loading, "BuildScan interactive viewer should not stay loading.");
    assert(!viewerState.errored, `BuildScan interactive viewer should not error: ${viewerState.childError || ""}`);
    assert(viewerState.childReady, "BuildScan child viewer should report ready.");
    assert(viewerState.childCanvasPresent, "BuildScan child viewer should render a canvas.");

    await page.screenshot({
      path: path.join(artifactDir, "desktop-buildscan-interactive-loaded.png"),
      fullPage: false
    });

    return {
      metrics: await assertNoPageRegression(page, "Desktop BuildScan interactive"),
      viewerState,
      diagnostics
    };
  } finally {
    await context.close();
  }
}

async function runSupportingPages(browser, baseUrl, artifactDir) {
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  await setConsentDenied(context);
  const page = await context.newPage();
  const diagnostics = captureDiagnostics(page);
  const pages = [
    {
      path: "/building-analyst.html#workflow-proof",
      screenshot: "desktop-building-analyst-proof.png",
      requiredSelector: "#workflow-proof",
      label: "Building Analyst proof"
    },
    {
      path: "/who-its-for.html",
      screenshot: "desktop-who-its-for.png",
      requiredSelector: "main",
      label: "Who it fits"
    },
    {
      path: "/privacy.html",
      screenshot: "desktop-privacy.png",
      requiredSelector: "main",
      label: "Privacy"
    },
    {
      path: "/404.html",
      screenshot: "desktop-404.png",
      requiredSelector: "h1",
      label: "404"
    },
    {
      path: "/holding.html",
      screenshot: "desktop-holding-fallback.png",
      requiredSelector: "main",
      label: "Holding fallback"
    }
  ];
  const results = [];

  try {
    for (const pageSpec of pages) {
      const response = await page.goto(new URL(pageSpec.path, baseUrl).toString(), { waitUntil: "networkidle" });
      assert(response?.status() === 200, `${pageSpec.label} should return HTTP 200.`);
      await expectVisible(page, pageSpec.requiredSelector, pageSpec.label);
      const metrics = await assertNoPageRegression(page, pageSpec.label);

      if (pageSpec.path === "/404.html" || pageSpec.path === "/holding.html") {
        const robots = await page.locator('meta[name="robots"]').getAttribute("content");
        assert(/noindex/i.test(robots || ""), `${pageSpec.label} should be noindex.`);
      }

      if (pageSpec.path === "/holding.html") {
        await assertHoldingFallbackCurrentState(page);
      }

      await page.screenshot({
        path: path.join(artifactDir, pageSpec.screenshot),
        fullPage: pageSpec.path !== "/404.html"
      });

      results.push({
        ...pageSpec,
        status: response?.status(),
        metrics
      });
    }

    return {
      pages: results,
      diagnostics
    };
  } finally {
    await context.close();
  }
}

function assertNoDiagnosticsFailures(summary) {
  const groups = [
    summary.desktopHomepage.diagnostics,
    summary.mobileHomepage.diagnostics,
    summary.buildscanInteractive.diagnostics,
    summary.supportingPages.diagnostics
  ];

  const consoleMessages = groups.flatMap((group) => group.consoleMessages);
  const failedRequests = groups.flatMap((group) =>
    group.failedRequests.filter((failure) => {
      const hadSuccessfulGlbResponse = group.responses.some(
        (response) => response.url === failure.url && response.status === 200 && response.url.includes("buildscan-ludgershall-public.glb")
      );

      return !(hadSuccessfulGlbResponse && failure.error === "net::ERR_ABORTED");
    })
  );

  assert(failedRequests.length === 0, `Rendered QA should have no failed requests: ${JSON.stringify(failedRequests)}`);
  assert(consoleMessages.length === 0, `Rendered QA should have no console messages: ${JSON.stringify(consoleMessages)}`);
}

export async function runRenderedReleaseSmoke({
  artifactDir = path.resolve("output/playwright", `rendered-release-smoke-${timestampLabel()}`),
  baseUrl,
  mode = baseUrl ? "preview" : "local"
} = {}) {
  if (mode === "preview" && !baseUrl) {
    throw new Error("Preview rendered smoke requires QA_BASE_URL or --base-url; refusing to fall back to local.");
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
      desktopHomepage: await runDesktopHomepage(browser, baseUrl, artifactDir),
      mobileHomepage: await runMobileConsentAndHomepage(browser, baseUrl, artifactDir),
      buildscanInteractive: await runBuildScanInteractive(browser, baseUrl, artifactDir),
      supportingPages: await runSupportingPages(browser, baseUrl, artifactDir)
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

  runRenderedReleaseSmoke({
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
          "desktop-homepage.png",
          "mobile-consent-first-load.png",
          "mobile-buildscan-before-load.png",
          "desktop-buildscan-interactive-loaded.png",
          "desktop-building-analyst-proof.png",
          "desktop-who-its-for.png",
          "desktop-privacy.png",
          "desktop-404.png",
          "desktop-holding-fallback.png"
        ]
      }, null, 2));
    })
    .catch((error) => {
      console.error(error instanceof Error ? error.message : String(error));
      process.exitCode = 1;
    });
}
