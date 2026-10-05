# 004 — Fix hero ping infinite loop

- **Status**: TODO
- **Commit**: `git rev-parse --short HEAD`
- **Severity**: MEDIUM
- **Category**: Easing & Duration
- **Estimated scope**: 1 file (`source/home.html`)

## Problem

`source/home.html:72` — ping circle uses Tailwind `motion-safe:animate-ping [animation-duration:4s]` with `infinite` loop:
```html
<circle ... class="motion-safe:animate-ping [animation-duration:4s]"></circle>
```

**Problem**: Infinite decorative loop on high-traffic page — violates "decorative continuous motion on high-traffic page" (AUDIT.md §2).

---

## Target

Remove `infinite`; make single-shot entrance animation:

```html
<circle
  cx="1050" cy="320" r="80"
  fill="none"
  stroke="var(--color-brand-yellow-500)"
  stroke-width="1.5"
  style="
    transform-origin: center;
    animation: ping-once 600ms var(--ease-out) forwards;
    opacity: 0;
  "
></circle>
```

Add to `tokens/motion.css`:
```css
@keyframes ping-once {
  0% { opacity: 0; transform: scale(0.95); }
  100% { opacity: 1; transform: scale(1); }
}
@media (prefers-reduced-motion: reduce) {
  [style*="ping-once"] { animation: none !important; opacity: 1; transform: scale(1); }
}
```

---

## Steps

1. `source/home.html:72` — replace ping circle
2. Add `@keyframes ping-once` to `tokens/motion.css`

---

## Boundaries

- Only `source/home.html` line 72 + `tokens/motion.css` keyframes
- Preserve concentric circles (radar sweep)

---

## Verification

- [ ] Ping animates once on load (600ms ease-out)
- [ ] Starts 95% scale → 100%, 0→100% opacity
- [ ] `prefers-reduced-motion` → instant final state
- [ ] No infinite loop
- [ ] Concentric circles unchanged