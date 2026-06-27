import path from "node:path";

import { runReleasePreviewGate } from "./release-preview-gate.mjs";

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

function resolveProductionUrl(input) {
  if (!input) {
    throw new Error("Production release gate requires QA_PRODUCTION_URL or --base-url; refusing to run against production implicitly.");
  }

  let url;
  try {
    url = new URL(input);
  } catch {
    throw new Error(`Production release gate requires a valid absolute URL; received ${JSON.stringify(input)}.`);
  }

  if (url.protocol !== "https:") {
    throw new Error(`Production release gate requires an https URL; received ${url.href}.`);
  }

  const host = url.hostname.toLowerCase();
  if (host !== "robsonai.co.uk" && host !== "www.robsonai.co.uk") {
    throw new Error(`Production release gate only accepts https://robsonai.co.uk or https://www.robsonai.co.uk; received ${url.href}.`);
  }

  return url.href.replace(/\/$/, "");
}

function hasProductionConfirmation({ args, confirmed }) {
  return confirmed || args["confirm-production"] === "true" || process.env.CONFIRM_PRODUCTION_VERIFICATION === "true";
}

export async function runReleaseProductionGate({
  artifactDir = path.resolve("output/release-production-gate", `gate-${timestampLabel()}`),
  baseUrl,
  confirmed = false
} = {}) {
  const args = {};
  const resolvedBaseUrl = resolveProductionUrl(baseUrl);

  if (!hasProductionConfirmation({ args, confirmed })) {
    throw new Error("Production release gate requires --confirm-production=true or CONFIRM_PRODUCTION_VERIFICATION=true. This is a read-only verification gate, not deploy approval.");
  }

  return runReleasePreviewGate({
    artifactDir,
    baseUrl: resolvedBaseUrl,
    allowProduction: true,
    extraEnv: {
      ROBSON_ALLOW_PRODUCTION_QA: "true"
    }
  });
}

const executedDirectly = process.argv[1] && import.meta.url === new URL(`file://${process.argv[1]}`).href;

if (executedDirectly) {
  const args = parseArgs(process.argv.slice(2));

  runReleaseProductionGate({
    artifactDir: args["artifact-dir"],
    baseUrl: args["base-url"] || process.env.QA_PRODUCTION_URL,
    confirmed: args["confirm-production"] === "true" || process.env.CONFIRM_PRODUCTION_VERIFICATION === "true"
  })
    .then((summary) => {
      console.log(JSON.stringify({
        status: summary.status,
        baseUrl: summary.baseUrl,
        stepCount: summary.stepCount,
        summaryPath: summary.summaryPath
      }, null, 2));
    })
    .catch((error) => {
      console.error(error instanceof Error ? error.message : String(error));
      process.exitCode = 1;
    });
}
