# 003 — Fix prefers-reduced-motion: transitions still animate

- **Status**: TODO
- **Commit**: `git rev-parse --short HEAD`
- **Severity**: HIGH
- **Category**: Accessibility
- **Estimated scope**: 1 file (`tokens/motion.css`), ~15 downstream files

## Problem

`tokens/motion.css:36-42` disables keyframe animations under `prefers-reduced-motion: reduce` but **does not disable CSS transitions**:

```css
@media (prefers-reduced-motion: reduce) {
  :root {
    --animate-ping: none;
    --animate-pulse: none;
    --animate-float-slow: none;
    --animate-logos-scroll: none;
    --animate-marquee-left: none;
    --animate-marquee-right: none;
    --animate-pulse-ring: none;
  }
}
```

**Problem**: Components using `transition: transform 200ms var(--ease-out)` (buttons, dropdowns, cards, inputs) **still animate** under reduced motion because transitions are not disabled.

---

## Target

```css
@media (prefers-reduced-motion: reduce) {
  :root {
    --animate-ping: none;
    --animate-pulse: none;
    --animate-float-slow: none;
    --animate-logos-scroll: none;
    --animate-marquee-left: none;
    --animate-marquee-right: none;
    --animate-pulse-ring: none;
    /* NEW: disable all transitions */
    --duration-base: 0s;
    --duration-fast: 0s;
    --duration-cta: 0s;
    --duration-slow: 0s;
    --duration-carousel: 0s;
  }

  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
    animation-duration: 0s !important;
    transition-duration: 0s !important;
  }
}
```

---

## Repo Conventions

- All durations in `tokens/motion.css` (`--duration-*`)
- Transitions use `var(--duration-base)` etc.
- Reduced motion via `@media (prefers-reduced-motion: reduce)`

---

## Steps

1. **Edit `tokens/motion.css`** — replace the `@media (prefers-reduced-motion: reduce)` block (lines 36-43):

```diff
 @media (prefers-reduced-motion: reduce) {
   :root {
     --animate-ping: none;
     --animate-pulse: none;
     --animate-float-slow: none;
     --animate-logos-scroll: none;
     --animate-marquee-left: none;
     --animate-marquee-right: none;
     --animate-pulse-ring: none;
+    --duration-base: 0s;
+    --duration-fast: 0s;
+    --duration-cta: 0s;
+    --duration-slow: 0s;
+    --duration-carousel: 0s;
   }
+
+  *, *::before, *::after {
+    animation: none !important;
+    transition: none !important;
+    animation-duration: 0s !important;
+    transition-duration: 0s !important;
+  }
 }
```

---

## Boundaries

- **Only change**: `tokens/motion.css` (lines 36-43)
- **Do NOT touch**: component JSX, HTML files, other token files
- **No JS changes** — pure CSS fix

---

## Verification

### Mechanical
```bash
# No build step needed (static HTML)
```

### Feel Check
1. Open `http://localhost:8080/servicios-envios-express.html`
2. Toggle `prefers-reduced-motion` (DevTools → Rendering → Emulate CSS prefers-reduced-motion: reduce)
3. Hover a button — **no transition**, color changes instantly
4. Hover a dropdown — opens instantly, no slide/fade
5. Click a button — no scale/transform animation
6. Focus an input — border color changes instantly
7. Open a dropdown → appears instantly
8. Check console — no animation-related errors

### Done When
- [ ] All transitions instant under reduced motion
- [ ] Opacity/color changes still work (instant)
- [ ] No layout shift from disabled transitions
- [ ] Keyboard focus visible (outline instant)
- [ ] No console errors