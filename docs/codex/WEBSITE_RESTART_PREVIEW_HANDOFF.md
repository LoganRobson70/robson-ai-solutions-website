# Website Restart Preview Handoff

Last updated: 2026-07-04 17:31 BST
Owner: Wayne Robson / Robson AI Solutions
Repo: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website`
Status: production-gated handoff for zip-faithful correction with animation parity polish; live on `https://robsonai.co.uk`

## 1. Purpose

This handoff records the production-published zip-faithful Robson AI Solutions website correction.

It is separate from `docs/codex/FINAL_WEBSITE_APPROVAL_HANDOFF.md`, which records the earlier production release. The earlier release evidence does not approve this candidate.

Current decision needed:

1. Approve a docs/source-control alignment tranche so production evidence can be committed and GitHub/main can be reconciled deliberately.
2. Request live-site design/content tweaks if anything still feels wrong.
3. Hold source-control alignment and leave the live site as-is.

Recommended option: `1`.

## 2. Current Review URL

Local review URL while the Python server is running:

- `http://127.0.0.1:8134/`

Notes:

- The Browser plugin backend cannot reach this local loopback URL and returned `ERR_CONNECTION_REFUSED`; use Wayne's in-app/local browser or the Playwright screenshot evidence.
- Preview is live at `https://zip-faithful-motion--robson-ai-website.netlify.app` on deploy `6a4931e3a196083c018fa0bb`.
- Production is live at `https://robsonai.co.uk` on deploy `6a4933ec2451857b37ea20b4`.
- Branch push, GitHub PR, DNS/domain changes and further production deploys have not been approved for this correction.

## 3. What This Candidate Changes

The correction responds to Wayne's rejection that the published site was not faithful enough to the supplied redesign zip in layout, text, fonts and content.

Implemented locally:

- Replaces the previous homepage shell with a much closer zip-style version: white header, Home/Product/Pricing/About IA, dark mesh hero, large `Turning data into intelligence.` proposition, and zip-style product sections.
- Restores the relevant supplied-zip motion feel through production-safe local code: animated mesh canvases, pointer-responsive hero motion, movement-only section reveals, hover/depth feedback, reduced-motion handling and `qa-static` fallback.
- Keeps the BuildScan model-view layer and opt-in interactive GLB viewer as part of the product evidence.
- Keeps Building Analyst, Robson AI Software and BuildScan positioned as separate product directions under one brand.
- Keeps cautious Apple-native/product maturity language.
- Keeps email-first contact and no website form/customer-data store.
- Keeps the existing BuildScan opt-in model-view behaviour and does not add new model assets.
- Updates release QA scripts to match the new IA, no-GA4 first-load privacy behaviour, and BuildScan opt-in interaction.

Not included:

- Branch push or GitHub PR.
- Further production deploy or rollback.
- Production deploy.
- New product claims.
- New customer logos, testimonials, fake screenshots or invented traction.
- New public GLB/model exposure.
- Apple, Android, macOS or iOS implementation.
- GA4 enablement, forms, payments, customer data, DNS or external messages.

## 4. Candidate File Scope

Expected tracked files:

- `docs/codex/GOAL_COMPLETION_AUDIT.md`
- `docs/codex/PUBLISH_READINESS_AUDIT.md`
- `docs/codex/RELEASE_STAGING_MANIFEST.md`
- `docs/codex/TRACKER.md`
- `docs/codex/WEBSITE_APPROVAL_REVIEW_CHECKLIST.md`
- `docs/codex/WEBSITE_RESTART_PREVIEW_HANDOFF.md`
- `index.html`
- `scripts/keyboard-release-smoke.mjs`
- `scripts/measurement-smoke.mjs`
- `scripts/product-design-acceptance-smoke.mjs`
- `scripts/release-security-smoke.mjs`
- `scripts/rendered-release-smoke.mjs`
- `scripts/responsive-route-smoke.mjs`
- `script.js`
- `styles.css`

Expected untracked candidate files:

- None.

Do not use `git add .`.

## 5. Current Local Evidence

Latest full local release gate:

- `output/release-local-gate/gate-2026-07-04T15-53-37-926Z/release-local-gate.json`
- Result: pass, 37 steps.

Rendered screenshot evidence:

- `output/playwright/rendered-release-smoke-2026-07-04T15-55-06-652Z`

Measurement evidence:

- `output/measurement/evidence-2026-07-04T15-55-27-128Z`
- Lighthouse performance: 99.
- Accessibility: 100.
- Best practices: 100.
- SEO: 100.
- LCP: about 1.24 seconds.
- Playwright-injected axe: zero violations across six routes.
- CLS: 0.

Latest candidate scope evidence:

- `output/release-staging-manifest/smoke-2026-07-04T15-53-45-280Z/release-staging-manifest-smoke.json`
- `output/release-inventory/inventory-2026-07-04T15-53-45-020Z/release-candidate-inventory.json`
- Dirty count: 15.
- Secret findings: 0.
- GLB external URI references: 0.

The manifest and inventory match the current 15-file zip-faithful correction.

Latest deployed preview evidence:

- Preview URL: `https://zip-faithful-motion--robson-ai-website.netlify.app`.
- Deploy ID: `6a4931e3a196083c018fa0bb`.
- Deploy logs: `https://app.netlify.com/projects/robson-ai-website/deploys/6a4931e3a196083c018fa0bb`.
- Source commit: `f2df3c1` (`Restore zip-faithful website motion preview`).
- Preview gate: `output/release-preview-gate/gate-2026-07-04T16-16-54-785Z/release-preview-gate.json`; result pass, 14 steps.
- Preview gate evidence includes release inventory `output/release-inventory/inventory-2026-07-04T16-16-54-926Z/release-candidate-inventory.json`, deployed headers/source-deny `output/release-headers/smoke-2026-07-04T16-17-02-455Z/release-header-smoke.json`, BuildScan viewer `output/buildscan-viewer/smoke-2026-07-04T16-17-02-806Z`, rendered screenshots `output/playwright/rendered-release-smoke-2026-07-04T16-19-15-017Z`, and measurement smoke `output/measurement/smoke-2026-07-04T16-19-27-393Z`.

Latest production evidence:

- Production URL: `https://robsonai.co.uk`.
- Netlify deploy: `6a4933ec2451857b37ea20b4`.
- Unique deploy URL: `https://6a4933ec2451857b37ea20b4--robson-ai-website.netlify.app`.
- Deploy logs: `https://app.netlify.com/projects/robson-ai-website/deploys/6a4933ec2451857b37ea20b4`.
- Source commit: `f2df3c1` (`Restore zip-faithful website motion preview`).
- Production gate: `output/release-production-gate/gate-2026-07-04T16-25-32-131Z/release-preview-gate.json`; result pass, 14 steps.
- Production gate evidence includes release inventory `output/release-inventory/inventory-2026-07-04T16-25-32-251Z/release-candidate-inventory.json`, deployed headers/source-deny `output/release-headers/smoke-2026-07-04T16-25-39-683Z/release-header-smoke.json`, BuildScan viewer `output/buildscan-viewer/smoke-2026-07-04T16-25-39-989Z`, rendered screenshots `output/playwright/rendered-release-smoke-2026-07-04T16-26-49-860Z`, and measurement smoke `output/measurement/smoke-2026-07-04T16-27-00-373Z`.

## 6. Approval Meaning

Completed option `1` approval meant:

1. Deploy commit `f2df3c1` to production using Netlify CLI/archive deployment.
2. Run `QA_PRODUCTION_URL="https://robsonai.co.uk" CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production`.
3. Report the production URL, deploy ID, production-gate evidence, risks and rollback path.

This approval did not approve:

- Branch push unless it is required by the selected preview mechanism and separately stated.
- GitHub PR.
- DNS/domain changes.
- Analytics/forms/customer data handling.
- External messages.
- Any destructive git action.

## 7. Production Gate Requirements

The production gate has been run for this correction:

```bash
QA_PRODUCTION_URL="https://robsonai.co.uk" CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production
```

The production deploy is complete for this release because this gate passed at `output/release-production-gate/gate-2026-07-04T16-25-32-131Z/release-preview-gate.json`.

## 8. Risks And Residuals

- The branch is ahead by previous release/evidence commits. Do not publish the rejected `proof-motion-polish` preview.
- Firefox/WebKit Playwright binaries remain unavailable locally; Chromium passes and this is warning-only in the current gates.
- Dev/release tooling audit still reports 17 moderate advisories; production footprint remains zero vulnerabilities.
- Full Codex Security workspace scan is not complete.
- Production is now on approved deploy `6a4933ec2451857b37ea20b4`; the previous rejected deploy `6a48c6e1a19608e3698fa160` is the immediate rollback candidate if Wayne asks for it.
- Deployed preview and production behaviour have both passed release gates.

## 9. Rollback Path

Before commit:

- Restore the manifest-approved files to the prior committed state, then rerun local checks.

After preview:

- Do not promote the preview.
- Keep production unchanged.
- Revert the local commit or prepare a corrected candidate.

After this production deploy:

- Restore the previous Netlify production deploy `6a48c6e1a19608e3698fa160` unless Wayne confirms a different rollback target first.

## 10. Recommended Decision

1. Approve docs/source-control alignment so the production evidence docs can be committed and GitHub/main can be reconciled deliberately.
2. Request live-site design/content tweaks if anything still feels wrong.
3. Hold source-control alignment and leave the live site as-is.
