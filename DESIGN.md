# Design System — Mohammed Faizan Ashfaq Portfolio

Derived from the UIreference templates. Every component, page, and layout decision must follow this document exactly. When in doubt, refer back here first.

---

## Color Palette

These are the only allowed colors. Use Tailwind's `arbitrary value` syntax or extend `tailwind.config.ts` with these tokens — never use a color outside this palette.

| Token | Hex | Tailwind Usage | When to Use |
|-------|-----|----------------|-------------|
| `cream` | `#F2EDE4` | `bg-[#F2EDE4]` | Primary page background |
| `beige` | `#E8DCC8` | `bg-[#E8DCC8]` | Card backgrounds, alternate sections |
| `brown` | `#2D1A0E` | `bg-[#2D1A0E]` / `text-[#2D1A0E]` | Primary text, primary buttons, footer bg |
| `yellow` | `#F5C800` | `bg-[#F5C800]` | Primary CTA buttons, badges, highlights |
| `orange` | `#F06A2A` | `bg-[#F06A2A]` | Circular accent badges, secondary highlights |
| `white` | `#FAFAF8` | `bg-[#FAFAF8]` | Content panels, nav background |
| `charcoal` | `#1C1C1C` | `bg-[#1C1C1C]` | Footer bottom strip, dark sections |

**Rules:**
- Never use any gray scale outside of Tailwind's `gray-100` / `gray-200` for subtle borders only.
- Never use blue, green, purple, or any color not in the palette above.
- Dark mode is NOT used — this is a light-first single-theme design.

---

## Typography

### Font

Install and use **Barlow Condensed** (Google Fonts) for headings and **Inter** or **Barlow** for body. Configure in `src/app/layout.tsx` via `next/font/google`.

```ts
import { Barlow_Condensed, Barlow } from 'next/font/google'

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-heading',
})

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
})
```

Add both `variable` values to the `<html>` tag and configure in `tailwind.config.ts`:

```ts
fontFamily: {
  heading: ['var(--font-heading)', 'sans-serif'],
  body: ['var(--font-body)', 'sans-serif'],
},
```

### Scale

| Role | Class | Style |
|------|-------|-------|
| Hero headline | `font-heading text-[80px] md:text-[120px] font-black uppercase leading-none tracking-tight` | All caps, black weight, condensed |
| Section headline | `font-heading text-[48px] md:text-[72px] font-black uppercase leading-none tracking-tight` | All caps, black weight |
| Sub-headline | `font-heading text-[28px] md:text-[36px] font-bold uppercase leading-tight` | All caps, bold |
| Label / tag | `font-body text-[11px] font-semibold uppercase tracking-widest` | All caps, wide tracking |
| Body | `font-body text-[15px] font-normal leading-relaxed` | Sentence case |
| Nav item | `font-body text-[13px] font-medium uppercase tracking-wider` | All caps |
| Price | `font-heading text-[22px] font-bold` | As-is |

**Rules:**
- All headlines are ALWAYS uppercase — no title case, no sentence case in headings.
- Never use italic.
- Never mix font families — heading font only for display text, body font for everything else.

---

## Spacing & Layout

### Grid
- Use a 12-column Tailwind grid. Max content width: `max-w-7xl mx-auto`.
- Section vertical padding: `py-20 md:py-28`.
- Component internal padding: `p-6` (cards), `px-8 py-4` (buttons).

### Background Grid Pattern
The off-white/cream background has a subtle dot/line grid. Add this to the `body` or section wrappers:

```css
/* In globals.css — this is the only custom CSS allowed */
.bg-grid {
  background-image:
    linear-gradient(to right, rgba(45,26,14,0.06) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(45,26,14,0.06) 1px, transparent 1px);
  background-size: 40px 40px;
}
```

Apply with `className="bg-[#F2EDE4] bg-grid"`.

---

## Components

### Buttons

**Primary (Yellow):**
```tsx
<button className="bg-[#F5C800] text-[#2D1A0E] font-heading font-bold uppercase text-[13px] tracking-wider px-7 py-3 hover:brightness-95 transition-all">
  LABEL →
</button>
```

**Secondary (Brown/Dark):**
```tsx
<button className="bg-[#2D1A0E] text-[#FAFAF8] font-heading font-bold uppercase text-[13px] tracking-wider px-7 py-3 hover:opacity-90 transition-all">
  LABEL →
</button>
```

**Outline tag (small label):**
```tsx
<span className="border border-[#2D1A0E] text-[#2D1A0E] font-body text-[11px] font-semibold uppercase tracking-widest px-3 py-1">
  TAG
</span>
```

**Rules:**
- No rounded corners on buttons — `rounded-none` always (or no `rounded` class).
- Always uppercase text.
- Arrows (`→`, `>`) are used as decorative suffixes on CTA buttons.
- Never use shadcn's default button variants without overriding to match this palette.

### Navigation Bar

- Full-width, white background, `border-b border-[#2D1A0E]/10`.
- Brand name: left-aligned, `font-heading font-black text-[20px] uppercase`.
- Nav links: center-aligned, `font-body text-[13px] uppercase tracking-wider`.
- CTA: right-aligned, yellow circle button `w-10 h-10 rounded-full bg-[#F5C800] flex items-center justify-center`.

### Cards

- Background: `bg-[#E8DCC8]`
- No border, no shadow — color contrast provides separation.
- Image sits at top, fills full card width, no border-radius.
- Text block below with `p-5`.
- Price: bottom-left, `font-heading font-bold text-[20px]`.
- Label tag: bottom-right.

### Circular Badge / Accent

Used as floating callout elements over sections:

```tsx
<div className="w-20 h-20 rounded-full bg-[#F5C800] flex items-center justify-center">
  {/* icon or text */}
</div>
```

Orange variant: swap to `bg-[#F06A2A]`.

### Section Divider Strip

Horizontal full-width dark strip with scrolling or static label text:

```tsx
<div className="bg-[#2D1A0E] text-[#FAFAF8] py-3 px-8 font-heading text-[13px] uppercase tracking-widest">
  LABEL TEXT
</div>
```

### Footer

- Background: `bg-[#2D1A0E]`.
- Text: `text-[#FAFAF8]`.
- Bottom strip: `bg-[#1C1C1C]`.
- Multi-column layout (4 columns on desktop, stack on mobile).
- Marquee text at very bottom in oversized `font-heading font-black uppercase` fading across full width.

---

## Decorative Elements

These small accents appear throughout all reference screens — they must be used consistently:

- **Small square dot**: `w-2 h-2 bg-[#F06A2A]` — scattered near section headings or at grid intersections.
- **`+` icon on circles**: product/feature badges have a small `+` floating beside them.
- **Subtle grid lines**: see bg-grid CSS above — always on cream background sections.
- **`®` or `™` superscript**: used on brand/product names in headlines for style, not legal need.

---

## Photography & Images

- Photos are always **cutouts** (subject isolated, no rectangular box) placed over the background — use `object-contain` on images that are already cut out.
- No image frames, borders, or drop shadows on photos.
- Images may bleed to the edge of their container or section.
- No image filters or overlays.

---

## Spacing Tokens (Tailwind)

Extend `tailwind.config.ts` spacing to match the design rhythm:

```ts
spacing: {
  '18': '4.5rem',
  '22': '5.5rem',
  '30': '7.5rem',
  '34': '8.5rem',
}
```

---

## What NOT to Do

- Do not use `rounded-lg`, `rounded-xl`, `shadow-md`, `shadow-lg` — this design has sharp edges and no drop shadows.
- Do not add gradients — all backgrounds are flat solid colors.
- Do not use any color outside the palette table above.
- Do not use italic text.
- Do not use title case or sentence case in headings — ALWAYS uppercase.
- Do not use more than two font families (`--font-heading`, `--font-body`).
- Do not add hover animations that move/translate elements — only `brightness`, `opacity`, or `color` transitions.
- Do not add dark mode — this portfolio is light-only.
- Do not add border-radius to buttons or cards.
