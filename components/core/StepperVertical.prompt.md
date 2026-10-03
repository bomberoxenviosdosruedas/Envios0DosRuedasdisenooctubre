# Prompt de generación: StepperVertical

**Fecha:** 2026-10-02
**Fase:** 2 - CORE PRIMITIVES (Tarea 9)
**Fuente de verdad:** `../02enviosdosruedassetiembre/src/components/ui/StepperVertical.tsx`

---

## Objetivo

Crear `StepperVertical`: stepper vertical alternativo (lista numerada 01·02·03 con cards), usando **solo tokens del design system**.

**Diferencia clave con `Steps.jsx` existente**:
- `Steps` = para "cómo funciona" (pasos de servicio, contenido informativo)
- `StepperVertical` = para flujo de UI (progreso de formulario, pasos interactivos)
- Mantener ambos componentes.

---

## Props

```ts
interface VerticalStep {
  number?: string | number;
  title: string;
  subtitle?: string;
  body?: string;
  detail?: string;
  badge?: string;
}

interface StepperVerticalProps {
  steps: VerticalStep[];
  currentStep: number;
  onStepClick?: (stepIndex: number) => void;
  className?: string;
}
```

---

## Visual (basado en fuente de verdad + components/blocks/Steps.jsx)

- **Lista `<ol>`** con `gap: var(--spacing-8)` (32px)
- **Línea vertical**: 2px `brand-blue-100`, left 12px, top/bottom offset `var(--spacing-3)`
- **Dots 44px** (`var(--control-md)` = 48px en source, usamos 44px = `var(--tap-min)` para consistencia touch):
  - **Completed**: bg `brand-yellow-500`, border `white`, color `brand-blue-500`, ring 4px `brand-yellow-100` (≈ `rgba(255,236,1,.3)`), Check icon
  - **Active**: bg `brand-yellow-500`, border `white`, color `brand-blue-500`, ring 4px `rgba(255,236,1,.3)`, `scale-110`
  - **Pending**: bg `brand-blue-100`, border `white`, color `brand-blue-500`, dot interior 8px
- **Número**: Anton (`font-display`) `text-2xl` `tracking-tight` uppercase, formato `01.`
- **Título**: Anton (`font-display`) `text-xl` uppercase `tracking-wide`
- **Subtitle/Badge**: Bebas `text-xs` uppercase `tracking-wider`, badge pill
  - Active: bg `brand-yellow-500` / texto `brand-blue-500`
  - Inactive: bg `brand-blue-50` / texto `brand-blue-500`
- **Description/Body**: Outfit `text-sm` `leading-relaxed`, color `brand-blue-500`
- **Detail**: Geist Mono `11px`, color `brand-blue-500`
- **Hover Active dot**: `scale(1.15)`
- **Transiciones**: `var(--ease-spring)`, `var(--duration-slow)`

---

## Tokens utilizados

### Colores
- `var(--color-brand-blue-500)` — textos, dots pending
- `var(--color-brand-blue-100)` — línea vertical, dot pending bg
- `var(--color-brand-yellow-500)` — dots completed/active
- `var(--color-white)` — dot borders completed/active

### Espaciado / Sizing
- `var(--control-md)` — 48px (dot size, ajustado a 44px = `var(--tap-min)` para touch target)
- `var(--tap-min)` — 44px (mínimo touch target)
- `var(--spacing-1)` — 4px
- `var(--spacing-2)` — 8px
- `var(--spacing-3)` — 12px
- `var(--spacing-4)` — 16px
- `var(--spacing-8)` — 32px (gap entre steps)
- `var(--spacing-10)` — 40px (padding-left contenedor)

### Radius
- `var(--radius-full)` — 9999px (dots)
- `var(--radius-button)` — 9999px (badge)

### Tipografía
- `var(--font-display)` — Anton (números, títulos)
- `var(--font-subheading)` — Bebas Neue (badge)
- `var(--font-sans)` — Outfit (body)
- `var(--font-mono)` — Geist Mono (detail)
- `var(--tracking-tight)` — -0.025em
- `var(--tracking-wide)` — 0.025em
- `var(--tracking-wider)` — 0.05em

### Transiciones
- `var(--ease-spring)` — cubic-bezier(0.16, 1, 0.3, 1)
- `var(--duration-slow)` — 300ms

---

## Componibilidad

- Componente autónomo (no usa otras primitivas)
- Iconos SVG inline (Check) — sin `lucide-react`
- Estilos inline con tokens CSS

---

## Decisiones tomadas

1. **Dot size 44px (`var(--tap-min)`)**: la fuente usa 24px (`w-6 h-6`) pero DESIGN.md exige touch targets ≥44px. Se usa `var(--control-md)` = 48px en source pero ajustamos a 44px para consistencia con `--tap-min`.
2. **Línea vertical posicionada en left: 12px**: centrada con dot de 44px (44/2 = 22, left = 22 - 10 ≈ 12px).
3. **Props extendidas**: se añade `subtitle` y `body` (alias de `description`) para compatibilidad con `Steps.jsx` pattern.
4. **`onStepClick` opcional**: permite uso interactivo (form progress) o solo display (how it works).
5. **Ring color**: `rgba(255,236,1,.3)` en lugar de `brand-yellow-100` (no existe como token, se usa alpha directo).
6. **`className` passthrough**: solo en contenedor raíz.

---

## Validación

- ✅ TypeScript types en `.d.ts`
- ✅ Tokens semánticos únicamente
- ✅ Touch targets ≥44px (dots 44px)
- ✅ Accesibilidad: keyboard, role, aria
- ✅ `prefers-reduced-motion`: transiciones respetan `--duration-*`
- ✅ Contraste: textos azul-500 sobre fondos verificados
- ✅ Coexiste con `Steps.jsx` (diferente propósito documentado)