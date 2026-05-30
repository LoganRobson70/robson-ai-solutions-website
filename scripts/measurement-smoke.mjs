import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

import { startStaticServer } from "./lib/static-server.mjs";

const REQUIRED_EVENT_NAMES = [
  "cta_click",
  "mailto_click",
  "email_copy",
  "scroll_depth",
  "section_view",
  "nav_click",
  "proof_interaction"
];

const APP_ENTRY_PATH = "/index.html";

const REQUIRED_PATHS = [
  "/",
  "/index.html",
  "/privacy.html",
  "/building-analyst.html",
  "/who-its-for.html",
  "/robots.txt",
  "/sitemap.xml",
  "/assets/og/robsonai-cover-1200x630.png"
];

const DEFAULT_PREVIEW_URL = "https://robsonai.co.uk/";
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

function resolveArtifactDir(inputPath) {
  if (inputPath) {
    return path.resolve(inputPath);
  }

  return path.resolve("output/measurement", `smoke-${timestampLabel()}`);
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

async function writeJson(filePath, value) {
  await writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function uniqueGoogleRequests(requests) {
  return [...new Set(requests.filter((request) => /googletagmanager\.com|google-analytics\.com/.test(request)))];
}

function installClipboardStub(page) {
  return page.addInitScript(() => {
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: {
        writeText: async () => undefined
      }
    });
  });
}

function installFakeGaMeasurementId(page) {
  return page.addInitScript(() => {
    const originalQuerySelector = Document.prototype.querySelector;

    Document.prototype.querySelector = function patchedQuerySelector(selector) {
      if (selector === 'meta[name="ga4-measurement-id"]') {
        return { content: "G-TEST123456" };
      }

      return originalQuerySelector.call(this, selector);
    };
  });
}

async function collectRouteStatuses(baseUrl) {
  const statuses = [];

  for (const routePath of REQUIRED_PATHS) {
    const response = await fetch(new URL(routePath, baseUrl));
    statuses.push({
      path: routePath,
      status: response.status
    });
  }

  return statuses;
}

async function runDeclineFlow(browser, baseUrl, artifactDir) {
  const context = await browser.newContext();
  const page = await context.newPage();
  const requests = [];
  page.on("request", (request) => requests.push(request.url()));
  await installClipboardStub(page);

  try {
    await page.goto(new URL(APP_ENTRY_PATH, baseUrl).toString(), { waitUntil: "networkidle" });
    await page.screenshot({ path: path.join(artifactDir, "consent-banner-first-load.png"), fullPage: false });

    assert(await page.locator("[data-consent-banner]").isVisible(), "Consent banner should be visible on a clean first load.");

    await page.getByRole("button", { name: "Decline" }).click();
    const declineConsent = await page.evaluate(() => window.localStorage.getItem("robsonai.analytics-consent"));
    assert(declineConsent === "denied", "Decline should persist `robsonai.analytics-consent=denied`.");

    await page.reload({ waitUntil: "networkidle" });
    await page.waitForFunction(() => {
      const banner = document.querySelector("[data-consent-banner]");
      return window.localStorage.getItem("robsonai.analytics-consent") === "denied" && Boolean(banner?.hidden);
    });
    const bannerHiddenAfterReload = await page.evaluate(
      () => Boolean(document.querySelector("[data-consent-banner]")?.hidden)
    );
    assert(bannerHiddenAfterReload, "Consent banner should stay hidden after decline and reload.");

    await page.locator('[data-analytics-id="nav-start-conversation"]').click();
    assert(page.url().endsWith("/index.html#contact"), "Primary contact navigation should land on the preview contact hash.");

    await page.getByRole("button", { name: "Copy email address" }).click();
    const copyFeedback = (await page.locator("[data-copy-feedback]").textContent())?.trim() || "";
    assert(copyFeedback === "Email address copied.", "Copy email should show success feedback.");

    const mailtoHref =
      (await page.locator('[data-analytics-id="contact-mailto-link"]').getAttribute("href")) || "";

    assert(
      /subject=.*body=/.test(mailtoHref),
      "Contact mailto link should include both subject and body templates."
    );

    return {
      bannerVisibleOnFirstLoad: true,
      consentAfterDecline: declineConsent,
      bannerHiddenAfterReload,
      copyFeedback,
      mailtoHref,
      googleRequests: uniqueGoogleRequests(requests)
    };
  } finally {
    await context.close();
  }
}

async function runAcceptNoIdFlow(browser, baseUrl) {
  const context = await browser.newContext();
  const page = await context.newPage();
  const requests = [];
  page.on("request", (request) => requests.push(request.url()));
  await installClipboardStub(page);

  try {
    await page.goto(new URL(APP_ENTRY_PATH, baseUrl).toString(), { waitUntil: "networkidle" });
    await page.getByRole("button", { name: "Accept analytics" }).click();

    const consentAfterAccept = await page.evaluate(() => window.localStorage.getItem("robsonai.analytics-consent"));
    assert(consentAfterAccept === "granted", "Accept should persist `robsonai.analytics-consent=granted`.");

    await page.reload({ waitUntil: "networkidle" });
    await page.waitForFunction(() => {
      const banner = document.querySelector("[data-consent-banner]");
      return window.localStorage.getItem("robsonai.analytics-consent") === "granted" && Boolean(banner?.hidden);
    });
    const bannerHiddenAfterReload = await page.evaluate(
      () => Boolean(document.querySelector("[data-consent-banner]")?.hidden)
    );
    assert(bannerHiddenAfterReload, "Consent banner should stay hidden after accept and reload.");

    const googleRequests = uniqueGoogleRequests(requests);
    assert(
      googleRequests.length === 0,
      "No Google analytics or tag manager requests should be made when the GA4 ID is empty."
    );

    return {
      consentAfterAccept,
      bannerHiddenAfterReload,
      googleRequests
    };
  } finally {
    await context.close();
  }
}

async function runFakeIdContractFlow(browser, baseUrl) {
  const context = await browser.newContext();
  await context.route("https://www.googletagmanager.com/gtag/js?*", async (route) => {
    await route.fulfill({
      body: "",
      contentType: "application/javascript",
      status: 200
    });
  });

  const page = await context.newPage();
  const requests = [];
  page.on("request", (request) => requests.push(request.url()));
  await installClipboardStub(page);
  await installFakeGaMeasurementId(page);

  try {
    await page.goto(new URL(APP_ENTRY_PATH, baseUrl).toString(), { waitUntil: "networkidle" });
    await page.getByRole("button", { name: "Accept analytics" }).click();
    await page.waitForTimeout(250);

    await page.evaluate(() => {
      const proofLink = document.querySelector('[data-analytics-id="proof-building-analyst-page"]');

      if (!proofLink) {
        throw new Error("Proof CTA not found for fake-ID contract test.");
      }

      proofLink.addEventListener("click", (event) => event.preventDefault(), { once: true });
      proofLink.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true }));
    });

    await page.locator('[data-analytics-id="nav-method"]').click();
    await page.locator('[data-analytics-id="nav-start-conversation"]').click();
    await page.locator('[data-analytics-id="contact-mailto-link"]').dispatchEvent("click");
    await page.getByRole("button", { name: "Copy email address" }).click();
    await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
    await page.waitForTimeout(400);

    const uniqueEvents = await page.evaluate(() =>
      [...new Set((window.dataLayer || []).filter((entry) => entry && entry[0] === "event").map((entry) => entry[1]))].sort()
    );

    const expectedEvents = [...REQUIRED_EVENT_NAMES].sort();
    assert(
      JSON.stringify(uniqueEvents) === JSON.stringify(expectedEvents),
      `Fake-ID contract emitted ${JSON.stringify(uniqueEvents)} instead of ${JSON.stringify(expectedEvents)}.`
    );

    return {
      uniqueEvents,
      googleRequests: uniqueGoogleRequests(requests)
    };
  } finally {
    await context.close();
  }
}

export async function runMeasurementSmoke(options = {}) {
  const mode = options.mode || "local";
  const artifactDir = resolveArtifactDir(options.artifactDir);
  await mkdir(artifactDir, { recursive: true });

  let server;
  let baseUrl = options.baseUrl;

  if (!baseUrl) {
    if (mode === "preview") {
      baseUrl = DEFAULT_PREVIEW_URL;
    } else {
      server = await startStaticServer(process.cwd());
      baseUrl = server.baseUrl;
    }
  }

  const browser = await chromium.launch({ headless: true });

  try {
    const routeStatuses = await collectRouteStatuses(baseUrl);
    routeStatuses.forEach(({ path: routePath, status }) => {
      assert(status === 200, `Expected ${routePath} to return 200, received ${status}.`);
    });

    const declineFlow = await runDeclineFlow(browser, baseUrl, artifactDir);
    const acceptNoIdFlow = await runAcceptNoIdFlow(browser, baseUrl);

    let fakeIdContract = null;
    if (mode === "local") {
      fakeIdContract = await runFakeIdContractFlow(browser, baseUrl);
    }

    const summary = {
      artifactDir,
      baseUrl,
      mode,
      routeStatuses,
      declineFlow,
      acceptNoIdFlow,
      fakeIdContract,
      requiredEventNames: REQUIRED_EVENT_NAMES
    };

    await writeJson(path.join(artifactDir, "measurement-smoke-summary.json"), summary);
    await writeJson(path.join(artifactDir, "route-statuses.json"), routeStatuses);
    await writeJson(path.join(artifactDir, "decline-flow.json"), declineFlow);
    await writeJson(path.join(artifactDir, "accept-no-id-flow.json"), acceptNoIdFlow);

    if (fakeIdContract) {
      await writeJson(path.join(artifactDir, "fake-id-event-contract.json"), fakeIdContract);
    }

    return summary;
  } finally {
    await browser.close();

    if (server) {
      await server.stop();
    }
  }
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const summary = await runMeasurementSmoke({
    artifactDir: args["artifact-dir"],
    baseUrl: args["base-url"] || process.env.QA_BASE_URL || undefined,
    mode: args.mode || (args["base-url"] || process.env.QA_BASE_URL ? "preview" : "local")
  });

  console.log(JSON.stringify(summary, null, 2));
}

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  });
}
