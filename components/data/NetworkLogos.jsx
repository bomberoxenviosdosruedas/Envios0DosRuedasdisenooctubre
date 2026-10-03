import React from "react";

/** Logos de marcas/clientes (Simple Icons CDN + inline fallbacks) */
const LOGOS = [
  { src: "https://cdn.simpleicons.org/mercadolibre/0950F6", alt: "MercadoLibre Flex", href: "https://www.mercadolibre.com.ar/" },
  { src: "https://cdn.simpleicons.org/vercel/0950F6", alt: "Vercel", href: "https://vercel.com/" },
  { src: "https://cdn.simpleicons.org/postgresql/0950F6", alt: "PostgreSQL", href: "https://www.postgresql.org/" },
  { src: "https://cdn.simpleicons.org/prisma/0950F6", alt: "Prisma", href: "https://www.prisma.io/" },
  { src: "https://cdn.simpleicons.org/tailwindcss/0950F6", alt: "Tailwind CSS", href: "https://tailwindcss.com/" },
  { src: "https://cdn.simpleicons.org/nextdotjs/0950F6", alt: "Next.js", href: "https://nextjs.org/" },
  { src: "https://cdn.simpleicons.org/typescript/0950F6", alt: "TypeScript", href: "https://www.typescriptlang.org/" },
  { src: "https://cdn.simpleicons.org/github/0950F6", alt: "GitHub", href: "https://github.com/" },
  { src: "https://cdn.simpleicons.org/whatsapp/0950F6", alt: "WhatsApp Business", href: "https://business.whatsapp.com/" },
  { src: "https://cdn.simpleicons.org/google/0950F6", alt: "Google Cloud", href: "https://cloud.google.com/" },
];

/**
 * NetworkLogos: carrusel de logos de marcas/clientes (Home, Footer).
 * Marquee CSS puro, pause on hover, prefers-reduced-motion.
 */
export function NetworkLogos({ logos = LOGOS, speed = 30, gap = 40, className = "" }) {
  const duplicated = [...logos, ...logos]; // loop infinito sin salto

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        ...parseClassName(className),
      }}
    >
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .network-logos-track {
          display: flex;
          align-items: center;
          gap: ${gap}px;
          width: max-content;
          animation: marquee-left ${speed}s linear infinite;
          will-change: transform;
        }
        .network-logos-track:hover,
        .network-logos-track:focus-within {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .network-logos-track {
            animation-play-state: paused !important;
          }
        }
        .network-logo-item {
          flex-shrink: 0;
          height: 48px;
          display: flex;
          align-items: center;
          filter: grayscale(100%) opacity(0.6);
          transition: filter var(--duration-base) var(--ease-default), transform var(--duration-base) var(--ease-default);
        }
        .network-logo-item:hover,
        .network-logo-item:focus {
          filter: grayscale(0) opacity(1);
          transform: scale(1.05);
        }
        .network-logo-item img {
          height: 100%;
          width: auto;
          object-fit: contain;
        }
        .network-logo-item svg {
          height: 100%;
          width: auto;
        }
      `}</style>

      <div className="network-logos-track" role="list" aria-label="Marcas y tecnologías que confían en Envíos DosRuedas">
        {duplicated.map((logo, idx) => (
          <div key={`${logo.alt}-${idx}`} className="network-logo-item" role="listitem" tabIndex={0}>
            {logo.href ? (
              <a href={logo.href} target="_blank" rel="noopener noreferrer" aria-label={logo.alt} style={{ display: "block", height: "100%" }}>
                <img src={logo.src} alt="" aria-hidden="true" loading="lazy" />
              </a>
            ) : (
              <img src={logo.src} alt={logo.alt} aria-hidden="true" loading="lazy" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function parseClassName(className) {
  return {};
}