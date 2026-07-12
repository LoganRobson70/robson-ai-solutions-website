# Release Staging Manifest - Complete Production-Readiness Pass

Last updated: 2026-07-12
Owner: Wayne Robson / Robson AI Solutions
Worktree: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website.current-main-integration`
Branch: `codex/current-main-building-analyst-integration`
Status: local candidate validated through the complete 41-step release gate; exact staging, one commit and a fresh non-production preview approved; push and production deployment not approved

## Purpose

This manifest defines the local candidate for `complete-production-readiness-improvement-pass` against live baseline commit `da78e54`.

The candidate introduces a generated shared navigation/footer source, extensionless canonical URLs, a safer `dist/` deployment allowlist, one Building Analyst conversion objective, clearer product maturity labels, a shorter Building Analyst page with FAQ, responsive task-order and typography improvements, BuildScan accessibility/CSP hardening, inactive-analytics consent behaviour, metadata/schema improvements and expanded QA.

The candidate does not invent founder credentials, customer proof or product capability. Wayne's confirmed sole-trader identity, public contact, lawful-basis, retention, processor and restrained founder-content decisions are recorded in `docs/codex/PRIVACY_FACTS_REQUIRED.md` and incorporated in the Privacy Notice.

Do not run `git add .`.

## Approval boundary

Approved: local implementation, documentation, validation, exact-manifest staging, one candidate commit and a fresh non-production Netlify preview.

Not approved: push, PR, production deploy, analytics enablement, DNS/DMARC changes or external messages.

## Candidate inventory

- 28 modified tracked files.
- 13 untracked candidate files.
- 41 dirty candidate files.
- Generated `dist/` output is ignored and must not be staged.
- Existing real product assets and the 10.77 MB Ludgershall GLB are unchanged.

## 4. Modified Tracked Files

```text
.gitignore
404.html
building-analyst.html
buildscan-viewer.html
docs/codex/RELEASE_STAGING_MANIFEST.md
docs/codex/TRACKER.md
index.html
netlify.toml
package.json
privacy.html
script.js
scripts/browser-coverage-smoke.mjs
scripts/buildscan-viewer-smoke.mjs
scripts/keyboard-release-smoke.mjs
scripts/lib/static-server.mjs
scripts/measurement-evidence.mjs
scripts/measurement-smoke.mjs
scripts/product-design-acceptance-smoke.mjs
scripts/release-candidate-inventory.mjs
scripts/release-header-smoke.mjs
scripts/release-local-gate.mjs
scripts/rendered-release-smoke.mjs
scripts/responsive-route-smoke.mjs
scripts/semantic-seo-smoke.mjs
scripts/visual-polish-smoke.mjs
sitemap.xml
styles.css
who-its-for.html
```

## 5. Untracked Candidate Files

```text
assets/showcase/building-analyst-leisure-centre-explorer-1280.webp
assets/showcase/building-analyst-leisure-centre-explorer-640.webp
assets/showcase/building-analyst-leisure-centre-explorer-960.webp
assets/showcase/robson-ai-building-surveying-interactive-hero-v5-640.webp
assets/showcase/robson-ai-building-surveying-interactive-hero-v5-960.webp
docs/codex/BUILD_SCAN_VIEWER_SECURITY.md
docs/codex/PRIVACY_FACTS_REQUIRED.md
scripts/build-public-site.mjs
scripts/consent-state-smoke.mjs
scripts/internal-link-smoke.mjs
scripts/site-shell-source.mjs
scripts/sync-site-shell.mjs
styles-production.css
```

## 8. Staging Command After Approval Only

Wayne must approve before Codex performs any of these actions: staging, commit, push, preview deployment or production deployment.

```bash
git add -- \
  .gitignore \
  404.html \
  building-analyst.html \
  buildscan-viewer.html \
  assets/showcase/building-analyst-leisure-centre-explorer-1280.webp \
  assets/showcase/building-analyst-leisure-centre-explorer-640.webp \
  assets/showcase/building-analyst-leisure-centre-explorer-960.webp \
  assets/showcase/robson-ai-building-surveying-interactive-hero-v5-640.webp \
  assets/showcase/robson-ai-building-surveying-interactive-hero-v5-960.webp \
  docs/codex/BUILD_SCAN_VIEWER_SECURITY.md \
  docs/codex/PRIVACY_FACTS_REQUIRED.md \
  docs/codex/RELEASE_STAGING_MANIFEST.md \
  docs/codex/TRACKER.md \
  index.html \
  netlify.toml \
  package.json \
  privacy.html \
  script.js \
  scripts/browser-coverage-smoke.mjs \
  scripts/build-public-site.mjs \
  scripts/buildscan-viewer-smoke.mjs \
  scripts/consent-state-smoke.mjs \
  scripts/internal-link-smoke.mjs \
  scripts/keyboard-release-smoke.mjs \
  scripts/lib/static-server.mjs \
  scripts/measurement-evidence.mjs \
  scripts/measurement-smoke.mjs \
  scripts/product-design-acceptance-smoke.mjs \
  scripts/release-candidate-inventory.mjs \
  scripts/release-header-smoke.mjs \
  scripts/release-local-gate.mjs \
  scripts/rendered-release-smoke.mjs \
  scripts/responsive-route-smoke.mjs \
  scripts/semantic-seo-smoke.mjs \
  scripts/site-shell-source.mjs \
  scripts/sync-site-shell.mjs \
  scripts/visual-polish-smoke.mjs \
  sitemap.xml \
  styles.css \
  styles-production.css \
  who-its-for.html
```

## Required checks before any commit decision

```bash
npm run build:site
npm run qa:release-staging-manifest
npm run qa:release:local
git diff --check
```

After those checks pass, Wayne must review the local desktop/mobile result before deciding whether a non-production preview is appropriate. The privacy/founder decisions are now resolved for this candidate.

## Rollback path

No rollback action is needed for local uncommitted work. If a future preview or release is approved, retain production deploy `6a53b157d6c68db39daba82a` as the current known-good live baseline until a new production verification gate passes.
