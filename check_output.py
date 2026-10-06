import re

with open(r"C:\Users\prest\proyectos\enviosdosruedasdisenooctubre\static_output\home.html", "r", encoding="utf-8") as f:
    content = f.read()

# Check font paths
urls = re.findall(r'url\([\'\"](/[^\'\"]+)[\'\"]\)', content)
for u in urls:
    print(f"Absolute URL: {u}")

srcs = re.findall(r'src=[\'\"](/[^\'\"]+)[\'\"]', content)
for s in srcs:
    print(f"Absolute src: {s}")

# Check preload links
preloads = re.findall(r'href=[\'\"](/[^\'\"]+)[\'\"]', content)
for p in preloads[:10]:
    print(f"Preload: {p}")

# Check if fonts are relative
if '../public/fonts/' in content:
    print("OK: Relative font paths found")
if '/fonts/' in content:
    print("WARNING: Absolute /fonts/ paths found")