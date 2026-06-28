# Release Staging Manifest - Hero Logo Aspect And Anchor Fix Candidate

Last updated: 2026-06-28 12:45 BST
Owner: Wayne Robson / Robson AI Solutions
Repo: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website`
Status: Wayne approved `commit-and-preview-hero-logo-aspect-and-anchor-fix`; production deploy is not approved

## 1. Purpose

This manifest defines the intended file scope for the current approval-gated bugfix candidate:

`hero-logo-aspect-and-anchor-fix`

The bugfix addresses Wayne's browser comments that the floating Robson AI icon on the homepage hero appeared misshaped and then drifted to the far right of the page at medium widths. The source icon asset is square; the defect is the rendered CSS treatment and anchor point. This manifest keeps the candidate limited to the CSS fix, visual-polish regression guard, a staging-manifest parser fix for empty file sections, tracker evidence, and this staging manifest.

Historical note: the previous 2026-06-27 BuildScan interactive preview manifest is preserved in git history and summarised in `docs/codex/TRACKER.md`. The current manifest must match the active dirty worktree so `npm run qa:release-staging-manifest` remains a useful safety gate.

Do not run `git add .` for this candidate.

## 2. Approval Boundary

Wayne identified the visual defect in the live homepage and asked through browser comments. Safe local diagnosis, scoped source edits, local validation, and tracker/docs updates are allowed. Wayne approved option `1` for `commit-and-preview-hero-logo-aspect-and-anchor-fix` on 2026-06-28 12:45 BST.

Approved for this candidate:

- stage files
- create a commit
- create a Netlify preview

Wayne must approve before Codex performs any of these actions:

- push a branch
- run production verification with confirmation
- production deploy

This bugfix candidate does not approve production deployment.

## 3. Current Dirty Scope

Latest inspected status:

- 5 modified tracked files.
- 0 untracked candidate files.
- Total dirty candidate files: 5.
- This manifest itself is intentionally included in the modified tracked file count.

Current validation evidence:

- `node --check scripts/visual-polish-smoke.mjs` passed.
- `git diff --check` passed.
- `npm run qa:visual-polish` passed with artifact `output/visual-polish/smoke-2026-06-28T11-33-56-092Z/visual-polish-smoke.json`; the smoke now checks mobile, tablet, and desktop viewports. At tablet width, the stage and board both measure 592px wide and the icon is anchored 16px inside the board's right edge, not to the viewport edge.
- `npm run qa:rendered` passed with artifact `output/playwright/rendered-release-smoke-2026-06-28T11-08-40-118Z`.
- `npm run qa:responsive` passed with artifact `output/responsive-route/smoke-2026-06-28T11-08-40-118Z/responsive-route-smoke.json`.
- Initial `npm run qa:release:local` failed at the staging-manifest step because the manifest still described the old 62-file BuildScan launch candidate; this file is updated to match the current dirty bugfix scope before rerunning the gate.
- The staging-manifest smoke parser now accepts intentionally empty candidate sections, so a zero-file untracked block can be represented explicitly.

The release inventory gate enforces:

- no forbidden dirty paths such as `.env*`, `.netlify/`, `node_modules/`, `output/`, `.git/`, `.DS_Store`, or key/certificate files
- explicit allowed dirty path patterns
- file-size budgets for release assets
- BuildScan GLB binary glTF 2.0 structure
- zero external URI references inside the public-preview GLB
- secret-like string scan across candidate files

## 4. Modified Tracked Files

These files are modified and expected in the candidate:

```text
docs/codex/RELEASE_STAGING_MANIFEST.md
docs/codex/TRACKER.md
scripts/release-staging-manifest-smoke.mjs
scripts/visual-polish-smoke.mjs
styles.css
```

## 5. Untracked Candidate Files

These untracked files are expected in the candidate:

```text
```

## 6. Asset Size Watch

No asset files are changed in this bugfix candidate.

Existing watched release assets remain governed by `npm run qa:release-inventory`, including:

```text
assets/robson-ai-icon-v3-transparent-320.webp             6.0K
assets/showcase/buildscan-ludgershall-public.glb          1.3M
assets/vendor/three-0.164.1/build/three.module.js         1.2M
```

The large files are intentional for the opt-in viewer path, not first-load homepage payloads. The public-preview GLB remains a direct-downloadable public asset once previewed or published.

## 7. Files That Must Not Be Staged

Do not stage:

```text
output/
.env*
.netlify/
node_modules/
.DS_Store
.git/
local prototype folders
raw 125 MB Ludgershall GLB source files
secrets, credentials, keys, certificates, profiles, or generated screenshots
```

## 8. Staging Command After Approval Only

After Wayne approves `hero-logo-aspect-and-anchor-fix`, use an explicit path list rather than `git add .`.

```bash
git add -- \
  docs/codex/RELEASE_STAGING_MANIFEST.md \
  docs/codex/TRACKER.md \
  scripts/release-staging-manifest-smoke.mjs \
  scripts/visual-polish-smoke.mjs \
  styles.css
```

## 9. Required Checks Before Commit

Run these after staging and before commit:

```bash
git status --short --branch
git diff --cached --check
npm run qa:release:local
```

Then confirm the staged file set matches this manifest before committing.

## 10. Required Checks After Preview Deploy

After an approved branch push creates a Netlify deploy-preview, run:

```bash
QA_BASE_URL="https://<netlify-preview-url>" npm run qa:release:preview
```

## 11. Required Checks After Production Deploy

Only after Wayne explicitly approves production deployment, run:

```bash
QA_PRODUCTION_URL="https://robsonai.co.uk" CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production
```

## 12. Rollback Path

If the fix causes a visual regression, revert the CSS and QA-script changes from this candidate and rerun the local release gate before any preview or production decision.
