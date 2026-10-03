import * as React from "react";
/** Selector numérico con − y + (cantidad de envíos por mes). */
export interface QuantityStepperProps { value: number; onChange: (v: number) => void; min?: number; max?: number; label?: string; style?: React.CSSProperties }
export declare function QuantityStepper(props: QuantityStepperProps): JSX.Element;
