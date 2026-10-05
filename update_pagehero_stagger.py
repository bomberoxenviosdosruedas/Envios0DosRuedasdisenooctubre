# Update PageHero.jsx to use stagger token value
path = r"C:\Users\prest\proyectos\Envíos0DosRuedasdiseñooctubre\ui_kits\website\components\blocks\PageHero.jsx"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

# Update stagger delay to 40ms (matching --stagger-base token)
old_stagger = """import React from "react";
/** Hero de p\u00e1gina: azul-500 o amarillo-500 (\u00fanica regla de hero), grilla punteada 48px, blobs con blur y columna aside (lg:7/5). */
const staggerDelay = 60; // ms between each child"""

new_stagger = """import React from "react";
/** Hero de p\u00e1gina: azul-500 o amarillo-500 (\u00fanica regla de hero), grilla punteada 48px, blobs con blur y columna aside (lg:7/5). */
const staggerDelay = 40; // ms between each child (matches --stagger-base token)"""

content = content.replace(old_stagger, new_stagger)

with open(path, "w", encoding="utf-8") as f:
    f.write(content)

print("PageHero.jsx updated with stagger token value")