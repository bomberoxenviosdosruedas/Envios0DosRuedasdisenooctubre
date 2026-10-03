# Prompt de generación: MissionVision

**Fecha:** 2026-10-02
**Fase:** 4 - BLOCKS (Tarea 23)
**Fuente de verdad:** `ui_kits/website/NosotrosScreen.jsx` (líneas 17-18 último Grid)

---

## Objetivo

Crear `MissionVision`: bloque Misión / Visión / Compromiso (NosotrosScreen final).

---

## Props

```ts
interface MissionVisionProps {
  mission?: { title: string; body: string };
  vision?: { title: string; body: string; badge?: string };
  commitment?: { title: string; body: string; ctaPrimary: {label:string; href:string}; ctaSecondary: {label:string; href:string} };
  className?: string;
}
```

---

## Visual (basado en NosotrosScreen.jsx último Grid)

- **Grid** min 280px, 3 columnas (mobile 1 col, tablet 3 cols)
- **Col 1**: BezelCard `tone="light"` → Misión (title Bebas 24px, body Outfit 14px)
- **Col 2**: BezelCard `tone="light"` → Visión (title Bebas 24px, body Outfit 14px + Badge muted mono "Visión de futuro 2026")
- **Col 3**: BezelCard `tone="accent"` (amarillo) `hoverLift=false` → Compromiso
  - Title Bebas 24px azul-500
  - Body Outfit 14px
  - 2 Botones: Button `variant="social" size="sm"` + Button `variant="secondary" size="sm"`

---

## Tokens utilizados

### Colores
- `var(--color-brand-blue-500)` — títulos, textos, Button social
- `var(--color-brand-yellow-500)` — Compromiso card bg (via BezelCard accent)
- `var(--color-white)` — no directo

### Espaciado
- `var(--spacing-4)` — 16px (gap interno)
- `var(--spacing-6)` — 24px (grid gap)

### Tipografía
- `var(--font-subheading)` — Bebas Neue (títulos)
- `var(--font-sans)` — Outfit (bodys)
- `var(--tracking-wider)` — 0.05em

### Componentes
- **BezelCard** (core) — light / accent
- **Badge** (core) — muted mono (Visión badge)
- **Button** (core) — social + secondary sm

---

## Componibilidad

- **BezelCard** (core) — 3 cards
- **Badge** (core) — muted mono badge
- **Button** (core) — social + secondary sm

---

## Decisiones tomadas

1. **Props con defaults**: misión/visión/compromiso tienen contenido por defecto del sitio real, pero se pueden override via props.
2. **Grid 3 cols responsive**: `grid-template-columns: 1fr` mobile, `repeat(3,1fr)` @768px via CSS media query.
3. **Compromiso accent**: BezelCard `tone="accent"` (amarillo bg) para destacar la columna de acción.
4. **CTAs en compromiso**: 2 botones pequenos (sm) — social (azul) + secondary (outline).
5. **Badge en visión**: `Badge tone="muted" size="sm" mono` para "Visión de futuro 2026".

---

## Validación

- ✅ TypeScript types en `.d.ts`
- ✅ Tokens semánticos únicamente
- ✅ Componibilidad: BezelCard, Badge, Button
- ✅ Touch targets: buttons sm ≥44px
- ✅ `prefers-reduced-motion`: sin animaciones
- ✅ Contraste: azul-500 sobre amarillo/blanco verificados
- ✅ Responsive: stack mobile, 3 cols desktop