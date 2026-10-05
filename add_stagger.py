# Add stagger token to motion.css
path = r"C:\Users\prest\proyectos\Envíos0DosRuedasdiseñooctubre\tokens\motion.css"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

# Add stagger token after durations
old_durations = """/* Duraciones (verificado) */
--duration-fast:.15s;/* @kind other */--duration-base:.2s;/* @kind other */--duration-cta:.25s;/* @kind other */--duration-slow:.3s;/* @kind other */--duration-kinetic:.4s;/* @kind other */--duration-carousel:.6s;/* @kind other */"""

new_durations = """/* Duraciones (verificado) */
--duration-fast:.15s;/* @kind other */--duration-base:.2s;/* @kind other */--duration-cta:.25s;/* @kind other */--duration-slow:.3s;/* @kind other */--duration-kinetic:.4s;/* @kind other */--duration-carousel:.6s;/* @kind other */--stagger-base:40ms;/* @kind other */"""

content = content.replace(old_durations, new_durations)

with open(path, "w", encoding="utf-8") as f:
    f.write(content)

print("stagger token added to motion.css")