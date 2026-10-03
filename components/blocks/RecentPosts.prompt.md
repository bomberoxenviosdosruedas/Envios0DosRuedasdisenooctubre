# Prompt de generación: RecentPosts

**Fecha:** 2026-10-02
**Fase:** 4 - BLOCKS (Tarea 25)
**Fuente de verdad:**
- `../02enviosdosruedassetiembre/src/components/nuestras-redes/RecentPosts.tsx`
- `ui_kits/website/RedesScreen.jsx`

---

## Objetivo

Crear `RecentPosts`: carrusel/lista de posts recientes de redes (RedesScreen).

---

## Props

```ts
interface RecentPost {
  image: string;
  caption: string;
  date: string;
  likes: number;
  comments: number;
  href: string;
  platform: 'instagram' | 'facebook';
}

interface RecentPostsProps {
  posts?: RecentPost[];
  className?: string;
  limit?: number; // default: 6
}
```

---

## Visual (referencia: RecentPosts.tsx + RedesScreen)

- **Grid** 2 cols mobile (≥640px), 3 cols desktop (≥1024px), gap 20
- **Cada post**: BezelCard `aspect-ratio 4/5`, `padding=0`, `hoverLift=true`
  - Imagen fill `object-cover` `rounded-t-lg` (via aspect-ratio container)
  - Overlay gradiente bottom para caption legibilidad
  - Caption truncado 2 líneas (`-webkit-line-clamp: 2`), platform icon + date (mono 12px)
  - Footer: likes/comments (mono 14px tabular-nums) + icon heart/message
- **Hover lift**: `shadow-antigravity-deep` + `translateY(-4px)`
- **CTA** "Ver más en Instagram/Facebook" → Button `variant="outline"` `fullWidth` al final

---

## Datos (placeholder — 6 items mock)

Assets: `/assets/redes/ig1.webp`, `/assets/redes/ig3.webp`, `/assets/redes/fac1.webp`
No hay CMS de posts en el repo actual.

---

## Tokens utilizados

### Colores
- `var(--color-brand-blue-500)` — overlay gradiente, iconos, textos
- `var(--color-brand-yellow-500)` — no directo
- `var(--color-brand-blue-100)` — footer border
- `var(--color-white)` — footer bg

### Espaciado
- `var(--spacing-3)` — 12px
- `var(--spacing-4)` — 16px
- `var(--spacing-5)` — 20px (grid gap)

### Radius
- `var(--radius-card)` / `var(--radius-card-inner)` — via BezelCard
- `var(--radius-control)` — footer elements

### Tipografía
- `var(--font-subheading)` — no directo
- `var(--font-sans)` — Outfit (caption)
- `var(--font-mono)` — Geist Mono (likes/comments/date)
- `var(--tracking-wider)` — no directo

### Sombras
- `var(--shadow-float)` — base BezelCard
- `var(--shadow-antigravity-deep)` — hover lift

### Transiciones
- `var(--ease-spring)` — cubic-bezier(0.16,1,0.3,1)
- `var(--duration-slow)` — 300ms

---

## Componibilidad

- **BezelCard** (core) — contenedor post
- **Button** (core) — CTA "Ver más"

---

## Decisiones tomadas

1. **Mock data**: 6 posts hardcodeados con assets existentes en `/assets/redes/`. No hay CMS real.
2. **Aspect ratio 4/5**: via CSS `aspect-ratio: 4/5` en container de imagen.
3. **Caption truncado**: `-webkit-line-clamp: 2` para 2 líneas max.
4. **Overlay gradiente**: `linear-gradient(to top, rgba(9,80,246,.8) 0%, transparent 60%)` para legibilidad caption sobre imagen.
5. **Footer dentro de BezelCard**: border-top `brand-blue-100`, bg white, flex between stats + platform/date.
6. **Hover lift**: BezelCard `hoverLift=true` maneja `shadow-antigravity-deep` + `translateY(-4px)`.
7. **CTA final**: Button outline fullWidth fuera del grid.

---

## Validación

- ✅ TypeScript types en `.d.ts`
- ✅ Tokens semánticos únicamente
- ✅ Componibilidad: BezelCard, Button
- ✅ Touch targets: card completa clickable
- ✅ `prefers-reduced-motion`: BezelCard hover respeta tokens
- ✅ Contraste: blanco sobre overlay azul, mono sobre blanco
- ✅ Responsive: 1/2/3 cols