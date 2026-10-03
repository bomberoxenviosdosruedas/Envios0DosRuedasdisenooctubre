import React from "react";

export interface NetworkLogosProps {
  logos?: Array<{ src: string; alt: string; href?: string }>;
  speed?: number;
  gap?: number;
  className?: string;
}

export declare function NetworkLogos(props: NetworkLogosProps): React.ReactElement;

export default NetworkLogos;