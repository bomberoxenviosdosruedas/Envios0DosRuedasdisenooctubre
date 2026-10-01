import * as React from "react";
/** Campo de formulario (input, select o textarea) con label Bebas Neue, icono, hint y error. */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "style"> {
  label?: string;
  required?: boolean;
  hint?: string;
  /** Mensaje de error (role=alert, borde rojo) */
  error?: string;
  /** Icono Lucide 16-18px a la izquierda */
  icon?: React.ReactNode;
  /** Elemento a renderizar */
  as?: "input" | "select" | "textarea";
  style?: React.CSSProperties;
  wrapperStyle?: React.CSSProperties;
  children?: React.ReactNode;
}
export declare function Input(props: InputProps): JSX.Element;
