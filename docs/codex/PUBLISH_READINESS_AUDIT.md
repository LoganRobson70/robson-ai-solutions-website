# Publish Readiness Audit - Robson AI Solutions Website

Last updated: 2026-07-04 16:57 BST
Owner: Wayne Robson / Robson AI Solutions
Repo: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website`
Status: zip-faithful correction with animation parity polish is local-gated and awaiting Wayne review; current production remains the rejected visual match until Wayne approves replacement or rollback

## 1. Purpose

This audit is the current publish-readiness checklist for the zip-faithful correction and preserves historical production release evidence.

Important current-state rule:

- The old production release evidence below does not approve this zip-faithful correction.
- This correction has completed local implementation and the full local release gate only.
- Wayne review, explicit-path staging, local commit, Netlify preview deploy, preview gate, production approval/deploy, and production gate are still pending.
- The rejected `proof-motion-polish` preview must not be published.

## 2. Current Readiness

Current active correction:

- Local release-readiness: 100%.
- Preview release-readiness: 0% for this correction; no preview deploy has been approved or created.
- Production publish-readiness: 0% for this correction; no production deploy has been approved.
- Overall publish readiness to production: 84%.
- Current recommendation: approve explicit-path staging, a local commit, a Netlify preview deploy, and deployed preview-gate validation for the 15-file `zip-faithful-redesign-correction`.
- Current local review URL: `http://127.0.0.1:8134/` while the Python server is running.
- Current local evidence: `output/release-local-gate/gate-2026-07-04T15-53-37-926Z/release-local-gate.json`, `output/playwright/rendered-release-smoke-2026-07-04T15-55-06-652Z`, and `output/measurement/evidence-2026-07-04T15-55-27-128Z`.
- Current local candidate scope: 15 modified tracked files, 0 untracked candidate files; `output/release-staging-manifest/smoke-2026-07-04T15-53-45-280Z/release-staging-manifest-smoke.json`.
- Current release inventory: `output/release-inventory/inventory-2026-07-04T15-53-45-020Z/release-candidate-inventory.json`; dirtyCount 15, secret findings 0, GLB externalUriCount 0.
- Current commit: not created for this correction.
- Current preview URL: not created for this correction.
- Current production deploy remains `6a48c6e1a19608e3698fa160` until Wayne approves replacement or rollback.

Current live production state:

- Public URL: `https://robsonai.co.uk`.
- Current verified CLI/archive production deploy is `6a48c6e1a19608e3698fa160` from commit `1fdd0c8`.
- Wayne has rejected the visual match of that production deploy; it remains live only because no replacement/rollback has been approved.
- No branch push, GitHub PR, DNS change, analytics/form change, external message, or customer data handling is approved by this audit.

The zip-faithful correction has not been published. Remaining work before publish:

- Wayne reviews the local candidate.
- Wayne approves explicit-path staging, local commit, Netlify preview deploy and preview-gate validation.
- If preview passes and Wayne approves, deploy production and run the production release gate.

The remaining work that is not a preview blocker:

- Decide whether to run a full Codex Security workspace scan as an additional assurance step.
- Decide whether to install Playwright Firefox/WebKit for strict local browser parity.
- Decide whether to start a later Luffu/Steno/Unfold-inspired motion-polish tranche, with reduced-motion and performance evidence.

## 3. Gate Matrix

| Gate | Status | Evidence | Required before production |
| --- | --- | --- | --- |
| Product positioning | Passed locally for zip-faithful correction | `qa:product-design`, rendered screenshots | Wayne review, preview gate |
| Visual/design quality | Passed locally after replacing homepage with zip-faithful layout, BuildScan element and zip-style motion polish | rendered smoke, responsive smoke, product/design smoke, visual-polish smoke | Wayne review, preview screenshot review |
| Accessibility | Passed locally | keyboard smoke, BuildScan viewer smoke, axe/Lighthouse evidence | Preview gate; strict Firefox/WebKit optional |
| Performance | Passed locally | Lighthouse performance 99, LCP about 1.24s, CLS 0 | Preview measurement smoke, then production measurement gate |
| SEO/semantics | Passed locally | semantic/SEO smoke in full local gate | Preview gate |
| Cross-browser coverage | Partial local warning | Chromium passes; Firefox/WebKit Playwright binaries unavailable locally | Optional strict browser-parity gate if Wayne wants it |
| Security/privacy source posture | Passed locally | release-security smoke, release-header config smoke, no form/customer data path | Preview deployed headers/source-deny checks |
| Dependency risk | Residual warning | production audit clean; dev/release tooling audit has 17 moderate, 0 high, 0 critical | Accept residual tooling risk or defer for upstream/tooling changes |
| BuildScan GLB public data | No new model exposure in restart candidate | Existing public proof asset unchanged | Separate approval needed for any new/replaced public model |
| Staged file scope | Passed locally for 15-file zip-faithful correction | `output/release-staging-manifest/smoke-2026-07-04T15-53-45-280Z/release-staging-manifest-smoke.json` | Use explicit-path staging after Wayne approval only |
| Netlify deploy-preview | Not yet created for this correction | Pending Wayne approval | Required before production |
| Deployed preview QA | Not yet run for this correction | Pending preview URL | Required before production |
| Production rollback | Known current production baseline | Current live deploy `6a415b5db31442000737c37c` | Confirm rollback target before production deploy |
| Production deploy | Not approved for this correction | Current production remains `6a48c6e1a19608e3698fa160` | Requires explicit Wayne approval after preview |
| Production verification | Not run for this correction | Pending production deploy | Required after production deploy |

## 4. Current Correction Evidence

Latest local gate:

- `output/release-local-gate/gate-2026-07-04T15-53-37-926Z/release-local-gate.json`
- Result: pass, 37 steps.

Latest measurement evidence:

- `output/measurement/evidence-2026-07-04T15-55-27-128Z`
- Lighthouse performance: 99.
- Accessibility: 100.
- Best practices: 100.
- SEO: 100.
- CLS: 0.
- LCP: about 1.24 seconds.
- Axe violations: 0 across six routes.

Latest rendered smoke:

- `output/playwright/rendered-release-smoke-2026-07-04T15-55-06-652Z`
- Result: pass.
- The homepage screenshot confirms the supplied redesign zip direction has been implemented much more directly while retaining the BuildScan model-view element.

Latest staging-manifest drift check:

- `output/release-staging-manifest/smoke-2026-07-04T15-53-45-280Z/release-staging-manifest-smoke.json`
- Result: pass.
- Modified tracked files: 15.
- Untracked candidate files: 0.
- Explicit staging command paths: 15.

Latest release inventory:

- `output/release-inventory/inventory-2026-07-04T15-53-45-020Z/release-candidate-inventory.json`
- Result: pass.
- Dirty candidate files: 15.
- Secret findings: 0.
- GLB external URI references: 0.

Current local implementation notes:

- The latest full local release gate includes the zip IA, zip-style motion parity, no-GA4 first-load privacy behaviour, BuildScan opt-in interaction, keyboard path, rendered screenshot, product/design, responsive, visual-polish, security/header and release inventory checks.
- The current evidence represents the complete 15-file local correction; no further validation refresh is pending before Wayne's local review decision.

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
