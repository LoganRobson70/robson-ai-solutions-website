import assert from "node:assert/strict";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const PAGES_WITH_CONSENT = [
  "index.html",
  "building-analyst.html",
  "who-its-for.html",
  "privacy.html",
  "holding.html"
];

const HTML_PAGES = [
  ...PAGES_WITH_CONSENT,
  "404.html",
  "preview.html",
  "buildscan-viewer.html"
];

const APPROVED_SCRIPT_SOURCES = [
  "./script.js?v=20260627a",
  "./script.js?v=20260704a",
  "./script.js?v=20260705b",
  "./script.js?v=20260705c"
];

const HOLDING_FORBIDDEN_COPY_PATTERNS = [
  /website relaunch in progress/i,
  /a new robson ai website is on the way/i,
  /fuller site is private/i,
  /work-in-progress site is kept private/i,
  /fuller site is being shaped/i,
  /fuller site is being refined/i,
  /public launch page only/i
];

function timestampLabel() {
  return new Date().toISOString().replace(/[:.]/g, "-");
}

function extractMetaContent(html, name) {
  const pattern = new RegExp(`<meta\\s+[^>]*name=["']${name}["'][^>]*content=["']([^"']*)["'][^>]*>`, "i");
  return html.match(pattern)?.[1] ?? null;
}

function extractScriptSources(html) {
  return [...html.matchAll(/<script\s+[^>]*src=["']([^"']+)["'][^>]*>/gi)]
    .map((match) => match[1]);
}

function assertNoInlineEventHandlers(html, filePath) {
  const inlineHandler = html.match(/\s(on[a-z]+)\s*=/i);
  assert(!inlineHandler, `${filePath} should not use inline event handlers; found ${inlineHandler?.[1]}.`);
}

function assertNoForms(html, filePath) {
  assert(!/<form\b/i.test(html), `${filePath} should not contain a form before privacy/governance approval.`);
}

function assertConsentMarkup(html, filePath) {
  assert(/\bdata-consent-banner\b/.test(html), `${filePath} should include the governed consent banner.`);
  assert(/\bdata-consent-accept\b/.test(html), `${filePath} should include an explicit accept analytics control.`);
  assert(/\bdata-consent-decline\b/.test(html), `${filePath} should include an explicit decline control.`);
  assert(/Privacy Notice|Privacy notice/.test(html), `${filePath} should link to the privacy notice from the consent surface.`);
  assert(/\bdata-consent-status\b/.test(html) && /aria-live=["']polite["']/.test(html), `${filePath} should include an accessible consent status message.`);
}

function assertApprovedScripts(html, filePath) {
  const sources = extractScriptSources(html);
  const unexpected = sources.filter((source) => !APPROVED_SCRIPT_SOURCES.includes(source));
  assert(unexpected.length === 0, `${filePath} has unapproved script source(s): ${unexpected.join(", ")}.`);
}

function assertCurrentHoldingFallbackCopy(html) {
  const matchedPattern = HOLDING_FORBIDDEN_COPY_PATTERNS.find((pattern) => pattern.test(html));
  assert(!matchedPattern, `holding.html contains stale holding/private-site wording: ${matchedPattern}.`);
  assert(/<meta\s+name=["']robots["']\s+content=["']noindex,\s*nofollow["']/i.test(html), "holding.html should remain noindex,nofollow.");
  assert(/The Robson AI Solutions website is live\./.test(html), "holding.html should state that the public website is live.");
  assert(/Visit the live website/.test(html), "holding.html should route visitors back to the live website.");
}

async function validateHtmlPages() {
  const results = [];

  for (const filePath of HTML_PAGES) {
    const html = await readFile(filePath, "utf8");
    assertNoForms(html, filePath);
    assertNoInlineEventHandlers(html, filePath);
    assertApprovedScripts(html, filePath);

    if (PAGES_WITH_CONSENT.includes(filePath)) {
      assertConsentMarkup(html, filePath);
      assert.equal(extractMetaContent(html, "ga4-measurement-id"), "", `${filePath} should keep the GA4 Measurement ID empty until approved.`);
    }

    if (filePath === "holding.html") {
      assertCurrentHoldingFallbackCopy(html);
    }

    assert(!/https:\/\/www\.googletagmanager\.com/i.test(html), `${filePath} should not embed Google Tag Manager directly in HTML.`);
    assert(!/https:\/\/www\.google-analytics\.com/i.test(html), `${filePath} should not embed Google Analytics directly in HTML.`);

    results.push({
      path: filePath,
      consentChecked: PAGES_WITH_CONSENT.includes(filePath),
      publicStateCopyChecked: filePath === "holding.html",
      scriptSources: extractScriptSources(html)
    });
  }

  return results;
}

async function validateClientAnalytics() {
  const script = await readFile("script.js", "utf8");

  assert(script.includes('const consentKey = "robsonai.analytics-consent";'), "script.js should use the governed local consent key.");
  assert(script.includes('analytics_storage: "denied"'), "script.js should set analytics consent denied by default.");
  assert(script.includes("loadAnalytics()"), "script.js should gate analytics loading through the approved loader.");
  assert(!/document\.cookie/i.test(script), "script.js should not use document.cookie for consent or tracking state.");
  assert(!/innerHTML\s*=|insertAdjacentHTML|eval\s*\(|new Function\s*\(/.test(script), "script.js should not use high-risk DOM/code injection APIs.");

  return {
    consentKey: "robsonai.analytics-consent",
    defaultAnalyticsStorage: "denied",
    cookiesUsed: false,
    highRiskDomApisUsed: false
  };
}

async function validateNetlifySecurityHeaders() {
  const toml = await readFile("netlify.toml", "utf8");

  assert(/Strict-Transport-Security\s*=\s*"max-age=31536000"/.test(toml), "netlify.toml should set HSTS with max-age=31536000.");
  assert(!/Access-Control-Allow-Origin\s*=\s*"\*"/.test(toml), "netlify.toml should not publish wildcard CORS headers.");
  assert(!/X-XSS-Protection\s*=/.test(toml), "netlify.toml should not set deprecated X-XSS-Protection.");
  assert(/Content-Security-Policy\s*=/.test(toml), "netlify.toml should define Content-Security-Policy.");
  assert(/object-src 'none'/.test(toml), "CSP should block object embeds.");
  assert(/base-uri 'self'/.test(toml), "CSP should restrict base-uri.");
  assert(/frame-ancestors 'self'/.test(toml), "CSP should restrict frame ancestors.");
  assert(/form-action 'self' mailto:/.test(toml), "CSP should restrict form actions to self and mailto.");

  return {
    hsts: "max-age=31536000",
    wildcardCors: false,
    deprecatedXXssProtection: false,
    cspChecked: true
  };
}

async function validateVendorGovernance() {
  const license = await readFile("assets/vendor/three-0.164.1/LICENSE", "utf8");
  const viewer = await readFile("buildscan-viewer.html", "utf8");

  assert(/MIT License/i.test(license), "Vendored Three.js should include its MIT license.");
  assert(/<meta\s+name=["']robots["']\s+content=["']noindex,nofollow["']/i.test(viewer), "buildscan-viewer.html should remain noindex,nofollow.");
  assert(/buildscan-ludgershall-public\.glb/.test(viewer), "buildscan-viewer.html should reference the approved candidate GLB path.");

  return {
    threeLicensePresent: true,
    viewerNoindex: true,
    glbPath: "assets/showcase/buildscan-ludgershall-public.glb"
  };
}

async function writeSummary(summary, artifactDir) {
  await mkdir(artifactDir, { recursive: true });
  const summaryPath = path.join(artifactDir, "release-security-smoke.json");
  await writeFile(summaryPath, `${JSON.stringify(summary, null, 2)}\n`, "utf8");

  return summaryPath;
}

export async function runReleaseSecuritySmoke({
  artifactDir = path.resolve("output/release-security", `smoke-${timestampLabel()}`)
} = {}) {
  const summary = {
    htmlPages: await validateHtmlPages(),
    clientAnalytics: await validateClientAnalytics(),
    netlifySecurityHeaders: await validateNetlifySecurityHeaders(),
    vendorGovernance: await validateVendorGovernance()
  };

  const summaryPath = await writeSummary(summary, artifactDir);

  return {
    ...summary,
    summaryPath
  };
}

const executedDirectly = process.argv[1] && import.meta.url === new URL(`file://${process.argv[1]}`).href;

if (executedDirectly) {
  runReleaseSecuritySmoke()
    .then((summary) => {
      console.log(JSON.stringify({
        summaryPath: summary.summaryPath,
        checkedHtmlPages: summary.htmlPages.length,
        hsts: summary.netlifySecurityHeaders.hsts,
        defaultAnalyticsStorage: summary.clientAnalytics.defaultAnalyticsStorage,
        viewerNoindex: summary.vendorGovernance.viewerNoindex
      }, null, 2));
    })
    .catch((error) => {
      console.error(error instanceof Error ? error.message : String(error));
      process.exitCode = 1;
    });
}
