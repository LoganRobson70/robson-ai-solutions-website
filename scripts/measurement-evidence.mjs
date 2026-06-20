import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";

import { runMeasurementSmoke } from "./measurement-smoke.mjs";
import { startStaticServer } from "./lib/static-server.mjs";

const __filename = fileURLToPath(import.meta.url);
const APP_ENTRY_PATH = "/";
const HTML_VALIDATE_RULES = ["doctype-style:off", "void-style:off"];
const HTML_FILES = ["holding.html", "index.html", "preview.html", "privacy.html", "building-analyst.html", "who-its-for.html"];
const A11Y_PATHS = ["/", "/index.html", "/privacy.html", "/building-analyst.html", "/who-its-for.html"];

function timestampLabel() {
  return new Date().toISOString().replace(/[:.]/g, "-");
}

async function writeJson(filePath, value) {
  await writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function runCommand(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: process.cwd(),
      env: process.env,
      shell: false,
      ...options
    });

    let stdout = "";
    let stderr = "";

    child.stdout.on("data", (chunk) => {
      stdout += chunk.toString();
    });

    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });

    child.on("error", reject);
    child.on("close", (code) => {
      if (code !== 0) {
        reject(new Error(`${command} ${args.join(" ")} failed.\n${stdout}${stderr}`.trim()));
        return;
      }

      resolve({ stdout, stderr });
    });
  });
}

async function runHtmlValidate(artifactDir) {
  const args = ["html-validate"];
  HTML_VALIDATE_RULES.forEach((rule) => {
    args.push("--rule", rule);
  });
  args.push(...HTML_FILES);

  const result = await runCommand("npx", args);
  const reportPath = path.join(artifactDir, "html-validate.txt");
  await writeFile(reportPath, `${result.stdout}${result.stderr}`, "utf8");

  return {
    command: `npx ${args.join(" ")}`,
    reportPath
  };
}

async function ensureChromeDriver(artifactDir) {
  const result = await runCommand("npx", ["browser-driver-manager", "install", "chrome"]);
  const reportPath = path.join(artifactDir, "browser-driver-manager.txt");
  await writeFile(reportPath, `${result.stdout}${result.stderr}`, "utf8");

  return {
    command: "npx browser-driver-manager install chrome",
    reportPath
  };
}

async function runAxe(artifactDir, baseUrl) {
  const results = [];

  for (const routePath of A11Y_PATHS) {
    const targetUrl = new URL(routePath, baseUrl).toString();
    const fileName = routePath === "/" ? "axe-home.txt" : `axe-${routePath.replace(/[/.]/g, "-").replace(/^-+/, "")}.txt`;
    const reportPath = path.join(artifactDir, fileName);
    const result = await runCommand("npx", ["axe", targetUrl, "--tags", "wcag2a,wcag2aa"]);
    await writeFile(reportPath, `${result.stdout}${result.stderr}`, "utf8");
    results.push({
      reportPath,
      url: targetUrl
    });
  }

  return results;
}

async function runLighthouse(artifactDir, baseUrl) {
  const runs = [];
  const targetUrl = new URL(APP_ENTRY_PATH, baseUrl).toString();

  for (const index of [1, 2, 3]) {
    const reportPath = path.join(artifactDir, `lighthouse-home-${index}.json`);
    await runCommand("npx", [
      "lighthouse",
      targetUrl,
      "--quiet",
      "--chrome-flags=--headless=new",
      "--only-categories=performance,accessibility,best-practices,seo",
      "--output=json",
      `--output-path=${reportPath}`
    ]);

    const report = JSON.parse(await readFile(reportPath, "utf8"));
    runs.push({
      accessibility: Math.round(report.categories.accessibility.score * 100),
      bestPractices: Math.round(report.categories["best-practices"].score * 100),
      cls: report.audits["cumulative-layout-shift"].numericValue,
      lcp: report.audits["largest-contentful-paint"].numericValue,
      performance: Math.round(report.categories.performance.score * 100),
      reportPath,
      run: index,
      seo: Math.round(report.categories.seo.score * 100)
    });
  }

  const orderedPerformance = [...runs].sort((left, right) => left.performance - right.performance);
  const medianRun = orderedPerformance[Math.floor(orderedPerformance.length / 2)];

  return {
    medianPerformanceRun: medianRun.run,
    runs
  };
}

async function main() {
  const artifactDir = path.resolve("output/measurement", `evidence-${timestampLabel()}`);
  await mkdir(artifactDir, { recursive: true });

  const server = await startStaticServer(process.cwd());

  try {
    const htmlValidate = await runHtmlValidate(artifactDir);
    const browserDriver = await ensureChromeDriver(artifactDir);
    const smoke = await runMeasurementSmoke({
      artifactDir: path.join(artifactDir, "smoke"),
      baseUrl: server.baseUrl,
      mode: "local"
    });
    const axe = await runAxe(artifactDir, server.baseUrl);
    const lighthouse = await runLighthouse(artifactDir, server.baseUrl);

    const summary = {
      artifactDir,
      axe,
      browserDriver,
      htmlValidate,
      lighthouse,
      smoke
    };

    await writeJson(path.join(artifactDir, "summary.json"), summary);
    console.log(JSON.stringify(summary, null, 2));
  } finally {
    await server.stop();
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  });
}
