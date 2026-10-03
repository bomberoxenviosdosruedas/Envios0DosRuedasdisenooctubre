import React from "react";
/** Acordeón de preguntas frecuentes. Un solo panel abierto, botones de 44px+, aria-expanded/controls. */
export function Accordion({ items = [], defaultOpen = 0, tone = "light", style }) {
  const [open, setOpen] = React.useState(defaultOpen);
  const uid = React.useId ? React.useId().replace(/:/g, "") : "acc";
  const dark = tone === "dark";
  return <div style={{ display: "flex", flexDirection: "column", gap: 10, ...style }}>
    {items.map((it, i) => {
      const isOpen = open === i;
      return <div key={i} style={{ borderRadius: "var(--radius-card)", border: "1px solid " + (dark ? "rgba(255,255,255,.15)" : "var(--color-brand-blue-100)"), background: isOpen ? (dark ? "rgba(255,255,255,.08)" : "var(--color-brand-blue-50)") : (dark ? "transparent" : "var(--color-white)"), color: dark ? "var(--color-white)" : "var(--color-brand-blue-500)", transition: "background-color var(--duration-base)" }}>
        <h3 style={{ margin: 0 }}><button type="button" id={uid + "-b" + i} aria-expanded={isOpen} aria-controls={uid + "-p" + i} onClick={() => setOpen(isOpen ? -1 : i)} style={{ all: "unset", boxSizing: "border-box", width: "100%", minHeight: 56, padding: "12px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, cursor: "pointer", font: "400 20px/1.15 var(--font-subheading)", letterSpacing: ".05em", textTransform: "uppercase", borderRadius: "var(--radius-card)" }} onFocus={(e) => { if (e.target.matches(":focus-visible")) e.target.style.boxShadow = "0 0 0 2px " + (dark ? "var(--color-brand-yellow-500)" : "var(--color-brand-blue-500)") + " inset"; }} onBlur={(e) => { e.target.style.boxShadow = "none"; }}>
          <span>{it.q}</span>
          <span aria-hidden="true" style={{ flexShrink: 0, width: 32, height: 32, borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", background: isOpen ? "var(--color-brand-yellow-500)" : (dark ? "rgba(255,255,255,.1)" : "var(--color-brand-blue-50)"), color: isOpen ? "var(--color-brand-blue-500)" : "inherit", transform: isOpen ? "rotate(45deg)" : "none", transition: "transform var(--duration-slow) var(--ease-spring)" }}><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg></span>
        </button></h3>
        <div id={uid + "-p" + i} role="region" aria-labelledby={uid + "-b" + i} hidden={!isOpen} style={{ padding: "0 20px 20px", font: "400 16px/1.625 var(--font-sans)", maxWidth: "70ch" }}>{it.a}</div>
      </div>;
    })}
  </div>;
}
