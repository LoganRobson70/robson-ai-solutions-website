# Release Staging Manifest - Post-Launch Proof Motion Polish

Last updated: 2026-06-28 20:22 BST
Owner: Wayne Robson / Robson AI Solutions
Repo: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website`
Status: committed and preview-gated; no branch push or production deploy approved

## 1. Purpose

This manifest defines the intended file scope for the current approval-gated candidate:

`post-launch-proof-motion-polish`

The candidate responds to Wayne selecting option `3` after the live website and source-control baseline were aligned. It starts the next design/motion improvement tranche while keeping production safe.

This candidate:

- adds a restrained proof-motion layer inspired by the recorded Luffu/Steno/Unfold reference brief
- adds reduced-motion-safe Finder panel entry motion
- extends pointer-depth treatment to selected proof cards and model surfaces
- adds subtle BuildScan model-stage inspection treatment without auto-loading the GLB
- adds operations/evidence rail motion cues without changing product facts
- updates tracker and this manifest so release gates describe the real local candidate

It does not add new product claims, change public model assets, enable analytics/forms, or deploy anything.

Do not run `git add .` for this candidate.

## 2. Approval Boundary

Wayne approved option `3` on 2026-06-28 to start the next design/motion improvement tranche.

Wayne approved `motion polish preview` on 2026-06-28, covering explicit-path staging, local commit, non-production Netlify preview deploy, and deployed preview release-gate validation.

Preview outcome:

- Local commit: `763c8d8` (`Add proof motion polish`)
- Netlify preview deploy: `6a41739b29f5ccb3751611f1`
- Preview URL: `https://proof-motion-polish--robson-ai-website.netlify.app`
- Preview gate: `output/release-preview-gate/gate-2026-06-28T19-19-11-713Z/release-preview-gate.json`

Approved now:

- safe local code/docs edits
- local browser/screenshot evidence
- local QA and release gate validation
- explicit-path staging for the four files in this manifest
- local commit for this candidate
- non-production Netlify preview deploy
- deployed preview release-gate validation

Wayne must explicitly approve before Codex performs any of these actions:

- branch push
- GitHub PR
- production deploy
- DNS/domain changes
- analytics/forms/customer data handling
- external messages

## 3. Current Dirty Scope

Latest inspected status:

- 4 modified tracked files.
- 0 untracked candidate files.
- Total dirty candidate files: 4.
- This manifest itself is intentionally included in the modified tracked file count.

Current validation evidence:

- Live baseline screenshots captured in `output/product-design-audit/motion-tranche-2026-06-28-live`.
- `node --check script.js` passed.
- `git diff --check` passed.
- `npm run qa:visual-polish` passed with artifact `output/visual-polish/smoke-2026-06-28T18-06-42-338Z/visual-polish-smoke.json`.
- `npm run qa:responsive` passed with artifact `output/responsive-route/smoke-2026-06-28T18-06-42-620Z/responsive-route-smoke.json`.
- `npm run qa:keyboard` passed with artifact `output/playwright/keyboard-release-smoke-2026-06-28T18-06-43-163Z`.
- `npm run qa:rendered` passed with artifact `output/playwright/rendered-release-smoke-2026-06-28T18-07-26-612Z`.
- `npm run qa:release-inventory` passed with artifact `output/release-inventory/inventory-2026-06-28T18-07-26-394Z/release-candidate-inventory.json`; dirtyCount 3 before this manifest update, zero secret findings, and GLB externalUriCount 0.
- `npm run qa:product-design` passed with artifact `output/product-design-acceptance/smoke-2026-06-28T18-07-27-149Z/product-design-acceptance-smoke.json`.
- `npm run qa:release-staging-manifest` passed with artifact `output/release-staging-manifest/smoke-2026-06-28T18-09-42-986Z/release-staging-manifest-smoke.json`; counts: 4 modified tracked files, 0 untracked candidate files, 4 staging command paths.
- `npm run qa:release-inventory` passed with artifact `output/release-inventory/inventory-2026-06-28T18-09-42-986Z/release-candidate-inventory.json`; dirtyCount 4, zero secret findings, and GLB externalUriCount 0.
- `npm run qa:release:local` passed all 37 steps with artifact `output/release-local-gate/gate-2026-06-28T18-10-09-591Z/release-local-gate.json`.
- Full-gate evidence includes rendered screenshots in `output/playwright/rendered-release-smoke-2026-06-28T18-11-45-560Z` and measurement evidence in `output/measurement/evidence-2026-06-28T18-12-05-225Z`; Lighthouse reported performance 100, accessibility 100, best practices 100, SEO 100, LCP about 1.65 seconds, and CLS 0.
- Pre-commit `npm run qa:release:local` passed all 37 steps with artifact `output/release-local-gate/gate-2026-06-28T19-14-54-021Z/release-local-gate.json`; Lighthouse reported performance 98, accessibility 100, best practices 100, SEO 100, LCP about 1.73 seconds, and CLS 0.
- Netlify preview deploy `6a41739b29f5ccb3751611f1` went live at `https://proof-motion-polish--robson-ai-website.netlify.app`.
- `QA_BASE_URL="https://proof-motion-polish--robson-ai-website.netlify.app" npm run qa:release:preview` passed all 14 steps with artifact `output/release-preview-gate/gate-2026-06-28T19-19-11-713Z/release-preview-gate.json`.
- Preview gate evidence includes release inventory `output/release-inventory/inventory-2026-06-28T19-19-11-843Z/release-candidate-inventory.json` with dirtyCount 0 and zero secret findings; deployed headers `output/release-headers/smoke-2026-06-28T19-19-18-844Z/release-header-smoke.json`; BuildScan viewer `output/buildscan-viewer/smoke-2026-06-28T19-19-19-213Z`; product/design `output/product-design-acceptance/smoke-2026-06-28T19-19-52-037Z/product-design-acceptance-smoke.json`; responsive `output/responsive-route/smoke-2026-06-28T19-20-01-778Z/responsive-route-smoke.json`; visual polish `output/visual-polish/smoke-2026-06-28T19-20-36-358Z/visual-polish-smoke.json`; rendered screenshots `output/playwright/rendered-release-smoke-2026-06-28T19-21-16-388Z`; and measurement smoke `output/measurement/smoke-2026-06-28T19-21-30-032Z`.

The release inventory gate enforces:

- no forbidden dirty paths such as `.env*`, `.netlify/`, `node_modules/`, `output/`, `.git/`, `.DS_Store`, or key/certificate files
- explicit allowed dirty path patterns
- file-size budgets for release assets
- BuildScan GLB binary glTF 2.0 structure
- zero external URI references inside the public-preview GLB
- secret-like string scan across candidate files

## 4. Modified Tracked Files

These files are modified and expected in the candidate:

```text
docs/codex/RELEASE_STAGING_MANIFEST.md
docs/codex/TRACKER.md
script.js
styles.css
```

## 5. Untracked Candidate Files

These untracked files are expected in the candidate:

```text
```

## 6. Asset Size Watch

No asset files are changed in this motion polish candidate.

Existing watched release assets remain governed by `npm run qa:release-inventory`, including:

```text
assets/robson-ai-icon-v3-transparent-320.webp             6.0K
assets/showcase/buildscan-ludgershall-public.glb          1.3M
assets/vendor/three-0.164.1/build/three.module.js         1.2M
```

The large files are intentional for the opt-in viewer path, not first-load homepage payloads. The public-preview GLB remains a direct-downloadable public asset once previewed or published.

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

After Wayne approves this motion polish candidate for commit/preview, use an explicit path list rather than `git add .`.

```bash
git add -- \
  docs/codex/RELEASE_STAGING_MANIFEST.md \
  docs/codex/TRACKER.md \
  script.js \
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

## 10. Required Checks After Preview Deploy

After Wayne approves a Netlify preview deploy, run:

```bash
QA_BASE_URL="https://<netlify-preview-url>" npm run qa:release:preview
```

## 11. Required Checks After Production Deploy

Only after Wayne explicitly approves production deployment, run:

```bash
QA_PRODUCTION_URL="https://robsonai.co.uk" CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production
```

## 12. Rollback Path

If the motion polish causes visual, accessibility, performance, or interaction regression before production, revert local commit `763c8d8` or restore these four files to commit `39c5bf5`, then rerun the local release gate before another preview or production decision. If it is later published and needs rollback, restore the current live Netlify production deploy `6a415b5db31442000737c37c`.
