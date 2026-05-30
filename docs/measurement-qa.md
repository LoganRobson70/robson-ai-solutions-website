# Measurement QA

This repo includes a verification-only measurement QA harness for the current governed analytics state on `robsonai.co.uk`.

## Purpose

Use this tooling before any real GA4 Measurement ID is enabled.

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

Run preview measurement smoke:

```bash
QA_BASE_URL="https://69b6caef4f766d85c0edac78--robson-ai-website.netlify.app" npm run qa:measurement:preview
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

## Pass / fail rules

Treat the run as failed if any of the following happen:

- a required event is missing
- an extra event appears
- any Google analytics or tag manager request occurs while the GA4 ID is empty
- consent does not persist across reload
- a required public route returns a non-`200`
- axe reports violations on the four public pages

## Governance note

This tooling does not enable live analytics.

If no real GA4 Measurement ID is configured, production remains intentionally inert even after a visitor accepts analytics. The fake-ID path exists only inside the local smoke harness and is used to validate the event contract without changing repo files or turning on live collection.
