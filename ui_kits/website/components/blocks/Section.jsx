import React from "react";
import { Badge } from "../core/Badge.jsx";
import { Display } from "./Display.jsx";
import { Lead } from "./Lead.jsx";
export function Section({ bg = "var(--color-white)", id, children, style }) {
  return <section id={id} style={{ background: bg, padding: "var(--section-y-sm) var(--page-gutter-lg)", ...style }}><div style={{ maxWidth: "var(--container-page)", margin: "0 auto" }}>{children}</div></section>;
}
export function SectionHead({ eyebrow, title, lead, invert, center, mark, style }) {
  return <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: center ? "center" : "flex-start", textAlign: center ? "center" : "left", marginBottom: 40, ...style }}>
    {eyebrow && <Badge tone={invert ? "accent" : "invert"} size="sm">{eyebrow}</Badge>}
    <Display invert={invert}>{title}{mark && <> <span style={{ display: "inline-block", background: "var(--color-brand-yellow-500)", color: "var(--color-brand-blue-500)", borderRadius: 999, padding: "0 .3em", transform: "rotate(-1deg)", lineHeight: 1.1 }}>{mark}</span></>}</Display>
    {lead && <Lead invert={invert}>{lead}</Lead>}
  </div>;
}
