# Release Staging Manifest - Real BuildScan Product Proof Upgrade

Last updated: 2026-07-12 09:50 BST
Owner: Wayne Robson / Robson AI Solutions
Worktree: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website.current-main-integration`
Branch: `codex/current-main-building-analyst-integration`
Status: Wayne approved exact-path staging, one scoped local commit and a refreshed non-production preview; no branch push, PR or production deploy approved

## 1. Purpose

This manifest defines the exact local candidate for `buildscan-real-product-proof-upgrade`.

The candidate:

- uses Wayne's real BuildScan screenshot as the responsive static proof image
- replaces the former 1.3 MB demonstration GLB with the exact 10 MB `Ludgershall 20032026 SharePoint.glb` export shown in that screenshot
- keeps the larger GLB opt-in so it does not download until the visitor selects `Load interactive 3D model`
- starts and resets the website viewer at a professional above-ground angle matching the BuildScan reference
- keeps the public web controls intentionally simpler than the BuildScan application
- updates release checks and product-proof documentation for the new assets

The existing Building Analyst integration, hero, issue markers, decorative globe, secondary pages, privacy posture and production site remain outside this change.

Do not run `git add .` for this candidate.

## 2. Approval Boundary

Wayne approved option 1 on 2026-07-12: exact-path staging, one scoped local commit and a refreshed non-production preview with deployed validation.

Wayne must approve before Codex performs any of these actions:

- push a branch or open a pull request
- deploy or verify production
- rollback or perform destructive Git actions

No production deployment is approved.

## 3. Current Source-Control Scope

- Base production reference: GitHub `main` commit `26bf51d`.
- Working branch: `codex/current-main-building-analyst-integration`.
- 12 modified tracked files.
- 3 untracked candidate files.
- Total dirty candidate files: 15.
- All fifteen files belong to the scoped BuildScan proof upgrade and its release evidence.

Validation completed before this manifest refresh:

- release inventory passed with zero secret findings and zero external GLB URIs
- focused BuildScan viewer smoke passed with initial and Reset views on camera side `top`
- responsive QA passed 21 checks
- rendered-page QA passed
- in-app Browser validation passed before and after model opt-in with no console messages
- JavaScript syntax, HTML validation and `git diff --check` passed

Final local validation:

- `npm run qa:release:local` passed all 37 steps with artifact `output/release-local-gate/gate-2026-07-12T00-01-59-917Z/release-local-gate.json`.
- Measurement evidence passed with Lighthouse performance 96, accessibility 100, best practices 100, SEO 100, CLS 0 and LCP about 2.40 seconds; axe found zero violations on all six checked routes. Artifact: `output/measurement/evidence-2026-07-12T00-04-11-776Z`.
- Warning-only residuals are the existing 17 moderate dev/release-tooling dependency findings and unavailable local Firefox/WebKit binaries. Production dependencies remain at zero vulnerabilities and Chromium passed.
- The staged fifteen-file snapshot passed the complete 37-step gate with artifact `output/release-local-gate/gate-2026-07-12T08-46-42-631Z/release-local-gate.json`; fresh measurement evidence is `output/measurement/evidence-2026-07-12T08-48-45-501Z` with zero axe violations.

## 4. Modified Tracked Files

```text
assets/showcase/buildscan-ludgershall-public.glb
buildscan-viewer.html
docs/codex/PRODUCT_IA_PROOF_MAP.md
docs/codex/RELEASE_STAGING_MANIFEST.md
docs/codex/TRACKER.md
index.html
scripts/buildscan-viewer-smoke.mjs
scripts/measurement-smoke.mjs
scripts/product-design-acceptance-smoke.mjs
scripts/release-candidate-inventory.mjs
scripts/release-header-smoke.mjs
scripts/rendered-release-smoke.mjs
```

## 5. Untracked Candidate Files

```text
assets/showcase/buildscan-ludgershall-buildscan-view-1600.webp
assets/showcase/buildscan-ludgershall-buildscan-view-420.webp
assets/showcase/buildscan-ludgershall-buildscan-view-840.webp
```

## 6. Asset Size Watch

```text
assets/showcase/buildscan-ludgershall-buildscan-view-420.webp      approximately 13 KB
assets/showcase/buildscan-ludgershall-buildscan-view-840.webp      approximately 40 KB
assets/showcase/buildscan-ludgershall-buildscan-view-1600.webp    approximately 119 KB
assets/showcase/buildscan-ludgershall-public.glb                  10,769,764 bytes
```

The GLB is accepted as an opt-in browser asset only. It contains one mesh, one material, one embedded image and no external URI references. The three screenshot assets are responsive WebP derivatives of Wayne's supplied real BuildScan image.

## 7. Files That Must Not Be Staged

```text
output/
.env*
.netlify/
node_modules/
.DS_Store
.git/
raw 32 MB, 125 MB or 132 MB Ludgershall source models
the temporary clipboard PNG source
secrets, credentials, keys, certificates, profiles, or unrelated files
```

## 8. Staging Command After Approval Only

Wayne approved this exact-path staging command under option 1 on 2026-07-12.

```bash
git add -- \
  assets/showcase/buildscan-ludgershall-public.glb \
  assets/showcase/buildscan-ludgershall-buildscan-view-1600.webp \
  assets/showcase/buildscan-ludgershall-buildscan-view-420.webp \
  assets/showcase/buildscan-ludgershall-buildscan-view-840.webp \
  buildscan-viewer.html \
  docs/codex/PRODUCT_IA_PROOF_MAP.md \
  docs/codex/RELEASE_STAGING_MANIFEST.md \
  docs/codex/TRACKER.md \
  index.html \
  scripts/buildscan-viewer-smoke.mjs \
  scripts/measurement-smoke.mjs \
  scripts/product-design-acceptance-smoke.mjs \
  scripts/release-candidate-inventory.mjs \
  scripts/release-header-smoke.mjs \
  scripts/rendered-release-smoke.mjs
```

## 9. Required Checks Before Commit

After Wayne approves staging:

```bash
git status --short --branch
git diff --cached --check
npx --no-install html-validate --rule doctype-style:off --rule void-style:off index.html buildscan-viewer.html
node --check scripts/buildscan-viewer-smoke.mjs
node --check scripts/rendered-release-smoke.mjs
npm run qa:release-staging-manifest
npm run qa:release:local
```

## 10. Checks After Preview Deploy

A refreshed non-production preview requires separate approval. After approval and deployment:

```bash
QA_BASE_URL="<fresh-preview-url>" npm run qa:release:preview
```

## 11. Checks After Production Deploy

No production deployment is approved. If Wayne later approves production, recheck the live rollback target and run:

```bash
QA_PRODUCTION_URL="https://robsonai.co.uk" CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production
```

## 12. Rollback Path

Before commit or deployment, abandon only these fifteen candidate paths or discard the isolated worktree after Wayne's approval. After any separately approved production deployment, restore the production deploy that was live immediately before that action. Never alter the dirty primary checkout and never use a destructive Git command without explicit approval.
