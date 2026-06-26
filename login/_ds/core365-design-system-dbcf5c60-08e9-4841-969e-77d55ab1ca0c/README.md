# Core365 Design System

> **Core365 — All Your Operations, One Platform.**
> Core365 replaces 10+ disconnected systems with one unified platform built for field‑service businesses (solar, roofing, HVAC). From lead to install — every workflow in one place, with built‑in compliance, permitting, and document management, and AI‑powered ops for solar, roofing, and field‑service teams.

This repository is the canonical brand + UI toolkit for Core365. Designers and design agents should pull tokens, components, and copy from here when creating product UI, marketing pages, decks, and prototypes.

---

## Brand at a glance

| | |
|---|---|
| **Category** | Vertical SaaS — Operations platform for field‑service businesses |
| **Audience** | Solar / roofing / HVAC ops leaders, sales managers, field crews, office admins |
| **Promise** | One unified system replaces 10+ tools (CRM, project mgmt, doc mgmt, permitting, etc.) |
| **Vibe** | Operational, capable, modern. Workhorse software that doesn't feel like 2008 enterprise. |
| **Logo** | `assets/core365-logo-dark.png` (dark wordmark on light), `assets/core365-logo-light.png` (light wordmark on dark) |
| **Primary color** | `#F2691A` Core365 Orange |
| **Secondary** | `#5A739F` Steel Blue (save / secondary actions), `#E2E2E2` Panel header, `#E7505B` Alert red |
| **Default font** | **Manrope** (UI, headings, controls) |
| **Body font** | **Jost** (paragraphs, long‑form) |

### Sources & references

| Source | Where to find it |
|---|---|
| Brand color + secondary color spec | Customer brief (in chat) |
| Logos | `uploads/Core365 Logo - Light - Orange.png`, `uploads/Core365 Logo Dark.png` → copied to `assets/` |
| Fonts | `fonts/Manrope-VariableFont_wght.ttf`, `fonts/Jost-VariableFont_wght.ttf`, `fonts/Jost-Italic-VariableFont_wght.ttf` — wired via `@font-face` in `colors_and_type.css`. |
| Codebase / Figma | **Not provided.** UI kit is built from brand spec + field‑service operations conventions, not from a real Core365 source. See Caveats. |

---

## Index — what's in this folder

```
README.md                ← you are here
SKILL.md                 ← Claude Skill manifest (works in Claude Code too)
FRONT_END_STANDARDS.md   ← required front-end dev standards (Bootstrap-first, viewport, a11y) — always follow
colors_and_type.css      ← all tokens (color, type, spacing, radius, shadow, motion)
assets/                  ← logos, brand marks, illustrations
fonts/                   ← (font files go here — currently empty, see Caveats)
preview/                 ← design-system cards (color, type, spacing, components)
ui_kits/
  core365-app/           ← in-product UI: shell, dashboard, jobs, doc center
  core365-settings/      ← settings / forms kit: dense data-entry forms, master/detail, import flow
slides/                  ← (not generated — no slide template was provided)
```

Open the **Design System** tab in the project sidebar to browse every registered card.

---

## CONTENT FUNDAMENTALS — How Core365 writes

Core365 talks like the most competent ops manager in the company: clear, plain‑spoken, never cute. Copy is written for people who are *doing* something — closing a job, pulling a permit, getting a crew on site — not browsing.

### Voice & tone
- **Operational, not aspirational.** Lead with outcomes and verbs ("Send the proposal", "File the permit") not feelings ("Empower your team").
- **Direct address — second person.** "**You** quote, **you** install, **you** get paid." Marketing pages use "we" sparingly (only when explicitly speaking for Core365 the company).
- **Confident, not boastful.** "One platform. Every workflow." beats "The world's most advanced…"
- **Plain English.** Prefer "job" over "engagement", "install" over "deployment", "crew" over "personnel".
- **Specific over abstract.** Real nouns: *NEM application*, *roof inspection*, *change order*, *AHJ*.

### Casing
- **Sentence case** for page titles, section headings, button text, menu items. ("New job", not "New Job".)
- **Title Case** for **form field labels** ("Customer Name", "Site Address", "System Size") and for product surface names that are proper nouns: *Document Center*, *Permit Hub*, *Smart Forms*.
- **ALL CAPS** is reserved for tiny eyebrows / kicker labels (Manrope 12px, tracking 0.08em) — never body copy.

### Punctuation & rhythm
- Em‑dash for breaks of thought — like this — never spaced hyphens.
- Lists are scannable, parallel: every item starts with a verb or a noun, never mixed.
- Avoid trailing periods on UI labels and button text. Periods on full sentences in body copy.
- No exclamation marks, except inside a quote.

### Numbers
- Always numerals in product UI: "12 open jobs", "3 inspections due".
- Use shorthand for big numbers in marketing: "10+ tools", "365 days a year".

### What we don't do
- ❌ Emoji in product UI or formal marketing. Emoji are *not* part of Core365's vocabulary.
- ❌ "Game changer", "revolutionary", "AI‑powered" without a real noun attached.
- ❌ Buzzword stacking ("synergistic", "world‑class").
- ❌ "Just" as an apologetic crutch ("Just click here…").

### Specific examples

| Bad | Good |
|---|---|
| "Welcome back! Let's get started." | "Today — 8 open jobs, 2 permits awaiting AHJ." |
| "Empowering field service teams" | "From lead to install, in one platform." |
| "Click here to add a New Customer" | "New customer" |
| "Our revolutionary AI streamlines workflows" | "Smart Forms auto‑fill permit applications from the job record." |
| "Oops! Something went wrong 😬" | "Couldn't save the change order. Check connection and try again." |

---

## VISUAL FOUNDATIONS — How Core365 looks

Core365 is **information‑dense operations software**, not a consumer app. The visual system should read as **trustworthy, organized, and modern** — closer to Linear / Notion / Procore than to Stripe or a marketing‑heavy SaaS.

### Color
- **Orange `#F2691A`** is the single brand accent. Use it deliberately — primary CTAs, the active nav state, the brand mark, key data highlights. Two or three orange touches per screen, not ten.
- **Steel Blue `#5A739F`** is the secondary action color — Save buttons, secondary CTAs, calm informational accents. Never used as a background fill of any size.
- **Panel grey `#E2E2E2`** is the canonical panel‑header band — settings panels, table headers, side rails. It signals "this is chrome / structure".
- **Alert red `#E7505B`** is for destructive actions and error states only. Never decorative.
- **Neutrals carry 80%+ of every screen.** Whites, off‑whites (`#FAFBFC`, `#F7F8FA`), and a four‑step ink ramp (`#1F2433` → `#99A0AE`) do the heavy lifting.
- **No gradients on UI chrome.** Avoid bluish‑purple gradients entirely. Gradients only appear in marketing hero sections as a *very* subtle peach → white wash (max 6% opacity).

### Type
- **Manrope** for everything that's a UI element: buttons, labels, headings, nav, table headers, badges. Weights 400/500/600/700/800. Slight negative tracking (`-0.01em` to `-0.02em`) on display sizes.
- **Jost** for body paragraphs and long‑form (marketing pages, knowledge base, terms). Weight 400 with 1.55 line‑height. Italic Jost is allowed for inline emphasis.
- Type pairs are **never mixed in the same sentence**. Buttons and labels stay Manrope; paragraphs stay Jost.
- Minimum text size in product UI: 12px (caption only). Body copy lives at 14–16px.

### Spacing
- **4px base unit.** Scale: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96.
- Card inner padding: 16–24px. Section padding (marketing): 80–96px vertical, 24–32px horizontal.
- Form field vertical rhythm: 12px between label and input, 16px between fields, 24px between field groups.

### Layout
- **App is fixed‑chrome, scrolling content.** Left sidebar (240px) + top header (56px) are pinned; the main canvas scrolls. Sidebar collapses to 64px icon‑only on narrow widths.
- Marketing pages: 1200px max content width, generous 80–96px vertical rhythm.
- Tables get **horizontal scroll within their card**, not the whole page.

### Backgrounds & imagery
- **Page background:** off‑white (`#FAFBFC`). Never pure white at the top level.
- **No hand‑drawn illustrations, no abstract blob shapes.** Core365 isn't a consumer fintech.
- **Real photography only** in marketing — installers on roofs, solar arrays, trucks, paperwork. Warm, slightly desaturated, *not* heavily filtered. Avoid stock‑photo handshake shots.
- **No repeating patterns or textures** in product UI. Patterns are acceptable in marketing footers / dividers, kept subtle (≤ 8% opacity).
- **No full‑bleed video** in product. Marketing hero may use a short looping product demo.

### Cards
- White surface, `1px solid #D9DDE3` border, `8px` radius, `shadow-1` (`0 1px 2px rgba(20,28,51,0.06)`).
- On hover (when interactive): elevate to `shadow-2` and shift border to `#5A739F` at 30% opacity.
- Inner padding 16–24px. Card titles are Manrope 16/24 600.

### Corner radii
- Inputs / buttons: **6px** (`--r-sm`).
- Cards / panels: **8px** (`--r-md`).
- Modals / sheets: **12px** (`--r-lg`).
- Pills / badges: **999px** (`--r-pill`).
- Avatar / logo container: 8px square, never circular.

### Borders
- Default border: `1px solid #D9DDE3`.
- Subtle dividers inside cards / tables: `1px solid #E6E9EE`.
- Focus state: 3px orange ring at 28% opacity *outside* the element — never the orange as a border directly (preserves the brand color's preciousness).

### Shadows / elevation
- Three steps: `shadow-1` (resting cards), `shadow-2` (hover / popovers), `shadow-3` (modals).
- All shadows use ink `#141C33` at low opacity, *never* black — black shadows feel cheap.
- Inner shadows are not part of the system.

### Transparency & blur
- Backdrop blur is allowed on **modal scrims only** — `rgba(20,28,51,0.40)` + `backdrop-filter: blur(8px)`.
- Glassy sidebar / glassy header are **not** used. The chrome is opaque.

### Hover & press states
- Buttons (filled): hover darkens by ~10% (e.g. orange `#F2691A` → `#D55812`); press scales nothing — uses a slightly darker shade + an inset `shadow-1`.
- Buttons (ghost / secondary): hover fills with `--c365-orange-50` (peach 8%) when brand‑aligned, or `--bg-3` for neutrals.
- Links: hover underlines, no color change.
- Rows in tables / lists: hover sets background to `--bg-3` (`#F1F3F6`), keeps text colors.
- Icons in toolbars: hover lifts color from `--fg-3` to `--fg-1`.
- **No scale transforms** on press. Tactility comes from color + shadow, not movement.

### Motion
- Easing: `cubic-bezier(0.2, 0.7, 0.2, 1)` (fast‑out, settled‑in) for entry; `cubic-bezier(0.5, 0, 0.2, 1)` for symmetrical transitions.
- Durations: 120ms (state changes), 180ms (panel open / close), 280ms (route transitions).
- **No bouncy / spring animations.** No fade‑and‑slide marketing reveals on scroll. Animations exist to acknowledge actions, not entertain.
- Loading: skeleton blocks (`--bg-3` with a subtle horizontal sweep) — not spinners except for in‑button submit state.

### Tables (a load‑bearing element for Core365)
- Header row: `#E2E2E2` panel background, Manrope 12px 600 uppercase tracking 0.04em, ink‑2 color.
- Row height: 44px (comfortable), 36px (compact toggle).
- Zebra stripes: every other row at `--bg-3` (off by default; user‑togglable in settings).
- Sticky header on scroll. Sticky first column for wide tables.

---

## ICONOGRAPHY

Core365 ships **no proprietary icon font** in this design system (none was provided). We use **[Lucide](https://lucide.dev)** as the canonical icon set — open‑source, MIT, 24×24 viewBox, 1.5–2px stroke, rounded line caps. Lucide's line style matches the calm‑modern‑capable Core365 voice and pairs cleanly with Manrope.

**Subbed icon set — flagged.** If Core365 has an internal icon library, swap Lucide for it; the React kit references icons by name so the swap is mechanical.

### Usage rules
- **Stroke icons only.** No solid / duotone / filled icons. Consistency over decoration.
- **Stroke weight 1.5px** in the product (Lucide's default for 24px size).
- **Sizes:** 16px (inline with text), 20px (toolbar buttons), 24px (sidebar nav, page headers).
- **Color follows the parent text** — icons inherit `currentColor`. Brand orange is reserved for the *active* state of nav icons or for one accent icon per screen (e.g. a "Done" check on a completed job).
- **Container icons.** When a list item has a leading icon tile, wrap the icon in a 32px or 40px square at radius 8px, filled with a tinted background (`--c365-orange-50` for primary, `--c365-steel-50` for secondary, neutrals for the rest). Same icon stays mono.
- **No emoji** as icons in product UI. Marketing copy may quote a user's emoji in a testimonial, but never in chrome.
- **No unicode dingbats** (★, ✓, →). Use Lucide equivalents (`star`, `check`, `arrow-right`).

### CDN load
The UI kit pulls Lucide via:
```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
```
And renders icons as `<i data-lucide="check"></i>` then `lucide.createIcons()`. The kit's `<Icon>` JSX wrapper does this for you.

### Logo usage
- Logos live in `assets/`.
- **`core365-logo-dark.png`** — wordmark for use on light surfaces (default).
- **`core365-logo-light.png`** — wordmark for use on dark / orange surfaces.
- The "365" wears the orange circle as a fixed motif — never recolor it, never separate the 365 from the word "CORE".
- Minimum width 96px. Clear space = the height of the "C" on all sides.

---

## Caveats / asks from the design agent

1. **Fonts now wired locally.** Manrope and Jost variable TTFs are loaded from `fonts/` via `@font-face` in `colors_and_type.css`. (Google Fonts fallback removed.)
2. **No codebase or Figma was provided.** The Core365 product UI in `ui_kits/` is built from the brand brief and field‑service ops conventions — not from real source. Expect 70% fidelity to your real product, not 100%. Attach a codebase or a Figma file and we'll bring fidelity to pixel‑perfect.
3. **Logo PNGs are 130×42px.** That's enough for nav‑bar use but will blur on big marketing hero canvases. SVG (or 2x/3x PNG) would be ideal.
4. **Icon set is Lucide.** If Core365 has its own internal icon set, flag it and we'll swap.
5. **No slide template provided**, so `slides/` was not generated. If you'd like a Core365 deck system (title slide, agenda, big‑quote, comparison, KPI), say the word.

---

## Index of registered cards

(Auto‑populated by the Design System tab via `register_assets`. See `preview/` for sources.)
