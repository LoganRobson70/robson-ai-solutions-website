# Release Staging Manifest - Hero Globe Depth And Position

Last updated: 2026-07-12
Owner: Wayne Robson / Robson AI Solutions
Worktree: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website.current-main-integration`
Branch: `codex/current-main-building-analyst-integration`
Status: Wayne approved exact-path staging, one scoped commit and direct production deployment; no branch push or PR approved

## 1. Purpose

This manifest defines the exact candidate for `hero-globe-white-space-relocation`.

The candidate:

- moves the decorative globe into the white-space/photograph boundary requested by Wayne
- preserves an 8 px measured gap below the sticky menu bar at the validated desktop viewport
- adds layered 3D inset shading and a slow directional cast-shadow drift
- keeps the globe position fixed while only the shadow changes
- preserves both inspection markers and their interactions
- retains the safer tablet position and existing phone-hidden behaviour
- records the completed BuildScan production evidence that preceded this adjustment

Do not run `git add .`.

## 2. Approval Boundary

Wayne approved `go live` on 2026-07-12 after reviewing the local globe position and shadow effect.

Approved:

- exact-path staging of the three files below
- one scoped local commit
- clean-archive Netlify production deployment
- complete production verification

Not approved:

- branch push or pull request
- DNS/domain changes
- rollback unless the production gate fails and Wayne is informed
- destructive Git actions
- unrelated website changes

## 3. Current Source-Control Scope

- Working branch: `codex/current-main-building-analyst-integration`.
- Parent release commit: `f392a99` (`Upgrade BuildScan product proof`).
- 3 modified tracked files.
- 0 untracked candidate files.
- Total dirty candidate files: 3.

Local validation already completed:

- Browser geometry: 8 px menu clearance, 108 px photograph overlap and zero marker overlaps.
- Browser interaction: rainwater marker opened and reported `aria-pressed="true"`.
- Browser motion: computed cast shadow changed across the 4.8-second cycle while the globe position remained fixed.
- Mobile 390x844: globe hidden, no horizontal overflow and no console warnings/errors.
- Responsive, rendered, product/design, HTML and whitespace checks passed.

The complete local gate must pass again on the exact staged snapshot before commit.

## 4. Modified Tracked Files

```text
docs/codex/RELEASE_STAGING_MANIFEST.md
docs/codex/TRACKER.md
styles.css
```

## 5. Untracked Candidate Files

```text
```

## 6. Asset Size Watch

No image, GLB, JavaScript or dependency asset changes are included. The candidate changes CSS and release evidence only.

## 7. Files That Must Not Be Staged

```text
output/
.env*
.netlify/
node_modules/
.DS_Store
.git/
temporary screenshots
secrets, credentials, keys, certificates, profiles, or unrelated files
```

## 8. Staging Command After Approval Only

Wayne approved this exact command under `approved go live` on 2026-07-12.

```bash
git add -- \
  docs/codex/RELEASE_STAGING_MANIFEST.md \
  docs/codex/TRACKER.md \
  styles.css
```

## 9. Required Checks Before Commit

```bash
git status --short --branch
git diff --cached --check
npm run qa:release-staging-manifest
npm run qa:release:local
```

## 10. Checks After Preview Deploy

Wayne approved direct production after local visual review; no additional preview is required for this three-file adjustment.

## 11. Checks After Production Deploy

```bash
QA_PRODUCTION_URL="https://robsonai.co.uk" CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production
```

## 12. Rollback Path

Recheck the current Netlify production deploy immediately before release and record it as the rollback target. Deploy only a clean archive of the scoped commit. If production verification fails materially, stop, preserve the evidence and report before any rollback action.
