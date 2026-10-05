# 008 — Rename --ease-default to --ease-in-out (consistency)

- **Status**: TODO
- **Commit**: `git rev-parse --short HEAD`
- **Severity**: MEDIUM
- **Category**: Cohesion & Tokens
- **Estimated scope**: 1 file (`tokens/motion.css`)

## Problem

`tokens/motion.css:3` defines `--ease-default: cubic-bezier(.4,0,.2,1)` — this is **ease-in-out**, not "default". Misleading name causes misuse.

---

## Target

```diff
--- a/tokens/motion.css
+++ b/tokens/motion.css
@@ -1,6 +1,8 @@
 :root{
 /* Easings (verificado) */
--ease-default:cubic-bezier(.4,0,.2,1);/* @kind other */
--ease-out:cubic-bezier(0,0,.2,1);/* @kind other */
+--ease-in-out:cubic-bezier(.4,0,.2,1);/* @kind other */
+--ease-default:var(--ease-in-out);/* @kind other - alias for backward compat */
 --ease-out:cubic-bezier(0,0,.2,1);/* @kind other */
 --ease-spring:cubic-bezier(.25,1,.5,1);/* @kind other */ /* CTA, carrusel, bezel */
 --ease-in-out:cubic-bezier(.45,0,.55,1);/* @kind other */
```

---

## Steps

1. Add `--ease-in-out` with current `--ease-default` value
2. Make `--ease-default` an alias to `--ease-in-out`

---

## Verification

- [ ] `--ease-in-out` exists with correct value
- [ ] `--ease-default` aliases `--ease-in-out`
- [ ] No downstream breakage (all `var(--ease-default)` still work)