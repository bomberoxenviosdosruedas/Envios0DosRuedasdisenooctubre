import React from "react";

export interface RadioCardOption {
  id: string;
  label: string;
  description?: string;
  price?: string;
  badge?: string;
  serviceType: "EXPRESS" | "LOW_COST" | "FLEX";
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface RadioCardGroupProps {
  options: RadioCardOption[];
  value: string;
  onChange: (value: string) => void;
  name?: string;
  className?: string;
  gridCols?: string;
}

export declare function RadioCardGroup(props: RadioCardGroupProps): React.ReactElement;

export default RadioCardGroup;