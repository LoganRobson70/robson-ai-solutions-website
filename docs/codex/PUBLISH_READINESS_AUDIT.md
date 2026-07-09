# Publish Readiness Audit - Robson AI Solutions Website

Last updated: 2026-07-09 18:10 BST
Owner: Wayne Robson / Robson AI Solutions
Repo: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website`
Status: latest public website release is live and production-gated; final source-control/docs closeout remains approval-gated

## 1. Purpose

This audit is the current publish-readiness checklist for the live Robson AI Solutions website and preserves historical production release evidence.

Important current-state rule:

- The secondary-page shell consistency candidate has been committed, pushed, preview-gated, production-deployed and production-gated.
- Production currently serves commit `58a46ff` from Netlify deploy `6a4fd1b93f48c01f6255327c`.
- `origin/main` remains at `8c595f6`, so the remaining release-management gap is source-control/docs closeout, not live-site publication.
- GitHub/main alignment, another production deploy, rollback, DNS/domain changes, analytics/forms/customer-data handling and external messages remain separately approval-gated.
- The rejected `proof-motion-polish` preview must not be published.

## 2. Current Readiness

Current active candidate:

- Local implementation readiness: 100%.
- Preview readiness: 100%; preview deploy `6a4e942228cf55b0c6ea142a` passed deployed preview gate `output/release-preview-gate/gate-2026-07-08T18-18-45-862Z/release-preview-gate.json`.
- Production publish-readiness: 100% for the current public website release; production deploy `6a4fd1b93f48c01f6255327c` is live and passed production verification.
- Overall full-process readiness: about 97%, because the public website itself is live and verified, but `origin/main` and the final evidence docs still need approval-gated source-control alignment.
- Current recommendation: approve `source-control-docs-closeout` so the live commit/evidence is preserved and future main-based deploys do not regress the secondary-page shell consistency work.
- Current production evidence: fresh production gate `output/release-production-gate/gate-2026-07-09T17-03-13-825Z/release-preview-gate.json`, rendered screenshots `output/playwright/rendered-release-smoke-2026-07-09T17-04-36-679Z`, and measurement smoke `output/measurement/smoke-2026-07-09T17-04-48-036Z`.
- Current release inventory: `output/release-inventory/inventory-2026-07-09T17-03-13-953Z/release-candidate-inventory.json`; dirtyCount 2 from local post-production docs-only notes at the time of the gate, secret findings 0, GLB external URI references 0.
- Current production rollback target: previous deploy `6a4d6ccccf0a8038379c9abb`.

Current live production state:

- Public URL: `https://robsonai.co.uk`.
- Current verified production deploy is `6a4fd1b93f48c01f6255327c` from commit `58a46ff`.
- Netlify deploy logs: `https://app.netlify.com/projects/robson-ai-website/deploys/6a4fd1b93f48c01f6255327c`.
- No GitHub/main alignment, further production deploy, rollback, DNS change, analytics/form change, external message or customer data handling is approved by this audit.

Remaining work before full closeout:

- Wayne reviews `https://robsonai.co.uk` live.
- If Wayne is happy, approve a source-control/docs closeout tranche.
- Codex then preserves the final evidence docs, aligns the default branch with live commit `58a46ff`, and verifies that the closeout path does not change public website behaviour.

The remaining work that is not a release blocker:

- Decide whether to run a full Codex Security workspace scan as an additional assurance step.
- Decide whether to install Playwright Firefox/WebKit for strict local browser parity.
- Decide whether to start a later Luffu/Steno/Unfold-inspired motion-polish tranche, with reduced-motion and performance evidence.

## 3. Gate Matrix

| Gate | Status | Evidence | Current release stance |
| --- | --- | --- | --- |
| Product positioning | Passed on production | `output/product-design-acceptance/smoke-2026-07-09T17-03-38-808Z/product-design-acceptance-smoke.json` | Live release verified |
| Visual/design quality | Passed on production | rendered smoke, responsive smoke, product/design smoke, visual-polish smoke | Live release verified |
| Accessibility | Passed on production | keyboard smoke, BuildScan viewer smoke, measurement smoke | Strict Firefox/WebKit optional |
| Performance | Passed on production smoke | `output/measurement/smoke-2026-07-09T17-04-48-036Z` | Live release verified |
| SEO/semantics | Passed on production | `output/semantic-seo/smoke-2026-07-09T17-03-30-939Z/semantic-seo-smoke.json` | Live release verified |
| Cross-browser coverage | Partial local warning | Chromium passes; Firefox/WebKit Playwright binaries unavailable locally | Optional strict browser-parity gate if Wayne wants it |
| Security/privacy source posture | Passed on production | release-security smoke, release-header smoke, no form/customer data path | Live release verified |
| Dependency risk | Residual warning | production audit clean; dev/release tooling audit has 17 moderate, 0 high, 0 critical | Accept residual tooling risk or defer for upstream/tooling changes |
| BuildScan GLB public data | No new model exposure in secondary-page shell candidate | Existing public proof asset unchanged | Separate approval needed for any new/replaced public model |
| Staged file scope | Passed before commit | `output/release-staging-manifest/smoke-2026-07-08T18-13-28-668Z/release-staging-manifest-smoke.json` | Complete for shipped commit |
| Netlify deploy-preview | Complete | Deploy `6a4e942228cf55b0c6ea142a` | Complete |
| Deployed preview QA | Complete | `output/release-preview-gate/gate-2026-07-08T18-18-45-862Z/release-preview-gate.json` | Complete |
| Production rollback | Known baseline | Previous production deploy `6a4d6ccccf0a8038379c9abb` | Confirm before rollback |
| Production deploy | Complete | Deploy `6a4fd1b93f48c01f6255327c` | Live |
| Production verification | Complete | `output/release-production-gate/gate-2026-07-09T17-03-13-825Z/release-preview-gate.json` | Complete |
| Source-control/docs closeout | Pending approval | `origin/main` at `8c595f6`; live branch at `58a46ff`; evidence docs dirty locally | Recommended next gate |

## 4. Current Candidate Evidence

Latest local gate:

- `output/release-local-gate/gate-2026-07-08T07-18-19-608Z/release-local-gate.json`
- Result: pass, 37 steps.

Latest measurement evidence:

- `output/measurement/evidence-2026-07-08T07-20-06-090Z`
- Lighthouse performance: 100.
- Accessibility: 100.
- Best practices: 100.
- SEO: 100.
- CLS: 0.
- LCP: about 1.38 seconds on the median selected run.
- Axe violations: 0 across six routes.

Latest rendered smoke:

- `output/playwright/rendered-release-smoke-2026-07-08T07-19-45-967Z`
- Result: pass.
- The Who/Privacy screenshots confirm the secondary pages now use the current zip-style shell locally; Privacy also shows the corrected top alignment.

Closeout staging-manifest drift check:

- `output/release-staging-manifest/smoke-2026-07-08T07-18-26-105Z/release-staging-manifest-smoke.json`
- Result: pass.
- Modified tracked files: 15.
- Untracked candidate files: 0.
- Explicit staging command paths: 15.

Latest release inventory:

- `output/release-inventory/inventory-2026-07-08T07-18-25-842Z/release-candidate-inventory.json`
- Result: pass.
- Dirty candidate files: 15.
- Secret findings: 0.
- GLB external URI references: 0.

Current local implementation notes:

- The refreshed full local release gate includes release security/header, release inventory, staging-manifest drift, dependency advisory, BuildScan opt-in interaction, keyboard path, semantic SEO, product/design, responsive, visual-polish, rendered screenshot, measurement and diff-whitespace checks.
- The current candidate is now the complete 15-file local candidate.

## 4A. Historical Globe Loader / Privacy Release Evidence

The Globe Loader atlas-detail and privacy disclosure release was production-published and production-gated on `https://robsonai.co.uk` before this candidate. It is preserved as historical context, not approval for the current candidate.

## 5. Historical Production Release Evidence

The following evidence is retained for the earlier production release and must not be treated as approval for the active restart candidate.

### Historical Evidence Snapshot

Latest full local gate after staging:

- `output/release-local-gate/gate-2026-06-27T22-37-04-773Z/release-local-gate.json`
- Result: pass, 37 steps.
- The gate now includes the staging-manifest drift check, dependency audit advisory, visual-polish smoke, browser coverage advisory, and production-verification gate syntax check.

Latest measurement evidence:

- `output/measurement/evidence-2026-06-27T22-38-51-062Z`
- Lighthouse performance: 100.
- Accessibility: 97.
- Best practices: 100.
- SEO: 100.
- CLS: 0.
- LCP: about 1.73 seconds.

Latest release inventory:

- `output/release-inventory/inventory-2026-06-27T22-37-11-182Z/release-candidate-inventory.json`
- Dirty candidate files: 62.
- Scanned files: 72.
- Secret findings: 0.
- GLB external URI references: 0.

Latest deployed preview gate:

- `output/release-preview-gate/gate-2026-06-27T23-54-42-307Z/release-preview-gate.json`
- Result: pass, 14 steps.
- Preview URL: `https://6a4055bfcca135298c4b453a--robson-ai-website.netlify.app`.
- Coverage included release inventory, dependency audit advisory, security source posture, deployed headers/source-path-deny checks, BuildScan viewer preview smoke, keyboard smoke, semantic/SEO smoke, product/design acceptance smoke, responsive route smoke, visual-polish smoke, browser coverage advisory, rendered smoke, and measurement smoke.
- Fresh artifacts from this pass include release inventory `output/release-inventory/inventory-2026-06-27T23-54-42-416Z/release-candidate-inventory.json`, dependency advisory `output/dependency-audit/summary-2026-06-27T23-54-42-621Z/dependency-audit-summary.json`, deployed headers `output/release-headers/smoke-2026-06-27T23-54-50-959Z/release-header-smoke.json`, BuildScan viewer `output/buildscan-viewer/smoke-2026-06-27T23-54-51-284Z`, keyboard `output/playwright/keyboard-release-smoke-2026-06-27T23-54-58-312Z`, semantic SEO `output/semantic-seo/smoke-2026-06-27T23-55-04-317Z/semantic-seo-smoke.json`, product/design `output/product-design-acceptance/smoke-2026-06-27T23-55-13-362Z/product-design-acceptance-smoke.json`, responsive route `output/responsive-route/smoke-2026-06-27T23-55-20-409Z/responsive-route-smoke.json`, visual polish `output/visual-polish/smoke-2026-06-27T23-55-43-175Z/visual-polish-smoke.json`, browser coverage `output/browser-coverage/smoke-2026-06-27T23-55-55-976Z/browser-coverage-smoke.json`, rendered smoke `output/playwright/rendered-release-smoke-2026-06-27T23-56-05-122Z`, and measurement smoke `output/measurement/smoke-2026-06-27T23-56-17-356Z`.

Current production deployment and release gate:

- Production deploy: `6a4110fe34f4b66db778e4bb`.
- Production URL: `https://robsonai.co.uk`.
- Commit/source: local commit `5994de8` deployed by approved Netlify CLI production deploy from clean `git archive HEAD`.
- Published: `2026-06-28 13:18 BST`.
- Previous rollback candidate: `6a40ed1d6073460008b7d3b7`.
- Production gate command: `QA_PRODUCTION_URL=https://robsonai.co.uk CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production`.
- Production gate result: pass, 14 steps.
- Production gate artifact: `output/release-production-gate/gate-2026-06-28T12-18-19-900Z/release-preview-gate.json`.
- Release inventory artifact: `output/release-inventory/inventory-2026-06-28T12-18-20-027Z/release-candidate-inventory.json`: dirtyCount 0, 79 scanned files, zero secret findings, GLB externalUriCount 0.
- Dependency audit artifact: `output/dependency-audit/summary-2026-06-28T12-18-20-274Z/dependency-audit-summary.json`: production vulnerabilities 0; dev/release tooling remains 17 moderate, 0 high, 0 critical.
- Production header/security artifact: `output/release-headers/smoke-2026-06-28T12-18-28-269Z/release-header-smoke.json`; source-path deny checks passed.
- Production BuildScan viewer artifact: `output/buildscan-viewer/smoke-2026-06-28T12-18-28-654Z`; direct and embedded viewer checks passed.
- Production measurement smoke: `output/measurement/smoke-2026-06-28T12-19-56-164Z`.
- Browser coverage advisory: `output/browser-coverage/smoke-2026-06-28T12-19-37-587Z/browser-coverage-smoke.json`; Chromium passed, Firefox/WebKit unavailable locally and warning-only.

Post-launch observation check for original production release:

- Completed read-only on 2026-06-28 11:30 BST.
- Production remained on Netlify deploy `6a40ed1d6073460008b7d3b7` from commit `568259e6c5c745b4aa7668ee5048ea41319dba7a`.
- Headers/source-deny passed: `output/release-headers/smoke-2026-06-28T10-27-25-060Z/release-header-smoke.json`.
- SEO/social metadata passed: `output/semantic-seo/smoke-2026-06-28T10-27-33-517Z/semantic-seo-smoke.json`.
- Measurement passed: `output/measurement/smoke-2026-06-28T10-27-33-522Z`.
- Rendered screenshots passed: `output/playwright/rendered-release-smoke-2026-06-28T10-27-48-468Z`.
- BuildScan viewer passed: `output/buildscan-viewer/smoke-2026-06-28T10-28-08-942Z`.
- Responsive route smoke passed: `output/responsive-route/smoke-2026-06-28T10-28-43-063Z/responsive-route-smoke.json`.
- Visual-polish, product/design, and keyboard smokes passed at `output/visual-polish/smoke-2026-06-28T10-29-14-071Z/visual-polish-smoke.json`, `output/product-design-acceptance/smoke-2026-06-28T10-29-14-071Z/product-design-acceptance-smoke.json`, and `output/playwright/keyboard-release-smoke-2026-06-28T10-29-14-071Z`.
- Browser coverage advisory completed with warning only: `output/browser-coverage/smoke-2026-06-28T10-29-37-496Z/browser-coverage-smoke.json`; Chromium passed, Firefox/WebKit unavailable locally.
- Preservation branch: `codex/docs-evidence-preservation-no-production-deploy`, local-only unless Wayne later approves a push/PR path.
- Final website approval handoff: `docs/codex/FINAL_WEBSITE_APPROVAL_HANDOFF.md`.

Latest staging-manifest drift check:

- `output/release-staging-manifest/smoke-2026-06-27T22-37-11-410Z/release-staging-manifest-smoke.json`
- Modified tracked files: 25.
- Untracked candidate files: 37.
- Explicit staging command paths: 62.

Latest visual-polish smoke:

- `output/visual-polish/smoke-2026-06-27T22-12-00-763Z/visual-polish-smoke.json`
- Result: pass across 7 routes and 2 viewport classes.
- Guards against large high-opacity text-level backgrounds, including the white-box-behind-text visual regression.

Latest browser coverage advisory:

- `output/browser-coverage/smoke-2026-06-27T22-38-15-359Z/browser-coverage-smoke.json`
- Result: warning, not failure.
- Chromium passes across 7 release routes.
- Firefox and WebKit are unavailable locally; `npm run qa:browser-coverage:strict` fails as expected until those browser binaries are installed or another QA environment supplies them.

Latest production-verification gate:

- `QA_PRODUCTION_URL=https://robsonai.co.uk CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production` passed all 14 steps with artifact `output/release-production-gate/gate-2026-06-28T12-18-19-900Z/release-preview-gate.json`.
- Guardrails remain in place: missing `QA_PRODUCTION_URL` fails closed, `QA_PRODUCTION_URL=https://robsonai.co.uk` without explicit confirmation fails closed, non-production hosts are rejected even with confirmation, and `QA_BASE_URL=https://robsonai.co.uk npm run qa:release:preview` still rejects production by default.

Latest dependency audit after approved remediation:

- Production footprint: zero vulnerabilities.
- Non-force remediation: `npm audit fix` without `--force` added 2 packages, removed 1, and changed 14 transitive packages in `package-lock.json`.
- Dev/release tooling: 17 moderate findings, 0 high, 0 critical.
- Repeatable advisory command: `npm run qa:dependency-audit`, warning status, production footprint zero, dev/release tooling 17 moderate findings, and install-script review still noted for `chromedriver@146.0.3` and `fsevents@2.3.2`. Latest artifact from the full local gate: `output/dependency-audit/summary-2026-06-27T22-11-12-273Z/dependency-audit-summary.json`.
- Repeatable strict command: `npm run qa:dependency-audit:strict` exits without blockers now that high/critical findings are gone. Latest targeted artifact: `output/dependency-audit/summary-2026-06-27T22-10-47-660Z/dependency-audit-summary.json`.

Latest pre-production security refresh:

- `npm run qa:release-security` passed with artifact `output/release-security/smoke-2026-06-27T23-21-07-139Z/release-security-smoke.json`.
- `npm run qa:release-headers` passed with artifact `output/release-headers/smoke-2026-06-27T23-21-07-141Z/release-header-smoke.json`.
- `npm run qa:dependency-audit:strict` produced no blockers with artifact `output/dependency-audit/summary-2026-06-27T23-21-07-138Z/dependency-audit-summary.json`; production footprint remains zero, dev/release tooling remains 17 moderate findings, 0 high, 0 critical.
- `QA_PRODUCTION_URL=https://robsonai.co.uk npm run qa:release:production` failed closed because `CONFIRM_PRODUCTION_VERIFICATION=true` was intentionally not supplied. This proves the production gate still refuses accidental live verification.

Latest read-only Netlify production state:

- Site: `robson-ai-website`, project ID `4ab53a28-c28c-4e7d-b7ca-93960fc4c39f`, production URL `https://robsonai.co.uk`.
- Current production deploy: `6a4110fe34f4b66db778e4bb`, created by approved CLI production deploy from local commit `5994de8`.
- Previous production deploy `6a40ed1d6073460008b7d3b7` remains the immediate rollback candidate if a restore is needed.

## 5. Publish Path

Completed order:

1. Wayne approved `production-publish-from-validated-preview-and-docs-closeout`.
2. Codex re-verified the current production deploy and rollback target.
3. Codex used the GitHub/main-triggered Netlify production deploy path.
4. Codex ran `QA_PRODUCTION_URL=https://robsonai.co.uk CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production`; it passed.
5. The Luffu/Steno/Unfold motion-polish tranche remains parked as optional post-launch work in `docs/codex/MOTION_REFERENCE_BRIEF.md`.

## 6. Decision Options

1. Recommended: Wayne reviews `docs/codex/FINAL_WEBSITE_APPROVAL_HANDOFF.md` and replies `Approved current live website` or lists required changes.
2. Start a scoped next-phase planning pass for BuildScan interaction polish, property operations narrative clarity, SEO/analytics configuration, accessibility/performance watch, and claim alignment.
3. Start the `docs/codex/MOTION_REFERENCE_BRIEF.md` motion-polish tranche with fresh local/preview/production gates.
4. Run full Codex Security workspace scan or install Playwright Firefox/WebKit for stricter assurance.

## 7. Hard Stops

Do not proceed without explicit approval for:

- `npm audit fix --force` or further dependency updates
- staging files
- commit or push
- Netlify preview deploy
- a new public BuildScan GLB/model exposure
- another production deploy
- domain/DNS changes
- GA4 enablement
- contact forms or customer-data capture
- destructive git actions
