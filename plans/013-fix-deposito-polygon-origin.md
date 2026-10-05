# 013 — Fix Depósito hero polygon origin

- **Status**: TODO
- **Commit**: `git rev-parse --short HEAD`
- **Severity**: MEDIUM
- **Category**: Physicality & Origin
- **Estimated scope**: 1 file (`source/servicios-deposito-fulfillment.html`)

## Problem

`source/servicios-deposito-fulfillment.html:45` — polygon animation uses center-origin:

```html
<symbol id="i3">
  <polygon points="900,150 1100,220 1000,420 800,350" fill="none" stroke="var(--color-brand-blue-500)" stroke-width="1.5" stroke-dasharray="6 8"></polygon>
  <circle cx="900" cy="150" r="5" fill="var(--color-brand-blue-500)"></circle>
  ...
</symbol>
```

Polygon animation uses center-origin — should originate from depot icon.

---

## Target

Set `transform-origin` to depot icon; animate `stroke-dashoffset`.

---

## Verification

- [ ] Polygon animates from depot icon
- [ ] `prefers-reduced-motion` disables
- [ ] Other elements unchanged