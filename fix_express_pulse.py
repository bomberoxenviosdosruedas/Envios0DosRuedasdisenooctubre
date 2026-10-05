# Fix animate-pulse in servicios-envios-express.html
path = r"C:\Users\prest\proyectos\Envíos0DosRuedasdiseñooctubre\source\servicios-envios-express.html"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

# Fix the pulse animation - change from infinite to single-shot
old_pulse = '''<symbol id="i3"><path d="M -100 450 Q 400 200 900 380 T 1600 150" fill="none" stroke="var(--color-brand-yellow-500)" stroke-width="2.5" stroke-dasharray="12 16" class="motion-safe:animate-pulse"/><path d="M -100 300 Q 500 480 1000 250 T 1600 350" fill="none" stroke="var(--color-brand-blue-300)" stroke-width="1.5" stroke-dasharray="8 12"/><circle cx="450" cy="240" r="4" fill="var(--color-brand-yellow-500)"/><circle cx="950" cy="360" r="5" fill="var(--color-brand-yellow-500)"/></symbol>'''

new_pulse = '''<symbol id="i3"><path d="M -100 450 Q 400 200 900 380 T 1600 150" fill="none" stroke="var(--color-brand-yellow-500)" stroke-width="2.5" stroke-dasharray="12 16" style="opacity: 0; animation: pulse-once 1000ms var(--ease-out) forwards;"/><path d="M -100 300 Q 500 480 1000 250 T 1600 350" fill="none" stroke="var(--color-brand-blue-300)" stroke-width="1.5" stroke-dasharray="8 12"/><circle cx="450" cy="240" r="4" fill="var(--color-brand-yellow-500)"/><circle cx="950" cy="360" r="5" fill="var(--color-brand-yellow-500)"/></symbol>'''

content = content.replace(old_pulse, new_pulse)

with open(path, "w", encoding="utf-8") as f:
    f.write(content)

print("servicios-envios-express.html: animate-pulse fixed")