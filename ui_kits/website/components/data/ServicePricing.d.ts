import React from "react";

export interface PriceTier {
  range: string;
  distance: string;
  price: number | string;
  features: string[];
  tag?: string;
  note?: string;
}

export interface ServicePricingProps {
  serviceType: "EXPRESS" | "LOW_COST" | "FLEX" | "ECOMMERCE_24HS" | "ECOMMERCE_SAME_DAY" | "CONTRAREEMBOLSO" | "CUENTA_CORRIENTE";
  title?: string;
  rangeLabel?: string;
  unit?: string;
  tiers?: PriceTier[];
  ctaLabel?: string | ((tierIndex: number) => string);
  onCta?: (tierIndex: number) => void;
  featuredIndex?: number;
  className?: string;
}

export declare function ServicePricing(props: ServicePricingProps): React.ReactElement;

export default ServicePricing;