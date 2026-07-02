# Word-Heavy Section Polish Audit

Last updated: 2026-07-02 18:21 BST
Branch: `codex/word-heavy-section-polish`

## Scope

Approved tranche: improve the word-heavy homepage sections Wayne flagged without changing product claims, adding assets, adding forms, changing analytics, or deploying production.

Sections reviewed:

- Workflow Finder
- Property Operations
- Method
- Credibility
- Contact

Continuation audit also reviewed the first-load consent presentation because it appeared in the fresh homepage screenshots and affected first-viewport hierarchy.

## Current-State Finding

The live page already had credible copy and cautious product framing, but several sections read as stacked text cards rather than operational product proof. The issue was visual density, not product positioning.

Reference evidence:

- In-app browser current-state full-page screenshot: `live-current-full-page.png`
- Local post-change rendered screenshot: `output/playwright/rendered-release-smoke-2026-07-02T15-48-58-679Z/desktop-homepage.png`
- Fresh continuation audit screenshots: `output/product-design-audit/word-heavy-continuation-2026-07-02T17-15-15-448Z`.
- Consent first-impression screenshots after polish: `output/product-design-audit/consent-first-impression-2026-07-02T17-18-36-986Z`.

## Design Direction

Use operational proof surfaces:

- route boards instead of paragraphs
- status signals instead of long explanation blocks
- decision rails instead of generic cards
- compact process loops instead of repeated prose
- a workflow brief instead of a contact text wall

The treatment keeps the Robson AI style: navy, white, controlled blue/orange signals, sharp 8px cards, restrained motion, and cautious product language.

## Implemented Changes

- Finder now includes a compact outcome strip for each workflow route.
- Operations now includes status signals before the queue metadata.
- Method now has a visible Capture / Structure / Support signal bar.
- Credibility now has a public proof summary bar above the proof cards.
- Contact now starts with a workflow brief card before the routing options.
- Consent now uses a slimmer bottom rail so the privacy choice remains visible without covering the desktop hero proof board.

## Evidence Limits

This audit is based on captured screenshots, DOM/code inspection, and automated local QA. It does not replace Wayne's visual sign-off, full manual accessibility review, or deployed-preview validation. On mobile, the consent rail remains fixed and can sit over the bottom of the tall hero area until the visitor chooses an option; this is acceptable for the current local candidate because the main headline and CTAs remain visible, but a full consent-pattern redesign should be a separate approved tranche if Wayne wants it.
