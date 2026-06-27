# First Recommended Autonomous Codex Work Block

Last updated: 2026-06-27 11:42 BST
Project: Robson AI Solutions Website
Recommended tranche name: `measurement-qa-and-preview-auth-baseline`
Status: historical baseline tranche; complete

## Current Status Note

This document records the first Codex baseline tranche from 2026-05-30.

It is no longer the recommended next work block. The public full website is now live, preview auth is retained for future private/staging routes, and the current approval-gated release candidate is the interactive BuildScan GLB preview.

Current planning sources:

- `docs/codex/TRACKER.md`
- `docs/codex/PRD.md`
- `docs/release-handover.md`
- `docs/codex/WEBSITE_EXCELLENCE_PROGRAMME.md`
- `docs/codex/PRODUCT_IA_PROOF_MAP.md`

Use the tranche detail below as historical evidence only.

## Objective

Restore the local website QA baseline and prepare the preview-auth security fix before any deployment or public-launch work.

This tranche has now restored local validation. The remaining release dependency is setting and rotating the Netlify preview-auth environment variables before any deploy.

## Scope

- Inspect the failing path in `scripts/measurement-smoke.mjs`.
- Decide whether the intended fix is:
  - update the test to match the current proof surfaces, or
  - restore/add the intended proof CTA if the current HTML accidentally lost it.
- Keep the governed analytics event contract intact unless there is a clear reason to change it.
- Run the local smoke command until it passes.
- If smoke passes, run the full evidence pack if runtime is reasonable.
- Review `netlify/edge-functions/preview-auth.js` and draft/implement a safe env-var-based credential path only within the approval envelope.
- Update `docs/codex/TRACKER.md` with validation evidence and any residual risks.

## Out Of Scope

- Public or preview deploys.
- Real credential rotation without Wayne approval.
- Netlify environment variable writes without Wayne approval.
- Product redesign, copy rewrite, contact form implementation, or public launch.
- GA4 Measurement ID setup or production analytics enablement.
- Cleaning or reverting unrelated dirty working-tree files.

## Permission Envelope

Codex may do without further approval:

- Read source files and docs.
- Edit the QA harness, docs, and tightly related static HTML/JS if needed to restore the existing intended behavior.
- Run local commands:
  - `npm run qa:measurement:local`
  - `npm run qa:measurement:evidence`
  - targeted `npx html-validate ...` or browser checks if useful
- Use Browser/Playwright locally for visual and interaction evidence.
- Update `docs/codex/TRACKER.md`.

Codex must ask before:

- Changing Netlify site settings or environment variables.
- Rotating or handling real secrets.
- Deploying preview or production.
- Committing, pushing, or opening a PR if unrelated dirty files are still present.
- Changing visible product positioning or launch stance.

## Tools To Use

- `rg`, `sed`, and git status/diff inspection.
- Existing npm scripts.
- Browser/Playwright tooling for local UI checks.
- Robson AI brand skill if visible content changes.
- Codex security skill if implementing the preview-auth credential migration.
- GitHub/Netlify tools only after Wayne approves account-backed actions.

## Access Needed

Not needed for the core QA repair:

- Netlify account access.
- GitHub write access.
- Production credentials.

Needed for the preview-auth security fix:

- Wayne approval to migrate preview auth to Netlify environment variables.
- New preview username/password or another approved secret value, supplied through Netlify/secret store rather than chat.
- Approval to verify the deployed preview after env vars are set.

## Files Likely To Change

Likely:

- `scripts/measurement-smoke.mjs`
- `index.html` or `building-analyst.html` only if the intended proof CTA is missing from the product, not just the test.
- `docs/codex/TRACKER.md`

Possible with approval:

- `netlify/edge-functions/preview-auth.js`
- `docs/release-handover.md`
- `docs/measurement-qa.md`
- `README.md`
- `AGENTS.md`

## Validation Commands

Minimum:

```bash
npm run qa:measurement:local
```

Preferred if minimum passes:

```bash
npm run qa:measurement:evidence
```

Optional targeted checks:

```bash
npx html-validate --rule doctype-style:off --rule void-style:off holding.html index.html preview.html privacy.html building-analyst.html who-its-for.html
```

## Browser / UI Checks

Use local browser checks after the smoke failure is fixed:

- Public holding page loads and has no links into hidden fuller pages.
- Hidden fuller pages render locally.
- Consent banner appears on first clean load.
- Accept/decline behavior persists across reload.
- Copy-email button gives feedback.
- Desktop and mobile layouts do not show obvious overlap.

## Security / Privacy Checks

- Confirm no real GA4 requests are made when the Measurement ID is empty.
- Confirm analytics remains default-off.
- Confirm preview auth fails closed when credentials are missing or wrong.
- Confirm no secret values are committed into source.
- Confirm any contact-path changes do not expand data collection without privacy update.

## Rollback Plan

- Use `git diff` before and after edits.
- Keep changes scoped to the tranche files.
- If a local fix breaks broader behavior, revert only the files changed by Codex in this tranche, not unrelated dirty files.
- Do not use destructive Git commands.

## Checkpoint Rule

Checkpoint with Wayne before continuing if:

- The smoke failure requires visible content or product positioning changes.
- A real secret or Netlify environment variable is needed.
- A deploy is needed to prove the fix.
- The dirty working tree makes it unclear which files are safe to edit.

## Done Criteria

- `npm run qa:measurement:local` passes, or the remaining failure is documented with a clear blocker.
- The event contract is still explicitly governed.
- Preview-auth secret handling has either been fixed locally with no secret values committed, or a clear approval-gated plan is recorded.
- Tracker is updated with commands, results, risks, and next step.
- No production deploy, preview deploy, secret rotation, or unrelated cleanup happened without approval.
