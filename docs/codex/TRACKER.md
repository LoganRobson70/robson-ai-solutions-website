# Codex Tracker - Robson AI Solutions Website

Last updated: 2026-05-30 12:43 Europe/London
Project owner: Wayne Robson / Robson AI Solutions
Primary repo/path: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website`
Current branch: `codex/professionalize-website`

## 1. Current Objective

Create a clear Codex working baseline for the Robson AI Solutions Website without changing product implementation. The repo should have a current-state PRD, lightweight tracker, capability audit, and first recommended autonomous tranche so future Codex work can resume without rediscovering basic project context.

Success means:

- `docs/codex/TRACKER.md`, `docs/codex/PRD.md`, `docs/codex/CAPABILITY_AUDIT.md`, and `docs/codex/FIRST_TRANCHE.md` exist and reflect the current repo.
- Existing docs remain preserved and referenced, not overwritten.
- Current risks, validation commands, deployment path, and approval boundaries are explicit.
- Side ideas are parked instead of expanding the baseline tranche.

## 2. Active Tranche

Tranche name: `repo-instructions-dirty-assessment-and-pr`
Status: complete
Started: 2026-05-30 12:36 Europe/London
Completed: 2026-05-30 12:43 Europe/London

Scope:

- Add root `AGENTS.md` with Robson AI/Codex repo working rules.
- Add root `README.md` with project, command, preview-auth, and deployment baseline.
- Assess remaining dirty website/UI files without staging them into the baseline PR.
- Commit and push the repo-instruction/assessment docs.
- Create a draft GitHub PR for the baseline/auth/docs branch.

Out of scope:

- Production deploy, public launch, staging broad dirty website/UI files, product redesign, contact form implementation, analytics enablement, or destructive git cleanup.
- Any customer data handling, payments, Apple signing/submission, or external messages.

Permission envelope:

- Wayne approved all three options: `create-pr-for-baseline-auth`, `assess-dirty-website-release-files`, and `add-root-agents-readme`.
- Codex may do: add docs, inspect dirty files, commit scoped docs, push branch, and create draft PR.
- Codex must ask before: production deploys, staging the broad dirty website/UI release files, changing domain/DNS, enabling GA4, sending external messages, destructive git actions, or merging PRs.

Done criteria:

- `AGENTS.md` exists at repo root.
- `README.md` exists at repo root.
- `docs/codex/DIRTY_RELEASE_ASSESSMENT.md` exists and recommends a separate release tranche.
- Scoped docs are committed and pushed.
- Draft PR is created.

## 3. Now / Next / Later

### Now

- Local QA baseline is restored.
- Preview-auth code reads Netlify environment variables and fails closed if they are missing.
- Preview password was rotated and stored in macOS Keychain under service `Robson AI Website Preview Auth`, account `robson-preview`.
- Netlify preview-auth env vars are set for `production`, `deploy-preview`, and `branch-deploy`.
- Non-production Netlify alias preview is verified: `https://preview-auth-check--robson-ai-website.netlify.app`.
- Root `AGENTS.md`, root `README.md`, and dirty-release assessment are being added to the pushed baseline branch.

### Next

- Review the draft PR once created.
- Decide whether to run the separate `website-release-candidate-review` tranche for the remaining dirty website/UI files.
- Keep production deploy/public launch separate and approval-gated.

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
| 2026-05-30 | Public launch of fuller website | Release handover | later | Current public root is a holding page. Fuller pages remain hidden/private. |
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

## 6. Risks And Watch Items

| Risk | Severity | Owner | Mitigation | Status |
| --- | --- | --- | --- | --- |
| Dirty working tree with many modified/untracked files | high | Wayne/Codex | Do not clean or revert. Scope future edits tightly and use a worktree for larger implementation. | open |
| `npm run qa:measurement:local` currently fails | high | Codex | Fixed in local tranche; keep command passing before deploy. | closed |
| Hard-coded preview Basic Auth credential in `netlify/edge-functions/preview-auth.js` | high | Wayne/Codex | Code now reads Netlify env vars. Password rotated into Keychain and Netlify vars verified in relevant contexts. | closed |
| No root `README.md`, `AGENTS.md`, or `CLAUDE.md` in this repo | medium | Codex | Add concise project instructions after Wayne approves. | open |
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
| Agents/background threads | optional | Useful for separate QA/accessibility/security sweeps. | Wayne authorizes background threads/agents for split work. | Run independent audits while main work continues. |
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
| 2026-05-30 | `security add-generic-password -U ...` | pass | Rotated preview password stored in macOS Keychain under service `Robson AI Website Preview Auth`, account `robson-preview`. Secret value was not printed. |
| 2026-05-30 | `npm run qa:preview-auth` | pass | Local Edge Function auth smoke still passes after direct `Netlify.env.get()` reader update. |
| 2026-05-30 | `npm run qa:measurement:local` | pass | Pre-deploy local measurement gate passed. Artifact: `output/measurement/smoke-2026-05-30T11-15-17-945Z`. |
| 2026-05-30 | `npx --no-install netlify deploy --context branch-deploy --alias preview-auth-check --json` | pass | Non-production alias deploy ready: `https://preview-auth-check--robson-ai-website.netlify.app`, deploy id `6a1ac942b9543e1a0abef940`, deploy context `branch-deploy`, Edge Function present. |
| 2026-05-30 | Live auth matrix on alias preview | pass | `/index.html`, `/building-analyst.html`, `/who-its-for.html`, and `/privacy.html` return `401` without/wrong credentials and `200` with Keychain credential. `/` remains public holding page with `200`. |
| 2026-05-30 | `git diff --check` | pass | No whitespace errors reported after tracker/release/auth updates. |
| 2026-05-30 | Dirty website/UI assessment | pass | `docs/codex/DIRTY_RELEASE_ASSESSMENT.md` recommends a separate `website-release-candidate-review` tranche and keeps broad dirty files out of the baseline PR. |

## 11. Release / Deployment Notes

- Current environment: local repo plus Netlify-linked site.
- Public production URL documented in existing handover: `https://robsonai.co.uk`.
- Current production stance from `docs/release-handover.md`: `/` serves the holding page; fuller pages are hidden and protected.
- Release risk: lower for preview auth after verified alias deploy; still ask before production deploy or public launch.
- Privacy/security checks needed: confirm Netlify preview-auth env vars, consent/GA4 review, privacy notice review if contact forms are added, no invented proof claims.
- Rollback plan: Netlify deploy rollback through Netlify UI/CLI after Wayne approval; local file rollback through Git once changes are cleanly scoped.

## 12. Resume Prompt

Use this to resume in a new Codex thread:

> We are working on the Robson AI Solutions Website for Wayne Robson / Robson AI Solutions. Read `docs/codex/TRACKER.md`, inspect git status and existing docs, then continue the next tranche. The measurement QA baseline passes locally. Preview auth now reads `ROBSON_PREVIEW_USERNAME` / `ROBSON_PREVIEW_PASSWORD` from Netlify env vars using the Edge runtime `Netlify.env.get()` path with local fallbacks. The preview password is stored in macOS Keychain under service `Robson AI Website Preview Auth`, account `robson-preview`. Netlify vars are set for `production`, `deploy-preview`, and `branch-deploy`; alias preview `https://preview-auth-check--robson-ai-website.netlify.app` verified protected routes return `401` without/wrong credentials and `200` with the Keychain credential. Do not production deploy, clean the dirty tree, commit, push, or broaden product scope without explicit approval. Validate before claiming completion, tell Wayne exactly what decision/action is needed next, and update the tracker at the end.
