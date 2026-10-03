import * as React from "react";
/** Tarjeta de tarifa (zonas Express/LowCost, niveles Flex). */
export interface PricingCardProps {
  title: string; /** "Zona 1 · Microcentro" */
  range?: string; /** "Hasta 3 km" */
  price: string; /** "$3.700" */
  unit?: string; /** "ARS" | "/ despacho final" | "/ liquidación quincenal" */
  tag?: string; /** "Recomendado PyME" — Badge flotante */
  features?: string[]; note?: string; ctaLabel?: string; href?: string; onCta?: () => void;
  /** borde azul-500 + fondo azul-50 + CTA amarillo */
  featured?: boolean; style?: React.CSSProperties;
}
export declare function PricingCard(props: PricingCardProps): JSX.Element;
