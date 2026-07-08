# Release Staging Manifest - Secondary Page Shell Consistency

Last updated: 2026-07-08 08:22 BST
Owner: Wayne Robson / Robson AI Solutions
Repo: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website`
Worktree: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website.release-worktree`
Branch: `codex/live-globe-loader-fix`
Status: full local release gate passed; Wayne approved option `1` on 2026-07-08 for exact-path staging, commit, branch push, Netlify preview deploy and deployed preview-gate validation; production deploy remains unapproved

## 1. Purpose

This manifest defines the intended file scope for:

`secondary-page-shell-consistency`

The live audit after the Building Analyst release showed `who-its-for.html` and `privacy.html` still used the older site shell while Home and Building Analyst used the approved zip-style redesign shell. This candidate brings those secondary pages into the same top-level visual system without rewriting their content.

This candidate:

- updates `who-its-for.html` and `privacy.html` to use the zip-style icon wordmark, Home/Product/Pricing/About navigation, header email, blue "See What We Do" CTA and zip-style footer
- preserves existing Who It Is For and Privacy page content, privacy wording, cautious product maturity boundaries, no-form contact posture and optional analytics wording
- adds a scoped `.zip-secondary-page` CSS layer so reused zip shell components render correctly outside `body[data-page-type="preview"]`
- aligns the privacy notice intro to the top of its card stack so the desktop page no longer opens with a large empty left column
- bumps the public stylesheet cache key on the public HTML pages so the changed stylesheet is fetched after deployment instead of being hidden by immutable browser cache
- updates `scripts/rendered-release-smoke.mjs` so Who/Privacy rendered checks assert the new zip wordmark instead of the removed old `.brand-lockup-text small` strapline
- updates `docs/codex/RELEASE_APPROVAL_PACKET.md` so the approval packet describes this candidate instead of the historical BuildScan preview candidate
- updates `docs/codex/FINAL_WEBSITE_APPROVAL_HANDOFF.md` and `docs/codex/GOAL_COMPLETION_AUDIT.md` so handoff/completion docs no longer imply the older completed releases are the current approval state
- updates `docs/codex/WEBSITE_APPROVAL_REVIEW_CHECKLIST.md` and `docs/codex/PUBLISH_READINESS_AUDIT.md` so owner-review and publish-readiness docs point to the current candidate rather than the older Globe Loader/privacy release
- keeps the already-live Building Analyst page alignment and deployed smoke hardening intact

It does not change privacy policy wording, pricing, analytics config, forms, DNS, Netlify settings, BuildScan assets, customer-data handling, product claims or external integrations.

Do not run `git add .` for this candidate.

## 2. Approval Boundary

Wayne approved this secondary-page candidate for exact-path staging, commit, branch push, Netlify preview deploy and deployed preview-gate validation by choosing option `1` on 2026-07-08.

Wayne must approve before Codex performs any of these actions:

- running a production deploy
- rolling back production

Still out of scope without a separate approval:

- rollback
- DNS/domain changes
- analytics/forms/customer-data handling
- external messages
- destructive git actions
- unrelated website redesign

## 3. Current Source-Control Scope

Current secondary-page shell candidate state:

- Base branch: `codex/live-globe-loader-fix` at `8c595f6`
- Working branch: `codex/live-globe-loader-fix`
- Worktree: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website.release-worktree`
- Commit `8c595f6` is the current live production source state before this local follow-up candidate.
- 15 modified tracked files.
- 0 untracked candidate files.
- Total dirty candidate files: 15.

Current validation evidence:

- Live current-state audit before the fix found no 4xx/5xx resources, no failed navigation and no page-level horizontal overflow, but identified the Who/Privacy pages as visually inconsistent with the approved zip-style Home/Building Analyst shell. Artifact: `output/playwright/current-site-quality-audit-2026-07-08T05-40-09-880Z/summary.json`.
- `npx --no-install html-validate --rule doctype-style:off --rule void-style:off who-its-for.html privacy.html` passed.
- `node --check scripts/rendered-release-smoke.mjs` passed.
- `git diff --check` passed.
- `npm run qa:responsive` passed with artifact `output/responsive-route/smoke-2026-07-08T05-59-17-525Z/responsive-route-smoke.json`.
- `npm run qa:visual-polish` passed with artifact `output/visual-polish/smoke-2026-07-08T05-50-22-443Z/visual-polish-smoke.json`.
- `npm run qa:product-design` passed with artifact `output/product-design-acceptance/smoke-2026-07-08T05-51-07-573Z/product-design-acceptance-smoke.json`.
- `npm run qa:semantic-seo` passed with artifact `output/semantic-seo/smoke-2026-07-08T05-51-07-721Z/semantic-seo-smoke.json`.
- `npm run qa:keyboard` passed with artifact `output/playwright/keyboard-release-smoke-2026-07-08T05-51-07-733Z`.
- `npm run qa:rendered` passed with screenshots in `output/playwright/rendered-release-smoke-2026-07-08T05-57-56-810Z`; `desktop-who-its-for.png` and `desktop-privacy.png` show the updated shell.
- Focused mobile screenshot check passed for `/who-its-for.html` and `/privacy.html`: no horizontal overflow, no console messages, no failed requests, and header CTA computed as white text on `rgb(54, 91, 217)`. Artifact: `output/playwright/secondary-shell-local-check-2026-07-08T06-01-48-965Z/summary.json`.
- `npm run qa:release-staging-manifest` passed for the fifteen-file candidate inside the refreshed full local gate with artifact `output/release-staging-manifest/smoke-2026-07-08T07-18-26-105Z/release-staging-manifest-smoke.json`; modifiedTracked 15, untrackedCandidate 0, totalDirtyCandidate 15, stagingCommandPaths 15, approvalBoundaryChecked true.
- Full `npm run qa:release:local` passed for the fifteen-file cache-key candidate with artifact `output/release-local-gate/gate-2026-07-08T07-18-19-608Z/release-local-gate.json`; 37 steps. The gate reported the known warning-only dev/release tooling dependency advisory and warning-only unavailable local Firefox/WebKit browser binaries, with production dependency footprint 0 vulnerabilities and all site checks passing.
- Building Analyst production completion remains recorded in `docs/codex/TRACKER.md`: final source commit `8c595f6` is live as Netlify production deploy `6a4d6ccccf0a8038379c9abb`, and the clean production gate passed with artifact `output/release-production-gate/gate-2026-07-07T21-17-25-642Z/release-preview-gate.json`.

The release inventory gate enforces:

- no forbidden dirty paths such as `.env*`, `.netlify/`, `node_modules/`, `output/`, `.git/`, `.DS_Store`, or key/certificate files
- explicit allowed dirty path patterns
- file-size budgets for release assets
- BuildScan GLB binary glTF 2.0 structure
- zero external URI references inside the public-preview GLB
- secret-like string scan across candidate files

## 4. Modified Tracked Files

This local candidate currently modifies:

```text
docs/codex/RELEASE_STAGING_MANIFEST.md
docs/codex/RELEASE_APPROVAL_PACKET.md
docs/codex/FINAL_WEBSITE_APPROVAL_HANDOFF.md
docs/codex/GOAL_COMPLETION_AUDIT.md
docs/codex/WEBSITE_APPROVAL_REVIEW_CHECKLIST.md
docs/codex/PUBLISH_READINESS_AUDIT.md
docs/codex/TRACKER.md
404.html
building-analyst.html
holding.html
index.html
privacy.html
scripts/rendered-release-smoke.mjs
styles.css
who-its-for.html
```

## 5. Untracked Candidate Files

No untracked files are expected in this candidate.

```text
```

## 6. Asset Size Watch

No binary public assets are changed in this candidate.

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

Wayne approved exact-path staging on 2026-07-08. Use this explicit path list rather than `git add .`.

```bash
git add -- \
  404.html \
  building-analyst.html \
  docs/codex/FINAL_WEBSITE_APPROVAL_HANDOFF.md \
  docs/codex/GOAL_COMPLETION_AUDIT.md \
  docs/codex/PUBLISH_READINESS_AUDIT.md \
  docs/codex/RELEASE_APPROVAL_PACKET.md \
  docs/codex/RELEASE_STAGING_MANIFEST.md \
  docs/codex/TRACKER.md \
  docs/codex/WEBSITE_APPROVAL_REVIEW_CHECKLIST.md \
  holding.html \
  index.html \
  privacy.html \
  scripts/rendered-release-smoke.mjs \
  styles.css \
  who-its-for.html
```

## 9. Required Checks Before Commit

Run these after staging and before commit:

```bash
git status --short --branch
git diff --cached --check
npx --no-install html-validate --rule doctype-style:off --rule void-style:off 404.html index.html building-analyst.html who-its-for.html privacy.html holding.html
node --check scripts/rendered-release-smoke.mjs
npm run qa:release-staging-manifest
npm run qa:responsive
npm run qa:visual-polish
npm run qa:product-design
npm run qa:semantic-seo
npm run qa:keyboard
npm run qa:rendered
```

Then confirm the staged file set matches this manifest before committing.

## 10. Checks After Preview Deploy

Required after an approved Netlify preview deploy:

```bash
QA_BASE_URL="<cache-bust-preview-url>" npm run qa:release:preview
```

- Preview deploy: approved, pending execution.
- Preview gate artifact: pending if used.
- Result: pending if used.

## 11. Checks After Production Deploy

Required after production deployment:

```bash
QA_PRODUCTION_URL="https://robsonai.co.uk" CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production
```

- Production URL: `https://robsonai.co.uk`
- Current production deploy before this local candidate: `6a4d6ccccf0a8038379c9abb` for commit `8c595f6`.
- Candidate production deploy: pending approval.
- Production gate artifact: pending approval.
- Result: pending approval.

## 12. Rollback Path

If this candidate causes a live regression after deployment, restore the current production deploy `6a4d6ccccf0a8038379c9abb` unless Wayne confirms a different rollback target first. If a local/docs regression is found before deployment, restore the affected manifest-approved files to the prior committed state and rerun the relevant checks before another decision.

## 13. Previous Production Baseline

The previous completed Building Analyst homepage-design alignment remains live at production before this candidate:

- Final source commit: `8c595f6`
- Production deploy: `6a4d6ccccf0a8038379c9abb`
- Production gate: `output/release-production-gate/gate-2026-07-07T21-17-25-642Z/release-preview-gate.json`
- Live route verification: `/building-analyst` and `/building-analyst.html` served the new homepage-style Building Analyst page with no old lens UI.
