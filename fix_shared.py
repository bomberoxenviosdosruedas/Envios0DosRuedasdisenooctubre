import os

path = r"C:\Users\prest\proyectos\Envíos0DosRuedasdiseñooctubre\ui_kits\website\shared.jsx"

# Read the current file
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

# The issue is the clamp() function in inline styles causing Babel parser error
# Replace clamp() with fixed values
content = content.replace(
    'fontSize: "clamp(1.75rem,3.5vw,2.25rem)"',
    'fontSize: "2.25rem"'
)

# Write the fixed content
with open(path, "w", encoding="utf-8") as f:
    f.write(content)
print("Fixed shared.jsx")