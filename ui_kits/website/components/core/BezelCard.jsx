import React from "react";
/** Tarjeta "double bezel": marco exterior azul-50 translúcido p-2 rounded-2xl + panel interior rounded-xl. tone del panel: light | dark | accent. */
export function BezelCard({ tone = "light", hoverLift = true, padding = 24, children, style, innerStyle, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const outer = tone === "accent"
    ? { background: "rgba(255,236,1,.2)", border: "2px solid var(--color-brand-yellow-500)", boxShadow: "var(--shadow-cta-glow)" }
    : { background: "rgba(230,238,254,.8)", border: "1px solid var(--color-brand-blue-100)", boxShadow: "var(--shadow-float)" };
  const inner = tone === "dark"
    ? { background: "var(--color-brand-blue-500)", color: "var(--color-white)", border: "1px solid rgba(255,255,255,.1)" }
    : { background: "var(--color-white)", color: "var(--color-brand-blue-500)", border: "1px solid rgba(230,238,254,.5)", boxShadow: "var(--shadow-inner)" };
  return <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ borderRadius: "var(--radius-card)", padding: 8, boxSizing: "border-box", transition: "border-color var(--duration-slow) var(--ease-spring), box-shadow var(--duration-slow) var(--ease-spring), transform var(--duration-slow) var(--ease-spring)", ...outer, ...(hover && hoverLift ? { borderColor: tone === "accent" ? "var(--color-brand-blue-300)" : "var(--color-brand-blue-300)", boxShadow: "var(--shadow-antigravity-deep)", transform: "translateY(-4px)" } : null), ...style }} {...rest}>
    <div style={{ borderRadius: "var(--radius-card-inner)", padding, overflow: "hidden", boxSizing: "border-box", height: "100%", ...inner, ...innerStyle }}>{children}</div>
  </div>;
}
