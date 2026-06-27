# Website Release Handover

Last updated: 2026-06-27 16:30 BST
Status: current public-site handover with separate BuildScan Gate 0

## Current Production State

Production is live at:

- `https://robsonai.co.uk`

Current public pages:

- `/`
- `/index.html`
- `/building-analyst.html`
- `/who-its-for.html`
- `/privacy.html`

Current fallback / legacy paths:

- `holding.html` remains available as a noindex fallback/historical page.
- `preview.html` redirects to `/`.

Current public route stance:

- The full public website is live.
- Public pages are crawlable and listed in `sitemap.xml`.
- `robots.txt` disallows `holding.html` and `preview.html`.
- The current public website is not protected by preview auth.

## Page Intent

- `index.html`
  - Public Robson AI Solutions homepage.
  - Presents Robson AI, Building Analyst, BuildScan / Drone-to-3D, property operations / WAIS-style thinking, method, credibility, and contact.
- `building-analyst.html`
  - Public product-direction page for Building Analyst.
  - Covers assessment capture, evidence organisation, report-ready analysis, review support, fit boundaries, and contact.
- `who-its-for.html`
  - Public audience qualification page.
  - Helps visitors understand fit and non-fit for surveyors, estates, property operations, compliance/inspection, and drone/3D capture.
- `privacy.html`
  - Public privacy notice for email-first contact and optional analytics.
- `holding.html`
  - Historical/noindex fallback page.
  - Do not describe it as the production front door unless intentionally rolling back.
- `buildscan-viewer.html`
  - Local uncommitted interactive BuildScan GLB candidate.
  - Not live production as of this handover.

## Proof And Content Stance

The site must stay honest about stage:

- No fabricated testimonials, customer logos, rollout claims, adoption numbers, or procurement-ready claims.
- Building Analyst should remain a professional assessment/evidence/reporting product direction until app launch assets are approved.
- BuildScan should remain external capture/model-review exploration unless Wayne approves stronger maturity language.
- WAIS/property operations should remain early property/estate intelligence and CAFM-adjacent workflow thinking until a release-safe proof section exists.
- Professional judgement, context, and responsibility remain central.
- Apple-native direction may be described cautiously where relevant; do not overclaim unreleased or unimplemented Apple features.
- BYO API keys or external AI providers are not the product goal for Building Analyst.

Current proof sources:

- Building Analyst workflow proof and illustrative record structure.
- Approved BuildScan Ludgershall static PNG model-view proof.
- Local uncommitted BuildScan interactive GLB candidate, pending Wayne approval and Netlify preview gate.
- Product IA/proof map: `docs/codex/PRODUCT_IA_PROOF_MAP.md`.
- Website excellence programme: `docs/codex/WEBSITE_EXCELLENCE_PROGRAMME.md`.
- Release approval packet: `docs/codex/RELEASE_APPROVAL_PACKET.md`.

## Preview Authentication

Preview auth is retained in the repo for future private/staging routes and unit smoke testing:

- Function: `netlify/edge-functions/preview-auth.js`
- Test: `npm run qa:preview-auth`

It reads credentials from Netlify environment variables when used:

- `ROBSON_PREVIEW_USERNAME`
- `ROBSON_PREVIEW_PASSWORD`

Current public production pages are not hidden behind preview auth.

Do not hard-code preview credentials in source. The current rotated preview credential is stored in macOS Keychain under service `Robson AI Website Preview Auth`; do not print credential values in chat, shell logs, docs, source, PR descriptions, or screenshots.

For CLI alias previews that use preview auth, Netlify may classify the deploy as `branch-deploy`. Keep preview-auth vars available in the relevant Netlify contexts if protected preview routes are reintroduced:

- `production`
- `deploy-preview`
- `branch-deploy`

## BuildScan Interactive Gate 0

The local uncommitted BuildScan interactive candidate changes release posture.

It adds or changes:

- `buildscan-viewer.html`
- `assets/showcase/buildscan-ludgershall-public.glb`
- `assets/vendor/three-0.164.1/`
- `scripts/buildscan-viewer-smoke.mjs`
- `netlify.toml` frame/CSP/cache rules
- measurement smoke/evidence route requirements

Before any commit, push, preview deploy, or production deploy, Wayne must approve:

1. Public use of the optimised Ludgershall GLB as downloadable public model data.
2. Same-origin iframe allowance and CSP/header posture.
3. Netlify deploy-preview validation.
4. Performance exception or improvement plan if Lighthouse remains below target.
5. Rollback path to the static PNG-only BuildScan section.

The current approval packet is `docs/codex/RELEASE_APPROVAL_PACKET.md`.

Recommended preview validation for this gate:

```bash
npm run qa:buildscan-viewer
npm run qa:rendered
npm run qa:release-inventory
npm run qa:release-security
npm run qa:release-headers
npm run qa:release:local
npm run qa:measurement:local
npm run qa:measurement:evidence
npx --no-install netlify build
git diff --check
```

Then, after Wayne approves branch/push/preview:

```bash
QA_BASE_URL="https://<netlify-preview-url>" npm run qa:release:preview
```

Also verify on the Netlify preview:

- `/buildscan-viewer.html` returns `200`.
- GLB and local Three.js vendor assets return `200`.
- GLB has an acceptable content type / cache behaviour.
- HSTS, CSP, frame, referrer, permissions and source-path deny rules match `netlify.toml`.
- Root homepage does not load the GLB before the user requests it.
- Embedded viewer reaches model-ready state.
- Static image fallback remains usable if the viewer fails.
- CSP and frame policy allow same-origin iframe only.
- No console errors, horizontal overflow, or inaccessible controls on desktop/mobile.

## QA Commands

Install dependencies:

```bash
npm install
npx playwright install chromium
```

Run the governed local smoke check:

```bash
npm run qa:measurement:local
```

Run the BuildScan interactive viewer smoke when the local viewer candidate is in scope:

```bash
npm run qa:buildscan-viewer
```

Run rendered desktop/mobile release smoke:

```bash
npm run qa:rendered
```

Run rendered desktop/mobile release smoke against a deployed Netlify preview:

```bash
QA_BASE_URL="https://<netlify-preview-url>" npm run qa:rendered:preview
```

Run Netlify release-header smoke:

```bash
npm run qa:release-headers
```

Run release-candidate inventory:

```bash
npm run qa:release-inventory
```

Run local privacy/security release smoke:

```bash
npm run qa:release-security
```

Run the full local release gate before commit/preview approval:

```bash
npm run qa:release:local
```

For a deployed Netlify preview:

```bash
QA_BASE_URL="https://<netlify-preview-url>" npm run qa:release-headers:preview
```

Run the full deployed-preview release gate after Wayne approves preview deployment:

```bash
QA_BASE_URL="https://<netlify-preview-url>" npm run qa:release:preview
```

Run BuildScan viewer smoke against a deployed Netlify preview:

```bash
QA_BASE_URL="https://<netlify-preview-url>" npm run qa:buildscan-viewer:preview
```

Run the preview-auth unit smoke:

```bash
npm run qa:preview-auth
```

Run the full evidence pack:

```bash
npm run qa:measurement:evidence
```

Run static/build checks:

```bash
npx --no-install html-validate index.html building-analyst.html who-its-for.html privacy.html holding.html buildscan-viewer.html
npx --no-install netlify build
git diff --check
```

## Standard Netlify Release Workflow

No Netlify deploy may be performed without Wayne's explicit approval.

Recommended workflow:

1. Read `docs/codex/TRACKER.md`.
2. Check `git status --short --branch`.
3. Confirm the active tranche and approval envelope.
4. Run local validation.
5. If approved, stage only scoped files.
6. If approved, create a branch/commit/push.
7. If approved, create a Netlify deploy-preview.
8. Validate preview route matrix, headers/CSP/cache/MIME, source-path deny rules, fallback/redirect behavior, release-candidate inventory, assets, rendered desktop/mobile smoke, BuildScan viewer smoke, and measurement smoke.
9. Ask Wayne for separate production approval.
10. After production approval, merge/publish.
11. Verify live production.
12. Record rollback path and tracker evidence.

## Current Release Notes

Latest verified public production content before the uncommitted interactive GLB candidate:

- Commit: `178cac0885aea8b9d813d4c50ac18cb0c68ce7cb`
- Netlify production deploy: `6a3d74cb38ad980008340f42`
- Public URL: `https://robsonai.co.uk`

Current local uncommitted work includes:

- BuildScan interactive GLB candidate and release gate hardening.
- Product IA/proof map, trust/CTA segmentation, property-operations proof section, and small navigation/copy fixes.
- Performance-budget recovery, mobile consent polish, icon payload cleanup, rendered smoke, release inventory, HSTS/header hardening, and local privacy/security smoke.
- Website excellence programme docs and public-state release docs.

No commit, push, Netlify preview deploy, or production deploy has been performed for this current local candidate.

## Current Validation Evidence

Recent local evidence:

- Full local release gate: `output/release-local-gate/gate-2026-06-27T15-47-18-420Z/release-local-gate.json`
- BuildScan viewer smoke: `output/buildscan-viewer/smoke-2026-06-27T15-47-25-410Z`
- Rendered release smoke: `output/playwright/rendered-release-smoke-2026-06-27T15-47-33-099Z`
- Release-candidate inventory: `output/release-inventory/inventory-2026-06-27T15-47-25-008Z/release-candidate-inventory.json`
- Local privacy/security smoke: `output/release-security/smoke-2026-06-27T15-47-24-771Z/release-security-smoke.json`
- Release-header smoke with HSTS: `output/release-headers/smoke-2026-06-27T15-47-24-892Z/release-header-smoke.json`
- Full evidence pack: `output/measurement/evidence-2026-06-27T15-47-52-894Z`
- Product IA/routing smoke: `output/measurement/smoke-2026-06-27T10-29-31-182Z`

Known watch item:

- Deployed Netlify preview validation is still required before production, especially HSTS/CSP/cache/MIME/source-path deny behaviour, BuildScan viewer readiness, mobile rendering, and measurement smoke against the actual preview URL.

## Rollback Notes

If the interactive BuildScan candidate is rejected before publication:

- Remove/defer `buildscan-viewer.html`.
- Remove/defer `assets/showcase/buildscan-ludgershall-public.glb`.
- Remove/defer `assets/vendor/three-0.164.1/`.
- Remove/defer `scripts/buildscan-viewer-smoke.mjs` and viewer-specific QA route requirements if no longer needed.
- Restore stricter frame headers if same-origin iframe support is no longer needed.
- Keep the approved static BuildScan PNG section.

If production deployment fails after a future approved publish:

- Use Netlify rollback to the last known good deploy, or
- Revert the release commit and push `main` only after Wayne approves the rollback path.
