# Final Website Approval Handoff - Robson AI Solutions Website

Last updated: 2026-06-28 13:20 BST
Owner: Wayne Robson / Robson AI Solutions
Repo: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website`
Status: presented for Wayne review; no further production deploy approved

## 1. Purpose

This handoff presents the full Robson AI Solutions website for Wayne's final review and approval before any future live deployment.

Important current-state note:

- The current production website is already live at `https://robsonai.co.uk`.
- Current production deploy: `6a4110fe34f4b66db778e4bb`.
- Current production source: local commit `5994de8` deployed by approved Netlify CLI production deploy from clean `git archive HEAD`.
- This document does not approve another production deploy.
- Future live changes must be presented to Wayne first as a full website or candidate-preview review, then explicitly approved before deploy.

## 2. Full Website Review Links

Wayne should review these public pages:

1. Home: `https://robsonai.co.uk/`
2. Building Analyst: `https://robsonai.co.uk/building-analyst.html`
3. Who it is for: `https://robsonai.co.uk/who-its-for.html`
4. Privacy: `https://robsonai.co.uk/privacy.html`
5. BuildScan viewer: `https://robsonai.co.uk/buildscan-viewer.html`
6. 404 recovery page: `https://robsonai.co.uk/404.html`
7. Holding fallback: `https://robsonai.co.uk/holding.html`

The review should cover desktop and mobile.

Review checklist:

- `docs/codex/WEBSITE_APPROVAL_REVIEW_CHECKLIST.md`

This checklist gives Wayne the page-by-page approval criteria, latest evidence paths, and the exact response needed to approve or hold the current website.

## 3. Product Direction To Approve

The site should be approved only if it accurately represents Robson AI Solutions as:

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

## 4. Approval Questions For Wayne

Wayne should answer these before any future live deployment:

1. Does the homepage clearly explain Robson AI Solutions and the professional building-intelligence mission?
2. Does Building Analyst read as a professional surveying/reporting product, not a generic AI chatbot?
3. Does BuildScan's public 3D model preview help explain the product direction without exposing anything too sensitive?
4. Does the property operations narrative feel useful and credible for CAFM-style workflows?
5. Are the claims cautious enough for the current product state?
6. Is the contact path acceptable as email-first with no form data collection?
7. Are there any words, screenshots, model views, or claims that should be changed before the next live deploy?

## 5. Latest Evidence

Production release gate:

- Command: `QA_PRODUCTION_URL=https://robsonai.co.uk CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production`
- Result: pass, 14 steps.
- Artifact: `output/release-production-gate/gate-2026-06-28T12-18-19-900Z/release-preview-gate.json`.

Latest production evidence:

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

Approval checklist:

- `docs/codex/WEBSITE_APPROVAL_REVIEW_CHECKLIST.md`.

Known residuals:

- Chromium passes locally; Firefox and WebKit Playwright binaries are not installed locally, so strict local browser parity is not proved on this machine.
- Dev/release tooling audit remains at 17 moderate findings, 0 high, 0 critical; production footprint remains zero.
- The approved BuildScan public GLB is downloadable website data by design.

## 6. Next-Phase Refinement Candidates

These are candidates for planning only. They are not approved implementation or deployment scope.

Detailed planning baseline:

- `docs/codex/NEXT_PHASE_REFINEMENT_PLAN.md`

1. BuildScan interaction polish.
   - Improve affordances around orbit, pan, zoom, reset, and model-loading state.
   - Consider clearer public-model guidance once any new public-model gate is approved.
   - Keep static fallback and opt-in model loading.

2. Property operations narrative clarity.
   - Sharpen how CAFM-style workflows connect to evidence, exceptions, condition, ownership, and client decisions.
   - Avoid implying live council, Microsoft, Oracle, SharePoint, or customer integrations unless a real-integration tranche is approved.

3. SEO and analytics configuration.
   - Review page titles, descriptions, structured data, and sitemap after Wayne's approval.
   - Keep analytics inert unless Wayne approves GA4 setup and privacy review.

4. Accessibility and performance watch.
   - Keep keyboard, responsive, visual-polish, rendered, measurement, and release gates in the release path.
   - Optional: install Playwright Firefox/WebKit for strict browser parity.

5. Claim alignment.
   - Keep Apple-native intelligence language cautious.
   - Keep Building Analyst positioned as professional surveying/reporting workflow support.
   - Do not present external AI providers or BYO API keys as the product goal.

## 7. Approval Options

1. Recommended: Wayne reviews `docs/codex/WEBSITE_APPROVAL_REVIEW_CHECKLIST.md` and the full website links, then replies `Approved current live website` or lists required changes.
2. Approve `website-refinement-planning-no-deploy`, using `docs/codex/NEXT_PHASE_REFINEMENT_PLAN.md` as the baseline.
3. Approve a scoped preview-only change tranche after review comments are captured.
4. Hold all website changes and keep production as-is.
