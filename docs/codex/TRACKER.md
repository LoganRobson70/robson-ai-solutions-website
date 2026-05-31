# Codex Tracker - Robson AI Solutions Website

Last updated: 2026-05-31 09:48 Europe/London
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

### Next

- Decide whether to open a PR for review, keep this as a preview branch, or hold until iOS app screenshots/App Store link are available.
- Keep current production stance unchanged unless Wayne explicitly approves public launch.

### Later

- Improve conversion path beyond `mailto:` once the hidden site is ready for public launch.
- Prepare a GA4 enablement pack only after Wayne approves a real Measurement ID and analytics governance.
- Add CI or pre-handoff hooks for measurement smoke, HTML validation, accessibility, and tracker update checks.
- Run a full browser/mobile QA and visual polish pass before public launch.

## 4. Parking Lot

| Date | Idea | Source | Suggested timing | Notes |
| --- | --- | --- | --- | --- |
| 2026-05-30 | Embedded contact form or booked intro CTA | UI/UX review | later | Useful conversion improvement, but not part of documentation baseline. Requires privacy, spam, and Netlify Forms or backend decision. |
| 2026-05-30 | Production GA4 Measurement ID enablement | Existing QA docs | later | Analytics is currently intentionally inert. Needs explicit approval and privacy check. |
| 2026-05-30 | Public launch of fuller website | Release handover | next | Plan exists in `docs/codex/PUBLIC_FULL_SITE_LAUNCH_PLAN.md`; execution should wait until iOS app/screenshot/advertising readiness is approved. |
| 2026-05-30 | Secret rotation and env-var based preview auth | Codex audit | done | Edge Function now reads Netlify env vars; password was rotated into Keychain; Netlify vars are set for `production`, `deploy-preview`, and `branch-deploy`; live alias preview verified. |
| 2026-05-30 | Weekly website health automation | Capability checklist | later | Could run smoke/QA reminders, but only after the QA command is back to passing. |

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

## 11. Release / Deployment Notes

- Current environment: local repo on `main` plus Netlify-linked production site.
- Public production URL documented in existing handover: `https://robsonai.co.uk`.
- Current production stance from `docs/release-handover.md`: `/` serves the holding page; fuller pages are hidden and protected.
- Release risk: lower after production verification; public root remains holding-only and hidden routes are protected.
- Privacy/security checks needed: confirm Netlify preview-auth env vars, consent/GA4 review, privacy notice review if contact forms are added, no invented proof claims.
- Rollback plan: Netlify deploy rollback through Netlify UI/CLI after Wayne approval; local file rollback through Git if a code/doc revert is needed.

## 12. Resume Prompt

Use this to resume in a new Codex thread:

> We are working on the Robson AI Solutions Website for Wayne Robson / Robson AI Solutions. Read `docs/codex/TRACKER.md`, inspect git status and existing docs, then continue the next tranche. Production `https://robsonai.co.uk/` still serves the holding page and protects hidden fuller routes. Public launch planning lives at `docs/codex/PUBLIC_FULL_SITE_LAUNCH_PLAN.md`. A launch-readiness branch `codex/public-full-site-launch-readiness` is pushed and has a non-production preview at `https://public-launch-readiness--robson-ai-website.netlify.app`; in that preview `/` serves the fuller site, public pages are crawlable, and holding remains a noindex fallback. Wayne clarified that public launch should wait until the iOS app is live and approved screenshots/App Store links can be used for advertising. Consider agents/background threads at the start of serious tranches, especially for parallel QA, independent review, research, or split implementation tasks. Do not merge this branch, make the fuller site public in production, change domain/DNS, enable GA4, add forms, handle customer data, or broaden product scope without explicit approval. Validate before claiming completion, tell Wayne exactly what decision/action is needed next using numbered options, and update the tracker at the end.
