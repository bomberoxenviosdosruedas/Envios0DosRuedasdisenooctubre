#!/usr/bin/env python3
"""
Fix absolute paths in static HTML files for file:// protocol.
"""
from pathlib import Path

OUTPUT = Path(r"C:\Users\prest\proyectos\Envíos0DosRuedasdiseñooctubre\static_output")

html_files = list(OUTPUT.glob("*.html"))

for html_file in html_files:
    content = html_file.read_text(encoding="utf-8")
    
    # Fix font-face URLs: /fonts/ -> ../public/fonts/ (for home.html at root)
    # For servicios/ and nosotros/ pages: ../../public/fonts/
    
    if "servicios-" in html_file.name or "nosotros-" in html_file.name:
        font_prefix = "../../public/fonts/"
    else:
        font_prefix = "../public/fonts/"
    
    # Fix @font-face src URLs
    content = content.replace('url("/fonts/', f'url("{font_prefix}')
    
    # Also fix any other absolute paths that might break
    # The preload links should already be correct with relative paths
    
    html_file.write_text(content, encoding="utf-8")
    print(f"Fixed: {html_file.name}")

print("Done!")