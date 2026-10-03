import * as React from "react";
export interface TimelineItem { year: string; tag?: string; title: string; body: string }
/** Línea de tiempo vertical (Nuestra historia). */
export interface TimelineProps { items: TimelineItem[]; style?: React.CSSProperties }
export declare function Timeline(props: TimelineProps): JSX.Element;
