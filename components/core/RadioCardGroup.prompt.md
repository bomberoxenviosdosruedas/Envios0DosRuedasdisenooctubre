# Prompt de generación: RadioCardGroup

**Fecha:** 2026-10-02
**Fase:** 2 - CORE PRIMITIVES (Tarea 6)
**Fuente de verdad:** `../02enviosdosruedassetiembre/src/components/ui/RadioCardGroup.tsx`

---

## Objetivo

Crear `RadioCardGroup`: selector de servicio interactivo (Express/LowCost/Flex) con estados checked diferenciados por tipo, usando **solo tokens del design system** y componentes existentes (BezelCard, Badge, Display, Lead, etc.).

---

## Props (TypeScript)

```ts
interface RadioCardOption {
  id: string;
  label: string;
  description?: string;
  price?: string;
  badge?: string;
  serviceType: 'EXPRESS' | 'LOW_COST' | 'FLEX';
  icon?: React.ReactNode;
  disabled?: boolean;
}

interface RadioCardGroupProps {
  options: RadioCardOption[];
  value: string;
  onChange: (value: string) => void;
  name?: string;
  className?: string;
  gridCols?: string; // default: "grid-cols-1 md:grid-cols-3"
}
```

---

## Comportamiento y visual (basado en fuente de verdad)

- **Accesibilidad**: `role="radiogroup"`, navegación teclado (Space/Enter), `aria-checked`, `aria-disabled`
- **Grid responsive**: 1 col mobile, 3 col desktop (`grid-cols-1 md:grid-cols-3`)
- **Card base**: BezelCard `tone="light"`, `p-6`, `border-2 border-brand-blue-100`
- **Checked Express**: `tone="dark"` (azul-500 bg, blanco texto), badge `accent` amarillo, icon bg `white/20`, check amarillo
- **Checked LowCost**: `tone="light"` azul-50 bg, borde azul-200, texto azul-500, badge `muted`
- **Checked Flex**: `tone="light"` amarillo-50 bg, borde amarillo-200, texto azul-500, badge `accent`
- **Hover lift**: `translateY(-4px)` + `shadow-antigravity-deep`
- **Active press**: `scale(0.98)`
- **Focus-visible**: ring 2px `brand-blue-500`
- **Precio**: Geist Mono `tabular-nums`, label "DESDE" en Bebas uppercase `tracking-wider`
- **Iconos**: SVG inline por tipo (EXPRESS=zap, LOW_COST=trend, FLEX=clock)

---

## Tokens utilizados

### Colores
- `var(--color-brand-blue-500)` — azul principal
- `var(--color-brand-yellow-500)` — amarillo acción
- `var(--color-brand-blue-50)` — fondo suave azul
- `var(--color-brand-blue-100)` — borde suave
- `var(--color-brand-blue-200)` — borde checked LowCost
- `var(--color-brand-yellow-50)` — fondo suave amarillo
- `var(--color-brand-yellow-100)` — borde checked Flex
- `var(--color-white)` — blanco

### Sombras
- `var(--shadow-float)` — sombra base card
- `var(--shadow-antigravity-deep)` — hover lift

### Radius
- `var(--radius-card)` — 16px (outer bezel)
- `var(--radius-card-inner)` — 12px (inner bezel)
- `var(--radius-control)` — 12px (icon container)
- `var(--radius-button)` / `var(--radius-full)` — 9999px (badge, check circle)

### Espaciado
- `var(--spacing-2)` — 8px
- `var(--spacing-3)` — 12px
- `var(--spacing-4)` — 16px
- `var(--spacing-6)` — 24px

### Tipografía
- `var(--font-display)` — Anton
- `var(--font-subheading)` — Bebas Neue
- `var(--font-sans)` — Outfit
- `var(--font-mono)` — Geist Mono
- `var(--tracking-wide)` — 0.025em
- `var(--tracking-wider)` — 0.05em

### Transiciones
- `var(--ease-default)` — cubic-bezier(0.16, 1, 0.3, 1)
- `var(--duration-base)` — 200ms
- `var(--ease-spring)` — cubic-bezier(0.16, 1, 0.3, 1)
- `var(--duration-slow)` — 300ms

---

## Componibilidad

Usa **primitivas del sistema**:
- Estilos inline con tokens (no clases Tailwind arbitrarias)
- Badge para etiquetas (badgeTone: `accent` | `muted`)
- Iconos SVG inline (Lucide-style, strokeWidth=2)
- No depende de BezelCard directamente (estilos inline para control total de estados checked)

---

## Decisiones tomadas

1. **No usar BezelCard como wrapper**: los estados checked requieren control total sobre border/background del panel exterior e interior. Se replican los estilos "double bezel" inline con tokens.
2. **Iconos SVG inline**: se definen en el componente (`ICONS` object) para evitar dependencia de `lucide-react` (desaconsejado por design-taste-frontend).
3. **Grid CSS nativo**: usa `@media` inline para responsive, no clases utilitarias.
4. **Estados interactivos inline**: hover/active/focus vía event handlers + style updates (no CSS pseudo-classes en :hover porque el estilo checked es complejo).
5. **Piso 12px respetado**: `var(--text-xs)` = 12px para badge y label "DESDE".

---

## Validación

- ✅ TypeScript types en `.d.ts`
- ✅ Tokens semánticos únicamente (ningún valor hardcodeado)
- ✅ Accesibilidad: radiogroup, keyboard, aria
- ✅ Touch targets ≥44px (card completa es clickable)
- ✅ `prefers-reduced-motion`: transiciones respetan `--duration-*` que pueden ser 0ms via media query global
- ✅ Contraste WCAG AA: textos checked sobre fondos oscuros/claros verificados