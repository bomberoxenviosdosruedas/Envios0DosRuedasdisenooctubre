import React from "react";

export interface FaqCategory {
  name: string;
  desc: string;
  icon: string;
  items: Array<{ q: string; a: string }>;
}

export interface FaqSearchProps {
  categories?: FaqCategory[];
  className?: string;
  onSearch?: (query: string, results: Array<{ q: string; a: string; category: string }>) => void;
}

export declare function FaqSearch(props: FaqSearchProps): React.ReactElement;

export default FaqSearch;