import React from "react";

export interface NavItem {
  label: string;
  href?: string;
  icon?: React.ComponentType<{ className?: string }>;
  dropdownItems?: Array<{ label: string; href: string; icon?: React.ComponentType<{ className?: string }> }>;
}

export interface OptimizedHeaderProps {
  pathname?: string;
  navItems?: NavItem[];
  logoSrc?: string;
  phone?: string;
  ctaLabel?: string;
  ctaHref?: string;
  onNavigate?: (item: NavItem) => void;
  onCta?: () => void;
  className?: string;
}

export declare function OptimizedHeader(props: OptimizedHeaderProps): React.ReactElement;

export default OptimizedHeader;