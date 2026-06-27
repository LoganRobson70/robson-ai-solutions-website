# Public Full-Site Launch Readiness

Last updated: 2026-06-27 11:39 BST
Branch: `codex/public-full-site-launch-readiness`
Status: historical preview-readiness record; public full-site launch has since been completed

## Current Status And Supersession Note

This document records the launch-readiness preview branch from 2026-05-30.

It is no longer the active production posture:

- The public full-site launch was completed on 2026-06-20.
- Production `https://robsonai.co.uk` now serves the full public website.
- Current public pages are `/`, `/index.html`, `/building-analyst.html`, `/who-its-for.html`, and `/privacy.html`.
- `holding.html` remains as a noindex fallback/historical page.

Current release state is governed by:

- `docs/codex/TRACKER.md`
- `docs/codex/PRD.md`
- `docs/release-handover.md`
- `docs/codex/WEBSITE_EXCELLENCE_PROGRAMME.md`
- `docs/codex/PRODUCT_IA_PROOF_MAP.md`

Use the validation evidence below as historical proof of the launch-readiness branch, not as a current deployment instruction.

## What This Branch Prepares

This branch prepares the website for the future public full-site launch while keeping production unchanged until Wayne gives a separate explicit launch approval.

Prepared behaviour:

- `/` serves the fuller Robson AI Solutions homepage.
- `building-analyst.html`, `who-its-for.html`, and `privacy.html` are public.
- `holding.html` remains available as a noindex fallback page.
- `preview.html` redirects to `/`.
- `robots.txt` allows public pages and disallows `holding.html` and `preview.html`.
- `sitemap.xml` lists the public launch pages.
- Page-level robots metadata is public for launch pages and noindex for the holding page.
- QA now enters the fuller site through `/`, not `/index.html`.

## Deliberately Not Added Yet

The following are launch blockers, not oversights:

- App Store URL or iOS app public release link.
- New iOS app screenshots.
- Advertising campaign copy.
- GA4 Measurement ID.
- Contact form or CRM integration.

These should only be added when the iOS app is live or has an approved public launch date, screenshots are approved, and Wayne approves the final public launch.

## Validation Evidence

Local checks passed:

```bash
git diff --check
npx html-validate --rule doctype-style:off --rule void-style:off holding.html index.html preview.html privacy.html building-analyst.html who-its-for.html
npm run qa:preview-auth
npm run qa:measurement:local
npm run qa:measurement:evidence
npx --no-install netlify build
```

Browser checks passed:

- Desktop `/`.
- Mobile `/`.
- Desktop `building-analyst.html`.
- Mobile `who-its-for.html`.
- Mobile `privacy.html`.
- No console issues found.
- No horizontal overflow found.

Netlify preview:

- URL: `https://public-launch-readiness--robson-ai-website.netlify.app`
- Deploy ID: `6a1b167adff97530bcd449b4`
- Context: `branch-deploy`
- State: ready

Preview route matrix passed:

| Route | Expected | Actual |
| --- | --- | --- |
| `/` | public fuller homepage | `200`, `index, follow` |
| `/index.html` | public fuller homepage | `200`, `index, follow` |
| `/building-analyst.html` | public page | `200`, `index, follow` |
| `/who-its-for.html` | public page | `200`, `index, follow` |
| `/privacy.html` | public page | `200`, `index, follow` |
| `/holding.html` | fallback only | `200`, `noindex, nofollow` |
| `/robots.txt` | public | `200` |
| `/sitemap.xml` | public | `200` |

Preview smoke passed:

- Artifact: `output/measurement/smoke-2026-05-30T16-55-46-464Z`

Latest artifacts:

- Local smoke: `output/measurement/smoke-2026-05-30T16-51-16-235Z`
- Evidence pack: `output/measurement/evidence-2026-05-30T16-51-27-647Z`

Latest Lighthouse median from evidence pack:

- Performance: 83
- Accessibility: 100
- Best practices: 100
- SEO: 100

## Next Gate

Before production launch, Wayne should confirm:

- iOS app live status or approved public launch date.
- Approved screenshots/assets to show.
- App Store or product URL, if available.
- Whether GA4 should remain inert or be enabled with a real Measurement ID.
- Whether the holding page should remain as `/holding.html`, redirect to `/`, or be removed after launch.

Production remains unchanged until Wayne explicitly approves launch.
