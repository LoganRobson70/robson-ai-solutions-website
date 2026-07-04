# Release Staging Manifest - Zip-Faithful Redesign Correction

Last updated: 2026-07-04 16:57 BST
Owner: Wayne Robson / Robson AI Solutions
Repo: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website`
Status: local-only correction and zip-animation parity polish passed the full local release gate after Wayne rejected the live zip-adapted visual match; no commit, branch push, GitHub PR, Netlify preview deploy, production deploy, DNS, analytics/forms, customer data handling, or external messages approved

## 1. Purpose

This manifest defines the intended file scope for the zip-faithful redesign correction:

`zip-faithful-redesign-correction`

The correction responds to Wayne's instruction that the published site is not close enough to the supplied redesign zip in layout, text, fonts and content.

This correction:

- uses `/Users/wayne/Downloads/Robsonai website redesign.zip` as the primary visual/content reference
- replaces the previous homepage shell with a zip-faithful static implementation: white header, Home/Product/Pricing/About IA, dark mesh hero, large Manrope proposition, and zip-style product sections
- keeps BuildScan as the added product element with static model image and opt-in interactive GLB viewer
- restores relevant zip prototype motion in production-safe form: animated mesh canvases, pointer-responsive hero motion, staged movement-only reveals, hover/depth feedback and reduced-motion fallbacks
- keeps privacy/analytics, email-first contact, professional-review boundaries, and cautious maturity language
- keeps commit, branch push, Netlify preview deploy, production deploy, DNS, analytics/forms, customer data handling, and external messages approval-gated

It does not add launched pricing, payment checkout, live customer-system integrations, analytics/forms, branch pushes, or production deploys.

Do not run `git add .` for this candidate.

## 2. Approval Boundary

Wayne instructed Codex to use the supplied zip design more faithfully and add the BuildScan element. This supersedes the earlier local/published zip-adapted interpretation.

Approved for this correction:

- safe local code/docs edits
- local browser/screenshot evidence
- local QA and release gate validation

Wayne must approve before Codex performs any of these actions:

- local commit
- Netlify preview deploy
- production rollback or production deploy
- branch push
- GitHub PR
- DNS/domain changes
- analytics/forms/customer data handling
- external messages

## 3. Current Dirty Scope

Latest intended dirty scope:

- Live Netlify production deploy still serving until Wayne approves replacement or rollback: `6a48c6e1a19608e3698fa160`.
- Local review URL while the Python server is running: `http://127.0.0.1:8134/`.
- 15 modified tracked files.
- 0 untracked candidate files.
- Total dirty candidate files: 15.

Current validation evidence:

- `git diff --check` passed.
- Direct motion check passed on `http://127.0.0.1:8134/`: the hero canvas frame changed after pointer movement and reveal targets were detected.
- Final full local release gate passed: `output/release-local-gate/gate-2026-07-04T15-53-37-926Z/release-local-gate.json`; 37 steps.
- Release inventory passed inside the full gate: `output/release-inventory/inventory-2026-07-04T15-53-45-020Z/release-candidate-inventory.json`; dirtyCount 15, zero secret findings, GLB externalUriCount 0.
- Staging manifest smoke passed inside the full gate: `output/release-staging-manifest/smoke-2026-07-04T15-53-45-280Z/release-staging-manifest-smoke.json`; 15 modified tracked files, 0 untracked candidate files, 15 staging paths.
- Release security and headers passed: `output/release-security/smoke-2026-07-04T15-53-44-751Z/release-security-smoke.json` and `output/release-headers/smoke-2026-07-04T15-53-44-890Z/release-header-smoke.json`.
- BuildScan viewer smoke passed: `output/buildscan-viewer/smoke-2026-07-04T15-53-47-283Z`; direct and embedded viewer paths render and the embedded viewer reaches model-ready state.
- Keyboard release smoke passed: `output/playwright/keyboard-release-smoke-2026-07-04T15-53-54-807Z`.
- Semantic SEO, product/design, responsive and visual-polish smokes passed: `output/semantic-seo/smoke-2026-07-04T15-54-00-422Z/semantic-seo-smoke.json`, `output/product-design-acceptance/smoke-2026-07-04T15-54-08-382Z/product-design-acceptance-smoke.json`, `output/responsive-route/smoke-2026-07-04T15-54-14-587Z/responsive-route-smoke.json`, and `output/visual-polish/smoke-2026-07-04T15-54-36-622Z/visual-polish-smoke.json`.
- Rendered screenshot evidence passed: `output/playwright/rendered-release-smoke-2026-07-04T15-55-06-652Z`.
- Measurement smoke and evidence passed: `output/measurement/smoke-2026-07-04T15-55-18-743Z` and `output/measurement/evidence-2026-07-04T15-55-27-128Z`; axe violations 0 across six routes; Lighthouse performance 99, accessibility 100, best practices 100, SEO 100, LCP about 1.24 seconds, CLS 0.
- Browser coverage advisory remains warning-only: Chromium passed; Firefox/WebKit Playwright binaries are unavailable locally. Artifact: `output/browser-coverage/smoke-2026-07-04T15-54-58-774Z/browser-coverage-smoke.json`.
- Dependency audit advisory remains warning-only: production vulnerabilities 0; dev/release tooling still has 17 moderate advisories. Artifact: `output/dependency-audit/summary-2026-07-04T15-53-45-464Z/dependency-audit-summary.json`.

The release inventory gate enforces:

- no forbidden dirty paths such as `.env*`, `.netlify/`, `node_modules/`, `output/`, `.git/`, `.DS_Store`, or key/certificate files
- explicit allowed dirty path patterns
- file-size budgets for release assets
- BuildScan GLB binary glTF 2.0 structure
- zero external URI references inside the public-preview GLB
- secret-like string scan across candidate files

## 4. Modified Tracked Files

These files are modified and expected in the correction candidate:

```text
docs/codex/GOAL_COMPLETION_AUDIT.md
docs/codex/PUBLISH_READINESS_AUDIT.md
docs/codex/RELEASE_STAGING_MANIFEST.md
docs/codex/TRACKER.md
docs/codex/WEBSITE_APPROVAL_REVIEW_CHECKLIST.md
docs/codex/WEBSITE_RESTART_PREVIEW_HANDOFF.md
index.html
scripts/keyboard-release-smoke.mjs
scripts/measurement-smoke.mjs
scripts/product-design-acceptance-smoke.mjs
scripts/release-security-smoke.mjs
scripts/rendered-release-smoke.mjs
scripts/responsive-route-smoke.mjs
script.js
styles.css
```

## 5. Untracked Candidate Files

No untracked files are expected in this correction candidate.

```text
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

After Wayne approves a correction commit, use an explicit path list rather than `git add .`.

```bash
git add -- \
  docs/codex/GOAL_COMPLETION_AUDIT.md \
  docs/codex/PUBLISH_READINESS_AUDIT.md \
  docs/codex/RELEASE_STAGING_MANIFEST.md \
  docs/codex/TRACKER.md \
  docs/codex/WEBSITE_APPROVAL_REVIEW_CHECKLIST.md \
  docs/codex/WEBSITE_RESTART_PREVIEW_HANDOFF.md \
  index.html \
  scripts/keyboard-release-smoke.mjs \
  scripts/measurement-smoke.mjs \
  scripts/product-design-acceptance-smoke.mjs \
  scripts/release-security-smoke.mjs \
  scripts/rendered-release-smoke.mjs \
  scripts/responsive-route-smoke.mjs \
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

If this correction causes a regression before commit, restore the manifest-approved files to the prior committed state, then rerun the local checks before another decision. If Wayne wants to undo the currently live production deploy before a replacement is ready, the prior known-good rollback candidate is Netlify production deploy `6a415b5db31442000737c37c`.
