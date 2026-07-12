# BuildScan public viewer security boundary

Last reviewed: 2026-07-12

## Current design

- The viewer and GLB are same-origin, static, public assets.
- The viewer is not loaded until a visitor selects the disclosed 10.77 MB interactive-model control.
- The parent accepts viewer messages only from its own origin, the expected iframe window and the `buildscan-viewer` message source.
- Three.js is self-hosted and pinned at `0.164.1`; the vendored licence is retained in `assets/vendor/three-0.164.1/LICENSE`.
- Viewer-only WebAssembly and blob permissions are scoped to `/buildscan-viewer.html`; the rest of the site does not pre-authorise them.

## Containment decision

An iframe sandbox using both `allow-scripts` and `allow-same-origin` would not provide a meaningful boundary for same-origin content. Removing `allow-same-origin` would change the iframe to an opaque origin and would require a different messaging and asset-hosting design. The current viewer therefore remains trusted same-origin static code rather than presenting a weak sandbox as strong isolation.

Strong isolation requires hosting the viewer on a separate origin, a separate CSP and an explicit cross-origin messaging contract. That is a future security tranche, not a claim made by the current site.

## Dependency pin decision

The official Three.js releases page was reviewed on 12 July 2026 and listed `r184` as latest. The public viewer remains pinned to `r164` because it is a small, locally hosted, regression-tested viewer and a 20-release jump may change loaders, controls, rendering or browser behaviour. An upgrade is not bundled into this website-release tranche.

Next review date: 12 October 2026. At that review, compare the official migration guide from `r164` to the then-current release, update the entire matching core/addons set together, retain the licence, and rerun direct, embedded, keyboard, fallback, CSP, visual and performance gates before release.

## Review triggers

Review this boundary before changing the Three.js version, accepting user-supplied models, adding remote model URLs, adding dynamic viewer code, or moving the viewer to another origin.
