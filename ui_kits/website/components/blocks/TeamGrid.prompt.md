# Prompt de generación: TeamGrid

**Fecha:** 2026-10-02
**Fase:** 4 - BLOCKS (Tarea 22)
**Fuente de verdad:** `ui_kits/website/NosotrosScreen.jsx` (líneas 4-5, 16-17 TEAM array)

---

## Objetivo

Crear `TeamGrid`: grid de estadísticas/equipo (NosotrosScreen).

---

## Props

```ts
interface TeamStat {
  value: string;
  label: string;
  title: string;
  body: string;
  icon?: string;
}

interface TeamGridProps {
  stats?: TeamStat[];
  className?: string;
}
```

---

## Visual (basado en NosotrosScreen TEAM array)

- **Grid** `auto-fit minmax(240px,1fr)`, gap 24
- **Cada item**: BezelCard `tone="dark"`, `hoverLift=false`, padding 24
- **Estructura**:
  - Tag: Bebas 14px uppercase `tracking-wider` amarillo-500
  - Valor: Geist Mono 700 44px tabular-nums (ej: "+20", "100%", "< 2 h", "+7")
  - Título: Bebas 20px uppercase `tracking-wider` blanco
  - Body: Outfit 14px/1.625 rgba(255,255,255,.85)

---

## Datos TEAM (4 items)

1. `"+20"` / `"Repartidores en calle"` / `"Flota propia"` / `"Cadetes capacitados y uniformados..."`
2. `"100%"` / `"Base operativa en MDQ"` / `"Hub Chauvín"` / `"Depósito central en Friuli 1972..."`
3. `"< 2 h"` / `"Tiempo promedio Express"` / `"Máxima velocidad"` / `"Servicio prioritario punto a punto..."`
4. `"+7"` / `"Años de trayectoria"` / `"Confianza local"` / `"Compromiso ininterrumpido..."`

---

## Tokens utilizados

### Colores
- `var(--color-brand-blue-500)` — no directo (BezelCard dark usa azul-500 bg)
- `var(--color-brand-yellow-500)` — tag label
- `var(--color-white)` — textos en dark

### Espaciado
- `var(--spacing-3)` — 12px (gap interno)
- `var(--spacing-6)` — 24px (grid gap)

### Tipografía
- `var(--font-subheading)` — Bebas Neue (label, title)
- `var(--font-mono)` — Geist Mono (value)
- `var(--font-sans)` — Outfit (body)
- `var(--tracking-wider)` — 0.05em
- `var(--tracking-mega)` — 0.2em (no usado aquí)

### Componentes
- **BezelCard** (core) — `tone="dark"`, `hoverLift=false`

---

## Componibilidad

- **BezelCard** (core) — contenedor principal

---

## Decisiones tomadas

1. **DEFAULT_TEAM_STATS exportado**: permite uso directo sin props + override via props.
2. **BezelCard dark**: usa `tone="dark"` (azul-500 bg, blanco texto) consistente con NosotrosScreen.
3. **HoverLift false**: estadísticas no necesitan lift interactivo.
4. **Value clamp**: `clamp(36px, 5vw, 48px)` para responsive scaling.
5. **Label as tag**: `label` prop sirve como eyebrow/tag arriba del valor (Bebas 14px amarillo).

---

## Validación

- ✅ TypeScript types en `.d.ts`
- ✅ Tokens semánticos únicamente
- ✅ Componibilidad: BezelCard
- ✅ Touch targets: card completa ≥44px
- ✅ `prefers-reduced-motion`: sin animaciones
- ✅ Contraste: blanco sobre azul-500 (6.02:1)
- ✅ Responsive: grid auto-fit minmax(240px,1fr)