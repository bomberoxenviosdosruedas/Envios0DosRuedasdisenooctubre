# Update HeroAnimated.jsx to fix infinite animations
import re

path = r"C:\Users\prest\proyectos\Envíos0DosRuedasdiseñooctubre\ui_kits\website\components\blocks\HeroAnimated.jsx"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace the entire style block with fixed animations (single-shot, not infinite)
old_style = """        <style>{`
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
            `}</style>"""

new_style = """        <style>{`
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
            `}</style>"""

content = content.replace(old_style, new_style)

# Fix blob 1 - single shot
old_blob1 = """        {/* Blob 1: top-right glow */}
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
        }}></div>"""

new_blob1 = """        {/* Blob 1: top-right glow - single shot */}
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
        }}></div>"""

content = content.replace(old_blob1, new_blob1)

# Fix blob 2 - single shot
old_blob2 = """        {/* Blob 2: bottom-left glow */}
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
        }}></div>"""

new_blob2 = """        {/* Blob 2: bottom-left glow - single shot */}
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
        }}></div>"""

content = content.replace(old_blob2, new_blob2)

# Fix radar sweep - single shot
old_radar = """        {/* Radar sweep - centered on aside area */}
        <svg style={{
          position: "absolute",
          right: "5%",
          top: "20%",
          width: 280px",
          height: 280px",
          opacity: 0.15,
        }} viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">"""

new_radar = """        {/* Radar sweep - centered on aside area - single shot */}
        <svg style={{
          position: "absolute",
          right: "5%",
          top: "20%",
          width: "280px",
          height: "280px",
          opacity: 0.15,
        }} viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">"""

content = content.replace(old_radar, new_radar)

# Fix radar sweep animation
old_radar_sweep = """            {/* Radar sweep line */}
            <g className="radar-sweep" style={{ transformOrigin: "100 100", animation: "radar-rotate 6s linear infinite" }}>
              <path d="M100 100 L100 10" stroke="var(--color-brand-yellow-500)" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
              <path d="M100 100 L100 10" stroke="var(--color-brand-yellow-500)" strokeWidth="1" strokeLinecap="round" opacity="0.3" style={{ transform: "rotate(120deg)", transformOrigin: "100 100" }}/>
              <path d="M100 100 L100 10" stroke="var(--color-brand-yellow-500)" strokeWidth="1" strokeLinecap="round" opacity="0.3" style={{ transform: "rotate(240deg)", transformOrigin: "100 100" }}/>
            </g>"""

new_radar_sweep = """            {/* Radar sweep line - single shot */}
            <g className="radar-sweep" style={{ transformOrigin: "100 100", animation: "radar-rotate-once 1200ms var(--ease-out) forwards" }}>
              <path d="M100 100 L100 10" stroke="var(--color-brand-yellow-500)" strokeWidth="2" strokeLinecap="round" opacity="0"/>
              <path d="M100 100 L100 10" stroke="var(--color-brand-yellow-500)" strokeWidth="1" strokeLinecap="round" opacity="0" style={{ transform: "rotate(120deg)", transformOrigin: "100 100" }}/>
              <path d="M100 100 L100 10" stroke="var(--color-brand-yellow-500)" strokeWidth="1" strokeLinecap="round" opacity="0" style={{ transform: "rotate(240deg)", transformOrigin: "100 100" }}/>
            </g>"""

content = content.replace(old_radar_sweep, new_radar_sweep)

# Fix radar rings - single shot
old_radar_rings = """            {/* Radar rings */}
            <circle className="radar-ring" cx="100" cy="100" r="90" fill="none" stroke="var(--color-brand-yellow-500)" strokeWidth="1.5" strokeDasharray="565" strokeDashoffset="0" style={{ animation: "radar-ring 3s ease-out infinite", transformOrigin: "100 100" }}/>
            <circle className="radar-ring" cx="100" cy="100" r="90" fill="none" stroke="var(--color-brand-yellow-500)" strokeWidth="1" strokeDasharray="565" strokeDashoffset="282" style={{ animation: "radar-ring 3s ease-out infinite 1.5s", transformOrigin: "100 100" }}/>"""

new_radar_rings = """            {/* Radar rings - single shot */}
            <circle className="radar-ring" cx="100" cy="100" r="90" fill="none" stroke="var(--color-brand-yellow-500)" strokeWidth="1.5" strokeDasharray="565" strokeDashoffset="565" style={{ animation: "radar-ring-once 1000ms var(--ease-out) forwards", transformOrigin: "100 100" }}/>
            <circle className="radar-ring" cx="100" cy="100" r="90" fill="none" stroke="var(--color-brand-yellow-500)" strokeWidth="1" strokeDasharray="565" strokeDashoffset="565" style={{ animation: "radar-ring-once 1000ms var(--ease-out) forwards 400ms", transformOrigin: "100 100" }}/>"""

content = content.replace(old_radar_rings, new_radar_rings)

# Fix pulse rings - single shot
old_pulse_rings = """            {/* Pulse rings */}
            <circle className="pulse-ring" cx="100" cy="100" r="10" fill="none" stroke="var(--color-brand-yellow-500)" strokeWidth="2" style={{ animation: "pulse-ring 3.2s cubic-bezier(0.16,1,0.3,1) infinite" }}/>
            <circle className="pulse-ring" cx="100" cy="100" r="10" fill="none" stroke="var(--color-brand-yellow-500)" strokeWidth="1.5" style={{ animation: "pulse-ring 3.2s cubic-bezier(0.16,1,0.3,1) infinite 1.6s" }}/>"""

new_pulse_rings = """            {/* Pulse rings - single shot */}
            <circle className="pulse-ring" cx="100" cy="100" r="10" fill="none" stroke="var(--color-brand-yellow-500)" strokeWidth="2" style={{ animation: "pulse-ring-once 1000ms var(--ease-out) forwards", transformOrigin: "100 100" }}/>
            <circle className="pulse-ring" cx="100" cy="100" r="10" fill="none" stroke="var(--color-brand-yellow-500)" strokeWidth="1.5" style={{ animation: "pulse-ring-once 1000ms var(--ease-out) forwards 500ms", transformOrigin: "100 100" }}/>"""

content = content.replace(old_pulse_rings, new_pulse_rings)

# Fix shuttle - single shot
old_shuttle = """            {/* Shuttle (moto) */}
            <g className="shuttle" style={{ transformOrigin: "center", animation: "shuttle 5s cubic-bezier(0.16,1,0.3,1) infinite alternate" }}>
              <foreignObject x="80" y="80" width="48" height="48">
                <MotoIcon style={{ color: "var(--color-brand-yellow-500)", filter: "drop-shadow(0 4px 12px rgba(255,236,1,0.5))" }} />
              </foreignObject>
            </g>"""

new_shuttle = """            {/* Shuttle (moto) - single shot */}
            <g className="shuttle" style={{ transformOrigin: "center", animation: "shuttle-once 1500ms var(--ease-out) forwards" }}>
              <foreignObject x="80" y="80" width="48" height="48">
                <MotoIcon style={{ color: "var(--color-brand-yellow-500)", filter: "drop-shadow(0 4px 12px rgba(255,236,1,0.5))", opacity: 0 }} />
              </foreignObject>
            </g>"""

content = content.replace(old_shuttle, new_shuttle)

# Fix roundtrip - single shot
old_roundtrip = """            {/* Roundtrip moto */}
            <g className="roundtrip" style={{ transformOrigin: "center", animation: "roundtrip 4.8s cubic-bezier(0.16,1,0.3,1) infinite" }}>
              <foreignObject x="100" y="100" width="36" height="36">
                <MotoIcon style={{ color: "var(--color-white)", opacity: 0.7, filter: "drop-shadow(0 2px 8px rgba(9,80,246,0.5))" }} />
              </foreignObject>
            </g>"""

new_roundtrip = """            {/* Roundtrip moto - single shot */}
            <g className="roundtrip" style={{ transformOrigin: "center", animation: "roundtrip-once 1500ms var(--ease-out) forwards 800ms" }}>
              <foreignObject x="100" y="100" width="36" height="36">
                <MotoIcon style={{ color: "var(--color-white)", opacity: 0, filter: "drop-shadow(0 2px 8px rgba(9,80,246,0.5))" }} />
              </foreignObject>
            </g>"""

content = content.replace(old_roundtrip, new_roundtrip)

# Write the updated file
with open(path, "w", encoding="utf-8") as f:
    f.write(content)

print("HeroAnimated.jsx updated - all infinite animations converted to single-shot")