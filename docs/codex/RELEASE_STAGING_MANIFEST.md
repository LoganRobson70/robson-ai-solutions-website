# Release Staging Manifest - Building Analyst Marketing Gallery

Last updated: 2026-07-16
Owner: Wayne Robson / Robson AI Solutions
Worktree: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website.release-worktree`
Branch: `codex/building-analyst-marketing-live-20260716`
Baseline commit: `475e383`
Status: exact staging, commit, push, main alignment and production deployment approved by Wayne on 2026-07-16

## Purpose

This manifest defines the exact candidate that adds all three approved Building Analyst marketing compositions to the public Building Analyst page while preserving the current live homepage, navigation, globe, BuildScan proof, privacy posture and production configuration.

The compositions are labelled as marketing visuals grounded in current Building Analyst screens and product behaviour. They do not claim autonomous diagnosis, final authority, App Store availability or a finished interface. The rejected `AI Proof Property` wording is not included.

Do not run `git add .`.

## Approval boundary

Wayne must approve before Codex performs any of these actions: staging, commit, push, preview deployment or production deployment.

Wayne explicitly approved the scoped live release on 2026-07-16 and asked Codex to deploy it and return the verified live website.

Not approved: DNS/domain changes, analytics/forms changes, dependency changes, customer-data handling, external messages, destructive Git actions, rollback unless production validation requires the documented recovery path, or unrelated redesign.

## Candidate inventory

- 7 modified tracked files.
- 6 untracked candidate files.
- 13 dirty candidate files.
- Generated `dist/` and `output/` content is ignored and must not be staged.
- No secret-bearing, environment, Netlify state, dependency or customer-data files are in scope.

## 4. Modified Tracked Files

```text
building-analyst.html
docs/codex/RELEASE_STAGING_MANIFEST.md
docs/codex/TRACKER.md
scripts/product-design-acceptance-smoke.mjs
scripts/release-candidate-inventory.mjs
scripts/rendered-release-smoke.mjs
styles.css
```

## 5. Untracked Candidate Files

```text
assets/showcase/building-analyst-marketing-evidence-to-report-1600.webp
assets/showcase/building-analyst-marketing-evidence-to-report-840.webp
assets/showcase/building-analyst-marketing-professional-review-1600.webp
assets/showcase/building-analyst-marketing-professional-review-840.webp
assets/showcase/building-analyst-marketing-structured-draft-1600.webp
assets/showcase/building-analyst-marketing-structured-draft-840.webp
```

## 8. Staging Command After Approval Only

```bash
git add -- \
  assets/showcase/building-analyst-marketing-evidence-to-report-1600.webp \
  assets/showcase/building-analyst-marketing-evidence-to-report-840.webp \
  assets/showcase/building-analyst-marketing-professional-review-1600.webp \
  assets/showcase/building-analyst-marketing-professional-review-840.webp \
  assets/showcase/building-analyst-marketing-structured-draft-1600.webp \
  assets/showcase/building-analyst-marketing-structured-draft-840.webp \
  building-analyst.html \
  docs/codex/RELEASE_STAGING_MANIFEST.md \
  docs/codex/TRACKER.md \
  scripts/product-design-acceptance-smoke.mjs \
  scripts/release-candidate-inventory.mjs \
  scripts/rendered-release-smoke.mjs \
  styles.css
```

## Required checks before commit

```bash
git diff --check
npx --no-install html-validate --rule doctype-style:off --rule void-style:off building-analyst.html
node --check scripts/product-design-acceptance-smoke.mjs
node --check scripts/release-candidate-inventory.mjs
npm run qa:release-staging-manifest
npm run qa:release:local
```

After the exact commit is created, push the approved release branch, align `main` without rewriting history, publish a clean committed release to Netlify production and run `QA_PRODUCTION_URL="https://robsonai.co.uk" CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production`.

## Rollback path

If production validation exposes a material regression, republish the previous clean production source commit `475e383`, which was live as Netlify production deploy `6a568486535b43aaffc57b59` before this tranche. Do not change DNS or domain configuration.
