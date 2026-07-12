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
  { name: "mobile", width: 390, height: 844 },
  { name: "tablet", width: 900, height: 1000 },
  { name: "desktop", width: 1440, height: 1000 }
];

const ALLOWED_TEXT_SURFACE_SELECTORS = [
  "a",
  "button",
  "summary",
  "[role='button']",
  ".btn",
  ".eyebrow",
  ".home-card-label",
  ".home-card-meta",
  ".home-step-label",
  ".fit-kicker",
  ".holding-status",
  ".consent-kicker",
  ".proof-tokens",
  ".home-hero-chain",
  ".analyst-summary-grid",
  ".buildscan-viewer-status"
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
    throw new Error("Visual polish preview smoke requires QA_BASE_URL or --base-url; refusing to fall back to production or local.");
  }

  let url;
  try {
    url = new URL(input);
  } catch {
    throw new Error(`Visual polish preview smoke requires a valid absolute URL; received ${JSON.stringify(input)}.`);
  }

  if (url.protocol !== "https:") {
    throw new Error(`Visual polish preview smoke requires an https URL; received ${url.href}.`);
  }

  const host = url.hostname.toLowerCase();
  if ((host === "robsonai.co.uk" || host === "www.robsonai.co.uk") && !productionVerificationAllowed()) {
    throw new Error("Visual polish preview smoke was given the production host. Use a Netlify preview URL.");
  }

  return url.href.replace(/\/$/, "");
}

async function inspectRoute(browser, baseUrl, route, viewport) {
  const page = await browser.newPage({ viewport });
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

    const surfaceFindings = await page.evaluate((allowedSelectors) => {
      function alphaFromColor(value) {
        const rgba = value.match(/^rgba?\(([^)]+)\)$/i);
        if (!rgba) {
          return value === "transparent" ? 0 : 1;
        }

        const parts = rgba[1].split(",").map((part) => part.trim());
        if (parts.length < 4) {
          return 1;
        }

        return Number(parts[3]);
      }

      function isAllowedTextSurface(element) {
        return allowedSelectors.some((selector) => element.closest(selector));
      }

      function visible(element) {
        const style = window.getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        const text = element.textContent?.trim() || "";

        return Boolean(
          text &&
          style.visibility !== "hidden" &&
          style.display !== "none" &&
          rect.width > 2 &&
          rect.height > 2 &&
          rect.bottom > 0 &&
          rect.top < window.innerHeight &&
          rect.right > 0 &&
          rect.left < window.innerWidth
        );
      }

      return [...document.querySelectorAll("h1, h2, h3, p, li")]
        .filter((element) => visible(element))
        .filter((element) => !isAllowedTextSurface(element))
        .map((element) => {
          const style = window.getComputedStyle(element);
          const rect = element.getBoundingClientRect();
          const backgroundAlpha = alphaFromColor(style.backgroundColor);
          const hasBackgroundImage = style.backgroundImage && style.backgroundImage !== "none";
          const isLargeTextHighlight = backgroundAlpha >= 0.65 && (rect.width >= 180 || rect.height >= 48);
          const isLargeImageHighlight = hasBackgroundImage && (rect.width >= 180 || rect.height >= 48);

          return {
            tag: element.tagName.toLowerCase(),
            className: String(element.className || ""),
            text: (element.textContent || "").trim().replace(/\s+/g, " ").slice(0, 120),
            backgroundColor: style.backgroundColor,
            backgroundImage: style.backgroundImage,
            width: Math.round(rect.width),
            height: Math.round(rect.height),
            isLargeTextHighlight,
            isLargeImageHighlight
          };
        })
        .filter((finding) => finding.isLargeTextHighlight || finding.isLargeImageHighlight)
        .slice(0, 20);
    }, ALLOWED_TEXT_SURFACE_SELECTORS);

    const contrastAndLayout = await page.evaluate(() => {
      const root = document.documentElement;
      const overflowX = root.scrollWidth > window.innerWidth + 1;
      const visibleImageCount = [...document.images].filter((image) => {
        const rect = image.getBoundingClientRect();
        const style = window.getComputedStyle(image);
        return style.visibility !== "hidden" && style.display !== "none" && rect.width > 2 && rect.height > 2;
      }).length;

      return {
        overflowX,
        scrollWidth: root.scrollWidth,
        viewportWidth: window.innerWidth,
        visibleImageCount
      };
    });

    const heroLogoMetrics = await page.evaluate(() => {
      const frame = document.querySelector(".home-hero-mark");
      const image = frame?.querySelector("img");
      const board = document.querySelector(".home-signal-board");

      if (!frame || !image || !board) {
        return null;
      }

      const frameRect = frame.getBoundingClientRect();
      const imageRect = image.getBoundingClientRect();
      const boardRect = board.getBoundingClientRect();
      const visible = frameRect.width > 2 && frameRect.height > 2 && imageRect.width > 2 && imageRect.height > 2;

      return {
        visible,
        frameWidth: Math.round(frameRect.width),
        frameHeight: Math.round(frameRect.height),
        imageWidth: Math.round(imageRect.width),
        imageHeight: Math.round(imageRect.height),
        frameRatio: visible ? Number((frameRect.width / frameRect.height).toFixed(3)) : null,
        imageRatio: visible ? Number((imageRect.width / imageRect.height).toFixed(3)) : null,
        boardWidth: Math.round(boardRect.width),
        boardHeight: Math.round(boardRect.height),
        boardRight: Math.round(boardRect.right),
        frameRight: Math.round(frameRect.right),
        frameToBoardRight: visible ? Math.round(frameRect.right - boardRect.right) : null,
        naturalWidth: image.naturalWidth,
        naturalHeight: image.naturalHeight
      };
    });

    const blockingFailedRequests = diagnostics.failedRequests.filter((failure) => {
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
        (responseResult) => responseResult.url === failure.url && responseResult.status >= 200 && responseResult.status < 400
      );
      const hadSuccessfulGlbResponse = diagnostics.responses.some(
        (responseResult) => responseResult.url === failure.url && responseResult.status === 200 && responseResult.url.includes("buildscan-ludgershall-public.glb")
      );

      if (failure.error === "net::ERR_ABORTED" && (hadSuccessfulResponse || !isRequiredSiteAsset)) {
        return false;
      }

      return !(route === "/buildscan-viewer.html" && hadSuccessfulGlbResponse && failure.error === "net::ERR_ABORTED");
    });
    const blockingConsoleMessages = diagnostics.consoleMessages.filter((message) => {
      if (message.type === "info" && message.text.startsWith("Slow network is detected.")) {
        return false;
      }

      return true;
    });

    assert(surfaceFindings.length === 0, `${route} ${viewport.name} has large text elements with high-opacity backgrounds: ${JSON.stringify(surfaceFindings, null, 2)}.`);
    assert(!contrastAndLayout.overflowX, `${route} ${viewport.name} should not introduce horizontal overflow.`);
    assert(blockingConsoleMessages.length === 0, `${route} ${viewport.name} should not emit blocking console/page errors: ${JSON.stringify(blockingConsoleMessages)}.`);
    assert(blockingFailedRequests.length === 0, `${route} ${viewport.name} should not have failed requests: ${JSON.stringify(blockingFailedRequests)}.`);
    if (route === "/") {
      if (heroLogoMetrics?.visible) {
        assert(heroLogoMetrics.frameRatio >= 0.9 && heroLogoMetrics.frameRatio <= 1.1, `${route} ${viewport.name} hero logo frame should remain square: ${JSON.stringify(heroLogoMetrics)}.`);
        assert(heroLogoMetrics.imageRatio >= 0.9 && heroLogoMetrics.imageRatio <= 1.1, `${route} ${viewport.name} hero logo image should not be distorted: ${JSON.stringify(heroLogoMetrics)}.`);
        assert(Math.abs(heroLogoMetrics.frameToBoardRight) <= 40, `${route} ${viewport.name} hero logo should stay anchored to the product board, not the viewport edge: ${JSON.stringify(heroLogoMetrics)}.`);
      }
    }

    return {
      route,
      viewport,
      surfaceFindings,
      contrastAndLayout,
      heroLogoMetrics,
      diagnostics
    };
  } finally {
    await page.close();
  }
}

async function writeJson(filePath, value) {
  await writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

export async function runVisualPolishSmoke({
  artifactDir = path.resolve("output/visual-polish", `smoke-${timestampLabel()}`),
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
      checkedViewports: VIEWPORTS,
      checkCount: checks.length,
      rule: "No large rendered text blocks may carry high-opacity text-level backgrounds unless they are explicit controls, labels, tokens or status elements.",
      checks
    };
    const summaryPath = path.join(artifactDir, "visual-polish-smoke.json");
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

  runVisualPolishSmoke({
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
