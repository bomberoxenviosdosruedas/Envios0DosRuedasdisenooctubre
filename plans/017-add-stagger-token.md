# 017 — Add --stagger-base token

- **Status**: TODO
- **Commit**: `git rev-parse --short HEAD`
- **Severity**: LOW
- **Category**: Cohesion & Tokens
- **Estimated scope**: 1 file (`tokens/motion.css`)

## Problem

Staggered entrances (hero content, lists, grids) have no shared token — magic numbers everywhere.

---

## Target

Add after `--duration-carousel` (line 9):

```css
--stagger-base: 40ms; /* @kind other */
```

Usage:
```css
.item:nth-child(n) { animation-delay: calc(var(--stagger-base) * var(--index)); }
```

---

## Verification

- [ ] `--stagger-base: 40ms` exists
- [ ] Used in hero entrance (007) and list entrances