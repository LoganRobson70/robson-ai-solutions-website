# Robson AI Solutions Website Excellence Programme

Last updated: 2026-06-28 00:45 BST
Owner: Wayne Robson / Robson AI Solutions
Repo: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website`
Status: active programme, current-state scorecard and tranche plan

## 1. Purpose

Make the Robson AI Solutions website the best release-grade website it can be without drifting into unsupported claims, unnecessary rebuilds, or unsafe release practice.

This programme should be used before major website work, release decisions, or public-proof changes. It defines what good looks like, how to measure it, and the order in which Codex should improve the site.

Active Codex goal:

- Ship the best release-grade Robson AI Solutions website it can be.
- Use expert web, product, design, security, accessibility, privacy, SEO, performance, QA, and release standards to define what good looks like.
- Use relevant Codex skills, plugins, agents, browser tooling, QA tooling, Netlify/GitHub tooling, and security tooling when they create evidence, improve quality, reduce risk, or speed up bounded work.
- Keep the programme bounded by current product truth: do not invent product maturity, customer traction, app functionality, Apple/AI capability, analytics, or live integrations.
- Report progress as a percentage to production publish readiness, and always end serious work with the single recommended next action plus numbered alternatives when a decision is needed.

Brand standard:

- Precise: copy and UI explain real building workflows, product maturity, and next actions without vague AI language.
- Modern: the site should feel current through typography, spacing, proof, performance, and interaction polish, not through trend-chasing decoration.
- Intelligent: structure, evidence, and product architecture should show judgement; claims must stay cautious and supportable.
- Practical: every section should help a visitor understand a workflow, proof point, risk boundary, or route to contact.
- Trusted: privacy, accessibility, performance, security headers, and release controls must be visible in the evidence, not only intended.
- Calm rather than flashy: restrained motion, clear hierarchy, and readable composition beat loud effects.
- Clean rather than decorative: visual polish is allowed when it improves proof, comprehension, product feel, or confidence.

Bold/cinematic influence rule:

- Do not import a Hero Studios-style or similar cinematic direction wholesale.
- Before adopting a bold move, identify the exact referenced element, such as oversized kinetic type, full-bleed motion, scroll choreography, dark-stage product proof, or dramatic contrast.
- Present concrete options or mockups to Wayne before implementing bold/cinematic treatments.
- Translate any approved bold move into the Robson system: navy/tech-blue, glass, Inter/body typography, Fraunces/display use where already established, and rare orange data accents.
- Each bold treatment must pass the same performance, WCAG/reduced-motion, readability, and layout-stability gates as the rest of the site.
- Resolve the tension per surface: calm restraint wins for trust, compliance, privacy, forms/contact, and product maturity boundaries; a bolder moment may be justified only where it clarifies the main proposition or approved product proof.
- Luffu, Steno and Unfold motion references are translated in `docs/codex/MOTION_REFERENCE_BRIEF.md`; this is a future-tranche brief, not silent scope for the current validated preview candidate.

## 2. Current State Summary

The current public website is already credible and live. It presents Robson AI Solutions as a surveying-led technology business, with professional software directions around Building Analyst, BuildScan/external modelling, and WAIS-style property operations thinking.

Current strengths:

- Clearer positioning than a generic AI website: professional building intelligence, evidence capture, reporting workflows, and practical building work.
- Cautious product claims: the site generally labels work as early, exploratory, or in development and avoids claiming that tools replace professional judgement.
- Stronger product proof than the earlier holding site: Building Analyst workflow proof and BuildScan model-view evidence are now present.
- Good existing validation harness for a static site: measurement smoke, evidence runs, HTML validation, axe, Lighthouse, preview-auth smoke, release-header smoke, release-security smoke, semantic/SEO smoke, keyboard release smoke, responsive route matrix smoke, visual-polish smoke, browser coverage advisory, rendered desktop/mobile smoke with screenshots, release-candidate inventory, local release-gate runner, deployed-preview release-gate runner, Playwright/browser checks, and Netlify build checks.
- A read-only dependency audit summary command now captures production-footprint audit status, dev/release tooling findings, non-force dry-run impact, and strict-mode failure evidence without changing packages.
- Privacy posture is currently conservative: no contact form, no backend collection, email-first contact, GA4 disabled until approved.
- Latest local candidate now clears the local performance target: homepage Lighthouse median improved from 72 / LCP about 10.95s to 100 / LCP about 1.73s after image, compression, font-preload, hero-render and icon-payload fixes.
- Mobile consent banner polish is complete locally: Accept, Decline and Privacy Notice remain visible on mobile without colliding with the BuildScan interactive load button.
- Local keyboard release smoke now proves the homepage skip link, consent decline, workflow tabs, copy-email action, BuildScan keyboard opt-in, Building Analyst tabs, and Building Analyst copy-email path.
- Local semantic/SEO smoke now proves public-page titles, descriptions, canonicals, robots, landmarks, H1s, nav, skip links, image dimensions/alt text, Open Graph/Twitter metadata, homepage Organization JSON-LD, sitemap/robots posture, and consistent `Robson AI` casing in current public metadata and contact labels.
- The local 404 fallback has been upgraded from a sparse error page into a noindex Robson AI recovery page with header, navigation, recovery route cards, return/contact CTAs, footer and skip link.
- Latest full local release gate passed all 37 steps on the current 62-file candidate, with staging-manifest drift check, dependency audit advisory, visual-polish smoke, browser coverage advisory, and production-verification gate syntax check included: `output/release-local-gate/gate-2026-06-27T22-37-04-773Z/release-local-gate.json`.
- Latest deployed preview release gate passed all 14 steps on Netlify draft preview `https://6a4055bfcca135298c4b453a--robson-ai-website.netlify.app`: `output/release-preview-gate/gate-2026-06-27T22-59-30-083Z/release-preview-gate.json`.
- Latest pre-production security refresh passed the bounded local security/header checks and strict dependency audit produced no blockers: `output/release-security/smoke-2026-06-27T23-21-07-139Z/release-security-smoke.json`, `output/release-headers/smoke-2026-06-27T23-21-07-141Z/release-header-smoke.json`, and `output/dependency-audit/summary-2026-06-27T23-21-07-138Z/dependency-audit-summary.json`.
- A read-only production verification command now exists as `npm run qa:release:production`. It has not been run against production and requires `QA_PRODUCTION_URL` plus explicit confirmation before it will execute.

Current blockers and risks:

1. The interactive BuildScan GLB candidate is preview-validated but still needs Wayne's explicit production approval because it is downloadable public model data.
2. The worktree currently has docs-only closeout edits, so production release must not happen without a clean staged-file review or an approved Git/Netlify publish path.
3. Local and deployed-preview performance/release gates are passing, but production verification still has to run after an approved production deploy.
4. The interactive viewer is folded into local and deployed-preview smoke/evidence coverage, keyboard smoke covers the core public keyboard journeys, semantic/SEO smoke covers metadata and crawl posture, responsive route smoke covers mobile/tablet/desktop route integrity, visual-polish smoke guards against large high-opacity text-level backgrounds, browser coverage advisory proves Chromium and records missing Firefox/WebKit binaries as warnings, rendered smoke captures the opt-in and loaded viewer states, release-candidate inventory checks the GLB structure/size/no-external-URI condition, release-header smoke checks the Netlify header contract including HSTS/CSP/cache/MIME/source-path denies, and release-security smoke checks bounded privacy/security posture.
5. Current source-of-truth docs have been refreshed locally, but the docs closeout still needs commit/push approval or deliberate post-production handling.
6. Dependency audit evidence is improved: the production website footprint audit is clean, and the approved non-force remediation removed all high/critical dev-tooling findings. The remaining 17 moderate findings are in the Lighthouse/Sentry/OpenTelemetry tooling chain and are recorded as residual dev-tooling risk.
7. Production verification is named and guarded, but it remains a post-deploy check and does not replace preview validation, rollback verification, or Wayne's separate production approval.

Current release decision:

1. Recommended: approve `production-publish-from-validated-preview-and-docs-closeout`.
2. Security-first alternative: run the full Codex Security workspace scan before production, then continue if no blocker is found.
3. Browser-parity alternative: install/enable Playwright Firefox and WebKit before production if strict local cross-browser parity is required.
4. Motion-polish alternative: hold production and run the `docs/codex/MOTION_REFERENCE_BRIEF.md` tranche first, accepting that preview evidence must be regenerated.

## 3. Evidence Used

Local evidence:

- `git status --short --branch`
- `docs/codex/TRACKER.md`
- `docs/codex/PRD.md`
- `docs/codex/RELEASE_APPROVAL_PACKET.md`
- `docs/codex/RELEASE_STAGING_MANIFEST.md`
- `docs/codex/PUBLISH_READINESS_AUDIT.md`
- `docs/codex/PRODUCT_IA_PROOF_MAP.md`
- `package.json`
- `netlify.toml`
- `netlify/edge-functions/preview-auth.js`
- full local release gate: `output/release-local-gate/gate-2026-06-27T22-11-05-540Z/release-local-gate.json`
- measurement evidence: `output/measurement/evidence-2026-06-27T22-13-06-978Z`
- product/design acceptance smoke: `output/product-design-acceptance/smoke-2026-06-27T22-11-34-468Z/product-design-acceptance-smoke.json`
- responsive route smoke: `output/responsive-route/smoke-2026-06-27T22-11-40-124Z/responsive-route-smoke.json`
- visual-polish smoke: `output/visual-polish/smoke-2026-06-27T22-12-00-763Z/visual-polish-smoke.json`
- browser coverage advisory: `output/browser-coverage/smoke-2026-06-27T22-12-15-054Z/browser-coverage-smoke.json`
- release inventory inside latest full local gate: `output/release-inventory/inventory-2026-06-27T22-11-11-920Z/release-candidate-inventory.json`
- release staging-manifest smoke: `output/release-staging-manifest/smoke-2026-06-27T22-11-12-132Z/release-staging-manifest-smoke.json`
- BuildScan viewer smoke: `output/buildscan-viewer/smoke-2026-06-27T22-11-14-107Z`
- keyboard release smoke: `output/playwright/keyboard-release-smoke-2026-06-27T22-11-22-013Z`
- semantic/SEO smoke: `output/semantic-seo/smoke-2026-06-27T22-11-26-910Z/semantic-seo-smoke.json`
- rendered screenshots and summary data: `output/playwright/rendered-release-smoke-2026-06-27T22-12-22-685Z`
- dependency audit artifacts: `output/dependency-audit/audit-2026-06-27T20-16-production-footprint.json`, `output/dependency-audit/audit-2026-06-27T20-16-dev-tooling.json`, and `output/dependency-audit/audit-fix-dry-run-2026-06-27T20-16.json`
- repeatable dependency audit summary inside latest full local gate: `output/dependency-audit/summary-2026-06-27T22-11-12-273Z/dependency-audit-summary.json`
- production verification guardrail checks: `npm run qa:release:production` fails without `QA_PRODUCTION_URL`, fails without explicit confirmation, rejects non-production hosts, and has not been run against production.

Specialist reviews:

- Product/conversion agent: positioning, IA, proof, trust, and CTA review.
- Technical QA/performance agent: architecture, Core Web Vitals, BuildScan viewer, QA scripts, and release gate review.
- Security/privacy agent: public model asset risk, headers, analytics, preview-auth, privacy, and release governance review.

Expert sources:

- W3C WCAG 2.2, especially perceivable, operable, understandable, robust principles and testable success criteria: https://www.w3.org/TR/WCAG22/
- web.dev Core Web Vitals, including LCP, INP, and CLS thresholds: https://web.dev/articles/vitals
- Nielsen Norman Group 10 usability heuristics, especially system status, real-world language, user control, consistency, error recovery, and minimalist design: https://www.nngroup.com/articles/ten-usability-heuristics/
- GOV.UK Service Standard, especially user needs, whole-problem solving, simplicity, accessibility, privacy/security, success measures, technology choices, and reliability: https://www.gov.uk/service-manual/service-standard
- Google Search Central SEO Starter Guide for useful content, crawlable resources, titles, snippets, descriptive URLs, and structured data: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- ICO cookies and similar technologies guidance for clear explanation and active consent for non-essential storage/access technologies: https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/cookies-and-similar-technologies/
- OWASP HTTP Headers Cheat Sheet for practical public-site header hardening, including HSTS, CSP, X-Content-Type-Options, Referrer-Policy, and Permissions-Policy: https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html
- MDN CSP `frame-ancestors` reference for iframe embedding controls: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors

## 4. What Good Looks Like

### Product And Positioning

Pass criteria:

- First viewport explains who the site is for, what problem it helps with, and why Robson AI is credible within 10 seconds.
- Robson AI Solutions is not reduced to one product; Building Analyst, BuildScan, WAIS/property operations, and Robson AI professional software direction are clearly separated.
- Building Analyst is framed as a professional surveying/reporting product with cautious Apple-platform direction where relevant.
- BuildScan is framed as external capture/model-review exploration unless Wayne approves stronger maturity claims.
- WAIS/property operations is framed as property/estate intelligence and operations thinking, not as a generic chatbot or external provider strategy.
- Every product claim is labelled as live, early, exploratory, in development, or held for approval.

Current rating: strong locally, release-gated.

Primary gaps:

- WAIS/property operations now has a local proof-section candidate; it still needs preview validation and production approval.
- BuildScan proof is improving and the local viewer is hardened, but the interactive model release still needs Wayne approval and preview validation.
- Trust proof and CTA segmentation are improved locally, but the bundle is not yet committed, previewed or published.

### Information Architecture

Pass criteria:

- Each major audience can find a relevant path in one click from the homepage.
- Each product/workstream has an explicit role: Building Analyst, BuildScan, WAIS/property operations, Robson AI services/consultation.
- Navigation labels are understandable without insider knowledge.
- Related pages reinforce each other rather than repeating generic claims.

Current rating: good homepage IA, incomplete product-route IA.

Primary gaps:

- Building Analyst has a page; BuildScan has a section and local viewer candidate; WAIS/property operations now has a local proof-section candidate but not a full product page.
- A proof inventory should drive future page structure before adding more decorative sections.

### Proof, Trust, And Conversion

Pass criteria:

- Each public workstream has at least one release-approved proof artifact: screenshot, model, workflow example, short case note, diagram, or demo video.
- Proof assets are clearly labelled and never imply a finished product unless that is true.
- The site includes Wayne/Robson AI credibility, professional context, and why the company has a right to solve these problems.
- CTA paths are specific enough for surveyors, estates/FM, drone/3D, and property operations prospects.
- Contact routes stay privacy-safe and measurable without dark patterns.

Current rating: medium on production, stronger in the local candidate.

Primary gaps:

- Email-first conversion is now segmented locally, but the bundle is not previewed or published.
- Formal credentials, professional experience, safe examples, and release-stage boundaries can still be made stronger after the current candidate is previewed.
- No contact form is a good privacy choice for now, but it may lose some enquiries.

### Visual Design And Interaction

Pass criteria:

- The site feels like a professional product company, not a generic AI brochure.
- Visual assets show real product/workflow evidence where safe.
- The visual system expresses the Robson standard: precise, modern, intelligent, practical, trusted, calm, and clean.
- Motion is purposeful, reduced-motion aware, and never blocks reading or performance.
- Decorative or cinematic treatments are not default work; any bold treatment requires explicit option approval and must improve proposition clarity or product proof.
- Interactive pieces show status, fallback, and recovery clearly.
- Desktop and mobile layouts remain clean with no overflow, text clipping, or overlapping controls.

Current rating: good locally, with preview validation required.

Primary gaps:

- Interactive BuildScan viewer hardening and rendered screenshot QA are complete locally; Netlify preview validation is still required.
- Visual-polish smoke now checks release routes for large high-opacity text-level backgrounds so accidental white text boxes are caught locally and on deploy previews.
- Large stylesheet size remains a maintainability risk, but current local performance budget is passing and enforced.
- Mobile consent-banner obstruction found during rendered QA is resolved locally; it still needs deployed-preview confirmation.

### Accessibility

Pass criteria:

- Target WCAG 2.2 AA for public pages.
- Automated axe serious/critical findings are zero.
- Keyboard path works through navigation, consent banner, CTA buttons, copy-email actions, tabs/panels, and the BuildScan viewer.
- Local and preview release gates include an explicit keyboard smoke for the homepage and Building Analyst journeys, not only screenshot review.
- Focus is visible and not obscured.
- Touch targets are adequate on mobile.
- Motion, pointer gestures, and status changes have accessible alternatives or fallbacks.
- Canvas/WebGL content has a clear textual fallback and does not trap keyboard users.

Current rating: strong local baseline, preview/manual coverage still required.

Primary gaps:

- `buildscan-viewer.html` has local direct smoke/evidence coverage, including model-ready/error state checks and direct toolbar keyboard activation checks.
- `qa:keyboard` now covers the homepage skip link, consent decline, workflow tab keyboard navigation, copy-email feedback, keyboard-triggered BuildScan load, Building Analyst tab keyboard navigation, and Building Analyst copy-email feedback.
- Preview/live keyboard and screen-reader spot checks are still needed if the viewer ships.
- Hidden/faded fallback image semantics should be reviewed during the final iframe/canvas accessibility pass.

### Performance

Pass criteria:

- Core Web Vitals target: LCP <= 2.5s, INP <= 200ms, CLS <= 0.1 for the 75th percentile standard where field data exists.
- Lab release target: Lighthouse mobile median performance >= 90 for core pages unless Wayne explicitly accepts an exception.
- Interactive GLB remains opt-in and does not hurt initial page load.
- CSS, fonts, images, and proof assets have budgets.
- Release tooling fails or clearly flags performance regressions.

Current rating: local release-candidate baseline, passing enforced budget.

Primary gaps:

- Latest local evidence reports Lighthouse median performance 100, accessibility 97, best practices 100, SEO 100, CLS 0, and LCP about 1.73s.
- QA now enforces the release budget inside `npm run qa:measurement:evidence`.
- CSS is large and likely has unused rules.
- Deployed Netlify preview validation has passed; production verification remains required after any approved production deploy.

### Privacy, Security, And Governance

Pass criteria:

- No secrets in repo, docs, screenshots, shell output, or public artifacts.
- Preview auth either has proved Netlify route enforcement or is intentionally retired from the public release path.
- Security headers are explicit, include HSTS, are tested on preview/live, and remain compatible with same-origin iframe requirements.
- CSP covers the real site shape, not only `frame-ancestors`.
- GA4 remains disabled until analytics governance, privacy notice, and event minimisation are approved.
- Public model assets have source approval, sanitisation evidence, direct-download acceptance, and rollback path.
- Docs, PRD, tracker, release notes, and live site posture do not contradict each other.

Current rating: conservative baseline, but red release governance while GLB is unapproved and tree is dirty.

Primary gaps:

- Public GLB production sign-off is required.
- Release-candidate inventory should be rerun immediately before staging/commit/publish so the dirty-file, asset-budget, GLB, and secret-scan evidence matches the exact commit candidate.
- Preview-auth route enforcement should be proved on Netlify or the requirement retired.
- HSTS/CSP/cache/MIME/source-path deny checks now have local and deployed-preview release-header/source-deny evidence; production checks remain required after deploy.
- Local release-security smoke now checks no form/customer-data capture, no direct third-party analytics embeds, explicit/default-off consent, empty GA4 IDs, no cookie storage or high-risk DOM/code injection APIs, viewer noindex, and vendored Three.js license presence. This bounded smoke is not a substitute for the full Codex Security scan.
- Dependency audit split is now repeatable: production-footprint npm audit is clean, and the approved non-force remediation reduced full dev/release tooling audit to 17 moderate findings with 0 high and 0 critical. `npm run qa:dependency-audit` and `npm run qa:dependency-audit:strict` exit without blockers, with warning status for residual moderate dev-tooling findings.
- `npm run qa:release:local` now runs the ordered local release gate before commit/preview approval, includes staging-manifest drift, dependency audit advisory, and browser coverage advisory, and writes a summary under `output/release-local-gate/`.
- `QA_BASE_URL=<preview> npm run qa:release:preview` now runs the ordered deployed-preview release gate after approved preview deployment; it includes dependency audit advisory and browser coverage advisory, fails closed without an explicit preview URL, rejects production by default, and intentionally does not run the dirty-tree staging-manifest check.
- Analytics event payloads should be minimised before enabling GA4.
- PRD/README/release docs have been refreshed locally; staged review is still required before publication.

### SEO And Public Discoverability

Pass criteria:

- Titles are unique, clear, concise, and accurate.
- Descriptions are short, unique, and useful.
- Google can access the same public resources users need.
- Sitemap and robots reflect the live public posture.
- Product pages use descriptive URLs and support credible structured data where appropriate.
- Public snippets avoid overclaiming maturity.
- `Robson AI` brand casing is consistent in current public metadata, ARIA labels, visible contact copy, Open Graph, Twitter cards, and structured data.

Current rating: strong local baseline, incomplete product IA.

Primary gaps:

- Product/workstream pages are not evenly developed.
- Older historical docs may still contain past-state records, but current release docs and release gates now reflect live public posture.
- Structured data is intentionally minimal and should be expanded only after the product IA is settled.

## 5. Release-Grade Scorecard

Use this checklist before any production publish decision.

| Area | Required Evidence | Target |
| --- | --- | --- |
| Product positioning | rendered page review and copy scan | clear who/what/why in first viewport |
| Claims safety | copy scan and Wayne review | no unsupported maturity, AI, Apple, customer, or product claims |
| IA | page map and nav review | each core stream has a clear route or intentional parking note |
| Proof | proof inventory | each active stream has approved evidence or explicit gap |
| Conversion | CTA audit and event contract | audience-relevant CTA, no dead ends, no dark patterns |
| Accessibility | axe + keyboard release smoke + manual mobile spot check | WCAG 2.2 AA target, serious/critical axe 0, keyboard journeys pass |
| Performance | Lighthouse and asset budget report | mobile performance >= 90 target, LCP <= 2.5s target or accepted exception |
| SEO/semantics | semantic/SEO smoke, sitemap/robots review, metadata scan | unique metadata, correct crawl posture, meaningful landmarks, consistent Robson AI casing |
| Security headers | Netlify preview/live header check | HSTS, CSP, frame policy, content type, referrer, permissions verified |
| Privacy | privacy notice and analytics review | no GA4 until consent/payload/privacy approval |
| Model asset governance | source, optimisation, direct-download, and visual sign-off | Wayne explicitly approves public use |
| QA automation | local and preview scripts | static, smoke, evidence, viewer, route and header checks pass |
| Git/release | staged diff and deploy target review | only approved files staged; no output or raw model assets |
| Docs/tracker | tracker/PRD/readme review | live state matches docs before release |
| Rollback | commit/deploy rollback note | exact Netlify rollback target verified immediately before production approval |

### Product And Design Acceptance Gate

Before approving a preview or production release, Codex must answer these checks explicitly:

1. First viewport: can a visitor understand within about 10 seconds who Robson AI helps, the building workflow problem, the main workstreams, and one credible reason Wayne/Robson AI should be trusted?
2. Proof status: does every public workstream have either one labelled proof item or an explicit gap, including Building Analyst workflow proof, BuildScan approved model/static proof or approved interactive preview, and WAIS/property operations workflow proof?
3. Release-stage labels: does deployed copy match the actual state, with no local-candidate wording on public surfaces and no live/approved wording for unapproved GLB, app assets, integrations, analytics, customer proof, or Apple/AI capabilities?
4. Audience paths: can surveyors, estates/FM/property operations users, drone/3D capture users, compliance/inspection users, and early collaborators/prospects reach a relevant path from the homepage without insider knowledge?
5. CTA hierarchy: is there one primary site CTA pattern, segmented email prompts for the main workflows, copy-email fallback, privacy reassurance, and no dead-end journey from homepage, Building Analyst, Who it fits, Privacy, 404, or holding fallback?
6. Trust proof: are founder/professional context, judgement boundaries, proof-status language, privacy posture, and maturity boundaries visible before asking a serious B2B/professional visitor to make contact?
7. Motion and interaction: do motion and interactive elements pass reduced-motion, keyboard, no-obstruction, no-overflow, no-text-clipping, CLS/LCP, fallback, loading/status, and error-state checks?
8. Release agreement: do the tracker, release programme, live/preview copy, release approval packet, dependency status, BuildScan GLB status, preview validation, and rollback path all agree?

## 6. Recommended Tranche Roadmap

### Gate 0 - BuildScan Interactive GLB Decision

Status: required first gate.

Goal:
Decide whether the interactive BuildScan GLB candidate is published, adjusted, or deferred.

Recommended option:
Publish only after hardening and Wayne visual/public-release approval.

If publishing:

- Prove the optimised GLB is acceptable as public downloadable model data.
- Harden parent/iframe readiness so loaded means model-ready, not just iframe-ready.
- Add accessible status and fallback behaviour.
- Add pause/visibility/reduced-motion handling for the render loop.
- Add direct viewer, GLB, vendor, MIME/cache, and header checks to release QA.
- Validate Netlify preview headers and route behaviour.
- Commit/push/deploy only after explicit Wayne approval.

If deferring:

- Remove/defer `buildscan-viewer.html`, `assets/vendor/`, and `assets/showcase/buildscan-ludgershall-public.glb`.
- Restore `X-Frame-Options: DENY` unless another same-origin iframe remains.
- Keep the current production static screenshot.

### Tranche 1 - Product IA And Proof Map

Goal:
Define the public website architecture for Robson AI, Building Analyst, BuildScan, WAIS/property operations, and consultation/services without expanding product claims.

Outputs:

- Page/section map.
- Workstream proof inventory.
- Missing-proof list.
- Audience-specific CTA map.
- Parking lot for ideas that would derail release.

### Tranche 2 - Trust And Conversion Upgrade

Goal:
Make the site more credible to a serious B2B/professional buyer.

Outputs:

- Wayne/Robson AI credibility module.
- Professional-background and judgement-boundary copy.
- Safer example/case-note structure.
- Audience-specific contact prompts.
- Measurement event review, with no GA4 enablement unless separately approved.

### Tranche 3 - Core Web Vitals Recovery

Status: completed locally, with deployed-preview validation still needed.

Goal:
Make the site feel fast and set enforceable performance budgets.

Outputs:

- Asset-size report and before/after evidence captured in `docs/codex/TRACKER.md`.
- Image variants/dimensions/loading strategy added locally for the header logo, hero mark and BuildScan static image.
- Local static-server compression added for evidence parity.
- Lighthouse median improved from 72 / LCP about 10.95s to 100 / LCP about 1.73s.
- Lighthouse budget thresholds are enforced by `npm run qa:measurement:evidence`.
- Follow-up still needed: deployed Netlify preview validation and longer-term CSS maintainability cleanup.

### Tranche 4 - Accessibility And Interaction Hardening

Goal:
Close gaps around keyboard, reduced motion, iframe/canvas interaction, status messaging, and mobile resilience.

Outputs:

- Direct viewer accessibility pass if the viewer ships.
- Manual keyboard path checklist.
- Focus/fallback fixes where needed.
- Updated automated coverage for all public pages and special routes.

### Tranche 5 - Privacy, Security, And Release Governance

Goal:
Make the public site and release process defensible before broader marketing or analytics.

Outputs:

- CSP/header plan and preview validation.
- Preview-auth route enforcement decision.
- Source-path deny rules while the project still publishes from repo root.
- Privacy notice hardening before GA4/forms.
- Analytics event minimisation.
- Updated PRD/README/release docs to match public live state.
- Release checklist that includes rollback, staged diff, and tracker update.

### Tranche 6 - SEO And External Presentation

Goal:
Improve discoverability and public presentation once product IA is stable.

Outputs:

- Title/description review.
- Sitemap/robots verification.
- Organization/software structured-data review.
- Open Graph/social preview check.
- Search Console readiness notes, if Wayne approves account/tool access.

## 7. Tooling Operating Model

Use these tools when they materially improve the work:

- Product Design plugin: UX/design audits, visual review, page/flow critique.
- Browser/Playwright: desktop/mobile rendered evidence, console/network checks, interaction proof.
- Multi-agent reviewers: independent product, technical, security/privacy, accessibility, and copy reviews.
- Codex Security: full release-security scan before major production release or security-sensitive changes.
- Netlify CLI/connector: preview deploys, header/route checks, production deploy verification after approval.
- GitHub tools: PR review, CI/checks, branch hygiene after approval.
- Data/analytics tools: only after analytics governance is approved.
- Automations: tracker drift, dirty tree, release readiness, PR/CI, dependency/security checks after Wayne approves recurring automation.

Do not use tools for theatre. Use them when they create evidence, reduce risk, or speed up bounded work.

Operating cadence:

- Start serious tranches by reading `docs/codex/TRACKER.md`, checking `git status --short --branch`, and confirming whether the tranche touches approvals such as commit, push, preview, production, secrets, analytics, customer data, or destructive git actions.
- Use specialist skills for the work type: landing-page/product design for public-page structure, frontend/accessibility skills for UI and WCAG work, Playwright/browser skills for rendered validation, security skills before release-sensitive changes, and Netlify skills for preview/production checks.
- Use agents for genuinely independent review streams, such as product/design, technical QA/performance, security/privacy, accessibility, release governance, or copy/claims review. Keep one main Codex integrator responsible for decisions and final quality.
- Use expert references as a benchmark, not as decoration: W3C WCAG for accessibility, web.dev Core Web Vitals for performance, Google Search Central for SEO, OWASP/MDN for headers and browser security, ICO for consent/privacy, GOV.UK Service Standard for practical service quality, and Nielsen Norman heuristics for usability.
- End each tranche with changed files, validation evidence, tracker updates, risks, rollback path, publish-readiness percentage, and the recommended next action as numbered option `1`.

## 8. Definition Of Done For This Programme

The website excellence goal is not complete until:

- The current BuildScan GLB gate is resolved.
- The public site passes the release-grade scorecard or has explicit accepted exceptions.
- Product IA and proof map are current.
- Trust/conversion gaps are addressed or deliberately parked.
- Performance has been improved or budgets/exceptions are recorded.
- Accessibility/security/privacy release gates pass.
- Docs and tracker match live state.
- Production publish, if performed, is explicitly approved, deployed, verified, and has rollback documented.

## 9. Immediate Recommendation

Use `docs/codex/PUBLISH_READINESS_AUDIT.md` as the single current checklist for the route from local candidate to production publish.

Recommended next action:

1. Approve `production-publish-from-validated-preview-and-docs-closeout`.

Reason:
Dependency remediation has removed the high/critical dev-tooling findings, the full local release gate is passing, the deployed Netlify preview gate is passing, and a read-only rollback target has been identified. The remaining useful proof is production verification after an explicitly approved production publish.

Decision alternatives:

1. Recommended: approve `production-publish-from-validated-preview-and-docs-closeout`.
2. Run the full Codex Security workspace scan before production, then continue if no blocker is found.
3. Install/enable Playwright Firefox and WebKit before production if strict local cross-browser parity is required.
4. Hold production and run the `docs/codex/MOTION_REFERENCE_BRIEF.md` tranche first, accepting that preview evidence must be regenerated.
