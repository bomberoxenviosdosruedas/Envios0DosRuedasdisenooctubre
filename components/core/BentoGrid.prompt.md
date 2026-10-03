# Prompt de generación: BentoGrid

**Fecha:** 2026-10-02
**Fase:** 2 - CORE PRIMITIVES (Tarea 7)
**Fuente de verdad:** `../02enviosdosruedassetiembre/src/components/ui/BentoGrid.tsx`

---

## Objetivo

Crear `BentoGrid` + `BentoGridItem`: layout asimétrico 12-columnas para showcase de servicios (Home, páginas servicio), usando **solo tokens del design system** y `BezelCard` existente.

---

## Props

### BentoGridProps

```ts
interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
  gap?: string;        // default: "var(--spacing-6) lg:var(--spacing-8)"
  autoRows?: string;   // default: "auto-rows-[minmax(340px,auto)] md:auto-rows-[95]"
}
```

### BentoGridItemProps

```ts
interface BentoGridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  span: '7' | '5' | '12' | 'hero' | 'standard' | 'full' | number;
  className?: string;
  doubleBezel?: boolean;          // default: true
  variant?: 'light' | 'dark' | 'accent'; // para BezelCard
  innerClassName?: string;
}
```

---

## Span mapping

| span value           | Mobile (<768px) | Tablet (≥768px) | Desktop (≥1024px) |
|---------------------|-----------------|-----------------|-------------------|
| `7` \| `'7'` \| `'hero'`   | col-span-12     | col-span-12     | col-span-7        |
| `5` \| `'5'` \| `'standard'` | col-span-12     | col-span-6      | col-span-5        |
| `12` \| `'12'` \| `'full'`   | col-span-12     | col-span-12     | col-span-12       |
| `number`            | col-span-12     | col-span-min(n,12) | col-span-n     |

*Mobile-first: todo `col-span-1` (full width = `1 / -1` en grid de 12 cols).*

---

## Comportamiento

- **BentoGrid**: contenedor `display: grid`, `grid-template-columns: repeat(12, 1fr)`, gap responsive, `grid-auto-rows` configurable.
- **BentoGridItem**: si `doubleBezel=true` (default), envuelve `children` en `BezelCard` con `variant` e `innerClassName`. `innerClassName` default incluye `flex-1 flex flex-col` para que el contenido llene la altura.
- **Responsive**: media query inline en `BentoGridItem` para aplicar spans desktop. Mobile usa `grid-column: 1 / -1` (todas las 12 columnas).

---

## Tokens utilizados

### Espaciado
- `var(--spacing-6)` — 1.5rem (gap base)
- `var(--spacing-8)` — 2rem (gap lg)

### Radius (via BezelCard)
- `var(--radius-card)` — 16px (outer)
- `var(--radius-card-inner)` — 12px (inner)

### Colores (via BezelCard variant)
- `light`: outer `rgba(230,238,254,.8)` + border `brand-blue-100`, inner `white` + border `rgba(230,238,254,.5)` + `shadow-inner`
- `dark`: outer igual, inner `brand-blue-500` + border `rgba(255,255,255,.1)`
- `accent`: outer `rgba(255,236,1,.2)` + border `2px solid brand-yellow-500` + `shadow-cta-glow`

### Sombras (via BezelCard)
- `var(--shadow-float)` — outer light/dark
- `var(--shadow-inner)` — inner light
- `var(--shadow-cta-glow)` — accent outer
- `var(--shadow-antigravity-deep)` — hover lift

### Transiciones (via BezelCard)
- `var(--ease-spring)` — cubic-bezier(0.16, 1, 0.3, 1)
- `var(--duration-slow)` — 300ms

---

## Componibilidad

- **BentoGrid** es un contenedor puro (sin dependencias).
- **BentoGridItem** usa `BezelCard` (core primitive) cuando `doubleBezel=true`.
- No usa clases Tailwind arbitrarias: todo vía `style` props con tokens CSS.

---

## Decisiones tomadas

1. **Media queries inline**: en lugar de clases `lg:col-span-7`, se usa `<style>` con `@media (min-width: 768px)` para aplicar spans desktop. Esto evita depender de Tailwind y mantiene los tokens CSS como única fuente de verdad.
2. **grid-column: 1 / -1** en mobile: fuerza full width en grid de 12 columnas sin necesidad de clases utilitarias.
3. **innerClassName default**: `flex-1 flex flex-col` para que el contenido interno llene la altura de la card (importante para `auto-rows` del grid).
4. **autoRows tokenizado**: se expone como prop con default desde DESIGN.md (`minmax(340px,auto)` mobile, `95` rem desktop ≈ 1520px pero la unidad es extraña; se mantiene como string para flexibilidad).
5. **variant "accent" añadido**: no estaba en fuente original pero BezelCard lo soporta; útil para cards destacadas.

---

## Uso real (HomeScreen.jsx)

```jsx
<BentoGrid>
  <BentoGridItem span="hero" variant="dark">  {/* Express - 7 cols desktop */}
  <BentoGridItem span="standard" variant="light">  {/* LowCost - 5 cols */}
  <BentoGridItem span="standard" variant="light">  {/* Flex - 5 cols */}
  <BentoGridItem span="hero" variant="accent">  {/* Emprendedores - 7 cols */}
</BentoGrid>
```

---

## Validación

- ✅ TypeScript types en `.d.ts`
- ✅ Tokens semánticos únicamente
- ✅ Responsive mobile-first
- ✅ Componibilidad con BezelCard
- ✅ Sin valores hardcodeados (hex, px, rem fuera de tokens)