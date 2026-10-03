# Prompt de generación: QuoteGuide

**Fecha:** 2026-10-02
**Fase:** 4 - BLOCKS (Tarea 18)
**Fuente de verdad:** `../02enviosdosruedassetiembre/src/components/cotizar/unified/CotizadorGuia.tsx`

---

## Objetivo

Crear `QuoteGuide`: guía paso a paso del cotizador (pasos laterales o superior), usando **StepperHorizontal** (horizontal) o lista vertical con BezelCard.

---

## Props

```ts
interface GuideStep {
  step: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface QuoteGuideProps {
  steps?: GuideStep[];
  currentStep: number;
  orientation?: 'horizontal' | 'vertical'; // default: horizontal
  className?: string;
}
```

---

## Visual (basado en CotizadorGuia.tsx)

### Horizontal (default): StepperHorizontal + descripciones
- Usa `StepperHorizontal` (core) con `steps` convertidos
- Steps: 1. Origen/Destino (icon Pin) → 2. Servicio (icon Bike) → 3. Confirmar (icon Check)
- Copy voseo: "Elegí origen y destino", "Seleccioná tu servicio", "Confirmá y listo"

### Vertical: lista numerada 01/02/03 con BezelCard
- Lista `<ol>` style con BezelCard por step
- **Completed**: BezelCard `variant="dark"`, número ✓ amarillo, icon bg amarillo-50
- **Active**: BezelCard `variant="accent"`, número azul-500, icon bg amarillo-50/20, Badge "Paso actual" accent
- **Pending**: BezelCard `variant="light"`, número azul-100, icon bg azul-50
- Cada card: icon circle 48px + título (Bebas 18px uppercase) + descripción (Outfit 14px)
- Gap 16px entre cards

---

## Tokens utilizados

### Colores
- `var(--color-brand-blue-500)` — textos, iconos, numbers
- `var(--color-brand-yellow-500)` — completed numbers, active accents
- `var(--color-brand-blue-100)` — pending numbers bg
- `var(--color-brand-blue-50)` — icon bg pending/active
- `var(--color-white)` — completed number text

### Espaciado
- `var(--tap-min)` — 44px (number circle)
- `var(--spacing-2)` — 8px
- `var(--spacing-3)` — 12px
- `var(--spacing-4)` — 16px (card gap)

### Radius
- `var(--radius-full)` — 9999px (number circles)
- `var(--radius-control)` — 12px (icon circles)
- `var(--radius-card)` / `var(--radius-card-inner)` — via BezelCard

### Tipografía
- `var(--font-subheading)` — Bebas Neue (títulos, Badge)
- `var(--font-sans)` — Outfit (descripciones)
- `var(--font-mono)` — Geist Mono (numbers)
- `var(--tracking-wider)` — 0.05em

### Componentes
- **StepperHorizontal** (core) — modo horizontal
- **BezelCard** (core) — modo vertical cards
- **Badge** (core) — "Paso actual"

---

## Componibilidad

- **StepperHorizontal** (core) — reusa stepper horizontal existente
- **BezelCard** (core) — vertical cards
- **Badge** (core) — "Paso actual" badge
- **Iconos SVG inline** — Pin, Bike, Check

---

## Decisiones tomadas

1. **Dual orientation**: `orientation` prop controla render. Horizontal = StepperHorizontal (ya existe). Vertical = BezelCard list.
2. **Default steps**: 3 pasos fijos del cotizador (Origen/Destino → Servicio → Confirmar) con copy voseo rioplatense.
3. **Iconos fijos**: Pin, Bike, Check — definidos inline en componente.
4. **Vertical variant states**: Completed/Active/Pending visual differentiation via BezelCard variant + number circle styles.
5. **`currentStep` 0-indexed**: consistente con StepperHorizontal.

---

## Validación

- ✅ TypeScript types en `.d.ts`
- ✅ Tokens semánticos únicamente
- ✅ Componibilidad: StepperHorizontal, BezelCard, Badge
- ✅ Touch targets: number circles 44px, icon circles 48px
- ✅ `prefers-reduced-motion`: sin animaciones propias
- ✅ Contraste: textos azul-500 sobre fondos verificados
- ✅ Accesibilidad: semantic structure