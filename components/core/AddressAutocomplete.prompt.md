# Prompt de generación: AddressAutocomplete

**Fecha:** 2026-10-02
**Fase:** 2 - CORE PRIMITIVES (Tarea 10)
**Fuente de verdad:** `../02enviosdosruedassetiembre/src/components/ui/AddressAutocomplete.tsx` + `../02enviosdosruedassetiembre/src/components/cobertura/CoberturaExplorer.tsx` (SEEDS)

---

## Objetivo

Crear `AddressAutocomplete`: autocompletado origen/destino para cotizador (barrios Mar del Plata), usando **datasource local estático** (array de barrios) — **NO Google Places API** (0 deps, 0 coste).

---

## Props

```ts
interface AddressAutocompleteProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
  type?: 'origin' | 'destination';
  value: string;
  onChange: (value: string) => void;
  onSelect?: (place: { name: string; address: string; lat: number; lng: number } | null) => void;
  error?: string;
  disabled?: boolean;
  className?: string;
  id?: string;
}
```

---

## Comportamiento

- **Extiende Input pattern**: label Bebas 12px uppercase, caja 44px (`var(--control-sm)`), rounded-xl (`var(--radius-control)`), borde 2px
- **Dropdown absolute** bajo input, `max-h-60` (240px) overflow-auto
- **Datasource**: `BARRIOS_MDQ` array estático (80+ barrios de Mar del Plata con zona, lat/lng, note) — fuente: `CoberturaExplorer.tsx` SEEDS
- **Filtro**: match case-insensitive en `name` + `note`, límite 10 resultados
- **Debounce**: 150ms en input
- **Teclado**: ArrowUp/Down, Enter para seleccionar, Escape para cerrar
- **Al seleccionar**: llama `onSelect` con `{name, address, lat, lng}` y setea `value` en input
- **Estados**:
  - `isLoading` (spinner durante debounce)
  - `empty`: "No se encontraron barrios. Cubrimos todo Mar del Plata. Escribinos por WhatsApp."
  - `error`: prop `error` renderizado inline con `role="alert"`
- **Accesibilidad**:
  - `role="combobox"`, `aria-autocomplete="list"`, `aria-expanded`, `aria-activedescendant`, `aria-controls`
  - `aria-invalid` si error
  - `aria-describedby` para error/hint
  - Keyboard navigation completa

---

## Tokens utilizados

### Colores
- `var(--color-brand-blue-500)` — bordes focus, iconos, texto input
- `var(--color-brand-blue-300)` — borde reposo
- `var(--color-brand-blue-100)` — borde hover
- `var(--color-brand-blue-50)` — fondo dropdown items hover (no usado, dropdown es dark)
- `var(--color-brand-yellow-500)` — icono MapPin en dropdown, ring selected
- `var(--color-white)` — texto dropdown
- `var(--color-error-500)` — borde/error label asterisco
- `var(--color-error-600)` — texto error

### Espaciado / Sizing
- `var(--control-sm)` — 44px (input minHeight)
- `var(--radius-control)` — 12px (input borderRadius)
- `var(--radius-xl)` — 16px (dropdown borderRadius)
- `var(--spacing-1)` — 4px
- `var(--spacing-2)` — 8px
- `var(--spacing-3)` — 12px
- `var(--spacing-4)` — 16px

### Tipografía
- `var(--font-subheading)` — Bebas Neue (label)
- `var(--font-sans)` — Outfit (input, dropdown items)
- `var(--font-mono)` — Geist Mono (no usado aquí)
- `var(--tracking-wider)` — 0.05em (label)
- `var(--text-xs)` — 12px (label)
- `var(--text-sm)` — 14px (input, dropdown)

### Transiciones
- `var(--ease-default)` — cubic-bezier(0.16, 1, 0.3, 1)
- `var(--duration-base)` — 200ms

---

## Componibilidad

- **Patrón Input**: replica estructura de `components/core/Input.jsx` (label + wrapper + input + icon + error)
- **Iconos SVG inline**: Search, MapPin, Loader — sin `lucide-react`
- **Estilos inline con tokens CSS** — sin clases Tailwind arbitrarias
- **Componente autónomo**: no usa BezelCard ni otras primitivas (dropdown es dark theme fijo)

---

## Decisiones tomadas

1. **Datasource local**: array `BARRIOS_MDQ` copiado de `CoberturaExplorer.tsx` SEEDS (82 items con name, zone, note, lat, lng). El prompt exige "NO Google Places API". Las coordenadas lat/lng son aproximadas para habilitar `onSelect` con coordenadas.
2. **Dropdown dark theme**: fondo `brand-blue-500`, texto blanco, bordes `white/20` — coherente con el header/hero dark surfaces del sitio.
3. **Debounce 150ms**: más rápido que source (300ms) para UX local sin red.
4. **Límite 10 resultados**: evita dropdown excesivamente largo.
5. **`onSelect` recibe null al limpiar**: cuando input se vacía, `onSelect(null)` para limpiar coordenadas previas.
6. **Click outside + blur delay**: `setTimeout 200ms` en onBlur para permitir click en suggestion antes de cerrar.
7. **Empty state con CTA implícito**: mensaje guía hacia WhatsApp (consistente con CoberturaExplorer no-results).
8. **Zonas en suggestion**: muestra `zone` (Z1-Z5) + `note` para contexto de tarifa.

---

## Validación

- ✅ TypeScript types en `.d.ts`
- ✅ Tokens semánticos únicamente
- ✅ Touch targets ≥44px (input 44px, dropdown items ~48px)
- ✅ Accesibilidad completa: combobox ARIA, keyboard nav
- ✅ `prefers-reduced-motion`: transiciones respetan `--duration-*`
- ✅ Contraste: blanco sobre azul-500 (6.02:1), amarillo-500 sobre azul-500 (4.94:1)
- ✅ Sin dependencias externas (Google Places, lucide-react)