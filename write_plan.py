import os

path = r"C:\Users\prest\proyectos\Envíos0DosRuedasdiseñooctubre\source\servicios-plan-emprendedores.html"

# Read the template content
with open("template_plan.txt", "r", encoding="utf-8") as f:
    content = f.read()

# Write the updated file
with open(path, "w", encoding="utf-8") as f:
    f.write(content)
print("Done")