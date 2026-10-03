import React from "react";
export function Eyebrow({ children }) {
  return <span style={{ fontFamily: "var(--font-subheading)", fontSize: "var(--text-sm)", letterSpacing: "var(--tracking-widest)", textTransform: "uppercase", color: "var(--color-brand-yellow-500)", display: "inline-flex", alignItems: "center", gap: 8 }}><span aria-hidden="true" style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--color-brand-yellow-500)", animation: "var(--animate-pulse)" }}></span>{children}</span>;
}
