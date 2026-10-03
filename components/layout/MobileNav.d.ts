import React from "react";

export interface NavItem {
  label: string;
  href?: string;
  icon?: React.ComponentType<{ className?: string }>;
  dropdownItems?: Array<{ label: string; href: string; icon?: React.ComponentType<{ className?: string }> }>;
}

export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  activeDropdown?: string;
  onDropdownToggle?: (label: string) => void;
  className?: string;
}

export declare function MobileNav(props: MobileNavProps): React.ReactElement;

export default MobileNav;