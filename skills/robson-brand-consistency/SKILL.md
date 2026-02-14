---
name: robson-brand-consistency
description: Enforce Robson AI Solutions branding across colours, layout, fonts, icons, and logos. Use when creating or editing website pages, app screens, components, styles, navigation, imagery, icons, CTAs, or copy where brand identity, logo context, colour palette, typography hierarchy, section order, tone of voice, UK English compliance, or iPhone app visual consistency must be preserved.
---

# Robson Brand Consistency

Apply these instructions to every Robson AI Solutions website and app branding task.

## Canonical brand assets

Use only these asset files for production branding usage.

### Logos

- `assets/logo-simple-r.svg` as the primary logo mark.
- `assets/logo-constructed-r.svg` as the secondary logo mark.

### Derived raster asset

- `assets/robson-ai-icon.png` as the approved raster derivative of the primary mark for surfaces that require PNG.

Enforce these asset rules:

- Do not generate replacement logo SVG markup inline.
- Do not pull logos from external URLs or third-party libraries.
- Do not introduce alternate logo filenames for production usage.
- If another file is proposed for logo or icon usage, replace it with the correct canonical asset path.
- Do not redraw or recompose the mark geometry when deriving app assets.

## Non-negotiable rules

- Never show both logo variants together in one context.
- Use `assets/logo-simple-r.svg` for website header, navigation contexts, favicon, app icon contexts, and small-size UI placements.
- Use `assets/logo-constructed-r.svg` only for corporate emphasis contexts such as report covers or statement panels.
- Default to the simple logo when unsure.
- Use the primary mark only for iPhone `AppIcon`; never use the secondary mark or wordmark in the app icon.
- Keep the primary mark centred with clear padding in icon canvases so it does not look squeezed.
- Never place the primary mark inside an additional white rounded-square tile unless explicitly required by the task.
- Ensure the primary mark stays a single solid form with flat colour only and no segmentation.
- Never apply gradients, shadows, or effects to logos.
- Never use gradients in the master layout.
- Use one accent colour per section only.
- Reject decorative AI motifs (robots, neon abstract visuals, AI brain stock imagery).
- Keep icons simple, flat or line-based, with consistent stroke weight.

## Brand system

### Colours

Use only this palette:

- Deep Navy `#002D62`
- White `#FFFFFF`
- Steel Blue `#2F6FA7`
- Soft Grey `#F5F5F5`
- Amber Orange `#E8A400`

Apply one accent colour per section and preserve accessible contrast.

### Typography

Enforce this hierarchy:

- Headings: Montserrat Bold/SemiBold
- Body: Open Sans Regular
- Buttons and UI labels: Poppins or Montserrat Medium

Keep hierarchy consistent (`H1 -> H2 -> body`) and use UK English spelling.

### Layout

Use clean modular sections with subtle rounded cards/panels and generous white space.

Keep navigation simple and predictable with no more than six primary items.

Use this preferred page order:

1. Hero / Introduction
2. About / Credibility
3. Solutions / Services
4. Use Cases / Examples
5. Resources / Thought Leadership
6. Contact / Call to Action

### Imagery and icons

Prefer built-environment and digital-intelligence imagery in cool blue or neutral grading.

Avoid robots, abstract neon visuals, and stock AI brain imagery.

## Copy and tone controls

- Keep tone professional, direct, evidence-led, and calm.
- Prefer terms: evidence-based, structured, intelligence-led, compliance-focused, decision support.
- Avoid hype, exaggerated claims, trend language, and novelty effects.
- Keep CTA text clear and literal.

## iPhone app implementation

- Use `references/ios-app-branding.md` for iOS app icon sizing, padding, and asset-catalog structure.
- Keep app-level colour usage aligned with approved hex values in iOS Color Assets.
- Keep typography hierarchy aligned in app UI:
  - Heading roles map to Montserrat Bold/SemiBold.
  - Body roles map to Open Sans Regular.
  - Button and label roles map to Poppins or Montserrat Medium.
- If branded fonts are not yet bundled in the app target, use platform fallback fonts temporarily and preserve the same visual hierarchy.
- Keep launch/splash, navigation, and settings branding minimal and consistent with the primary mark.

## Workflow

1. Identify task context and affected sections before editing.
2. Select logo and icon assets by context and enforce canonical asset paths.
3. If target is iPhone app UI or `Assets.xcassets`, apply iOS-specific rules from `references/ios-app-branding.md`.
4. Apply approved colours, fonts, icon style, and section structure.
5. Rewrite non-compliant copy into UK English and brand tone.
6. Replace conflicting visual embellishments with compliant alternatives.
7. If requirements conflict with rules, implement the closest compliant option and note the decision.
8. For iPhone app work, validate icon composition and text hierarchy on compact and large iPhone layouts.
9. Run the compliance checklist before finishing.

## Compliance checklist

Confirm each item before completing work:

- Palette and typography are compliant.
- Logo and icon choice matches context and logo pairing rules.
- Layout remains minimal, clear, and section-ordered.
- UK English spelling is used.
- Conflicting visual embellishments are removed.
- iPhone app icon composition has adequate padding and does not appear squeezed.
- iPhone app icon, launch/splash, and top-level navigation branding use the primary mark correctly.

## Reference files

For full policy details and implementation guidance, use:

- `references/brand-guidelines.md`
- `references/ios-app-branding.md`
