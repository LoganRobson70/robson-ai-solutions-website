# Website Approval Review Checklist - Robson AI Solutions Website

Last updated: 2026-07-02 18:43 BST
Owner: Wayne Robson / Robson AI Solutions
Repo: `/private/tmp/robson-ai-website-quality-restart`
Status: current local review checklist for `word-heavy-section-polish`; previous production checklist retained as historical context

## 1. Purpose

Use this checklist to review the current local word-heavy section polish candidate for the original goal:

> Make the Robson AI Solutions website the best releasable version it can be.

Important:

- Current local review URL: `http://127.0.0.1:8135/`.
- Current production URL remains: `https://robsonai.co.uk`.
- Current candidate name: `word-heavy-section-polish`.
- Current branch: `codex/word-heavy-section-polish`.
- Current candidate scope: 9 files; 8 modified tracked files and 1 untracked audit note.
- The rejected `proof-motion-polish` preview must not be published.
- Existing production deploy `6a45f66d95632900082f00cb` remains live and production-gated; this local candidate is not live.
- No commit, branch push, Netlify preview deploy, production deploy, analytics, forms, DNS/domain work, customer-data handling, external messages, force-pushes, or future production deploys are approved by this checklist.
- Current preview approval handoff is `docs/codex/WEBSITE_RESTART_PREVIEW_HANDOFF.md`.
- Historical production release evidence is retained below for context only; it is not approval for the restart candidate.

## 2. Current Local Review Sequence

Review these local pages in order on desktop and mobile:

1. Home: `http://127.0.0.1:8135/`
2. Building Analyst: `http://127.0.0.1:8135/building-analyst.html`
3. Who it is for: `http://127.0.0.1:8135/who-its-for.html`
4. BuildScan viewer: `http://127.0.0.1:8135/buildscan-viewer.html`
5. Privacy: `http://127.0.0.1:8135/privacy.html`
6. 404 recovery page: `http://127.0.0.1:8135/404.html`
7. Holding fallback: `http://127.0.0.1:8135/holding.html`

Screenshot evidence from the current local rendered smoke:

- `output/playwright/rendered-release-smoke-2026-07-02T17-24-59-410Z`

The local server returned HTTP 200 at `http://127.0.0.1:8135/`. No preview or production deploy has been performed for this candidate.

## 3. What To Approve Or Flag

### Home

Approve if:

- The first impression says Robson AI Solutions is about professional building intelligence, not generic AI.
- The rejected floating/misaligned hero icon treatment is gone.
- The hero proof surface feels deliberate, product-led, and professionally composed.
- Finder, Operations, Method, Credibility, and Contact feel more designed and less like text blocks.
- The optional analytics consent rail does not undermine the desktop hero first impression.
- Building Analyst, BuildScan, and property operations read as connected but distinct workstreams.
- Header navigation lands cleanly on major sections without orphaned controls from the previous section appearing below the sticky nav.
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
- Artifact: `output/release-local-gate/gate-2026-07-02T17-23-29-682Z/release-local-gate.json`.

Current local product/design evidence:

- Rendered screenshots: `output/playwright/rendered-release-smoke-2026-07-02T17-24-59-410Z`.
- Measurement: `output/measurement/evidence-2026-07-02T17-25-18-165Z`; Lighthouse performance 100, accessibility 100, best practices 100, SEO 100, LCP about 1.80 seconds, CLS 0.
- Product/design audit screenshots: `output/product-design-audit/word-heavy-continuation-2026-07-02T17-15-15-448Z`.
- Consent first-impression screenshots: `output/product-design-audit/consent-first-impression-2026-07-02T17-18-36-986Z`.
- Latest staging-manifest smoke: `output/release-staging-manifest/smoke-2026-07-02T17-43-25-511Z/release-staging-manifest-smoke.json`; 8 modified tracked files, 1 untracked candidate file, 9 explicit staging paths.
- Latest release inventory: `output/release-inventory/inventory-2026-07-02T17-43-25-511Z/release-candidate-inventory.json`; dirtyCount 9, secret findings 0, GLB external URI references 0.

Known residuals:

- The candidate is not committed, pushed, preview-deployed, or production-deployed.
- The fixed mobile consent rail still sits over the bottom of the tall hero area until the visitor chooses an option; the main headline and CTAs remain visible. A different consent pattern should be a separate approved tranche.
- Chromium passes locally; Firefox and WebKit Playwright binaries are not installed locally.
- Dev/release tooling audit remains 17 moderate, 0 high, 0 critical; production footprint remains zero.
- Full Codex Security scan is not complete.
- Public BuildScan GLB downloadability is intentional but should be reconsidered before exposing any new model.

## 5. Current Decision

Use one of these responses:

1. Recommended: `approve commit + branch push + Netlify preview deploy for word-heavy-section-polish`.
2. `request targeted visual changes before preview`
3. `hold here with production unchanged`

## 6. Historical Production Context

The previous production checklist was for production deploy `6a415725a6f69e52078a74df` and candidate `website-visual-refinement-proof-surface-polish`.

Historical production release gate:

- Command: `QA_PRODUCTION_URL=https://robsonai.co.uk CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production`
- Result: pass, 14 steps.
- Artifact: `output/release-production-gate/gate-2026-06-28T17-18-10-065Z/release-preview-gate.json`.
- Production rendered screenshots: `output/playwright/rendered-release-smoke-2026-06-28T17-19-35-062Z`.

That release remains useful as rollback/reference context, but it does not approve or complete the active restart candidate.
