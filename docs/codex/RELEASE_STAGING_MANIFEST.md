# Release Staging Manifest - Website Quality Restart

Last updated: 2026-07-02 18:43 BST
Owner: Wayne Robson / Robson AI Solutions
Repo: `/private/tmp/robson-ai-website-quality-restart`
Status: word-heavy section polish is local-only; local QA passed; preview and production not approved

## 1. Purpose

This manifest records the file scope for the approved homepage design-quality tranche:

`word-heavy-section-polish`

The tranche responds to Wayne's feedback that several homepage sections are aesthetically weak because they are full of words.

This tranche:

- keeps the work bounded to Workflow Finder, Property Operations, Method, Credibility, and Contact
- turns dense text blocks into clearer route boards, status signals, process strips, proof summaries, and workflow brief surfaces
- keeps the first-load consent choice from visually obstructing the desktop hero proof board
- preserves the current Robson AI product claims, privacy posture, BuildScan asset set, and email-first contact route
- records local design audit evidence, local QA, and current preview-approval/readiness handoff docs

It does not add new product claims, change public model assets, change consent/analytics logic, enable analytics/forms, deploy preview or production, or perform any DNS, customer-data, or external-message work.

Do not run `git add .` for this repository.

## 2. Approval Boundary

Wayne approved option `1` on 2026-07-02 for this focused design-quality tranche:

- scoped local edits
- audit, tracker and staging-manifest updates
- approval checklist, preview handoff, publish-readiness audit, and goal-completion audit updates
- local browser/screenshot evidence
- relevant local QA

Wayne must approve before Codex performs any of these actions:

- local commit
- branch push
- GitHub PR
- Netlify preview deploy
- production deploy
- DNS/domain changes
- analytics/forms/customer data handling
- external messages

## 3. Current Dirty Scope

Current word-heavy section polish dirty scope:

- 8 modified tracked files.
- 1 untracked candidate files.
- Total dirty candidate files: 9.
- This candidate is local-only and does not change the live website until Wayne approves preview and production deployment.

Current validation evidence:

- Product Design context preflight found no saved context file, so this tranche is grounded in the live site, repo design system, and tracker.
- In-app browser live current-state full-page screenshot captured as `live-current-full-page.png`.
- Local post-change rendered screenshot: `output/playwright/rendered-release-smoke-2026-07-02T15-48-58-679Z/desktop-homepage.png`.
- Audit note added at `docs/codex/WORD_HEAVY_SECTION_POLISH_AUDIT.md`.
- Fast checks passed: `git diff --check`; `node --check script.js`.
- Local screenshot smoke passed against `http://127.0.0.1:8135`: `output/playwright/rendered-release-smoke-2026-07-02T15-48-58-679Z`.
- Local route checks passed: `npm run qa:responsive` with artifact `output/responsive-route/smoke-2026-07-02T15-47-14-898Z/responsive-route-smoke.json`; `npm run qa:product-design` with artifact `output/product-design-acceptance/smoke-2026-07-02T15-47-14-898Z/product-design-acceptance-smoke.json`; `npm run qa:visual-polish` with artifact `output/visual-polish/smoke-2026-07-02T15-47-14-898Z/visual-polish-smoke.json`.
- Local review URL: `http://127.0.0.1:8135/`; HTTP 200 confirmed.
- Final post-doc `git diff --check` passed.
- Final staging-manifest smoke passed: `output/release-staging-manifest/smoke-2026-07-02T16-02-56-058Z/release-staging-manifest-smoke.json`; 4 modified tracked files, 1 untracked candidate file, 5 explicit staging paths.
- Final release inventory passed: `output/release-inventory/inventory-2026-07-02T16-02-56-058Z/release-candidate-inventory.json`; dirtyCount 5, zero secret findings, GLB externalUriCount 0.
- Full local release gate initially failed HTML validation because six decorative signal `div` elements used invalid `aria-label` attributes; those labels were removed without changing visible content.
- Full local release gate then passed all 37 steps: `output/release-local-gate/gate-2026-07-02T15-56-59-235Z/release-local-gate.json`.
- Full-gate rendered screenshots: `output/playwright/rendered-release-smoke-2026-07-02T15-58-35-049Z`.
- Full-gate measurement evidence: `output/measurement/evidence-2026-07-02T15-59-19-980Z`; Lighthouse median performance 100, accessibility 100, best practices 100, SEO 100, LCP about 1.80 seconds, CLS 0.
- Full-gate browser coverage remains advisory: Chromium passed; local Firefox/WebKit browser binaries were unavailable, so preview/deployed review should still be used before production.
- Continuation Product Design audit screenshots captured: `output/product-design-audit/word-heavy-continuation-2026-07-02T17-15-15-448Z`; no horizontal overflow was found at desktop, tablet, or mobile.
- Continuation audit found the first-load consent panel could cover the desktop hero proof board and the lower mobile hero tags.
- Narrow consent presentation polish added in `styles.css`: the same consent controls now use a slimmer bottom rail; no consent logic, analytics behavior, form, or customer-data path changed.
- Consent first-impression screenshots captured after the polish: `output/product-design-audit/consent-first-impression-2026-07-02T17-18-36-986Z`; desktop no longer intersects the hero proof board, all three consent choices remain visible, and there is no horizontal overflow.
- Post-consent-polish checks passed: `git diff --check`; `npm run qa:visual-polish` with artifact `output/visual-polish/smoke-2026-07-02T17-20-16-511Z/visual-polish-smoke.json`; `npm run qa:responsive` with artifact `output/responsive-route/smoke-2026-07-02T17-20-16-511Z/responsive-route-smoke.json`; `npm run qa:rendered` with artifact `output/playwright/rendered-release-smoke-2026-07-02T17-20-16-511Z`.
- Remaining visual note: on mobile the fixed consent rail still sits over the bottom of the tall hero area until the visitor chooses an option, but the headline and primary CTAs remain visible; a different consent pattern should be treated as a separate approved tranche.
- Final post-consent full local release gate passed all 37 steps: `output/release-local-gate/gate-2026-07-02T17-23-29-682Z/release-local-gate.json`.
- Final full-gate rendered screenshots: `output/playwright/rendered-release-smoke-2026-07-02T17-24-59-410Z`.
- Final full-gate measurement evidence: `output/measurement/evidence-2026-07-02T17-25-18-165Z`; Lighthouse median performance 100, accessibility 100, best practices 100, SEO 100, LCP about 1.80 seconds, CLS 0.
- Final full-gate staging manifest passed inside the release gate: `output/release-staging-manifest/smoke-2026-07-02T17-23-36-823Z/release-staging-manifest-smoke.json`; 4 modified tracked files, 1 untracked candidate file, 5 explicit staging paths.
- Final full-gate release inventory passed inside the release gate: `output/release-inventory/inventory-2026-07-02T17-23-36-605Z/release-candidate-inventory.json`; dirtyCount 5, zero secret findings, GLB externalUriCount 0.
- Approval/readiness docs aligned after the full gate: `docs/codex/WEBSITE_APPROVAL_REVIEW_CHECKLIST.md`, `docs/codex/WEBSITE_RESTART_PREVIEW_HANDOFF.md`, `docs/codex/PUBLISH_READINESS_AUDIT.md`, and `docs/codex/GOAL_COMPLETION_AUDIT.md` now describe the current local candidate, 88% publish readiness, and the next `commit + branch push + Netlify preview deploy` approval decision.
- Final post-alignment `git diff --check` passed.
- Final post-drift-audit staging-manifest smoke passed: `output/release-staging-manifest/smoke-2026-07-02T17-43-25-511Z/release-staging-manifest-smoke.json`; 8 modified tracked files, 1 untracked candidate file, 9 explicit staging paths.
- Final post-drift-audit release inventory passed: `output/release-inventory/inventory-2026-07-02T17-43-25-511Z/release-candidate-inventory.json`; dirtyCount 9, zero secret findings, GLB externalUriCount 0.
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

These files are modified and expected in the word-heavy section polish candidate:

```text
docs/codex/GOAL_COMPLETION_AUDIT.md
docs/codex/PUBLISH_READINESS_AUDIT.md
docs/codex/RELEASE_STAGING_MANIFEST.md
docs/codex/TRACKER.md
docs/codex/WEBSITE_APPROVAL_REVIEW_CHECKLIST.md
docs/codex/WEBSITE_RESTART_PREVIEW_HANDOFF.md
index.html
styles.css
```

## 5. Untracked Candidate Files

These untracked files are expected in the word-heavy section polish candidate:

```text
docs/codex/WORD_HEAVY_SECTION_POLISH_AUDIT.md
```

## 6. Asset Size Watch

No asset files are changed in this word-heavy section polish candidate.

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
  docs/codex/GOAL_COMPLETION_AUDIT.md \
  docs/codex/PUBLISH_READINESS_AUDIT.md \
  docs/codex/RELEASE_STAGING_MANIFEST.md \
  docs/codex/TRACKER.md \
  docs/codex/WEBSITE_APPROVAL_REVIEW_CHECKLIST.md \
  docs/codex/WEBSITE_RESTART_PREVIEW_HANDOFF.md \
  docs/codex/WORD_HEAVY_SECTION_POLISH_AUDIT.md \
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

If this local word-heavy section polish is rejected before commit, restore the nine manifest-approved candidate files to the prior committed state, remove `docs/codex/WORD_HEAVY_SECTION_POLISH_AUDIT.md`, then rerun local checks before another decision. Production is unchanged unless Wayne separately approves a deploy; if a future production publish needs rollback, confirm the current Netlify rollback target immediately before restoring a previous deploy.
