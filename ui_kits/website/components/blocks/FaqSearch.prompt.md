# Prompt de generación: FaqSearch

**Fecha:** 2026-10-02
**Fase:** 4 - BLOCKS (Tarea 21)
**Fuente de verdad:** `ui_kits/website/FaqScreen.jsx` (líneas 16-24)

---

## Objetivo

Crear `FaqSearch`: buscador de FAQ con filtro por categoría (página /nosotros/preguntas-frecuentes).

---

## Props

```ts
interface FaqCategory {
  name: string;
  desc: string;
  icon: string;
  items: Array<{ q: string; a: string }>;
}

interface FaqSearchProps {
  categories?: FaqCategory[];
  className?: string;
  onSearch?: (query: string, results: Array<{ q: string; a: string; category: string }>) => void;
}
```

---

## Visual (basado en FaqScreen.jsx)

- **Input search**: `Input as="search"` placeholder "Ej: horario, zonas, peso, contrareembolso" + icon Search
- **Chips categoría**: `FilterChips` (data) con count badges (mono 12px)
- **Resultados**: `Accordion` (data) con items filtrados
- **Empty state**: "No encontramos preguntas con ese término. Escribinos por WhatsApp..." + botón WhatsApp
- **Contadores**: "21 preguntas · 4 categorías · +54 223 660-2699" (mono 14px)
- **Categoría activa**: bg `brand-blue-500`, texto blanco; inactiva: bg blanco, borde `brand-blue-100`

---

## Datos (DEFAULT_CATEGORIES — 21 preguntas, 4 categorías)

| Categoría | Preguntas | Temas |
|-----------|-----------|-------|
| Servicios | 5 | Express/LowCost/Flex diff, cobertura, peso, contrareembolso, lluvia |
| Tarifas | 4 | Cálculo precio, cuenta corriente, pagos, DropOFF |
| Operativa | 5 | Horarios, seguimiento, reintento, espera, parada extra |
| Confianza | 4 | Años, flota propia, seguro, reclamos |

*Fuente: FaqScreen.jsx líneas 16-24*

---

## Tokens utilizados

### Colores
- `var(--color-brand-blue-500)` — textos, iconos, chips active
- `var(--color-brand-yellow-500)` — WhatsApp link, CTA
- `var(--color-brand-blue-100)` — chips inactive border
- `var(--color-brand-blue-50)` — empty state bg
- `var(--color-white)` — chips inactive bg

### Espaciado
- `var(--spacing-4)` — 16px
- `var(--spacing-10)` — 40px (empty state padding)

### Tipografía
- `var(--font-subheading)` — Bebas Neue (chips, empty title, counter label)
- `var(--font-sans)` — Outfit (body, empty text)
- `var(--font-mono)` — Geist Mono (contadores, WhatsApp link)
- `var(--tracking-wider)` — 0.05em

### Componentes
- **Input** (core) — search input
- **FilterChips** (data) — category chips
- **Accordion** (data) — results
- **Badge** (core) — count badges en chips

---

## Componibilidad

- **Input** (core) — search field
- **FilterChips** (data) — category filter
- **Accordion** (data) — collapsible results
- **Display/Lead** — no usados directamente pero disponibles

---

## Decisiones tomadas

1. **Filtro dual**: búsqueda de texto (query) + categoría (chips). Ambos combinados con AND.
2. **Categories con counts**: `categoriesWithCounts` computa total + por categoría para badges en chips.
3. **`onSearch` callback**: permite tracking/analytics externo.
4. **Empty state con CTA WhatsApp**: deep link prellenado con contexto de búsqueda.
5. **Accordion `allowMultiple={true}`**: permite varias abiertas a la vez.
6. **Resultados aplanados**: `allItems` = flat array con `category` property para filtrado simple.
7. **Contador dinámico**: muestra "X preguntas encontradas · Categoría: Y · Búsqueda: Z".

---

## Validación

- ✅ TypeScript types en `.d.ts`
- ✅ Tokens semánticos únicamente
- ✅ Componibilidad: Input, FilterChips, Accordion
- ✅ Touch targets: chips 36px, Input 44px
- ✅ `prefers-reduced-motion`: sin animaciones propias
- ✅ Contraste: textos azul-500 sobre fondos
- ✅ Accesibilidad: search role, aria en chips/accordion
- ✅ Responsive: stack vertical, chips wrap