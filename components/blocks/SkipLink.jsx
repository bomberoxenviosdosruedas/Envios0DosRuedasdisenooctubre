import React from "react";
import { Button } from "../core/Button.jsx";
/** Enlace "Saltar al contenido": invisible hasta recibir foco; es un Button primary sm. */
export function SkipLink({ href = "#main-content", children = "Saltar al contenido" }) {
  const [on, setOn] = React.useState(false);
  return <div onFocusCapture={() => setOn(true)} onBlurCapture={() => setOn(false)} style={{ position: "fixed", top: 16, left: 16, zIndex: 9999, transform: on ? "none" : "translateY(-300%)" }}><Button size="sm" hideIcon href={href}>{children}</Button></div>;
}
