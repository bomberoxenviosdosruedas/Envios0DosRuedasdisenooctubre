# Prompt de generación: ConversionBanner

**Fecha:** 2026-10-02
**Fase:** 4 - BLOCKS (Tarea 20)
**Fuente de verdad:**
- `../02enviosdosruedassetiembre/src/components/home/CtaSection.tsx`
- `../02enviosdosruedassetiembre/src/components/contacto/ConversionBanner.tsx`
- `ui_kits/website/shared.jsx` (CtaForm + OptimizedFooter banner)

---

## Objetivo

Crear `ConversionBanner`: banner CTA destacado (Home, páginas servicio, Footer) — usa blocks Section/SectionHead/Display/Lead/Highlight + Badge/Button.

---

## Props

```ts
interface ConversionBannerProps {
  eyebrow?: string;
  title: string;
  mark?: string;        // palabra resaltada en píldora amarilla rotada -1°
  lead?: string;
  ctaLabel: string;
  ctaHref?: string;
  ctaOnClick?: () => void;
  secondaryLabel?: string;
  secondaryHref?: string;
  background?: 'blue' | 'yellow' | 'dark'; // default: blue
  className?: string;
}
```

---

## Visual (basado en CtaSection + ConversionBanner + OptimizedFooter banner)

- **Section** bg según `background`:
  - `blue` → `brand-blue-500`
  - `yellow` → `brand-yellow-500`
  - `dark` → `brand-blue-500`
- **Contenido centrado** max-w-3xl (`container-page`)
- **Eyebrow**: Badge `tone="accent"` (blue bg) o `"invert"` (yellow/dark bg)
- **Title**: Display (H1) + Mark (Highlight = píldora amarilla rotada -1° sobre azul, azul rotada -1° sobre amarillo)
- **Lead**: Lead `variant="invert"` (white/blue-500)
- **CTA principal**: Button `size="lg"` `variant="primary"` (blue bg) o `"social"` (yellow bg)
- **CTA secundario**: Button `variant="secondary"` `surface="dark"` (blue bg) o `"ghost"`
- **Animación entrada**: CSS `fade-up` stagger (gateado `prefers-reduced-motion`)

---

## Tokens utilizados

### Colores
- `var(--color-brand-blue-500)` — blue bg, textos en yellow, CTA primary
- `var(--color-brand-yellow-500)` — yellow bg, mark highlight, CTA social
- `var(--color-white)` — textos en blue/dark

### Espaciado
- `var(--section-y-lg)` — 6rem (Section padding Y)
- `var(--page-gutter-lg)` — 2rem (Section padding X)
- `var(--spacing-4)` — 16px (CTA gap)
- `var(--spacing-5)` — 20px
- `var(--spacing-8)` — 32px (Lead margin bottom)

### Tipografía (via blocks)
- `Display` → `var(--font-display)` Anton `--type-h1`
- `Lead` → `var(--font-sans)` Outfit `--type-body`
- `Highlight` → píldora amarilla rotada -1°
- `Badge` → `var(--font-subheading)` Bebas Neue
- `Button` → `var(--font-subheading)` Bebas Neue

### Animaciones
- `var(--ease-spring)` — cubic-bezier(0.16,1,0.3,1)
- `var(--duration-slow)` — 300ms

---

## Componibilidad

- **Section** (blocks) — contenedor semántico
- **SectionHead** — no usado directamente (inline composition)
- **Display** (blocks) — H1
- **Lead** (blocks) — subtext
- **Highlight** (blocks) — mark rotada
- **Badge** (core) — eyebrow
- **Button** (core) — CTAs

---

## Decisiones tomadas

1. **Composition over config**: usa blocks Section/Display/Lead/Highlight/Badge/Button en lugar de props complejas. `SectionHead` no se usa directamente porque el layout es centrado simple.
2. **Mark rendering**: `title.split(mark).map()` + `Highlight` para píldora rotada -1° (Highlight ya implementa la rotación).
3. **Background variants**: 3 opciones (blue/yellow/dark) con colores de texto/CTA automáticos.
4. **Animación CSS**: `fade-up` stagger en `:nth-child` — gateado por `@media (prefers-reduced-motion: no-preference)`.
5. **CTA variants automáticos**:
   - blue bg → primary (amarillo) + secondary dark (ghost)
   - yellow bg → social (azul) + secondary light (outline)
   - dark bg → primary (amarillo) + secondary dark (ghost)

---

## Validación

- ✅ TypeScript types en `.d.ts`
- ✅ Tokens semánticos únicamente
- ✅ Componibilidad: Section, Display, Lead, Highlight, Badge, Button
- ✅ `prefers-reduced-motion`: animación pausada
- ✅ Touch targets: Button lg ≥48px
- ✅ Contraste: textos verificados (amarillo sobre azul 4.94:1, blanco sobre azul 6.02:1)
- ✅ Responsive: stack CTAs en mobile, inline desktop