# Release Staging Manifest - Building Analyst Homepage Alignment

Last updated: 2026-07-07 22:15 BST
Owner: Wayne Robson / Robson AI Solutions
Repo: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website`
Worktree: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website.release-worktree`
Branch: `codex/live-globe-loader-fix`
Status: Building Analyst page alignment is live; cross-smoke release-control hardening is ready for final source alignment after a full production gate pass against `https://robsonai.co.uk`

## 1. Purpose

This manifest defines the intended file scope for:

`building-analyst-homepage-design-alignment`

Wayne identified that the homepage `Explore Building Analyst` button led to a page that looked like a different website. This candidate replaces the older Building Analyst page shell with the same homepage visual system already live on `https://robsonai.co.uk`.

This candidate:

- makes `building-analyst.html` use the homepage-style white header, dark mesh hero, Globe Loader, zip cards, proof band, boundary band, contact panel and footer treatment
- preserves Building Analyst SEO, route, contact email, no-form privacy posture and cautious product positioning
- keeps required public phrases including "Assessment capture and report-ready evidence", "Not a finished product screenshot", "Not autonomous diagnosis", and "not a substitute for professional judgement"
- updates rendered and keyboard release smokes so they test the new Building Analyst UI rather than retired lens tabs and retired page strapline markup
- hardens deployed browser diagnostic handling across the release smokes so live Chrome `net::ERR_ABORTED` browser-internal/font fallback requests do not fail the release when required public assets respond successfully and the journeys complete

It does not change pricing, analytics config, forms, privacy policy content, DNS, Netlify settings, BuildScan assets, customer-data handling or external integrations.

Do not run `git add .` for this candidate.

## 2. Approval Boundary

Wayne approved option `1` to continue through Netlify CLI availability, local release gate, commit, push, production deploy and production gate for this Building Analyst alignment.

Still out of scope without a separate approval:

- rollback
- DNS/domain changes
- analytics/forms/customer-data handling
- external messages
- destructive git actions
- unrelated website redesign

## 3. Current Source-Control Scope

Current Building Analyst alignment state:

- Base branch: `codex/live-globe-loader-fix` at `b2d4ca5`
- Working branch: `codex/live-globe-loader-fix`
- Worktree: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website.release-worktree`
- Commit `fbb25b2` deployed the Building Analyst page alignment to production.
- 8 modified tracked files.
- 0 untracked candidate files.
- Total dirty candidate files: 8.

Current validation evidence:

- `git diff --check` passed.
- `npx --no-install html-validate --rule doctype-style:off --rule void-style:off building-analyst.html` passed.
- `node --check scripts/keyboard-release-smoke.mjs` and `node --check scripts/rendered-release-smoke.mjs` passed.
- `npm run qa:product-design` passed with artifact `output/product-design-acceptance/smoke-2026-07-07T20-27-00-031Z/product-design-acceptance-smoke.json`.
- `npm run qa:responsive` passed with artifact `output/responsive-route/smoke-2026-07-07T20-27-00-065Z/responsive-route-smoke.json`.
- `npm run qa:visual-polish` passed with artifact `output/visual-polish/smoke-2026-07-07T20-27-01-451Z/visual-polish-smoke.json`.
- `npm run qa:rendered` passed with screenshots in `output/playwright/rendered-release-smoke-2026-07-07T20-27-49-249Z`.
- `desktop-building-analyst-proof.png` from that artifact confirms the Building Analyst route now shares the homepage-style dark hero, card system, proof section, boundary section, contact panel and footer treatment.
- `npm run qa:keyboard` passed with artifact `output/playwright/keyboard-release-smoke-2026-07-07T20-27-49-465Z`.
- `npm run qa:semantic-seo` passed with artifact `output/semantic-seo/smoke-2026-07-07T20-27-49-482Z/semantic-seo-smoke.json`.
- `npm run qa:release-security` passed with artifact `output/release-security/smoke-2026-07-07T20-27-50-420Z/release-security-smoke.json`.
- Full `npm run qa:release:local` passed with artifact `output/release-local-gate/gate-2026-07-07T20-37-49-209Z/release-local-gate.json`; 37 steps.
- Commit `fbb25b2` (`Align Building Analyst page with homepage design`) was pushed to `codex/live-globe-loader-fix` and `main`.
- Netlify production deploy `6a4d6566c91e491ad79314da` published commit `fbb25b2` to `https://robsonai.co.uk`.
- The first production gate passed release inventory, dependency audit advisory, source security posture and deployed release headers, then failed at the deployed BuildScan viewer check because Chrome emitted an aborted browser-internal/font fallback request while the required viewer assets remained healthy.
- Direct live asset checks confirmed `/buildscan-viewer.html`, Three.js modules, the public BuildScan GLB and icon asset all returned HTTP 200.
- Focused deployed BuildScan viewer smoke passed after release-control hardening with artifact `output/buildscan-viewer/smoke-2026-07-07T20-50-35-156Z`.
- Netlify production deploy `6a4d682157180b275c815686` published release-control commit `bc57a1c`.
- The second production gate artifact `output/release-production-gate/gate-2026-07-07T20-57-32-819Z/release-preview-gate.json` passed the deployed BuildScan viewer check, then failed at the deployed keyboard smoke for the same Chrome aborted browser-internal/font fallback request pattern.
- Focused deployed keyboard smoke passed after release-control hardening with artifact `output/playwright/keyboard-release-smoke-2026-07-07T20-59-36-349Z`.
- A full production gate using the cross-smoke release-control hardening passed against `https://robsonai.co.uk` with artifact `output/release-production-gate/gate-2026-07-07T21-11-30-431Z/release-preview-gate.json`; 14 steps. This gate ran before committing the final source-alignment follow-up and therefore reported dirtyCount 6 for the release-tooling scripts.

The release inventory gate enforces:

- no forbidden dirty paths such as `.env*`, `.netlify/`, `node_modules/`, `output/`, `.git/`, `.DS_Store`, or key/certificate files
- explicit allowed dirty path patterns
- file-size budgets for release assets
- BuildScan GLB binary glTF 2.0 structure
- zero external URI references inside the public-preview GLB
- secret-like string scan across candidate files

## 4. Modified Tracked Files

Commit `fbb25b2` modified `building-analyst.html`, `scripts/keyboard-release-smoke.mjs`, `scripts/rendered-release-smoke.mjs`, this manifest, and the tracker for the Building Analyst page alignment.

These files are currently modified in the release-control follow-up:

```text
docs/codex/RELEASE_STAGING_MANIFEST.md
docs/codex/TRACKER.md
scripts/browser-coverage-smoke.mjs
scripts/product-design-acceptance-smoke.mjs
scripts/rendered-release-smoke.mjs
scripts/responsive-route-smoke.mjs
scripts/semantic-seo-smoke.mjs
scripts/visual-polish-smoke.mjs
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

Wayne approved this publish path. Use this explicit path list rather than `git add .`.

```bash
git add -- \
  docs/codex/RELEASE_STAGING_MANIFEST.md \
  docs/codex/TRACKER.md \
  scripts/browser-coverage-smoke.mjs \
  scripts/product-design-acceptance-smoke.mjs \
  scripts/rendered-release-smoke.mjs \
  scripts/responsive-route-smoke.mjs \
  scripts/semantic-seo-smoke.mjs \
  scripts/visual-polish-smoke.mjs
```

## 9. Required Checks Before Commit

Run these after staging and before commit:

```bash
git status --short --branch
git diff --cached --check
node --check scripts/browser-coverage-smoke.mjs scripts/product-design-acceptance-smoke.mjs scripts/rendered-release-smoke.mjs scripts/responsive-route-smoke.mjs scripts/semantic-seo-smoke.mjs scripts/visual-polish-smoke.mjs
QA_PRODUCTION_URL="https://robsonai.co.uk" CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production
```

Then confirm the staged file set matches this manifest before committing.

## 10. Checks After Preview Deploy

Preview deploy is optional for this already-approved hotfix path. If used:

```bash
QA_BASE_URL="<cache-bust-preview-url>" npm run qa:release:preview
```

- Preview deploy: optional.
- Preview gate artifact: pending if used.
- Result: pending if used.

## 11. Checks After Production Deploy

Required after production deployment:

```bash
QA_PRODUCTION_URL="https://robsonai.co.uk" CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production
```

- Production URL: `https://robsonai.co.uk`
- Production deploy: `6a4d6566c91e491ad79314da` for commit `fbb25b2`; `6a4d682157180b275c815686` for commit `bc57a1c`; `6a4d69d72e110732b83f8059` for commit `7d64257`; final source-aligned redeploy pending after cross-smoke hardening.
- Production gate artifact: initial artifact `output/release-production-gate/gate-2026-07-07T20-45-54-306Z/release-preview-gate.json` failed at the now-hardened BuildScan viewer smoke false-positive; second artifact `output/release-production-gate/gate-2026-07-07T20-57-32-819Z/release-preview-gate.json` failed at the now-hardened keyboard smoke false-positive.
- Result: pre-commit production gate passed with artifact `output/release-production-gate/gate-2026-07-07T21-11-30-431Z/release-preview-gate.json`; final clean-source production gate pending.

## 12. Rollback Path

If this candidate causes a live regression after deployment, restore the current production deploy `6a4bdf25d47fe304e6efbd85` unless Wayne confirms a different rollback target first. If a local/docs regression is found before deployment, restore the affected manifest-approved files to the prior committed state and rerun the relevant checks before another decision.
