# Codex Tracker - Robson AI Solutions Website

Last updated: 2026-06-21 14:07 BST
Project owner: Wayne Robson / Robson AI Solutions
Primary repo/path: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website`
Current branch: `main`

## 1. Current Objective

Create a clear Codex working baseline for the Robson AI Solutions Website without changing product implementation. The repo should have a current-state PRD, lightweight tracker, capability audit, and first recommended autonomous tranche so future Codex work can resume without rediscovering basic project context.

Success means:

- `docs/codex/TRACKER.md`, `docs/codex/PRD.md`, `docs/codex/CAPABILITY_AUDIT.md`, and `docs/codex/FIRST_TRANCHE.md` exist and reflect the current repo.
- Existing docs remain preserved and referenced, not overwritten.
- Current risks, validation commands, deployment path, and approval boundaries are explicit.
- Side ideas are parked instead of expanding the baseline tranche.

## 2. Active Tranche

Tranche name: `public-full-site-launch-readiness`
Status: in progress
Started: 2026-05-30 17:03 Europe/London
Completed: 2026-05-30 17:56 Europe/London

Scope:

- Prepare a separate launch-readiness branch and Netlify preview.
- Make `/` serve the fuller site on the readiness branch.
- Make intended public pages anonymous/public on the readiness branch.
- Keep missing iOS/App Store screenshots and links marked as blockers, not invented content.
- Do not launch production.

Out of scope:

- GA4 Measurement ID enablement, contact form implementation, domain/DNS changes, or destructive git cleanup.
- Any customer data handling, payments, Apple signing/submission, or external messages.

Permission envelope:

- Wayne approved option 2: `public-full-site-launch-readiness`.
- Codex may do: create a branch, make route/auth/robots/sitemap/meta readiness changes, run local QA, deploy a non-production Netlify preview, update docs/tracker, commit/push the branch.
- Codex must ask before: merging to `main`, production launch/deploy, changing domain/DNS, enabling GA4, adding forms, sending external messages, destructive git actions, or unrelated post-launch changes.

Done criteria:

- Readiness branch exists and is pushed.
- Local QA gates pass.
- Non-production Netlify preview is deployed and verified.
- Launch blockers are documented.
- Tracker is updated with evidence and Wayne's next recommended decision.

Follow-on tranche:

- Tranche name: `website-rg5-local-qa-runner-parity`
- Status: completed
- Started: 2026-06-01 06:03 Europe/London
- Completed: 2026-06-01 06:08 Europe/London
- Scope: re-run local measurement smoke/evidence in an environment that allows loopback bind and attach fresh proof artifacts to this tracker.

Follow-on tranche:

- Tranche name: `website-post-wwdc-positioning-refresh`
- Status: completed
- Started: 2026-06-08 20:30 Europe/London
- Completed: 2026-06-08 21:37 Europe/London
- Scope: update website narrative and launch-readiness copy after WWDC26 so Building Analyst is framed as a professional surveying/reporting product with cautious Apple-native intelligence direction where relevant. No production deploy, no app implementation, no vendor-provider strategy changes.

Follow-on tranche:

- Tranche name: `website-agent-polish-preview-refresh`
- Status: completed
- Started: 2026-06-18 18:40 Europe/London
- Completed: 2026-06-18 19:53 Europe/London
- Scope: use an independent read-only agent review plus Browser/Netlify tooling to tighten post-WWDC copy/docs, refresh the non-production Netlify launch-readiness preview, and validate the live preview. No production deploy, no domain/DNS changes, no app implementation.

Follow-on tranche:

- Tranche name: `website-launch-readiness-pr`
- Status: completed
- Started: 2026-06-18 19:54 Europe/London
- Completed: 2026-06-18 19:58 Europe/London
- Scope: open a draft GitHub PR for the validated launch-readiness branch so the work enters formal review without merging or production deployment.

Follow-on tranche:

- Tranche name: `website-launch-readiness-pr-ready`
- Status: completed
- Started: 2026-06-18 20:51 Europe/London
- Completed: 2026-06-18 20:51 Europe/London
- Scope: mark the already validated launch-readiness PR ready for review after Wayne approval, verify the PR check, and keep merge/production launch approval separate.

Follow-on tranche:

- Tranche name: `website-merge-readiness-gate`
- Status: completed
- Started: 2026-06-18 21:39 Europe/London
- Completed: 2026-06-18 21:39 Europe/London
- Scope: assess Wayne's option 1 response as merge-readiness approval without production launch approval, verify PR #2 checks, and hold the merge because this Netlify project deploys from `main`.

Follow-on tranche:

- Tranche name: `production-launch-preflight`
- Status: completed - no-go
- Started: 2026-06-18 21:42 Europe/London
- Completed: 2026-06-18 21:46 Europe/London
- Scope: run final QA against PR #2 deploy-preview, confirm production is unchanged, check launch routes/SEO/privacy/measurement, and return a production launch go/no-go without merging or deploying.

Follow-on tranche:

- Tranche name: `who-it-fits-contrast-fix-and-retest`
- Status: completed
- Started: 2026-06-20 10:02 Europe/London
- Completed: 2026-06-20 10:08 Europe/London
- Scope: fix the `who-its-for.html` dark hero/card contrast blocker, retest local desktop/mobile rendering, push the fix to PR #2, validate the Netlify deploy-preview, and confirm production remains unchanged. No merge or production deploy.

Follow-on tranche:

- Tranche name: `production-launch-merge-and-verify`
- Status: completed
- Started: 2026-06-20 14:29 Europe/London
- Completed: 2026-06-20 14:32 Europe/London
- Scope: merge PR #2 to `main`, verify Netlify production deploy, validate live routes/metadata/consent smoke, confirm visual contrast on live production, record rollback target, and update tracker. No domain/DNS, GA4, forms, customer data, or external messaging changes.

Follow-on tranche:

- Tranche name: `website-post-launch-observation-pass`
- Status: completed
- Started: 2026-06-20 18:10 Europe/London
- Completed: 2026-06-20 18:12 Europe/London
- Scope: observed the live production website after launch by checking Netlify deploy health, route availability, metadata/social preview assets, consent/contact behaviour, crawlability, visible desktop/mobile rendering, and obvious stale-public-copy risk. No deploys, DNS, GA4, forms, rollback, customer data, or external messaging changes.

Follow-on tranche:

- Tranche name: `website-professional-interactive-polish`
- Status: completed locally
- Started: 2026-06-20 20:27 Europe/London
- Completed: 2026-06-20 20:44 Europe/London
- Scope: reviewed the current public website and added scoped professional interactive sections where useful, focused on visitor workflow exploration and Building Analyst assessment framing. Added accessible tab behaviour, compact mobile navigation, and consent-banner landmark fixes. No production deploy, DNS, GA4, forms, customer data, external messages, or rollback.

Follow-on tranche:

- Tranche name: `website-professional-redesign-local`
- Status: completed locally
- Started: 2026-06-21 09:10 BST
- Completed: 2026-06-21 09:44 BST
- Scope: broadened the local website design pass using the Robson icon and colour palette as fixed brand anchors while improving layout, typography, component geometry, hero hierarchy, mobile behaviour, consent banner compactness, and local-font performance. Preserved existing product facts, measurement hooks, contact paths, preview auth assumptions, and public-claim caution. No production deploy, DNS, GA4, forms, customer data, external messages, commits, pushes, or rollback.

Follow-on tranche:

- Tranche name: `website-professional-redesign-production-deploy`
- Status: completed
- Started: 2026-06-21 10:02 BST
- Completed: 2026-06-21 10:08 BST
- Scope: verified the local redesigned pages and links, committed the scoped redesign work to `main`, pushed to GitHub, verified Netlify production deploy, and validated the live public website. No DNS changes, GA4 enablement, forms, customer data, external messages, destructive git actions, or rollback.

Follow-on tranche:

- Tranche name: `website-modern-motion-graphics-polish`
- Status: completed
- Started: 2026-06-21 10:14 BST
- Completed: 2026-06-21 10:24 BST
- Scope: researched current professional motion/microinteraction patterns, added scoped cursor-responsive graphical polish and panel motion to the existing public website, validated locally and live, committed to `main`, pushed to GitHub, and verified the Netlify production deploy. The implementation is dependency-free, accessible, reduced-motion aware, and inside the existing Robson AI product narrative. No DNS changes, GA4 enablement, forms, customer data, external messages, destructive git actions, or product-claim expansion.

Follow-on tranche:

- Tranche name: `website-basic-mistakes-and-conversion-polish`
- Status: completed and deployed
- Started: 2026-06-21 10:31 BST
- Completed: 2026-06-21 11:38 BST
- Scope: performed a blunt product/design/conversion audit using current local evidence and the attached screenshot, fixed obvious local website mistakes and contact-path friction, created a concise team recommendation memo, validated locally, committed to `main`, pushed to GitHub, and verified the Netlify production deploy. No DNS changes, GA4 enablement, customer data, external messages, destructive git actions, or product-claim expansion.

Follow-on tranche:

- Tranche name: `project-list-analysis-dashboard`
- Status: completed locally
- Started: 2026-06-21 10:32 BST
- Completed: 2026-06-21 10:41 BST
- Scope: analysed `/Users/wayne/Downloads/Master Project list by Wayne Robson.xlsx`, inferred the project naming convention, excluded budget/non-project rows from default project views, and created a local-only dynamic chart dashboard under ignored `output/` artifacts. No production deploy, public website route, customer-system integration, commits, pushes, or external messages.

Follow-on tranche:

- Tranche name: `website-professional-design-signature-pass`
- Status: completed and deployed
- Started: 2026-06-21 11:21 BST
- Completed: 2026-06-21 11:38 BST
- Scope: reviewed current modern SaaS/B2B/motion/typography references, then added a professional design signature pass using the bundled Fraunces display font, editorial section-label rails, sharper product/card accents, and non-clipped mobile navigation. Preserved current product claims, Robson AI brand assets, analytics contracts, contact path, reduced-motion assumptions, and no-form privacy stance. Committed to `main`, pushed to GitHub, and verified the Netlify production deploy. No DNS changes, GA4 enablement, customer data, external messages, destructive git actions, or rollback.

Follow-on tranche:

- Tranche name: `website-conversion-design-signature-production-deploy`
- Status: completed
- Started: 2026-06-21 11:32 BST
- Completed: 2026-06-21 11:38 BST
- Scope: after Wayne approval, committed the conversion/contact/design-signature polish bundle, pushed `main`, verified Netlify production deploy `6a37be74ace5eb0008361ef4` for commit `6e275f9e3e4f56a293c2bd5401a8af55f13f2dc1`, and ran live measurement plus rendered Browser QA. No DNS changes, GA4 enablement, forms, customer data, external messages, destructive git actions, or rollback.

Follow-on tranche:

- Tranche name: `building-analyst-proof-assets-and-workflow-story`
- Status: completed and deployed
- Started: 2026-06-21 12:03 BST
- Completed: 2026-06-21 14:07 BST
- Scope: add a release-safe Building Analyst product-proof/workflow-story section without using old Building Analyst screenshots, remove Wayne-deleted legacy assets from Git, repoint public icon links to the remaining `assets/robson-ai-icon-v3.png`, preserve cautious Apple-native and release-stage claims, update navigation where useful, run validation, commit, push `main`, and verify Netlify production publish.
- Out of scope: iOS/macOS/Android implementation, App Store claims, new product claims, customer data, form handling, GA4 enablement, Netlify/DNS changes, or rollback.

## 3. Now / Next / Later

### Now

- Local QA baseline is restored and documented.
- Preview auth reads Netlify environment variables and fails closed if they are missing.
- Preview credential is stored in macOS Keychain under service `Robson AI Website Preview Auth`; do not commit or print credential values.
- Netlify preview-auth env vars are set for `production`, `deploy-preview`, and `branch-deploy`.
- PR #1 was merged into `main`: `https://github.com/LoganRobson70/robson-ai-solutions-website/pull/1`.
- Netlify production deploy is ready for tracker closeout commit `a7afc4d`.
- Production `https://robsonai.co.uk/` now serves the full public website.
- Production public routes `/`, `/index.html`, `/building-analyst.html`, `/who-its-for.html`, `/privacy.html`, `/robots.txt`, and `/sitemap.xml` return `200`.
- Post-launch observation pass completed with no live production failures found; external search results may still show the old holding-page snippet until recrawled.
- Public full-site launch plan created at `docs/codex/PUBLIC_FULL_SITE_LAUNCH_PLAN.md`.
- Public full-site launch was approved by Wayne and completed on 2026-06-20.
- Public launch-readiness branch is being prepared at `codex/public-full-site-launch-readiness`.
- Local launch-readiness gates passed before Netlify preview.
- Non-production launch-readiness preview remains available for comparison: `https://public-launch-readiness--robson-ai-website.netlify.app`.
- Future tranches should consider agents/background threads when they are useful for parallel QA, independent review, research, or split implementation tasks.
- This website branch and the related iOS app thread are both at a wait-until-WWDC gate. Apple WWDC 2026 runs June 8-12, 2026; no launch-facing website or iOS decisions should be forced before 2026-06-08 unless Wayne explicitly reopens the scope.
- `website-rg5-local-qa-runner-parity` is complete: local smoke/evidence suite now passes with fresh 2026-06-01 artifacts and removes the prior local bind blocker from the website-only PRD gate evidence.
- `website-post-wwdc-positioning-refresh` is complete: homepage, Building Analyst, who-it-fits, holding page and website narrative copy now favour professional surveying software, reporting workflows, building intelligence and cautious Apple-native direction over generic AI/chatbot/provider language.
- `website-agent-polish-preview-refresh` is complete: stale privacy/PRD/release wording was aligned, Building Analyst now says "Assessment capture and report-ready evidence", Apple-platform language is cautious, the launch plan separates a professional/product-direction launch from an app-availability launch, and the Netlify preview has been refreshed.
- PR #2 is merged: `https://github.com/LoganRobson70/robson-ai-solutions-website/pull/2`.
- Production deploy `6a3695c3b9eca200087f4c36` is ready for merge commit `d695eba11e2878840d31984ab9f1646e62dd3358`.
- `production-launch-preflight` no-go blocker is fixed: `who-its-for.html` now renders white hero text on the dark hero background and dark headings on white hero cards.
- Live production contrast checks pass on desktop and mobile.
- `website-professional-redesign-production-deploy` is complete: production `https://robsonai.co.uk/` is deployed from commit `c0863348c7b036f02bcbe0144372c85a17b5424b`.
- `website-modern-motion-graphics-polish` is complete: production `https://robsonai.co.uk/` is deployed from commit `0c3a9f5b5dfa9179b937c47a8d4028cdca6194f9`; homepage and Building Analyst hero panels now have cursor-responsive technical motion fields, selected cards/panels have pointer-depth motion, and reduced-motion/mobile coarse-pointer contexts disable pointer motion.
- `website-basic-mistakes-and-conversion-polish` is deployed to production: fixed homepage credibility contrast, removed the amateur white paragraph strip from the credibility cards, improved homepage/Building Analyst/who-it-fits email-first contact paths, added multi-panel copy-email support, and created `docs/codex/CONVERSION_CONTACT_AUDIT_2026-06-21.md`.
- `website-professional-design-signature-pass` is deployed to production: added stronger editorial typography, section-label rail detailing, product/card accent surfaces, and a wrapped mobile nav so the site feels less generic while keeping the product-led software signal.
- Production `https://robsonai.co.uk/` is deployed from commit `6e275f9e3e4f56a293c2bd5401a8af55f13f2dc1`; Netlify production deploy `6a37be74ace5eb0008361ef4` is ready and published.
- `project-list-analysis-dashboard` is complete locally: dashboard artifact is `output/project-analysis/robson-project-dashboard.html`; default project view includes 976 valid project rows, excludes 78 budget/non-project rows, and holds 14 naming exceptions for review. Source workbook data must not be added to public website routes or deployed without an explicit privacy/release review.
- `building-analyst-proof-assets-and-workflow-story` is deployed: Building Analyst now has a no-old-screenshots Product proof section, public icon links use `assets/robson-ai-icon-v3.png`, Wayne-deleted legacy assets were removed from Git, and production was verified from commit `53d19da9620b4926258cfa9e0f20767f0c3d207d` with Netlify deploy `6a37e1c1f001a300081cbcd7`.

### Next

- Review `output/project-analysis/robson-project-dashboard.html` locally and decide whether to correct the 14 naming exceptions in the source workbook before using it for project-only reporting.
- Review the live Building Analyst proof section at `https://robsonai.co.uk/building-analyst.html#workflow-proof`; next changes should be handled as a new bounded tranche.
- Monitor stale external search/social cache previews and recheck after crawlers have had more time to recrawl the live metadata.
- Keep GA4 disabled until Wayne approves analytics governance and a real Measurement ID.
- Decide whether to add launch assets such as app screenshots/App Store links only when the iOS app is ready to claim publicly.

### Later

- Improve conversion path beyond `mailto:` once the hidden site is ready for public launch.
- Prepare a GA4 enablement pack only after Wayne approves a real Measurement ID and analytics governance.
- Add CI or pre-handoff hooks for measurement smoke, HTML validation, accessibility, and tracker update checks.
- Run a full browser/mobile QA and visual polish pass before public launch.

### Post-PRD full app review task series

Run this only after the relevant current-state PRD is complete and accepted. For this website repo, do not let this review expand the current public-launch-readiness tranche unless Wayne explicitly approves a new tranche.

1. Confirm the PRD is complete enough to govern review: current scope, target users, architecture, risks, privacy/security, deployment path, validation commands, in-scope next work, and out-of-scope items.
2. Define the review outcome in plain English: problem, users, success criteria, constraints, and explicit non-goals.
3. Ask Codex/agents to analyse first with no code changes: implementation shape, risks, gaps, and recommended remediation plan.
4. Challenge the plan with independent roles where useful: senior UX designer, product/domain lead, senior front-end engineer, security/QA reviewer, and devil's advocate.
5. Run user-journey review across the current product surface.
6. Run UI/UX and visual consistency review against Robson AI brand rules and existing design behaviour.
7. Run governance/domain review for relevant workflows, audit needs, terminology, compliance, and release constraints.
8. Run data model and integration review where the app has persisted data, APIs, tenancy, or workflow handoffs.
9. Run security review for authentication, authorisation, tenant isolation, secrets, API exposure, injection risks, dependency risks, and audit trail gaps.
10. Run accessibility, mobile, browser, and responsive QA review.
11. Run cross-workspace or cross-product consistency review where the app spans modules such as service desk, work orders, projects, compliance, governance, WAIS, Building Analyst, or BuildScan.
12. Convert findings into a ranked remediation plan: critical, high, medium, low, parked.
13. Execute only approved, bounded Codex implementation tranches with rollback notes and validation commands.
14. Validate after each tranche with build, lint, tests, accessibility, mobile, browser, security, and regression checks appropriate to the repo.
15. Hold a release gate: Wayne reviews product logic, UX, security, data governance, domain fit, public claims, and deployment timing before merge or production release.

## 4. Parking Lot

| Date | Idea | Source | Suggested timing | Notes |
| --- | --- | --- | --- | --- |
| 2026-05-30 | Embedded contact form or booked intro CTA | UI/UX review | later | Useful conversion improvement, but not part of documentation baseline. Requires privacy, spam, and Netlify Forms or backend decision. |
| 2026-05-30 | Production GA4 Measurement ID enablement | Existing QA docs | later | Analytics is currently intentionally inert. Needs explicit approval and privacy check. |
| 2026-05-30 | Public launch of fuller website | Release handover | next | Plan exists in `docs/codex/PUBLIC_FULL_SITE_LAUNCH_PLAN.md`; execution should wait until iOS app/screenshot/advertising readiness is approved. |
| 2026-05-30 | Secret rotation and env-var based preview auth | Codex audit | done | Edge Function now reads Netlify env vars; password was rotated into Keychain; Netlify vars are set for `production`, `deploy-preview`, and `branch-deploy`; live alias preview verified. |
| 2026-05-30 | Weekly website health automation | Capability checklist | later | Could run smoke/QA reminders, but only after the QA command is back to passing. |
| 2026-05-31 | Post-PRD full app review workflow | Wayne/process note | after relevant PRD completion | Use the task series in section 3 to run analysis-first, multi-role, security, UX, governance, QA, and release-gate review before broad implementation. |
| 2026-06-01 | Codex web development/design skill library expansion | Wayne skill request | done | Created 28 focused local Codex skills under `~/.codex/skills` for frontend, web design, backend, full-stack, and code-quality work. This is tooling support and does not reopen the WWDC-held website launch tranche. |

## 5. Decisions

| Date | Decision | Reason | Tradeoff | Revisit trigger |
| --- | --- | --- | --- | --- |
| 2026-05-30 | PRD is current-state, not a fantasy rewrite | Wayne explicitly requested baseline documentation only | Future features are parked rather than designed now | When Wayne approves implementation tranche |
| 2026-05-30 | Public root remains documented as holding page | `netlify.toml` rewrites `/` to `holding.html` | Fuller website remains hidden from public root | Public launch planning |
| 2026-05-30 | Fresh smoke failure is recorded, not fixed | This tranche is documentation/audit only | Repo remains with a failing local smoke command | First implementation tranche |
| 2026-05-30 | Existing docs remain source documents | Avoid overwriting useful handover and QA content | Codex baseline links to, rather than replaces, older docs | If docs become inconsistent |
| 2026-05-30 | Codex handoffs must state Wayne's next action or ask for a decision | Wayne requested clearer closeout guidance | Final messages should not leave the next step implicit | If Wayne changes preferred handoff style |
| 2026-05-30 | Keep `proof_interaction` in the governed analytics event contract | Existing docs define it as required and the smoke harness validates it | Restored a small proof CTA in the hidden fuller-site credibility section | If analytics governance changes |
| 2026-05-30 | Preview-auth credentials must come from Netlify env vars | Hard-coded credentials are a security/release risk | Deploys now require `ROBSON_PREVIEW_USERNAME` and `ROBSON_PREVIEW_PASSWORD` to be configured | Before next deploy |
| 2026-05-30 | Use standard Netlify site env vars on current plan | Netlify granular env scopes such as `--scope runtime` are Pro-and-above and did not persist on this account | Env vars are context-scoped to `production` and `deploy-preview`, not granular runtime-scoped | If Netlify plan/features change |
| 2026-05-30 | CLI alias preview deploys use `branch-deploy` context | Netlify deploy metadata reported `context: branch-deploy` for alias `preview-auth-check` | Preview-auth vars must also exist in `branch-deploy` for CLI preview verification | If moving to GitHub PR deploy previews |
| 2026-05-30 | Edge Function reads `Netlify.env.get()` directly first | Netlify docs show direct `Netlify.env.get()` for Edge runtime; local fallback remains for tests | Slightly broader env-reader fallback logic | If Netlify Edge runtime API changes |
| 2026-05-30 | Stage and commit scoped baseline/auth files only | Wayne approved `stage-and-commit-baseline-auth-docs`; repo still has broad unrelated dirty website/UI state | This commit intentionally leaves broader dirty site changes unstaged | When Wayne approves a wider release commit |
| 2026-05-30 | Keep dirty website/UI files out of baseline PR | Remaining dirty files form a broad website release candidate | Requires separate review/validation tranche before staging | If Wayne approves `website-release-candidate-review` |
| 2026-05-30 | Consent banner must not cover first-viewport hero text | Browser QA found desktop overlap on hidden fuller-site hero and holding visual | Applied targeted CSS placement fixes and stylesheet cache-bump | Before staging release candidate |
| 2026-05-30 | Stage and commit validated release candidate as a separate commit | Wayne approved option 1 after the release-candidate review passed | PR #1 will contain both baseline/auth work and the website release candidate; production deploy remains separate | Before marking PR ready or launching production |
| 2026-05-30 | Full public website launch waits for iOS app readiness | Wayne clarified the current public front end should say the site is getting ready while the protected fuller site is ready for launch timing | Avoids advertising or screenshot-led public launch before the iOS app is live | When app live status, screenshots, and links are ready |
| 2026-05-31 | Use agents/background threads when useful | Wayne asked that the tracker remember agents should be used where required | Adds a lightweight decision point before larger work; avoid using agents for tiny edits where setup overhead is higher than benefit | At the start of serious tranches, QA sweeps, research, or parallel implementation |
| 2026-05-31 | Queue full app review after PRD completion | Wayne asked whether the AI delivery process should be used for full review or tracked as tasks | Keeps the review governed and sequenced after the PRD instead of expanding current scope | When the relevant PRD is accepted and Wayne approves a review tranche |
| 2026-05-31 | Keep launch-readiness as preview, not PR/production launch yet | Wayne selected option 1 after review of next-step choices | The fuller site remains ready to inspect without changing production or opening launch pressure before app materials are ready | When iOS app status, approved screenshots, and App Store/public link timing are ready |
| 2026-05-31 | Treat website and iOS work as wait-until-WWDC | Wayne clarified both this website thread and the iOS chat are at the WWDC wait stage | Avoids premature public launch, screenshots, claims, or platform decisions before Apple announcements are known | After WWDC 2026 begins on June 8, 2026, or when Wayne explicitly reopens the scope |
| 2026-06-08 | Refresh website positioning after WWDC26 without implementation scope | Wayne selected option 1 after the post-WWDC briefing | Aligns public/preview copy with Apple-native/device-first Building Analyst direction while avoiding overclaims about unreleased or unimplemented Apple features | When app screenshots, App Store link, or implemented Apple Intelligence features are ready to reference publicly |
| 2026-06-18 | App screenshots/App Store links are conditional launch assets | Independent review found the old launch plan could unnecessarily block a truthful professional/product-direction website launch | Website can launch without app-store claims if copy stays honest; screenshots/links remain required if app availability is claimed or shown | When Wayne decides whether launch is professional/product-direction only or app-availability led |
| 2026-06-18 | Open launch-readiness PR as draft | Wayne asked Codex to continue after PR was recommended | Formalizes review without implying merge or production launch approval | When Wayne decides to mark ready for review, merge, or hold |
| 2026-06-18 | Mark PR #2 ready for review | Wayne approved the recommended ready-for-review step | Makes the validated branch formally reviewable while keeping merge and production launch as separate approvals | When Wayne approves merge, final polish, hold, or production launch tranche |
| 2026-06-18 | Do not merge PR #2 without explicit production launch approval | Wayne selected merge-readiness but also previously required no production deploy without separate approval; Netlify deploys from `main` | PR #2 remains open and ready instead of being merged | When Wayne explicitly approves production launch merge/deploy, or chooses to hold the preview |
| 2026-06-18 | Hold production launch after preflight | Browser QA found a launch-blocking visual contrast issue on `who-its-for.html` despite automated checks passing | Requires a small CSS fix and rerun before merge/deploy | When Wayne approves the contrast-fix tranche |
| 2026-06-20 | Clear `who-its-for.html` contrast blocker | Wayne approved the recommended contrast-fix-and-retest tranche | The only known visual launch blocker is resolved; production launch still requires explicit approval | When Wayne approves merge/deploy or requests another hold |
| 2026-06-20 | Launch the full public site | Wayne approved `production-launch-merge-and-verify` | PR #2 was merged to `main`, triggering Netlify production deploy | If rollback, urgent content issue, or post-launch QA finding appears |

## 6. Risks And Watch Items

| Risk | Severity | Owner | Mitigation | Status |
| --- | --- | --- | --- | --- |
| Dirty working tree with many modified/untracked files | high | Wayne/Codex | Merged and deployed through PR #1. Continue using `git status` and scoped branches/worktrees for future tranches. | closed |
| `npm run qa:measurement:local` currently fails | high | Codex | Fixed in local tranche; keep command passing before deploy. | closed |
| Hard-coded preview Basic Auth credential in `netlify/edge-functions/preview-auth.js` | high | Wayne/Codex | Code now reads Netlify env vars. Password rotated into Keychain and Netlify vars verified in relevant contexts. | closed |
| No root `README.md`, `AGENTS.md`, or `CLAUDE.md` in this repo | medium | Codex | Root `README.md` and `AGENTS.md` are now deployed; add `CLAUDE.md` only if Wayne wants Claude-specific instructions. | mostly closed |
| Hidden/full website and public holding page can drift | medium | Codex | Keep release notes, robots/sitemap, auth, and QA harness aligned. | monitoring |
| Merging PR #2 likely publishes the fuller site | high | Wayne/Codex | Treat merge approval and production launch approval as the same release gate unless Netlify production auto-deploy is paused or changed. | active |
| `who-its-for.html` hero/card contrast is launch-blocking | high | Codex | Fixed in `styles.css`; local and PR-preview desktop/mobile checks pass. | closed |
| External search result may temporarily show old holding-page snippet | low | Wayne/Codex | Live metadata, sitemap, robots, and holding-page noindex are correct; monitor recrawl and optionally use Search Console URL inspection if available. | monitoring |
| Professional redesign is local/uncommitted | medium | Wayne/Codex | Committed in `c0863348c7b036f02bcbe0144372c85a17b5424b`, pushed to `main`, and deployed to production. | closed |
| Motion polish could distract or harm accessibility/performance | medium | Codex | Kept motion subtle, dependency-free, pointer-fine only, and disabled under `prefers-reduced-motion` and coarse-pointer mobile contexts; validate with Playwright and Lighthouse before deploy. | monitoring |
| Spreadsheet-derived dashboard could expose project/business data if published | high | Wayne/Codex | Kept dashboard and support files under ignored `output/`; do not move into public root, commit, push, or deploy without a privacy/release review. | active |
| Display-font redesign could hurt readability or mobile fit | medium | Codex | Used the already bundled local Fraunces font only for major headings, tightened homepage hero scale, added Browser desktop/mobile checks, and kept Manrope for body/UI text. | monitoring |
| Email-only conversion path may lose enquiries | medium | Wayne/Codex | Parked for conversion tranche; requires privacy/spam decision. | parked |
| GA4 Measurement ID is empty | low | Wayne | Intentional until analytics approval. Keep measurement QA in place. | monitoring |

## 7. Access Needed

| Access/tool | Why needed | Who enables | Status | Notes |
| --- | --- | --- | --- | --- |
| Netlify account/project access | Preview/prod deploys, env vars, deploy status | Wayne | enabled for read-only checks | CLI and connector can read project `robson-ai-website`; deploy/write actions still require Wayne approval. |
| Netlify environment variables | Supply preview auth credentials at deploy/runtime | Wayne/Codex | set for release contexts | CLI set `ROBSON_PREVIEW_USERNAME` and `ROBSON_PREVIEW_PASSWORD` as secrets in `production`, `deploy-preview`, and `branch-deploy`; absent from `dev` by design. |
| GitHub PR/CI workflow | Safer review, branch publishing, future PR checks | Wayne/Codex | available locally, use with approval | `gh auth status` shows an authenticated GitHub CLI account. |
| Browser / Playwright QA | Responsive and interaction QA for website changes | Codex | available | Local Playwright dependency exists and smoke command launched Chromium. |
| GA4 Measurement ID | Enable production analytics | Wayne | not needed now | Analytics is intentionally inert until approved. |

## 8. Best Tooling Setup

Detailed recommendations live in `docs/codex/CAPABILITY_AUDIT.md`.

| Capability | Status | Why it helps | Setup/action | What Codex can do unaided |
| --- | --- | --- | --- | --- |
| MCP servers | enabled/recommended | GitHub, Linear, OpenAI docs, browser/node, and Docker MCP are configured. | Use read-only first; ask before account-wide or write actions. | Inspect repo/PR state, use docs, and automate browser where appropriate. |
| Hooks | recommended | Prevent handoff without tracker update or smoke evidence. | Add low-risk local hooks after QA passes. | Run repeatable checks before closeout. |
| Connections | recommended | GitHub and Netlify are the useful account-backed services for this repo. | Wayne approves account reads/writes when needed. | Inspect PR/deploy status and prepare releases. |
| Git | available | Dirty tree needs discipline and branch isolation. | Use `git status` before edits; use worktrees for large changes. | Track scoped diffs, commit/PR when approved. |
| Environments | required before release | Preview auth secrets must not remain hard-coded. | Use Netlify env vars; keep secrets out of chat. | Validate local fallback and deploy config after approval. |
| Worktrees | recommended | Main checkout is dirty. | Create `codex/<tranche>` worktree for larger implementation. | Work safely without disturbing current dirty files. |
| Browser | available/recommended | Needed for local site QA, mobile checks, console/network evidence. | Start local static server or use QA scripts. | Capture screenshots, console/network issues, and interaction evidence. |
| Computer use/Appshots | optional | Useful if Wayne needs Codex to inspect a UI state outside repo files. | Wayne attaches an appshot or approves desktop interaction. | Diagnose visual/state issues not visible from files. |
| Skills/plugins | available/recommended | Robson AI brand, web app, Netlify, GitHub, security, validation skills all apply. | Use relevant skill per tranche. | Follow consistent project workflows. |
| Agents/background threads | recommended when useful | Useful for parallel QA, accessibility/security sweeps, research, code review, or independent implementation subtasks. | Wayne authorizes background threads/agents for split work when a tranche would benefit. | Run independent audits, compare findings, or progress split tasks while main work continues. |
| Automations | optional | Useful once QA is passing. | Wayne approves schedule and scope. | Weekly smoke/release-readiness reminders or checks. |

## 9. Capability Refresh Log

| Date | Checked | Useful changes found | Recommendation |
| --- | --- | --- | --- |
| 2026-05-30 | Repo files, git, package scripts, Netlify config, Codex config, MCP list, tool search, supplied checklist | Yes: Browser, Netlify, GitHub, automations, multi-agent tools, and relevant skills/plugins are available. QA currently fails. | Use Browser/Playwright for frontend QA, Netlify only with approval, worktree for next implementation, and repair smoke first. |

## 10. Validation Evidence

| Date | Command/check | Result | Notes |
| --- | --- | --- | --- |
| 2026-05-30 | `git status --short` | dirty | Modified root files and many untracked files, including `docs/`. No cleanup performed. |
| 2026-05-30 | `rg --files ...` and `find docs -maxdepth 4 -type f` | pass | No existing `docs/codex/TRACKER.md` or usable PRD found before this tranche. |
| 2026-05-30 | `npm run qa:measurement:local` | fail | Fails in fake-ID contract flow: expected proof CTA not found. Artifact directory started at `output/measurement/smoke-2026-05-30T10-09-12-189Z`. |
| 2026-05-30 | `codex mcp list` | pass | MCP servers enabled: `MCP_DOCKER`, `claude`, `node_repl`, `xcodebuildmcp`, `github`, `linear`, `openaiDeveloperDocs`. |
| 2026-05-30 | `npx --no-install netlify --version` | pass | Netlify CLI resolved as `netlify/26.0.2`. No deploy performed. |
| 2026-05-30 | `node --test scripts/preview-auth-smoke.mjs` before fix | fail | Red test proved env-supplied preview credentials were not accepted by the old hard-coded auth logic. |
| 2026-05-30 | `npm run qa:preview-auth` | pass | 3/3 tests pass: env credentials accepted, missing env fails closed, wrong credentials rejected. |
| 2026-05-30 | `npm run qa:measurement:local` | pass | Artifact: `output/measurement/smoke-2026-05-30T10-27-55-701Z`. Required event set emitted exactly. |
| 2026-05-30 | `npm run qa:measurement:evidence` | pass | Artifact: `output/measurement/evidence-2026-05-30T10-28-09-186Z`. HTML validate, axe, smoke, Lighthouse completed. |
| 2026-05-30 | Browser local check at `http://127.0.0.1:8123/index.html#credibility` | pass | Proof CTA was present, linked to `./building-analyst.html`, navigated correctly, and browser console had no errors. |
| 2026-05-30 | `npm run qa:measurement:local` final verification | pass | Artifact: `output/measurement/smoke-2026-05-30T10-32-27-919Z`. |
| 2026-05-30 | `git diff --check` | pass | No whitespace errors reported. |
| 2026-05-30 | scoped hard-coded credential search | pass | No old hard-coded preview credential pattern found in scoped files. Search pattern omitted from docs to avoid preserving credential fragments. |
| 2026-05-30 | `npx --no-install netlify status` | pass | CLI authenticated as Wayne Robson and linked to `robson-ai-website`, project id `4ab53a28-c28c-4e7d-b7ca-93960fc4c39f`. |
| 2026-05-30 | Netlify connector `get-user` / `get-project` | pass | Connector read access works; project current deploy is `ready`; no deploy/write action performed. |
| 2026-05-30 | Netlify CLI env presence check | missing vars | `ROBSON_PREVIEW_USERNAME` and `ROBSON_PREVIEW_PASSWORD` missing in `dev`, `production`, `deploy-preview`, and `branch-deploy` contexts. Secret values were not printed. |
| 2026-05-30 | Netlify CLI env presence re-check | missing vars | User asked to verify after setup. Required preview-auth env vars were still missing in `dev`, `production`, `deploy-preview`, and `branch-deploy`. Secret values were not printed. |
| 2026-05-30 | `npx --no-install netlify env:set ... --context production/deploy-preview --secret --force` | pass | Standard site env vars set for `ROBSON_PREVIEW_USERNAME` and `ROBSON_PREVIEW_PASSWORD`. Granular `--scope runtime` was not used because it did not persist on the current Netlify plan. Secret password was generated locally and not printed. |
| 2026-05-30 | `npx --no-install netlify env:list --json --context production/deploy-preview/dev/branch-deploy` | pass | Required vars present in `production` and `deploy-preview`; absent in `dev` and `branch-deploy`. Secret values were not printed. |
| 2026-05-30 | `security add-generic-password -U ...` | pass | Rotated preview credential stored in macOS Keychain under service `Robson AI Website Preview Auth`. Credential values were not printed. |
| 2026-05-30 | `npm run qa:preview-auth` | pass | Local Edge Function auth smoke still passes after direct `Netlify.env.get()` reader update. |
| 2026-05-30 | `npm run qa:measurement:local` | pass | Pre-deploy local measurement gate passed. Artifact: `output/measurement/smoke-2026-05-30T11-15-17-945Z`. |
| 2026-05-30 | `npx --no-install netlify deploy --context branch-deploy --alias preview-auth-check --json` | pass | Non-production alias deploy ready: `https://preview-auth-check--robson-ai-website.netlify.app`, deploy id `6a1ac942b9543e1a0abef940`, deploy context `branch-deploy`, Edge Function present. |
| 2026-05-30 | Live auth matrix on alias preview | pass | `/index.html`, `/building-analyst.html`, `/who-its-for.html`, and `/privacy.html` return `401` without/wrong credentials and `200` with Keychain credential. `/` remains public holding page with `200`. |
| 2026-05-30 | `git diff --check` | pass | No whitespace errors reported after tracker/release/auth updates. |
| 2026-05-30 | Dirty website/UI assessment | pass | `docs/codex/DIRTY_RELEASE_ASSESSMENT.md` recommends a separate `website-release-candidate-review` tranche and keeps broad dirty files out of the baseline PR. |
| 2026-05-30 | Draft GitHub PR creation | pass | PR #1 created for `codex/professionalize-website`: `https://github.com/LoganRobson70/robson-ai-solutions-website/pull/1`. |
| 2026-05-30 | Asset reference scan | pass | Checked 25 local URL references across release HTML/CSS/JS; no missing local asset references found. |
| 2026-05-30 | `npx html-validate --rule doctype-style:off --rule void-style:off holding.html index.html preview.html privacy.html building-analyst.html who-its-for.html` | pass | Standalone HTML validation passed for release candidate pages. |
| 2026-05-30 | Browser desktop/mobile QA | pass | In-app Browser checked holding root and hidden fuller-site page. Fixed consent-banner overlap and mobile horizontal overflow, then rechecked desktop/mobile screenshots and console logs. |
| 2026-05-30 | `npm run qa:measurement:local` after release fixes | pass | Artifact: `output/measurement/smoke-2026-05-30T14-08-10-518Z`. |
| 2026-05-30 | `npm run qa:measurement:evidence` after release fixes | pass | Artifact: `output/measurement/evidence-2026-05-30T14-08-22-954Z`. Lighthouse median: performance 80, accessibility 100, best practices 100, SEO 66. |
| 2026-05-30 | `npx --no-install netlify deploy --context branch-deploy --alias release-candidate-check --json` | pass | Non-production alias deploy ready: `https://release-candidate-check--robson-ai-website.netlify.app`, deploy id `6a1aef9300af4ff50eff277f`. |
| 2026-05-30 | Live release-candidate auth/root matrix | pass | `/` public holding page returned `200` with no hidden links; hidden routes returned `401` without/wrong credentials and `200` with Keychain credential. |
| 2026-05-30 | Live release-candidate browser root check | pass | Desktop and mobile root checks had correct title/H1, no hidden links, no console errors/warnings, and no horizontal overflow. |
| 2026-05-30 | `git diff --cached --check` before release-candidate commit | pass | Explicitly staged release-candidate files only; no whitespace errors reported. |
| 2026-05-30 | staged secret-pattern scan before release-candidate commit | pass | No preview password, generated-placeholder password, or obvious committed secret assignment found in the staged diff. |
| 2026-05-30 | GitHub PR Netlify deploy-preview for commit `9e51501` | fail | Netlify reported build-stage exit code 2 and deploy validation matched the committed preview username value in docs. Password was not printed. |
| 2026-05-30 | Docs credential hygiene fix | pass | Removed the literal preview username value from repo docs; Keychain service name remains documented. |
| 2026-05-30 | `npx --no-install netlify build` after docs credential fix | pass | Local Netlify build still packages the `preview-auth` Edge Function successfully. |
| 2026-05-30 | GitHub PR Netlify deploy-preview after docs credential fix | pass | Official preview is ready at `https://deploy-preview-1--robson-ai-website.netlify.app`. |
| 2026-05-30 | Live official PR preview auth/root matrix | pass | `/` returned `200` with no hidden links; hidden routes returned `401` without/wrong credentials and `200` with the Keychain credential. |
| 2026-05-30 | PR #1 metadata/diff/check review | pass | PR has 42 changed files, 6 commits before tracker closeout, and a passing Netlify deploy-preview check. |
| 2026-05-30 | PR #1 title/body update | pass | PR title/body now describe baseline docs, preview auth, website release candidate, validation, and release boundaries. |
| 2026-05-30 | PR #1 ready-for-review update | pass | PR #1 is no longer draft and the Netlify deploy-preview check is still passing. |
| 2026-05-30 | Production preflight `npm run qa:preview-auth` | pass | Local Edge Function auth smoke passed immediately before merge. |
| 2026-05-30 | Production preflight env-var presence check | pass | `ROBSON_PREVIEW_USERNAME` and `ROBSON_PREVIEW_PASSWORD` present for Netlify `production`; values were not printed. |
| 2026-05-30 | Production preflight `npm run qa:measurement:local` | pass | Artifact: `output/measurement/smoke-2026-05-30T15-29-27-902Z`. |
| 2026-05-30 | Production preflight HTML validation | pass | `holding.html`, `index.html`, `preview.html`, `privacy.html`, `building-analyst.html`, and `who-its-for.html` passed. |
| 2026-05-30 | Production preflight `npm run qa:measurement:evidence` | pass | Artifact: `output/measurement/evidence-2026-05-30T15-29-37-870Z`. Lighthouse median: performance 83, accessibility 100, best practices 100, SEO 66. |
| 2026-05-30 | Production preflight `npx --no-install netlify build` | pass | Production-context Netlify build packaged the `preview-auth` Edge Function. |
| 2026-05-30 | PR #1 merge | pass | Merged to `main` with merge commit `a3ffe597cad39e76f7cdc9d6ee9c3dea3995253a`. |
| 2026-05-30 | Netlify production deploy | pass | Deploy `6a1b02a24f408c00080a2463` ready for `main` at merge commit `a3ffe59`; Edge Function present. |
| 2026-05-30 | Production route/auth matrix | pass | `/` returned `200` with no hidden links; hidden routes returned `401` without/wrong credentials and `200` with the Keychain credential. |
| 2026-05-30 | Production browser smoke | pass | Public root desktop/mobile had no console issues or horizontal overflow; authenticated `index.html` loaded with no console issues when using HTTP credentials. |
| 2026-05-30 | Post-launch GitHub/Netlify/local state check | pass | PR #1 is merged; latest production deploy `6a1b0359c4363b0008ce0a09` is ready for commit `a7afc4d`; local branch is clean on `main`. |
| 2026-05-30 | Post-launch production route/auth matrix | pass | `/`, `/robots.txt`, and `/sitemap.xml` are public; hidden routes require preview auth and return `200` with Keychain credential. |
| 2026-05-30 | Post-launch browser smoke | pass | Public root desktop/mobile and authenticated `index.html` had no console issues and no horizontal overflow. |
| 2026-05-30 | Public full-site launch plan | pass | Created `docs/codex/PUBLIC_FULL_SITE_LAUNCH_PLAN.md`; no route/auth changes or launch performed. |
| 2026-05-30 | Launch-readiness local route changes | pass | On branch `codex/public-full-site-launch-readiness`, `/` serves the fuller site, launch pages are public, holding is noindex fallback, and robots/sitemap are launch-ready. |
| 2026-05-30 | Launch-readiness local QA | pass | `git diff --check`, HTML validation, `npm run qa:preview-auth`, `npm run qa:measurement:local`, `npm run qa:measurement:evidence`, and `npx --no-install netlify build` passed. Evidence artifact: `output/measurement/evidence-2026-05-30T16-51-27-647Z`. |
| 2026-05-30 | Launch-readiness local browser smoke | pass | Desktop/mobile `/`, desktop `building-analyst.html`, mobile `who-its-for.html`, and mobile `privacy.html` had no console issues and no horizontal overflow. |
| 2026-05-30 | Launch-readiness Netlify preview deploy | pass | Non-production alias preview ready at `https://public-launch-readiness--robson-ai-website.netlify.app`, deploy `6a1b167adff97530bcd449b4`. |
| 2026-05-30 | Launch-readiness preview route matrix | pass | Public launch pages returned `200` and `index, follow`; `holding.html` returned `200` and `noindex, nofollow`. |
| 2026-05-30 | Launch-readiness preview smoke/browser | pass | `QA_BASE_URL=https://public-launch-readiness--robson-ai-website.netlify.app npm run qa:measurement:preview` passed. Preview desktop/mobile browser checks had no console issues or horizontal overflow. |
| 2026-05-31 | Tracker agent-use rule | pass | Added a standing decision to consider agents/background threads for serious tranches, parallel QA, independent review, research, or split implementation tasks. |
| 2026-05-31 | Tracker post-PRD review workflow | pass | Added a post-PRD full app review task series covering analysis, multi-role challenge, UX, governance, data, security, accessibility/mobile, remediation, validation, and release gate. |
| 2026-05-31 | Tracker launch-readiness hold decision | pass | Recorded Wayne's decision to keep the launch-readiness branch as a preview until iOS/app launch materials are ready. |
| 2026-05-31 | Tracker WWDC wait gate | pass | Recorded Wayne's clarification that both website launch-readiness and the related iOS app thread should wait until WWDC. WWDC 2026 date checked against Apple's newsroom: June 8-12, 2026. |
| 2026-06-01 | `npm run qa:preview-auth` | pass | 3/3 preview-auth smoke tests passed. |
| 2026-06-01 | `npm run qa:measurement:local` | pass | Artifact: `output/measurement/smoke-2026-06-01T06-04-17-890Z`. Route matrix, consent flows, and required event contract passed. |
| 2026-06-01 | `npm run qa:measurement:evidence` | pass | Artifact: `output/measurement/evidence-2026-06-01T06-04-26-480Z`. HTML validation, axe checks, smoke, and Lighthouse runs completed. |
| 2026-06-01 | `git diff --check` | pass | No whitespace errors after website-only tracker update. |
| 2026-06-01 | `quick_validate.py` across generated local Codex skills | pass | 28/28 generated skills validated using `/usr/bin/python3`; default Homebrew and Codex runtime Python lacked `PyYAML`, so no package installation was performed. |
| 2026-06-08 | post-WWDC wording scan | pass | Public pages no longer contain stale `surveying-led AI software`, `AI-led`, `AI-assisted`, or `AI-supported` phrasing. Remaining BYO/vendor mentions are narrative guardrails only. |
| 2026-06-08 | `git diff --check` | pass | No whitespace errors after post-WWDC copy refresh. |
| 2026-06-08 | `npx html-validate --rule doctype-style:off --rule void-style:off holding.html index.html preview.html privacy.html building-analyst.html who-its-for.html` | pass | HTML validation passed for launch-readiness pages. |
| 2026-06-08 | `npm run qa:preview-auth` | pass | 3/3 preview-auth smoke tests passed. |
| 2026-06-08 | `npm run qa:measurement:local` | pass | Artifact: `output/measurement/smoke-2026-06-08T20-36-10-711Z`. Contact mailto now uses professional surveying software/building intelligence wording. |
| 2026-06-08 | `npm run qa:measurement:evidence` | pass | Artifact: `output/measurement/evidence-2026-06-08T20-36-21-494Z`. Lighthouse median: performance 94, accessibility 100, best practices 100, SEO 100. |
| 2026-06-08 | Local Playwright browser smoke | pass | Desktop and mobile checks for `/`, `/building-analyst.html`, and `/who-its-for.html` found no console warnings/errors, no horizontal overflow, and no stale generic AI phrases in visible body text. |
| 2026-06-18 | Independent agent copy/release-risk review | pass | Read-only agent found stale privacy footer/PRD/release wording, one over-strong Apple-native phrase, a narrow Building Analyst H1, and an over-rigid App Store/screenshot gate. Findings were applied in scoped files. |
| 2026-06-18 | post-polish wording scan | pass | Public pages no longer contain stale `surveying-led AI software`, `AI-led`, `AI-assisted`, `AI-supported`, or `AI tools and practical software` phrasing. BYO/vendor mentions remain guardrails only. |
| 2026-06-18 | `git diff --check` | pass | No whitespace errors after agent-review polish. |
| 2026-06-18 | `npx html-validate --rule doctype-style:off --rule void-style:off holding.html index.html preview.html privacy.html building-analyst.html who-its-for.html` | pass | HTML validation passed for launch-readiness pages. |
| 2026-06-18 | `npm run qa:preview-auth` | pass | 3/3 preview-auth smoke tests passed. |
| 2026-06-18 | `npm run qa:measurement:local` | pass | Artifact: `output/measurement/smoke-2026-06-18T18-45-47-003Z`. Route matrix, consent flows, contact mailto and event contract passed. |
| 2026-06-18 | `npm run qa:measurement:evidence` | pass | Artifact: `output/measurement/evidence-2026-06-18T18-46-35-548Z`. Lighthouse median: performance 83, accessibility 100, best practices 100, SEO 100. |
| 2026-06-18 | Netlify non-production preview deploy | pass | Alias `https://public-launch-readiness--robson-ai-website.netlify.app`, deploy `6a343e07af7c92bd1d67c724`, state `ready`, context `branch-deploy`. Production unchanged. |
| 2026-06-18 | `QA_BASE_URL=https://public-launch-readiness--robson-ai-website.netlify.app npm run qa:measurement:preview` | pass | Artifact: `output/measurement/smoke-2026-06-18T18-51-50-890Z`. Public routes returned 200 and contact mailto uses professional surveying/building intelligence wording. |
| 2026-06-18 | Browser plugin live preview checks | pass | Browser opened live preview homepage, Building Analyst, and Privacy pages on desktop; homepage and Building Analyst were also checked at mobile width. Titles reflected updated post-WWDC positioning. |
| 2026-06-18 | GitHub draft PR creation | pass | Draft PR #2 opened: `https://github.com/LoganRobson70/robson-ai-solutions-website/pull/2`. Head `codex/public-full-site-launch-readiness`, base `main`, 16 changed files, 9 commits. |
| 2026-06-18 | `QA_BASE_URL=https://deploy-preview-2--robson-ai-website.netlify.app npm run qa:measurement:preview` | pass | GitHub PR Netlify deploy-preview smoke passed. Artifact: `output/measurement/smoke-2026-06-18T19-00-42-691Z`. |
| 2026-06-18 | PR #2 ready-for-review update | pass | PR #2 is no longer draft and remains open: `https://github.com/LoganRobson70/robson-ai-solutions-website/pull/2`. Netlify deploy-preview check passed at `https://deploy-preview-2--robson-ai-website.netlify.app`. |
| 2026-06-18 | PR #2 merge-readiness gate | guarded | PR #2 is open, not draft, and deploy-preview check passes. Merge was not performed because `main` is the Netlify production branch and PR #2 changes public launch routing. |
| 2026-06-18 | Production launch preflight automated gates | pass | `npm run qa:preview-auth`, `npm run qa:measurement:local`, HTML validation, `git diff --check`, `npm run qa:measurement:evidence`, and PR-preview measurement smoke passed. Latest artifacts: `output/measurement/smoke-2026-06-18T20-42-44-167Z`, `output/measurement/smoke-2026-06-18T20-43-01-777Z`, `output/measurement/evidence-2026-06-18T20-43-01-777Z`. Lighthouse median: performance 81, accessibility 100, best practices 100, SEO 100. |
| 2026-06-18 | Production unchanged check | pass | `https://robsonai.co.uk/` returned `200`; `https://robsonai.co.uk/index.html` returned `401` without credentials. No production deploy performed. |
| 2026-06-18 | Browser production launch preflight | no-go | Desktop/mobile route checks had no console errors, no horizontal overflow, correct page titles/descriptions/robots, and no stale AI claims. Launch blocked because `who-its-for.html` rendered dark navy H1 text over a dark hero background and white card headings over white cards. Source points to broad `body[data-page-type="who-its-for"] h1` and hero/card color overrides in `styles.css`. |
| 2026-06-20 | `who-its-for.html` contrast fix local checks | pass | Scoped CSS fix in `styles.css` restores white hero text and dark hero-card headings. Local computed checks passed on desktop 1280x720 and mobile 390x844; screenshots captured at `/tmp/robson-who-contrast-desktop-clean.png` and `/tmp/robson-who-contrast-mobile-clean.png`. |
| 2026-06-20 | Post-fix automated evidence | pass | `git diff --check`, HTML validation, `npm run qa:preview-auth`, `npm run qa:measurement:local`, and `npm run qa:measurement:evidence` passed. Latest artifacts: `output/measurement/smoke-2026-06-20T09-06-00-469Z`, `output/measurement/evidence-2026-06-20T09-06-22-235Z`. Lighthouse median: performance 83, accessibility 100, best practices 100, SEO 100. |
| 2026-06-20 | PR #2 deploy-preview post-fix checks | pass | Netlify deploy-preview passed after commit `afe0aba`; `QA_BASE_URL=https://deploy-preview-2--robson-ai-website.netlify.app npm run qa:measurement:preview` passed with artifact `output/measurement/smoke-2026-06-20T09-08-28-262Z`. Live preview computed checks pass on desktop and mobile: hero H1 `rgb(255, 255, 255)`, card heading `rgb(6, 19, 61)`, no horizontal overflow, no stale AI claims. |
| 2026-06-20 | Production unchanged check | pass | `https://robsonai.co.uk/` returned `200`; `https://robsonai.co.uk/index.html` returned `401` without credentials. No production deploy performed. |
| 2026-06-20 | PR #2 merge | pass | PR #2 merged to `main` at merge commit `d695eba11e2878840d31984ab9f1646e62dd3358`. |
| 2026-06-20 | Netlify production deploy | pass | Production deploy `6a3695c3b9eca200087f4c36` ready for commit `d695eba11e2878840d31984ab9f1646e62dd3358`; published at `2026-06-20T13:29:59.262Z`; secret scan reported no matches. |
| 2026-06-20 | Live production route/metadata check | pass | `/`, `/index.html`, `/building-analyst.html`, `/who-its-for.html`, `/privacy.html`, `/robots.txt`, and `/sitemap.xml` returned `200`. Public root title is `Robson Ai | Surveying software, evidence and building intelligence`. Robots and sitemap are public. |
| 2026-06-20 | Live production measurement smoke | pass | `QA_BASE_URL=https://robsonai.co.uk npm run qa:measurement:preview` passed. Artifact: `output/measurement/smoke-2026-06-20T13-30-51-416Z`. Consent decline/accept flows, contact mailto, route matrix, and no-GA-with-empty-ID checks passed. |
| 2026-06-20 | Live production rendered checks | pass | Desktop `/` and `/who-its-for.html`, mobile `/building-analyst.html` and `/privacy.html` had correct titles/H1s, `index, follow`, no console warnings/errors, no horizontal overflow, no framework overlay, and no stale AI claims. `who-its-for.html` live contrast passed: hero H1 `rgb(255, 255, 255)`, hero-card heading `rgb(6, 19, 61)`. |
| 2026-06-20 | Post-launch Netlify deploy observation | pass | Latest production deploy `6a36970484e43f000821454d` is `ready` for commit `8cc0501ff224e749a727c7132b656f95204ef739`; secret scan reported zero standard and enhanced matches. |
| 2026-06-20 | Post-launch live route/metadata/crawlability observation | pass | `/`, `/index.html`, `/building-analyst.html`, `/who-its-for.html`, and `/privacy.html` returned `200` with correct titles, descriptions, canonicals, `index, follow`, Open Graph image, Twitter card metadata, and no stale AI/provider wording matches. `robots.txt`, `sitemap.xml`, sitemap URLs, and the OG image all returned `200`. |
| 2026-06-20 | Post-launch measurement/contact observation | pass | `QA_BASE_URL=https://robsonai.co.uk npm run qa:measurement:preview` passed. Artifact: `output/measurement/smoke-2026-06-20T17-11-22-647Z`. Consent decline/accept, copy email feedback, contact `mailto:`, route matrix, and no-GA-with-empty-ID checks passed. |
| 2026-06-20 | Post-launch rendered browser observation | pass | Playwright checked desktop `/` and `/who-its-for.html`, mobile `/building-analyst.html` and `/privacy.html`. No console warnings/errors, no horizontal overflow, `index, follow`, correct titles/H1s, and no stale wording matches. Artifact: `output/playwright/post-launch-2026-06-20T17-11-45-326Z`. |
| 2026-06-20 | Post-launch headers/link/fallback observation | pass | Live HTML routes return security headers `nosniff`, `DENY`, strict referrer policy, and disabled camera/geolocation/microphone permissions. `/preview.html` redirects to `/`. `/holding.html` remains accessible as a fallback but is `noindex, nofollow`, and internal links returned `200`. |
| 2026-06-20 | External search cache observation | watch | External search still surfaced an old holding-page snippet for `robsonai.co.uk` shortly after launch. Live site metadata/sitemap/robots are correct, so this is treated as a cache/recrawl watch item rather than a code failure. |
| 2026-06-20 | Interactive polish static checks | pass | `git diff --check`, HTML validation for all public pages, `npm run qa:preview-auth`, and stale wording scan passed. The scan found no `surveying-led AI software`, `AI-led`, `AI-assisted`, `AI-supported`, `BYO API key`, `bring your own API`, `generic chatbot`, or `surveying-led assessment` matches in public pages/scripts/styles. |
| 2026-06-20 | Interactive polish measurement smoke | pass | `npm run qa:measurement:local` passed. Artifact: `output/measurement/smoke-2026-06-20T19-42-57-759Z`. Route matrix, consent flows, no-GA-with-empty-ID checks, contact mailto, and required analytics event contract passed. |
| 2026-06-20 | Interactive polish rendered interaction QA | pass | Playwright verified the new homepage workflow finder and Building Analyst workflow lens on desktop and mobile. Click and keyboard tab changes updated visible panels and ARIA state. No console warnings/errors, no stale wording matches, and no horizontal overflow. Final artifact: `output/playwright/interactive-polish-final-2026-06-20T19-35-40-195Z`; mobile header recheck artifact: `output/playwright/interactive-mobile-header-2026-06-20T19-37-46-319Z`. |
| 2026-06-20 | Interactive polish accessibility/evidence suite | pass | `npm run qa:measurement:evidence` passed after fixing `tabpanel` element semantics, consent-banner landmark labelling, and reveal-animation contrast impact. Artifact: `output/measurement/evidence-2026-06-20T19-42-57-901Z`. Axe: 0 violations on home, index, privacy, Building Analyst, and who-it-fits. Lighthouse median: performance 80, accessibility 100, best practices 100, SEO 100. |
| 2026-06-21 | Professional redesign static checks | pass | `git diff --check`, HTML validation for all public pages, `npm run qa:preview-auth`, and stale-claim scan passed. The scan found no negative `letter-spacing`, BYO API, generic chatbot, or stale AI-provider/product-positioning matches in edited public files. |
| 2026-06-21 | Professional redesign rendered QA | pass | Playwright checked homepage and Building Analyst first viewports plus mobile workflow/lens interactions. No console warnings/errors, no framework overlay, no horizontal overflow, no clipped text, and interactive tabs updated the visible panels. Main artifact: `output/playwright/professional-redesign-final-2026-06-21T08-34-51-027Z`; Building Analyst compactness recheck: `output/playwright/professional-redesign-ba-check-2026-06-21T08-41-04-107Z`. |
| 2026-06-21 | Professional redesign measurement smoke | pass | `npm run qa:measurement:local` passed. Artifact: `output/measurement/smoke-2026-06-21T08-41-49-796Z`. Route matrix, consent flows, no-GA-with-empty-ID checks, contact mailto, and required analytics event contract passed. |
| 2026-06-21 | Professional redesign local link sweep | pass | Local Playwright link sweep checked 39 links/anchors across `/index.html`, `/building-analyst.html`, `/who-its-for.html`, and `/privacy.html`; no missing anchors or `4xx/5xx` internal routes. `mailto:` links were identified and left as mail actions. |
| 2026-06-21 | Professional redesign accessibility/evidence suite | pass | `npm run qa:measurement:evidence` passed after final local adjustments. Artifact: `output/measurement/evidence-2026-06-21T09-03-43-407Z`. Axe: 0 violations on home, index, privacy, Building Analyst, and who-it-fits. Lighthouse median: performance 77, accessibility 100, best practices 100, SEO 100, CLS about 0.0001. |
| 2026-06-21 | Professional redesign commit and production deploy | pass | Committed scoped redesign work as `c0863348c7b036f02bcbe0144372c85a17b5424b` (`Polish Robson AI website design`) and pushed `main`. Netlify production deploy `6a37a995b9eca200080c9aea` is `ready`, branch `main`, context `production`, published at 2026-06-21 09:06 UTC, with secret scan reporting zero standard/enhanced matches. |
| 2026-06-21 | Professional redesign live route/header smoke | pass | `https://robsonai.co.uk/`, `/index.html`, `/building-analyst.html`, `/who-its-for.html`, `/privacy.html`, `/robots.txt`, `/sitemap.xml`, and `/assets/og/robsonai-cover-1200x630.png` all returned `200`. Root response includes Netlify production headers including `nosniff`, `DENY`, strict referrer policy, and disabled camera/geolocation/microphone permissions. |
| 2026-06-21 | Professional redesign live measurement smoke | pass | `QA_BASE_URL=https://robsonai.co.uk npm run qa:measurement:preview` passed. Artifact: `output/measurement/smoke-2026-06-21T09-07-17-423Z`. Live route matrix, consent decline/accept, no-GA-with-empty-ID checks, copy email feedback, and contact `mailto:` passed. |
| 2026-06-21 | Professional redesign live rendered QA | pass | Playwright checked live desktop and mobile homepage, Building Analyst, who-it-fits, privacy, and mobile interactive workflow/lens states. No console warnings/errors, no framework overlay, no horizontal overflow, no clipped text, `index, follow` present, and interactive panels switched correctly. Artifact: `output/playwright/live-professional-redesign-2026-06-21T09-07-51-486Z`. |
| 2026-06-21 | Professional redesign live link sweep | pass | Live Playwright link sweep checked 39 links/anchors across `/`, `/building-analyst.html`, `/who-its-for.html`, and `/privacy.html`; no missing anchors or `4xx/5xx` internal routes. `mailto:` links were identified and left as mail actions. |
| 2026-06-21 | Motion polish research | pass | Reviewed current public references for selective microinteractions, cursor/dynamic motion and motion restraint/accessibility, including Figma web design trends, Awwwards animation/microinteraction galleries, and Nielsen Norman Group guidance to keep animation unobtrusive, purposeful and reduced-motion aware. |
| 2026-06-21 | Motion polish static checks | pass | `git diff --check`, `node --check script.js`, and HTML validation for all public pages passed after adding dependency-free cursor-responsive motion fields and depth surfaces. |
| 2026-06-21 | Motion polish local smoke/evidence | pass | `npm run qa:preview-auth`, `npm run qa:measurement:local`, and `npm run qa:measurement:evidence` passed. Latest artifacts: `output/measurement/smoke-2026-06-21T09-18-43-173Z`, `output/measurement/evidence-2026-06-21T09-18-53-995Z`. Lighthouse median: performance 76, accessibility 100, best practices 100, SEO 100, CLS about 0.0001. |
| 2026-06-21 | Motion polish rendered QA | pass | Playwright verified desktop homepage and Building Analyst pointer motion: ambient CSS variables changed after mouse movement, motion fields rendered, selected panels tilted/responded, no console warnings/errors, and no horizontal overflow. Mobile/touch contexts had no horizontal overflow and did not enable pointer motion; reduced-motion context did not enable pointer motion. Artifact: `output/playwright/motion-polish-2026-06-21T09-20-32-479Z`. |
| 2026-06-21 | Motion polish commit and production deploy | pass | Committed scoped motion polish as `0c3a9f5b5dfa9179b937c47a8d4028cdca6194f9` (`Add motion graphics polish`) and pushed `main`. Netlify production deploy `6a37ad5ed7bc6c00087485aa` is `ready`, branch `main`, context `production`, published at 2026-06-21 09:22 UTC. |
| 2026-06-21 | Motion polish live route smoke | pass | `https://robsonai.co.uk/`, `/index.html`, `/building-analyst.html`, `/who-its-for.html`, `/privacy.html`, `/robots.txt`, `/sitemap.xml`, and `/assets/og/robsonai-cover-1200x630.png` all returned `200`. |
| 2026-06-21 | Motion polish live measurement smoke | pass | `QA_BASE_URL=https://robsonai.co.uk npm run qa:measurement:preview` passed. Artifact: `output/measurement/smoke-2026-06-21T09-23-01-605Z`. Live route matrix, consent decline/accept, no-GA-with-empty-ID checks, copy email feedback, and contact `mailto:` passed. |
| 2026-06-21 | Motion polish live rendered QA | pass | Playwright verified deployed desktop homepage and Building Analyst pointer motion: ambient CSS variables changed after mouse movement, motion fields rendered, selected panels tilted/responded, no console warnings/errors, and no horizontal overflow. Reduced-motion context did not enable pointer motion. Artifact: `output/playwright/live-motion-polish-2026-06-21T09-23-32-236Z`. |
| 2026-06-21 | Project list workbook profile and naming-rule inference | pass | Source workbook `Master Project list by Wayne Robson.xlsx`, `Sheet1`, header row 3, contained 1,068 nonblank rows. Inferred default project convention: `Project` starts with `CM### -` or `C## -` after dash normalisation. Result: 976 valid project rows, 14 naming exceptions, 78 budget/non-project rows. |
| 2026-06-21 | Local project dashboard artifact generation | pass | Generated local-only ignored artifact `output/project-analysis/robson-project-dashboard.html` plus summary `output/project-analysis/project-analysis-summary.json`. Email/contact-email columns were deliberately excluded from the embedded dashboard data. |
| 2026-06-21 | Project dashboard syntax and source reconciliation | pass | Extracted embedded script for `node --check`, then source reconciliation script, email regex scan, `git diff --check`, and `npx --no-install html-validate --rule doctype-style:off --rule void-style:off output/project-analysis/robson-project-dashboard.html` passed. Reconciliation confirmed 1,068 source rows, 976 valid projects, 14 naming exceptions, 78 budget/non-project rows, and 137 active valid projects. |
| 2026-06-21 | Project dashboard Playwright QA | pass | Local server at `http://127.0.0.1:8132/robson-project-dashboard.html` passed assertions for default counts, naming-exception toggle, all-row mode, budget-row search exclusion, active-only filter, construction-stage filter, CSV download, no console errors, and no mobile page-level horizontal overflow. Screenshots: `output/playwright/project-dashboard-2026-06-21/desktop-default.png` and `output/playwright/project-dashboard-2026-06-21/mobile-default.png`. |
| 2026-06-21 | Conversion/contact baseline audit | fail found | Attached screenshot and local Playwright baseline confirmed the homepage credibility section rendered dark text on a dark panel. Baseline audit artifact: `output/playwright/conversion-audit-baseline-2026-06-21T09-32-27-305Z`. |
| 2026-06-21 | Conversion/contact static checks | pass | `git diff --check`, `node --check script.js`, and HTML validation for all public pages passed after local fixes. |
| 2026-06-21 | Conversion/contact smoke checks | pass | `npm run qa:preview-auth` and `npm run qa:measurement:local` passed. Measurement artifact: `output/measurement/smoke-2026-06-21T09-37-29-604Z`. |
| 2026-06-21 | Conversion/contact rendered QA | pass | Playwright verified the fixed credibility section, homepage contact, Building Analyst contact, who-it-fits contact, copy-email feedback, direct mailto CTAs, privacy links, desktop console cleanliness, and mobile overflow. Final artifact: `output/playwright/conversion-contact-polish-rerun-2026-06-21T09-39-54-732Z`. |
| 2026-06-21 | Credibility card strip fix | pass | Playwright verified the paragraph background is transparent in all three homepage credibility cards and captured a fresh local screenshot with no white text strip. Artifact: `output/playwright/credibility-card-strip-fix-2026-06-21T10-19-29-058Z/home-belief-panel-fixed.png`. |
| 2026-06-21 | Conversion/contact accessibility/evidence suite | pass | `npm run qa:measurement:evidence` passed. Artifact: `output/measurement/evidence-2026-06-21T09-40-30-285Z`. Lighthouse median: performance 76, accessibility 100, best practices 100, SEO 100. |
| 2026-06-21 | Design-signature reference review | pass | Reviewed current SaaS/B2B/motion/typography sources and translated the pattern into a restrained local direction: clarity, proof, friction removal, product-led visuals, subtle motion, distinctive type and non-generic brand character. |
| 2026-06-21 | Design-signature Browser QA | pass | In-app Browser verified local homepage page identity, empty-error console, no horizontal overflow, Fraunces headline rendering, homepage hero next-section hint on desktop, transparent credibility-card paragraph backgrounds, non-clipped mobile navigation, and visible mobile primary CTAs on homepage and Building Analyst. Screenshots: `output/playwright/professional-design-signature-2026-06-21/desktop-home.png`, `output/playwright/professional-design-signature-2026-06-21/mobile-home.png`, and `output/playwright/professional-design-signature-2026-06-21/mobile-building-analyst.png`. |
| 2026-06-21 | Design-signature static and smoke checks | pass | `git diff --check`, `node --check script.js`, HTML validation for all public pages, `npm run qa:preview-auth`, and `npm run qa:measurement:local` passed. Measurement smoke artifact: `output/measurement/smoke-2026-06-21T10-28-38-928Z`. |
| 2026-06-21 | Design-signature accessibility/evidence suite | pass | `npm run qa:measurement:evidence` passed. Artifact: `output/measurement/evidence-2026-06-21T10-29-02-819Z`. Axe reports generated for home, index, privacy, Building Analyst and who-it-fits; Lighthouse median: performance 74, accessibility 100, best practices 100, SEO 100, CLS 0. |
| 2026-06-21 | Conversion/design signature commit and production deploy | pass | Committed approved polish bundle as `6e275f9e3e4f56a293c2bd5401a8af55f13f2dc1` (`Polish website conversion and design signature`) and pushed `main`. Netlify production deploy `6a37be74ace5eb0008361ef4` is `ready`, branch `main`, context `production`, published at 2026-06-21 10:35 UTC. |
| 2026-06-21 | Conversion/design signature live route/header smoke | pass | `QA_BASE_URL=https://robsonai.co.uk npm run qa:measurement:preview` confirmed `/`, `/index.html`, `/building-analyst.html`, `/who-its-for.html`, `/privacy.html`, `/robots.txt`, `/sitemap.xml`, and `/assets/og/robsonai-cover-1200x630.png` returned `200`. Root response returned production headers including `nosniff`, `DENY`, strict referrer policy, and disabled camera/geolocation/microphone permissions. |
| 2026-06-21 | Conversion/design signature live measurement smoke | pass | `QA_BASE_URL=https://robsonai.co.uk npm run qa:measurement:preview` passed. Artifact: `output/measurement/smoke-2026-06-21T10-36-29-349Z`. Live route matrix, consent decline/accept, no-GA-with-empty-ID checks, copy email feedback, and prompted contact `mailto:` passed. |
| 2026-06-21 | Conversion/design signature live rendered QA | pass | In-app Browser verified live desktop homepage and mobile homepage/Building Analyst: page identity correct, nonblank DOM, no console warnings/errors, no framework overlay, no horizontal overflow, Fraunces headline rendering, homepage next-section hint, transparent credibility-card paragraph backgrounds, non-clipped mobile navigation, and visible mobile primary CTAs. Screenshots: `output/playwright/live-design-signature-2026-06-21/desktop-home.png`, `output/playwright/live-design-signature-2026-06-21/mobile-home.png`, and `output/playwright/live-design-signature-2026-06-21/mobile-building-analyst.png`. |
| 2026-06-21 | Building Analyst proof-story Product Design QA | pass | Added a no-old-screenshots Product proof section to `building-analyst.html`; Browser rendered desktop and mobile checks found no horizontal overflow, no console warnings/errors, four workflow cards, two status cards, and no references to `building-analyst-output-generate.png` or `building-analyst-draft-view.png`. Screenshots: `output/playwright/building-analyst-proof-story-2026-06-21/desktop-workflow-proof-final.png` and `output/playwright/building-analyst-proof-story-2026-06-21/mobile-workflow-proof-final.png`. |
| 2026-06-21 | Intentional legacy asset removal cleanup | pass | Wayne confirmed removed local assets should be removed from Git. Public favicon/apple-touch links now point at `/assets/robson-ai-icon-v3.png`; stale Netlify header rules for deleted root icon files were removed; deployable file scan found no references to the removed asset filenames. |
| 2026-06-21 | Building Analyst proof-story pre-publish gates | pass | Missing-asset deployable scan, `git diff --check`, `node --check script.js`, HTML validation, `npm run qa:preview-auth`, `npm run qa:measurement:local`, `npm run qa:measurement:evidence`, and `npx --no-install netlify build` passed. Latest artifacts: `output/measurement/smoke-2026-06-21T13-01-49-044Z` and `output/measurement/evidence-2026-06-21T13-01-49-044Z`. Lighthouse median: performance 72, accessibility 100, best practices 100, SEO 100, CLS 0. |
| 2026-06-21 | Building Analyst proof-story production deploy | pass | Committed proof story and intentional legacy asset removal as `51e655f34f78ea8eda3baa5ed7fc7146795c46e5`, then bumped the stylesheet cache version in `53d19da9620b4926258cfa9e0f20767f0c3d207d`; Netlify production deploy `6a37e1c1f001a300081cbcd7` is ready and published for commit `53d19da9620b4926258cfa9e0f20767f0c3d207d`. |
| 2026-06-21 | Building Analyst proof-story live route/asset smoke | pass | `QA_BASE_URL=https://robsonai.co.uk npm run qa:measurement:preview` passed with artifact `output/measurement/smoke-2026-06-21T13-06-51-543Z`; live `/`, `/building-analyst.html`, `/who-its-for.html`, `/privacy.html`, `/assets/robson-ai-icon-v3.png`, and `/assets/og/robsonai-cover-1200x630.png` returned `200`; deleted root icon files returned `404` as expected. |
| 2026-06-21 | Building Analyst proof-story live rendered QA | pass | In-app Browser verified live desktop/mobile `building-analyst.html#workflow-proof`: heading `Proof starts with the workflow.`, stylesheet `./styles.css?v=20260621b`, icon `/assets/robson-ai-icon-v3.png?v=20260509`, four proof cards, two status cards, no old asset references, no horizontal overflow, and no console warnings/errors. Screenshots: `output/playwright/live-building-analyst-proof-story-2026-06-21/desktop-workflow-proof.png` and `output/playwright/live-building-analyst-proof-story-2026-06-21/mobile-workflow-proof.png`. |

## 11. Release / Deployment Notes

- Current environment: local repo on `main` plus Netlify-linked production site.
- Public production URL documented in existing handover: `https://robsonai.co.uk`.
- Current production stance: full public website is live at `/`; launch pages are public and crawlable. Latest verified production commit is `53d19da9620b4926258cfa9e0f20767f0c3d207d`; latest verified Netlify production deploy is `6a37e1c1f001a300081cbcd7`.
- Release risk: lower after production verification and post-launch observation; monitor live site, enquiries, search indexing, and any stale external cache previews.
- Privacy/security checks needed: confirm Netlify preview-auth env vars, consent/GA4 review, privacy notice review if contact forms are added, no invented proof claims.
- Rollback plan: after Wayne approval, restore previous production deploy `6a37bfaaab25aa0007769b3f` in Netlify or revert commits `51e655f34f78ea8eda3baa5ed7fc7146795c46e5` and `53d19da9620b4926258cfa9e0f20767f0c3d207d`, then push `main`. Previous deploy permalink: `https://6a37bfaaab25aa0007769b3f--robson-ai-website.netlify.app`.

## 12. Resume Prompt

Use this to resume in a new Codex thread:

> We are working on the Robson AI Solutions Website for Wayne Robson / Robson AI Solutions. Read `docs/codex/TRACKER.md`, inspect git status and existing docs, then continue the next tranche. Production `https://robsonai.co.uk/` now serves the full public website. Latest verified production commit is `53d19da9620b4926258cfa9e0f20767f0c3d207d` (`Bump website stylesheet cache`), with the Building Analyst proof-story/site asset cleanup in commit `51e655f34f78ea8eda3baa5ed7fc7146795c46e5`; latest verified Netlify production deploy is `6a37e1c1f001a300081cbcd7`. Live production route, consent/measurement smoke, rendered desktop/mobile, security header, sitemap, Open Graph image, contact/copy-email path, Fraunces headline rendering, credibility-card contrast, non-clipped mobile nav, no-old-screenshot Building Analyst proof section, and remaining icon asset checks passed. The previous production deploy for rollback is `6a37bfaaab25aa0007769b3f`. The post-WWDC26 copy refresh and agent-review polish are complete: public copy frames Building Analyst as a professional surveying/reporting product with cautious Apple-platform-first intelligence direction where relevant, not as a generic chatbot, BYO-key product, or external-provider AI strategy. App screenshots/App Store links are conditional launch assets: required if app availability is claimed or shown, not mandatory for the current professional/product-direction launch. Consider agents/background threads at the start of serious tranches, especially for parallel QA, independent review, research, or split implementation tasks. Do not change domain/DNS, enable GA4, add forms, handle customer data, send external messages, or perform rollback without explicit approval. Validate before claiming completion, tell Wayne exactly what decision/action is needed next using numbered options with a publish-readiness percentage, and update the tracker at the end.

## 13. PRD Gate Execution Log (2026-06-01)

### Nightly PRD Gate Steps 1-5 (User Journey, UI/UX, Governance, Data Model, Security)

Scope:
- Ran the requested steps 1-5 review process across current RobsonAI workspaces assigned to automation.
- Read each workspace's project instructions and current `docs/codex/PRD.md` + `docs/codex/TRACKER.md` where present.
- Kept work local-only, no deploys, no external live system changes.

Ranked findings for this website workspace:
1. `resolved` - Governance/Testability local-runner blocker is cleared:
   previous local bind failure is no longer present in this environment; both local smoke and full evidence runs passed on 2026-06-01.
2. `medium` - User journey release hold remains intentional:
   tracker and launch docs still show public root as holding-first while fuller launch route stays intentionally delayed pending iOS launch timing.
3. `low` - Data model remains static-content only:
   no backend/database schema is present by design for current website scope; this is acceptable for holding/marketing mode but constrains richer conversion flows.
4. `low` - Security controls remain aligned with PRD:
   preview auth reads Netlify env vars in `netlify/edge-functions/preview-auth.js`; no hard-coded preview credential literals were found in the scanned security path.

Validation commands and checks:
- `npm run qa:preview-auth` -> pass (3/3 tests)
- `npm run qa:measurement:local` -> pass (artifact: `output/measurement/smoke-2026-06-01T06-04-17-890Z`)
- `npm run qa:measurement:evidence` -> pass (artifact: `output/measurement/evidence-2026-06-01T06-04-26-480Z`)
- `git diff --check` -> pass
- Targeted source inspection:
  - `netlify/edge-functions/preview-auth.js`
  - `netlify.toml`
  - `script.js`
  - `docs/codex/PRD.md`

Release-readiness verdict for this workspace:
- Steps 1-5 outcome: ready from a website-only evidence standpoint (journey/UI/security/governance checks revalidated locally); business launch timing remains intentionally held for WWDC/iOS readiness decisions.

Recommended next remediation tranche:
- `website-wwdc-hold-monitor`: keep launch-readiness unchanged and perform a short post-WWDC decision review when app-link/screenshot readiness is known.
