# PRD - Robson AI Solutions Website Current State

Last updated: 2026-06-27 11:35 BST
Owner: Wayne Robson / Robson AI Solutions
Repo path: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website`
Status: current-state PRD, not a rewrite specification

## 1. What The Project Is

This project is the public Robson AI Solutions website.

It presents Robson AI Solutions as a surveying-led technology business developing professional software for evidence capture, reporting workflows, 3D model review, and building/property intelligence.

Current production stance:

- Public production URL: `https://robsonai.co.uk`.
- `/` serves the public full website.
- `/index.html`, `/building-analyst.html`, `/who-its-for.html`, and `/privacy.html` are public pages.
- `holding.html` remains as a noindex fallback/historical page, not the current production front door.
- `preview.html` redirects to `/`.
- Analytics remains inert because no real GA4 Measurement ID is configured.

Current local release candidate:

- A local uncommitted BuildScan interactive GLB candidate exists.
- It adds `buildscan-viewer.html`, a 1.3 MB optimised public-preview GLB, local Three.js assets, and stricter viewer smoke tests.
- It must not be committed, pushed, preview-deployed, or production-deployed until Wayne explicitly approves the public model asset and release path.

## 2. Target Users

Current target users:

- Building surveyors.
- Estates and property teams.
- Facilities/property operations teams.
- Compliance and inspection teams.
- Drone/external capture and 3D model review users.
- Potential collaborators or early product conversations around professional surveying software, building evidence, reporting workflows, and property operations intelligence.

The website is not aimed at:

- Generic AI chatbot buyers.
- Lead-generation or marketing analytics buyers.
- Buyers who need mature procurement-ready enterprise proof today.
- Visitors expecting finished public product signup, accounts, payment, or app-store availability unless that has been separately approved.

## 3. Current Product Scope

In scope today:

- Public Robson AI Solutions website.
- Homepage covering Robson AI, Building Analyst, BuildScan / Drone-to-3D, property operations / WAIS-style thinking, method, credibility, and contact.
- Building Analyst product-direction page for professional assessment capture, evidence organisation, report-ready analysis, and review support.
- Who-it-fits page qualifying likely and non-fit audiences.
- Privacy page for email-first contact and optional analytics.
- Email-first enquiry path using `mailto:` and copy-email buttons.
- Optional consent-based analytics framework, currently inert because the GA4 Measurement ID is empty.
- Measurement QA scripts for route status, consent behaviour, event contract, HTML validation, accessibility, Lighthouse evidence, and BuildScan viewer smoke.
- Netlify static hosting configuration, redirects, security headers, robots, sitemap, and noindex fallback handling.

Not currently in scope as shipped:

- Contact form.
- Backend/database.
- Customer accounts.
- Live product signup or payment.
- Production analytics collection.
- Customer data handling.
- Live customer/council/Microsoft/Oracle/SharePoint integrations.
- Finished SaaS claims.
- App Store availability claims unless launch assets and links are approved.

## 4. Current Architecture

The site is a static web project:

- HTML entry pages: `index.html`, `building-analyst.html`, `who-its-for.html`, `privacy.html`, `holding.html`, `preview.html`.
- Styling: `styles.css`.
- Client behaviour and analytics: `script.js`.
- Static assets: `assets/`, local fonts, Robson AI icons, Open Graph image, BuildScan proof image.
- Local BuildScan candidate assets: `buildscan-viewer.html`, `assets/showcase/buildscan-ludgershall-public.glb`, `assets/vendor/three-0.164.1/`.
- Netlify config: `netlify.toml`.
- Retained preview-auth function: `netlify/edge-functions/preview-auth.js`.
- QA tooling: `scripts/measurement-smoke.mjs`, `scripts/measurement-evidence.mjs`, `scripts/buildscan-viewer-smoke.mjs`, `scripts/preview-auth-smoke.mjs`, and `scripts/lib/static-server.mjs`.

Netlify routing and public indexing:

- `/preview.html` redirects to `/`.
- `robots.txt` allows the public website and disallows `holding.html` and `preview.html`.
- `sitemap.xml` lists `/`, `building-analyst.html`, `who-its-for.html`, and `privacy.html`.
- Current local `netlify.toml` includes same-origin iframe allowances and cache rules for the uncommitted BuildScan interactive candidate.

Preview auth:

- Preview auth is retained for future private/staging routes and unit smoke testing.
- Current public production pages are not hidden behind preview auth.
- If preview auth is reintroduced for a private route, credentials must come from Netlify environment variables and must not be printed or committed.

## 5. Current Stack

- Static HTML/CSS/JavaScript.
- Node.js project with `"type": "module"`.
- Netlify static hosting.
- Netlify Edge Function retained for preview auth.
- Playwright for browser-based smoke checks.
- `html-validate` for HTML validation.
- `@axe-core/cli` for accessibility checks.
- Lighthouse for performance/accessibility/best-practices/SEO reports.
- `browser-driver-manager` for ChromeDriver setup in evidence runs.
- Local Three.js r0.164.1 assets for the uncommitted BuildScan interactive viewer candidate.
- GitHub remote: `https://github.com/LoganRobson70/robson-ai-solutions-website.git`.

## 6. Important Existing Features

- Public homepage with Robson AI positioning, three workstreams, workflow finder, BuildScan proof section, method, credibility, and contact.
- Building Analyst page with assessment/evidence/reporting workflow model, product proof, illustrative assessment record, fit boundaries, and contact path.
- Who-it-fits page that qualifies surveyors, estates/property operations, compliance/inspection, drone/3D capture, and non-fit audiences.
- Privacy page and no-form email-first contact model.
- Consent banner with default-off analytics behaviour.
- GA4 event contract governance for:
  - `cta_click`
  - `mailto_click`
  - `email_copy`
  - `scroll_depth`
  - `section_view`
  - `nav_click`
  - `proof_interaction`
- Approved public BuildScan Ludgershall static PNG model-view proof.
- Local uncommitted BuildScan interactive viewer candidate with ready/error signalling, fallback behaviour, keyboard controls, and dedicated smoke test.
- Security headers and CSP in Netlify config.
- Release-grade programme docs:
  - `docs/codex/WEBSITE_EXCELLENCE_PROGRAMME.md`
  - `docs/codex/PRODUCT_IA_PROOF_MAP.md`
  - `docs/codex/TRACKER.md`

## 7. Known Risks And Blockers

- The repo is dirty. Do not clean, revert, stage, commit, push, or deploy without Wayne approval.
- The BuildScan interactive GLB is uncommitted and not approved for public release. The optimised GLB is small, but still downloadable public model data.
- Current local evidence records Lighthouse performance around 72 with LCP about 10.95s. This is a performance watch item before release-grade closeout.
- Older docs and launch notes were holding/private-site oriented; this PRD supersedes that posture.
- `holding.html` is still accessible as a noindex fallback and should not be presented as the current production root.
- GA4 remains disabled. Do not enable analytics without Wayne approval, privacy review, and a real Measurement ID.
- No contact form exists. Adding one would change privacy/spam/data-retention obligations.
- WAIS/property operations is visible but weaker than Building Analyst and BuildScan proof; it needs a release-safe proof section before stronger public positioning.

## 8. Privacy And Security Considerations

Current privacy posture:

- No contact form.
- Email enquiries may include name, contact details, company name, role, project context, and workflow details.
- Optional analytics only starts after explicit consent and only if a valid GA4 Measurement ID is configured.
- With the current empty GA4 Measurement ID, accepting analytics stores consent locally but sends no analytics data.
- No customer data or live customer-system integrations should be added to public pages without explicit privacy/release review.

Current security posture:

- Static public website with no backend application surface.
- Security headers include content type, frame, CSP, referrer, and permissions policies.
- Current local `netlify.toml` permits same-origin framing for the BuildScan iframe while blocking external framing through CSP `frame-ancestors 'self'`.
- Preview auth exists as a retained Edge Function for future private/staging use and unit validation.

BuildScan security/governance blocker:

- Before the interactive GLB can be published, Wayne must approve:
  - public model direct-download risk,
  - optimised/low-detail asset suitability,
  - same-origin iframe header/CSP posture,
  - Netlify preview route/asset/header validation,
  - rollback path to static image only.

## 9. Deployment And Release Path

Current deployment path is Netlify:

- Publish directory: repo root (`.`).
- Build command: none.
- Production branch: `main`.
- Public production URL: `https://robsonai.co.uk`.

Deployment rules:

- Codex must ask before preview deploys, production deploys, commits, pushes, PRs, Netlify site changes, env-var changes, or rollback.
- Public BuildScan interactive GLB release requires explicit Wayne approval before commit/push/deploy.
- Deploy should not proceed while local smoke QA is failing unless Wayne explicitly accepts the risk.

Recommended release flow for the current dirty candidate:

1. Wayne approves `buildscan-interactive-preview-release-candidate`.
2. Codex stages only scoped files, creates a branch/commit, and pushes after approval.
3. Netlify deploy-preview is created and verified.
4. Preview route, asset, header, viewer, accessibility, mobile, performance, and rollback checks pass or exceptions are accepted.
5. Wayne separately approves production.
6. Production deploy is verified and tracker is updated.

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

BuildScan interactive viewer smoke:

```bash
npm run qa:buildscan-viewer
```

Rendered desktop/mobile release smoke:

```bash
npm run qa:rendered
```

For a deployed Netlify preview:

```bash
QA_BASE_URL="https://<netlify-preview-url>" npm run qa:rendered:preview
```

Netlify release-header smoke:

```bash
npm run qa:release-headers
```

Release-candidate inventory:

```bash
npm run qa:release-inventory
```

For a deployed Netlify preview:

```bash
QA_BASE_URL="https://<netlify-preview-url>" npm run qa:release-headers:preview
```

BuildScan deployed-preview viewer smoke:

```bash
QA_BASE_URL="https://<netlify-preview-url>" npm run qa:buildscan-viewer:preview
```

Preview-auth Edge Function unit smoke:

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

Full local release gate:

```bash
npm run qa:release:local
```

Full deployed-preview release gate:

```bash
QA_BASE_URL="https://<netlify-preview-url>" npm run qa:release:preview
```

Static checks:

```bash
npx --no-install html-validate index.html building-analyst.html who-its-for.html privacy.html holding.html buildscan-viewer.html
git diff --check
npx --no-install netlify build
```

Latest relevant validation evidence:

- Full local release gate passed: `output/release-local-gate/gate-2026-06-27T15-47-18-420Z/release-local-gate.json`.
- BuildScan viewer smoke passed: `output/buildscan-viewer/smoke-2026-06-27T15-47-25-410Z`.
- Rendered desktop/mobile release smoke passed: `output/playwright/rendered-release-smoke-2026-06-27T15-47-33-099Z`.
- Release-candidate inventory passed: `output/release-inventory/inventory-2026-06-27T15-47-25-008Z/release-candidate-inventory.json`.
- Local security/privacy release smoke passed: `output/release-security/smoke-2026-06-27T15-47-24-771Z/release-security-smoke.json`.
- Full evidence pack passed the enforced Lighthouse budget: `output/measurement/evidence-2026-06-27T15-47-52-894Z`.
- Release-header smoke passed locally against `netlify.toml` with HSTS included: `output/release-headers/smoke-2026-06-27T15-47-24-892Z/release-header-smoke.json`.
- Product IA/routing smoke passed: `output/measurement/smoke-2026-06-27T10-29-31-182Z`.

Preview-mode commands intentionally fail if `QA_BASE_URL` or `--base-url` is missing, so a deploy-preview gate cannot accidentally pass against production or local state. `qa:release:preview` also rejects the production host by default.

## 11. What Is In Scope Next

Recommended next options:

1. `buildscan-interactive-preview-release-candidate`: approval-gated branch/preview release path for the interactive BuildScan GLB candidate.
2. `docs-public-site-state-refresh`: keep README, PRD, release-handover, launch docs, validation docs, and preview-auth wording aligned with the current public site.
3. `trust-and-cta-segmentation`: add stronger Wayne/Robson AI credibility and audience-specific contact prompts.
4. `property-operations-proof-section`: add a release-safe WAIS/property operations proof section before giving it equal public weight.
5. `performance-budget-recovery`: improve LCP/CSS/assets and add enforceable performance thresholds.

## 12. Explicitly Out Of Scope

- Production deploy without explicit Wayne approval.
- Preview deploy, commit, push, PR, or tag without explicit Wayne approval.
- Domain/DNS changes.
- GA4 Measurement ID setup or analytics enablement.
- Contact form implementation.
- Customer data handling.
- Live council/customer/Microsoft/Oracle/SharePoint integrations.
- Product claims, testimonials, customer logos, metrics, or procurement-ready claims not backed by evidence.
- Redesigning the Robson AI brand, wordmark, icon, or visual system.
- Building app/SaaS/product functionality in this website repo.
- Cleaning, squashing, or reverting the existing dirty git tree without approval.

## 13. First Recommended Autonomous Codex Work Block

Current recommended block if Wayne does not approve the BuildScan preview release path:

Tranche name: `docs-public-site-state-refresh`

Objective:
Keep the repo documentation aligned with the current public website and the separate uncommitted BuildScan Gate 0.

Scope:

- Refresh README, PRD, release-handover, launch/readiness docs, measurement docs, and tracker notes.
- Clarify that current public pages are public and indexed.
- Clarify preview auth is retained for future private/staging routes, not currently hiding public pages.
- Document the BuildScan interactive GLB as an uncommitted approval-gated candidate.

Out of scope:

- Deploying to Netlify.
- Committing or pushing.
- Rotating real credentials.
- Changing product positioning beyond documenting the current state.
- Enabling analytics.

Suggested validation:

- `git diff --check`
- markdown/source text scan for stale holding/private-site wording
- `npm run qa:measurement:local` if public-route docs or QA expectations change
