# Product IA And Proof Map - Robson AI Solutions Website

Last updated: 2026-06-27 12:11 BST
Owner: Wayne Robson / Robson AI Solutions
Repo: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website`
Status: current-state map for the website-excellence programme

## 1. Purpose

Define the public website architecture, proof requirements, audience paths, and claim boundaries before adding more pages, graphics, or production polish.

This is not a fantasy rewrite. It maps the current public website and the current local BuildScan interactive candidate, then identifies the next release-grade work.

## 2. Review Inputs

Inputs used:

- Current local HTML pages, including the uncommitted BuildScan interactive candidate.
- Current tracker and website-excellence programme.
- Current README, PRD, website narrative, release docs, Netlify config, and package scripts.
- Parallel read-only agent reviews:
  - Product IA/proof/CTA review.
  - Release-governance/doc-drift review.

Important scope note:

- Findings reflect the current dirty local candidate, not only live production.
- Production deploy, commit, push, Netlify preview deploy, GA4, forms, and external messages remain approval-gated.

## 3. Current Page And Section Map

| Surface | Current role | Strength | Gap |
| --- | --- | --- | --- |
| `/` / `index.html` | Main public website for Robson AI Solutions, three workstreams, workflow finder, BuildScan proof, method, credibility, contact | Stronger than a generic AI brochure; gives visitors surveying, evidence, analysis, and software anchors | Still has uneven depth across workstreams; Building Analyst and BuildScan are more tangible than property operations / WAIS |
| `building-analyst.html` | Product-depth page for Building Analyst | Clear professional assessment/evidence/reporting story, cautious Apple-platform language, workflow proof and boundaries | Needs launch assets only when app availability is claimed; could later add approved app screenshots/video and stronger Wayne credibility |
| `who-its-for.html` | Audience qualification and non-fit page | Useful boundary-setting for surveyors, estates, compliance, 3D capture, and early-stage maturity | Does not yet route each audience into a tailored proof/CTA path |
| `privacy.html` | Email-first privacy and analytics notice | Conservative privacy posture; no contact form; GA4 disabled unless consent and Measurement ID exist | Must be refreshed before forms, GA4, richer analytics, or embedded third-party services |
| `holding.html` | Historical holding-page fallback | Still useful as rollback-only/noindex copy | Public website is now live, so this should not be described as the production root in current docs or visitor-facing copy without qualification |
| `buildscan-viewer.html` | Local uncommitted interactive BuildScan GLB viewer candidate | Strong product proof if Wayne approves the public model asset | Must go through preview gate before production; public direct-download acceptance is required |

## 4. Product Architecture

### Robson AI Solutions

Public role:

- Parent company and product studio for professional building software.
- Should be presented as surveying-led, product-led, and careful with AI claims.
- Should not be collapsed into only Building Analyst.

Best current proof:

- Homepage product architecture.
- Credibility section.
- Building Analyst product page.
- BuildScan Ludgershall model-view capture.

Next proof needed:

- A sharper founder/professional credibility module explaining why Wayne / Robson AI has the right to solve these problems.
- A short "how we work" proof pattern: discovery workflow, evidence review, product prototype, professional judgement boundary.

### Building Analyst

Public role:

- Apple-platform-first professional product direction for assessment capture, evidence organisation, report preparation, and review support.
- Should be framed as a surveying/reporting product, not a chatbot or BYO-provider AI product.

Best current proof:

- `building-analyst.html` workflow model.
- Workflow lens tabs: surveyor review, manager triage, client explanation.
- Product proof rail: record issue, keep evidence/reasoning, support surveyor, prepare report-ready material.
- Cautious status card noting final app screenshots, launch video, and App Store links are still pending.

Next proof needed:

- Approved app screenshots or short video only when the iOS/macOS app is ready to claim publicly.
- One release-safe sample assessment record that is clearly illustrative or generated, not customer data.
- If Apple-native capabilities are mentioned, a capability matrix separating implemented, beta/WWDC-watch, and future exploration.

### BuildScan / Drone-to-3D

Public role:

- External capture/model-review exploration for turning drone or external survey outputs into inspectable building models.
- Should be described as visual-review support, not a finished surveying automation product.

Best current proof:

- Approved Ludgershall PNG model-view capture on the homepage.
- Local uncommitted `buildscan-viewer.html` interactive GLB preview candidate.
- Proof steps: open GLB, review context, prepare evidence.

Next proof needed:

- Wayne's explicit approval that the 1.3 MB optimised Ludgershall public GLB is acceptable as downloadable public model data.
- Netlify preview validation for viewer headers, route behaviour, MIME/cache, mobile behaviour, and fallback.
- If retained, a short public explanation that the interactive model is an optimised preview asset and not a full survey deliverable.

### WAIS / Property Operations

Public role:

- Early property/estate operations intelligence direction for CAFM-adjacent workflows, evidence trails, maintenance, compliance, responsibility, and decision records.
- Should stay separate from Building Analyst and vendor AI strategies.

Best current proof:

- Homepage product direction card for Property operations.
- Workflow finder operations tab.
- Local homepage `#property-operations` proof pattern showing an illustrative operating queue, evidence trail, owner, due signal, blocker, next action and audit boundary.
- `who-its-for.html` property operations fit cards.

Current gap:

- The proof section is local and uncommitted; it has not been deployed or live-preview validated.
- The name WAIS appears only lightly and is not explained publicly.

Next proof needed:

- Netlify preview validation and final content review for the local proof section before production.
- More approved product evidence only when it can be shown without customer data or live-system implications.
- Explicit boundary must remain: no live Microsoft, Oracle, SharePoint, council, tenant, or customer-system integration without a separately approved real-integration tranche.

## 5. Audience Paths

| Audience | Current path | Good enough for release? | Recommended next improvement |
| --- | --- | --- | --- |
| Building surveyor | Homepage -> Workstreams -> Building Analyst -> contact | Mostly yes | Make the Building Analyst CTA more specific: assessment workflow, evidence pack, reporting bottleneck |
| Estates / property manager | Homepage -> Workflow finder -> Property operations -> property proof -> contact | Local candidate | Validate the local proof section on preview before publishing |
| Compliance / inspection team | Who it fits -> fit cards -> contact | Partial | Add a scenario path around inspection evidence, decisions, and audit trail |
| Drone / 3D capture visitor | Homepage -> BuildScan model view -> contact | Strong if GLB gate is resolved | Publish only after preview gate and public-model sign-off |
| Potential collaborator / early partner | Homepage -> Credibility -> contact | Partial | Add Wayne/professional credibility and collaboration boundary copy |
| Procurement-ready buyer | Who it fits -> non-fit | Yes | Keep early-stage boundary; do not pretend procurement maturity |

Routing fixes applied locally:

- Homepage and Building Analyst navigation now include `Who it fits` as a first-class route.
- Homepage footer now links to `Who it fits`.

## 6. Proof Inventory

| Proof item | Location | Status | Release note |
| --- | --- | --- | --- |
| Robson AI icon, OG image, local fonts | `assets/` | Live | Approved public brand assets |
| Building Analyst workflow model | `building-analyst.html` | Live | Good product-thinking proof; not a final app screenshot |
| Building Analyst illustrative assessment record | `building-analyst.html#example-output` | Live | Keep clearly illustrative; do not imply customer data |
| Building Analyst final screenshots/video/App Store link | `building-analyst.html#workflow-proof` | Pending | Add only after app release readiness |
| Real BuildScan Ludgershall application view | `assets/showcase/buildscan-ludgershall-buildscan-view-1600.webp` | Local candidate | Wayne-approved real product image; needs preview validation before production |
| BuildScan Ludgershall browser-ready GLB | `assets/showcase/buildscan-ludgershall-public.glb` | Local candidate | Exact SharePoint export selected by Wayne; needs preview validation before production |
| WAIS/property operations proof | Homepage `#property-operations` and `who-its-for.html` route link | Local candidate | Needs preview validation before production |
| Founder/professional credibility | Homepage credibility copy | Light | Needs a stronger trust module |
| Customer logos/testimonials | None | Not available | Do not invent |
| Product metrics/adoption numbers | None | Not available | Do not invent |

## 7. Claim Maturity Matrix

| Area | Current safe claim | Avoid |
| --- | --- | --- |
| Robson AI Solutions | Surveying-led technology business developing professional software for evidence capture, reporting workflows, 3D modelling, and building intelligence | Generic AI transformation company; finished enterprise suite |
| Building Analyst | Early Apple-platform-first product direction for professional assessment capture, evidence organisation, report-ready analysis, and review support | Replacing surveyors; generic chatbot; BYO API key product; unreleased Apple capability as available fact |
| BuildScan | BuildScan exploration for drone/external capture model review and visual context | Finished survey automation product; measured output guarantee; full survey deliverable from GLB alone |
| WAIS/property operations | Early property/estate intelligence and CAFM-adjacent workflow thinking | Live council/customer integration; Microsoft/Oracle/SharePoint production readiness |
| AI / intelligence | Used where it can reduce repetition, structure information, highlight patterns, or support review | Autonomous professional judgement, diagnosis, compliance sign-off, or external provider strategy as product goal |

## 8. CTA Map

Primary website CTA:

- Discuss a workflow / Email the workflow.

CTA prompts by audience:

| Audience | Recommended prompt | Why |
| --- | --- | --- |
| Surveyor | "Describe one assessment or reporting workflow where evidence gets hard to organise." | Fits Building Analyst and keeps the conversation practical |
| Estates/FM | "Describe one building issue queue, responsibility, or evidence trail that is hard to manage." | Opens WAIS/property operations without claiming a finished product |
| Drone/3D | "Describe the external capture output you need to review and what decisions it should support." | Fits BuildScan and keeps the model as review aid |
| Compliance/inspection | "Describe the record, evidence, and audit trail you need to preserve." | Keeps governance and traceability central |
| Collaborator | "Describe the product, workflow, or domain problem where practical software could help." | Allows early partnership without hard-selling product maturity |

Current CTA risk:

- The email-first CTA is privacy-safe, but too generic for higher-intent visitors.
- A future contact form could improve conversion, but it needs spam, privacy, retention, and analytics governance first.

## 9. Information Architecture Recommendation

Recommended IA target for the release-grade website:

1. Homepage: parent story, three workstreams, workflow finder, proof highlights, credibility, contact.
2. Building Analyst page: product-depth route for assessment/evidence/reporting, with app proof only when approved.
3. BuildScan section now; later BuildScan page if the interactive model and more proof become approved.
4. Property operations / WAIS page or section: only after a release-safe workflow diagram exists.
5. Who it fits: keep as qualification page, but make audience paths more explicit.
6. Privacy: keep conservative and update before analytics/forms.

Do not add a broad "AI services" page unless Wayne explicitly wants Robson AI Solutions positioned as services/consulting. The stronger path is product-led workflow conversations.

## 10. Release-Governance Findings

P1 documentation drift:

- `README.md`, `docs/codex/PRD.md`, `docs/release-handover.md`, and older launch docs still contain holding/private-preview wording that conflicts with the current public live website.
- Current public pages are indexed and live, while preview-auth remains present for future/private route use and local tests.
- This must be refreshed before claiming the website is release-grade.

P1 BuildScan Gate 0:

- The local uncommitted BuildScan interactive candidate changes security/release posture because it needs same-origin iframe allowance and GLB/vendor cache/header rules.
- Live production does not currently publish `buildscan-viewer.html`.
- Release docs need a clear Gate 0 checklist: public model approval, CSP/frame acceptance, route/asset matrix, MIME/cache validation, performance exception, fallback path, rollback path.

P2 validation drift:

- `qa:buildscan-viewer` and the GLB/vendor route requirements now exist locally.
- Older validation docs do not yet include the viewer, header checks, GLB/public-model checks, or preview/live route matrix.

P3 holding page:

- `holding.html` remains accessible but noindex. Treat it as rollback-only/historical fallback or refresh the copy so it cannot confuse a direct visitor.

## 11. Ranked Recommendations

### P1 - Release Gate And Governance

1. Resolve the BuildScan interactive model gate through a Netlify deploy-preview before production.
2. Refresh README, PRD, release-handover, and any launch docs that still describe the current live site as holding/private-first.
3. Validate the local release-safe property operations / WAIS proof section before production.
4. Keep `Who it fits` visible in the main journey and use it as an audience-routing hub.
5. Keep the BuildScan interactive model labelled as exploratory/preview, not finished product proof.

### P2 - Trust And Conversion

1. Add a stronger Wayne / Robson AI credibility module: surveying experience, product-building approach, professional judgement boundary, and early-stage honesty.
2. Segment the contact prompts by workflow: assessment, external capture, property operations, compliance/inspection.
3. Add a "proof status" strip that clearly labels each workstream as live proof, local candidate, pending app assets, or exploratory.
4. Replace repeated generic "capture/evidence/review" language with maturity labels where helpful: live public page, workflow proof, approved static proof, interactive candidate, early exploration.

### P3 - Later Enhancements

1. Consider a BuildScan page only after the interactive proof is accepted and validated on preview.
2. Consider a contact form only after privacy, spam, retention, and analytics governance are approved.
3. Add structured data after IA stabilises, not while product routes are still changing.

## 12. Standards And Benchmarks Used

- WCAG 2.2 for accessibility target and interaction/focus expectations: https://www.w3.org/TR/WCAG22/
- Core Web Vitals for performance targets, especially LCP, INP, and CLS: https://web.dev/articles/vitals
- Nielsen Norman Group usability heuristics for status, control, consistency, recognition, error recovery, and minimalist design: https://www.nngroup.com/articles/ten-usability-heuristics/
- GOV.UK Service Standard for user needs, accessibility, privacy/security, technology choice, reliability, and success measurement: https://www.gov.uk/service-manual/service-standard
- Google Search Central SEO Starter Guide for public titles, descriptions, crawlability, and useful public content: https://developers.google.com/search/docs/fundamentals/seo-starter-guide

## 13. Next Bounded Implementation Tranches

Recommended order:

1. `buildscan-interactive-preview-release-candidate`: commit/push branch and Netlify deploy-preview after Wayne approval; validate live preview before production.
2. `docs-public-site-state-refresh`: update README, PRD, release-handover, launch docs, validation docs, and preview-auth wording to match the current public live website and the separate BuildScan Gate 0.
3. `trust-and-cta-segmentation`: add Wayne credibility and audience-specific contact prompts.
4. `performance-budget-recovery`: optimise LCP/CSS/assets and add performance thresholds.

Recommended next decision for Wayne:

1. Approve the BuildScan interactive preview-release-candidate path, because it clears the active dirty release candidate before broader implementation.
2. If not approving the GLB preview, defer it and start `docs-public-site-state-refresh`.
