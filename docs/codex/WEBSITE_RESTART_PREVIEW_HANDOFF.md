# Website Restart Preview And Production Handoff

Last updated: 2026-07-02 18:43 BST
Owner: Wayne Robson / Robson AI Solutions
Repo: `/private/tmp/robson-ai-website-quality-restart`
Status: current preview-approval handoff for local `word-heavy-section-polish`; June clean restart evidence retained as historical context

## 1. Purpose

This handoff is the current approval packet for the local word-heavy section polish candidate.

It is separate from `docs/codex/FINAL_WEBSITE_APPROVAL_HANDOFF.md`, which records the earlier production release. The earlier release evidence does not approve this candidate.

Current decision state:

- Wayne approved option `1` on 2026-07-02 to work locally on the word-heavy homepage sections.
- Branch: `codex/word-heavy-section-polish`.
- Local review URL: `http://127.0.0.1:8135/`; HTTP 200 confirmed.
- Current candidate has not been committed, pushed, preview-deployed, or production-deployed.
- The existing production website remains unchanged.
- Next approval required: commit the 9-file candidate, push the branch, create a Netlify preview deploy, and run the deployed preview gate.
- Production deploy remains separately approval-gated after preview review and preview QA.
- DNS/domain changes, analytics/forms/customer data handling, external messages, force-pushes, destructive git actions, and production deploy remain unapproved.

Recommended next step: Wayne reviews the local URL and approves `commit + branch push + Netlify preview deploy` if the candidate looks right.

## 2. Current Review URL

Current worktree:

- `/private/tmp/robson-ai-website-quality-restart`
- Branch: `codex/word-heavy-section-polish`

Local review URL:

- `http://127.0.0.1:8135/`
- HTTP 200 confirmed.

Notes:

- This is a local server on Wayne's Mac.
- No Netlify preview exists yet for this candidate.
- Production exists at `https://robsonai.co.uk` and remains unchanged by this local work.

## 3. What This Candidate Changes

The candidate continues the original "best releasable website" goal after Wayne flagged several homepage sections as too word-heavy.

Implemented locally:

- Finder now uses compact outcome strips for each workflow route.
- Property Operations now uses status signals and a tighter evidence/decision board treatment.
- Method now uses a visible Capture / Structure / Support process strip.
- Credibility now uses a public proof summary bar before proof cards.
- Contact now starts with a workflow brief card before routing options.
- First-load consent now uses a slimmer bottom rail so the privacy choice does not cover the desktop hero proof board.
- Keeps Building Analyst, BuildScan and property operations positioned as separate but connected workstreams.
- Keeps cautious Apple-native/product maturity language.
- Keeps email-first contact and no website form/customer-data store.
- Keeps the existing BuildScan opt-in model-view behaviour and does not add new model assets.

Not included:

- New product claims.
- New customer logos, testimonials, fake screenshots or invented traction.
- New public GLB/model exposure.
- Apple, Android, macOS or iOS implementation.
- GA4 enablement, forms, payments, customer data, DNS or external messages.
- Consent/analytics logic changes.
- Production deploy.

## 4. Candidate File Scope

Expected tracked files:

- `docs/codex/GOAL_COMPLETION_AUDIT.md`
- `docs/codex/PUBLISH_READINESS_AUDIT.md`
- `docs/codex/RELEASE_STAGING_MANIFEST.md`
- `docs/codex/TRACKER.md`
- `docs/codex/WEBSITE_APPROVAL_REVIEW_CHECKLIST.md`
- `docs/codex/WEBSITE_RESTART_PREVIEW_HANDOFF.md`
- `index.html`
- `styles.css`

Expected untracked candidate files:

- `docs/codex/WORD_HEAVY_SECTION_POLISH_AUDIT.md`

Do not use `git add .`.

## 5. Current Local Evidence

Latest full local release gate:

- `output/release-local-gate/gate-2026-07-02T17-23-29-682Z/release-local-gate.json`
- Result: pass, 37 steps.

Rendered screenshot evidence:

- `output/playwright/rendered-release-smoke-2026-07-02T17-24-59-410Z`

Measurement evidence:

- `output/measurement/evidence-2026-07-02T17-25-18-165Z`
- Lighthouse performance: 100.
- Accessibility: 100.
- Best practices: 100.
- SEO: 100.
- LCP: about 1.80 seconds.
- CLS: 0.

Latest candidate scope evidence:

- `output/release-staging-manifest/smoke-2026-07-02T17-43-25-511Z/release-staging-manifest-smoke.json`
- `output/release-inventory/inventory-2026-07-02T17-43-25-511Z/release-candidate-inventory.json`
- Dirty count: 9.
- Secret findings: 0.
- GLB external URI references: 0.

The current candidate has 9 files: 8 modified tracked files and 1 untracked candidate doc.

No deployed preview evidence exists yet for this candidate. That is the next approval-gated step.

## 6. Approval Already Used

Wayne's previous option `1` approvals for the June clean restart were already used to:

1. Stage only the explicit file list in `docs/codex/RELEASE_STAGING_MANIFEST.md`.
2. Run staged diff hygiene checks.
3. Run `npm run qa:release:local`.
4. Create a local commit for the restart candidate.
5. Create a Netlify preview deploy.
6. Run `QA_BASE_URL=<preview-url> npm run qa:release:preview`.
7. Deploy the clean archive to production.
8. Run `QA_PRODUCTION_URL=https://robsonai.co.uk CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production`.
9. Stage and commit closeout docs.
10. Push branch `codex/website-quality-clean-restart`.
11. Push `main` as a normal non-force fast-forward.
12. Wait for the GitHub-triggered production deploy.
13. Rerun `QA_PRODUCTION_URL=https://robsonai.co.uk CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production`.
14. Return the live URL, deployed evidence, risks and next decision.

Those approvals do not approve the current word-heavy section polish candidate.

This current handoff does not approve:

- Local commit.
- Branch push.
- Netlify preview deploy.
- Production deploy.
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

- Current production remains unchanged until a separately approved deploy.
- The candidate is local-only until Wayne approves commit, branch push, and Netlify preview deploy.
- Do not publish the rejected `proof-motion-polish` preview.
- Firefox/WebKit Playwright binaries remain unavailable locally; Chromium passes and this is warning-only in the current gates.
- Dev/release tooling audit still reports 17 moderate advisories; production footprint remains zero vulnerabilities.
- Full Codex Security workspace scan is not complete.
- On mobile, the fixed consent rail still sits over the bottom of the tall hero area until the visitor chooses an option; the headline and primary CTAs remain visible. A different consent pattern should be a separate approved tranche.
- Production currently serves deploy `6a45f66d95632900082f00cb`.

## 9. Rollback Path

Before commit:

- Restore the manifest-approved files to the prior committed state, then rerun local checks.

After any future preview-only candidate:

- Do not promote the preview.
- Keep the current approved production deploy unchanged unless Wayne explicitly approves another production publish.
- Revert the local commit or prepare a corrected candidate.

After production:

- Confirm the current production rollback target immediately before any approved production deploy; do not rely on this document for a future rollback ID.

## 10. Recommended Decision

1. Recommended: approve `commit + branch push + Netlify preview deploy` for `word-heavy-section-polish`.
2. Request targeted local visual changes before preview.
3. Hold here with production unchanged.
