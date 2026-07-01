# Release Staging Manifest - Website Quality Restart

Last updated: 2026-07-01 16:46 BST
Owner: Wayne Robson / Robson AI Solutions
Repo: `/private/tmp/robson-ai-website-quality-restart`
Status: hero BuildScan proof visual fix is active; preview deploy approved; production not approved

## 1. Purpose

This manifest records the file scope for the approved hero BuildScan proof visual fix:

`hero-buildscan-proof-visual-fix`

The fix responds to Wayne's live-site comment that the homepage BuildScan proof visual looks distorted.

This tranche:

- preserves the existing BuildScan proof assets
- corrects the hero proof surface so the model view is not forced into a tall portrait crop
- keeps the work bounded to homepage proof visual layout, responsive image selection, and tracking docs
- keeps production deployment approval-gated

It does not add new product claims, change public model assets, enable analytics/forms, or perform any production, DNS, customer-data, or external-message work.

Do not run `git add .` for this repository.

## 2. Approval Boundary

Wayne approved option `1` on 2026-07-01 for this focused visual fix:

- scoped local edits
- tracker and staging-manifest updates
- local browser/screenshot evidence
- relevant local QA
- explicit-path staging of the files listed in this manifest
- local commit
- branch push for `codex/hero-buildscan-proof-visual-fix`
- Netlify preview deploy
- deployed preview gate

Wayne must approve before Codex performs any of these actions:

- GitHub PR
- production deploy
- DNS/domain changes
- analytics/forms/customer data handling
- external messages

## 3. Current Dirty Scope

Current hero proof visual fix dirty scope:

- 4 modified tracked files.
- 0 untracked candidate files.
- Total dirty candidate files: 4.
- This manifest itself is intentionally included in the modified tracked file count.

Current validation evidence:

- Local targeted screenshot after fix: `output/product-design-audit/hero-proof-fix-2026-07-01/home-hero-proof-fixed-zoom-872x996.png`.
- Local targeted viewport check shows the hero image now uses the `840w` source and renders around `706x428` at the flagged viewport instead of around `706x982`.
- `git diff --check` passed.
- `npm run qa:visual-polish` passed with artifact `output/visual-polish/smoke-2026-07-01T15-40-25-626Z/visual-polish-smoke.json`.
- `npm run qa:responsive` passed with artifact `output/responsive-route/smoke-2026-07-01T15-40-25-646Z/responsive-route-smoke.json`.
- `npm run qa:product-design` passed with artifact `output/product-design-acceptance/smoke-2026-07-01T15-41-05-177Z/product-design-acceptance-smoke.json`.
- `npm run qa:rendered` passed with screenshot pack `output/playwright/rendered-release-smoke-2026-07-01T15-41-05-177Z`.
- `npm run qa:release-staging-manifest` passed with artifact `output/release-staging-manifest/smoke-2026-07-01T15-40-25-513Z/release-staging-manifest-smoke.json`; 4 modified tracked files, 0 untracked candidate files, 4 explicit staging paths.
- `npm run qa:release-inventory` passed with artifact `output/release-inventory/inventory-2026-07-01T15-40-25-500Z/release-candidate-inventory.json`; dirtyCount 4, zero secret findings, GLB externalUriCount 0.
- `npm run qa:release:local` passed all 37 steps with artifact `output/release-local-gate/gate-2026-07-01T15-42-36-520Z/release-local-gate.json`.
- Full-gate measurement evidence: `output/measurement/evidence-2026-07-01T15-44-53-053Z`; Lighthouse median performance 100, accessibility 100, best practices 100, SEO 100, LCP about 1.80 seconds, CLS 0.
- Full-gate rendered screenshots: `output/playwright/rendered-release-smoke-2026-07-01T15-44-08-535Z`.
- Clean local review URL: `http://127.0.0.1:8133/`; HTTP 200 confirmed.
- Clean full local release gate passed all 37 steps: `output/release-local-gate/gate-2026-06-29T16-19-55-329Z/release-local-gate.json`.
- Clean rendered screenshot evidence: `output/playwright/rendered-release-smoke-2026-06-29T16-21-29-423Z`.
- Clean measurement evidence: `output/measurement/evidence-2026-06-29T16-21-48-137Z`; Lighthouse performance 100, accessibility 100, best practices 100, SEO 100, LCP about 1.80 seconds, CLS 0.
- Clean staging-manifest smoke passed inside the full gate: `output/release-staging-manifest/smoke-2026-06-29T16-20-03-286Z/release-staging-manifest-smoke.json`; 9 modified tracked files, 2 untracked candidate files, 11 explicit staging paths.
- Clean release inventory passed inside the full gate: `output/release-inventory/inventory-2026-06-29T16-20-03-053Z/release-candidate-inventory.json`; dirtyCount 11, zero secret findings, GLB externalUriCount 0.
- Local commit created: `242410f` (`Prepare clean website restart candidate`).
- Netlify preview deploy passed: `https://website-quality-clean-restart--robson-ai-website.netlify.app`, deploy `6a42b0eaaaa964aad7bb6dce`, preview gate `output/release-preview-gate/gate-2026-06-29T17-53-08-619Z/release-preview-gate.json`.
- Netlify production deploy passed: `https://robsonai.co.uk`, deploy `6a42c401c0f172f9fa99e3a7`, production gate `output/release-production-gate/gate-2026-06-29T19-15-08-658Z/release-preview-gate.json`.
- Rollback target confirmed before publish: `6a415b5db31442000737c37c`.
- Live recheck on 2026-06-29 20:25 BST: Netlify API still reports deploy `6a42c401c0f172f9fa99e3a7`, and `https://robsonai.co.uk/` returned HTTP 200 with `content-length: 37720`.
- Source-control closeout commit created and pushed: `75f9a13` (`Document clean restart production alignment`).
- Branch `codex/website-quality-clean-restart`, local `main`, and `origin/main` aligned at `75f9a13`.
- GitHub-triggered Netlify production deploy passed: `https://robsonai.co.uk`, deploy `6a435aeccc48bb00085e7eb4`, production gate `output/release-production-gate/gate-2026-06-30T06-00-24-751Z/release-preview-gate.json`.
- Latest production release inventory passed with dirtyCount 0: `output/release-inventory/inventory-2026-06-30T06-00-24-883Z/release-candidate-inventory.json`; zero secret findings, GLB externalUriCount 0.
- Rejected preview record: `https://proof-motion-polish--robson-ai-website.netlify.app`, deploy `6a41739b29f5ccb3751611f1`; this preview must not be published.
- Restart audit added at `docs/codex/WEBSITE_RESTART_DESIGN_AUDIT.md`.
- Local rendered screenshot pack against production: `output/playwright/rendered-release-smoke-2026-06-28T19-38-52-319Z`.
- Cleanup validation passed: `node --check script.js`, `git diff --check`, and `npm run qa:release-inventory`.
- Reset candidate rendered screenshot evidence after the Focus fix: `output/playwright/rendered-release-smoke-2026-06-28T20-07-57-608Z`.
- Full local release gate passed all 37 steps after the Focus fix: `output/release-local-gate/gate-2026-06-28T20-09-23-996Z/release-local-gate.json`.
- Measurement evidence: `output/measurement/evidence-2026-06-28T20-11-11-946Z`; Lighthouse performance 100, accessibility 100, best practices 100, SEO 100, LCP about 1.80 seconds, CLS 0.
- Current 8-file manifest smoke passed: `output/release-staging-manifest/smoke-2026-06-28T20-26-30-213Z/release-staging-manifest-smoke.json`; 7 modified tracked files, 1 untracked candidate file, 8 explicit staging paths.
- Current release inventory passed: `output/release-inventory/inventory-2026-06-28T20-26-30-267Z/release-candidate-inventory.json`; dirtyCount 8, zero secret findings, GLB externalUriCount 0.
- Current 9-file manifest smoke passed before the approval-checklist alignment: `output/release-staging-manifest/smoke-2026-06-28T20-34-59-483Z/release-staging-manifest-smoke.json`; 7 modified tracked files, 2 untracked candidate files, 9 explicit staging paths.
- Current release inventory passed before the approval-checklist alignment: `output/release-inventory/inventory-2026-06-28T20-34-59-483Z/release-candidate-inventory.json`; dirtyCount 9, zero secret findings, GLB externalUriCount 0.
- Current 10-file full local release gate passed after approval-checklist alignment: `output/release-local-gate/gate-2026-06-28T20-47-02-707Z/release-local-gate.json`.
- Current 10-file manifest smoke passed: `output/release-staging-manifest/smoke-2026-06-28T20-47-09-831Z/release-staging-manifest-smoke.json`; 8 modified tracked files, 2 untracked candidate files, 10 explicit staging paths.
- Current 10-file release inventory passed: `output/release-inventory/inventory-2026-06-28T20-47-09-639Z/release-candidate-inventory.json`; dirtyCount 10, zero secret findings, GLB externalUriCount 0.
- Current rendered screenshot evidence: `output/playwright/rendered-release-smoke-2026-06-28T20-48-26-094Z`.
- Current measurement evidence: `output/measurement/evidence-2026-06-28T20-48-45-497Z`; Lighthouse performance 100, accessibility 100, best practices 100, SEO 100, LCP about 1.80 seconds, CLS 0.
- Anchor-navigation polish added after screenshot review: desktop BuildScan nav now lands below the sticky header without exposing previous Operations controls, and `scripts/rendered-release-smoke.mjs` now checks this.
- Current 11-file full local release gate passed after anchor-navigation polish: `output/release-local-gate/gate-2026-06-28T21-09-14-722Z/release-local-gate.json`.
- Current 11-file manifest smoke passed inside the full gate: `output/release-staging-manifest/smoke-2026-06-28T21-09-21-067Z/release-staging-manifest-smoke.json`; 9 modified tracked files, 2 untracked candidate files, 11 explicit staging paths.
- Current 11-file release inventory passed inside the full gate: `output/release-inventory/inventory-2026-06-28T21-09-20-859Z/release-candidate-inventory.json`; dirtyCount 11, zero secret findings, GLB externalUriCount 0.
- Current rendered screenshot evidence after anchor-navigation polish: `output/playwright/rendered-release-smoke-2026-06-28T21-10-35-845Z`.
- Current measurement evidence after anchor-navigation polish: `output/measurement/evidence-2026-06-28T21-11-19-578Z`; Lighthouse performance 100, accessibility 100, best practices 100, SEO 100, LCP about 1.80 seconds, CLS 0.
- Clean-worktree restart path created at `/private/tmp/robson-ai-website-quality-restart` on branch `codex/website-quality-clean-restart` from `origin/main`.
- Brand consistency polish added after secondary-page screenshot review: `who-its-for.html` now keeps the header strapline as `Solutions` instead of reading like a separate `Robson AI Fit` product, and `scripts/rendered-release-smoke.mjs` checks the page straplines.
- `script.js` has no net restart change in the clean worktree; the dirty state on the earlier branch came from removing rejected preview code back to the production baseline.
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

These files are modified and expected in the hero proof visual fix candidate:

```text
docs/codex/RELEASE_STAGING_MANIFEST.md
docs/codex/TRACKER.md
index.html
styles.css
```

## 5. Untracked Candidate Files

No untracked files are expected in the post-production closeout candidate.

```text
```

## 6. Asset Size Watch

No asset files are changed in this hero proof visual fix candidate.

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

After checks pass, use an explicit path list rather than `git add .`.

```bash
git add -- \
  docs/codex/RELEASE_STAGING_MANIFEST.md \
  docs/codex/TRACKER.md \
  index.html \
  styles.css
```

## 9. Required Checks Before Commit

Run these after staging and before any approved closeout commit:

```bash
git status --short --branch
git diff --cached --check
npm run qa:release-inventory
```

Then confirm the staged file set matches this manifest before committing.

## 10. Required Checks After Preview Deploy

After Wayne approves any future Netlify preview deploy, run:

```bash
QA_BASE_URL="https://<netlify-preview-url>" npm run qa:release:preview
```

## 11. Required Checks After Production Deploy

Only after Wayne explicitly approves another production deployment, run:

```bash
QA_PRODUCTION_URL="https://robsonai.co.uk" CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production
```

## 12. Rollback Path

If the post-production closeout causes a regression before commit, restore the manifest-approved docs to the prior committed state, then rerun the local checks before another decision. If the current production publish needs rollback, restore Netlify production deploy `6a415b5db31442000737c37c` unless a newer approved rollback target is confirmed first.
