import * as React from "react";
/** Reseña de cliente. */
export interface ReviewCardProps { name: string; text: string; when?: string; title?: string; tone?: "light" | "dark" | "accent"; rating?: number; width?: number; style?: React.CSSProperties }
export declare function ReviewCard(props: ReviewCardProps): JSX.Element;
