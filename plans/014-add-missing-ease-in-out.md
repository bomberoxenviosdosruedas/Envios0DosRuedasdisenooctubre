# 014 — Add missing --ease-in-out token

- **Status**: TODO
- **Commit**: `git rev-parse --short HEAD`
- **Severity**: MEDIUM
- **Category**: Cohesion & Tokens
- **Estimated scope**: 1 file (`tokens/motion.css`)

## Problem

AUDIT.md references `--ease-in-out: cubic-bezier(0.45,0,.55,1)` but it doesn't exist in `tokens/motion.css`.

---

## Target

Add after `--ease-spring` (line 5):

```css
--ease-in-out:cubic-bezier(0.45,0,.55,1);/* @kind other */
```

---

## Verification

- [ ] `--ease-in-out` exists with correct value
- [ ] No downstream breakage