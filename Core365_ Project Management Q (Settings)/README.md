# Handoff: Queue Settings — Contact Thresholds

## Overview
Settings screen for a project management **queue**. It lets a user define when a
project appears in their queue based on **time since last contact**, per contact
method (Email, SMS, Phone Call, System Note), with **separate day thresholds for
Active vs. On Hold projects** and a per-condition **Counted / Ignored** toggle.

Rule modeled: *A project appears in the queue once it has gone without contact —
by a **counted** method — for at least the configured number of days. Active and
On Hold projects use independent thresholds. A method toggled to “Ignored” is
excluded from the calculation.*

## About the Design Files
The files in this bundle are **design references created in HTML/React (via an
in-browser Babel build)** — a prototype showing intended look and behavior, **not
production code to ship directly**. The task is to **recreate this design in the
target codebase’s existing environment** (React, Vue, Angular, Blazor, etc.)
using its established components, state patterns, and API layer. If no front-end
environment exists yet, choose the most appropriate framework and implement there.

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, and interactions are
represented. Recreate the UI to match, using the codebase’s existing UI library
where equivalents exist. Colors/spacing/type map to the Core365 design system
tokens (see Design Tokens).

## Screens / Views
Single screen, two responsive layouts, switchable via a **Desktop / Mobile**
segmented control at the top (this switcher is a *prototype preview aid only* —
in production the layout is chosen by viewport/breakpoint, not a manual toggle).

### 1. Desktop — Matrix layout
- **Purpose:** Configure all methods × both statuses at a glance.
- **Container:** Modal-style card, 760px wide, 12px radius, 1px border `#D9DDE3`,
  elevation shadow-3. Header (title “Queue Settings” + Change Log link + close X),
  scrollable body, footer (Close / Save).
- **Body layout:** CSS grid, 3 columns `1.5fr 1fr 1fr`.
  - Column 1: contact method (icon tile 38×38, radius 8, peach fill + orange icon;
    label 14px/600; sub-label 11.5px muted).
  - Column 2: **Active** — column header is a green “Active” pill + caption
    “Days without contact”.
  - Column 3: **On Hold** — column header is an amber “On Hold” pill + same caption.
  - Each cell = a **Counted/Ignored toggle** (label 11.5px/600) stacked above a
    **day stepper** (−  N  days  +), 38px tall, 6px radius. When Ignored, the
    stepper is disabled (muted, track fill, 0.6 opacity).
  - Rows separated by 1px `#D9DDE3` dividers; first row top border, last row no
    bottom border.
- **Explainer:** info callout at top — blue-soft background, info icon, the queue
  rule in one paragraph.

### 2. Mobile — Stacked cards inside a phone frame
- **Purpose:** Same settings on a narrow viewport.
- **Frame:** 390px device frame (dark bezel `#1F2433`, 44px radius, notch pill,
  status bar 9:41 + signal/battery). Inside: FormCard borderless, full-height,
  header + scroll body (bg `#FAFBFC`) + footer (Close/Save full-width).
- **Per method:** one **card** (white, 1px border, 10px radius, shadow-1):
  - Card header: icon tile + method label + sub-label, on `#FAFBFC` band.
  - Body: two stacked **status blocks** (“Active”, then a 1px divider, then
    “On Hold”). Each block = status pill on the left, **Counted/Ignored label +
    toggle** on the right, and a **full-width day stepper** (44px tall) below.
- Footer buttons become full-width (flex:1), size “lg”.

## Interactions & Behavior
- **Toggle (per condition):** flips `on` for that method+status. Toggling off
  disables/dims that cell’s stepper; value is retained (not zeroed) so re-enabling
  restores it. (In the prototype, System Note defaults to off with 0 days.)
- **Day stepper:** − / + step by 1; direct numeric entry allowed; value clamped
  to **0–365**. Native number spinners hidden.
- **Save:** clears the dirty flag. Prototype does not persist — wire to the real
  settings API. “Unsaved changes” hint shows (desktop) when any value changed.
- **Close / X:** no-op in prototype; wire to modal dismiss.
- **Change Log link (desktop header):** opens a modal listing prior changes
  (audit table — sample data in `kit/changeLog.jsx`). Optional to port.
- **View switcher:** prototype-only; replace with responsive breakpoints.
- **Motion:** 120ms on state/hover/background transitions; no spring/bounce
  (per Core365 motion spec).

## State Management
State shape (single object, two status groups):
```js
{
  active: {
    email: { on: true,  days: 7 },
    sms:   { on: true,  days: 7 },
    phone: { on: true,  days: 7 },
    note:  { on: false, days: 0 },
  },
  hold: {
    email: { on: true,  days: 14 },
    sms:   { on: true,  days: 14 },
    phone: { on: true,  days: 14 },
    note:  { on: false, days: 0 },
  },
}
```
- `patch(group, key, part)` merges a partial (`{on}` or `{days}`) and marks dirty.
- `dirty` boolean drives the unsaved-changes hint and should gate Save.
- Load defaults from the queue-settings API; Save writes the whole object back.

## Design Tokens
Colors (Core365; hex fallbacks shown, canonical values live in
`_ds/.../colors_and_type.css` as `--c365-*`):
- Brand orange `#F2691A`; orange-soft `#FFF5EE`; orange-border `#FDD3BB`.
- Action steel blue `#5A739F` (Save button).
- Ink ramp `#1F2433` → `#3A4151` → `#6B7384` → `#99A0AE`.
- Surface `#FFFFFF`; page bg `#FAFBFC`; track `#F6F4F0`.
- Line `#D9DDE3`.
- Active pill: green `#08A742` on `#E1F4E7`. On Hold pill: amber `#6B5300` on
  `#FFF4C7`. Info callout: `#578FC7` on `#E4EEF8`.
- Danger `#E7505B` (unused here except red states).

Type: **Manrope** for all UI (400–800). Sizes used: 15/600 title, 14/600 method
label, 12.5 body, 11.5 sub-labels, 11/700 uppercase overline.

Spacing: 4px base. Card padding 14–24px; field gap 12–16px.
Radius: inputs/steppers 6px, cards 8–10px, modal 12px, pills 999px.
Shadows: shadow-1 (resting), shadow-2 (hover), shadow-3 (modal); ink-based, never black.

## Assets
- **Icons:** inline SVG, `currentColor`, 1.6px stroke (Core365 uses Lucide as the
  canonical set — swap to your icon library by name). Method icons: mail, message,
  phone, note. UI icons in `kit/tokens.jsx` (`I` map).
- **Fonts:** Manrope / Jost / JetBrains Mono variable TTFs in
  `_ds/.../fonts/`, wired via `@font-face` in `colors_and_type.css`.
- **No raster images** in this screen.

## Files
- `SimpleForm.dc.html` — entry screen. Boots Babel, fetch→transpiles the kit
  `.jsx`, mounts `SimpleFormPrototypeV2`.
- `kit/simpleForm-v2.jsx` — **the screen’s logic + layout** (matrix + mobile
  cards, DayStepper, toggles, view switcher, defaults). Start here.
- `kit/tokens.jsx` — shared primitives (Btn, Toggle, Pill, Segmented, FormCard,
  Input, icons, color tokens `C`).
- `kit/changeLog.jsx` — optional Change Log modal + sample audit data.
- `kit/simpleForm-v2.css`, `kit/simpleForm-v2-responsive.css` — supporting classes
  (mostly the header extras used here; rest is shared template CSS).
- `ds-base.js` — loads the Core365 DS bundle + stylesheets.
- `_ds/core365-.../` — Core365 design system: `colors_and_type.css` (tokens),
  `styles.css`, `_ds_bundle.js`, fonts.
- `support.js` — DC runtime (prototype scaffolding; **not needed** in production).

### How to run this prototype locally
Serve the folder over HTTP (the page fetches `.jsx` at runtime, so `file://`
won’t work), e.g. `npx serve` in this folder, then open `SimpleForm.dc.html`.
