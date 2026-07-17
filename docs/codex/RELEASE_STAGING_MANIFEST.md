# Release Staging Manifest - Product Maturity And Flagship Visual Priority

Last updated: 2026-07-17
Owner: Wayne Robson / Robson AI Solutions
Worktree: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website.release-worktree`
Branch: `codex/brand-contrast-system-20260716`
Baseline commit: `52e6253`
Status: exact-path staging, scoped commit, branch push and a fresh non-production Netlify preview were explicitly approved by Wayne on 2026-07-17; production deployment is not approved

## Purpose

This manifest defines the exact product-maturity and flagship-visual-priority tranche. It corrects the public website so Building Analyst is the flagship product in development, BuildScan is also in development and neither product is presented as App Store released. Property Operations remains roadmap exploration. It also moves the existing approved Building Analyst marketing gallery intact to immediately after the hero and adds regression coverage for that priority.

The approved marketing images, rotated blue shadow asset, brand-contrast standard, CSS, BuildScan model, privacy posture, analytics, forms, dependencies, CSP, DNS and customer-data behaviour are unchanged.

Do not run `git add .`.

## Approval boundary

Wayne must approve before Codex performs any of these actions: staging, commit, push, preview deployment or production deployment. On 2026-07-17, Wayne explicitly approved this manifest-defined release preparation: exact-path staging, scoped commit, branch push, a fresh non-production Netlify preview and deployed-preview verification.

Production deployment remains separately approval-gated. Also not approved: DNS/domain changes, analytics/forms changes, dependency changes, customer-data handling, external messages, destructive Git actions, CSP weakening, unrelated redesign or rollback unless preview validation requires the documented recovery path.

## Candidate inventory

- 10 modified tracked files.
- 0 untracked candidate files.
- 10 dirty candidate files.
- Generated `dist/` and `output/` content is ignored and must not be staged.

## 4. Modified Tracked Files

```text
404.html
building-analyst.html
docs/codex/RELEASE_STAGING_MANIFEST.md
docs/codex/TRACKER.md
index.html
privacy.html
scripts/product-design-acceptance-smoke.mjs
scripts/responsive-route-smoke.mjs
scripts/site-shell-source.mjs
who-its-for.html
```

## 5. Untracked Candidate Files

```text
```

## 8. Staging Command After Approval Only

```bash
git add -- \
  404.html \
  building-analyst.html \
  docs/codex/RELEASE_STAGING_MANIFEST.md \
  docs/codex/TRACKER.md \
  index.html \
  privacy.html \
  scripts/product-design-acceptance-smoke.mjs \
  scripts/responsive-route-smoke.mjs \
  scripts/site-shell-source.mjs \
  who-its-for.html
```

## Required checks before commit

```bash
git diff --check
node --check scripts/product-design-acceptance-smoke.mjs
node --check scripts/responsive-route-smoke.mjs
node --check scripts/site-shell-source.mjs
npm run qa:release-staging-manifest
npm run qa:release:local
```

Current local result: the first complete 41-step release gate passed at `output/release-local-gate/gate-2026-07-17T08-43-27-342Z/release-local-gate.json`. Its evidence pack at `output/measurement/evidence-2026-07-17T08-46-15-855Z` records zero axe violations across six routes and Lighthouse scores of 96 performance, 100 accessibility, 100 best practices and 100 SEO, with CLS 0 and median LCP about 2.40 seconds. Chromium passed; unavailable local Firefox and WebKit binaries remain advisory only. Production dependencies report zero vulnerabilities; 17 moderate findings remain confined to development and release tooling.

After the exact commit is created and pushed, publish a fresh non-production Netlify preview and run `QA_BASE_URL=<preview-url> npm run qa:release:preview`. The deployed-preview gate must pass before production approval is requested. Production verification remains a separate explicit step.

## Rollback path

Before production deployment, return only these ten scoped files to baseline commit `52e6253` or discard the non-production Netlify preview. No asset, migration, DNS or data rollback is required because this tranche changes only public copy, section order, regression checks and release documentation.
