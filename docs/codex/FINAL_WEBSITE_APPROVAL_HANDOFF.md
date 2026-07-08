# Final Website Approval Handoff - Robson AI Solutions Website

Last updated: 2026-07-08 08:22 BST
Owner: Wayne Robson / Robson AI Solutions
Repo: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website`
Status: current live site is production-gated at the Building Analyst/globe-loader baseline; Wayne approved option `1` on 2026-07-08 to preview the local QA-passed `secondary-page-shell-consistency` candidate

## 1. Purpose

This handoff records the current Robson AI Solutions website release state and the next approval gate.

Important current-state note:

- Public production website: `https://robsonai.co.uk`
- Current production source baseline: `8c595f6`
- Current Netlify production deploy baseline: `6a4d6ccccf0a8038379c9abb`
- Production release gate for that baseline: `output/release-production-gate/gate-2026-07-07T21-17-25-642Z/release-preview-gate.json`
- Active local candidate: `secondary-page-shell-consistency`
- Candidate status: refreshed full local release gate passed for the 15-file cache-key candidate; exact-path staging, commit, branch push, Netlify preview deploy and preview-gate validation are approved; production deploy remains unapproved
- Candidate approval packet: `docs/codex/RELEASE_APPROVAL_PACKET.md`
- Candidate staging manifest: `docs/codex/RELEASE_STAGING_MANIFEST.md`
- Current owner review checklist: `docs/codex/WEBSITE_APPROVAL_REVIEW_CHECKLIST.md`
- Current publish-readiness audit: `docs/codex/PUBLISH_READINESS_AUDIT.md`

This document does not approve staging, commit, branch push, GitHub PR, Netlify preview deploy, production deploy, DNS/domain work, analytics, forms, customer data handling, external messages, rollback, or destructive git actions.

## 2. What Changed In The Release

The current live release already includes:

- Zip-faithful homepage direction based on Wayne's supplied redesign.
- Globe Loader hero visual with the corrected Robson AI centre icon.
- Building Analyst page aligned with the homepage-style design system.
- BuildScan model-view proof with opt-in interactive GLB viewer and static fallback.
- Cautious wording around product maturity, professional judgement, Apple-native intelligence direction, and no autonomous diagnosis claims.
- Email-first contact with no website form or customer-data store.

The active local candidate adds:

- Zip-style header/footer shell to `who-its-for.html`.
- Zip-style header/footer shell to `privacy.html`.
- Scoped secondary-page CSS for the shared shell.
- Privacy-page desktop top alignment.
- Stylesheet cache-key bump across public HTML pages so the changed CSS is fetched after deployment.
- Rendered-smoke compatibility updates.
- Current approval/staging/tracker documentation for this decision.
- Current owner-review and publish-readiness documentation for this decision.

The candidate does not change privacy-policy wording, product claims, BuildScan assets, analytics, forms, DNS, customer-data handling, app implementation, or external integrations.

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
- Current candidate approval packet: `docs/codex/RELEASE_APPROVAL_PACKET.md`

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

## 5. Current Candidate Evidence

Local release gate:

- Command: `npm run qa:release:local`
- Result: pass, 37 steps.
- Artifact: `output/release-local-gate/gate-2026-07-08T07-18-19-608Z/release-local-gate.json`.

Staging-manifest check:

- Command: `npm run qa:release-staging-manifest`
- Result: pass.
- Artifact: `output/release-staging-manifest/smoke-2026-07-08T07-18-26-105Z/release-staging-manifest-smoke.json`; modifiedTracked 15, untrackedCandidate 0, totalDirtyCandidate 15, stagingCommandPaths 15.

Visual and measurement evidence:

- Rendered screenshots: `output/playwright/rendered-release-smoke-2026-07-08T07-19-45-967Z`, including refreshed `desktop-who-its-for.png` and `desktop-privacy.png`.
- Measurement evidence: `output/measurement/evidence-2026-07-08T07-20-06-090Z`; axe violations 0 across checked routes, Lighthouse performance 100, accessibility 100, best practices 100, SEO 100, CLS 0, LCP about 1.38s on the median selected run.
- Product/design acceptance: `output/product-design-acceptance/smoke-2026-07-08T07-18-50-300Z/product-design-acceptance-smoke.json`.
- Responsive route smoke: `output/responsive-route/smoke-2026-07-08T07-18-56-178Z/responsive-route-smoke.json`.
- Visual polish smoke: `output/visual-polish/smoke-2026-07-08T07-19-17-345Z/visual-polish-smoke.json`.

Known warning-only residuals:

- Local Firefox/WebKit Playwright browser binaries are unavailable; Chromium passes locally.
- Dev/release tooling dependency advisory remains warning-only; production dependency footprint remains zero vulnerabilities.

## 6. Current Approval Options

1. Recommended: approve `secondary-page-shell-preview` so Codex can stage the exact manifest paths, commit, push the branch, create a Netlify preview, run the preview gate, and return with the preview URL before any production decision.
2. Faster but higher-risk: approve direct production deploy from the locally validated candidate.
3. Hold: keep the candidate uncommitted and request a specific visual/content adjustment first.

## 7. Historical June Release Evidence

The historical June 2026 release evidence below is preserved for traceability. It is not approval for the current candidate.

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

## 8. Historical Known Residuals

- Source control is not yet aligned with the live archive deploy. Local commit `8e32faf` is live, but the branch has not been pushed and `main` may not match production.
- Chromium passes locally; Firefox and WebKit Playwright binaries are not installed locally.
- Dev/release tooling audit remains at 17 moderate findings, 0 high, 0 critical; production footprint remains zero.
- Full Codex Security workspace scan is not complete.
- Public BuildScan GLB downloadability is intentional for the current public proof asset, but should be reconsidered before exposing any new model.

## 9. Historical Approval Options

1. Recommended: approve source-control alignment for the live release so GitHub/main can be brought back into line with production using an explicit, low-risk path.
2. Hold source control for now and run a 24-hour production observation check.
3. Start a separate post-launch design/motion tranche after source control is aligned.
