# Add pulse-once keyframe to motion.css
path = r"C:\Users\prest\proyectos\Envíos0DosRuedasdiseñooctubre\tokens\motion.css"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

# Add pulse-once keyframe after ping-once
old_keyframes = """@keyframes ping-once{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}"""

new_keyframes = """@keyframes ping-once{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}
@keyframes pulse-once{0%{opacity:0}to{opacity:1}}"""

content = content.replace(old_keyframes, new_keyframes)

with open(path, "w", encoding="utf-8") as f:
    f.write(content)

print("pulse-once keyframe added to motion.css")