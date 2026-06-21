# Conversion And Contact Audit - 2026-06-21

Project: Robson AI Solutions Website
Scope: basic mistakes, contact/conversion path, product/design team recommendations
Evidence folder: `output/playwright/conversion-audit-baseline-2026-06-21T09-32-27-305Z`

## Brutal Current-State Assessment

The site now looks more professional than the original holding-page state, but it still had a release-quality failure: the credibility section rendered dark navy copy over a dark navy panel. That is not subjective polish; it makes a trust-building section look broken and undermines confidence immediately.

The second issue is conversion clarity. The site asks for a conversation, but some contact CTAs were indirect, inconsistent, or sent users back to another page instead of opening the email path. For an early-stage product site with no form, the email route has to be unmistakable and reassuring.

## Evidence-Based Findings

1. Critical readability issue: homepage credibility section
   - Evidence: attached user screenshot and local Playwright baseline screenshot `02-home-credibility.png`.
   - Problem: "Built from the work, not around buzzwords" rendered as dark text inside a dark proof panel.
   - Impact: trust section looked broken at the exact moment the site is trying to prove credibility.
   - Fix applied locally: final CSS override forces credibility panel label/title/intro/body/button colours to dark-panel-safe values.

2. Contact path was too soft
   - Evidence: homepage contact baseline screenshot `03-home-contact.png`.
   - Problem: "Discuss a Workflow" is broad, and the page did not explicitly tell users what to include.
   - Impact: avoidable hesitation; the user has to invent the first message.
   - Fix applied locally: homepage now says to send one practical workflow/example and pre-fills useful email prompts.

3. Building Analyst contact was weaker than the homepage
   - Evidence: baseline screenshot `04-building-analyst-contact.png`.
   - Problem: no copy-email action, no privacy reassurance, and the secondary action was "Back to Home" rather than supporting conversion.
   - Impact: the strongest product page had a weaker lead path than the homepage.
   - Fix applied locally: added copy email, privacy notice, reassurance text, and more specific email prompt.

4. Who-it-fits page primary contact action was misdirected
   - Evidence: baseline screenshot `05-who-contact.png`.
   - Problem: "Start a Conversation" linked to `/#contact` instead of opening an email.
   - Impact: an interested user is sent backwards in the journey.
   - Fix applied locally: primary CTA now opens the email path directly; copy-email and privacy actions were added.

5. Email-first is acceptable, but must be framed honestly
   - Evidence: current privacy page and measurement smoke.
   - Problem: email-first contact is simple and low-risk, but without reassurance it can look unfinished.
   - Fix applied locally: contact panels now state that no form data is collected and email opens in the user's mail app.

## Recommendations To The Delivery Team

1. Treat contrast regressions as launch blockers.
   - Add a visual QA checklist specifically for dark panels, hero overlays, and section-level colour overrides.
   - Automated axe is useful but did not prevent this obvious visual failure from reaching production.

2. Make "email the workflow" the primary conversion route until a real form exists.
   - Do not pretend there is a mature sales funnel yet.
   - Make the first action simple: open email, include useful prompts, copy address if preferred, privacy note visible.

3. Stop adding visual polish until the conversion basics stay stable.
   - Motion is fine, but readability, CTA clarity, and contact confidence matter more.
   - Every visual section should answer: what is this, why trust it, what should I do next?

4. Add a small form only when privacy/spam handling is agreed.
   - Netlify Forms would be a natural next step, but it needs an explicit privacy and spam decision.
   - Until then, email-first is safer and honest.

5. Add app screenshots only when they are real and release-safe.
   - Building Analyst should not overclaim app availability or unreleased Apple Intelligence behaviour.
   - Screenshot-led marketing belongs in a later app-assets tranche.

## Recommended Next Tranches

1. Deploy the local basic-mistakes/contact-polish fix after Wayne review.
2. Add a lightweight conversion form only after privacy/spam approval.
3. Add real Building Analyst product screenshots once the app is ready to show publicly.
4. Add a visual-regression checklist or Playwright screenshot assertion for dark sections and contact panels.
