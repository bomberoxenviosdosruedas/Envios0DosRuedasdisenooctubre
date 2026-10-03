# Prompt de generación: CoverageMap

**Fecha:** 2026-10-02
**Fase:** 3 - DATA COMPONENTS (Tarea 13)
**Fuente de verdad:** `../02enviosdosruedassetiembre/src/components/ui/LeafletRouteMap.tsx` + `../02enviosdosruedassetiembre/src/components/cobertura/CoberturaExplorer.tsx` (SEEDS/ZONES)

---

## Objetivo

Crear `CoverageMap`: mapa de cobertura interactivo (página /cobertura, cotizador).
**Decisión**: OPCIÓN B — mapa estático SVG/WebP con tooltips CSS-only (sin Leaflet, bundle ligero).

---

## Props

```ts
interface CoverageMapProps {
  center?: [number, number];           // default: Mar del Plata [-38.0, -57.55]
  zoom?: number;                       // default: 12
  zones?: Array<{ id: string; name: string; polygon: [number,number][]; color: string }>;
  markers?: Array<{ position: [number,number]; popup: string; icon?: string }>;
  readonly?: boolean;
  className?: string;
  onZoneClick?: (zoneId: string) => void;
}
```

---

## Visual (basado en CoberturaExplorer SEEDS + LeafletRouteMap markers)

- **SVG estático** viewBox 400×500 (mobile 4/3, desktop 16/9 via aspect-ratio)
- **Fondo**: grilla punteada 20px `brand-blue-100` opacity 0.5
- **5 Zonas** (Z1-Z5) como `<path>` SVG con colores degradados:
  - Z1: `brand-blue-500` opacity 0.4 (0-3 km)
  - Z2: `brand-blue-400` opacity 0.35 (3-5 km)
  - Z3: `brand-blue-300` opacity 0.3 (5-7 km)
  - Z4: `brand-blue-200` opacity 0.25 (7-10 km)
  - Z5: `brand-yellow-500` opacity 0.3 (+10 km periferia)
- **Hover zona**: opacity 1, brightness 1.1, tooltip aparece
- **Click zona**: callback `onZoneClick(zoneId)` + selected state (stroke amarillo-500 3px)
- **Tooltip CSS-only** (absolute, `transform: translate(-50%, -100%)`):
  - Título: Bebas uppercase (zona name)
  - Rango + precios Express/LowCost (Geist Mono 11px tabular-nums)
  - `<details>` expandible con lista de barrios (2 columnas)
- **Marcadores** (base Friuli 1972, Puerto, Punta Mogotes, Parque Camet):
  - Círculo 28px azul-500, icono emoji/SVG, drop-shadow
  - Hover: scale 1.3
- **Leyenda inferior**: chips mono 11px con swatch color + "Z1: 0-3 km" etc.
- **Responsive**: mobile aspect-ratio 4/3 (min 300px), desktop 16/9
- **prefers-reduced-motion**: transiciones desactivadas

---

## Tokens utilizados

### Colores
- `var(--color-brand-blue-500)` — Z1, marcadores, tooltip bg
- `var(--color-brand-blue-400)` — Z2
- `var(--color-brand-blue-300)` — Z3
- `var(--color-brand-blue-200)` — Z4
- `var(--color-brand-blue-100)` — strokes, grid
- `var(--color-brand-yellow-500)` — Z5, selected stroke
- `var(--color-white)` — marker stroke, tooltip arrow
- `var(--color-neutral-50)` — fondo mapa

### Radius
- `var(--radius-card)` — 16px (contenedor)
- `var(--radius-control)` — 12px (tooltip)

### Sombras
- `var(--shadow-elevated)` — tooltip

### Tipografía
- `var(--font-subheading)` — Bebas Neue (zona title, legend)
- `var(--font-sans)` — Outfit (tooltip body)
- `var(--font-mono)` — Geist Mono (precios, rangos, legend)
- `var(--tracking-wider)` — 0.05em
- `var(--tracking-mega)` — 0.2em (legend)

### Espaciado
- `var(--spacing-2)` — 8px
- `var(--spacing-3)` — 12px
- `var(--spacing-4)` — 16px
- `var(--spacing-6)` — 24px

---

## Componibilidad

- **BezelCard** (opcional wrapper) — no usado, SVG directo en contenedor con radius
- **Componentes autónomos**: SVG + CSS inline, sin dependencias externas

---

## Decisiones tomadas

1. **OPCIÓN B (SVG estático)**: Leaflet añade ~80kb gz. Para design system, mapa estático con paths SVG aproximados es suficiente. Las paths son formas orgánicas aproximadas (no geo-precisas) — sirven para visualización de zonas, no navegación.
2. **Paths SVG aproximados**: Bézier curves (`Q` commands) que dibujan formas orgánicas superpuestas simulando zonas concéntricas desde el centro (base Friuli 1972).
3. **Tooltips CSS-only**: `hover + tooltip` sibling selector + `details/summary` para barrios expandibles. Sin JS state para tooltips.
4. **Selected state**: click en zona → `selectedZone` state → stroke amarillo-500 3px + tooltip persistente.
5. **Leyenda responsive**: flex wrap, oculto en mobile <480px (la info está en tooltips).
6. **Marcadores fijos**: 4 puntos clave con iconos emoji (fallback universal). Posiciones hardcodeadas en viewBox coords.
7. **Barrios en tooltip**: array de strings desde CoberturaExplorer SEEDS, renderizados en `<details>` 2 columnas.
8. **Precios en tooltip**: desde pricing.ts tiers (Express/LowCost por zona). Z5 = "Ver tarifas" (calculado por km).

---

## Validación

- ✅ TypeScript types en `.d.ts`
- ✅ Tokens semánticos únicamente
- ✅ Sin dependencias pesadas (Leaflet)
- ✅ Touch targets: zonas clickables, marcadores 28px
- ✅ `prefers-reduced-motion`: transiciones off
- ✅ Accesibilidad: `role="img"`, `aria-label`, `<title>` en marcadores
- ✅ Responsive: 4/3 mobile, 16/9 desktop
- ✅ Bundle ligero: ~3KB componente