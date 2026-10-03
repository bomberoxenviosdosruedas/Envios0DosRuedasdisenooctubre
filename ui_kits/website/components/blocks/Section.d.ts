import * as React from "react";
/** Sección de página: contenedor 1280px, gutters y padding vertical 64px. bg = cualquier superficie del sistema. */
export interface SectionProps { bg?: string; id?: string; children?: React.ReactNode; style?: React.CSSProperties }
export declare function Section(props: SectionProps): JSX.Element;
/** Cabecera de sección: Badge eyebrow + h2 Display (+ palabra resaltada) + Lead. */
export interface SectionHeadProps { eyebrow?: string; title: React.ReactNode; lead?: string; invert?: boolean; center?: boolean; mark?: string; style?: React.CSSProperties }
export declare function SectionHead(props: SectionHeadProps): JSX.Element;
