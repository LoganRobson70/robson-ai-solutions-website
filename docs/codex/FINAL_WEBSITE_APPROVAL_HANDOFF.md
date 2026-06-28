# Final Website Approval Handoff - Robson AI Solutions Website

Last updated: 2026-06-28 17:30 BST
Owner: Wayne Robson / Robson AI Solutions
Repo: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website`
Status: current local visual-refinement candidate ready for Wayne review; no commit, preview deploy, or production deploy approved

## 1. Purpose

This handoff presents the current Robson AI Solutions website candidate for Wayne's review before any commit, Netlify preview, or future live deployment.

Important current-state note:

- The public production website is already live at `https://robsonai.co.uk`.
- Latest live production deploy before this local candidate: `6a4110fe34f4b66db778e4bb`.
- Current local candidate: `website-visual-refinement-proof-surface-polish`.
- Local review URL: `http://127.0.0.1:8130/`.
- This document does not approve staging, commit, branch push, Netlify preview, production verification, production deploy, DNS/domain work, analytics, forms, customer data handling, or external messages.

## 2. What Changed In The Local Candidate

The candidate addresses Wayne's visual review comments:

- The awkward floating homepage hero logo is removed.
- Finder, Operations, Method, Credibility, and Contact are tightened from word-heavy panels into clearer product/proof surfaces.
- Existing reduced-motion-aware pointer-depth behaviour is extended to the refined proof surfaces.
- BuildScan remains opt-in with a static fallback and cautious public wording.
- Property operations remains workflow proof, not a live customer-system integration claim.
- Email-first contact remains in place with no website form or customer-data store.

## 3. Review Links

Review the local candidate first:

1. Home: `http://127.0.0.1:8130/`
2. Building Analyst: `http://127.0.0.1:8130/building-analyst.html`
3. Who it is for: `http://127.0.0.1:8130/who-its-for.html`
4. Privacy: `http://127.0.0.1:8130/privacy.html`
5. BuildScan viewer: `http://127.0.0.1:8130/buildscan-viewer.html`
6. 404 recovery page: `http://127.0.0.1:8130/404.html`
7. Holding fallback: `http://127.0.0.1:8130/holding.html`

Production comparison, not the candidate:

- `https://robsonai.co.uk`

Review checklist:

- `docs/codex/WEBSITE_APPROVAL_REVIEW_CHECKLIST.md`

## 4. Product Direction To Approve

Approve the candidate only if it accurately represents Robson AI Solutions as:

- Professional building intelligence for surveying, evidence, reporting, and property operations thinking.
- A practical workflow-led product direction, not a generic chatbot.
- Three connected workstreams:
  - Building Analyst for assessment capture and report-ready evidence.
  - BuildScan for external modelling and visual building context.
  - Property operations thinking for CAFM-style workflows, exceptions, evidence, and client understanding.
- A practical loop: capture evidence, structure assessment records, analyse patterns, and support clearer client understanding.
- Apple-native intelligence direction where relevant, without overclaiming unreleased or unavailable Apple APIs.
- Professional boundaries and proof over claims: the site should not imply autonomous diagnosis, finished customer integrations, or live customer/council system connectivity.
- Email-first contact, with no contact form or customer-data capture on the current website.

## 5. Latest Local Evidence

Full local release gate:

- Command: `npm run qa:release:local`
- Result: pass, 37 steps.
- Artifact: `output/release-local-gate/gate-2026-06-28T16-26-01-341Z/release-local-gate.json`.

Current local evidence:

- Release inventory: `output/release-inventory/inventory-2026-06-28T16-26-10-244Z/release-candidate-inventory.json`.
- Staging manifest: `output/release-staging-manifest/smoke-2026-06-28T16-26-10-596Z/release-staging-manifest-smoke.json`.
- Rendered screenshots: `output/playwright/rendered-release-smoke-2026-06-28T16-27-41-612Z`.
- Measurement evidence: `output/measurement/evidence-2026-06-28T16-28-27-073Z`.
- Product/design: `output/product-design-acceptance/smoke-2026-06-28T16-26-39-864Z/product-design-acceptance-smoke.json`.
- Visual polish: `output/visual-polish/smoke-2026-06-28T16-27-09-578Z/visual-polish-smoke.json`.
- Responsive route smoke: `output/responsive-route/smoke-2026-06-28T16-26-46-604Z/responsive-route-smoke.json`.
- Keyboard: `output/playwright/keyboard-release-smoke-2026-06-28T16-26-24-503Z`.

Measurement result:

- Lighthouse performance 99.
- Accessibility 100.
- Best practices 100.
- SEO 100.
- LCP about 1.65 seconds.
- CLS 0.

## 6. Known Residuals

- The candidate is local only, uncommitted, unpushed, not preview-deployed, and not production-deployed.
- Chromium passes locally; Firefox and WebKit Playwright binaries are not installed locally.
- Dev/release tooling audit remains at 17 moderate findings, 0 high, 0 critical; production footprint remains zero.
- Full Codex Security workspace scan is not complete.
- Public BuildScan GLB downloadability is intentional for the current public proof asset, but should be reconsidered before exposing any new model.

## 7. Approval Options

1. Recommended: reply `approve local visual refinement`.
   - Codex will then stage only the manifest-approved files, commit, create a Netlify preview, and run `QA_BASE_URL=<preview> npm run qa:release:preview`.
2. Reply with exact page/section changes to make before preview.
3. Reply `hold local only` to keep production as-is and stop before commit/preview.

Production publish remains a later, separate approval after a preview has passed.
