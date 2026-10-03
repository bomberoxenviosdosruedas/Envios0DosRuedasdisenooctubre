import React from "react";
import { BezelCard } from "../core/BezelCard";
import { Button } from "../core/Button";

/** Icons for channels */
const ICONS = {
  whatsapp: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20Z"/></svg>,
  instagram: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><circle cx="17.5" cy="6.5" r="1"/></svg>,
  facebook: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
};

/** Default channels (3 fixed) */
const DEFAULT_CHANNELS = [
  {
    name: "WhatsApp",
    description: "Cotizaciones instantáneas, consultas operativas y seguimiento en vivo.",
    icon: ICONS.whatsapp,
    cta: "Chateá ahora",
    href: "https://wa.me/542236602699",
    color: "#25D366",
  },
  {
    name: "Instagram",
    description: "Novedades de la flota, consejos para tiendas online y fotos reales de nuestro día a día.",
    icon: ICONS.instagram,
    cta: "Seguinos",
    href: "https://www.instagram.com/enviosdosruedas",
    color: "#E1306C",
  },
  {
    name: "Facebook",
    description: "Avisos de servicios, información de tránsito urbano y contacto para empresas.",
    icon: ICONS.facebook,
    cta: "Seguinos",
    href: "https://www.facebook.com/enviosdosruedas",
    color: "#1877F2",
  },
];

/**
 * NetworkChannels: tarjetas de canales de redes sociales (RedesScreen, ContactoScreen).
 */
export function NetworkChannels({ channels = DEFAULT_CHANNELS, className = "" }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "var(--spacing-6)",
      ...parseClassName(className),
    }}>
      {channels.map((channel, idx) => (
        <BezelCard key={idx} padding={20} hoverLift={false} tone="light">
          <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--spacing-4)" }}>
            <span style={{
              flexShrink: 0,
              width: 48,
              height: 48,
              borderRadius: "var(--radius-full)",
              background: `${channel.color}1A`, // 10% opacity
              color: channel.color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              {channel.icon}
            </span>
            <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: "var(--spacing-3)" }}>
              <h3 style={{
                margin: 0,
                fontFamily: "var(--font-subheading)",
                fontSize: "clamp(20px, 2.5vw, 24px)",
                fontWeight: 400,
                textTransform: "uppercase",
                letterSpacing: "var(--tracking-wider)",
                color: "var(--color-brand-blue-500)",
              }}>
                {channel.name}
              </h3>
              <p style={{
                margin: 0,
                fontFamily: "var(--font-sans)",
                fontSize: "var(--text-sm)",
                lineHeight: "var(--leading-relaxed)",
                color: "var(--color-brand-blue-500)",
              }}>
                {channel.description}
              </p>
              <Button
                variant="social"
                surface="light"
                size="sm"
                external
                href={channel.href}
              >
                {channel.cta}
              </Button>
            </div>
          </div>
        </BezelCard>
      ))}
    </div>
  );
}

function parseClassName(className) {
  return {};
}