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
        {/* Blob 1: top-right glow */}
        <div style={{
          position: "absolute",
          top: "-160px",
          right: "-160px",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,236,1,.18) 0%, rgba(9,80,246,.12) 50%, transparent 70%)",
          filter: "blur(90px)",
          opacity: 0.2,
          animation: "float-slow 6s ease-in-out infinite alternate",
        }}></div>

        {/* Blob 2: bottom-left glow */}
        <div style={{
          position: "absolute",
          bottom: "-200px",
          left: "20%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(9,80,246,.4) 0%, transparent 70%)",
          filter: "blur(100px)",
          opacity: 0.15,
          animation: "floaty 5s ease-in-out infinite alternate-reverse",
        }}></div>

        {/* Radar sweep - centered on aside area */}
        <svg style={{
          position: "absolute",
          right: "5%",
          top: "20%",
          width: 280px",
          height: 280px",
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
                .blob-1, .blob-2 { animation: none !important; }
              }
              @keyframes radar-rotate { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
              @keyframes radar-ring { 0% { stroke-dashoffset: 0; opacity: 0.6; } 100% { stroke-dashoffset: -1256; opacity: 0; } }
              @keyframes shuttle { 0% { transform: translate(0, 0) rotate(0deg); } 50% { transform: translate(180px, -60px) rotate(15deg); } 100% { transform: translate(0, 0) rotate(0deg); } }
              @keyframes pulse-ring { 0% { r: 10; opacity: 0.4; } 100% { r: 90; opacity: 0; } }
              @keyframes roundtrip { 0% { transform: translate(-100px, 0) rotate(-10deg); } 50% { transform: translate(100px, 0) rotate(10deg); } 100% { transform: translate(-100px, 0) rotate(-10deg); } }
              @keyframes float-slow { 0% { transform: translate(0, 0) scale(1); } 100% { transform: translate(-20px, 20px) scale(1.05); } }
              @keyframes floaty { 0% { transform: translate(0, 0) scale(1); } 100% { transform: translate(30px, -30px) scale(1.08); } }
            `}</style>
          </defs>
          
          {/* Radar sweep line */}
          <g className="radar-sweep" style={{ transformOrigin: "100 100", animation: "radar-rotate 6s linear infinite" }}>
            <path d="M100 100 L100 10" stroke="var(--color-brand-yellow-500)" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
            <path d="M100 100 L100 10" stroke="var(--color-brand-yellow-500)" strokeWidth="1" strokeLinecap="round" opacity="0.3" style={{ transform: "rotate(120deg)", transformOrigin: "100 100" }}/>
            <path d="M100 100 L100 10" stroke="var(--color-brand-yellow-500)" strokeWidth="1" strokeLinecap="round" opacity="0.3" style={{ transform: "rotate(240deg)", transformOrigin: "100 100" }}/>
          </g>
          
          {/* Radar rings */}
          <circle className="radar-ring" cx="100" cy="100" r="90" fill="none" stroke="var(--color-brand-yellow-500)" strokeWidth="1.5" strokeDasharray="565" strokeDashoffset="0" style={{ animation: "radar-ring 3s ease-out infinite", transformOrigin: "100 100" }}/>
          <circle className="radar-ring" cx="100" cy="100" r="90" fill="none" stroke="var(--color-brand-yellow-500)" strokeWidth="1" strokeDasharray="565" strokeDashoffset="282" style={{ animation: "radar-ring 3s ease-out infinite 1.5s", transformOrigin: "100 100" }}/>
          
          {/* Pulse rings */}
          <circle className="pulse-ring" cx="100" cy="100" r="10" fill="none" stroke="var(--color-brand-yellow-500)" strokeWidth="2" style={{ animation: "pulse-ring 3.2s cubic-bezier(0.16,1,0.3,1) infinite" }}/>
          <circle className="pulse-ring" cx="100" cy="100" r="10" fill="none" stroke="var(--color-brand-yellow-500)" strokeWidth="1.5" style={{ animation: "pulse-ring 3.2s cubic-bezier(0.16,1,0.3,1) infinite 1.6s" }}/>
          
          {/* Shuttle (moto) */}
          <g className="shuttle" style={{ transformOrigin: "center", animation: "shuttle 5s cubic-bezier(0.16,1,0.3,1) infinite alternate" }}>
            <foreignObject x="80" y="80" width="48" height="48">
              <MotoIcon style={{ color: "var(--color-brand-yellow-500)", filter: "drop-shadow(0 4px 12px rgba(255,236,1,0.5))" }} />
            </foreignObject>
          </g>
          
          {/* Roundtrip moto */}
          <g className="roundtrip" style={{ transformOrigin: "center", animation: "roundtrip 4.8s cubic-bezier(0.16,1,0.3,1) infinite" }}>
            <foreignObject x="100" y="100" width="36" height="36">
              <MotoIcon style={{ color: "var(--color-white)", opacity: 0.7, filter: "drop-shadow(0 2px 8px rgba(9,80,246,0.5))" }} />
            </foreignObject>
          </g>
        </svg>
      </div>
    </PageHero>
  );
}