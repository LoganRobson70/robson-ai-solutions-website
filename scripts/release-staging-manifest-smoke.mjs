import { execFile } from "node:child_process";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const MANIFEST_PATH = "docs/codex/RELEASE_STAGING_MANIFEST.md";

const FORBIDDEN_STAGING_PATTERNS = [
  /^\.env/,
  /^\.git\//,
  /^\.netlify\//,
  /^node_modules\//,
  /^output\//,
  /(^|\/)\.DS_Store$/,
  /\.(key|pem|p12|mobileprovision|cer)$/
];

function timestampLabel() {
  return new Date().toISOString().replace(/[:.]/g, "-");
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

async function git(args) {
  const { stdout } = await execFileAsync("git", args, { maxBuffer: 20 * 1024 * 1024 });
  return stdout;
}

async function listDirtyFiles() {
  const stdout = await git(["status", "--porcelain=v1", "-uall"]);
  return stdout
    .split("\n")
    .filter(Boolean)
    .map((line) => ({
      status: line.slice(0, 2),
      path: line.slice(3)
    }));
}

async function listHeadFiles() {
  const stdout = await git(["ls-tree", "-r", "--name-only", "HEAD"]);
  return new Set(stdout.split("\n").filter(Boolean));
}

function uniqueSorted(values) {
  return [...new Set(values)].sort((left, right) => left.localeCompare(right));
}

function parseCodeBlockAfterHeading(markdown, heading) {
  const headingIndex = markdown.indexOf(heading);
  assert(headingIndex !== -1, `${heading} section is missing from ${MANIFEST_PATH}.`);

  const afterHeading = markdown.slice(headingIndex);
  const blockMatch = afterHeading.match(/```(?:text|bash)\n([\s\S]*?)\n```/);
  assert(blockMatch, `${heading} should include a fenced code block.`);

  return blockMatch[1];
}

function parsePlainPathBlock(markdown, heading) {
  return parseCodeBlockAfterHeading(markdown, heading)
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .sort((left, right) => left.localeCompare(right));
}

function parseStagingCommandPaths(markdown) {
  const commandBlock = parseCodeBlockAfterHeading(markdown, "## 8. Staging Command After Approval Only");

  assert(!/^\s*git\s+add\s+\.(?:\s|$)/m.test(commandBlock), "Staging manifest must not use `git add .`.");
  assert(/^\s*git\s+add\s+--(?:\s|\\|$)/m.test(commandBlock), "Staging manifest should use `git add -- <paths>`.");

  const paths = commandBlock
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .filter((line) => !line.startsWith("git add --"))
    .map((line) => line.replace(/\\$/, "").trim())
    .filter(Boolean);

  return paths;
}

function parseCount(markdown, label) {
  const escapedLabel = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const directPattern = new RegExp(`-\\s+(\\d+)\\s+${escapedLabel}\\.`, "i");
  const totalPattern = new RegExp(`-\\s+Total\\s+${escapedLabel}:\\s+(\\d+)\\.`, "i");
  const match = markdown.match(directPattern) ?? markdown.match(totalPattern);
  assert(match, `Manifest count line for "${label}" is missing.`);
  return Number(match[1]);
}

function compareSets(label, expected, actual) {
  const expectedSet = new Set(expected);
  const actualSet = new Set(actual);
  const missing = actual.filter((filePath) => !expectedSet.has(filePath));
  const extra = expected.filter((filePath) => !actualSet.has(filePath));

  assert(missing.length === 0 && extra.length === 0, `${label} mismatch. Missing from manifest: ${missing.join(", ") || "none"}. Extra in manifest: ${extra.join(", ") || "none"}.`);

  return {
    label,
    count: actual.length,
    missing,
    extra
  };
}

function validateNoForbiddenPaths(paths, label) {
  const forbidden = paths.filter((filePath) => FORBIDDEN_STAGING_PATTERNS.some((pattern) => pattern.test(filePath)));
  assert(forbidden.length === 0, `${label} includes forbidden staging path(s): ${forbidden.join(", ")}.`);
}

async function writeSummary(summary, artifactDir) {
  await mkdir(artifactDir, { recursive: true });
  const summaryPath = path.join(artifactDir, "release-staging-manifest-smoke.json");
  await writeFile(summaryPath, `${JSON.stringify(summary, null, 2)}\n`, "utf8");
  return summaryPath;
}

export async function runReleaseStagingManifestSmoke({
  artifactDir = path.resolve("output/release-staging-manifest", `smoke-${timestampLabel()}`)
} = {}) {
  const markdown = await readFile(MANIFEST_PATH, "utf8");
  const dirtyFiles = await listDirtyFiles();
  const headFiles = await listHeadFiles();
  const actualModifiedTracked = uniqueSorted(dirtyFiles.filter((file) => headFiles.has(file.path)).map((file) => file.path));
  const actualUntracked = uniqueSorted(dirtyFiles.filter((file) => !headFiles.has(file.path)).map((file) => file.path));
  const actualAllDirty = uniqueSorted(dirtyFiles.map((file) => file.path));

  const manifestModifiedTracked = uniqueSorted(parsePlainPathBlock(markdown, "## 4. Modified Tracked Files"));
  const manifestUntracked = uniqueSorted(parsePlainPathBlock(markdown, "## 5. Untracked Candidate Files"));
  const manifestStagingPaths = parseStagingCommandPaths(markdown);
  const manifestStagingUnique = uniqueSorted(manifestStagingPaths);

  assert(manifestStagingPaths.length === manifestStagingUnique.length, "Staging command contains duplicate paths.");

  validateNoForbiddenPaths(manifestModifiedTracked, "Modified tracked file list");
  validateNoForbiddenPaths(manifestUntracked, "Untracked candidate file list");
  validateNoForbiddenPaths(manifestStagingUnique, "Staging command");

  const countChecks = {
    modifiedTracked: parseCount(markdown, "modified tracked files"),
    untrackedCandidate: parseCount(markdown, "untracked candidate files"),
    totalDirtyCandidate: parseCount(markdown, "dirty candidate files")
  };

  assert(countChecks.modifiedTracked === actualModifiedTracked.length, `Manifest modified tracked count is ${countChecks.modifiedTracked}; actual is ${actualModifiedTracked.length}.`);
  assert(countChecks.untrackedCandidate === actualUntracked.length, `Manifest untracked candidate count is ${countChecks.untrackedCandidate}; actual is ${actualUntracked.length}.`);
  assert(countChecks.totalDirtyCandidate === actualAllDirty.length, `Manifest total dirty count is ${countChecks.totalDirtyCandidate}; actual is ${actualAllDirty.length}.`);

  const comparisons = [
    compareSets("Modified tracked files", manifestModifiedTracked, actualModifiedTracked),
    compareSets("Untracked candidate files", manifestUntracked, actualUntracked),
    compareSets("Explicit staging command paths", manifestStagingUnique, actualAllDirty)
  ];

  const summary = {
    manifestPath: MANIFEST_PATH,
    generatedAt: new Date().toISOString(),
    status: "pass",
    counts: {
      modifiedTracked: actualModifiedTracked.length,
      untrackedCandidate: actualUntracked.length,
      totalDirtyCandidate: actualAllDirty.length,
      stagingCommandPaths: manifestStagingUnique.length
    },
    countChecks,
    comparisons,
    approvalBoundaryChecked: /Wayne must approve before Codex performs any of these actions:/i.test(markdown),
    gitAddDotPresent: /^\s*git\s+add\s+\.(?:\s|$)/m.test(markdown)
  };
  const summaryPath = await writeSummary(summary, artifactDir);

  return {
    ...summary,
    summaryPath
  };
}

const executedDirectly = process.argv[1] && import.meta.url === new URL(`file://${process.argv[1]}`).href;

if (executedDirectly) {
  runReleaseStagingManifestSmoke()
    .then((summary) => {
      console.log(JSON.stringify({
        status: summary.status,
        summaryPath: summary.summaryPath,
        counts: summary.counts,
        approvalBoundaryChecked: summary.approvalBoundaryChecked
      }, null, 2));
    })
    .catch((error) => {
      console.error(error instanceof Error ? error.message : String(error));
      process.exitCode = 1;
    });
}
