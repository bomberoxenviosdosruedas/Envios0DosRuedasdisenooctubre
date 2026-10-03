import React from "react";
import { Display } from "./Display.jsx";
import { Lead } from "./Lead.jsx";
/** Banda final de CTA: titular, texto y acciones. blue | yellow. */
export function CtaBanner({ tone = "blue", title, lead, actions, style }) {
  const y = tone === "yellow";
  return <section style={{ background: y ? "var(--color-brand-yellow-500)" : "var(--color-brand-blue-500)", padding: "var(--section-y-sm) var(--page-gutter-lg)", ...style }}>
    <div style={{ maxWidth: "var(--container-5xl)", margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
      <Display invert={!y}>{title}</Display>{lead && <Lead invert={!y} style={{ margin: "0 auto" }}>{lead}</Lead>}
      {actions && <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>{actions}</div>}
    </div>
  </section>;
}
