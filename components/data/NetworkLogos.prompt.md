# Prompt de generación: NetworkLogos

**Fecha:** 2026-10-02
**Fase:** 3 - DATA COMPONENTS (Tarea 14)
**Fuente de verdad:** `../02enviosdosruedassetiembre/src/components/ui/LogosCarousel.tsx` + `ui_kits/website/HomeScreen.jsx` (líneas 65-66)

---

## Objetivo

Crear `NetworkLogos`: carrusel de logos de marcas/clientes (Home, Footer) usando **marquee CSS puro** (sin Framer Motion), con logos de Simple Icons CDN.

---

## Props

```ts
interface NetworkLogosProps {
  logos?: Array<{ src: string; alt: string; href?: string }>;
  speed?: number;        // default: 30s
  gap?: number;          // default: 40px
  className?: string;
}
```

---

## Visual (basado en LogosCarousel + HomeScreen)

- **Marquee CSS** (`@keyframes marquee-left` 30s linear infinite)
- **Pause on hover/focus**: `animation-play-state: paused`
- **prefers-reduced-motion**: `animation-play-state: paused !important`
- **Logos**: altura fija 48px, width auto, `object-fit: contain`
  - `filter: grayscale(100%) opacity(60%)` → hover `grayscale(0) opacity(100%)` + `scale(1.05)`
  - Fuente: Simple Icons CDN `https://cdn.simpleicons.org/{slug}/0950F6` (color azul marca)
  - Con `href` → `<a>` externo con `target="_blank" rel="noopener noreferrer"`
- **Gap**: 40px (`var(--spacing-10)`)
- **Duplica array** para loop infinito sin salto visual (track width = 2x logos)
- **Mask gradient**: `linear-gradient(to right, transparent, black 10%, black 90%, transparent)` en contenedor para fade edges

---

## Tokens utilizados

### Colores
- `var(--color-brand-blue-500)` — color logos (via Simple Icons URL parameter)
- `var(--color-brand-blue-100)` — no usado directamente

### Espaciado
- `var(--spacing-10)` — 40px (gap entre logos)

### Sizing
- Logo height: 48px (fixed)
- Contenedor: width 100%, overflow hidden

### Transiciones
- `var(--ease-default)` — cubic-bezier(0.16, 1, 0.3, 1)
- `var(--duration-base)` — 200ms (hover filter/transform)

---

## Componibilidad

- **Componente autónomo**: solo CSS + React, sin Framer Motion ni dependencias externas
- **Simple Icons CDN**: logos servidos como SVG optimizados, colorizados via URL param
- **Fallback**: si logo no disponible en Simple Icons, se puede pasar `src` custom

---

## Decisiones tomadas

1. **Marquee CSS puro**: no Framer Motion (LogosCarousel usa Motion). CSS `animation` es más ligero y no requiere `useReducedMotion` hook — usa `@media (prefers-reduced-motion)` nativo.
2. **Simple Icons CDN**: `https://cdn.simpleicons.org/{slug}/0950F6` entrega SVG en color azul marca (#0950F6). Cubre MercadoLibre, Vercel, PostgreSQL, Prisma, Tailwind, Next.js, TypeScript, GitHub, WhatsApp, Google.
3. **Duplicación array**: `[...logos, ...logos]` asegura loop continuo. Track anima `translateX(-50%)` (mitad del ancho duplicado).
4. **Mask gradient fade**: contenedor tiene `mask-image` para desvanecer bordes izquierdo/derecho.
5. **Altura fija 48px**: touch target ≥44px, consistente con `--control-md`.
6. **`href` opcional**: logos con link externo envuelven en `<a>`, otros solo `<img>`.

---

## Validación

- ✅ TypeScript types en `.d.ts`
- ✅ Tokens semánticos únicamente (gap, durations)
- ✅ Sin Framer Motion / Motion dependencies
- ✅ `prefers-reduced-motion` nativo
- ✅ Touch targets: logos 48px height
- ✅ Accesibilidad: `role="list"`, `aria-label`, links externos con `rel="noopener noreferrer"`
- ✅ Responsive: funciona en cualquier ancho (track se adapta)
- ✅ Bundle ligero: ~1KB