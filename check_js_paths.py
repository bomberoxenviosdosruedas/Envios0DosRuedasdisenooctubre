# Check for absolute paths in inlined JS
with open(r"C:\Users\prest\proyectos\Envíos0DosRuedasdiseñooctubre\static_output\home.html", "r", encoding="utf-8") as f:
    content = f.read()

# Check for absolute paths in JS strings
import re
abs_paths = re.findall(r'[\'\"](/[a-zA-Z0-9_\-./]+)[\'\"]', content)
for p in abs_paths[:20]:
    print(f"  {p}")

if len(abs_paths) > 20:
    print(f"  ... and {len(abs_paths) - 20} more")