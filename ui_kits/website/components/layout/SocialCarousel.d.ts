import React from "react";

export interface SocialCarouselProps {
  posts: Array<{
    image: string;
    caption: string;
    platform: "instagram" | "facebook";
    date: string;
    likes: number;
    comments: number;
    href: string;
  }>;
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

export declare function SocialCarousel(props: SocialCarouselProps): React.ReactElement;

export default SocialCarousel;