# Release Staging Manifest - Website/App Privacy Cross-Link Reconciliation

Last updated: 2026-07-17
Owner: Wayne Robson / Robson AI Solutions
Worktree: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website.release-worktree`
Branch: `codex/brand-contrast-system-20260716`
Baseline commit: `35846ce`
Status: local-only reconciliation after concurrent production deploy `6a5a39988351f4bd95f27bf9`; no new staging, commit, push, preview deploy or production deploy is approved

## Purpose

This manifest preserves the legitimate cross-link introduced by the concurrent live privacy deployment without copying that deployment's older June privacy page shell over the validated current website. The candidate adds one direct `/building-analyst-privacy` link to the current website privacy notice, advances its visible update date to 17 July 2026 and adds an automated product/design assertion for the cross-link.

The current navigation, complete website privacy wording, analytics posture, product-maturity wording, Building Analyst gallery, app privacy notice, marketing assets, BuildScan model, styles, scripts, dependencies, DNS and customer-data behaviour are otherwise unchanged.

Do not run `git add .`.

## Approval boundary

Wayne must approve before Codex performs any of these actions: staging, commit, push, preview deployment or production deployment. Wayne's earlier production approval named exact commit `35846ce` and rollback deploy `6a59edaeb162561cffa6210c`; the subsequent concurrent production deploy changed those preconditions, so that approval was paused before any Git write.

Also not approved: force-push, destructive Git actions, DNS/domain changes, analytics/forms changes, dependency changes, customer-data handling, external messages, unrelated redesign or production rollback.

## Candidate inventory

- 4 modified tracked files.
- 0 untracked candidate files.
- 4 dirty candidate files.
- Generated `dist/` and `output/` content is ignored and must not be staged.

## 4. Modified Tracked Files

```text
docs/codex/RELEASE_STAGING_MANIFEST.md
docs/codex/TRACKER.md
privacy.html
scripts/product-design-acceptance-smoke.mjs
```

## 5. Untracked Candidate Files

```text
```

## 8. Staging Command After Approval Only

```bash
git add -- \
  docs/codex/RELEASE_STAGING_MANIFEST.md \
  docs/codex/TRACKER.md \
  privacy.html \
  scripts/product-design-acceptance-smoke.mjs
```

## Required checks before commit

```bash
git diff --check
node --check scripts/product-design-acceptance-smoke.mjs
npx html-validate --rule doctype-style:off --rule void-style:off privacy.html
npm run qa:internal-links
npm run qa:product-design
npm run qa:release-staging-manifest
npm run qa:release:local
```

## Local validation evidence

- The exact four-file local candidate passed the complete 41-step release gate. Artifact: `output/release-local-gate/gate-2026-07-17T16-15-51-648Z/release-local-gate.json`.
- Evidence pack: `output/measurement/evidence-2026-07-17T16-19-01-137Z`. It records zero axe violations across seven routes and Lighthouse scores of 96 performance, 100 accessibility, 100 best practices and 100 SEO, with CLS 0 and median LCP about 2.41 seconds.
- Responsive testing passed 48 checks, product/design acceptance passed on six routes including `/privacy`, all 23 measured public routes/assets returned HTTP 200 and release inventory reported zero secret findings and zero external GLB URIs.
- Production dependencies report zero vulnerabilities. The existing 17 moderate development/release-tooling findings and unavailable local Firefox/WebKit binaries remain warning-only; Chromium passed.

After a new exact reconciliation commit is approved, created and pushed, publish a fresh non-production Netlify preview and run `QA_BASE_URL=<preview-url> npm run qa:release:preview`. A new production approval must name the new commit and the then-current production rollback deploy.

## Rollback path

Before any remote action, return only these four scoped files to baseline commit `35846ce`. Current production deploy `6a5a39988351f4bd95f27bf9` remains unchanged by this local reconciliation work.
