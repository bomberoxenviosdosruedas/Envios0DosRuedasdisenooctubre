import os
path = r"C:\Users\prest\proyectos\Envíos0DosRuedasdiseñooctubre\ui_kits\website\shared.jsx"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()
print("Fixed clamp:", "clamp(" not in content)
print("Has fixed fontSize:", 'fontSize: "2.25rem"' in content)