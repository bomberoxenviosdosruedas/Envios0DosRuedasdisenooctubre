import React from "react";
/** Campo de formulario: label Bebas + input h-11 rounded-xl border-2. Soporta icono a la izquierda, error y hint. */
export function Input({ label, id, required, hint, error, icon, as = "input", style, wrapperStyle, children, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const uid = React.useId ? React.useId() : "f";
  const fid = id || "in-" + uid.replace(/:/g, "");
  const Tag = as;
  const border = error ? "var(--color-error-500)" : focus ? "var(--color-brand-blue-500)" : hover ? "var(--color-brand-blue-400)" : "var(--color-brand-blue-300)";
  const field = {
    width: "100%", boxSizing: "border-box", minHeight: as === "textarea" ? 120 : "var(--control-sm)", borderRadius: "var(--radius-control)", border: "2px solid " + border, background: "var(--color-white)",
    fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", color: "var(--color-brand-blue-500)", padding: icon ? "10px 16px 10px 40px" : "10px 16px", outline: "none",
    boxShadow: focus ? (error ? "0 0 0 2px rgba(239,68,68,.2)" : "0 0 0 2px rgba(9,80,246,.2)") : "none", transition: "border-color var(--duration-base) var(--ease-default), box-shadow var(--duration-base) var(--ease-default)",
    appearance: as === "select" ? "none" : undefined, cursor: as === "select" ? "pointer" : undefined, resize: as === "textarea" ? "vertical" : undefined, ...style,
  };
  return <div style={{ display: "flex", flexDirection: "column", gap: 6, width: "100%", ...wrapperStyle }}>
    {label && <label htmlFor={fid} style={{ fontFamily: "var(--font-subheading)", fontSize: "var(--text-xs)", textTransform: "uppercase", letterSpacing: "var(--tracking-wider)", color: "var(--color-brand-blue-500)", display: "flex", justifyContent: "space-between" }}><span>{label}{required && <span style={{ color: "var(--color-error-500)", marginLeft: 4 }} aria-hidden="true">*</span>}</span></label>}
    <div style={{ position: "relative", display: "flex", alignItems: "center" }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {icon && <span aria-hidden="true" style={{ position: "absolute", left: 14, display: "inline-flex", color: "var(--color-brand-blue-500)", pointerEvents: "none" }}>{icon}</span>}
      <Tag id={fid} required={required} aria-invalid={error ? true : undefined} aria-describedby={error ? fid + "-err" : hint ? fid + "-hint" : undefined} style={field} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} {...rest}>{children}</Tag>
      {as === "select" && <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ position: "absolute", right: 14, color: "var(--color-brand-blue-500)", pointerEvents: "none" }}><path d="m6 9 6 6 6-6"/></svg>}
    </div>
    {error ? <p id={fid + "-err"} role="alert" style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", color: "var(--color-error-600)" }}>{error}</p>
      : hint ? <p id={fid + "-hint"} style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)", color: "var(--color-brand-blue-500)" }}>{hint}</p> : null}
  </div>;
}
