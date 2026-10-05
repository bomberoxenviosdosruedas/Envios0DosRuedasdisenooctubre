import React from "react";
import { PageHero } from "../blocks/PageHero";

/** Moto icon for shuttle animation */
const MotoIcon = () => (
  <svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M8 32h32M16 32V24a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8M12 32a4 4 0 1 1 8 0 4 4 0 0 1-8 0M36 32a4 4 0 1 1 8 0 4 4 0 0 1-8 0"/>
  </svg>
);

/** Pin icon for radar */
const PinIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

/**
 * HeroAnimated: Hero con animaciones procedimentales (extiende PageHero) para Home.
 * Incluye: grilla punteada, blobs blur, radar sweep, shuttle, pulse rings, roundtrip.
 * TODAS gateadas por @media (prefers-reduced-motion: reduce).
 */
export function HeroAnimated({ children, aside, className = "", ...props }) {
  return (
    <PageHero {...props} tone="blue" aside={aside} className={className}>
      {children}

      {/* Capa de animaciones procedimentales */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 0 }} aria-hidden="true">
        {/* Blob 1: top-right glow - single shot */}
        <div className="blob-1" style={{
          position: "absolute",
          top: "-160px",
          right: "-160px",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,236,1,.18) 0%, rgba(9,80,246,.12) 50%, transparent 70%)",
          filter: "blur(90px)",
          opacity: 0,
          animation: "float-slow-once 1200ms var(--ease-out) forwards",
        }}></div>

        {/* Blob 2: bottom-left glow - single shot */}
        <div className="blob-2" style={{
          position: "absolute",
          bottom: "-200px",
          left: "20%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(9,80,246,.4) 0%, transparent 70%)",
          filter: "blur(100px)",
          opacity: 0,
          animation: "floaty-once 1200ms var(--ease-out) forwards 200ms",
        }}></div>

        {/* Radar sweep - centered on aside area - single shot */}
        <svg style={{
          position: "absolute",
          right: "5%",
          top: "20%",
          width: "280px",
          height: "280px",
          opacity: 0.15,
        }} viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
          <defs>
            <style>{`
              @media (prefers-reduced-motion: reduce) {
                .radar-sweep { animation: none !important; opacity: 0; }
                .radar-ring { animation: none !important; opacity: 0; }
                .shuttle { animation: none !important; opacity: 0; }
                .pulse-ring { animation: none !important; opacity: 0; }
                .roundtrip { animation: none !important; opacity: 0; }
                .blob-1, .blob-2 { animation: none !important; opacity: 1; transform: none; }
              }
              @keyframes radar-rotate-once { 0% { transform: rotate(-90deg); opacity: 0; } 100% { transform: rotate(270deg); opacity: 0.6; } }
              @keyframes radar-ring-once { 0% { stroke-dashoffset: 565; opacity: 0; } 100% { stroke-dashoffset: 0; opacity: 0.6; } }
              @keyframes shuttle-once { 0% { transform: translate(0, 0) rotate(0deg); opacity: 0; } 100% { transform: translate(180px, -60px) rotate(15deg); opacity: 1; } }
              @keyframes pulse-ring-once { 0% { r: 10; opacity: 0.4; } 100% { r: 90; opacity: 0; } }
              @keyframes roundtrip-once { 0% { transform: translate(-100px, 0) rotate(-10deg); opacity: 0; } 100% { transform: translate(100px, 0) rotate(10deg); opacity: 0.7; } }
              @keyframes float-slow-once { 0% { transform: translate(0, 0) scale(0.95); opacity: 0; } 100% { transform: translate(-20px, 20px) scale(1); opacity: 0.2; } }
              @keyframes floaty-once { 0% { transform: translate(0, 0) scale(0.95); opacity: 0; } 100% { transform: translate(30px, -30px) scale(1); opacity: 0.15; } }
            `}</style>
          </defs>
          
          {/* Radar sweep line */}
          <g className="radar-sweep" style={{ transformOrigin: "100 100", animation: "radar-rotate-once 1200ms var(--ease-out) forwards" }}>
            <path d="M100 100 L100 10" stroke="var(--color-brand-yellow-500)" strokeWidth="2" strokeLinecap="round" opacity="0"/>
            <path d="M100 100 L100 10" stroke="var(--color-brand-yellow-500)" strokeWidth="1" strokeLinecap="round" opacity="0" style={{ transform: "rotate(120deg)", transformOrigin: "100 100" }}/>
            <path d="M100 100 L100 10" stroke="var(--color-brand-yellow-500)" strokeWidth="1" strokeLinecap="round" opacity="0" style={{ transform: "rotate(240deg)", transformOrigin: "100 100" }}/>
          </g>
          
          {/* Radar rings */}
          <circle className="radar-ring" cx="100" cy="100" r="90" fill="none" stroke="var(--color-brand-yellow-500)" strokeWidth="1.5" strokeDasharray="565" strokeDashoffset="565" style={{ animation: "radar-ring-once 1000ms var(--ease-out) forwards", transformOrigin: "100 100" }}/>
          <circle className="radar-ring" cx="100" cy="100" r="90" fill="none" stroke="var(--color-brand-yellow-500)" strokeWidth="1" strokeDasharray="565" strokeDashoffset="565" style={{ animation: "radar-ring-once 1000ms var(--ease-out) forwards 400ms", transformOrigin: "100 100" }}/>
          
          {/* Pulse rings */}
          <circle className="pulse-ring" cx="100" cy="100" r="10" fill="none" stroke="var(--color-brand-yellow-500)" strokeWidth="2" style={{ animation: "pulse-ring-once 1000ms var(--ease-out) forwards", transformOrigin: "100 100" }}/>
          <circle className="pulse-ring" cx="100" cy="100" r="10" fill="none" stroke="var(--color-brand-yellow-500)" strokeWidth="1.5" style={{ animation: "pulse-ring-once 1000ms var(--ease-out) forwards 500ms", transformOrigin: "100 100" }}/>
          
          {/* Shuttle (moto) */}
          <g className="shuttle" style={{ transformOrigin: "center", animation: "shuttle-once 1500ms var(--ease-out) forwards" }}>
            <foreignObject x="80" y="80" width="48" height="48">
              <MotoIcon style={{ color: "var(--color-brand-yellow-500)", filter: "drop-shadow(0 4px 12px rgba(255,236,1,0.5))", opacity: 0 }} />
            </foreignObject>
          </g>
          
          {/* Roundtrip moto */}
          <g className="roundtrip" style={{ transformOrigin: "center", animation: "roundtrip-once 1500ms var(--ease-out) forwards 800ms" }}>
            <foreignObject x="100" y="100" width="36" height="36">
              <MotoIcon style={{ color: "var(--color-white)", opacity: 0, filter: "drop-shadow(0 2px 8px rgba(9,80,246,0.5))" }} />
            </foreignObject>
          </g>
        </svg>
      </div>
    </PageHero>
  );
}