# Next Phase Refinement Plan - Robson AI Solutions Website

Last updated: 2026-06-28 11:53 BST
Owner: Wayne Robson / Robson AI Solutions
Repo: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website`
Status: planning baseline; no implementation or deploy approved

## 1. Purpose

This plan prepares the next website phase after Wayne reviews the full live website in `docs/codex/FINAL_WEBSITE_APPROVAL_HANDOFF.md`.

It identifies content, design, SEO, analytics, accessibility, and performance refinements that could make the production site stronger while keeping the current product truth intact.

This plan does not approve:

- code changes
- public-model changes
- preview deploys
- production deploys
- GA4 or analytics activation
- contact forms or customer-data capture
- domain/DNS changes
- external integrations
- broad redesign

## 2. Current Product Truth

The website should continue to communicate:

- Robson AI Solutions is building professional building intelligence, not generic AI.
- Building Analyst supports surveyor-led assessment capture, evidence structure, and report-ready review.
- BuildScan supports external capture/model review and visual building context.
- Property operations thinking supports CAFM-style workflows around issues, evidence, ownership, blockers, deadlines, and next actions.
- The workflow loop is practical: capture evidence, structure information, analyse patterns, and support clearer client understanding.
- Professional judgement, review, and responsibility remain with the user.
- Apple-native intelligence is a direction to explore where useful; it must not be overclaimed.
- Contact remains email-first; the site does not collect form submissions.

## 3. Recommended Next Phase

Recommended tranche name:

`website-refinement-planning-no-deploy`

Scope:

- Review Wayne's approval comments from `docs/codex/FINAL_WEBSITE_APPROVAL_HANDOFF.md`.
- Convert any approved comments into a scoped preview-only refinement backlog.
- Keep all changes out of production until Wayne reviews the candidate and gives explicit final approval.

Success criteria:

- The refinement backlog separates copy, design, SEO/analytics, accessibility/performance, and release-governance work.
- Every item has a risk level, approval gate, validation command, and rollback path.
- Unsupported claims remain out of scope.
- No deploy happens during the planning tranche.

## 4. Candidate Refinements

### 4.1 BuildScan Interaction Polish

Current evidence:

- Homepage BuildScan section shows a static model image and opt-in `Load interactive 3D model` control.
- Direct viewer exposes Orbit, Pan, Top, Front, Right, Iso, Spin, Zoom In, Zoom Out, and Reset.
- Production BuildScan viewer smoke passed at `output/buildscan-viewer/smoke-2026-06-28T10-28-08-942Z`.

Potential refinements:

- Make the homepage opt-in state clearer: what loads, why it is optional, and what visitors can do after loading.
- Improve visible viewer guidance for non-technical visitors without adding clutter.
- Consider adding a short "model review helps with..." caption near the viewer.
- Review whether the Spin control is useful publicly or should remain secondary.
- Keep static fallback visible and useful for visitors who do not load WebGL.

Approval gates:

- Wayne must approve any new public model, replacement GLB, larger GLB, model detail increase, model annotation, or more explicit BuildScan maturity claim.
- Any model change requires release inventory evidence for size, direct download risk, and GLB external URI count.

Minimum validation if implemented:

```bash
git diff --check
npm run qa:buildscan-viewer
npm run qa:responsive
npm run qa:keyboard
npm run qa:rendered
npm run qa:release-inventory
npm run qa:release:local
```

### 4.2 Property Operations Narrative Clarity

Current evidence:

- Homepage includes `#property-operations` with an illustrative operating queue and release boundary note.
- `who-its-for.html` routes property operations visitors to the proof pattern.
- Current copy avoids live council, tenant, Microsoft, Oracle, SharePoint, CAFM, or customer-system integration claims.

Potential refinements:

- Clarify the difference between property operations thinking, WAIS-style estate intelligence, and full CAFM platform integration.
- Add more precise wording around issue queues, evidence trails, owner, due signal, blocker, and next action.
- Consider whether a lightweight diagram or tighter content sequence would make the capture/analyse/support loop easier to understand.
- Keep operational proof as workflow pattern unless real integrations are approved.

Approval gates:

- Wayne must approve any claim that suggests live customer-system integration, tenant data, council workflows, Microsoft/Oracle/SharePoint connectivity, or production CAFM functionality.
- Any new customer-like example must be explicitly illustrative unless backed by approved real evidence.

Minimum validation if implemented:

```bash
git diff --check
npm run qa:semantic-seo
npm run qa:product-design
npm run qa:visual-polish
npm run qa:responsive
npm run qa:release:local
```

### 4.3 SEO And Analytics Configuration

Current evidence:

- Public routes return canonical metadata, `index, follow`, Open Graph image, and Twitter card metadata.
- `robots.txt` references the sitemap and disallows `holding.html`.
- `sitemap.xml` contains four public locs.
- Measurement smoke confirms consent flows and no Google requests when no GA ID is configured.

Potential refinements:

- Review titles and descriptions after Wayne approves the live site wording.
- Consider whether BuildScan and Building Analyst need richer structured data, while avoiding product availability claims.
- Add analytics only if Wayne approves GA4 setup, privacy review, and measurement governance.
- Keep analytics disabled/inert unless explicitly approved.

Approval gates:

- GA4 Measurement ID setup and analytics enablement require Wayne approval.
- Privacy copy must be reviewed before analytics or forms change.
- Contact form remains out of scope unless separately approved.

Minimum validation if implemented:

```bash
git diff --check
npm run qa:semantic-seo
npm run qa:measurement:local
npm run qa:measurement:evidence
npm run qa:release:local
```

### 4.4 Accessibility And Performance Watch

Current evidence:

- Production release gate passed.
- Post-launch keyboard, responsive, visual-polish, rendered, measurement, and BuildScan viewer checks passed.
- Browser coverage advisory remains warning-only because Firefox/WebKit Playwright binaries are not installed locally.

Potential refinements:

- Install/enable Firefox and WebKit for strict local browser parity if Wayne approves browser installation.
- Keep Lighthouse targets at performance/accessibility/best-practices/SEO 95 or better.
- Preserve reduced-motion handling for all future motion work.
- Treat any visual polish as failed if it introduces text overlap, horizontal overflow, invisible focus, or amateur text backgrounds.

Approval gates:

- Browser installation requires Wayne approval.
- Strict browser parity can be made a release requirement for future production changes.

Minimum validation if implemented:

```bash
git diff --check
npm run qa:browser-coverage
npm run qa:browser-coverage:strict
npm run qa:measurement:evidence
npm run qa:release:local
```

### 4.5 Claim Alignment And Apple-Native Direction

Current evidence:

- Building Analyst copy says Apple-native intelligence is being evaluated where useful.
- The site avoids BYO API key positioning and avoids external AI-provider strategy as the product goal.
- Current copy says intelligence can help organise evidence and support review, not replace judgement.

Potential refinements:

- Review all Apple-native language after platform decisions settle and before any launch screenshots, App Store links, or video are added.
- Keep Building Analyst positioned as professional surveying/reporting workflow support.
- Avoid "AI surveyor", autonomous diagnosis, generic chatbot, or finished-suite language.
- Add approved current app screenshots only when they are ready for public use.

Approval gates:

- Wayne must approve any public app screenshot, App Store link, Apple feature claim, launch video, or stronger maturity statement.
- Do not overclaim unreleased Apple APIs or third-party developer availability.

Minimum validation if implemented:

```bash
git diff --check
npm run qa:semantic-seo
npm run qa:product-design
npm run qa:rendered
npm run qa:release:local
```

## 5. Release Path For Any Future Refinement

Future implementation should follow this order:

1. Wayne approves a scoped tranche.
2. Codex creates or uses a non-production branch.
3. Codex implements the scoped change.
4. Codex runs local validation.
5. Codex creates a Netlify preview only if approved.
6. Wayne reviews the full candidate preview.
7. Wayne gives explicit final approval for live deploy.
8. Codex deploys production only after approval.
9. Codex runs the production release gate.
10. Codex updates tracker/docs with evidence and rollback path.

No future live deploy should happen before step 7.

## 6. Recommended Decision

1. Recommended: Wayne reviews `docs/codex/FINAL_WEBSITE_APPROVAL_HANDOFF.md` and replies `Approved current live website` or lists required changes.
2. Approve `website-refinement-planning-no-deploy` to turn review feedback into a prioritized backlog.
3. Approve a preview-only implementation tranche for one narrow refinement area.
4. Hold all website changes and keep production as-is.
