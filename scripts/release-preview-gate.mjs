import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const PREVIEW_COMMANDS = [
  {
    name: "release inventory",
    command: "npm",
    args: ["run", "qa:release-inventory"]
  },
  {
    name: "dependency audit advisory",
    command: "npm",
    args: ["run", "qa:dependency-audit"]
  },
  {
    name: "release security source posture",
    command: "npm",
    args: ["run", "qa:release-security"]
  },
  {
    name: "deployed release headers",
    command: "npm",
    args: ["run", "qa:release-headers:preview"]
  },
  {
    name: "deployed BuildScan viewer",
    command: "npm",
    args: ["run", "qa:buildscan-viewer:preview"]
  },
  {
    name: "deployed keyboard release smoke",
    command: "npm",
    args: ["run", "qa:keyboard:preview"]
  },
  {
    name: "deployed semantic SEO smoke",
    command: "npm",
    args: ["run", "qa:semantic-seo:preview"]
  },
  {
    name: "deployed product/design acceptance smoke",
    command: "npm",
    args: ["run", "qa:product-design:preview"]
  },
  {
    name: "deployed responsive route smoke",
    command: "npm",
    args: ["run", "qa:responsive:preview"]
  },
  {
    name: "deployed visual polish smoke",
    command: "npm",
    args: ["run", "qa:visual-polish:preview"]
  },
  {
    name: "deployed browser coverage advisory",
    command: "npm",
    args: ["run", "qa:browser-coverage:preview"]
  },
  {
    name: "deployed rendered release smoke",
    command: "npm",
    args: ["run", "qa:rendered:preview"]
  },
  {
    name: "deployed measurement smoke",
    command: "npm",
    args: ["run", "qa:measurement:preview"]
  },
  {
    name: "diff whitespace",
    command: "git",
    args: ["diff", "--check"]
  }
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

function resolvePreviewUrl(input, { allowProduction = false } = {}) {
  if (!input) {
    throw new Error("Preview release gate requires QA_BASE_URL or --base-url; refusing to fall back to production or local.");
  }

  let url;
  try {
    url = new URL(input);
  } catch {
    throw new Error(`Preview release gate requires a valid absolute URL; received ${JSON.stringify(input)}.`);
  }

  if (url.protocol !== "https:") {
    throw new Error(`Preview release gate requires an https URL; received ${url.href}.`);
  }

  const host = url.hostname.toLowerCase();
  const isProductionHost = host === "robsonai.co.uk" || host === "www.robsonai.co.uk";
  if (isProductionHost && !allowProduction) {
    throw new Error("Preview release gate was given the production host. Use a Netlify preview URL, or pass --allow-production=true for a separate production verification run.");
  }

  return url.href.replace(/\/$/, "");
}

function runCommand(step, env) {
  const startedAt = new Date();

  return new Promise((resolve) => {
    const child = spawn(step.command, step.args, {
      env,
      stdio: ["ignore", "pipe", "pipe"]
    });
    let stdout = "";
    let stderr = "";

    child.stdout.on("data", (chunk) => {
      const text = chunk.toString();
      stdout += text;
      process.stdout.write(text);
    });

    child.stderr.on("data", (chunk) => {
      const text = chunk.toString();
      stderr += text;
      process.stderr.write(text);
    });

    child.on("close", (code) => {
      resolve({
        name: step.name,
        command: [step.command, ...step.args].join(" "),
        status: code === 0 ? "pass" : "fail",
        exitCode: code,
        startedAt: startedAt.toISOString(),
        finishedAt: new Date().toISOString(),
        stdoutTail: stdout.slice(-4000),
        stderrTail: stderr.slice(-4000)
      });
    });
  });
}

async function writeSummary(summary, artifactDir) {
  await mkdir(artifactDir, { recursive: true });
  const summaryPath = path.join(artifactDir, "release-preview-gate.json");
  await writeFile(summaryPath, `${JSON.stringify(summary, null, 2)}\n`, "utf8");
  return summaryPath;
}

export async function runReleasePreviewGate({
  artifactDir = path.resolve("output/release-preview-gate", `gate-${timestampLabel()}`),
  baseUrl,
  allowProduction = false,
  extraEnv = {}
} = {}) {
  const resolvedBaseUrl = resolvePreviewUrl(baseUrl, { allowProduction });
  const startedAt = new Date().toISOString();
  const env = {
    ...process.env,
    ...extraEnv,
    QA_BASE_URL: resolvedBaseUrl
  };
  const results = [];

  for (const step of PREVIEW_COMMANDS) {
    console.log(`\n[release-preview-gate] ${step.name}`);
    const result = await runCommand(step, env);
    results.push(result);

    if (result.status !== "pass") {
      const summaryPath = await writeSummary({
        status: "fail",
        baseUrl: resolvedBaseUrl,
        startedAt,
        finishedAt: new Date().toISOString(),
        failedStep: result.name,
        results
      }, artifactDir);

      throw new Error(`Release preview gate failed at "${result.name}". Summary: ${summaryPath}`);
    }
  }

  const summary = {
    status: "pass",
    baseUrl: resolvedBaseUrl,
    startedAt,
    finishedAt: new Date().toISOString(),
    stepCount: results.length,
    results
  };
  const summaryPath = await writeSummary(summary, artifactDir);

  return {
    ...summary,
    summaryPath
  };
}

const executedDirectly = process.argv[1] && import.meta.url === new URL(`file://${process.argv[1]}`).href;

if (executedDirectly) {
  const args = parseArgs(process.argv.slice(2));

  runReleasePreviewGate({
    artifactDir: args["artifact-dir"],
    baseUrl: args["base-url"] || process.env.QA_BASE_URL,
    allowProduction: args["allow-production"] === "true"
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
