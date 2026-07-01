# Codex Tracker - Robson AI Solutions Website

Last updated: 2026-07-01 19:14 BST
Project owner: Wayne Robson / Robson AI Solutions
Primary repo/path: `/private/tmp/robson-ai-website-quality-restart`
Current branch: `codex/hero-buildscan-proof-visual-fix`

## 1. Current Objective

Maintain the production-grade Robson AI Solutions website so it continues to embody professional building intelligence and the current product direction. The live site should present Building Analyst for assessment capture and report-ready evidence, BuildScan for external modelling and visual context, and property operations thinking for CAFM-style workflows. It should show a practical loop of capturing evidence, structuring assessment records, analysing patterns, and supporting clearer client understanding while preserving professional boundaries, proof over claims, cautious Apple-native intelligence language, and email-first contact with no form data collection.

Current focus:

- Fix the live homepage hero BuildScan proof visual Wayne flagged as distorted.
- Keep the fix bounded to the hero proof surface and supporting responsive presentation.
- Run local visual/responsive QA, create a preview deploy, and ask Wayne for review before any production deploy.

Success means:

- The public website keeps cautious, accurate Robson AI / Building Analyst / BuildScan / WAIS positioning.
- Product proof, visual design, interaction quality, accessibility, performance, privacy/security, measurement, and release controls meet the programme in `docs/codex/WEBSITE_EXCELLENCE_PROGRAMME.md`.
- Bold/cinematic influences are never adopted by default; any such treatment needs concrete options/mockups, Wayne approval, Robson-system adaptation, and the same performance/accessibility/reduced-motion proof.
- Work proceeds through small, reversible tranches with evidence and explicit approval gates for commits, pushes, previews, and production deploys.
- Serious closeouts report publish-readiness progress as a percentage and always end with the single recommended next action as numbered option `1`, plus alternatives when Wayne needs to decide.
- Full website approval handoff is recorded in `docs/codex/FINAL_WEBSITE_APPROVAL_HANDOFF.md`; use it before any future live deploy.
- Page-by-page Wayne approval checklist is recorded in `docs/codex/WEBSITE_APPROVAL_REVIEW_CHECKLIST.md`; it now reviews the local restart candidate and preserves the older production checklist as historical context.
- Next-phase refinement planning baseline is recorded in `docs/codex/NEXT_PHASE_REFINEMENT_PLAN.md`; it is not implementation or deployment approval.
- Side ideas are parked instead of expanding the active tranche.
- Luffu/Steno/Unfold motion references are captured as `docs/codex/MOTION_REFERENCE_BRIEF.md`; they are not approved implementation scope unless Wayne chooses the motion-polish alternative.
- Completion status is audited in `docs/codex/GOAL_COMPLETION_AUDIT.md`; the clean restart candidate is live as GitHub-triggered Netlify production deploy `6a435aeccc48bb00085e7eb4` from commit `75f9a13`, with production gate pass `output/release-production-gate/gate-2026-06-30T06-00-24-751Z/release-preview-gate.json`.
- Production release execution is defined in `docs/codex/PRODUCTION_RELEASE_RUNBOOK.md`; the 2026-06-29 clean restart publish and 2026-06-30 source-control alignment were executed after Wayne approved option `1`.

## 2. Active Tranche

Tranche name: `hero-buildscan-proof-visual-fix`
Status: completed and production-gated; Netlify production deploy `6a4558490aaf99a4fb8f1af6` is live on `https://robsonai.co.uk`
Started: 2026-07-01 16:34 BST
Completed: 2026-07-01 19:14 BST

Scope:

- Correct the distorted-looking homepage BuildScan proof visual.
- Preserve the existing BuildScan public proof asset; do not add or expose a new model file.
- Make the hero proof surface responsive, clear, and representative of drone-to-3D/model review work.
- Preserve product truth, cautious Apple-native language, email-first/no-form privacy posture, and the current BuildScan opt-in model behaviour.

Out of scope:

- Publishing the rejected `proof-motion-polish` preview, DNS/domain changes, analytics/forms/customer-data capture, new public GLB/model asset, app implementation, Apple submission/signing, external messages, force-push, destructive git reset, or broad redesign.

Permission envelope:

- Wayne approved option `1` on 2026-07-01 for a focused `hero-buildscan-proof-visual-fix` tranche.
- Approval covers scoped local edits, tracker update, local QA, commit, branch push, Netlify preview deploy, and preview verification.
- Wayne approved option `1` again on 2026-07-01 for production deploy of the preview-gated hero proof visual fix.
- Approval does not cover DNS changes, analytics/forms/customer data, external messages, destructive git actions, force-pushes, or main/source-control alignment after this production deploy.

Done criteria:

- The hero proof visual no longer crops/upscales the model into a distorted-looking portrait panel.
- Local screenshots show the proof surface clearly on desktop and the flagged tablet-width viewport.
- Relevant local visual/responsive checks pass.
- A Netlify preview is available for Wayne review.
- Wayne receives changed files, validation evidence, risks, rollback path, publish-readiness percentage, and next recommended action as numbered option `1`.

Validation evidence:

- Hero proof fix implemented locally: the homepage proof image now uses a corrected responsive `sizes` hint, a landscape `aspect-ratio: 1.647`, no tall minimum-height override, and a modest non-distorting image zoom to reduce black margin.
- Targeted local viewport evidence captured at `output/product-design-audit/hero-proof-fix-2026-07-01/home-hero-proof-fixed-zoom-872x996.png`.
- Targeted local viewport check shows the hero proof image now selects `assets/showcase/buildscan-ludgershall-model-view-840.webp`, rendering around `706x428` at the flagged 872px viewport instead of the live `420w` source rendering around `706x982`.
- Local checks passed: `git diff --check`; `npm run qa:visual-polish` with artifact `output/visual-polish/smoke-2026-07-01T15-40-25-626Z/visual-polish-smoke.json`; `npm run qa:responsive` with artifact `output/responsive-route/smoke-2026-07-01T15-40-25-646Z/responsive-route-smoke.json`; `npm run qa:product-design` with artifact `output/product-design-acceptance/smoke-2026-07-01T15-41-05-177Z/product-design-acceptance-smoke.json`; `npm run qa:rendered` with screenshot pack `output/playwright/rendered-release-smoke-2026-07-01T15-41-05-177Z`.
- Release scope checks passed: `npm run qa:release-staging-manifest` with artifact `output/release-staging-manifest/smoke-2026-07-01T15-40-25-513Z/release-staging-manifest-smoke.json`; 4 modified tracked files, 0 untracked candidate files, 4 staging paths. `npm run qa:release-inventory` with artifact `output/release-inventory/inventory-2026-07-01T15-40-25-500Z/release-candidate-inventory.json`; dirtyCount 4, zero secret findings, GLB externalUriCount 0.
- Full local release gate passed all 37 steps: `output/release-local-gate/gate-2026-07-01T15-42-36-520Z/release-local-gate.json`.
- Full-gate measurement evidence: `output/measurement/evidence-2026-07-01T15-44-53-053Z`; Lighthouse median performance 100, accessibility 100, best practices 100, SEO 100, LCP about 1.80 seconds, CLS 0.
- Full-gate rendered screenshots: `output/playwright/rendered-release-smoke-2026-07-01T15-44-08-535Z`.
- Commit created and pushed: `3c1112d` (`Fix hero BuildScan proof visual`) on branch `codex/hero-buildscan-proof-visual-fix`.
- Netlify preview deploy succeeded from a clean archive of `3c1112d`: deploy `6a4536c825996713e910923d`, preview URL `https://hero-buildscan-proof-visual-fix--robson-ai-website.netlify.app`, logs `https://app.netlify.com/projects/robson-ai-website/deploys/6a4536c825996713e910923d`.
- Deployed preview gate passed: `QA_BASE_URL=https://hero-buildscan-proof-visual-fix--robson-ai-website.netlify.app npm run qa:release:preview`; artifact `output/release-preview-gate/gate-2026-07-01T15-48-46-308Z/release-preview-gate.json`; result pass, 14 steps.
- Preview gate evidence includes release inventory `output/release-inventory/inventory-2026-07-01T15-48-46-432Z/release-candidate-inventory.json` with dirtyCount 0, zero secret findings, and GLB externalUriCount 0; deployed headers `output/release-headers/smoke-2026-07-01T15-48-55-435Z/release-header-smoke.json`; BuildScan viewer `output/buildscan-viewer/smoke-2026-07-01T15-48-55-791Z`; keyboard smoke `output/playwright/keyboard-release-smoke-2026-07-01T15-49-06-288Z`; semantic SEO `output/semantic-seo/smoke-2026-07-01T15-49-12-949Z/semantic-seo-smoke.json`; product/design `output/product-design-acceptance/smoke-2026-07-01T15-49-24-664Z/product-design-acceptance-smoke.json`; responsive `output/responsive-route/smoke-2026-07-01T15-49-34-650Z/responsive-route-smoke.json`; visual polish `output/visual-polish/smoke-2026-07-01T15-50-05-342Z/visual-polish-smoke.json`; rendered screenshots `output/playwright/rendered-release-smoke-2026-07-01T15-50-43-762Z`; measurement smoke `output/measurement/smoke-2026-07-01T15-50-55-519Z`.
- Production rollback target before publish was confirmed as deploy `6a43e8d61174090008cedebe` from `main` commit `8ac3970`.
- Netlify production deploy succeeded from a clean archive of branch head `e9020c1`: deploy `6a4558490aaf99a4fb8f1af6`, production URL `https://robsonai.co.uk`, unique deploy URL `https://6a4558490aaf99a4fb8f1af6--robson-ai-website.netlify.app`, logs `https://app.netlify.com/projects/robson-ai-website/deploys/6a4558490aaf99a4fb8f1af6`.
- Netlify API confirmed `6a4558490aaf99a4fb8f1af6` as the current published deploy at `2026-07-01T18:11:24.980Z`; this was an API/manual production deploy, so `commit_ref` is null and source-control alignment remains a separate approval.
- Production release gate passed: `QA_PRODUCTION_URL=https://robsonai.co.uk CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production`; artifact `output/release-production-gate/gate-2026-07-01T18-11-39-418Z/release-preview-gate.json`; result pass, 14 steps.
- Production gate evidence includes release inventory `output/release-inventory/inventory-2026-07-01T18-11-39-560Z/release-candidate-inventory.json` with dirtyCount 0, zero secret findings, and GLB externalUriCount 0; release security `output/release-security/smoke-2026-07-01T18-11-43-804Z/release-security-smoke.json`; deployed headers `output/release-headers/smoke-2026-07-01T18-11-48-024Z/release-header-smoke.json`; BuildScan viewer `output/buildscan-viewer/smoke-2026-07-01T18-11-48-411Z`; keyboard smoke `output/playwright/keyboard-release-smoke-2026-07-01T18-11-58-375Z`; semantic SEO `output/semantic-seo/smoke-2026-07-01T18-12-03-063Z/semantic-seo-smoke.json`; product/design `output/product-design-acceptance/smoke-2026-07-01T18-12-11-650Z/product-design-acceptance-smoke.json`; responsive `output/responsive-route/smoke-2026-07-01T18-12-18-062Z/responsive-route-smoke.json`; visual polish `output/visual-polish/smoke-2026-07-01T18-12-38-341Z/visual-polish-smoke.json`; rendered screenshots `output/playwright/rendered-release-smoke-2026-07-01T18-13-09-335Z`; measurement smoke `output/measurement/smoke-2026-07-01T18-13-20-139Z`.
- Production is `https://robsonai.co.uk` at GitHub-triggered Netlify deploy `6a435aeccc48bb00085e7eb4` for the clean restart candidate; no production deploy has been performed for the rejected motion preview.
- Rejected preview/evidence commits `763c8d8` and `d5e9d64` remain only on the original dirty branch and have not been pushed.
- Clean worktree created at `/private/tmp/robson-ai-website-quality-restart` on branch `codex/website-quality-clean-restart` from `origin/main`.
- The active publish path now uses the clean worktree rather than the branch containing rejected preview commits.
- Restart design audit added at `docs/codex/WEBSITE_RESTART_DESIGN_AUDIT.md`; recommended next tranche is `homepage-composition-reset`.
- Restart design audit now includes local implementation results, dirty scope, validation evidence, residuals and the next approval path.
- Publish readiness and goal-completion audits now distinguish the clean restart production release from the earlier completed production release; the active delivery is complete for the approved release scope, with optional owner visual sign-off and later assurance tranches remaining.
- Restart preview approval handoff added at `docs/codex/WEBSITE_RESTART_PREVIEW_HANDOFF.md` so Wayne's next approval can be scoped to commit plus Netlify preview, not production.
- Homepage composition reset implemented locally: the rejected floating hero icon treatment is replaced with a BuildScan proof image surface, dark proof sections have explicit contrast fixes, repeated pale card surfaces are reduced, and Finder/Operations/Method/Credibility/Contact are consolidated into stronger product-proof layouts without changing product claims.
- Follow-up visual defect fixed locally: the Focus manifesto no longer uses a broken white-card/dark-section mix; the section is now a deliberate dark proof band with legible text.
- Follow-up navigation defect fixed locally: desktop BuildScan nav now lands below the sticky header without showing previous Operations controls below the header, and `scripts/rendered-release-smoke.mjs` now checks this.
- Follow-up brand consistency defect fixed locally: the Who It Fits header lockup now reads `Robson AI / Solutions`, not `Robson AI / Fit`, and `scripts/rendered-release-smoke.mjs` checks key secondary-page straplines.
- Clean local review URL: `http://127.0.0.1:8133/`; HTTP 200 confirmed.
- Current clean dirty scope: 9 modified tracked files and 2 untracked candidate files: `docs/codex/GOAL_COMPLETION_AUDIT.md`, `docs/codex/PUBLISH_READINESS_AUDIT.md`, `docs/codex/RELEASE_STAGING_MANIFEST.md`, `docs/codex/TRACKER.md`, `docs/codex/WEBSITE_APPROVAL_REVIEW_CHECKLIST.md`, `index.html`, `scripts/rendered-release-smoke.mjs`, `styles.css`, `who-its-for.html`, `docs/codex/WEBSITE_RESTART_DESIGN_AUDIT.md`, and `docs/codex/WEBSITE_RESTART_PREVIEW_HANDOFF.md`.
- `script.js` has no net restart change in the clean worktree; the earlier dirty state came from removing rejected preview code back to the production baseline.
- Current approval checklist has been realigned to the local restart candidate and no longer points Wayne at the old production release as the active review path.
- Current 11-file full local release gate passed: `output/release-local-gate/gate-2026-06-28T21-09-14-722Z/release-local-gate.json`; 37 steps.
- Current 11-file staging-manifest smoke passed inside the full gate: `output/release-staging-manifest/smoke-2026-06-28T21-09-21-067Z/release-staging-manifest-smoke.json`; 9 modified tracked files, 2 untracked candidate files, 11 explicit staging paths.
- Current 11-file release inventory passed inside the full gate: `output/release-inventory/inventory-2026-06-28T21-09-20-859Z/release-candidate-inventory.json`; dirtyCount 11, zero secret findings, GLB externalUriCount 0.
- Current rendered screenshot evidence after anchor-navigation polish: `output/playwright/rendered-release-smoke-2026-06-28T21-10-35-845Z`.
- Current measurement evidence after anchor-navigation polish: `output/measurement/evidence-2026-06-28T21-11-19-578Z`; Lighthouse performance 100, accessibility 100, best practices 100, SEO 100, LCP about 1.80 seconds, CLS 0.
- Clean full local release gate passed all 37 steps: `output/release-local-gate/gate-2026-06-29T16-19-55-329Z/release-local-gate.json`.
- Clean staging-manifest smoke passed inside the full gate: `output/release-staging-manifest/smoke-2026-06-29T16-20-03-286Z/release-staging-manifest-smoke.json`; 9 modified tracked files, 2 untracked candidate files, 11 explicit staging paths.
- Clean release inventory passed inside the full gate: `output/release-inventory/inventory-2026-06-29T16-20-03-053Z/release-candidate-inventory.json`; dirtyCount 11, zero secret findings, GLB externalUriCount 0.
- Clean rendered screenshot evidence: `output/playwright/rendered-release-smoke-2026-06-29T16-21-29-423Z`.
- Clean measurement evidence: `output/measurement/evidence-2026-06-29T16-21-48-137Z`; Lighthouse performance 100, accessibility 100, best practices 100, SEO 100, LCP about 1.80 seconds, CLS 0.
- Local commit created on clean branch: `242410f` (`Prepare clean website restart candidate`).
- Netlify preview deploy succeeded from a clean `git archive HEAD` directory: deploy `6a42b0eaaaa964aad7bb6dce`, preview URL `https://website-quality-clean-restart--robson-ai-website.netlify.app`, logs `https://app.netlify.com/projects/robson-ai-website/deploys/6a42b0eaaaa964aad7bb6dce`.
- Deployed preview gate passed: `QA_BASE_URL=https://website-quality-clean-restart--robson-ai-website.netlify.app npm run qa:release:preview`; artifact `output/release-preview-gate/gate-2026-06-29T17-53-08-619Z/release-preview-gate.json`; result pass, 14 steps.
- Preview gate evidence includes release inventory `output/release-inventory/inventory-2026-06-29T17-53-08-745Z/release-candidate-inventory.json` with dirtyCount 0 and zero secret findings; deployed headers `output/release-headers/smoke-2026-06-29T17-53-17-931Z/release-header-smoke.json`; BuildScan viewer `output/buildscan-viewer/smoke-2026-06-29T17-53-18-278Z`; semantic SEO `output/semantic-seo/smoke-2026-06-29T17-53-35-504Z/semantic-seo-smoke.json`; product/design `output/product-design-acceptance/smoke-2026-06-29T17-53-48-914Z/product-design-acceptance-smoke.json`; responsive `output/responsive-route/smoke-2026-06-29T17-53-58-908Z/responsive-route-smoke.json`; visual polish `output/visual-polish/smoke-2026-06-29T17-54-27-130Z/visual-polish-smoke.json`; rendered screenshots `output/playwright/rendered-release-smoke-2026-06-29T17-55-07-392Z`; measurement smoke `output/measurement/smoke-2026-06-29T17-55-22-026Z`.
- Netlify production rollback target was confirmed before publish: deploy `6a415b5db31442000737c37c` from GitHub/main commit `39c5bf5`.
- Production deploy succeeded from a clean `git archive 242410f` directory: deploy `6a42c401c0f172f9fa99e3a7`, production URL `https://robsonai.co.uk`, unique deploy URL `https://6a42c401c0f172f9fa99e3a7--robson-ai-website.netlify.app`, logs `https://app.netlify.com/projects/robson-ai-website/deploys/6a42c401c0f172f9fa99e3a7`.
- Netlify site metadata confirmed `6a42c401c0f172f9fa99e3a7` as the current published deploy, with `content-length: 37720` on `https://robsonai.co.uk/`.
- Production release gate passed: `QA_PRODUCTION_URL=https://robsonai.co.uk CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production`; artifact `output/release-production-gate/gate-2026-06-29T19-15-08-658Z/release-preview-gate.json`; result pass, 14 steps.
- Production gate evidence includes release inventory `output/release-inventory/inventory-2026-06-29T19-15-08-805Z/release-candidate-inventory.json` with dirtyCount 5 from local post-preview evidence docs, zero secret findings, and GLB externalUriCount 0; deployed headers `output/release-headers/smoke-2026-06-29T19-15-17-692Z/release-header-smoke.json`; BuildScan viewer `output/buildscan-viewer/smoke-2026-06-29T19-15-18-160Z`; semantic SEO `output/semantic-seo/smoke-2026-06-29T19-15-31-512Z/semantic-seo-smoke.json`; product/design `output/product-design-acceptance/smoke-2026-06-29T19-15-40-452Z/product-design-acceptance-smoke.json`; responsive `output/responsive-route/smoke-2026-06-29T19-15-47-175Z/responsive-route-smoke.json`; visual polish `output/visual-polish/smoke-2026-06-29T19-16-08-162Z/visual-polish-smoke.json`; rendered screenshots `output/playwright/rendered-release-smoke-2026-06-29T19-16-37-328Z`; measurement smoke `output/measurement/smoke-2026-06-29T19-16-48-260Z`.
- Post-production docs baseline refreshed so `docs/codex/RELEASE_STAGING_MANIFEST.md` and `docs/codex/PRODUCTION_RELEASE_RUNBOOK.md` now describe the live deploy and source-control alignment path, not the older pre-publish/BuildScan release state.
- Post-production closeout scope validation passed: `npm run qa:release-staging-manifest`; artifact `output/release-staging-manifest/smoke-2026-06-29T19-30-49-230Z/release-staging-manifest-smoke.json`; 7 modified tracked files, 0 untracked candidate files, 7 staging command paths, approval boundary checked.
- Post-production inventory validation passed: `npm run qa:release-inventory`; artifact `output/release-inventory/inventory-2026-06-29T19-30-49-228Z/release-candidate-inventory.json`; dirtyCount 7, zero secret findings, GLB externalUriCount 0.
- Source-control alignment preflight on 2026-06-29 20:35 BST found `HEAD=242410f`, `origin/main=39c5bf5`, `main=39c5bf5`; both `origin/main -> HEAD` and `main -> HEAD` are normal fast-forward paths, and `HEAD` is not yet contained by `origin/main`.
- Latest post-production closeout validation passed: `git diff --check`, `npm run qa:release-staging-manifest` with artifact `output/release-staging-manifest/smoke-2026-06-29T19-34-40-437Z/release-staging-manifest-smoke.json`, and `npm run qa:release-inventory` with artifact `output/release-inventory/inventory-2026-06-29T19-34-40-610Z/release-candidate-inventory.json`; dirtyCount 7, zero secret findings, GLB externalUriCount 0.
- Live-state recheck on 2026-06-29 20:34 BST: Netlify API still reports production deploy `6a42c401c0f172f9fa99e3a7`, and `https://robsonai.co.uk/` returned HTTP 200 with `content-length: 37720`.
- Source-control closeout commit created: `75f9a13` (`Document clean restart production alignment`); staged files were the seven closeout docs listed in the release-staging manifest.
- Branch push succeeded: `origin/codex/website-quality-clean-restart` now contains `75f9a13`.
- `main` push succeeded as a normal non-force fast-forward: `origin/main` now contains `75f9a13`.
- Source-control refs aligned after push: `HEAD`, `origin/main`, and local `main` all resolve to `75f9a13`; worktree was clean before the final local evidence-doc update.
- Netlify GitHub-triggered production deploy is ready: deploy `6a435aeccc48bb00085e7eb4`, commit `75f9a13899c1205d02aae7567b06324774e7c8ff`, production URL `https://robsonai.co.uk`, unique deploy URL `https://6a435aeccc48bb00085e7eb4--robson-ai-website.netlify.app`, published `2026-06-30T05:58:18.651Z`.
- Production release gate passed after the GitHub/main deploy: `QA_PRODUCTION_URL=https://robsonai.co.uk CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production`; artifact `output/release-production-gate/gate-2026-06-30T06-00-24-751Z/release-preview-gate.json`; result pass, 14 steps.
- Production gate evidence includes release inventory `output/release-inventory/inventory-2026-06-30T06-00-24-883Z/release-candidate-inventory.json` with dirtyCount 0, zero secret findings, and GLB externalUriCount 0; deployed headers `output/release-headers/smoke-2026-06-30T06-00-32-090Z/release-header-smoke.json`; BuildScan viewer `output/buildscan-viewer/smoke-2026-06-30T06-00-32-456Z`; product/design `output/product-design-acceptance/smoke-2026-06-30T06-00-52-394Z/product-design-acceptance-smoke.json`; responsive `output/responsive-route/smoke-2026-06-30T06-00-58-871Z/responsive-route-smoke.json`; visual polish `output/visual-polish/smoke-2026-06-30T06-01-19-400Z/visual-polish-smoke.json`; rendered screenshots `output/playwright/rendered-release-smoke-2026-06-30T06-01-47-236Z`; measurement smoke `output/measurement/smoke-2026-06-30T06-01-57-788Z`.
- Remaining gates: optional Wayne live visual sign-off, optional full security/browser-parity follow-up, and optional final-docs-only source push if Wayne wants this 2026-06-30 evidence update committed.
- Current 8-file staging-manifest smoke passed: `output/release-staging-manifest/smoke-2026-06-28T20-26-30-213Z/release-staging-manifest-smoke.json`.
- Current release inventory passed: `output/release-inventory/inventory-2026-06-28T20-26-30-267Z/release-candidate-inventory.json`; dirtyCount 8, zero secret findings, GLB externalUriCount 0.
- Fast local checks passed: `node --check script.js` and `git diff --check`.
- Targeted local checks passed: `npm run qa:visual-polish` (`output/visual-polish/smoke-2026-06-28T19-56-47-953Z/visual-polish-smoke.json`), `npm run qa:responsive` (`output/responsive-route/smoke-2026-06-28T19-56-47-953Z/responsive-route-smoke.json`), `npm run qa:keyboard` (`output/playwright/keyboard-release-smoke-2026-06-28T19-57-55-348Z`), `npm run qa:product-design` (`output/product-design-acceptance/smoke-2026-06-28T19-57-55-348Z/product-design-acceptance-smoke.json`), `npm run qa:release-inventory` (`output/release-inventory/inventory-2026-06-28T19-57-55-809Z/release-candidate-inventory.json`; dirtyCount 6; zero secret findings), and `npm run qa:release-staging-manifest` (`output/release-staging-manifest/smoke-2026-06-28T19-57-56-843Z/release-staging-manifest-smoke.json`; 5 modified tracked, 1 untracked candidate, 6 staging paths).
- Rendered screenshot evidence for the reset candidate: `output/playwright/rendered-release-smoke-2026-06-28T19-56-47-965Z`.
- Refreshed rendered screenshot evidence after the Focus fix: `output/playwright/rendered-release-smoke-2026-06-28T20-07-57-608Z`.
- Full local release gate passed all 37 steps after the Focus fix: `output/release-local-gate/gate-2026-06-28T20-09-23-996Z/release-local-gate.json`.
- Measurement evidence from the full local gate: `output/measurement/evidence-2026-06-28T20-11-11-946Z`; Lighthouse performance 100, accessibility 100, best practices 100, SEO 100, LCP about 1.80 seconds, CLS 0.
- Earlier residual advisories at that pre-preview checkpoint: production and preview deploys were not then approved; current production deploy `6a435aeccc48bb00085e7eb4` supersedes that approval state. Production dependency footprint remains zero vulnerabilities; dev/release tooling audit remains 17 moderate advisories; Chromium browser coverage passed while Firefox/WebKit binaries are unavailable locally and warning-only.
- Local rendered screenshot pack against production: `output/playwright/rendered-release-smoke-2026-06-28T19-38-52-319Z`.
- Cleanup validation passed: `node --check script.js`, `git diff --check`, `npm run qa:release-inventory` with artifact `output/release-inventory/inventory-2026-06-28T19-35-20-902Z/release-candidate-inventory.json`, and `npm run qa:release-staging-manifest` with artifact `output/release-staging-manifest/smoke-2026-06-28T19-35-36-069Z/release-staging-manifest-smoke.json`.
- Live baseline screenshots captured in `output/product-design-audit/motion-tranche-2026-06-28-live`.
- Implementation currently touches `script.js`, `styles.css`, and this tracker.
- Current dirty scope matches `docs/codex/RELEASE_STAGING_MANIFEST.md`: `docs/codex/RELEASE_STAGING_MANIFEST.md`, `docs/codex/TRACKER.md`, `script.js`, and `styles.css`.
- `node --check script.js` passed.
- `git diff --check` passed.
- `npm run qa:visual-polish` passed with artifact `output/visual-polish/smoke-2026-06-28T18-06-42-338Z/visual-polish-smoke.json`.
- `npm run qa:responsive` passed with artifact `output/responsive-route/smoke-2026-06-28T18-06-42-620Z/responsive-route-smoke.json`.
- `npm run qa:keyboard` passed with artifact `output/playwright/keyboard-release-smoke-2026-06-28T18-06-43-163Z`.
- `npm run qa:rendered` passed with artifact `output/playwright/rendered-release-smoke-2026-06-28T18-07-26-612Z`; updated homepage screenshot reviewed locally.
- `npm run qa:product-design` passed with artifact `output/product-design-acceptance/smoke-2026-06-28T18-07-27-149Z/product-design-acceptance-smoke.json`.
- `npm run qa:release-staging-manifest` passed with artifact `output/release-staging-manifest/smoke-2026-06-28T18-09-42-986Z/release-staging-manifest-smoke.json`; counts: 4 modified tracked files, 0 untracked candidate files, 4 staging command paths.
- `npm run qa:release-inventory` passed with artifact `output/release-inventory/inventory-2026-06-28T18-09-42-986Z/release-candidate-inventory.json`; dirtyCount 4, zero secret findings, GLB externalUriCount 0.
- `npm run qa:release:local` passed all 37 steps with artifact `output/release-local-gate/gate-2026-06-28T18-10-09-591Z/release-local-gate.json`.
- Measurement evidence from the full gate: `output/measurement/evidence-2026-06-28T18-12-05-225Z`; Lighthouse performance 100, accessibility 100, best practices 100, SEO 100, LCP about 1.65 seconds, CLS 0.
- Browser coverage advisory remains warning-only for Firefox/WebKit binaries unavailable locally; Chromium passed.
- Wayne-approved explicit-path staged files: `docs/codex/RELEASE_STAGING_MANIFEST.md`, `docs/codex/TRACKER.md`, `script.js`, and `styles.css`.
- Pre-commit `git diff --cached --check` passed.
- Pre-commit `npm run qa:release:local` passed all 37 steps with artifact `output/release-local-gate/gate-2026-06-28T19-14-54-021Z/release-local-gate.json`.
- Pre-commit measurement evidence: `output/measurement/evidence-2026-06-28T19-16-55-575Z`; Lighthouse performance 98, accessibility 100, best practices 100, SEO 100, LCP about 1.73 seconds, CLS 0.
- Local commit created: `763c8d8` (`Add proof motion polish`); branch is ahead of `origin/codex/docs-evidence-preservation-no-production-deploy` and has not been pushed.
- Netlify preview deploy succeeded from a clean archive of commit `763c8d8`: deploy `6a41739b29f5ccb3751611f1`, preview URL `https://proof-motion-polish--robson-ai-website.netlify.app`, logs `https://app.netlify.com/projects/robson-ai-website/deploys/6a41739b29f5ccb3751611f1`.
- Preview release gate passed: `QA_BASE_URL="https://proof-motion-polish--robson-ai-website.netlify.app" npm run qa:release:preview`; artifact `output/release-preview-gate/gate-2026-06-28T19-19-11-713Z/release-preview-gate.json`; result pass, 14 steps.
- Preview gate evidence includes release inventory `output/release-inventory/inventory-2026-06-28T19-19-11-843Z/release-candidate-inventory.json` with dirtyCount 0 and zero secret findings; deployed headers `output/release-headers/smoke-2026-06-28T19-19-18-844Z/release-header-smoke.json`; BuildScan viewer `output/buildscan-viewer/smoke-2026-06-28T19-19-19-213Z`; semantic SEO `output/semantic-seo/smoke-2026-06-28T19-19-38-356Z/semantic-seo-smoke.json`; product/design `output/product-design-acceptance/smoke-2026-06-28T19-19-52-037Z/product-design-acceptance-smoke.json`; responsive `output/responsive-route/smoke-2026-06-28T19-20-01-778Z/responsive-route-smoke.json`; visual polish `output/visual-polish/smoke-2026-06-28T19-20-36-358Z/visual-polish-smoke.json`; rendered screenshots `output/playwright/rendered-release-smoke-2026-06-28T19-21-16-388Z`; and measurement smoke `output/measurement/smoke-2026-06-28T19-21-30-032Z`.
- Residual advisories for the rejected proof-motion preview: it was never approved for production and must not be published. Branch push/GitHub PR are still not approved. Production dependency footprint remains zero vulnerabilities; dev/release tooling audit remains 17 moderate advisories; Chromium browser coverage passed while Firefox/WebKit are unavailable locally and warning-only.

Rejected preview record:

- Preview URL: `https://proof-motion-polish--robson-ai-website.netlify.app`.
- Reason rejected: Wayne said the website is ugly and instructed Codex to restart from the original goal and not publish the current motion preview.
- Handling: do not publish this preview. Preserve the evidence as a learning artifact only; do not treat it as product approval.

## 3. Completed Source-Control Alignment Tranche

Tranche name: `source-control-alignment-for-live-visual-release`
Status: completed; branch and `main` pushed to `39c5bf5`, Netlify production deploy `6a415b5db31442000737c37c` passed the production gate
Started: 2026-06-28 18:32 BST
Completed: 2026-06-28 18:39 BST

Scope:

- Commit the five docs-only closeout files that record the live visual-refinement release.
- Push branch `codex/docs-evidence-preservation-no-production-deploy`.
- Fast-forward `main` without force so GitHub source control includes local website commit `8e32faf` and the docs-only closeout.
- Wait for the GitHub-triggered Netlify production deploy.
- Rerun `QA_PRODUCTION_URL=https://robsonai.co.uk CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production`.
- Update tracker with the final source-control and production verification evidence.

Out of scope:

- Further website design/code changes, DNS/domain changes, analytics, forms/customer data, external messages, BuildScan app implementation, Apple signing/submission, payments, destructive git actions, force-push, or new feature work.

Permission envelope:

- Wayne approved option `1` after the production closeout recommendation to align source control.
- Approval covers a docs-only closeout commit, branch push, non-force fast-forward push to `main`, waiting for Netlify, and production verification.
- Approval does not cover force-push, rollback, another design tranche, analytics/forms, DNS changes, or external messages.

Done criteria:

- Dirty docs-only closeout files are committed.
- Branch push succeeds.
- `main` push succeeds as a normal fast-forward.
- Netlify production deploy from GitHub is ready.
- Production release gate passes.
- Tracker is updated with evidence and the next recommended action.

Validation evidence:

- Docs-only closeout commit: `39c5bf5` (`Document visual release production alignment`).
- Branch push succeeded: `origin/codex/docs-evidence-preservation-no-production-deploy` now points at `39c5bf5`.
- `main` push succeeded as a non-force fast-forward: `origin/main` moved from `568259e` to `39c5bf5`.
- Local refs aligned: `HEAD`, `main`, and `origin/main` all resolve to `39c5bf5`.
- Netlify GitHub-triggered production deploy is ready: `6a415b5db31442000737c37c`, commit `39c5bf5560aa392f3615b69975ddcf390d1ad92b`, published `2026-06-28T17:35:39.514Z`, URL `https://robsonai.co.uk`, unique deploy URL `https://6a415b5db31442000737c37c--robson-ai-website.netlify.app`.
- Production release gate passed after the GitHub/main deploy: `QA_PRODUCTION_URL=https://robsonai.co.uk CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production`; artifact `output/release-production-gate/gate-2026-06-28T17-36-03-324Z/release-preview-gate.json`; result pass, 14 steps.
- Production gate evidence includes release inventory `output/release-inventory/inventory-2026-06-28T17-36-03-458Z/release-candidate-inventory.json` with dirtyCount 0 and zero secret findings; BuildScan viewer `output/buildscan-viewer/smoke-2026-06-28T17-36-11-003Z`; semantic SEO `output/semantic-seo/smoke-2026-06-28T17-36-22-947Z/semantic-seo-smoke.json`; product/design `output/product-design-acceptance/smoke-2026-06-28T17-36-31-728Z/product-design-acceptance-smoke.json`; responsive `output/responsive-route/smoke-2026-06-28T17-36-38-613Z/responsive-route-smoke.json`; visual polish `output/visual-polish/smoke-2026-06-28T17-36-59-862Z/visual-polish-smoke.json`; rendered screenshots `output/playwright/rendered-release-smoke-2026-06-28T17-37-33-205Z`; measurement `output/measurement/smoke-2026-06-28T17-37-44-358Z`.
- Rollback candidate before the GitHub/main alignment deploy: Netlify production deploy `6a415725a6f69e52078a74df`.
- Residual advisories: production dependency footprint remains zero vulnerabilities; dev/release tooling audit remains 17 moderate advisories; Chromium browser coverage passed while Firefox/WebKit are unavailable locally and warning-only; this final tracker evidence update is local-only unless Wayne approves another docs-only commit.

## 4. Completed Visual Release Tranche

Tranche name: `website-visual-refinement-proof-surface-polish`
Status: completed and production-gated; Netlify production deploy `6a415725a6f69e52078a74df` is live on `https://robsonai.co.uk`
Started: 2026-06-28 16:00 BST
Completed: 2026-06-28 18:20 BST

Scope:

- Remove the awkward floating homepage hero logo that continued to look wrong.
- Improve the sections Wayne flagged as too word-heavy: Finder, Property operations, Method, Credibility, and Contact.
- Keep the website professional, evidence-led, brand-consistent, responsive, accessible, and cautious about current product maturity.
- Preserve the current email-first/no-form privacy posture and the BuildScan opt-in 3D model proof.
- Update QA scripts and Codex documentation so the candidate, evidence paths, approval checklist, and tracker all describe the same 10-file approved release.

Out of scope:

- Branch push, GitHub PR, DNS/domain changes, GA4, forms/customer data, external messages, BuildScan app implementation, Apple signing/submission, payments, destructive git actions, browser installation for strict Firefox/WebKit coverage, dependency remediation, or full redesign beyond Wayne's flagged sections.

Permission envelope:

- Wayne has approved safe local work for the single "best website it can be" goal.
- Wayne approved option `1` on 2026-06-28 17:50 BST: stage only the manifest-approved files, create a local commit, create a Netlify preview deploy, and run the deployed preview gate.
- Wayne then approved option `1` for production publish after the preview passed. Approval covered the production archive deploy and production verification gate.
- Wayne has not approved branch push, GitHub PR, DNS/domain changes, analytics, forms, external messages, or further scope changes for this visual-refinement candidate.

Done criteria for this tranche:

- Local candidate is served for Wayne review.
- Dirty scope matches `docs/codex/RELEASE_STAGING_MANIFEST.md`.
- `npm run qa:release:local` passes for the current 10-file candidate.
- Manifest-approved files are committed locally.
- Netlify preview deploy is created and `QA_BASE_URL=<preview> npm run qa:release:preview` passes.
- Production deploy is approved, executed, and `QA_PRODUCTION_URL=https://robsonai.co.uk CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production` passes.
- Wayne receives a numbered next action with option `1` recommended.

Validation evidence:

- Current local URL: `http://127.0.0.1:8130/`.
- `npm run qa:release:local` passed all 37 steps for the 10-file candidate; artifact `output/release-local-gate/gate-2026-06-28T16-26-01-341Z/release-local-gate.json`.
- Release inventory inside the gate: `output/release-inventory/inventory-2026-06-28T16-26-10-244Z/release-candidate-inventory.json`; dirtyCount 10, 79 scanned files, zero secret findings, GLB externalUriCount 0.
- Staging manifest smoke inside the gate: `output/release-staging-manifest/smoke-2026-06-28T16-26-10-596Z/release-staging-manifest-smoke.json`; 10 modified tracked files, 0 untracked candidate files, 10 staging command paths.
- Rendered screenshots: `output/playwright/rendered-release-smoke-2026-06-28T16-27-41-612Z`.
- Measurement evidence: `output/measurement/evidence-2026-06-28T16-28-27-073Z`; Lighthouse performance 99, accessibility 100, best practices 100, SEO 100, LCP about 1.65 seconds, CLS 0.
- Product/design smoke: `output/product-design-acceptance/smoke-2026-06-28T16-26-39-864Z/product-design-acceptance-smoke.json`.
- Visual polish smoke: `output/visual-polish/smoke-2026-06-28T16-27-09-578Z/visual-polish-smoke.json`.
- Responsive route smoke: `output/responsive-route/smoke-2026-06-28T16-26-46-604Z/responsive-route-smoke.json`.
- Keyboard smoke: `output/playwright/keyboard-release-smoke-2026-06-28T16-26-24-503Z`.
- Browser coverage advisory remains warning-only for Firefox/WebKit binaries unavailable locally; Chromium passed.
- After the documentation evidence paths were updated, `git diff --check`, `npm run qa:release-staging-manifest`, `npm run qa:release-inventory`, and `curl -I http://127.0.0.1:8130/` passed; the local review URL returned HTTP 200.
- Follow-up local-review health check confirmed `http://127.0.0.1:8130/` still returns HTTP 200 from the repo shell and is served by local Python process `71014`. The MCP Browser tool could not access that loopback URL from its own environment, so use the user's in-app browser or normal local browser for review.
- Follow-up targeted QA also passed: `npm run qa:visual-polish` with artifact `output/visual-polish/smoke-2026-06-28T16-42-32-331Z/visual-polish-smoke.json`, `npm run qa:responsive` with artifact `output/responsive-route/smoke-2026-06-28T16-42-32-331Z/responsive-route-smoke.json`, and `git diff --check`.
- Commit `8e32faf` (`Polish website proof surfaces`) was created locally on branch `codex/docs-evidence-preservation-no-production-deploy`. The branch has not been pushed.
- Netlify preview deploy passed: `https://visual-proof-surface-polish--robson-ai-website.netlify.app`; preview gate artifact `output/release-preview-gate/gate-2026-06-28T17-00-40-765Z/release-preview-gate.json`; result pass, 14 steps.
- Wayne approved option `1` for production publish after the preview passed.
- Production CLI/archive deploy succeeded from clean commit `8e32faf`: Netlify deploy `6a415725a6f69e52078a74df`, production URL `https://robsonai.co.uk`, deploy URL `https://6a415725a6f69e52078a74df--robson-ai-website.netlify.app`, logs `https://app.netlify.com/projects/robson-ai-website/deploys/6a415725a6f69e52078a74df`.
- Production release gate passed: `QA_PRODUCTION_URL=https://robsonai.co.uk CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production`; artifact `output/release-production-gate/gate-2026-06-28T17-18-10-065Z/release-preview-gate.json`; result pass, 14 steps.
- Production gate evidence includes release inventory `output/release-inventory/inventory-2026-06-28T17-18-10-215Z/release-candidate-inventory.json` with dirtyCount 0, zero secret findings, and GLB externalUriCount 0; BuildScan viewer `output/buildscan-viewer/smoke-2026-06-28T17-18-17-990Z`; semantic SEO `output/semantic-seo/smoke-2026-06-28T17-18-29-999Z/semantic-seo-smoke.json`; product/design `output/product-design-acceptance/smoke-2026-06-28T17-18-38-578Z/product-design-acceptance-smoke.json`; responsive `output/responsive-route/smoke-2026-06-28T17-18-45-615Z/responsive-route-smoke.json`; visual polish `output/visual-polish/smoke-2026-06-28T17-19-06-367Z/visual-polish-smoke.json`; rendered screenshots `output/playwright/rendered-release-smoke-2026-06-28T17-19-35-062Z`; measurement `output/measurement/smoke-2026-06-28T17-19-46-704Z`.
- Post-publish docs-only closeout validation passed: `git diff --check`, `curl -I https://robsonai.co.uk/` returned HTTP 200, and `npm run qa:release-inventory` wrote `output/release-inventory/inventory-2026-06-28T17-27-46-173Z/release-candidate-inventory.json` with dirtyCount 5 and zero secret findings.
- Rollback candidate before this publish: Netlify production deploy `6a4110fe34f4b66db778e4bb`.
- Residual advisories: branch/main are not pushed to match the archive production deploy; production dependency footprint remains zero vulnerabilities; dev/release tooling audit remains 17 moderate advisories; Chromium browser coverage passed while Firefox/WebKit are unavailable locally and warning-only.

## 5. Previous Major Release Tranche

Tranche name: `buildscan-interactive-preview-release-candidate`
Status: completed and production-gated; branch `codex/buildscan-interactive-preview-release-candidate` and `main` are pushed at `568259e`; follow-on local commit `5994de8` was deployed by approved CLI production deploy; Netlify production deploy `6a4110fe34f4b66db778e4bb` is live on `https://robsonai.co.uk`; production release gate passed
Started: 2026-06-27 23:25 BST
Completed: 2026-06-28 10:50 BST

Scope:

- Act on Wayne's approved option `1` for the preview-only candidate.
- Create `codex/buildscan-interactive-preview-release-candidate`.
- Stage only the 62 files listed in `docs/codex/RELEASE_STAGING_MANIFEST.md`.
- Create a commit for the staged release candidate.
- Push the branch.
- Create a Netlify deploy-preview only.
- Run `QA_BASE_URL=<preview> npm run qa:release:preview`.
- Review the deployed preview in Browser on desktop and mobile.
- Return to Wayne before any production decision.
- After Wayne's explicit option `1` approval, commit the docs closeout, push the candidate branch, fast-forward `main`, push `main`, wait for Netlify production, verify the current production deploy, and run the production release gate.

Out of scope:

- Domain/DNS, GA4, forms/customer data, external messages, BuildScan app implementation, Apple signing/submission, payments, destructive git actions, browser installation for strict Firefox/WebKit coverage, `npm audit fix --force`, analytics enablement, repo restructure to `dist`/`public`, full Codex Security scan completion, or broad redesign.

Permission envelope:

- Wayne approved the preview-only tranche by selecting option `1`.
- Wayne later approved `production-publish-from-validated-preview-and-docs-closeout` by selecting option `1`.
- Allowed inside this tranche: branch creation, manifest-only staging, commit, branch push, Netlify deploy-preview, deployed preview QA, and Browser review.
- Wayne must explicitly approve any further production deploy, production verification against the live production URL, domain/DNS, analytics enablement, forms, external communications, browser installation, force dependency remediation, or destructive git actions.

Done criteria:

- Staged set contains exactly the 62 manifest-approved files.
- `git diff --cached --check` passes.
- `npm run qa:release:local` passes after staging.
- Commit is created from the staged set.
- Branch is pushed.
- Netlify deploy-preview is created.
- `QA_BASE_URL=<preview> npm run qa:release:preview` passes or any blocker is reported with evidence.
- Browser review covers deployed homepage desktop/mobile, Building Analyst, Who it fits, Privacy, 404, and holding fallback.
- Wayne receives production URL, evidence, risks, rollback path, publish-readiness at 100%, and next recommended decision.

Validation evidence:

- Pre-staging `npm run qa:release-staging-manifest` passed with artifact `output/release-staging-manifest/smoke-2026-06-27T22-25-34-604Z/release-staging-manifest-smoke.json`: 25 modified tracked files, 37 untracked candidate files, 62 total, and 62 staging command paths.
- Pre-staging `npm run qa:release-inventory` passed with artifact `output/release-inventory/inventory-2026-06-27T22-25-34-604Z/release-candidate-inventory.json`: 62 dirty files, 72 scanned files, zero secret findings, and zero GLB external URI references.
- `git diff --cached --check` passed after staging.
- `scripts/release-staging-manifest-smoke.mjs` was tightened so it validates the same manifest boundary before and after staging by classifying candidate paths against `HEAD`.
- Post-staging `npm run qa:release-staging-manifest` passed with artifact `output/release-staging-manifest/smoke-2026-06-27T22-27-33-674Z/release-staging-manifest-smoke.json`: 25 modified tracked files, 37 untracked candidate files, 62 total, and 62 staging command paths.
- `npm run qa:release:local` passed all 37 steps with artifact `output/release-local-gate/gate-2026-06-27T22-37-04-773Z/release-local-gate.json`.
- Dependency advisory inside the full local gate wrote `output/dependency-audit/summary-2026-06-27T22-37-11-587Z/dependency-audit-summary.json`: production zero, dev tooling 17 moderate, 0 high, 0 critical.
- BuildScan viewer smoke inside the full local gate wrote `output/buildscan-viewer/smoke-2026-06-27T22-37-13-342Z`.
- Rendered release smoke inside the full local gate wrote `output/playwright/rendered-release-smoke-2026-06-27T22-38-23-090Z`.
- Browser coverage advisory inside the full local gate wrote `output/browser-coverage/smoke-2026-06-27T22-38-15-359Z/browser-coverage-smoke.json`: Chromium passed; Firefox/WebKit unavailable locally and warning-only.
- Measurement evidence artifact `output/measurement/evidence-2026-06-27T22-38-51-062Z` reports Lighthouse performance 100, accessibility 97, best practices 100, SEO 100, LCP about 1.73 seconds, and CLS 0.
- Commit `a15f7128c3b38ecfd39bf999f87d2b28aff2e21a` (`Prepare BuildScan interactive preview candidate`) was created and pushed to `origin/codex/buildscan-interactive-preview-release-candidate`.
- Initial local-root `npx netlify deploy` failed during upload with Netlify API `422 no records matched` after trying to hash local `node_modules`/`output`; no production deploy occurred.
- Clean committed-file draft deploy from a temporary `git archive` directory succeeded: `https://6a4053b5f59c19174d72f4f4--robson-ai-website.netlify.app`.
- `QA_BASE_URL=https://6a4053b5f59c19174d72f4f4--robson-ai-website.netlify.app npm run qa:release:preview` passed release inventory, dependency advisory, security source posture, and deployed headers/source-path-deny checks, then failed at deployed BuildScan viewer.
- Preview diagnostic found CSP blocked `WebAssembly.instantiate()` because `script-src` lacked `wasm-unsafe-eval`, and blocked GLB texture blob loads because `connect-src`/`img-src` lacked `blob:`.
- Follow-up commit `6b6102f` added `.netlifyignore` for CLI draft deploy hygiene, updated CSP to include `script-src 'wasm-unsafe-eval'`, `img-src blob:`, `connect-src blob:`, and `worker-src 'self' blob:`, and updated header smoke expectations.
- Follow-up commit `b6ab8b3` hardened the deployed rendered smoke so Netlify's deployed privacy-link normalization is accepted without weakening the local route checks.
- Final deployed preview gate passed: `QA_BASE_URL=https://6a4055bfcca135298c4b453a--robson-ai-website.netlify.app npm run qa:release:preview` passed all 14 steps with artifact `output/release-preview-gate/gate-2026-06-27T22-59-30-083Z/release-preview-gate.json`.
- Fresh deployed preview gate refresh passed on 2026-06-28: `QA_BASE_URL=https://6a4055bfcca135298c4b453a--robson-ai-website.netlify.app npm run qa:release:preview` passed all 14 steps with artifact `output/release-preview-gate/gate-2026-06-27T23-54-42-307Z/release-preview-gate.json`. It refreshed release inventory, dependency advisory, release security, deployed headers/source-path denies, BuildScan viewer, keyboard, semantic SEO, product/design, responsive route, visual-polish, browser coverage advisory, rendered, measurement and diff-whitespace evidence. Chromium passed; Firefox/WebKit remain unavailable locally and warning-only.
- Final preview evidence included source-path deny checks, BuildScan viewer loaded-state checks, rendered route smoke, responsive route smoke, keyboard smoke, product/design acceptance smoke, semantic SEO smoke, visual-polish smoke, measurement smoke, and browser coverage advisory. Chromium passed; Firefox/WebKit local binaries remain unavailable and warning-only.
- Browser/reference review for Luffu, Steno, and Unfold confirmed the motion-polish idea should be a separate tranche after this preview candidate: use product proof, scroll choreography, pointer depth, tactile product panels, and motion that clarifies the service; do not add it to the current candidate before production unless Wayne explicitly chooses to invalidate and rerun release evidence. Reference screenshots/summary captured locally at `output/reference-motion/2026-06-27T23-33-19-849Z`.
- Pre-production security posture refresh on 2026-06-28 passed: `npm run qa:release-security` wrote `output/release-security/smoke-2026-06-27T23-21-07-139Z/release-security-smoke.json`; `npm run qa:release-headers` wrote `output/release-headers/smoke-2026-06-27T23-21-07-141Z/release-header-smoke.json`; `npm run qa:dependency-audit:strict` wrote `output/dependency-audit/summary-2026-06-27T23-21-07-138Z/dependency-audit-summary.json` with production footprint zero, 17 moderate dev-tooling findings, and no blockers; `QA_PRODUCTION_URL=https://robsonai.co.uk npm run qa:release:production` failed closed because production confirmation was intentionally not supplied.
- Pre-release read-only Netlify deploy discovery on 2026-06-28 identified the then-current live production deploy `6a3d75a7658e0400089157a2`, context `production`, branch `main`, commit `4a3f1fa8f7b1f885c37937056e2a029d6043501b`, published `2026-06-25T18:38:43.783Z`; this became the rollback candidate for the approved production release.
- Goal completion audit added in `docs/codex/GOAL_COMPLETION_AUDIT.md`; it now records the production release as complete after Wayne approval, production deploy, and production release gate verification.
- Production release runbook added in `docs/codex/PRODUCTION_RELEASE_RUNBOOK.md`: recommended path is GitHub/main-triggered Netlify production deploy so source control and production stay aligned; CLI production deploy remains a fallback only with explicit approval.
- Wayne approved `production-publish-from-validated-preview-and-docs-closeout`.
- Docs closeout commit `568259e6c5c745b4aa7668ee5048ea41319dba7a` (`Document production release closeout`) was created, pushed to `origin/codex/buildscan-interactive-preview-release-candidate`, fast-forwarded into `main`, and pushed to `origin/main`.
- Read-only Netlify deploy check after the push confirmed current production deploy `6a40ed1d6073460008b7d3b7`, state `ready`, context `production`, branch `main`, commit `568259e6c5c745b4aa7668ee5048ea41319dba7a`, published `2026-06-28T09:45:15.914Z`, public URL `https://robsonai.co.uk`.
- Previous rollback candidate before this release: Netlify production deploy `6a3d75a7658e0400089157a2` from commit `4a3f1fa8f7b1f885c37937056e2a029d6043501b`.
- Production release gate passed: `QA_PRODUCTION_URL=https://robsonai.co.uk CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production`; artifact `output/release-production-gate/gate-2026-06-28T09-46-09-182Z/release-preview-gate.json`; result pass, 14 steps.
- Production release inventory artifact `output/release-inventory/inventory-2026-06-28T09-46-09-283Z/release-candidate-inventory.json`: dirtyCount 0, 76 scanned files, zero secret findings, GLB externalUriCount 0.
- Production dependency advisory artifact `output/dependency-audit/summary-2026-06-28T09-46-09-491Z/dependency-audit-summary.json`: production vulnerabilities 0; dev/release tooling 17 moderate, 0 high, 0 critical.
- Production BuildScan viewer artifact `output/buildscan-viewer/smoke-2026-06-28T09-46-17-781Z` passed direct and embedded viewer checks.
- Production measurement smoke artifact `output/measurement/smoke-2026-06-28T09-47-29-656Z` passed.
- Browser coverage advisory artifact `output/browser-coverage/smoke-2026-06-28T09-47-13-177Z/browser-coverage-smoke.json`: Chromium passed; Firefox/WebKit unavailable locally and warning-only.
- Local docs were then updated with this production evidence; do not commit/push those final evidence-only edits without Wayne approval because another `main` push would create another production deploy.
- Post-launch observation check completed read-only on 2026-06-28 11:30 BST; production remained on Netlify deploy `6a40ed1d6073460008b7d3b7` from commit `568259e6c5c745b4aa7668ee5048ea41319dba7a`.
- Post-launch headers/source-deny check passed: `QA_BASE_URL=https://robsonai.co.uk npm run qa:release-headers:preview`; artifact `output/release-headers/smoke-2026-06-28T10-27-25-060Z/release-header-smoke.json`.
- Post-launch SEO/social metadata check passed: `QA_BASE_URL=https://robsonai.co.uk npm run qa:semantic-seo:preview`; artifact `output/semantic-seo/smoke-2026-06-28T10-27-33-517Z/semantic-seo-smoke.json`.
- Post-launch measurement check passed: `QA_BASE_URL=https://robsonai.co.uk npm run qa:measurement:preview`; artifact `output/measurement/smoke-2026-06-28T10-27-33-522Z`.
- Post-launch rendered production smoke passed: `QA_BASE_URL=https://robsonai.co.uk npm run qa:rendered:preview`; artifact `output/playwright/rendered-release-smoke-2026-06-28T10-27-48-468Z`.
- Post-launch BuildScan viewer smoke passed: `QA_BASE_URL=https://robsonai.co.uk npm run qa:buildscan-viewer:preview`; artifact `output/buildscan-viewer/smoke-2026-06-28T10-28-08-942Z`.
- Post-launch responsive route smoke passed after using the production QA override expected by the production gate: `ROBSON_ALLOW_PRODUCTION_QA=true QA_BASE_URL=https://robsonai.co.uk npm run qa:responsive:preview`; artifact `output/responsive-route/smoke-2026-06-28T10-28-43-063Z/responsive-route-smoke.json`, 21 checks.
- Post-launch visual-polish smoke passed: `ROBSON_ALLOW_PRODUCTION_QA=true QA_BASE_URL=https://robsonai.co.uk npm run qa:visual-polish:preview`; artifact `output/visual-polish/smoke-2026-06-28T10-29-14-071Z/visual-polish-smoke.json`.
- Post-launch product/design smoke passed: `ROBSON_ALLOW_PRODUCTION_QA=true QA_BASE_URL=https://robsonai.co.uk npm run qa:product-design:preview`; artifact `output/product-design-acceptance/smoke-2026-06-28T10-29-14-071Z/product-design-acceptance-smoke.json`.
- Post-launch keyboard smoke passed: `ROBSON_ALLOW_PRODUCTION_QA=true QA_BASE_URL=https://robsonai.co.uk npm run qa:keyboard:preview`; artifact `output/playwright/keyboard-release-smoke-2026-06-28T10-29-14-071Z`.
- Post-launch browser coverage advisory completed with warning only: `ROBSON_ALLOW_PRODUCTION_QA=true QA_BASE_URL=https://robsonai.co.uk npm run qa:browser-coverage:preview`; artifact `output/browser-coverage/smoke-2026-06-28T10-29-37-496Z/browser-coverage-smoke.json`; Chromium passed, Firefox/WebKit unavailable locally.
- Live metadata/cache spot check passed: `/`, `/building-analyst.html`, `/who-its-for.html`, and `/privacy.html` returned `200` with canonical URLs, `index, follow`, OG image, and `summary_large_image`; `/robots.txt` returned `200`, references sitemap, and disallows `holding.html`; `/sitemap.xml` returned `200` with 4 public locs; OG image, BuildScan GLB, `styles.css`, and `script.js` returned `200` with expected content types/cache headers.
- Docs evidence preservation branch created locally on 2026-06-28: `codex/docs-evidence-preservation-no-production-deploy`. Purpose: preserve final release and post-launch observation evidence without pushing `main`, creating a PR, or triggering a Netlify production deploy.
- Final website approval handoff added in `docs/codex/FINAL_WEBSITE_APPROVAL_HANDOFF.md`. It presents the full website links, approval questions, product-direction criteria, evidence, residual risks, and next-phase refinement candidates. No deploy is approved by this handoff.
- Next-phase refinement plan added in `docs/codex/NEXT_PHASE_REFINEMENT_PLAN.md`. It identifies candidate refinements for BuildScan interaction polish, property operations narrative clarity, SEO/analytics configuration, accessibility/performance watch, and claim alignment. It is planning-only and does not approve code changes, preview deploys, production deploys, analytics, forms, or new public-model exposure.
- Website approval review checklist added in `docs/codex/WEBSITE_APPROVAL_REVIEW_CHECKLIST.md`. It gives Wayne a page-by-page desktop/mobile review sequence, approval/flag criteria, latest evidence paths, known residuals, and the exact approval response. It does not rerun production verification or approve any deploy.
- Hero logo aspect and anchor fix candidate completed locally after Wayne flagged the floating homepage icon as misshaped and then drifting too far right. CSS now keeps `.home-hero-mark` square, renders the image at its intrinsic 1:1 ratio, constrains `.home-hero-stage` to the product-board width, and forces the stage grid to one full-width track so the icon anchors to the board rather than the viewport edge. `scripts/visual-polish-smoke.mjs` now guards mobile, tablet, and desktop homepage hero logo behaviour and accepts intentionally hidden mobile hero-stage state. `scripts/release-staging-manifest-smoke.mjs` now accepts empty candidate sections so zero untracked files can be represented explicitly. Latest targeted validation passed: `node --check scripts/visual-polish-smoke.mjs`, `node --check scripts/release-staging-manifest-smoke.mjs`, `git diff --check`, and `npm run qa:visual-polish` with artifact `output/visual-polish/smoke-2026-06-28T11-33-56-092Z/visual-polish-smoke.json`; tablet metrics now show stage and board both 592px wide with the icon anchored 16px inside the board's right edge. This remains local only: no commit, push, preview deploy, production verification, or production deploy is approved.
- Wayne approved option `1`, `commit-and-preview-hero-logo-aspect-and-anchor-fix`, on 2026-06-28 12:45 BST. Approval covered staging the five manifest files, creating a local commit, creating a Netlify preview, and running preview QA. It did not approve branch push, production verification with confirmation, or production deploy.
- Commit `5994de8` (`Fix homepage hero logo anchor`) was created locally on branch `codex/docs-evidence-preservation-no-production-deploy`; no branch push was performed.
- Netlify preview deploy `6a410bf148c463609a4de45b` was created from a clean `git archive HEAD` directory at `https://hero-logo-aspect-anchor-fix--robson-ai-website.netlify.app`. Deployed preview gate passed all 14 steps: `QA_BASE_URL=https://hero-logo-aspect-anchor-fix--robson-ai-website.netlify.app npm run qa:release:preview`; artifact `output/release-preview-gate/gate-2026-06-28T12-03-28-138Z/release-preview-gate.json`.
- Wayne approved option `1`, `production-publish-hero-logo-aspect-and-anchor-fix`, after reviewing the passed preview. Approval covered the live Netlify production deploy and production verification gate only; it did not approve branch push, DNS changes, analytics, forms, or further production deploys.
- Production CLI deploy succeeded from a clean `git archive HEAD` directory: Netlify deploy `6a4110fe34f4b66db778e4bb`, production URL `https://robsonai.co.uk`, deploy URL `https://6a4110fe34f4b66db778e4bb--robson-ai-website.netlify.app`, logs `https://app.netlify.com/projects/robson-ai-website/deploys/6a4110fe34f4b66db778e4bb`.
- Production release gate passed: `QA_PRODUCTION_URL=https://robsonai.co.uk CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production`; artifact `output/release-production-gate/gate-2026-06-28T12-18-19-900Z/release-preview-gate.json`; result pass, 14 steps.
- Production evidence from the gate: release inventory `output/release-inventory/inventory-2026-06-28T12-18-20-027Z/release-candidate-inventory.json` with dirtyCount 0, 79 scanned files, zero secret findings, and GLB externalUriCount 0; visual polish `output/visual-polish/smoke-2026-06-28T12-19-16-916Z/visual-polish-smoke.json`; rendered screenshots `output/playwright/rendered-release-smoke-2026-06-28T12-19-45-394Z`; measurement smoke `output/measurement/smoke-2026-06-28T12-19-56-164Z`; BuildScan viewer `output/buildscan-viewer/smoke-2026-06-28T12-18-28-654Z`; semantic SEO `output/semantic-seo/smoke-2026-06-28T12-18-40-596Z/semantic-seo-smoke.json`; product/design `output/product-design-acceptance/smoke-2026-06-28T12-18-49-095Z/product-design-acceptance-smoke.json`; responsive `output/responsive-route/smoke-2026-06-28T12-18-56-116Z/responsive-route-smoke.json`; keyboard `output/playwright/keyboard-release-smoke-2026-06-28T12-18-35-864Z`; browser coverage advisory `output/browser-coverage/smoke-2026-06-28T12-19-37-587Z/browser-coverage-smoke.json`.
- Residual advisories after the hero-logo production fix: production dependency footprint remains zero vulnerabilities; dev/release tooling audit remains at 17 moderate advisories; Chromium browser coverage passed while Firefox/WebKit are unavailable locally and warning-only.
- Wayne then flagged six live visual review comments on 2026-06-28: the homepage hero floating logo still looked wrong, and the Finder, Property operations, Method, Credibility, and Contact sections felt word-heavy and not aesthetically pleasing.
- Local-only visual refinement candidate added in response. `index.html` removes the awkward floating hero logo, tightens visible copy in the flagged sections, and keeps cautious product/privacy/integration boundaries. `styles.css` adds a final visual refinement layer that turns Finder, Operations, Method, Credibility, and Contact into tighter product/proof surfaces with stronger composition, less pale text-panel weight, better action grouping, responsive layouts, and restrained proof-surface depth. `script.js` extends the existing reduced-motion-aware pointer-depth behaviour to the newly refined proof surfaces. `scripts/visual-polish-smoke.mjs` now allows the better design decision where no decorative hero logo is rendered. `scripts/product-design-acceptance-smoke.mjs` now checks the current truthful BuildScan state: the opt-in 3D model preview is live with static fallback language. `docs/codex/RELEASE_STAGING_MANIFEST.md` now describes the current 10-file visual-refinement candidate rather than the previous hero-logo bugfix.
- Local validation for this candidate passed: `node --check script.js`, `node --check scripts/visual-polish-smoke.mjs`, `node --check scripts/product-design-acceptance-smoke.mjs`, `npx --no-install html-validate index.html`, `git diff --check`, `npm run qa:product-design` with artifact `output/product-design-acceptance/smoke-2026-06-28T16-12-19-636Z/product-design-acceptance-smoke.json`, `npm run qa:visual-polish` with artifact `output/visual-polish/smoke-2026-06-28T16-12-49-729Z/visual-polish-smoke.json`, `npm run qa:responsive` with artifact `output/responsive-route/smoke-2026-06-28T16-12-26-256Z/responsive-route-smoke.json`, `npm run qa:keyboard` with artifact `output/playwright/keyboard-release-smoke-2026-06-28T16-12-05-148Z`, and `npm run qa:rendered` with screenshots in `output/playwright/rendered-release-smoke-2026-06-28T16-13-23-954Z`.
- Full local release gate passed after the manifest was updated to match the 10-file candidate: `npm run qa:release:local`; artifact `output/release-local-gate/gate-2026-06-28T16-26-01-341Z/release-local-gate.json`; result pass, 37 steps. The gate included release inventory `output/release-inventory/inventory-2026-06-28T16-26-10-244Z/release-candidate-inventory.json` with dirtyCount 10, zero secret findings, and GLB externalUriCount 0; staging manifest `output/release-staging-manifest/smoke-2026-06-28T16-26-10-596Z/release-staging-manifest-smoke.json`; rendered screenshots `output/playwright/rendered-release-smoke-2026-06-28T16-27-41-612Z`; measurement evidence `output/measurement/evidence-2026-06-28T16-28-27-073Z`; Lighthouse performance 99, accessibility 100, best practices 100, SEO 100, LCP about 1.65 seconds, CLS 0.
- `docs/codex/GOAL_COMPLETION_AUDIT.md` now records the approved visual-refinement goal as complete after local, preview, and production gates passed.
- `docs/codex/FINAL_WEBSITE_APPROVAL_HANDOFF.md` and `docs/codex/WEBSITE_APPROVAL_REVIEW_CHECKLIST.md` now point at the live production release `https://robsonai.co.uk` and the final evidence paths.
- Current state of this visual refinement: live production deploy `6a415725a6f69e52078a74df` is production-gated. The remaining approval-gated gap is source-control alignment because the live deploy was created from local commit `8e32faf` by clean archive deploy and the branch has not been pushed.

Previous tranche:

- Tranche name: `dependency-audit-remediation-dev-tooling`
- Status: completed locally, staged in the preview candidate
- Started: 2026-06-27 23:04 BST
- Completed: 2026-06-27 23:14 BST
- Scope: approved non-force dependency remediation for dev/release tooling; no `npm audit fix --force`; production-footprint audit stayed clean; high/critical dev-tooling findings were removed; residual Lighthouse/Sentry/OpenTelemetry moderate findings were recorded.
- Evidence: `npm audit fix` ran without `--force`; `npm audit --omit=dev --audit-level=moderate --json` reports zero production-footprint vulnerabilities; `npm audit --audit-level=moderate --json` reports 17 moderate, 0 high, 0 critical findings; `npm run qa:dependency-audit:strict` passed without blockers with artifact `output/dependency-audit/summary-2026-06-27T22-21-18-488Z/dependency-audit-summary.json`.

Previous tranche:

- Tranche name: `browser-coverage-advisory-gate`
- Status: completed locally, uncommitted
- Scope: added browser coverage advisory and preview safety coverage; fixed the standalone BuildScan viewer landmark/H1 semantics; wired browser coverage into local and deployed-preview release gates.
- Evidence: browser coverage inside the latest full local gate passed with warning artifact `output/browser-coverage/smoke-2026-06-27T22-12-15-054Z/browser-coverage-smoke.json`: Chromium passed; Firefox/WebKit were unavailable locally.

Previous tranche:

- Tranche name: `visual-polish-smoke-gate`
- Status: completed locally, uncommitted
- Scope: added visual-polish smoke and preview safety coverage to guard against the white-box-behind-text regression; wired it into local and deployed-preview release gates.
- Evidence: visual-polish smoke inside the latest full local gate passed with artifact `output/visual-polish/smoke-2026-06-27T21-59-53-780Z/visual-polish-smoke.json`.

Follow-on tranche:

- Tranche name: `production-verification-gate-baseline`
- Status: completed locally, uncommitted
- Started: 2026-06-27 21:12 BST
- Completed: 2026-06-27 21:24 BST
- Scope: add a read-only `npm run qa:release:production` command for post-deploy production verification; require production URL, explicit confirmation, and exact production host; keep preview rejecting production by default; add production-gate syntax coverage to `npm run qa:release:local`; refresh release docs and staging manifest to the 59-file candidate.
- Evidence: production gate syntax passed; missing production URL failed closed; production URL without confirmation failed closed; non-production host with confirmation was rejected; preview gate still rejected production; local release gate passed all 33 steps with artifact `output/release-local-gate/gate-2026-06-27T20-22-27-286Z/release-local-gate.json`.

Follow-on tranche:

- Tranche name: `preview-gate-manifest-check-separation`
- Status: completed locally, uncommitted
- Started: 2026-06-27 21:06 BST
- Completed: 2026-06-27 21:08 BST
- Scope: correct the release-gate separation so the staging-manifest drift smoke remains a local/pre-commit gate only; remove the dirty-tree staging-manifest smoke from `npm run qa:release:preview`; keep deployed-preview validation focused on release inventory, dependency advisory, source posture, deployed headers, deployed BuildScan, keyboard, SEO, product/design, responsive, rendered and measurement checks.
- Evidence: `node --check scripts/release-preview-gate.mjs` passed; missing `QA_BASE_URL` failed closed; `QA_BASE_URL=https://robsonai.co.uk npm run qa:release:preview` rejected production by default; `npm run qa:release-staging-manifest` passed locally for the pre-commit dirty candidate.

Follow-on tranche:

- Tranche name: `release-staging-manifest-drift-gate`
- Status: completed locally, uncommitted
- Started: 2026-06-27 20:56 BST
- Completed: 2026-06-27 21:03 BST
- Scope: add a release staging-manifest drift smoke so the manifest counts, modified/untracked lists, and explicit `git add -- <paths>` command must match the current dirty release candidate; wire the staging-manifest smoke into the local release gate; update the staging manifest to 58 dirty candidate files; run a fresh full local release gate.
- Evidence: `npm run qa:release-staging-manifest` passed; `npm run qa:release:local` passed all 32 steps with artifact `output/release-local-gate/gate-2026-06-27T20-00-40-672Z/release-local-gate.json`; release inventory artifact `output/release-inventory/inventory-2026-06-27T20-00-46-851Z/release-candidate-inventory.json`; staging-manifest artifact `output/release-staging-manifest/smoke-2026-06-27T20-00-47-050Z/release-staging-manifest-smoke.json`; dependency advisory artifact `output/dependency-audit/summary-2026-06-27T20-00-47-177Z/dependency-audit-summary.json`; measurement evidence artifact `output/measurement/evidence-2026-06-27T20-02-20-588Z`.

Follow-on tranche:

- Tranche name: `preview-release-gate-dependency-audit-integration`
- Status: completed locally, uncommitted
- Started: 2026-06-27 20:51 BST
- Completed: 2026-06-27 20:53 BST
- Scope: wire the read-only dependency audit advisory into `npm run qa:release:preview`; keep preview fail-closed behaviour; ensure future Netlify deploy-preview validation records dependency posture before deployed browser/header/measurement checks.
- Evidence: `node --check scripts/release-preview-gate.mjs` passed; `env -u QA_BASE_URL npm run qa:release:preview` failed closed; `QA_BASE_URL=https://robsonai.co.uk npm run qa:release:preview` rejected production by default; `npm run qa:release-inventory` passed with artifact `output/release-inventory/inventory-2026-06-27T19-53-40-209Z/release-candidate-inventory.json`.

Follow-on tranche:

- Tranche name: `local-release-gate-dependency-audit-integration`
- Status: completed locally, uncommitted
- Started: 2026-06-27 20:44 BST
- Completed: 2026-06-27 20:47 BST
- Scope: wire the read-only dependency audit summary into `npm run qa:release:local`; keep the advisory non-blocking for known dev/release tooling findings while still blocking if production-footprint audit or JSON parsing fails; run a fresh full local release gate.
- Evidence:
- `node --check scripts/release-local-gate.mjs` passed.
- `node --check scripts/dependency-audit-summary.mjs` passed.
- `npm run qa:release:local` passed all 30 steps; artifact `output/release-local-gate/gate-2026-06-27T19-45-38-653Z/release-local-gate.json`.
- The full gate included dependency audit advisory artifact `output/dependency-audit/summary-2026-06-27T19-45-45-161Z/dependency-audit-summary.json`, warning only for known dev/release tooling findings.
- The full gate included release inventory artifact `output/release-inventory/inventory-2026-06-27T19-45-44-971Z/release-candidate-inventory.json`, 57 dirty candidate files, 68 scanned files, zero secret findings, and zero GLB external URI references.
- The full gate included measurement evidence artifact `output/measurement/evidence-2026-06-27T19-46-51-284Z`, Lighthouse performance 100, accessibility 97, best practices 100, SEO 100, LCP about 1.73 seconds, CLS 0.

Follow-on tranche:

- Tranche name: `dependency-audit-summary-command`
- Status: completed locally, uncommitted
- Started: 2026-06-27 20:34 BST
- Completed: 2026-06-27 20:38 BST
- Scope: add a read-only dependency audit summary command that repeats production-footprint audit, full dev/release tooling audit, and non-force dry-run evidence without changing packages; add advisory and strict package scripts; update release docs and staging manifest so the 57-file local candidate and dependency evidence are explicit.
- Evidence: `node --check scripts/dependency-audit-summary.mjs` passed; `npm run qa:dependency-audit` exited 0 with warning status; `npm run qa:dependency-audit:strict` exited 1 as expected because the 7 high dev/release tooling findings remain; `npm run qa:release-inventory` passed on the 57-file candidate.

Follow-on tranche:

- Tranche name: `fresh-full-local-release-gate-refresh`
- Status: completed locally, uncommitted
- Started: 2026-06-27 20:26 BST
- Completed: 2026-06-27 20:29 BST
- Scope: run the full local release gate against the current 56-file local candidate; refresh evidence references in the publish-readiness audit, release packet, website excellence programme, and tracker; keep the dependency remediation recommendation and all release actions approval-gated.
- Evidence: `npm run qa:release:local` passed all 28 steps with summary `output/release-local-gate/gate-2026-06-27T19-26-47-425Z/release-local-gate.json`; measurement evidence `output/measurement/evidence-2026-06-27T19-27-57-399Z`; release inventory `output/release-inventory/inventory-2026-06-27T19-31-28-084Z/release-candidate-inventory.json`.

Follow-on tranche:

- Tranche name: `publish-readiness-audit-checklist`
- Status: completed locally, uncommitted
- Started: 2026-06-27 20:21 BST
- Completed: 2026-06-27 20:25 BST
- Scope: create a single publish-readiness audit checklist that maps the current local candidate to the production publish gates; show which gates are passed locally, which require preview evidence, and which require Wayne approval; link the audit from the release packet, staging manifest, tracker, and website excellence programme; align the staging manifest with the new audit document and expected dirty candidate count.
- Evidence: `docs/codex/PUBLISH_READINESS_AUDIT.md` created; release inventory passed with 56 dirty candidate files, zero secret findings, and zero GLB external URI references.

Follow-on tranche:

- Tranche name: `dependency-audit-readonly-refresh`
- Status: completed locally, uncommitted
- Started: 2026-06-27 20:16 BST
- Completed: 2026-06-27 20:18 BST
- Scope: refresh read-only dependency audit evidence for the current release candidate; confirm production-footprint audit status separately from dev/release-tooling audit status; re-run non-force `npm audit fix --dry-run` evidence without changing dependencies; update release docs with current audit artifact references and keep dependency remediation approval-gated.
- Evidence: production-footprint audit stayed clean; full dev/release tooling audit stayed at 27 findings, 20 moderate and 7 high; non-force dry-run would change 14 packages, add 2, remove 1, and still report 27 findings.

Follow-on tranche:

- Tranche name: `responsive-route-matrix-smoke-gate`
- Status: completed locally, uncommitted
- Started: 2026-06-27 19:58 BST
- Completed: 2026-06-27 20:09 BST
- Scope: add a repeatable responsive route matrix smoke covering the public release routes across mobile, tablet, and desktop viewports; add `qa:responsive` and `qa:responsive:preview`; wire the responsive smoke into `qa:release:local` and `qa:release:preview`; check route-specific product copy, HTTP 200 status, horizontal overflow, obvious nowrap text overflow, primary control sizing, console/page errors, and failed requests; align BuildScan viewer route checks with the embedded viewer architecture; update release docs so the 55-file dirty candidate scope and latest evidence are explicit.
- Evidence: `node --check scripts/responsive-route-smoke.mjs`, `npm run qa:responsive`, preview fail-closed checks, and full `npm run qa:release:local` passed all 28 steps with summary `output/release-local-gate/gate-2026-06-27T19-06-27-197Z/release-local-gate.json`.

Follow-on tranche:

- Tranche name: `product-design-acceptance-smoke-gate`
- Status: completed locally, uncommitted
- Started: 2026-06-27 19:47 BST
- Completed: 2026-06-27 19:54 BST
- Scope: add a repeatable product/design acceptance smoke so the release gate can check first-viewport clarity, proof status, release-stage claims, audience paths, CTA hierarchy, trust proof, and motion/interaction language; add `qa:product-design` and `qa:product-design:preview`; wire the smoke into `qa:release:local` and `qa:release:preview`; update release docs so the new script and dirty candidate scope are explicit.
- Evidence: `node --check scripts/product-design-acceptance-smoke.mjs`, `npm run qa:product-design`, preview fail-closed checks, and full `npm run qa:release:local` passed all 26 steps with summary `output/release-local-gate/gate-2026-06-27T18-52-01-542Z/release-local-gate.json`.

Follow-on tranche:

- Tranche name: `product-design-acceptance-gate-evidence`
- Status: completed locally, uncommitted
- Started: 2026-06-27 19:42 BST
- Completed: 2026-06-27 19:45 BST
- Scope: run a fresh local rendered smoke pass, inspect rendered evidence for the product/design acceptance gate, and record the acceptance-gate result in the release packet and tracker.
- Evidence: `npm run qa:rendered` passed with artifact `output/playwright/rendered-release-smoke-2026-06-27T18-42-33-157Z`; `git diff --check` and `npm run qa:release-inventory` passed.

Follow-on tranche:

- Tranche name: `dependency-audit-remediation-plan`
- Status: completed locally, uncommitted
- Started: 2026-06-27 19:38 BST
- Completed: 2026-06-27 19:45 BST
- Scope: turn the npm dev/release tooling audit warning into a precise approval-gated remediation plan, map current findings to direct tooling dependencies and transitive dependency chains, run read-only/dry-run checks, clarify that dependency remediation approval does not approve GLB preview exposure or release actions, and keep `npm audit fix --force` separately approval-gated.
- Evidence: release packet documents the non-force path, force dry-run risk, temp-copy targeted QA-tool update result, and residual Lighthouse/Sentry/OpenTelemetry moderate risk.

Follow-on tranche:

- Tranche name: `website-excellence-goal-baseline`
- Status: completed locally, uncommitted
- Started: 2026-06-27 19:30 BST
- Completed: 2026-06-27 19:31 BST
- Scope: confirm the active Codex goal, update `docs/codex/WEBSITE_EXCELLENCE_PROGRAMME.md` so the goal is concrete, benchmarked, measurable and tied to current product truth, use relevant skills/agents/expert references, add the product/design acceptance gate, and align the release packet so dependency remediation is the recommended next approval before preview.
- Evidence: product/design and technical/release agent findings were folded into acceptance criteria; `git diff --check` and `npm run qa:release-inventory` passed.

Follow-on tranche:

- Tranche name: `dependency-audit-risk-capture`
- Status: completed locally, uncommitted
- Started: 2026-06-27 19:20 BST
- Completed: 2026-06-27 19:23 BST
- Scope: run read-only npm dependency audit checks for the current release candidate, distinguish production website footprint risk from dev/release tooling risk, record the finding, and keep dependency remediation approval-gated.
- Evidence: `npm audit --omit=dev --audit-level=moderate` confirmed zero production-footprint vulnerabilities; `npm audit --audit-level=moderate` reported 27 dev/release-tooling findings, including 7 high; `git diff --check` passed after documentation updates.

Follow-on tranche:

- Tranche name: `buildscan-interactive-preview-release-candidate`
- Status: waiting for Wayne approval
- Scope after approval: commit the scoped local candidate, push a branch, create a Netlify deploy-preview only, run `QA_BASE_URL=<preview> npm run qa:release:preview` including the dependency audit advisory, review in Browser, and return to Wayne before any production decision.

Follow-on tranche:

- Tranche name: `preview-release-gate-runner`
- Status: completed locally, uncommitted
- Started: 2026-06-27 16:42 BST
- Completed: 2026-06-27 16:48 BST
- Scope: add a single repeatable deployed-preview release gate; fail closed without explicit `QA_BASE_URL`; reject production by default; run inventory, security source posture, deployed headers, deployed BuildScan, deployed rendered smoke, deployed measurement smoke, and whitespace checks.
- Evidence: `node --check scripts/release-preview-gate.mjs` passed; missing `QA_BASE_URL` failed closed; `QA_BASE_URL=https://robsonai.co.uk npm run qa:release:preview` rejected production by default.

Follow-on tranche:

- Tranche name: `local-release-gate-runner`
- Status: completed locally, uncommitted
- Started: 2026-06-27 16:34 BST
- Completed: 2026-06-27 16:38 BST
- Scope: add a single repeatable local release gate before commit/preview approval; run syntax, HTML, Netlify build, preview-auth, security, headers, inventory, BuildScan viewer, rendered smoke, measurement smoke/evidence, and whitespace checks.
- Evidence: `npm run qa:release:local` passed with summary `output/release-local-gate/gate-2026-06-27T15-47-18-420Z/release-local-gate.json`.

Follow-on tranche:

- Tranche name: `local-security-privacy-release-gate`
- Status: completed locally, uncommitted
- Started: 2026-06-27 16:17 BST
- Completed: 2026-06-27 16:30 BST
- Scope: add a bounded local security/privacy smoke gate, HSTS header baseline, static HTML privacy checks, consent/default-off checks, no-cookie/high-risk DOM checks, viewer noindex, and vendor license evidence.
- Evidence: `npm run qa:release-security` passed with artifact `output/release-security/smoke-2026-06-27T15-47-24-771Z/release-security-smoke.json`.

Follow-on tranche:

- Tranche name: `release-candidate-inventory-governance`
- Status: completed locally, uncommitted
- Started: 2026-06-27 13:32 BST
- Completed: 2026-06-27 13:40 BST
- Scope: add a repeatable release-candidate inventory gate before commit/preview approval; check expected dirty files, file-size budgets, BuildScan GLB binary glTF 2.0 structure/no external URI references, and secret-like patterns.
- Evidence: `npm run qa:release-inventory` passed with artifact `output/release-inventory/inventory-2026-06-27T15-47-25-008Z/release-candidate-inventory.json`.

Follow-on tranche:

- Tranche name: `rendered-release-smoke-baseline`
- Status: completed locally, uncommitted
- Started: 2026-06-27 13:18 BST
- Completed: 2026-06-27 13:31 BST
- Scope: add a repeatable rendered desktop/mobile release smoke gate with screenshots and JSON evidence; cover homepage, mobile consent first load, mobile BuildScan opt-in control reachability, desktop BuildScan interactive loaded state, Building Analyst proof, Who it fits, Privacy, 404, and holding fallback; make rendered preview mode fail closed without explicit `QA_BASE_URL`; improve `404.html` from a bare page to a noindex branded fallback with favicon, fonts and stylesheet references.
- Evidence: `npm run qa:rendered` passed with artifact `output/playwright/rendered-release-smoke-2026-06-27T12-31-03-337Z`; preview mode failed closed without `QA_BASE_URL`; static checks passed.

Follow-on tranche:

- Tranche name: `release-header-and-preview-gate-hardening`
- Status: completed locally, uncommitted
- Started: 2026-06-27 13:03 BST
- Completed: 2026-06-27 13:17 BST
- Scope: add a repeatable Netlify release-header smoke gate covering CSP, frame policy, referrer policy, permissions policy, cache rules, GLB MIME, source-path deny redirects, `/preview.html` redirect behaviour, and `holding.html` noindex fallback; make deployed-preview commands fail closed when `QA_BASE_URL` or `--base-url` is missing; extend BuildScan viewer smoke so the same direct and embedded model-ready checks can run against a deployed Netlify preview; reduce the risk of repo-root publishing by adding Netlify deny redirects for source/docs/config paths while leaving a later `dist`/`public` publish migration as a larger hardening tranche.
- Evidence: `npm run qa:release-headers`, `npm run qa:preview-auth`, HTML validation including `404.html`, `git diff --check`, `npx --no-install netlify build`, `npm run qa:measurement:local`, `npm run qa:buildscan-viewer`, and `npm run qa:measurement:evidence` passed. Preview-mode commands failed closed without `QA_BASE_URL`.

Follow-on tranche:

- Tranche name: `icon-payload-and-performance-budget-gate`
- Status: completed locally, uncommitted
- Started: 2026-06-27 12:48 BST
- Completed: 2026-06-27 12:54 BST
- Scope: remove the remaining measured first-load waste from the full-size Robson AI icon being loaded as a favicon/apple-touch asset; add small 32px and 180px PNG icon variants while preserving the original full-size PNG for canonical/source/structured-data/fallback use; point public HTML pages and the BuildScan viewer at the small icon variants; add the small icon routes to measurement smoke coverage; enforce Lighthouse release budgets inside `npm run qa:measurement:evidence` so future regressions fail locally.
- Out of scope: production deploy, commit, push, PR, Netlify preview deploy, domain/DNS, GA4, forms/customer data, external messages, BuildScan app implementation, raw GLB publication, Apple signing/submission, payments, destructive git actions, analytics enablement, or broad redesign.
- Evidence: browser resource evidence proved the homepage no longer requests the full-size `robson-ai-icon-v3.png` during first load; local smoke verified the new icon routes return `200`; full local evidence passed with enforced budgets.

Follow-on tranche:

- Tranche name: `mobile-consent-and-release-qa-polish`
- Status: completed locally, uncommitted
- Started: 2026-06-27 12:39 BST
- Completed: 2026-06-27 12:45 BST
- Scope: resolve the mobile consent-banner obstruction found during rendered BuildScan/performance QA; keep consent default-off, explicit accept/decline, privacy link access, and no live GA4 enablement unchanged; make the mobile consent UI a compact release-grade bar with all three actions visible, smaller footprint, safe-area handling, and no collision with the BuildScan interactive load button.
- Out of scope: production deploy, commit, push, PR, Netlify preview deploy, domain/DNS, GA4, forms/customer data, external messages, BuildScan app implementation, raw GLB publication, Apple signing/submission, payments, destructive git actions, analytics enablement, or broad redesign.
- Evidence: mobile probes, static validation, local smoke, BuildScan viewer smoke, and full evidence suite passed. Artifacts: `output/playwright/mobile-consent-polish-probe-2026-06-27T11-42-11-615Z`, `output/buildscan-viewer/smoke-2026-06-27T11-43-34-163Z`, and `output/measurement/evidence-2026-06-27T11-43-52-280Z`.

Follow-on tranche:

- Tranche name: `performance-budget-recovery`
- Status: completed locally, uncommitted
- Started: 2026-06-27 12:16 BST
- Completed: 2026-06-27 12:34 BST
- Scope: recover the local Lighthouse/Core Web Vitals performance gate before asking Wayne to publish or preview the larger website candidate; replace oversized first-load Robson AI logo/hero mark and BuildScan screenshot delivery with small rendered WebP variants while preserving original PNG assets for favicon, social, and fallback use; add local static-server compression; remove homepage hero copy from reveal-motion targeting; keep the interactive BuildScan GLB opt-in and fallback-first.
- Out of scope: production deploy, commit, push, PR, Netlify preview deploy, domain/DNS, GA4, forms/customer data, external messages, BuildScan app implementation, raw GLB publication, Apple signing/submission, payments, destructive git actions, or broad redesign.
- Evidence: Lighthouse median improved from performance 72 / LCP about 10.95s to performance 90 / LCP about 3.60s. Artifact: `output/measurement/evidence-2026-06-27T11-32-06-016Z`; rendered QA artifact: `output/playwright/performance-budget-recovery-2026-06-27T11-33-32-682Z`.

Follow-on tranche:

- Tranche name: `property-operations-proof-section`
- Status: completed locally, uncommitted
- Started: 2026-06-27 12:02 BST
- Completed: 2026-06-27 12:11 BST
- Scope: add a release-safe homepage property-operations proof section so WAIS/property operations has concrete public depth without claiming live integrations; show an illustrative operating queue with issue context, owner, due signal, blocker, evidence trail and next action; add explicit live-system/customer-data boundary language; add homepage navigation and `who-its-for.html` route links to the new proof section.
- Out of scope: production deploy, commit, push, PR, Netlify preview deploy, domain/DNS, GA4, forms/customer data, external messages, BuildScan app implementation, raw GLB publication, Apple signing/submission, payments, destructive git actions, or broad website redesign.
- Evidence: static validation, local measurement smoke, and rendered desktop/mobile Browser QA passed. Artifact: `output/playwright/property-operations-proof-rerun-2026-06-27T11-10-47-016Z`.

Follow-on tranche:

- Tranche name: `website-rg5-local-qa-runner-parity`
- Status: completed
- Started: 2026-06-01 06:03 Europe/London
- Completed: 2026-06-01 06:08 Europe/London
- Scope: re-run local measurement smoke/evidence in an environment that allows loopback bind and attach fresh proof artifacts to this tracker.

Follow-on tranche:

- Tranche name: `website-post-wwdc-positioning-refresh`
- Status: completed
- Started: 2026-06-08 20:30 Europe/London
- Completed: 2026-06-08 21:37 Europe/London
- Scope: update website narrative and launch-readiness copy after WWDC26 so Building Analyst is framed as a professional surveying/reporting product with cautious Apple-native intelligence direction where relevant. No production deploy, no app implementation, no vendor-provider strategy changes.

Follow-on tranche:

- Tranche name: `website-agent-polish-preview-refresh`
- Status: completed
- Started: 2026-06-18 18:40 Europe/London
- Completed: 2026-06-18 19:53 Europe/London
- Scope: use an independent read-only agent review plus Browser/Netlify tooling to tighten post-WWDC copy/docs, refresh the non-production Netlify launch-readiness preview, and validate the live preview. No production deploy, no domain/DNS changes, no app implementation.

Follow-on tranche:

- Tranche name: `website-launch-readiness-pr`
- Status: completed
- Started: 2026-06-18 19:54 Europe/London
- Completed: 2026-06-18 19:58 Europe/London
- Scope: open a draft GitHub PR for the validated launch-readiness branch so the work enters formal review without merging or production deployment.

Follow-on tranche:

- Tranche name: `website-launch-readiness-pr-ready`
- Status: completed
- Started: 2026-06-18 20:51 Europe/London
- Completed: 2026-06-18 20:51 Europe/London
- Scope: mark the already validated launch-readiness PR ready for review after Wayne approval, verify the PR check, and keep merge/production launch approval separate.

Follow-on tranche:

- Tranche name: `website-merge-readiness-gate`
- Status: completed
- Started: 2026-06-18 21:39 Europe/London
- Completed: 2026-06-18 21:39 Europe/London
- Scope: assess Wayne's option 1 response as merge-readiness approval without production launch approval, verify PR #2 checks, and hold the merge because this Netlify project deploys from `main`.

Follow-on tranche:

- Tranche name: `production-launch-preflight`
- Status: completed - no-go
- Started: 2026-06-18 21:42 Europe/London
- Completed: 2026-06-18 21:46 Europe/London
- Scope: run final QA against PR #2 deploy-preview, confirm production is unchanged, check launch routes/SEO/privacy/measurement, and return a production launch go/no-go without merging or deploying.

Follow-on tranche:

- Tranche name: `who-it-fits-contrast-fix-and-retest`
- Status: completed
- Started: 2026-06-20 10:02 Europe/London
- Completed: 2026-06-20 10:08 Europe/London
- Scope: fix the `who-its-for.html` dark hero/card contrast blocker, retest local desktop/mobile rendering, push the fix to PR #2, validate the Netlify deploy-preview, and confirm production remains unchanged. No merge or production deploy.

Follow-on tranche:

- Tranche name: `production-launch-merge-and-verify`
- Status: completed
- Started: 2026-06-20 14:29 Europe/London
- Completed: 2026-06-20 14:32 Europe/London
- Scope: merge PR #2 to `main`, verify Netlify production deploy, validate live routes/metadata/consent smoke, confirm visual contrast on live production, record rollback target, and update tracker. No domain/DNS, GA4, forms, customer data, or external messaging changes.

Follow-on tranche:

- Tranche name: `website-post-launch-observation-pass`
- Status: completed
- Started: 2026-06-20 18:10 Europe/London
- Completed: 2026-06-20 18:12 Europe/London
- Scope: observed the live production website after launch by checking Netlify deploy health, route availability, metadata/social preview assets, consent/contact behaviour, crawlability, visible desktop/mobile rendering, and obvious stale-public-copy risk. No deploys, DNS, GA4, forms, rollback, customer data, or external messaging changes.

Follow-on tranche:

- Tranche name: `website-professional-interactive-polish`
- Status: completed locally
- Started: 2026-06-20 20:27 Europe/London
- Completed: 2026-06-20 20:44 Europe/London
- Scope: reviewed the current public website and added scoped professional interactive sections where useful, focused on visitor workflow exploration and Building Analyst assessment framing. Added accessible tab behaviour, compact mobile navigation, and consent-banner landmark fixes. No production deploy, DNS, GA4, forms, customer data, external messages, or rollback.

Follow-on tranche:

- Tranche name: `website-professional-redesign-local`
- Status: completed locally
- Started: 2026-06-21 09:10 BST
- Completed: 2026-06-21 09:44 BST
- Scope: broadened the local website design pass using the Robson icon and colour palette as fixed brand anchors while improving layout, typography, component geometry, hero hierarchy, mobile behaviour, consent banner compactness, and local-font performance. Preserved existing product facts, measurement hooks, contact paths, preview auth assumptions, and public-claim caution. No production deploy, DNS, GA4, forms, customer data, external messages, commits, pushes, or rollback.

Follow-on tranche:

- Tranche name: `website-professional-redesign-production-deploy`
- Status: completed
- Started: 2026-06-21 10:02 BST
- Completed: 2026-06-21 10:08 BST
- Scope: verified the local redesigned pages and links, committed the scoped redesign work to `main`, pushed to GitHub, verified Netlify production deploy, and validated the live public website. No DNS changes, GA4 enablement, forms, customer data, external messages, destructive git actions, or rollback.

Follow-on tranche:

- Tranche name: `website-modern-motion-graphics-polish`
- Status: completed
- Started: 2026-06-21 10:14 BST
- Completed: 2026-06-21 10:24 BST
- Scope: researched current professional motion/microinteraction patterns, added scoped cursor-responsive graphical polish and panel motion to the existing public website, validated locally and live, committed to `main`, pushed to GitHub, and verified the Netlify production deploy. The implementation is dependency-free, accessible, reduced-motion aware, and inside the existing Robson AI product narrative. No DNS changes, GA4 enablement, forms, customer data, external messages, destructive git actions, or product-claim expansion.

Follow-on tranche:

- Tranche name: `website-basic-mistakes-and-conversion-polish`
- Status: completed and deployed
- Started: 2026-06-21 10:31 BST
- Completed: 2026-06-21 11:38 BST
- Scope: performed a blunt product/design/conversion audit using current local evidence and the attached screenshot, fixed obvious local website mistakes and contact-path friction, created a concise team recommendation memo, validated locally, committed to `main`, pushed to GitHub, and verified the Netlify production deploy. No DNS changes, GA4 enablement, customer data, external messages, destructive git actions, or product-claim expansion.

Follow-on tranche:

- Tranche name: `project-list-analysis-dashboard`
- Status: completed locally
- Started: 2026-06-21 10:32 BST
- Completed: 2026-06-21 10:41 BST
- Scope: analysed `/Users/wayne/Downloads/Master Project list by Wayne Robson.xlsx`, inferred the project naming convention, excluded budget/non-project rows from default project views, and created a local-only dynamic chart dashboard under ignored `output/` artifacts. No production deploy, public website route, customer-system integration, commits, pushes, or external messages.

Follow-on tranche:

- Tranche name: `website-professional-design-signature-pass`
- Status: completed and deployed
- Started: 2026-06-21 11:21 BST
- Completed: 2026-06-21 11:38 BST
- Scope: reviewed current modern SaaS/B2B/motion/typography references, then added a professional design signature pass using the bundled Fraunces display font, editorial section-label rails, sharper product/card accents, and non-clipped mobile navigation. Preserved current product claims, Robson AI brand assets, analytics contracts, contact path, reduced-motion assumptions, and no-form privacy stance. Committed to `main`, pushed to GitHub, and verified the Netlify production deploy. No DNS changes, GA4 enablement, customer data, external messages, destructive git actions, or rollback.

Follow-on tranche:

- Tranche name: `website-conversion-design-signature-production-deploy`
- Status: completed
- Started: 2026-06-21 11:32 BST
- Completed: 2026-06-21 11:38 BST
- Scope: after Wayne approval, committed the conversion/contact/design-signature polish bundle, pushed `main`, verified Netlify production deploy `6a37be74ace5eb0008361ef4` for commit `6e275f9e3e4f56a293c2bd5401a8af55f13f2dc1`, and ran live measurement plus rendered Browser QA. No DNS changes, GA4 enablement, forms, customer data, external messages, destructive git actions, or rollback.

Follow-on tranche:

- Tranche name: `building-analyst-proof-assets-and-workflow-story`
- Status: completed and deployed
- Started: 2026-06-21 12:03 BST
- Completed: 2026-06-21 14:07 BST
- Scope: add a release-safe Building Analyst product-proof/workflow-story section without using old Building Analyst screenshots, remove Wayne-deleted legacy assets from Git, repoint public icon links to the remaining `assets/robson-ai-icon-v3.png`, preserve cautious Apple-native and release-stage claims, update navigation where useful, run validation, commit, push `main`, and verify Netlify production publish.
- Out of scope: iOS/macOS/Android implementation, App Store claims, new product claims, customer data, form handling, GA4 enablement, Netlify/DNS changes, or rollback.

Follow-on tranche:

- Tranche name: `design-system-consolidation-audit`
- Status: completed locally
- Started: 2026-06-21 17:40 BST
- Completed: 2026-06-21 17:40 BST
- Scope: inspect the standalone `/Users/wayne/Documents/RobsonAI/Robson AI Design System` folder, compare it with the current public website styling/copy and the Building Analyst Apple `App/DesignSystem`, document canonical source-of-truth boundaries, and recommend the next cleanup tranche.
- Output: `docs/codex/DESIGN_SYSTEM_CONSOLIDATION_AUDIT.md`.
- Out of scope: live website restyling, production deploys, design-system source-folder edits, app implementation, provider/payment/auth decisions, asset publishing, or brand redesign.

Follow-on tranche:

- Tranche name: `design-system-source-of-truth-cleanup`
- Status: completed locally, uncommitted
- Started: 2026-06-21 21:20 BST
- Completed: 2026-06-21 21:20 BST
- Scope: initialise the standalone Robson AI Design System folder as a local Git workspace, add source-of-truth/changelog/governance files, update stale provider/payment/auth references into legacy-context or guardrail language, and keep product/website/Apple platform boundaries explicit.
- Output: `/Users/wayne/Documents/RobsonAI/Robson AI Design System/SOURCE_OF_TRUTH.md`, `/Users/wayne/Documents/RobsonAI/Robson AI Design System/CHANGELOG.md`, `/Users/wayne/Documents/RobsonAI/Robson AI Design System/.gitignore`, plus targeted updates to `readme.md`, `SKILL.md`, `ui_kits/building-analyst/`, `components/core/Button.prompt.md`, and `tokens/fonts.css`.
- Out of scope: design-system commit, remote creation, package publication, live website restyling, production deploys, app implementation, payment/auth/provider changes, or asset publishing.

Follow-on tranche:

- Tranche name: `website-buildscan-model-view-proof`
- Status: completed locally, uncommitted
- Started: 2026-06-24 19:24 BST
- Completed: 2026-06-24 19:41 BST
- Scope: add a release-safe BuildScan visual to the Robson AI Solutions homepage using a representative model-view panel and synthetic geometry, update the Drone-to-3D wording to explicitly include BuildScan, add a navigation/workflow path to the new section, and clear nearby semantic HTML validator issues discovered during QA.
- Output: updated `index.html` and `styles.css` with a responsive BuildScan model-view section and cautious public-facing copy; bumped the shared stylesheet cache key to `20260624a`; changed shared consent banners from generic `div role="region"` markup to native `section` markup; removed invalid `aria-label` usage from proof-board containers.
- Out of scope: BuildScan app implementation, real customer/site capture imagery, claims that BuildScan is a finished public product, old/deleted screenshots, production deploys, commits, pushes, Netlify/DNS changes, customer data, or external messages.

Follow-on tranche:

- Tranche name: `website-buildscan-ludgershall-glb-shot`
- Status: approved for public use and production deployment
- Started: 2026-06-24 19:45 BST
- Completed: 2026-06-24 20:03 BST
- Scope: open RobsonAI BuildScan locally, load the latest Ludgershall 2026-06-02 GLB, rotate/render it to a clearer isometric model-view capture, add the resulting PNG to the website, and replace the synthetic BuildScan homepage illustration with the real GLB capture.
- Output: `assets/showcase/buildscan-ludgershall-model-view.png`; updated homepage BuildScan section copy and app-frame visual to use the captured GLB model view.
- Evidence: BuildScan app-window capture proved the real Ludgershall GLB loaded in RobsonAI BuildScan; clean headed-Chromium render from BuildScan's generated viewer HTML captured `output/playwright/buildscan-ludgershall-capture-2026-06-24/ludgershall-buildscan-canvas-clean.png`.
- Out of scope: BuildScan app code changes, GLB/model file commits, production deploys, commits, pushes, Netlify/DNS changes, customer data beyond Wayne's explicitly requested Ludgershall model-view capture, or external messages.
- Publication note: Wayne approved public use of the Ludgershall model-view screenshot and approved commit/push/Netlify production deploy on 2026-06-25.

Follow-on tranche:

- Tranche name: `website-buildscan-ludgershall-production-deploy`
- Status: completed
- Started: 2026-06-25 19:33 BST
- Completed: 2026-06-25 19:37 BST
- Scope: commit the approved Ludgershall BuildScan homepage visual, push `main`, allow Netlify production deployment, and verify the live public website.
- Permission envelope: Wayne approved option 1 on 2026-06-25: public use of the Ludgershall model screenshot plus commit, push, and Netlify production deploy.
- Output: committed `178cac0885aea8b9d813d4c50ac18cb0c68ce7cb` (`Add BuildScan Ludgershall model view`), pushed `main`, and verified Netlify production deploy `6a3d74cb38ad980008340f42` on `https://robsonai.co.uk`.
- Out of scope: DNS changes, GA4 enablement, form/backend changes, BuildScan app code changes, GLB/model file commits, customer data beyond the approved screenshot, external messages, destructive git actions, or rollback unless needed for an urgent live failure.

Follow-on tranche:

- Tranche name: `website-buildscan-interactive-glb-local-prototype`
- Status: completed locally
- Started: 2026-06-25 21:49 BST
- Completed: 2026-06-25 22:01 BST
- Scope: test whether the Ludgershall GLB can be made interactive for website use without publishing the raw model file, deploying production, or changing the live homepage.
- Output: ignored local prototypes under `output/prototypes/buildscan-interactive-glb/` and `output/prototypes/buildscan-native-viewer/`; the native Three.js/BuildScan-derived viewer is the recommended direction because it renders the Ludgershall model clearly and supports orbit, zoom, view presets, spin, and drag-to-pause.
- Evidence: Browser QA loaded the 125 MB local Ludgershall GLB, verified no console warnings/errors, tested Spin and manual drag handoff, checked desktop and 390px mobile rendering, and captured proof under `output/playwright/buildscan-interactive-glb-prototype-2026-06-25/`.
- Out of scope: committing or publishing the raw GLB, production deploys, homepage integration, CDN dependency decisions, model sanitisation/decimation, customer/site data review beyond Wayne-approved local testing, DNS/Netlify changes, or BuildScan app implementation.

Follow-on tranche:

- Tranche name: `website-buildscan-public-interactive-glb-local-integration`
- Status: completed locally, uncommitted
- Started: 2026-06-26 22:05 BST
- Completed: 2026-06-27 10:38 BST
- Scope: after Wayne changed to option 2, create a public-safe opt-in interactive BuildScan GLB preview for the website using a sanitised/optimised Ludgershall model asset, local Three.js viewer assets, and homepage integration. Keep commit, push, and production deploy approval separate.
- Output: added `assets/showcase/buildscan-ludgershall-public.glb` (1.3 MB, meshopt/WebP, low-resolution textures), `buildscan-viewer.html`, local Three.js r0.164.1 viewer assets under `assets/vendor/three-0.164.1/`, and an opt-in homepage iframe load path that keeps the existing approved PNG as fallback.
- Evidence: direct Chrome/GPU viewer QA loaded the canvas with no console errors or failed requests; homepage desktop and 390px mobile QA confirmed the model loads only after the button click, no horizontal overflow, no console errors, and the redundant static overlays hide after load. Proof under `output/playwright/buildscan-public-safe-glb-2026-06-26/`.
- Security/header note: changed Netlify framing from `X-Frame-Options: DENY` to `SAMEORIGIN` and added `Content-Security-Policy: frame-ancestors 'self'` so the same-origin model iframe can render while external framing remains blocked.
- Out of scope: production deploy, commit/push, domain/DNS, GA4, contact forms, BuildScan app implementation, external messages, raw 125 MB GLB publication, or claiming BuildScan is a finished public product.

Follow-on tranche:

- Tranche name: `website-best-possible-release-programme`
- Status: active programme documented
- Started: 2026-06-27 10:41 BST
- Scope: create and follow a quality programme to make the Robson AI Solutions website the best release-grade website it can be, using current expert web/product/design standards, relevant Codex skills/plugins/agents/browser QA/security/deployment tooling, and bounded validated tranches.
- Output: `docs/codex/WEBSITE_EXCELLENCE_PROGRAMME.md`.
- Evidence: Product/conversion, technical QA/performance, and security/privacy agents completed read-only reviews; rendered Browser/Playwright audit evidence captured under `output/playwright/website-excellence-audit-2026-06-27/`; programme references WCAG 2.2, Core Web Vitals, Nielsen Norman usability heuristics, GOV.UK Service Standard, Google Search Central, ICO cookie guidance, and CSP `frame-ancestors` guidance.
- First gate: resolve the currently uncommitted interactive BuildScan GLB release decision before stacking broader redesign/review work on top of an unfinished publish candidate.
- Out of scope until separately approved: production deploys, commits/pushes, domain/DNS, GA4, forms/customer data, external messages, Apple submission/signing, payments, or destructive git actions.

Follow-on tranche:

- Tranche name: `website-buildscan-interactive-release-gate-hardening`
- Status: completed locally, uncommitted
- Started: 2026-06-27 11:08 BST
- Completed: 2026-06-27 11:10 BST
- Scope: harden the interactive BuildScan public-preview GLB candidate so the publish decision is based on a stricter local release gate rather than the first working prototype.
- Output: `buildscan-viewer.html` now reports model-ready/model-error states, exposes live status text, supports keyboard zoom/reset, respects reduced-motion for spin, renders only when needed, and has a less intrusive control tray. `script.js` now waits for the same-origin viewer ready signal before marking the homepage iframe loaded and falls back cleanly on timeout/error. Local static serving, Netlify headers/cache rules, measurement scripts, and `package.json` now cover the GLB and local Three.js viewer assets.
- Evidence: `npm run qa:buildscan-viewer` passed with artifact `output/buildscan-viewer/smoke-2026-06-27T10-09-47-389Z`; `npm run qa:measurement:evidence` passed with artifact `output/measurement/evidence-2026-06-27T10-07-44-011Z`; `npx --no-install netlify build`, `git diff --check`, `node --check script.js`, `node --check scripts/buildscan-viewer-smoke.mjs`, and targeted HTML validation passed.
- Residual risks at the time of this tranche: local Lighthouse performance still needed recovery, and the interactive GLB still needed Wayne's explicit public-release decision before commit, push, preview deploy, or production deploy. Performance has since been recovered by the `performance-budget-recovery`, `mobile-consent-and-release-qa-polish`, and `icon-payload-and-performance-budget-gate` tranches.
- Out of scope: production deploy, commit/push, PR, Netlify preview deploy, DNS, GA4, forms/customer data, external messages, raw 125 MB GLB publication, BuildScan app implementation, Apple signing/submission, payments, or destructive git actions.

Follow-on tranche:

- Tranche name: `website-product-ia-proof-map`
- Status: completed locally, uncommitted
- Started: 2026-06-27 11:20 BST
- Completed: 2026-06-27 11:27 BST
- Scope: create a Product IA/proof/CTA map for the release-grade website programme using current local website state, Product Design/conversion principles, and two read-only agent reviews.
- Output: `docs/codex/PRODUCT_IA_PROOF_MAP.md`; homepage and Building Analyst navigation now expose `Who it fits`; the BuildScan load-panel wording now says the interactive preview loads only when requested and the static image remains fallback.
- Findings: Building Analyst is the strongest product route; BuildScan has strong proof but is still Gate 0 approval-gated; WAIS/property operations needs a release-safe proof section or should remain lighter than Building Analyst/BuildScan; docs still contradict current public live posture and need a public-site-state refresh before release-grade closeout.
- Out of scope: production deploy, commit/push, PR, Netlify preview deploy, domain/DNS, GA4, forms/customer data, external messages, raw GLB publication, BuildScan app implementation, Apple signing/submission, payments, or destructive git actions.

Follow-on tranche:

- Tranche name: `docs-public-site-state-refresh`
- Status: completed locally, uncommitted
- Started: 2026-06-27 11:31 BST
- Completed: 2026-06-27 11:44 BST
- Scope: refresh stale repo documentation so current docs match the public full website, while preserving historical launch/baseline evidence.
- Output: updated `README.md`, `docs/codex/PRD.md`, `docs/release-handover.md`, `docs/measurement-qa.md`, `AGENTS.md`, `docs/codex/PUBLIC_FULL_SITE_LAUNCH_PLAN.md`, `docs/codex/PUBLIC_FULL_SITE_LAUNCH_READINESS.md`, `docs/codex/FIRST_TRANCHE.md`, `docs/codex/DIRTY_RELEASE_ASSESSMENT.md`, and `docs/codex/CAPABILITY_AUDIT.md`.
- Findings: the active source of truth now says the public full website is live, `holding.html` is fallback/historical, preview auth is retained for future private/staging use, and the BuildScan interactive GLB candidate remains approval-gated until Wayne approves public model use and preview validation.
- Out of scope: production deploy, commit/push, PR, Netlify preview deploy, domain/DNS, GA4, forms/customer data, external messages, raw GLB publication, BuildScan app implementation, Apple signing/submission, payments, destructive git actions, or broad website redesign.

## 3. Now / Next / Later

### Now

- Local QA baseline is restored and documented.
- Preview auth reads Netlify environment variables and fails closed if they are missing.
- Preview credential is stored in macOS Keychain under service `Robson AI Website Preview Auth`; do not commit or print credential values.
- Netlify preview-auth env vars are set for `production`, `deploy-preview`, and `branch-deploy`.
- PR #1 was merged into `main`: `https://github.com/LoganRobson70/robson-ai-solutions-website/pull/1`.
- Netlify production deploy is ready for tracker closeout commit `a7afc4d`.
- Production `https://robsonai.co.uk/` now serves the full public website.
- Production public routes `/`, `/index.html`, `/building-analyst.html`, `/who-its-for.html`, `/privacy.html`, `/robots.txt`, and `/sitemap.xml` return `200`.
- Post-launch observation pass completed with no live production failures found; external search results may still show the old holding-page snippet until recrawled.
- Public full-site launch plan created at `docs/codex/PUBLIC_FULL_SITE_LAUNCH_PLAN.md`.
- Public full-site launch was approved by Wayne and completed on 2026-06-20.
- Public launch-readiness branch is being prepared at `codex/public-full-site-launch-readiness`.
- Local launch-readiness gates passed before Netlify preview.
- Non-production launch-readiness preview remains available for comparison: `https://public-launch-readiness--robson-ai-website.netlify.app`.
- Future tranches should consider agents/background threads when they are useful for parallel QA, independent review, research, or split implementation tasks.
- This website branch and the related iOS app thread are both at a wait-until-WWDC gate. Apple WWDC 2026 runs June 8-12, 2026; no launch-facing website or iOS decisions should be forced before 2026-06-08 unless Wayne explicitly reopens the scope.
- `website-rg5-local-qa-runner-parity` is complete: local smoke/evidence suite now passes with fresh 2026-06-01 artifacts and removes the prior local bind blocker from the website-only PRD gate evidence.
- `website-post-wwdc-positioning-refresh` is complete: homepage, Building Analyst, who-it-fits, holding page and website narrative copy now favour professional surveying software, reporting workflows, building intelligence and cautious Apple-native direction over generic AI/chatbot/provider language.
- `website-agent-polish-preview-refresh` is complete: stale privacy/PRD/release wording was aligned, Building Analyst now says "Assessment capture and report-ready evidence", Apple-platform language is cautious, the launch plan separates a professional/product-direction launch from an app-availability launch, and the Netlify preview has been refreshed.
- PR #2 is merged: `https://github.com/LoganRobson70/robson-ai-solutions-website/pull/2`.
- Production deploy `6a3695c3b9eca200087f4c36` is ready for merge commit `d695eba11e2878840d31984ab9f1646e62dd3358`.
- `production-launch-preflight` no-go blocker is fixed: `who-its-for.html` now renders white hero text on the dark hero background and dark headings on white hero cards.
- Live production contrast checks pass on desktop and mobile.
- `website-professional-redesign-production-deploy` is complete: production `https://robsonai.co.uk/` is deployed from commit `c0863348c7b036f02bcbe0144372c85a17b5424b`.
- `website-modern-motion-graphics-polish` is complete: production `https://robsonai.co.uk/` is deployed from commit `0c3a9f5b5dfa9179b937c47a8d4028cdca6194f9`; homepage and Building Analyst hero panels now have cursor-responsive technical motion fields, selected cards/panels have pointer-depth motion, and reduced-motion/mobile coarse-pointer contexts disable pointer motion.
- `website-basic-mistakes-and-conversion-polish` is deployed to production: fixed homepage credibility contrast, removed the amateur white paragraph strip from the credibility cards, improved homepage/Building Analyst/who-it-fits email-first contact paths, added multi-panel copy-email support, and created `docs/codex/CONVERSION_CONTACT_AUDIT_2026-06-21.md`.
- `website-professional-design-signature-pass` is deployed to production: added stronger editorial typography, section-label rail detailing, product/card accent surfaces, and a wrapped mobile nav so the site feels less generic while keeping the product-led software signal.
- Production `https://robsonai.co.uk/` is deployed from commit `6e275f9e3e4f56a293c2bd5401a8af55f13f2dc1`; Netlify production deploy `6a37be74ace5eb0008361ef4` is ready and published.
- `project-list-analysis-dashboard` is complete locally: dashboard artifact is `output/project-analysis/robson-project-dashboard.html`; default project view includes 976 valid project rows, excludes 78 budget/non-project rows, and holds 14 naming exceptions for review. Source workbook data must not be added to public website routes or deployed without an explicit privacy/release review.
- `building-analyst-proof-assets-and-workflow-story` is deployed: Building Analyst now has a no-old-screenshots Product proof section, public icon links use `assets/robson-ai-icon-v3.png`, Wayne-deleted legacy assets were removed from Git, and production was verified from commit `53d19da9620b4926258cfa9e0f20767f0c3d207d` with Netlify deploy `6a37e1c1f001a300081cbcd7`.
- `design-system-consolidation-audit` is complete locally: the standalone Robson AI Design System is useful as a brand/product UI reference, but is not in Git and contains stale Google/Gemini/Stripe/Product Professional references that should not override the current post-WWDC26 website/product direction.
- `design-system-source-of-truth-cleanup` is complete locally: the standalone Robson AI Design System folder now has local Git metadata, source-of-truth/changelog/governance files, provider-neutral Building Analyst prototype wording, and explicit public website/product UI/Apple platform boundaries. No design-system commit has been created.
- `website-buildscan-interactive-glb-local-prototype` is complete locally: the raw 125 MB Ludgershall GLB can be viewed interactively through a local Three.js/BuildScan-derived viewer, but should not be published publicly unless a sanitised/optimised model asset is approved.
- `website-buildscan-public-interactive-glb-local-integration` is complete locally and uncommitted: a 1.3 MB public-preview GLB and opt-in homepage viewer are integrated locally with screenshot fallback, but need Wayne's visual/public-release approval before commit, push, or production deploy.
- `website-best-possible-release-programme` goal is active and now documented in `docs/codex/WEBSITE_EXCELLENCE_PROGRAMME.md`: the quality bar, scorecard, risks, release gates, and tranche roadmap are defined; Gate 0 remains the interactive BuildScan GLB decision.
- `website-buildscan-interactive-release-gate-hardening` is complete locally and uncommitted: the interactive viewer now has explicit ready/error signalling, accessibility and reduced-motion handling, keyboard zoom/reset, stricter homepage load handling, GLB/vendor asset smoke coverage, local MIME support, and Netlify CSP/cache headers.
- `website-product-ia-proof-map` is complete locally and uncommitted: `docs/codex/PRODUCT_IA_PROOF_MAP.md` now maps current pages, workstreams, audience paths, proof assets, claim maturity, CTA gaps, release-governance drift, and next tranches.
- `docs-public-site-state-refresh` is complete locally and uncommitted: current source-of-truth docs now match the public live site and separate BuildScan Gate 0; historical docs are marked as historical/superseded.
- `trust-and-cta-segmentation` is complete locally and uncommitted: homepage credibility/status copy, audience-specific mailto prompts, and `who-its-for.html` routing are locally validated.
- `property-operations-proof-section` is complete locally and uncommitted: homepage WAIS/property-operations proof content now shows issue context, owner, due signal, blocker, evidence trail, next action, and explicit live-system boundaries.
- `performance-budget-recovery` is complete locally and uncommitted: homepage Lighthouse median initially improved from performance 72 / LCP about 10.95s to performance 90 / LCP about 3.60s; the remaining LCP/budget gap was then cleared by the icon-payload and budget-gate tranche.
- `mobile-consent-and-release-qa-polish` is complete locally and uncommitted: the mobile consent banner is now a compact bar with Accept, Decline and Privacy Notice visible, safe-area handling, no horizontal overflow, and no collision with the BuildScan interactive load button.
- `icon-payload-and-performance-budget-gate` is complete locally and uncommitted: the remaining full-size icon first-load payload is removed from rendered browser requests, Lighthouse median is now performance 100 / LCP about 1.73s, and `npm run qa:measurement:evidence` now enforces the release performance budget.
- `release-header-and-preview-gate-hardening` is complete locally and uncommitted: release-header smoke now validates CSP, frame policy, cache, GLB MIME, source-path deny redirects, `/preview.html` redirect and `holding.html` noindex behaviour; preview commands now fail closed without `QA_BASE_URL`; BuildScan viewer smoke can run against a Netlify deploy-preview.
- `rendered-release-smoke-baseline` is complete locally and uncommitted: `npm run qa:rendered` now captures desktop/mobile screenshots for the homepage, consent banner, BuildScan opt-in and interactive loaded state, Building Analyst proof, Who it fits, Privacy, 404, and holding fallback; the rendered preview command fails closed without `QA_BASE_URL`.
- `release-candidate-inventory-governance` is complete locally and uncommitted: `npm run qa:release-inventory` now checks expected dirty files, forbidden source/artifact paths, asset budgets, BuildScan GLB structure/external URI references, and secret-like strings before commit/preview approval.

### Next

- Recommended first gate for the website-excellence programme: approve a non-production release-candidate path for the hardened interactive BuildScan GLB candidate and the completed local proof/performance bundle before production. Recommended option 1 is commit the scoped changes, push a branch, create/verify a Netlify deploy-preview, then make the separate production publish decision from live-preview evidence.
- Wayne visual/public-release decision for the interactive BuildScan model remains required before production. Do not publish if the optimised Ludgershall GLB is not acceptable for public viewing as a small, low-detail preview asset.
- After the preview gate, required validation is `QA_BASE_URL=<preview> npm run qa:release-headers:preview`, `QA_BASE_URL=<preview> npm run qa:buildscan-viewer:preview`, `QA_BASE_URL=<preview> npm run qa:measurement:preview`, plus a rendered mobile/desktop Browser pass before any production decision.
- Also run `QA_BASE_URL=<preview> npm run qa:rendered:preview` on the Netlify deploy-preview before any production decision.
- Rerun `npm run qa:release-inventory` immediately before staging/commit so the dirty-file and GLB governance evidence reflects the exact commit candidate.
- Approve or defer an initial local commit inside `/Users/wayne/Documents/RobsonAI/Robson AI Design System`; recommended next step is to commit the source-of-truth cleanup locally, without pushing or publishing.
- Review `output/project-analysis/robson-project-dashboard.html` locally and decide whether to correct the 14 naming exceptions in the source workbook before using it for project-only reporting.
- Review the live Building Analyst proof section at `https://robsonai.co.uk/building-analyst.html#workflow-proof`; next changes should be handled as a new bounded tranche.
- Monitor stale external search/social cache previews and recheck after crawlers have had more time to recrawl the live metadata.
- Keep GA4 disabled until Wayne approves analytics governance and a real Measurement ID.
- Decide whether to add launch assets such as app screenshots/App Store links only when the iOS app is ready to claim publicly.

### Later

- Improve conversion path beyond `mailto:` only after privacy, spam, retention, and analytics governance are approved.
- Decide whether the public website keeps its Manrope/Fraunces editorial type system as a marketing-site exception or migrates later toward the Inter-only product design-system rule.
- Prepare a GA4 enablement pack only after Wayne approves a real Measurement ID and analytics governance.
- Add CI or pre-handoff hooks for measurement smoke, HTML validation, accessibility, and tracker update checks.
- Migrate Netlify publishing from repo root to an allowlisted `public/` or generated `dist/` output after the current release candidate is safely resolved.
- Run a full browser/mobile QA and visual polish pass before public launch.

### Post-PRD full app review task series

Run this only after the relevant current-state PRD is complete and accepted. For this website repo, do not let this review expand the current public-launch-readiness tranche unless Wayne explicitly approves a new tranche.

1. Confirm the PRD is complete enough to govern review: current scope, target users, architecture, risks, privacy/security, deployment path, validation commands, in-scope next work, and out-of-scope items.
2. Define the review outcome in plain English: problem, users, success criteria, constraints, and explicit non-goals.
3. Ask Codex/agents to analyse first with no code changes: implementation shape, risks, gaps, and recommended remediation plan.
4. Challenge the plan with independent roles where useful: senior UX designer, product/domain lead, senior front-end engineer, security/QA reviewer, and devil's advocate.
5. Run user-journey review across the current product surface.
6. Run UI/UX and visual consistency review against Robson AI brand rules and existing design behaviour.
7. Run governance/domain review for relevant workflows, audit needs, terminology, compliance, and release constraints.
8. Run data model and integration review where the app has persisted data, APIs, tenancy, or workflow handoffs.
9. Run security review for authentication, authorisation, tenant isolation, secrets, API exposure, injection risks, dependency risks, and audit trail gaps.
10. Run accessibility, mobile, browser, and responsive QA review.
11. Run cross-workspace or cross-product consistency review where the app spans modules such as service desk, work orders, projects, compliance, governance, WAIS, Building Analyst, or BuildScan.
12. Convert findings into a ranked remediation plan: critical, high, medium, low, parked.
13. Execute only approved, bounded Codex implementation tranches with rollback notes and validation commands.
14. Validate after each tranche with build, lint, tests, accessibility, mobile, browser, security, and regression checks appropriate to the repo.
15. Hold a release gate: Wayne reviews product logic, UX, security, data governance, domain fit, public claims, and deployment timing before merge or production release.

## 4. Parking Lot

| Date | Idea | Source | Suggested timing | Notes |
| --- | --- | --- | --- | --- |
| 2026-05-30 | Embedded contact form or booked intro CTA | UI/UX review | later | Useful conversion improvement, but not part of documentation baseline. Requires privacy, spam, and Netlify Forms or backend decision. |
| 2026-05-30 | Production GA4 Measurement ID enablement | Existing QA docs | later | Analytics is currently intentionally inert. Needs explicit approval and privacy check. |
| 2026-05-30 | Public launch of fuller website | Release handover | next | Plan exists in `docs/codex/PUBLIC_FULL_SITE_LAUNCH_PLAN.md`; execution should wait until iOS app/screenshot/advertising readiness is approved. |
| 2026-05-30 | Secret rotation and env-var based preview auth | Codex audit | done | Edge Function now reads Netlify env vars; password was rotated into Keychain; Netlify vars are set for `production`, `deploy-preview`, and `branch-deploy`; live alias preview verified. |
| 2026-05-30 | Weekly website health automation | Capability checklist | later | Could run smoke/QA reminders, but only after the QA command is back to passing. |
| 2026-05-31 | Post-PRD full app review workflow | Wayne/process note | after relevant PRD completion | Use the task series in section 3 to run analysis-first, multi-role, security, UX, governance, QA, and release-gate review before broad implementation. |
| 2026-06-01 | Codex web development/design skill library expansion | Wayne skill request | done | Created 28 focused local Codex skills under `~/.codex/skills` for frontend, web design, backend, full-stack, and code-quality work. This is tooling support and does not reopen the WWDC-held website launch tranche. |
| 2026-06-21 | Design-system source-of-truth cleanup | Design-system audit | done locally | Standalone design-system folder now has local Git metadata, source-of-truth/changelog files, and provider-neutral canonical guidance. Initial commit still needs Wayne approval. |
| 2026-06-27 | Mobile consent-banner polish | Performance-budget rendered QA | done locally | Mobile consent banner now renders as a compact mobile bar with Accept, Decline and Privacy Notice visible, safe-area handling, and no collision with the BuildScan interactive load button. Still needs Netlify preview validation before production. |
| 2026-06-27 | Motion reference tranche using Luffu, Steno and Unfold | Wayne reference note | after preview candidate is proved | Reference capture saved at `output/reference-motion/2026-06-27T23-33-19-849Z`; implementation brief added at `docs/codex/MOTION_REFERENCE_BRIEF.md`. Translate the strongest patterns into restrained Robson AI motion: a product-proof focal object, cursor-responsive depth on capable devices, scroll-timed proof reveals, tactile product panels, and reduced-motion/mobile-safe fallbacks. Do not add this to the current preview candidate; it would invalidate the staged release evidence. |

## 5. Decisions

| Date | Decision | Reason | Tradeoff | Revisit trigger |
| --- | --- | --- | --- | --- |
| 2026-05-30 | PRD is current-state, not a fantasy rewrite | Wayne explicitly requested baseline documentation only | Future features are parked rather than designed now | When Wayne approves implementation tranche |
| 2026-05-30 | Public root remains documented as holding page | `netlify.toml` rewrites `/` to `holding.html` | Fuller website remains hidden from public root | Public launch planning |
| 2026-05-30 | Fresh smoke failure is recorded, not fixed | This tranche is documentation/audit only | Repo remains with a failing local smoke command | First implementation tranche |
| 2026-05-30 | Existing docs remain source documents | Avoid overwriting useful handover and QA content | Codex baseline links to, rather than replaces, older docs | If docs become inconsistent |
| 2026-05-30 | Codex handoffs must state Wayne's next action or ask for a decision | Wayne requested clearer closeout guidance | Final messages should not leave the next step implicit | If Wayne changes preferred handoff style |
| 2026-05-30 | Keep `proof_interaction` in the governed analytics event contract | Existing docs define it as required and the smoke harness validates it | Restored a small proof CTA in the hidden fuller-site credibility section | If analytics governance changes |
| 2026-05-30 | Preview-auth credentials must come from Netlify env vars | Hard-coded credentials are a security/release risk | Deploys now require `ROBSON_PREVIEW_USERNAME` and `ROBSON_PREVIEW_PASSWORD` to be configured | Before next deploy |
| 2026-05-30 | Use standard Netlify site env vars on current plan | Netlify granular env scopes such as `--scope runtime` are Pro-and-above and did not persist on this account | Env vars are context-scoped to `production` and `deploy-preview`, not granular runtime-scoped | If Netlify plan/features change |
| 2026-05-30 | CLI alias preview deploys use `branch-deploy` context | Netlify deploy metadata reported `context: branch-deploy` for alias `preview-auth-check` | Preview-auth vars must also exist in `branch-deploy` for CLI preview verification | If moving to GitHub PR deploy previews |
| 2026-05-30 | Edge Function reads `Netlify.env.get()` directly first | Netlify docs show direct `Netlify.env.get()` for Edge runtime; local fallback remains for tests | Slightly broader env-reader fallback logic | If Netlify Edge runtime API changes |
| 2026-05-30 | Stage and commit scoped baseline/auth files only | Wayne approved `stage-and-commit-baseline-auth-docs`; repo still has broad unrelated dirty website/UI state | This commit intentionally leaves broader dirty site changes unstaged | When Wayne approves a wider release commit |
| 2026-05-30 | Keep dirty website/UI files out of baseline PR | Remaining dirty files form a broad website release candidate | Requires separate review/validation tranche before staging | If Wayne approves `website-release-candidate-review` |
| 2026-05-30 | Consent banner must not cover first-viewport hero text | Browser QA found desktop overlap on hidden fuller-site hero and holding visual | Applied targeted CSS placement fixes and stylesheet cache-bump | Before staging release candidate |
| 2026-05-30 | Stage and commit validated release candidate as a separate commit | Wayne approved option 1 after the release-candidate review passed | PR #1 will contain both baseline/auth work and the website release candidate; production deploy remains separate | Before marking PR ready or launching production |
| 2026-05-30 | Full public website launch waits for iOS app readiness | Historical decision: Wayne clarified the then-current front end should say the site was getting ready while the protected fuller site stayed ready for launch timing | Superseded by the 2026-06-20 public full-site launch; app screenshots/links are now conditional assets only when app availability is claimed | If app availability, screenshots, or App Store/public link timing are referenced publicly |
| 2026-05-31 | Use agents/background threads when useful | Wayne asked that the tracker remember agents should be used where required | Adds a lightweight decision point before larger work; avoid using agents for tiny edits where setup overhead is higher than benefit | At the start of serious tranches, QA sweeps, research, or parallel implementation |
| 2026-05-31 | Queue full app review after PRD completion | Wayne asked whether the AI delivery process should be used for full review or tracked as tasks | Keeps the review governed and sequenced after the PRD instead of expanding current scope | When the relevant PRD is accepted and Wayne approves a review tranche |
| 2026-05-31 | Keep launch-readiness as preview, not PR/production launch yet | Wayne selected option 1 after review of next-step choices | The fuller site remains ready to inspect without changing production or opening launch pressure before app materials are ready | When iOS app status, approved screenshots, and App Store/public link timing are ready |
| 2026-05-31 | Treat website and iOS work as wait-until-WWDC | Wayne clarified both this website thread and the iOS chat are at the WWDC wait stage | Avoids premature public launch, screenshots, claims, or platform decisions before Apple announcements are known | After WWDC 2026 begins on June 8, 2026, or when Wayne explicitly reopens the scope |
| 2026-06-08 | Refresh website positioning after WWDC26 without implementation scope | Wayne selected option 1 after the post-WWDC briefing | Aligns public/preview copy with Apple-native/device-first Building Analyst direction while avoiding overclaims about unreleased or unimplemented Apple features | When app screenshots, App Store link, or implemented Apple Intelligence features are ready to reference publicly |
| 2026-06-18 | App screenshots/App Store links are conditional launch assets | Independent review found the old launch plan could unnecessarily block a truthful professional/product-direction website launch | Website can launch without app-store claims if copy stays honest; screenshots/links remain required if app availability is claimed or shown | When Wayne decides whether launch is professional/product-direction only or app-availability led |
| 2026-06-18 | Open launch-readiness PR as draft | Wayne asked Codex to continue after PR was recommended | Formalizes review without implying merge or production launch approval | When Wayne decides to mark ready for review, merge, or hold |
| 2026-06-18 | Mark PR #2 ready for review | Wayne approved the recommended ready-for-review step | Makes the validated branch formally reviewable while keeping merge and production launch as separate approvals | When Wayne approves merge, final polish, hold, or production launch tranche |
| 2026-06-18 | Do not merge PR #2 without explicit production launch approval | Wayne selected merge-readiness but also previously required no production deploy without separate approval; Netlify deploys from `main` | PR #2 remains open and ready instead of being merged | When Wayne explicitly approves production launch merge/deploy, or chooses to hold the preview |
| 2026-06-18 | Hold production launch after preflight | Browser QA found a launch-blocking visual contrast issue on `who-its-for.html` despite automated checks passing | Requires a small CSS fix and rerun before merge/deploy | When Wayne approves the contrast-fix tranche |
| 2026-06-20 | Clear `who-its-for.html` contrast blocker | Wayne approved the recommended contrast-fix-and-retest tranche | The only known visual launch blocker is resolved; production launch still requires explicit approval | When Wayne approves merge/deploy or requests another hold |
| 2026-06-20 | Launch the full public site | Wayne approved `production-launch-merge-and-verify` | PR #2 was merged to `main`, triggering Netlify production deploy | If rollback, urgent content issue, or post-launch QA finding appears |
| 2026-06-21 | Treat the standalone Robson AI Design System as a reference, not a silent production dependency | Audit found useful tokens/assets/components, but also stale Google/Gemini/Stripe references, non-Git status, and typography/orange-use drift from the live website | Future work must decide source-of-truth boundaries before migrating website or app UI | When Wayne approves `design-system-source-of-truth-cleanup` |
| 2026-06-21 | Initialise design-system Git locally, but do not commit without approval | Wayne approved source-of-truth cleanup; repo instructions still require approval before commits/pushes | Folder has local Git metadata and cleaned source files but no commit history yet | When Wayne approves initial design-system commit |
| 2026-06-25 | Treat interactive BuildScan GLB as feasible but not public-ready | Local prototype proved the Ludgershall GLB can orbit, zoom, spin and reset in a browser, but the raw model is 125 MB and exposes the underlying 3D asset | Current production should keep the approved static screenshot until a sanitised/optimised model asset and release/privacy gate are approved | When Wayne approves a public-safe interactive model tranche |
| 2026-06-27 | Use an opt-in public-safe BuildScan GLB viewer, not an automatic raw-model load | Wayne changed from static-only to option 2. Local QA proved a 1.3 MB optimised GLB can load in an iframe after user click while the static PNG remains the fallback. | Do not commit, push, or production deploy until Wayne visually accepts the model and approves publish. | When Wayne approves commit/push/Netlify production deploy |

## 6. Risks And Watch Items

| Risk | Severity | Owner | Mitigation | Status |
| --- | --- | --- | --- | --- |
| Dirty working tree with many modified/untracked files | high | Wayne/Codex | Merged and deployed through PR #1. Continue using `git status` and scoped branches/worktrees for future tranches. | closed |
| `npm run qa:measurement:local` currently fails | high | Codex | Fixed in local tranche; keep command passing before deploy. | closed |
| Hard-coded preview Basic Auth credential in `netlify/edge-functions/preview-auth.js` | high | Wayne/Codex | Code now reads Netlify env vars. Password rotated into Keychain and Netlify vars verified in relevant contexts. | closed |
| No root `README.md`, `AGENTS.md`, or `CLAUDE.md` in this repo | medium | Codex | Root `README.md` and `AGENTS.md` are now deployed; add `CLAUDE.md` only if Wayne wants Claude-specific instructions. | mostly closed |
| Public/live state and repo docs can drift | medium | Codex | `docs-public-site-state-refresh` updated README, PRD, release handover, launch docs, measurement docs, and AGENTS to match the current public site and BuildScan Gate 0. | resolved locally |
| Merging PR #2 likely publishes the fuller site | high | Wayne/Codex | PR #2 was merged and production launch was completed on 2026-06-20. Future merges still require explicit approval because Netlify deploys from `main`. | closed |
| `who-its-for.html` hero/card contrast is launch-blocking | high | Codex | Fixed in `styles.css`; local and PR-preview desktop/mobile checks pass. | closed |
| External search result may temporarily show old holding-page snippet | low | Wayne/Codex | Live metadata, sitemap, robots, and holding-page noindex are correct; monitor recrawl and optionally use Search Console URL inspection if available. | monitoring |
| Professional redesign is local/uncommitted | medium | Wayne/Codex | Committed in `c0863348c7b036f02bcbe0144372c85a17b5424b`, pushed to `main`, and deployed to production. | closed |
| Motion polish could distract or harm accessibility/performance | medium | Codex | Kept motion subtle, dependency-free, pointer-fine only, and disabled under `prefers-reduced-motion` and coarse-pointer mobile contexts; validate with Playwright and Lighthouse before deploy. | monitoring |
| Spreadsheet-derived dashboard could expose project/business data if published | high | Wayne/Codex | Kept dashboard and support files under ignored `output/`; do not move into public root, commit, push, or deploy without a privacy/release review. | active |
| Display-font redesign could hurt readability or mobile fit | medium | Codex | Used the already bundled local Fraunces font only for major headings, tightened homepage hero scale, added Browser desktop/mobile checks, and kept Manrope for body/UI text. | monitoring |
| Standalone design-system folder can drift from current product direction | medium | Wayne/Codex | Completed `docs/codex/DESIGN_SYSTEM_CONSOLIDATION_AUDIT.md` and local source-of-truth cleanup; next recommended step is an approved local initial commit. | monitoring |
| Raw interactive GLB could expose site/model data and hurt performance if published | high | Wayne/Codex | Raw 125 MB GLB remains uncommitted. Local integration uses a 1.3 MB optimised public-preview GLB with 64px textures and click-to-load iframe, but Wayne still needs to visually approve public use before deployment. | active |
| Same-origin iframe requirement weakens `X-Frame-Options` from `DENY` to `SAMEORIGIN` | low | Codex | Added `Content-Security-Policy: frame-ancestors 'self'` alongside `SAMEORIGIN`; validate headers on preview/live before final release acceptance. | active |
| Netlify publishes from repo root | medium | Codex | Added explicit Netlify deny redirects for docs, scripts, Netlify source, output, package metadata, root markdown files and config; `npm run qa:release-headers` now verifies the deny rules locally and preview mode can verify them on Netlify. Longer-term cleaner fix is a `public/` or `dist/` publish migration. | mitigated locally |
| Preview QA could accidentally test production or local state | high | Codex | `qa:measurement:preview`, `qa:buildscan-viewer:preview`, and `qa:release-headers:preview` now fail closed without `QA_BASE_URL` or `--base-url`. | resolved locally |
| npm dev/release tooling audit residual moderate findings | low | Wayne/Codex | Approved non-force remediation removed all high/critical dev-tooling findings. `npm audit --omit=dev --audit-level=moderate` reports zero production-footprint vulnerabilities; full `npm audit --audit-level=moderate` now reports 17 moderate Lighthouse/Sentry/OpenTelemetry findings, 0 high and 0 critical. Do not run `npm audit fix --force` without Wayne approval. | monitoring |
| Email-only conversion path may lose enquiries | medium | Wayne/Codex | Parked for conversion tranche; requires privacy/spam decision. | parked |
| GA4 Measurement ID is empty | low | Wayne | Intentional until analytics approval. Keep measurement QA in place. | monitoring |

## 7. Access Needed

| Access/tool | Why needed | Who enables | Status | Notes |
| --- | --- | --- | --- | --- |
| Netlify account/project access | Preview/prod deploys, env vars, deploy status | Wayne | enabled for read-only checks | CLI and connector can read project `robson-ai-website`; deploy/write actions still require Wayne approval. |
| Netlify environment variables | Supply preview auth credentials at deploy/runtime | Wayne/Codex | set for release contexts | CLI set `ROBSON_PREVIEW_USERNAME` and `ROBSON_PREVIEW_PASSWORD` as secrets in `production`, `deploy-preview`, and `branch-deploy`; absent from `dev` by design. |
| GitHub PR/CI workflow | Safer review, branch publishing, future PR checks | Wayne/Codex | available locally, use with approval | `gh auth status` shows an authenticated GitHub CLI account. |
| Browser / Playwright QA | Responsive and interaction QA for website changes | Codex | available | Local Playwright dependency exists and smoke command launched Chromium. |
| GA4 Measurement ID | Enable production analytics | Wayne | not needed now | Analytics is intentionally inert until approved. |

## 8. Best Tooling Setup

Detailed recommendations live in `docs/codex/CAPABILITY_AUDIT.md`.

| Capability | Status | Why it helps | Setup/action | What Codex can do unaided |
| --- | --- | --- | --- | --- |
| MCP servers | enabled/recommended | GitHub, Linear, OpenAI docs, browser/node, and Docker MCP are configured. | Use read-only first; ask before account-wide or write actions. | Inspect repo/PR state, use docs, and automate browser where appropriate. |
| Hooks | recommended | Prevent handoff without tracker update or smoke evidence. | Add low-risk local hooks after QA passes. | Run repeatable checks before closeout. |
| Connections | recommended | GitHub and Netlify are the useful account-backed services for this repo. | Wayne approves account reads/writes when needed. | Inspect PR/deploy status and prepare releases. |
| Git | available | Dirty tree needs discipline and branch isolation. | Use `git status` before edits; use worktrees for large changes. | Track scoped diffs, commit/PR when approved. |
| Environments | required before release | Preview auth secrets must not remain hard-coded. | Use Netlify env vars; keep secrets out of chat. | Validate local fallback and deploy config after approval. |
| Worktrees | recommended | Main checkout is dirty. | Create `codex/<tranche>` worktree for larger implementation. | Work safely without disturbing current dirty files. |
| Browser | available/recommended | Needed for local site QA, mobile checks, console/network evidence. | Start local static server or use QA scripts. | Capture screenshots, console/network issues, and interaction evidence. |
| Computer use/Appshots | optional | Useful if Wayne needs Codex to inspect a UI state outside repo files. | Wayne attaches an appshot or approves desktop interaction. | Diagnose visual/state issues not visible from files. |
| Skills/plugins | available/recommended | Robson AI brand, web app, Netlify, GitHub, security, validation skills all apply. | Use relevant skill per tranche. | Follow consistent project workflows. |
| Agents/background threads | recommended when useful | Useful for parallel QA, accessibility/security sweeps, research, code review, or independent implementation subtasks. | Wayne authorizes background threads/agents for split work when a tranche would benefit. | Run independent audits, compare findings, or progress split tasks while main work continues. |
| Automations | optional | Useful once QA is passing. | Wayne approves schedule and scope. | Weekly smoke/release-readiness reminders or checks. |

## 9. Capability Refresh Log

| Date | Checked | Useful changes found | Recommendation |
| --- | --- | --- | --- |
| 2026-05-30 | Repo files, git, package scripts, Netlify config, Codex config, MCP list, tool search, supplied checklist | Yes: Browser, Netlify, GitHub, automations, multi-agent tools, and relevant skills/plugins are available. QA currently fails. | Use Browser/Playwright for frontend QA, Netlify only with approval, worktree for next implementation, and repair smoke first. |

## 10. Validation Evidence

| Date | Command/check | Result | Notes |
| --- | --- | --- | --- |
| 2026-05-30 | `git status --short` | dirty | Modified root files and many untracked files, including `docs/`. No cleanup performed. |
| 2026-05-30 | `rg --files ...` and `find docs -maxdepth 4 -type f` | pass | No existing `docs/codex/TRACKER.md` or usable PRD found before this tranche. |
| 2026-05-30 | `npm run qa:measurement:local` | fail | Fails in fake-ID contract flow: expected proof CTA not found. Artifact directory started at `output/measurement/smoke-2026-05-30T10-09-12-189Z`. |
| 2026-05-30 | `codex mcp list` | pass | MCP servers enabled: `MCP_DOCKER`, `claude`, `node_repl`, `xcodebuildmcp`, `github`, `linear`, `openaiDeveloperDocs`. |
| 2026-05-30 | `npx --no-install netlify --version` | pass | Netlify CLI resolved as `netlify/26.0.2`. No deploy performed. |
| 2026-05-30 | `node --test scripts/preview-auth-smoke.mjs` before fix | fail | Red test proved env-supplied preview credentials were not accepted by the old hard-coded auth logic. |
| 2026-05-30 | `npm run qa:preview-auth` | pass | 3/3 tests pass: env credentials accepted, missing env fails closed, wrong credentials rejected. |
| 2026-05-30 | `npm run qa:measurement:local` | pass | Artifact: `output/measurement/smoke-2026-05-30T10-27-55-701Z`. Required event set emitted exactly. |
| 2026-05-30 | `npm run qa:measurement:evidence` | pass | Artifact: `output/measurement/evidence-2026-05-30T10-28-09-186Z`. HTML validate, axe, smoke, Lighthouse completed. |
| 2026-05-30 | Browser local check at `http://127.0.0.1:8123/index.html#credibility` | pass | Proof CTA was present, linked to `./building-analyst.html`, navigated correctly, and browser console had no errors. |
| 2026-05-30 | `npm run qa:measurement:local` final verification | pass | Artifact: `output/measurement/smoke-2026-05-30T10-32-27-919Z`. |
| 2026-05-30 | `git diff --check` | pass | No whitespace errors reported. |
| 2026-05-30 | scoped hard-coded credential search | pass | No old hard-coded preview credential pattern found in scoped files. Search pattern omitted from docs to avoid preserving credential fragments. |
| 2026-05-30 | `npx --no-install netlify status` | pass | CLI authenticated as Wayne Robson and linked to `robson-ai-website`, project id `4ab53a28-c28c-4e7d-b7ca-93960fc4c39f`. |
| 2026-05-30 | Netlify connector `get-user` / `get-project` | pass | Connector read access works; project current deploy is `ready`; no deploy/write action performed. |
| 2026-05-30 | Netlify CLI env presence check | missing vars | `ROBSON_PREVIEW_USERNAME` and `ROBSON_PREVIEW_PASSWORD` missing in `dev`, `production`, `deploy-preview`, and `branch-deploy` contexts. Secret values were not printed. |
| 2026-05-30 | Netlify CLI env presence re-check | missing vars | User asked to verify after setup. Required preview-auth env vars were still missing in `dev`, `production`, `deploy-preview`, and `branch-deploy`. Secret values were not printed. |
| 2026-05-30 | `npx --no-install netlify env:set ... --context production/deploy-preview --secret --force` | pass | Standard site env vars set for `ROBSON_PREVIEW_USERNAME` and `ROBSON_PREVIEW_PASSWORD`. Granular `--scope runtime` was not used because it did not persist on the current Netlify plan. Secret password was generated locally and not printed. |
| 2026-05-30 | `npx --no-install netlify env:list --json --context production/deploy-preview/dev/branch-deploy` | pass | Required vars present in `production` and `deploy-preview`; absent in `dev` and `branch-deploy`. Secret values were not printed. |
| 2026-05-30 | `security add-generic-password -U ...` | pass | Rotated preview credential stored in macOS Keychain under service `Robson AI Website Preview Auth`. Credential values were not printed. |
| 2026-05-30 | `npm run qa:preview-auth` | pass | Local Edge Function auth smoke still passes after direct `Netlify.env.get()` reader update. |
| 2026-05-30 | `npm run qa:measurement:local` | pass | Pre-deploy local measurement gate passed. Artifact: `output/measurement/smoke-2026-05-30T11-15-17-945Z`. |
| 2026-05-30 | `npx --no-install netlify deploy --context branch-deploy --alias preview-auth-check --json` | pass | Non-production alias deploy ready: `https://preview-auth-check--robson-ai-website.netlify.app`, deploy id `6a1ac942b9543e1a0abef940`, deploy context `branch-deploy`, Edge Function present. |
| 2026-05-30 | Live auth matrix on alias preview | pass | `/index.html`, `/building-analyst.html`, `/who-its-for.html`, and `/privacy.html` return `401` without/wrong credentials and `200` with Keychain credential. `/` remains public holding page with `200`. |
| 2026-05-30 | `git diff --check` | pass | No whitespace errors reported after tracker/release/auth updates. |
| 2026-05-30 | Dirty website/UI assessment | pass | `docs/codex/DIRTY_RELEASE_ASSESSMENT.md` recommends a separate `website-release-candidate-review` tranche and keeps broad dirty files out of the baseline PR. |
| 2026-05-30 | Draft GitHub PR creation | pass | PR #1 created for `codex/professionalize-website`: `https://github.com/LoganRobson70/robson-ai-solutions-website/pull/1`. |
| 2026-05-30 | Asset reference scan | pass | Checked 25 local URL references across release HTML/CSS/JS; no missing local asset references found. |
| 2026-05-30 | `npx html-validate --rule doctype-style:off --rule void-style:off holding.html index.html preview.html privacy.html building-analyst.html who-its-for.html` | pass | Standalone HTML validation passed for release candidate pages. |
| 2026-05-30 | Browser desktop/mobile QA | pass | In-app Browser checked holding root and hidden fuller-site page. Fixed consent-banner overlap and mobile horizontal overflow, then rechecked desktop/mobile screenshots and console logs. |
| 2026-05-30 | `npm run qa:measurement:local` after release fixes | pass | Artifact: `output/measurement/smoke-2026-05-30T14-08-10-518Z`. |
| 2026-05-30 | `npm run qa:measurement:evidence` after release fixes | pass | Artifact: `output/measurement/evidence-2026-05-30T14-08-22-954Z`. Lighthouse median: performance 80, accessibility 100, best practices 100, SEO 66. |
| 2026-05-30 | `npx --no-install netlify deploy --context branch-deploy --alias release-candidate-check --json` | pass | Non-production alias deploy ready: `https://release-candidate-check--robson-ai-website.netlify.app`, deploy id `6a1aef9300af4ff50eff277f`. |
| 2026-05-30 | Live release-candidate auth/root matrix | pass | `/` public holding page returned `200` with no hidden links; hidden routes returned `401` without/wrong credentials and `200` with Keychain credential. |
| 2026-05-30 | Live release-candidate browser root check | pass | Desktop and mobile root checks had correct title/H1, no hidden links, no console errors/warnings, and no horizontal overflow. |
| 2026-05-30 | `git diff --cached --check` before release-candidate commit | pass | Explicitly staged release-candidate files only; no whitespace errors reported. |
| 2026-05-30 | staged secret-pattern scan before release-candidate commit | pass | No preview password, generated-placeholder password, or obvious committed secret assignment found in the staged diff. |
| 2026-05-30 | GitHub PR Netlify deploy-preview for commit `9e51501` | fail | Netlify reported build-stage exit code 2 and deploy validation matched the committed preview username value in docs. Password was not printed. |
| 2026-05-30 | Docs credential hygiene fix | pass | Removed the literal preview username value from repo docs; Keychain service name remains documented. |
| 2026-05-30 | `npx --no-install netlify build` after docs credential fix | pass | Local Netlify build still packages the `preview-auth` Edge Function successfully. |
| 2026-05-30 | GitHub PR Netlify deploy-preview after docs credential fix | pass | Official preview is ready at `https://deploy-preview-1--robson-ai-website.netlify.app`. |
| 2026-05-30 | Live official PR preview auth/root matrix | pass | `/` returned `200` with no hidden links; hidden routes returned `401` without/wrong credentials and `200` with the Keychain credential. |
| 2026-05-30 | PR #1 metadata/diff/check review | pass | PR has 42 changed files, 6 commits before tracker closeout, and a passing Netlify deploy-preview check. |
| 2026-05-30 | PR #1 title/body update | pass | PR title/body now describe baseline docs, preview auth, website release candidate, validation, and release boundaries. |
| 2026-05-30 | PR #1 ready-for-review update | pass | PR #1 is no longer draft and the Netlify deploy-preview check is still passing. |
| 2026-05-30 | Production preflight `npm run qa:preview-auth` | pass | Local Edge Function auth smoke passed immediately before merge. |
| 2026-05-30 | Production preflight env-var presence check | pass | `ROBSON_PREVIEW_USERNAME` and `ROBSON_PREVIEW_PASSWORD` present for Netlify `production`; values were not printed. |
| 2026-05-30 | Production preflight `npm run qa:measurement:local` | pass | Artifact: `output/measurement/smoke-2026-05-30T15-29-27-902Z`. |
| 2026-05-30 | Production preflight HTML validation | pass | `holding.html`, `index.html`, `preview.html`, `privacy.html`, `building-analyst.html`, and `who-its-for.html` passed. |
| 2026-05-30 | Production preflight `npm run qa:measurement:evidence` | pass | Artifact: `output/measurement/evidence-2026-05-30T15-29-37-870Z`. Lighthouse median: performance 83, accessibility 100, best practices 100, SEO 66. |
| 2026-05-30 | Production preflight `npx --no-install netlify build` | pass | Production-context Netlify build packaged the `preview-auth` Edge Function. |
| 2026-05-30 | PR #1 merge | pass | Merged to `main` with merge commit `a3ffe597cad39e76f7cdc9d6ee9c3dea3995253a`. |
| 2026-05-30 | Netlify production deploy | pass | Deploy `6a1b02a24f408c00080a2463` ready for `main` at merge commit `a3ffe59`; Edge Function present. |
| 2026-05-30 | Production route/auth matrix | pass | `/` returned `200` with no hidden links; hidden routes returned `401` without/wrong credentials and `200` with the Keychain credential. |
| 2026-05-30 | Production browser smoke | pass | Public root desktop/mobile had no console issues or horizontal overflow; authenticated `index.html` loaded with no console issues when using HTTP credentials. |
| 2026-05-30 | Post-launch GitHub/Netlify/local state check | pass | PR #1 is merged; latest production deploy `6a1b0359c4363b0008ce0a09` is ready for commit `a7afc4d`; local branch is clean on `main`. |
| 2026-05-30 | Post-launch production route/auth matrix | pass | `/`, `/robots.txt`, and `/sitemap.xml` are public; hidden routes require preview auth and return `200` with Keychain credential. |
| 2026-05-30 | Post-launch browser smoke | pass | Public root desktop/mobile and authenticated `index.html` had no console issues and no horizontal overflow. |
| 2026-05-30 | Public full-site launch plan | pass | Created `docs/codex/PUBLIC_FULL_SITE_LAUNCH_PLAN.md`; no route/auth changes or launch performed. |
| 2026-05-30 | Launch-readiness local route changes | pass | On branch `codex/public-full-site-launch-readiness`, `/` serves the fuller site, launch pages are public, holding is noindex fallback, and robots/sitemap are launch-ready. |
| 2026-05-30 | Launch-readiness local QA | pass | `git diff --check`, HTML validation, `npm run qa:preview-auth`, `npm run qa:measurement:local`, `npm run qa:measurement:evidence`, and `npx --no-install netlify build` passed. Evidence artifact: `output/measurement/evidence-2026-05-30T16-51-27-647Z`. |
| 2026-05-30 | Launch-readiness local browser smoke | pass | Desktop/mobile `/`, desktop `building-analyst.html`, mobile `who-its-for.html`, and mobile `privacy.html` had no console issues and no horizontal overflow. |
| 2026-05-30 | Launch-readiness Netlify preview deploy | pass | Non-production alias preview ready at `https://public-launch-readiness--robson-ai-website.netlify.app`, deploy `6a1b167adff97530bcd449b4`. |
| 2026-05-30 | Launch-readiness preview route matrix | pass | Public launch pages returned `200` and `index, follow`; `holding.html` returned `200` and `noindex, nofollow`. |
| 2026-05-30 | Launch-readiness preview smoke/browser | pass | `QA_BASE_URL=https://public-launch-readiness--robson-ai-website.netlify.app npm run qa:measurement:preview` passed. Preview desktop/mobile browser checks had no console issues or horizontal overflow. |
| 2026-05-31 | Tracker agent-use rule | pass | Added a standing decision to consider agents/background threads for serious tranches, parallel QA, independent review, research, or split implementation tasks. |
| 2026-05-31 | Tracker post-PRD review workflow | pass | Added a post-PRD full app review task series covering analysis, multi-role challenge, UX, governance, data, security, accessibility/mobile, remediation, validation, and release gate. |
| 2026-05-31 | Tracker launch-readiness hold decision | pass | Recorded Wayne's decision to keep the launch-readiness branch as a preview until iOS/app launch materials are ready. |
| 2026-05-31 | Tracker WWDC wait gate | pass | Recorded Wayne's clarification that both website launch-readiness and the related iOS app thread should wait until WWDC. WWDC 2026 date checked against Apple's newsroom: June 8-12, 2026. |
| 2026-06-01 | `npm run qa:preview-auth` | pass | 3/3 preview-auth smoke tests passed. |
| 2026-06-01 | `npm run qa:measurement:local` | pass | Artifact: `output/measurement/smoke-2026-06-01T06-04-17-890Z`. Route matrix, consent flows, and required event contract passed. |
| 2026-06-01 | `npm run qa:measurement:evidence` | pass | Artifact: `output/measurement/evidence-2026-06-01T06-04-26-480Z`. HTML validation, axe checks, smoke, and Lighthouse runs completed. |
| 2026-06-01 | `git diff --check` | pass | No whitespace errors after website-only tracker update. |
| 2026-06-01 | `quick_validate.py` across generated local Codex skills | pass | 28/28 generated skills validated using `/usr/bin/python3`; default Homebrew and Codex runtime Python lacked `PyYAML`, so no package installation was performed. |
| 2026-06-08 | post-WWDC wording scan | pass | Public pages no longer contain stale `surveying-led AI software`, `AI-led`, `AI-assisted`, or `AI-supported` phrasing. Remaining BYO/vendor mentions are narrative guardrails only. |
| 2026-06-08 | `git diff --check` | pass | No whitespace errors after post-WWDC copy refresh. |
| 2026-06-08 | `npx html-validate --rule doctype-style:off --rule void-style:off holding.html index.html preview.html privacy.html building-analyst.html who-its-for.html` | pass | HTML validation passed for launch-readiness pages. |
| 2026-06-08 | `npm run qa:preview-auth` | pass | 3/3 preview-auth smoke tests passed. |
| 2026-06-08 | `npm run qa:measurement:local` | pass | Artifact: `output/measurement/smoke-2026-06-08T20-36-10-711Z`. Contact mailto now uses professional surveying software/building intelligence wording. |
| 2026-06-08 | `npm run qa:measurement:evidence` | pass | Artifact: `output/measurement/evidence-2026-06-08T20-36-21-494Z`. Lighthouse median: performance 94, accessibility 100, best practices 100, SEO 100. |
| 2026-06-08 | Local Playwright browser smoke | pass | Desktop and mobile checks for `/`, `/building-analyst.html`, and `/who-its-for.html` found no console warnings/errors, no horizontal overflow, and no stale generic AI phrases in visible body text. |
| 2026-06-18 | Independent agent copy/release-risk review | pass | Read-only agent found stale privacy footer/PRD/release wording, one over-strong Apple-native phrase, a narrow Building Analyst H1, and an over-rigid App Store/screenshot gate. Findings were applied in scoped files. |
| 2026-06-18 | post-polish wording scan | pass | Public pages no longer contain stale `surveying-led AI software`, `AI-led`, `AI-assisted`, `AI-supported`, or `AI tools and practical software` phrasing. BYO/vendor mentions remain guardrails only. |
| 2026-06-18 | `git diff --check` | pass | No whitespace errors after agent-review polish. |
| 2026-06-18 | `npx html-validate --rule doctype-style:off --rule void-style:off holding.html index.html preview.html privacy.html building-analyst.html who-its-for.html` | pass | HTML validation passed for launch-readiness pages. |
| 2026-06-18 | `npm run qa:preview-auth` | pass | 3/3 preview-auth smoke tests passed. |
| 2026-06-18 | `npm run qa:measurement:local` | pass | Artifact: `output/measurement/smoke-2026-06-18T18-45-47-003Z`. Route matrix, consent flows, contact mailto and event contract passed. |
| 2026-06-18 | `npm run qa:measurement:evidence` | pass | Artifact: `output/measurement/evidence-2026-06-18T18-46-35-548Z`. Lighthouse median: performance 83, accessibility 100, best practices 100, SEO 100. |
| 2026-06-18 | Netlify non-production preview deploy | pass | Alias `https://public-launch-readiness--robson-ai-website.netlify.app`, deploy `6a343e07af7c92bd1d67c724`, state `ready`, context `branch-deploy`. Production unchanged. |
| 2026-06-18 | `QA_BASE_URL=https://public-launch-readiness--robson-ai-website.netlify.app npm run qa:measurement:preview` | pass | Artifact: `output/measurement/smoke-2026-06-18T18-51-50-890Z`. Public routes returned 200 and contact mailto uses professional surveying/building intelligence wording. |
| 2026-06-18 | Browser plugin live preview checks | pass | Browser opened live preview homepage, Building Analyst, and Privacy pages on desktop; homepage and Building Analyst were also checked at mobile width. Titles reflected updated post-WWDC positioning. |
| 2026-06-18 | GitHub draft PR creation | pass | Draft PR #2 opened: `https://github.com/LoganRobson70/robson-ai-solutions-website/pull/2`. Head `codex/public-full-site-launch-readiness`, base `main`, 16 changed files, 9 commits. |
| 2026-06-18 | `QA_BASE_URL=https://deploy-preview-2--robson-ai-website.netlify.app npm run qa:measurement:preview` | pass | GitHub PR Netlify deploy-preview smoke passed. Artifact: `output/measurement/smoke-2026-06-18T19-00-42-691Z`. |
| 2026-06-18 | PR #2 ready-for-review update | pass | PR #2 is no longer draft and remains open: `https://github.com/LoganRobson70/robson-ai-solutions-website/pull/2`. Netlify deploy-preview check passed at `https://deploy-preview-2--robson-ai-website.netlify.app`. |
| 2026-06-18 | PR #2 merge-readiness gate | guarded | PR #2 is open, not draft, and deploy-preview check passes. Merge was not performed because `main` is the Netlify production branch and PR #2 changes public launch routing. |
| 2026-06-18 | Production launch preflight automated gates | pass | `npm run qa:preview-auth`, `npm run qa:measurement:local`, HTML validation, `git diff --check`, `npm run qa:measurement:evidence`, and PR-preview measurement smoke passed. Latest artifacts: `output/measurement/smoke-2026-06-18T20-42-44-167Z`, `output/measurement/smoke-2026-06-18T20-43-01-777Z`, `output/measurement/evidence-2026-06-18T20-43-01-777Z`. Lighthouse median: performance 81, accessibility 100, best practices 100, SEO 100. |
| 2026-06-18 | Production unchanged check | pass | `https://robsonai.co.uk/` returned `200`; `https://robsonai.co.uk/index.html` returned `401` without credentials. No production deploy performed. |
| 2026-06-18 | Browser production launch preflight | no-go | Desktop/mobile route checks had no console errors, no horizontal overflow, correct page titles/descriptions/robots, and no stale AI claims. Launch blocked because `who-its-for.html` rendered dark navy H1 text over a dark hero background and white card headings over white cards. Source points to broad `body[data-page-type="who-its-for"] h1` and hero/card color overrides in `styles.css`. |
| 2026-06-20 | `who-its-for.html` contrast fix local checks | pass | Scoped CSS fix in `styles.css` restores white hero text and dark hero-card headings. Local computed checks passed on desktop 1280x720 and mobile 390x844; screenshots captured at `/tmp/robson-who-contrast-desktop-clean.png` and `/tmp/robson-who-contrast-mobile-clean.png`. |
| 2026-06-20 | Post-fix automated evidence | pass | `git diff --check`, HTML validation, `npm run qa:preview-auth`, `npm run qa:measurement:local`, and `npm run qa:measurement:evidence` passed. Latest artifacts: `output/measurement/smoke-2026-06-20T09-06-00-469Z`, `output/measurement/evidence-2026-06-20T09-06-22-235Z`. Lighthouse median: performance 83, accessibility 100, best practices 100, SEO 100. |
| 2026-06-20 | PR #2 deploy-preview post-fix checks | pass | Netlify deploy-preview passed after commit `afe0aba`; `QA_BASE_URL=https://deploy-preview-2--robson-ai-website.netlify.app npm run qa:measurement:preview` passed with artifact `output/measurement/smoke-2026-06-20T09-08-28-262Z`. Live preview computed checks pass on desktop and mobile: hero H1 `rgb(255, 255, 255)`, card heading `rgb(6, 19, 61)`, no horizontal overflow, no stale AI claims. |
| 2026-06-20 | Production unchanged check | pass | `https://robsonai.co.uk/` returned `200`; `https://robsonai.co.uk/index.html` returned `401` without credentials. No production deploy performed. |
| 2026-06-20 | PR #2 merge | pass | PR #2 merged to `main` at merge commit `d695eba11e2878840d31984ab9f1646e62dd3358`. |
| 2026-06-20 | Netlify production deploy | pass | Production deploy `6a3695c3b9eca200087f4c36` ready for commit `d695eba11e2878840d31984ab9f1646e62dd3358`; published at `2026-06-20T13:29:59.262Z`; secret scan reported no matches. |
| 2026-06-20 | Live production route/metadata check | pass | `/`, `/index.html`, `/building-analyst.html`, `/who-its-for.html`, `/privacy.html`, `/robots.txt`, and `/sitemap.xml` returned `200`. Public root title is `Robson Ai | Surveying software, evidence and building intelligence`. Robots and sitemap are public. |
| 2026-06-20 | Live production measurement smoke | pass | `QA_BASE_URL=https://robsonai.co.uk npm run qa:measurement:preview` passed. Artifact: `output/measurement/smoke-2026-06-20T13-30-51-416Z`. Consent decline/accept flows, contact mailto, route matrix, and no-GA-with-empty-ID checks passed. |
| 2026-06-20 | Live production rendered checks | pass | Desktop `/` and `/who-its-for.html`, mobile `/building-analyst.html` and `/privacy.html` had correct titles/H1s, `index, follow`, no console warnings/errors, no horizontal overflow, no framework overlay, and no stale AI claims. `who-its-for.html` live contrast passed: hero H1 `rgb(255, 255, 255)`, hero-card heading `rgb(6, 19, 61)`. |
| 2026-06-20 | Post-launch Netlify deploy observation | pass | Latest production deploy `6a36970484e43f000821454d` is `ready` for commit `8cc0501ff224e749a727c7132b656f95204ef739`; secret scan reported zero standard and enhanced matches. |
| 2026-06-20 | Post-launch live route/metadata/crawlability observation | pass | `/`, `/index.html`, `/building-analyst.html`, `/who-its-for.html`, and `/privacy.html` returned `200` with correct titles, descriptions, canonicals, `index, follow`, Open Graph image, Twitter card metadata, and no stale AI/provider wording matches. `robots.txt`, `sitemap.xml`, sitemap URLs, and the OG image all returned `200`. |
| 2026-06-20 | Post-launch measurement/contact observation | pass | `QA_BASE_URL=https://robsonai.co.uk npm run qa:measurement:preview` passed. Artifact: `output/measurement/smoke-2026-06-20T17-11-22-647Z`. Consent decline/accept, copy email feedback, contact `mailto:`, route matrix, and no-GA-with-empty-ID checks passed. |
| 2026-06-20 | Post-launch rendered browser observation | pass | Playwright checked desktop `/` and `/who-its-for.html`, mobile `/building-analyst.html` and `/privacy.html`. No console warnings/errors, no horizontal overflow, `index, follow`, correct titles/H1s, and no stale wording matches. Artifact: `output/playwright/post-launch-2026-06-20T17-11-45-326Z`. |
| 2026-06-20 | Post-launch headers/link/fallback observation | pass | Live HTML routes return security headers `nosniff`, `DENY`, strict referrer policy, and disabled camera/geolocation/microphone permissions. `/preview.html` redirects to `/`. `/holding.html` remains accessible as a fallback but is `noindex, nofollow`, and internal links returned `200`. |
| 2026-06-20 | External search cache observation | watch | External search still surfaced an old holding-page snippet for `robsonai.co.uk` shortly after launch. Live site metadata/sitemap/robots are correct, so this is treated as a cache/recrawl watch item rather than a code failure. |
| 2026-06-20 | Interactive polish static checks | pass | `git diff --check`, HTML validation for all public pages, `npm run qa:preview-auth`, and stale wording scan passed. The scan found no `surveying-led AI software`, `AI-led`, `AI-assisted`, `AI-supported`, `BYO API key`, `bring your own API`, `generic chatbot`, or `surveying-led assessment` matches in public pages/scripts/styles. |
| 2026-06-20 | Interactive polish measurement smoke | pass | `npm run qa:measurement:local` passed. Artifact: `output/measurement/smoke-2026-06-20T19-42-57-759Z`. Route matrix, consent flows, no-GA-with-empty-ID checks, contact mailto, and required analytics event contract passed. |
| 2026-06-20 | Interactive polish rendered interaction QA | pass | Playwright verified the new homepage workflow finder and Building Analyst workflow lens on desktop and mobile. Click and keyboard tab changes updated visible panels and ARIA state. No console warnings/errors, no stale wording matches, and no horizontal overflow. Final artifact: `output/playwright/interactive-polish-final-2026-06-20T19-35-40-195Z`; mobile header recheck artifact: `output/playwright/interactive-mobile-header-2026-06-20T19-37-46-319Z`. |
| 2026-06-20 | Interactive polish accessibility/evidence suite | pass | `npm run qa:measurement:evidence` passed after fixing `tabpanel` element semantics, consent-banner landmark labelling, and reveal-animation contrast impact. Artifact: `output/measurement/evidence-2026-06-20T19-42-57-901Z`. Axe: 0 violations on home, index, privacy, Building Analyst, and who-it-fits. Lighthouse median: performance 80, accessibility 100, best practices 100, SEO 100. |
| 2026-06-21 | Professional redesign static checks | pass | `git diff --check`, HTML validation for all public pages, `npm run qa:preview-auth`, and stale-claim scan passed. The scan found no negative `letter-spacing`, BYO API, generic chatbot, or stale AI-provider/product-positioning matches in edited public files. |
| 2026-06-21 | Professional redesign rendered QA | pass | Playwright checked homepage and Building Analyst first viewports plus mobile workflow/lens interactions. No console warnings/errors, no framework overlay, no horizontal overflow, no clipped text, and interactive tabs updated the visible panels. Main artifact: `output/playwright/professional-redesign-final-2026-06-21T08-34-51-027Z`; Building Analyst compactness recheck: `output/playwright/professional-redesign-ba-check-2026-06-21T08-41-04-107Z`. |
| 2026-06-21 | Professional redesign measurement smoke | pass | `npm run qa:measurement:local` passed. Artifact: `output/measurement/smoke-2026-06-21T08-41-49-796Z`. Route matrix, consent flows, no-GA-with-empty-ID checks, contact mailto, and required analytics event contract passed. |
| 2026-06-21 | Professional redesign local link sweep | pass | Local Playwright link sweep checked 39 links/anchors across `/index.html`, `/building-analyst.html`, `/who-its-for.html`, and `/privacy.html`; no missing anchors or `4xx/5xx` internal routes. `mailto:` links were identified and left as mail actions. |
| 2026-06-21 | Professional redesign accessibility/evidence suite | pass | `npm run qa:measurement:evidence` passed after final local adjustments. Artifact: `output/measurement/evidence-2026-06-21T09-03-43-407Z`. Axe: 0 violations on home, index, privacy, Building Analyst, and who-it-fits. Lighthouse median: performance 77, accessibility 100, best practices 100, SEO 100, CLS about 0.0001. |
| 2026-06-21 | Professional redesign commit and production deploy | pass | Committed scoped redesign work as `c0863348c7b036f02bcbe0144372c85a17b5424b` (`Polish Robson AI website design`) and pushed `main`. Netlify production deploy `6a37a995b9eca200080c9aea` is `ready`, branch `main`, context `production`, published at 2026-06-21 09:06 UTC, with secret scan reporting zero standard/enhanced matches. |
| 2026-06-21 | Professional redesign live route/header smoke | pass | `https://robsonai.co.uk/`, `/index.html`, `/building-analyst.html`, `/who-its-for.html`, `/privacy.html`, `/robots.txt`, `/sitemap.xml`, and `/assets/og/robsonai-cover-1200x630.png` all returned `200`. Root response includes Netlify production headers including `nosniff`, `DENY`, strict referrer policy, and disabled camera/geolocation/microphone permissions. |
| 2026-06-21 | Professional redesign live measurement smoke | pass | `QA_BASE_URL=https://robsonai.co.uk npm run qa:measurement:preview` passed. Artifact: `output/measurement/smoke-2026-06-21T09-07-17-423Z`. Live route matrix, consent decline/accept, no-GA-with-empty-ID checks, copy email feedback, and contact `mailto:` passed. |
| 2026-06-21 | Professional redesign live rendered QA | pass | Playwright checked live desktop and mobile homepage, Building Analyst, who-it-fits, privacy, and mobile interactive workflow/lens states. No console warnings/errors, no framework overlay, no horizontal overflow, no clipped text, `index, follow` present, and interactive panels switched correctly. Artifact: `output/playwright/live-professional-redesign-2026-06-21T09-07-51-486Z`. |
| 2026-06-21 | Professional redesign live link sweep | pass | Live Playwright link sweep checked 39 links/anchors across `/`, `/building-analyst.html`, `/who-its-for.html`, and `/privacy.html`; no missing anchors or `4xx/5xx` internal routes. `mailto:` links were identified and left as mail actions. |
| 2026-06-21 | Motion polish research | pass | Reviewed current public references for selective microinteractions, cursor/dynamic motion and motion restraint/accessibility, including Figma web design trends, Awwwards animation/microinteraction galleries, and Nielsen Norman Group guidance to keep animation unobtrusive, purposeful and reduced-motion aware. |
| 2026-06-21 | Motion polish static checks | pass | `git diff --check`, `node --check script.js`, and HTML validation for all public pages passed after adding dependency-free cursor-responsive motion fields and depth surfaces. |
| 2026-06-21 | Motion polish local smoke/evidence | pass | `npm run qa:preview-auth`, `npm run qa:measurement:local`, and `npm run qa:measurement:evidence` passed. Latest artifacts: `output/measurement/smoke-2026-06-21T09-18-43-173Z`, `output/measurement/evidence-2026-06-21T09-18-53-995Z`. Lighthouse median: performance 76, accessibility 100, best practices 100, SEO 100, CLS about 0.0001. |
| 2026-06-21 | Motion polish rendered QA | pass | Playwright verified desktop homepage and Building Analyst pointer motion: ambient CSS variables changed after mouse movement, motion fields rendered, selected panels tilted/responded, no console warnings/errors, and no horizontal overflow. Mobile/touch contexts had no horizontal overflow and did not enable pointer motion; reduced-motion context did not enable pointer motion. Artifact: `output/playwright/motion-polish-2026-06-21T09-20-32-479Z`. |
| 2026-06-21 | Motion polish commit and production deploy | pass | Committed scoped motion polish as `0c3a9f5b5dfa9179b937c47a8d4028cdca6194f9` (`Add motion graphics polish`) and pushed `main`. Netlify production deploy `6a37ad5ed7bc6c00087485aa` is `ready`, branch `main`, context `production`, published at 2026-06-21 09:22 UTC. |
| 2026-06-21 | Motion polish live route smoke | pass | `https://robsonai.co.uk/`, `/index.html`, `/building-analyst.html`, `/who-its-for.html`, `/privacy.html`, `/robots.txt`, `/sitemap.xml`, and `/assets/og/robsonai-cover-1200x630.png` all returned `200`. |
| 2026-06-21 | Motion polish live measurement smoke | pass | `QA_BASE_URL=https://robsonai.co.uk npm run qa:measurement:preview` passed. Artifact: `output/measurement/smoke-2026-06-21T09-23-01-605Z`. Live route matrix, consent decline/accept, no-GA-with-empty-ID checks, copy email feedback, and contact `mailto:` passed. |
| 2026-06-21 | Motion polish live rendered QA | pass | Playwright verified deployed desktop homepage and Building Analyst pointer motion: ambient CSS variables changed after mouse movement, motion fields rendered, selected panels tilted/responded, no console warnings/errors, and no horizontal overflow. Reduced-motion context did not enable pointer motion. Artifact: `output/playwright/live-motion-polish-2026-06-21T09-23-32-236Z`. |
| 2026-06-21 | Project list workbook profile and naming-rule inference | pass | Source workbook `Master Project list by Wayne Robson.xlsx`, `Sheet1`, header row 3, contained 1,068 nonblank rows. Inferred default project convention: `Project` starts with `CM### -` or `C## -` after dash normalisation. Result: 976 valid project rows, 14 naming exceptions, 78 budget/non-project rows. |
| 2026-06-21 | Local project dashboard artifact generation | pass | Generated local-only ignored artifact `output/project-analysis/robson-project-dashboard.html` plus summary `output/project-analysis/project-analysis-summary.json`. Email/contact-email columns were deliberately excluded from the embedded dashboard data. |
| 2026-06-21 | Project dashboard syntax and source reconciliation | pass | Extracted embedded script for `node --check`, then source reconciliation script, email regex scan, `git diff --check`, and `npx --no-install html-validate --rule doctype-style:off --rule void-style:off output/project-analysis/robson-project-dashboard.html` passed. Reconciliation confirmed 1,068 source rows, 976 valid projects, 14 naming exceptions, 78 budget/non-project rows, and 137 active valid projects. |
| 2026-06-21 | Project dashboard Playwright QA | pass | Local server at `http://127.0.0.1:8132/robson-project-dashboard.html` passed assertions for default counts, naming-exception toggle, all-row mode, budget-row search exclusion, active-only filter, construction-stage filter, CSV download, no console errors, and no mobile page-level horizontal overflow. Screenshots: `output/playwright/project-dashboard-2026-06-21/desktop-default.png` and `output/playwright/project-dashboard-2026-06-21/mobile-default.png`. |
| 2026-06-21 | Conversion/contact baseline audit | fail found | Attached screenshot and local Playwright baseline confirmed the homepage credibility section rendered dark text on a dark panel. Baseline audit artifact: `output/playwright/conversion-audit-baseline-2026-06-21T09-32-27-305Z`. |
| 2026-06-21 | Conversion/contact static checks | pass | `git diff --check`, `node --check script.js`, and HTML validation for all public pages passed after local fixes. |
| 2026-06-21 | Conversion/contact smoke checks | pass | `npm run qa:preview-auth` and `npm run qa:measurement:local` passed. Measurement artifact: `output/measurement/smoke-2026-06-21T09-37-29-604Z`. |
| 2026-06-21 | Conversion/contact rendered QA | pass | Playwright verified the fixed credibility section, homepage contact, Building Analyst contact, who-it-fits contact, copy-email feedback, direct mailto CTAs, privacy links, desktop console cleanliness, and mobile overflow. Final artifact: `output/playwright/conversion-contact-polish-rerun-2026-06-21T09-39-54-732Z`. |
| 2026-06-21 | Credibility card strip fix | pass | Playwright verified the paragraph background is transparent in all three homepage credibility cards and captured a fresh local screenshot with no white text strip. Artifact: `output/playwright/credibility-card-strip-fix-2026-06-21T10-19-29-058Z/home-belief-panel-fixed.png`. |
| 2026-06-21 | Conversion/contact accessibility/evidence suite | pass | `npm run qa:measurement:evidence` passed. Artifact: `output/measurement/evidence-2026-06-21T09-40-30-285Z`. Lighthouse median: performance 76, accessibility 100, best practices 100, SEO 100. |
| 2026-06-21 | Design-signature reference review | pass | Reviewed current SaaS/B2B/motion/typography sources and translated the pattern into a restrained local direction: clarity, proof, friction removal, product-led visuals, subtle motion, distinctive type and non-generic brand character. |
| 2026-06-21 | Design-signature Browser QA | pass | In-app Browser verified local homepage page identity, empty-error console, no horizontal overflow, Fraunces headline rendering, homepage hero next-section hint on desktop, transparent credibility-card paragraph backgrounds, non-clipped mobile navigation, and visible mobile primary CTAs on homepage and Building Analyst. Screenshots: `output/playwright/professional-design-signature-2026-06-21/desktop-home.png`, `output/playwright/professional-design-signature-2026-06-21/mobile-home.png`, and `output/playwright/professional-design-signature-2026-06-21/mobile-building-analyst.png`. |
| 2026-06-21 | Design-signature static and smoke checks | pass | `git diff --check`, `node --check script.js`, HTML validation for all public pages, `npm run qa:preview-auth`, and `npm run qa:measurement:local` passed. Measurement smoke artifact: `output/measurement/smoke-2026-06-21T10-28-38-928Z`. |
| 2026-06-21 | Design-signature accessibility/evidence suite | pass | `npm run qa:measurement:evidence` passed. Artifact: `output/measurement/evidence-2026-06-21T10-29-02-819Z`. Axe reports generated for home, index, privacy, Building Analyst and who-it-fits; Lighthouse median: performance 74, accessibility 100, best practices 100, SEO 100, CLS 0. |
| 2026-06-21 | Conversion/design signature commit and production deploy | pass | Committed approved polish bundle as `6e275f9e3e4f56a293c2bd5401a8af55f13f2dc1` (`Polish website conversion and design signature`) and pushed `main`. Netlify production deploy `6a37be74ace5eb0008361ef4` is `ready`, branch `main`, context `production`, published at 2026-06-21 10:35 UTC. |
| 2026-06-21 | Conversion/design signature live route/header smoke | pass | `QA_BASE_URL=https://robsonai.co.uk npm run qa:measurement:preview` confirmed `/`, `/index.html`, `/building-analyst.html`, `/who-its-for.html`, `/privacy.html`, `/robots.txt`, `/sitemap.xml`, and `/assets/og/robsonai-cover-1200x630.png` returned `200`. Root response returned production headers including `nosniff`, `DENY`, strict referrer policy, and disabled camera/geolocation/microphone permissions. |
| 2026-06-21 | Conversion/design signature live measurement smoke | pass | `QA_BASE_URL=https://robsonai.co.uk npm run qa:measurement:preview` passed. Artifact: `output/measurement/smoke-2026-06-21T10-36-29-349Z`. Live route matrix, consent decline/accept, no-GA-with-empty-ID checks, copy email feedback, and prompted contact `mailto:` passed. |
| 2026-06-21 | Conversion/design signature live rendered QA | pass | In-app Browser verified live desktop homepage and mobile homepage/Building Analyst: page identity correct, nonblank DOM, no console warnings/errors, no framework overlay, no horizontal overflow, Fraunces headline rendering, homepage next-section hint, transparent credibility-card paragraph backgrounds, non-clipped mobile navigation, and visible mobile primary CTAs. Screenshots: `output/playwright/live-design-signature-2026-06-21/desktop-home.png`, `output/playwright/live-design-signature-2026-06-21/mobile-home.png`, and `output/playwright/live-design-signature-2026-06-21/mobile-building-analyst.png`. |
| 2026-06-21 | Building Analyst proof-story Product Design QA | pass | Added a no-old-screenshots Product proof section to `building-analyst.html`; Browser rendered desktop and mobile checks found no horizontal overflow, no console warnings/errors, four workflow cards, two status cards, and no references to `building-analyst-output-generate.png` or `building-analyst-draft-view.png`. Screenshots: `output/playwright/building-analyst-proof-story-2026-06-21/desktop-workflow-proof-final.png` and `output/playwright/building-analyst-proof-story-2026-06-21/mobile-workflow-proof-final.png`. |
| 2026-06-21 | Intentional legacy asset removal cleanup | pass | Wayne confirmed removed local assets should be removed from Git. Public favicon/apple-touch links now point at `/assets/robson-ai-icon-v3.png`; stale Netlify header rules for deleted root icon files were removed; deployable file scan found no references to the removed asset filenames. |
| 2026-06-21 | Building Analyst proof-story pre-publish gates | pass | Missing-asset deployable scan, `git diff --check`, `node --check script.js`, HTML validation, `npm run qa:preview-auth`, `npm run qa:measurement:local`, `npm run qa:measurement:evidence`, and `npx --no-install netlify build` passed. Latest artifacts: `output/measurement/smoke-2026-06-21T13-01-49-044Z` and `output/measurement/evidence-2026-06-21T13-01-49-044Z`. Lighthouse median: performance 72, accessibility 100, best practices 100, SEO 100, CLS 0. |
| 2026-06-21 | Building Analyst proof-story production deploy | pass | Committed proof story and intentional legacy asset removal as `51e655f34f78ea8eda3baa5ed7fc7146795c46e5`, then bumped the stylesheet cache version in `53d19da9620b4926258cfa9e0f20767f0c3d207d`; Netlify production deploy `6a37e1c1f001a300081cbcd7` is ready and published for commit `53d19da9620b4926258cfa9e0f20767f0c3d207d`. |
| 2026-06-21 | Building Analyst proof-story live route/asset smoke | pass | `QA_BASE_URL=https://robsonai.co.uk npm run qa:measurement:preview` passed with artifact `output/measurement/smoke-2026-06-21T13-06-51-543Z`; live `/`, `/building-analyst.html`, `/who-its-for.html`, `/privacy.html`, `/assets/robson-ai-icon-v3.png`, and `/assets/og/robsonai-cover-1200x630.png` returned `200`; deleted root icon files returned `404` as expected. |
| 2026-06-21 | Building Analyst proof-story live rendered QA | pass | In-app Browser verified live desktop/mobile `building-analyst.html#workflow-proof`: heading `Proof starts with the workflow.`, stylesheet `./styles.css?v=20260621b`, icon `/assets/robson-ai-icon-v3.png?v=20260509`, four proof cards, two status cards, no old asset references, no horizontal overflow, and no console warnings/errors. Screenshots: `output/playwright/live-building-analyst-proof-story-2026-06-21/desktop-workflow-proof.png` and `output/playwright/live-building-analyst-proof-story-2026-06-21/mobile-workflow-proof.png`. |
| 2026-06-21 | Design-system consolidation audit | pass | Created `docs/codex/DESIGN_SYSTEM_CONSOLIDATION_AUDIT.md` after inspecting the standalone Robson AI Design System folder, live website CSS/copy, `docs/website-narrative.md`, and the Building Analyst Apple `App/DesignSystem`; updated tracker with source-of-truth boundary, risk, and next cleanup recommendation. `git diff --check` passed. |
| 2026-06-21 | Design-system source-of-truth cleanup | pass | Initialised `/Users/wayne/Documents/RobsonAI/Robson AI Design System` as a local Git workspace, added `SOURCE_OF_TRUTH.md`, `CHANGELOG.md`, and `.gitignore`, updated stale provider/payment/auth examples into guardrails or provider-neutral prototype wording, confirmed exact stale phrases no longer appear in source/prototype text, and `node --check _ds_bundle.js` passed. Direct whitespace scan only reported existing Markdown hard-break spacing in brand guideline source docs, which was left unchanged. |
| 2026-06-24 | BuildScan model-view local static checks | pass | `git diff --check` passed. `npx --no-install html-validate index.html building-analyst.html who-its-for.html privacy.html holding.html` passed after replacing invalid proof-container labels and shared consent-banner `div role="region"` markup with validator-clean semantics. |
| 2026-06-24 | BuildScan model-view local measurement smoke | pass | `npm run qa:measurement:local` passed. Latest artifact: `output/measurement/smoke-2026-06-24T18-43-26-677Z`. Route matrix, consent decline/accept, no-GA-with-empty-ID checks, copy email feedback, prompted contact `mailto:`, and measurement contract events passed. |
| 2026-06-24 | BuildScan model-view rendered QA | pass | Playwright checked desktop and mobile homepage navigation to `#buildscan-model-view`: no horizontal overflow, no visible text overflow, BuildScan anchor active, and the section title cleared the sticky header after root scroll-padding fix. Screenshots: `output/playwright/buildscan-model-view-2026-06-24/desktop-anchor-final.png` and `output/playwright/buildscan-model-view-2026-06-24/mobile-anchor-final.png`. |
| 2026-06-24 | BuildScan Ludgershall GLB app load | pass | Launched RobsonAI BuildScan via `/Users/wayne/Documents/RobsonAI/BuildScan/script/build_and_run.sh buildscan --verify`, opened the latest Ludgershall 2026-06-02 GLB, and captured app-window evidence showing the file loaded in BuildScan. Evidence: temp screenshots `codex-shot-2026-06-24_19-51-30-w1639.png` and `codex-shot-2026-06-24_19-51-30-w1638.png`. BuildScan was closed after capture. |
| 2026-06-24 | BuildScan Ludgershall clean model capture | pass | Used BuildScan's generated WebKit viewer HTML/cache output for the loaded GLB, rendered headed Chromium with WebGL enabled, switched to Orbit and Iso view, hid the viewer toolbar/status, and captured a clean model screenshot. Website asset: `assets/showcase/buildscan-ludgershall-model-view.png`; source capture: `output/playwright/buildscan-ludgershall-capture-2026-06-24/ludgershall-buildscan-canvas-clean.png`. |
| 2026-06-24 | BuildScan Ludgershall website validation | pass | After replacing the synthetic BuildScan visual with the real GLB screenshot, `git diff --check`, HTML validation for all public HTML files, and `npm run qa:measurement:local` passed. Latest measurement artifact: `output/measurement/smoke-2026-06-24T19-02-20-144Z`. |
| 2026-06-24 | BuildScan Ludgershall rendered website QA | pass | Playwright verified local desktop and mobile `#buildscan-model-view`: image loaded (`1680x1020`), no horizontal overflow, no visible text overflow, no console messages, and the section title cleared the sticky header. Screenshots: `output/playwright/buildscan-ludgershall-website-2026-06-24/desktop-buildscan-ludgershall-section.png` and `output/playwright/buildscan-ludgershall-website-2026-06-24/mobile-buildscan-ludgershall-section.png`. |
| 2026-06-25 | BuildScan Ludgershall production approval | pass | Wayne approved option 1: public use of the Ludgershall model screenshot plus commit, push, and Netlify production deploy. |
| 2026-06-25 | BuildScan Ludgershall release gates | pass | `git diff --check`, `npx --no-install html-validate index.html building-analyst.html who-its-for.html privacy.html holding.html`, `npm run qa:measurement:local`, and `npx --no-install netlify build` passed before commit. Latest measurement artifact: `output/measurement/smoke-2026-06-25T18-32-25-459Z`. |
| 2026-06-25 | BuildScan Ludgershall release rendered QA | pass | Playwright verified local desktop and mobile `#buildscan-model-view`: the Ludgershall image loaded at `1680x1020`, no horizontal overflow, no visible text overflow, no console messages, and the section title cleared the sticky header. Screenshots: `output/playwright/buildscan-ludgershall-release-2026-06-25/desktop-buildscan-ludgershall-section.png` and `output/playwright/buildscan-ludgershall-release-2026-06-25/mobile-buildscan-ludgershall-section.png`. |
| 2026-06-25 | BuildScan Ludgershall production deploy | pass | Commit `178cac0885aea8b9d813d4c50ac18cb0c68ce7cb` (`Add BuildScan Ludgershall model view`) was pushed to `main`; Netlify production deploy `6a3d74cb38ad980008340f42` is `ready`, published at 2026-06-25 18:35 UTC, context `production`, branch `main`, with no Netlify secret-scan matches. |
| 2026-06-25 | BuildScan Ludgershall live route/asset smoke | pass | `QA_BASE_URL=https://robsonai.co.uk npm run qa:measurement:preview` passed with artifact `output/measurement/smoke-2026-06-25T18-36-16-824Z`. `curl -I https://robsonai.co.uk/assets/showcase/buildscan-ludgershall-model-view.png` returned `200`, `content-type: image/png`, and `content-length: 414491`; live `index.html` references `./styles.css?v=20260624a` and `./assets/showcase/buildscan-ludgershall-model-view.png`. |
| 2026-06-25 | BuildScan Ludgershall live rendered QA | pass | Playwright verified live desktop and mobile `#buildscan-model-view`: image loaded at `1680x1020`, stylesheet cache key was `20260624a`, no horizontal overflow, no visible text overflow, no console messages, and the section title cleared the sticky header. Screenshots: `output/playwright/live-buildscan-ludgershall-2026-06-25/desktop-buildscan-ludgershall-section.png` and `output/playwright/live-buildscan-ludgershall-2026-06-25/mobile-buildscan-ludgershall-section.png`. |
| 2026-06-25 | BuildScan interactive GLB local prototype QA | pass | Created ignored local prototypes only. Generic `model-viewer` loaded the GLB but rendered it too dark for the recommended path. The native Three.js/BuildScan-derived viewer loaded the 125 MB symlinked Ludgershall GLB, started in isometric view, supported Orbit/Pan/Top/Front/Right/Iso/Spin, paused Spin on manual drag, had no console warnings/errors, passed HTML validation and `git diff --check`, and passed 390px mobile checks with no horizontal overflow or overlay collisions. Proof: `output/playwright/buildscan-interactive-glb-prototype-2026-06-25/browser-native-desktop-iso-final.png` and `output/playwright/buildscan-interactive-glb-prototype-2026-06-25/browser-native-mobile-final.png`. |
| 2026-06-27 | BuildScan public-safe GLB optimisation | pass | Used `@gltf-transform/cli` to create `assets/showcase/buildscan-ludgershall-public.glb`: 125 MB raw Ludgershall source reduced to 1.3 MB with meshopt compression, WebP textures, 64px texture cap, and about 106k uploaded vertices. Raw GLB remains uncommitted. |
| 2026-06-27 | BuildScan direct interactive viewer QA | pass | Chrome/GPU Playwright loaded `buildscan-viewer.html`: response `200`, WebGL available, canvas present, viewer ready, no failed requests, no console logs/errors. Screenshot: `output/playwright/buildscan-public-safe-glb-2026-06-26/direct-viewer-chrome-fixed-desktop.png`. |
| 2026-06-27 | BuildScan homepage interactive iframe QA | pass | Chrome/GPU Playwright checked desktop and 390px mobile `index.html#buildscan-model-view`: iframe has no `src` before click; after clicking `Load interactive 3D model`, viewer ready, canvas present, status `Drag to orbit. Scroll or pinch to zoom.`, no horizontal overflow, no console logs/errors, no failed requests. Screenshots include `homepage-interactive-after-load-desktop-clean.png` and `homepage-interactive-after-load-mobile.png`. |
| 2026-06-27 | BuildScan interactive static validation | pass | `node --check script.js`, `npx --no-install html-validate index.html buildscan-viewer.html building-analyst.html who-its-for.html privacy.html holding.html`, `git diff --check`, and `npm run qa:measurement:local` passed. Smoke artifact: `output/measurement/smoke-2026-06-27T09-33-59-007Z`. |
| 2026-06-27 | BuildScan interactive Netlify build | pass | `npx --no-install netlify build` completed under production context and packaged the existing `preview-auth` Edge Function. No production deploy was performed. |
| 2026-06-27 | BuildScan interactive evidence QA | pass with performance watch | `npm run qa:measurement:evidence` passed. Artifact: `output/measurement/evidence-2026-06-27T09-34-14-645Z`. Lighthouse median: performance 72, accessibility 100, best practices 100, SEO 100, CLS near zero, local LCP about 10.95s. |
| 2026-06-27 | Website excellence programme benchmark | pass | Created `docs/codex/WEBSITE_EXCELLENCE_PROGRAMME.md` after specialist agent reviews and rendered local page captures. Evidence folder: `output/playwright/website-excellence-audit-2026-06-27/`. No commit, push, production deploy, GA4, form, DNS, customer data, or external-message action performed. |
| 2026-06-27 | BuildScan interactive hardening syntax/static checks | pass | `node --check script.js`, `node --check scripts/buildscan-viewer-smoke.mjs`, targeted `html-validate buildscan-viewer.html index.html`, and `git diff --check` passed after adding model-ready/error signalling, accessibility controls, and stricter homepage load handling. |
| 2026-06-27 | BuildScan interactive hardening smoke | pass | `npm run qa:buildscan-viewer` passed. Artifact: `output/buildscan-viewer/smoke-2026-06-27T10-09-47-389Z`. Direct viewer returned `200`, WebGL/canvas/model-ready succeeded, embedded homepage loaded the GLB only after click, reached child ready, kept no horizontal overflow, and the final embedded path had no failed requests or console messages. |
| 2026-06-27 | BuildScan interactive hardening evidence suite | pass with performance watch | `npm run qa:measurement:evidence` passed. Artifact: `output/measurement/evidence-2026-06-27T10-07-44-011Z`. Axe reports included `buildscan-viewer.html`; smoke confirmed GLB/vendor route `200`s and measurement flows; Lighthouse median remains performance 72, accessibility 100, best practices 100, SEO 100, LCP about 10.95s. |
| 2026-06-27 | BuildScan interactive hardening Netlify build | pass | `npx --no-install netlify build` passed in production context and packaged existing `preview-auth`. No Netlify deploy was performed. |
| 2026-06-27 | Product IA/proof map and routing validation | pass | Created `docs/codex/PRODUCT_IA_PROOF_MAP.md`, integrated two read-only agent reviews, added `Who it fits` to homepage/Building Analyst navigation, changed BuildScan load-panel copy to visitor-facing fallback wording, and ran `node --check script.js`, targeted HTML validation, `git diff --check`, and `npm run qa:measurement:local`. Latest smoke artifact: `output/measurement/smoke-2026-06-27T10-29-31-182Z`. |
| 2026-06-27 | Public-state docs refresh validation | pass | Updated README, PRD, release handover, measurement QA, AGENTS, launch/readiness docs, first tranche, dirty-release assessment, and capability audit to reflect the current public site and BuildScan Gate 0. `git diff --check` passed; stale active-state wording scan returned no matches; `npm run qa:measurement:local` passed with artifact `output/measurement/smoke-2026-06-27T10-49-44-778Z`. |
| 2026-06-27 | Trust/CTA segmentation local QA | pass | Updated homepage credibility proof/status copy, added four audience-specific mailto prompts, and added clearer `who-its-for.html` route links. `node --check script.js`, full HTML validation, `git diff --check`, and `npm run qa:measurement:local` passed. Latest smoke artifact: `output/measurement/smoke-2026-06-27T10-56-49-058Z`. Playwright rendered QA passed desktop/mobile credibility, contact, and who-it-fits checks with no overflow or console messages. Artifact: `output/playwright/trust-cta-segmentation-2026-06-27T10-58-15-856Z`. |
| 2026-06-27 | Property operations proof local QA | pass | Added homepage `#property-operations` proof section, property-operations nav route, `who-its-for.html` proof link, and docs/proof-map updates. `node --check script.js`, full HTML validation, `git diff --check`, and `npm run qa:measurement:local` passed. Latest smoke artifact: `output/measurement/smoke-2026-06-27T11-09-14-829Z`. Playwright rendered QA passed desktop/mobile operations section checks, route assertions, no-overflow checks and console cleanliness after fixing a mobile cascade issue. Artifact: `output/playwright/property-operations-proof-rerun-2026-06-27T11-10-47-016Z`. |
| 2026-06-27 | Performance-budget baseline evidence | watch | `npm run qa:measurement:evidence` before optimisation passed with artifact `output/measurement/evidence-2026-06-27T11-16-05-783Z`; Lighthouse median remained performance 72, accessibility 97, best practices 100, SEO 100, CLS about 0, LCP about 10.95s. Main bottlenecks were oversized first-load images, render-blocking CSS and hero-copy render delay. |
| 2026-06-27 | Performance-budget static checks | pass | Added small WebP render assets for the header logo, hero mark and BuildScan static image; added font preloads and cache-key bumps; removed homepage hero text from reveal-motion targeting; added Brotli/gzip support to the local static server. `node --check script.js`, `node --check scripts/lib/static-server.mjs`, `node --check scripts/measurement-smoke.mjs`, `git diff --check`, and full HTML validation passed. |
| 2026-06-27 | Performance-budget viewer and smoke checks | pass | `npm run qa:buildscan-viewer` passed with artifact `output/buildscan-viewer/smoke-2026-06-27T11-31-22-297Z`; direct and embedded viewer paths rendered the GLB after opt-in with no console messages, failed requests or horizontal overflow. `npm run qa:measurement:local` passed with artifact `output/measurement/smoke-2026-06-27T11-31-22-297Z` and included the new WebP, GLB and local Three.js routes. |
| 2026-06-27 | Performance-budget evidence suite | pass with LCP watch | `npm run qa:measurement:evidence` passed with artifact `output/measurement/evidence-2026-06-27T11-32-06-016Z`; Lighthouse median improved to performance 90, accessibility 97, best practices 100, SEO 100, CLS 0, LCP about 3.60s. Remaining performance gap: LCP is improved but still above the 2.5s Core Web Vitals target. |
| 2026-06-27 | Performance-budget rendered QA | pass | Playwright rendered QA passed desktop and 390px mobile homepage/BuildScan checks. Header logo and hero mark use the new WebP assets; desktop BuildScan uses the 840px WebP and mobile uses the 420px WebP; CSS/JS were served with Brotli by the local evidence server; hero copy transform is `none`; no console messages, failed requests, or horizontal overflow. Artifact: `output/playwright/performance-budget-recovery-2026-06-27T11-33-32-682Z`. The mobile consent-banner watch item was resolved in the follow-on local consent polish tranche. |
| 2026-06-27 | Mobile consent release QA | pass | Added final mobile consent CSS override so the banner keeps Accept, Decline and Privacy Notice visible while using a compact bottom bar. Playwright probes at 390x844 and 320x700 found no horizontal overflow; the banner did not collide with the BuildScan load button; privacy action displayed on mobile. Artifact: `output/playwright/mobile-consent-polish-probe-2026-06-27T11-42-11-615Z`. `node --check script.js`, full HTML validation, `git diff --check`, `npm run qa:measurement:local`, and `npm run qa:buildscan-viewer` passed; clean viewer rerun artifact: `output/buildscan-viewer/smoke-2026-06-27T11-43-34-163Z`. |
| 2026-06-27 | Mobile consent evidence suite | pass with LCP watch | `npm run qa:measurement:evidence` passed with artifact `output/measurement/evidence-2026-06-27T11-43-52-280Z`; Lighthouse median remained performance 90, accessibility 97, best practices 100, SEO 100, CLS 0, LCP about 3.68s. Consent decline/accept and no-GA-with-empty-ID checks still pass. |
| 2026-06-27 | Icon payload performance cleanup | pass | Generated `assets/robson-ai-icon-v3-32.png` and `assets/robson-ai-icon-v3-180.png`, updated public favicon/apple-touch links and the BuildScan viewer favicon, and added the icon routes to measurement smoke. Focused Playwright resource check proved homepage first load no longer requests the full-size `robson-ai-icon-v3.png`; artifact: `output/playwright/icon-payload-check-2026-06-27T11-51-24-052Z`. Static checks, HTML validation, `npm run qa:measurement:local`, and `npm run qa:buildscan-viewer` passed. |
| 2026-06-27 | Enforced Lighthouse budget evidence suite | pass | Added Lighthouse budget enforcement to `scripts/measurement-evidence.mjs`. `npm run qa:measurement:evidence` passed with artifact `output/measurement/evidence-2026-06-27T11-53-33-931Z`; enforced budget actuals: performance 100, accessibility 97, best practices 100, SEO 100, CLS 0, LCP about 1.73s. Thresholds: performance >= 90, accessibility >= 95, best practices 100, SEO 100, CLS <= 0.1, LCP <= 2.5s. |
| 2026-06-27 | Release-candidate final local verification pass | pass | Fresh closeout after tracker correction passed: `node --check script.js`, `node --check scripts/measurement-evidence.mjs`, `node --check scripts/measurement-smoke.mjs`, `node --check scripts/buildscan-viewer-smoke.mjs`, full HTML validation, `git diff --check`, `npm run qa:measurement:local`, `npm run qa:buildscan-viewer`, and `npm run qa:measurement:evidence`. Artifacts: `output/measurement/smoke-2026-06-27T12-00-10-152Z`, `output/buildscan-viewer/smoke-2026-06-27T12-00-54-174Z`, and `output/measurement/evidence-2026-06-27T12-01-08-413Z`. Enforced Lighthouse budget passed with performance 100, accessibility 97, best practices 100, SEO 100, CLS 0, and LCP about 1.73s. |
| 2026-06-27 | Release-header and preview-gate hardening | pass | Added `scripts/release-header-smoke.mjs`, `qa:release-headers`, `qa:release-headers:preview`, and `qa:buildscan-viewer:preview`; added Netlify deny redirects for source/repo paths; added explicit cache rules and GLB MIME. `node --check scripts/release-header-smoke.mjs`, `npm run qa:release-headers`, `npm run qa:preview-auth`, HTML validation including `404.html`, `git diff --check`, `npx --no-install netlify build`, `npm run qa:measurement:local`, `npm run qa:buildscan-viewer`, and `npm run qa:measurement:evidence` passed. Artifacts: `output/release-headers/smoke-2026-06-27T12-14-50-704Z/release-header-smoke.json`, `output/buildscan-viewer/smoke-2026-06-27T12-14-50-809Z`, `output/measurement/smoke-2026-06-27T12-15-09-230Z`, and `output/measurement/evidence-2026-06-27T12-15-54-740Z`. |
| 2026-06-27 | Preview command fail-closed checks | pass | With `QA_BASE_URL` unset, `npm run qa:measurement:preview`, `npm run qa:buildscan-viewer:preview`, and `npm run qa:release-headers:preview` each failed intentionally with a clear error instead of falling back to production or local state. |
| 2026-06-27 | Rendered release smoke baseline | pass | Added `scripts/rendered-release-smoke.mjs`, `qa:rendered`, and `qa:rendered:preview`; upgraded `404.html` to a noindex branded fallback with favicon/style assets. Latest `npm run qa:rendered` passed with artifact `output/playwright/rendered-release-smoke-2026-06-27T12-42-07-389Z`, capturing desktop homepage, mobile consent, mobile BuildScan before load, desktop interactive BuildScan loaded, Building Analyst proof, Who it fits, Privacy, 404 and holding fallback screenshots. `npm run qa:rendered:preview` fails closed without `QA_BASE_URL`. Static checks and `npm run qa:buildscan-viewer` also passed. |
| 2026-06-27 | Release-candidate inventory governance | pass | Added `scripts/release-candidate-inventory.mjs` and `qa:release-inventory`. Latest `npm run qa:release-inventory` passed inside `qa:release:local` with artifact `output/release-inventory/inventory-2026-06-27T15-47-25-008Z/release-candidate-inventory.json`: 49 dirty candidate files were allowlisted, 14 file budgets passed, the BuildScan GLB was 1,354,404 bytes with binary glTF 2.0 structure and zero external URI references, and 60 scanned files produced zero secret findings. |
| 2026-06-27 | Local security/privacy release gate | pass | Added `scripts/release-security-smoke.mjs` and `qa:release-security`; added HSTS to `netlify.toml` and the release-header smoke baseline; cleaned `preview.html` to validate without inline JavaScript. Latest `npm run qa:release-security` and `npm run qa:release-headers` passed inside `qa:release:local`. Artifacts: `output/release-security/smoke-2026-06-27T15-47-24-771Z/release-security-smoke.json` and `output/release-headers/smoke-2026-06-27T15-47-24-892Z/release-header-smoke.json`. This is a bounded local smoke gate, not a substitute for the full Codex Security scan. |
| 2026-06-27 | Local release gate runner | pass | Added `scripts/release-local-gate.mjs` and `qa:release:local` to run syntax checks, HTML validation, Netlify build, preview-auth, release-security, release-headers, release-inventory, BuildScan viewer, rendered release smoke, measurement local/evidence, and `git diff --check` in one ordered release gate. `npm run qa:release:local` passed all 20 steps. Summary: `output/release-local-gate/gate-2026-06-27T15-47-18-420Z/release-local-gate.json`; rendered smoke: `output/playwright/rendered-release-smoke-2026-06-27T15-47-33-099Z`; evidence pack: `output/measurement/evidence-2026-06-27T15-47-52-894Z`, Lighthouse performance 100, accessibility 97, best practices 100, SEO 100, CLS 0, LCP about 1.73s. |
| 2026-06-27 | Preview release gate runner | pass, waiting for real preview | Added `scripts/release-preview-gate.mjs` and `qa:release:preview` to run release inventory, release-security source posture, deployed release headers, deployed BuildScan viewer smoke, deployed rendered release smoke, deployed measurement smoke, and `git diff --check` against one explicit preview URL. Safety checks passed: `node --check scripts/release-preview-gate.mjs`; `env -u QA_BASE_URL npm run qa:release:preview` failed closed without falling back to production/local; `QA_BASE_URL=https://robsonai.co.uk npm run qa:release:preview` rejected the production host by default. Real Netlify preview execution still requires Wayne approval to commit, push, and deploy a preview. |
| 2026-06-27 | Release approval packet | pass | Added `docs/codex/RELEASE_APPROVAL_PACKET.md` and linked it from README/release handover. It defines exactly what `buildscan-interactive-preview-release-candidate` approval means, what remains excluded, the public GLB decision point, current evidence, candidate file groups, preview procedure, production gate, and rollback path. `npm run qa:release-inventory` passed after adding the packet with artifact `output/release-inventory/inventory-2026-06-27T15-54-55-903Z/release-candidate-inventory.json`: 50 dirty candidate files, 14 budgeted files, zero GLB external URI references, and zero secret findings. `git diff --check` passed. |
| 2026-06-27 | Release approval packet sanity pass | pass | Post-compaction closeout verified `docs/codex/RELEASE_APPROVAL_PACKET.md`, README, release handover, and tracker references point at the latest inventory artifact `output/release-inventory/inventory-2026-06-27T15-54-55-903Z/release-candidate-inventory.json`; the previous `15-53-45` artifact reference is absent. `git diff --check` passed. No commit, push, preview deploy, or production deploy was performed. |
| 2026-06-27 | Who-page contrast polish | pass | Fresh visual review of `output/playwright/rendered-release-smoke-2026-06-27T16-00-08-645Z/desktop-who-its-for.png` found low-contrast audience fit cards and contact-section copy on `who-its-for.html`. Added narrow CSS overrides so fit cards stay readable on the light card treatment and the contact band remains a high-contrast dark conversion block. `npm run qa:rendered && git diff --check` passed with corrected screenshot artifact `output/playwright/rendered-release-smoke-2026-06-27T16-05-57-835Z`; final `npm run qa:release:local` passed all 20 steps with summary `output/release-local-gate/gate-2026-06-27T16-06-38-150Z/release-local-gate.json`, rendered smoke `output/playwright/rendered-release-smoke-2026-06-27T16-06-50-255Z`, release inventory `output/release-inventory/inventory-2026-06-27T16-06-43-723Z/release-candidate-inventory.json`, and evidence pack `output/measurement/evidence-2026-06-27T16-07-07-498Z` showing Lighthouse performance 100, accessibility 97, best practices 100, SEO 100, CLS 0, and LCP about 1.73s. No commit, push, preview deploy, or production deploy was performed. |
| 2026-06-27 | Holding fallback current-state polish | pass | Fresh visual review of `output/playwright/rendered-release-smoke-2026-06-27T16-06-50-255Z/desktop-holding-fallback.png` found stale noindex fallback copy saying the fuller site was private/on the way. Updated `holding.html` metadata, visible copy, CTA, Robson AI casing, and footer so it remains a noindex fallback for old links while pointing to the live public website. Stale phrase scan for active holding copy returned no matches. `npm run qa:release:local` passed all 20 steps with summary `output/release-local-gate/gate-2026-06-27T16-18-21-057Z/release-local-gate.json`, rendered smoke `output/playwright/rendered-release-smoke-2026-06-27T16-18-34-572Z`, release inventory `output/release-inventory/inventory-2026-06-27T16-18-27-147Z/release-candidate-inventory.json`, and evidence pack `output/measurement/evidence-2026-06-27T16-19-02-559Z` showing Lighthouse performance 100, accessibility 97, best practices 100, SEO 100, CLS 0, and LCP about 1.73s. No commit, push, preview deploy, or production deploy was performed. |
| 2026-06-27 | Stale fallback copy gate hardening | pass | Added automated protection for the stale holding/private-site copy issue found during manual screenshot review. `scripts/release-security-smoke.mjs` now checks `holding.html` source for forbidden stale wording, noindex status, current live-site copy, and the live-site CTA. `scripts/rendered-release-smoke.mjs` now checks the visible rendered holding fallback for current-state copy and the `/` live-site link. Targeted `node --check scripts/release-security-smoke.mjs`, `node --check scripts/rendered-release-smoke.mjs`, `npm run qa:release-security`, `npm run qa:rendered`, and `git diff --check` passed. Final `npm run qa:release:local` passed all 20 steps with summary `output/release-local-gate/gate-2026-06-27T16-27-00-561Z/release-local-gate.json`, release security `output/release-security/smoke-2026-06-27T16-27-06-648Z/release-security-smoke.json`, rendered smoke `output/playwright/rendered-release-smoke-2026-06-27T16-27-14-415Z`, release inventory `output/release-inventory/inventory-2026-06-27T16-27-06-888Z/release-candidate-inventory.json`, and evidence pack `output/measurement/evidence-2026-06-27T16-27-42-363Z` showing Lighthouse performance 100, accessibility 97, best practices 100, SEO 100, CLS 0, and LCP about 1.73s. No commit, push, preview deploy, or production deploy was performed. |
| 2026-06-27 | BuildScan viewer keyboard accessibility gate | pass | Added direct keyboard coverage to `scripts/buildscan-viewer-smoke.mjs` so the release gate now tabs through the BuildScan viewer toolbar and activates Orbit, Pan, Top view, Zoom In, and Reset from the keyboard while checking status and `aria-pressed` state changes. `node --check scripts/buildscan-viewer-smoke.mjs` passed. `npm run qa:buildscan-viewer` passed with artifact `output/buildscan-viewer/smoke-2026-06-27T16-39-45-847Z`, including `keyboardInteraction` evidence. Final `npm run qa:release:local` passed all 20 steps with summary `output/release-local-gate/gate-2026-06-27T16-41-21-392Z/release-local-gate.json`, BuildScan viewer evidence `output/buildscan-viewer/smoke-2026-06-27T16-41-28-625Z`, rendered smoke `output/playwright/rendered-release-smoke-2026-06-27T16-41-36-424Z`, release inventory `output/release-inventory/inventory-2026-06-27T16-41-28-200Z/release-candidate-inventory.json`, and evidence pack `output/measurement/evidence-2026-06-27T16-41-56-527Z` showing Lighthouse performance 100, accessibility 97, best practices 100, SEO 100, CLS 0, and LCP about 1.73s. No commit, push, preview deploy, or production deploy was performed. |
| 2026-06-27 | Site keyboard release smoke gate | pass | Added `scripts/keyboard-release-smoke.mjs`, `qa:keyboard`, and `qa:keyboard:preview`, then wired the keyboard smoke into both `qa:release:local` and `qa:release:preview`. The smoke verifies homepage skip-link focus, consent decline, workflow tab arrow/end-key navigation, keyboard copy-email feedback, keyboard-triggered BuildScan opt-in/model-ready state, Building Analyst lens tab navigation, and Building Analyst copy-email feedback. It also saves browser screenshots for the exercised states. `node --check scripts/keyboard-release-smoke.mjs`, `node --check scripts/release-local-gate.mjs`, `node --check scripts/release-preview-gate.mjs`, and `npm run qa:keyboard` passed with artifact `output/playwright/keyboard-release-smoke-2026-06-27T16-50-07-368Z`. Final `npm run qa:release:local` passed all 22 steps with summary `output/release-local-gate/gate-2026-06-27T16-51-11-130Z/release-local-gate.json`, keyboard smoke `output/playwright/keyboard-release-smoke-2026-06-27T16-51-25-708Z`, BuildScan viewer evidence `output/buildscan-viewer/smoke-2026-06-27T16-51-18-284Z`, rendered smoke `output/playwright/rendered-release-smoke-2026-06-27T16-51-30-938Z`, release inventory `output/release-inventory/inventory-2026-06-27T16-51-17-871Z/release-candidate-inventory.json`, and evidence pack `output/measurement/evidence-2026-06-27T16-52-15-388Z` showing Lighthouse performance 100, accessibility 97, best practices 100, SEO 100, CLS 0, and LCP about 1.73s. `docs/codex/WEBSITE_EXCELLENCE_PROGRAMME.md` now records the Robson brand standard and bold/cinematic approval rule. No commit, push, preview deploy, or production deploy was performed. |
| 2026-06-27 | Semantic SEO release smoke gate | pass | Added `scripts/semantic-seo-smoke.mjs`, `qa:semantic-seo`, and `qa:semantic-seo:preview`, then wired the smoke into both `qa:release:local` and `qa:release:preview`. The smoke verifies public-page `en-GB`, titles, descriptions, canonicals, robots, `main`, meaningful H1s, primary nav, skip links, image alt/dimensions, Open Graph/Twitter metadata, homepage Organization JSON-LD, robots/sitemap alignment, noindex posture for fallback/viewer pages, and current `Robson AI` casing. Corrected stale mixed-case brand text in public metadata and contact/ARIA labels. `node --check scripts/semantic-seo-smoke.mjs`, `node --check scripts/release-local-gate.mjs`, `node --check scripts/release-preview-gate.mjs`, and `npm run qa:semantic-seo` passed with artifact `output/semantic-seo/smoke-2026-06-27T17-05-44-372Z/semantic-seo-smoke.json`. Final `npm run qa:release:local` passed all 24 steps with summary `output/release-local-gate/gate-2026-06-27T17-42-07-632Z/release-local-gate.json`, semantic/SEO smoke `output/semantic-seo/smoke-2026-06-27T17-42-25-620Z/semantic-seo-smoke.json`, keyboard smoke `output/playwright/keyboard-release-smoke-2026-06-27T17-42-20-779Z`, BuildScan viewer evidence `output/buildscan-viewer/smoke-2026-06-27T17-42-14-050Z`, rendered smoke `output/playwright/rendered-release-smoke-2026-06-27T17-42-32-713Z`, release inventory `output/release-inventory/inventory-2026-06-27T17-42-13-716Z/release-candidate-inventory.json`, and evidence pack `output/measurement/evidence-2026-06-27T17-42-49-535Z` showing Lighthouse performance 100, accessibility 97, best practices 100, SEO 100, CLS 0, and LCP about 1.73s. No commit, push, preview deploy, or production deploy was performed. |
| 2026-06-27 | Release staging manifest | pass | Added `docs/codex/RELEASE_STAGING_MANIFEST.md` to define the exact approval-gated preview commit scope: 24 modified tracked files, 29 untracked candidate files, asset size watch, forbidden paths, explicit `git add -- <paths>` command for after approval only, post-staging checks, preview checks, and remaining production gates. Updated `docs/codex/RELEASE_APPROVAL_PACKET.md` to require the manifest for staging scope. `npm run qa:release-inventory` passed after adding the manifest with 53 dirty candidate files, 14 budgeted files, zero GLB external URI references, and zero secret findings. Final `npm run qa:release:local` passed all 24 steps with summary `output/release-local-gate/gate-2026-06-27T17-42-07-632Z/release-local-gate.json`, release inventory `output/release-inventory/inventory-2026-06-27T17-42-13-716Z/release-candidate-inventory.json`, BuildScan viewer evidence `output/buildscan-viewer/smoke-2026-06-27T17-42-14-050Z`, keyboard smoke `output/playwright/keyboard-release-smoke-2026-06-27T17-42-20-779Z`, semantic/SEO smoke `output/semantic-seo/smoke-2026-06-27T17-42-25-620Z/semantic-seo-smoke.json`, rendered smoke `output/playwright/rendered-release-smoke-2026-06-27T17-42-32-713Z`, and evidence pack `output/measurement/evidence-2026-06-27T17-42-49-535Z` showing Lighthouse performance 100, accessibility 97, best practices 100, SEO 100, CLS 0, and LCP about 1.73s. No staging, commit, push, preview deploy, or production deploy was performed. |
| 2026-06-27 | 404 recovery polish | pass | Manual review of `output/playwright/rendered-release-smoke-2026-06-27T17-42-32-713Z/desktop-404.png` found the noindex 404 fallback looked sparse compared with the rest of the release candidate. Upgraded `404.html` with standard Robson AI header/navigation, metadata, recovery route cards, return/contact CTAs, footer and skip link while preserving `noindex,nofollow`. Targeted checks passed: `npx --no-install html-validate --rule doctype-style:off --rule void-style:off 404.html`, `npm run qa:semantic-seo`, `npm run qa:rendered`, and `git diff --check`; focused rendered artifact: `output/playwright/rendered-release-smoke-2026-06-27T17-51-43-490Z/desktop-404.png`. Final `npm run qa:release:local` passed all 24 steps with summary `output/release-local-gate/gate-2026-06-27T17-53-54-882Z/release-local-gate.json`, release inventory `output/release-inventory/inventory-2026-06-27T17-54-00-613Z/release-candidate-inventory.json`, BuildScan viewer evidence `output/buildscan-viewer/smoke-2026-06-27T17-54-00-956Z`, keyboard smoke `output/playwright/keyboard-release-smoke-2026-06-27T17-54-07-377Z`, semantic/SEO smoke `output/semantic-seo/smoke-2026-06-27T17-54-12-088Z/semantic-seo-smoke.json`, rendered smoke `output/playwright/rendered-release-smoke-2026-06-27T17-54-19-223Z`, and evidence pack `output/measurement/evidence-2026-06-27T17-54-36-153Z` showing Lighthouse performance 100, accessibility 97, best practices 100, SEO 100, CLS 0, and LCP about 1.73s. No staging, commit, push, preview deploy, or production deploy was performed. |
| 2026-06-27 | Website excellence evidence alignment | pass | Updated `docs/codex/WEBSITE_EXCELLENCE_PROGRAMME.md` so the programme's current-state summary, release-decision options, and local evidence list match the latest post-404 release candidate rather than older audit artifacts. Spawned two read-only specialist agent checks for release governance and UX/accessibility; neither returned within the two-minute closeout window, so no agent finding was treated as evidence. `npm run qa:release-inventory` passed with artifact `output/release-inventory/inventory-2026-06-27T18-06-20-174Z/release-candidate-inventory.json`: 53 dirty candidate files, 14 budgeted files, zero GLB external URI references, and zero secret findings. `git diff --check` passed. No staging, commit, push, preview deploy, or production deploy was performed. |
| 2026-06-27 | Release staging manifest count alignment | pass | Corrected `docs/codex/RELEASE_STAGING_MANIFEST.md` so the dirty-scope summary matches the current inventory: 24 modified tracked files, 29 untracked candidate files, and 53 dirty candidate files total. The explicit staging file list was already aligned; this fixes the summary text before approval-gated staging. `npm run qa:release-inventory` passed with artifact `output/release-inventory/inventory-2026-06-27T18-11-02-651Z/release-candidate-inventory.json`; `git diff --check` passed. No staging, commit, push, preview deploy, or production deploy was performed. |
| 2026-06-27 | Fresh local release regression pass | pass | Ran `npm run qa:release:local` after the staging-manifest count correction. The gate passed all 24 steps with summary `output/release-local-gate/gate-2026-06-27T18-12-42-756Z/release-local-gate.json`, release security `output/release-security/smoke-2026-06-27T18-12-48-717Z/release-security-smoke.json`, release headers `output/release-headers/smoke-2026-06-27T18-12-48-833Z/release-header-smoke.json`, release inventory `output/release-inventory/inventory-2026-06-27T18-12-48-944Z/release-candidate-inventory.json`, BuildScan viewer evidence `output/buildscan-viewer/smoke-2026-06-27T18-12-49-313Z`, keyboard smoke `output/playwright/keyboard-release-smoke-2026-06-27T18-12-56-202Z`, semantic/SEO smoke `output/semantic-seo/smoke-2026-06-27T18-13-00-979Z/semantic-seo-smoke.json`, rendered smoke `output/playwright/rendered-release-smoke-2026-06-27T18-13-08-096Z`, measurement smoke `output/measurement/smoke-2026-06-27T18-13-18-989Z`, and evidence pack `output/measurement/evidence-2026-06-27T18-13-25-066Z` showing Lighthouse performance 100, accessibility 97, best practices 100, SEO 100, CLS 0, and LCP about 1.73s. No staging, commit, push, preview deploy, or production deploy was performed. |
| 2026-06-27 | Rendered release screenshot spot-check | pass | Manually inspected the latest rendered screenshots from `output/playwright/rendered-release-smoke-2026-06-27T18-13-08-096Z`: desktop homepage, desktop BuildScan loaded state, Who it fits, Privacy, Building Analyst, 404, mobile consent first load, and mobile BuildScan before-load. No obvious visual blocker was found. The rendered summary also reported no horizontal overflow, no visible text overflow, no console messages, no failed requests, `buildscanLoadButtonClear: true`, and model-ready BuildScan state after opt-in. No product UI edits, staging, commit, push, preview deploy, or production deploy were performed. |
| 2026-06-27 | Dependency audit risk capture | warning | Ran read-only dependency audits and saved ignored local artifacts under `output/dependency-audit/`. `npm audit --omit=dev --audit-level=moderate` passed with zero production-footprint vulnerabilities. Full `npm audit --audit-level=moderate` returned 27 dev/release-tooling vulnerabilities: 20 moderate and 7 high, largely in transitive dependencies used by local QA/build tooling rather than browser-shipped assets. No `npm audit fix`, dependency update, staging, commit, push, preview deploy, or production deploy was performed. |
| 2026-06-27 | Dependency remediation plan | warning, approval needed | Mapped the dependency audit to direct tooling and dry-run remediation options. Current full audit remains 27 dev/release-tooling findings: 20 moderate and 7 high. `npm audit fix --dry-run` would update 14 transitive packages, add 2, and remove 1, but still reports 27 findings in dry-run audit metadata. `npm audit fix --force --dry-run` warns that protections are disabled, proposes changing Lighthouse to `12.6.1`, and would churn 20 added / 74 removed / 23 changed packages; it is not recommended and remains separately approval-gated. A temp-copy combined path using non-force package-lock remediation plus targeted QA-tool updates (`lighthouse@13.4.0`, `@axe-core/cli@4.12.1`, `html-validate@10.17.0`, `playwright@1.61.1`) reduced audit findings to 17 moderate and 0 high, leaving only Lighthouse/Sentry/OpenTelemetry residual dev-tooling risk. Updated `docs/codex/RELEASE_APPROVAL_PACKET.md` to document the plan and clarify that dependency-remediation approval does not approve GLB preview exposure, staging, commit, push, preview deploy, or production deploy. |
| 2026-06-27 | Product/design acceptance gate evidence | pass locally, gated for release | Ran fresh `npm run qa:rendered`; artifact `output/playwright/rendered-release-smoke-2026-06-27T18-42-33-157Z` covers desktop homepage, mobile consent first load, mobile BuildScan before-load, desktop BuildScan interactive loaded state, Building Analyst, Who it fits, Privacy, 404, and holding fallback. Rendered summary reports no horizontal overflow, no visible text overflow, no console messages, no failed requests, `buildscanLoadButtonClear: true`, and model-ready BuildScan state after opt-in. Manual screenshot inspection found the homepage, mobile first load, BuildScan proof, Building Analyst page, Who it fits page, 404, and holding fallback are locally coherent against the product/design gate. Pass caveats remain: interactive GLB is still approval-gated, formal external credentials/case studies remain future proof gaps, deployed preview validation is still required, dependency remediation remains recommended before production, and rollback target must be verified before production. |
| 2026-06-27 | Product/design acceptance smoke gate | pass | Added `scripts/product-design-acceptance-smoke.mjs`, `qa:product-design`, and `qa:product-design:preview`, then wired it into `qa:release:local` and `qa:release:preview`. The smoke checks rendered route content for first-viewport clarity, proof-status labels, cautious release-stage claims, audience paths, CTA hierarchy, trust/privacy boundaries, reduced-motion support, and BuildScan opt-in language. Targeted validation passed: `node --check scripts/product-design-acceptance-smoke.mjs`, `npm run qa:product-design`, preview mode fails closed without `QA_BASE_URL`, and preview mode rejects `https://robsonai.co.uk`. Full `npm run qa:release:local` passed all 26 steps with summary `output/release-local-gate/gate-2026-06-27T18-52-01-542Z/release-local-gate.json`, product/design artifact `output/product-design-acceptance/smoke-2026-06-27T18-52-27-270Z/product-design-acceptance-smoke.json`, release inventory `output/release-inventory/inventory-2026-06-27T18-52-07-840Z/release-candidate-inventory.json`, rendered smoke `output/playwright/rendered-release-smoke-2026-06-27T18-52-32-701Z`, and evidence pack `output/measurement/evidence-2026-06-27T18-52-51-964Z`. No dependency update, staging, commit, push, preview deploy, or production deploy was performed. |
| 2026-06-27 | Responsive route matrix smoke gate | pass | Added `scripts/responsive-route-smoke.mjs`, `qa:responsive`, and `qa:responsive:preview`, then wired it into both local and deployed-preview release gates. The smoke checks `/`, `/building-analyst.html`, `/who-its-for.html`, `/privacy.html`, `/404.html`, `/holding.html`, and `/buildscan-viewer.html` across mobile 390x844, tablet 768x1024, and desktop 1440x1000 for HTTP 200 status, route-specific current-state copy, horizontal overflow, obvious nowrap text overflow, primary control sizing, console/page errors, and failed requests. It aligns the direct BuildScan viewer route with the dedicated viewer smoke by validating document title, toolbar, status/model-ready state, and safe GLB-abort handling only after a successful GLB response. Targeted validation passed: `node --check scripts/responsive-route-smoke.mjs`, `npm run qa:responsive`, `env -u QA_BASE_URL npm run qa:responsive:preview` failed closed, and `QA_BASE_URL=https://robsonai.co.uk npm run qa:responsive:preview` rejected production. Full `npm run qa:release:local` passed all 28 steps with summary `output/release-local-gate/gate-2026-06-27T19-06-27-197Z/release-local-gate.json`, responsive artifact `output/responsive-route/smoke-2026-06-27T19-06-57-101Z/responsive-route-smoke.json`, release inventory `output/release-inventory/inventory-2026-06-27T19-06-33-187Z/release-candidate-inventory.json`, rendered smoke `output/playwright/rendered-release-smoke-2026-06-27T19-07-17-130Z`, and evidence pack `output/measurement/evidence-2026-06-27T19-08-00-690Z`. No dependency update, staging, commit, push, preview deploy, or production deploy was performed. |
| 2026-06-27 | Dependency audit read-only refresh | warning, approval needed | Refreshed dependency audit evidence without changing dependencies. `npm audit --omit=dev --audit-level=moderate --json` passed with zero production-footprint vulnerabilities; artifact `output/dependency-audit/audit-2026-06-27T20-16-production-footprint.json`. Full `npm audit --audit-level=moderate --json` still reported 27 dev/release-tooling findings: 20 moderate and 7 high; artifact `output/dependency-audit/audit-2026-06-27T20-16-dev-tooling.json`. Non-force `npm audit fix --dry-run --json` still exits non-zero and would change 14 packages, add 2, remove 1, and still report 27 findings; artifact `output/dependency-audit/audit-fix-dry-run-2026-06-27T20-16.json`. No real `npm audit fix`, dependency update, staging, commit, push, preview deploy, or production deploy was performed. |
| 2026-06-27 | Publish-readiness audit checklist | pass locally, approval needed | Added `docs/codex/PUBLISH_READINESS_AUDIT.md` as the single checklist from local candidate to production publish. It records local readiness at 99%, production publish-readiness at 95%, the evidence snapshot, remaining gates, recommended publish path, decision options, and hard stops. Updated `docs/codex/RELEASE_STAGING_MANIFEST.md` to include the audit file and 56-file dirty candidate scope; linked the audit from `docs/codex/RELEASE_APPROVAL_PACKET.md` and `docs/codex/WEBSITE_EXCELLENCE_PROGRAMME.md`. `npm run qa:release-inventory` passed with artifact `output/release-inventory/inventory-2026-06-27T19-24-18-757Z/release-candidate-inventory.json`: 56 dirty candidate files, 14 budgeted files, zero GLB external URI references, and zero secret findings across 67 scanned files. No dependency update, staging, commit, push, preview deploy, or production deploy was performed. |
| 2026-06-27 | Fresh full local release gate refresh | pass locally, approval needed | Ran `npm run qa:release:local` against the current 56-file local candidate. The gate passed all 28 steps with summary `output/release-local-gate/gate-2026-06-27T19-26-47-425Z/release-local-gate.json`, release security `output/release-security/smoke-2026-06-27T19-26-53-648Z/release-security-smoke.json`, release headers `output/release-headers/smoke-2026-06-27T19-26-53-753Z/release-header-smoke.json`, release inventory `output/release-inventory/inventory-2026-06-27T19-26-53-853Z/release-candidate-inventory.json`, BuildScan viewer evidence `output/buildscan-viewer/smoke-2026-06-27T19-26-54-226Z`, keyboard smoke `output/playwright/keyboard-release-smoke-2026-06-27T19-27-01-165Z`, semantic/SEO smoke `output/semantic-seo/smoke-2026-06-27T19-27-05-932Z/semantic-seo-smoke.json`, product/design smoke `output/product-design-acceptance/smoke-2026-06-27T19-27-13-088Z/product-design-acceptance-smoke.json`, responsive route smoke `output/responsive-route/smoke-2026-06-27T19-27-18-492Z/responsive-route-smoke.json`, rendered smoke `output/playwright/rendered-release-smoke-2026-06-27T19-27-38-276Z`, measurement smoke `output/measurement/smoke-2026-06-27T19-27-49-043Z`, and evidence pack `output/measurement/evidence-2026-06-27T19-27-57-399Z` showing Lighthouse performance 100, accessibility 97, best practices 100, SEO 100, CLS 0, and LCP about 1.73s. No dependency update, staging, commit, push, preview deploy, or production deploy was performed. |
| 2026-06-27 | Local release gate dependency-audit integration | pass locally, approval needed | Wired the read-only dependency audit advisory into `npm run qa:release:local` so the local release gate now checks dependency-audit script syntax and runs `qa:dependency-audit` as part of the release evidence. `npm run qa:release:local` passed all 30 steps with summary `output/release-local-gate/gate-2026-06-27T19-45-38-653Z/release-local-gate.json`. Included evidence: release inventory `output/release-inventory/inventory-2026-06-27T19-45-44-971Z/release-candidate-inventory.json` with 57 dirty files, 68 scanned files, zero secret findings, zero GLB external URI references; dependency advisory `output/dependency-audit/summary-2026-06-27T19-45-45-161Z/dependency-audit-summary.json`, production footprint zero, dev/release tooling 27 findings with 7 high; BuildScan viewer `output/buildscan-viewer/smoke-2026-06-27T19-45-50-305Z`; keyboard `output/playwright/keyboard-release-smoke-2026-06-27T19-45-56-993Z`; semantic SEO `output/semantic-seo/smoke-2026-06-27T19-46-01-808Z/semantic-seo-smoke.json`; product/design `output/product-design-acceptance/smoke-2026-06-27T19-46-08-908Z/product-design-acceptance-smoke.json`; responsive route `output/responsive-route/smoke-2026-06-27T19-46-14-357Z/responsive-route-smoke.json`; rendered smoke `output/playwright/rendered-release-smoke-2026-06-27T19-46-34-295Z`; measurement evidence `output/measurement/evidence-2026-06-27T19-46-51-284Z`, Lighthouse performance 100, accessibility 97, best practices 100, SEO 100, CLS 0, LCP about 1.73s. No dependency update, staging, commit, push, preview deploy, or production deploy was performed. |
| 2026-06-27 | Preview release gate dependency-audit integration | pass locally, approval needed | Wired the read-only dependency audit advisory into `npm run qa:release:preview` so future deployed-preview validation records dependency posture before deployed browser/header/measurement checks. Targeted validation passed: `node --check scripts/release-preview-gate.mjs`; `env -u QA_BASE_URL npm run qa:release:preview` failed closed without falling back to production/local; `QA_BASE_URL=https://robsonai.co.uk npm run qa:release:preview` rejected production by default; `npm run qa:release-inventory` passed with artifact `output/release-inventory/inventory-2026-06-27T19-53-40-209Z/release-candidate-inventory.json`, 57 dirty candidate files, 68 scanned files, zero secret findings, zero GLB external URI references. No dependency update, staging, commit, push, preview deploy, or production deploy was performed. |
| 2026-06-27 | Release staging-manifest drift gate | pass locally, approval needed | Added `scripts/release-staging-manifest-smoke.mjs` and `qa:release-staging-manifest`, then wired the smoke into the local release gate. The smoke verifies the manifest counts, modified tracked list, untracked candidate list, explicit staging command paths, approval boundary, no `git add .`, and no forbidden staging paths against the current dirty tree. Updated `docs/codex/RELEASE_STAGING_MANIFEST.md` to 58 dirty candidate files: 24 modified tracked and 34 untracked candidate files. Full `npm run qa:release:local` passed all 32 steps with summary `output/release-local-gate/gate-2026-06-27T20-00-40-672Z/release-local-gate.json`, staging-manifest artifact `output/release-staging-manifest/smoke-2026-06-27T20-00-47-050Z/release-staging-manifest-smoke.json`, release inventory `output/release-inventory/inventory-2026-06-27T20-00-46-851Z/release-candidate-inventory.json`, dependency advisory `output/dependency-audit/summary-2026-06-27T20-00-47-177Z/dependency-audit-summary.json`, rendered smoke `output/playwright/rendered-release-smoke-2026-06-27T20-01-36-853Z`, and measurement evidence `output/measurement/evidence-2026-06-27T20-02-20-588Z`, Lighthouse performance 100, accessibility 97, best practices 100, SEO 100, CLS 0, LCP about 1.73s. No dependency update, staging, commit, push, preview deploy, or production deploy was performed. |
| 2026-06-27 | Preview gate manifest-check separation | pass locally, approval needed | Corrected the release gate separation: `qa:release-staging-manifest` remains a local/pre-commit dirty-tree check, while `qa:release:preview` intentionally excludes that check because the approved candidate may be clean after commit and push. Targeted validation passed: `node --check scripts/release-preview-gate.mjs`, `env -u QA_BASE_URL npm run qa:release:preview` failed closed, `QA_BASE_URL=https://robsonai.co.uk npm run qa:release:preview` rejected production by default, and `npm run qa:release-staging-manifest` still passed locally with artifact `output/release-staging-manifest/smoke-2026-06-27T20-11-49-856Z/release-staging-manifest-smoke.json`. No dependency update, staging, commit, push, preview deploy, or production deploy was performed. |

## 11. Release / Deployment Notes

- Current environment: local repo on `main` plus Netlify-linked production site.
- Public production URL: `https://robsonai.co.uk`.
- Current production stance: full public website is live at `/`; launch pages are public and crawlable. Latest production deploy is Netlify deploy `6a4110fe34f4b66db778e4bb`, published by approved CLI production deploy from local commit `5994de8` on 2026-06-28 after Wayne approved option `1` for the hero-logo aspect/anchor fix.
- Current candidate branch: `codex/buildscan-interactive-preview-release-candidate` is pushed at `568259e`, matches `main`, and includes the BuildScan interactive GLB preview, source-path deny hardening, release gates, dependency remediation, public proof/content updates, 404 polish, and supporting docs/scripts/assets.
- Current local branch: `codex/docs-evidence-preservation-no-production-deploy`, containing local commit `5994de8` for the hero-logo aspect/anchor fix plus post-deploy evidence-doc updates approved for a local-only commit.
- Current local push/deploy state: branch not pushed after the hero-logo production deploy; no further production deploy is approved.
- Do not push this branch, open a PR, push `main`, production-verify with confirmation, or production deploy again without Wayne approval.
- Release risk: low after production verification and post-launch observation; continue to monitor enquiries, search indexing, and any stale external cache previews.
- Privacy/security checks after production: full Codex Security scan if Wayne starts the security workspace, consent/GA4 review if analytics is enabled, privacy notice review if contact forms are added, no invented proof claims, and no further production deploy without separate approval.
- Rollback plan: previous production deploy `6a40ed1d6073460008b7d3b7` is now the immediate restore candidate for the hero-logo fix; earlier production deploy `6a3d75a7658e0400089157a2` remains the older release restore candidate if needed.

## 12. Resume Prompt

Use this to resume in a new Codex thread:

> We are working on the Robson AI Solutions Website for Wayne Robson / Robson AI Solutions. Read `docs/codex/TRACKER.md`, inspect git status and existing docs, then continue the next tranche.
>
> Production `https://robsonai.co.uk/` serves the current public website. Latest production deploy is Netlify deploy `6a4110fe34f4b66db778e4bb`, created by approved CLI production deploy from local commit `5994de8` on 2026-06-28 for the homepage hero-logo aspect/anchor fix. Previous production deploy `6a40ed1d6073460008b7d3b7` is the immediate restore candidate.
>
> Candidate branch `codex/buildscan-interactive-preview-release-candidate` is pushed at `568259e` and matches `main`. Final draft preview `https://6a4055bfcca135298c4b453a--robson-ai-website.netlify.app` passed fresh deployed preview gate refresh `QA_BASE_URL=https://6a4055bfcca135298c4b453a--robson-ai-website.netlify.app npm run qa:release:preview`; artifact `output/release-preview-gate/gate-2026-06-27T23-54-42-307Z/release-preview-gate.json`.
>
> Latest full local gate: `npm run qa:release:local` passed all 37 steps; artifact `output/release-local-gate/gate-2026-06-27T22-37-04-773Z/release-local-gate.json`. Latest evidence pack: `output/measurement/evidence-2026-06-27T22-38-51-062Z`, Lighthouse performance 100, accessibility 97, best practices 100, SEO 100, CLS 0, LCP about 1.73s.
>
> Latest production release gate: `QA_PRODUCTION_URL=https://robsonai.co.uk CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production` passed all 14 steps; artifact `output/release-production-gate/gate-2026-06-28T12-18-19-900Z/release-preview-gate.json`. Release inventory artifact `output/release-inventory/inventory-2026-06-28T12-18-20-027Z/release-candidate-inventory.json` reports dirtyCount 0, 79 scanned files, zero secret findings, GLB externalUriCount 0. Dependency advisory artifact `output/dependency-audit/summary-2026-06-28T12-18-20-274Z/dependency-audit-summary.json` reports production vulnerabilities 0 and dev/release tooling 17 moderate, 0 high, 0 critical.
>
> Latest production checks for deploy `6a4110fe34f4b66db778e4bb` include headers/source-deny `output/release-headers/smoke-2026-06-28T12-18-28-269Z/release-header-smoke.json`, SEO/social metadata `output/semantic-seo/smoke-2026-06-28T12-18-40-596Z/semantic-seo-smoke.json`, measurement `output/measurement/smoke-2026-06-28T12-19-56-164Z`, rendered screenshots `output/playwright/rendered-release-smoke-2026-06-28T12-19-45-394Z`, BuildScan viewer `output/buildscan-viewer/smoke-2026-06-28T12-18-28-654Z`, responsive `output/responsive-route/smoke-2026-06-28T12-18-56-116Z/responsive-route-smoke.json`, visual polish `output/visual-polish/smoke-2026-06-28T12-19-16-916Z/visual-polish-smoke.json`, product/design `output/product-design-acceptance/smoke-2026-06-28T12-18-49-095Z/product-design-acceptance-smoke.json`, keyboard `output/playwright/keyboard-release-smoke-2026-06-28T12-18-35-864Z`, and browser coverage advisory `output/browser-coverage/smoke-2026-06-28T12-19-37-587Z/browser-coverage-smoke.json`.
>
> Final website approval handoff is available at `docs/codex/FINAL_WEBSITE_APPROVAL_HANDOFF.md`. It presents the full public website to Wayne for approval before any future live deploy. Page-by-page approval checklist is available at `docs/codex/WEBSITE_APPROVAL_REVIEW_CHECKLIST.md`. Next-phase planning baseline is available at `docs/codex/NEXT_PHASE_REFINEMENT_PLAN.md`.
>
> Current local branch is `codex/docs-evidence-preservation-no-production-deploy`, containing local commit `5994de8` plus post-deploy evidence-doc updates. The branch has not been pushed. Do not run `npm audit fix --force`, install browser binaries, push, create a PR, production verification with confirmation, or production deploy again without Wayne approval.
>
> Full Codex Security scan is not complete. Use the Codex Security workspace only if Wayne chooses the security-first hold option.
>
> Recommended option 1 is for Wayne to review the full website links using `docs/codex/WEBSITE_APPROVAL_REVIEW_CHECKLIST.md` and reply `Approved current live website` or list required changes. After that, use `docs/codex/NEXT_PHASE_REFINEMENT_PLAN.md` to approve or reject a scoped next-phase planning tranche.

## 13. PRD Gate Execution Log (2026-06-01)

Current status note:

- This section is a historical gate log from 2026-06-01.
- It predates the 2026-06-20 public full-site launch.
- The current PRD and public-state docs were refreshed on 2026-06-27.
- Do not treat the holding-first or WWDC-wait findings below as current release posture.

### Nightly PRD Gate Steps 1-5 (User Journey, UI/UX, Governance, Data Model, Security)

Scope:
- Ran the requested steps 1-5 review process across current RobsonAI workspaces assigned to automation.
- Read each workspace's project instructions and current `docs/codex/PRD.md` + `docs/codex/TRACKER.md` where present.
- Kept work local-only, no deploys, no external live system changes.

Ranked findings for this website workspace:
1. `resolved` - Governance/Testability local-runner blocker is cleared:
   previous local bind failure is no longer present in this environment; both local smoke and full evidence runs passed on 2026-06-01.
2. `medium` - User journey release hold remains intentional:
   tracker and launch docs still show public root as holding-first while fuller launch route stays intentionally delayed pending iOS launch timing.
3. `low` - Data model remains static-content only:
   no backend/database schema is present by design for current website scope; this is acceptable for holding/marketing mode but constrains richer conversion flows.
4. `low` - Security controls remain aligned with PRD:
   preview auth reads Netlify env vars in `netlify/edge-functions/preview-auth.js`; no hard-coded preview credential literals were found in the scanned security path.

Validation commands and checks:
- `npm run qa:preview-auth` -> pass (3/3 tests)
- `npm run qa:measurement:local` -> pass (artifact: `output/measurement/smoke-2026-06-01T06-04-17-890Z`)
- `npm run qa:measurement:evidence` -> pass (artifact: `output/measurement/evidence-2026-06-01T06-04-26-480Z`)
- `git diff --check` -> pass
- Targeted source inspection:
  - `netlify/edge-functions/preview-auth.js`
  - `netlify.toml`
  - `script.js`
  - `docs/codex/PRD.md`

Release-readiness verdict for this workspace:
- Steps 1-5 outcome: ready from a website-only evidence standpoint (journey/UI/security/governance checks revalidated locally); business launch timing remains intentionally held for WWDC/iOS readiness decisions.

Recommended next remediation tranche:
- `website-wwdc-hold-monitor`: keep launch-readiness unchanged and perform a short post-WWDC decision review when app-link/screenshot readiness is known.
