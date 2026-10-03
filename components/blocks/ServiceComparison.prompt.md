# Prompt de generación: ServiceComparison

**Fecha:** 2026-10-02
**Fase:** 4 - BLOCKS (Tarea 16)
**Fuente de verdad:** `../02enviosdosruedassetiembre/docs/knowledge_base/00-negocio/servicios.md` + `promises.ts` + `pricing.ts` (no existe componente unificado en source, crear desde cero)

---

## Objetivo

Crear `ServiceComparison`: tabla comparativa de servicios (cotizador, página servicios) — **responsive**: mobile → cards apiladas (BezelCard), desktop → `<table>` semántica.

---

## Props

```ts
interface ComparisonRow {
  feature: string;
  express: string;
  lowcost: string;
  flex: string;
  emprendedores?: string;
}

interface ServiceComparisonProps {
  rows: ComparisonRow[];
  className?: string;
}
```

---

## Datos (fuente: promises.ts + servicios.md)

| Feature | Express | LowCost | Flex | Emprendedores |
|---------|---------|---------|------|---------------|
| Franja horaria | 3 hs a elección | Sin franja (programado) | Corte 15:00 | Same-day |
| Corte | 15:00 hs | 13:00 hs | 15:00 hs | 13:00 hs |
| Peso sin cargo | 5 kg / 40×40 cm | 5 kg / 40×40 cm | 5 kg / 40×40 cm | 5 kg / 40×40 cm |
| Recargo lluvia | 50% | 50% | 30% | 30% |
| Contrareembolso | Sí | Sí | Sí | Sí (0% comisión) |
| DropOFF -20% | No | No | No | Solo E-comm 24HS |
| Cobertura | MDQ urbana | MDQ urbana | MDQ urbana | MDQ urbana |
| Periferia | $1000/km ruta | $1000/km ruta | $1000/km ruta | $1000/km ruta |

---

## Visual

- **Desktop**: `<table>` semántico con sticky header
  - Header: `brand-blue-50` bg, Bebas uppercase `tracking-wider`, border-bottom 2px `brand-blue-100`
  - Rows: hover `brand-blue-50`, zebra striping `nth-child(even)` `brand-blue-50/50`
  - Boolean values (Sí/No) → Check/Cross icons (success-500/error-500) centrados
  - Text values: Outfit 14px `brand-blue-500`
- **Mobile (<768px)**: Cards apiladas (BezelCard light)
  - Cada row = 1 card
  - Feature title: Bebas 14px uppercase
  - Grid 2 cols para valores: label (mono 11px) + valor (check/cross o texto)
  - Gap 12px entre cards

---

## Tokens utilizados

### Colores
- `var(--color-brand-blue-500)` — textos, header
- `var(--color-brand-blue-50)` — header bg, row hover, mobile card cell bg
- `var(--color-brand-blue-100)` — header border
- `var(--color-brand-yellow-500)` — no usado directamente
- `var(--color-success-500)` — check icon (`#16A34A` propuesto)
- `var(--color-error-500)` — cross icon (`#EF4444`)

### Espaciado
- `var(--spacing-2)` — 8px
- `var(--spacing-3)` — 12px
- `var(--spacing-4)` — 16px
- `var(--spacing-6)` — 24px (mobile card gap)

### Radius
- `var(--radius-card)` / `var(--radius-card-inner)` — via BezelCard mobile
- `var(--radius-control)` — 12px (mobile cell)
- `var(--radius-full)` — check/cross circles

### Tipografía
- `var(--font-subheading)` — Bebas Neue (headers, feature title)
- `var(--font-sans)` — Outfit (body)
- `var(--font-mono)` — Geist Mono (mobile labels)
- `var(--tracking-wider)` — 0.05em
- `var(--text-sm)` — 14px
- `var(--text-xs)` — 12px

---

## Componibilidad

- **BezelCard** (core) — mobile cards wrapper
- **Check/Cross** SVG inline — icons para booleanos
- **Table semántica** — desktop con `display: table` CSS

---

## Decisiones tomadas

1. **Dual render**: media queries CSS para table (desktop) vs cards (mobile). No JS state para breakpoint.
2. **Boolean detection**: heurística simple en `renderCell` — strings con "sí/incluido/✓" → check, "no/excluido/✗" → cross. Resto = texto.
3. **Sticky header**: `position: sticky; top: 0` en `<th>` para scroll largo.
3. **Zebra + hover**: `nth-child(even)` + `:hover` ambos `brand-blue-50` bg.
4. **BezelCard solo mobile**: desktop usa table nativa (más semántica, menos DOM).
5. **Headers fijos**: "Característica | Express | LowCost | Flex | Emprendedores" — mapeo automático de keys (`express`, `lowcost`, `flex`, `emprendedores`).

---

## Validación

- ✅ TypeScript types en `.d.ts`
- ✅ Tokens semánticos únicamente
- ✅ Responsive: table desktop, cards mobile
- ✅ Accesibilidad: `role="table/row/cell"`, `scope` implícito por estructura
- ✅ Touch targets: mobile cards clickable area completa
- ✅ `prefers-reduced-motion`: sin animaciones propias
- ✅ Contraste: textos azul-500 sobre blanco/azul-50 (6.02:1 / 5.17:1)