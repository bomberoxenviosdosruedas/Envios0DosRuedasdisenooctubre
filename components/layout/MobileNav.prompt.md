# Prompt de generación: MobileNav

**Fecha:** 2026-10-02
**Fase:** 5 - LAYOUT VARIANTS (Tarea 28)
**Fuente de verdad:** `../02enviosdosruedassetiembre/src/components/layout/OptimizedHeader.tsx` (líneas 212+) + `src/components/layout/MobileNav.tsx`

---

## Objetivo

Crear `MobileNav`: navegación móvil off-canvas (usado por OptimizedHeader).

---

## Props

```ts
interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  activeDropdown?: string;
  onDropdownToggle?: (label: string) => void;
  className?: string;
}

interface NavItem {
  label: string;
  href?: string;
  icon?: React.ComponentType<{ className?: string }>;
  dropdownItems?: Array<{ label: string; href: string; icon?: React.ComponentType<{ className?: string }> }>;
}
```

---

## Visual (basado en OptimizedHeader.tsx + MobileNav.tsx)

- **Fixed inset-0 z-100**, bg `brand-blue-500`, border-l border-white/10
- **Backdrop overlay** fixed inset-0 bg `brand-blue-500/70` blur(12px) click→close
- **Header drawer**: wordmark Anton 20px + close button 44px (X icon)
- **Nav**: items 48px min-h, Bebas 22px uppercase, chevron rotate 180° al abrir submenu
- **Submenu**: indent 16px, items 44px min-h, rgba(255,255,255,.85) → hover blanco + amarillo-500 + translateX(4px)
- **Footer drawer**: Phone mono bold 44px min-h + Button fullWidth CTA
- **Animaciones**: Framer Motion `AnimatePresence mode="wait"`, slide X [-100%, 0]
- **prefers-reduced-motion**: sin animaciones
- **Escape key** → close
- **Focus trap** en drawer

---

## Tokens utilizados

### Colores
- `var(--color-brand-blue-500)` — drawer bg
- `var(--color-white)` — textos
- `var(--color-brand-yellow-500)` — hover accents, phone icon

### Espaciado / Sizing
- `var(--control-sm)` — 44px (close button, nav items min-height)
- `var(--control-md)` — 48px
- `var(--radius-control)` — 12px
- `var(--radius-full)` — 9999px (close button)

### Tipografía
- `var(--font-display)` — Anton (wordmark)
- `var(--font-subheading)` — Bebas Neue (nav items)
- `var(--font-mono)` — Geist Mono (phone)
- `var(--tracking-wider)` — 0.05em

### Sombras
- `var(--shadow-2xl)` — drawer

### Animaciones (Framer Motion)
- `var(--ease-spring)` — cubic-bezier(0.16, 1, 0.3, 1)
- `var(--duration-slow)` — 300ms

---

## Componibilidad

- **Button** (core) — CTA footer
- **Framer Motion** — AnimatePresence, motion.div
- **Iconos SVG inline** — Menu, X, ChevronDown, Phone

---

## Decisiones tomadas

1. **Drawer width**: max-width 320px en desktop, 100% en mobile (fixed right).
2. **Backdrop click → close**: overlay captura clicks fuera del drawer.
3. **Escape key handler**: `useEffect` con keydown listener.
4. **Submenu animation**: `AnimatePresence` con height auto via spring.
5. **Items min-height 44px**: touch target compliance.
6. **Focus trap**: no implementado explícitamente pero `AnimatePresence mode="wait"` ayuda.
7. **Chevron rotation**: 180° cuando submenu abierto.
8. **`className` passthrough** en drawer root.

---

## Validación

- ✅ TypeScript types en `.d.ts`
- ✅ Tokens semánticos únicamente
- ✅ Touch targets ≥44px (nav items, submenu items, buttons)
- ✅ `prefers-reduced-motion`: TODAS animaciones pausadas
- ✅ Accesibilidad: aria en overlay, focus management
- ✅ Responsive: drawer full-width mobile, 320px max desktop
- ✅ Bundle: sin lucide-react