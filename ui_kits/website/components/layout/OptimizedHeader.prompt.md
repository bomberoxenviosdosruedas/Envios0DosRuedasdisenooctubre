# Prompt de generación: OptimizedHeader

**Fecha:** 2026-10-02
**Fase:** 5 - LAYOUT VARIANTS (Tarea 26)
**Fuente de verdad:** `../02enviosdosruedassetiembre/src/components/layout/OptimizedHeader.tsx` + `ui_kits/website/SiteHeader.jsx` (octubre)

---

## Objetivo

Crear `OptimizedHeader`: Header con Framer Motion, dropdown animado, CTA contextual (reemplaza SiteHeader para Next.js).

---

## Props

```ts
interface NavItem {
  label: string;
  href?: string;
  icon?: React.ComponentType<{ className?: string }>;
  dropdownItems?: Array<{ label: string; href: string; icon?: React.ComponentType<{ className?: string }> }>;
}

interface OptimizedHeaderProps {
  pathname?: string;           // usePathname()
  navItems?: NavItem[];        // default: DEFAULT_NAV
  logoSrc?: string;            // default: /logo-envios-simplified.webp
  phone?: string;              // default: 223 660-2699
  ctaLabel?: string;           // default: "Cotizá tu envío"
  ctaHref?: string;            // default: /cotizar
  onNavigate?: (item: NavItem) => void;
  onCta?: () => void;
  className?: string;
}
```

---

## Visual (basado en OptimizedHeader.tsx + SiteHeader.jsx)

- **Fixed top**, z-50, bg `brand-blue-700` (=== #0950F6), compact al scroll:
  - `scrolled`: bg `brand-blue-700/95`, blur, shadow, py-2.5
  - `!scrolled`: bg `brand-blue-700`, py-4
- **Logo**: Image priority fill sizes="40px" + wordmark Anton bicolor (Envíos blanco + DosRuedas amarillo) `kinetic-font-stretch` hover rotate 12°
- **Nav desktop**: Bebas 400 (NO font-bold), ghost dark, dropdown Framer Motion `AnimatePresence` spring staggerChildren 0.06
- **Dropdown**: bg `brand-blue-700`, rounded-2xl, items min-h-11 (44px), hover bg-white/10 text-yellow-500
- **Phone**: Mono bold, icon Phone amarillo, href tel:
- **CTA contextual**: si pathname en [/, /servicios/*, /cotizar*] → `variant="outline"` border-white/40 text-white hover:bg-white/10; sino `variant="primary"` (amarillo)
- **Mobile**: drawer off-canvas (Framer Motion `AnimatePresence`), nav items 48px min-h, CTA fullWidth
- **prefers-reduced-motion**: desactiva todas las animaciones Framer Motion
- **Lock scroll body** cuando drawer abierto
- **Lucide icons**: Menu, X, ChevronDown, Phone, Home, Zap, TrendingDown, Clock, ShoppingBag, Info, HelpCircle, Share2, LayoutGrid, HandCoins, Building2, Rocket, Package, Store

---

## Tokens utilizados

### Colores
- `var(--color-brand-blue-500)` — azul principal (header bg)
- `var(--color-brand-blue-700)` — === #0950F6 (mismo hex, token único)
- `var(--color-brand-yellow-500)` — amarillo acción, CTA primary, phone icon
- `var(--color-white)` — textos, logo "Envíos"

### Espaciado / Sizing
- `var(--control-sm)` — 44px (mobile tap targets)
- `var(--control-md)` — 48px
- `var(--control-lg)` — 52px
- `var(--radius-control)` — 12px
- `var(--radius-xl)` — 16px
- `var(--radius-2xl)` — 24px
- `var(--radius-full)` — 9999px
- `var(--page-gutter-lg)` — 2rem
- `var(--container-page)` — 80rem

### Tipografía
- `var(--font-display)` — Anton (logo wordmark)
- `var(--font-subheading)` — Bebas Neue (nav items)
- `var(--font-mono)` — Geist Mono (phone)
- `var(--tracking-tight)` — -0.025em
- `var(--tracking-wider)` — 0.05em

### Sombras
- `var(--shadow-elevated)` — scrolled header
- `var(--shadow-2xl)` — dropdown
- `var(--shadow-accent-md)` — no usado
- `var(--shadow-cta-glow)` — CTA pulse

### Animaciones (Framer Motion)
- `var(--ease-spring)` — cubic-bezier(0.16, 1, 0.3, 1)
- `var(--duration-slow)` — 300ms
- `var(--duration-cta)` — 200ms

---

## Componibilidad

- **Button** (core) — CTA
- **MobileNav** (layout) — drawer off-canvas
- **Iconos SVG inline** — sin `lucide-react` dependency

---

## Decisiones tomadas

1. **Iconos inline**: todos los iconos de Lucide recreados como SVG inline para evitar dependencia externa (design-taste-frontend desaconseja lucide-react).
2. **Bebas 400 only**: NO `font-bold` en nav items (DESIGN.md §3: Anton/Bebas solo 400).
3. **CTA contextual**: lógica `pathname === '/' || pathname.startsWith('/servicios') || pathname.startsWith('/cotizar')` para outline vs primary.
4. **CTA pulse glow**: solo en páginas no-contextuales, gateado por `prefersReducedMotion`.
5. **Dropdown Framer Motion**: `AnimatePresence` + `staggerChildren` + spring. `prefersReducedMotion` desactiva animaciones.
6. **Scroll lock**: body `position: fixed` + `top: -scrollY` cuando drawer abierto.
7. **Route change close**: `useEffect` con `pathname` cierra drawer/dropdown.
8. **Desktop nav Bebas 400**: `fontWeight: 400` explícito, no bold.
9. **`className` passthrough**: en header root.

---

## Validación

- ✅ TypeScript types en `.d.ts`
- ✅ Tokens semánticos únicamente
- ✅ Touch targets ≥44px (nav items, mobile toggle, phone link)
- ✅ `prefers-reduced-motion`: TODAS animaciones Framer Motion pausadas
- ✅ Accesibilidad: aria-haspopup, aria-expanded, aria-controls, focus-visible
- ✅ Contraste: blanco sobre azul-500 (6.02:1), amarillo sobre azul-500 (4.94:1)
- ✅ Responsive: desktop nav + mobile drawer
- ✅ Bundle: sin lucide-react, iconos inline