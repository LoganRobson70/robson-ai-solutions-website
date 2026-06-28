# Production Release Runbook - Robson AI Solutions Website

Last updated: 2026-06-28 01:56 BST
Owner: Wayne Robson / Robson AI Solutions
Status: ready for approval; do not execute without Wayne approval

## 1. Purpose

This runbook defines the exact release path from the validated preview candidate to production.

It does not approve staging, commits, pushes, pull requests, merges, production deploys, production verification, domain/DNS changes, analytics, forms, customer-data handling, or destructive git actions.

## 2. Current Release Inputs

Validated candidate branch:

- `codex/buildscan-interactive-preview-release-candidate`
- latest pushed commit: `b6ab8b3`
- three commits ahead of `main`

Validated Netlify draft preview:

- `https://6a4055bfcca135298c4b453a--robson-ai-website.netlify.app`
- preview gate evidence: `output/release-preview-gate/gate-2026-06-27T23-54-42-307Z/release-preview-gate.json`

Current production rollback candidate:

- Netlify deploy ID: `6a3d75a7658e0400089157a2`
- production URL: `https://robsonai.co.uk`
- branch: `main`
- commit: `4a3f1fa8f7b1f885c37937056e2a029d6043501b`
- published: `2026-06-25T18:38:43.783Z`

Docs closeout currently local-only:

- `docs/codex/TRACKER.md`
- `docs/codex/PUBLISH_READINESS_AUDIT.md`
- `docs/codex/RELEASE_APPROVAL_PACKET.md`
- `docs/codex/WEBSITE_EXCELLENCE_PROGRAMME.md`
- `docs/codex/MOTION_REFERENCE_BRIEF.md`
- `docs/codex/GOAL_COMPLETION_AUDIT.md`
- `docs/codex/PRODUCTION_RELEASE_RUNBOOK.md`

## 3. Recommended Approval Phrase

Wayne should approve this exact phrase before execution:

`Approve production-publish-from-validated-preview-and-docs-closeout`

That approval means:

- public production exposure of the validated BuildScan GLB is approved
- docs closeout may be staged, committed and pushed
- the validated candidate may be published through the approved production path
- production verification may run with explicit confirmation

It still does not approve:

- DNS/domain changes
- GA4 or analytics enablement
- contact forms or customer-data capture
- external messages
- Apple signing/submission
- payments
- destructive git actions
- `npm audit fix --force`
- motion-polish implementation before production

## 4. Recommended Production Path

Recommended path: GitHub/main-triggered Netlify production deploy.

Why:

- Netlify is configured to deploy production from GitHub `main`.
- The current live production deploy is from `main`.
- This keeps source control and production aligned.
- It avoids a one-off CLI production deploy that could make production differ from GitHub.

Execution outline after approval:

1. Re-check `git status --short --branch`.
2. Re-check Netlify production deploy list and record the live rollback deploy ID.
3. Run `git diff --check` on the docs closeout.
4. Run `npm run qa:release-inventory`.
5. Stage only the approved docs closeout files listed in section 2.
6. Commit the docs closeout on `codex/buildscan-interactive-preview-release-candidate`.
7. Push the updated candidate branch.
8. Move the validated candidate into `main` through the approved GitHub/main path.
9. Wait for the Netlify production deploy to become `ready`.
10. Run:

```bash
QA_PRODUCTION_URL=https://robsonai.co.uk CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production
```

11. Report production deploy ID, production verification artifact, rollback target, risks and post-launch next step.

## 5. CLI Production Fallback

Fallback path: explicit Netlify CLI production deploy.

Only use this if Wayne explicitly approves a CLI production deploy instead of GitHub/main.

Why it is not the default:

- It can publish a production deploy that is not represented by `main`.
- It weakens the normal GitHub-to-Netlify audit trail.
- It requires extra care to ensure the deployed directory contains only committed/approved files.

If approved, use a clean committed-file export rather than deploying the dirty repo root.

Required guardrails:

- re-check rollback target first
- deploy only the approved candidate plus docs closeout
- do not include `.git`, `.netlify`, `node_modules`, `output`, local screenshots, raw source models, secrets or local machine files
- run the same production verification command after deploy

## 6. Rollback

If production verification fails after deploy:

1. Stop further changes.
2. Preserve the failed production evidence artifact.
3. Restore the previous Netlify production deploy, currently expected to be `6a3d75a7658e0400089157a2`, after re-checking that it is still the correct rollback target.
4. If the GitHub/main path was used, prepare a revert commit on `main` if the Netlify restore is not sufficient.
5. Report the failure, restored deploy ID and next fix tranche.

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

The goal is not complete until production verification passes and the tracker is updated with the production evidence.

## 8. Recommended Next Step

1. Recommended: approve `production-publish-from-validated-preview-and-docs-closeout`.
2. Hold production and run full Codex Security first.
3. Hold production and implement `docs/codex/MOTION_REFERENCE_BRIEF.md`, accepting that preview evidence must be regenerated.
4. Hold production and install/enable Firefox/WebKit for strict browser parity.
