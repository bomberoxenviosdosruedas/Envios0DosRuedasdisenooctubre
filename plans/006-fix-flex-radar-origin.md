# 006 — Fix Flex hero radar origin

- **Status**: TODO
- **Commit**: `git rev-parse --short HEAD`
- **Severity**: MEDIUM
- **Category**: Physicality & Origin
- **Estimated scope**: 1 file (`source/servicios-enviosflex.html`)

## Problem

`source/servicios-enviosflex.html:45` — radar sweep originates from center (`cx="1100" cy="300"`):
```html
<symbol id="i3">
  <line x1="0" y1="180" x2="1440" y2="180" stroke="var(--color-brand-yellow-500)" stroke-width="1.5" stroke-dasharray="6 12"></line>
  <line x1="0" y1="420" x2="1440" y2="420" stroke="var(--color-brand-blue-300)" stroke-width="1" stroke-dasharray="4 10"></line>
  <rect x="750" y="140" width="80" height="80" rx="16" fill="none" stroke="var(--color-brand-yellow-500)" stroke-width="1.5" stroke-dasharray="4 4"></rect>
  <rect x="950" y="240" width="120" height="120" rx="24" fill="none" stroke="var(--color-white)" stroke-width="1" stroke-dasharray="6 8"></rect>
</symbol>
```

And radar sweep lines use center origin — should originate from Flex icon position.

---

## Target

Set `transform-origin` to Flex icon position; animate `stroke-dashoffset` from icon position.

```html
<!-- In hero SVG, set transform-origin on radar lines -->
<line ... style="transform-origin: 1100px 300px; ..." />
```

Or better: restructure so radar lines originate from Flex icon position.

---

## Steps

1. Identify Flex icon coordinates in hero
2. Set `transform-origin` on radar lines to match icon position
3. Animate `stroke-dashoffset` from 0 to path length

---

## Verification

- [ ] Radar sweep originates from Flex icon, not center
- [ ] `prefers-reduced-motion` disables sweep
- [ ] Concentric circles unchanged