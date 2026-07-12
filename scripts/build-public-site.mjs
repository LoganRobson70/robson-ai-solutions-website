import { cp, mkdir, rm } from "node:fs/promises";

const files = [
  "index.html",
  "building-analyst.html",
  "who-its-for.html",
  "privacy.html",
  "404.html",
  "buildscan-viewer.html",
  "styles.css",
  "styles-production.css",
  "script.js",
  "robots.txt",
  "sitemap.xml",
];

await rm("dist", { recursive: true, force: true });
await mkdir("dist", { recursive: true });
await cp("assets", "dist/assets", { recursive: true });
for (const file of files) await cp(file, `dist/${file}`);
