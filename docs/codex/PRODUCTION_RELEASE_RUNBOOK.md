# Production Release And Source-Control Runbook - Robson AI Solutions Website

Last updated: 2026-06-29 20:35 BST
Owner: Wayne Robson / Robson AI Solutions
Status: production published from clean archive; source-control alignment requires Wayne approval

## 1. Purpose

This runbook records the current production state for the clean website restart and defines the remaining approval-gated path to align GitHub source control with the live Netlify deploy.

It does not approve commits, pushes, pull requests, merges, production deploys, production verification, domain/DNS changes, analytics, forms, customer-data handling, external messages, or destructive git actions.

## 2. Current Production State

Live production:

- Public URL: `https://robsonai.co.uk`
- Netlify production deploy: `6a42c401c0f172f9fa99e3a7`
- Unique deploy URL: `https://6a42c401c0f172f9fa99e3a7--robson-ai-website.netlify.app`
- Logs: `https://app.netlify.com/projects/robson-ai-website/deploys/6a42c401c0f172f9fa99e3a7`
- Source: clean archive of local commit `242410f`
- Published after Wayne approved option `1`

Validation:

- Production gate command: `QA_PRODUCTION_URL=https://robsonai.co.uk CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production`
- Production gate artifact: `output/release-production-gate/gate-2026-06-29T19-15-08-658Z/release-preview-gate.json`
- Result: pass, 14 steps
- Live recheck on 2026-06-29 20:25 BST: Netlify API still reported deploy `6a42c401c0f172f9fa99e3a7`, and `https://robsonai.co.uk/` returned HTTP 200 with `content-length: 37720`

Immediate rollback target:

- Netlify deploy: `6a415b5db31442000737c37c`
- Source: GitHub/main commit `39c5bf5`
- Unique deploy URL: `https://6a415b5db31442000737c37c--robson-ai-website.netlify.app`

Rejected preview that must not be published:

- `https://proof-motion-polish--robson-ai-website.netlify.app`
- Deploy: `6a41739b29f5ccb3751611f1`

## 3. Current Source-Control State

Current clean worktree:

- Path: `/private/tmp/robson-ai-website-quality-restart`
- Branch: `codex/website-quality-clean-restart`
- Commit: `242410f` (`Prepare clean website restart candidate`)
- Tracking: `origin/main`
- Status: branch is one commit ahead of `origin/main`

Current GitHub/main:

- `origin/main`: `39c5bf5`
- `main`: `39c5bf5`

Fast-forward preflight:

- Checked: 2026-06-29 20:35 BST
- `HEAD`: `242410f`
- `origin/main`: `39c5bf5`
- `main`: `39c5bf5`
- `origin/main -> HEAD`: fast-forward possible
- `main -> HEAD`: fast-forward possible
- `HEAD` is not yet contained by `origin/main`
- No force-push is required for the recommended alignment path.

Important consequence:

- Production currently serves the clean restart candidate from a CLI archive deploy.
- GitHub/main does not yet contain commit `242410f`.
- A future GitHub-triggered Netlify production deploy from unchanged `main` could revert production back to `39c5bf5` unless source control is aligned first.

## 4. Recommended Approval Phrase

Recommended approval phrase:

`Approve source-control alignment for website-quality-clean-restart`

That approval means Codex may:

- stage only the docs closeout files listed in `docs/codex/RELEASE_STAGING_MANIFEST.md`
- create a docs closeout commit on `codex/website-quality-clean-restart`
- push the branch
- fast-forward `main` without force if the local history remains a clean descendant of `origin/main`
- push `main`
- wait for any GitHub-triggered Netlify production deploy
- rerun production verification if Netlify publishes a new deploy

That approval does not include:

- force-push
- destructive git reset/checkout
- DNS/domain changes
- analytics/forms/customer-data handling
- external messages
- app-platform implementation
- Apple signing/submission
- payments
- `npm audit fix --force`
- publishing the rejected motion preview

## 5. Recommended Source-Control Alignment Path

Recommended path: normal Git push with no force.

Why:

- Netlify is configured to deploy production from GitHub `main`.
- The current production deploy was a clean CLI archive from `242410f`, so source control should be brought back into line.
- A no-force fast-forward keeps the audit trail simple.

Execution outline after Wayne approval:

1. Re-check `git status --short --branch`.
2. Re-check `git log --oneline --decorate --graph --max-count=8 --all`.
3. Re-check Netlify current production deploy and rollback target.
4. Run `git diff --check`.
5. Run `npm run qa:release-inventory`.
6. Stage only the explicit docs closeout paths in `docs/codex/RELEASE_STAGING_MANIFEST.md`.
7. Run `git diff --cached --check`.
8. Commit the docs closeout.
9. Push branch `codex/website-quality-clean-restart`.
10. Fast-forward local `main` to the approved branch without force.
11. Push `main` normally.
12. Wait for Netlify production deploy to become ready.
13. If Netlify publishes a new deploy, run:

```bash
QA_PRODUCTION_URL=https://robsonai.co.uk CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production
```

14. Update tracker and closeout docs with the final source-control and deploy evidence.

## 6. Rollback

If source-control alignment triggers a Netlify deploy that fails production verification:

1. Stop further changes.
2. Preserve the failed production evidence artifact.
3. Restore the previous known-good Netlify deploy, currently `6a42c401c0f172f9fa99e3a7`, if the failure occurred after a GitHub/main redeploy.
4. If the clean restart itself needs to be rolled back, restore `6a415b5db31442000737c37c`.
5. Prepare a normal revert commit rather than force-pushing.
6. Report the failure, restored deploy ID, evidence and next fix tranche.

Do not use `git reset --hard`, force-push, DNS edits, or destructive commands as rollback unless Wayne explicitly approves that exact action.

## 7. Production Verification Pass Criteria

Production verification must pass:

- production host validation
- source-path deny checks
- release headers/security checks
- BuildScan viewer production smoke
- keyboard smoke
- semantic/SEO smoke
- product/design acceptance smoke
- responsive route smoke
- visual-polish smoke
- browser coverage advisory
- rendered smoke
- measurement smoke

## 8. Recommended Next Step

1. Recommended: approve `source-control alignment for website-quality-clean-restart`.
2. Review the live site first and request targeted fixes if needed.
3. Hold here with production live and GitHub/main unchanged.
