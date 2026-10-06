import re

with open(r"C:\Users\prest\proyectos\enviosdosruedasdisenooctubre\static_output\home.html", "r", encoding="utf-8") as f:
    content = f.read()

imports = re.findall(r'import\s+.*?from\s+[\'\"].*?[\'\"]', content)
for imp in imports[:20]:
    print(f"Import: {imp}")
if len(imports) > 20:
    print(f"... and {len(imports) - 20} more")