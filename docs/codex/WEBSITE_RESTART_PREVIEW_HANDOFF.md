# Website Restart Preview Handoff

Last updated: 2026-06-29 17:11 BST
Owner: Wayne Robson / Robson AI Solutions
Repo: `/private/tmp/robson-ai-website-quality-restart`
Status: clean local restart candidate passed full local validation; explicit-path local commit plus Netlify preview deploy approved; production approval still required

## 1. Purpose

This handoff is the current approval packet for the restarted Robson AI Solutions website candidate.

It is separate from `docs/codex/FINAL_WEBSITE_APPROVAL_HANDOFF.md`, which records the earlier production release. The earlier release evidence does not approve this candidate.

Current decision state:

- Wayne approved option `1` on 2026-06-29.
- Codex is approved to stage the manifest-approved paths, create a local commit, create a Netlify preview deploy, and run the deployed preview gate.
- Production deploy, branch push, GitHub PR, DNS/domain changes, analytics/forms/customer data handling and external messages remain unapproved.

Recommended next step after preview gate: Wayne reviews the Netlify preview and decides whether to request changes or approve production.

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
- No Netlify preview exists yet for this restart candidate.

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

- Production deploy.
- Branch push or GitHub PR.
- Netlify preview deploy until Wayne approves.
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

## 6. Approval Meaning

If Wayne approves option `1`, Codex is approved to:

1. Stage only the explicit file list in `docs/codex/RELEASE_STAGING_MANIFEST.md`.
2. Run staged diff hygiene checks.
3. Run `npm run qa:release:local`.
4. Create a local commit for the restart candidate.
5. Create a Netlify preview deploy.
6. Run `QA_BASE_URL=<preview-url> npm run qa:release:preview`.
7. Return the preview URL, deployed evidence, risks and next decision.

This approval would not approve:

- Production deploy.
- Branch push unless it is required by the selected preview mechanism and separately stated.
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
- Firefox/WebKit Playwright binaries remain unavailable locally; Chromium passes and this is warning-only in the current gates.
- Dev/release tooling audit still reports 17 moderate advisories; production footprint remains zero vulnerabilities.
- Full Codex Security workspace scan is not complete.
- Production currently remains unchanged at the last verified live baseline.

## 9. Rollback Path

Before commit:

- Restore the manifest-approved files to the prior committed state, then rerun local checks.

After preview:

- Do not promote the preview.
- Keep production unchanged.
- Revert the local commit or prepare a corrected candidate.

After any future production deploy:

- Restore the current live Netlify production deploy `6a415b5db31442000737c37c` unless a newer approved rollback target is confirmed first.

## 10. Recommended Decision

1. Approve explicit-path commit plus Netlify preview deploy for `website-quality-restart-from-original-goal`.
2. Request another local visual pass first.
3. Hold here with production unchanged.
