# Robson AI Design System Consolidation Audit

Last updated: 2026-06-21 21:20 BST
Owner: Wayne Robson / Robson AI Solutions
Status: audit plus approved cleanup notes, no production changes

## 0. Follow-up Status

Wayne approved the recommended `design-system-source-of-truth-cleanup` tranche on 2026-06-21.

Completed locally:

- Initialised `/Users/wayne/Documents/RobsonAI/Robson AI Design System` as a local Git workspace.
- Added `SOURCE_OF_TRUTH.md`, `CHANGELOG.md`, and `.gitignore`.
- Updated the design-system `readme.md` and `SKILL.md` so Google, Gemini, Stripe, BYO API keys, and generic chatbot positioning are guardrails or legacy context, not product goals.
- Updated the Building Analyst UI kit to use provider-neutral demo wording.
- Clarified typography and Data Orange boundaries across product-web prototypes, Apple apps, and the public website.

Not completed:

- No design-system commit was created; commits still require Wayne approval.
- No remote repository, package publication, app implementation, public website restyle, or deployment was performed.

## 1. Scope

The original audit reviewed the standalone Robson AI design-system folder against the current Robson AI Solutions website and the Building Analyst Apple design-system files.

The audit phase did not:

- change the public website
- change the standalone design-system folder
- change Apple, Android, macOS, or web app implementation
- deploy anything
- move or publish assets
- approve a brand redesign

## 2. Sources Inspected

| Source | Path | Status |
| --- | --- | --- |
| Website repo | `/Users/wayne/Documents/RobsonAI/Codex App/Robson AI Solutions Website` | Git repo, clean on `main` at audit start |
| Website tracker | `docs/codex/TRACKER.md` | Current working record; production full site is live |
| Website narrative | `docs/website-narrative.md` | Current post-WWDC26 public positioning guidance |
| Website styling | `styles.css` | Static website CSS with local fonts and website-specific visual language |
| Standalone design system | `/Users/wayne/Documents/RobsonAI/Robson AI Design System` | Local Git workspace after approved cleanup; no commit yet |
| Design-system brand docs | `guidelines/robson-ai-brand-standards-pack-v1.md`, `guidelines/robson-ai-core-icon-spec-v1.md` | Useful brand-source material |
| Design-system tokens | `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css` | Structured CSS token layer |
| Design-system components | `components/**` | React primitives, prototype-oriented |
| Design-system UI kit | `ui_kits/building-analyst/**` | High-fidelity prototype, not production app code |
| Building Analyst Apple design system | `/Users/wayne/Documents/RobsonAI/Building Analyst Apple/App/DesignSystem` | SwiftUI implementation tokens/components |

## 3. Executive Verdict

The standalone Robson AI Design System is valuable and should be preserved, but it is not yet clean enough to treat as the single production source of truth.

Recommended source-of-truth split:

| Layer | Current source of truth | Reason |
| --- | --- | --- |
| Public website copy and claims | Website repo plus `docs/website-narrative.md` | This is the current public-facing, post-WWDC26 positioning. |
| Public website visual system | Website `styles.css` | It has a newer editorial website direction and live production validation. |
| Robson AI core brand assets/rules | Standalone design-system `guidelines/` and `assets/`, after versioning | Strongest source for icon, wordmark, colour, and brand-use rules. |
| Product-app UI direction | Standalone design-system tokens/components, after cleanup | Good foundation for product UI, but stale product-provider references need removal or legacy labelling. |
| Apple-platform implementation | Building Analyst Apple `App/DesignSystem` | SwiftUI tokens/components are the implementation authority for Apple apps. |

Do not migrate the live website wholesale to the standalone design system yet. First consolidate the design-system documents and decide the website-versus-product typography and orange-accent rules.

## 4. What Is Strong

- The core brand palette is clear and mostly consistent across sources:
  - Deep Navy `#06133D`
  - Tech Blue `#2F5BD3`
  - Light Blue `#63A7F2`
  - Data Orange `#F5A623`
  - Cool Grey `#F2F4F7`
  - Slate `#333B48`
- The brand icon rules are specific enough to stop accidental redraws, dot movement, or combined icon plus wordmark misuse.
- The design-system folder has useful reusable parts:
  - CSS tokens
  - React primitives
  - brand cards
  - Building Analyst prototype screens
  - high-resolution icon assets
  - an agent skill wrapper
- The tone rules align with the website direction: professional, plain, British English, no hype, no emoji, AI output as draft/review support rather than final authority.
- The Apple design-system files share the same colour foundations and add platform-specific accessibility handling such as transparency fallback and Apple glass-effect conditions.

## 5. Drift And Risks

### 5.1 The design-system folder had no version history

At the original audit start, `/Users/wayne/Documents/RobsonAI/Robson AI Design System` was not a Git repo.

Current state after approved cleanup: the folder is a local Git workspace, but no initial commit has been created.

Risk:

- Until an initial commit exists, the cleaned baseline still has no reviewable history.
- Future Codex sessions can see the source files, but cannot compare them to an approved committed baseline.

Recommendation:

- Create an initial local commit after Wayne approval.
- Decide later whether to keep it as its own repo or add a tracked design-system package to the most appropriate Robson AI workspace.

### 5.2 Product-provider references are stale or too specific

The standalone design-system docs currently reference:

- `Sign in with Google`
- `server-side Gemini`
- `Building Analyst Professional` via Stripe
- `app.robsonai.co.uk`
- `Building Analyst Google` as the source web app

Risk:

- This conflicts with the current website direction: Building Analyst should be described as professional surveying/reporting software with cautious Apple-platform-first intelligence where relevant.
- It could accidentally reintroduce generic chatbot, BYO-key, or external-provider framing.

Recommendation:

- Keep these references only if clearly labelled as legacy source context.
- Update canonical product copy to avoid provider-specific claims unless the provider, payment model, and release path are current and approved.

### 5.3 Typography is currently split

Standalone design system:

- Inter only.

Live website:

- Manrope for body/UI.
- Fraunces for major editorial headings.

Apple app:

- System fonts in SwiftUI tokens.

Risk:

- Future visual work may pull in conflicting typography rules.

Recommendation:

- Document a deliberate rule:
  - Product-app UI: Inter on web prototypes where suitable, system fonts on Apple platforms.
  - Public website: current Manrope plus Fraunces editorial system remains valid unless Wayne approves a redesign.

### 5.4 Data Orange usage differs

Standalone brand rules:

- Data Orange is mainly for the logo data point and rare emphasis, not a broad background or general accent.

Live website:

- Uses `--color-signal: #f5a623` and multiple orange gradients, focus touches, motion glows, and accent treatments.

Risk:

- Marketing-site polish could drift from strict product-app rules.

Recommendation:

- Approve a website-specific exception, or tighten orange use in a later visual QA tranche.
- Do not silently apply the stricter app rule to the website without reviewing visual impact.

### 5.5 React primitives are not drop-in website components

The standalone design-system components are React primitives with inline styles and runtime hover state. The website is static HTML/CSS/JS.

Risk:

- Copying components directly into the website would add architecture mismatch and unnecessary runtime complexity.

Recommendation:

- Treat these components as design references for the website.
- If a reusable production system is needed, create a separate component/package plan rather than ad hoc copying.

### 5.6 Prototype kit is not production packaging

The Building Analyst UI kit uses browser-loaded React, ReactDOM, and Babel from CDNs.

Risk:

- It is good for inspection and design exploration, but not production app architecture.

Recommendation:

- Mark the UI kit as a prototype.
- Keep it out of public website deployment unless explicitly rebuilt as static assets or production components.

### 5.7 Apple-platform implementation needs its own rules

The Apple design-system files use SwiftUI system fonts, dynamic colours, platform conditions, and `glassEffect` where available.

Risk:

- A web design-system rule like "Inter only" should not override Apple-native implementation decisions.

Recommendation:

- Add a platform-source map:
  - Web prototypes can use the standalone CSS/React system.
  - Apple apps use `App/DesignSystem` SwiftUI tokens/components.
  - Website uses the current marketing system unless explicitly migrated.

### 5.8 Website PRD and README have older launch-state wording

The tracker shows production now serves the full public website. Some older docs still describe the site as holding/hidden-first.

Risk:

- Future Codex sessions may misread launch posture.

Recommendation:

- Run a separate docs refresh tranche to update PRD/README/release notes to match the current production state.
- Do not mix that into design-system consolidation unless Wayne approves it.

## 6. Recommended Canonical Rules

Use these rules until Wayne approves a deeper brand/product-system consolidation.

1. Public claims follow `docs/website-narrative.md` and the live website copy, not the old design-system product-provider examples.
2. The standalone design system is a brand and product-UI reference, not yet an implementation dependency.
3. Building Analyst should be described as professional assessment, evidence, reporting, and review-support software; Apple-native intelligence can be referenced only cautiously where relevant and supportable.
4. External providers, Google sign-in, Gemini, Stripe, and payment/product-tier details are not canonical unless a current product tranche explicitly approves them.
5. The live website typography system remains valid for the public site.
6. Product-app UI can continue to use Inter or native system fonts depending on platform.
7. The core R icon and data-point rules are strict brand rules.
8. Orange use needs an explicit website exception or a later tightening pass.

## 7. Recommended Next Work Block

Tranche name: `design-system-source-of-truth-cleanup`

Objective:

Turn the standalone design-system folder into a versioned, current, safe reference without changing the live website.

Scope:

- Put the design-system folder under Git or move it into an approved tracked repo.
- Add a source-of-truth map for website, product UI, Apple, Android, macOS, and prototype layers.
- Update `readme.md` and `SKILL.md` so stale Google/Gemini/Stripe references are labelled legacy or removed from canonical copy.
- Add a typography decision note covering website, product web, and Apple platforms.
- Add an orange-accent decision note covering strict product UI versus marketing-site exceptions.
- Add a short migration note explaining that React primitives are not drop-in static website components.

Out of scope:

- Restyling the public website.
- Deploying production.
- Changing app implementation.
- Changing payment/auth/provider architecture.
- Rebuilding components.

Validation:

```bash
git status --short --branch
rg -n "server-side Gemini|Sign in with Google|Stripe|BYO|API key|generic chatbot" .
git diff --check
```

For the website repo, continue using:

```bash
git status --short --branch
git diff --check
```

## 8. Decision Needed

1. Recommended: approve `design-system-source-of-truth-cleanup` as the next documentation/brand-governance tranche.
2. Alternative: leave the design-system folder as read-only reference and defer cleanup until the next app UI tranche.
3. Alternative: migrate the live website toward the standalone design system immediately. This is not recommended until the typography and orange-accent rules are agreed.

## 9. Release Readiness View

Website production publication:

- Current state: published and verified.
- Full mature product-led website readiness estimate: 78%.

Design-system readiness:

- As a visual/brand reference: about 70%.
- As a production-ready reusable system: about 45%.

The biggest remaining design-system gap is governance, not visual quality: version control, stale provider references, platform source mapping, and documented exceptions.
