# Public Full-Site Launch Plan

Last updated: 2026-05-30 17:01 Europe/London
Owner: Wayne Robson / Robson AI Solutions
Status: plan only; no public full-site launch has been performed

## 1. Current Production Stance

Production is live at `https://robsonai.co.uk`.

Current intended behaviour:

- `/` serves the public holding page from `holding.html`.
- `index.html`, `building-analyst.html`, `who-its-for.html`, and `privacy.html` are deployed and ready behind Netlify Edge preview auth.
- The public message says the website is getting ready to go live.
- The fuller website is the launch-ready version to expose when Robson AI is ready to publish a truthful professional-services/product-direction site. App screenshots and App Store links are required only if the public page claims app availability or shows app-specific launch assets.
- Analytics is still inert because the GA4 Measurement ID is empty.

This plan should not be executed until Wayne explicitly approves the public launch.

## 2. Launch Trigger

Recommended launch trigger:

- The iOS app is live or has a clearly approved public release date if the site will claim app availability.
- App screenshots are approved for public use if the site will show app screenshots.
- Any App Store / product URL needed by the site is known if the site links to an app/product listing.
- Marketing language is final enough to advertise without over-claiming.
- Wayne approves moving from holding-page mode to public fuller-site mode.

Do not launch the fuller site just because the website build is technically ready.

## 3. Public Launch Goal

Make the fuller Robson AI Solutions website public while preserving a controlled, honest product-stage message.

Public launch should:

- Make the fuller site the public front door at `/`.
- Show Building Analyst/product screenshots only where approved and only if the launch claim needs them.
- Keep claims grounded in current product reality.
- Keep privacy, robots, sitemap, consent, and analytics behaviour aligned.
- Remove preview auth only from pages intended to be public.
- Keep any genuinely private/staging routes protected or unlinked.

## 4. Required Code Changes

Expected route/config changes:

- Update `netlify.toml` so `/` no longer rewrites to `holding.html`.
- Remove `preview-auth` Edge Function entries for pages that should become public:
  - `/index.html`
  - `/building-analyst.html`
  - `/who-its-for.html`
  - `/privacy.html`
- Decide whether `holding.html` should:
  - remain available as `/holding.html` with `noindex`, or
  - redirect to `/`, or
  - be kept only as rollback content.
- Update `preview.html` redirect if needed.
- Update `robots.txt` so public pages are crawlable.
- Update `sitemap.xml` to include public pages.
- Update page-level `<meta name="robots">` values from `noindex, nofollow` to public indexing where appropriate.
- Update canonical URLs if `index.html` becomes the public homepage.
- Add approved app/screenshots assets and references only where the public launch scope includes app-specific launch material.
- Add App Store/product links only when the target is live and approved.

## 5. Content Checks Before Launch

Before launch, review these pages:

- `index.html`
- `building-analyst.html`
- `who-its-for.html`
- `privacy.html`
- `holding.html`

Check for:

- No invented testimonials, customer logos, adoption metrics, or procurement-ready claims.
- Clear stage language around Building Analyst and related Robson AI products.
- Screenshots are approved and match the live/current app if screenshots are used.
- Any iOS/App Store language matches the app's real status if app availability is claimed.
- Email/contact path is still correct.
- Privacy notice matches actual data collection.
- Optional analytics language matches the GA4 setup at launch time.

## 6. QA Gates

Run before public launch PR:

```bash
npm run qa:preview-auth
npm run qa:measurement:local
npm run qa:measurement:evidence
npx html-validate --rule doctype-style:off --rule void-style:off holding.html index.html preview.html privacy.html building-analyst.html who-its-for.html
npx --no-install netlify build
git diff --check
```

Add browser checks:

- Desktop `/`.
- Mobile `/`.
- `building-analyst.html`.
- `who-its-for.html`.
- `privacy.html`.
- Screenshot/image rendering.
- Console errors/warnings.
- Horizontal overflow.
- Public route/auth matrix.

Expected public-launch route matrix:

| Route | Anonymous expected | Notes |
| --- | --- | --- |
| `/` | `200` | Fuller public homepage |
| `/index.html` | `200` or redirect to `/` | Decide in launch PR |
| `/building-analyst.html` | `200` | Public product/workstream page |
| `/who-its-for.html` | `200` | Public audience-fit page |
| `/privacy.html` | `200` | Public privacy page |
| `/holding.html` | `200`, `301`, or private rollback route | Decide in launch PR |
| `/robots.txt` | `200` | Should allow intended public pages |
| `/sitemap.xml` | `200` | Should list intended public pages |

## 7. Deployment Path

Recommended workflow:

1. Create a new branch from `main`.
2. Make only public-launch route/content/asset changes.
3. Run local QA gates.
4. Deploy a non-production Netlify preview.
5. Verify public route matrix and browser screenshots.
6. Open PR with launch checklist and rollback note.
7. Wayne reviews and approves explicit production launch.
8. Merge PR to `main`.
9. Watch Netlify production deploy.
10. Verify `https://robsonai.co.uk` live.

## 8. Rollback Plan

Fast rollback options:

- Netlify rollback to the last known holding-page deploy.
- Git revert the public-launch PR and merge the revert.

Expected rollback state:

- `/` returns the holding page.
- Fuller pages are protected again by preview auth.
- `robots.txt` and `sitemap.xml` return to holding-only posture.

Do not change DNS for this launch unless Wayne explicitly approves it separately.

## 9. Recommended First Public-Launch Tranche

Tranche name: `public-full-site-launch-readiness`

Objective:
Prepare the exact public-launch branch without deploying it.

Scope:

- Confirm whether this launch is a professional/product-direction website launch or an app-availability launch.
- Update route/auth/robots/sitemap plan into code.
- Add only approved screenshots/assets if the launch scope includes them.
- Keep copy honest and aligned with Robson AI brand rules.
- Run all QA gates and produce a Netlify preview.
- Stop before production launch for Wayne approval.

Out of scope:

- Production launch.
- DNS changes.
- GA4 activation unless separately approved.
- Contact form or CRM setup.
- Product/app changes outside this website repo.

Recommended next approval:

`public-full-site-launch-readiness`
