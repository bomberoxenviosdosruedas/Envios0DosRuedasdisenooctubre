import React from "react";
export function Highlight({ tone = "yellow", children }) {
  const y = tone === "yellow";
  return <span style={{ display: "inline-block", background: y ? "var(--color-brand-yellow-500)" : "var(--color-brand-blue-500)", color: y ? "var(--color-brand-blue-500)" : "var(--color-brand-yellow-500)", borderRadius: 999, padding: "0 .3em", margin: ".1em 0", transform: "rotate(-1deg)", lineHeight: 1.1, letterSpacing: "-.02em", boxShadow: y ? "0 0 28px rgba(255,236,1,.45)" : "none" }}>{children}</span>;
}
