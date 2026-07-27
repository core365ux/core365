# Handoff: General Phase Settings — out-of-sequence notification controls

## Overview
A compact Core365 settings dialog ("General Phase Settings") that controls whether notifications
are still sent for a phase that gets completed *after* a later phase in the sequence has already
been completed. Four user groups can be enabled/disabled independently.

## About the Design Files
The files in this bundle are **design references created in HTML** — a prototype showing intended
look and behavior, not production code to copy directly. The task is to **recreate this design in
the target codebase's existing environment** (React, Vue, Blazor, etc.) using its established
component library, tokens, and patterns. If no environment exists yet, pick the framework most
appropriate for the project.

## Fidelity
**High-fidelity.** Final colors, typography, spacing, and interactions are specified. Recreate the
UI to match, using the codebase's existing Core365 components where they exist.

## Screens / Views

### General Phase Settings (modal dialog)
- **Purpose:** an admin decides which user groups keep receiving notifications for out-of-sequence
  phase completions.
- **Layout:** centered modal card, 640 × 560 px, radius 12px, 1px solid #D9DDE3, shadow-3,
  white surface, overflow hidden. Vertical stack: header / scrolling body / footer.
- **Header:** dialog title "General Phase Settings" (Manrope 16/24 600, #1F2433) on the left;
  right side holds meta text "Last edited by Marlee K. · Apr 22, 2026" (12px, #99A0AE), a 1px
  vertical divider, and a "Change Log" link button with a history icon (13px).
- **Body** (padding 20px 18px, scrolls):
  1. **Eyebrow / sub-header:** "Notify on Out-of-Sequence Phases" — Manrope 12px 600, uppercase,
     letter-spacing 0.04em, #99A0AE, margin-bottom 8px.
  2. **Explanatory paragraph:** Jost 14px / 1.55, #6B7384, margin-bottom 14px, text-wrap: pretty.
     Exact copy: "When a phase is completed after a later phase in the sequence has already been
     completed, it can still send notifications. Turn a group off to suppress notifications for
     those out-of-sequence phases."
  3. **Group table:** 1px solid #D9DDE3, radius 8px, overflow hidden.
     - **Header row:** background #E2E2E2, bottom border 1px #D9DDE3, padding 9px 14px,
       Manrope 12px 600 uppercase 0.04em, #6B7384. Two columns, gap 16px:
       "User Group" (flex 1) and "Notify" (fixed 64px).
     - **Data rows** (4): padding 12px 14px, gap 16px, bottom border 1px #E6E9EE (none on last
       row), label Manrope 14px 600 #1F2433 in the flexible column, toggle in the 64px column
       (left-aligned under the header).
     - **Rows in order:** Customer (off), Project Manager (on), Sales Rep (off),
       Assigned Users (on). Those are the default values.
- **Footer:** right-aligned actions with a flexible spacer; when state is dirty, "Unsaved changes"
  (12px #99A0AE) appears left of the buttons. "Close" = secondary button with X icon, min-width
  116px. "Save" = action/steel button (#5A739F) with save icon, min-width 116px.

## Interactions & Behavior
- **Whole row is the hit target.** Clicking anywhere in a group row toggles that group
  (role="switch", aria-checked reflects state). Cursor: pointer across the row.
- The toggle control itself stops click propagation so a direct hit on the switch toggles once,
  not twice.
- **Row hover:** background #F1F3F6; text colors unchanged.
- **Toggle:** 32 × 18px pill, radius 999px, knob 14px white with 0 1px 2px rgba(0,0,0,.2).
  Off track #D9DDE3, on track #F2691A (Core365 orange). Background and knob position animate
  over 150ms.
- **Any change marks the form dirty** → "Unsaved changes" appears in the footer. Save clears the
  dirty flag (prototype has no persistence). Close discards (not wired in the prototype).
- **Change Log** opens a modal over the dialog listing prior edits; closes via its own control.
- No validation, no loading or error states in this design. If the real Save is async, use the
  in-button spinner pattern from the design system and keep the button width fixed.

## State Management
```
notify: { customer: boolean, pm: boolean, rep: boolean, assigned: boolean }   // default F,T,F,T
dirty:  boolean        // set on any notify change, cleared on save
showLog: boolean       // Change Log modal visibility
```
Data needs: GET the four flags for the phase-settings record on open; PUT/PATCH the whole object on
Save; the change-log modal reads an audit list (actor, field, old → new, timestamp).

## Design Tokens
Colors (Core365 CSS vars with fallbacks):
- Surface #FFFFFF · Page bg #FAFBFC · Panel/table header #E2E2E2 · Row hover #F1F3F6
- Border #D9DDE3 · Inner divider #E6E9EE
- Ink #1F2433 · Ink-2 #3A4151 · Ink-3 #6B7384 · Ink-4 #99A0AE
- Brand orange #F2691A (hover #D55812, soft #FFF5EE) — used for the ON toggle track only
- Action steel #5A739F (hover #485E85) — Save button
- Danger #E7505B (unused here; destructive only)

Spacing: 4px base — 4 / 8 / 12 / 14 / 16 / 18 / 20 / 24.
Radius: 6px controls · 8px table & panels · 12px modal · 999px toggle.
Type: Manrope for all UI (12 / 14 / 16px, weights 400–700); Jost 14px/1.55 for the explanatory
paragraph. Never mix the two within a sentence.
Shadows: shadow-3 on the modal — 0 8px 16px rgba(20,28,51,.08), 0 16px 32px rgba(20,28,51,.08).
Motion: 120–180ms, cubic-bezier(0.2,0.7,0.2,1). No scale transforms on press.

## Assets
No images. Icons are inline SVG (24×24 viewBox, 1.5–1.6px stroke, currentColor) matching Lucide:
`history`, `x`, `save`. Swap for the codebase's icon set — names map 1:1 to Lucide.
Fonts: Manrope + Jost (loaded from Google Fonts in the prototype; use the app's bundled copies).

## Files
- `preview.html` — standalone, offline-ready preview of the finished design (open in a browser).
- `SimpleForm.dc.html` — prototype entry page (loads the kit below).
- `kit/simpleForm-v2.jsx` — the dialog itself: groups, rows, state, footer. **Start here.**
- `kit/tokens.jsx` — color/type tokens and primitives (Btn, Toggle, Field, Input, FormCard, icons).
- `kit/changeLog.jsx` — Change Log modal.
- `kit/simpleForm-v2.css`, `kit/simpleForm-v2-responsive.css` — header/footer chrome styles.
- `ds-base.js`, `support.js` — prototype runtime only; nothing to port.
