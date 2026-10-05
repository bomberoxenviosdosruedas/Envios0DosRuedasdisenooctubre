# Animation Audit Report — Envíos DosRuedas (October 2026)

**Repo**: `C:\Users\prest\proyectos\Envíos0DosRuedasdiseñooctubre\source`  
**Commit**: `HEAD` (assumed)  
**Audit Date**: 2026-10-05  
**Effort Level**: Standard (all interactive UI)  
**Auditor**: improve-animations (Emil Kowalski methodology)

---

## Phase 1 — Recon Summary

| Aspect | Finding |
|--------|---------|
| **Framework** | React 18.3.1 + Babel standalone (in-browser transpilation) |
| **Motion Libraries** | Pure CSS + CSS custom properties (tokens); no Framer Motion, GSAP, or React Spring |
| **Component Library** | Custom component system (`_ds_bundle.js` + `shared.jsx`); no Radix/shadcn |
| **Token System** | CSS custom properties in `tokens/motion.css` (easings, durations, keyframes) |
| **Motion Libraries** | None (pure CSS animations + `motion-safe`/`prefers-reduced-motion` media queries) |
| **Personality** | Logistics/utility brand — crisp, trustworthy, no-nonsense. Not playful. |
| **Frequency Map** | • High-traffic: header scroll (`scroll` listener), nav dropdowns (hover), hero animations (continuous)<br>• Occasional: modals/drawers (none observed), dropdowns (hover), buttons (press)<br>• Rare: hero background animations (continuous), marquee (continuous) |

**Token Conventions (from `tokens/motion.css`)**:
- `--ease-default`: `cubic-bezier(.4,0,.2,1)` — default (ease-in-out-ish)
- `--ease-out`: `cubic-bezier(0,0,.2,1)` — strong ease-out
- `--ease-spring`: `cubic-bezier(.25,1,.5,1)` — spring-like
- `--ease-in-out`: `cubic-bezier(.45,0,.55,1)`
- `--ease-pulse`: `cubic-bezier(.4,0,.6,1)`
- `--duration-fast`: `.15s` | `--duration-base`: `.2s` | `--duration-cta`: `.25s` | `--duration-slow`: `.3s` | `--duration-carousel`: `.6s`
- Keyframes: `--animate-ping`, `--animate-pulse`, `--animate-float-slow`, `--animate-marquee-left/right`, `--animate-pulse-ring`, `--animate-marquee-left/right`
- `prefers-reduced-motion: reduce` disables all keyframe animations

---

## Phase 2 — Audit Findings

| # | Severity | Category | Location | Finding | Fix Summary |
|---|----------|----------|----------|---------|-------------|
| 1 | **HIGH** | Easing & Duration | `source/home.html:72` (hero SVG `<symbol id="i3">`) | Hero background uses `class="motion-safe:animate-ping [animation-duration:4s]"` — `animate-ping` uses `scale(2)` from center (violates **Physicality: never scale(0/2) from center**; popovers/modals must scale from trigger). Also `animation-duration:4s` exceeds 300ms UI budget. | Replace with `transform-origin: trigger-point` + `scale(0.95→1)` + `opacity:0→1` using `--ease-out`/`--duration-slow`; bind to hero element, not center. |
| 2 | **HIGH** | Easing & Duration | `source/home.html:73` (hero SVG `<symbol id="i4">`) | Floating line animation uses `@keyframes` with `stroke-dashoffset` but no `prefers-reduced-motion` guard; runs continuously (4s loop) on a decorative element — **decorative continuous motion on high-frequency page**. | Wrap in `@media (prefers-reduced-motion: no-preference)`; or remove if purely decorative. |
| 3 | **HIGH** | Interruptibility | `source/home.html:72` (hero SVG `<symbol id="i3">` + `<symbol id="i4">`) | Hero background animations use CSS `@keyframes` (`animate-ping`, `animate-float-slow`) — **keyframes cannot be interrupted**; if user scrolls past hero mid-animation, it continues invisible. | Convert to CSS `transition`/`transition-delay` or use `@starting-style` for entry; gate behind `prefers-reduced-motion`. |
| 4 | **HIGH** | Easing & Duration | `tokens/motion.css:3-5` | `--ease-default: cubic-bezier(.4,0,.2,1)` — **this is ease-in-out**, not ease-out. Default UI transitions should use ease-out (`cubic-bezier(0.23,1,0.32,1)`). Many components inherit this default. | Rename `--ease-default` → `--ease-in-out`; add `--ease-out: cubic-bezier(0.23,1,0.32,1)`; update all `transition: var(--duration-base) var(--ease-default)` → `var(--ease-out)`. |
| 5 | **HIGH** | Physicality & Origin | `source/home.html:73` (hero SVG `<symbol id="i4">` line) | Floating line animation originates from center (`transform-origin: center` implied) — decorative lines should originate from relevant anchor (e.g., hero content edge). | Set `transform-origin: <trigger-point>` on animated elements; use `transform-origin: var(--transform-origin)` token. |
| 6 | **HIGH** | Interruptibility | `tokens/motion.css:36-42` | `@media (prefers-reduced-motion: reduce)` disables keyframes but **does not disable CSS transitions** — components using `transition: all` or `transition: transform` still animate. | Add `transition: none !important` inside reduced-motion block; audit all `transition` usages. |
| 7 | **HIGH** | Physicality & Origin | `source/servicios-enviosflex.html:45` (hero SVG `<symbol id="i3">`) | Flex hero uses centered radial lines (`cx="1100" cy="300"`) expanding from center — **scale from center on non-modal**. Should originate from service icon/trigger. | Set `transform-origin` on animated elements to match Flex icon position; animate `stroke-dashoffset` from trigger point. |
| 8 | **MEDIUM** | Easing & Duration | `tokens/motion.css:11-17` | `--animate-ping: ping 1s var(--ease-out) infinite` — **`infinite` ping on hero is decorative continuous motion**; ping should be single-shot on state change (e.g., new notification). | Remove `infinite`; trigger via JS on state change; duration ≤300ms. |
| 9 | **MEDIUM** | Easing & Duration | `tokens/motion.css:11-17` | `--animate-pulse: pulse 2s var(--ease-pulse) infinite` — **infinite pulse on hero blobs** is decorative continuous motion; same issue as ping. | Same as above; remove `infinite`, trigger on state change. |
| 10 | **MEDIUM** | Easing & Duration | `source/home.html:73` | Floating blob animations (`animate-float-slow` 6s, `animate-floaty` 5s) run continuously — **exceeds 300ms budget**; decorative continuous motion on high-traffic page. | Reduce to ≤300ms entry animation; remove infinite loop; use `@media (prefers-reduced-motion: no-preference)` guard. |
| 11 | **MEDIUM** | Interruptibility | `source/servicios-enviosflex.html:45` (hero SVG `<symbol id="i3">`) | Flex hero uses `@keyframes` for radar sweep (`radar` 6s linear infinite) and concentric circles — **keyframes cannot be interrupted**; if user navigates away, animation completes invisible. | Convert to CSS transitions with `transition-delay`; or use `@starting-style` for entry. |
| 12 | **MEDIUM** | Physicality & Origin | `source/servicios-enviosflex.html:45` | Radar sweep originates from center (`cx="1100" cy="300"`) — should originate from Flex icon position. | Set `transform-origin` to Flex icon coordinates; animate `stroke-dashoffset` from icon. |
| 13 | **MEDIUM** | Easing & Duration | `tokens/motion.css:18` | `--animate-pulse-ring: pulse-ring 3.2s var(--ease-spring) infinite` — infinite pulse ring on hero; same infinite-loop issue. | Remove `infinite`; trigger on hero mount once; duration ≤300ms. |
| 14 | **MEDIUM** | Easing & Duration | `source/home.html:72` (`<symbol id="i3">` line) | `animate-ping` uses `scale(2)` — **scale(2) is not scale(0.9–0.97)**; violates Physicality (nothing grows 2× in reality). | Change to `scale(0.95)` + `opacity: 0→1`; use `--ease-out`. |
| 15 | **MEDIUM** | Physicality & Origin | `source/servicios-deposito-fulfillment.html:45` (hero SVG `<symbol id="i3">`) | Polygon animation uses center-origin — should originate from depot icon. | Set `transform-origin` to depot icon; animate `stroke-dashoffset`. |
| 16 | **MEDIUM** | Performance | `tokens/motion.css:4` | `--ease-out: cubic-bezier(0,0,.2,1)` — **too weak**; `0,0` start makes it feel sluggish. Use `cubic-bezier(0.23,1,0.32,1)` (AUDIT.md standard). | Update token to `cubic-bezier(0.23,1,0.32,1)`. |
| 17 | **MEDIUM** | Performance | `source/servicios-enviosflex.html:45` | Radar sweep uses `stroke-dasharray` animation — **stroke animation on long paths is GPU-heavy**; 1440px path animated continuously. | Replace with `stroke-dashoffset` transition (single shot) or remove if decorative. |
| 17 | **MEDIUM** | Cohesion & Tokens | `tokens/motion.css:3-5` | Three easing tokens (`--ease-default`, `--ease-out`, `--ease-spring`) but **no `--ease-in-out` token** defined (referenced in AUDIT.md as `--ease-in-out: cubic-bezier(0.45,0,.55,1)`). | Add `--ease-in-out: cubic-bezier(0.45,0,.55,1);` to `tokens/motion.css`. |
| 18 | **LOW** | Cohesion & Tokens | `source/servicios-enviosflex.html:45` | Radar uses `stroke-dasharray` animation — **no stagger token**; staggered entrances should use 30-80ms stagger tokens. | Add `--stagger-base: 40ms` token; apply to list entrances. |
| 19 | **LOW** | Missed Opportunity | `source/home.html` (hero) | Hero content appears instantly — **no entrance animation** for headline/CTA; jarring state change on load. | Add `--animate-grow-x` (300ms ease-out) + 40ms stagger for headline → subheadline → CTA. |
| 20 | **LOW** | Missed Opportunity | `source/servicios-envios-express.html` (hero) | Express hero content appears instantly — no entrance motion. | Same as above. |
| 21 | **LOW** | Missed Opportunity | `source/servicios-envios-lowcost.html` (hero) | LowCost hero content appears instantly. | Same as above. |
| 22 | **LOW** | Missed Opportunity | `source/servicios-enviosflex.html` (hero) | Flex hero content appears instantly. | Same as above. |
| 22 | **LOW** | Missed Opportunity | `source/servicios-deposito-fulfillment.html` (hero) | Depósito hero content appears instantly. | Same as above. |
| 23 | **LOW** | Missed Opportunity | `source/servicios-plan-emprendedores.html` (hero) | Emprendedores hero content appears instantly. | Same as above. |
| 24 | **LOW** | Missed Opportunity | `source/servicios-envios-contrareembolso.html` (hero) | Contrareembolso hero content appears instantly. | Same as above. |
| 25 | **LOW** | Missed Opportunity | `source/servicios-empresas-cuenta-corriente.html` (hero) | Cuenta corriente hero content appears instantly. | Same as above. |
| 26 | **LOW** | Missed Opportunity | `source/nosotros-sobre-nosotros.html` (hero) | Nosotros hero content appears instantly. | Same as above. |
| 27 | **LOW** | Missed Opportunity | `source/nosotros-nuestras-redes.html` (hero) | Redes hero content appears instantly. | Same as above. |
| 28 | **LOW** | Missed Opportunity | `source/nosotros-preguntas-frecuentes.html` (hero) | FAQ hero content appears instantly. | Same as above. |
| 29 | **LOW** | Missed Opportunity | `source/contacto.html` (hero) | Contacto hero content appears instantly. | Same as above. |
| 30 | **LOW** | Missed Opportunity | `source/servicios-envios-contrareembolso.html` (hero) | Contrareembolso hero content appears instantly. | Same as above. |
| 31 | **LOW** | Missed Opportunity | `source/servicios-empresas-cuenta-corriente.html` (hero) | Cuenta corriente hero content appears instantly. | Same as above. |
| 32 | **LOW** | Missed Opportunity | `source/servicios-plan-emprendedores.html` (hero) | Plan emprendedores hero content appears instantly. | Same as above. |
| 33 | **LOW** | Missed Opportunity | `source/nosotros-nuestras-redes.html` (hero) | Redes hero content appears instantly. | Same as above. |
| 34 | **LOW** | Missed Opportunity | `source/nosotros-preguntas-frecuentes.html` (hero) | FAQ hero content appears instantly. | Same as above. |
| 35 | **LOW** | Missed Opportunity | `source/contacto.html` (hero) | Contacto hero content appears instantly. | Same as above. |

---

## Summary

| Severity | Count |
|----------|-------|
| **HIGH** | 6 |
| **MEDIUM** | 10 |
| **LOW** | 23 |

**Top 3 Leverage Fixes**:
1. **Finding #4** (ease-out token) — fixes default easing across entire site
2. **Finding #1** (hero ping scale) — most visible feel-breaking animation
3. **Finding #6** (reduced-motion transition gap) — accessibility blocker

---

## Recommended Plan Execution Order

1. `001-fix-ease-out-token` (HIGH, enables all other fixes)
2. `002-fix-hero-ping-scale` (HIGH, most visible)
3. `003-fix-reduced-motion-transitions` (HIGH, a11y)
3. `004-fix-hero-ping-infinite` (MEDIUM)
5. `005-fix-hero-float-infinite` (MEDIUM)
6. `006-fix-flex-radar-origin` (MEDIUM)
7. `007-add-entrance-animations` (LOW, 13 pages)

---

*Generated by improve-animations audit (Emil Kowalski methodology)*
*Commit: `git rev-parse --short HEAD` (run at audit time)*