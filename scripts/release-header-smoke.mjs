import assert from "node:assert/strict";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const GLOBAL_HEADER_REQUIREMENTS = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "SAMEORIGIN",
  "Strict-Transport-Security": "max-age=31536000",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), geolocation=(), microphone=()"
};

const CSP_REQUIREMENTS = {
  "default-src": ["'self'"],
  "base-uri": ["'self'"],
  "object-src": ["'none'"],
  "script-src": ["'self'", "https://www.googletagmanager.com"],
  "style-src": ["'self'"],
  "img-src": ["'self'", "data:", "https://www.google-analytics.com"],
  "font-src": ["'self'"],
  "connect-src": ["'self'", "https://www.google-analytics.com", "https://region1.google-analytics.com"],
  "frame-src": ["'self'"],
  "form-action": ["'self'", "mailto:"],
  "frame-ancestors": ["'self'"]
};

const CACHE_REQUIREMENTS = [
  {
    blockFor: "/assets/vendor/three-0.164.1/*",
    header: "Cache-Control",
    requiredIncludes: ["public", "max-age=31536000", "immutable"]
  },
  {
    blockFor: "/assets/fonts/*",
    header: "Cache-Control",
    requiredIncludes: ["public", "max-age=31536000", "immutable"]
  },
  {
    blockFor: "/assets/*.png",
    header: "Cache-Control",
    requiredIncludes: ["public", "max-age=31536000", "immutable"]
  },
  {
    blockFor: "/assets/*.webp",
    header: "Cache-Control",
    requiredIncludes: ["public", "max-age=31536000", "immutable"]
  },
  {
    blockFor: "/assets/og/*",
    header: "Cache-Control",
    requiredIncludes: ["public", "max-age=31536000", "immutable"]
  },
  {
    blockFor: "/assets/showcase/*.webp",
    header: "Cache-Control",
    requiredIncludes: ["public", "max-age=31536000", "immutable"]
  },
  {
    blockFor: "/assets/showcase/*.glb",
    header: "Cache-Control",
    requiredIncludes: ["public", "max-age=86400"]
  },
  {
    blockFor: "/assets/showcase/*.glb",
    header: "Content-Type",
    requiredIncludes: ["model/gltf-binary"]
  },
  {
    blockFor: "/styles.css",
    header: "Cache-Control",
    requiredIncludes: ["public", "max-age=31536000", "immutable"]
  },
  {
    blockFor: "/script.js",
    header: "Cache-Control",
    requiredIncludes: ["public", "max-age=31536000", "immutable"]
  }
];

const REDIRECT_REQUIREMENTS = [
  {
    from: "/docs/*",
    to: "/404.html",
    status: "404",
    force: "true"
  },
  {
    from: "/scripts/*",
    to: "/404.html",
    status: "404",
    force: "true"
  },
  {
    from: "/netlify/*",
    to: "/404.html",
    status: "404",
    force: "true"
  },
  {
    from: "/output/*",
    to: "/404.html",
    status: "404",
    force: "true"
  },
  {
    from: "/node_modules/*",
    to: "/404.html",
    status: "404",
    force: "true"
  },
  {
    from: "/.git/*",
    to: "/404.html",
    status: "404",
    force: "true"
  },
  {
    from: "/AGENTS.md",
    to: "/404.html",
    status: "404",
    force: "true"
  },
  {
    from: "/README.md",
    to: "/404.html",
    status: "404",
    force: "true"
  },
  {
    from: "/CLAUDE.md",
    to: "/404.html",
    status: "404",
    force: "true"
  },
  {
    from: "/package.json",
    to: "/404.html",
    status: "404",
    force: "true"
  },
  {
    from: "/package-lock.json",
    to: "/404.html",
    status: "404",
    force: "true"
  },
  {
    from: "/netlify.toml",
    to: "/404.html",
    status: "404",
    force: "true"
  },
  {
    from: "/preview.html",
    to: "/",
    status: "301",
    force: "true"
  }
];

const DEPLOYED_PATHS = [
  {
    path: "/",
    expectedHeaders: GLOBAL_HEADER_REQUIREMENTS,
    csp: true
  },
  {
    path: "/buildscan-viewer.html",
    expectedHeaders: GLOBAL_HEADER_REQUIREMENTS,
    csp: true
  },
  {
    path: "/assets/showcase/buildscan-ludgershall-public.glb",
    expectedHeaders: {
      "Cache-Control": "public",
      "Content-Type": "model/gltf-binary",
      "X-Content-Type-Options": "nosniff"
    }
  },
  {
    path: "/assets/vendor/three-0.164.1/build/three.module.js",
    expectedHeaders: {
      "Cache-Control": "public",
      "X-Content-Type-Options": "nosniff"
    }
  },
  {
    path: "/assets/fonts/manrope-latin.woff2",
    expectedHeaders: {
      "Cache-Control": "public",
      "X-Content-Type-Options": "nosniff"
    }
  },
  {
    path: "/assets/showcase/buildscan-ludgershall-model-view-840.webp",
    expectedHeaders: {
      "Cache-Control": "public",
      "X-Content-Type-Options": "nosniff"
    }
  },
  {
    path: "/styles.css",
    expectedHeaders: {
      "Cache-Control": "public",
      "X-Content-Type-Options": "nosniff"
    }
  },
  {
    path: "/script.js",
    expectedHeaders: {
      "Cache-Control": "public",
      "X-Content-Type-Options": "nosniff"
    }
  }
];

const DENIED_DEPLOYED_PATHS = [
  "/docs/codex/TRACKER.md",
  "/scripts/measurement-smoke.mjs",
  "/netlify/edge-functions/preview-auth.js",
  "/output/measurement/example.json",
  "/AGENTS.md",
  "/README.md",
  "/package.json",
  "/netlify.toml"
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

function extractHeaderBlocks(toml) {
  return [...toml.matchAll(/\[\[headers\]\][\s\S]*?(?=\n\[\[|\n\[|$)/g)].map((match) => match[0]);
}

function extractRedirectBlocks(toml) {
  return [...toml.matchAll(/\[\[redirects\]\][\s\S]*?(?=\n\[\[|\n\[|$)/g)].map((match) => match[0]);
}

function extractForValue(block) {
  const match = block.match(/^\s*for\s*=\s*"([^"]+)"/m);
  return match?.[1] || "";
}

function extractRedirectValue(block, key) {
  const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = block.match(new RegExp(`^\\s*${escaped}\\s*=\\s*(?:"([^"]*)"|([^\\n#]+))`, "m"));
  return (match?.[1] || match?.[2] || "").trim();
}

function extractHeaderValue(block, headerName) {
  const escaped = headerName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = block.match(new RegExp(`^\\s*${escaped}\\s*=\\s*"([^"]*)"`, "m"));
  return match?.[1] || "";
}

function parseCsp(csp) {
  const directives = {};

  csp
    .split(";")
    .map((part) => part.trim())
    .filter(Boolean)
    .forEach((part) => {
      const [name, ...values] = part.split(/\s+/);
      directives[name] = values;
    });

  return directives;
}

function assertIncludes(actual, expected, label) {
  assert(
    actual.includes(expected),
    `${label} should include ${expected}; actual value was ${JSON.stringify(actual)}.`
  );
}

function validateCsp(csp, label) {
  const directives = parseCsp(csp);

  for (const [directive, requiredValues] of Object.entries(CSP_REQUIREMENTS)) {
    assert(directives[directive], `${label} CSP is missing ${directive}.`);

    for (const value of requiredValues) {
      assert(
        directives[directive].includes(value),
        `${label} CSP ${directive} should include ${value}; actual values were ${directives[directive].join(" ")}.`
      );
    }
  }
}

async function validateNetlifyConfig({ netlifyTomlPath = "netlify.toml" } = {}) {
  const toml = await readFile(netlifyTomlPath, "utf8");
  const blocks = extractHeaderBlocks(toml);
  const redirectBlocks = extractRedirectBlocks(toml);
  const globalBlock = blocks.find((block) => extractForValue(block) === "/*");

  assert(globalBlock, "netlify.toml should define a global /* headers block.");

  for (const [header, expected] of Object.entries(GLOBAL_HEADER_REQUIREMENTS)) {
    const actual = extractHeaderValue(globalBlock, header);
    assert.equal(actual, expected, `Global ${header} header mismatch.`);
  }

  const csp = extractHeaderValue(globalBlock, "Content-Security-Policy");
  assert(csp, "Global Content-Security-Policy header is missing.");
  validateCsp(csp, "netlify.toml global");

  const cacheResults = CACHE_REQUIREMENTS.map((requirement) => {
    const block = blocks.find((candidate) => extractForValue(candidate) === requirement.blockFor);
    assert(block, `netlify.toml should define a ${requirement.blockFor} headers block.`);

    const actual = extractHeaderValue(block, requirement.header);
    assert(actual, `${requirement.blockFor} should define ${requirement.header}.`);

    for (const expected of requirement.requiredIncludes) {
      assertIncludes(actual, expected, `${requirement.blockFor} ${requirement.header}`);
    }

    return {
      for: requirement.blockFor,
      header: requirement.header,
      actual
    };
  });

  const redirectResults = REDIRECT_REQUIREMENTS.map((requirement) => {
    const block = redirectBlocks.find((candidate) => extractRedirectValue(candidate, "from") === requirement.from);
    assert(block, `netlify.toml should define a redirect for ${requirement.from}.`);

    const actual = {
      from: extractRedirectValue(block, "from"),
      to: extractRedirectValue(block, "to"),
      status: extractRedirectValue(block, "status"),
      force: extractRedirectValue(block, "force")
    };

    assert.equal(actual.to, requirement.to, `${requirement.from} should redirect to ${requirement.to}.`);
    assert.equal(actual.status, requirement.status, `${requirement.from} should have status ${requirement.status}.`);
    assert.equal(actual.force, requirement.force, `${requirement.from} should have force=${requirement.force}.`);

    return actual;
  });

  return {
    mode: "config",
    globalHeaders: Object.fromEntries(
      Object.keys(GLOBAL_HEADER_REQUIREMENTS).map((header) => [header, extractHeaderValue(globalBlock, header)])
    ),
    cspDirectives: Object.keys(parseCsp(csp)).sort(),
    cacheResults,
    redirectResults,
    previewAuthMapped: /\[\[edge_functions\]\]/.test(toml)
  };
}

async function fetchHeaders(url) {
  const response = await fetch(url, { redirect: "manual" });
  const headers = {};

  response.headers.forEach((value, key) => {
    headers[key] = value;
  });

  return {
    status: response.status,
    headers
  };
}

function readResponseHeader(headers, headerName) {
  return headers[headerName.toLowerCase()] || "";
}

async function fetchText(url, options = {}) {
  const response = await fetch(url, options);
  return {
    status: response.status,
    headers: Object.fromEntries(response.headers.entries()),
    text: await response.text()
  };
}

async function validateDeployedHeaders(baseUrl) {
  const results = [];

  for (const route of DEPLOYED_PATHS) {
    const url = new URL(route.path, baseUrl).toString();
    const result = await fetchHeaders(url);

    assert.equal(result.status, 200, `${url} should return 200.`);

    for (const [header, expected] of Object.entries(route.expectedHeaders)) {
      const actual = readResponseHeader(result.headers, header);
      assertIncludes(actual, expected, `${url} ${header}`);
    }

    if (route.csp) {
      validateCsp(readResponseHeader(result.headers, "Content-Security-Policy"), url);
    }

    results.push({
      path: route.path,
      status: result.status,
      checkedHeaders: Object.keys(route.expectedHeaders),
      cspChecked: Boolean(route.csp)
    });
  }

  const deniedResults = [];

  for (const deniedPath of DENIED_DEPLOYED_PATHS) {
    const url = new URL(deniedPath, baseUrl).toString();
    const result = await fetchHeaders(url);
    assert.equal(result.status, 404, `${url} should be blocked with 404.`);
    deniedResults.push({
      path: deniedPath,
      status: result.status
    });
  }

  const previewRedirect = await fetchHeaders(new URL("/preview.html", baseUrl).toString());
  assert.equal(previewRedirect.status, 301, "/preview.html should redirect with 301.");
  const previewLocation = readResponseHeader(previewRedirect.headers, "location");
  assert.equal(new URL(previewLocation, baseUrl).pathname, "/", "/preview.html should redirect to /.");

  const holding = await fetchText(new URL("/holding.html", baseUrl).toString());
  assert.equal(holding.status, 200, "/holding.html should return 200.");
  assert(
    /<meta\s+name="robots"\s+content="noindex,\s*nofollow"/i.test(holding.text),
    "/holding.html should remain noindex,nofollow."
  );

  return {
    mode: "deployed",
    baseUrl,
    results,
    deniedResults,
    previewRedirect: {
      path: "/preview.html",
      status: previewRedirect.status,
      location: previewLocation
    },
    holding: {
      path: "/holding.html",
      status: holding.status,
      noindex: true
    }
  };
}

async function writeSummary(summary, artifactDir) {
  await mkdir(artifactDir, { recursive: true });
  const summaryPath = path.join(artifactDir, "release-header-smoke.json");
  await writeFile(summaryPath, `${JSON.stringify(summary, null, 2)}\n`, "utf8");

  return summaryPath;
}

export async function runReleaseHeaderSmoke(options = {}) {
  const mode = options.mode || (options.baseUrl ? "deployed" : "config");

  if (mode === "deployed" && !options.baseUrl) {
    throw new Error("Deployed release-header smoke requires QA_BASE_URL or --base-url; refusing to validate local config instead.");
  }

  const summary = mode === "deployed"
    ? await validateDeployedHeaders(options.baseUrl)
    : await validateNetlifyConfig(options);
  const summaryPath = await writeSummary(summary, options.artifactDir || path.resolve("output/release-headers", `smoke-${timestampLabel()}`));

  return {
    ...summary,
    summaryPath
  };
}

const executedDirectly = process.argv[1] && import.meta.url === new URL(`file://${process.argv[1]}`).href;

if (executedDirectly) {
  const args = parseArgs(process.argv.slice(2));
  runReleaseHeaderSmoke({
    artifactDir: args["artifact-dir"],
    baseUrl: args["base-url"] || process.env.QA_BASE_URL,
    mode: args.mode,
    netlifyTomlPath: args["netlify-toml"] || "netlify.toml"
  })
    .then((result) => {
      console.log(JSON.stringify(result, null, 2));
    })
    .catch((error) => {
      console.error(error instanceof Error ? error.message : String(error));
      process.exitCode = 1;
    });
}
