# Codex Capability Audit - Robson AI Solutions Website

Last updated: 2026-05-30 11:30 Europe/London
Repo: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website`
Branch: `codex/professionalize-website`
Audit type: project-specific capability baseline using `codex-full-capability-checklist.md`

## 1. Audit Scope

This audit checks what Codex can practically do in this repo now, what is configured but unproved, and what needs Wayne approval before use.

Evidence sources:

- Repo inspection with `ls`, `rg --files`, `find`, and `sed`.
- Git commands: `git status --short`, `git branch --show-current`, `git worktree list`, `git remote -v`, `git log --oneline -5`.
- Local tooling commands: `git --version`, `node --version`, `npm --version`, `npx --version`, `rg --version`, `python3 --version`, `codex --version`, `gh --version`.
- Codex config/MCP commands: `codex mcp list`, `codex mcp get ...`, `sed -n` on `~/.codex/config.toml` and `~/.codex/rules/default.rules`.
- Netlify CLI proof: `npx --no-install netlify --version`.
- Project validation proof: `npm run qa:measurement:local`.
- Tool discovery for Browser, Netlify, GitHub, automations, and background threads.

No production deploy, preview deploy, account-wide Netlify read, secret handling, destructive Git action, or external message was performed.

## 2. Repo Context

| Item | Status | Proof | Notes |
| --- | --- | --- | --- |
| Repo root | working | `git rev-parse --show-toplevel` | `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website` |
| Branch | working | `git branch --show-current` | `codex/professionalize-website` |
| Worktree state | dirty | `git status --short` | Modified root files and many untracked files. Do not clean/revert without approval. |
| Worktrees | working | `git worktree list` | Only current checkout was listed. |
| Remote | working | `git remote -v` | GitHub remote configured. |
| Existing Codex tracker | missing before baseline | `find docs -maxdepth 4 -type f` | No `docs/codex/TRACKER.md` existed before this tranche. |
| Usable PRD | missing before baseline | repo doc scan | No current-state PRD found before this tranche. |

## 3. Local Tool Capability Matrix

| Capability | Category | Status | Where it lives | Proof | Blocker | Exact fix performed | Exact next step if any |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Git | local dev | working | system CLI | `git version 2.50.1` | Dirty tree needs discipline | None | Use scoped diffs or worktree for implementation |
| Node.js | local dev | working | system CLI | `v22.22.1` | None found | None | Use repo npm scripts |
| npm | local dev | working | system CLI | `11.16.0` | None found | None | Use existing package scripts |
| npx | local dev | working | system CLI | `11.16.0` | None found | None | Use pinned/local tools where possible |
| ripgrep | search | working | system CLI | `ripgrep 15.1.0` | None found | None | Continue using `rg` first |
| Python 3 | utility | working | system CLI | `Python 3.12.13` | None found | None | Use only where shell/apply_patch is not enough |
| Codex CLI | Codex | working | system CLI | `codex-cli 0.135.0-alpha.1` | None found | None | Use MCP/config inspection as needed |
| GitHub CLI | GitHub | working | system CLI | `gh version 2.88.1`; `gh auth status` shows logged in | Account actions need approval if broad/write | None | Use read-only or PR workflow when approved |
| Netlify CLI | deployment | working | npx/local cache | `npx --no-install netlify --version` returned `netlify/26.0.2` | Deploy/account writes need approval | None | Use preview/prod deploy only after Wayne approval |
| Playwright/browser QA | QA | working enough to run | repo dev dependency | `npm run qa:measurement:local` launched Chromium | Test currently fails | None | Repair smoke mismatch |
| html-validate | QA | configured but unproved this run | repo dev dependency | package script references evidence command | Full evidence not run due smoke failure | None | Run after smoke passes |
| axe CLI | QA | configured but unproved this run | repo dev dependency | package script references evidence command | Full evidence not run due smoke failure | None | Run after smoke passes |
| Lighthouse | QA | configured but unproved this run | repo dev dependency | package script references evidence command | Full evidence not run due smoke failure | None | Run after smoke passes |

## 4. Codex And MCP Capability Matrix

| Capability | Category | Status | Where it lives | Proof | Blocker | Exact fix performed | Exact next step if any |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Codex project trust | Codex config | working | `~/.codex/config.toml` | Project path marked trusted | None found | None | Continue normal local work |
| Multi-agent feature | Codex config | working/configured | `~/.codex/config.toml` | `multi_agent = true`; thread/agent tools discovered | Use only when Wayne authorizes agents/background work | None | Split independent audits later if useful |
| Browser plugin / node_repl | browser QA | working/configured | MCP `node_repl`, Browser plugin | `codex mcp list`; tool discovery exposed Browser controls | Must start/open local target before proof | None | Use for visual QA after code changes |
| MCP_DOCKER | MCP | configured but unproved | `codex mcp list` | Enabled | Docker gateway not exercised | None | Use only if needed |
| GitHub MCP | MCP/connection | configured but unproved | `codex mcp list`; `codex mcp get github` | Enabled with bearer token env var | Connector write actions need approval | None | Use for PR/status checks when approved |
| Linear MCP | MCP/connection | configured but unproved | `codex mcp list`; `codex mcp get linear` | Enabled OAuth | No Linear issue referenced | None | Optional if Wayne tracks website work in Linear |
| OpenAI Developer Docs MCP | MCP/docs | configured but unproved | `codex mcp list`; `codex mcp get openaiDeveloperDocs` | Enabled | Not relevant unless OpenAI API work starts | None | Use for OpenAI feature work |
| xcodebuildmcp | MCP | not applicable now | `codex mcp list` | Enabled | This is a static website, not Apple app work | None | Ignore for this repo |
| Automations | Codex app | available/recommended later | tool discovery; `~/.codex/automations` exists | Tool available | No repo-specific automation configured | None | Propose after QA passes |
| Background threads | Codex app | available/optional | tool discovery exposed `create_thread` | Tool available | Use only with Wayne approval | None | Useful for independent QA/security sweeps |

## 5. Project-Specific Blockers

| Blocker | Status | Evidence | Why it matters | Recommended handling |
| --- | --- | --- | --- | --- |
| Measurement smoke failure | fixed locally | `npm run qa:measurement:local` passes after this tranche | Current local QA baseline is trustworthy again | Keep this command passing before deploy work |
| Hard-coded preview Basic Auth credential | mitigated locally, blocked for deploy until env vars set | `netlify/edge-functions/preview-auth.js` now reads `ROBSON_PREVIEW_USERNAME` and `ROBSON_PREVIEW_PASSWORD` | Credential no longer lives in source, but Netlify runtime needs env vars | Set/rotate Netlify env vars with Wayne approval before deploy |
| Dirty working tree | open risk | `git status --short` | Many files are modified/untracked; unrelated work may be mixed | Use scoped diffs and consider a worktree for implementation |
| No root repo instructions | open risk | Root scan found no `README.md`, `AGENTS.md`, or `CLAUDE.md` | Future sessions may miss release/privacy/brand rules | Add concise root docs after Wayne approval |
| No CI found | open risk | `.github` scan found no workflows | QA relies on manual local commands | Add GitHub Action later if PR workflow is adopted |

## 6. Tooling Recommendations

### Git Worktree Isolation

Status: recommended
Why it helps: The current checkout is dirty. A worktree lets Codex repair QA or auth handling without disturbing unrelated local changes.
Setup: Create a sibling worktree on a scoped branch such as `codex/measurement-qa-baseline` after Wayne approves implementation.
Approval needed: Wayne approval for branch/worktree creation if he wants isolation; no production access needed.
Unaided work unlocked: Codex can implement and validate a bounded tranche while leaving the current dirty checkout intact.
Risk: low, provided no destructive Git commands are used.

### Browser / Playwright QA

Status: required for frontend implementation
Why it helps: This is a visual/static website. Browser checks catch broken routes, hidden auth assumptions, consent behavior, responsive layout issues, and console/network errors.
Setup: Use existing npm scripts first. For visual QA, start the local static server from the repo scripts or use Browser plugin against the local URL.
Approval needed: None for local checks. Wayne approval for live-site or authenticated production checks if credentials are involved.
Unaided work unlocked: Codex can capture desktop/mobile screenshots, inspect console/network failures, and verify user flows.
Risk: low locally; medium if testing live authenticated routes.

### Measurement QA Repair

Status: working, required to keep
Why it helps: The smoke command proves routes, consent behavior, no-ID analytics inactivity, and the governed event contract.
Setup: Keep `scripts/measurement-smoke.mjs` aligned with current proof surfaces and navigation.
Approval needed: None if only fixing the test harness to match current UI. Wayne approval if visible content or product positioning must change.
Unaided work unlocked: Codex can run `npm run qa:measurement:local` and then `npm run qa:measurement:evidence`.
Risk: low/medium depending on whether visible content changes.

### Netlify CLI And Netlify Connector

Status: required for deployment, recommended for deploy inspection
Why it helps: Netlify is the likely production path. The site uses redirects, headers, and Edge Functions, so deploy validation should inspect Netlify behavior, not only static files.
Setup: Local CLI is available. Netlify connector tools are available. Use `.netlify/state.json` site linkage for project context, then ask Wayne before account reads/writes or deploys.
Approval needed: Wayne approval for preview deploy, production deploy, env var changes, deploy rollback, or account-wide reads.
Unaided work unlocked: After approval, Codex can deploy previews, inspect deploy status, update env vars if permitted, and verify release behavior.
Risk: medium/high because deploys and environment variables affect live infrastructure.

### Preview Auth Secret Management

Status: required before release
Why it helps: Preview Basic Auth credentials should not live as source literals. Env vars make rotation and deployment safer.
Setup: `preview-auth` now reads Netlify environment variables and fails closed when missing. Set the variables in Netlify outside chat. Rotate the previous credential.
Approval needed: Wayne approval and secret provisioning through Netlify or approved secret store.
Unaided work unlocked: Codex can implement the code path and validation, then verify Netlify behavior after env vars are set.
Risk: security-sensitive; high if mishandled.

### GitHub CLI / GitHub Connector

Status: recommended
Why it helps: PRs and commit status provide review discipline, especially with a dirty local repo and no CI currently present.
Setup: GitHub CLI is authenticated. GitHub MCP/connector is configured. Use a scoped branch and PR after Wayne approves staging/commit/push.
Approval needed: Wayne approval before commits, pushes, PRs, or broad repository/account reads.
Unaided work unlocked: Codex can create branches, inspect PR checks, open PRs, and summarize diffs.
Risk: medium for writes; low for scoped read-only status checks.

### CI / GitHub Actions

Status: recommended later
Why it helps: Prevents broken measurement QA from reaching deployment.
Setup: Add a workflow to run `npm ci` plus smoke/evidence commands or a lighter PR-safe subset.
Approval needed: Wayne approval because CI may consume minutes and can affect branch rules/release process.
Unaided work unlocked: Codex can diagnose failing checks and keep release readiness visible.
Risk: low/medium; commands can be slow because Lighthouse/evidence is heavier.

### Hooks

Status: recommended later
Why it helps: This project benefits from repeatable closeout checks: tracker updated, smoke run, no secret literals, and no deploy without approval.
Setup: Add local Codex/project hooks or documented pre-handoff checklist after the smoke baseline is repaired.
Approval needed: Wayne approval before enabling hooks that run automatically.
Unaided work unlocked: Codex can be prompted to run the right checks before final handoff.
Risk: low if non-destructive.

### Root README And AGENTS

Status: recommended
Why it helps: Future Codex sessions should not have to infer deployment, privacy, brand, and QA rules from scattered docs.
Setup: Add concise `README.md` and `AGENTS.md` that point to `docs/codex/TRACKER.md`, `docs/codex/PRD.md`, and existing handover/QA docs.
Approval needed: None for local docs if Wayne approves the implementation tranche.
Unaided work unlocked: Codex can resume faster and avoid unsafe deploy/secret/privacy actions.
Risk: low.

### Robson AI Brand Skill

Status: required for visual/content work
Why it helps: The site uses Robson Ai wordmark/icon rules and must avoid brand drift.
Setup: Continue using the `robson-ai-brand-system` skill and local brand standards before visual changes.
Approval needed: Wayne approval for any brand redesign or new logo/icon asset.
Unaided work unlocked: Codex can check wordmark/icon usage, palette, typography, and asset rules.
Risk: low if used as a guardrail; high if ignored during visual work.

### Codex Security Skill

Status: recommended for auth/secret tranche
Why it helps: The preview-auth credential issue is security-sensitive even though the site is static.
Setup: Use the security scan/fix-finding workflow when implementing the credential migration.
Approval needed: Wayne approval for secret handling and Netlify env changes.
Unaided work unlocked: Codex can audit for committed secrets, fail-open auth behavior, and release blockers.
Risk: low for local scan; high for live secret changes.

### Agents / Background Threads

Status: optional
Why it helps: Independent tasks can be split: accessibility sweep, copy consistency audit, security scan, or Netlify deploy-readiness check.
Setup: Use `create_thread` or multi-agent tools only when Wayne explicitly authorizes parallel/background work.
Approval needed: Wayne approval for background threads/agents.
Unaided work unlocked: Codex can run sidecar audits while the main thread implements a bounded fix.
Risk: low/medium; avoid overlapping file edits.

### Automations

Status: optional later
Why it helps: A weekly or pre-release health check could catch broken smoke tests, stale tracker state, or deploy-readiness issues.
Setup: Use Codex automation tools after the smoke command passes. Suggested automation: weekly website health review in this repo, read-only by default.
Approval needed: Wayne approval for schedule and scope.
Unaided work unlocked: Codex can proactively report health, blockers, and next actions.
Risk: low if read-only; medium if configured to deploy or edit, which should be avoided.

### Appshots / Computer Use

Status: optional
Why it helps: If Wayne sees a local/browser UI state that files do not explain, an appshot gives Codex visual context.
Setup: Wayne attaches an appshot or approves desktop UI interaction.
Approval needed: Wayne approval, especially around private data, account settings, or production tools.
Unaided work unlocked: Codex can diagnose visual state, settings panels, or browser issues not visible from source.
Risk: privacy-sensitive if private screens are included.

### Netlify Forms Or Contact Backend

Status: optional later
Why it helps: Existing UX review identifies email-only conversion as friction.
Setup: Choose Netlify Forms, a serverless function, or another backend only after privacy/spam requirements are agreed.
Approval needed: Wayne approval because it changes data collection and privacy obligations.
Unaided work unlocked: Codex can implement and validate a form flow after requirements are set.
Risk: privacy/spam/security-sensitive.

## 7. Recommended Now / Later / Not Needed

Already available:

- Git, Node, npm/npx, ripgrep, Python, Codex CLI, GitHub CLI.
- Netlify CLI.
- Browser/Playwright-capable tooling.
- GitHub, Linear, OpenAI docs, node/browser, Docker, and Xcode MCP entries.
- Robson AI brand, web app, Netlify, GitHub, security, validation, and automation-related skills/plugins.

Recommended now:

- Treat Netlify preview-auth environment variable setup/rotation as the next release blocker.
- Use a worktree for larger implementation because the main checkout is dirty.
- Use Browser/Playwright for visual QA once smoke passes.

Recommended later:

- Root `README.md` and `AGENTS.md`.
- GitHub Actions for PR checks.
- Non-destructive hooks for closeout discipline.
- Weekly website health automation.
- Background threads for independent QA/security sweeps.

Not needed now:

- XcodeBuildMCP, Android emulator, Stripe, Google Drive, Gmail, Outlook, Teams, Canva, documents/spreadsheets/presentations, unless Wayne changes the project scope.

Access Wayne needs to approve:

- Netlify preview/prod deploys.
- Netlify environment variable changes and preview auth credential rotation.
- Git commit/push/PR if this dirty repo should be published.
- Production analytics setup and GA4 Measurement ID.
- Background agents/threads or scheduled automations.
