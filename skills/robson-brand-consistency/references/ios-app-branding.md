# Robson AI Solutions iPhone App Branding Guide

## 1. Source assets

Use these files as source of truth:

- `assets/logo-simple-r.svg` as the master primary mark.
- `assets/logo-constructed-r.svg` for corporate emphasis contexts only (not for `AppIcon`).
- `assets/robson-ai-icon.png` as approved raster derivative where PNG is required.

## 2. App icon composition rules

For iPhone `AppIcon`:

- Use the primary mark only.
- Do not use wordmark text in the icon.
- Keep the mark centred.
- Keep generous padding so the mark does not look squeezed.
  - Target mark occupancy: 70% to 76% of the square canvas.
  - Target clear padding: 12% to 15% on each edge.
- Use a flat background only.
- Export opaque PNG files for `AppIcon` assets (no transparency).
- Do not place the mark inside an extra white rounded-square tile.

## 3. iOS app icon sizes

Provide all standard iOS sizes in `AppIcon.appiconset`:

- iPhone Notification: `20pt @2x` (40x40), `20pt @3x` (60x60)
- iPhone Settings: `29pt @2x` (58x58), `29pt @3x` (87x87)
- iPhone Spotlight: `40pt @2x` (80x80), `40pt @3x` (120x120)
- iPhone App: `60pt @2x` (120x120), `60pt @3x` (180x180)
- iPad Notification: `20pt @1x` (20x20), `20pt @2x` (40x40)
- iPad Settings: `29pt @1x` (29x29), `29pt @2x` (58x58)
- iPad Spotlight: `40pt @1x` (40x40), `40pt @2x` (80x80)
- iPad App: `76pt @1x` (76x76), `76pt @2x` (152x152)
- iPad Pro App: `83.5pt @2x` (167x167)
- App Store Marketing: `1024x1024`

## 4. Asset catalog structure

For Xcode targets:

- Keep icon files in `Assets.xcassets/AppIcon.appiconset/`.
- Ensure `Contents.json` maps every required size and idiom.
- Use deterministic names such as `icon-20@2x.png`, `icon-60@3x.png`, and `icon-1024.png`.
- Keep one visual composition across all icon sizes.

## 5. Launch/splash guidance

- Use a flat background in approved palette colours.
- Use the primary mark only, centred.
- Do not add decorative effects or secondary mark.
- Keep launch composition minimal and aligned with app icon geometry.

## 6. In-app branding usage

- Navigation/header brand marks: use primary mark only.
- Keep iconography simple, flat or line-based.
- Avoid cluttered badges, glow effects, and novelty AI visuals.
- Keep section spacing modular with rounded panels and clear whitespace.

## 7. iOS colour tokens

Define iOS Color Assets with exact values:

- `BrandNavy` `#002D62`
- `BrandWhite` `#FFFFFF`
- `BrandSteelBlue` `#2F6FA7`
- `BrandSoftGrey` `#F5F5F5`
- `BrandAmber` `#E8A400`

Use at most one accent colour (`BrandAmber`) per section or screen cluster.

## 8. Typography mapping for app UI

- Headings: Montserrat Bold/SemiBold
- Body: Open Sans Regular
- Buttons and labels: Poppins Medium or Montserrat Medium

If custom fonts are bundled in iOS targets:

- Add files to the app target.
- Register in `Info.plist` under `Fonts provided by application`.

If custom fonts are not yet bundled:

- Use iOS fallback fonts temporarily and preserve heading/body/button hierarchy until font assets are integrated.

## 9. iPhone app QA checklist

- App icon uses primary mark only and is not squeezed.
- App icon has no transparent alpha channel for required iOS icon outputs.
- App icon set includes every required size and idiom.
- Launch/splash and top-level app navigation use approved mark and colours.
- Accent usage is controlled (one accent per section).
- Typography hierarchy is preserved.
- Contrast is accessible.
- UK English spelling is used in user-facing copy.
