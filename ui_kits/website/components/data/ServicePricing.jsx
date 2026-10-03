import React from "react";
import { BezelCard } from "../core/BezelCard";
import { Badge } from "../core/Badge";
import { Button } from "../core/Button";

/** Format ARS currency */
const formatArs = (value) => `$${value.toLocaleString("es-AR")}`;

/** Service tier definitions from pricing.ts + promises.ts */
const SERVICE_TIERS = {
  EXPRESS: {
    title: "Envíos Express",
    rangeLabel: "Por envío en MDQ",
    unit: "/ despacho final",
    tiers: [
      { range: "Zona 1", distance: "0–3 km", price: 3700, features: ["Entrega en franja de 3 hs", "Corte 15:00 hs", "Hasta 5 kg / 40×40 cm sin cargo", "Seguimiento GPS en vivo"], tag: null, note: "Mandados rápidos dentro del barrio o a zonas aledañas." },
      { range: "Zona 2", distance: "3–5 km", price: 4600, features: ["Entrega en franja de 3 hs", "Corte 15:00 hs", "Hasta 5 kg / 40×40 cm sin cargo", "Seguimiento GPS en vivo"], tag: "Tarifa intermedia", note: "Cruces cortos entre zonas y barrios consolidados." },
      { range: "Zona 3", distance: "5–7 km", price: 6100, features: ["Entrega en franja de 3 hs", "Corte 15:00 hs", "Hasta 5 kg / 40×40 cm sin cargo", "Seguimiento GPS en vivo"], tag: "Tarifa intermedia", note: "De una punta a la otra de la ciudad sin demoras." },
      { range: "Zona 4", distance: "7–10 km", price: 8200, features: ["Entrega en franja de 3 hs", "Corte 15:00 hs", "Hasta 5 kg / 40×40 cm sin cargo", "Seguimiento GPS en vivo"], tag: null, note: "Recorridos extensos dentro del ejido urbano de MDQ." },
    ],
    pricePerKm: 1000,
    featuredIndex: 2,
    ctaLabels: ["Cotizar zona 1", "Cotizar zona 2", "Cotizar ahora", "Cotizar zona 4"],
    extendedNote: "Más de 10 km: $1.000 × km total (redondeado hacia arriba). Hasta 20 km cálculo automático, más allá se cotiza aparte.",
  },
  LOW_COST: {
    title: "Envíos LowCost",
    rangeLabel: "Por envío en MDQ",
    unit: "/ despacho final",
    tiers: [
      { range: "Zona 1", distance: "0–3 km", price: 3000, features: ["Entrega antes de 19:00 hs", "Corte 13:00 hs", "Hasta 5 kg / 40×40 cm sin cargo", "Ruteo masivo eficiente"], tag: null, note: "La mejor tarifa para ruteo diario de cercanía." },
      { range: "Zona 2", distance: "3–5 km", price: 4000, features: ["Entrega antes de 19:00 hs", "Corte 13:00 hs", "Hasta 5 kg / 40×40 cm sin cargo", "Ruteo masivo eficiente"], tag: "RECOMENDADO PYME", note: "Cobertura intermedia económica para PyMEs." },
      { range: "Zona 3", distance: "5–7 km", price: 5300, features: ["Entrega antes de 19:00 hs", "Corte 13:00 hs", "Hasta 5 kg / 40×40 cm sin cargo", "Ruteo masivo eficiente"], tag: null, note: "Llegamos a distancias medias al mejor costo." },
      { range: "Zona 4", distance: "7–10 km", price: 7000, features: ["Entrega antes de 19:00 hs", "Corte 13:00 hs", "Hasta 5 kg / 40×40 cm sin cargo", "Ruteo masivo eficiente"], tag: null, note: "Máximo ahorro en distancias urbanas largas." },
    ],
    pricePerKm: 700,
    featuredIndex: 1,
    ctaLabels: ["Ver Zona 1", "Ver Zona 2", "Ver Zona 3", "Ver Zona 4"],
    extendedNote: "Más de 10 km: $700 × km total (redondeado hacia arriba). Hasta 20 km cálculo automático, más allá se cotiza por WhatsApp.",
  },
  FLEX: {
    title: "Mercado Envíos Flex",
    rangeLabel: "Por envío Flex",
    unit: "/ liquidación quincenal",
    tiers: [
      { range: "Nivel 1", distance: "Hasta 30 envíos/mes", price: 3000, features: ["Corte 15:00 hs · Entrega 20:00 hs", "Hasta 5 kg / 40×40 cm", "Pickup gratis en tu local", "Panel de métricas incluido"], tag: null, note: "Ideal para vendedores que empiezan con Flex." },
      { range: "Nivel 2", distance: "30–100 envíos/mes", price: 6500, features: ["Corte 15:00 hs · Entrega 20:00 hs", "Hasta 5 kg / 40×40 cm", "Pickup gratis", "Gestor de cuenta dedicado", "SLA prioritario"], tag: "MÁS POPULAR", note: "Mejor relación costo/volumen para vendedores consolidados. [SIN CONFIRMAR]" },
      { range: "Nivel 3", distance: "+100 envíos/mes", price: 4500, features: ["Corte 15:00 hs · Entrega 20:00 hs", "Hasta 5 kg / 40×40 cm", "Pickup gratis", "Tarifa preferencial por volumen", "API de integración"], tag: "VOLUMEN ALTO", note: "Tarifa escalonada para high-volume sellers. [SIN CONFIRMAR]" },
    ],
    pricePerKm: null,
    featuredIndex: 1,
    ctaLabels: ["Activar Nivel 1", "Activar Nivel 2", "Activar Nivel 3"],
    extendedNote: "Tarifas sujetas a políticas de Mercado Libre. Liquidación quincenal. Contrareembolso 0% comisión.",
  },
  ECOMMERCE_24HS: {
    title: "E-Commerce 24HS (Next Day)",
    rangeLabel: "Por envío en MDQ",
    unit: "/ envío",
    tiers: [
      { range: "Único", distance: "Todo MDQ urbana", price: 3800, features: ["Recolección gratis desde 10 envíos/día", "Entrega next-day garantizada", "DropOFF -20% disponible", "Contrareembolso 0% comisión", "Stock en Friuli 1972 sin cargo"], tag: "CONFIRMADO 2026-09-29", note: "Tarifa fija ciudad completa. Recolección sin cargo a partir de 10 envíos/día." },
    ],
    pricePerKm: null,
    featuredIndex: 0,
    ctaLabels: ["Contratar 24HS"],
    extendedNote: "Precio cerrado por servicio, no por distancia. Solo Mar del Plata urbana.",
  },
  ECOMMERCE_SAME_DAY: {
    title: "E-Commerce Same Day",
    rangeLabel: "Por envío en MDQ",
    unit: "/ envío",
    tiers: [
      { range: "Único", distance: "Todo MDQ urbana", price: 6000, features: ["Recolección gratis desde 10 envíos/día", "Entrega mismo día (corte 13:00 hs)", "DropOFF -20% disponible", "Contrareembolso 0% comisión", "Stock en Friuli 1972 sin cargo"], tag: "CONFIRMADO 2026-09-29", note: "Tarifa fija same-day. Recolección sin cargo a partir de 10 envíos/día." },
    ],
    pricePerKm: null,
    featuredIndex: 0,
    ctaLabels: ["Contratar Same Day"],
    extendedNote: "Precio cerrado por servicio. Corte de recepción 13:00 hs. Entrega antes de 19:00 hs.",
  },
  CONTRAREEMBOLSO: {
    title: "Contrareembolso",
    rangeLabel: "Por cobro en destino",
    unit: "/ operación",
    tiers: [
      { range: "Todos los servicios", distance: "Sin límite de monto", price: 0, features: ["Comisión 0%", "Cobro en efectivo o transferencia al momento de entrega", "Rendición inmediata", "Disponible en Express, LowCost, Flex, E-Commerce"], tag: "SIN COMISIÓN", note: "El cobro lo hace el repartidor al entregar. Sin costo extra para el comercio." },
    ],
    pricePerKm: null,
    featuredIndex: 0,
    ctaLabels: ["Activar contrareembolso"],
    extendedNote: "Aplicable a todos los servicios. El comercio recibe el dinero menos el costo del envío.",
  },
  CUENTA_CORRIENTE: {
    title: "Cuenta Corriente Empresas",
    rangeLabel: "Liquidación quincenal/mensual",
    unit: "/ período",
    tiers: [
      { range: "Plan Flexible", distance: "Volumen variable", price: "A medida", features: ["Facturación consolidada mensual", "Pagos 15/30/45 días", "Tarifa escalonada por volumen", "Atención prioritaria WhatsApp", "Retiro programado en tu local"], tag: "CUENTA CORRIENTE", note: "Esquemas adaptados al flujo de caja. No emitimos Factura A." },
    ],
    pricePerKm: null,
    featuredIndex: 0,
    ctaLabels: ["Solicitar cuenta corriente"],
    extendedNote: "Tarifa corporativa escalonada. Mínimo 10 envíos/día para retiro gratis.",
  },
};

/** Check icon */
const Check = () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>;
/** ArrowRight icon */
const ArrowRight = () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>;

/**
 * ServicePricing: tarjeta de precios genérica por servicio.
 * Reemplaza ExpressPricing, LowCostPricing, FlexPricing, EmprendedoresPricing sueltos.
 */
export function ServicePricing({
  serviceType,
  title,
  rangeLabel,
  unit,
  tiers,
  ctaLabel,
  onCta,
  featuredIndex = 1,
  className = "",
}) {
  const config = SERVICE_TIERS[serviceType] || {};
  const effectiveTitle = title || config.title;
  const effectiveRangeLabel = rangeLabel || config.rangeLabel;
  const effectiveUnit = unit || config.unit;
  const effectiveTiers = tiers || config.tiers;
  const effectiveFeaturedIndex = featuredIndex !== undefined ? featuredIndex : (config.featuredIndex ?? 1);
  const effectiveCtaLabels = ctaLabel ? effectiveTiers.map(() => ctaLabel) : (config.ctaLabels || effectiveTiers.map((_, i) => `Cotizar ${effectiveTiers[i].range}`));
  const effectiveOnCta = onCta || (() => {});
  const extendedNote = config.extendedNote;

  return (
    <section style={{ padding: "var(--section-y) var(--page-gutter-lg)" }}>
      <style>{`
        @media (min-width: 768px) {
          .svc-grid { grid-template-columns: repeat(${Math.min(effectiveTiers.length, 4)}, 1fr) !important; }
        }
      `}</style>

      {/* Header */}
      <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto var(--spacing-12)" }}>
        <Badge tone="accent" size="sm" rotate={false} style={{ marginBottom: "var(--spacing-4)" }}>
          Tarifario transparente 2026 · Mar del Plata
        </Badge>
        <h2 style={{
          margin: "0 0 var(--spacing-4)",
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.25rem, 5vw, 4rem)",
          fontWeight: 400,
          lineHeight: "var(--leading-display)",
          letterSpacing: "var(--tracking-display)",
          textTransform: "uppercase",
          color: "var(--color-brand-blue-500)",
        }}>
          {effectiveTitle}
        </h2>
        <p style={{
          margin: 0,
          fontFamily: "var(--font-sans)",
          fontSize: "var(--text-base)",
          lineHeight: "var(--leading-relaxed)",
          color: "var(--color-brand-blue-500)",
          maxWidth: "56ch",
          marginLeft: "auto",
          marginRight: "auto",
        }}>
          Tarifa fija según kilómetros exactos entre retiro y entrega. Sabés el precio antes de confirmar.
        </p>
      </div>

      {/* Tier Cards Grid */}
      <ul className="svc-grid" style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "var(--spacing-5)",
        listStyle: "none",
        padding: 0,
        margin: 0,
      }}>
        {effectiveTiers.map((tier, idx) => {
          const isFeatured = idx === effectiveFeaturedIndex && tier.tag;
          const tierPrice = typeof tier.price === "number" ? formatArs(tier.price) : tier.price;

          // Card variant: featured gets accent border
          const variant = isFeatured ? "accent" : "light";

          return (
            <li key={tier.range} style={{ display: "flex" }}>
              <BezelCard
                variant={variant}
                hoverLift={!isFeatured}
                padding={24}
                innerClassName="flex flex-col justify-between h-full"
                style={{ height: "100%" }}
              >
                {isFeatured && (
                  <div style={{ position: "relative", marginBottom: "var(--spacing-4)" }}>
                    <Badge tone="accent" size="sm" rotate={false} style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", whiteSpace: "nowrap", boxShadow: "var(--shadow-accent-md)" }}>
                      {tier.tag}
                    </Badge>
                  </div>
                )}

                <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "var(--spacing-2)", marginBottom: "var(--spacing-4)" }}>
                    <h3 style={{
                      margin: 0,
                      fontFamily: "var(--font-subheading)",
                      fontSize: "var(--text-sm)",
                      fontWeight: 400,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      lineHeight: "var(--leading-tight)",
                      color: "var(--color-brand-blue-500)",
                    }}>
                      {tier.range}
                    </h3>
                    <span style={{
                      flexShrink: 0,
                      borderRadius: "var(--radius-control)",
                      background: "var(--color-brand-blue-50)",
                      padding: "4px 8px",
                      fontFamily: "var(--font-mono)",
                      fontSize: "var(--text-xs)",
                      fontWeight: 500,
                      fontVariantNumeric: "tabular-nums",
                      color: "var(--color-brand-blue-500)",
                    }}>
                      {tier.distance}
                    </span>
                  </div>

                  <div style={{ marginBottom: "var(--spacing-4)" }}>
                    <p style={{
                      margin: "0 0 4px",
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      textTransform: "uppercase",
                      letterSpacing: "var(--tracking-wider)",
                      color: "var(--color-brand-blue-500)",
                    }}>
                      Tarifa fija
                    </p>
                    <p style={{
                      margin: 0,
                      display: "flex",
                      alignItems: "baseline",
                      gap: "4px",
                      fontFamily: "var(--font-mono)",
                      fontSize: "clamp(36px, 5vw, 44px)",
                      fontWeight: 700,
                      lineHeight: 1,
                      letterSpacing: "var(--tracking-tight)",
                      fontVariantNumeric: "tabular-nums",
                      color: "var(--color-brand-blue-500)",
                    }}>
                      {tierPrice}
                      <span style={{
                        fontSize: "var(--text-xs)",
                        fontWeight: 400,
                        color: "var(--color-brand-blue-500)",
                      }}>
                        ARS
                      </span>
                    </p>
                  </div>

                  {/* Service window / SLA */}
                  <dl style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "var(--spacing-2)",
                    borderRadius: "var(--radius-control)",
                    background: "var(--color-brand-blue-50)",
                    padding: "8px 12px",
                    border: "1px solid var(--color-brand-blue-100)",
                    marginBottom: "var(--spacing-4)",
                  }}>
                    <dt style={{
                      margin: 0,
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      textTransform: "uppercase",
                      letterSpacing: "var(--tracking-wider)",
                      color: "var(--color-brand-blue-500)",
                    }}>
                      Ventana / SLA
                    </dt>
                    <dd style={{
                      margin: 0,
                      fontFamily: "var(--font-mono)",
                      fontSize: "var(--text-xs)",
                      fontWeight: 600,
                      fontVariantNumeric: "tabular-nums",
                      color: "var(--color-brand-blue-500)",
                    }}>
                      {tier.features?.[0] || ""}
                    </dd>
                  </dl>

                  {tier.note && (
                    <p style={{
                      margin: "0 0 var(--spacing-4)",
                      fontFamily: "var(--font-sans)",
                      fontSize: "var(--text-sm)",
                      lineHeight: "var(--leading-relaxed)",
                      color: "var(--color-brand-blue-500)",
                      minHeight: "60px",
                    }}>
                      {tier.note}
                    </p>
                  )}

                  <ul style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "0 0 var(--spacing-5)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--spacing-2)",
                    flex: 1,
                  }}>
                    {tier.features?.map((feature, fi) => (
                      <li key={fi} style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "var(--spacing-2)",
                        fontFamily: "var(--font-sans)",
                        fontSize: "var(--text-sm)",
                        color: "var(--color-brand-blue-500)",
                      }}>
                        <Check style={{ flexShrink: 0, color: "var(--color-brand-blue-500)" }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant={isFeatured ? "primary" : "secondary"}
                  fullWidth
                  onClick={() => effectiveOnCta(idx)}
                >
                  {effectiveCtaLabels[idx] || `Cotizar ${tier.range}`}
                  {isFeatured && <ArrowRight />}
                </Button>
              </BezelCard>
            </li>
          );
        })}
      </ul>

      {/* Extended note (per km pricing) */}
      {extendedNote && (
        <div style={{
          marginTop: "var(--spacing-12)",
          borderRadius: "var(--radius-card)",
          background: "var(--color-white)",
          padding: "var(--spacing-6) var(--spacing-8)",
          boxShadow: "var(--shadow-sm)",
          border: "1px solid var(--color-brand-blue-100)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--spacing-5)",
        }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--spacing-5)" }}>
            <span style={{
              flexShrink: 0,
              width: 56,
              height: 56,
              borderRadius: "var(--radius-xl)",
              background: "var(--color-brand-blue-50)",
              border: "1px solid var(--color-brand-blue-100)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--color-brand-blue-500)",
            }}>
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><path d="M15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/></svg>
            </span>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "var(--spacing-2)", marginBottom: "var(--spacing-2)" }}>
                <h3 style={{
                  margin: 0,
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 400,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  lineHeight: "var(--leading-tight)",
                  color: "var(--color-brand-blue-500)",
                }}>
                  {extendedNote.split(".")[0]}
                </h3>
                <span style={{
                  borderRadius: "var(--radius-control)",
                  background: "var(--color-brand-blue-50)",
                  padding: "4px 10px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-xs)",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  color: "var(--color-brand-blue-500)",
                }}>
                  Excedente por km
                </span>
              </div>
            </div>
          </div>
          <p style={{
            margin: 0,
            fontFamily: "var(--font-sans)",
            fontSize: "var(--text-base)",
            lineHeight: "var(--leading-relaxed)",
            color: "var(--color-brand-blue-500)",
            maxWidth: "720px",
          }}>
            {extendedNote.split(".").slice(1).join(".")}
          </p>
          {config.pricePerKm && (
            <p style={{
              margin: 0,
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-xs)",
              fontWeight: 600,
              color: "var(--color-brand-blue-500)",
              background: "var(--color-brand-blue-50)",
              padding: "8px 12px",
              borderRadius: "var(--radius-control)",
              border: "1px solid var(--color-brand-blue-100)",
              display: "inline-block",
              width: "fit-content",
            }}>
              Fórmula: {formatArs(config.pricePerKm)} × km total, redondeado hacia arriba
            </p>
          )}
        </div>
      )}

      {/* Pricing facts (optional) */}
      {config.pricingFacts && (
        <ul style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "var(--spacing-5)",
          marginTop: "var(--spacing-12)",
          listStyle: "none",
          padding: 0,
        }}>
          {config.pricingFacts.map((fact, idx) => (
            <li key={idx} style={{ display: "flex" }}>
              <BezelCard variant="light" padding={20} innerClassName="flex items-start gap-4 h-full">
                <span style={{ flexShrink: 0, width: 48, height: 48, borderRadius: "var(--radius-xl)", background: "var(--color-brand-blue-50)", border: "1px solid var(--color-brand-blue-100)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-brand-blue-500)" }}>
                  {fact.icon}
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <p style={{ margin: 0, fontFamily: "var(--font-subheading)", fontSize: "var(--text-base)", fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.05em", lineHeight: "var(--leading-tight)", color: "var(--color-brand-blue-500)" }}>
                    {fact.title}
                  </p>
                  <p style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", lineHeight: "var(--leading-relaxed)", color: "var(--color-brand-blue-500)" }}>
                    {fact.body}
                  </p>
                </div>
              </BezelCard>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}