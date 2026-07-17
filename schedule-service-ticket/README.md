# Handoff: Core365 — Scheduling / Service Tickets

## Overview
Redesigned scheduling workspace for creating and managing service tickets. A user opens a
ticket, sets its type/problem code/status, describes the scope and work performed, schedules
it, finds/assigns a technician, and reviews the customer's ticket history — all from one
screen. The design adapts across desktop, tablet, and phone.

## About the Design Files
The files in this bundle are **design references created in HTML** — a React prototype
(loaded in-browser via Babel) showing the intended look and behavior. They are **not
production code to copy directly**. The task is to **recreate these designs in the target
codebase** using its established framework, component library, and patterns. If no
environment exists yet, choose the most appropriate stack and implement there.

- **Live Preview.html** — single self-contained offline build; open it to interact with the
  real UI (tabs, calendar, forms, cog buttons, footer actions all live).
- **Core365-Scheduling-Source.zip** — the editable source (HTML entry + JSX component files +
  `styles.css`). Read this for exact structure and styling.
- Device builds (`Design - *.html`) — the same design locked to specific viewport sizes.

## Fidelity
**High-fidelity.** Final colors, typography, spacing, control sizes, and interactions.
Recreate pixel-for-pixel using the codebase's libraries, then wire to real data.

## Screens / Views

### Desktop / Tablet Landscape — two-pane workspace
- **Layout:** app header (56px, bg `#F6F6F6`) → body → footer (bg `#F6F6F6`). Body is a
  two-column layout: left = ticket form, right = job/context + calendar. Uses CSS container
  queries (`@container app`) to collapse meta and reflow below ~1100px / ~920px.
- **Ticket form (left):** vertical stack of `Field`s — Ticket Type\*, Problem Code\*,
  Ticket Status, Resolution Description (all `Select`), plus Scope of Work / Work Performed
  textareas and schedule/time fields. The four select fields each carry a **cog button** on
  the label row (see Components).
- **Right column:** customer/job context header and an interactive month calendar.
- **Ticket History:** horizontally-scrollable table (columns: Ticket, Created, Type, Problem
  Code, Status, Scheduled, Closed) with a History Filter button and a **Voided** filter.

### Phone / Tablet Portrait — single continuous scroll (`mobile.jsx`)
- Replaces the old two-tab split. Everything lives in ONE scroll, grouped into labeled
  sections: **Ticket, Scope, Schedule, Find Tech, History**.
- **Sticky jump-nav** of chips at top; chips track scroll position (scroll-spy) and tapping
  one smoothly eases (rAF tween) to that section.
- Selecting a History row loads that ticket and scrolls back to the Ticket section.
- History is a horizontally-scrollable table (same columns as desktop).

## Components

### Field (label + control wrapper) — `form-controls.jsx`
- Structure: `.field` › `.label-row` (flex, gap 4px) › `<label class="label">` + optional
  `<button class="field-cog">`.
- **Label:** `--fs-xs` (11px), weight 600, color `--ink-2`. Required marker `*` in
  `--brand-orange`. Optional `.hint` right-aligned, 10px, `--ink-4`.
- **Cog button** (`cog` prop): 22×22px, right-pinned (`.label`=`flex:1`, cog=`flex:0 0 auto`),
  borderless/transparent, icon = Lucide-style `settings` gear at 15px, color `--ink-4`.
  Hover: bg `--line`, color `--ink-2`. **Must NOT be a descendant of `<label>`** (that made
  the label forward hover/click to the button) — it is a sibling inside `.label-row`.
  Present on: Ticket Type, Problem Code, Ticket Status, Resolution Description.

### Select / Input
- Height `--ctrl-h` (30px), radius `--ctrl-radius` (6px), border `--line`, bg `--surface`.
- Font `--fs-base` (13px). Chevron on selects; optional leading icon on inputs.

### Buttons — `styles.css` (`.btn` + variants)
- Base: height 30px, radius 6px, weight 600, `--fs-sm` (12px), 6px gap.
- `.btn-secondary` (Save Draft, Close): white bg, 1px `--line` border, `--ink-1` text;
  hover bg `--surface-2`, border `#D2D6DD`.
- `.btn-save` (Save): filled slate-blue `#4D5D80` (hover `#41506E`), white text, disk icon.
- `.btn-primary` orange, `.btn-success` green, `.btn-tint`, `.btn-ghost` also defined.
- Related-links row buttons are uniform 118px wide × 30px tall.

### Ticket History table
- Header row + body rows in a horizontal scroll container. Columns fixed-width; overflow-x
  scroll on narrow viewports.

## Interactions & Behavior
- **Cog buttons:** `onClick` → open the corresponding lookup/settings dialog for that field
  (wire to your admin/config screen). Hover state on direct mouseover only.
- **Mobile jump-nav:** scroll-spy highlights the active section; tapping a chip rAF-tweens
  scrollTop to the section (with a completion safety guard).
- **History row select (mobile):** loads the ticket, scrolls to Ticket section.
- **Voided filter:** toggles voided tickets in the history list (replaces the old
  "Mark as Void" action).
- **Calendar:** month navigation + date selection.

## State (prototype `form` object)
`ticketType, problemCode, ticketStatus, resolution`, scope/work-performed text, schedule
date/time, selected technician, history filter (incl. voided), selected ticket. Replace with
your app's form + data layer.

## Design Tokens
| Group | Token | Value |
|---|---|---|
| Brand | orange / hover | `#F56B0F` / `#E25E07` |
|  | orange soft / tint | `#FFE9D8` / `#FFF4EC` |
|  | green / hover | `#22A85A` / `#1B934C` |
|  | tile / tile-2 | `#0F1B2D` / `#142339` |
|  | save (slate-blue) | `#4D5D80` (hover `#41506E`) |
| Surfaces | bg / surface / surface-2 | `#F4F5F7` / `#FFFFFF` / `#FAFBFC` |
|  | header + footer | `#F6F6F6` |
| Ink | 1 / 2 / 3 / 4 | `#0F172A` / `#334155` / `#64748B` / `#94A3B8` |
| Lines | line / line-2 | `#E5E7EB` / `#EEF0F3` |
| State | disabled / danger | `#B9BEC4` / `#DC2626` |
| Type scale | xs–xl | 11 / 12 / 13 / 14 / 16 / 19 px |
| Spacing | s-1…s-8 | 4 / 6 / 8 / 10 / 12 / 16 / 20 / 24 px |
| Controls | height / sm / lg | 30 / 26 / 34 px; radius 6px |
| Cards | radius / shadow | 8px / `0 1px 2px rgba(15,23,42,.04), 0 0 0 1px #E5E7EB` |
| Fonts | UI / mono | Manrope / JetBrains Mono |

## Assets
- **Fonts:** Manrope (400–800) + JetBrains Mono (400–600), Google Fonts.
- **Icons:** inline SVG (Lucide-style stroke icons) defined in `form-controls.jsx` `Icon`
  component — no icon-font/image dependency. Cog = `settings`.
- No raster images or brand logos beyond the small color-swatch mark.

## Files (in the source zip)
- `Scheduling Redesign.html` — entry; loads React + Babel and the JSX scripts.
- `app.jsx` — root app / responsive switch (desktop vs mobile).
- `scheduling.jsx` — desktop/tablet two-pane layout, form, history table, related links.
- `mobile.jsx` — phone/tablet-portrait single-scroll layout + jump-nav.
- `calendar.jsx` — month calendar.
- `form-controls.jsx` — `Field`, `Input`, `Select`, `Icon`, buttons.
- `tweaks-panel.jsx` — prototype-only tweak controls (not part of the product UI).
- `styles.css` — all tokens, layout, and component styles.
