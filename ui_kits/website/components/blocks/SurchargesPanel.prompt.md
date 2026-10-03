# Prompt de generación: SurchargesPanel

**Fecha:** 2026-10-02
**Fase:** 4 - BLOCKS (Tarea 17)
**Fuente de verdad:**
- `../02enviosdosruedassetiembre/src/lib/promises.ts` (líneas 41-67)
- `../02enviosdosruedassetiembre/src/components/cotizar/unified/CotizadorRecargos.tsx`

---

## Objetivo

Crear `SurchargesPanel`: panel de recargos operativos (cotizador, páginas de servicio) con filtro por servicio.

---

## Props

```ts
interface SurchargeItem {
  label: string;
  value: string;
  condition: string;
  appliesTo: ('EXPRESS'|'LOW_COST'|'FLEX'|'ECOMMERCE_24HS'|'ECOMMERCE_SAME_DAY'|'CUENTA_CORRIENTE'|'ALL')[];
  icon?: React.ReactNode;
}

interface SurchargesPanelProps {
  items?: SurchargeItem[];  // default: desde promises.ts
  serviceFilter?: 'EXPRESS' | 'LOW_COST' | 'FLEX' | 'ECOMMERCE_24HS' | 'ECOMMERCE_SAME_DAY' | 'CUENTA_CORRIENTE' | 'ALL';
  className?: string;
}
```

---

## Datos (fuente: promises.ts líneas 41-67)

| Recargo | Valor | Condición | Aplica a |
|---------|-------|-----------|----------|
| **Lluvia** | 50% (Express/LowCost) · 30% (otros) | Precipitaciones durante el viaje | ALL |
| **Espera en puerta** | $2.100 c/10 min (desde min 11) | Tolerancia 10 min sin cargo | EXPRESS, LOW_COST, FLEX |
| **Parada extra** | +50% sobre tarifa base | Máx 2 km desvío. Más = envío aparte | EXPRESS, LOW_COST, FLEX |
| **Reintento** | 100% del valor del envío | Segunda visita por destinatario ausente | ALL |
| **Periferia** | $1.000 / km de ruta | Fuera ejido urbano (Batán, Sierra...). Cotización aparte | ALL |
| **Bulto extra** | Desde $1.950 | >5kg o 40×40cm. Monto varía según servicio | ALL |

*Valores desde promises.ts:*
- `RAIN_SURCHARGE_PERCENT_EXPRESS_LOWCOST = 50`
- `RAIN_SURCHARGE_PERCENT = 30`
- `WAIT_TOLERANCE_MIN = 10`, `WAIT_CHARGE_ARS = 2100`, `WAIT_CHARGE_BLOCK_MIN = 10`
- `EXTRA_STOP_SURCHARGE_PERCENT = 50`, `EXTRA_STOP_MAX_DETOUR_KM = 2`
- `RETRY_CHARGE_PERCENT = 100`
- `PERIPHERY_PRICE_PER_KM = 1000`
- `BULK_EXTRA_FROM_ARS = 1950`

---

## Visual

- **BezelCard** `tone="light"`, `hoverLift=false`, padding 24
- **Header**: Badge "Recargos operativos" + mono "Informativos · No entran en cálculo automático"
- **Filter chips**: `["Todos", "Express", "LowCost", "Flex", "E-Commerce 24HS", "E-Commerce Same Day", "Cuenta Corriente"]`
  - Active: bg `brand-blue-500` / texto blanco
  - Inactive: bg blanco / borde `brand-blue-100` / texto `brand-blue-500`
- **Grid**: 2 cols mobile (≥640px), 4 cols desktop (≥1024px)
- **Cada item card**: bg `brand-blue-50`, borde `brand-blue-100`, hover → border `brand-blue-300` + `shadow-sm`
  - Icon circle 40px (bg blanco, borde `brand-blue-100`, color `brand-blue-500`)
  - Label: Bebas 12px uppercase `tracking-wider` (`brand-blue-500`)
  - Valor: Geist Mono 16px bold tabular-nums (`brand-blue-500`)
  - Condición: Outfit 12px muted (`brand-blue-500` opacity 0.8)
  - Badges de servicio aplicable: `Badge tone="muted" size="sm" mono`

---

## Tokens utilizados

### Colores
- `var(--color-brand-blue-500)` — iconos, textos, badges active
- `var(--color-brand-blue-100)` — bordes, chip inactive border
- `var(--color-brand-blue-50)` — item card bg
- `var(--color-brand-yellow-500)` — no usado directamente
- `var(--color-white)` — icon bg, chip active bg

### Espaciado
- `var(--spacing-2)` — 8px
- `var(--spacing-3)` — 12px
- `var(--spacing-4)` — 16px
- `var(--spacing-5)` — 20px
- `var(--spacing-8)` — 32px

### Radius
- `var(--radius-card)` / `var(--radius-card-inner)` — via BezelCard
- `var(--radius-control)` — 12px (item card)
- `var(--radius-button)` — chips, badges

### Tipografía
- `var(--font-subheading)` — Bebas Neue (labels, filter chips)
- `var(--font-sans)` — Outfit (condiciones)
- `var(--font-mono)` — Geist Mono (valores)
- `var(--tracking-wider)` — 0.05em

### Sombras
- `var(--shadow-sm)` — item hover

---

## Componibilidad

- **BezelCard** (core) — contenedor principal
- **Badge** (core) — header badge, filter chips (badge style), service badges
- **Iconos SVG inline** — sin dependencias externas

---

## Decisiones tomadas

1. **Items por defecto desde promises.ts**: array `SURCHARGES` con 6 items hardcodeados usando valores de promises.ts. Props `items` permite override.
2. **Filter chips como botones**: no usan componente `FilterChips` separado (aún no existe en blocks), se definen inline con estilos badge.
3. **Service badges en cada item**: `Badge tone="muted" size="sm" mono` para cada servicio en `appliesTo`.
4. **Grid responsive via CSS**: `grid-template-columns: 1fr` → `repeat(2,1fr)` @640px → `repeat(4,1fr)` @1024px.
5. **Hover en item cards**: border `brand-blue-300` + `shadow-sm`.
6. **"Informativos" disclaimer**: texto mono en header aclarando que no entran en cálculo automático.

---

## Validación

- ✅ TypeScript types en `.d.ts`
- ✅ Tokens semánticos únicamente
- ✅ Responsive: 1/2/4 cols
- ✅ Touch targets: chips 36px min-height, cards clickables
- ✅ `prefers-reduced-motion`: sin animaciones propias
- ✅ Contraste: textos azul-500 sobre azul-50/blanco
- ✅ Accesibilidad: botones chips con `type="button"`, focus visible via tokens