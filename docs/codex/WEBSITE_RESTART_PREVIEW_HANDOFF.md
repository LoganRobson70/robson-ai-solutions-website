# Website Restart Preview And Production Handoff

Last updated: 2026-06-29 20:17 BST
Owner: Wayne Robson / Robson AI Solutions
Repo: `/private/tmp/robson-ai-website-quality-restart`
Status: clean restart candidate is live on production and has passed the production gate

## 1. Purpose

This handoff is the current approval packet for the restarted Robson AI Solutions website candidate.

It is separate from `docs/codex/FINAL_WEBSITE_APPROVAL_HANDOFF.md`, which records the earlier production release. The earlier release evidence does not approve this candidate.

Current decision state:

- Wayne approved option `1` on 2026-06-29.
- Local commit `242410f` was created on branch `codex/website-quality-clean-restart`.
- Netlify preview deploy `6a42b0eaaaa964aad7bb6dce` passed the deployed preview gate.
- Preview URL: `https://website-quality-clean-restart--robson-ai-website.netlify.app`
- Wayne later approved option `1` to production publish the clean restart candidate.
- Production deploy `6a42c401c0f172f9fa99e3a7` is live on `https://robsonai.co.uk` and passed the production release gate.
- Branch push, GitHub PR/main alignment, DNS/domain changes, analytics/forms/customer data handling and external messages remain unapproved.

Recommended next step: approve source-control alignment so GitHub/main matches the live production archive deploy.

## 2. Current Review URL

Clean worktree:

- `/private/tmp/robson-ai-website-quality-restart`
- Branch: `codex/website-quality-clean-restart`

Local review URL:

- `http://127.0.0.1:8133/`
- HTTP 200 confirmed.

Notes:

- This is a local server on Wayne's Mac.
- The Browser MCP container cannot reach this loopback URL, but local browser access has returned HTTP 200.
- Netlify preview exists at `https://website-quality-clean-restart--robson-ai-website.netlify.app`.
- Production exists at `https://robsonai.co.uk`.

## 3. What This Candidate Changes

The candidate restarts from the original "best releasable website" goal after Wayne rejected the motion-preview direction.

Implemented locally:

- Replaces the rejected floating hero icon treatment with a stronger product/proof hero using the existing BuildScan model-view image.
- Reduces repeated pale-card treatment and strengthens navy proof sections.
- Consolidates Finder, Property Operations, Method, Credibility and Contact into clearer product-proof layouts.
- Fixes the Focus section so it no longer mixes a white manifesto card with dark-section text.
- Keeps Building Analyst, BuildScan and property operations positioned as separate but connected workstreams.
- Keeps cautious Apple-native/product maturity language.
- Keeps email-first contact and no website form/customer-data store.
- Keeps the existing BuildScan opt-in model-view behaviour and does not add new model assets.
- Removes the rejected motion-preview layer from the active publish path by moving the restart candidate onto a clean branch from `origin/main`.

Not included:

- Branch push or GitHub PR.
- Source-control alignment to GitHub/main.
- New product claims.
- New customer logos, testimonials, fake screenshots or invented traction.
- New public GLB/model exposure.
- Apple, Android, macOS or iOS implementation.
- GA4 enablement, forms, payments, customer data, DNS or external messages.

## 4. Candidate File Scope

Expected tracked files:

- `docs/codex/GOAL_COMPLETION_AUDIT.md`
- `docs/codex/PUBLISH_READINESS_AUDIT.md`
- `docs/codex/RELEASE_STAGING_MANIFEST.md`
- `docs/codex/TRACKER.md`
- `docs/codex/WEBSITE_APPROVAL_REVIEW_CHECKLIST.md`
- `index.html`
- `scripts/rendered-release-smoke.mjs`
- `styles.css`
- `who-its-for.html`

Expected untracked candidate files:

- `docs/codex/WEBSITE_RESTART_DESIGN_AUDIT.md`
- `docs/codex/WEBSITE_RESTART_PREVIEW_HANDOFF.md`

Do not use `git add .`.

## 5. Current Local Evidence

Latest full local release gate:

- `output/release-local-gate/gate-2026-06-29T16-19-55-329Z/release-local-gate.json`
- Result: pass, 37 steps.

Rendered screenshot evidence:

- `output/playwright/rendered-release-smoke-2026-06-29T16-21-29-423Z`

Measurement evidence:

- `output/measurement/evidence-2026-06-29T16-21-48-137Z`
- Lighthouse performance: 100.
- Accessibility: 100.
- Best practices: 100.
- SEO: 100.
- LCP: about 1.80 seconds.
- CLS: 0.

Latest candidate scope evidence:

- `output/release-staging-manifest/smoke-2026-06-29T16-20-03-286Z/release-staging-manifest-smoke.json`
- `output/release-inventory/inventory-2026-06-29T16-20-03-053Z/release-candidate-inventory.json`
- Dirty count: 11.
- Secret findings: 0.
- GLB external URI references: 0.

The clean-worktree candidate has 11 files: 9 modified tracked files and 2 untracked candidate docs. `script.js` is intentionally absent because it has no net restart change against `origin/main`.

Deployed preview evidence:

- Preview URL: `https://website-quality-clean-restart--robson-ai-website.netlify.app`
- Deploy ID: `6a42b0eaaaa964aad7bb6dce`
- Logs: `https://app.netlify.com/projects/robson-ai-website/deploys/6a42b0eaaaa964aad7bb6dce`
- Preview gate: `output/release-preview-gate/gate-2026-06-29T17-53-08-619Z/release-preview-gate.json`
- Result: pass, 14 steps.

Production evidence:

- Production URL: `https://robsonai.co.uk`
- Deploy ID: `6a42c401c0f172f9fa99e3a7`
- Deploy URL: `https://6a42c401c0f172f9fa99e3a7--robson-ai-website.netlify.app`
- Logs: `https://app.netlify.com/projects/robson-ai-website/deploys/6a42c401c0f172f9fa99e3a7`
- Source: clean archive of local commit `242410f`.
- Rollback target confirmed before publish: `6a415b5db31442000737c37c`.
- Production gate command: `QA_PRODUCTION_URL=https://robsonai.co.uk CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production`
- Production gate: `output/release-production-gate/gate-2026-06-29T19-15-08-658Z/release-preview-gate.json`
- Result: pass, 14 steps.
- Supporting artifacts: release inventory `output/release-inventory/inventory-2026-06-29T19-15-08-805Z/release-candidate-inventory.json`, headers `output/release-headers/smoke-2026-06-29T19-15-17-692Z/release-header-smoke.json`, BuildScan viewer `output/buildscan-viewer/smoke-2026-06-29T19-15-18-160Z`, semantic SEO `output/semantic-seo/smoke-2026-06-29T19-15-31-512Z/semantic-seo-smoke.json`, product/design `output/product-design-acceptance/smoke-2026-06-29T19-15-40-452Z/product-design-acceptance-smoke.json`, responsive `output/responsive-route/smoke-2026-06-29T19-15-47-175Z/responsive-route-smoke.json`, visual polish `output/visual-polish/smoke-2026-06-29T19-16-08-162Z/visual-polish-smoke.json`, rendered screenshots `output/playwright/rendered-release-smoke-2026-06-29T19-16-37-328Z`, and measurement `output/measurement/smoke-2026-06-29T19-16-48-260Z`.

## 6. Approval Already Used

Wayne's previous option `1` approvals were used to:

1. Stage only the explicit file list in `docs/codex/RELEASE_STAGING_MANIFEST.md`.
2. Run staged diff hygiene checks.
3. Run `npm run qa:release:local`.
4. Create a local commit for the restart candidate.
5. Create a Netlify preview deploy.
6. Run `QA_BASE_URL=<preview-url> npm run qa:release:preview`.
7. Deploy the clean archive to production.
8. Run `QA_PRODUCTION_URL=https://robsonai.co.uk CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production`.
9. Return the live URL, deployed evidence, risks and next decision.

This approval did not approve:

- Branch push or GitHub/main alignment.
- GitHub PR.
- DNS/domain changes.
- Analytics/forms/customer data handling.
- External messages.
- Any destructive git action.

## 7. Preview Gate Requirements

After a Netlify preview exists, run:

```bash
QA_BASE_URL="https://<preview-url>" npm run qa:release:preview
```

The preview is not ready for production discussion until that gate passes.

Expected preview evidence:

- release inventory
- dependency advisory
- release security/header checks
- deployed BuildScan viewer smoke
- semantic SEO smoke
- product/design acceptance smoke
- responsive route smoke
- visual polish smoke
- rendered screenshot smoke
- measurement smoke

## 8. Risks And Residuals

- The original dirty branch is ahead by rejected motion-preview/evidence commits. This clean worktree avoids using that branch as the publish path. Do not publish the rejected `proof-motion-polish` preview.
- The production deploy was made from a clean archive of commit `242410f`, but GitHub/main has not yet been aligned with that commit.
- Firefox/WebKit Playwright binaries remain unavailable locally; Chromium passes and this is warning-only in the current gates.
- Dev/release tooling audit still reports 17 moderate advisories; production footprint remains zero vulnerabilities.
- Full Codex Security workspace scan is not complete.
- Production currently serves deploy `6a42c401c0f172f9fa99e3a7`.

## 9. Rollback Path

Before commit:

- Restore the manifest-approved files to the prior committed state, then rerun local checks.

After any future preview-only candidate:

- Do not promote the preview.
- Keep the current approved production deploy unchanged unless Wayne explicitly approves another production publish.
- Revert the local commit or prepare a corrected candidate.

After production:

- Restore Netlify production deploy `6a415b5db31442000737c37c` if rollback is needed before a newer approved rollback target is confirmed.

## 10. Recommended Decision

1. Recommended: approve source-control alignment for `website-quality-restart-from-original-goal`.
2. Review the live site first and request targeted fixes if needed.
3. Hold here with production live and GitHub/main unchanged.
