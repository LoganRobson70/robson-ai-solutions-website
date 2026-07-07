import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { chromium, firefox, webkit } from "playwright";

import { startStaticServer } from "./lib/static-server.mjs";

const BROWSERS = [
  {
    name: "chromium",
    browserType: chromium,
    launchOptions: {
      channel: "chrome",
      headless: true,
      args: ["--use-angle=metal", "--enable-gpu", "--ignore-gpu-blocklist"]
    }
  },
  { name: "firefox", browserType: firefox },
  { name: "webkit", browserType: webkit }
];

const ROUTES = [
  "/",
  "/building-analyst.html",
  "/who-its-for.html",
  "/privacy.html",
  "/404.html",
  "/holding.html",
  "/buildscan-viewer.html"
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
    throw new Error("Browser coverage preview smoke requires QA_BASE_URL or --base-url; refusing to fall back to production or local.");
  }

  let url;
  try {
    url = new URL(input);
  } catch {
    throw new Error(`Browser coverage preview smoke requires a valid absolute URL; received ${JSON.stringify(input)}.`);
  }

  if (url.protocol !== "https:") {
    throw new Error(`Browser coverage preview smoke requires an https URL; received ${url.href}.`);
  }

  const host = url.hostname.toLowerCase();
  if ((host === "robsonai.co.uk" || host === "www.robsonai.co.uk") && !productionVerificationAllowed()) {
    throw new Error("Browser coverage preview smoke was given the production host. Use a Netlify preview URL.");
  }

  return url.href.replace(/\/$/, "");
}

async function inspectRoute(page, baseUrl, route) {
  const diagnostics = {
    consoleMessages: [],
    failedRequests: []
  };

  page.on("console", (message) => {
    if (message.type() !== "debug") {
      diagnostics.consoleMessages.push({ type: message.type(), text: message.text() });
    }
  });
  page.on("pageerror", (error) => {
    diagnostics.consoleMessages.push({ type: "pageerror", text: error.message });
  });
  page.on("requestfailed", (request) => {
    diagnostics.failedRequests.push({ url: request.url(), error: request.failure()?.errorText || "" });
  });

  const response = await page.goto(new URL(route, baseUrl).toString(), { waitUntil: "networkidle" });
  assert(response?.status() === 200, `${route} should return HTTP 200.`);

  const state = await page.evaluate(() => {
    const main = document.querySelector("main");
    const h1 = document.querySelector("h1");
    const root = document.documentElement;
    const bodyText = document.body.innerText || "";

    return {
      title: document.title,
      mainPresent: Boolean(main),
      h1Text: h1?.textContent?.trim() || "",
      bodyLength: bodyText.trim().length,
      overflowX: root.scrollWidth > window.innerWidth + 1,
      viewportWidth: window.innerWidth,
      scrollWidth: root.scrollWidth
    };
  });

  assert(state.mainPresent, `${route} should expose a main landmark.`);
  assert(state.h1Text.length > 0, `${route} should expose an H1.`);
  assert(state.bodyLength > 200, `${route} should render meaningful body text.`);
  assert(!state.overflowX, `${route} should not have horizontal overflow.`);
  const blockingConsoleMessages = diagnostics.consoleMessages.filter((message) => {
    if (message.type === "info" && message.text.startsWith("Slow network is detected.")) {
      return false;
    }

    return true;
  });
  assert(blockingConsoleMessages.length === 0, `${route} should not emit blocking console/page errors: ${JSON.stringify(blockingConsoleMessages)}.`);

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

    if (failure.error === "net::ERR_ABORTED" && !isRequiredSiteAsset) {
      return false;
    }

    return !(route === "/buildscan-viewer.html" && failure.url.includes("buildscan-ludgershall-public.glb") && failure.error === "net::ERR_ABORTED");
  });
  assert(blockingFailedRequests.length === 0, `${route} should not have blocking failed requests: ${JSON.stringify(blockingFailedRequests)}.`);

  return {
    route,
    state,
    diagnostics
  };
}

async function inspectBrowser({ name, browserType, launchOptions }, baseUrl) {
  let browser;

  try {
    browser = await browserType.launch(launchOptions || { headless: true });
  } catch (error) {
    return {
      name,
      status: "unavailable",
      error: error instanceof Error ? error.message.split("\n")[0] : String(error)
    };
  }

  try {
    const routeResults = [];

    for (const route of ROUTES) {
      const page = await browser.newPage({ viewport: { width: 1366, height: 900 } });
      try {
        routeResults.push(await inspectRoute(page, baseUrl, route));
      } finally {
        await page.close();
      }
    }

    return {
      name,
      status: "pass",
      routeCount: routeResults.length,
      routes: routeResults
    };
  } catch (error) {
    return {
      name,
      status: "fail",
      error: error instanceof Error ? error.message : String(error)
    };
  } finally {
    await browser.close();
  }
}

async function writeJson(filePath, value) {
  await writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

export async function runBrowserCoverageSmoke({
  artifactDir = path.resolve("output/browser-coverage", `smoke-${timestampLabel()}`),
  baseUrl,
  mode = "local",
  strict = false
} = {}) {
  const server = mode === "local" ? await startStaticServer(process.cwd()) : null;
  const resolvedBaseUrl = mode === "local" ? server.baseUrl : resolvePreviewUrl(baseUrl);

  try {
    const browsers = [];

    for (const browserConfig of BROWSERS) {
      browsers.push(await inspectBrowser(browserConfig, resolvedBaseUrl));
    }

    const unavailable = browsers.filter((browser) => browser.status === "unavailable");
    const failed = browsers.filter((browser) => browser.status === "fail");
    const passed = browsers.filter((browser) => browser.status === "pass");
    const warnings = unavailable.map((browser) => `${browser.name} is unavailable locally: ${browser.error}`);
    const status = failed.length > 0 || (strict && unavailable.length > 0) ? "fail" : warnings.length > 0 ? "warning" : "pass";

    await mkdir(artifactDir, { recursive: true });
    const summary = {
      status,
      mode,
      strict,
      baseUrl: resolvedBaseUrl,
      checkedRoutes: ROUTES,
      browserCounts: {
        pass: passed.length,
        unavailable: unavailable.length,
        fail: failed.length
      },
      warnings,
      browsers
    };
    const summaryPath = path.join(artifactDir, "browser-coverage-smoke.json");
    await writeJson(summaryPath, summary);

    if (failed.length > 0) {
      throw new Error(`Browser coverage smoke failed in available browser(s): ${failed.map((browser) => browser.name).join(", ")}. Summary: ${summaryPath}`);
    }

    if (strict && unavailable.length > 0) {
      throw new Error(`Strict browser coverage requires Chromium, Firefox, and WebKit. Missing: ${unavailable.map((browser) => browser.name).join(", ")}. Summary: ${summaryPath}`);
    }

    return {
      ...summary,
      summaryPath
    };
  } finally {
    if (server) {
      await server.stop();
    }
  }
}

const executedDirectly = process.argv[1] && import.meta.url === new URL(`file://${process.argv[1]}`).href;

if (executedDirectly) {
  const args = parseArgs(process.argv.slice(2));
  const mode = args.mode || "local";

  runBrowserCoverageSmoke({
    artifactDir: args["artifact-dir"],
    baseUrl: args["base-url"] || process.env.QA_BASE_URL,
    mode,
    strict: args.strict === "true" || process.env.BROWSER_COVERAGE_STRICT === "true"
  })
    .then((summary) => {
      console.log(JSON.stringify({
        status: summary.status,
        mode: summary.mode,
        strict: summary.strict,
        baseUrl: summary.baseUrl,
        browserCounts: summary.browserCounts,
        warnings: summary.warnings,
        summaryPath: summary.summaryPath
      }, null, 2));
    })
    .catch((error) => {
      console.error(error instanceof Error ? error.message : String(error));
      process.exitCode = 1;
    });
}
