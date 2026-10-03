import os

path = r"C:\Users\prest\proyectos\Envíos0DosRuedasdiseñooctubre\source\nosotros-preguntas-frecuentes.html"

with open("template_faq.txt", "r", encoding="utf-8") as f:
    content = f.read()

with open(path, "w", encoding="utf-8") as f:
    f.write(content)
print("Done")