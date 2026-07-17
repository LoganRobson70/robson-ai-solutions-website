import { execFile } from "node:child_process";
import { constants as fsConstants } from "node:fs";
import { access, readFile, stat, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

const ALLOWED_DIRTY_PATTERNS = [
  /^404\.html$/,
  /^\.gitignore$/,
  /^\.netlifyignore$/,
  /^AGENTS\.md$/,
  /^README\.md$/,
  /^building-analyst\.html$/,
  /^building-analyst-privacy\.html$/,
  /^buildscan-viewer\.html$/,
  /^design-qa\.md$/,
  /^docs\/codex\/reference\/globe-loader(?:\/.*|-imports\/.*)$/,
  /^docs\/.*\.md$/,
  /^holding\.html$/,
  /^index\.html$/,
  /^netlify\.toml$/,
  /^package-lock\.json$/,
  /^package\.json$/,
  /^preview\.html$/,
  /^privacy\.html$/,
  /^script\.js$/,
  /^sitemap\.xml$/,
  /^scripts\/.*\.mjs$/,
  /^styles\.css$/,
  /^styles-production\.css$/,
  /^who-its-for\.html$/,
  /^assets\/globe-loader\/world-countries-lite\.json$/,
  /^assets\/robson-ai-icon-v3-.*\.(png|webp)$/,
  /^assets\/showcase\/buildscan-ludgershall-(model-view-\d+\.webp|buildscan-view-\d+\.webp|public\.glb)$/,
  /^assets\/showcase\/building-analyst-leisure-centre-explorer(?:-(640|960|1280))?\.webp$/,
  /^assets\/showcase\/building-analyst-marketing-(professional-review|evidence-to-report|structured-draft)-(840|1600)\.webp$/,
  /^assets\/showcase\/robson-ai-building-surveying-(ipad-hero-v4|interactive-hero-v5(?:-(640|960))?)\.webp$/,
  /^assets\/vendor\/three-0\.164\.1\/(LICENSE|build\/three\.module\.js|examples\/jsm\/(controls\/OrbitControls\.js|libs\/meshopt_decoder\.module\.js|loaders\/GLTFLoader\.js|utils\/BufferGeometryUtils\.js))$/
];

const FORBIDDEN_DIRTY_PATTERNS = [
  /^\.env/,
  /^\.git\//,
  /^\.netlify\//,
  /^node_modules\//,
  /^output\//,
  /(^|\/)\.DS_Store$/,
  /\.(key|pem|p12|mobileprovision|cer)$/
];

const FILE_BUDGETS = [
  { path: "assets/globe-loader/world-countries-lite.json", maxBytes: 80_000 },
  { path: "assets/robson-ai-icon-v3-32.png", maxBytes: 5_000 },
  { path: "assets/robson-ai-icon-v3-180.png", maxBytes: 25_000 },
  { path: "assets/robson-ai-icon-v3-128.webp", maxBytes: 10_000 },
  { path: "assets/robson-ai-icon-v3-transparent-320.webp", maxBytes: 20_000 },
  { path: "assets/showcase/buildscan-ludgershall-model-view-420.webp", maxBytes: 50_000 },
  { path: "assets/showcase/buildscan-ludgershall-model-view-840.webp", maxBytes: 100_000 },
  { path: "assets/showcase/buildscan-ludgershall-buildscan-view-420.webp", maxBytes: 20_000 },
  { path: "assets/showcase/buildscan-ludgershall-buildscan-view-840.webp", maxBytes: 50_000 },
  { path: "assets/showcase/buildscan-ludgershall-buildscan-view-1600.webp", maxBytes: 130_000 },
  { path: "assets/showcase/buildscan-ludgershall-public.glb", maxBytes: 11_000_000 },
  { path: "assets/showcase/building-analyst-leisure-centre-explorer.webp", maxBytes: 400_000 },
  { path: "assets/showcase/building-analyst-leisure-centre-explorer-640.webp", maxBytes: 60_000 },
  { path: "assets/showcase/building-analyst-leisure-centre-explorer-960.webp", maxBytes: 110_000 },
  { path: "assets/showcase/building-analyst-leisure-centre-explorer-1280.webp", maxBytes: 180_000 },
  { path: "assets/showcase/building-analyst-marketing-professional-review-840.webp", maxBytes: 125_000 },
  { path: "assets/showcase/building-analyst-marketing-professional-review-1600.webp", maxBytes: 250_000 },
  { path: "assets/showcase/building-analyst-marketing-evidence-to-report-840.webp", maxBytes: 125_000 },
  { path: "assets/showcase/building-analyst-marketing-evidence-to-report-1600.webp", maxBytes: 250_000 },
  { path: "assets/showcase/building-analyst-marketing-structured-draft-840.webp", maxBytes: 125_000 },
  { path: "assets/showcase/building-analyst-marketing-structured-draft-1600.webp", maxBytes: 250_000 },
  { path: "assets/showcase/robson-ai-building-surveying-ipad-hero-v4.webp", maxBytes: 400_000 },
  { path: "assets/showcase/robson-ai-building-surveying-interactive-hero-v5.webp", maxBytes: 400_000 },
  { path: "assets/showcase/robson-ai-building-surveying-interactive-hero-v5-640.webp", maxBytes: 70_000 },
  { path: "assets/showcase/robson-ai-building-surveying-interactive-hero-v5-960.webp", maxBytes: 120_000 },
  { path: "assets/vendor/three-0.164.1/build/three.module.js", maxBytes: 1_500_000 },
  { path: "assets/vendor/three-0.164.1/examples/jsm/controls/OrbitControls.js", maxBytes: 75_000 },
  { path: "assets/vendor/three-0.164.1/examples/jsm/loaders/GLTFLoader.js", maxBytes: 150_000 },
  { path: "assets/vendor/three-0.164.1/examples/jsm/libs/meshopt_decoder.module.js", maxBytes: 75_000 },
  { path: "assets/vendor/three-0.164.1/examples/jsm/utils/BufferGeometryUtils.js", maxBytes: 75_000 },
  { path: "assets/fonts/fraunces-latin.woff2", maxBytes: 100_000 },
  { path: "assets/fonts/manrope-latin.woff2", maxBytes: 50_000 }
];

const SECRET_PATTERNS = [
  { name: "OpenAI API key", regex: /sk-[A-Za-z0-9_-]{20,}/g },
  { name: "GitHub token", regex: /(ghp_[A-Za-z0-9_]{20,}|github_pat_[A-Za-z0-9_]+)/g },
  { name: "Slack token", regex: /xox[baprs]-[A-Za-z0-9-]{20,}/g },
  { name: "AWS access key", regex: /AKIA[0-9A-Z]{16}/g },
  { name: "Google API key", regex: /AIza[0-9A-Za-z_-]{35}/g },
  { name: "Private key block", regex: /-----BEGIN (RSA|OPENSSH|EC|PRIVATE) KEY-----/g },
  { name: "Preview password assignment", regex: /ROBSON_PREVIEW_PASSWORD\s*=/g },
  { name: "Quoted password literal", regex: /password\s*[:=]\s*['"][^'"]{8,}/gi },
  { name: "Quoted secret literal", regex: /secret\s*[:=]\s*['"][^'"]{8,}/gi }
];

const SECRET_SCAN_EXCLUDES = [
  /^\.git\//,
  /^node_modules\//,
  /^output\//,
  /^assets\/vendor\/three-0\.164\.1\//,
  /^assets\/showcase\/.*\.glb$/
];

function timestampLabel() {
  return new Date().toISOString().replace(/[:.]/g, "-");
}

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

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

async function exists(filePath) {
  try {
    await access(filePath, fsConstants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function git(args) {
  const { stdout } = await execFileAsync("git", args, { maxBuffer: 20 * 1024 * 1024 });
  return stdout;
}

async function listDirtyFiles() {
  const stdout = await git(["status", "--porcelain=v1", "-z", "-uall"]);
  return stdout
    .split("\0")
    .filter(Boolean)
    .map((line) => ({
      status: line.slice(0, 2),
      path: line.slice(3)
    }));
}

function pathAllowed(filePath) {
  return ALLOWED_DIRTY_PATTERNS.some((pattern) => pattern.test(filePath));
}

function pathForbidden(filePath) {
  return FORBIDDEN_DIRTY_PATTERNS.some((pattern) => pattern.test(filePath));
}

async function validateDirtyInventory() {
  const dirtyFiles = await listDirtyFiles();
  const forbidden = dirtyFiles.filter(({ path: filePath }) => pathForbidden(filePath));
  const unexpected = dirtyFiles.filter(({ path: filePath }) => !pathAllowed(filePath));

  assert(forbidden.length === 0, `Forbidden dirty files present: ${forbidden.map((file) => file.path).join(", ")}`);
  assert(unexpected.length === 0, `Unexpected dirty files present: ${unexpected.map((file) => file.path).join(", ")}`);

  return {
    dirtyCount: dirtyFiles.length,
    dirtyFiles
  };
}

async function validateFileBudgets() {
  const results = [];

  for (const budget of FILE_BUDGETS) {
    assert(await exists(budget.path), `${budget.path} is missing.`);
    const fileStat = await stat(budget.path);
    assert(fileStat.size <= budget.maxBytes, `${budget.path} exceeds budget ${budget.maxBytes}; actual ${fileStat.size}.`);
    results.push({
      path: budget.path,
      bytes: fileStat.size,
      maxBytes: budget.maxBytes
    });
  }

  return results;
}

function readU32(buffer, offset) {
  return buffer.readUInt32LE(offset);
}

function collectUris(value, pathLabel = "") {
  const uris = [];

  if (!value || typeof value !== "object") {
    return uris;
  }

  if (typeof value.uri === "string") {
    uris.push({
      path: pathLabel,
      uri: value.uri
    });
  }

  for (const [key, child] of Object.entries(value)) {
    uris.push(...collectUris(child, pathLabel ? `${pathLabel}.${key}` : key));
  }

  return uris;
}

async function validateBuildScanGlb(filePath = "assets/showcase/buildscan-ludgershall-public.glb") {
  const buffer = await readFile(filePath);
  assert(buffer.toString("utf8", 0, 4) === "glTF", `${filePath} is not a binary glTF file.`);
  assert(readU32(buffer, 4) === 2, `${filePath} should be glTF version 2.`);
  assert(readU32(buffer, 8) === buffer.length, `${filePath} declared length does not match file size.`);

  let offset = 12;
  let json = null;
  const chunks = [];

  while (offset < buffer.length) {
    const chunkLength = readU32(buffer, offset);
    const chunkType = buffer.toString("utf8", offset + 4, offset + 8);
    offset += 8;
    const chunk = buffer.subarray(offset, offset + chunkLength);
    chunks.push({ chunkType, chunkLength });

    if (chunkType === "JSON") {
      json = JSON.parse(chunk.toString("utf8").trim());
    }

    offset += chunkLength;
  }

  assert(json, `${filePath} should contain a JSON chunk.`);
  const uris = collectUris(json);
  const externalUris = uris.filter(({ uri }) => !uri.startsWith("data:"));
  assert(externalUris.length === 0, `${filePath} should not reference external URI resources.`);

  return {
    path: filePath,
    bytes: buffer.length,
    chunks,
    asset: json.asset || null,
    meshCount: json.meshes?.length || 0,
    materialCount: json.materials?.length || 0,
    imageCount: json.images?.length || 0,
    bufferCount: json.buffers?.length || 0,
    externalUriCount: externalUris.length
  };
}

async function listTrackedAndCandidateFiles() {
  const tracked = (await git(["ls-files"]))
    .split("\n")
    .filter(Boolean);
  const untracked = (await git(["ls-files", "-o", "--exclude-standard"]))
    .split("\n")
    .filter(Boolean);

  return [...new Set([...tracked, ...untracked])].sort();
}

function shouldSecretScan(filePath) {
  return !SECRET_SCAN_EXCLUDES.some((pattern) => pattern.test(filePath));
}

function allowedSecretFixture(filePath, line, patternName) {
  return filePath === "scripts/preview-auth-smoke.mjs" &&
    patternName === "Quoted password literal" &&
    line.includes("preview-pass");
}

async function scanSecrets() {
  const files = (await listTrackedAndCandidateFiles()).filter(shouldSecretScan);
  const findings = [];

  for (const filePath of files) {
    let content;

    try {
      content = await readFile(filePath, "utf8");
    } catch {
      continue;
    }

    const lines = content.split("\n");

    lines.forEach((line, index) => {
      for (const pattern of SECRET_PATTERNS) {
        pattern.regex.lastIndex = 0;

        if (pattern.regex.test(line) && !allowedSecretFixture(filePath, line, pattern.name)) {
          findings.push({
            path: filePath,
            line: index + 1,
            pattern: pattern.name
          });
        }
      }
    });
  }

  assert(findings.length === 0, `Secret-like patterns found: ${findings.map((finding) => `${finding.path}:${finding.line}:${finding.pattern}`).join(", ")}`);

  return {
    scannedFiles: files.length,
    findings
  };
}

async function writeSummary(summary, artifactDir) {
  await mkdir(artifactDir, { recursive: true });
  const summaryPath = path.join(artifactDir, "release-candidate-inventory.json");
  await writeFile(summaryPath, `${JSON.stringify(summary, null, 2)}\n`, "utf8");

  return summaryPath;
}

export async function runReleaseCandidateInventory({
  artifactDir = path.resolve("output/release-inventory", `inventory-${timestampLabel()}`)
} = {}) {
  const summary = {
    dirtyInventory: await validateDirtyInventory(),
    fileBudgets: await validateFileBudgets(),
    buildscanGlb: await validateBuildScanGlb(),
    secretScan: await scanSecrets()
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

  runReleaseCandidateInventory({
    artifactDir: args["artifact-dir"]
  })
    .then((summary) => {
      console.log(JSON.stringify({
        summaryPath: summary.summaryPath,
        dirtyCount: summary.dirtyInventory.dirtyCount,
        budgetedFiles: summary.fileBudgets.length,
        glb: {
          bytes: summary.buildscanGlb.bytes,
          meshCount: summary.buildscanGlb.meshCount,
          materialCount: summary.buildscanGlb.materialCount,
          imageCount: summary.buildscanGlb.imageCount,
          externalUriCount: summary.buildscanGlb.externalUriCount
        },
        secretScan: summary.secretScan
      }, null, 2));
    })
    .catch((error) => {
      console.error(error instanceof Error ? error.message : String(error));
      process.exitCode = 1;
    });
}
