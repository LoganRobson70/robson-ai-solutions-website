# Robson AI Solutions Website

Static website repo for Robson AI Solutions.

The current production stance is a public full website at `https://robsonai.co.uk`.

Public pages include:

- `/`
- `/index.html`
- `/building-analyst.html`
- `/who-its-for.html`
- `/privacy.html`

`holding.html` remains as a noindex fallback/historical page, not the current public front door.

Preview authentication is retained in the repo for future private/staging routes and for local/unit validation, but the current public website pages are not hidden behind preview auth.

The current uncommitted BuildScan interactive GLB candidate is separate from production. Do not publish it until Wayne explicitly approves the public model asset and the Netlify preview gate passes.

## Current Stack

- Static HTML, CSS, and JavaScript
- Netlify hosting
- Netlify Edge Function preview auth
- Node-based QA scripts
- Playwright, html-validate, axe, Lighthouse, and browser-driver-manager for validation

## Key Files

- `docs/codex/TRACKER.md` - current Codex working tracker
- `docs/codex/PRD.md` - current-state PRD
- `docs/codex/CAPABILITY_AUDIT.md` - Codex tooling audit
- `docs/codex/FIRST_TRANCHE.md` - first autonomous work block
- `docs/codex/WEBSITE_EXCELLENCE_PROGRAMME.md` - release-grade website quality programme
- `docs/codex/PRODUCT_IA_PROOF_MAP.md` - product IA, proof, CTA, and claim-boundary map
- `docs/codex/RELEASE_APPROVAL_PACKET.md` - Wayne approval packet for the BuildScan interactive preview candidate
- `docs/release-handover.md` - release and preview-auth notes
- `netlify.toml` - Netlify build, redirects, security headers, and asset cache/MIME rules
- `netlify/edge-functions/preview-auth.js` - preview authentication gate
- `scripts/measurement-smoke.mjs` - governed local analytics/route smoke
- `scripts/measurement-evidence.mjs` - full evidence pack
- `scripts/buildscan-viewer-smoke.mjs` - direct and embedded BuildScan interactive viewer smoke
- `scripts/rendered-release-smoke.mjs` - rendered desktop/mobile release smoke and screenshots
- `scripts/release-candidate-inventory.mjs` - dirty-file, asset-budget, GLB and secret-pattern release inventory
- `scripts/release-security-smoke.mjs` - bounded privacy/security posture smoke for static pages, analytics consent, HSTS, and viewer/vendor governance
- `scripts/release-header-smoke.mjs` - Netlify header/CSP/cache/MIME smoke
- `scripts/release-local-gate.mjs` - ordered local release gate runner before commit/preview approval
- `scripts/release-preview-gate.mjs` - ordered deployed-preview gate runner after approved Netlify preview deployment
- `scripts/preview-auth-smoke.mjs` - preview-auth unit smoke

## Commands

Install dependencies:

```bash
npm install
npx playwright install chromium
```

Run preview-auth smoke:

```bash
npm run qa:preview-auth
```

Run BuildScan interactive viewer smoke when the local viewer candidate is present:

```bash
npm run qa:buildscan-viewer
```

Run rendered desktop/mobile release smoke:

```bash
npm run qa:rendered
```

For a deployed Netlify preview:

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

Run deployed-preview BuildScan viewer smoke:

```bash
QA_BASE_URL="https://<netlify-preview-url>" npm run qa:buildscan-viewer:preview
```

Run local measurement smoke:

```bash
npm run qa:measurement:local
```

Run full measurement evidence:

```bash
npm run qa:measurement:evidence
```

Check whitespace before committing:

```bash
git diff --check
```

## Preview Auth

Preview auth uses Netlify environment variables when enabled for private routes:

- `ROBSON_PREVIEW_USERNAME`
- `ROBSON_PREVIEW_PASSWORD`

Current public pages are not preview-auth protected. Keep preview auth available for future private/staging routes, branch deploy checks, or protected previews.

The current Netlify config blocks source/repo paths such as `/docs/*`, `/scripts/*`, `/netlify/*`, `/AGENTS.md`, `/README.md`, `/package.json`, and `/netlify.toml` even though the project still publishes from the repo root. A later `dist/` or `public/` publish migration remains the cleaner long-term release structure.

The current rotated preview password is stored in macOS Keychain:

- service: `Robson AI Website Preview Auth`
- account label: stored in Keychain; do not commit or print it

Do not print, commit, or paste the preview username or password.

## Deployment Notes

Do not production deploy without Wayne's explicit approval.

For CLI alias preview checks that use preview auth, Netlify treats the deploy as `branch-deploy`, so preview auth variables must be set for:

- `production`
- `deploy-preview`
- `branch-deploy`

See `docs/release-handover.md` for current release steps and validation evidence.
