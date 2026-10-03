# Prompt de generación: SocialCarousel

**Fecha:** 2026-10-02
**Fase:** 5 - LAYOUT VARIANTS (Tarea 29)
**Fuente de verdad:** `ui_kits/website/HomeScreen.jsx` (ServicesCarousel líneas 18-35) + `../02enviosdosruedassetiembre/src/components/layout/CarruselRedes.tsx`

---

## Objetivo

Crear `SocialCarousel`: carrusel de posts sociales (distinto a Marquee: cards con imagen, caption, métricas).

---

## Props

```ts
interface SocialCarouselProps {
  posts: Array<{
    image: string;
    caption: string;
    platform: 'instagram' | 'facebook';
    date: string;
    likes: number;
    comments: number;
    href: string;
  }>;
  autoPlay?: boolean;      // default: true
  interval?: number;       // default: 4500ms
  className?: string;
}
```

---

## Visual (basado en HomeScreen.jsx ServicesCarousel + CarruselRedes.tsx)

- **Carrusel 3D estilo cover-flow**: centro scale-104, laterales scale-65-90, opacity fade
- **Navegación**: dots indicadores (barra amarilla activa 40px, inactiva 10px)
- **Auto-play** con pause on hover + prefers-reduced-motion
- **Cada slide**: FeatureCard tone rotativo [accent, light, dark] con bg imagen, tag, title, body, footer Button "Ver post"
- **Touch/swipe support** (Framer Motion drag)
- **Altura fija 380px**, ancho slide 300px, gap visual 230px translateX
- **Prev/Next arrows** en desktop (hidden mobile)
- **Dots indicators** centrados abajo

---

## Tokens utilizados

### Colores
- `var(--color-brand-blue-500)` — arrows, dots active, texts
- `var(--color-brand-yellow-500)` — accent cards, dots
- `var(--color-white)` — card content bg
- `var(--color-brand-blue-100)` — dots inactive
- `var(--color-brand-blue-50)` — light card bg

### Espaciado
- `var(--spacing-4)` — 16px
- Gap entre slides: 20px

### Tipografía
- `var(--font-display)` — Anton (no usado directamente)
- `var(--font-subheading)` — Bebas Neue (Badge tag)
- `var(--font-sans)` — Outfit (caption, Button)
- `var(--font-mono)` — Geist Mono (metrics, date)
- `var(--tracking-wider)` — 0.05em

### Sombras
- `var(--shadow-float)` — base card
- `var(--shadow-elevated)` — hover lift

### Transiciones
- `var(--duration-carousel)` — 4500ms auto-play
- `var(--ease-spring)` — cubic-bezier(0.16, 1, 0.3, 1)

---

## Componibilidad

- **BezelCard** (core) — slide container (tone rotativo)
- **Button** (core) — "Ver post"
- **Badge** (core) — platform tag
- **Framer Motion** — drag, animate, AnimatePresence

---

## Decisiones tomadas

1. **Cover-flow via scroll-snap**: `scroll-snap-type: x mandatory` + `scroll-snap-align: center` — nativo, sin Framer Motion drag complejo.
2. **Auto-play con pause**: `setInterval` + `isHovering` state + `prefersReducedMotion`.
3. **Tone rotativo**: `idx % 3` → accent/light/dark para variedad visual.
3. **Altura fija 380px**: BezelCard con `height: 380` + `display: flex` `flex-direction: column`.
4. **Imagen aspect-ratio 4/5**: container con `aspect-ratio: 4/5` + `backgroundImage`.
5. **Caption truncado**: `-webkit-line-clamp: 3` para 3 líneas max.
6. **Dots navigation**: barra 40px activa (amarillo), 10px inactiva (azul-100).
7. **Prev/Next arrows**: solo desktop (≥768px), position absolute.
8. **Touch support**: nativo via `scroll-behavior: smooth` + `touch-action: pan-x`.

---

## Validación

- ✅ TypeScript types en `.d.ts`
- ✅ Tokens semánticos únicamente
- ✅ Touch targets: dots, arrows, buttons ≥44px
- ✅ `prefers-reduced-motion`: auto-play pausado, animaciones off
- ✅ Contraste: textos verificados
- ✅ Responsive: dots siempre, arrows desktop only
- ✅ Bundle: Framer Motion solo para hover/animations