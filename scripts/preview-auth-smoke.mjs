import assert from "node:assert/strict";
import test from "node:test";

const moduleUrl = new URL(`../netlify/edge-functions/preview-auth.js?test=${Date.now()}`, import.meta.url);
const { default: previewAuth } = await import(moduleUrl.href);

function installNetlifyEnv(values) {
  globalThis.Netlify = {
    env: {
      get(name) {
        return values[name] ?? "";
      }
    }
  };
}

function authHeader(username, password) {
  return `Basic ${Buffer.from(`${username}:${password}`, "utf8").toString("base64")}`;
}

test("allows a request with preview credentials from Netlify env", async () => {
  installNetlifyEnv({
    ROBSON_PREVIEW_USERNAME: "preview-user",
    ROBSON_PREVIEW_PASSWORD: "preview-pass"
  });

  const request = new Request("https://example.test/index.html", {
    headers: {
      authorization: authHeader("preview-user", "preview-pass")
    }
  });

  const response = await previewAuth(request);

  assert.equal(response, undefined);
});

test("fails closed when preview credentials are missing", async () => {
  installNetlifyEnv({});

  const request = new Request("https://example.test/index.html", {
    headers: {
      authorization: authHeader("preview-user", "preview-pass")
    }
  });

  const response = await previewAuth(request);

  assert.equal(response.status, 401);
  assert.equal(response.headers.get("cache-control"), "no-store");
});

test("rejects incorrect preview credentials", async () => {
  installNetlifyEnv({
    ROBSON_PREVIEW_USERNAME: "preview-user",
    ROBSON_PREVIEW_PASSWORD: "preview-pass"
  });

  const request = new Request("https://example.test/index.html", {
    headers: {
      authorization: authHeader("preview-user", "wrong-pass")
    }
  });

  const response = await previewAuth(request);

  assert.equal(response.status, 401);
});
