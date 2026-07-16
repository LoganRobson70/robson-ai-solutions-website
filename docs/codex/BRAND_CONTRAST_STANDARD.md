# Robson AI Brand Contrast Standard

Status: active website release rule
Owner: Robson AI Solutions
Applies to: Robson AI and product marks used on the public website

## Non-negotiable rule

The approved Robson mark contains dark and bright blues. It must never be left without local separation on a dark-blue, navy, photographic, animated or otherwise visually complex surface.

Use the approved Version 3 mark with its soft light-blue, slightly rotated shadow on those surfaces. The treatment must stay local to the symbol, preserve the surrounding composition and avoid a white plate or neutral halo. The original mark remains unmodified; the exposed blue shadow provides the local separation.

## Treatment matrix

| Surface | Approved treatment |
| --- | --- |
| White or light neutral | The transparent mark may be used without a plate. |
| Navy, blue or near-black | Use the approved rotated blue shadow treatment. |
| Photograph, video, canvas or gradient | Use the rotated blue shadow unless the mark already sits inside an opaque light interface surface. |
| Uncertain or changing background | Default to the rotated blue shadow treatment. |

## Website implementation contract

- Mark a dark or complex brand surface with `data-brand-surface="dark"`.
- Place the approved treatment inside it with `data-brand-contrast="rotated-blue-shadow"`.
- Use `assets/robson-ai-icon-v3-rotated-blue-shadow.webp`; it contains the exact Version 3 mark and the approved soft blue shadow as one transparent composite asset.
- When a mark is already baked into an approved composition, align the composite asset precisely over it so the front mark covers the baked copy and only the shadow edge is newly exposed.
- Keep the composite tightly localised, inset from the containing image and clear of adjacent wordmarks, headlines and controls.
- Do not substitute a neutral halo, opaque plate, generic CSS glow or regenerated logo.

## Release guard

`npm run qa:product-design` verifies that every declared dark marketing surface uses exactly one approved Version 3 composite asset. `npm run qa:visual-polish` verifies the asset decodes at its approved dimensions, renders visibly and remains tightly contained within the intended brand area on mobile, tablet and desktop.

This is a brand-legibility standard. Logos are not assessed as normal body text under WCAG contrast rules, so release notes should not describe this as a formal WCAG text-contrast failure.

## Future asset checklist

1. Decide whether the destination surface is light, dark or complex before approving the composition.
2. Apply the treatment matrix above before export or add the approved composite asset at implementation time.
3. Check the smallest rendered breakpoint, not only the full-size source artwork.
4. Run the product-design and visual-polish checks before any preview or production release.
