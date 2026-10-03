import React from "react";

export interface SurchargeItem {
  label: string;
  value: string;
  condition: string;
  appliesTo: ("EXPRESS" | "LOW_COST" | "FLEX" | "ECOMMERCE_24HS" | "ECOMMERCE_SAME_DAY" | "CUENTA_CORRIENTE" | "ALL")[];
  icon?: React.ReactNode;
}

export interface SurchargesPanelProps {
  items?: SurchargeItem[];
  serviceFilter?: "EXPRESS" | "LOW_COST" | "FLEX" | "ECOMMERCE_24HS" | "ECOMMERCE_SAME_DAY" | "CUENTA_CORRIENTE" | "ALL";
  className?: string;
}

export declare function SurchargesPanel(props: SurchargesPanelProps): React.ReactElement;

export default SurchargesPanel;