# Codex Tracker - Robson AI Solutions Website

Last updated: 2026-06-18 20:51 Europe/London
Project owner: Wayne Robson / Robson AI Solutions
Primary repo/path: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website`
Current branch: `codex/public-full-site-launch-readiness`

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

## 3. Now / Next / Later

### Now

- Local QA baseline is restored and documented.
- Preview auth reads Netlify environment variables and fails closed if they are missing.
- Preview credential is stored in macOS Keychain under service `Robson AI Website Preview Auth`; do not commit or print credential values.
- Netlify preview-auth env vars are set for `production`, `deploy-preview`, and `branch-deploy`.
- PR #1 was merged into `main`: `https://github.com/LoganRobson70/robson-ai-solutions-website/pull/1`.
- Netlify production deploy is ready for tracker closeout commit `a7afc4d`.
- Production `https://robsonai.co.uk/` serves the public holding page.
- Production hidden routes are protected by preview auth.
- Post-launch observation pass completed with no production issues found.
- Public full-site launch plan created at `docs/codex/PUBLIC_FULL_SITE_LAUNCH_PLAN.md`.
- Public full-site launch remains gated on iOS app status, approved screenshots/App Store links, and Wayne's explicit launch approval.
- Public launch-readiness branch is being prepared at `codex/public-full-site-launch-readiness`.
- Local launch-readiness gates passed before Netlify preview.
- Non-production launch-readiness preview is ready: `https://public-launch-readiness--robson-ai-website.netlify.app`.
- Production remains unchanged: holding page public, fuller site protected.
- Future tranches should consider agents/background threads when they are useful for parallel QA, independent review, research, or split implementation tasks.
- This website branch and the related iOS app thread are both at a wait-until-WWDC gate. Apple WWDC 2026 runs June 8-12, 2026; no launch-facing website or iOS decisions should be forced before 2026-06-08 unless Wayne explicitly reopens the scope.
- `website-rg5-local-qa-runner-parity` is complete: local smoke/evidence suite now passes with fresh 2026-06-01 artifacts and removes the prior local bind blocker from the website-only PRD gate evidence.
- `website-post-wwdc-positioning-refresh` is complete: homepage, Building Analyst, who-it-fits, holding page and website narrative copy now favour professional surveying software, reporting workflows, building intelligence and cautious Apple-native direction over generic AI/chatbot/provider language.
- `website-agent-polish-preview-refresh` is complete: stale privacy/PRD/release wording was aligned, Building Analyst now says "Assessment capture and report-ready evidence", Apple-platform language is cautious, the launch plan separates a professional/product-direction launch from an app-availability launch, and the Netlify preview has been refreshed.
- Latest non-production preview: `https://public-launch-readiness--robson-ai-website.netlify.app`, deploy `6a343e07af7c92bd1d67c724`, state `ready`.
- PR #2 is open and ready for review: `https://github.com/LoganRobson70/robson-ai-solutions-website/pull/2`.
- PR #2 is not approval to merge or production deploy; production remains unchanged.

### Next

- Keep the launch-readiness branch as a preview until iOS app status, approved screenshots, and App Store/public link timing are ready.
- Keep current production stance unchanged unless Wayne explicitly approves public launch.
- Review ready-for-review PR #2 and decide whether to hold, request final polish, merge later, or approve a separate production launch tranche.

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

## 6. Risks And Watch Items

| Risk | Severity | Owner | Mitigation | Status |
| --- | --- | --- | --- | --- |
| Dirty working tree with many modified/untracked files | high | Wayne/Codex | Merged and deployed through PR #1. Continue using `git status` and scoped branches/worktrees for future tranches. | closed |
| `npm run qa:measurement:local` currently fails | high | Codex | Fixed in local tranche; keep command passing before deploy. | closed |
| Hard-coded preview Basic Auth credential in `netlify/edge-functions/preview-auth.js` | high | Wayne/Codex | Code now reads Netlify env vars. Password rotated into Keychain and Netlify vars verified in relevant contexts. | closed |
| No root `README.md`, `AGENTS.md`, or `CLAUDE.md` in this repo | medium | Codex | Root `README.md` and `AGENTS.md` are now deployed; add `CLAUDE.md` only if Wayne wants Claude-specific instructions. | mostly closed |
| Hidden/full website and public holding page can drift | medium | Codex | Keep release notes, robots/sitemap, auth, and QA harness aligned. | monitoring |
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

## 11. Release / Deployment Notes

- Current environment: local repo on `main` plus Netlify-linked production site.
- Public production URL documented in existing handover: `https://robsonai.co.uk`.
- Current production stance from `docs/release-handover.md`: `/` serves the holding page; fuller pages are hidden and protected.
- Release risk: lower after production verification; public root remains holding-only and hidden routes are protected.
- Privacy/security checks needed: confirm Netlify preview-auth env vars, consent/GA4 review, privacy notice review if contact forms are added, no invented proof claims.
- Rollback plan: Netlify deploy rollback through Netlify UI/CLI after Wayne approval; local file rollback through Git if a code/doc revert is needed.

## 12. Resume Prompt

Use this to resume in a new Codex thread:

> We are working on the Robson AI Solutions Website for Wayne Robson / Robson AI Solutions. Read `docs/codex/TRACKER.md`, inspect git status and existing docs, then continue the next tranche. Production `https://robsonai.co.uk/` still serves the holding page and protects hidden fuller routes. Public launch planning lives at `docs/codex/PUBLIC_FULL_SITE_LAUNCH_PLAN.md`. A launch-readiness branch `codex/public-full-site-launch-readiness` is pushed and has a refreshed non-production preview at `https://public-launch-readiness--robson-ai-website.netlify.app`, deploy `6a343e07af7c92bd1d67c724`; in that preview `/` serves the fuller site, public pages are crawlable, and holding remains a noindex fallback. PR #2 is open and ready for review at `https://github.com/LoganRobson70/robson-ai-solutions-website/pull/2`; it is not approval to merge or production deploy. The post-WWDC26 copy refresh and agent-review polish are complete: public/preview copy now frames Building Analyst as a professional surveying/reporting product with cautious Apple-platform-first intelligence direction where relevant, not as a generic chatbot, BYO-key product, or external-provider AI strategy. App screenshots/App Store links are conditional launch assets: required if app availability is claimed or shown, not mandatory for a truthful professional/product-direction website launch. Consider agents/background threads at the start of serious tranches, especially for parallel QA, independent review, research, or split implementation tasks. After any relevant current-state PRD is completed and accepted, use the tracker's post-PRD full app review task series before broad implementation. Do not merge this branch, make the fuller site public in production, change domain/DNS, enable GA4, add forms, handle customer data, or broaden product scope without explicit approval. Validate before claiming completion, tell Wayne exactly what decision/action is needed next using numbered options with a publish-readiness percentage, and update the tracker at the end.

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
