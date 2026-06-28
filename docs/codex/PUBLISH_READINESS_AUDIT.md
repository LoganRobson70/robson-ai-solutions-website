# Publish Readiness Audit - Robson AI Solutions Website

Last updated: 2026-06-28 11:55 BST
Owner: Wayne Robson / Robson AI Solutions
Repo: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website`
Status: production release shipped and production-gated

## 1. Purpose

This audit is the single checklist for the 2026-06-28 BuildScan interactive production release and post-publish closeout.

It records what was approved, shipped, validated, and what remains as non-blocking post-launch observation or optional hardening.

## 2. Current Readiness

- Local release-readiness: 100%.
- Preview release-readiness: 100%.
- Production publish-readiness: 100%.
- Current recommendation: Wayne reviews the full website using `docs/codex/FINAL_WEBSITE_APPROVAL_HANDOFF.md` and replies `Approved current live website` or lists required changes before any future live deployment.
- Current state: `main` and `origin/main` are at commit `568259e6c5c745b4aa7668ee5048ea41319dba7a`; Netlify production deploy `6a40ed1d6073460008b7d3b7` is ready and published on `https://robsonai.co.uk`; `QA_PRODUCTION_URL=https://robsonai.co.uk CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production` passed.

The remaining work is not a publish blocker:

- Preserve final docs evidence and final approval handoff on the local branch without pushing directly to `main`.
- Decide whether to run a full Codex Security workspace scan as an additional assurance step.
- Decide whether to install Playwright Firefox/WebKit for strict local browser parity.
- Decide whether to start the Luffu/Steno/Unfold-inspired motion-polish tranche, with reduced-motion and performance evidence.

## 3. Gate Matrix

| Gate | Status | Evidence | Required before production |
| --- | --- | --- | --- |
| Product positioning | Passed on production | `qa:product-design`, rendered screenshots, PRD/current docs | Post-launch wording watch only |
| Visual/design quality | Passed on production | rendered smoke, responsive smoke, product/design smoke, visual-polish smoke | Post-launch observation only |
| Accessibility | Passed on production | keyboard smoke, BuildScan viewer keyboard smoke, rendered checks | Strict Firefox/WebKit optional if Wayne wants a harder parity gate |
| Performance | Passed on production | local Lighthouse performance 100, production measurement smoke passed, enforced budget | Monitor after cache/search settle |
| SEO/semantics | Passed on production | semantic/SEO smoke, sitemap/robots checks | Monitor indexing and social previews |
| Cross-browser coverage | Partial local warning | Chromium passes advisory gate; Firefox/WebKit Playwright binaries are not installed locally; strict mode fails as expected | Install/enable Firefox and WebKit or run strict gate in a complete QA environment before treating browser parity as fully proved |
| Security/privacy source posture | Passed on production | release-security smoke, release-header config smoke, deployed header/source-deny checks, no form/customer data path | Full Codex Security workspace scan remains optional |
| Dependency risk | Residual warning | non-force remediation removed high/critical findings; production audit clean; dev/release tooling audit has 17 moderate, 0 high, 0 critical | Accept residual Lighthouse/Sentry/OpenTelemetry tooling risk for production, or defer for upstream/tooling changes |
| BuildScan GLB public data | Approved and shipped | GLB structure clean, no external URI references, 1.35 MB | Public model remains downloadable by design |
| Staged file scope | Passed and shipped | staging manifest smoke passed after staging against 25 modified / 37 new file boundary | None |
| Netlify deploy-preview | Passed | `https://6a4055bfcca135298c4b453a--robson-ai-website.netlify.app` | None before production beyond Wayne approval |
| Deployed preview QA | Passed | `output/release-preview-gate/gate-2026-06-27T23-54-42-307Z/release-preview-gate.json` | None before production beyond Wayne approval |
| Production rollback | Verified before deploy | previous production deploy `6a3d75a7658e0400089157a2` from commit `4a3f1fa8f7b1f885c37937056e2a029d6043501b` | Restore previous deploy or revert `main` if needed |
| Production deploy | Passed | Netlify production deploy `6a40ed1d6073460008b7d3b7` from commit `568259e6c5c745b4aa7668ee5048ea41319dba7a` | None |
| Production verification | Passed | `output/release-production-gate/gate-2026-06-28T09-46-09-182Z/release-preview-gate.json` | None |

## 4. Evidence Snapshot

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

Production deployment and release gate:

- Production deploy: `6a40ed1d6073460008b7d3b7`.
- Production URL: `https://robsonai.co.uk`.
- Commit: `568259e6c5c745b4aa7668ee5048ea41319dba7a`.
- Published: `2026-06-28T09:45:15.914Z`.
- Previous rollback candidate: `6a3d75a7658e0400089157a2`.
- Production gate command: `QA_PRODUCTION_URL=https://robsonai.co.uk CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production`.
- Production gate result: pass, 14 steps.
- Production gate artifact: `output/release-production-gate/gate-2026-06-28T09-46-09-182Z/release-preview-gate.json`.
- Release inventory artifact: `output/release-inventory/inventory-2026-06-28T09-46-09-283Z/release-candidate-inventory.json`: dirtyCount 0, 76 scanned files, zero secret findings, GLB externalUriCount 0.
- Dependency audit artifact: `output/dependency-audit/summary-2026-06-28T09-46-09-491Z/dependency-audit-summary.json`: production vulnerabilities 0; dev/release tooling remains 17 moderate, 0 high, 0 critical.
- Production header/security artifact: `output/release-headers/smoke-2026-06-28T09-46-17-470Z/release-header-smoke.json`; source-path deny checks passed.
- Production BuildScan viewer artifact: `output/buildscan-viewer/smoke-2026-06-28T09-46-17-781Z`; direct and embedded viewer checks passed.
- Production measurement smoke: `output/measurement/smoke-2026-06-28T09-47-29-656Z`.
- Browser coverage advisory: `output/browser-coverage/smoke-2026-06-28T09-47-13-177Z/browser-coverage-smoke.json`; Chromium passed, Firefox/WebKit unavailable locally and warning-only.

Post-launch observation check:

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

- `QA_PRODUCTION_URL=https://robsonai.co.uk CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production` passed all 14 steps with artifact `output/release-production-gate/gate-2026-06-28T09-46-09-182Z/release-preview-gate.json`.
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
- Current production deploy discovered read-only: `6a40ed1d6073460008b7d3b7`, context `production`, branch `main`, commit `568259e6c5c745b4aa7668ee5048ea41319dba7a`, published `2026-06-28T09:45:15.914Z`.
- Previous production deploy `6a3d75a7658e0400089157a2` remains the immediate rollback candidate if a restore is needed.

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
