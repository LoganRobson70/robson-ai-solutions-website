# Release Staging Manifest - Brand Contrast System

Last updated: 2026-07-16
Owner: Wayne Robson / Robson AI Solutions
Worktree: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website.release-worktree`
Branch: `codex/brand-contrast-system-20260716`
Baseline commit: `cbfb61d`
Status: Wayne-selected Canva shadow treatment implemented, visually matched and fully validated locally; exact-path staging, scoped commit, branch push and a fresh non-production preview were explicitly approved by Wayne on 2026-07-16; production deployment is not approved

## Purpose

This manifest defines the exact Building Analyst brand-contrast tranche. It implements Wayne's Canva reference as a tightly localised Version 3 mark with a soft light-blue, slightly rotated shadow in the two dark marketing compositions. The mark and shadow are one transparent composite asset, aligned over each existing baked mark. The reusable rule and product-design and visual-polish checks prevent a neutral halo, opaque plate or unintended duplicate logo from returning in future website releases.

It does not change the approved source artwork, product claims, CSP, DNS, analytics, forms, dependencies or customer-data posture.

Do not run `git add .`.

## Approval boundary

Wayne must approve before Codex performs any of these actions: staging, commit, push, preview deployment or production deployment. On 2026-07-16, Wayne explicitly approved the manifest-defined staging, scoped commit, branch push and fresh non-production preview. Production deployment remains separately approval-gated.

Approved without a further gate: scoped local edits, local build, browser inspection and local validation.

Not approved: DNS/domain changes, analytics/forms changes, dependency changes, customer-data handling, external messages, destructive Git actions, CSP weakening, unrelated redesign or rollback unless production validation requires the documented recovery path.

## Candidate inventory

- 7 modified tracked files.
- 2 untracked candidate files.
- 9 dirty candidate files.
- Generated `dist/` and `output/` content is ignored and must not be staged.

## 4. Modified Tracked Files

```text
building-analyst.html
design-qa.md
docs/codex/RELEASE_STAGING_MANIFEST.md
docs/codex/TRACKER.md
scripts/product-design-acceptance-smoke.mjs
scripts/visual-polish-smoke.mjs
styles.css
```

## 5. Untracked Candidate Files

```text
assets/robson-ai-icon-v3-rotated-blue-shadow.webp
docs/codex/BRAND_CONTRAST_STANDARD.md
```

## 8. Staging Command After Approval Only

```bash
git add -- \
  assets/robson-ai-icon-v3-rotated-blue-shadow.webp \
  building-analyst.html \
  design-qa.md \
  docs/codex/BRAND_CONTRAST_STANDARD.md \
  docs/codex/RELEASE_STAGING_MANIFEST.md \
  docs/codex/TRACKER.md \
  scripts/product-design-acceptance-smoke.mjs \
  scripts/visual-polish-smoke.mjs \
  styles.css
```

## Required checks before commit

```bash
git diff --check
node --check scripts/product-design-acceptance-smoke.mjs
node --check scripts/visual-polish-smoke.mjs
npm run qa:release-staging-manifest
npm run qa:release:local
```

Current local result: all required checks pass. The refreshed full release gate passed all 41 steps at `output/release-local-gate/gate-2026-07-16T13-39-40-195Z/release-local-gate.json`. Its evidence pack at `output/measurement/evidence-2026-07-16T13-42-05-227Z` records zero axe violations across six routes and Lighthouse scores of 96 performance, 100 accessibility, 100 best practices and 100 SEO, with CLS 0 and median LCP about 2.40 seconds. Chromium passed; the unavailable local Firefox and WebKit binaries remain advisory only. Production dependencies report zero vulnerabilities; 17 moderate findings remain confined to development and release tooling.

After the exact commit is created and pushed, publish a fresh Netlify preview and run its deployed release gate before requesting production approval. Production verification remains a separate explicit step.

## Rollback path

Return the website to clean source commit `cbfb61d`. The underlying marketing image assets are unchanged, so rollback requires no asset restoration or migration.
