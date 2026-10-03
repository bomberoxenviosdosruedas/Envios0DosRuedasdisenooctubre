import React from "react";
import { Section } from "./Section";
import { SectionHead } from "./SectionHead";
import { Display } from "./Display";
import { Lead } from "./Lead";
import { Highlight } from "./Highlight";
import { Badge } from "../core/Badge";
import { Button } from "../core/Button";

/**
 * ConversionBanner: banner CTA destacado (Home, páginas servicio, Footer).
 */
export function ConversionBanner({
  eyebrow,
  title,
  mark,
  lead,
  ctaLabel,
  ctaHref,
  ctaOnClick,
  secondaryLabel,
  secondaryHref,
  background = "blue", // 'blue' | 'yellow' | 'dark'
  className = "",
}) {
  const isYellow = background === "yellow";
  const isDark = background === "dark";

  const sectionBg = isYellow
    ? "var(--color-brand-yellow-500)"
    : "var(--color-brand-blue-500)";

  const textColor = isYellow
    ? "var(--color-brand-blue-500)"
    : "var(--color-white)";

  const eyebrowTone = isYellow ? "invert" : "accent";
  const leadVariant = isYellow ? "normal" : "invert";

  const ctaPrimaryVariant = isYellow ? "social" : "primary";
  const ctaPrimarySurface = "light";
  const ctaSecondaryVariant = isYellow ? "secondary" : "secondary";
  const ctaSecondarySurface = isDark ? "dark" : "light";

  return (
    <Section bg={sectionBg} style={{ ...parseClassName(className) }}>
      <div style={{ maxWidth: "var(--container-page)", margin: "0 auto", padding: "var(--section-y-lg) var(--page-gutter-lg)", textAlign: "center" }}>
        {/* Eyebrow */}
        {eyebrow && (
          <Badge tone={eyebrowTone} size="sm" rotate={false} style={{ marginBottom: "var(--spacing-4)" }}>
            {eyebrow}
          </Badge>
        )}

        {/* Title + Mark */}
        <Display as="h1" color={textColor} style={{ marginBottom: "var(--spacing-5)" }}>
          {title.split(mark || "").map((part, i) => (
            <React.Fragment key={i}>
              {part}
              {i < (title.split(mark || "").length - 1) && (
                <Highlight>{mark}</Highlight>
              )}
            </React.Fragment>
          ))}
        </Display>

        {/* Lead */}
        {lead && (
          <Lead variant={leadVariant} style={{ maxWidth: "720px", margin: "0 auto var(--spacing-8)" }}>
            {lead}
          </Lead>
        )}

        {/* CTAs */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "var(--spacing-4)" }}>
          <Button
            variant={ctaPrimaryVariant}
            surface={ctaPrimarySurface}
            size="lg"
            href={ctaHref}
            onClick={ctaOnClick}
          >
            {ctaLabel}
          </Button>
          {secondaryLabel && (
            <Button
              variant={ctaSecondaryVariant}
              surface={ctaSecondarySurface}
              size="lg"
              href={secondaryHref}
            >
              {secondaryLabel}
            </Button>
          )}
        </div>
      </div>

      {/* Entrance animation (CSS) */}
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .conversion-banner > * {
            animation: fade-up 0.6s cubic-bezier(0.16,1,0.3,1) forwards;
            opacity: 0;
            transform: translateY(20px);
          }
          .conversion-banner > *:nth-child(1) { animation-delay: 0.1s; }
          .conversion-banner > *:nth-child(2) { animation-delay: 0.2s; }
          .conversion-banner > *:nth-child(3) { animation-delay: 0.3s; }
          .conversion-banner > *:nth-child(4) { animation-delay: 0.4s; }
        }
        @keyframes fade-up {
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .conversion-banner > * { animation: none !important; opacity: 1; transform: none; }
        }
      `}</style>
    </Section>
  );
}

function parseClassName(className) {
  return { className: `conversion-banner ${className}`.trim() };
}