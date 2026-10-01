import React from "react";
import { BezelCard } from "../core/BezelCard.jsx";
import { Button } from "../core/Button.jsx";
import { Badge } from "../core/Badge.jsx";
/** Canal oficial (WhatsApp/Instagram/Facebook) o publicación reciente. El color de red NO se usa de fondo: el botón es variant social (azul-500). */
export function SocialCard({ kind = "channel", title, handle, body, image, date, tag, cta, href = "#", icon, tone = "light", style }) {
  const post = kind === "post";
  return <BezelCard tone={tone} padding={post ? 0 : 24} style={{ height: "100%", ...style }} innerStyle={{ display: "flex", flexDirection: "column" }}>
    {post && image && <img src={image} alt="" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", display: "block" }} />}
    <div style={{ padding: post ? 20 : 0, display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start", flex: 1 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", gap: 8 }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>{icon && <span aria-hidden="true" style={{ width: 40, height: 40, borderRadius: 999, background: "var(--color-brand-yellow-500)", color: "var(--color-brand-blue-500)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{icon}</span>}<h3 style={{ margin: 0, font: "400 " + (post ? 16 : 24) + "px/1 var(--font-subheading)", letterSpacing: ".05em", textTransform: "uppercase" }}>{title}</h3></span>
        {post ? <span style={{ font: "400 12px/1 var(--font-mono)" }}>{date}</span> : tag && <Badge tone="muted" mono size="sm" rotate={false}>{tag}</Badge>}
      </div>
      {handle && <span style={{ font: "700 16px/1.2 var(--font-mono)" }}>{handle}</span>}
      <p style={{ margin: 0, font: "400 14px/1.625 var(--font-sans)" }}>{body}</p>
      <div style={{ marginTop: "auto", paddingTop: 8, width: "100%" }}><Button variant={post ? "ghost" : "social"} surface={tone === "dark" ? "dark" : "light"} size="sm" fullWidth={!post} external href={href}>{cta}</Button></div>
    </div>
  </BezelCard>;
}
