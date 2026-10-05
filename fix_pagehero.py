# Update PageHero.jsx to add entrance animations
import re

path = r"C:\Users\prest\proyectos\Envíos0DosRuedasdiseñooctubre\ui_kits\website\components\blocks\PageHero.jsx"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

old_pagehero = """import React from "react";
/** Hero de p\u00e1gina: azul-500 o amarillo-500 (\u00fanica regla de hero), grilla punteada 48px, blobs con blur y columna aside (lg:7/5). */
export function PageHero({ tone = "blue", id, aside, children, style }) {
  const y = tone === "yellow";
  return <section id={id} style={{ position: "relative", isolation: "isolate", background: y ? "var(--color-brand-yellow-500)" : "var(--color-brand-blue-500)", color: y ? "var(--color-brand-blue-500)" : "var(--color-white)", overflow: "hidden", padding: "var(--section-y-lg) var(--page-gutter-lg)", ...style }}>
    <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, opacity: y ? .08 : .07, backgroundImage: y ? "linear-gradient(90deg,#0950F6 1px,transparent 1px),linear-gradient(#0950F6 1px,transparent 1px)" : "linear-gradient(90deg,#fff 1px,transparent 1px),linear-gradient(#fff 1px,transparent 1px)", backgroundSize: "48px 48px" }}></div>
      <div style={{ position: "absolute", top: "25%", right: -128, width: 600, height: 600, borderRadius: "50%", background: y ? "radial-gradient(circle, rgba(9,80,246,.18) 0%, transparent 70%)" : "radial-gradient(circle, rgba(255,236,1,.16) 0%, rgba(9,80,246,.12) 50%, transparent 70%)", filter: "blur(90px)" }}></div>
      <div style={{ position: "absolute", bottom: -160, left: "33%", width: 550, height: 550, borderRadius: "50%", background: "radial-gradient(circle, rgba(9,80,246,.4) 0%, transparent 70%)", filter: "blur(100px)" }}></div>
    </div>
    <div className="eds-hero-grid" style={{ position: "relative", maxWidth: "var(--container-page)", margin: "0 auto", display: "grid", gridTemplateColumns: aside ? "minmax(0,7fr) minmax(0,5fr)" : "1fr", gap: 56, alignItems: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 28, alignItems: "flex-start" }}>{children}</div>{aside}
    </div>
    <style>{\"@media(max-width:1023px){.eds-hero-grid{grid-template-columns:1fr!important}}\"}</style>
  </section>;
}"""

new_pagehero = """import React from "react";
/** Hero de p\u00e1gina: azul-500 o amarillo-500 (\u00fanica regla de hero), grilla punteada 48px, blobs con blur y columna aside (lg:7/5). */
const staggerDelay = 60; // ms between each child

function withStagger(children) {
  const childArray = React.Children.toArray(children);
  return childArray.map((child, index) => {
    if (!React.isValidElement(child)) return child;
    const delay = index * staggerDelay;
    const baseStyle = child.props.style || {};
    return React.cloneElement(child, {
      style: {
        ...baseStyle,
        animation: "grow-x 400ms var(--ease-out) forwards",
        animationDelay: delay + "ms",
        opacity: 0,
      },
    });
  });
}

export function PageHero({ tone = "blue", id, aside, children, style }) {
  const y = tone === "yellow";
  return <section id={id} style={{ position: "relative", isolation: "isolate", background: y ? "var(--color-brand-yellow-500)" : "var(--color-brand-blue-500)", color: y ? "var(--color-brand-blue-500)" : "var(--color-white)", overflow: "hidden", padding: "var(--section-y-lg) var(--page-gutter-lg)", ...style }}>
    <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, opacity: y ? .08 : .07, backgroundImage: y ? "linear-gradient(90deg,#0950F6 1px,transparent 1px),linear-gradient(#0950F6 1px,transparent 1px)" : "linear-gradient(90deg,#fff 1px,transparent 1px),linear-gradient(#fff 1px,transparent 1px)", backgroundSize: "48px 48px" }}></div>
      <div style={{ position: "absolute", top: "25%", right: -128, width: 600, height: 600, borderRadius: "50%", background: y ? "radial-gradient(circle, rgba(9,80,246,.18) 0%, transparent 70%)" : "radial-gradient(circle, rgba(255,236,1,.16) 0%, rgba(9,80,246,.12) 50%, transparent 70%)", filter: "blur(90px)" }}></div>
      <div style={{ position: "absolute", bottom: -160, left: "33%", width: 550, height: 550, borderRadius: "50%", background: "radial-gradient(circle, rgba(9,80,246,.4) 0%, transparent 70%)", filter: "blur(100px)" }}></div>
    </div>
    <div className="eds-hero-grid" style={{ position: "relative", maxWidth: "var(--container-page)", margin: "0 auto", display: "grid", gridTemplateColumns: aside ? "minmax(0,7fr) minmax(0,5fr)" : "1fr", gap: 56, alignItems: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 28, alignItems: "flex-start" }}>
        {withStagger(children)}
      </div>
      {aside}
    </div>
    <style>{`
      @media (prefers-reduced-motion: reduce) {
        .eds-hero-grid > div > * {
          animation: none !important;
          opacity: 1 !important;
        }
      }
      @keyframes grow-x {
        0% { opacity: 0; transform: translateX(-20px) scaleX(0.95); }
        100% { opacity: 1; transform: translateX(0) scaleX(1); }
      }
    `}</style>
    <style>{\"@media(max-width:1023px){.eds-hero-grid{grid-template-columns:1fr!important}}\"}</style>
  </section>;
}"""

content = content.replace(old_pagehero, new_pagehero)

with open(path, "w", encoding="utf-8") as f:
    f.write(content)

print("PageHero.jsx updated with staggered entrance animations")