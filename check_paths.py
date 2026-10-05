# Check for absolute paths
with open(r"C:\Users\prest\proyectos\Envíos0DosRuedasdiseñooctubre\static_output\home.html", "r", encoding="utf-8") as f:
    content = f.read()

if 'url("/fonts/' in content:
    print("Still has absolute font paths")
else:
    print("Font paths fixed")

# Check for other absolute paths
import re
urls = re.findall(r'url\([\'\"](/[^\'\"]+)[\'\"]\)', content)
for u in urls:
    print(f"  Absolute URL: {u}")

srcs = re.findall(r'src=[\'\"](/[^\'\"]+)[\'\"]', content)
for s in srcs:
    print(f"  Absolute src: {s}")