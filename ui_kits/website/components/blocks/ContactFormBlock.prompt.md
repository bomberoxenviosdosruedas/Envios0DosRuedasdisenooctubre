# Prompt de generación: ContactFormBlock

**Fecha:** 2026-10-02
**Fase:** 4 - BLOCKS (Tarea 19)
**Fuente de verdad:**
- `ui_kits/website/ContactoScreen.jsx` (líneas 19-29)
- `ui_kits/website/shared.jsx` (CtaForm component)

---

## Objetivo

Crear `ContactFormBlock`: formulario de contacto reutilizable (Contacto, Cotizador, Landing).

---

## Props

```ts
interface ContactFormBlockProps {
  title?: string;
  lead?: string;
  submitLabel?: string;
  whatsappNumber?: string; // default: +542236602699
  onSubmit?: (data: { name: string; company?: string; volume: string }) => void;
  className?: string;
  variant?: 'inline' | 'modal' | 'banner'; // default: inline
}
```

---

## Visual (basado en ContactoScreen + shared.jsx CtaForm)

- **BezelCard** `tone="light"` (inline) / `tone="dark"` (modal/banner), `hoverLift=false`, padding 32
- **Header**: Badge "Cotización inmediata" (muted sm) + H2 (Anton clamp) + Lead (Outfit 14px) + mono "Atención comercial < 2 min"
- **Campos** (Input core):
  1. Input nombre (required) — label Bebas 12px, caja 44px
  2. Input comercio (optional)
  3. Select volumen: ["1 a 50", "50 a 200", "+200"]
- **Submit**: Button fullWidth `variant="primary"` `size="lg"` con icon WhatsApp
- **Estados**:
  - `idle` → botón normal
  - `loading` → spinner, `aria-busy="true"`, texto visible
  - `done` → mensaje éxito + `window.open(whatsapp_url, "_blank")`
  - `error` → `role="alert"`, error inline mono 11px `error-600`
- **WhatsApp deep link**:
  `https://wa.me/542236602699?text=${encodeURIComponent(\`Hola! Soy ${name} de ${company||'mi comercio'}. Manejo ${volume} envíos/mes y quiero cotizar.\`)}`
- **Validación**: nombre required, error inline bajo campo
- **Accesibilidad**: labels asociados, `aria-describedby`, focus management

---

## Tokens utilizados

### Colores
- `var(--color-brand-blue-500)` — textos, bordes focus, Button primary
- `var(--color-brand-yellow-500)` — Button primary bg, WhatsApp icon
- `var(--color-brand-blue-50)` — form bg (light variant)
- `var(--color-brand-blue-100)` — form border (light)
- `var(--color-brand-blue-700)` — no usado
- `var(--color-error-500)` — asterisco required, border error
- `var(--color-error-600)` — texto error
- `var(--color-success-500)` — texto éxito (propuesto #16A34A)

### Espaciado
- `var(--spacing-3)` — 12px
- `var(--spacing-4)` — 16px (form gap)
- `var(--spacing-5)` — 20px (section gap)

### Radius
- `var(--radius-card)` — 16px (BezelCard, form)
- `var(--radius-control)` — 12px (Input)
- `var(--radius-button)` — 9999px (Button)

### Tipografía
- `var(--font-display)` — Anton (H2)
- `var(--font-subheading)` — Bebas Neue (Input labels, Badge)
- `var(--font-sans)` — Outfit (body, errors)
- `var(--font-mono)` — Geist Mono ("Atención comercial < 2 min", errors)
- `var(--tracking-wider)` — 0.05em
- `var(--tracking-display)` — -0.03em

### Touch targets
- `var(--control-sm)` — 44px (Input height, Button sm)
- `var(--control-lg)` — 52px (Button lg)

---

## Componibilidad

- **BezelCard** (core) — contenedor
- **Input** (core) — campos (label + input + error)
- **Button** (core) — submit con loading state
- **Badge** (core) — "Cotización inmediata"
- **WhatsAppIcon** SVG inline

---

## Decisiones tomadas

1. **Variant prop**: `inline` (light BezelCard), `modal`/`banner` (dark BezelCard) — mismo formulario, distinta presentación.
2. **Estado `status`**: `idle` | `loading` | `done` | `error` — controla UI del botón y mensajes.
3. **WhatsApp URL**: se construye dinámicamente con `encodeURIComponent` y `formData` actual al submit.
4. **Validación simple**: solo nombre required + volumen selected. Errores en state `errors` objeto.
5. **Input select**: usa `Input as="select"` (core Input soporta `as` prop).
6. **`onSubmit` callback**: recibe formData para analytics/integración externa.
7. **Window.open en done**: abre WhatsApp en pestaña nueva tras simulación 1.1s loading.

---

## Validación

- ✅ TypeScript types en `.d.ts`
- ✅ Tokens semánticos únicamente
- ✅ Componibilidad: BezelCard, Input, Button, Badge
- ✅ Touch targets ≥44px (Input 44px, Button lg 52px)
- ✅ Accesibilidad: labels, aria-describedby, role=alert, focus management
- ✅ `prefers-reduced-motion`: Button loading spinner respeta tokens
- ✅ Contraste: textos azul-500/blanco sobre fondos verificados
- ✅ Responsive: stack vertical, fullWidth button