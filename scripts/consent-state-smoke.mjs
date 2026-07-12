import { chromium } from "playwright";
import { startStaticServer } from "./lib/static-server.mjs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const server = await startStaticServer(process.cwd());
const browser = await chromium.launch({ channel: "chrome", headless: true });

try {
  const context = await browser.newContext();
  const page = await context.newPage();
  const analyticsRequests = [];
  const pageErrors = [];
  page.on("request", (request) => {
    if (/google-analytics|googletagmanager/i.test(request.url())) analyticsRequests.push(request.url());
  });
  page.on("pageerror", (error) => pageErrors.push(error.message));

  await page.goto(server.baseUrl, { waitUntil: "networkidle" });
  await page.locator("[data-open-consent]").first().click();
  assert(await page.locator("#analytics-consent-title").textContent() === "Analytics is inactive", "Empty GA4 configuration should show an inactive analytics state.");
  assert(await page.locator("[data-consent-accept]").isHidden(), "Inactive analytics should not ask visitors to grant prospective consent.");
  assert(await page.locator("[data-consent-decline]").isHidden(), "Inactive analytics should not ask visitors to decline unavailable tracking.");
  assert(analyticsRequests.length === 0, "Empty GA4 configuration should make no analytics requests.");
  assert(pageErrors.length === 0, `Consent state should not raise page errors: ${JSON.stringify(pageErrors)}.`);
  await context.close();

  const deniedStorageContext = await browser.newContext();
  await deniedStorageContext.addInitScript(() => {
    for (const method of ["getItem", "setItem", "removeItem"]) {
      Object.defineProperty(Storage.prototype, method, {
        configurable: true,
        value() { throw new DOMException("Storage denied", "SecurityError"); }
      });
    }
  });
  const deniedStoragePage = await deniedStorageContext.newPage();
  const deniedStorageErrors = [];
  deniedStoragePage.on("pageerror", (error) => deniedStorageErrors.push(error.message));
  await deniedStoragePage.goto(server.baseUrl, { waitUntil: "networkidle" });
  assert(deniedStorageErrors.length === 0, `Denied local storage should fail safely: ${JSON.stringify(deniedStorageErrors)}.`);
  await deniedStorageContext.close();

  console.log(JSON.stringify({ status: "pass", analyticsRequests: 0, storageDeniedSafe: true }, null, 2));
} finally {
  await browser.close();
  await server.stop();
}
