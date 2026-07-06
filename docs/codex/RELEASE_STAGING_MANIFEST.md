# Release Staging Manifest - Globe Loader Icon Prominence Polish

Last updated: 2026-07-06 17:10 BST
Owner: Wayne Robson / Robson AI Solutions
Repo: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website`
Hotfix worktree: `/private/tmp/robson-ai-website-live-globe-fix`
Branch: `codex/live-globe-loader-fix`
Status: local 50-percent icon prominence candidate validated; no commit, branch push, Netlify preview deploy, production deploy, rollback, DNS/domain change, analytics/forms change, customer-data handling, external message or destructive git action is approved by this document

## 1. Purpose

This manifest defines the intended file scope for the live Globe Loader centre-icon prominence polish:

`globe-loader-icon-50-percent-prominence`

Wayne reviewed the live Globe Loader and asked for the Robson AI icon in the centre of the globe to be about 50% bigger so it is more prominent within the globe circle.

This icon-polish candidate:

- keeps the visible filled circular backplate removed
- increases the cropped centre icon draw size from `size * 1.04` to `size * 1.56`, a 50% increase from the current live treatment
- updates public HTML references from `script.js?v=20260705c` to `script.js?v=20260706a` so browsers fetch the changed drawing code
- keeps `styles.css?v=20260705b` unchanged because no CSS is changed
- preserves the existing Globe Loader globe, orbit motion, hero layout, copy, BuildScan section, privacy baseline, reduced-motion behaviour and mobile hiding rule

It does not change copy, pricing, analytics, forms, BuildScan GLB assets, privacy content, DNS, Netlify settings, product positioning, Globe Loader placement, CSS or orbit behaviour.

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

Current icon-prominence state:

- Base branch: `origin/main` at `e1aab74`
- Hotfix branch: `codex/live-globe-loader-fix`
- Hotfix worktree: `/private/tmp/robson-ai-website-live-globe-fix`
- Local review URL while the Python server is running: `http://127.0.0.1:8136/`
- 9 modified tracked files.
- 0 untracked candidate files.
- Total dirty candidate files: 9.

Current validation evidence:

- The immediately previous icon polish release is live from commit `e1aab74` as Netlify production deploy `6a4b44f4473eb70007f8aace`.
- The current live homepage requests `styles.css?v=20260705b`, `script.js?v=20260705c` and `assets/globe-loader/world-countries-lite.json?v=20260705`.
- This candidate changes only the centre-icon canvas draw scale, the public script cache key, the release-security allowlist, and Codex release docs.
- `node --check script.js` passed.
- `git diff --check` passed.
- `npm run qa:release-security` passed with artifact `output/release-security/smoke-2026-07-06T15-59-49-446Z/release-security-smoke.json`.
- `npm run qa:release-staging-manifest` passed with artifact `output/release-staging-manifest/smoke-2026-07-06T15-59-49-566Z/release-staging-manifest-smoke.json`; modifiedTracked 9, untrackedCandidate 0, totalDirtyCandidate 9, stagingCommandPaths 9.
- Focused local browser render passed: `script.js?v=20260706a` requested, Globe Loader canvas present, no failed requests, no console warnings, no horizontal overflow, and centre blue sample count increased to 35 versus 22 on the previous live check. Artifact and screenshot: `output/globe-icon-50-percent-check/2026-07-06T16-02-29-461Z/`.
- Full `npm run qa:release:local` passed with artifact `output/release-local-gate/gate-2026-07-06T16-06-55-577Z/release-local-gate.json`; 37 steps.
- Release inventory inside the full local gate passed with artifact `output/release-inventory/inventory-2026-07-06T16-07-02-483Z/release-candidate-inventory.json`; dirtyCount 9, zero secret findings and GLB externalUriCount 0.
- Product/design acceptance, responsive route and visual polish smokes inside the full local gate passed with artifacts `output/product-design-acceptance/smoke-2026-07-06T16-07-27-793Z/product-design-acceptance-smoke.json`, `output/responsive-route/smoke-2026-07-06T16-07-34-726Z/responsive-route-smoke.json`, and `output/visual-polish/smoke-2026-07-06T16-07-58-387Z/visual-polish-smoke.json`.
- Rendered screenshot evidence inside the full local gate passed with screenshots in `output/playwright/rendered-release-smoke-2026-07-06T16-08-29-943Z`.
- Measurement evidence inside the full local gate reported axe violations 0 across six routes and Lighthouse performance 100, accessibility 100, best practices 100, SEO 100, LCP about 1.59s and CLS 0. Artifact: `output/measurement/evidence-2026-07-06T16-09-15-129Z`.
- Browser coverage remains warning-only: Chromium passed, Firefox/WebKit Playwright binaries are unavailable locally. Artifact `output/browser-coverage/smoke-2026-07-06T16-08-21-482Z/browser-coverage-smoke.json`.
- Dependency audit remains warning-only: production vulnerabilities 0; dev/release tooling has 17 moderate advisories and no fix was run. Artifact `output/dependency-audit/summary-2026-07-06T16-07-02-937Z/dependency-audit-summary.json`.

The release inventory gate enforces:

- no forbidden dirty paths such as `.env*`, `.netlify/`, `node_modules/`, `output/`, `.git/`, `.DS_Store`, or key/certificate files
- explicit allowed dirty path patterns
- file-size budgets for release assets
- BuildScan GLB binary glTF 2.0 structure
- zero external URI references inside the public-preview GLB
- secret-like string scan across candidate files

## 4. Modified Tracked Files

These files are modified and expected in the local icon-polish candidate:

```text
building-analyst.html
docs/codex/RELEASE_STAGING_MANIFEST.md
docs/codex/TRACKER.md
holding.html
index.html
privacy.html
script.js
scripts/release-security-smoke.mjs
who-its-for.html
```

## 5. Untracked Candidate Files

No untracked files are expected in this hotfix candidate.

```text
```

## 6. Asset Size Watch

No public asset files are changed in this icon-polish candidate. The HTML script references are changed so browsers fetch the updated drawing code under a fresh cache key.

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
  building-analyst.html \
  docs/codex/RELEASE_STAGING_MANIFEST.md \
  docs/codex/TRACKER.md \
  holding.html \
  index.html \
  privacy.html \
  script.js \
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
