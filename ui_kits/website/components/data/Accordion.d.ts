import * as React from "react";
export interface AccordionItem { q: string; a: React.ReactNode }
/** Acordeón de preguntas frecuentes (un panel abierto a la vez). */
export interface AccordionProps { items: AccordionItem[]; /** índice abierto inicial; -1 = todos cerrados */ defaultOpen?: number; tone?: "light" | "dark"; style?: React.CSSProperties }
export declare function Accordion(props: AccordionProps): JSX.Element;
