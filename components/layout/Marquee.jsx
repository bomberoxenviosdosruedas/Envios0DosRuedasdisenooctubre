import React from "react";
/** Marquee infinito (animate-marquee-left/right) con pausa al hover y respeto a reduced-motion. */
export function Marquee({ direction = "left", duration = 36, gap = 24, pauseOnHover = true, children, style }) {
  const [paused, setPaused] = React.useState(false);
  const name = direction === "left" ? "marquee-left" : "marquee-right";
  return <div style={{ overflow: "hidden", width: "100%", ...style }} onMouseEnter={() => pauseOnHover && setPaused(true)} onMouseLeave={() => setPaused(false)}>
    <div style={{ display: "flex", width: "max-content", gap, animation: `${name} ${duration}s linear infinite`, animationPlayState: paused ? "paused" : "running" }}>
      <div style={{ display: "flex", gap, flexShrink: 0 }}>{children}</div>
      <div style={{ display: "flex", gap, flexShrink: 0 }} aria-hidden="true">{children}</div>
    </div>
  </div>;
}
