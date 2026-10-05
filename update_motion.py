content = """:root{
/* Easings (verificado) */
--ease-default:var(--ease-in-out);/* @kind other - alias for backward compat */
--ease-in-out:cubic-bezier(.45,0,.55,1);/* @kind other */
--ease-out:cubic-bezier(0.23,1,0.32,1);/* @kind other */ /* Strong ease-out for UI */
--ease-spring:cubic-bezier(.25,1,.5,1);/* @kind other */ /* CTA, carrusel, bezel */
--ease-in-out:cubic-bezier(.45,0,.55,1);/* @kind other */
--ease-pulse:cubic-bezier(.4,0,.6,1);/* @kind other */
/* Duraciones (verificado) */
--duration-fast:.15s;/* @kind other */--duration-base:.2s;/* @kind other */--duration-cta:.25s;/* @kind other */--duration-slow:.3s;/* @kind other */--duration-kinetic:.4s;/* @kind other */--duration-carousel:.6s;/* @kind other */
/* Animaciones declaradas */
--animate-ping:ping 1s var(--ease-out) infinite;/* @kind other */
--animate-pulse:pulse 2s var(--ease-pulse) infinite;/* @kind other */
--animate-float-slow:float-slow 6s ease-in-out infinite;/* @kind other */
--animate-logos-scroll:marquee-left 30s linear infinite;/* @kind other */
--animate-marquee-left:marquee-left 36s linear infinite;/* @kind other */
--animate-marquee-right:marquee-right 42s linear infinite;/* @kind other */
--animate-pulse-ring:pulse-ring 3.2s var(--ease-spring) infinite;/* @kind other */
}
@keyframes ping{75%,to{opacity:0;transform:scale(2)}}
@keyframes pulse{50%{opacity:.5}}
@keyframes pulse-subtle{0%,to{opacity:1}50%{opacity:.8}}
@keyframes float-slow{0%,to{transform:translateY(0)}50%{transform:translateY(-8px)}}
@keyframes floaty{0%,to{transform:translateY(0)}50%{transform:translateY(-10px)}}
@keyframes border-pulse{0%,to{border-color:rgba(9,80,246,.2)}50%{border-color:rgba(9,80,246,.4)}}
@keyframes shimmer{0%{background-position:-200% 0}to{background-position:200% 0}}
@keyframes marquee-left{0%{transform:translate(0)}to{transform:translate(-50%)}}
@keyframes marquee-right{0%{transform:translate(-50%)}to{transform:translate(0)}}
@keyframes radar{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
@keyframes shuttle{0%{transform:translate(0)}to{transform:translate(100%)}}
@keyframes roundtrip{0%{transform:translate(0)}44%{transform:translate(100%)}56%{transform:translate(100%)}to{transform:translate(0)}}
@keyframes draw{0%{stroke-dashoffset:var(--draw-len,1200)}to{stroke-dashoffset:0}}
@keyframes pulse-ring{0%{opacity:.9;transform:translate(-50%,-50%) scale(.6)}to{opacity:0;transform:translate(-50%,-50%) scale(3.2)}}
@keyframes grow-x{0%{opacity:0;transform:translateX(-20px) scaleX(.95)}to{opacity:1;transform:translateX(0) scaleX(1)}}
@keyframes blob-enter{0%{opacity:0;transform:translateY(20px) scale(.95)}to{opacity:1;transform:translateY(0) scale(1)}}
@keyframes ping-once{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}
@media (prefers-reduced-motion:reduce){:root{--animate-ping:none;--animate-pulse:none;--animate-float-slow:none;--animate-logos-scroll:none;--animate-marquee-left:none;--animate-marquee-right:none;--animate-pulse-ring:none;--duration-base:0s;--duration-fast:0s;--duration-cta:0s;--duration-slow:0s;--duration-carousel:0s;}*,*::before,*::after{animation:none!important;transition:none!important;animation-duration:0s!important;transition-duration:0s!important;}}"""

path = r"C:\Users\prest\proyectos\Envíos0DosRuedasdiseñooctubre\tokens\motion.css"
with open(path, "w", encoding="utf-8") as f:
    f.write(content)
print("motion.css updated successfully")