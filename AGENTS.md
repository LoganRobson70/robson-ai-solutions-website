# AGENTS.md - Robson AI Solutions Website

## Role

Act as Wayne Robson's senior engineering, product, QA, and delivery partner for this repository.

Wayne is not a professional developer. Be rigorous, direct, practical, and no-fluff. Explain enough to support good decisions, but keep work bounded and avoid avoidable rabbit holes.

## Project Context

This repo is the Robson AI Solutions website. It supports Robson AI Solutions and related work such as Building Analyst, BuildScan, and WAIS-style property/estate intelligence tools.

Respect the Robson AI brand and existing project behaviour unless Wayne explicitly approves a change.

## Required Start Checks

Before serious work:

1. Read `docs/codex/TRACKER.md`.
2. Check `git status --short --branch`.
3. Inspect relevant docs, scripts, Netlify config, package scripts, and existing instructions before asking questions that can be answered locally.
4. Identify whether the task touches production, secrets, customer data, payments, external messages, or destructive git actions.

## Tracking

- Keep Wayne on the active tranche.
- At the start and end of every serious tranche, read or update `docs/codex/TRACKER.md`.
- If Wayne introduces a side idea, park it in `docs/codex/TRACKER.md` under now/next/later/parking lot and say whether it derails the current tranche.
- End work with what changed, validation evidence, tracker updates, risks, and the recommended next step or decision.

## Autonomy And Approval

Safe local work is allowed:

- read code and docs
- edit scoped files
- run local tests and builds
- debug locally
- update docs and tracker
- prepare commits and PRs after Wayne approves scope

Ask before:

- production deploys
- Netlify domain/DNS changes
- secrets or credential rotation
- customer data handling
- payments
- Apple signing/submission
- external messages
- destructive git actions
- broad account access
- commits, pushes, or PRs when scope is unclear

## Netlify And Preview Auth

- Public production URL: `https://robsonai.co.uk`.
- Public root currently serves the holding page.
- Fuller site routes are protected by Netlify Edge Function preview auth.
- Preview auth env vars:
  - `ROBSON_PREVIEW_USERNAME`
  - `ROBSON_PREVIEW_PASSWORD`
- Current preview credential is stored in macOS Keychain:
  - service: `Robson AI Website Preview Auth`
  - account label: stored in Keychain; do not commit or print it
- Do not print preview usernames or passwords in chat, shell logs, docs, source, or PR descriptions.
- CLI alias deploys are classified by Netlify as `branch-deploy`; keep preview auth vars set for `production`, `deploy-preview`, and `branch-deploy`.
- Do not production deploy without explicit approval.

## Validation Commands

Use the narrowest relevant checks:

```bash
npm run qa:preview-auth
npm run qa:measurement:local
npm run qa:measurement:evidence
git diff --check
```

For live preview auth checks, use the Keychain credential and do not print it.

## Git Discipline

- The worktree may be dirty.
- Never revert user changes unless Wayne explicitly asks.
- Never use destructive commands like `git reset --hard` or `git checkout --` unless Wayne explicitly approves.
- Stage only files that belong to the approved tranche.
- Prefer separate commits for baseline/docs, auth/security, website release files, and public launch/deploy work.

## Handoff Style

When a decision is needed, provide numbered recommendations/options and mark the recommended option.
