# PRD - Robson AI Solutions Website Current State

Last updated: 2026-05-30 11:30 Europe/London
Owner: Wayne Robson / Robson AI Solutions
Repo path: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website`
Status: current-state baseline, not a rewrite specification

## 1. What The Project Is

This project is the Robson AI Solutions public website and private fuller-site preview. It presents Robson AI Solutions as a surveying-led technology business developing professional surveying/reporting software and building intelligence for building-related work.

Current deployment stance is inferred from `netlify.toml` and `docs/release-handover.md`:

- Public root `/` serves `holding.html`.
- Fuller website pages such as `index.html`, `building-analyst.html`, `who-its-for.html`, and `privacy.html` are hidden behind Netlify Edge Function Basic Auth and marked `noindex, nofollow`.
- The fuller site is work in progress and should not over-claim production readiness, customer adoption, or finished product maturity.

## 2. Target Users

Current target users are inferred from page content and `docs/website-narrative.md`:

- Building surveyors.
- Estates and property teams.
- Facilities/property operations teams.
- Compliance and inspection teams.
- People interested in drone capture, 3D modelling, visual inspection, and spatial building context.
- Potential collaborators or early conversations around professional surveying software, reporting workflows, building intelligence, and building-related product ideas.

## 3. Current Product Scope

In scope today:

- A public holding page for live enquiries during website relaunch.
- A hidden fuller website explaining Robson AI Solutions, current workstreams, target audience, and Building Analyst direction.
- Email-first enquiry path using `mailto:` and copy-email buttons.
- Inline public holding-page privacy notice.
- Optional consent-based analytics framework, currently inert because the GA4 Measurement ID is empty.
- Measurement QA scripts for consent, event contract, route status, HTML validation, accessibility, and Lighthouse evidence.
- Netlify deployment configuration, security headers, robots/sitemap controls, and preview Basic Auth.

Not currently in scope as shipped:

- Contact form.
- Authentication beyond Basic Auth preview protection.
- Backend/database.
- Customer accounts.
- Live product signup or payment.
- Production analytics collection.
- Finished SaaS application functionality.

## 4. Current Architecture

The site is a static web project:

- HTML entry pages: `holding.html`, `index.html`, `building-analyst.html`, `who-its-for.html`, `privacy.html`, and `preview.html`.
- Styling: `styles.css`.
- Client behavior and analytics: `script.js`.
- Static assets: `assets/`, favicons, and Open Graph image assets.
- Netlify config: `netlify.toml`.
- Netlify Edge Function: `netlify/edge-functions/preview-auth.js`.
- QA tooling: `scripts/measurement-smoke.mjs`, `scripts/measurement-evidence.mjs`, and `scripts/lib/static-server.mjs`.

Netlify routing:

- `/` rewrites to `/holding.html`.
- `/preview.html` redirects to `/`.
- Hidden fuller pages are protected by the `preview-auth` Edge Function.
- `robots.txt` disallows hidden routes.
- `sitemap.xml` currently lists only `/`.

## 5. Current Stack

- Static HTML/CSS/JavaScript.
- Node.js project with `"type": "module"`.
- Netlify static hosting and Edge Functions.
- Playwright for browser-based smoke checks.
- `html-validate` for HTML validation.
- `@axe-core/cli` for accessibility checks.
- Lighthouse for performance/accessibility/best-practices/SEO reports.
- `browser-driver-manager` for ChromeDriver setup in evidence runs.
- GitHub remote: `https://github.com/LoganRobson70/robson-ai-solutions-website.git`.

## 6. Important Existing Features

- Public holding page with direct email CTA and copy-email support.
- Fuller hidden site with sections for focus, products in development, method, credibility, and contact.
- Building Analyst page describing early assessment capture, evidence organisation, report-ready analysis, and professional review support.
- Who-it-is-for page qualifying likely fit and non-fit audiences.
- Privacy page and holding-page inline privacy notice.
- Consent banner with default-off analytics behavior.
- GA4 event contract governance for:
  - `cta_click`
  - `mailto_click`
  - `email_copy`
  - `scroll_depth`
  - `section_view`
  - `nav_click`
  - `proof_interaction`
- Security headers in Netlify config.
- Release handover and measurement QA docs already exist under `docs/`.

## 7. Known Risks And Blockers

- The repo is dirty. Many product files are modified or untracked. Codex must not clean or revert without approval.
- `docs/` was untracked before this baseline, so documentation changes should be reviewed carefully before staging.
- `npm run qa:measurement:local` now passes after restoring the proof CTA and updating stale harness navigation selector.
- `netlify/edge-functions/preview-auth.js` now reads preview Basic Auth credentials from Netlify environment variables. The Netlify site still needs `ROBSON_PREVIEW_USERNAME` and `ROBSON_PREVIEW_PASSWORD` set before deploy.
- No root `README.md`, `AGENTS.md`, or `CLAUDE.md` currently exists in the repo.
- No CI workflow was found.
- Public/hidden route behavior is easy to break because the public root, robots, sitemap, auth, and QA harness must stay aligned.
- Conversion currently relies on email/mail client behavior only.
- GA4 is intentionally inactive; production analytics should not be enabled without explicit approval and privacy review.

## 8. Privacy And Security Considerations

Current privacy posture:

- No contact form.
- Email enquiries may include name, contact details, company name, and project context.
- Optional analytics only starts after explicit consent and only if a valid GA4 Measurement ID is configured.
- With the current empty GA4 Measurement ID, accepting analytics stores consent locally but sends no analytics data.

Current security posture:

- Hidden fuller pages are protected on Netlify by Basic Auth.
- Security headers include `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, and `Permissions-Policy`.
- Hidden routes are disallowed in `robots.txt` and marked `noindex, nofollow`.

Security blocker:

- Preview Basic Auth credentials are no longer hard-coded in the Edge Function. Treat Netlify environment variable setup and rotation of the previously hard-coded credential as a release blocker before preview or production deploy.

## 9. Deployment And Release Path

Current likely deployment path is Netlify:

- Publish directory: repo root (`.`).
- Build command: none.
- Public root: `/` rewrites to `holding.html`.
- Preview/full site pages: protected by Edge Function.
- Existing handover deploy commands:
  - `netlify deploy --dir .`
  - `netlify deploy --prod --dir .`

Deployment rules:

- Codex must ask before preview or production deploys.
- Codex must ask before changing Netlify environment variables, site settings, or authentication.
- Deploy should not proceed while local smoke QA is failing unless Wayne explicitly accepts the risk.

## 10. Testing And Validation Commands

Install tooling:

```bash
npm install
npx playwright install chromium
```

Lightweight local smoke:

```bash
npm run qa:measurement:local
```

Preview-auth Edge Function smoke:

```bash
npm run qa:preview-auth
```

Preview smoke:

```bash
QA_BASE_URL="https://<netlify-preview-url>" npm run qa:measurement:preview
```

Full local evidence pack:

```bash
npm run qa:measurement:evidence
```

Latest validation attempted during this baseline:

```bash
npm run qa:measurement:local
```

Result: pass after this tranche. Latest local smoke artifact: `output/measurement/smoke-2026-05-30T10-27-55-701Z`.

## 11. What Is In Scope Next

Recommended next implementation scope:

- Set and rotate Netlify preview-auth environment variables before any deploy.
- Add a minimal root `README.md` and `AGENTS.md` for project-specific Codex/run instructions if Wayne approves.
- Run Browser/Playwright desktop and mobile QA after the smoke command passes.

## 12. Explicitly Out Of Scope

- Public launch of the fuller site.
- Contact form implementation.
- Production deploy.
- GA4 Measurement ID setup or analytics enablement.
- Product claims, testimonials, customer logos, metrics, or procurement-ready claims not backed by evidence.
- Redesigning the Robson AI brand, wordmark, icon, or visual system.
- Building SaaS/product functionality in this website repo.
- Cleaning, squashing, or reverting the existing dirty git tree without approval.

## 13. First Recommended Autonomous Codex Work Block

Objective:
Restore a trustworthy local QA baseline and remove obvious release blockers before any public launch or deploy planning.

Scope:

- Keep the local `npm run qa:measurement:local` and `npm run qa:measurement:evidence` checks passing.
- Verify the event contract still reflects the intended current site after future edits.
- Set/rotate Netlify preview-auth environment variables with Wayne approval.
- Update `docs/codex/TRACKER.md` with validation evidence.

Out of scope:

- Deploying to Netlify.
- Rotating real credentials without Wayne approval.
- Changing product positioning, design, or conversion strategy.
- Enabling analytics.

Approval gates:

- Wayne approval is required before changing Netlify environment variables, rotating credentials, or deploying.
- If the fix requires changing visible website content rather than the QA harness, Codex should explain the tradeoff before editing.

Suggested validation:

- `npm run qa:measurement:local`
- If that passes, `npm run qa:measurement:evidence`
- Browser check of `holding.html`, `index.html`, and hidden routes at desktop/mobile widths.
