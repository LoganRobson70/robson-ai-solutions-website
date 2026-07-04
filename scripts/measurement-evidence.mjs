import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";
import { chromium } from "playwright";

import { runMeasurementSmoke } from "./measurement-smoke.mjs";
import { startStaticServer } from "./lib/static-server.mjs";

const __filename = fileURLToPath(import.meta.url);
const APP_ENTRY_PATH = "/";
const HTML_VALIDATE_RULES = ["doctype-style:off", "void-style:off"];
const HTML_FILES = [
  "holding.html",
  "index.html",
  "preview.html",
  "privacy.html",
  "building-analyst.html",
  "who-its-for.html",
  "buildscan-viewer.html"
];
const A11Y_PATHS = ["/", "/index.html", "/privacy.html", "/building-analyst.html", "/who-its-for.html", "/buildscan-viewer.html"];
const LIGHTHOUSE_BUDGETS = {
  accessibilityMin: 95,
  bestPracticesMin: 100,
  clsMax: 0.1,
  lcpMax: 2500,
  performanceMin: 90,
  seoMin: 100
};

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
  const axeSource = await readFile(path.resolve("node_modules/axe-core/axe.min.js"), "utf8");
  const browser = await chromium.launch({ channel: "chrome", headless: true });
  const results = [];

  try {
    for (const routePath of A11Y_PATHS) {
      const target = new URL(routePath, baseUrl);
      target.searchParams.set("qa", "axe");
      const targetUrl = target.toString();
      const fileName = routePath === "/" ? "axe-home.json" : `axe-${routePath.replace(/[/.]/g, "-").replace(/^-+/, "")}.json`;
      const reportPath = path.join(artifactDir, fileName);
      const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
      const page = await context.newPage();

      try {
        const response = await page.goto(targetUrl, { waitUntil: "networkidle" });
        if (response?.status() !== 200) {
          throw new Error(`Axe route ${targetUrl} returned HTTP ${response?.status() ?? "unknown"}.`);
        }

        await page.addScriptTag({ content: axeSource });
        const axeResult = await page.evaluate(async () => window.axe.run(document, {
          runOnly: {
            type: "tag",
            values: ["wcag2a", "wcag2aa"]
          }
        }));

        await writeJson(reportPath, axeResult);
        results.push({
          reportPath,
          url: targetUrl,
          violationCount: axeResult.violations.length,
          violations: axeResult.violations.map((violation) => ({
            id: violation.id,
            impact: violation.impact,
            nodes: violation.nodes.length
          }))
        });
      } finally {
        await context.close();
      }
    }
  } finally {
    await browser.close();
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

function assertLighthouseBudget(lighthouse) {
  const medianRun = lighthouse.runs.find((run) => run.run === lighthouse.medianPerformanceRun);

  if (!medianRun) {
    throw new Error("Lighthouse budget failed: median run was not found.");
  }

  const failures = [];

  if (medianRun.performance < LIGHTHOUSE_BUDGETS.performanceMin) {
    failures.push(`performance ${medianRun.performance} < ${LIGHTHOUSE_BUDGETS.performanceMin}`);
  }

  if (medianRun.accessibility < LIGHTHOUSE_BUDGETS.accessibilityMin) {
    failures.push(`accessibility ${medianRun.accessibility} < ${LIGHTHOUSE_BUDGETS.accessibilityMin}`);
  }

  if (medianRun.bestPractices < LIGHTHOUSE_BUDGETS.bestPracticesMin) {
    failures.push(`best practices ${medianRun.bestPractices} < ${LIGHTHOUSE_BUDGETS.bestPracticesMin}`);
  }

  if (medianRun.seo < LIGHTHOUSE_BUDGETS.seoMin) {
    failures.push(`SEO ${medianRun.seo} < ${LIGHTHOUSE_BUDGETS.seoMin}`);
  }

  if (medianRun.lcp > LIGHTHOUSE_BUDGETS.lcpMax) {
    failures.push(`LCP ${Math.round(medianRun.lcp)} ms > ${LIGHTHOUSE_BUDGETS.lcpMax} ms`);
  }

  if (medianRun.cls > LIGHTHOUSE_BUDGETS.clsMax) {
    failures.push(`CLS ${medianRun.cls} > ${LIGHTHOUSE_BUDGETS.clsMax}`);
  }

  if (failures.length) {
    throw new Error(`Lighthouse budget failed:\n- ${failures.join("\n- ")}`);
  }

  return {
    actual: {
      accessibility: medianRun.accessibility,
      bestPractices: medianRun.bestPractices,
      cls: medianRun.cls,
      lcp: medianRun.lcp,
      performance: medianRun.performance,
      seo: medianRun.seo
    },
    medianPerformanceRun: medianRun.run,
    passed: true,
    thresholds: LIGHTHOUSE_BUDGETS
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
    const lighthouseBudget = assertLighthouseBudget(lighthouse);

    const summary = {
      artifactDir,
      axe,
      browserDriver,
      htmlValidate,
      lighthouse,
      lighthouseBudget,
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
