# Website Release Handover

This repo now represents a temporary live holding page for Robson AI Solutions, with the fuller website kept behind `/index.html` and protected by HTTP basic authentication until public launch.

## Page intent

- `index.html`
  - Hidden fuller-site entry page.
  - Only intended for manual access until launch and protected by HTTP basic authentication.
- `holding.html`
  - Canonical live holding page served at `/` via Netlify rewrite.
- `preview.html`
  - Legacy preview path retained only to redirect old links safely back to `/`.
- `building-analyst.html`
  - Hidden supporting page behind the holding setup.
- `who-its-for.html`
  - Hidden supporting page behind the holding setup.
- `privacy.html`
  - Hidden supporting page behind the holding setup.

## Proof and content stance

- The site must stay honest about stage.
- No fabricated testimonials, customer logos, rollout claims, or inflated metrics.
- Use `docs/website-narrative.md` as the current copy direction for the fuller website.
- Trust comes from specificity:
  - narrow company focus
  - surveying-led AI software narrative covering evidence capture, analysis, 3D modelling and early property operations tooling
  - clear explanation of where the product fits and does not fit
  - explicit statement of what is still being validated
- Avoid positioning the company as only Building Analyst or as a handover/report tool.

## QA commands

Install dependencies:

```bash
npm install
npx playwright install chromium
```

Run the governed local smoke check:

```bash
npm run qa:measurement:local
```

Run the preview-auth Edge Function smoke check:

```bash
npm run qa:preview-auth
```

Run the full evidence pack:

```bash
npm run qa:measurement:evidence
```

## Preview authentication

Hidden fuller-site routes are protected by the Netlify Edge Function at `netlify/edge-functions/preview-auth.js`.

The function reads credentials from Netlify environment variables:

- `ROBSON_PREVIEW_USERNAME`
- `ROBSON_PREVIEW_PASSWORD`

It fails closed with `401` if either variable is missing. Do not hard-code preview credentials in source. Before any preview or production deploy, confirm these Netlify environment variables are set and rotate any previously hard-coded credential.

For CLI alias previews, Netlify classifies the deploy as `branch-deploy` even when the deploy command is run for preview verification. Keep the preview-auth vars set in these Netlify contexts:

- `production`
- `deploy-preview`
- `branch-deploy`

The current rotated preview password is stored in macOS Keychain as service `Robson AI Website Preview Auth`, account `robson-preview`. Do not print it in chat, shell logs, docs, or source files.

## Netlify workflow

1. Work on a feature branch.
2. Run local smoke:

   ```bash
   npm run qa:measurement:local
   ```

3. Run the full evidence pack:

   ```bash
   npm run qa:measurement:evidence
   ```

4. Run preview-auth smoke:

   ```bash
   npm run qa:preview-auth
   ```

5. Confirm Netlify preview-auth environment variables are set outside source control for `production`, `deploy-preview`, and `branch-deploy`.

6. Deploy a preview build:

   ```bash
   netlify deploy --context branch-deploy --alias preview-auth-check
   ```

7. Review the preview on desktop and mobile.
8. After signoff, publish production:

   ```bash
   netlify deploy --prod --dir .
   ```

## Post-release checks

- live root returns the holding page
- `/index.html` returns the hidden fuller site
- holding-page privacy notice opens inline and does not route into hidden pages
- hidden fuller-site routes are not linked from the public root
- direct hidden subpage access redirects back to `/` unless the session first entered through `/index.html`
- hidden routes require HTTP basic authentication
- metadata and OG image render correctly
- consent banner still behaves correctly
- analytics remains inert with an empty GA4 Measurement ID
- governed event set remains:
  - `cta_click`
  - `mailto_click`
  - `email_copy`
  - `scroll_depth`
  - `section_view`
  - `nav_click`
  - `proof_interaction`

## Current release note

- This tranche focused on:
  - restoring the one-page holding setup at the public root
  - moving the fuller site behind `/index.html`
  - removing the public privacy-page route from the holding page so it no longer exposes the fuller site
  - replacing that route with an inline privacy notice on the holding page
  - removing hidden pages from the public sitemap and disallowing them in `robots.txt`
  - protecting the hidden routes with HTTP basic authentication

## Current validation evidence

- Local smoke pass:
  - `output/measurement/smoke-2026-03-29T08-45-45-551Z`
- Production deploy:
  - `https://robsonai.co.uk`
- Unique production deploy:
  - `https://69c8e6ce85885755f435b1b8--robson-ai-website.netlify.app`
- Live checks confirmed:
  - the public root contains no links to `index.html`, `privacy.html`, `building-analyst.html`, or `who-its-for.html`
  - clicking `Privacy notice` on the live holding page stays on `/` and opens the inline privacy notice
  - direct access to `/privacy.html` from a clean session returns to `/`
- `/index.html` opens the hidden fuller site manually as intended
- unauthenticated requests to `/index.html` and hidden subpages now return `401`
  - `robots.txt` disallows hidden routes and `sitemap.xml` lists only `/`
