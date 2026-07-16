# Release Staging Manifest - Production Rendered QA CSP Follow-up

Last updated: 2026-07-16
Owner: Wayne Robson / Robson AI Solutions
Worktree: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website.release-worktree`
Branch: `codex/building-analyst-marketing-live-20260716`
Baseline commit: `6b9a2d4`
Status: narrow production-verification follow-up within Wayne's approved live release

## Purpose

This manifest defines the exact follow-up that removes an unnecessary inline style from the rendered screenshot smoke after the live Content Security Policy correctly rejected it. It does not change the public website, gallery, assets, CSP, DNS, analytics, forms, dependencies or customer-data posture.

Do not run `git add .`.

## Approval boundary

Wayne must approve before Codex performs any of these actions: staging, commit, push, preview deployment or production deployment.

Wayne explicitly approved the Building Analyst marketing gallery live release on 2026-07-16. This release-control correction is necessary to complete the approved production verification without weakening the site CSP.

Not approved: DNS/domain changes, analytics/forms changes, dependency changes, customer-data handling, external messages, destructive Git actions, CSP weakening, unrelated redesign or rollback unless production validation requires the documented recovery path.

## Candidate inventory

- 3 modified tracked files.
- 0 untracked candidate files.
- 3 dirty candidate files.
- Generated `dist/` and `output/` content is ignored and must not be staged.

## 4. Modified Tracked Files

```text
docs/codex/RELEASE_STAGING_MANIFEST.md
docs/codex/TRACKER.md
scripts/rendered-release-smoke.mjs
```

## 5. Untracked Candidate Files

```text
```

## 8. Staging Command After Approval Only

```bash
git add -- \
  docs/codex/RELEASE_STAGING_MANIFEST.md \
  docs/codex/TRACKER.md \
  scripts/rendered-release-smoke.mjs
```

## Required checks before commit

```bash
git diff --check
node --check scripts/rendered-release-smoke.mjs
npm run qa:release-staging-manifest
QA_BASE_URL="https://robsonai.co.uk" npm run qa:rendered:preview
```

After the exact commit is created and pushed to `main`, wait for Netlify production to publish it, then rerun `QA_PRODUCTION_URL="https://robsonai.co.uk" CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production`.

## Rollback path

The public website content is unchanged by this follow-up. If a rollback is required for the gallery release, republish clean source commit `475e383`, which was the previous known-good public version.
