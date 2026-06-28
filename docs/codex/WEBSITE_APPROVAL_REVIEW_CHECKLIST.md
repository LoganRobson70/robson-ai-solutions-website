# Website Approval Review Checklist - Robson AI Solutions Website

Last updated: 2026-06-28 13:20 BST
Owner: Wayne Robson / Robson AI Solutions
Repo: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website`
Status: Wayne review checklist; no deploy approved

## 1. Purpose

Use this checklist to review the current live Robson AI Solutions website before approving the next website decision.

Important:

- Current live website: `https://robsonai.co.uk`.
- Current production deploy: `6a4110fe34f4b66db778e4bb`.
- Current production source: local commit `5994de8` deployed by approved Netlify CLI production deploy from clean `git archive HEAD`.
- This checklist does not approve another production deploy.
- Fresh production verification was rerun after Wayne approved the hero-logo aspect/anchor production fix.
- Latest production evidence is recorded in `docs/codex/FINAL_WEBSITE_APPROVAL_HANDOFF.md`.

## 2. Review Sequence

Review these pages in order on desktop and mobile:

1. Home: `https://robsonai.co.uk/`
2. Building Analyst: `https://robsonai.co.uk/building-analyst.html`
3. Who it is for: `https://robsonai.co.uk/who-its-for.html`
4. BuildScan viewer: `https://robsonai.co.uk/buildscan-viewer.html`
5. Privacy: `https://robsonai.co.uk/privacy.html`
6. 404 recovery page: `https://robsonai.co.uk/404.html`
7. Holding fallback: `https://robsonai.co.uk/holding.html`

Screenshot evidence from the latest production rendered smoke:

- `output/playwright/rendered-release-smoke-2026-06-28T12-19-45-394Z`

## 3. What To Approve Or Flag

### Home

Approve if:

- The first impression says Robson AI Solutions is about professional building intelligence, not generic AI.
- Building Analyst, BuildScan, and property operations read as connected but distinct workstreams.
- The page feels credible, current, and useful enough for public visitors.

Flag if:

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
- The instructions make it clear visitors can move, orbit, pan, zoom, reset, and view the model without implying a finished app workflow.
- The public model exposure is acceptable because the GLB is downloadable website data by design.

Flag if:

- The model view exposes too much detail.
- The controls are confusing for public visitors.
- The section needs a stronger screenshot/static fallback before the next deploy.

### Privacy And Contact

Approve if:

- The contact path remains email-first.
- The current site does not collect form submissions.
- Privacy language remains consistent with the current website behaviour.

Flag if:

- You want GA4, contact forms, lead capture, newsletter, CRM, or any data collection. Those require a separate privacy and implementation tranche.

### 404 And Holding Fallback

Approve if:

- 404 recovery feels on-brand and helps visitors recover.
- Holding fallback is clearly historical/noindex and does not undermine the live website.

Flag if:

- Any fallback wording sounds stale, confusing, or launch-blocking.

## 4. Evidence To Keep In Mind

Latest production release gate:

- Command: `QA_PRODUCTION_URL=https://robsonai.co.uk CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production`
- Result: pass, 14 steps.
- Artifact: `output/release-production-gate/gate-2026-06-28T12-18-19-900Z/release-preview-gate.json`.

Latest production evidence pack:

- Headers/source-deny: `output/release-headers/smoke-2026-06-28T12-18-28-269Z/release-header-smoke.json`.
- SEO/social metadata: `output/semantic-seo/smoke-2026-06-28T12-18-40-596Z/semantic-seo-smoke.json`.
- Measurement: `output/measurement/smoke-2026-06-28T12-19-56-164Z`.
- Rendered screenshots: `output/playwright/rendered-release-smoke-2026-06-28T12-19-45-394Z`.
- BuildScan viewer: `output/buildscan-viewer/smoke-2026-06-28T12-18-28-654Z`.
- Responsive route smoke: `output/responsive-route/smoke-2026-06-28T12-18-56-116Z/responsive-route-smoke.json`.
- Visual polish: `output/visual-polish/smoke-2026-06-28T12-19-16-916Z/visual-polish-smoke.json`.
- Product/design: `output/product-design-acceptance/smoke-2026-06-28T12-18-49-095Z/product-design-acceptance-smoke.json`.
- Keyboard: `output/playwright/keyboard-release-smoke-2026-06-28T12-18-35-864Z`.
- Browser coverage advisory: `output/browser-coverage/smoke-2026-06-28T12-19-37-587Z/browser-coverage-smoke.json`.

Known residuals:

- Chromium passes locally; Firefox and WebKit Playwright binaries are not installed locally.
- Dev/release tooling audit remains 17 moderate, 0 high, 0 critical; production footprint remains zero.
- Full Codex Security scan is not complete.
- Public BuildScan GLB downloadability is intentional but should be reconsidered before exposing any new model.

## 5. Approval Response

Use one of these responses:

1. Recommended: `Approved current live website`
2. `Approved, except change:` followed by the exact wording, page, model view, or claim to change.
3. `Hold website changes` if production should stay as-is and no next tranche should start.

If option 1 is given, the current goal can be closed and the next phase can start from `docs/codex/NEXT_PHASE_REFINEMENT_PLAN.md`.
