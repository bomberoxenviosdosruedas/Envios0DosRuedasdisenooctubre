import * as React from "react";
export interface NavItem { label: string; href?: string; items?: string[] }
/** Header fijo del sitio (optimized-header): logo + wordmark, nav desktop con dropdowns, teléfono, CTA y menú móvil off-canvas (< 1024px). */
export interface SiteHeaderProps {
  nav?: NavItem[];
  logoSrc?: string;
  phone?: string;
  ctaLabel?: string;
  ctaHref?: string;
  onCta?: () => void;
  /** Estado scrolleado: fondo 95% + blur + sombra, padding 10px */
  compact?: boolean;
  sticky?: boolean;
  onNavigate?: (item: NavItem) => void;
  style?: React.CSSProperties;
}
export declare function SiteHeader(props: SiteHeaderProps): JSX.Element;
