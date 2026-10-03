import React from "react";

export interface ContactFormBlockProps {
  title?: string;
  lead?: string;
  submitLabel?: string;
  whatsappNumber?: string;
  onSubmit?: (data: { name: string; company?: string; volume: string }) => void;
  className?: string;
  variant?: "inline" | "modal" | "banner";
}

export declare function ContactFormBlock(props: ContactFormBlockProps): React.ReactElement;

export default ContactFormBlock;