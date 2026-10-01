# Auditoría visual: 12 páginas de Envíos DosRuedas

Alcance: `home`, `contacto`, `nosotros-*` (3) y `servicios-*` (7). Cada página es un HTML estático con Tailwind v4.3.3 compilado e inline en una sola línea (CSS en la línea 25, body en la 31). Por eso las referencias son `archivo:línea` más la clase o regla.

Método: análisis estático del CSS y HTML con scripts. **No se revisó el render en navegador**, así que la responsividad, los touch targets reales y los solapamientos quedan sin verificar.

## Puntuación (0-10)

| # | Dimensión | Nota | Resumen |
|---|-----------|------|---------|
| 1 | Consistencia de color | 6 | Paleta tokenizada, pero la escala `brand-blue` está rota y hay hex literales |
| 2 | Jerarquía tipográfica | 6 | Buena identidad (Anton/Bebas/Outfit/Geist Mono), pero hay 149 usos de texto de 9-11px |
| 3 | Ritmo de espaciado | 8 | Escala Tailwind de 0.25rem, sin anomalías |
| 4 | Consistencia de componentes | 6 | Mismo kit, pero con variantes sueltas (h1, sombras) |
| 5 | Responsive | 7 | Breakpoints sm/md/lg/xl y viewport correctos. No se verificó el render |
| 6 | Dark mode | n/a | 0 reglas `prefers-color-scheme`. Aceptable para un sitio de marca azul/amarillo |
| 7 | Animación | 6 | 16 keyframes y `prefers-reduced-motion` presente, pero hay mucho ping/pulse |
| 8 | Accesibilidad | 6 | Buen foco y ARIA, pero fallos de contraste y texto diminuto |
| 9 | Densidad de información | 7 | `home` tiene 39 h3 y 249 KB, el resto es razonable |
| 10 | Pulido | 8 | ~65-80 reglas hover por página, 432 `transition-colors`, 159 `focus-visible:ring-*` |

**Total: 60/90 (6.7 de promedio sin contar dark mode).**

## Hallazgos priorizados

### Alta prioridad

1. **La escala `--color-brand-blue-*` está colapsada** (`home.html:25`, mismo bloque `:root` en las 12).
   - `blue-700:#0950f6` es igual a `500`, `blue-800:#3570f8` es igual a `400` y `blue-900:#0950f6` es igual a `500`. No existe `600`.
   - `--color-brand-ink` apunta a `blue-900`, que es el azul base.
   - Consecuencia: no hay azul oscuro real para texto, hover ni fondos profundos. Esto explica los hex sueltos fuera de paleta `#0b5ed7` (24 usos), `#0a4fc0` (12), `#3b7bf8` (2) y `#d6e4fe` (25).
   - Arreglo: definir una rampa real, por ejemplo `700:#0742c4`, `800:#06339a`, `900:#042470`, y reemplazar los hex literales por tokens.

2. **391 usos del hex `#0950f6` en clases arbitrarias**, además de 89 de `#ffec01`, en vez de `bg-brand-blue-500` o `text-brand-yellow-500`. Si cambia la marca hay que editar 12 archivos a mano. Las páginas con más hex en clases son `nosotros-sobre-nosotros` (155), `plan-emprendedores` (149) y `deposito-fulfillment` (132).

3. **Contraste insuficiente**, calculado con WCAG:
   - `text-brand-blue-400` (`#3570f8`) sobre blanco da **4.35:1**, por debajo de AA para texto chico. Tiene 21 usos, entre ellos `home.html:31` combinado con `text-[9px]`.
   - Blanco sobre `#1877f2` (Facebook) da 4.23:1 y blanco sobre `#e1306c` (Instagram) da 4.34:1. Ambos están bajo 4.5:1 si el texto es chico (aplica a `nosotros-nuestras-redes`).
   - El amarillo `#ffec01` sobre blanco da **1.22:1**, así que solo debe usarse sobre azul. Sobre `#0950f6` da 4.94:1 y pasa. Revisar que ningún `text-brand-yellow-*` caiga sobre fondo claro (951 usos, no verificado uno por uno).

4. **Texto diminuto**: `text-[10px]` ×85, `[11px]` ×48, `[12px]` ×28, `[9px]` ×16, combinado con `uppercase` (1071 usos) y `tracking-widest` (208). Un texto de 9-10px en mayúsculas con tracking se vuelve ilegible en móvil. Piso recomendado: 12px (`text-xs`). Ya existe el token `--text-2xs:.625rem` (10px), pero se ignora a favor de valores arbitrarios.

### Prioridad media

5. **El h1 no es consistente entre páginas.**
   - `contacto`, `home` y otras usan `tracking-[-0.03em] leading-[0.9x]` con escala hasta `xl:text-7xl`.
   - `servicios-empresas-cuenta-corriente` y `servicios-envios-contrareembolso` usan `tracking-tight leading-[0.98]` y se detienen en `lg:text-6xl`.
   - `servicios-envios-express` usa `text-[clamp(2.75rem,11vw,3.5rem)] leading-[1.08]`.
   - Conviene extraer un único estilo h1 (clase o `@utility`).

6. **Sombra "brutalista" repetida como valor arbitrario** `shadow-[3px_3px_0px_var(--color-brand-blue-500)]` (×12) y `shadow-[2px_2px_0px…]` (×7). Debería ser un token (`--shadow-brutal`). Ya existe `--shadow-float`, y `--shadow-antigravity-deep` figura en el tema pero su uso no se verificó. También hay sombras con color de marca social por página (`shadow-[#1877F2]` ×24, `shadow-[#FD1D1D]`, `shadow-[#E1306C]`).

7. **`--font-sans` y `--font-mono` se referencian a sí mismas**: `--font-sans:var(--font-sans,"Outfit"), …`. Funciona gracias al fallback, pero es frágil. Lo mismo ocurre con `--font-display` y `--font-subheading`. Declarar el valor directo.

8. **El CSS está inline en cada página** (57-94 KB × 12, ~800 KB sin caché compartida). Un `styles.css` compartido se cachearía una sola vez. `home.html` es el peor caso (94 KB de CSS, 249 KB totales).

9. **Jerarquía de headings**: `home` tiene 8 h2 y 39 h3, y `plan-emprendedores` tiene 5 h2 y 17 h3. No es un error, pero conviene confirmar que ningún h3 sea solo un título visual de card sin h2 padre.

10. **Sin "skip link"** hacia `<main>`. Es barato de añadir, porque `<main>` existe en las 12 páginas.

### Prioridad baja

11. **Imágenes**: todas tienen `alt`. `servicios-envios-express.html:31` usa `alt=""` en 2 imágenes. Es correcto solo si son decorativas, y la del hero `express-moto.webp` probablemente aporta contexto. Revisar. Solo 1-5 imágenes por página tienen `width` y `height`, lo que puede generar CLS.
12. **Touch targets**: hay 67 `h-8` y 71 `w-7`, es decir 28-32px. Si son botones de icono quedan bajo los 44px recomendados. No verificable sin render.
13. **Dark mode**: no hace falta si la marca es azul/amarillo fija. Si se quiere, hay que tokenizar primero (hallazgo 1).

## Detector de "AI slop"

El sitio **no es genérico**. Hay identidad propia: tipografía Anton/Bebas en mayúsculas, azul eléctrico con amarillo y sombras brutalistas duras. El morado `#833ab4` aparece solo como color de marca de Instagram.

Tendencias a vigilar:
- `backdrop-blur*` ×194 (md ×106, base ×75, sm ×13): glassmorphism en exceso, con `blur-3xl` ×7 y `blur-2xl` ×5 como manchas decorativas.
- `bg-gradient-to-*` ×140 (b 48, r 37, br 26, tr 24, t 5).
- `rounded-full` ×602 y `rounded-2xl` ×197: casi todo es píldora o muy redondeado, lo que choca con las sombras duras brutalistas. Conviene decidir un solo lenguaje de esquinas.
- `animate-ping` ×58 y `animate-pulse` ×46: indicadores "en vivo" repetidos, más 64 usos de marquee. Mantenerlos solo donde comunican estado real.

## Orden de arreglo sugerido

1. Rampa `brand-blue` real y reemplazo de hex literales por tokens (hallazgos 1-2).
2. Piso de 12px y corrección de contraste (3-4).
3. Extraer h1, sombra brutalista y esquinas a tokens/utilidades (5-6).
4. Mover el CSS a un archivo compartido y añadir skip link (8, 10).

Sin cambios hechos en las páginas: esto es solo auditoría. Falta una pasada visual en móvil y escritorio para confirmar los puntos marcados como no verificables.

---

## Arreglos de alta prioridad aplicados (hallazgos 1-4)

Respaldo previo a los cambios: `D:\00proyectos\locales_reformados_backup_1790841087`.

- **Escala `brand-blue`:** `700`→`500` y `800`→`400` en HTML y CSS (mismo color, sin cambio visual). Rampa nueva: `600 #0a4fc0`, `700 #083aa3`, `800 #062d85`, `900 #041f63`, más `75 #d6e4fe`. `900`/`brand-ink` es ahora un azul marino real, usado **solo para texto**. Los 16 fondos `bg-brand-blue-900` volvieron a `500` para no cambiar el diseño.
- **Hex literales → tokens:** las clases `[#0950F6]`, `[#FFEC01]`, `[#FFF12E]`, `[#BACEFD]`, `[#E6EEFE]`, `[#D6E4FE]`, `[#0A4FC0]` y `[#3B7BF8]` pasaron a clases de token en HTML y CSS. Los valores hex del CSS usan `var(--color-brand-*)`.
- **Contraste:** `text-brand-blue-400` pasó a `600` (7.26:1 sobre blanco) y `--text-muted` también.
- **Texto mínimo:** `text-[9px]`, `[10px]` y `[11px]` pasaron a `text-xs` (12px).

Correcciones al informe original:
- `#0b5ed7` (Facebook) y `#1877f2`/`#e1306c`/`#833ab4`/`#fd1d1d`/`#f77737`/`#f56040` son colores de redes sociales y se dejaron literales. En los 12 archivos no hay un `bg` sólido con texto blanco encima, así que el contraste de esos colores no se tocó.
- `text-brand-blue-1000` (en `contacto` y `contrareembolso`) ya era una clase inexistente. Falta corregirla.

Verificación: llaves CSS balanceadas, sin hex ni clases viejas residuales, sin caracteres de control, y capturas antes/después en 1280px y 390px de las 12 páginas.
