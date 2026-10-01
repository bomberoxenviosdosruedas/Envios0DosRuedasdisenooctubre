import * as React from "react";
/** Fila de canal de contacto sobre azul. Usar dentro de un ul. */
export interface ContactRowProps { icon: React.ReactNode; iconBg?: string; title: string; value?: string; action?: React.ReactNode; style?: React.CSSProperties }
export declare function ContactRow(props: ContactRowProps): JSX.Element;
