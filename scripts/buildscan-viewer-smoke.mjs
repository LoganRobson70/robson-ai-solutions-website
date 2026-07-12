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

async function capturePageDiagnostics(page, action) {
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
      error: request.failure()?.errorText
    });
  });

  const result = await action({
    consoleMessages,
    failedRequests,
    requests
  });

  return {
    ...result,
    consoleMessages,
    failedRequests,
    requests,
    responses
  };
}

function getBlockingFailures(result, ready) {
  return result.failedRequests.filter((failure) => {
    const isRequiredViewerAsset =
      failure.url.includes("/buildscan-viewer.html") ||
      failure.url.includes("/assets/vendor/three-0.164.1/") ||
      failure.url.includes("/assets/showcase/buildscan-ludgershall-public.glb") ||
      failure.url.includes("/assets/robson-ai-icon-v3-32.png");

    const hadSuccessfulGlbResponse = result.responses.some(
      (response) => response.url === failure.url && response.status === 200 && response.url.includes("buildscan-ludgershall-public.glb")
    );

    if (ready && hadSuccessfulGlbResponse && failure.error === "net::ERR_ABORTED") {
      return false;
    }

    if (ready && failure.error === "net::ERR_ABORTED" && !isRequiredViewerAsset) {
      return false;
    }

    return true;
  });
}

function getBlockingConsoleMessages(result) {
  return result.consoleMessages.filter((message) => {
    if (message.type === "info" && message.text.startsWith("Slow network is detected.")) {
      return false;
    }

    return true;
  });
}

async function runDirectViewerCheck(browser, baseUrl, artifactDir) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

  try {
    return await capturePageDiagnostics(page, async () => {
      const response = await page.goto(new URL("/buildscan-viewer.html", baseUrl).toString(), {
        waitUntil: "domcontentloaded"
      });

      await page
        .waitForFunction(() => window.__buildscanViewerReady === true || window.__buildscanViewerError, null, {
          timeout: 30000
        })
        .catch(() => undefined);
      await page.waitForTimeout(800);

      const state = await page.evaluate(() => ({
        canvasPresent: Boolean(document.querySelector("canvas")),
        ready: window.__buildscanViewerReady === true,
        error: window.__buildscanViewerError || null,
        statusText: document.querySelector("#viewerStatus")?.textContent || "",
        activeView: document.querySelector('[data-view][aria-pressed="true"]')?.getAttribute("data-view") || null,
        cameraSide: document.querySelector(".viewer-shell")?.getAttribute("data-camera-side") || null,
        webglAvailable: (() => {
          const canvas = document.createElement("canvas");
          return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
        })()
      }));

      await page.screenshot({
        path: path.join(artifactDir, "direct-viewer.png"),
        fullPage: true
      });

      assert(response?.status() === 200, "Direct viewer should return HTTP 200.");
      assert(state.webglAvailable, "WebGL should be available for direct viewer smoke.");
      assert(state.canvasPresent, "Direct viewer should render a canvas.");
      assert(state.ready, `Direct viewer should report ready. Status: ${state.statusText}`);
      assert(!state.error, `Direct viewer should not report an error: ${state.error}`);
      assert(state.activeView === "iso", `Direct viewer should open in the professional elevated Iso view; actual: ${state.activeView}.`);
      assert(state.cameraSide === "top", `Direct viewer should show the surveyed top surface, not the underside; actual: ${state.cameraSide}.`);

      const keyboardInteraction = await runDirectViewerKeyboardCheck(page);

      return {
        responseStatus: response?.status(),
        state,
        keyboardInteraction
      };
    });
  } finally {
    await page.close();
  }
}

async function runDirectViewerKeyboardCheck(page) {
  await page.keyboard.press("Tab");
  const firstFocus = await page.evaluate(() => ({
    action: document.activeElement?.getAttribute("data-tool") || document.activeElement?.getAttribute("data-view") || document.activeElement?.getAttribute("data-action"),
    label: document.activeElement?.textContent?.trim() || "",
    tagName: document.activeElement?.tagName || ""
  }));
  assert(firstFocus.tagName === "BUTTON" && firstFocus.action === "orbit", `Keyboard should tab first to the Orbit control: ${JSON.stringify(firstFocus)}.`);

  await page.keyboard.press("Tab");
  await page.keyboard.press("Enter");
  const panState = await page.evaluate(() => ({
    activeTool: document.querySelector('[data-tool][aria-pressed="true"]')?.getAttribute("data-tool"),
    statusText: document.querySelector("#viewerStatus")?.textContent || ""
  }));
  assert(panState.activeTool === "pan", `Keyboard should activate Pan mode; actual: ${JSON.stringify(panState)}.`);
  assert(/Pan mode/i.test(panState.statusText), `Pan keyboard activation should update status text; actual: ${panState.statusText}`);

  await page.keyboard.press("Tab");
  await page.keyboard.press("Enter");
  const topState = await page.evaluate(() => ({
    activeView: document.querySelector('[data-view][aria-pressed="true"]')?.getAttribute("data-view"),
    statusText: document.querySelector("#viewerStatus")?.textContent || ""
  }));
  assert(topState.activeView === "top", `Keyboard should activate Top view; actual: ${JSON.stringify(topState)}.`);
  assert(/Top view/i.test(topState.statusText), `Top keyboard activation should update status text; actual: ${topState.statusText}`);

  for (let index = 0; index < 5; index += 1) {
    await page.keyboard.press("Tab");
  }

  await page.keyboard.press("Enter");
  const zoomState = await page.evaluate(() => ({
    action: document.activeElement?.getAttribute("data-action"),
    statusText: document.querySelector("#viewerStatus")?.textContent || ""
  }));
  assert(zoomState.action === "zoom-in", `Keyboard should reach Zoom In after view controls; actual: ${JSON.stringify(zoomState)}.`);
  assert(/Zoomed in/i.test(zoomState.statusText), `Zoom In keyboard activation should update status text; actual: ${zoomState.statusText}`);

  await page.keyboard.press("Tab");
  await page.keyboard.press("Tab");
  await page.keyboard.press("Enter");
  const resetState = await page.evaluate(() => ({
    action: document.activeElement?.getAttribute("data-action"),
    activeView: document.querySelector('[data-view][aria-pressed="true"]')?.getAttribute("data-view"),
    cameraSide: document.querySelector(".viewer-shell")?.getAttribute("data-camera-side"),
    statusText: document.querySelector("#viewerStatus")?.textContent || ""
  }));
  assert(resetState.action === "reset", `Keyboard should reach Reset after zoom controls; actual: ${JSON.stringify(resetState)}.`);
  assert(resetState.activeView === "iso", `Reset keyboard activation should restore Iso view; actual: ${JSON.stringify(resetState)}.`);
  assert(resetState.cameraSide === "top", `Reset should restore the surveyed top surface; actual: ${JSON.stringify(resetState)}.`);

  return {
    firstFocus,
    panState,
    topState,
    zoomState,
    resetState
  };
}

async function runEmbeddedViewerCheck(browser, baseUrl, artifactDir) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });
  await page.addInitScript(() => window.localStorage.setItem("robsonai.analytics-consent", "denied"));

  try {
    return await capturePageDiagnostics(page, async ({ requests }) => {
      const response = await page.goto(new URL("/index.html#buildscan-model-view", baseUrl).toString(), {
        waitUntil: "networkidle"
      });
      await page.locator("[data-buildscan-interactive]").scrollIntoViewIfNeeded();
      await page.waitForTimeout(400);

      const before = await page.evaluate(() => {
        const viewer = document.querySelector("[data-buildscan-interactive]");
        const frame = viewer?.querySelector("iframe");
        return {
          buttonText: viewer?.querySelector("[data-buildscan-load-model]")?.textContent?.trim(),
          frameHasSrc: Boolean(frame?.getAttribute("src")),
          loaded: viewer?.classList.contains("is-loaded"),
          loading: viewer?.classList.contains("is-loading"),
          statusText: viewer?.querySelector("[data-buildscan-load-status]")?.textContent?.trim(),
          overflowX: document.documentElement.scrollWidth > window.innerWidth
        };
      });
      const requestsBeforeClick = [...requests];

      await page.screenshot({
        path: path.join(artifactDir, "embedded-before-click.png"),
        fullPage: false
      });

      await page.locator("[data-buildscan-load-model]").click();
      await page
        .waitForFunction(() => {
          const frame = document.querySelector("[data-buildscan-interactive] iframe");
          return frame?.contentWindow?.__buildscanViewerReady === true || frame?.contentWindow?.__buildscanViewerError;
        }, null, { timeout: 30000 })
        .catch(() => undefined);
      await page.waitForTimeout(800);

      const after = await page.evaluate(() => {
        const viewer = document.querySelector("[data-buildscan-interactive]");
        const frame = viewer?.querySelector("iframe");
        const childWindow = frame?.contentWindow;
        return {
          buttonText: viewer?.querySelector("[data-buildscan-load-model]")?.textContent?.trim(),
          frameSrc: frame?.getAttribute("src") || null,
          loaded: viewer?.classList.contains("is-loaded"),
          loading: viewer?.classList.contains("is-loading"),
          errored: viewer?.classList.contains("is-error"),
          statusText: viewer?.querySelector("[data-buildscan-load-status]")?.textContent?.trim(),
          childReady: childWindow?.__buildscanViewerReady === true,
          childError: childWindow?.__buildscanViewerError || null,
          childStatusText: frame?.contentDocument?.querySelector("#viewerStatus")?.textContent || "",
          childCanvasPresent: Boolean(frame?.contentDocument?.querySelector("canvas")),
          imageHiddenFromAT: viewer?.querySelector(".buildscan-model-image")?.getAttribute("aria-hidden") === "true",
          overflowX: document.documentElement.scrollWidth > window.innerWidth
        };
      });

      await page.screenshot({
        path: path.join(artifactDir, "embedded-after-click.png"),
        fullPage: false
      });

      assert(response?.status() === 200, "Homepage should return HTTP 200.");
      assert(!before.frameHasSrc, "Embedded viewer iframe should not have src before click.");
      assert(!requestsBeforeClick.some((url) => url.includes("buildscan-ludgershall-public.glb")), "GLB should not load before click.");
      assert(!before.overflowX, "Homepage should not overflow horizontally before click.");
      assert(after.loaded, "Embedded viewer should mark loaded only after model-ready signal.");
      assert(!after.loading, "Embedded viewer should not remain in loading state after ready.");
      assert(!after.errored, "Embedded viewer should not enter error state after ready.");
      assert(after.childReady, "Embedded viewer child frame should report ready.");
      assert(after.childCanvasPresent, "Embedded viewer child frame should render a canvas.");
      assert(after.imageHiddenFromAT, "Fallback image should be hidden from assistive technology after model loads.");
      assert(!after.overflowX, "Homepage should not overflow horizontally after model loads.");

      return {
        responseStatus: response?.status(),
        before,
        after
      };
    });
  } finally {
    await page.close();
  }
}

export async function runBuildScanViewerSmoke({
  artifactDir = path.resolve("output/buildscan-viewer", `smoke-${timestampLabel()}`),
  baseUrl,
  mode = baseUrl ? "preview" : "local"
} = {}) {
  await mkdir(artifactDir, { recursive: true });
  let server;

  if (mode === "preview" && !baseUrl) {
    throw new Error("Preview BuildScan viewer smoke requires QA_BASE_URL or --base-url; refusing to fall back to local.");
  }

  if (!baseUrl) {
    server = await startStaticServer(process.cwd());
    baseUrl = server.baseUrl;
  }

  const browser = await launchBrowser();

  try {
    const direct = await runDirectViewerCheck(browser, baseUrl, artifactDir);
    const embedded = await runEmbeddedViewerCheck(browser, baseUrl, artifactDir);

    const summary = {
      artifactDir,
      baseUrl,
      mode,
      direct,
      embedded
    };
    const directBlockingFailures = getBlockingFailures(direct, direct.state.ready);
    const embeddedBlockingFailures = getBlockingFailures(embedded, embedded.after.childReady);
    const directBlockingConsoleMessages = getBlockingConsoleMessages(direct);
    const embeddedBlockingConsoleMessages = getBlockingConsoleMessages(embedded);

    assert(!directBlockingFailures.length, "Direct viewer should have no blocking failed requests.");
    assert(!embeddedBlockingFailures.length, "Embedded viewer should have no blocking failed requests.");
    assert(!directBlockingConsoleMessages.length, "Direct viewer should have no blocking console messages.");
    assert(!embeddedBlockingConsoleMessages.length, "Embedded viewer should have no blocking console messages.");

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

  runBuildScanViewerSmoke({
    artifactDir: args["artifact-dir"],
    baseUrl: args["base-url"] || process.env.QA_BASE_URL || undefined,
    mode: args.mode || (args["base-url"] || process.env.QA_BASE_URL ? "preview" : "local")
  })
    .then((summary) => {
      console.log(JSON.stringify(summary, null, 2));
    })
    .catch((error) => {
      console.error(error instanceof Error ? error.message : String(error));
      process.exitCode = 1;
    });
}
