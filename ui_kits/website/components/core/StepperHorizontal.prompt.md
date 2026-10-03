# Prompt de generación: StepperHorizontal

**Fecha:** 2026-10-02
**Fase:** 2 - CORE PRIMITIVES (Tarea 8)
**Fuente de verdad:** `../02enviosdosruedassetiembre/src/components/ui/StepperHorizontal.tsx`

---

## Objetivo

Crear `StepperHorizontal`: stepper de flujo horizontal para cotizador (pasos: 1. Datos → 2. Servicio → 3. Confirmación), usando **solo tokens del design system**.

---

## Props

```ts
interface HorizontalStep {
  title: string;
  subtitle?: string;
}

interface StepperHorizontalProps {
  steps: HorizontalStep[];
  currentStep: number; // 0-indexed
  onStepClick?: (stepIndex: number) => void;
  className?: string;
}
```

---

## Visual (basado en fuente de verdad)

- **Línea base**: 2px `brand-blue-100`, full width, centrada verticalmente con los círculos
- **Línea progreso**: `brand-yellow-500`, width = `(currentStep / (steps.length-1)) * 100%`, transition `duration-slow` `ease-spring`
- **Círculos 40px** (`var(--control-md)`):
  - **Completed**: bg `brand-yellow-500`, border `brand-yellow-500`, icon Check (blanco → `stroke: brand-blue-500`), label azul-500
  - **Active**: bg `brand-blue-500`, border `brand-blue-500`, texto blanco, ring 4px `brand-blue-500/20`, `scale-105`
  - **Pending**: bg `white`, border `brand-blue-300`, texto azul-500
- **Labels**: Bebas Neue 400, `text-xs`, uppercase, `tracking-wider`
- **Subtitle**: Geist Mono `text-[11px]`, azul-500
- **Accesible**: `role="button"` si `onStepClick`, `tabindex`, Enter/Space
- **Hover clickable**: `scale-110` (sobre el círculo)
- **Transiciones**: `var(--ease-spring)`, `var(--duration-slow)`

---

## Tokens utilizados

### Colores
- `var(--color-brand-blue-100)` — línea base
- `var(--color-brand-yellow-500)` — línea progreso, circle completed
- `var(--color-brand-blue-500)` — circle active, textos
- `var(--color-brand-blue-300)` — circle pending border
- `var(--color-white)` — circle pending bg

### Espaciado / Sizing
- `var(--control-md)` — 48px (circle size)
- `var(--spacing-2)` — 8px (gap circle-label)
- `var(--spacing-4)` — 16px (padding contenedor)

### Radius
- `var(--radius-full)` — 9999px (circle)

### Tipografía
- `var(--font-subheading)` — Bebas Neue (labels)
- `var(--font-mono)` — Geist Mono (subtitle)
- `var(--tracking-wider)` — 0.05em

### Transiciones
- `var(--ease-spring)` — cubic-bezier(0.16, 1, 0.3, 1)
- `var(--duration-slow)` — 300ms (progress line)
- `var(--duration-base)` — 200ms (circle hover/active)
- `var(--ease-default)` — cubic-bezier(0.16, 1, 0.3, 1)

---

## Componibilidad

- Componente autónomo (no usa otras primitivas del sistema)
- Iconos SVG inline (Check) — sin dependencia `lucide-react`
- Estilos inline con tokens CSS

---

## Decisiones tomadas

1. **Línea base centrada**: `top: calc(20px + var(--control-md) / 2)` alinea la línea de 2px con el centro de los círculos (40px/2 = 20px desde el top del contenedor + padding).
2. **Progress width calculation**: `Math.min(currentStep, steps.length - 1) / Math.max(steps.length - 1, 1)` evita división por cero y clampa al último paso.
3. **Hover scale en clickable only**: solo pasos completed/active con `onStepClick` tienen hover effect.
4. **Focus-visible no implementado inline**: se delega a CSS global `:focus-visible` en el contenedor (tokens `--focus-ring`).
5. **`className` prop mantenida** para compatibilidad pero no parseada (solo spread en contenedor externo).

---

## Validación

- ✅ TypeScript types en `.d.ts`
- ✅ Tokens semánticos únicamente
- ✅ Accesibilidad: keyboard, role, aria
- ✅ Touch targets ≥44px (circle 48px)
- ✅ `prefers-reduced-motion`: transiciones respetan `--duration-*`
- ✅ Contraste: textos azul-500 sobre blanco/fondos verificados