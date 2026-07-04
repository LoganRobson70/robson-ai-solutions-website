# Website Restart Design Audit

Last updated: 2026-07-03 20:08 BST
Owner: Wayne Robson / Robson AI Solutions
Status: current-state restart audit plus local implementation evidence; no commit, push, preview deploy, or production deploy approved

## 1. Restart Decision

Wayne instructed Codex to restart from the original website goal and not publish the current motion preview.

Original goal:

> Make the Robson AI Solutions website the best releasable version it can be: polished, professional, responsive, accessible, evidence-led, brand-consistent, cautious about product maturity, validated locally and ready for preview/publish approval.

Decision:

- The `proof-motion-polish` preview must not be published.
- The rejected motion layer is not the path to quality.
- The next website tranche should reset composition and hierarchy first, then reconsider restrained motion later.
- A local zip-adapted composition candidate now exists for Wayne review at `http://127.0.0.1:8133/`.

## 2. Evidence Inspected

Fresh production evidence:

- Live production URL: `https://robsonai.co.uk`
- In-app browser production capture: `restart-original-goal-01-production-full.png`
- In-app browser section captures:
  - `restart-original-goal-02-hero.png`
  - `restart-original-goal-03-work.png`
  - `restart-original-goal-04-finder.png`
  - `restart-original-goal-05-operations.png`
  - `restart-original-goal-06-buildscan-model-view.png`
  - `restart-original-goal-07-contact.png`
  - `restart-original-goal-08-method.png`
  - `restart-original-goal-09-credibility.png`
- Local rendered screenshot pack against production: `output/playwright/rendered-release-smoke-2026-06-28T19-38-52-319Z`

Repo/design-system evidence:

- `docs/codex/TRACKER.md`
- `docs/codex/WEBSITE_EXCELLENCE_PROGRAMME.md`
- `docs/codex/DESIGN_SYSTEM_CONSOLIDATION_AUDIT.md`
- `styles.css`
- `index.html`
- Current public assets in `assets/`

Local restart-candidate evidence:

- Rendered screenshot evidence after the final Focus-section fix: `output/playwright/rendered-release-smoke-2026-06-28T20-10-51-323Z`
- Full local release gate: `output/release-local-gate/gate-2026-06-28T20-09-23-996Z/release-local-gate.json`
- Measurement evidence: `output/measurement/evidence-2026-06-28T20-11-11-946Z`
- Current rendered screenshot evidence before the anchor-navigation polish: `output/playwright/rendered-release-smoke-2026-06-28T20-48-26-094Z`
- Current full local release gate before the anchor-navigation polish: `output/release-local-gate/gate-2026-06-28T20-47-02-707Z/release-local-gate.json`
- Current measurement evidence before the anchor-navigation polish: `output/measurement/evidence-2026-06-28T20-48-45-497Z`
- Local review URL: `http://127.0.0.1:8133/`
- Zip-adapted rendered screenshot evidence: `output/playwright/rendered-release-smoke-2026-07-03T19-06-47-075Z`
- Zip-adapted full local release gate: `output/release-local-gate/gate-2026-07-03T19-05-24-098Z/release-local-gate.json`; passed all 37 steps.
- Zip-adapted measurement evidence: `output/measurement/evidence-2026-07-03T19-07-04-456Z`; Playwright-injected axe reported zero violations across six routes, Lighthouse performance 100, accessibility 100, best practices 100, SEO 100, LCP about 1.73 seconds, CLS 0.
- Zip-adapted BuildScan viewer evidence: `output/buildscan-viewer/smoke-2026-07-03T19-05-33-122Z`; direct and embedded GLB paths rendered canvas and keyboard controls.
- Zip-adapted responsive and visual-polish evidence: `output/responsive-route/smoke-2026-07-03T19-05-57-649Z/responsive-route-smoke.json` and `output/visual-polish/smoke-2026-07-03T19-06-18-629Z/visual-polish-smoke.json`.

## 3. Executive Verdict

The live website is release-safe and factually careful, but it is not yet visually strong enough.

The main problem is not one bad icon, one font, or missing motion. The main problem is the page composition:

- too many pale bordered cards
- too much equal-weight information
- too much grid/card repetition
- not enough confident product proof
- weak section contrast between the homepage areas
- pages read like organised documentation rather than a premium professional website

The Robson AI brand foundations are usable: navy, tech blue, rare orange, professional British tone, Manrope/Fraunces split, privacy-safe contact, cautious product maturity. The issue is execution.

## 4. What Is Working

- Product truth is mostly sound: Building Analyst, BuildScan, and property operations are separated.
- Claims are cautious and avoid generic chatbot or BYO-provider positioning.
- The BuildScan model image gives the page a real proof asset.
- The site has strong release engineering: headers, QA scripts, keyboard checks, responsive checks, measurement evidence, release inventory, and Netlify gates.
- The typography can work, but it needs stricter hierarchy and fewer competing text blocks.
- The email-first contact posture is appropriate for the current maturity stage.

## 5. Main Design Problems

### 5.1 Card Sprawl

The page relies on cards for almost every idea: workstreams, finder, operations, method, credibility, and contact. This makes the site feel assembled from small pieces instead of designed as a whole.

Impact:

- Visitors have no strong visual journey.
- Important proof looks similar to secondary notes.
- The page feels busy without feeling rich.

### 5.2 Weak Product Stage

The hero and proof sections do not yet create a strong first impression that says: professional surveying software, evidence workflows, and building intelligence.

Impact:

- The page looks cautious but not confident.
- The best real visual asset, the BuildScan model, arrives too late and is still boxed like a UI mock.
- Building Analyst is described but not shown strongly enough.

### 5.3 Pale Grid Fatigue

The light grid background and pale cards repeat across too many sections.

Impact:

- Sections blend into each other.
- The site feels like a prototype or internal deck.
- White/pale surfaces compete with the text rather than framing it.

### 5.4 Text-Heavy Proof

Several sections still rely on text blocks to describe proof instead of using visual structure to make proof feel inspectable.

Highest-risk sections:

- Workflow finder
- Property operations
- Method
- Credibility
- Contact

Impact:

- The site asks visitors to read too much before they understand the value.
- Proof feels asserted rather than demonstrated.

### 5.5 CTA And Contact Density

The contact section contains useful routes, but visually it is a dense matrix of options.

Impact:

- It looks operational rather than inviting.
- It risks making the simplest action, sending an email, feel like a form workflow.

## 6. Recommended Visual Direction

Recommended direction: **Professional Product Proof Website**.

This should feel like a serious surveying/reporting product company, not a generic AI landing page and not an animated agency site.

Design principles:

- One strong product/proof stage per viewport.
- Fewer cards, bigger surfaces.
- Dark navy should be used for meaningful product/proof areas, not just scattered accents.
- White/pale cards should be reserved for secondary detail.
- Orange should remain rare: logo signal, proof markers, selected data accents.
- BuildScan imagery and product-like workflow surfaces should carry the design, not abstract decoration.
- Motion should wait until the static composition looks good.

## 7. Recommended First Remedial Tranche

Tranche name: `homepage-composition-reset`

Goal:

Make the homepage look like a confident professional product website while preserving current product truth and release safety.

Scope:

- Rebuild homepage section rhythm without changing product claims.
- Reduce repeated pale cards by roughly 40-60 percent.
- Turn the hero into a stronger two-part product/proof composition.
- Make workstreams feel like a connected product system rather than three separate cards.
- Make Finder, Operations, Method, Credibility, and Contact less word-heavy through layout consolidation.
- Keep BuildScan opt-in viewer and existing assets.
- Keep email-first contact and privacy posture.
- Keep cautious Apple-native/product-maturity wording.
- Keep existing routes and analytics event names unless a specific change is approved.

Out of scope:

- Publishing the rejected motion preview.
- Production deploy.
- Branch push or GitHub PR.
- New product claims.
- New customer logos, fake testimonials, fake app screenshots, or invented traction.
- New public GLB assets.
- Apple/iOS/macOS/Android implementation.
- Forms, payments, customer data, DNS, or analytics enablement.

Validation after implementation:

- `node --check script.js`
- `git diff --check`
- `npm run qa:visual-polish`
- `npm run qa:responsive`
- `npm run qa:keyboard`
- `npm run qa:rendered`
- `npm run qa:product-design`
- `npm run qa:release-inventory`
- `npm run qa:release-staging-manifest`
- `npm run qa:release:local`

## 8. Recommended Design Brief For Approval

Design brief:

> Redesign the homepage composition using the existing Robson AI brand, current production copy constraints, and current assets. Keep the product truthful and cautious, but make the site feel more premium, confident, visual, and product-led. Prioritise static layout quality over motion. Reduce card sprawl, strengthen the hero and proof surfaces, and keep all release/privacy/QA gates intact.

Interactivity level:

- Full existing interactivity should remain working.
- No new complex interaction should be added in the first tranche.

Recommended next action:

1. Approve explicit-path commit plus a Netlify preview deploy for the local restart candidate.
2. Ask Codex for another local visual pass before committing.
3. Hold here with production unchanged.

## 9. Local Implementation Result

The `homepage-composition-reset` tranche has been implemented locally and remains uncommitted.

Implemented locally:

- Replaced the rejected floating hero icon treatment with a product/proof hero surface using the existing BuildScan model-view image.
- Reduced repeated pale-card treatment and strengthened the navy proof areas.
- Consolidated Finder, Property Operations, Method, Credibility and Contact into clearer product-proof surfaces.
- Fixed the Focus section after screenshot review so it no longer mixes a white manifesto card with dark-section text.
- Fixed desktop BuildScan anchor navigation so section links do not leave previous Operations controls visible below the sticky header.
- Added a rendered-smoke regression check for the BuildScan anchor landing.
- Fixed the Who It Fits header lockup so it reads `Robson AI / Solutions`, not `Robson AI / Fit`.
- Added rendered-smoke strapline checks for key secondary pages.
- Preserved cautious product maturity language, email-first contact, no form capture, BuildScan opt-in loading, and existing analytics event names.
- Removed the rejected motion-preview layer from the active working tree.

Current dirty scope:

- `docs/codex/GOAL_COMPLETION_AUDIT.md`
- `docs/codex/PUBLISH_READINESS_AUDIT.md`
- `docs/codex/RELEASE_STAGING_MANIFEST.md`
- `docs/codex/TRACKER.md`
- `docs/codex/WEBSITE_APPROVAL_REVIEW_CHECKLIST.md`
- `docs/codex/WEBSITE_RESTART_DESIGN_AUDIT.md`
- `docs/codex/WEBSITE_RESTART_PREVIEW_HANDOFF.md`
- `index.html`
- `scripts/measurement-evidence.mjs`
- `scripts/product-design-acceptance-smoke.mjs`
- `scripts/rendered-release-smoke.mjs`
- `scripts/responsive-route-smoke.mjs`
- `script.js`
- `styles.css`
- `who-its-for.html`

Validation:

- `node --check script.js` passed.
- `node --check scripts/rendered-release-smoke.mjs` passed.
- `node --check scripts/measurement-evidence.mjs` passed.
- `node --check scripts/product-design-acceptance-smoke.mjs` passed.
- `node --check scripts/responsive-route-smoke.mjs` passed.
- `git diff --check` passed.
- `npm run qa:rendered` passed for the zip-adapted candidate.
- `npm run qa:release-inventory` passed with dirtyCount 15 and zero secret findings.
- `npm run qa:release-staging-manifest` passed with 13 modified tracked files, 2 untracked candidate files and 15 staging paths.
- `npm run qa:release:local` passed all 37 steps for the current 15-file candidate.

Measurement:

- Lighthouse performance: 100
- Accessibility: 100
- Best practices: 100
- SEO: 100
- LCP: about 1.73 seconds
- CLS: 0
- Playwright-injected axe: zero violations across six routes

Residuals:

- Wayne has not approved commit, branch push, GitHub PR, Netlify preview deploy or production deploy.
- Local browser coverage still records Firefox/WebKit binaries as unavailable; Chromium passes and the warning is non-blocking in the current release gate.
- Dev/release tooling audit still records 17 moderate findings in tooling dependencies; production footprint remains zero vulnerabilities.
- The rejected motion preview remains a learning artifact only and must not be published.

## 10. Redesign Zip Reference Review

Source:

- `/Users/wayne/Downloads/Robsonai website redesign.zip`

Local inspection evidence:

- Extracted reference package: `/tmp/robson-redesign.AUtbkX`
- Local prototype URL: `http://127.0.0.1:8142/Robson%20AI%20Website.dc.html`
- Screenshot evidence folder: `output/product-design-audit/redesign-zip-2026-07-03`
- Prototype desktop hero: `output/product-design-audit/redesign-zip-2026-07-03/01-redesign-desktop-hero.png`
- Prototype mobile hero: `output/product-design-audit/redesign-zip-2026-07-03/03-redesign-mobile-hero.png`
- Prototype Product/Pricing/About captures: `output/product-design-audit/redesign-zip-2026-07-03/04-redesign-product.png`, `04-redesign-pricing.png`, and `04-redesign-about.png`
- Live comparison captures: `output/product-design-audit/redesign-zip-2026-07-03/10-live-desktop-hero.png` and `11-live-mobile-hero.png`

Useful design direction:

- The darker hero direction is materially more modern and confident than the current pale-grid first impression.
- `Insight. Intelligence. Impact.` and `Turning data into intelligence` are strong brand-level ideas if adapted carefully.
- The trust framing around AI as a draft to verify is useful and aligned with the existing Robson AI boundary that professional judgement remains central.
- The product-proof cards are calmer and more spacious than several current live sections.
- The design system's navy/blue/rare-orange palette and restrained interaction rules remain useful.

Do not use unchanged:

- Do not copy the standalone HTML into production. It depends on prototype runtime files, inline styles, Google Fonts, unpkg React/Babel fallbacks, and canvas animation.
- Do not import its pricing page or subscription claims without a separate product/commercial approval.
- Do not use `server-side Gemini`, `Stripe`, Android, Google web, free workspace, Professional unlocks, finished reports/notices/specs, or `on every platform a surveyor actually uses` as public claims unless those facts are current and approved.
- Do not describe Building Analyst as a generic AI assistant or external-provider product goal.
- Do not adopt the animated mesh as-is. It needs a rebuilt static-site implementation, reduced-motion behaviour, mobile overflow fixes, performance evidence, and no external runtime dependencies.

Observed blockers:

- Mobile prototype has horizontal overflow: 390px viewport produced 772px scroll width.
- Rendered wordmark/body text exposed a `Robson A ı` issue in the prototype.
- Pricing/product copy overstates maturity relative to the current public website position.
- The prototype has no production-ready metadata/title/SEO structure.
- The exported design-system notes conflict with the current Apple-native/device-first Building Analyst direction in places by naming Google, Gemini, Android, and Stripe as product facts.

Recommendation:

1. Use the zip as a direction reference only: borrow the dark hero confidence, cleaner trust section, and stronger product-proof spacing, while keeping the current repo's cautious copy, release gates, static architecture, and privacy posture.
2. Do not source-control-align or publish the current live/restart candidate until Wayne decides whether to run a small `redesign-reference-adaptation` tranche first.
3. If approved, the next implementation tranche should be local-only and should adapt the hero/trust/product-proof language without adding pricing, payment, Android, Google, Gemini, new external fonts, new external runtime dependencies, or production deploy scope.
