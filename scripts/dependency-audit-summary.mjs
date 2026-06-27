import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const VULNERABILITY_LEVELS = ["info", "low", "moderate", "high", "critical"];

function timestampLabel() {
  return new Date().toISOString().replace(/[:.]/g, "-");
}

function parseArgs(argv) {
  return {
    strictDev: argv.includes("--strict-dev")
  };
}

function runNpm(args) {
  const startedAt = new Date();

  return new Promise((resolve) => {
    const child = spawn("npm", args, {
      env: process.env,
      stdio: ["ignore", "pipe", "pipe"]
    });

    let stdout = "";
    let stderr = "";

    child.stdout.on("data", (chunk) => {
      stdout += chunk.toString();
    });

    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });

    child.on("error", (error) => {
      resolve({
        command: ["npm", ...args].join(" "),
        args,
        status: "error",
        exitCode: null,
        error: error instanceof Error ? error.message : String(error),
        startedAt: startedAt.toISOString(),
        finishedAt: new Date().toISOString(),
        stdout,
        stderr
      });
    });

    child.on("close", (code) => {
      resolve({
        command: ["npm", ...args].join(" "),
        args,
        status: code === 0 ? "pass" : "nonzero",
        exitCode: code,
        startedAt: startedAt.toISOString(),
        finishedAt: new Date().toISOString(),
        stdout,
        stderr
      });
    });
  });
}

function parseNpmJson(output, label) {
  const start = output.indexOf("{");
  const end = output.lastIndexOf("}");

  if (start === -1 || end === -1 || end < start) {
    throw new Error(`${label} did not return a parseable JSON object.`);
  }

  return JSON.parse(output.slice(start, end + 1));
}

function vulnerabilitySummary(json) {
  const source = json.audit ?? json;
  const raw = source.metadata?.vulnerabilities ?? {};
  const summary = Object.fromEntries(VULNERABILITY_LEVELS.map((level) => [level, Number(raw[level] ?? 0)]));
  summary.total = Number(raw.total ?? VULNERABILITY_LEVELS.reduce((total, level) => total + summary[level], 0));
  return summary;
}

function dependencySummary(json) {
  const source = json.audit ?? json;
  const dependencies = source.metadata?.dependencies;

  if (!dependencies) {
    return null;
  }

  return {
    prod: Number(dependencies.prod ?? 0),
    dev: Number(dependencies.dev ?? 0),
    optional: Number(dependencies.optional ?? 0),
    peer: Number(dependencies.peer ?? 0),
    peerOptional: Number(dependencies.peerOptional ?? 0),
    total: Number(dependencies.total ?? 0)
  };
}

function severityRank(severity) {
  return {
    critical: 5,
    high: 4,
    moderate: 3,
    low: 2,
    info: 1
  }[severity] ?? 0;
}

function summarizeVia(via) {
  if (!Array.isArray(via)) {
    return [];
  }

  return via.map((entry) => {
    if (typeof entry === "string") {
      return { dependency: entry };
    }

    return {
      source: entry.source,
      name: entry.name,
      dependency: entry.dependency,
      title: entry.title,
      severity: entry.severity,
      range: entry.range,
      url: entry.url
    };
  });
}

function listVulnerabilities(json) {
  const source = json.audit ?? json;
  const vulnerabilities = source.vulnerabilities ?? {};

  return Object.entries(vulnerabilities)
    .map(([name, finding]) => ({
      name,
      severity: finding.severity,
      isDirect: Boolean(finding.isDirect),
      range: finding.range,
      via: summarizeVia(finding.via),
      effects: Array.isArray(finding.effects) ? finding.effects : [],
      nodes: Array.isArray(finding.nodes) ? finding.nodes : [],
      fixAvailable: finding.fixAvailable ?? false
    }))
    .sort((left, right) => severityRank(right.severity) - severityRank(left.severity) || left.name.localeCompare(right.name));
}

function summarizeUnreviewedScripts(raw) {
  if (!raw) {
    return [];
  }

  if (Array.isArray(raw)) {
    return raw.map((details) => ({
      packageName: details.name,
      version: details.version,
      location: details.path,
      scripts: details.scripts && typeof details.scripts === "object" ? Object.keys(details.scripts).sort() : []
    }));
  }

  if (typeof raw === "object") {
    return Object.entries(raw).map(([packageName, details]) => ({
      packageName,
      version: details.version,
      location: details.location ?? details.path,
      scripts: details.scripts && typeof details.scripts === "object" ? Object.keys(details.scripts).sort() : []
    }));
  }

  return [];
}

function summarizeDryRun(json) {
  const audit = json.audit ?? json;

  return {
    added: Number(json.added ?? 0),
    removed: Number(json.removed ?? 0),
    changed: Number(json.changed ?? 0),
    audited: Number(json.audited ?? 0),
    funding: Number(json.funding ?? 0),
    vulnerabilities: vulnerabilitySummary(audit),
    dependencies: dependencySummary(audit),
    unreviewedScripts: summarizeUnreviewedScripts(json.unreviewedScripts)
  };
}

async function writeArtifact(artifactDir, fileName, content) {
  const filePath = path.join(artifactDir, fileName);
  await writeFile(filePath, content, "utf8");
  return filePath;
}

export async function runDependencyAuditSummary({
  artifactDir = path.resolve("output/dependency-audit", `summary-${timestampLabel()}`),
  strictDev = false
} = {}) {
  await mkdir(artifactDir, { recursive: true });

  const commands = {
    production: await runNpm(["audit", "--omit=dev", "--audit-level=moderate", "--json"]),
    devTooling: await runNpm(["audit", "--audit-level=moderate", "--json"]),
    dryRun: await runNpm(["audit", "fix", "--dry-run", "--json"])
  };

  await writeArtifact(artifactDir, "production-audit-stdout.json", commands.production.stdout);
  await writeArtifact(artifactDir, "production-audit-stderr.txt", commands.production.stderr);
  await writeArtifact(artifactDir, "dev-tooling-audit-stdout.json", commands.devTooling.stdout);
  await writeArtifact(artifactDir, "dev-tooling-audit-stderr.txt", commands.devTooling.stderr);
  await writeArtifact(artifactDir, "dry-run-stdout.txt", commands.dryRun.stdout);
  await writeArtifact(artifactDir, "dry-run-stderr.txt", commands.dryRun.stderr);

  const parseErrors = [];
  let productionAudit = null;
  let devToolingAudit = null;
  let dryRunAudit = null;

  try {
    productionAudit = parseNpmJson(commands.production.stdout, "Production dependency audit");
  } catch (error) {
    parseErrors.push({
      command: "production",
      message: error instanceof Error ? error.message : String(error)
    });
  }

  try {
    devToolingAudit = parseNpmJson(commands.devTooling.stdout, "Dev/release tooling dependency audit");
  } catch (error) {
    parseErrors.push({
      command: "devTooling",
      message: error instanceof Error ? error.message : String(error)
    });
  }

  try {
    dryRunAudit = parseNpmJson(commands.dryRun.stdout, "Dependency audit dry-run");
  } catch (error) {
    parseErrors.push({
      command: "dryRun",
      message: error instanceof Error ? error.message : String(error)
    });
  }

  const production = productionAudit
    ? {
        exitCode: commands.production.exitCode,
        vulnerabilities: vulnerabilitySummary(productionAudit),
        dependencies: dependencySummary(productionAudit),
        findings: listVulnerabilities(productionAudit)
      }
    : null;

  const devTooling = devToolingAudit
    ? {
        exitCode: commands.devTooling.exitCode,
        vulnerabilities: vulnerabilitySummary(devToolingAudit),
        dependencies: dependencySummary(devToolingAudit),
        findings: listVulnerabilities(devToolingAudit)
      }
    : null;

  const dryRun = dryRunAudit
    ? {
        exitCode: commands.dryRun.exitCode,
        ...summarizeDryRun(dryRunAudit)
      }
    : null;

  const blockers = [];
  const warnings = [];

  if (parseErrors.length > 0) {
    blockers.push("One or more npm audit outputs could not be parsed.");
  }

  if (production?.vulnerabilities.total > 0) {
    blockers.push("Production dependency footprint has npm audit findings.");
  }

  if (strictDev && ((devTooling?.vulnerabilities.high ?? 0) > 0 || (devTooling?.vulnerabilities.critical ?? 0) > 0)) {
    blockers.push("Strict dev-tooling mode is enabled and high/critical dev audit findings remain.");
  }

  if ((devTooling?.vulnerabilities.total ?? 0) > 0) {
    warnings.push("Dev/release tooling dependency audit still has findings.");
  }

  if ((dryRun?.vulnerabilities.total ?? 0) > 0) {
    warnings.push("Non-force npm audit fix dry-run would still leave findings.");
  }

  if ((dryRun?.unreviewedScripts.length ?? 0) > 0) {
    warnings.push("Dry-run reported install scripts that should be reviewed before dependency remediation.");
  }

  const summary = {
    status: blockers.length > 0 ? "fail" : warnings.length > 0 ? "warning" : "pass",
    strictDev,
    generatedAt: new Date().toISOString(),
    artifactDir,
    commands: Object.fromEntries(Object.entries(commands).map(([name, result]) => [
      name,
      {
        command: result.command,
        status: result.status,
        exitCode: result.exitCode,
        error: result.error,
        startedAt: result.startedAt,
        finishedAt: result.finishedAt,
        stdoutBytes: Buffer.byteLength(result.stdout, "utf8"),
        stderrBytes: Buffer.byteLength(result.stderr, "utf8")
      }
    ])),
    blockers,
    warnings,
    parseErrors,
    production,
    devTooling,
    dryRun
  };

  const summaryPath = await writeArtifact(artifactDir, "dependency-audit-summary.json", `${JSON.stringify(summary, null, 2)}\n`);

  return {
    ...summary,
    summaryPath
  };
}

const executedDirectly = process.argv[1] && import.meta.url === new URL(`file://${process.argv[1]}`).href;

if (executedDirectly) {
  const { strictDev } = parseArgs(process.argv.slice(2));

  runDependencyAuditSummary({ strictDev })
    .then((summary) => {
      console.log(JSON.stringify({
        status: summary.status,
        strictDev: summary.strictDev,
        summaryPath: summary.summaryPath,
        blockers: summary.blockers,
        warnings: summary.warnings,
        production: {
          exitCode: summary.production?.exitCode,
          vulnerabilities: summary.production?.vulnerabilities
        },
        devTooling: {
          exitCode: summary.devTooling?.exitCode,
          vulnerabilities: summary.devTooling?.vulnerabilities
        },
        dryRun: {
          exitCode: summary.dryRun?.exitCode,
          added: summary.dryRun?.added,
          removed: summary.dryRun?.removed,
          changed: summary.dryRun?.changed,
          vulnerabilities: summary.dryRun?.vulnerabilities,
          unreviewedScripts: summary.dryRun?.unreviewedScripts
        }
      }, null, 2));

      if (summary.status === "fail") {
        process.exitCode = 1;
      }
    })
    .catch((error) => {
      console.error(error instanceof Error ? error.message : String(error));
      process.exitCode = 1;
    });
}
