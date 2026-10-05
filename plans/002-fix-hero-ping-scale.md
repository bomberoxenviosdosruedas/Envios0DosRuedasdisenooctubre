# 002 — Fix hero ping scale(2) to physical scale(0.95)

- **Status**: TODO
- **Commit**: `git rev-parse --short HEAD`
- **Severity**: HIGH
- **Category**: Physicality & Origin
- **Estimated scope**: 1 file (`source/home.html`), 1 symbol

## Problem

`source/home.html:72` (hero SVG `<symbol id="i3">`) contains:
```html
<circle cx="1050" cy="320" r="80" fill="none" stroke="var(--color-brand-yellow-500)" stroke-width="1.5" class="motion-safe:animate-ping [animation-duration:4s]"></circle>
<circle cx="1050" cy="320" r="180" fill="none" stroke="var(--color-brand-yellow-500)" stroke-width="1" stroke-dasharray="4 8"></circle>
<circle cx="1050" cy="320" r="300" fill="none" stroke="var(--color-brand-blue-300}" stroke-width="0.75" stroke-dasharray="6 12"></circle>
<circle cx="1050" cy="320" r="6" fill="var(--color-brand-yellow-500)"></circle>
```

And CSS (via Tailwind `motion-safe:animate-ping`):
```css
@keyframes ping {
  75%, to { opacity: 0; transform: scale(2); }
}
```

**Problems**:
1. `scale(2)` — **violates Physicality**: nothing in reality grows 2× from center
2. Origin is center (`cx="1050" cy="320"`) — not anchored to any trigger
3. Duration 4s exceeds 300ms UI budget
4. Infinite loop — decorative continuous motion on high-traffic page

---

## Target

```html
<!-- Replace the ping circle with a single-shot entrance animation -->
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
/>
```

```css
/* Add to tokens/motion.css or inline style */
@keyframes ping-once {
  0% { opacity: 0; transform: scale(0.95); }
  100% { opacity: 1; transform: scale(1); }
}
@media (prefers-reduced-motion: reduce) {
  .ping-once { animation: none !important; opacity: 1; transform: scale(1); }
}
```

Or inline:
```html
<circle
  ...
  style="
    transform-origin: center;
    animation: ping-once 600ms var(--ease-out) forwards;
    opacity: 0;
  "
/>
```

---

## Repo Conventions

- Easing tokens in `tokens/motion.css` (`--ease-out`, `--ease-spring`)
- Keyframes in `tokens/motion.css` (`@keyframes ping-once`)
- Reduced motion via `@media (prefers-reduced-motion: reduce)`
- No `scale(0)` or `scale(>1)` — max `scale(1.05)` for hover

---

## Steps

1. **Edit `source/home.html`** — replace the ping circle (lines 72-73):
   ```diff
   - <circle cx="1050" cy="320" r="80" fill="none" stroke="var(--color-brand-yellow-500)" stroke-width="1.5" class="motion-safe:animate-ping [animation-duration:4s]"></circle>
   + <circle
   +   cx="1050" cy="320" r="80"
   +   fill="none"
   +   stroke="var(--color-brand-yellow-500)"
   +   stroke-width="1.5"
   +   style="
   +     transform-origin: center;
   +     animation: ping-once 600ms var(--ease-out) forwards;
   +     opacity: 0;
   +   "
   + ></circle>
   ```

2. **Add keyframe to `tokens/motion.css`** (after line 19):
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

## Boundaries

- **Only change**: `source/home.html` (lines 72-73) + `tokens/motion.css` (add keyframes)
- **Do NOT touch**: other pages, other symbols, JS logic
- **Preserve**: concentric circles (i3 lines 72-73), radar sweep (symbol i4)

---

## Verification

### Mechanical
```bash
# No build step needed (static HTML)
# Verify syntax
npx -y @babel/standalone --help >/dev/null 2>&1 && echo "Babel OK"
```

### Feel Check
1. Open `http://localhost:8080/home.html`
2. Observe hero ping ring — should:
   - Start at 95% scale, 0 opacity
   - Grow to 100% scale, 100% opacity in 600ms
   - Feel **snappy** (ease-out), not sluggish
   - Stop at 100% (not loop)
3. Toggle `prefers-reduced-motion` (DevTools → Rendering):
   - Ring appears instantly at full scale/opacity
   - No animation
4. DevTools Animations panel (10% speed):
   - Ring scales from 0.95→1.0 smoothly
   - No overshoot, no wobble

### Done When
- [ ] Ping animates once on load (600ms ease-out)
- [ ] Starts at 95% scale, 0 opacity → ends at 100%, 100%
- [ ] `prefers-reduced-motion` shows final state instantly
- [ ] No infinite loop, no scale(2), no center-origin on non-modal
- [ ] Concentric circles (radar sweep) unchanged