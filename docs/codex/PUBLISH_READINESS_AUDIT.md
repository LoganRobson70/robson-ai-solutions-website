# Publish Readiness Audit - Robson AI Solutions Website

Last updated: 2026-07-02 18:30 BST
Owner: Wayne Robson / Robson AI Solutions
Repo: `/private/tmp/robson-ai-website-quality-restart`
Status: current `word-heavy-section-polish` candidate is local-only and preview-ready after Wayne review; production is unchanged

## 1. Purpose

This audit is the current publish-readiness checklist for the active `word-heavy-section-polish` candidate and preserves the historical clean-restart and 2026-06-28 BuildScan/visual production release evidence.

Important current-state rule:

- The old production release evidence below does not approve the current word-heavy section polish candidate.
- The current word-heavy section polish candidate is local-only until Wayne approves commit, branch push, and Netlify preview deploy.
- The current candidate must still pass deployed preview validation before any production discussion.
- The rejected `proof-motion-polish` preview must not be published.

## 2. Current Readiness

Current active candidate:

- Candidate name: `word-heavy-section-polish`.
- Branch: `codex/word-heavy-section-polish`.
- Local review URL: `http://127.0.0.1:8135/`.
- Local release-readiness: 100% for the current local candidate.
- Preview release-readiness: 0% because no Netlify preview has been deployed for this candidate yet.
- Production publish-readiness: 0% for this candidate because production deploy remains unapproved.
- Overall publish readiness: 88% for the path to publish. The product/design work and local release gate are strong, but Wayne visual sign-off, commit, branch push, Netlify preview deploy, deployed preview gate, production approval, production deploy, and production gate are still outstanding.
- Current recommendation: Wayne reviews the local candidate and approves `commit + branch push + Netlify preview deploy` if it looks right.
- Current local evidence: `output/release-local-gate/gate-2026-07-02T17-23-29-682Z/release-local-gate.json`, `output/playwright/rendered-release-smoke-2026-07-02T17-24-59-410Z`, and `output/measurement/evidence-2026-07-02T17-25-18-165Z`.
- Current dirty scope after this audit update: local release candidate plus docs updates; not staged, committed, pushed, previewed, or deployed.
- Current preview-deploy approval handoff: `docs/codex/WEBSITE_RESTART_PREVIEW_HANDOFF.md`.

Current live production state:

- Public URL: `https://robsonai.co.uk`.
- Current verified Netlify production deploy is `6a45f66d95632900082f00cb`, deployed from GitHub/main commit `aa9e9c756a2310d6dbe8f54d16f3349ac8571cae`.
- Confirm the current Netlify rollback target immediately before any future approved production deploy.
- DNS change, analytics/form change, external message, customer data handling, force-push, or future production deploy is not approved by this audit.

The current word-heavy section polish release is not closed.

Remaining work before publish:

- Wayne visual approval of the local candidate.
- Explicit-path commit and branch push after approval.
- Netlify preview deploy after approval.
- Deployed preview gate.
- Wayne production approval after preview review.
- Production deploy and production gate.
- Optional full Codex Security workspace scan and strict Firefox/WebKit browser parity.

## 3. Gate Matrix

| Gate | Status | Evidence | Required before production |
| --- | --- | --- | --- |
| Product positioning | Passed locally for current word-heavy candidate | `qa:product-design`, rendered screenshots, `docs/codex/WORD_HEAVY_SECTION_POLISH_AUDIT.md` | Preview gate and Wayne review |
| Visual/design quality | Passed locally after word-heavy and consent polish | rendered smoke, responsive smoke, product/design smoke, visual-polish smoke | Preview screenshot review and Wayne review |
| Accessibility | Passed locally | keyboard smoke, BuildScan viewer smoke, axe/Lighthouse evidence | Preview gate; strict Firefox/WebKit optional |
| Performance | Passed locally | Lighthouse performance 100, LCP about 1.80s, CLS 0 | Preview measurement smoke, then production measurement gate |
| SEO/semantics | Passed locally | semantic/SEO smoke in full local gate | Preview gate |
| Cross-browser coverage | Partial local warning | Chromium passes; Firefox/WebKit Playwright binaries unavailable locally | Optional strict browser-parity gate if Wayne wants it |
| Security/privacy source posture | Passed locally | release-security smoke, release-header config smoke, no form/customer data path | Preview deployed headers/source-deny checks |
| Dependency risk | Residual warning | production audit clean; dev/release tooling audit has 17 moderate, 0 high, 0 critical | Accept residual tooling risk or defer for upstream/tooling changes |
| BuildScan GLB public data | No new model exposure in restart candidate | Existing public proof asset unchanged | Separate approval needed for any new/replaced public model |
| Staged file scope | Passed locally for current 5-file candidate before this audit update | `output/release-staging-manifest/smoke-2026-07-02T17-27-27-209Z/release-staging-manifest-smoke.json` | Use explicit-path staging after Wayne approval only |
| Netlify deploy-preview | Not started for current candidate | No preview exists yet | Required after Wayne approval |
| Deployed preview QA | Not started for current candidate | No preview gate artifact yet | Required before production discussion |
| Production rollback | Must be reconfirmed before any future publish | Current production unchanged | Required before production deploy |
| Production deploy | Not approved for current candidate | No production deploy performed | Wayne approval required |
| Production verification | Not started for current candidate | No production gate artifact yet | Required after production deploy |
| Source-control alignment | Not started for current candidate | Candidate is local dirty worktree | Commit/push approval required |

## 4. Current Word-Heavy Candidate Evidence

Latest current-candidate local gate:

- `output/release-local-gate/gate-2026-07-02T17-23-29-682Z/release-local-gate.json`
- Result: pass, 37 steps.

Latest current-candidate measurement evidence:

- `output/measurement/evidence-2026-07-02T17-25-18-165Z`
- Lighthouse performance: 100.
- Accessibility: 100.
- Best practices: 100.
- SEO: 100.
- CLS: 0.
- LCP: about 1.80 seconds.

Latest current-candidate rendered smoke:

- `output/playwright/rendered-release-smoke-2026-07-02T17-24-59-410Z`
- Result: pass.
- The homepage screenshot confirms the word-heavy section polish and desktop consent first-impression polish are included.

Latest current-candidate staging-manifest drift check:

- `output/release-staging-manifest/smoke-2026-07-02T17-27-27-209Z/release-staging-manifest-smoke.json`
- Result: pass.
- Modified tracked files: 4.
- Untracked candidate files: 1.
- Explicit staging command paths: 5.

Latest current-candidate release inventory:

- `output/release-inventory/inventory-2026-07-02T17-27-27-209Z/release-candidate-inventory.json`
- Result: pass.
- Dirty candidate files: 5.
- Secret findings: 0.
- GLB external URI references: 0.

Latest deployed preview:

- None for this candidate.
- Required next command after approved preview deploy: `QA_BASE_URL="https://<preview-url>" npm run qa:release:preview`.

Latest production deploy for this candidate:

- None. Production remains unchanged and production deploy is not approved.

Additional local evidence:

- Product Design continuation audit screenshots: `output/product-design-audit/word-heavy-continuation-2026-07-02T17-15-15-448Z`.
- Consent first-impression screenshots: `output/product-design-audit/consent-first-impression-2026-07-02T17-18-36-986Z`.
- On mobile, the fixed consent rail still sits over the bottom of the tall hero area until the visitor chooses an option; the main headline and CTAs remain visible. A different consent pattern should be a separate approved tranche.

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
