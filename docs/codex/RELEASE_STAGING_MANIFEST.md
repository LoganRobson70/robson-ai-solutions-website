# Release Staging Manifest - Live Globe Loader Cache-Bust Hotfix

Last updated: 2026-07-05 23:00 BST
Owner: Wayne Robson / Robson AI Solutions
Repo: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website`
Hotfix worktree: `/private/tmp/robson-ai-website-live-globe-fix`
Branch: `codex/live-globe-loader-fix`
Status: local cache-bust validation passed; no commit, branch push, Netlify preview deploy, production deploy, rollback, DNS/domain change, analytics/forms change, customer-data handling, external message or destructive git action is approved by this document

## 1. Purpose

This manifest defines the intended file scope for the live Globe Loader cache-bust hotfix:

`live-globe-loader-cache-bust`

Wayne reported on 2026-07-05 that the live homepage Globe Loader appeared missing and the Robson AI icon appeared massive. Local and live browser diagnostics showed the Globe Loader canvas was present and nonblank, but at Wayne's in-app browser width it was pushed too far right and the centre icon dominated the globe, making the treatment read like a floating oversized logo rather than the supplied Globe Loader visual.

The first hotfix corrected the visual code and passed production validation. Wayne then reported that he still could not see the globe. Follow-up diagnosis confirmed the live HTML still referenced `styles.css?v=20260704a` and `script.js?v=20260704a` while those assets are served with `Cache-Control: public, max-age=31536000, immutable`. Existing browsers can therefore keep the old CSS/JS and miss the corrected Globe Loader.

This cache-bust hotfix:

- updates public HTML references to `styles.css?v=20260705b` and `script.js?v=20260705b`
- keeps the existing Globe Loader visual code unchanged
- preserves the existing zip-style homepage, BuildScan section, privacy baseline, reduced-motion behaviour and mobile hiding rule
- keeps the scope narrow to forcing browsers onto the verified current CSS/JS

It does not change copy, pricing, analytics, forms, BuildScan GLB assets, privacy content, DNS, Netlify settings, product positioning, Globe Loader geometry or JavaScript drawing logic.

Do not run `git add .` for this candidate.

## 2. Approval Boundary

Approved locally:

- safe local code/docs edits
- local browser/screenshot evidence
- local release validation
- tracker and staging-manifest updates for the hotfix scope

Wayne must approve before Codex performs any of these actions:

- git commit
- branch push
- GitHub PR
- Netlify preview deploy
- Netlify production deploy
- rollback
- DNS/domain changes
- analytics/forms/customer-data handling
- external messages
- destructive git actions

## 3. Current Source-Control Scope

Current cache-bust state:

- Base branch: `origin/main` at `697fee7`
- Hotfix branch: `codex/live-globe-loader-fix`
- Hotfix worktree: `/private/tmp/robson-ai-website-live-globe-fix`
- Local review URL while the Python server is running: `http://127.0.0.1:8136/`
- 9 modified tracked files.
- 0 untracked candidate files.
- Total dirty candidate files: 9.

Current validation evidence:

- Direct live diagnosis confirmed the production assets for `script.js`, `assets/globe-loader/world-countries-lite.json` and `assets/robson-ai-icon-v3-transparent-320.webp` return HTTP 200.
- Direct live diagnosis confirmed the Globe Loader canvas renders on `https://robsonai.co.uk`, but at an 872px-wide viewport the loader rail sat at the far right and the centre logo was visually dominant.
- Local browser hotfix check passed across desktop, tablet, Wayne-like 872px width and mobile. Screenshot and metric artifacts are in `output/globe-fix-check/`.
- `node --check script.js` passed.
- `git diff --check` passed before this manifest refresh.
- `npm run qa:release-inventory` passed before this manifest refresh with artifact `output/release-inventory/inventory-2026-07-05T20-50-24-853Z/release-candidate-inventory.json`; dirtyCount 2, zero secret findings and GLB externalUriCount 0.
- `npm run qa:responsive` passed before this manifest refresh with artifact `output/responsive-route/smoke-2026-07-05T20-50-25-272Z/responsive-route-smoke.json`.
- `npm run qa:visual-polish` passed before this manifest refresh with artifact `output/visual-polish/smoke-2026-07-05T20-50-25-272Z/visual-polish-smoke.json`.
- `npm run qa:rendered` passed before this manifest refresh with screenshots in `output/playwright/rendered-release-smoke-2026-07-05T20-51-52-138Z`.
- A full `npm run qa:release:local` attempt reached the release staging manifest check and failed because the previous manifest described the earlier broad 21-file release, not this four-file hotfix. This file now corrects that scope.
- `npm run qa:release-staging-manifest` passed after this manifest refresh with artifact `output/release-staging-manifest/smoke-2026-07-05T21-04-19-138Z/release-staging-manifest-smoke.json`; modifiedTracked 4, untrackedCandidate 0, totalDirtyCandidate 4, stagingCommandPaths 4.
- Full `npm run qa:release:local` passed after this manifest refresh with artifact `output/release-local-gate/gate-2026-07-05T21-04-39-682Z/release-local-gate.json`; 37 steps.
- Release inventory inside the full local gate passed with artifact `output/release-inventory/inventory-2026-07-05T21-04-46-549Z/release-candidate-inventory.json`; dirtyCount 4, zero secret findings and GLB externalUriCount 0.
- BuildScan viewer smoke inside the full local gate passed with artifact `output/buildscan-viewer/smoke-2026-07-05T21-04-50-456Z`.
- Product/design acceptance, responsive route and visual polish smokes inside the full local gate passed with artifacts `output/product-design-acceptance/smoke-2026-07-05T21-05-13-153Z/product-design-acceptance-smoke.json`, `output/responsive-route/smoke-2026-07-05T21-05-19-497Z/responsive-route-smoke.json`, and `output/visual-polish/smoke-2026-07-05T21-05-41-672Z/visual-polish-smoke.json`.
- Rendered screenshot evidence inside the full local gate passed with screenshots in `output/playwright/rendered-release-smoke-2026-07-05T21-06-11-903Z`.
- Measurement evidence inside the full local gate reported axe violations 0 across six routes and Lighthouse performance 100, accessibility 100, best practices 100, SEO 100, LCP about 1.58s and CLS 0. Artifact: `output/measurement/evidence-2026-07-05T21-06-32-286Z`.
- Browser coverage remains warning-only: Chromium passed, Firefox/WebKit Playwright binaries are unavailable locally. Artifact: `output/browser-coverage/smoke-2026-07-05T21-06-03-874Z/browser-coverage-smoke.json`.
- Dependency audit remains warning-only: production vulnerabilities 0; dev/release tooling has 17 moderate advisories and no fix was run. Artifact: `output/dependency-audit/summary-2026-07-05T21-04-47-011Z/dependency-audit-summary.json`.
- Hotfix commit created: `924b214` (`Fix live globe loader placement`) and branch `codex/live-globe-loader-fix` was pushed to origin.
- Netlify non-production preview deploy succeeded from a clean `git archive` of commit `924b214`: deploy `6a4acae9255264dd4cca1cb7`, preview URL `https://live-globe-loader-fix--robson-ai-website.netlify.app`, logs `https://app.netlify.com/projects/robson-ai-website/deploys/6a4acae9255264dd4cca1cb7`.
- Deployed preview gate passed: `QA_BASE_URL="https://live-globe-loader-fix--robson-ai-website.netlify.app" npm run qa:release:preview`; artifact `output/release-preview-gate/gate-2026-07-05T21-22-15-609Z/release-preview-gate.json`; result pass, 14 steps.
- Netlify production deploy succeeded from the same clean `git archive` of commit `924b214`: deploy `6a4acbc6eef7cd0827692aff`, production URL `https://robsonai.co.uk`, unique deploy URL `https://6a4acbc6eef7cd0827692aff--robson-ai-website.netlify.app`, logs `https://app.netlify.com/projects/robson-ai-website/deploys/6a4acbc6eef7cd0827692aff`.
- Production release gate passed: `QA_PRODUCTION_URL="https://robsonai.co.uk" CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production`; artifact `output/release-production-gate/gate-2026-07-05T21-25-50-841Z/release-preview-gate.json`; result pass, 14 steps.
- Focused live Globe Loader check passed at 872px browser width against `https://robsonai.co.uk`: canvas visible, no horizontal overflow, no console messages and no failed requests. Artifact and screenshot: `output/live-globe-postdeploy/2026-07-05T21-28-05-347Z/`.
- Wayne reported after production/source alignment that he still could not see the globe.
- Follow-up diagnosis confirmed live HTML still referenced immutable cached asset URLs `styles.css?v=20260704a` and `script.js?v=20260704a`; `curl -I` confirmed those assets are served with `Cache-Control: public,max-age=31536000,immutable`.
- Local candidate updates public HTML pages to the new shared asset version key `20260705b`.
- `scripts/release-security-smoke.mjs` is updated to approve the new reviewed script cache key `./script.js?v=20260705b`.
- `rg -n "20260704a|20260627a" *.html` returned no matches after the cache-bust update.
- `git diff --check` passed.
- `npm run qa:release-inventory` passed for the cache-bust candidate with artifact `output/release-inventory/inventory-2026-07-05T21-49-30-098Z/release-candidate-inventory.json`; dirtyCount 9, zero secret findings and GLB externalUriCount 0.
- `npm run qa:release-staging-manifest` passed with artifact `output/release-staging-manifest/smoke-2026-07-05T21-49-00-821Z/release-staging-manifest-smoke.json`; modifiedTracked 9, untrackedCandidate 0, totalDirtyCandidate 9, stagingCommandPaths 9.
- `npm run qa:release-security` passed after adding the reviewed cache key to the script-source allowlist with artifact `output/release-security/smoke-2026-07-05T21-49-00-821Z/release-security-smoke.json`.
- Full `npm run qa:release:local` passed with artifact `output/release-local-gate/gate-2026-07-05T21-49-23-250Z/release-local-gate.json`; 37 steps.
- BuildScan viewer smoke inside the full local gate confirmed the homepage now requests `styles.css?v=20260705b`, `script.js?v=20260705b` and `assets/globe-loader/world-countries-lite.json?v=20260705`.
- Product/design acceptance, responsive route and visual polish smokes passed inside the full local gate with artifacts `output/product-design-acceptance/smoke-2026-07-05T21-49-56-809Z/product-design-acceptance-smoke.json`, `output/responsive-route/smoke-2026-07-05T21-50-03-164Z/responsive-route-smoke.json`, and `output/visual-polish/smoke-2026-07-05T21-50-25-903Z/visual-polish-smoke.json`.
- Rendered screenshot evidence passed with screenshots in `output/playwright/rendered-release-smoke-2026-07-05T21-50-56-390Z`.
- Measurement evidence passed with artifact `output/measurement/evidence-2026-07-05T21-51-16-195Z`; axe violations 0, Lighthouse performance 98, accessibility 100, best practices 100, SEO 100, LCP about 1.62s and CLS 0.
- Browser coverage remains warning-only: Chromium passed, Firefox/WebKit Playwright binaries are unavailable locally.

The release inventory gate enforces:

- no forbidden dirty paths such as `.env*`, `.netlify/`, `node_modules/`, `output/`, `.git/`, `.DS_Store`, or key/certificate files
- explicit allowed dirty path patterns
- file-size budgets for release assets
- BuildScan GLB binary glTF 2.0 structure
- zero external URI references inside the public-preview GLB
- secret-like string scan across candidate files

## 4. Modified Tracked Files

These files are modified and expected in the local cache-bust candidate:

```text
404.html
building-analyst.html
docs/codex/RELEASE_STAGING_MANIFEST.md
docs/codex/TRACKER.md
holding.html
index.html
privacy.html
scripts/release-security-smoke.mjs
who-its-for.html
```

## 5. Untracked Candidate Files

No untracked files are expected in this hotfix candidate.

```text
```

## 6. Asset Size Watch

No public asset files are changed in this cache-bust candidate. The HTML references are changed so browsers fetch the already-deployed current public assets under a fresh cache key.

Existing watched release assets remain governed by `npm run qa:release-inventory`, including:

```text
assets/globe-loader/world-countries-lite.json              65.7K
assets/robson-ai-icon-v3-transparent-320.webp               6.0K
assets/showcase/buildscan-ludgershall-public.glb            1.3M
assets/vendor/three-0.164.1/build/three.module.js           1.2M
```

## 7. Files That Must Not Be Staged

Do not stage:

```text
output/
.env*
.netlify/
node_modules/
.DS_Store
.git/
local prototype folders
raw 125 MB Ludgershall GLB source files
secrets, credentials, keys, certificates, profiles, or generated screenshots
```

## 8. Staging Command After Approval Only

After Wayne approves a correction commit, use an explicit path list rather than `git add .`.

```bash
git add -- \
  404.html \
  building-analyst.html \
  docs/codex/RELEASE_STAGING_MANIFEST.md \
  docs/codex/TRACKER.md \
  holding.html \
  index.html \
  privacy.html \
  scripts/release-security-smoke.mjs \
  who-its-for.html
```

## 9. Required Checks Before Commit

Run these after staging and before commit:

```bash
git status --short --branch
git diff --cached --check
npm run qa:release:local
```

Then confirm the staged file set matches this manifest before committing.

## 10. Checks After Preview Deploy

Required after Wayne approves a deploy:

```bash
QA_BASE_URL="<cache-bust-preview-url>" npm run qa:release:preview
```

- Preview deploy: pending Wayne approval.
- Preview gate artifact: pending Wayne approval.
- Result: pending Wayne approval.

## 11. Checks After Production Deploy

Required after Wayne approves production deployment:

```bash
QA_PRODUCTION_URL="https://robsonai.co.uk" CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production
```

- Production URL: `https://robsonai.co.uk`
- Production deploy: pending Wayne approval.
- Unique deploy URL: pending Wayne approval.
- Deploy logs: pending Wayne approval.
- Production gate artifact: pending Wayne approval.
- Result: pending Wayne approval.

## 12. Rollback Path

If this hotfix causes a live regression after deployment, restore the currently live pre-hotfix production deploy unless Wayne confirms a different rollback target first. If a local/docs regression is found before deployment, restore the affected manifest-approved files to the prior committed state and rerun the relevant checks before another decision.
