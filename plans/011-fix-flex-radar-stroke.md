# 011 — Fix Flex radar stroke animation performance

- **Status**: TODO
- **Commit**: `git rev-parse --short HEAD`
- **Severity**: MEDIUM
- **Category**: Performance
- **Estimated scope**: 1 file (`source/servicios-enviosflex.html`)

## Problem

`source/servicios-enviosflex.html:45` — radar sweep uses `stroke-dasharray` animation on long paths (1440px) continuously:

```html
<line x1="0" y1="180" x2="1440" y2="180" stroke="var(--color-brand-yellow-500)" stroke-width="1.5" stroke-dasharray="6 12" class="animate-radar"></line>
```

CSS:
```css
.animate-radar { animation: radar 6s linear infinite; }
@keyframes radar { 0% { transform: rotate(0); } to { transform: rotate(360deg); } }
```

**Problem**: Animating `transform: rotate()` on a 1440px line — GPU-heavy, continuous, drops frames on mobile.

---

## Target

Replace with `stroke-dashoffset` transition (single shot):

```html
<line
  x1="0" y1="180" x2="1440" y2="180"
  stroke="var(--color-brand-yellow-500)"
  stroke-width="1.5"
  stroke-dasharray="6 12"
  stroke-dashoffset="var(--radar-offset, 0)"
  style="transition: stroke-dashoffset 1200ms var(--ease-out);"
></line>
```

JS (in ServicioScreen.jsx or inline):
```jsx
useEffect(() => {
  const line = document.querySelector('[stroke-dashoffset]');
  if (line) {
    const length = line.getTotalLength();
    line.style.strokeDasharray = `${length} ${length}`;
    line.style.strokeDashoffset = length;
    requestAnimationFrame(() => {
      line.style.strokeDashoffset = '0';
    });
  }
}, []);
```

---

## Steps

1. `source/servicios-enviosflex.html:45` — replace radar line
2. Add JS effect in `ServicioScreen.jsx` (or inline script)

---

## Verification

- [ ] Radar animates once on load (1200ms ease-out)
- [ ] No continuous loop
- [ ] Smooth on mobile (no frame drops)
- [ ] `prefers-reduced-motion` → instant