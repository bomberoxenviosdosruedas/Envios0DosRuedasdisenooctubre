# Fix remaining animation references in HeroAnimated.jsx
path = r"C:\Users\prest\proyectos\Envíos0DosRuedasdiseñooctubre\ui_kits\website\components\blocks\HeroAnimated.jsx"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

# Fix radar sweep
content = content.replace(
    'animation: "radar-rotate 6s linear infinite"',
    'animation: "radar-rotate-once 1200ms var(--ease-out) forwards"'
)

content = content.replace(
    'opacity="0.6"/>',
    'opacity="0"/>'
)

content = content.replace(
    'opacity="0.3" style={{ transform: "rotate(120deg)", transformOrigin: "100 100" }}/>',
    'opacity="0" style={{ transform: "rotate(120deg)", transformOrigin: "100 100" }}/>'
)

content = content.replace(
    'opacity="0.3" style={{ transform: "rotate(240deg)", transformOrigin: "100 100" }}/>',
    'opacity="0" style={{ transform: "rotate(240deg)", transformOrigin: "100 100" }}/>'
)

# Fix radar rings
content = content.replace(
    'style={{ animation: "radar-ring 3s ease-out infinite", transformOrigin: "100 100" }}/>',
    'style={{ animation: "radar-ring-once 1000ms var(--ease-out) forwards", transformOrigin: "100 100" }}/>'
)

content = content.replace(
    'strokeDashoffset="0"',
    'strokeDashoffset="565"'
)

content = content.replace(
    'strokeDashoffset="282" style={{ animation: "radar-ring 3s ease-out infinite 1.5s", transformOrigin: "100 100" }}/>',
    'strokeDashoffset="565" style={{ animation: "radar-ring-once 1000ms var(--ease-out) forwards 400ms", transformOrigin: "100 100" }}/>'
)

# Fix pulse rings
content = content.replace(
    'style={{ animation: "pulse-ring 3.2s cubic-bezier(0.16,1,0.3,1) infinite" }}/>',
    'style={{ animation: "pulse-ring-once 1000ms var(--ease-out) forwards", transformOrigin: "100 100" }}/>'
)

content = content.replace(
    'style={{ animation: "pulse-ring 3.2s cubic-bezier(0.16,1,0.3,1) infinite 1.6s" }}/>',
    'style={{ animation: "pulse-ring-once 1000ms var(--ease-out) forwards 500ms", transformOrigin: "100 100" }}/>'
)

# Fix shuttle
content = content.replace(
    'style={{ transformOrigin: "center", animation: "shuttle 5s cubic-bezier(0.16,1,0.3,1) infinite alternate" }}>',
    'style={{ transformOrigin: "center", animation: "shuttle-once 1500ms var(--ease-out) forwards" }}>'
)

content = content.replace(
    '<MotoIcon style={{ color: "var(--color-brand-yellow-500)", filter: "drop-shadow(0 4px 12px rgba(255,236,1,0.5))" }} />',
    '<MotoIcon style={{ color: "var(--color-brand-yellow-500)", filter: "drop-shadow(0 4px 12px rgba(255,236,1,0.5))", opacity: 0 }} />'
)

# Fix roundtrip
content = content.replace(
    'style={{ transformOrigin: "center", animation: "roundtrip 4.8s cubic-bezier(0.16,1,0.3,1) infinite" }}>',
    'style={{ transformOrigin: "center", animation: "roundtrip-once 1500ms var(--ease-out) forwards 800ms" }}>'
)

content = content.replace(
    '<MotoIcon style={{ color: "var(--color-white)", opacity: 0.7, filter: "drop-shadow(0 2px 8px rgba(9,80,246,0.5))" }} />',
    '<MotoIcon style={{ color: "var(--color-white)", opacity: 0, filter: "drop-shadow(0 2px 8px rgba(9,80,246,0.5))" }} />'
)

with open(path, "w", encoding="utf-8") as f:
    f.write(content)

print("HeroAnimated.jsx fixed - all infinite animations converted to single-shot")