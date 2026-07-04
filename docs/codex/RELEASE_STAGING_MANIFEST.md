# Release Staging Manifest - Website Quality Restart

Last updated: 2026-07-03 20:13 BST
Owner: Wayne Robson / Robson AI Solutions
Repo: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website`
Status: restart candidate; rejected motion preview must not be published; no commit, branch push, preview deploy, or production deploy approved for the restart

## 1. Purpose

This manifest defines the intended file scope for the restart from the original website goal:

`website-quality-restart-from-original-goal`

The restart responds to Wayne's instruction: `restart from original goal, do not publish current motion preview`.

This restart:

- treats the `proof-motion-polish` preview as rejected for publication
- removes the rejected motion-preview implementation from the working tree
- adapts Wayne's supplied redesign zip into the existing static site rather than shipping prototype runtime code
- adds the BuildScan model-view and opt-in GLB viewer elements into the zip-style design
- preserves the live production baseline while the next design pass is audited and planned
- keeps all publishing, pushing, and production work approval-gated

It does not add unsupported pricing/platform/provider claims, change public model assets, enable analytics/forms, push, or deploy anything.

Do not run `git add .` for this candidate.

## 2. Approval Boundary

Wayne instructed Codex to restart from the original goal and not publish the current motion preview. This supersedes the previous preview recommendation.

Approved now:

- safe local code/docs edits
- local browser/screenshot evidence
- local QA and release gate validation
- removal of the rejected motion-preview implementation from the working tree

Wayne must approve before Codex performs any of these actions:

- commit
- branch push
- GitHub PR
- Netlify preview deploy
- production deploy
- DNS/domain changes
- analytics/forms/customer data handling
- external messages

## 3. Current Dirty Scope

Latest intended dirty scope:

- 13 modified tracked files.
- 2 untracked candidate files.
- Total dirty candidate files: 15.
- This manifest itself is intentionally included in the modified tracked file count.

Current validation evidence:

- Redesign adaptation local checks passed on 2026-07-03 after Wayne supplied `/Users/wayne/Downloads/Robsonai website redesign.zip`.
- `node --check script.js`, `node --check scripts/product-design-acceptance-smoke.mjs`, `node --check scripts/responsive-route-smoke.mjs`, `node --check scripts/rendered-release-smoke.mjs`, `node --check scripts/measurement-evidence.mjs`, and `git diff --check` passed.
- Full local release gate passed all 37 steps: `output/release-local-gate/gate-2026-07-03T19-05-24-098Z/release-local-gate.json`.
- Rendered screenshot evidence passed: `output/playwright/rendered-release-smoke-2026-07-03T19-06-47-075Z`.
- Measurement evidence passed: `output/measurement/evidence-2026-07-03T19-07-04-456Z`; Playwright-injected axe reported zero violations across six routes, Lighthouse performance 100, accessibility 100, best practices 100, SEO 100, LCP about 1.73 seconds, CLS 0.
- BuildScan viewer evidence passed: `output/buildscan-viewer/smoke-2026-07-03T19-05-33-122Z`; direct and embedded GLB paths rendered canvas and keyboard controls.
- Product/design acceptance passed: `output/product-design-acceptance/smoke-2026-07-03T19-05-51-888Z/product-design-acceptance-smoke.json`.
- Responsive and visual-polish evidence passed: `output/responsive-route/smoke-2026-07-03T19-05-57-649Z/responsive-route-smoke.json` and `output/visual-polish/smoke-2026-07-03T19-06-18-629Z/visual-polish-smoke.json`.
- Release inventory passed: `output/release-inventory/inventory-2026-07-03T19-05-30-188Z/release-candidate-inventory.json`; dirtyCount 15, zero secret findings, GLB externalUriCount 0.
- Staging manifest smoke passed: `output/release-staging-manifest/smoke-2026-07-03T19-05-30-381Z/release-staging-manifest-smoke.json`; 13 modified tracked files, 2 untracked candidate files, 15 explicit staging paths.
- `scripts/measurement-evidence.mjs` now uses Playwright-injected `axe-core` for accessibility evidence because the previous Selenium/ChromeDriver axe CLI path reproducibly timed out after 300 seconds on local ChromeDriver 150.
- Rejected preview record: `https://proof-motion-polish--robson-ai-website.netlify.app`, deploy `6a41739b29f5ccb3751611f1`; this preview must not be published.
- Restart audit added at `docs/codex/WEBSITE_RESTART_DESIGN_AUDIT.md`.

The release inventory gate enforces:

- no forbidden dirty paths such as `.env*`, `.netlify/`, `node_modules/`, `output/`, `.git/`, `.DS_Store`, or key/certificate files
- explicit allowed dirty path patterns
- file-size budgets for release assets
- BuildScan GLB binary glTF 2.0 structure
- zero external URI references inside the public-preview GLB
- secret-like string scan across candidate files

## 4. Modified Tracked Files

These files are modified and expected in the restart cleanup/audit candidate:

```text
docs/codex/RELEASE_STAGING_MANIFEST.md
docs/codex/TRACKER.md
docs/codex/GOAL_COMPLETION_AUDIT.md
docs/codex/PUBLISH_READINESS_AUDIT.md
docs/codex/WEBSITE_APPROVAL_REVIEW_CHECKLIST.md
index.html
scripts/measurement-evidence.mjs
scripts/product-design-acceptance-smoke.mjs
scripts/rendered-release-smoke.mjs
scripts/responsive-route-smoke.mjs
script.js
styles.css
who-its-for.html
```

## 5. Untracked Candidate Files

These untracked files are expected in the candidate:

```text
docs/codex/WEBSITE_RESTART_DESIGN_AUDIT.md
docs/codex/WEBSITE_RESTART_PREVIEW_HANDOFF.md
```

## 6. Asset Size Watch

No asset files are changed in this restart candidate.

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

After Wayne approves a restart cleanup commit, use an explicit path list rather than `git add .`.

```bash
git add -- \
  docs/codex/GOAL_COMPLETION_AUDIT.md \
  docs/codex/PUBLISH_READINESS_AUDIT.md \
  docs/codex/RELEASE_STAGING_MANIFEST.md \
  docs/codex/TRACKER.md \
  docs/codex/WEBSITE_APPROVAL_REVIEW_CHECKLIST.md \
  docs/codex/WEBSITE_RESTART_DESIGN_AUDIT.md \
  docs/codex/WEBSITE_RESTART_PREVIEW_HANDOFF.md \
  index.html \
  scripts/measurement-evidence.mjs \
  scripts/product-design-acceptance-smoke.mjs \
  scripts/rendered-release-smoke.mjs \
  scripts/responsive-route-smoke.mjs \
  script.js \
  styles.css \
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

## 10. Required Checks After Preview Deploy

After Wayne approves a future Netlify preview deploy, run:

```bash
QA_BASE_URL="https://<netlify-preview-url>" npm run qa:release:preview
```

## 11. Required Checks After Production Deploy

Only after Wayne explicitly approves production deployment, run:

```bash
QA_PRODUCTION_URL="https://robsonai.co.uk" CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production
```

## 12. Rollback Path

If the restart cleanup causes a regression before commit, restore the manifest-approved files to the prior committed state, then rerun the local checks before another decision. If any future candidate is published and needs rollback, restore the current live Netlify production deploy `6a415b5db31442000737c37c`.
