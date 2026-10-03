import React from "react";

export interface DropoffCalculatorProps {
  basePrice?: number;
  discountPercent?: number;
  initialValue?: number;
  onCalculate?: (shipments: number, savings: number) => void;
  className?: string;
}

export declare function DropoffCalculator(props: DropoffCalculatorProps): React.ReactElement;

export default DropoffCalculator;