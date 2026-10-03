# Prompt de generación: OptimizedFooter

**Fecha:** 2026-10-02
**Fase:** 5 - LAYOUT VARIANTS (Tarea 27)
**Fuente de verdad:** `../02enviosdosruedassetiembre/src/components/layout/OptimizedFooter.tsx` + `ui_kits/website/SiteFooter.jsx` (octubre)

---

## Objetivo

Crear `OptimizedFooter`: Footer con scroll-reveal, spring hover, float loop (reemplaza SiteFooter para Next.js).

---

## Props

```ts
interface OptimizedFooterProps {
  year?: number;        // default: 2026
  className?: string;
}
```

---

## Visual (basado en OptimizedFooter.tsx + SiteFooter.jsx)

- **bg brand-blue-700**, border-t border-white/10
- **Franja amarilla 6px** (h-1.5 bg-brand-yellow-500 shadow-md shadow-brand-yellow-500/30)
- **Grid 12-cols**: Col 1 (4 cols) Marca + Socials spring hover (y:-4 scale:1.12), Col 2 (4 cols) Servicios 2 grupos (Cotizador + Servicios), Col 3 (4 cols) Base MDQ (4 ContactRow con icons Pin/Phone/Mail/Clock)
- **CTA Banner superior**: whileInView slide-up (Framer Motion), 2 botones (Cotizar primary + WhatsApp social)
- **Scroll-to-top**: Button fixed bottom-right, float loop animate y:[0,-5,0] 2s infinite, whileTap scale:0.92, whileHover scale:1.1 y:-7
- **Legal bottom**: copyright + links servicios/cobertura/guías/nosotros/faq/redes + términos/privacidad
- **Animaciones**: FOOTER_CONTAINER staggerChildren 0.12, FOOTER_COL spring 280/24, BANNER_VARIANT spring 260/22, SOCIAL_SPRING 480/18
- **prefers-reduced-motion**: todas las animaciones desactivadas
- **next/link** para navegación interna

---

## Tokens utilizados

### Colores
- `var(--color-brand-blue-500)` — textos, iconos, CTA primary
- `var(--color-brand-blue-700)` — footer bg (=== #0950F6)
- `var(--color-brand-yellow-500)` — accent bar, social hover, CTA primary bg, scroll-to-top
- `var(--color-brand-yellow-400)` — CTA primary hover
- `var(--color-white)` — marca "Envíos", copyright
- `var(--color-brand-blue-50)` — subtext
- `var(--color-brand-blue-100)` — borders

### Espaciado
- `var(--section-y)` — 3rem
- `var(--page-gutter-lg)` — 2rem
- `var(--container-page)` — 80rem
- `var(--spacing-10)` — 40px

### Radius
- `var(--radius-card)` — 16px
- `var(--radius-xl)` — 16px
- `var(--radius-full)` — 9999px (scroll-to-top)

### Sombras
- `var(--shadow-md)` — accent bar
- `var(--shadow-xl)` — CTA banner
- `var(--shadow-2xl)` — dropdown (no usado), social hover
- `var(--shadow-accent-md)` — scroll-to-top
- `var(--shadow-cta-glow)` — CTA primary hover

### Animaciones (Framer Motion)
- `var(--ease-spring)` — cubic-bezier(0.16, 1, 0.3, 1)
- Stagger delays: 0.12s, 0.06s

---

## Componibilidad

- **Button** (core) — CTA banner + scroll-to-top
- **Badge** (core) — no usado directamente
- **Framer Motion** — AnimatePresence, motion.div, whileInView, whileHover, whileTap
- **Iconos SVG inline** — sin react-icons/fa, sin lucide-react

---

## Decisiones tomadas

1. **Iconos inline**: todos los iconos (incluye WhatsApp, Instagram, Facebook) como SVG inline — sin `react-icons/fa`.
2. **Framer Motion**: `whileInView` para scroll-reveal, `whileHover`/`whileTap` para interacciones, `animate` para float loop.
3. **prefers-reduced-motion**: `useReducedMotion()` hook — desactiva TODAS las animaciones (stagger, hover spring, float loop).
4. **Grid 12-cols responsive**: mobile 1 col, tablet 2 cols (6+6), desktop 12 cols (4+4+4).
5. **CTA Banner**: 2 botones — `Button variant="primary"` (amarillo) + `Button variant="secondary" surface="dark"` (ghost dark).
6. **Social spring hover**: `SOCIAL_SPRING` (stiffness 480, damping 18) — y:-4, scale:1.12.
7. **Scroll-to-top float**: `animate={y: [0, -5, 0]}` 2s easeInOut infinite — `whileTap scale:0.92`, `whileHover scale:1.1 y:-7`.
8. **Legal links**: next/link para navegación interna, hover amarillo-500.
9. **Year prop**: default 2026, overrideable.

---

## Validación

- ✅ TypeScript types en `.d.ts`
- ✅ Tokens semánticos únicamente
- ✅ Touch targets ≥44px (social buttons 40x40, scroll-to-top 44x44, CTA buttons lg)
- ✅ `prefers-reduced-motion`: TODAS animaciones pausadas
- ✅ Accesibilidad: aria-label en scroll-to-top, title en socials
- ✅ Contraste: textos verificados
- ✅ Responsive: 1/2/3 col grid
- ✅ Bundle: sin react-icons/fa, sin lucide-react