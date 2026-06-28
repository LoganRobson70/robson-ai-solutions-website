# Motion Reference Brief - Luffu, Steno, Unfold

Last updated: 2026-06-28 00:45 BST
Owner: Wayne Robson / Robson AI Solutions
Status: reference audit and future-tranche brief; not approved implementation

## 1. Purpose

This brief records how the Luffu, Steno and Unfold references should influence the Robson AI Solutions website without derailing the current validated release candidate.

It does not approve UI changes, commits, preview deploys or production deploys. If Wayne chooses to run this before production, the existing preview evidence must be treated as stale and the release gates must be rerun.

Reference capture:

- `output/reference-motion/2026-06-27T23-33-19-849Z/luffu-hero.png`
- `output/reference-motion/2026-06-27T23-33-19-849Z/luffu-scroll.png`
- `output/reference-motion/2026-06-27T23-33-19-849Z/steno-hero.png`
- `output/reference-motion/2026-06-27T23-33-19-849Z/unfold-lapa-hero.png`
- `output/reference-motion/2026-06-27T23-33-19-849Z/summary.json`

## 2. Current Robson Baseline

The current candidate already includes a motion layer:

- scroll-reveal treatment for major homepage sections
- cursor-responsive ambient/pointer-depth surfaces on capable devices
- animated technical hero fields
- opt-in interactive BuildScan GLB viewer
- reduced-motion handling
- visual-polish, responsive, keyboard, rendered and measurement smoke coverage

This means the next motion tranche should refine hierarchy and product proof. It should not add generic decoration.

## 3. Useful Patterns From The References

### Luffu

What works:

- The first viewport is emotionally clear because a single full-bleed visual carries the product context.
- The lower-page composition uses floating people/questions around a central concept, which makes the product feel active without needing busy UI.
- Motion appears to support spatial hierarchy rather than becoming the main message.

Robson translation:

- Use one product-proof focal object, such as the Building Analyst workflow or BuildScan model, as the anchor.
- Let supporting evidence labels, data chips or workflow points move lightly around that proof object.
- Keep the visitor's reading path stable.

Do not copy:

- consumer-health warmth, family imagery, lifestyle tone, or oversized lifestyle branding.

### Steno

What works:

- The hero has a confident media-led product moment.
- Layered imagery and perspective make the proposition feel more premium.
- It uses a stronger visual hook than a conventional SaaS page.

Robson translation:

- A controlled hero/proof stage could be justified if it makes Building Analyst or BuildScan easier to understand.
- Use restrained perspective, glass, navy/tech-blue, measured contrast and real product proof.

Do not copy:

- large kinetic type as the default visual language
- celebrity/influencer positioning
- heavy theatrical movement that competes with trust and reading

### Unfold

What works:

- Large editorial hierarchy creates confidence quickly.
- Scroll rhythm and section contrast make the page feel intentional.

Robson translation:

- Use editorial rhythm sparingly for proof and credibility sections.
- Keep Fraunces/display moments controlled and paired with precise Inter body copy.

Do not copy:

- studio/agency self-expression as the main product signal
- oversized typography where product proof should be doing the work

## 4. Recommended Motion Direction

The recommended direction is `Robson Proof Motion System`.

Principle:

- Motion should make the product feel professional, inspectable and alive.
- It should clarify what Robson AI does: survey evidence, model review, reporting workflow, property operations decisions.
- It should never imply unreleased functionality or hide weak proof behind polish.

Recommended scope:

- Homepage hero: add at most one stronger focal proof moment if it improves first-viewport comprehension.
- BuildScan section: make the model proof feel tactile and inspectable without loading the GLB automatically.
- Building Analyst section/page: use scroll-timed evidence reveals to show the workflow rather than generic feature cards.
- Contact/trust/privacy areas: keep calm and mostly static.

Where calm restraint wins:

- privacy, contact, security, accessibility, product maturity, release-stage claims, footer, legal and fallback routes

Where a bolder moment may be warranted:

- homepage hero or BuildScan proof section, only if the motion directly explains the proposition and still passes performance/accessibility gates

## 5. Concrete Options For Wayne

1. Recommended after production: `post-publish-proof-motion-polish`.
   Add a bounded motion pass after the current validated release is published. Use the reference lessons to refine the hero/BuildScan/Building Analyst proof moments, then run the full local and preview gates again.

2. Pre-production alternative: `hold-publish-and-motion-polish-now`.
   Pause production, implement the motion pass now, regenerate preview evidence, and accept that the current validated preview is no longer the publish candidate.

3. Conservative alternative: `publish-now-motion-later`.
   Keep the current candidate unchanged, publish after approval, and treat this brief as the next design tranche.

## 6. Acceptance Criteria

Any motion implementation from this brief must pass all of the following:

- No product facts, maturity claims, Apple/AI claims, customer proof or integration claims are added without approval.
- Motion uses transform and opacity where practical; layout-affecting animation is avoided unless justified and tested.
- `prefers-reduced-motion: reduce` disables non-essential motion.
- Pointer-depth effects are limited to fine-pointer devices and do not run on coarse-touch mobile.
- No scroll hijacking, forced delays, required animation reading, cursor trails, particles, generic floating blobs, or decorative one-note effects.
- No new external runtime dependency unless Wayne approves it and the release gates still pass.
- Lighthouse remains at or above the current release threshold: performance at least 95, accessibility at least 95, best practices at least 95, SEO at least 95.
- Core Web Vitals remain safe: CLS 0 or effectively 0, LCP under 2.5 seconds on the measured homepage run, and no obvious interaction delay in smoke testing.
- Automated axe serious/critical findings remain zero where covered by the current measurement scripts.
- Keyboard journeys still pass: skip link, consent, navigation, workflow tabs, copy-email, BuildScan opt-in and Building Analyst tabs.
- Responsive route smoke still passes across mobile, tablet and desktop.
- Rendered smoke shows no horizontal overflow, text clipping, control overlap, console errors or failed requests.
- Visual-polish smoke still rejects large high-opacity text-level background blocks and obvious amateur overlays.
- BuildScan viewer smoke still proves fallback-first loading, model-ready/error states, keyboard controls, safe GLB handling and no external GLB URI references.
- Release inventory and secret scan remain clean.

## 7. Validation Commands

Minimum local validation after implementation:

```bash
git diff --check
npm run qa:release-inventory
npm run qa:visual-polish
npm run qa:responsive
npm run qa:keyboard
npm run qa:rendered
npm run qa:measurement:evidence
npm run qa:release:local
```

Preview validation if the tranche is taken toward release:

```bash
QA_BASE_URL="https://<netlify-preview-url>" npm run qa:release:preview
```

Production validation remains approval-gated:

```bash
QA_PRODUCTION_URL=https://robsonai.co.uk CONFIRM_PRODUCTION_VERIFICATION=true npm run qa:release:production
```

## 8. Current Recommendation

Do not implement this motion tranche before production unless Wayne explicitly chooses option 2.

The current validated preview is already close to publish-ready. The best release sequence is:

1. Publish the validated preview after Wayne approval.
2. Verify production.
3. Run this motion brief as the first post-publish polish tranche.
