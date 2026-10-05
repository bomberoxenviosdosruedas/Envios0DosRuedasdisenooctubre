# 010 — Fix --ease-out too weak (cubic-bezier(0,0,.2,1))

- **Status**: TODO
- **Commit**: `git rev-parse --short HEAD`
- **Severity**: MEDIUM
- **Category**: Performance
- **Estimated scope**: 1 file (`tokens/motion.css`)

## Problem

`tokens/motion.css:4` — `--ease-out: cubic-bezier(0,0,.2,1)` starts at `(0,0)` → too weak/sluggish.

AUDIT.md standard: `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)`

---

## Target

```diff
--- a/tokens/motion.css
+++ b/tokens/motion.css
@@ -3,7 +3,7 @@
 :root{
 /* Easings (verificado) */
--ease-default:cubic-bezier(.4,0,.2,1);/* @kind other */
--ease-out:cubic-bezier(0,0,.2,1);/* @kind other */
+--ease-out:cubic-bezier(0.23,1,0.32,1);/* @kind other */
 --ease-spring:cubic-bezier(.25,1,.5,1);/* @kind other */ /* CTA, carrusel, bezel */
 --ease-in-out:cubic-bezier(.45,0,.55,1);/* @kind other */
 --ease-pulse:cubic-bezier(.4,0,.6,1);/* @kind other */
```

---

## Verification

- [ ] `--ease-out` = `cubic-bezier(0.23, 1, 0.32, 1)`
- [ ] Button hover feels snappy (no sluggish start)
- [ ] No regression on other transitions