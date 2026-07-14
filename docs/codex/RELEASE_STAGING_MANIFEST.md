# Release Staging Manifest - Building Analyst Globe And Products Navigation

Last updated: 2026-07-14
Owner: Wayne Robson / Robson AI Solutions
Worktree: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website.current-main-integration`
Branch: `codex/current-main-building-analyst-integration`
Baseline commit: `b59ffe4`
Status: exact staging, one scoped commit and one fresh non-production preview approved; push and production deployment not approved

## Purpose

This manifest defines the exact combined local candidate for the approved `building-analyst-cached-hero-layout-defect` and `products-parent-navigation` tranches. It prevents stale styles from producing a runaway Building Analyst globe, waits for the approved detailed world-map treatment, and makes Products the clear parent of Building Analyst, BuildScan and Property Operations.

The candidate preserves the approved Robson AI positioning, product maturity labels, Building Analyst workflow, BuildScan proof, privacy posture and production infrastructure. It does not change analytics, forms, DNS, customer data, dependencies or product claims.

Do not run `git add .`.

## Approval boundary

Wayne must approve before Codex performs any of these actions: staging, commit, push, preview deployment or production deployment.

Wayne approved exact staging, one scoped commit and a fresh non-production Netlify preview by selecting option `1` on 2026-07-14 after visually approving the Products navigation.

Not approved: branch push, PR, production deploy or verification, analytics enablement, DNS/domain changes, dependency changes, external messages or destructive Git actions.

## Candidate inventory

- 15 modified tracked files.
- 0 untracked candidate files.
- 15 dirty candidate files.
- Generated `dist/` output is ignored and must not be staged.
- The unrelated untracked `docs/codex/RELEASE_STAGING_MANIFEST 2.md` is explicitly excluded and must remain untouched.
- Existing imagery, BuildScan GLB, fonts and vendor files are unchanged.

## 4. Modified Tracked Files

```text
404.html
building-analyst.html
docs/codex/RELEASE_STAGING_MANIFEST.md
docs/codex/TRACKER.md
holding.html
index.html
privacy.html
script.js
scripts/keyboard-release-smoke.mjs
scripts/release-security-smoke.mjs
scripts/responsive-route-smoke.mjs
scripts/site-shell-source.mjs
scripts/visual-polish-smoke.mjs
styles-production.css
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
  holding.html \
  index.html \
  privacy.html \
  script.js \
  scripts/keyboard-release-smoke.mjs \
  scripts/release-security-smoke.mjs \
  scripts/responsive-route-smoke.mjs \
  scripts/site-shell-source.mjs \
  scripts/visual-polish-smoke.mjs \
  styles-production.css \
  who-its-for.html
```

## Required checks before commit

```bash
npm run build:site
npm run qa:release-staging-manifest
npm run qa:release:local
git diff --check
```

After the exact commit is created, deploy a clean archive of that commit to a Netlify draft URL and run `QA_BASE_URL=<preview> npm run qa:release:preview`. The command must reject production and must not fall back to another URL.

## Rollback path

No production rollback is needed for a draft preview. Production deploy `6a53b157d6c68db39daba82a` remains the known-good live baseline and must not be changed without separate explicit approval.
