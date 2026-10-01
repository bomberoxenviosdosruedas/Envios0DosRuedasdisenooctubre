import * as React from "react";
/** Canal oficial (kind=channel) o publicación reciente (kind=post). */
export interface SocialCardProps { kind?: "channel" | "post"; title: string; handle?: string; body: string; image?: string; date?: string; tag?: string; cta: string; href?: string; icon?: React.ReactNode; tone?: "light" | "dark" | "accent"; style?: React.CSSProperties }
export declare function SocialCard(props: SocialCardProps): JSX.Element;
