# Design QA — Surveying Product Studio and Building Analyst Explorer

## Comparison target

- Original studio source visual: `/Users/wayne/.codex/generated_images/019f487f-a269-7790-a40a-b1926ee4ff91/exec-a12f5394-6c3b-4812-895e-d78c22d09d12.png`
- Approved interactive direction: `/Users/wayne/.codex/generated_images/019f501a-c707-7412-9dd2-249df574b303/exec-a60ef3c9-f7bc-4aee-be23-9b64fbc47e26.png`
- Current hero source asset: `/Users/wayne/.codex/generated_images/019f501a-c707-7412-9dd2-249df574b303/exec-b50b31ca-486c-439d-9d07-d27d7a11ee2b.png`
- Current explorer source asset: `/Users/wayne/.codex/generated_images/019f501a-c707-7412-9dd2-249df574b303/exec-d602aaa3-18e9-43f9-956c-30c0e0c8bb3d.png`
- Desktop implementation evidence: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website/output/playwright/rendered-release-smoke-2026-07-11T18-17-09-865Z/desktop-homepage.png`
- Explorer interaction evidence: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website/output/playwright/keyboard-release-smoke-2026-07-11T18-15-55-090Z/building-analyst-explorer-keyboard.png`
- Mobile evidence: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website/output/playwright/rendered-release-smoke-2026-07-11T18-17-09-865Z/mobile-homepage-first-load.png`
- Viewport: desktop 1440 × 1024; mobile 390 × 844
- State: local homepage, analytics unset, static BuildScan fallback visible, globe running, interactive model not yet loaded
- User-directed change to the source target: restore the original spinning Robson AI globe as a decorative hero element. The globe does not represent a map, GIS feature or product integration.

## Comparison evidence

- Full-view side-by-side: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website/output/design-qa-2026-07-10/reference-vs-implementation-final.png`
- Focused hero comparison: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website/output/design-qa-2026-07-10/hero-focus-comparison.png`
- Final building-surveying comparison: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website/output/design-qa-2026-07-11/reference-vs-surveying-ipad-hero.png`
- Focused iPad detail: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website/output/design-qa-2026-07-11/ipad-detail.png`
- Browser-rendered full page: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website/output/playwright/rendered-release-smoke-2026-07-11T06-26-13-692Z/desktop-homepage.png`

## Findings

- No actionable P0, P1 or P2 design differences remain.
- Fonts and typography: implementation uses the local Manrope asset throughout the homepage. The initial serif override was removed. Headline weight, line height, blue emphasis and four-line desktop wrap now follow the selected direction.
- Spacing and layout rhythm: header, split hero, truth strip and three-column product grid preserve the source hierarchy. The implementation product cards are deliberately taller because they include the verified Building Analyst stages and honest maturity detail rather than abbreviated concept copy.
- Colours and visual tokens: white, pale grey, dark navy, cobalt blue and orange signal accents align with the source. Contrast remains strong in the light and dark sections.
- Image quality and asset fidelity: the hero communicates building surveying directly with two professionals of different ethnic backgrounds shown at equal status. Both carry dark iPads with subtle monochrome engraved Robson AI icon marks; no screen, invented UI, phone or camera is visible. The detailed explorer uses a separate low-rise leisure/community building with six deliberately visible example conditions. BuildScan still uses the existing real Ludgershall model asset. No floor plan, map, fake dashboard or invented app screen is present. The restored globe uses the existing canvas renderer and country data.
- Copy and content: Building Analyst, BuildScan and Property Operations are explicitly separate today. Building Analyst is labelled `In development`, BuildScan `Working local product`, and Property Operations `Future exploration`. The professional-review and no-contact-form boundaries remain visible.
- Responsive behaviour: 390 px and 1440 px captures show no horizontal overflow. The mobile menu has a 44 px control, closes after navigation, and supports Escape.

## Comparison history

1. Initial implementation comparison
   - Earlier findings: P1 wrong serif display font; P1 BuildScan proof image inherited a 1020 px height and became vertically distorted; P2 hero height pushed the product relationship too far below the fold.
   - Fixes: scoped Manrope to the studio hero, constrained the real BuildScan proof image to a landscape crop, reduced the headline size, widened its measure, aligned the hero columns at the top and reduced hero image height/padding.
   - Post-fix evidence: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website/output/design-qa-2026-07-10/reference-vs-implementation-v2.png`
2. User-requested globe restoration
   - Change: restored the original animated globe renderer as a contained overlay on the marketing photograph.
   - Product-safety treatment: retained the separate-products truth strip and explicit no-map/no-floor-plan/no-connected-system copy.
   - Post-fix evidence: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website/output/design-qa-2026-07-10/reference-vs-implementation-final.png`
3. User-rejected hand-and-phone photograph
   - Earlier finding: P1 the staged hand-and-phone scene felt wrong for the professional hero and dominated the building context.
   - Intermediate fix: generated a clean building-only architectural image and removed the rejected hand-and-phone asset.
4. Building-surveying clarification
   - Earlier finding: P1 the building-only replacement was professional but too generic; it did not immediately communicate building surveying.
   - Fix: replaced it with a building-dominant exterior condition-inspection scene. The surveyor is a secondary full-body figure with a paper clipboard and no device. Mobile object positioning was shifted to `40% 48%` so the surveyor remains fully visible beside the entrance.
   - Post-fix evidence: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website/output/design-qa-2026-07-11/reference-vs-building-surveying-hero.png` and `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website/output/design-qa-2026-07-11/mobile-surveying-hero-figure-v2.png`.
5. iPad replacement
   - Requested change: replace the paper clipboard with an iPad.
   - Fix: precise-object edit replaced only the clipboard with a correctly scaled slim dark iPad, held in the same hand position with its screen facing inward. The surveyor, building, lighting, framing and mobile crop remain unchanged.
   - Post-fix evidence: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website/output/design-qa-2026-07-11/ipad-detail.png`, `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website/output/design-qa-2026-07-11/desktop-surveying-ipad-hero.png` and the final mobile figure capture.
6. Two-person advertising hero and Building Analyst explorer
   - Requested change: show two equal-status surveyors, both carrying subtly engraved iPads; use two quick hero issues and a separate, more detailed building explorer.
   - Numbering rule: the hero points remain unnumbered. The detailed explorer has exactly one numbering system: list issues 1–6 and photo markers 1–6, rendered from the same data source. Workflow stages are unnumbered.
   - Placement correction: image coordinates were checked against the source photograph and tightened so each marker sits directly on its corresponding physical feature: gutter/downpipe junction, brick crack, glazing perimeter, entrance threshold, open cladding joint and service penetration.
   - Interaction result: hover, focus and click reveal the issue; list and image marker pressed states stay synchronized; keyboard arrows, Home and End navigate the issue list; the professional workflow panel updates from the same selected issue.
   - Product boundary: all conditions and workflow copy are illustrative. Building Analyst supports evidence, evaluation, review and reporting; qualified professionals remain responsible for evaluation and approval.
   - Post-fix evidence: `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website/output/playwright/keyboard-release-smoke-2026-07-11T18-15-55-090Z/building-analyst-explorer-keyboard.png` and `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website/output/playwright/rendered-release-smoke-2026-07-11T18-17-09-865Z/mobile-homepage-first-load.png`.
7. First-screen performance polish
   - Finding: the first Lighthouse run exposed a delayed headline repaint because the full-resolution hero image competed with the preloaded local font.
   - Fix: removed the first-screen reveal delay and exported the same approved hero photograph at a web-sized 1200 × 800, 98.6 KB. The detailed explorer remains lazy-loaded.
   - Result: Lighthouse performance 96, accessibility 100, best practices 100, SEO 100, LCP about 2.40 seconds and CLS 0 in the final full local gate.

## Primary interactions tested

- Skip link and primary navigation by keyboard.
- Mobile menu open/close, link close and Escape close.
- Email copy feedback.
- Segmented email routes.
- Opt-in BuildScan load; static fallback remains before load and the interactive GLB reaches ready state after activation.
- Globe asset request and canvas rendering.
- Hero issue reveal by hover/focus/click with direct tooltip attachment.
- Detailed issue selection through both the numbered list and matching image markers.
- One-to-one 1–6 correspondence, synchronized selection state, Arrow/Home/End keyboard navigation and live workflow-panel updates.
- Browser console and failed-request checks: no blocking console errors or failed requests in the final rendered, responsive, keyboard, BuildScan viewer and measurement checks.

## Follow-up polish

- P3: Wayne may choose to shorten the detailed issue descriptions during a final public-copy pass; the current wording is intentionally explicit about professional responsibility.

final result: passed
