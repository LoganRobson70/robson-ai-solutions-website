# Release Staging Manifest - Website Visual Refinement Candidate

Last updated: 2026-06-28 17:50 BST
Owner: Wayne Robson / Robson AI Solutions
Repo: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website`
Status: Wayne approved local visual refinement option `1`; commit and Netlify preview deploy are approved; production verification and production deploy are not approved

## 1. Purpose

This manifest defines the intended file scope for the current approval-gated candidate:

`website-visual-refinement-proof-surface-polish`

The candidate responds to Wayne's live website review comments that the homepage hero floating logo still looked wrong and that the Finder, Operations, Method, Credibility, and Contact sections felt too word-heavy and not aesthetically pleasing.

This candidate:

- removes the awkward floating homepage hero logo
- tightens visible copy in the flagged homepage sections
- turns word-heavy sections into clearer product/proof surfaces
- extends existing reduced-motion-aware pointer-depth behaviour to the newly refined proof surfaces
- updates local visual/product QA expectations to match the current truthful BuildScan state
- updates the active goal completion audit so it no longer claims the new visual-refinement goal is complete before Wayne approval, preview, and production gates
- updates the final handoff and page-by-page review checklist so Wayne reviews the current local candidate rather than the older live site
- updates tracker and this manifest so release gates describe the real candidate

Historical note: the previous hero-logo aspect/anchor manifest and the earlier BuildScan interactive preview manifest are preserved in git history and summarised in `docs/codex/TRACKER.md`. The active manifest must match the dirty worktree so `npm run qa:release-staging-manifest` remains a useful safety gate.

Do not run `git add .` for this candidate.

## 2. Approval Boundary

Wayne approved option `1` on 2026-06-28, meaning Codex may stage the manifest-approved files, create a local commit, create a Netlify preview deploy, and run the deployed preview gate.

Wayne must explicitly approve before Codex performs any of these actions:

- push a branch
- run production verification with confirmation
- production deploy

This candidate does not approve production deployment.

## 3. Current Dirty Scope

Latest inspected status:

- 10 modified tracked files.
- 0 untracked candidate files.
- Total dirty candidate files: 10.
- This manifest itself is intentionally included in the modified tracked file count.

Current validation evidence:

- `node --check script.js` passed.
- `node --check scripts/visual-polish-smoke.mjs` passed.
- `node --check scripts/product-design-acceptance-smoke.mjs` passed.
- `npx --no-install html-validate index.html` passed.
- `git diff --check` passed.
- `npm run qa:visual-polish` passed with artifact `output/visual-polish/smoke-2026-06-28T16-12-49-729Z/visual-polish-smoke.json`.
- `npm run qa:responsive` passed with artifact `output/responsive-route/smoke-2026-06-28T16-12-26-256Z/responsive-route-smoke.json`.
- `npm run qa:product-design` passed with artifact `output/product-design-acceptance/smoke-2026-06-28T16-12-19-636Z/product-design-acceptance-smoke.json`.
- `npm run qa:keyboard` passed with artifact `output/playwright/keyboard-release-smoke-2026-06-28T16-12-05-148Z`.
- `npm run qa:rendered` passed with artifact `output/playwright/rendered-release-smoke-2026-06-28T16-13-23-954Z`.
- `npm run qa:release-staging-manifest` passed with artifact `output/release-staging-manifest/smoke-2026-06-28T16-26-10-596Z/release-staging-manifest-smoke.json`; counts: 10 modified tracked files, 0 untracked candidate files, 10 staging command paths.
- `npm run qa:release-inventory` passed inside the full gate with artifact `output/release-inventory/inventory-2026-06-28T16-26-10-244Z/release-candidate-inventory.json`; dirtyCount 10, 79 scanned files, zero secret findings, and GLB externalUriCount 0.
- `npm run qa:release:local` passed all 37 steps for the current 10-file candidate; artifact `output/release-local-gate/gate-2026-06-28T16-26-01-341Z/release-local-gate.json`.
- Full-gate evidence includes rendered screenshots in `output/playwright/rendered-release-smoke-2026-06-28T16-27-41-612Z` and measurement evidence in `output/measurement/evidence-2026-06-28T16-28-27-073Z`; Lighthouse reported performance 99, accessibility 100, best practices 100, SEO 100, LCP about 1.65 seconds, and CLS 0.

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
docs/codex/GOAL_COMPLETION_AUDIT.md
docs/codex/FINAL_WEBSITE_APPROVAL_HANDOFF.md
docs/codex/TRACKER.md
docs/codex/WEBSITE_APPROVAL_REVIEW_CHECKLIST.md
index.html
script.js
scripts/product-design-acceptance-smoke.mjs
scripts/visual-polish-smoke.mjs
styles.css
```

## 5. Untracked Candidate Files

These untracked files are expected in the candidate:

```text
```

## 6. Asset Size Watch

No asset files are changed in this visual refinement candidate.

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

After Wayne approves this visual refinement candidate, use an explicit path list rather than `git add .`.

```bash
git add -- \
  docs/codex/RELEASE_STAGING_MANIFEST.md \
  docs/codex/GOAL_COMPLETION_AUDIT.md \
  docs/codex/FINAL_WEBSITE_APPROVAL_HANDOFF.md \
  docs/codex/TRACKER.md \
  docs/codex/WEBSITE_APPROVAL_REVIEW_CHECKLIST.md \
  index.html \
  script.js \
  scripts/product-design-acceptance-smoke.mjs \
  scripts/visual-polish-smoke.mjs \
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

If the refinement causes a visual or interaction regression, revert the ten files in this candidate to the previous committed state and rerun the local release gate before any preview or production decision.
