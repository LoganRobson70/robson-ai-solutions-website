import { access, readFile } from "node:fs/promises";
import path from "node:path";

const pages = new Map([
  ["/", "index.html"],
  ["/index.html", "index.html"],
  ["/building-analyst", "building-analyst.html"],
  ["/building-analyst.html", "building-analyst.html"],
  ["/building-analyst-privacy", "building-analyst-privacy.html"],
  ["/building-analyst-privacy.html", "building-analyst-privacy.html"],
  ["/who-its-for", "who-its-for.html"],
  ["/who-its-for.html", "who-its-for.html"],
  ["/privacy", "privacy.html"],
  ["/privacy.html", "privacy.html"],
  ["/404.html", "404.html"],
  ["/holding.html", "holding.html"],
  ["/buildscan-viewer.html", "buildscan-viewer.html"]
]);

const htmlByFile = new Map();
for (const file of new Set(pages.values())) htmlByFile.set(file, await readFile(file, "utf8"));

const failures = [];
let checked = 0;

for (const [sourcePath, file] of pages) {
  const html = htmlByFile.get(file);
  const values = [...html.matchAll(/(?:href|src|data-src)="([^"]+)"/g)].map((match) => match[1]);
  for (const value of values) {
    if (/^(?:mailto:|https?:|data:|blob:)/i.test(value)) continue;
    const url = new URL(value, `https://robsonai.co.uk${sourcePath}`);
    const targetPage = pages.get(url.pathname);
    checked += 1;

    if (targetPage) {
      if (url.hash) {
        const id = decodeURIComponent(url.hash.slice(1));
        const targetHtml = htmlByFile.get(targetPage);
        if (!new RegExp(`\\bid=["']${id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}["']`).test(targetHtml)) {
          failures.push(`${file}: ${value} points to missing #${id} in ${targetPage}`);
        }
      }
      continue;
    }

    const assetPath = path.resolve(`.${url.pathname}`);
    try {
      await access(assetPath);
    } catch {
      failures.push(`${file}: ${value} does not resolve to a public page or file`);
    }
  }
}

if (failures.length) throw new Error(`Internal link check failed:\n${failures.join("\n")}`);
console.log(JSON.stringify({ status: "pass", checkedReferences: checked, checkedPages: pages.size }, null, 2));
