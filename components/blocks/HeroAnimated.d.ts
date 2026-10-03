import React from "react";
import { PageHeroProps } from "../blocks/PageHero";

export interface HeroAnimatedProps extends Omit<PageHeroProps, "tone"> {
  children: React.ReactNode;
  aside?: React.ReactNode;
  className?: string;
}

export declare function HeroAnimated(props: HeroAnimatedProps): React.ReactElement;

export default HeroAnimated;