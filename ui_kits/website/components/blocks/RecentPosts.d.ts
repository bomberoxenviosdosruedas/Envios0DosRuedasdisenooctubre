import React from "react";

export interface RecentPost {
  image: string;
  caption: string;
  date: string;
  likes: number;
  comments: number;
  href: string;
  platform: "instagram" | "facebook";
}

export interface RecentPostsProps {
  posts?: RecentPost[];
  className?: string;
  limit?: number;
}

export declare function RecentPosts(props: RecentPostsProps): React.ReactElement;

export default RecentPosts;