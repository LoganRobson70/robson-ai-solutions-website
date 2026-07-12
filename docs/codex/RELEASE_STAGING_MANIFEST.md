# Release Staging Manifest - Hero Globe White-Space Correction

Last updated: 2026-07-12
Owner: Wayne Robson / Robson AI Solutions
Worktree: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website.current-main-integration`
Branch: `codex/current-main-building-analyst-integration`
Status: Wayne approved the visually reviewed local correction for direct production deployment; no branch push or PR approved

## 1. Purpose

This manifest defines the exact candidate for `hero-globe-white-space-relocation`.

The corrective candidate:

- moves the decorative globe materially farther left so it sits almost entirely in Wayne's marked white area
- preserves an 8 px measured gap below the sticky menu bar at the validated desktop viewport
- preserves the approved 3D inset shading and slow directional cast-shadow drift
- changes the homepage stylesheet version key so browsers do not retain the previous one-year-cached placement
- preserves both inspection markers and their interactions
- retains the safer tablet position and existing phone-hidden behaviour
- records the production evidence and corrective review that preceded this adjustment

Do not run `git add .`.

## 2. Approval Boundary

Wayne approved deployment to live on 2026-07-12 after reviewing the corrected local globe placement.

Approved:

- exact-path staging of the four files below
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
- Parent release commit: `7ce7e71` (`Refine hero globe depth and position`).
- 4 modified tracked files.
- 0 untracked candidate files.
- Total dirty candidate files: 4.

Corrective local validation already completed:

- Browser screenshot: globe sits almost entirely in the white area immediately left of the photograph and remains below the menu.
- Browser interaction: rainwater marker opened and reported pressed state with the correct tooltip.
- Browser console: zero warnings or errors.
- `npm run qa:responsive` passed 21 checks.
- `npm run qa:rendered` passed and captured the corrected homepage.
- `git diff --check` passed.

The complete local gate must pass on the exact staged snapshot before the corrective commit.

## 4. Modified Tracked Files

```text
docs/codex/RELEASE_STAGING_MANIFEST.md
docs/codex/TRACKER.md
index.html
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
  index.html \
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

Recheck the current Netlify production deploy immediately before release and record it as the rollback target. Deploy only a clean `git archive` of the corrective commit. If production verification fails materially, stop, preserve the evidence and report before any rollback action.
