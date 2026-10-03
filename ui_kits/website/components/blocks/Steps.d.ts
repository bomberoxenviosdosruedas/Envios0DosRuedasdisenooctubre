import * as React from "react";
export interface StepItem { n?: number | string; title: string; body: string }
/** Lista ordenada de pasos con número en píldora, sobre BezelCard. */
export interface StepsProps { items: StepItem[]; tone?: "light" | "dark"; min?: number; style?: React.CSSProperties }
export declare function Steps(props: StepsProps): JSX.Element;
