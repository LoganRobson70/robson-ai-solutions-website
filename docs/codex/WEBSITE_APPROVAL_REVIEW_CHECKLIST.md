# Website Approval Review Checklist - Robson AI Solutions Website

Last updated: 2026-06-28 18:20 BST
Owner: Wayne Robson / Robson AI Solutions
Repo: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website`
Status: live post-publish review checklist for production deploy `6a415725a6f69e52078a74df`

## 1. Purpose

Use this checklist to review the live Robson AI Solutions website after the approved visual-refinement production publish.

Important:

- Production site: `https://robsonai.co.uk`.
- Production deploy: `6a415725a6f69e52078a74df`.
- Candidate name: `website-visual-refinement-proof-surface-polish`.
- Production release gate passed at `output/release-production-gate/gate-2026-06-28T17-18-10-065Z/release-preview-gate.json`.
- This checklist does not approve branch push, GitHub PR, another production deploy, analytics, forms, DNS/domain work, or external messages.
- Latest release evidence is recorded in `docs/codex/FINAL_WEBSITE_APPROVAL_HANDOFF.md`.

## 2. Review Sequence

Review these production pages in order on desktop and mobile:

1. Home: `https://robsonai.co.uk/`
2. Building Analyst: `https://robsonai.co.uk/building-analyst.html`
3. Who it is for: `https://robsonai.co.uk/who-its-for.html`
4. BuildScan viewer: `https://robsonai.co.uk/buildscan-viewer.html`
5. Privacy: `https://robsonai.co.uk/privacy.html`
6. 404 recovery page: `https://robsonai.co.uk/404.html`
7. Holding fallback: `https://robsonai.co.uk/holding.html`

Screenshot evidence from the production rendered smoke:

- `output/playwright/rendered-release-smoke-2026-06-28T17-19-35-062Z`

## 3. What To Approve Or Flag

### Home

Approve if:

- The first impression says Robson AI Solutions is about professional building intelligence, not generic AI.
- The awkward floating logo issue is gone.
- Finder, Operations, Method, Credibility, and Contact feel more designed and less like text blocks.
- Building Analyst, BuildScan, and property operations read as connected but distinct workstreams.
- The page feels credible, current, and useful enough for public visitors.

Flag if:

- Any section still feels amateur, too wordy, visually flat, or misaligned.
- Any wording feels too vague, too futuristic, too sales-heavy, or not aligned with Robson AI.
- Any motion, graphic treatment, or proof section feels distracting or unprofessional.

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

## 4. Evidence To Keep In Mind

Production release gate:

- Command: `QA_PRODUCTION_URL=https://robsonai.co.uk CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production`
- Result: pass, 14 steps.
- Artifact: `output/release-production-gate/gate-2026-06-28T17-18-10-065Z/release-preview-gate.json`.

Production evidence pack:

- Release inventory: `output/release-inventory/inventory-2026-06-28T17-18-10-215Z/release-candidate-inventory.json`.
- BuildScan viewer: `output/buildscan-viewer/smoke-2026-06-28T17-18-17-990Z`.
- Product/design: `output/product-design-acceptance/smoke-2026-06-28T17-18-38-578Z/product-design-acceptance-smoke.json`.
- Responsive route smoke: `output/responsive-route/smoke-2026-06-28T17-18-45-615Z/responsive-route-smoke.json`.
- Visual polish: `output/visual-polish/smoke-2026-06-28T17-19-06-367Z/visual-polish-smoke.json`.
- Rendered screenshots: `output/playwright/rendered-release-smoke-2026-06-28T17-19-35-062Z`.
- Measurement: `output/measurement/smoke-2026-06-28T17-19-46-704Z`.

Known residuals:

- Source control is not yet aligned with production because the production deploy used a clean archive of local commit `8e32faf`.
- Chromium passes locally; Firefox and WebKit Playwright binaries are not installed locally.
- Dev/release tooling audit remains 17 moderate, 0 high, 0 critical; production footprint remains zero.
- Full Codex Security scan is not complete.
- Public BuildScan GLB downloadability is intentional but should be reconsidered before exposing any new model.

## 5. Next Decision

Use one of these responses:

1. Recommended: `approve source-control alignment`
2. `hold and monitor production for 24 hours`
3. `start a new design tranche` followed by the exact page or section to improve.
