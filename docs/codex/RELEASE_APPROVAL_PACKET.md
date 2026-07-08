# Release Approval Packet - Secondary Page Shell Consistency

Last updated: 2026-07-08 08:22 BST
Owner: Wayne Robson / Robson AI Solutions
Repo: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website`
Status: Wayne approved option `1` on 2026-07-08 for the `secondary-page-shell-consistency` preview flow: exact-path staging, commit, branch push, Netlify preview deploy and deployed preview-gate validation. Production deploy, rollback, DNS/domain change, analytics/form change, customer-data handling and external messages remain unapproved.

## 0. Current Status - 2026-07-08

This packet is the current decision record for the local `secondary-page-shell-consistency` candidate.

Current production state before this candidate:

- Public URL: `https://robsonai.co.uk`.
- Current production source baseline: commit `8c595f6`.
- Current production deploy baseline: `6a4d6ccccf0a8038379c9abb`.
- Current live state: Home and Building Analyst use the approved zip-style redesign shell. The live audit found `who-its-for.html` and `privacy.html` still using the older shell.

Current local candidate state:

- Worktree: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website.release-worktree`.
- Branch: `codex/live-globe-loader-fix`.
- Candidate status: refreshed full local release gate passed for the 15-file cache-key candidate, uncommitted.
- Dirty candidate files are explicitly listed in `docs/codex/RELEASE_STAGING_MANIFEST.md`.
- No new product claim, BuildScan asset, analytics setting, privacy-policy wording, form, customer-data path, DNS setting or external integration is introduced.

## 1. Recommended Decision

1. Recommended: approve `secondary-page-shell-preview`.

That approval would allow Codex to:

1. Stage only the files listed in `docs/codex/RELEASE_STAGING_MANIFEST.md`.
2. Create one scoped commit for the secondary-page shell candidate.
3. Push branch `codex/live-globe-loader-fix`.
4. Create a Netlify preview deploy only.
5. Run `QA_BASE_URL=<preview> npm run qa:release:preview`.
6. Return to Wayne with the preview URL, deployed evidence, risks, and rollback path before any production decision.

This approval would not approve production deploy. Production still needs a separate explicit approval after preview review and preview QA.

Alternative options:

2. Approve a direct production deploy from the locally validated candidate. This is faster, but it skips the recommended preview review gate.
3. Hold the candidate uncommitted and request a specific visual/content adjustment first.

## 2. What The Candidate Adds

The candidate makes the public site more coherent by adding:

- Zip-style header and footer shell to `who-its-for.html`.
- Zip-style header and footer shell to `privacy.html`.
- Shared `.zip-secondary-page` CSS so the reused shell renders correctly outside the homepage preview body context.
- Privacy-page top alignment so the intro no longer sits low beside an empty desktop column.
- A stylesheet cache-key bump on public HTML pages so the changed CSS is fetched after deployment instead of being masked by immutable browser cache.
- Updated rendered-smoke expectations for Who/Privacy pages after removing the old `.brand-lockup-text small` strapline dependency.
- Current tracker and staging-manifest evidence for the approval boundary.
- Current final handoff and goal completion audit so approval docs no longer imply older completed releases are the active release state.
- Current owner-review checklist and publish-readiness audit for the secondary-page shell candidate.

The candidate preserves:

- Existing Who It Is For content.
- Existing privacy notice wording and optional-analytics wording.
- Email-first/no-form contact posture.
- Cautious Building Analyst, BuildScan and product-maturity boundaries.
- Current public BuildScan assets and Globe Loader implementation.

## 3. Explicitly Not Approved By This Packet

The following still need separate approval:

- Production deploy.
- Rollback.
- DNS/domain changes.
- GA4 Measurement ID setup or analytics enablement.
- Contact forms or customer-data capture.
- Secret rotation.
- External messages.
- Apple signing/submission.
- Payments.
- Destructive git operations.
- New public model files or replacement BuildScan GLB assets.
- `npm audit fix --force`.

## 4. Current Local Evidence

Latest full local release gate:

- Artifact: `output/release-local-gate/gate-2026-07-08T07-18-19-608Z/release-local-gate.json`.
- Result: pass.
- Steps: 37.
- Site failures: 0.
- Known warning-only residuals: dev/release tooling dependency advisory and unavailable local Firefox/WebKit browser binaries. Production dependency footprint remains 0 vulnerabilities.

Latest staging-manifest drift check:

- Artifact: `output/release-staging-manifest/smoke-2026-07-08T07-18-26-105Z/release-staging-manifest-smoke.json`.
- Result: pass.
- Modified tracked files: 15.
- Untracked candidate files: 0.
- Total dirty candidate files: 15.
- Explicit staging command paths: 15.
- Approval boundary checked: true.

Other current validation evidence:

- Live current-state audit before the fix: `output/playwright/current-site-quality-audit-2026-07-08T05-40-09-880Z/summary.json`.
- Focused secondary-page local check: `output/playwright/secondary-shell-local-check-2026-07-08T06-01-48-965Z/summary.json`.
- Rendered screenshots: `output/playwright/rendered-release-smoke-2026-07-08T07-19-45-967Z`, including refreshed `desktop-who-its-for.png` and `desktop-privacy.png`.
- Measurement evidence: `output/measurement/evidence-2026-07-08T07-20-06-090Z`; axe reported zero violations across checked routes, Lighthouse performance 100, accessibility 100, best practices 100, SEO 100, LCP about 1.38 seconds, CLS 0.
- Release inventory: `output/release-inventory/inventory-2026-07-08T07-18-25-842Z/release-candidate-inventory.json`; dirtyCount 15, secret findings 0, GLB external URI references 0.
- Product/design, responsive, visual-polish, semantic/SEO, keyboard, rendered, release-inventory and release-security checks all passed inside the refreshed full local gate.

## 5. Current Rollback Path

If this candidate later reaches production and is not acceptable:

- Preferred rollback: revert the secondary-page shell commit and redeploy after the production gate.
- Netlify baseline rollback target before this candidate: production deploy `6a4d6ccccf0a8038379c9abb`.
- Local rollback before commit: restore only the candidate paths listed in `docs/codex/RELEASE_STAGING_MANIFEST.md`.

## 6. Historical BuildScan Approval Packet

The approval packet below is preserved as the historical decision record for the BuildScan interactive preview candidate. It is not approval for the current candidate.

## 6.1. Historical Status - 2026-06-28

The approval packet below is preserved as the historical decision record for the BuildScan interactive preview candidate.

Current production state:

- Public URL: `https://robsonai.co.uk`.
- Current production deploy: `6a4110fe34f4b66db778e4bb`.
- Current production source: local commit `5994de8` deployed by approved Netlify CLI production deploy from clean `git archive HEAD`.
- Published: `2026-06-28 13:18 BST`.
- Production release gate: passed, artifact `output/release-production-gate/gate-2026-06-28T12-18-19-900Z/release-preview-gate.json`.
- Post-launch observation: passed read-only checks, recorded in `docs/codex/TRACKER.md`.
- Preservation branch: `codex/docs-evidence-preservation-no-production-deploy`.
- Final website approval handoff: `docs/codex/FINAL_WEBSITE_APPROVAL_HANDOFF.md`.

Current approval rule:

- Do not treat this packet as approval for any new deploy.
- Before any future live deploy, present the full website or candidate preview to Wayne for final approval. Use `docs/codex/FINAL_WEBSITE_APPROVAL_HANDOFF.md` for the current full-website review.
- Future releases must preserve the existing release pattern: scoped change, local validation, preview validation, explicit Wayne final approval, then production deploy and production gate.
- Any new public-model exposure, analytics, contact form/customer-data path, domain/DNS change, broad redesign, Codex Security workspace scan, browser installation, or production deploy remains separately approval-gated.

## 6.2. Historical Recommended Decision

Historical recommended option 1 was approved by Wayne:

Approve `buildscan-interactive-preview-release-candidate`.

That approval means Wayne approves Codex to:

1. Accept the current residual dev-tooling dependency posture for preview: production footprint zero, 17 moderate Lighthouse/Sentry/OpenTelemetry findings, 0 high, 0 critical.
2. Stage only the scoped local release candidate listed in `docs/codex/RELEASE_STAGING_MANIFEST.md`.
3. Create a commit for this local candidate.
4. Push a branch.
5. Create a Netlify deploy-preview only.
6. Run `QA_BASE_URL=<preview> npm run qa:release:preview`.
7. Review the deployed preview in Browser on desktop and mobile.
8. Return to Wayne with the preview URL, deployed evidence, risks, and rollback path before any production decision.

This approval did not approve production deploy at the time. Wayne later approved production publish separately, and the production gate passed.

Use `docs/codex/PUBLISH_READINESS_AUDIT.md` as the single gate checklist before any preview or production publish decision.

Current recommended next step:

Prepare a scoped next-phase planning pass for content/design refinements. This must not deploy to production. Future candidate work should be presented to Wayne for final approval before any live deploy.

## 6.3. Historical Candidate Additions

The candidate turns the current public site into a stronger release-grade website by adding:

- Interactive BuildScan GLB proof with opt-in loading and static fallback.
- A real Ludgershall model-view asset path, optimised WebP image variants, and an optimised public-preview GLB.
- Stronger homepage proof for property operations / WAIS-style workflows.
- Improved audience and contact segmentation.
- Corrected `who-its-for.html` contrast defects found during rendered screenshot review.
- Upgraded `404.html` from a sparse fallback into a noindex Robson AI recovery page with header, navigation, useful route cards, Open Graph/Twitter metadata, footer and clear return/contact paths.
- Updated `holding.html` so the noindex fallback no longer contradicts the current live public-site state.
- Added release-gate checks so stale holding/private-site wording is caught in source and rendered browser validation.
- Added BuildScan viewer keyboard-accessibility smoke coverage for toolbar focus and keyboard activation.
- Added site keyboard release smoke coverage for public keyboard journeys and wired it into local and deployed-preview release gates.
- Added semantic/SEO release smoke coverage for metadata, crawl posture, landmarks, image semantics, social metadata, homepage structured data, sitemap/robots, and current `Robson AI` casing.
- Added responsive route matrix smoke coverage across mobile, tablet, and desktop for release routes, wired into local and deployed-preview release gates.
- Added visual-polish smoke coverage across release routes to guard against large high-opacity text-level backgrounds, including the white-box-behind-text failure mode.
- Added browser coverage advisory across Chromium, Firefox, and WebKit launch paths; Chromium currently passes locally and missing Firefox/WebKit binaries are recorded as warnings unless strict mode is requested.
- Corrected the standalone BuildScan viewer route so it exposes a semantic `main` landmark and H1 while keeping the visual 3D viewer unchanged.
- Corrected current public metadata and contact/ARIA labels from stale mixed-case brand text to `Robson AI`.
- Updated the website excellence programme with the Robson brand standard: precise, modern, intelligent, practical, trusted, calm rather than flashy, and clean rather than decorative.
- Added the bold/cinematic influence rule: concrete options/mockups and Wayne approval are required before any Hero Studios-style or similar treatment is implemented.
- Performance recovery from the earlier Lighthouse 72 / LCP about 10.95s state to Lighthouse 100 / LCP about 1.73s locally.
- HSTS, CSP, source-path deny rules, GLB MIME/cache checks, release inventory, privacy/security smoke, rendered smoke, visual-polish smoke, browser coverage advisory, local release gate, and deployed-preview release gate.
- A read-only dependency audit summary command so production-footprint risk, dev/release tooling risk, dry-run remediation impact, and strict-mode failure are repeatable evidence instead of one-off terminal output.
- The local and deployed-preview release gates now run the dependency audit advisory, so passing gates also confirm production-footprint audit status and record the known dev/release tooling warning.
- A release staging-manifest smoke check so the manifest file lists and explicit `git add -- <paths>` command must match the current dirty release candidate before any staging/commit path.
- A read-only production verification gate, `npm run qa:release:production`, which refuses to run without `QA_PRODUCTION_URL` and an explicit production confirmation flag.
- An explicit release staging manifest so the preview commit uses a reviewed file list and never relies on `git add .`.
- Non-force dependency remediation that removed all high/critical dev-tooling audit findings without using `npm audit fix --force`.
- Updated tracker, PRD, release handover, measurement QA, capability and excellence docs.

## 6.4. Historical Non-Approval Boundary

The following still need separate approval for any future change:

- Production deploy or production verification with confirmation.
- Domain or DNS changes.
- GA4 Measurement ID setup or analytics enablement.
- Contact forms or customer-data capture.
- Secret rotation.
- External messages.
- Apple signing/submission.
- Payments.
- Destructive git operations.
- Full Codex Security scan completion, unless Wayne starts the Codex Security workspace.
- `npm audit fix --force`; that remains separately approval-gated even inside the dependency remediation tranche.

## 6.5. Historical Public Model Approval Point

The main product/security decision is the BuildScan GLB:

- File: `assets/showcase/buildscan-ludgershall-public.glb`
- Current size: 1,354,404 bytes.
- Current inventory result: binary glTF 2.0, one mesh, 118 materials, 118 images, zero external URI references.
- Release implication: once previewed or published, the model is public downloadable website data.

Wayne approval of `buildscan-interactive-preview-release-candidate` originally included approval to expose this optimised GLB on a Netlify preview only. Wayne later approved production publish separately, and the current production release exposes the optimised public GLB.

Any new public model, larger model, replacement GLB, or more detailed asset remains a separate approval point before preview or production exposure.

## 6.6. Historical Local Evidence

Latest full local release gate after staging:

- `output/release-local-gate/gate-2026-06-27T22-37-04-773Z/release-local-gate.json`
- Result: pass, 37 steps.
- Includes staging-manifest drift check, dependency audit advisory, visual-polish smoke, browser coverage advisory, and production-verification gate syntax check.

Latest evidence pack:

- `output/measurement/evidence-2026-06-27T22-38-51-062Z`
- Lighthouse performance: 100.
- Accessibility: 97.
- Best practices: 100.
- SEO: 100.
- CLS: 0.
- LCP: about 1.73 seconds.

Latest release inventory inside the full local gate:

- `output/release-inventory/inventory-2026-06-27T22-37-11-182Z/release-candidate-inventory.json`
- Dirty candidate files: 62.
- Budgeted files: 14.
- Scanned files: 72.
- Secret findings: 0.
- GLB external URI references: 0.

Latest staging-manifest drift check:

- `output/release-staging-manifest/smoke-2026-06-27T22-37-11-410Z/release-staging-manifest-smoke.json`
- Result: pass.
- Modified tracked files: 25.
- Untracked candidate files: 37.
- Explicit staging command paths: 62.

The staging-manifest smoke was tightened during pre-commit validation so it checks the same approved 25 modified / 37 new file boundary before and after staging by classifying candidate paths against `HEAD`.

Latest BuildScan viewer smoke:

- `output/buildscan-viewer/smoke-2026-06-27T22-11-14-107Z`
- Result: pass.
- Direct viewer confirms WebGL/canvas/model-ready state.
- Keyboard interaction confirms Tab focus reaches Orbit and keyboard activation works for Pan, Top view, Zoom In, and Reset with status and pressed-state updates.
- Embedded viewer confirms the GLB does not load before opt-in and marks loaded only after the child viewer reports model-ready.

Latest keyboard release smoke:

- `output/playwright/keyboard-release-smoke-2026-06-27T22-11-22-013Z`
- Result: pass.
- Homepage journey confirms skip-link focus, consent decline, workflow tab keyboard navigation, copy-email feedback, and keyboard-triggered BuildScan model-ready state.
- Building Analyst journey confirms lens tab keyboard navigation and copy-email feedback.

Latest semantic/SEO release smoke:

- `output/semantic-seo/smoke-2026-06-27T22-11-26-910Z/semantic-seo-smoke.json`
- Result: pass.
- Public pages confirm `en-GB`, unique useful titles/descriptions, canonicals, `index, follow`, one `main`, meaningful H1s, primary nav, skip links, image alt/dimensions, Open Graph/Twitter metadata, homepage Organization JSON-LD, sitemap/robots alignment, and current `Robson AI` casing.
- Noindex pages confirm `noindex,nofollow` and no stale mixed-case brand text in current source.

Latest rendered smoke:

- `output/playwright/rendered-release-smoke-2026-06-27T22-12-22-685Z`
- Result: pass, with source-level and rendered-browser checks guarding the current-state holding fallback.

Latest product/design acceptance gate:

- Evidence artifact: `output/product-design-acceptance/smoke-2026-06-27T22-11-34-468Z/product-design-acceptance-smoke.json`
- Result: pass locally for current-state website quality, now wired into `qa:release:local` and `qa:release:preview`, with release-gated caveats.
- First viewport: pass. Desktop and mobile hero show the company, professional building-intelligence proposition, surveyor/evidence/reporting focus, primary CTA, secondary workstream CTA, and product card proof without visual overlap.
- Proof status: pass with caveat. Building Analyst, BuildScan static model image, and WAIS/property operations proof are visible and labelled. The interactive BuildScan GLB remains local/approval-gated.
- Release-stage labels: pass locally. Source and screenshots show early/exploratory/product-direction language and avoid finished-product, customer-integration, autonomous-diagnosis, or public-GLB claims.
- Audience paths: pass. Surveying/estates, property operations, compliance/inspection, drone/3D capture, and early workflow conversations are visible in homepage and `who-its-for.html` paths.
- CTA hierarchy: pass. Email-first route, segmented workflow mailto links, copy-email fallback, privacy notice, and no-form privacy stance are present.
- Trust proof: pass with caveat. Professional judgement boundaries, early-stage scope, privacy posture, approved/static proof, and not-a-finished-suite boundaries are visible. Formal external credentials/case studies remain a future proof gap.
- Motion and interaction: pass locally. Fresh rendered smoke reports no horizontal overflow, no visible text overflow, no console messages, no failed requests, and model-ready BuildScan state after opt-in. Keyboard, responsive route, and BuildScan viewer smoke also remain part of the local gate.
- Release agreement: partial. Docs now agree that dependency remediation, public GLB approval, Netlify preview validation, exact rollback target, and production approval remain open gates.

Latest responsive route smoke:

- Evidence artifact: `output/responsive-route/smoke-2026-06-27T22-11-40-124Z/responsive-route-smoke.json`
- Result: pass locally across 7 routes and 3 viewport classes, 21 route/viewport checks total.
- Coverage: HTTP 200 status, route-specific current-state copy, horizontal overflow, obvious nowrap text overflow, primary control sizing, console/page errors, failed requests, and BuildScan viewer title/toolbar/status/model-ready posture.

Latest visual-polish smoke:

- Evidence artifact: `output/visual-polish/smoke-2026-06-27T22-12-00-763Z/visual-polish-smoke.json`
- Result: pass locally across 7 routes and 2 viewport classes, 14 route/viewport checks total.
- Coverage: no large rendered `h1`, `h2`, `h3`, `p`, or `li` text blocks carry high-opacity text-level backgrounds unless they are explicit controls, labels, tokens or status elements; no horizontal overflow, console/page errors, or blocking failed requests.

Latest browser coverage advisory:

- Evidence artifact: `output/browser-coverage/smoke-2026-06-27T22-38-15-359Z/browser-coverage-smoke.json`
- Result: warning, not failure.
- Chromium passed across 7 release routes, including the direct BuildScan viewer.
- Firefox and WebKit are unavailable in this local Playwright cache, so strict mode fails as expected until those browser binaries are installed or another QA environment supplies them.
- `npm run qa:browser-coverage:strict` is available for a hard cross-browser gate when Wayne approves browser installation or another environment is used.

Preview deployment note:

- Commit `a15f7128c3b38ecfd39bf999f87d2b28aff2e21a` was pushed to `origin/codex/buildscan-interactive-preview-release-candidate`.
- Clean draft URL created from committed files only: `https://6a4053b5f59c19174d72f4f4--robson-ai-website.netlify.app`.
- The first deployed preview gate passed source inventory, dependency advisory, security source posture, deployed headers, and source-path denies, then failed at the deployed BuildScan viewer.
- Root cause: deployed CSP blocked Meshopt WebAssembly compilation and GLB texture blob loading. The scoped fix allows `wasm-unsafe-eval`, `blob:` image/connect handling, and `worker-src 'self' blob:` for the viewer runtime; `.netlifyignore` was added for CLI draft deploy hygiene.
- Follow-up commit `6b6102f` fixed the deployed viewer CSP and added `.netlifyignore`.
- Follow-up commit `b6ab8b3` hardened deployed rendered smoke for Netlify's privacy-link normalization.
- Final draft preview: `https://6a4055bfcca135298c4b453a--robson-ai-website.netlify.app`.
- Final preview gate: `QA_BASE_URL=https://6a4055bfcca135298c4b453a--robson-ai-website.netlify.app npm run qa:release:preview` passed all 14 steps with artifact `output/release-preview-gate/gate-2026-06-27T22-59-30-083Z/release-preview-gate.json`.
- Fresh preview gate refresh: `QA_BASE_URL=https://6a4055bfcca135298c4b453a--robson-ai-website.netlify.app npm run qa:release:preview` passed all 14 steps again with artifact `output/release-preview-gate/gate-2026-06-27T23-54-42-307Z/release-preview-gate.json`.
- Luffu, Steno, and Unfold motion references are intentionally not included in this candidate. They are documented in `docs/codex/MOTION_REFERENCE_BRIEF.md` and remain a separate motion-polish tranche so the passed preview evidence is not invalidated before production unless Wayne explicitly chooses that route.

Latest pre-production security refresh:

- `npm run qa:release-security` passed with artifact `output/release-security/smoke-2026-06-27T23-21-07-139Z/release-security-smoke.json`.
- `npm run qa:release-headers` passed with artifact `output/release-headers/smoke-2026-06-27T23-21-07-141Z/release-header-smoke.json`.
- `npm run qa:dependency-audit:strict` produced no blockers with artifact `output/dependency-audit/summary-2026-06-27T23-21-07-138Z/dependency-audit-summary.json`; production footprint remains zero, dev/release tooling remains 17 moderate findings, 0 high, 0 critical.
- `QA_PRODUCTION_URL=https://robsonai.co.uk npm run qa:release:production` failed closed because `CONFIRM_PRODUCTION_VERIFICATION=true` was intentionally not supplied.

Latest preview-gate safety checks after adding dependency audit advisory:

- `env -u QA_BASE_URL npm run qa:release:preview` fails closed.
- `QA_BASE_URL=https://robsonai.co.uk npm run qa:release:preview` rejects production by default.
- `env -u QA_BASE_URL npm run qa:responsive:preview` fails closed.
- `QA_BASE_URL=https://robsonai.co.uk npm run qa:responsive:preview` rejects production by default.
- `env -u QA_BASE_URL npm run qa:browser-coverage:preview` fails closed.
- `QA_BASE_URL=https://robsonai.co.uk npm run qa:browser-coverage:preview` rejects production by default.
- `npm run qa:release:production` now exists but has not been run against production. Guardrail checks passed locally: missing `QA_PRODUCTION_URL` fails closed, production URL without confirmation fails closed, non-production URL with confirmation is rejected, and `qa:release:preview` still rejects production by default.

Dependency audit status after approved remediation:

- Production-footprint audit: zero vulnerabilities.
- Full dev/release-tooling audit: 17 moderate findings, 0 high, 0 critical.
- Repeatable advisory summary from the full local gate: `output/dependency-audit/summary-2026-06-27T22-37-11-587Z/dependency-audit-summary.json`.
- Repeatable strict summary: `npm run qa:dependency-audit:strict` exits without blockers now that high/critical findings are removed. Latest targeted artifact: `output/dependency-audit/summary-2026-06-27T22-10-47-660Z/dependency-audit-summary.json`.
- The remaining findings are in local dev/release tooling dependencies, not browser-shipped website assets. They are the Lighthouse/Sentry/OpenTelemetry chain and should be treated as residual dev-tooling risk unless Wayne separately approves a force/downgrade path.

Dependency remediation performed:

- `npm audit fix` was run without `--force`.
- Result: 2 packages added, 1 removed, and 14 transitive packages changed in `package-lock.json`.
- The post-remediation dry-run reports 0 further non-force package changes and still reports 17 moderate findings.
- The dry-run still reports unreviewed install scripts for local QA-tool dependencies `chromedriver@146.0.3` and `fsevents@2.3.2`; these are not browser-shipped production website code.
- Read-only `npm audit fix --force --dry-run` warns that protections are disabled and proposes changing Lighthouse to `12.6.1`; it would add 20 packages, remove 74, and change 23. This path is not recommended and remains separately approval-gated.

## 6. Files Expected In The Candidate

The exact staged set should be controlled by `npm run qa:release-inventory` and `docs/codex/RELEASE_STAGING_MANIFEST.md`.

Candidate groups:

- Public pages and routes: `index.html`, `building-analyst.html`, `who-its-for.html`, `privacy.html`, `holding.html`, `preview.html`, `404.html`, `buildscan-viewer.html`.
- Styling and behaviour: `styles.css`, `script.js`.
- Release config: `netlify.toml`, `package.json`, `package-lock.json`.
- QA scripts: `scripts/measurement-smoke.mjs`, `scripts/measurement-evidence.mjs`, `scripts/lib/static-server.mjs`, `scripts/buildscan-viewer-smoke.mjs`, `scripts/browser-coverage-smoke.mjs`, `scripts/dependency-audit-summary.mjs`, `scripts/rendered-release-smoke.mjs`, `scripts/semantic-seo-smoke.mjs`, `scripts/product-design-acceptance-smoke.mjs`, `scripts/responsive-route-smoke.mjs`, `scripts/visual-polish-smoke.mjs`, `scripts/release-candidate-inventory.mjs`, `scripts/release-header-smoke.mjs`, `scripts/release-security-smoke.mjs`, `scripts/release-staging-manifest-smoke.mjs`, `scripts/release-local-gate.mjs`, `scripts/release-preview-gate.mjs`, `scripts/release-production-gate.mjs`, and `scripts/keyboard-release-smoke.mjs`.
- Assets: Robson AI icon variants, BuildScan WebP variants, BuildScan public-preview GLB, and vendored Three.js files with license.
- Docs: tracker, PRD, release handover, measurement QA, capability audit, launch/readiness docs, first tranche, dirty-release assessment, product IA/proof map, publish-readiness audit, design-system audit, release staging manifest, website excellence programme, README, AGENTS.

Do not stage `output/`, `.env*`, `.netlify/`, `node_modules/`, `.DS_Store`, secrets, or unreviewed generated files.

## 7. Preview Procedure After Approval

After Wayne approves `buildscan-interactive-preview-release-candidate`:

1. Treat dependency remediation as complete for preview, with residual moderate dev-tooling risk recorded above.
2. Re-run `npm run qa:release:local`.
3. Confirm `npm run qa:release-staging-manifest` passes.
4. Stage only the scoped candidate files listed in `docs/codex/RELEASE_STAGING_MANIFEST.md`.
5. Commit the candidate.
6. Push a branch.
7. Create a Netlify deploy-preview only.
8. Run:

```bash
QA_BASE_URL="https://<netlify-preview-url>" npm run qa:release:preview
```

This deployed-preview gate includes the dependency audit advisory before deployed route/browser checks. The staging-manifest drift check is intentionally local/pre-commit only, because after the approved candidate is committed and pushed the local dirty tree may be clean.

9. Review the preview in Browser on desktop and mobile.
10. Report preview URL, evidence artifacts, risks, rollback path, and ask for a separate production decision.

## 8. Production Gate

Production can only be considered after:

- Netlify preview URL passes `qa:release:preview`.
- Browser review confirms the deployed homepage, Building Analyst page, Who it fits, Privacy, 404, holding fallback, and BuildScan viewer are visually correct.
- Wayne accepts public GLB exposure for production.
- Wayne separately approves production deploy.

After a separately approved production deploy, Codex must run:

```bash
QA_PRODUCTION_URL="https://robsonai.co.uk" CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production
```

This is a read-only production verification gate. It does not deploy, approve deployment, rotate secrets, change DNS, or alter Netlify configuration.

## 9. Rollback

Rollback target must be re-verified immediately before any production deploy.

Latest read-only Netlify production state:

- Current production deploy discovered on 2026-06-28: `6a3d75a7658e0400089157a2`
- Context: `production`
- Branch: `main`
- Commit: `4a3f1fa8f7b1f885c37937056e2a029d6043501b`
- Published: `2026-06-25T18:38:43.783Z`

Historical references retained for context only:

- Earlier static BuildScan production deploy from the tracker: `6a3d74cb38ad980008340f42`
- Older previous production deploy reference: `6a37e26ea4fa5700094ad18a`
- Older previous deploy permalink: `https://6a37e26ea4fa5700094ad18a--robson-ai-website.netlify.app`

Pre-production hard gate:

- Before any production deploy, Codex must verify the current live Netlify production deploy ID and Wayne must choose the exact rollback target for the release packet.

Rollback options after production approval/deploy:

1. Restore the previous Netlify deploy.
2. Revert the release commit and push `main`.
3. If the GLB is rejected after preview but before production, remove/defer `buildscan-viewer.html`, `assets/showcase/buildscan-ludgershall-public.glb`, and `assets/vendor/three-0.164.1/`, then rerun local gates.

## 10. Recommended Next Step

Recommended option 1:

Approve `production-publish-from-validated-preview-and-docs-closeout`.

That lets Codex verify the current live Netlify production deploy and rollback target, follow `docs/codex/PRODUCTION_RELEASE_RUNBOOK.md` for the validated candidate and docs closeout, run `QA_PRODUCTION_URL=https://robsonai.co.uk CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production`, and report production evidence. If Wayne wants the full Codex Security scan before production, choose that hold option first.
