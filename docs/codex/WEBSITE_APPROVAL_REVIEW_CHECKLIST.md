# Website Approval Review Checklist - Robson AI Solutions Website

Last updated: 2026-07-08 08:22 BST
Owner: Wayne Robson / Robson AI Solutions
Repo: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website`
Status: current owner review checklist for the `secondary-page-shell-consistency` candidate; candidate is local QA-passed and awaiting approval for Netlify preview

## 1. Purpose

Use this checklist to review the current approval-gated candidate for the original goal:

> Make the Robson AI Solutions website the best releasable version it can be.

Important:

- Current production review URL: `https://robsonai.co.uk`.
- Current production baseline: commit `8c595f6`, Netlify deploy `6a4d6ccccf0a8038379c9abb`, production gate `output/release-production-gate/gate-2026-07-07T21-17-25-642Z/release-preview-gate.json`.
- Current candidate name: `secondary-page-shell-consistency`.
- Candidate status: refreshed full local release gate passed for the 15-file cache-key candidate, uncommitted, unpushed, not preview-deployed, not production-deployed.
- Candidate approval packet: `docs/codex/RELEASE_APPROVAL_PACKET.md`.
- Current release handoff: `docs/codex/FINAL_WEBSITE_APPROVAL_HANDOFF.md`.
- No staging, commit, branch push, GitHub PR, Netlify preview deploy, production deploy, rollback, analytics, forms, DNS/domain work, customer-data handling, or external messages are approved by this checklist.
- The rejected `proof-motion-polish` preview must not be published.
- Historical production release evidence is retained below for context only; it is not approval for the current candidate.

## 2. Current Candidate Review Sequence

After Wayne approves `secondary-page-shell-preview` and Codex creates a Netlify preview, review these preview pages in order on desktop and mobile:

1. Home: `<preview>/`
2. Building Analyst: `<preview>/building-analyst.html`
3. Who it is for: `<preview>/who-its-for.html`
4. Privacy: `<preview>/privacy.html`
5. BuildScan viewer: `<preview>/buildscan-viewer.html`
6. 404 recovery page: `<preview>/404.html`
7. Holding fallback: `<preview>/holding.html`

Current local screenshot evidence before preview:

- `output/playwright/rendered-release-smoke-2026-07-08T07-19-45-967Z`

The key pages for this candidate are `who-its-for.html` and `privacy.html`, because the candidate aligns their shell with the approved Home/Building Analyst design. Home, Building Analyst, BuildScan, 404 and holding are included to catch regressions.

## 3. What To Approve Or Flag

### Home

Approve if:

- The first impression says Robson AI Solutions turns building evidence into professional intelligence, not generic AI.
- The page looks materially like the supplied redesign zip: white header, dark mesh hero, Manrope-style large proposition, Home/Product/Pricing/About IA, and `Turning data into intelligence.`.
- The added BuildScan model-view element feels native to the zip-style site rather than pasted in.
- Product, Pricing, About, BuildScan and Contact feel designed and not like text blocks.
- Building Analyst, Robson AI Software and BuildScan read as connected but distinct product directions.
- Header navigation lands cleanly on major sections.
- Secondary pages keep the visible Robson AI brand lockup clear and use the same Home/Product/Pricing/About header rhythm.
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
- The page header, navigation, email action, CTA and footer now feel like the same site as Home and Building Analyst.

Flag if:

- The page suggests live council/customer integrations, tenant systems, Microsoft/Oracle/SharePoint connectivity, or operational commitments that are not yet approved.
- The page still feels like a legacy/older Robson AI page compared with the homepage.

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
- Privacy page shell and footer look consistent with the current site while preserving the actual privacy wording.
- Privacy page intro aligns cleanly with the policy cards on desktop.

Flag if:

- You want GA4, contact forms, lead capture, newsletter, CRM, or any data collection. Those require a separate privacy and implementation tranche.
- The privacy page copy has changed in substance; this candidate should not change privacy wording.

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
- Artifact: `output/release-local-gate/gate-2026-07-08T07-18-19-608Z/release-local-gate.json`.

Staging-manifest drift check:

- Command: `npm run qa:release-staging-manifest`
- Result: pass.
- Artifact: `output/release-staging-manifest/smoke-2026-07-08T07-18-26-105Z/release-staging-manifest-smoke.json`; modifiedTracked 15, untrackedCandidate 0, totalDirtyCandidate 15, stagingCommandPaths 15.

Local evidence pack:

- Rendered screenshots: `output/playwright/rendered-release-smoke-2026-07-08T07-19-45-967Z`.
- Measurement: `output/measurement/evidence-2026-07-08T07-20-06-090Z`; axe reported zero violations across checked routes, Lighthouse performance 100, accessibility 100, best practices 100, SEO 100, LCP about 1.38 seconds, CLS 0.
- Release inventory: `output/release-inventory/inventory-2026-07-08T07-18-25-842Z/release-candidate-inventory.json`; dirtyCount 15, secret findings 0, GLB external URI references 0.

Known residuals:

- The candidate is local-only until Wayne approves commit/push/preview.
- Preview release gate is pending because no Netlify preview deploy has been approved for this candidate.
- Production release gate is pending because no production deploy has been approved for this candidate.
- Chromium passes locally; Firefox and WebKit Playwright binaries are not installed locally.
- Dev/release tooling audit remains 17 moderate, 0 high, 0 critical; production footprint remains zero.
- Full Codex Security scan is not complete.
- Public BuildScan GLB downloadability is intentional but should be reconsidered before exposing any new model.

## 5. Current Decision

Use one of these responses:

1. Recommended: approve `secondary-page-shell-preview` so Codex can stage the exact manifest paths, commit, push the branch, create a Netlify preview, run the preview gate, and return with the preview URL before any production decision.
2. Request visual/content tweaks, with the exact page or section to improve.
3. Hold this candidate uncommitted.

## 6. Historical Production Context

The previous production checklist was for production deploy `6a415725a6f69e52078a74df` and candidate `website-visual-refinement-proof-surface-polish`.

Historical production release gate:

- Command: `QA_PRODUCTION_URL=https://robsonai.co.uk CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production`
- Result: pass, 14 steps.
- Artifact: `output/release-production-gate/gate-2026-06-28T17-18-10-065Z/release-preview-gate.json`.
- Production rendered screenshots: `output/playwright/rendered-release-smoke-2026-06-28T17-19-35-062Z`.

That release remains useful as historical rollback/reference context, but the active restart candidate is now the live production-gated release.
