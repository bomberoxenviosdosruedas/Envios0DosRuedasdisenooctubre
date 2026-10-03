import React from "react";

export interface NetworkChannel {
  name: string;
  description: string;
  icon: React.ReactNode;
  cta: string;
  href: string;
  color: string;
}

export interface NetworkChannelsProps {
  channels?: NetworkChannel[];
  className?: string;
}

export declare function NetworkChannels(props: NetworkChannelsProps): React.ReactElement;

export default NetworkChannels;