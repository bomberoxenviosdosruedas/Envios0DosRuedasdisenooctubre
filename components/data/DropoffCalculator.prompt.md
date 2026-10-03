# Prompt de generación: DropoffCalculator

**Fecha:** 2026-10-02
**Fase:** 3 - DATA COMPONENTS (Tarea 12)
**Fuente de verdad:** `ui_kits/website/EmprendedoresScreen.jsx` (líneas 13-22) + `../02enviosdosruedassetiembre/src/lib/promises.ts` (DROPOFF_DISCOUNT_PERCENT=20)

---

## Objetivo

Crear `DropoffCalculator`: calculadora interactiva DropOFF -20% para la modalidad de traer envíos al depósito (EmprendedoresScreen).

---

## Props

```ts
interface DropoffCalculatorProps {
  basePrice?: number;        // default: 2400 (20% off $3000)
  discountPercent?: number;  // default: 20
  initialValue?: number;     // default: 120
  onCalculate?: (shipments: number, savings: number) => void;
  className?: string;
}
```

---

## Comportamiento (basado en EmprendedoresScreen.jsx)

- **BezelCard** `tone="light"`, `hoverLift=false`, padding 24
- **Label** "Envíos por mes" (Bebas 14px uppercase tracking-wider)
- **QuantityStepper** (inline) + input range sync
- **FilterChips** atajos: `["25", "100", "250", "500"]` → setean valor
- **Resultado**: "Ahorro estimado" + Geist Mono 700 40px tabular-nums + "/ mes" mono 12px
- **Nota**: "Base: $X por envío − Y% (cifra de ejemplo del sitio)"
- **CTA**: Button fullWidth external href WhatsApp con mensaje prellenado:
  `https://wa.me/542236602699?text=${encodeURIComponent(\`Hola! Manejo aprox. N envíos por mes y quiero activar DropOFF (Y% off) en Mar del Plata.\`)}`

---

## Cálculo

```
savings = Math.round(basePrice * discountPercent / 100) * shipments
```

**Base price real**: desde $3000 (tarifa LowCost zona 1) -20% = $2400.
Ver `promises.ts`: `DROPOFF_DISCOUNT_PERCENT = 20`.

---

## Tokens utilizados

### Colores
- `var(--color-brand-blue-500)` — textos, bordes, accentColor range
- `var(--color-brand-yellow-500)` — Button primary (WhatsApp CTA)
- `var(--color-brand-blue-100)` — bordes sutiles, divider
- `var(--color-white)` — fondos inputs, botones stepper

### Espaciado
- `var(--spacing-2)` — 8px
- `var(--spacing-3)` — 12px
- `var(--spacing-4)` — 16px
- `var(--spacing-5)` — 20px (gap principal)

### Radius
- `var(--radius-card)` / `var(--radius-card-inner)` — via BezelCard
- `var(--radius-control)` — 12px (input range, number input)
- `var(--radius-button)` / `var(--radius-full)` — 9999px (stepper buttons, FilterChips)

### Tipografía
- `var(--font-subheading)` — Bebas Neue (labels, FilterChips)
- `var(--font-mono)` — Geist Mono (números, ahorro, nota)
- `var(--font-sans)` — Outfit (Button text)
- `var(--tracking-wider)` — 0.05em

### Touch targets
- `var(--control-sm)` — 44px (stepper buttons, input height)
- `var(--tap-min)` — 44px (mínimo absoluto)

---

## Componibilidad

- **BezelCard** (core) — contenedor principal
- **Button** (core) — CTA WhatsApp
- **Badge** (core) — no usado directamente pero disponible
- **QuantityStepper** inline (no componente separado por simplicidad)
- **FilterChips** inline (simplified version)

---

## Decisiones tomadas

1. **QuantityStepper y FilterChips inline**: en lugar de importar componentes separados (que no existen aún en core), se definen inline simplificados. Esto evita dependencias circulares y mantiene el componente autocontenido.
2. **Input range sync**: el `<input type="range">` se sincroniza con el stepper via `shipments` state.
3. **Atajos como FilterChips**: botones con estilo chip que actualizan el valor directamente.
4. **WhatsApp deep link**: usa `encodeURIComponent` para el mensaje prellenado con el valor actual de `shipments`.
5. **`onCalculate` callback**: permite al padre reaccionar al cálculo (analytics, etc.).
6. **Nota "cifra de ejemplo"**: texto transparente indicando que es estimación del sitio, no cotización vinculante.

---

## Validación

- ✅ TypeScript types en `.d.ts`
- ✅ Tokens semánticos únicamente
- ✅ Touch targets ≥44px (stepper buttons 44px, inputs 44px)
- ✅ Componibilidad con BezelCard, Button
- ✅ `prefers-reduced-motion`: sin animaciones propias
- ✅ Contraste: textos azul-500 sobre blanco (6.02:1)
- ✅ Responsive: stack vertical en mobile, inline en desktop