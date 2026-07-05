# Release Staging Manifest - Live Globe Loader Hotfix

Last updated: 2026-07-05 21:56 BST
Owner: Wayne Robson / Robson AI Solutions
Repo: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website`
Hotfix worktree: `/private/tmp/robson-ai-website-live-globe-fix`
Branch: `codex/live-globe-loader-fix`
Status: hotfix committed, pushed, preview deployed, production deployed and production-gated; no rollback, DNS/domain change, analytics/forms change, customer-data handling, external message or destructive git action was performed

## 1. Purpose

This manifest defines the intended file scope for the live Globe Loader visual regression hotfix:

`live-globe-loader-fix`

Wayne reported on 2026-07-05 that the live homepage Globe Loader appeared missing and the Robson AI icon appeared massive. Local and live browser diagnostics showed the Globe Loader canvas was present and nonblank, but at Wayne's in-app browser width it was pushed too far right and the centre icon dominated the globe, making the treatment read like a floating oversized logo rather than the supplied Globe Loader visual.

This hotfix:

- moves the Globe Loader rail inward on tablet/desktop widths
- slightly increases the visible globe size
- reduces and softens the centre Robson AI icon inside the globe
- preserves the existing zip-style homepage, BuildScan section, privacy baseline, reduced-motion behaviour and mobile hiding rule
- keeps the scope narrow to the regression Wayne reported

It does not change copy, pricing, analytics, forms, BuildScan GLB assets, privacy content, DNS, Netlify settings or product positioning.

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

Current hotfix state:

- Base branch: `origin/main`
- Hotfix branch: `codex/live-globe-loader-fix`
- Hotfix worktree: `/private/tmp/robson-ai-website-live-globe-fix`
- Local review URL while the Python server is running: `http://127.0.0.1:8136/`
- 4 modified tracked files.
- 0 untracked candidate files.
- Total dirty candidate files: 4.

Current validation evidence:

- Direct live diagnosis confirmed the production assets for `script.js`, `assets/globe-loader/world-countries-lite.json` and `assets/robson-ai-icon-v3-transparent-320.webp` return HTTP 200.
- Direct live diagnosis confirmed the Globe Loader canvas renders on `https://robsonai.co.uk`, but at an 872px-wide viewport the loader rail sat at the far right and the centre logo was visually dominant.
- Local browser hotfix check passed across desktop, tablet, Wayne-like 872px width and mobile. Screenshot and metric artifacts are in `output/globe-fix-check/`.
- `node --check script.js` passed.
- `git diff --check` passed before this manifest refresh.
- `npm run qa:release-inventory` passed before this manifest refresh with artifact `output/release-inventory/inventory-2026-07-05T20-50-24-853Z/release-candidate-inventory.json`; dirtyCount 2, zero secret findings and GLB externalUriCount 0.
- `npm run qa:responsive` passed before this manifest refresh with artifact `output/responsive-route/smoke-2026-07-05T20-50-25-272Z/responsive-route-smoke.json`.
- `npm run qa:visual-polish` passed before this manifest refresh with artifact `output/visual-polish/smoke-2026-07-05T20-50-25-272Z/visual-polish-smoke.json`.
- `npm run qa:rendered` passed before this manifest refresh with screenshots in `output/playwright/rendered-release-smoke-2026-07-05T20-51-52-138Z`.
- A full `npm run qa:release:local` attempt reached the release staging manifest check and failed because the previous manifest described the earlier broad 21-file release, not this four-file hotfix. This file now corrects that scope.
- `npm run qa:release-staging-manifest` passed after this manifest refresh with artifact `output/release-staging-manifest/smoke-2026-07-05T21-04-19-138Z/release-staging-manifest-smoke.json`; modifiedTracked 4, untrackedCandidate 0, totalDirtyCandidate 4, stagingCommandPaths 4.
- Full `npm run qa:release:local` passed after this manifest refresh with artifact `output/release-local-gate/gate-2026-07-05T21-04-39-682Z/release-local-gate.json`; 37 steps.
- Release inventory inside the full local gate passed with artifact `output/release-inventory/inventory-2026-07-05T21-04-46-549Z/release-candidate-inventory.json`; dirtyCount 4, zero secret findings and GLB externalUriCount 0.
- BuildScan viewer smoke inside the full local gate passed with artifact `output/buildscan-viewer/smoke-2026-07-05T21-04-50-456Z`.
- Product/design acceptance, responsive route and visual polish smokes inside the full local gate passed with artifacts `output/product-design-acceptance/smoke-2026-07-05T21-05-13-153Z/product-design-acceptance-smoke.json`, `output/responsive-route/smoke-2026-07-05T21-05-19-497Z/responsive-route-smoke.json`, and `output/visual-polish/smoke-2026-07-05T21-05-41-672Z/visual-polish-smoke.json`.
- Rendered screenshot evidence inside the full local gate passed with screenshots in `output/playwright/rendered-release-smoke-2026-07-05T21-06-11-903Z`.
- Measurement evidence inside the full local gate reported axe violations 0 across six routes and Lighthouse performance 100, accessibility 100, best practices 100, SEO 100, LCP about 1.58s and CLS 0. Artifact: `output/measurement/evidence-2026-07-05T21-06-32-286Z`.
- Browser coverage remains warning-only: Chromium passed, Firefox/WebKit Playwright binaries are unavailable locally. Artifact: `output/browser-coverage/smoke-2026-07-05T21-06-03-874Z/browser-coverage-smoke.json`.
- Dependency audit remains warning-only: production vulnerabilities 0; dev/release tooling has 17 moderate advisories and no fix was run. Artifact: `output/dependency-audit/summary-2026-07-05T21-04-47-011Z/dependency-audit-summary.json`.
- Hotfix commit created: `924b214` (`Fix live globe loader placement`) and branch `codex/live-globe-loader-fix` was pushed to origin.
- Netlify non-production preview deploy succeeded from a clean `git archive` of commit `924b214`: deploy `6a4acae9255264dd4cca1cb7`, preview URL `https://live-globe-loader-fix--robson-ai-website.netlify.app`, logs `https://app.netlify.com/projects/robson-ai-website/deploys/6a4acae9255264dd4cca1cb7`.
- Deployed preview gate passed: `QA_BASE_URL="https://live-globe-loader-fix--robson-ai-website.netlify.app" npm run qa:release:preview`; artifact `output/release-preview-gate/gate-2026-07-05T21-22-15-609Z/release-preview-gate.json`; result pass, 14 steps.
- Netlify production deploy succeeded from the same clean `git archive` of commit `924b214`: deploy `6a4acbc6eef7cd0827692aff`, production URL `https://robsonai.co.uk`, unique deploy URL `https://6a4acbc6eef7cd0827692aff--robson-ai-website.netlify.app`, logs `https://app.netlify.com/projects/robson-ai-website/deploys/6a4acbc6eef7cd0827692aff`.
- Production release gate passed: `QA_PRODUCTION_URL="https://robsonai.co.uk" CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production`; artifact `output/release-production-gate/gate-2026-07-05T21-25-50-841Z/release-preview-gate.json`; result pass, 14 steps.
- Focused live Globe Loader check passed at 872px browser width against `https://robsonai.co.uk`: canvas visible, no horizontal overflow, no console messages and no failed requests. Artifact and screenshot: `output/live-globe-postdeploy/2026-07-05T21-28-05-347Z/`.

The release inventory gate enforces:

- no forbidden dirty paths such as `.env*`, `.netlify/`, `node_modules/`, `output/`, `.git/`, `.DS_Store`, or key/certificate files
- explicit allowed dirty path patterns
- file-size budgets for release assets
- BuildScan GLB binary glTF 2.0 structure
- zero external URI references inside the public-preview GLB
- secret-like string scan across candidate files

## 4. Modified Tracked Files

These files are modified and expected in the local hotfix candidate:

```text
docs/codex/RELEASE_STAGING_MANIFEST.md
docs/codex/TRACKER.md
script.js
styles.css
```

## 5. Untracked Candidate Files

No untracked files are expected in this hotfix candidate.

```text
```

## 6. Asset Size Watch

No public asset files are changed in this hotfix candidate.

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

## 10. Checks After Preview Deploy

Completed preview validation:

```bash
QA_BASE_URL="https://live-globe-loader-fix--robson-ai-website.netlify.app" npm run qa:release:preview
```

- Preview deploy: `https://live-globe-loader-fix--robson-ai-website.netlify.app`
- Deploy id: `6a4acae9255264dd4cca1cb7`
- Deploy logs: `https://app.netlify.com/projects/robson-ai-website/deploys/6a4acae9255264dd4cca1cb7`
- Preview gate artifact: `output/release-preview-gate/gate-2026-07-05T21-22-15-609Z/release-preview-gate.json`
- Result: pass, 14 steps.

## 11. Checks After Production Deploy

Completed production validation:

```bash
QA_PRODUCTION_URL="https://robsonai.co.uk" CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production
```

- Production URL: `https://robsonai.co.uk`
- Production deploy: `6a4acbc6eef7cd0827692aff`
- Unique deploy URL: `https://6a4acbc6eef7cd0827692aff--robson-ai-website.netlify.app`
- Deploy logs: `https://app.netlify.com/projects/robson-ai-website/deploys/6a4acbc6eef7cd0827692aff`
- Production gate artifact: `output/release-production-gate/gate-2026-07-05T21-25-50-841Z/release-preview-gate.json`
- Result: pass, 14 steps.

## 12. Rollback Path

If this hotfix causes a live regression after deployment, restore the currently live pre-hotfix production deploy unless Wayne confirms a different rollback target first. If a local/docs regression is found before deployment, restore the affected manifest-approved files to the prior committed state and rerun the relevant checks before another decision.
