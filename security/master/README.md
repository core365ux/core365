# Handoff: Account Master (Home Security)

## Overview
The **Account Master** screen is the single-pane operational cockpit a Core365 admin/CSR uses when working a home-security account. It surfaces everything about one account — customer & site, alarm/signal status, sales/billing/agreement details, an activity feed with note entry, and quick account actions — on one non-scrolling desktop screen, so a rep can answer a call and act without navigating away.

The prototype is populated with a realistic in-jeopardy account (Jacob Olson, #353733) that is pending cancellation, has a past-due balance, and an offline panel — chosen to exercise the alert/danger states.

## About the Design Files
The files in this bundle are **design references authored in HTML** — a working prototype showing the intended look, layout, and interaction behavior. **They are not production code to copy directly.** The task is to **recreate this design in the target codebase's existing environment** (React/Vue/etc.) using its established component library, state patterns, and data layer. If no front-end environment exists yet, choose the most appropriate framework and implement there.

The prototype is built as a "Design Component": markup in `Account Master.dc.html` plus a logic class at the bottom of the same file (`class Component extends DCLogic`). The `<x-import ... Core365DesignSystem_dbcf5c.Button/Badge/Avatar>` tags are design-system components — map them to your real component library equivalents. The `{{ … }}` holes are data bindings; the logic class is the source of truth for state and data shape.

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, component states, and interactions. All values come from the bound **Core365 Design System** (tokens in `colors_and_type.css`, included in this bundle). Recreate pixel-for-pixel using your app's Core365 component implementations and the CSS variables listed under Design Tokens.

---

## Screens / Views

There is one screen — **Account Master** — composed of fixed chrome (sidebar + header) and a fixed-height 3-column content grid. The whole screen is designed to fit a desktop viewport without page scroll; individual panels scroll internally.

### Global layout
- Root: `display:flex; height:100vh; overflow:hidden`. Page background `--c365-bg (#FAFBFC)`.
- **Left sidebar** — fixed `228px` wide, white surface, right border `1px --c365-line-2`. Vertical stack: 56px logo row → quick-nav search box → scrolling nav list → version footer.
- **Main** — `flex:1`, column: 56px top header → optional stat strip → scrolling content grid.

### 1. Sidebar
- **Logo row**: 56px tall, `core365-logo-dark.png` at 24px height, bottom border.
- **Quick navigation** box: 12px padding wrapper; the control is a faux search input — icon `search` (14px) + placeholder text "Quick navigation", `--c365-surface-2` fill, `1px --c365-line` border, 6px radius, text color `--c365-ink-4`.
- **Nav list** (`navItems`, 15 entries): each row is icon (16px) + label, 13px, `padding:7px 12px; margin:1px 8px; radius:6px`. Active row: bg `--c365-orange-50`, text `#A8430C`, weight 700. Idle: transparent, text `--c365-ink-2`, weight 500; hover bg `--c365-surface-3`. Items and icons (Lucide names): Executive Console `layout-dashboard`, **Security `shield` (active by default)**, Renewable Energy `sun`, Pest Control `bug`, Toolkit `wrench`, Directory — RE `book-user`, Schedule `calendar`, Work Orders (EWOS) `clipboard-list`, Fleet Management `truck`, Forms 365 `file-text`, Step 365 `footprints`, Learn 365 `graduation-cap`, Task Management `list-checks`, HR 365 `users`, Administration `settings`.
- **Footer**: two 11px `--c365-ink-4` lines — "Core365 Standard · v13.0.0" / "Client v13.0.0 · 07/09/2026".

### 2. Top header (56px)
Right-aligned cluster (left region is empty in this screen):
- **Screen select** — native `<select>`, 13px/500, options: Master / Work Orders / Payments / Documents.
- **Account select** — same styling, options: Account: 353733 / 353734 / 353802.
- **Bell button** — 34px square ghost button, `bell` icon 18px, with a 7px orange notification dot (`--c365-orange`, 1.5px white ring) top-right. Hover bg `--c365-surface-3`.
- **User cluster** — left divider, `Avatar` (name "Jacob Olson", size 30, color `#5A739F`) + name "Jacob Olson" (13/600) over live clock (11px `--c365-ink-3`, updates every 30s via `toLocaleTimeString`, `h:mm` format).

### 3. Stat strip (toggleable — prop `showStatStrip`, default on)
8-column CSS grid (`repeat(8,1fr)`, gap 10px), padding `12px 20px 0`. Each tile: 8px radius, `--shadow-1`, `padding:8px 12px`, an uppercase 10px label (0.08em tracking) over an 18px/700 value. Tiles left→right:
1. **Balance Due** — *danger* tile: bg `--c365-danger-bg`, border `--c365-danger`, all text `--c365-danger-600`. `wallet` icon + "31+" aging pill. Value `$91.98` (JetBrains Mono). Clickable → toast "Opening Accounting — balance $91.98".
2. **Service Tickets** — `ticket` icon (orange). Value `0`. Clickable (hover border `--c365-orange-300`).
3. **OB / IB Calls** — value `0 / 0`.
4. **Holds** — *hold* tile: bg `--c365-hold-bg`, border `--c365-hold-600`, text `--c365-hold-fg`. Value `1`.
5. **Agreement Length** — value `4`.
6. **Equipment Value** — `package` icon (orange). Value `0.25`. Clickable.
7. **Risk Level** — value `0`.
8. **Creation Cost** — value `26x`.

### 4. Content grid
`display:grid`, columns `minmax(320px,28fr) minmax(320px,28fr) minmax(380px,34fr)`, gap 12px, `align-items:start`, `padding:12px 20px 24px`, `min-width:1240px` (horizontal scroll within the content region below that width). All three columns are locked to `height:835px`.

#### Column A — Customer + Signals
1. **Account header card** — row: `house` icon (24px orange) + type label ("Residential", 20px/700) + two mono ID chips `#353733`, `#13712651` (`--c365-surface-3` fill, 4px radius).
2. **Customer panel** — card with a **panel header** (bg `--c365-orange-50`, bottom border `--c365-orange-200`, title in `#A8430C` uppercase 12/700). Header shows "Customer" + `user` icon + a language pill (EN/ES, steel styling), and 3 secondary icon buttons (`user-check`, `network`, `settings` — 26px square). Body: two sunken info blocks (`--c365-surface-2`, `1px --c365-line-2`, 6px radius) using a `max-content 1fr` label/value grid. Fields — Customer "Jacob Daniel Olson (103)", Customer 2 "Sarah Olson (104)", Business "—", Status = `Badge variant="overdue"` "Pending cancel — NOC", Phone "(801) 555-2384", Alt Phone "(801) 555-0164", Email link "jacob.olson@email.com"; Site block — Site Name "Olson Residence", Address "1284 E Hollywood Ave", City/State/Zip "Salt Lake City, UT 84105". Footer button row: Surveys / Letters / Email template.
3. **Signals panel** (`flex:1`, scrolls) — panel header "Signals" + `shield-check` icon + an "Out of service" signal-strength pill (danger, with 4 stepped bars) + refresh/settings icon buttons. Body fields — Verbal Password "bluebird", CSID "AQ730285", Panel Type "IQ4 VZN 319", Alarm.com # "13712651", Permit # "—", Sys Type "ADC Automation"; then a 2-col block — Online Date 10/05/2021, Last Signal 07/08/2026, Offline Date 12/08/2025, Installer Code 5820. Footer buttons: On / off test / History / EC's / Incident.

#### Column B — Sales, Billing & Agreement (single scroll container)
Wrapper card with its own header ("Sales, Billing, & Agreement" + `folders` icon) and an **Expand all / Collapse all** toggle (icon morphs between plus/minus squares via `expandPlusOpacity`). Inside: three accordions (all open by default; state `accordions.{sales,billing,contract}`). Each accordion header is the standard orange panel header, clickable to toggle, with a chevron that rotates 180° when open (150ms). Clicks on header-embedded icon buttons call `stop` (stopPropagation).
- **Sales and Install** — `hard-hat` icon; settings button. Fields: Office "Corporate — SHD" + "Sub-Office" pill; Sales Manager "Marcus Reed", Sales Rep "Tyler Grant"; Tech Manager "—", Tech "Dominic Sisi". Buttons: Adjust payroll / Payroll change / Payroll detail.
- **Billing** — `credit-card` icon + "Paid in full: No" danger pill; tax-info + settings buttons (settings → `onEditPayment` toast). Two-column body: left key/values (Type CC, Tax Exempt No, Billing Cycle 18th, Last Paid 10/18/2026, Last Paid Amt $45.99, Class Code NC); right "Monthly fees" box (Financing $61.20, Monitoring $45.99, Direct invoice $0.00, Taxes $3.22, **RMR total $49.21**). Below: an **Aging table** (columns Aging / SHD / Total; rows Cur–30, 31–60, 61–90, 91–120, Over 120 = $91.98 in danger, Total $91.98) with zebra striping on alternate rows and a panel header row.
- **Contract** — `file-signature` icon. Fields incl. Account Owner "SafeHome Direct", In/Out Holdback, Takeover "Yes" / Takeover For "Vivint", Created/Contract/Install dates, Term/Renewal "60 mo / 12 mo", Contract End 03/23/2027, Manifest name/date, Purchase/Funded dates, and a **Cancellation** sub-block (Request to Cancel 10/12/2026 danger, NOC Date 11/26/2026 danger-bold, Cure Date 11/01/2026, Save/Attrition dates "—"). Buttons: Account info / ESign / Retention.

#### Column C — Activity tabs + Actions
1. **Tabbed activity panel** (`flex:1`) — top tab bar of 8 icon-only tabs (equal `flex:1`), active tab tinted `#A8430C` with 2px orange underline; the **Calls** tab idles in danger red; the **Tasks** tab shows a red count badge. Tabs (id · icon · label): history · `history` · Activity feed; contact · `user` · Contact; activity · `activity` · System activity; documents · `file` · Documents; calls · `phone` · Calls; messages · `users` · Messages; automations · `zap` · Automations; tasks · `square-check-big` · Tasks. Below the tabs: a sub-bar with "{activeTabLabel} · {count}" + a "View all" button. Then a scrolling list of feed entries — each entry: 30px rounded icon tile tinted by category, a category label (uppercase 10.5px, category color), a right-aligned mono timestamp, body text (13px), and a "who" meta line. Category → color map (see Design Tokens: Category colors). **Composer footer**: Primary Reason + Secondary Reason selects, a 900-char textarea ("Add a note to this account…"), a live "{remaining} characters remaining" counter, a **Critical** checkbox (danger accent), and an **Add note** primary button. Adding prepends a note to the `history` feed, switches to that tab, and toasts.
2. **Actions panel** (toggleable — prop `showActionsRail`, default on) — orange panel header "Actions" + `zap`; buttons QA form / Issues / Risk Level, plus helper text "Lifecycle, proactive calls & change log all live here."

### Toast
Global toast: fixed bottom-center, `--c365-ink` bg, white 13px text, 8px radius, `--shadow-3`, `toastIn` animation (180ms, translateY 8px→0 + fade). Auto-dismisses after 2600ms. Fired by nearly every action button (most say "… — opens in the full app" / "… not part of this prototype").

---

## Interactions & Behavior
- **Nav select** — clicking any nav item sets `activeNav`; any item other than Security toasts "{label} — module not part of this prototype" (Security is the only implemented module here).
- **Stat tiles** (Balance, Tickets, Equipment, and Risk in Actions) — clickable, fire descriptive toasts.
- **Accordions** — click header toggles open/closed; chevron rotates 180° over 150ms. "Expand all / Collapse all" opens/closes all three at once; its icon shows a minus (all open) or plus (any closed). Icon buttons inside headers stopPropagation so they don't toggle the accordion.
- **Activity tabs** — clicking a tab swaps `tab` state → renders the corresponding data list (`streams[tab]`). Tasks tab carries a live count badge.
- **Add note** — validates non-empty (else toast "Type a note first"), builds a timestamped entry (`MM/DD/YYYY h:mm` via `Date`), category "Critical" (icon `alert-triangle`) if the Critical box is checked else "Note" (icon `sticky-note`), prepends to `notes`, clears the composer, switches to the history tab, toasts "Note added to account".
- **Clock** — set on mount and every 30s.
- **Icons** — Lucide via CDN; `lucide.createIcons()` is polled on mount until available and re-run on every update (because icons are injected as `<i data-lucide>`). In a real React app, use `lucide-react` components instead of the global-mutation pattern.

## Transitions & Motion (from Core365 tokens)
- Nav row bg/color: 120ms. Stat/card hover (border + shadow): 120ms. Chevron rotate: 150ms. Toast in: 180ms `cubic-bezier(0.2,0.7,0.2,1)`.
- Easing tokens: `--ease-out cubic-bezier(0.2,0.7,0.2,1)`, `--ease-in-out cubic-bezier(0.5,0,0.2,1)`. Durations: 120 / 180 / 280ms. **No spring/scale-on-press** — tactility is color + shadow only.
- Focus: textarea/inputs use `--ring-focus` (3px orange @28%) + `--c365-orange-300` border.

## State Management
Local component state (see `state = { … }` in the logic class):
- `activeNav` (string, default `'security'`), `accountType` (`'residential'`), `tab` (`'history'`).
- `accordions` — `{ sales:true, billing:true, contract:true }`.
- Composer — `noteText`, `critical` (bool), `primaryReason`, `secondaryReason`.
- Flags — `flagSpanish`, `flagVip`, `flagVeteran` (drive the EN/ES language pill etc.).
- `toastMsg`, `clock`.
- **Feed data arrays** (each item `{ when, who, cat, icon, body }`): `notes` (history), `messages`, `contact`, `activity`, `documents`, `calls`, `automations`, `tasks`. `renderVals()` decorates each with `catColor`/`iconBg` from the category map and selects the active list via `streams[tab]`.
- **Props**: `showStatStrip` (bool, default true), `showActionsRail` (bool, default true).

In production, replace the static arrays with fetched account data; the item shape (`when/who/cat/icon/body`) and category enum are the contract to preserve.

---

## Design Tokens
All from Core365 (`colors_and_type.css`, bundled). Reference via CSS variables — do not hardcode where a token exists.

**Brand / accent**
- Orange `--c365-orange #F2691A`; hover `--c365-orange-600 #D55812`; tints `-300 #FBAE82`, `-200 #FDD3BB`, `-50 #FFF5EE`. Panel-header text uses `#A8430C` (a darker orange, used literally in the source).
- Steel `--c365-steel #5A739F`; `-600 #485E85`, `-200 #CFD8E6`, `-50 #F3F6FB`.

**Neutrals**
- Ink ramp: `--c365-ink #1F2433` / `-2 #3A4151` / `-3 #6B7384` / `-4 #99A0AE`.
- Lines: `--c365-line #D9DDE3`, `--c365-line-2 #E6E9EE`, `--c365-panel #E2E2E2`.
- Surfaces: `--c365-surface #FFFFFF`, `-2 #F7F8FA`, `-3 #F1F3F6`, page `--c365-bg #FAFBFC`.

**Semantic**
- Danger: `--c365-danger #E7505B`, `-600 #C8404A`, bg `--c365-danger-bg #FCE6E8`.
- Warning: `--c365-warning #E89B1E`, bg `#FBEFD4`.
- Hold: `--c365-hold-bg #FFF4C7`, `-600 #D9A91A`, fg `--c365-hold-fg #6B5300`.
- Success/affirm: `#08A742` / `#2BA67A`.

**Category colors (activity feed)** — `{cat: [text, tileBg]}`:
- Critical → `--c365-danger-600` / `--c365-danger-bg`
- Billing → `--c365-steel-600` / `--c365-steel-50`
- Service → `--c365-warning` / `--c365-warning-bg`
- Outbound / Contact → `--c365-steel-600` / `--c365-steel-50`
- Calls → `--c365-danger-600` / `--c365-danger-bg`
- Note → `#A8430C` / `--c365-orange-50`
- Correspondence / General (fallback) → `--c365-ink-3` / `--c365-surface-3`

**Typography** — `--font-sans: Manrope` (UI, all labels/headings/buttons/tables), `--font-body: Jost` (paragraphs/long-form only), `--font-mono: JetBrains Mono` (IDs, amounts, dates, timestamps). Weights 400/500/600/700/800. Display sizes carry `-0.01em`/`-0.02em` tracking; ALL-CAPS eyebrows carry `0.04em`–`0.08em`. Screen text sizes here run 10–20px (dense ops UI); mono values at 12px.

**Spacing** — 4px base. Card inner padding 8–16px (this screen is dense). Grid/column gap 12px.

**Radius** — inputs/buttons 6px (`--r-sm`), cards/panels 8px (`--r-md`), pills 999px, ID chips 4px.

**Shadow** — `--shadow-1` resting cards; `--shadow-2` hover/popover; `--shadow-3` toast/modal. All use ink `#141C33` at low opacity — never black.

**Focus ring** — `--ring-focus: 0 0 0 3px rgba(242,105,26,0.28)`.

---

## Assets
- `assets/core365-logo-dark.png` — wordmark on light (sidebar), 24px height. (130×42 source; fine at this size.)
- `assets/core365-logo-light.png` — wordmark for dark/orange surfaces (not used on this screen, included for completeness).
- **Icons**: [Lucide](https://lucide.dev) (MIT), 24×24 viewBox, ~1.5–2px stroke. Icon names are listed inline above. In production use `lucide-react` (or your icon system) rather than the CDN + `data-lucide` + `createIcons()` global approach.
- **Fonts**: Manrope, Jost, JetBrains Mono variable TTFs, wired via `@font-face` in `colors_and_type.css` (bundled under `_ds/…/fonts/` — copy or map to your app's font loading).

## Files (in this bundle)
- `Account Master.dc.html` — the prototype (markup + `class Component` logic at the bottom). Primary reference.
- `assets/core365-logo-dark.png`, `assets/core365-logo-light.png` — logos.
- `_ds/core365-design-system-…/colors_and_type.css` — **design tokens** (colors, type, spacing, radius, shadow, motion). The single source of truth for values.
- `_ds/core365-design-system-…/styles.css` — design-system component styles.

> The `_ds/…/_ds_bundle.js` (design-system component implementations: Button, Badge, Avatar, Input, etc.) is loaded by the prototype at runtime from the project. Map these to your real component library; recreate their variants (`Button variant="primary|secondary" size="sm"`, `Badge variant="overdue"`, `Avatar`) rather than reimplementing from the prototype's markup.

## Notes for implementation
- This is dense desktop ops software (à la Procore/Linear), **not** a marketing/consumer layout — keep information density high, keep chrome fixed, scroll only inner panels.
- Two-to-three orange touches per screen is the intended restraint; danger/hold/steel accents carry state. Don't add gradients to UI chrome.
- The account shown is deliberately in a distressed state (pending cancel, past due, panel offline) to demonstrate every alert treatment — production data will vary; make sure neutral/healthy states are equally handled.
