# Robson AI Solutions Website

Static website repo for Robson AI Solutions.

The current production stance is a public holding page at `https://robsonai.co.uk`, with the fuller website routes kept hidden and protected by Netlify Edge Function preview authentication until Wayne approves public launch.

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
- `docs/release-handover.md` - release and preview-auth notes
- `netlify.toml` - Netlify build, redirects, headers, and Edge Function routes
- `netlify/edge-functions/preview-auth.js` - preview authentication gate
- `scripts/measurement-smoke.mjs` - governed local analytics/route smoke
- `scripts/measurement-evidence.mjs` - full evidence pack
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

Preview auth uses Netlify environment variables:

- `ROBSON_PREVIEW_USERNAME`
- `ROBSON_PREVIEW_PASSWORD`

The current rotated preview password is stored in macOS Keychain:

- service: `Robson AI Website Preview Auth`
- account: `robson-preview`

Do not print, commit, or paste the password.

## Deployment Notes

Do not production deploy without Wayne's explicit approval.

For CLI alias preview checks, Netlify treats the deploy as `branch-deploy`, so preview auth variables must be set for:

- `production`
- `deploy-preview`
- `branch-deploy`

See `docs/release-handover.md` for current release steps and validation evidence.
