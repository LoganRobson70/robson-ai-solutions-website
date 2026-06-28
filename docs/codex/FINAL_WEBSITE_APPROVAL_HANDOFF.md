# Final Website Approval Handoff - Robson AI Solutions Website

Last updated: 2026-06-28 18:20 BST
Owner: Wayne Robson / Robson AI Solutions
Repo: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website`
Status: approved visual-refinement release is live and production-gated

## 1. Purpose

This handoff records the approved Robson AI Solutions website release now live at production after the `website-visual-refinement-proof-surface-polish` tranche.

Important current-state note:

- Public production website: `https://robsonai.co.uk`
- Netlify production deploy: `6a415725a6f69e52078a74df`
- Unique deploy URL: `https://6a415725a6f69e52078a74df--robson-ai-website.netlify.app`
- Production release gate: `output/release-production-gate/gate-2026-06-28T17-18-10-065Z/release-preview-gate.json`
- Rollback candidate before this publish: `6a4110fe34f4b66db778e4bb`

This document does not approve branch push, GitHub PR, DNS/domain work, analytics, forms, customer data handling, external messages, or further production deploys.

## 2. What Changed In The Release

The release addresses Wayne's visual review comments:

- Removed the awkward floating homepage hero logo.
- Tightened Finder, Operations, Method, Credibility, and Contact from word-heavy panels into clearer product/proof surfaces.
- Extended existing reduced-motion-aware pointer-depth behaviour to refined proof surfaces.
- Kept BuildScan opt-in with a static fallback and cautious public wording.
- Kept property operations as workflow proof, not a live customer-system integration claim.
- Kept email-first contact with no website form or customer-data store.

## 3. Live Review Links

Review production:

1. Home: `https://robsonai.co.uk/`
2. Building Analyst: `https://robsonai.co.uk/building-analyst.html`
3. Who it is for: `https://robsonai.co.uk/who-its-for.html`
4. Privacy: `https://robsonai.co.uk/privacy.html`
5. BuildScan viewer: `https://robsonai.co.uk/buildscan-viewer.html`
6. 404 recovery page: `https://robsonai.co.uk/404.html`
7. Holding fallback: `https://robsonai.co.uk/holding.html`

Review checklist:

- `docs/codex/WEBSITE_APPROVAL_REVIEW_CHECKLIST.md`

## 4. Product Direction Confirmed

The live website represents Robson AI Solutions as:

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

## 5. Release Evidence

Local release gate:

- Command: `npm run qa:release:local`
- Result: pass, 37 steps.
- Artifact: `output/release-local-gate/gate-2026-06-28T16-54-23-455Z/release-local-gate.json`.

Preview release gate:

- Preview URL: `https://visual-proof-surface-polish--robson-ai-website.netlify.app`
- Result: pass, 14 steps.
- Artifact: `output/release-preview-gate/gate-2026-06-28T17-00-40-765Z/release-preview-gate.json`.

Production release gate:

- Command: `QA_PRODUCTION_URL=https://robsonai.co.uk CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production`
- Result: pass, 14 steps.
- Artifact: `output/release-production-gate/gate-2026-06-28T17-18-10-065Z/release-preview-gate.json`.

Production evidence:

- Release inventory: `output/release-inventory/inventory-2026-06-28T17-18-10-215Z/release-candidate-inventory.json`.
- BuildScan viewer: `output/buildscan-viewer/smoke-2026-06-28T17-18-17-990Z`.
- Semantic SEO: `output/semantic-seo/smoke-2026-06-28T17-18-29-999Z/semantic-seo-smoke.json`.
- Product/design: `output/product-design-acceptance/smoke-2026-06-28T17-18-38-578Z/product-design-acceptance-smoke.json`.
- Responsive route: `output/responsive-route/smoke-2026-06-28T17-18-45-615Z/responsive-route-smoke.json`.
- Visual polish: `output/visual-polish/smoke-2026-06-28T17-19-06-367Z/visual-polish-smoke.json`.
- Rendered screenshots: `output/playwright/rendered-release-smoke-2026-06-28T17-19-35-062Z`.
- Measurement: `output/measurement/smoke-2026-06-28T17-19-46-704Z`.

## 6. Known Residuals

- Source control is not yet aligned with the live archive deploy. Local commit `8e32faf` is live, but the branch has not been pushed and `main` may not match production.
- Chromium passes locally; Firefox and WebKit Playwright binaries are not installed locally.
- Dev/release tooling audit remains at 17 moderate findings, 0 high, 0 critical; production footprint remains zero.
- Full Codex Security workspace scan is not complete.
- Public BuildScan GLB downloadability is intentional for the current public proof asset, but should be reconsidered before exposing any new model.

## 7. Approval Options

1. Recommended: approve source-control alignment for the live release so GitHub/main can be brought back into line with production using an explicit, low-risk path.
2. Hold source control for now and run a 24-hour production observation check.
3. Start a separate post-launch design/motion tranche after source control is aligned.
