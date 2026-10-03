import React from "react";
import { BezelCard } from "../core/BezelCard";
import { Button } from "../core/Button";

/** Default mock posts (placeholder — no CMS in repo) */
const DEFAULT_POSTS = [
  { image: "/assets/redes/ig1.webp", caption: "Nueva flota lista para salir 🚀 #EnvíosDosRuedas #MarDelPlata", date: "2026-09-28", likes: 247, comments: 12, href: "https://www.instagram.com/enviosdosruedas", platform: "instagram" },
  { image: "/assets/redes/ig3.webp", caption: "Entregas en el día a todo MDQ 📦💨", date: "2026-09-25", likes: 189, comments: 8, href: "https://www.instagram.com/enviosdosruedas", platform: "instagram" },
  { image: "/assets/redes/fac1.webp", caption: "Nuestro hub en Friuli 1972 🏢 Base operativa central", date: "2026-09-22", likes: 156, comments: 5, href: "https://www.facebook.com/enviosdosruedas", platform: "facebook" },
  { image: "/assets/redes/ig1.webp", caption: "DropOFF -20% para e-commerce 📉 Traé tus paquetes", date: "2026-09-20", likes: 312, comments: 18, href: "https://www.instagram.com/enviosdosruedas", platform: "instagram" },
  { image: "/assets/redes/ig3.webp", caption: "LowCost: la opción económica para tu PyME 💰", date: "2026-09-18", likes: 203, comments: 11, href: "https://www.instagram.com/enviosdosruedas", platform: "instagram" },
  { image: "/assets/redes/fac1.webp", caption: "Contrareembolso 0% comisión 💳 Cobro en destino", date: "2026-09-15", likes: 178, comments: 7, href: "https://www.facebook.com/enviosdosruedas", platform: "facebook" },
];

/**
 * RecentPosts: carrusel/lista de posts recientes de redes (RedesScreen).
 */
export function RecentPosts({ posts = DEFAULT_POSTS, className = "", limit = 6 }) {
  const displayPosts = posts.slice(0, limit);

  return (
    <div style={{ ...parseClassName(className) }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "var(--spacing-5)",
      }}>
        <style>{`
          @media (min-width: 640px) { .recent-grid { grid-template-columns: repeat(2, 1fr); } }
          @media (min-width: 1024px) { .recent-grid { grid-template-columns: repeat(3, 1fr); } }
        `}</style>

        <div className="recent-grid" style={{ display: "contents" }}>
          {displayPosts.map((post, idx) => (
            <BezelCard key={idx} padding={0} hoverLift={true} tone="light" style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{
                aspectRatio: "4/5",
                width: "100%",
                backgroundImage: `url(${post.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
              }}>
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(9,80,246,.8) 0%, transparent 60%)",
                  pointerEvents: "none",
                }}></div>
                <div style={{
                  position: "absolute",
                  bottom: "var(--spacing-4)",
                  left: "var(--spacing-4)",
                  right: "var(--spacing-4)",
                  color: "var(--color-white)",
                  zIndex: 1,
                }}>
                  <p style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", lineHeight: "var(--leading-relaxed)", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {post.caption}
                  </p>
                </div>
              </div>
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "var(--spacing-3) var(--spacing-4)",
                borderTop: "1px solid var(--color-brand-blue-100)",
                background: "var(--color-white)",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-3)", fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", fontVariantNumeric: "tabular-nums", color: "var(--color-brand-blue-500)" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 4 }}><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>{post.likes}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: 4 }}><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/></svg>{post.comments}</span>
                </div>
                <span style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--color-brand-blue-500)",
                }}>
                  {post.platform === "instagram" ? "📷" : "📘"} {post.date}
                </span>
              </div>
            </BezelCard>
          ))}
        </div>

        {/* CTA Ver más */}
        <Button variant="outline" fullWidth size="md" style={{ marginTop: "var(--spacing-4)" }}>
          Ver más en Instagram / Facebook
        </Button>
      </div>
    </div>
  );
}

function parseClassName(className) {
  return {};
}