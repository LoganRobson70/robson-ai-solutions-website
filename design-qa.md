# Design QA - Building Analyst rotated blue shadow

Source visual truth: `/Users/wayne/.codex/visualizations/2026/07/15/019f67a5-7496-7730-9f41-711b88b47162/rotated-shadow-implementation/canva-reference.png`

Focused source comparison: `/Users/wayne/.codex/visualizations/2026/07/15/019f67a5-7496-7730-9f41-711b88b47162/rotated-shadow-implementation/canva-reference-focus.png`

Implementation screenshots: `/Users/wayne/.codex/visualizations/2026/07/15/019f67a5-7496-7730-9f41-711b88b47162/rotated-shadow-implementation/desktop-refined.png`, `/Users/wayne/.codex/visualizations/2026/07/15/019f67a5-7496-7730-9f41-711b88b47162/rotated-shadow-implementation/desktop-gallery.png`, `/Users/wayne/.codex/visualizations/2026/07/15/019f67a5-7496-7730-9f41-711b88b47162/rotated-shadow-implementation/mobile-featured.png`

Focused combined comparison: `/Users/wayne/.codex/visualizations/2026/07/15/019f67a5-7496-7730-9f41-711b88b47162/rotated-shadow-implementation/canva-vs-desktop-refined-focus.png`

Viewports: 1440 x 1000 desktop and 390 x 844 mobile

State: Building Analyst product visuals with all three marketing images and both contrast assets decoded

## Comparison scope

The Canva source is a treatment board, not a complete website composition. Full-view comparison therefore checks the intended navy context, unchanged Version 3 mark and soft light-blue rotated shadow. Focused comparison normalises the logo region so shadow colour, spread, mark fidelity and alignment can be judged directly.

## Findings

- No actionable P0, P1 or P2 mismatch remains.
- The website uses the exact Version 3 mark, not a redraw. The selected azure shadow remains local to the symbol and does not cover the Building Analyst wordmark or marketing headline.
- Desktop and mobile preserve the same treatment without overflow, clipping or a second visible logo.

## Required fidelity surfaces

- Fonts and typography: unaffected; existing Manrope hierarchy and wrapping are preserved.
- Spacing and layout rhythm: treatment remains inside the original brand area; surrounding image crop, captions and section spacing are unchanged.
- Colors and visual tokens: the navy context is preserved and the shadow uses the selected light-blue family rather than the rejected neutral halo.
- Image quality and asset fidelity: the transparent 820 x 920 WebP contains the exact Version 3 mark and shadow as one real image asset. It decodes cleanly at desktop and mobile sizes with no custom SVG or CSS-drawn substitute.
- Copy and content: unchanged.

## Interaction and diagnostics

- `See how it works` reaches `#workflow`.
- In-app Browser diagnostics reported no warnings or errors.
- No horizontal overflow occurred at either tested viewport.

## Comparison history

1. Initial implementation used a low-spread blue edge. Focused comparison found the website shadow materially weaker than Wayne's Canva reference (P2).
2. The composite asset was rebuilt with a stronger, softer rotated blue shadow and re-aligned over the baked mark.
3. Post-fix focused comparison shows equivalent treatment intent and no remaining P0/P1/P2 mismatch.

## Follow-up polish

- P3: verify the same asset on a future photographic background before extending the rule beyond the current navy marketing compositions.

final result: passed
