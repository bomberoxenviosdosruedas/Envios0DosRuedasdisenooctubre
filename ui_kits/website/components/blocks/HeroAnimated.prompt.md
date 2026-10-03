# Prompt de generación: HeroAnimated

**Fecha:** 2026-10-02
**Fase:** 4 - BLOCKS (Tarea 15)
**Fuente de verdad:**
- `../02enviosdosruedassetiembre/src/components/ui/HeroProceduralBackground.tsx`
- `../02enviosdosruedassetiembre/src/components/home/HeroAnimado.tsx`
- `components/blocks/PageHero.jsx` (base)

---

## Objetivo

Crear `HeroAnimated`: Hero con animaciones procedimentales (extiende `PageHero`) para Home. Incluye grilla punteada, blobs blur, radar sweep, shuttle (moto), pulse rings, roundtrip. **TODAS gateadas por `@media (prefers-reduced-motion: reduce)`**.

---

## Props

```ts
interface HeroAnimatedProps extends Omit<PageHeroProps, 'tone'> {
  children: React.ReactNode;
  aside?: React.ReactNode;
  className?: string;
}
```

*Hereda de PageHero: `tone` forzado a "blue", `id`, `style`.*

---

## Animaciones (basado en HeroProceduralBackground + HeroAnimado)

| Animación | Descripción | Duración | Easing | Tokens |
|-----------|-------------|----------|--------|--------|
| **Grilla punteada** | 48px, stroke-dasharray "2,6" | — | — | Ya en PageHero |
| **Blob 1 (top-right)** | radial-gradient amarillo/azul, blur 90px, float-slow | 6s | ease-in-out alternate | `animate-float-slow` |
| **Blob 2 (bottom-left)** | radial-gradient azul, blur 100px, floaty | 5s | ease-in-out alternate-reverse | `animate-floaty` |
| **Radar sweep** | 3 líneas rotando 360° desde centro | 6s | linear infinite | `animate-radar` |
| **Radar rings** | 2 círculos stroke-dashoffset expandiendo | 3s | ease-out infinite (staggered 1.5s) | `animate-draw` |
| **Pulse rings** | 2 círculos radio 10→90, opacity 0.4→0 | 3.2s | spring (cubic-bezier 0.16,1,0.3,1) | `animate-pulse-ring` |
| **Shuttle (moto)** | Moto ida-vuelta diagonal | 5s | cubic-bezier(0.16,1,0.3,1) alternate | `animate-shuttle` |
| **Roundtrip** | Moto horizontal ida-vuelta | 4.8s | cubic-bezier(0.16,1,0.3,1) infinite | `animate-roundtrip` |

**Todas**: `@media (prefers-reduced-motion: reduce) { animation: none !important; opacity: 0; }`

---

## Visual (basado en HeroAnimado.tsx)

- **PageHero base**: `tone="blue"`, grilla punteada blanca 48px, 2 blobs azul/amarillo
- **Aside**: mapa isométrico `inicio-mapa.webp` (pin + ruta amarilla) — pasado como prop `aside`
- **Animaciones capa extra**: `<div className="hero-animations">` absoluta con SVGs
- **Moto/Pin**: SVG inline (MotoIcon, PinIcon) dentro de `<foreignObject>` para HTML en SVG

---

## Tokens utilizados

### Colores
- `var(--color-brand-blue-500)` — base hero, blobs, grilla stroke (blue tone)
- `var(--color-brand-yellow-500)` — radar, pulse rings, shuttle, roundtrip
- `var(--color-white)` — grilla stroke (yellow tone), roundtrip moto

### Animaciones (definidas en tokens/motion.css)
- `var(--animate-float-slow)` — 6s ease-in-out infinite alternate
- `var(--animate-floaty)` — 5s ease-in-out infinite alternate-reverse
- `var(--animate-radar)` — 6s linear infinite
- `var(--animate-draw)` — stroke-dashoffset animation
- `var(--animate-pulse-ring)` — 3.2s spring
- `var(--animate-shuttle)` — 5s spring alternate
- `var(--animate-roundtrip)` — 4.8s spring infinite
- `var(--ease-spring)` — cubic-bezier(0.16, 1, 0.3, 1)

### Espaciado/Layout (via PageHero)
- `var(--section-y-lg)` — 6rem (padding Y)
- `var(--page-gutter-lg)` — 2rem (padding X)
- `var(--container-page)` — 80rem (max-width)

---

## Componibilidad

- **Extiende PageHero** (blocks) — reusa hero base con grilla y blobs
- **MotoIcon / PinIcon** SVG inline — sin dependencias externas
- **Animaciones CSS-in-JS** en `<style>` dentro del componente (scoped)
- **`prefers-reduced-motion`** via CSS media query en `<style>` (no JS hook)

---

## Decisiones tomadas

1. **Extender PageHero**: no duplicar grilla/bolbs base. HeroAnimated añade capa de animaciones "vivas" (radar, shuttle, pulses).
2. **Animaciones en `<style>` scoped**: evita CSS global, usa tokens como valores literales en keyframes (ej: `stroke: var(--color-brand-yellow-500)`).
3. **`prefers-reduced-motion` en CSS**: `@media (prefers-reduced-motion: reduce) { .radar-sweep { animation: none !important; } }` — cubre todas las animaciones sin `useReducedMotion()` hook (SSR-safe).
4. **SVG viewBox 0 0 200 200**: coordenadas centradas en 100,100 para transform-origin fácil.
4. **MotoIcon en `<foreignObject>`**: permite usar componente React con estilos inline dentro del SVG.
5. **Aside esperado**: `inicio-mapa.webp` (pin isométrico + ruta amarilla) — se pasa como prop `aside` desde HomeScreen.

---

## Validación

- ✅ TypeScript types en `.d.ts`
- ✅ Tokens semánticos únicamente
- ✅ Extiende PageHero (no duplica base)
- ✅ `prefers-reduced-motion`: TODAS animaciones pausadas
- ✅ Accesibilidad: `aria-hidden="true"` en capa animaciones, `sr-only` para copy real
- ✅ Responsive: PageHero maneja grid 7/5 → 1 col mobile
- ✅ Bundle: sin Framer Motion, solo CSS animations