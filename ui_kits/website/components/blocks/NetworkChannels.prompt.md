# Prompt de generación: NetworkChannels

**Fecha:** 2026-10-02
**Fase:** 4 - BLOCKS (Tarea 24)
**Fuente de verdad:**
- `ui_kits/website/RedesScreen.jsx`
- `ui_kits/website/shared.jsx` (SocialBand)
- `ui_kits/website/ContactoScreen.jsx` (líneas 31-33)

---

## Objetivo

Crear `NetworkChannels`: tarjetas de canales de redes sociales (RedesScreen, ContactoScreen).

---

## Props

```ts
interface NetworkChannel {
  name: string;
  description: string;
  icon: React.ReactNode;
  cta: string;
  href: string;
  color: string;
}

interface NetworkChannelsProps {
  channels?: NetworkChannel[];
  className?: string;
}
```

---

## Visual (basado en RedesScreen + SocialBand + ContactoScreen)

- **Grid** `auto-fit minmax(280px,1fr)`, gap 24
- **Cada canal**: BezelCard `padding=20`, `hoverLift=false`, `tone="light"`
  - Flex row: icon circle 48px (bg color 10%, color icon) + content (flex:1) + Button social size=sm
  - Title: Bebas 22px uppercase `tracking-wider`
  - Description: Outfit 14px/1.625
  - Button: `variant="social"`, `external href`, icon match

---

## Datos (3 canales fijos)

1. **WhatsApp**: "Cotizaciones instantáneas..." / wa icon / "Chateá ahora" / `https://wa.me/542236602699` / `#25D366`
2. **Instagram**: "Novedades de la flota..." / instagram icon / "Seguinos" / `https://www.instagram.com/enviosdosruedas` / `#E1306C`
3. **Facebook**: "Avisos de servicios..." / facebook icon / "Seguinos" / `https://www.facebook.com/enviosdosruedas` / `#1877F2`

---

## Tokens utilizados

### Colores
- `var(--color-brand-blue-500)` — títulos, Button social
- `var(--color-social-whatsapp)` — `#25D366` (icon bg 10%, icon color)
- `var(--color-social-instagram)` — `#E1306C`
- `var(--color-social-facebook)` — `#1877F2`
- `var(--color-brand-yellow-500)` — no directo

### Espaciado
- `var(--spacing-3)` — 12px (icon gap)
- `var(--spacing-4)` — 16px (content gap)
- `var(--spacing-6)` — 24px (grid gap)

### Radius
- `var(--radius-full)` — 9999px (icon circle)
- `var(--radius-card)` / `var(--radius-card-inner)` — via BezelCard

### Tipografía
- `var(--font-subheading)` — Bebas Neue (títulos)
- `var(--font-sans)` — Outfit (descriptions)

### Componentes
- **BezelCard** (core) — tone="light", hoverLift=false
- **Button** (core) — variant="social", size="sm", external

---

## Componibilidad

- **BezelCard** (core) — contenedor
- **Button** (core) — CTA social

---

## Decisiones tomadas

1. **Canales fijos**: 3 canales hardcodeados (WhatsApp, Instagram, Facebook) — son los oficiales de la empresa.
2. **Icon circle**: 48px, bg `color + "1A"` (10% opacity), icon color = brand color.
3. **Button social**: `variant="social"`, `surface="light"`, `size="sm"`, `external` — consistente con Button system.
4. **Grid responsive**: `auto-fit minmax(280px, 1fr)` — se apila en mobile.
5. **BezelCard light + hoverLift=false**: tarjetas estáticas informativas, sin lift.

---

## Validación

- ✅ TypeScript types en `.d.ts`
- ✅ Tokens semánticos únicamente
- ✅ Componibilidad: BezelCard, Button
- ✅ Touch targets: Button sm 44px, card clickable area
- ✅ `prefers-reduced-motion`: sin animaciones
- ✅ Contraste: textos azul-500 sobre blanco
- ✅ Responsive: stack mobile, 3 cols desktop