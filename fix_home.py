# Update home.html to fix hero ping scale(2) issue
import re

path = r"C:\Users\prest\proyectos\Envíos0DosRuedasdiseñooctubre\source\home.html"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

# Fix the ping circle (line 72) - replace scale(2) infinite with scale(0.95) single-shot
old_ping = """<symbol id="i3"><circle cx="1050" cy="320" r="80" fill="none" stroke="var(--color-brand-yellow-500)" stroke-width="1.5" class="motion-safe:animate-ping [animation-duration:4s]"></circle><circle cx="1050" cy="320" r="180" fill="none" stroke="var(--color-brand-yellow-500)" stroke-width="1" stroke-dasharray="4 8"></circle><circle cx="1050" cy="320" r="300" fill="none" stroke="var(--color-brand-blue-300}" stroke-width="0.75" stroke-dasharray="6 12"></circle><circle cx="1050" cy="320" r="6" fill="var(--color-brand-yellow-500)"></circle></symbol>"""

new_ping = """<symbol id="i3"><circle cx="1050" cy="320" r="80" fill="none" stroke="var(--color-brand-yellow-500)" stroke-width="1.5" style="transform-origin: center; animation: ping-once 600ms var(--ease-out) forwards; opacity: 0;"></circle><circle cx="1050" cy="320" r="180" fill="none" stroke="var(--color-brand-yellow-500)" stroke-width="1" stroke-dasharray="4 8"></circle><circle cx="1050" cy="320" r="300" fill="none" stroke="var(--color-brand-blue-300)" stroke-width="0.75" stroke-dasharray="6 12"></circle><circle cx="1050" cy="320" r="6" fill="var(--color-brand-yellow-500)"></circle></symbol>"""

content = content.replace(old_ping, new_ping)

# Also fix the float-slow and floaty blobs - these are in the JSX part of HomeScreen.jsx
# Let me also check if there are other instances

# Write the updated file
with open(path, "w", encoding="utf-8") as f:
    f.write(content)

print("home.html updated - ping circle fixed")