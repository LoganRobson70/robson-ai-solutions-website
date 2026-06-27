# Release Staging Manifest - BuildScan Interactive Preview Candidate

Last updated: 2026-06-27 23:40 BST
Owner: Wayne Robson / Robson AI Solutions
Repo: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website`
Status: Wayne approved option `1`; the 62 manifest paths have been staged on `codex/buildscan-interactive-preview-release-candidate`; no production deploy is approved

## 1. Purpose

This manifest defines the intended file scope for the next approval-gated preview commit:

`buildscan-interactive-preview-release-candidate`

It exists to prevent accidental broad staging of generated output, secrets, local prototypes, or unrelated files.

Do not run `git add .` for this candidate.

## 2. Approval Boundary

Wayne approved option `1` before Codex performed the preview-candidate staging path.

Wayne must approve before Codex performs any of these actions:

- stage files
- create a commit
- push a branch
- create a Netlify deploy-preview
- expose the optimised BuildScan GLB on any Netlify URL
- production deploy

Approval of this preview candidate does not approve production deployment.

## 3. Current Dirty Scope

Latest inspected status:

- 25 modified tracked files.
- 37 untracked candidate files.
- Total dirty candidate files: 62.
- This manifest itself is included in the untracked candidate file count and is intentionally allowed under the release-candidate docs scope.

Latest validation after staging:

- `git diff --cached --check` passed.
- `npm run qa:release-staging-manifest` passed with artifact `output/release-staging-manifest/smoke-2026-06-27T22-36-54-511Z/release-staging-manifest-smoke.json`.
- `npm run qa:release:local` passed all 37 steps with artifact `output/release-local-gate/gate-2026-06-27T22-37-04-773Z/release-local-gate.json`.

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
AGENTS.md
README.md
building-analyst.html
docs/codex/CAPABILITY_AUDIT.md
docs/codex/DIRTY_RELEASE_ASSESSMENT.md
docs/codex/FIRST_TRANCHE.md
docs/codex/PRD.md
docs/codex/PUBLIC_FULL_SITE_LAUNCH_PLAN.md
docs/codex/PUBLIC_FULL_SITE_LAUNCH_READINESS.md
docs/codex/TRACKER.md
docs/measurement-qa.md
docs/release-handover.md
holding.html
index.html
netlify.toml
package-lock.json
package.json
preview.html
privacy.html
script.js
scripts/lib/static-server.mjs
scripts/measurement-evidence.mjs
scripts/measurement-smoke.mjs
styles.css
who-its-for.html
```

## 5. Untracked Candidate Files

These untracked files are expected in the candidate:

```text
404.html
assets/robson-ai-icon-v3-128.webp
assets/robson-ai-icon-v3-180.png
assets/robson-ai-icon-v3-32.png
assets/robson-ai-icon-v3-transparent-320.webp
assets/showcase/buildscan-ludgershall-model-view-420.webp
assets/showcase/buildscan-ludgershall-model-view-840.webp
assets/showcase/buildscan-ludgershall-public.glb
assets/vendor/three-0.164.1/LICENSE
assets/vendor/three-0.164.1/build/three.module.js
assets/vendor/three-0.164.1/examples/jsm/controls/OrbitControls.js
assets/vendor/three-0.164.1/examples/jsm/libs/meshopt_decoder.module.js
assets/vendor/three-0.164.1/examples/jsm/loaders/GLTFLoader.js
assets/vendor/three-0.164.1/examples/jsm/utils/BufferGeometryUtils.js
buildscan-viewer.html
docs/codex/DESIGN_SYSTEM_CONSOLIDATION_AUDIT.md
docs/codex/PRODUCT_IA_PROOF_MAP.md
docs/codex/PUBLISH_READINESS_AUDIT.md
docs/codex/RELEASE_APPROVAL_PACKET.md
docs/codex/RELEASE_STAGING_MANIFEST.md
docs/codex/WEBSITE_EXCELLENCE_PROGRAMME.md
scripts/buildscan-viewer-smoke.mjs
scripts/browser-coverage-smoke.mjs
scripts/dependency-audit-summary.mjs
scripts/keyboard-release-smoke.mjs
scripts/product-design-acceptance-smoke.mjs
scripts/release-candidate-inventory.mjs
scripts/release-header-smoke.mjs
scripts/release-local-gate.mjs
scripts/release-preview-gate.mjs
scripts/release-production-gate.mjs
scripts/release-security-smoke.mjs
scripts/release-staging-manifest-smoke.mjs
scripts/rendered-release-smoke.mjs
scripts/responsive-route-smoke.mjs
scripts/semantic-seo-smoke.mjs
scripts/visual-polish-smoke.mjs
```

## 6. Asset Size Watch

Observed local sizes:

```text
assets/robson-ai-icon-v3-128.webp                         1.2K
assets/robson-ai-icon-v3-180.png                           13K
assets/robson-ai-icon-v3-32.png                           1.2K
assets/robson-ai-icon-v3-transparent-320.webp             6.0K
assets/showcase/buildscan-ludgershall-model-view-420.webp 5.2K
assets/showcase/buildscan-ludgershall-model-view-840.webp  18K
assets/showcase/buildscan-ludgershall-public.glb          1.3M
assets/vendor/three-0.164.1/LICENSE                       1.1K
assets/vendor/three-0.164.1/build/three.module.js         1.2M
assets/vendor/three-0.164.1/examples/jsm/controls/OrbitControls.js 31K
assets/vendor/three-0.164.1/examples/jsm/libs/meshopt_decoder.module.js 24K
assets/vendor/three-0.164.1/examples/jsm/loaders/GLTFLoader.js 107K
assets/vendor/three-0.164.1/examples/jsm/utils/BufferGeometryUtils.js 31K
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

After Wayne approves `buildscan-interactive-preview-release-candidate`, use an explicit path list rather than `git add .`.

```bash
git add -- \
  AGENTS.md \
  README.md \
  404.html \
  building-analyst.html \
  buildscan-viewer.html \
  holding.html \
  index.html \
  netlify.toml \
  package-lock.json \
  package.json \
  preview.html \
  privacy.html \
  script.js \
  styles.css \
  who-its-for.html \
  assets/robson-ai-icon-v3-128.webp \
  assets/robson-ai-icon-v3-180.png \
  assets/robson-ai-icon-v3-32.png \
  assets/robson-ai-icon-v3-transparent-320.webp \
  assets/showcase/buildscan-ludgershall-model-view-420.webp \
  assets/showcase/buildscan-ludgershall-model-view-840.webp \
  assets/showcase/buildscan-ludgershall-public.glb \
  assets/vendor/three-0.164.1/LICENSE \
  assets/vendor/three-0.164.1/build/three.module.js \
  assets/vendor/three-0.164.1/examples/jsm/controls/OrbitControls.js \
  assets/vendor/three-0.164.1/examples/jsm/libs/meshopt_decoder.module.js \
  assets/vendor/three-0.164.1/examples/jsm/loaders/GLTFLoader.js \
  assets/vendor/three-0.164.1/examples/jsm/utils/BufferGeometryUtils.js \
  docs/codex/CAPABILITY_AUDIT.md \
  docs/codex/DESIGN_SYSTEM_CONSOLIDATION_AUDIT.md \
  docs/codex/DIRTY_RELEASE_ASSESSMENT.md \
  docs/codex/FIRST_TRANCHE.md \
  docs/codex/PRD.md \
  docs/codex/PRODUCT_IA_PROOF_MAP.md \
  docs/codex/PUBLISH_READINESS_AUDIT.md \
  docs/codex/PUBLIC_FULL_SITE_LAUNCH_PLAN.md \
  docs/codex/PUBLIC_FULL_SITE_LAUNCH_READINESS.md \
  docs/codex/RELEASE_APPROVAL_PACKET.md \
  docs/codex/RELEASE_STAGING_MANIFEST.md \
  docs/codex/TRACKER.md \
  docs/codex/WEBSITE_EXCELLENCE_PROGRAMME.md \
  docs/measurement-qa.md \
  docs/release-handover.md \
  scripts/browser-coverage-smoke.mjs \
  scripts/buildscan-viewer-smoke.mjs \
  scripts/dependency-audit-summary.mjs \
  scripts/keyboard-release-smoke.mjs \
  scripts/product-design-acceptance-smoke.mjs \
  scripts/lib/static-server.mjs \
  scripts/measurement-evidence.mjs \
  scripts/measurement-smoke.mjs \
  scripts/release-candidate-inventory.mjs \
  scripts/release-header-smoke.mjs \
  scripts/release-local-gate.mjs \
  scripts/release-preview-gate.mjs \
  scripts/release-production-gate.mjs \
  scripts/release-security-smoke.mjs \
  scripts/release-staging-manifest-smoke.mjs \
  scripts/rendered-release-smoke.mjs \
  scripts/responsive-route-smoke.mjs \
  scripts/semantic-seo-smoke.mjs \
  scripts/visual-polish-smoke.mjs
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

After the approved branch push creates a Netlify deploy-preview, run:

```bash
QA_BASE_URL="https://<netlify-preview-url>" npm run qa:release:preview
```

Then perform Browser review on:

- homepage desktop and mobile
- Building Analyst page
- Who it fits page
- Privacy page
- 404 page
- holding fallback
- direct `buildscan-viewer.html`
- homepage embedded BuildScan opt-in and loaded state

## 11. Remaining Gates

Before production:

- Wayne must approve public production exposure of the optimised GLB.
- The Netlify preview must pass `qa:release:preview`.
- Browser review must pass on the deployed preview.
- Full Codex Security scan remains recommended if Wayne presses Start scan in the Codex Security workspace.
- Wayne must separately approve production deploy.
