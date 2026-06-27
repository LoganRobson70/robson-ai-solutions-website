# Measurement QA

This repo includes a verification-only measurement QA harness for the current governed analytics state on `robsonai.co.uk`.

## Purpose

Use this tooling before any real GA4 Measurement ID is enabled and before any approved public website release.

It proves:

- consent is default-off
- consent persists locally
- no Google analytics or tag manager requests are made when the GA4 ID is empty
- the governed event contract remains exactly:
  - `cta_click`
  - `mailto_click`
  - `email_copy`
  - `scroll_depth`
  - `section_view`
  - `nav_click`
  - `proof_interaction`
- route, accessibility, and Lighthouse evidence can be regenerated on demand
- current required public/static routes return `200`
- the local BuildScan interactive candidate's viewer, GLB, and local Three.js assets are present when that candidate is in scope
- Lighthouse release budgets are enforced by the full evidence command

## Commands

Install tooling:

```bash
npm install
npx playwright install chromium
```

The evidence command will sync a matching ChromeDriver automatically before the axe pass.

Run local measurement smoke:

```bash
npm run qa:measurement:local
```

Run BuildScan interactive viewer smoke when the local viewer candidate is in scope:

```bash
npm run qa:buildscan-viewer
```

Run rendered desktop/mobile release smoke:

```bash
npm run qa:rendered
```

Run rendered desktop/mobile release smoke against a deployed preview:

```bash
QA_BASE_URL="https://<netlify-preview-url>" npm run qa:rendered:preview
```

Run Netlify release-header smoke locally against `netlify.toml`:

```bash
npm run qa:release-headers
```

Run release-candidate inventory before commit/preview approval:

```bash
npm run qa:release-inventory
```

Run local privacy/security release smoke before commit/preview approval:

```bash
npm run qa:release-security
```

Run the full local release gate before commit/preview approval:

```bash
npm run qa:release:local
```

Run Netlify release-header smoke against a deployed preview:

```bash
QA_BASE_URL="https://<netlify-preview-url>" npm run qa:release-headers:preview
```

Run the full deployed-preview release gate after Wayne approves preview deployment:

```bash
QA_BASE_URL="https://<netlify-preview-url>" npm run qa:release:preview
```

Run BuildScan interactive viewer smoke against a deployed preview:

```bash
QA_BASE_URL="https://<netlify-preview-url>" npm run qa:buildscan-viewer:preview
```

Run preview measurement smoke:

```bash
QA_BASE_URL="https://<netlify-preview-url>" npm run qa:measurement:preview
```

Run the full local evidence pack:

```bash
npm run qa:measurement:evidence
```

## Output

Artifacts are written under ignored paths in `output/measurement/`.

Expected artifacts include:

- route/status JSON
- first-load consent banner screenshot
- consent persistence proof
- empty-ID network proof
- fake-ID event contract JSON
- axe output
- Lighthouse JSON reports
- top-level evidence summary JSON
- BuildScan viewer screenshots and summary JSON when `npm run qa:buildscan-viewer` is run
- rendered desktop/mobile screenshots and summary JSON under `output/playwright/` when `npm run qa:rendered` is run
- release-header summary JSON under `output/release-headers/` when `npm run qa:release-headers` is run
- release-candidate inventory JSON under `output/release-inventory/` when `npm run qa:release-inventory` is run
- local privacy/security summary JSON under `output/release-security/` when `npm run qa:release-security` is run
- local release-gate summary JSON under `output/release-local-gate/` when `npm run qa:release:local` is run
- deployed-preview release-gate summary JSON under `output/release-preview-gate/` when `npm run qa:release:preview` is run

## Pass / fail rules

Treat the run as failed if any of the following happen:

- a required event is missing
- an extra event appears
- any Google analytics or tag manager request occurs while the GA4 ID is empty
- consent does not persist across reload
- a required public route returns a non-`200`
- axe reports violations on required public pages
- the Lighthouse median run misses the enforced budget:
  - performance below 90
  - accessibility below 95
  - best practices below 100
  - SEO below 100
  - LCP above 2.5 seconds
  - CLS above 0.1
- the BuildScan viewer is marked loaded before the model-ready signal
- the BuildScan interactive model loads before the user requests it
- the embedded BuildScan viewer fails without preserving the static image fallback
- rendered release smoke finds horizontal overflow, obvious nowrap text overflow, blocked mobile BuildScan controls, console errors, failed requests, missing screenshots, or missing noindex on fallback pages
- Netlify release-header smoke fails the configured HSTS, CSP, frame, referrer, permissions, GLB MIME, or cache policy checks
- release inventory finds forbidden dirty files, unexpected candidate files, asset-budget breaches, invalid GLB structure, external GLB URI references, or secret-like strings outside approved dummy test fixtures
- local privacy/security smoke finds forms/customer-data capture, inline event handlers, direct third-party analytics embeds, unapproved script sources, non-empty GA4 IDs, missing explicit consent controls, cookie storage, high-risk DOM/code injection APIs, missing viewer noindex, or missing vendor license evidence
- the local release gate fails any constituent command or does not write a release-gate summary
- the deployed-preview release gate is run without explicit `QA_BASE_URL`, is pointed at production without an explicit override, fails any constituent command, or does not write a release-gate summary
- preview-mode commands are run without an explicit `QA_BASE_URL` or `--base-url`

## Governance note

This tooling does not enable live analytics.

If no real GA4 Measurement ID is configured, production remains intentionally inert even after a visitor accepts analytics. The fake-ID path exists only inside the local smoke harness and is used to validate the event contract without changing repo files or turning on live collection.

## Current Public Route Set

Current public production pages are:

- `/`
- `/index.html`
- `/building-analyst.html`
- `/who-its-for.html`
- `/privacy.html`

Current noindex/fallback paths:

- `/holding.html`
- `/preview.html`

When the local BuildScan interactive candidate is in scope, the measurement smoke also expects:

- `/assets/robson-ai-icon-v3-32.png`
- `/assets/robson-ai-icon-v3-180.png`
- `/assets/robson-ai-icon-v3-128.webp`
- `/assets/robson-ai-icon-v3-transparent-320.webp`
- `/assets/showcase/buildscan-ludgershall-model-view-420.webp`
- `/assets/showcase/buildscan-ludgershall-model-view-840.webp`
- `/buildscan-viewer.html`
- `/assets/showcase/buildscan-ludgershall-public.glb`
- local Three.js files under `/assets/vendor/three-0.164.1/`

Those BuildScan interactive files are not production-published until Wayne approves the release candidate and the Netlify preview gate passes.

The small PNG and WebP assets above are performance variants for the public website candidate. The original full-size PNG remains available for canonical brand/source, structured-data, social or fallback use where needed.

The current local release-candidate baseline clears the enforced budget with Lighthouse performance 100, accessibility 97, best practices 100, SEO 100, CLS 0, and LCP about 1.73 seconds.
