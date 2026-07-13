# Release Staging Manifest - Navigation And Typography Consistency

Last updated: 2026-07-13
Owner: Wayne Robson / Robson AI Solutions
Worktree: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website.current-main-integration`
Branch: `codex/current-main-building-analyst-integration`
Baseline commit: `1305571`
Status: exact staging, one scoped commit and one fresh non-production preview approved; push and production deployment not approved

## Purpose

This manifest defines the exact local candidate for the `navigation-and-typography-consistency` tranche. It corrects global navigation destinations and current-state behaviour, introduces a shared role-based typography scale, fixes homepage product-card heading hierarchy, makes the shared mobile menu a reliable one-column flow, and enables that menu on the 404 page.

The candidate preserves the approved Robson AI positioning, product maturity labels, Building Analyst workflow, BuildScan proof, privacy posture and production infrastructure. It does not change analytics, forms, DNS, customer data, dependencies or product claims.

Do not run `git add .`.

## Approval boundary

Wayne must approve before Codex performs any of these actions: staging, commit, push, preview deployment or production deployment.

Wayne approved exact staging, one scoped commit and a fresh non-production Netlify preview by selecting option `1` on 2026-07-13.

Not approved: branch push, PR, production deploy or verification, analytics enablement, DNS/domain changes, dependency changes, external messages or destructive Git actions.

## Candidate inventory

- 13 modified tracked files.
- 0 untracked candidate files.
- 13 dirty candidate files.
- Generated `dist/` output is ignored and must not be staged.
- Existing imagery, BuildScan GLB, fonts and vendor files are unchanged.

## 4. Modified Tracked Files

```text
404.html
building-analyst.html
docs/codex/RELEASE_STAGING_MANIFEST.md
docs/codex/TRACKER.md
index.html
privacy.html
script.js
scripts/keyboard-release-smoke.mjs
scripts/release-security-smoke.mjs
scripts/responsive-route-smoke.mjs
scripts/site-shell-source.mjs
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
  index.html \
  privacy.html \
  script.js \
  scripts/keyboard-release-smoke.mjs \
  scripts/release-security-smoke.mjs \
  scripts/responsive-route-smoke.mjs \
  scripts/site-shell-source.mjs \
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
