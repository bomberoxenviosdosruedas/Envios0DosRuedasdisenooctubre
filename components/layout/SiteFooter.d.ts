import * as React from "react";
/** Footer del sitio: franja amarilla 6px, banda CTA, marca + canales, servicios, base MDQ con datos, volver arriba y legales. */
export interface SiteFooterProps { services?: string[]; /** Botones sociales (variant social, surface dark) */ social?: React.ReactNode; onNavigate?: (item: { label: string }) => void; onCta?: () => void; year?: number; style?: React.CSSProperties }
export declare function SiteFooter(props: SiteFooterProps): JSX.Element;
