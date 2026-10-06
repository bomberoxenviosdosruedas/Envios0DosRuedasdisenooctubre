#!/usr/bin/env python3
"""
Build static HTML files that work via file:// protocol.
Uses pre-compiled bundle components + shared.jsx, avoids imports.
"""
import os
import re
import sys
from pathlib import Path

ROOT = Path(r"C:\Users\prest\proyectos\enviosdosruedasdisenooctubre")
SOURCE = ROOT / "source"
UI_KITS = ROOT / "ui_kits" / "website"
TOKENS = ROOT / "tokens"
ASSETS = ROOT / "assets"
OUTPUT = ROOT / "static_output"

OUTPUT.mkdir(exist_ok=True)

def read_tokens_css():
    css_files = [
        "fonts.css", "base.css", "colors.css", "typography.css",
        "spacing.css", "radius.css", "shadows.css", "motion.css"
    ]
    combined = []
    for f in css_files:
        path = TOKENS / f
        if path.exists():
            combined.append(f"/* {f} */")
            combined.append(path.read_text(encoding="utf-8"))
        else:
            print(f"Warning: {path} not found")
    return "\n".join(combined)

def read_file(path):
    if path.exists():
        return path.read_text(encoding="utf-8")
    return ""

# Read all local files once
print("Reading local files...")
ds_bundle = read_file(ROOT / "_ds_bundle.js")
print(f"  _ds_bundle.js: {len(ds_bundle)} chars")

shared_jsx = read_file(UI_KITS / "shared.jsx")
print(f"  shared.jsx: {len(shared_jsx)} chars")

home_jsx = read_file(UI_KITS / "HomeScreen.jsx")
print(f"  HomeScreen.jsx: {len(home_jsx)} chars")

servicio_jsx = read_file(UI_KITS / "ServicioScreen.jsx")
print(f"  ServicioScreen.jsx: {len(servicio_jsx)} chars")

# Read page screens
nosotros_screen = read_file(UI_KITS / "NosotrosScreen.jsx")
contacto_screen = read_file(UI_KITS / "ContactoScreen.jsx")
redes_screen = read_file(UI_KITS / "RedesScreen.jsx")
faq_screen = read_file(UI_KITS / "FaqScreen.jsx")
emprendedores_screen = read_file(UI_KITS / "EmprendedoresScreen.jsx")
empresas_screen = read_file(UI_KITS / "EmpresasScreen.jsx")
contrareembolso_screen = read_file(UI_KITS / "ContrareembolsoScreen.jsx")
cotizador_screen = read_file(UI_KITS / "CotizadorScreen.jsx")

tokens_css = read_tokens_css()
print(f"  tokens CSS: {len(tokens_css)} chars")

# Process each HTML file
html_files = [f.name for f in SOURCE.iterdir() if f.suffix == ".html" and f.name != "DESIGN-AUDIT.md"]

print(f"\nProcessing {len(html_files)} HTML files...")
for html_file in html_files:
    if "servicios-" in html_file:
        screen_component = "ServicioScreen"
    elif "nosotros-sobre" in html_file:
        screen_component = "NosotrosScreen"
    elif "nosotros-redes" in html_file:
        screen_component = "RedesScreen"
    elif "nosotros-preguntas" in html_file:
        screen_component = "FaqScreen"
    elif "contacto" in html_file:
        screen_component = "ContactoScreen"
    else:
        screen_component = "HomeScreen"
    
    html_path = SOURCE / html_file
    content = html_path.read_text(encoding="utf-8")
    
    # Extract meta tags
    title_match = re.search(r'<title>(.*?)</title>', content)
    title = title_match.group(1) if title_match else "Envíos DosRuedas"
    
    desc_match = re.search(r'<meta name="description" content="([^"]*)"', content)
    description = desc_match.group(1) if desc_match else ""
    
    canonical_match = re.search(r'<link rel="canonical" href="([^"]*)"', content)
    canonical = canonical_match.group(1) if canonical_match else "https://www.enviosdosruedas.com"
    
    og_title_match = re.search(r'<meta property="og:title" content="([^"]*)"', content)
    og_title = og_title_match.group(1) if og_title_match else title
    
    og_desc_match = re.search(r'<meta property="og:description" content="([^"]*)"', content)
    og_description = og_desc_match.group(1) if og_desc_match else description
    
    og_url_match = re.search(r'<meta property="og:url" content="([^"]*)"', content)
    og_url = og_url_match.group(1) if og_url_match else canonical
    
    # Extract the inline App script (the last script type="text/babel")
    scripts = re.findall(r'<script type="text/babel">\s*(.*?)\s*</script>', content, re.DOTALL)
    app_script = scripts[-1] if scripts else ""
    
    # Fix the App script to use correct component names from bundle
    # Bundle has: SiteHeader, SiteFooter (NOT OptimizedHeader, OptimizedFooter)
    # Social is defined in shared.jsx
    # MobileNav, SocialCarousel, HeroAnimated, etc. are NOT in bundle
    app_script = app_script.replace(
        'const { OptimizedHeader, OptimizedFooter, Social } = window.EnvOsDosRuedasDesignSystem_ced708;',
        'const { SiteHeader: OptimizedHeader, SiteFooter: OptimizedFooter } = window.EnvOsDosRuedasDesignSystem_ced708;'
    )
    
    # Determine asset prefixes
    if "servicios-" in html_file or "nosotros-" in html_file:
        asset_prefix = "../../"
    else:
        asset_prefix = "../"
    
    new_html = f"""<!DOCTYPE html>
<html lang="es" class="scroll-smooth" data-scroll-behavior="smooth">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<meta name="description" content="{description}">
<link rel="canonical" href="{canonical}">
<meta name="robots" content="index, follow">
<meta name="theme-color" content="#0950F6">
<link rel="icon" href="{asset_prefix}assets/logo-envios-simplified.webp" type="image/webp">
<meta property="og:type" content="website">
<meta property="og:locale" content="es_AR">
<meta property="og:site_name" content="Envíos DosRuedas">
<meta property="og:title" content="{og_title}">
<meta property="og:description" content="{og_description}">
<meta property="og:url" content="{og_url}">
<meta property="og:image" content="https://www.enviosdosruedas.com/og-image.jpg">
<meta name="twitter:card" content="summary_large_image">
<link rel="preload" as="font" type="font/woff2" href="{asset_prefix}public/fonts/Anton-Regular.woff2" crossorigin>
<link rel="preload" as="font" type="font/woff2" href="{asset_prefix}public/fonts/BebasNeue-Regular.woff2" crossorigin>
<link rel="preload" as="font" type="font/woff2" href="{asset_prefix}public/fonts/Outfit-VariableFont_wght.woff2" crossorigin>
<link rel="preload" as="font" type="font/woff2" href="{asset_prefix}public/fonts/GeistMono-VariableFont_wght.woff2" crossorigin>

<style>
{tokens_css}
</style>

<!-- CDN scripts - these work on file:// -->
<script src="https://unpkg.com/react@18.3.1/umd/react.development.js" crossorigin="anonymous"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" crossorigin="anonymous"></script>
<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" crossorigin="anonymous"></script>

<!-- Local scripts inlined -->
<script>
// _ds_bundle.js (pre-compiled, no imports)
{ds_bundle}
</script>

<script type="text/babel">
// shared.jsx (raw JSX - transformed by Babel standalone, no imports from bundle)
{shared_jsx}
</script>

<script type="text/babel">
// App component (uses bundle components via correct names)
{app_script}
</script>
</head>
<body class="bg-white text-brand-blue-500 font-sans antialiased selection:bg-brand-yellow-500 selection:text-brand-blue-500 min-h-dvh flex flex-col">
<div id="root"></div>
</body>
</html>"""
    
    out_path = OUTPUT / html_file
    out_path.write_text(new_html, encoding="utf-8")
    print(f"  [OK] {html_file}")

print(f"\nDone! Static files in: {OUTPUT}")
print("Open any .html file directly in browser (file:// works)")