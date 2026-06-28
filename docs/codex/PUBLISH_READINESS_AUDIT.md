# Publish Readiness Audit - Robson AI Solutions Website

Last updated: 2026-06-28 01:56 BST
Owner: Wayne Robson / Robson AI Solutions
Repo: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website`
Status: preview candidate is committed, pushed, deployed to Netlify draft preview, and deployed-preview gated; production publish is not yet approved or fully proved

## 1. Purpose

This audit is the single checklist for moving from the current local release candidate to a production publish decision.

It does not approve staging, commit, push, Netlify preview, public GLB exposure, or production deploy. Those remain separate Wayne approvals.

## 2. Current Readiness

- Local release-readiness: 99.5%.
- Preview release-readiness: 99%.
- Production publish-readiness: 98.5%.
- Current recommendation: ask Wayne for explicit production-publish approval for the validated preview candidate and docs closeout, then follow `docs/codex/PRODUCTION_RELEASE_RUNBOOK.md`, verify rollback target, deploy production, and run the production release gate.
- Current state: branch `codex/buildscan-interactive-preview-release-candidate` is pushed at `b6ab8b3`; Netlify draft preview `https://6a4055bfcca135298c4b453a--robson-ai-website.netlify.app` passed `npm run qa:release:preview`.

The remaining publish gap is not visual polish. It is release governance:

- Wayne visual/product approval of the deployed preview
- Wayne approval for public BuildScan GLB exposure in production
- final rollback target re-verification immediately before production
- separate production deploy approval

## 3. Gate Matrix

| Gate | Status | Evidence | Required before production |
| --- | --- | --- | --- |
| Product positioning | Passed on preview | `qa:product-design:preview`, rendered screenshots, PRD/current docs | Wayne product approval |
| Visual/design quality | Passed on preview | rendered smoke, responsive smoke, product/design smoke, visual-polish smoke | Wayne visual approval |
| Accessibility | Passed on preview | keyboard smoke, BuildScan viewer keyboard smoke, rendered checks | Strict Firefox/WebKit optional if Wayne wants a harder parity gate |
| Performance | Passed on preview | local Lighthouse performance 100, preview measurement smoke passed, enforced budget | Production measurement gate after deploy |
| SEO/semantics | Passed on preview | semantic/SEO smoke, sitemap/robots checks | Production route/metadata verification after deploy |
| Cross-browser coverage | Partial local warning | Chromium passes advisory gate; Firefox/WebKit Playwright binaries are not installed locally; strict mode fails as expected | Install/enable Firefox and WebKit or run strict gate in a complete QA environment before treating browser parity as fully proved |
| Security/privacy source posture | Passed on preview | release-security smoke, release-header config smoke, deployed header/source-deny checks, no form/customer data path | Production header/source-deny checks after deploy |
| Dependency risk | Residual warning | non-force remediation removed high/critical findings; production audit clean; dev/release tooling audit has 17 moderate, 0 high, 0 critical | Accept residual Lighthouse/Sentry/OpenTelemetry tooling risk for preview, or defer for upstream/tooling changes |
| BuildScan GLB public data | Warning | GLB structure clean, no external URI references, 1.35 MB | Wayne approves public preview/production exposure |
| Staged file scope | Passed and staged | staging manifest smoke passes after staging against 25 modified / 37 new file boundary | Keep commit restricted to manifest paths |
| Netlify deploy-preview | Passed | `https://6a4055bfcca135298c4b453a--robson-ai-website.netlify.app` | None before production beyond Wayne approval |
| Deployed preview QA | Passed | `output/release-preview-gate/gate-2026-06-27T23-54-42-307Z/release-preview-gate.json` | None before production beyond Wayne approval |
| Production rollback | Identified read-only | Netlify current production deploy `6a3d75a7658e0400089157a2` from commit `4a3f1fa8f7b1f885c37937056e2a029d6043501b` | Re-verify immediately before production deploy |
| Production deploy | Not approved | none | Separate Wayne approval only |
| Production verification | Not run | `qa:release:production` exists and fails closed without `QA_PRODUCTION_URL` plus confirmation | Run only after a separately approved production deploy |

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

Latest production-verification gate guardrails:

- `npm run qa:release:production` exists but has not been run against production.
- Missing `QA_PRODUCTION_URL` fails closed.
- `QA_PRODUCTION_URL=https://robsonai.co.uk` without explicit confirmation fails closed.
- Non-production hosts are rejected even with confirmation.
- `QA_BASE_URL=https://robsonai.co.uk npm run qa:release:preview` still rejects production by default.

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
- Current production deploy discovered read-only: `6a3d75a7658e0400089157a2`, context `production`, branch `main`, commit `4a3f1fa8f7b1f885c37937056e2a029d6043501b`, published `2026-06-25T18:38:43.783Z`.
- Treat this as the current rollback candidate, but re-check immediately before any approved production deploy.

## 5. Publish Path

Recommended order:

1. Wayne reviews the validated preview URL and explicitly approves or declines production publish.
2. If approved, Codex re-verifies the exact current production deploy ID and rollback target.
3. Codex follows `docs/codex/PRODUCTION_RELEASE_RUNBOOK.md`; the recommended path is GitHub/main-triggered Netlify production deploy.
4. After approved production deployment, Codex runs `QA_PRODUCTION_URL=https://robsonai.co.uk CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production` and reports the production evidence artifact.
5. The Luffu/Steno/Unfold motion-polish tranche in `docs/codex/MOTION_REFERENCE_BRIEF.md` stays parked until after production, unless Wayne explicitly chooses to invalidate the passed preview evidence and rerun the release gates before production.

## 6. Decision Options

1. Recommended: approve `production-publish-from-validated-preview-and-docs-closeout`.
2. Hold production and run full Codex Security scan first.
3. Hold production and install/enable Playwright Firefox and WebKit for strict cross-browser parity.
4. Hold production and approve the `docs/codex/MOTION_REFERENCE_BRIEF.md` motion-polish tranche before publish, accepting that the preview candidate must be regenerated and re-gated.

## 7. Hard Stops

Do not proceed without explicit approval for:

- `npm audit fix --force` or further dependency updates
- staging files
- commit or push
- Netlify preview deploy
- public BuildScan GLB exposure
- production deploy
- domain/DNS changes
- GA4 enablement
- contact forms or customer-data capture
- destructive git actions
