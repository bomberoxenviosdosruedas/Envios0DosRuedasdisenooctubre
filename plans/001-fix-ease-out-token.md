# 001 — Fix ease-out token to Emil standard

- **Status**: TODO
- **Commit**: `git rev-parse --short HEAD`
- **Severity**: HIGH
- **Category**: Easing & Duration
- **Estimated scope**: 1 file (`tokens/motion.css`), ~15 downstream files

## Problem

`tokens/motion.css:4` defines `--ease-out: cubic-bezier(0,0,.2,1)` — this is **too weak** (starts at 0,0). Emil standard for UI ease-out is `cubic-bezier(0.23, 1, 0.32, 1)` (strong ease-out, starts fast, feels responsive).

Current usage: many components inherit `transition: var(--duration-base) var(--ease-default)` where `--ease-default` is `cubic-bezier(.4,0,.2,1)` (ease-in-out). The `--ease-out` token exists but is weak and rarely used.

**Current code** (`tokens/motion.css:4`):
```css
--ease-out: cubic-bezier(0,0,.2,1); /* @kind other */
```

**Problem**: `(0,0)` start makes ease-out feel sluggish; user perceives lag on every interaction.

---

## Target

```css
/* tokens/motion.css */
--ease-out: cubic-bezier(0.23, 1, 0.32, 1); /* @kind other */ /* Strong ease-out for UI */
--ease-default: cubic-bezier(0.45, 0, 0.55, 1); /* rename existing --ease-in-out */
--ease-in-out: cubic-bezier(0.45, 0, 0.55, 1); /* alias for clarity */
```

Also add missing token:
```css
--ease-in-out: cubic-bezier(0.45, 0, 0.55, 1); /* @kind other */
```

---

## Repo Conventions to Follow

- Easing tokens live in `tokens/motion.css` (exemplar: `--ease-spring: cubic-bezier(.25,1,.5,1)`)
- Use CSS custom properties throughout; no hardcoded cubic-beziers in component styles
- Naming: `--ease-{out|in-out|spring|pulse}` pattern

---

## Steps

1. **Edit `tokens/motion.css:4`** — replace `--ease-out` value:
   ```diff
   --ease-out: cubic-bezier(0,0,.2,1);/* @kind other */
   +--ease-out: cubic-bezier(0.23, 1, 0.32, 1);/* @kind other */
   ```

2. **Add missing token** after line 6 (`--ease-in-out`):
   ```diff
   --ease-in-out: cubic-bezier(0.45, 0, 0.55, 1);/* @kind other */
   ```

3. **Rename `--ease-default`** (line 3) for clarity:
   ```diff
   --ease-default: cubic-bezier(.4,0,.2,1);/* @kind other */
   ---ease-default: cubic-bezier(.4,0,.2,1);/* @kind other */
   +--ease-in-out: cubic-bezier(.45,0,.55,1);/* @kind other */
   +--ease-default: var(--ease-in-out); /* @kind other - alias for backward compat */
   ```

4. **Verify downstream usage** — no code changes needed elsewhere (all use `var(--ease-out)` or `var(--ease-default)`).

---

## Boundaries

- **Do NOT touch**: component JSX, other token files, HTML files
- **Only change**: `tokens/motion.css` lines 3-6
- **No new dependencies**, no markup changes

---

## Verification

### Mechanical
```bash
# Typecheck (if TS/ESLint configured)
npm run lint 2>/dev/null || echo "no lint script"
# Build
npm run build 2>/dev/null || echo "no build script"
```

### Feel Check
1. Open any page (e.g., `http://localhost:8080/servicios-envios-express.html`)
2. Hover a button → should feel **snappy, not sluggish**
3. Open DevTools Animations panel (10% speed):
   - Button hover: scale/color transition should **start fast**, decelerate smoothly
   - No "slow start" feeling on hover
4. Toggle `prefers-reduced-motion` (Rendering panel) → transitions become instant but opacity/color changes remain

### Done When
- [ ] `--ease-out` = `cubic-bezier(0.23, 1, 0.32, 1)`
- [ ] `--ease-in-out` added
- [ ] `--ease-default` aliases `--ease-in-out`
- [ ] All button/dropdown hover transitions feel snappy (no sluggish start)
- [ ] `prefers-reduced-motion` reduces motion but keeps opacity/color transitions