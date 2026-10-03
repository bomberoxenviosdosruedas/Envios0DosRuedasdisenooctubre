import React from "react";

export interface ConversionBannerProps {
  eyebrow?: string;
  title: string;
  mark?: string;
  lead?: string;
  ctaLabel: string;
  ctaHref?: string;
  ctaOnClick?: () => void;
  secondaryLabel?: string;
  secondaryHref?: string;
  background?: "blue" | "yellow" | "dark";
  className?: string;
}

export declare function ConversionBanner(props: ConversionBannerProps): React.ReactElement;

export default ConversionBanner;