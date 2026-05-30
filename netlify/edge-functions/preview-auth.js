const USERNAME_ENV = "ROBSON_PREVIEW_USERNAME";
const PASSWORD_ENV = "ROBSON_PREVIEW_PASSWORD";

function unauthorized() {
  return new Response("Authentication required", {
    status: 401,
    headers: {
      "cache-control": "no-store",
      "www-authenticate": 'Basic realm="Robson Preview", charset="UTF-8"'
    }
  });
}

function readEnv(name) {
  try {
    if (typeof Netlify !== "undefined") {
      return Netlify.env?.get(name)?.trim() || "";
    }
  } catch {
    return "";
  }

  try {
    return globalThis.Netlify?.env?.get(name)?.trim() || "";
  } catch {
    return "";
  }

  try {
    return globalThis.Deno?.env?.get(name)?.trim() || "";
  } catch {
    return "";
  }
}

function getPreviewCredentials() {
  return {
    username: readEnv(USERNAME_ENV),
    password: readEnv(PASSWORD_ENV)
  };
}

export default async (request) => {
  const authHeader = request.headers.get("authorization") || "";

  if (!authHeader.startsWith("Basic ")) {
    return unauthorized();
  }

  let decoded = "";

  try {
    decoded = atob(authHeader.slice(6));
  } catch {
    return unauthorized();
  }

  const separatorIndex = decoded.indexOf(":");

  if (separatorIndex === -1) {
    return unauthorized();
  }

  const username = decoded.slice(0, separatorIndex);
  const password = decoded.slice(separatorIndex + 1);
  const expected = getPreviewCredentials();

  if (!expected.username || !expected.password || username !== expected.username || password !== expected.password) {
    return unauthorized();
  }

  return;
};
