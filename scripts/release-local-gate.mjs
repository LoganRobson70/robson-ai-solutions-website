import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const COMMANDS = [
  {
    name: "script syntax",
    command: "node",
    args: ["--check", "script.js"]
  },
  {
    name: "measurement smoke syntax",
    command: "node",
    args: ["--check", "scripts/measurement-smoke.mjs"]
  },
  {
    name: "measurement evidence syntax",
    command: "node",
    args: ["--check", "scripts/measurement-evidence.mjs"]
  },
  {
    name: "BuildScan viewer smoke syntax",
    command: "node",
    args: ["--check", "scripts/buildscan-viewer-smoke.mjs"]
  },
  {
    name: "rendered release smoke syntax",
    command: "node",
    args: ["--check", "scripts/rendered-release-smoke.mjs"]
  },
  {
    name: "keyboard release smoke syntax",
    command: "node",
    args: ["--check", "scripts/keyboard-release-smoke.mjs"]
  },
  {
    name: "semantic SEO smoke syntax",
    command: "node",
    args: ["--check", "scripts/semantic-seo-smoke.mjs"]
  },
  {
    name: "product/design acceptance smoke syntax",
    command: "node",
    args: ["--check", "scripts/product-design-acceptance-smoke.mjs"]
  },
  {
    name: "responsive route smoke syntax",
    command: "node",
    args: ["--check", "scripts/responsive-route-smoke.mjs"]
  },
  {
    name: "visual polish smoke syntax",
    command: "node",
    args: ["--check", "scripts/visual-polish-smoke.mjs"]
  },
  {
    name: "browser coverage smoke syntax",
    command: "node",
    args: ["--check", "scripts/browser-coverage-smoke.mjs"]
  },
  {
    name: "dependency audit summary syntax",
    command: "node",
    args: ["--check", "scripts/dependency-audit-summary.mjs"]
  },
  {
    name: "release staging manifest smoke syntax",
    command: "node",
    args: ["--check", "scripts/release-staging-manifest-smoke.mjs"]
  },
  {
    name: "release header smoke syntax",
    command: "node",
    args: ["--check", "scripts/release-header-smoke.mjs"]
  },
  {
    name: "release security smoke syntax",
    command: "node",
    args: ["--check", "scripts/release-security-smoke.mjs"]
  },
  {
    name: "release preview gate syntax",
    command: "node",
    args: ["--check", "scripts/release-preview-gate.mjs"]
  },
  {
    name: "release production gate syntax",
    command: "node",
    args: ["--check", "scripts/release-production-gate.mjs"]
  },
  {
    name: "release inventory syntax",
    command: "node",
    args: ["--check", "scripts/release-candidate-inventory.mjs"]
  },
  {
    name: "HTML validation",
    command: "npx",
    args: [
      "--no-install",
      "html-validate",
      "404.html",
      "index.html",
      "buildscan-viewer.html",
      "building-analyst.html",
      "who-its-for.html",
      "privacy.html",
      "holding.html",
      "preview.html"
    ]
  },
  {
    name: "Netlify build",
    command: "npx",
    args: ["--no-install", "netlify", "build"]
  },
  {
    name: "preview auth",
    command: "npm",
    args: ["run", "qa:preview-auth"]
  },
  {
    name: "release security",
    command: "npm",
    args: ["run", "qa:release-security"]
  },
  {
    name: "release headers",
    command: "npm",
    args: ["run", "qa:release-headers"]
  },
  {
    name: "release inventory",
    command: "npm",
    args: ["run", "qa:release-inventory"]
  },
  {
    name: "release staging manifest",
    command: "npm",
    args: ["run", "qa:release-staging-manifest"]
  },
  {
    name: "dependency audit advisory",
    command: "npm",
    args: ["run", "qa:dependency-audit"]
  },
  {
    name: "BuildScan viewer",
    command: "npm",
    args: ["run", "qa:buildscan-viewer"]
  },
  {
    name: "keyboard release smoke",
    command: "npm",
    args: ["run", "qa:keyboard"]
  },
  {
    name: "semantic SEO smoke",
    command: "npm",
    args: ["run", "qa:semantic-seo"]
  },
  {
    name: "product/design acceptance smoke",
    command: "npm",
    args: ["run", "qa:product-design"]
  },
  {
    name: "responsive route smoke",
    command: "npm",
    args: ["run", "qa:responsive"]
  },
  {
    name: "visual polish smoke",
    command: "npm",
    args: ["run", "qa:visual-polish"]
  },
  {
    name: "browser coverage advisory",
    command: "npm",
    args: ["run", "qa:browser-coverage"]
  },
  {
    name: "rendered release smoke",
    command: "npm",
    args: ["run", "qa:rendered"]
  },
  {
    name: "measurement local",
    command: "npm",
    args: ["run", "qa:measurement:local"]
  },
  {
    name: "measurement evidence",
    command: "npm",
    args: ["run", "qa:measurement:evidence"]
  },
  {
    name: "diff whitespace",
    command: "git",
    args: ["diff", "--check"]
  }
];

function timestampLabel() {
  return new Date().toISOString().replace(/[:.]/g, "-");
}

function runCommand(step) {
  const startedAt = new Date();

  return new Promise((resolve) => {
    const child = spawn(step.command, step.args, {
      env: process.env,
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
  const summaryPath = path.join(artifactDir, "release-local-gate.json");
  await writeFile(summaryPath, `${JSON.stringify(summary, null, 2)}\n`, "utf8");
  return summaryPath;
}

export async function runReleaseLocalGate({
  artifactDir = path.resolve("output/release-local-gate", `gate-${timestampLabel()}`)
} = {}) {
  const startedAt = new Date().toISOString();
  const results = [];

  for (const step of COMMANDS) {
    console.log(`\n[release-local-gate] ${step.name}`);
    const result = await runCommand(step);
    results.push(result);

    if (result.status !== "pass") {
      const summaryPath = await writeSummary({
        status: "fail",
        startedAt,
        finishedAt: new Date().toISOString(),
        failedStep: result.name,
        results
      }, artifactDir);

      throw new Error(`Release local gate failed at "${result.name}". Summary: ${summaryPath}`);
    }
  }

  const summary = {
    status: "pass",
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
  runReleaseLocalGate()
    .then((summary) => {
      console.log(JSON.stringify({
        status: summary.status,
        stepCount: summary.stepCount,
        summaryPath: summary.summaryPath
      }, null, 2));
    })
    .catch((error) => {
      console.error(error instanceof Error ? error.message : String(error));
      process.exitCode = 1;
    });
}
