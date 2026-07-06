# Release Staging Manifest - Globe Loader Icon Polish

Last updated: 2026-07-05 23:22 BST
Owner: Wayne Robson / Robson AI Solutions
Repo: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website`
Hotfix worktree: `/private/tmp/robson-ai-website-live-globe-fix`
Branch: `codex/live-globe-loader-fix`
Status: local icon-polish candidate only; no commit, branch push, Netlify preview deploy, production deploy, rollback, DNS/domain change, analytics/forms change, customer-data handling, external message or destructive git action is approved by this document

## 1. Purpose

This manifest defines the intended file scope for the live Globe Loader centre-icon polish:

`globe-loader-icon-backplate-polish`

Wayne confirmed the site now looks good after the cache-bust publish, then asked for a narrow visual correction to the Globe Loader: remove the pale circular backplate behind the Robson AI icon and make the icon slightly larger so it reads better against the globe.

This icon-polish candidate:

- removes the visible filled circular backplate behind the centre icon in the canvas Globe Loader
- increases the centre icon draw size and keeps a subtle canvas shadow only for contrast
- updates public HTML references from `script.js?v=20260705b` to `script.js?v=20260705c` so browsers fetch the changed drawing code
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

Current icon-polish state:

- Base branch: `origin/main` at `599e0b0`
- Hotfix branch: `codex/live-globe-loader-fix`
- Hotfix worktree: `/private/tmp/robson-ai-website-live-globe-fix`
- Local review URL while the Python server is running: `http://127.0.0.1:8136/`
- 9 modified tracked files.
- 0 untracked candidate files.
- Total dirty candidate files: 9.

Current validation evidence:

- The immediately previous cache-bust release was published to production from commit `599e0b0` as Netlify production deploy `6a4ad5768a2c9400088be4b2`.
- Production gate for the previous cache-bust passed with artifact `output/release-production-gate/gate-2026-07-05T22-07-32-406Z/release-preview-gate.json`; the live homepage requested `styles.css?v=20260705b`, `script.js?v=20260705b` and `assets/globe-loader/world-countries-lite.json?v=20260705`.
- This new candidate changes only the centre-icon canvas drawing, the public script cache key, the release-security allowlist, and Codex release docs.
- `node --check script.js` passed.
- `git diff --check` passed.
- `npm run qa:release-security` passed with artifact `output/release-security/smoke-2026-07-05T22-16-19-570Z/release-security-smoke.json`.
- `npm run qa:release-staging-manifest` passed with artifact `output/release-staging-manifest/smoke-2026-07-05T22-16-19-571Z/release-staging-manifest-smoke.json`; modifiedTracked 9, untrackedCandidate 0, totalDirtyCandidate 9, stagingCommandPaths 9.
- Focused local browser render passed after transparent-padding crop: `script.js?v=20260705c` requested, Globe Loader canvas present, no failed requests, no console warnings, no horizontal overflow, and centre blue sample count increased from 9 to 23. Artifact and screenshot: `output/globe-icon-polish-check/2026-07-05T22-20-26-603Z/`.
- Full `npm run qa:release:local` passed with artifact `output/release-local-gate/gate-2026-07-05T22-22-11-495Z/release-local-gate.json`; 37 steps.
- Release inventory inside the full local gate passed with artifact `output/release-inventory/inventory-2026-07-05T22-22-18-457Z/release-candidate-inventory.json`; dirtyCount 9, zero secret findings and GLB externalUriCount 0.
- BuildScan viewer smoke inside the full local gate confirmed the homepage now requests `styles.css?v=20260705b`, `script.js?v=20260705c` and `assets/globe-loader/world-countries-lite.json?v=20260705`.
- Product/design acceptance, responsive route and visual polish smokes passed inside the full local gate with artifacts `output/product-design-acceptance/smoke-2026-07-05T22-22-43-918Z/product-design-acceptance-smoke.json`, `output/responsive-route/smoke-2026-07-05T22-22-50-309Z/responsive-route-smoke.json`, and `output/visual-polish/smoke-2026-07-05T22-23-13-620Z/visual-polish-smoke.json`.
- Rendered screenshot evidence passed with screenshots in `output/playwright/rendered-release-smoke-2026-07-05T22-23-45-425Z`.
- Measurement evidence passed with artifact `output/measurement/evidence-2026-07-05T22-24-05-468Z`; axe violations 0, Lighthouse performance 100, accessibility 100, best practices 100, SEO 100, LCP about 1.59s and CLS 0.
- Browser coverage remains warning-only: Chromium passed, Firefox/WebKit Playwright binaries are unavailable locally.

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
