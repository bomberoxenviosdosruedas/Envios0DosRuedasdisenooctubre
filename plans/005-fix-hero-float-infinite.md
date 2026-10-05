# 005 — Fix hero float infinite loops

- **Status**: TODO
- **Commit**: `git rev-parse --short HEAD`
- **Severity**: MEDIUM
- **Category**: Easing & Duration
- **Estimated scope**: 1 file (`source/home.html`)

## Problem

`source/home.html:72-73` — two blob animations run infinitely:
```html
<span aria-hidden="true" class="animate-float-slow absolute left-1/2 top-[44%] aspect-square w-[30%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brand-yellow-500/60"></span>
<span aria-hidden="true" class="animate-floaty absolute left-1/2 top-[44%] aspect-square w-[30%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brand-yellow-500/60 [animation-delay:1.06s]"></span>
```

CSS (tokens/motion.css):
```css
--animate-float-slow: float-slow 6s ease-in-out infinite alternate;
--animate-floaty: floaty 5s ease-in-out infinite alternate-reverse;
```

**Problem**: Infinite decorative loops on high-traffic hero — violates "decorative continuous motion on high-traffic page" (AUDIT.md §2).

---

## Target

Convert to single-shot entrance animations:

```css
@keyframes blob-enter {
  0% { opacity: 0; transform: translateY(20px) scale(0.95); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}
@media (prefers-reduced-motion: reduce) {
  [style*="blob-enter"] { animation: none !important; opacity: 1; transform: none; }
}
```

```html
<span ... style="animation: blob-enter 800ms var(--ease-out) forwards; opacity: 0;"></span>
<span ... style="animation: blob-enter 800ms var(--ease-out) forwards 200ms; opacity: 0;"></span>
```

---

## Steps

1. `source/home.html:72-73` — replace `class="animate-float-slow"` and `class="animate-floaty"` with inline `style="animation: blob-enter 800ms var(--ease-out) forwards; opacity: 0;"` (+ delay on second)
2. Add `@keyframes blob-enter` to `tokens/motion.css`

---

## Verification

- [ ] Blobs animate once on load (800ms ease-out)
- [ ] Start invisible → fade in + scale up
- [ ] `prefers-reduced-motion` → instant visible
- [ ] No infinite loop