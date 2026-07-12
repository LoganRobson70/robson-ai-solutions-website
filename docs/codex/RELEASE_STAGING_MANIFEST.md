# Release Staging Manifest - Buyer and Practitioner Positioning Alignment

Last updated: 2026-07-12
Owner: Wayne Robson / Robson AI Solutions
Worktree: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website.current-main-integration`
Branch: `codex/current-main-building-analyst-integration`
Status: Wayne approved one scoped commit and a fresh non-production preview; production deployment is not approved

## 1. Purpose

This manifest defines the exact candidate for `buyer-and-practitioner-positioning-alignment`.

The candidate:

- uses the approved proposition: "Better tools for building professionals. Clearer decisions for the people who rely on them."
- addresses organisations employing or commissioning qualified building professionals as well as the professional users
- rebuilds `who-its-for.html` in the current homepage product-studio design system
- unifies the primary navigation on Homepage, Building Analyst, Who it's for and Privacy
- removes the stale Pricing route from those public navigation paths
- switches to the compact navigation below 1040 px to prevent the reported clipping
- replaces internal-sounding product-relationship wording with buyer-facing professional and product-stage boundaries
- updates the affected product-design, responsive and rendered QA assertions
- retains Building Analyst and BuildScan as separate products and does not claim a current integration

Do not run `git add .`.

## 2. Approval Boundary

Wayne selected positioning option 1, approved the exact copy/layout proposal, approved local implementation, and then selected option 1 for a scoped commit and non-production preview.

Approved:

- exact-path staging of the eleven files below
- one scoped local commit
- one fresh Netlify non-production preview
- complete deployed-preview validation and browser review

Not approved:

- production deployment
- production verification with confirmation
- branch push or pull request
- DNS/domain changes
- destructive Git actions
- unrelated website changes

## 3. Current Source-Control Scope

- Working branch: `codex/current-main-building-analyst-integration`.
- Parent commit: `01c8cdf` (`Correct hero globe white-space placement`).
- 11 modified tracked files.
- 0 untracked candidate files.
- Total dirty candidate files: 11.

Targeted validation already completed:

- HTML validation passed for the four affected public pages.
- `npm run qa:semantic-seo` passed.
- `npm run qa:product-design` passed across six routes.
- `npm run qa:responsive` passed 21 checks.
- `npm run qa:rendered` passed with desktop/mobile screenshot evidence.
- In-app Browser review found the approved copy, correct CTA journey, consistent navigation, no horizontal overflow and no console warnings/errors.
- `git diff --check` passed.

The complete local release gate must pass on the exact staged snapshot before the commit.

## 4. Modified Tracked Files

```text
building-analyst.html
docs/codex/RELEASE_STAGING_MANIFEST.md
docs/codex/TRACKER.md
index.html
privacy.html
scripts/product-design-acceptance-smoke.mjs
scripts/rendered-release-smoke.mjs
scripts/responsive-route-smoke.mjs
scripts/keyboard-release-smoke.mjs
styles.css
who-its-for.html
```

## 5. Untracked Candidate Files

```text
```

## 6. Asset Size Watch

No image, GLB, vendor, JavaScript runtime or dependency asset changes are included. The candidate changes HTML, CSS, release documentation and existing QA assertions only.

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

```bash
git add -- \
  building-analyst.html \
  docs/codex/RELEASE_STAGING_MANIFEST.md \
  docs/codex/TRACKER.md \
  index.html \
  privacy.html \
  scripts/product-design-acceptance-smoke.mjs \
  scripts/rendered-release-smoke.mjs \
  scripts/responsive-route-smoke.mjs \
  scripts/keyboard-release-smoke.mjs \
  styles.css \
  who-its-for.html
```

## 9. Required Checks Before Commit

```bash
git status --short --branch
git diff --cached --check
npm run qa:release-staging-manifest
npm run qa:release:local
```

## 10. Checks After Preview Deploy

```bash
QA_BASE_URL="<preview-url>" npm run qa:release:preview
```

Complete a fresh desktop/mobile browser review after the deployed preview gate passes.

## 11. Production Boundary

Production remains `https://robsonai.co.uk`. Do not use `--prod`, do not alias this preview to production, and do not run production verification with confirmation without a separate explicit approval from Wayne after preview review.

## 12. Rollback Path

This tranche is preview-only. If the deployed preview fails materially, retain production unchanged, preserve the preview evidence, and correct or abandon the candidate. No production rollback is required because production is outside the approved scope.
