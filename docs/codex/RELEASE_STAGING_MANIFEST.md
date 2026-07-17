# Release Staging Manifest - Building Analyst App Privacy Route Reconciliation

Last updated: 2026-07-17
Owner: Wayne Robson / Robson AI Solutions
Worktree: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website.release-worktree`
Branch: `codex/brand-contrast-system-20260716`
Baseline commit: `1878a53`
Status: exact-path staging, a scoped reconciliation commit, branch push and a refreshed non-production Netlify preview were explicitly approved by Wayne on 2026-07-17; production deployment is not approved

## Purpose

This manifest defines the narrow reconciliation required after the Building Analyst app privacy notice was published to production as an untracked one-off file. It preserves the live privacy wording and makes `/building-analyst-privacy` a first-class website route that is copied by the normal public build and covered by release inventory, HTML, internal-link, security, route, accessibility and responsive checks.

The only page-level integration adjustments are clean internal URLs, current stylesheet/script cache keys and moving the existing one-rule layout style into `styles.css` so it remains compatible with the website's stricter Content Security Policy. The validated product-maturity and flagship-gallery changes in commit `1878a53`, the privacy wording, marketing assets, BuildScan model, analytics, forms, dependencies, DNS and customer-data behaviour are otherwise unchanged.

Do not run `git add .`.

## Approval boundary

Wayne must approve before Codex performs any of these actions: staging, commit, push, preview deployment or production deployment. On 2026-07-17, Wayne selected option `1`, explicitly approving this exact privacy-route reconciliation, scoped commit, branch push, refreshed non-production preview and deployed-preview verification.

Production deployment remains separately approval-gated. Also not approved: DNS/domain changes, analytics/forms changes, dependency changes, customer-data handling, external messages, destructive Git actions, unrelated redesign or rollback unless preview validation requires the documented recovery path.

## Candidate inventory

- 12 modified tracked files.
- 1 untracked candidate files.
- 13 dirty candidate files.
- Generated `dist/` and `output/` content is ignored and must not be staged.

## 4. Modified Tracked Files

```text
docs/codex/RELEASE_STAGING_MANIFEST.md
docs/codex/TRACKER.md
scripts/build-public-site.mjs
scripts/internal-link-smoke.mjs
scripts/measurement-evidence.mjs
scripts/measurement-smoke.mjs
scripts/release-candidate-inventory.mjs
scripts/release-local-gate.mjs
scripts/release-security-smoke.mjs
scripts/responsive-route-smoke.mjs
sitemap.xml
styles.css
```

## 5. Untracked Candidate Files

```text
building-analyst-privacy.html
```

## 8. Staging Command After Approval Only

```bash
git add -- \
  building-analyst-privacy.html \
  docs/codex/RELEASE_STAGING_MANIFEST.md \
  docs/codex/TRACKER.md \
  scripts/build-public-site.mjs \
  scripts/internal-link-smoke.mjs \
  scripts/measurement-evidence.mjs \
  scripts/measurement-smoke.mjs \
  scripts/release-candidate-inventory.mjs \
  scripts/release-local-gate.mjs \
  scripts/release-security-smoke.mjs \
  scripts/responsive-route-smoke.mjs \
  sitemap.xml \
  styles.css
```

## Required checks before commit

```bash
git diff --check
node --check scripts/build-public-site.mjs
node --check scripts/internal-link-smoke.mjs
node --check scripts/measurement-evidence.mjs
node --check scripts/measurement-smoke.mjs
node --check scripts/release-candidate-inventory.mjs
node --check scripts/release-local-gate.mjs
node --check scripts/release-security-smoke.mjs
node --check scripts/responsive-route-smoke.mjs
npm run qa:release-staging-manifest
npm run qa:release:local
```

The complete 41-step local release gate passed on this 13-file candidate. Evidence: `output/release-local-gate/gate-2026-07-17T09-14-24-023Z/release-local-gate.json`; measurement pack: `output/measurement/evidence-2026-07-17T09-16-59-143Z`. The new app-privacy route returned HTTP 200, passed responsive checks and had zero axe violations. Lighthouse passed at 96 performance, 100 accessibility, 100 best practices and 100 SEO, with CLS 0 and median LCP about 2.40 seconds. Production dependencies have zero vulnerabilities; the existing 17 moderate development/release-tooling findings and unavailable local Firefox/WebKit binaries remain warning-only.

After the exact reconciliation commit is created and pushed, publish a refreshed non-production Netlify preview and run `QA_BASE_URL=<preview-url> npm run qa:release:preview`. The deployed-preview gate and final Browser check must include `/building-analyst-privacy` before production approval is requested.

## Rollback path

Before production deployment, return only these thirteen scoped files to baseline commit `1878a53` and discard the refreshed non-production preview. Current production deploy `6a59edaeb162561cffa6210c`, including its app privacy route, remains unchanged by this reconciliation work.
