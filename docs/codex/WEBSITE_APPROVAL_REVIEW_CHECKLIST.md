# Website Approval Review Checklist - Robson AI Solutions Website

Last updated: 2026-06-28 17:30 BST
Owner: Wayne Robson / Robson AI Solutions
Repo: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website`
Status: local visual-refinement review checklist; no commit, preview deploy, or production deploy approved

## 1. Purpose

Use this checklist to review the current local Robson AI Solutions website candidate before approving the next action.

Important:

- Local candidate: `http://127.0.0.1:8130/`.
- Candidate name: `website-visual-refinement-proof-surface-polish`.
- Production comparison: `https://robsonai.co.uk`.
- This checklist does not approve staging, commit, preview deploy, production verification, production deploy, analytics, forms, DNS/domain work, or external messages.
- Latest local evidence is recorded in `docs/codex/FINAL_WEBSITE_APPROVAL_HANDOFF.md`.

## 2. Review Sequence

Review these local pages in order on desktop and mobile:

1. Home: `http://127.0.0.1:8130/`
2. Building Analyst: `http://127.0.0.1:8130/building-analyst.html`
3. Who it is for: `http://127.0.0.1:8130/who-its-for.html`
4. BuildScan viewer: `http://127.0.0.1:8130/buildscan-viewer.html`
5. Privacy: `http://127.0.0.1:8130/privacy.html`
6. 404 recovery page: `http://127.0.0.1:8130/404.html`
7. Holding fallback: `http://127.0.0.1:8130/holding.html`

Screenshot evidence from the latest local rendered smoke:

- `output/playwright/rendered-release-smoke-2026-06-28T16-27-41-612Z`

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

Latest local release gate:

- Command: `npm run qa:release:local`
- Result: pass, 37 steps.
- Artifact: `output/release-local-gate/gate-2026-06-28T16-26-01-341Z/release-local-gate.json`.

Latest local evidence pack:

- Release inventory: `output/release-inventory/inventory-2026-06-28T16-26-10-244Z/release-candidate-inventory.json`.
- Staging manifest: `output/release-staging-manifest/smoke-2026-06-28T16-26-10-596Z/release-staging-manifest-smoke.json`.
- Rendered screenshots: `output/playwright/rendered-release-smoke-2026-06-28T16-27-41-612Z`.
- Measurement evidence: `output/measurement/evidence-2026-06-28T16-28-27-073Z`.
- Product/design: `output/product-design-acceptance/smoke-2026-06-28T16-26-39-864Z/product-design-acceptance-smoke.json`.
- Visual polish: `output/visual-polish/smoke-2026-06-28T16-27-09-578Z/visual-polish-smoke.json`.
- Responsive route smoke: `output/responsive-route/smoke-2026-06-28T16-26-46-604Z/responsive-route-smoke.json`.
- Keyboard: `output/playwright/keyboard-release-smoke-2026-06-28T16-26-24-503Z`.

Known residuals:

- Chromium passes locally; Firefox and WebKit Playwright binaries are not installed locally.
- Dev/release tooling audit remains 17 moderate, 0 high, 0 critical; production footprint remains zero.
- Full Codex Security scan is not complete.
- Public BuildScan GLB downloadability is intentional but should be reconsidered before exposing any new model.
- The candidate is not yet committed, previewed, or deployed.

## 5. Approval Response

Use one of these responses:

1. Recommended: `approve local visual refinement`
2. `Approved, except change:` followed by the exact wording, page, model view, or section to change.
3. `hold local only` if production should stay as-is and no preview should be created.

If option 1 is given, Codex will stage only the manifest-approved files, create a local commit, create a Netlify preview, and run the deployed preview gate. Production approval will still be asked separately after the preview passes.
