import re
from pathlib import Path

OUTPUT = Path(r"C:\Users\prest\proyectos\enviosdosruedasdisenooctubre\static_output")

for html_file in OUTPUT.glob("*.html"):
    content = html_file.read_text(encoding="utf-8")
    
    # Fix @font-face URLs: /fonts/ -> relative path
    # For home.html, contacto.html at root level: ../public/fonts/
    # For servicios/ and nosotros/: ../../public/fonts/
    if "servicios-" in html_file.name or "nosotros-" in html_file.name:
        font_prefix = "../../public/fonts/"
    else:
        font_prefix = "../public/fonts/"
    
    # Fix @font-face src URLs
    content = content.replace('url("/fonts/', f'url("{font_prefix}')
    
    html_file.write_text(content, encoding="utf-8")
    print(f"Fixed: {html_file.name}")

print("Done!")