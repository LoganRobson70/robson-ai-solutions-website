# Robson AI Solutions Corporate Website Branding and Consistency

## 1. Brand identity

Robson AI Solutions is a professional, intelligence-led consultancy delivering AI-enabled tools and systems for construction, asset management, maintenance planning, and compliance.

Brand expression must convey:

- Trust
- Clarity
- Structure
- Evidence-based decision making

Avoid gimmicks, trend-driven styling, and decorative AI visuals.

## 2. Logo system (critical)

Canonical logo files in this website repository:

- `assets/logo-simple-r.svg` (primary source)
- `assets/logo-constructed-r.svg` (secondary)
- `assets/robson-ai-icon.png` (approved raster derivative of the primary source)

Source-of-truth policy:

- Treat `assets/logo-simple-r.svg` as the master artwork for the primary mark.
- Use `assets/robson-ai-icon.png` for live website delivery where raster output is used:
  - Website header logo image
  - Navigation icon contexts
  - Favicon and apple-touch-icon
  - Other small raster UI placements
- Use `assets/logo-simple-r.svg` as the export source for iPhone app icon outputs in `AppIcon.appiconset`.

Rules:

- Never replace canonical files with externally sourced logos, generated variants, or renamed duplicates.
- Never redraw primary mark geometry in derivatives.
- Keep the primary mark as a single solid form with flat colour only.
- Do not add gradients, shadows, extra tiles, or effects to logos.
- If unsure, default to the primary mark.

### Secondary logo (corporate emphasis)

Use the constructed/segmented `R`, derived from the same base shape.

Use this logo only for corporate emphasis contexts such as:

- Report covers
- Statement panels

Rules:

- Never display both logo versions together.
- Never substitute one for the other outside its context.

## 3. Colour palette (strict)

Primary colours:

- Deep Navy `#002D62`: headers, navigation, footer, primary backgrounds
- White `#FFFFFF`: main content backgrounds

Secondary colours:

- Steel Blue `#2F6FA7`: secondary panels, dividers, charts
- Soft Grey `#F5F5F5`: section backgrounds, cards

Accent colour:

- Amber Orange `#E8A400`: CTA buttons and key highlights only

Rules:

- Use a maximum of one accent colour per section.
- Never use gradients in the master layout.
- Maintain high contrast for accessibility.

## 4. Typography

Headings:

- Font: Montserrat
- Weight: Bold/SemiBold
- Use for page titles, section headers, and key statements

Body text:

- Font: Open Sans
- Weight: Regular
- Use for paragraphs, descriptions, supporting text

Buttons and UI:

- Font: Poppins or Montserrat Medium
- Use clear, concise labels

Rules:

- Keep hierarchy consistent (`H1 -> H2 -> body`).
- Avoid decorative or script fonts.
- Use UK English spelling throughout.

## 5. Layout and structure

Use clean, modular sections.

Prefer cards/panels with:

- Subtle rounded corners
- Generous white space

Navigation must be:

- Simple
- Predictable
- No more than six primary items

Preferred page order:

1. Hero/Introduction
2. About/Credibility
3. Solutions/Services
4. Use Cases/Examples
5. Resources/Thought Leadership
6. Contact/Call to Action

## 6. Imagery and graphics

Use imagery that blends:

- Built environment (buildings, infrastructure)
- Digital intelligence (data overlays, dashboards)

Colour-grade imagery to cool blue/neutral tones.

Avoid:

- Stock AI brain visuals
- Robots
- Abstract neon visuals

Icon rules:

- Keep icons simple
- Use line-based or flat style
- Keep stroke weights consistent

## 7. Tone of voice

Style:

- Professional
- Direct
- Evidence-led
- Calm authority

Avoid:

- Hype
- Buzzwords
- Exaggerated claims

Preferred language:

- Evidence-based
- Structured
- Intelligence-led
- Compliance-focused
- Decision support

## 8. Consistency rules for Codex

When generating or editing pages, enforce all of the following:

- Approved colour palette
- Correct logo usage by context
- Typography hierarchy
- Rejection of conflicting visual embellishments
- UK English spelling
- Minimal, structured layouts

## 9. Decision summary

- If clarity and usability are the priority: use simple `R` (SVG source, PNG derivative where raster delivery is required).
- If corporate emphasis or statement context is the priority: use constructed `R`.
- If unsure: default to simple `R`.

## 10. Intent statement

These rules ensure all Robson AI Solutions pages stay visually, structurally, and tonally consistent regardless of how content is generated or updated.

## 11. iPhone app note

For iPhone app implementation, use the companion guide:

- `references/ios-app-branding.md`

Apply these minimum app rules:

- Use the primary mark only for `AppIcon`.
- Keep icon composition centred with generous padding so the mark does not appear squeezed.
- Keep launch/splash and top-level app branding minimal and consistent with the same primary mark usage.
