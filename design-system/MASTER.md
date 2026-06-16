# PrepAssist Study Hub — Design System MASTER

> Source of truth for all UI decisions. Generated from existing `styles/main.css` + UI/UX Pro Max skill.
> Product type: Education / Certification Study Platform
> Stack: HTML + CSS (Vanilla)
> Style: Glassmorphism Dark · Monochrome + Emerald

---

## 1. Style

**Pattern**: Deep Glassmorphism — dark background, layered glass surfaces, single emerald accent.

**Do**
- Glass cards: `backdrop-filter: blur(16px)` + `rgba(white, 0.055)` bg
- Emerald-only accent glow for interactive states
- Subtle radial gradients on hero/banner backgrounds
- Inset white highlight `inset 0 1px 0 rgba(255,255,255,0.06)` on elevated surfaces

**Avoid**
- Mixing flat and glass surfaces at same depth level
- Multiple accent colors on same component
- Heavy blur on scrollable content (perf)
- Pure black backgrounds (use `--mono-950: #1a1f2e` instead)

---

## 2. Color Tokens

### Base Palette (Dark)
```css
--bg-primary:    #1a1f2e   /* page bg */
--bg-secondary:  #252b3d   /* sidebar, panels */
--bg-card:       rgba(255,255,255,0.055)  /* glass cards */
--bg-card-hover: rgba(255,255,255,0.08)
--bg-deep:       #0d0d1a   /* deepest bg accent */
```

### Text
```css
--text-primary:   #ffffff
--text-secondary: #c9d1d9
--text-muted:     #cbd5e0
```

### Accent — Emerald Only
```css
--accent:         #34d399   /* emerald-400 */
--accent-primary: #10b981   /* emerald-500 */
--accent-light:   #6ee7b7   /* emerald-300 */
--accent-subtle:  rgba(16,185,129,0.15)
--accent-glow:    rgba(16,185,129,0.25)
```

### Semantic State Colors
```css
--blue-400:  #60a5fa    /* concepts, AI-102 theme */
--amber-400: #f59e0b    /* exam tips, warnings */
--red-400:   #f87171    /* errors, danger */
--purple-400:#a78bfa    /* analogies, CSA theme */
--cyan-400:  #22d3ee    /* CIS-DF theme, info */
```

### Part Domain Colors
```css
--part1-color: #38bdf8   /* Plan & Manage */
--part2-color: #a78bfa   /* Generative AI */
--part3-color: #fbbf24   /* Agentic */
--part4-color: #34d399   /* NLP */
--part5-color: #f87171   /* Knowledge Mining */
--part6-color: #67e8f9   /* Computer Vision */
```

### Glass Surfaces
```css
--glass-1: rgba(255,255,255,0.03)
--glass-2: rgba(255,255,255,0.055)   /* default card */
--glass-3: rgba(255,255,255,0.08)    /* hover state */
--glass-4: rgba(255,255,255,0.11)    /* active/elevated */
--glass-em: rgba(16,185,129,0.07)   /* emerald tint surface */
```

### Glass Borders
```css
--gb-white:   rgba(255,255,255,0.08)   /* default border */
--gb-white-h: rgba(255,255,255,0.14)  /* hover border */
--gb-em:      rgba(16,185,129,0.22)   /* accent border */
--gb-em-h:    rgba(16,185,129,0.45)   /* accent hover */
```

### Light Mode Key Overrides
```css
--bg-primary:   #f8fafc
--bg-secondary: #f1f5f9
--bg-card:      rgba(255,255,255,0.92)
--text-primary: #0f172a
--text-secondary: #334155
--text-muted:   #64748b
/* Glass → dark-transparent for light bg */
--glass-2:      rgba(0,0,0,0.045)
--gb-white:     rgba(0,0,0,0.10)
```

---

## 3. Typography

### Font Stack
```css
--font-heading: 'Sora', sans-serif         /* h1–h4, badges, labels */
--font-body:    'IBM Plex Sans', sans-serif /* body, buttons, nav */
--font-mono:    'IBM Plex Mono', monospace  /* code, term names, badges */
```

### Type Scale
| Token | Size | Weight | Usage |
|-------|------|--------|-------|
| h1 | `clamp(1.75rem, 4vw, 2.5rem)` | 800 | Page title |
| h2 | `clamp(1.35rem, 3vw, 1.85rem)` | 700 | Section headings |
| h3 | `clamp(1.1rem, 2.5vw, 1.35rem)` | 600 | Sub-sections |
| h4 | `1.05rem` | 600 | Card titles |
| body | `0.875rem–1rem` | 400 | Content text |
| label | `0.7rem` | 700 | Caps labels, badges |
| mono | `0.85em` | 400–500 | Code, term names |

### Rules
- Body line-height: `1.7`
- Heading letter-spacing: `-0.02em`
- Label letter-spacing: `0.10–0.12em` + `text-transform: uppercase`
- Min body size: `16px` (html base)
- `clamp()` for all headings — no fixed px

---

## 4. Spacing Scale

```css
--space-1:  0.25rem   /*  4px */
--space-2:  0.5rem    /*  8px */
--space-3:  0.75rem   /* 12px */
--space-4:  1rem      /* 16px */
--space-5:  1.25rem   /* 20px */
--space-6:  1.5rem    /* 24px */
--space-8:  2rem      /* 32px */
--space-10: 2.5rem    /* 40px */
--space-12: 3rem      /* 48px */
--space-16: 4rem      /* 64px */
```

Rhythm tiers:
- Component internal padding: `--space-3` to `--space-6`
- Section gaps: `--space-8` to `--space-10`
- Page padding: `--space-8` horizontal, `--space-10` vertical

---

## 5. Radius Scale

```css
--radius-sm:  4px    /* badges, inline code */
--radius-md:  8px    /* buttons */
--radius-lg:  12px   /* cards, callouts */
--radius-xl:  16px   /* settings panel, modals */
--radius-2xl: 24px   /* hero, large cards */
```

---

## 6. Shadows & Elevation

```css
--shadow-card:  0 4px 24px rgba(0,0,0,0.55), 0 1px 4px rgba(0,0,0,0.4),
                inset 0 1px 0 rgba(255,255,255,0.06)
--shadow-glass: 0 8px 40px rgba(0,0,0,0.6), 0 2px 8px rgba(0,0,0,0.45),
                inset 0 1px 0 rgba(255,255,255,0.07)
--shadow-em:    0 0 28px rgba(16,185,129,0.18), 0 4px 24px rgba(0,0,0,0.5)
--shadow-glow:  0 0 24px rgba(16,185,129,0.25)
--shadow-btn:   0 4px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)
```

Elevation stack (z-index):
- `0` — page content
- `50` — topbar (sticky)
- `100` — sidebar (fixed)
- `200` — modals/overlays
- `1000` — toasts

---

## 7. Transitions

```css
--transition-fast:   150ms ease   /* hover states, badges */
--transition-normal: 250ms ease   /* sidebar, cards */
--transition-slow:   400ms ease   /* complex transitions */
```

Rules:
- Use `transform` and `opacity` only — never animate `width`/`height`/`top`/`left`
- Sidebar collapse: `width` animated via `--transition-normal` (existing, keep)
- Exit animations: ~60–70% of enter duration
- Respect `prefers-reduced-motion` — currently missing, **add this**

---

## 8. Layout

```css
--sidebar-width:           280px   /* expanded */
--sidebar-collapsed-width: 76px    /* collapsed */
--topbar-height:           60px
--content-max:             860px   /* reading content */
```

Breakpoints (to standardize):
- `375px` — small phone
- `768px` — tablet (sidebar hides, hamburger shows)
- `1024px` — desktop (sidebar visible)
- `1440px` — wide desktop

Page containers:
- `.page-content` — max `860px + 64px padding`, centered
- `.page-full` — max `1200px`, for dashboards/grids

---

## 9. Components

### Cards
```css
bg: var(--glass-2)
border: 1px solid var(--gb-white)
border-radius: var(--radius-lg)
box-shadow: var(--shadow-card)
backdrop-filter: blur(16px)
/* hover → */
border-color: var(--gb-em)
box-shadow: var(--shadow-em)
```

### Buttons
| Variant | Use |
|---------|-----|
| `.btn-primary` | Primary action (emerald glass) |
| `.btn-secondary` | Secondary (neutral glass) |
| `.btn-ghost` | Tertiary/subtle |
| `.btn-success` | Completion confirm |
| `.btn-sm` / `.btn-lg` | Size modifiers |

Light mode: `.btn-primary` must use **solid** `#059669` bg (glass is invisible on white).

### Callouts
| Class | Color | Use |
|-------|-------|-----|
| `.callout-concept` | Blue | Core concepts |
| `.callout-exam` | Amber | Exam tips |
| `.callout-tip` | Emerald | Pro tips |
| `.callout-warning` / `.callout-warn` | Red | Gotchas |
| `.callout-analogy` | Purple | Analogies |
| `.callout-info` | Cyan | Extra info |

### Progress Bar
- Track: `rgba(255,255,255,0.12)` (dark) / `rgba(0,0,0,0.08)` (light)
- Fill: `linear-gradient(90deg, emerald-600, emerald-400)` + glow
- Height: `6px`, animated `width` with `0.6s ease`

### Badges
```css
font-family: var(--font-heading)
font-size: 0.7rem
font-weight: 600
letter-spacing: 0.04em
padding: space-1 space-3
border-radius: 20px
```

---

## 10. Known Issues / Gaps

### Must Fix
1. ~~**`prefers-reduced-motion` missing**~~ — ✅ Already implemented (line ~3955)
2. ~~**Emoji icons in sidebar** (`⚙️`, `<<`, `>>`)~~ — ✅ Fixed: SVG mask-image (Lucide ChevronsLeft/Right + Settings)
3. ~~**Light mode `.btn-primary`**~~ — ✅ Fixed: CSS tokens `--btn-primary-*` / `--btn-success-*` in `:root` + `body.light-mode`; no `!important`
4. ~~**`color: #ffffff !important`** on `.text-primary`~~ — ✅ Fixed: now `var(--text-primary)` / `var(--text-secondary)`; removed redundant light-mode overrides

### Nice to Fix
5. **Focus rings** — not explicitly styled; browsers default may strip in some contexts
6. **`aria-live` regions** — quiz feedback, toast notifications
7. **Skip link** — missing for keyboard users
8. **`min-h-dvh`** — uses `min-height: 100vh` (fine for desktop, check mobile)

---

## 11. Anti-Patterns

- Raw hex values in component styles (use CSS vars)
- `!important` chains for light mode (use `:is(body.light-mode .component)` specificity properly)
- Emoji as icons anywhere structural
- Hardcoded dark gradients on `.hero` overridden again in light mode (fix source, not override)
- Multiple `backdrop-filter: blur()` stacked in nested elements (GPU perf)

---

## 12. Page-Specific Overrides

Check `design-system/pages/<page-name>.md` for page-specific deviations.

Available pages:
- `dashboard.md` — main hub page
- `topic.md` — topic reading pages
- `quiz.md` — quiz pages
- `flashcard.md` — flashcard pages
