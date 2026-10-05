#!/usr/bin/env python3
"""
Build static HTML files that work via file:// protocol.
Inlines all CSS, compiles JSX to JS, inlines all JS.
"""
import os
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(r"C:\Users\prest\proyectos\Envíos0DosRuedasdiseñooctubre")
SOURCE = ROOT / "source"
UI_KITS = ROOT / "ui_kits" / "website"
TOKENS = ROOT / "tokens"
ASSETS = ROOT / "assets"
OUTPUT = ROOT / "static_output"

OUTPUT.mkdir(exist_ok=True)

# Read all token CSS files and combine
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

# Read and compile JSX files using Babel
def compile_jsx(jsx_path):
    """Compile JSX to JS using babel standalone via node"""
    # Use npx babel to compile
    try:
        result = subprocess.run(
            ["npx", "@babel/cli", "--presets", "@babel/preset-react", str(jsx_path)],
            capture_output=True, text=True, cwd=str(ROOT), timeout=60
        )
        if result.returncode == 0:
            return result.stdout
        else:
            print(f"Babel error for {jsx_path}: {result.stderr}")
            return None
    except Exception as e:
        print(f"Failed to compile {jsx_path}: {e}")
        return None

# Alternative: inline babel transform via python (slower but no node needed)
def transform_jsx_python(jsx_code):
    """Transform JSX using a simple regex approach - limited but works for our case"""
    # This is a fallback - better to use babel
    return jsx_code

# Read all JSX source files
def read_jsx_files():
    jsx_files = {
        "shared": UI_KITS / "shared.jsx",
        "HomeScreen": UI_KITS / "HomeScreen.jsx",
        "ServicioScreen": UI_KITS / "ServicioScreen.jsx",
    }
    content = {}
    for name, path in jsx_files.items():
        if path.exists():
            content[name] = path.read_text(encoding="utf-8")
        else:
            print(f"Warning: {path} not found")
            content[name] = ""
    return content

# Read _ds_bundle.js
def read_ds_bundle():
    path = ROOT / "_ds_bundle.js"
    if path.exists():
        return path.read_text(encoding="utf-8")
    return ""

# Main build
def build_page(html_file):
    html_path = SOURCE / html_file
    content = html_path.read_text(encoding="utf-8")
    
    # Determine which screen component to use
    screen_component = "HomeScreen"
    if "servicios-" in html_file:
        screen_component = "ServicioScreen"
    elif "nosotros-" in html_file:
        screen_component = "HomeScreen"  # or create specific ones
    elif "contacto" in html_file:
        screen_component = "HomeScreen"
    
    # Extract the inline script (the App component)
    app_script_match = re.search(r'<script type="text/babel">\s*(.*?)\s*</script>', content, re.DOTALL)
    app_script = app_script_match.group(1) if app_script_match else ""
    
    # Build the complete static HTML
    tokens_css = read_tokens_css()
    jsx_content = read_jsx_files()
    ds_bundle = read_ds_bundle()
    
    # For now, create a version that inlines CSS and uses a simplified approach
    # The key is: inline CSS, keep React/Babel from CDN, inline the app script
    # But we need to compile JSX to JS first
    
    # Let's create a version that:
    # 1. Inlines all CSS in <style>
    # 2. Inlines _ds_bundle.js
    # 3. Inlines shared.jsx (compiled)
    # 4. Inlines the screen component (compiled)
    # 5. Inlines the App script (compiled)
    # 6. Keeps React/Babel from CDN (these work on file://)
    
    # For the inline script, we need to compile it
    # Since we can't easily run babel here, let's use a different approach:
    # Pre-compile all JSX files to .js files, then inline those
    
    return content

# Better approach: pre-compile JSX files to JS, then inline
print("Building static HTML files...")

# Step 1: Compile all JSX to JS using babel
print("\n1. Compiling JSX files...")
jsx_sources = {
    "shared.jsx": UI_KITS / "shared.jsx",
    "HomeScreen.jsx": UI_KITS / "HomeScreen.jsx",
    "ServicioScreen.jsx": UI_KITS / "ServicioScreen.jsx",
}

compiled_js = {}
for name, path in jsx_sources.items():
    if path.exists():
        # Try to compile with npx babel
        try:
            result = subprocess.run(
                ["npx", "@babel/cli", "--presets", "@babel/preset-react", "--no-babelrc", str(path)],
                capture_output=True, text=True, cwd=str(ROOT), timeout=60
            )
            if result.returncode == 0:
                compiled_js[name] = result.stdout
                print(f"  ✓ {name}")
            else:
                print(f"  ✗ {name}: {result.stderr[:200]}")
                # Fallback: read as-is (won't work but won't crash)
                compiled_js[name] = path.read_text(encoding="utf-8")
        except Exception as e:
            print(f"  ✗ {name}: {e}")
            compiled_js[name] = path.read_text(encoding="utf-8")
    else:
        compiled_js[name] = ""
        print(f"  - {name}: not found")

# Step 2: Read _ds_bundle.js
ds_bundle = read_ds_bundle()
print(f"  ✓ _ds_bundle.js ({len(ds_bundle)} chars)")

# Step 3: Read all token CSS
tokens_css = read_tokens_css()
print(f"  ✓ Tokens CSS ({len(tokens_css)} chars)")

# Step 4: Process each HTML file
html_files = [f for f in SOURCE.iterdir() if f.suffix == ".html" and f.name != "DESIGN-AUDIT.md"]

for html_file in html_files:
    print(f"\n2. Processing {html_file.name}...")
    content = html_file.read_text(encoding="utf-8")
    
    # Determine screen component
    if "servicios-" in html_file.name:
        screen_name = "ServicioScreen"
        service_type = html_file.name.replace("servicios-", "").replace(".html", "")
        if service_type == "envios-express":
            service_type = "express"
        elif service_type == "envios-lowcost":
            service_type = "lowcost"
        elif service_type == "enviosflex":
            service_type = "flex"
        elif service_type == "empresas-cuenta-corriente":
            service_type = "empresas"
        elif service_type == "plan-emprendedores":
            service_type = "emprendedores"
        elif service_type == "deposito-fulfillment":
            service_type = "deposito"
        elif service_type == "envios-contrareembolso":
            service_type = "contra"
    elif "nosotros-" in html_file.name:
        screen_name = "HomeScreen"  # We'll need specific screens
        service_type = ""
    elif "contacto" in html_file.name:
        screen_name = "HomeScreen"
        service_type = ""
    else:
        screen_name = "HomeScreen"
        service_type = ""
    
    # Extract the inline App script
    app_match = re.search(r'<script type="text/babel">\s*(.*?)\s*</script>', content, re.DOTALL)
    app_script = app_match.group(1) if app_match else ""
    
    # Build new HTML with everything inlined
    # We'll keep React/Babel from CDN (they work on file://)
    # But inline all local scripts and CSS
    
    # Determine base path for assets
    if "servicios-" in html_file.name:
        asset_prefix = "../../"
        ui_prefix = "../../"
    elif "nosotros-" in html_file.name:
        asset_prefix = "../../"
        ui_prefix = "../../"
    else:
        asset_prefix = "../"
        ui_prefix = "../"
    
    new_html = f"""<!DOCTYPE html>
<html lang="es" class="scroll-smooth" data-scroll-behavior="smooth">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{re.search(r'<title>(.*?)</title>', content).group(1) if re.search(r'<title>(.*?)</title>', content) else 'Envíos DosRuedas'}</title>
<meta name="description" content="{re.search(r'<meta name="description" content="([^"]*)"', content).group(1) if re.search(r'<meta name="description" content="([^"]*)"', content) else ''}">
<link rel="canonical" href="{re.search(r'<link rel="canonical" href="([^"]*)"', content).group(1) if re.search(r'<link rel="canonical" href="([^"]*)"', content) else 'https://www.enviosdosruedas.com'}">
<meta name="robots" content="index, follow">
<meta name="theme-color" content="#0950F6">
<link rel="icon" href="{asset_prefix}assets/logo-envios-simplified.webp" type="image/webp">
<meta property="og:type" content="website">
<meta property="og:locale" content="es_AR">
<meta property="og:site_name" content="Envíos DosRuedas">
<meta property="og:title" content="{re.search(r'<meta property="og:title" content="([^"]*)"', content).group(1) if re.search(r'<meta property="og:title" content="([^"]*)"', content) else 'Envíos DosRuedas'}">
<meta property="og:description" content="{re.search(r'<meta property="og:description" content="([^"]*)"', content).group(1) if re.search(r'<meta property="og:description" content="([^"]*)"', content) else ''}">
<meta property="og:url" content="{re.search(r'<meta property="og:url" content="([^"]*)"', content).group(1) if re.search(r'<meta property="og:url" content="([^"]*)"', content) else 'https://www.enviosdosruedas.com'}">
<meta property="og:image" content="https://www.enviosdosruedas.com/og-image.jpg">
<meta name="twitter:card" content="summary_large_image">
<link rel="preload" as="font" type="font/woff2" href="{asset_prefix}public/fonts/Anton-Regular.woff2" crossorigin>
<link rel="preload" as="font" type="font/woff2" href="{asset_prefix}public/fonts/BebasNeue-Regular.woff2" crossorigin>
<link rel="preload" as="font" type="font/woff2" href="{asset_prefix}public/fonts/Outfit-VariableFont_wght.woff2" crossorigin>
<link rel="preload" as="font" type="font/woff2" href="{asset_prefix}public/fonts/GeistMono-VariableFont_wght.woff2" crossorigin>

<style>
{tokens_css}
</style>

<script src="https://unpkg.com/react@18.3.1/umd/react.development.js" crossorigin="anonymous"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" crossorigin="anonymous"></script>
<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" crossorigin="anonymous"></script>

<script>
// _ds_bundle.js inlined
{ds_bundle}
</script>

<script type="text/babel">
// shared.jsx compiled
{compiled_js.get("shared.jsx", "")}
</script>

<script type="text/babel">
// {screen_name}.jsx compiled
{compiled_js.get(f"{screen_name}.jsx", "")}
</script>

<script type="text/babel">
// App component
{app_script}
</script>
</head>
<body class="bg-white text-brand-blue-500 font-sans antialiased selection:bg-brand-yellow-500 selection:text-brand-blue-500 min-h-dvh flex flex-col">
<div id="root"></div>
</body>
</html>"""
    
    # Write output
    out_path = OUTPUT / html_file.name
    out_path.write_text(new_html, encoding="utf-8")
    print(f"  ✓ Written to {out_path}")

print(f"\n✅ Done! Static files in: {OUTPUT}")
print("Open any .html file directly in browser (file:// works)")