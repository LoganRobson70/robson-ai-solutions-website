# Website Approval Review Checklist - Robson AI Solutions Website

Last updated: 2026-07-04 17:31 BST
Owner: Wayne Robson / Robson AI Solutions
Repo: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website`
Status: live review checklist for zip-faithful correction with animation parity polish; production deploy `6a4933ec2451857b37ea20b4` is live and production-gated

## 1. Purpose

Use this checklist to review the current live zip-faithful correction for the original goal:

> Make the Robson AI Solutions website the best releasable version it can be.

Important:

- Current live review URL: `https://robsonai.co.uk`.
- Current local review URL: `http://127.0.0.1:8134/` while the Python server is running.
- Current candidate name: `zip-faithful-redesign-correction`.
- The rejected `proof-motion-polish` preview must not be published.
- Production is live at `https://robsonai.co.uk` on deploy `6a4933ec2451857b37ea20b4`; production gate passed at `output/release-production-gate/gate-2026-07-04T16-25-32-131Z/release-preview-gate.json`.
- No branch push, GitHub PR, further production deploy, rollback, analytics, forms, DNS/domain work, customer-data handling, or external messages are approved by this checklist.
- Current preview approval handoff is `docs/codex/WEBSITE_RESTART_PREVIEW_HANDOFF.md`.
- Historical production release evidence is retained below for context only; it is not approval for the restart candidate.

## 2. Current Restart Review Sequence

Review these live pages in order on desktop and mobile:

1. Home: `https://robsonai.co.uk/`
2. Building Analyst: `https://robsonai.co.uk/building-analyst.html`
3. Who it is for: `https://robsonai.co.uk/who-its-for.html`
4. BuildScan viewer: `https://robsonai.co.uk/buildscan-viewer.html`
5. Privacy: `https://robsonai.co.uk/privacy.html`
6. 404 recovery page: `https://robsonai.co.uk/404.html`
7. Holding fallback: `https://robsonai.co.uk/holding.html`

Screenshot evidence from the current production rendered smoke:

- `output/playwright/rendered-release-smoke-2026-07-04T16-26-49-860Z`

Production release-gate evidence is now the current automation source.

## 3. What To Approve Or Flag

### Home

Approve if:

- The first impression says Robson AI Solutions turns building evidence into professional intelligence, not generic AI.
- The page looks materially like the supplied redesign zip: white header, dark mesh hero, Manrope-style large proposition, Home/Product/Pricing/About IA, and `Turning data into intelligence.`.
- The added BuildScan model-view element feels native to the zip-style site rather than pasted in.
- Product, Pricing, About, BuildScan and Contact feel designed and not like text blocks.
- Building Analyst, Robson AI Software and BuildScan read as connected but distinct product directions.
- Header navigation lands cleanly on major sections.
- Secondary pages keep the visible Robson AI brand lockup clear and do not accidentally present `Fit` as a separate product name.
- The page feels credible, current, and useful enough for public visitors.

Flag if:

- Any section still feels amateur, too wordy, visually flat, or misaligned.
- Any wording feels too vague, too futuristic, too sales-heavy, or not aligned with Robson AI.
- Any graphic treatment or proof section feels distracting, gimmicky, or unprofessional.

### Building Analyst

Approve if:

- Building Analyst reads as a professional surveying/reporting workflow product.
- Apple-native intelligence language is cautious and does not overclaim unreleased or unavailable APIs.
- The product is not positioned as a generic chatbot or BYO-key AI wrapper.

Flag if:

- Any claim implies autonomous diagnosis, finished Apple Intelligence functionality, or a level of app maturity not yet approved for public marketing.

### Who It Is For

Approve if:

- The audience segmentation helps surveyors, property teams, and operational buyers understand where the work fits.
- The copy preserves professional judgement, evidence, review, and accountability.

Flag if:

- The page suggests live council/customer integrations, tenant systems, Microsoft/Oracle/SharePoint connectivity, or operational commitments that are not yet approved.

### BuildScan Viewer

Approve if:

- The public 3D model preview helps explain visual building context.
- Visitors can move, orbit, pan, zoom, reset, and view the model without the site implying a finished app workflow.
- Public model exposure remains acceptable because the GLB is downloadable website data by design.

Flag if:

- The model view exposes too much detail.
- The controls are confusing for public visitors.
- The section needs a stronger screenshot/static fallback before the next deploy.

### Privacy And Contact

Approve if:

- The contact path remains email-first.
- The current site does not collect form submissions.
- Privacy language remains consistent with current website behaviour.
- The contact section feels like a practical action area rather than a block of words.

Flag if:

- You want GA4, contact forms, lead capture, newsletter, CRM, or any data collection. Those require a separate privacy and implementation tranche.

### 404 And Holding Fallback

Approve if:

- 404 recovery feels on-brand and helps visitors recover.
- Holding fallback is clearly historical/noindex and does not undermine the live website.

Flag if:

- Any fallback wording sounds stale, confusing, or launch-blocking.

## 4. Current Candidate Evidence

Local release gate:

- Command: `npm run qa:release:local`
- Result: pass, 37 steps.
- Artifact: `output/release-local-gate/gate-2026-07-04T15-53-37-926Z/release-local-gate.json`.

Preview release gate:

- Not yet run for this correction.

Production release gate:

- Not yet run for this correction.

Local evidence pack:

- Rendered screenshots: `output/playwright/rendered-release-smoke-2026-07-04T15-55-06-652Z`.
- Measurement: `output/measurement/evidence-2026-07-04T15-55-27-128Z`; axe reported zero violations across six routes, Lighthouse performance 99, accessibility 100, best practices 100, SEO 100, LCP about 1.24 seconds, CLS 0.
- Latest 15-file staging-manifest smoke: `output/release-staging-manifest/smoke-2026-07-04T15-53-45-280Z/release-staging-manifest-smoke.json`.
- Latest 15-file release inventory: `output/release-inventory/inventory-2026-07-04T15-53-45-020Z/release-candidate-inventory.json`; dirtyCount 15, secret findings 0, GLB external URI references 0.

Known residuals:

- The staging manifest and inventory now match the 15-file zip-faithful correction.
- Animation parity, anchor-navigation, secondary-page brand consistency, measurement-runner stability, and zip-design copy/layout updates are included in the latest local gate.
- The active correction is committed as `f2df3c1`, preview-gated, production-published and production-gated.
- The branch is ahead by the rejected motion-preview/evidence commits; do not publish the rejected `proof-motion-polish` preview.
- Chromium passes locally; Firefox and WebKit Playwright binaries are not installed locally.
- Dev/release tooling audit remains 17 moderate, 0 high, 0 critical; production footprint remains zero.
- Full Codex Security scan is not complete.
- Public BuildScan GLB downloadability is intentional but should be reconsidered before exposing any new model.

## 5. Current Decision

Use one of these responses:

1. Recommended: approve docs/source-control alignment so the production evidence docs can be committed and GitHub/main can be reconciled deliberately.
2. Request live-site design/content tweaks, with the exact page or section to improve.
3. Hold source-control alignment and leave the live site as-is.

## 6. Historical Production Context

The previous production checklist was for production deploy `6a415725a6f69e52078a74df` and candidate `website-visual-refinement-proof-surface-polish`.

Historical production release gate:

- Command: `QA_PRODUCTION_URL=https://robsonai.co.uk CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production`
- Result: pass, 14 steps.
- Artifact: `output/release-production-gate/gate-2026-06-28T17-18-10-065Z/release-preview-gate.json`.
- Production rendered screenshots: `output/playwright/rendered-release-smoke-2026-06-28T17-19-35-062Z`.

That release remains useful as historical rollback/reference context, but the active restart candidate is now the live production-gated release.
