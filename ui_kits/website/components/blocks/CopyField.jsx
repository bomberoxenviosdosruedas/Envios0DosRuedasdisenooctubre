import React from "react";
/** Valor copiable (teléfono): botón de 44px con ícono, anuncia el resultado con aria-live. */
export function CopyField({ value, surface = "dark", okText = "Teléfono copiado al portapapeles", failText = "No se pudo copiar: el número quedó seleccionado", style }) {
  const [msg, setMsg] = React.useState("");
  const ref = React.useRef(null);
  const fin = (ok) => { if (!ok && ref.current) { const r = document.createRange(); r.selectNodeContents(ref.current); const s = getSelection(); s.removeAllRanges(); s.addRange(r); } setMsg(ok ? okText : failText); setTimeout(() => setMsg(""), 2200); };
  const copy = () => { if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(value).then(() => fin(true), () => fin(false)); else fin(false); };
  const dark = surface === "dark";
  return <><button type="button" onClick={copy} style={{ minHeight: 44, padding: "0 8px", display: "inline-flex", alignItems: "center", gap: 8, border: 0, borderRadius: "var(--radius-control)", background: "transparent", cursor: "pointer", color: dark ? "var(--color-white)" : "var(--color-brand-blue-500)", font: "400 16px/1 var(--font-mono)", fontVariantNumeric: "tabular-nums", ...style }}>
    <span ref={ref} style={{ userSelect: "all" }}>{value}</span>
    <span aria-hidden="true" style={{ width: 24, height: 24, borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", border: "1px solid " + (dark ? "rgba(255,255,255,.2)" : "var(--color-brand-blue-100)"), color: dark ? "var(--color-brand-yellow-500)" : "var(--color-brand-blue-500)" }}><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{msg === okText ? <path d="M20 6 9 17l-5-5" /> : <><rect width="14" height="14" x="8" y="8" rx="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></>}</svg></span>
  </button><span aria-live="polite" className="sr-only">{msg}</span></>;
}
