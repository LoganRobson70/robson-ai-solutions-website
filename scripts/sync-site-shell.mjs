import { readFile, writeFile } from "node:fs/promises";
import { siteFooter, siteHeader } from "./site-shell-source.mjs";

const pages = [
  ["index.html", "home"],
  ["building-analyst.html", "building-analyst"],
  ["who-its-for.html", "who"],
  ["privacy.html", "privacy"],
  ["404.html", "404"],
];

for (const [file, page] of pages) {
  let html = await readFile(file, "utf8");
  html = html.replace(/    <header class="site-header[\s\S]*?    <\/header>/, siteHeader(page));
  html = html.replace(/    <footer class="site-footer[\s\S]*?    <\/footer>/, siteFooter());
  await writeFile(file, html);
}
