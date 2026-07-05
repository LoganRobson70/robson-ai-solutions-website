# Release Staging Manifest - Globe Loader And Privacy Disclosure Local Candidate

Last updated: 2026-07-05 16:21 BST
Owner: Wayne Robson / Robson AI Solutions
Repo: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website`
Status: Globe Loader atlas-detail and privacy disclosure release is production-gated; this manifest now describes the local-only GitHub/main reconciliation preflight branch; no branch push, GitHub PR, DNS, analytics/forms, customer data handling, external messages or further deploys are approved

## 1. Purpose

This manifest defines the intended file scope for the local Globe Loader polish candidate:

`globe-loader-hero-integration`

The candidate responds to Wayne's request to move the Globe Loader folder into this project and look to incorporate it into the design. It now also includes the approved `privacy-service-disclosure-baseline` response to the iubenda missing-services warning.

This candidate:

- preserves the normalized Globe Loader source reference inside `docs/codex/reference/globe-loader/`
- imports Wayne's Downloads items into `docs/codex/reference/globe-loader-imports/2026-07-05/` as source evidence without overwriting the normalized reference copy
- does not ship the prototype's React/D3/CDN runtime in the public website
- generates a compact public atlas asset at `assets/globe-loader/world-countries-lite.json` from the user-supplied standalone loader's embedded world-atlas topology
- adds a small local canvas Globe Loader treatment to the zip-style homepage hero using the existing Robson AI version 3 icon asset
- matches Wayne's supplied Globe Loader recording more closely with a pale globe, real country-detail outlines, visible graticule, larger centred v3 icon and cleaner orbit arcs
- keeps the Globe Loader separated from the hero field with an effectively invisible soft field on desktop/tablet, while hiding the decorative loader on phone-width layouts where it would compete with the hero copy
- keeps reduced-motion and QA-static fallbacks
- updates the release inventory/staging-manifest scripts so copied reference paths with spaces are handled safely
- updates `privacy.html` to disclose the current/potential services a scanner can identify: Netlify hosting/security logs, optional Google Analytics 4 / Google tag script, browser local storage for consent, email-provider handling for mailto enquiries, self-hosted fonts/assets, and the same-origin BuildScan/Three.js model-viewer path
- keeps privacy/analytics, email-first contact, professional-review boundaries, and cautious maturity language

It does not add launched pricing, payment checkout, live customer-system integrations, analytics/forms, branch pushes or further deploys.

Do not run `git add .` for this candidate.

## 2. Approval Boundary

Wayne instructed Codex to incorporate the Globe Loader and move the Globe Loader folder into this project.

Approved and completed for this local candidate:

- safe local code/docs edits
- local browser/screenshot evidence
- local QA validation
- copying the source reference folder into `docs/codex/reference/globe-loader/`
- moving Wayne's Downloads `Globe loader` folder and newer top-level `Globe Loader (standalone).html` file into `docs/codex/reference/globe-loader-imports/2026-07-05/`
- generating the compact atlas asset from the supplied standalone Globe Loader source
- updating the privacy notice locally to cover the iubenda missing-services warning without activating analytics or changing production

Wayne approved a local evidence-doc source-control alignment step after production.

Wayne must approve before Codex performs any of these actions:

- further Netlify preview deploy
- production rollback or further production deploy
- branch push
- GitHub PR
- DNS/domain changes
- analytics/forms/customer data handling
- external messages

## 3. Current Source-Control Scope

Current release state:

- Live Netlify production deploy: `6a4a38a0eef7cd2aee692a52`.
- Source commit: `db3922c`.
- Previous production deploy and immediate rollback candidate if Wayne asks: `6a4933ec2451857b37ea20b4`.
- Local review URL while the Python server is running: `http://127.0.0.1:8134/`.
- Public release files and Globe Loader/privacy reference assets are already committed in `db3922c`.
- Current reconciliation branch: `codex/github-main-reconciliation-preflight` in worktree `/private/tmp/robson-ai-website-main-reconciliation`.
- 21 modified tracked files.
- 18 untracked candidate files.
- Total dirty candidate files: 39.

Current validation evidence:

- `git diff --check` passed.
- `node --check script.js` passed.
- `node --check scripts/release-candidate-inventory.mjs` passed.
- `node --check scripts/release-staging-manifest-smoke.mjs` passed.
- Direct Playwright Globe Loader check passed on `http://127.0.0.1:8134/`: canvas visible, nonblank, frame checksum changed between samples, and mobile horizontal overflow was false. Artifact: `output/globe-loader-check/2026-07-04T17-38-50-277Z/globe-loader-check.json`.
- `npm run qa:product-design` passed with artifact `output/product-design-acceptance/smoke-2026-07-04T17-39-40-610Z/product-design-acceptance-smoke.json`.
- `npm run qa:responsive` passed with artifact `output/responsive-route/smoke-2026-07-04T17-39-41-254Z/responsive-route-smoke.json`.
- `npm run qa:visual-polish` passed with artifact `output/visual-polish/smoke-2026-07-04T17-39-44-861Z/visual-polish-smoke.json`.
- `npm run qa:rendered` passed with screenshots in `output/playwright/rendered-release-smoke-2026-07-04T17-42-26-181Z`.
- `npm run qa:release-inventory` passed with artifact `output/release-inventory/inventory-2026-07-04T17-41-42-866Z/release-candidate-inventory.json`; dirtyCount 18 at that point, zero secret findings, GLB externalUriCount 0.
- `npm run qa:release-staging-manifest` passed with artifact `output/release-staging-manifest/smoke-2026-07-04T17-47-36-561Z/release-staging-manifest-smoke.json`; 11 modified tracked files, 8 untracked candidate files, 19 staging paths.
- Full `npm run qa:release:local` passed with artifact `output/release-local-gate/gate-2026-07-04T17-48-01-517Z/release-local-gate.json`; 37 steps.
- Release inventory inside the full local gate passed with artifact `output/release-inventory/inventory-2026-07-04T17-48-08-292Z/release-candidate-inventory.json`; dirtyCount 19, zero secret findings, GLB externalUriCount 0.
- Measurement evidence inside the full local gate reported axe violations 0 across six routes and Lighthouse median performance 100, accessibility 100, best practices 100, SEO 100, LCP about 1.37s, CLS 0. Artifact: `output/measurement/evidence-2026-07-04T17-49-53-637Z`.
- `/Users/wayne/Downloads/Globe loader/Globe Loader (standalone).html` was copied to `docs/codex/reference/globe-loader/Globe Loader (standalone).html`; the imported standalone HTML files were later whitespace-normalised before commit so staged Git whitespace checks pass.
- Reference-match Playwright check passed after the latest visual update: pale/bright pixels, dark outline pixels, nonblank canvas, animation checksum change, and no mobile overflow. Artifact: `output/globe-loader-reference-match/2026-07-05T08-17-37-259Z/globe-loader-reference-match.json`.
- Focused post-update QA passed:
  - `npm run qa:product-design`: `output/product-design-acceptance/smoke-2026-07-05T08-18-56-439Z/product-design-acceptance-smoke.json`
  - `npm run qa:responsive`: `output/responsive-route/smoke-2026-07-05T08-18-55-655Z/responsive-route-smoke.json`
  - `npm run qa:visual-polish`: `output/visual-polish/smoke-2026-07-05T08-18-53-756Z/visual-polish-smoke.json`
  - `npm run qa:release-inventory`: `output/release-inventory/inventory-2026-07-05T08-18-49-446Z/release-candidate-inventory.json`; dirtyCount 19, zero secret findings, GLB externalUriCount 0.
- Full `npm run qa:release:local` passed after the reference-match Globe Loader update with artifact `output/release-local-gate/gate-2026-07-05T08-29-25-227Z/release-local-gate.json`; 37 steps.
- Release inventory inside the full local gate passed with artifact `output/release-inventory/inventory-2026-07-05T08-29-32-219Z/release-candidate-inventory.json`; dirtyCount 19, zero secret findings, GLB externalUriCount 0.
- Staging manifest inside the full local gate passed with artifact `output/release-staging-manifest/smoke-2026-07-05T08-29-32-493Z/release-staging-manifest-smoke.json`; 11 modified tracked files, 8 untracked candidate files, 19 staging paths.
- Rendered screenshot evidence inside the full local gate passed with screenshots in `output/playwright/rendered-release-smoke-2026-07-05T08-30-56-989Z`.
- Measurement evidence inside the full local gate reported axe violations 0 across six routes and Lighthouse median performance 100, accessibility 100, best practices 100, SEO 100, LCP about 1.37s, CLS 0. Artifact: `output/measurement/evidence-2026-07-05T08-31-18-171Z`.
- Wayne's Downloads `Globe loader` folder and newer top-level `Globe Loader (standalone).html` file were moved into `docs/codex/reference/globe-loader-imports/2026-07-05/`; a follow-up `npm run qa:release-inventory` passed with artifact `output/release-inventory/inventory-2026-07-05T08-50-12-991Z/release-candidate-inventory.json`, dirtyCount 28, zero secret findings, GLB externalUriCount 0.
- The committed standalone HTML reference copies are whitespace-normalised for Git hygiene. Their staged SHA-256 values are: normalized reference/folder copy `2d79420cf7c65804f99d4182be4da188f8440aca4ea9a7f8785dff0557a64616`; newer top-level standalone copy `58e3c42a9d6e7b0fda3b416b3b567aca2eedfe937e31125c46db97cc55e12ab2`.
- Final post-move `npm run qa:release-inventory` passed with artifact `output/release-inventory/inventory-2026-07-05T08-53-51-666Z/release-candidate-inventory.json`; dirtyCount 28, zero secret findings, GLB externalUriCount 0.
- Final post-move `npm run qa:release-staging-manifest` passed with artifact `output/release-staging-manifest/smoke-2026-07-05T08-53-53-715Z/release-staging-manifest-smoke.json`; 11 modified tracked files, 17 untracked candidate files, 28 staging paths.
- Final post-move full `npm run qa:release:local` passed with artifact `output/release-local-gate/gate-2026-07-05T08-54-13-332Z/release-local-gate.json`; 37 steps.
- Release inventory inside the final full local gate passed with artifact `output/release-inventory/inventory-2026-07-05T08-54-19-902Z/release-candidate-inventory.json`; dirtyCount 28, zero secret findings, GLB externalUriCount 0.
- Staging manifest inside the final full local gate passed with artifact `output/release-staging-manifest/smoke-2026-07-05T08-54-20-211Z/release-staging-manifest-smoke.json`; 11 modified tracked files, 17 untracked candidate files, 28 staging paths.
- Rendered screenshot evidence inside the final full local gate passed with screenshots in `output/playwright/rendered-release-smoke-2026-07-05T08-55-45-845Z`.
- Measurement evidence inside the final full local gate reported axe violations 0 across six routes and Lighthouse median performance 100, accessibility 100, best practices 100, SEO 100, LCP about 1.37s, CLS 0. Artifact: `output/measurement/evidence-2026-07-05T08-56-06-222Z`.
- Direct Globe Loader band check passed after the vertical rail update across desktop, tablet and mobile. Desktop/tablet rail is visible and meaningfully taller than the square canvas; phone-width rail is hidden to avoid text overlap; no horizontal overflow. Artifact and screenshots: `output/globe-loader-band/2026-07-05T09-13-10-403Z/`.
- First post-band `npm run qa:responsive` and `npm run qa:visual-polish` failed because a hidden mobile canvas could draw a globe outline with a negative radius. `script.js` now exits early for tiny hidden canvases, and both checks passed afterward:
  - `npm run qa:responsive`: `output/responsive-route/smoke-2026-07-05T09-15-56-518Z/responsive-route-smoke.json`
  - `npm run qa:visual-polish`: `output/visual-polish/smoke-2026-07-05T09-15-56-539Z/visual-polish-smoke.json`
- Full `npm run qa:release:local` passed after the vertical rail and hidden-canvas guard with artifact `output/release-local-gate/gate-2026-07-05T09-16-50-325Z/release-local-gate.json`; 37 steps.
- Release inventory inside that full local gate passed with artifact `output/release-inventory/inventory-2026-07-05T09-16-57-787Z/release-candidate-inventory.json`; dirtyCount 28, zero secret findings, GLB externalUriCount 0.
- Staging manifest inside that full local gate passed with artifact `output/release-staging-manifest/smoke-2026-07-05T09-16-58-104Z/release-staging-manifest-smoke.json`; 11 modified tracked files, 17 untracked candidate files, 28 staging paths.
- Rendered screenshot evidence inside that full local gate passed with screenshots in `output/playwright/rendered-release-smoke-2026-07-05T09-18-23-035Z`.
- Measurement evidence inside that full local gate reported axe violations 0 across six routes and Lighthouse median performance 99, accessibility 100, best practices 100, SEO 100, LCP about 1.37s, CLS 0. Artifact: `output/measurement/evidence-2026-07-05T09-18-52-239Z`.
- Atlas-detail Globe Loader browser check passed on `http://127.0.0.1:8134/`: `assets/globe-loader/world-countries-lite.json?v=20260705` loaded with HTTP 200, the canvas was visible and nonblank, dark-detail pixels were present, the decorative loader was hidden on 390px mobile, and no console/page errors were recorded. Artifact and screenshots: `output/globe-loader-atlas-match/2026-07-05T09-48-16-437Z/`.
- Post-atlas `npm run qa:release-inventory` passed with artifact `output/release-inventory/inventory-2026-07-05T09-49-12-808Z/release-candidate-inventory.json`; dirtyCount 29, zero secret findings, GLB externalUriCount 0, and the new globe atlas asset remained under its 80 KB budget.
- Post-atlas `npm run qa:release-staging-manifest` passed with artifact `output/release-staging-manifest/smoke-2026-07-05T09-51-18-899Z/release-staging-manifest-smoke.json`; 11 modified tracked files, 18 untracked candidate files, 29 total dirty candidate files, and 29 explicit staging paths.
- Full `npm run qa:release:local` passed after the atlas-detail Globe Loader update with artifact `output/release-local-gate/gate-2026-07-05T09-51-42-586Z/release-local-gate.json`; 37 steps.
- BuildScan viewer smoke inside that full local gate confirmed the homepage now requests `assets/globe-loader/world-countries-lite.json?v=20260705` successfully while preserving the opt-in GLB viewer. Artifact: `output/buildscan-viewer/smoke-2026-07-05T09-51-53-209Z`.
- Rendered screenshot evidence inside that full local gate passed with screenshots in `output/playwright/rendered-release-smoke-2026-07-05T09-53-14-742Z`.
- Measurement evidence inside that full local gate reported axe violations 0 across six routes and Lighthouse median performance 98, accessibility 100, best practices 100, SEO 100, LCP about 1.59s, CLS 0. Artifact: `output/measurement/evidence-2026-07-05T09-53-35-404Z`.
- Live production privacy triage found no active GA4 Measurement ID and no external runtime requests on first load or after the accept path; this indicates the iubenda email is likely flagging prepared/allowed services or stale scan results rather than active analytics execution.
- Privacy disclosure baseline updated `privacy.html` locally to disclose Netlify hosting/security logs, optional GA4/Google tag script, localStorage consent state, mailto/email-provider handling, self-hosted fonts/assets, and same-origin BuildScan/Three.js model-viewer assets.
- Targeted privacy validation passed:
  - `npx --no-install html-validate --rule doctype-style:off --rule void-style:off privacy.html`
  - `npm run qa:release-security`: `output/release-security/smoke-2026-07-05T10-13-07-755Z/release-security-smoke.json`
  - `npm run qa:measurement:local`: `output/measurement/smoke-2026-07-05T10-13-08-945Z`
  - `npm run qa:release-inventory`: `output/release-inventory/inventory-2026-07-05T10-13-08-758Z/release-candidate-inventory.json`; dirtyCount 30, zero secret findings, GLB externalUriCount 0
- Refreshed `npm run qa:release-staging-manifest` passed after the privacy update with artifact `output/release-staging-manifest/smoke-2026-07-05T10-15-55-913Z/release-staging-manifest-smoke.json`; 12 modified tracked files, 18 untracked candidate files, 30 total dirty candidate files, and 30 explicit staging paths.
- Refreshed full `npm run qa:release:local` passed after the privacy update with artifact `output/release-local-gate/gate-2026-07-05T10-16-22-113Z/release-local-gate.json`; 37 steps.
- Release inventory inside that refreshed full local gate passed with artifact `output/release-inventory/inventory-2026-07-05T10-16-28-702Z/release-candidate-inventory.json`; dirtyCount 30, zero secret findings, GLB externalUriCount 0.
- Rendered screenshot evidence inside that refreshed full local gate passed with screenshots in `output/playwright/rendered-release-smoke-2026-07-05T10-17-51-615Z`, including `desktop-privacy.png`.
- Measurement evidence inside that refreshed full local gate reported axe violations 0 across six routes and Lighthouse median performance 98, accessibility 100, best practices 100, SEO 100, LCP about 1.59s, CLS 0. Artifact: `output/measurement/evidence-2026-07-05T10-18-36-016Z`.

The release inventory gate enforces:

- no forbidden dirty paths such as `.env*`, `.netlify/`, `node_modules/`, `output/`, `.git/`, `.DS_Store`, or key/certificate files
- explicit allowed dirty path patterns
- file-size budgets for release assets
- BuildScan GLB binary glTF 2.0 structure
- zero external URI references inside the public-preview GLB
- secret-like string scan across candidate files

## 4. Modified Tracked Files

These files are modified and expected in the local candidate:

```text
docs/codex/GOAL_COMPLETION_AUDIT.md
docs/codex/PRODUCTION_RELEASE_RUNBOOK.md
docs/codex/PUBLISH_READINESS_AUDIT.md
docs/codex/RELEASE_STAGING_MANIFEST.md
docs/codex/TRACKER.md
docs/codex/WEBSITE_APPROVAL_REVIEW_CHECKLIST.md
docs/codex/WEBSITE_RESTART_DESIGN_AUDIT.md
docs/codex/WEBSITE_RESTART_PREVIEW_HANDOFF.md
index.html
privacy.html
script.js
scripts/keyboard-release-smoke.mjs
scripts/measurement-evidence.mjs
scripts/measurement-smoke.mjs
scripts/product-design-acceptance-smoke.mjs
scripts/release-candidate-inventory.mjs
scripts/release-security-smoke.mjs
scripts/release-staging-manifest-smoke.mjs
scripts/rendered-release-smoke.mjs
scripts/responsive-route-smoke.mjs
styles.css
```

## 5. Untracked Candidate Files

These generated and copied reference files are expected in this local candidate:

```text
assets/globe-loader/world-countries-lite.json
docs/codex/reference/globe-loader-imports/2026-07-05/Globe Loader (standalone).html
docs/codex/reference/globe-loader-imports/2026-07-05/Globe loader/.thumbnail
docs/codex/reference/globe-loader-imports/2026-07-05/Globe loader/Globe Loader (standalone).html
docs/codex/reference/globe-loader-imports/2026-07-05/Globe loader/Globe Loader.html
docs/codex/reference/globe-loader-imports/2026-07-05/Globe loader/iR-logo-full.png
docs/codex/reference/globe-loader-imports/2026-07-05/Globe loader/iR-logo-nodot.png
docs/codex/reference/globe-loader-imports/2026-07-05/Globe loader/tweaks-panel.jsx
docs/codex/reference/globe-loader-imports/2026-07-05/Globe loader/uploads/Icon V3.png
docs/codex/reference/globe-loader-imports/2026-07-05/Globe loader/uploads/iR-logo-nodot.png
docs/codex/reference/globe-loader/.thumbnail
docs/codex/reference/globe-loader/Globe Loader (standalone).html
docs/codex/reference/globe-loader/Globe Loader.html
docs/codex/reference/globe-loader/iR-logo-full.png
docs/codex/reference/globe-loader/iR-logo-nodot.png
docs/codex/reference/globe-loader/tweaks-panel.jsx
docs/codex/reference/globe-loader/uploads/Icon V3.png
docs/codex/reference/globe-loader/uploads/iR-logo-nodot.png
```

## 6. Asset Size Watch

One generated public atlas asset is changed in this local candidate:

```text
assets/globe-loader/world-countries-lite.json                65.7K
```

This file is generated from the user-supplied Globe Loader standalone HTML's embedded world-atlas topology. It allows the website canvas loader to draw real country-detail rings without shipping the prototype's React, Babel, D3, TopoJSON or CDN runtime.

Existing watched release assets remain governed by `npm run qa:release-inventory`, including:

```text
assets/robson-ai-icon-v3-transparent-320.webp             6.0K
assets/showcase/buildscan-ludgershall-public.glb          1.3M
assets/vendor/three-0.164.1/build/three.module.js         1.2M
```

The large files are intentional for the opt-in viewer path, not first-load homepage payloads. The public-preview GLB remains a direct-downloadable public asset once previewed or published.

The copied Globe Loader source reference includes large standalone HTML prototype files and image files under `docs/codex/reference/globe-loader/` and `docs/codex/reference/globe-loader-imports/2026-07-05/`. Existing Netlify redirects force `/docs/*` to 404, so these are repository reference files rather than public website assets.

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
  assets/globe-loader/world-countries-lite.json \
  docs/codex/GOAL_COMPLETION_AUDIT.md \
  docs/codex/PRODUCTION_RELEASE_RUNBOOK.md \
  docs/codex/PUBLISH_READINESS_AUDIT.md \
  docs/codex/RELEASE_STAGING_MANIFEST.md \
  docs/codex/TRACKER.md \
  docs/codex/WEBSITE_APPROVAL_REVIEW_CHECKLIST.md \
  docs/codex/WEBSITE_RESTART_DESIGN_AUDIT.md \
  docs/codex/WEBSITE_RESTART_PREVIEW_HANDOFF.md \
  "docs/codex/reference/globe-loader-imports/2026-07-05/Globe Loader (standalone).html" \
  "docs/codex/reference/globe-loader-imports/2026-07-05/Globe loader/.thumbnail" \
  "docs/codex/reference/globe-loader-imports/2026-07-05/Globe loader/Globe Loader (standalone).html" \
  "docs/codex/reference/globe-loader-imports/2026-07-05/Globe loader/Globe Loader.html" \
  "docs/codex/reference/globe-loader-imports/2026-07-05/Globe loader/iR-logo-full.png" \
  "docs/codex/reference/globe-loader-imports/2026-07-05/Globe loader/iR-logo-nodot.png" \
  "docs/codex/reference/globe-loader-imports/2026-07-05/Globe loader/tweaks-panel.jsx" \
  "docs/codex/reference/globe-loader-imports/2026-07-05/Globe loader/uploads/Icon V3.png" \
  "docs/codex/reference/globe-loader-imports/2026-07-05/Globe loader/uploads/iR-logo-nodot.png" \
  docs/codex/reference/globe-loader/.thumbnail \
  "docs/codex/reference/globe-loader/Globe Loader (standalone).html" \
  "docs/codex/reference/globe-loader/Globe Loader.html" \
  docs/codex/reference/globe-loader/iR-logo-full.png \
  docs/codex/reference/globe-loader/iR-logo-nodot.png \
  docs/codex/reference/globe-loader/tweaks-panel.jsx \
  "docs/codex/reference/globe-loader/uploads/Icon V3.png" \
  docs/codex/reference/globe-loader/uploads/iR-logo-nodot.png \
  index.html \
  privacy.html \
  script.js \
  scripts/keyboard-release-smoke.mjs \
  scripts/measurement-evidence.mjs \
  scripts/measurement-smoke.mjs \
  scripts/product-design-acceptance-smoke.mjs \
  scripts/release-candidate-inventory.mjs \
  scripts/release-security-smoke.mjs \
  scripts/release-staging-manifest-smoke.mjs \
  scripts/rendered-release-smoke.mjs \
  scripts/responsive-route-smoke.mjs \
  styles.css
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

Wayne approved the preview step. Completed preview validation:

```bash
QA_BASE_URL="https://globe-loader-privacy--robson-ai-website.netlify.app" npm run qa:release:preview
```

- Preview deploy: `https://globe-loader-privacy--robson-ai-website.netlify.app`
- Deploy id: `6a4a349440be152194797efd`
- Deploy logs: `https://app.netlify.com/projects/robson-ai-website/deploys/6a4a349440be152194797efd`
- Preview gate artifact: `output/release-preview-gate/gate-2026-07-05T10-40-51-607Z/release-preview-gate.json`
- Result: pass, 14 steps.

## 11. Checks After Production Deploy

Wayne approved the production step. Completed production validation:

```bash
QA_PRODUCTION_URL="https://robsonai.co.uk" CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production
```

- Production URL: `https://robsonai.co.uk`
- Production deploy: `6a4a38a0eef7cd2aee692a52`
- Unique deploy URL: `https://6a4a38a0eef7cd2aee692a52--robson-ai-website.netlify.app`
- Deploy logs: `https://app.netlify.com/projects/robson-ai-website/deploys/6a4a38a0eef7cd2aee692a52`
- Production gate artifact: `output/release-production-gate/gate-2026-07-05T10-58-00-989Z/release-preview-gate.json`
- Result: pass, 14 steps.

## 12. Rollback Path

If this production candidate causes a live regression, restore previous production deploy `6a4933ec2451857b37ea20b4` unless Wayne confirms a different rollback target first. If a local/docs regression is found, restore the affected manifest-approved files to the prior committed state and rerun the relevant checks before another decision.
