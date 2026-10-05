# 007 — Add entrance animations to hero content (13 pages)

- **Status**: TODO
- **Commit**: `git rev-parse --short HEAD`
- **Severity**: LOW
- **Category**: Missed Opportunities
- **Estimated scope**: 13 files (all hero pages)

## Problem

All 13 hero pages load content instantly with no entrance animation:
- `home.html`
- `servicios-envios-express.html`
- `servicios-envios-lowcost.html`
- `servicios-enviosflex.html`
- `servicios-envios-contrareembolso.html`
- `servicios-empresas-cuenta-corriente.html`
- `servicios-plan-emprendedores.html`
- `servicios-deposito-fulfillment.html`
- `nosotros-sobre-nosotros.html`
- `nosotros-nuestras-redes.html`
- `nosotros-preguntas-frecuentes.html`
- `contacto.html`
- `servicios-envios-contrareembolso.html`

Content appears instantly — jarring state change on load.

---

## Target

Add `--animate-grow-x` (300ms ease-out) + 40ms stagger for headline → subheadline → CTA.

```css
@keyframes grow-x {
  0% { opacity: 0; transform: translateX(-20px) scaleX(0.95); }
  100% { opacity: 1; transform: translateX(0) scaleX(1); }
}
@media (prefers-reduced-motion: reduce) {
  [style*="grow-x"] { animation: none !important; opacity: 1; transform: none; }
}
```

```html
<h1 style="animation: grow-x 300ms var(--ease-out) forwards; opacity: 0;">...</h1>
<p style="animation: grow-x 300ms var(--ease-out) forwards 60ms; opacity: 0;">...</p>
<button style="animation: grow-x 300ms var(--ease-out) forwards 120ms; opacity: 0;">...</button>
```

---

## Steps

1. Add `@keyframes grow-x` to `tokens/motion.css`
2. For each of 13 pages: add inline `style="animation: grow-x 300ms var(--ease-out) forwards; opacity: 0;"` with stagger delays (0ms, 60ms, 120ms)

---

## Boundaries

- Only hero content (headline, subheadline, CTA)
- No changes to hero SVG/background
- Preserve existing hero aside/image

---

## Verification

- [ ] Headline slides in from left (300ms ease-out)
- [ ] Subheadline follows (60ms delay)
- [ ] CTA follows (120ms delay)
- [ ] `prefers-reduced-motion` → instant visible
- [ ] No layout shift during animation