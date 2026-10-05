---
name: Envíos DosRuedas
version: 2.0
colors:
  brand-blue-500: "#0950F6"
  brand-yellow-500: "#FFEC01"
  brand-yellow-400: "#FFF12E"
  white: "#FFFFFF"
  brand-blue-50: "#E6EEFE"
  brand-blue-75: "#D6E4FE"
  brand-blue-100: "#BACEFD"
  brand-blue-200: "#8EAFFB"
  brand-blue-300: "#628FF9"
  brand-blue-400: "#3570F8"
  brand-yellow-300: "#FFF45C"
  neutral-50: "#F8FAFC"
  error-500: "#EF4444"
  error-600: "#DC2626"
  success-500: "#16A34A"   # propuesto
  warning-500: "#F59E0B"   # propuesto
  social-whatsapp: "#25D366"
fonts:
  display: Anton (400)
  subheading: Bebas Neue (400)
  body: Outfit (100–900 variable)
  mono: Geist Mono (100–900 variable)
---

# Envíos DosRuedas · Design System v2

Fuente de verdad: 12 HTML de `locales_reformados/` (Tailwind v4.3.3). Todo lo marcado **verificado** sale del código; lo marcado **propuesto** o **no verificado** no estaba.

## 1. Atmósfera

Mensajería en moto de Mar del Plata que se presenta como infraestructura urbana: azul eléctrico lleno de borde a borde, amarillo de señalética, tipografía condensada en mayúsculas (Anton/Bebas), datos operativos en monoespaciada. Fondos con grilla punteada, anillos de radar y "blobs" de luz desenfocada; tarjetas con doble bisel y sombras azules suaves; una píldora amarilla rotada -1° marca la palabra clave de cada titular. Voz: voseo directo, concreto, con horarios y direcciones como argumento.

## 2. Paleta y roles

| Token | Hex | Rol | Estado |
|---|---|---|---|
| brand-blue-500 | #0950F6 | Azul máximo: texto, bordes fuertes, fondos invertidos, sombras, focus (claro) | verificado |
| brand-blue-400 | #3570F8 | Solo decorativo (anillos, hover de borde). 4.35:1 sobre blanco ⇒ nunca texto chico | verificado |
| brand-blue-50…300 | #E6EEFE…#628FF9 | Fondos suaves, bordes, bezel, hover de secundario | verificado |
| brand-yellow-500 | #FFEC01 | Acción primaria, acentos, texto sobre azul, focus (oscuro) | verificado |
| brand-yellow-400 | #FFF12E | Hover del primario | verificado |
| brand-yellow-300 | #FFF45C | Declarado; 1 uso | verificado |
| white | #FFFFFF | Fondo de página, texto sobre azul | verificado |
| neutral-50 | #F8FAFC | Fondo alternativo (10 usos) | verificado |
| error-500/600 | #EF4444 / #DC2626 | Asterisco requerido / texto de error (600 = 4.83:1) | verificado |
| success-500, warning-500 | #16A34A, #F59E0B | Solo como ícono/borde; texto del estado en azul-500 (3.30 y 2.80:1 no alcanzan para texto) | **propuesto** |
| social-* | #25D366 · #1877F2 · #E1306C | Solo iconografía. Nunca fondo con texto blanco | verificado (uso restringido) |

**Eliminados por regla v2:** brand-blue-600 #0A4FC0, 700 #083AA3, 800 #062D85, 900 #041F63, `brand-ink`→900, `text-brand-blue-1000` (clase inexistente, 57 usos). Fuera de sistema: #0B5ED7 (48 usos, botón Facebook) y #0A4FC0 (hover) → brand-blue-500; #1877F2 (288 usos: bordes/sombras/gradientes del bloque Facebook) → brand-blue-500 en fondos y bordes; se conserva solo dentro del ícono SVG de Facebook.

Roles semánticos (`tokens/colors.css`): `--surface-page/card/muted/invert/accent/glass`, `--text-body/heading/muted/on-invert/on-accent`, `--border-subtle/strong/on-invert`, `--focus-ring(-on-invert)`, `--action-primary(-hover)`, `--action-secondary(-hover)`. `--text-muted` = azul-500 (no hay azul más oscuro ni más claro apto; para jerarquía usar tamaño/peso, no opacidad de texto).

## 3. Tipografía

| Rol | Familia | Tamaño / leading / tracking | Notas |
|---|---|---|---|
| h1 | Anton 400 | clamp(36→72px) / .92 / -.03em, mayúsculas | Unificado (10 de 12 páginas). Palabra clave en píldora amarilla rotada -1° |
| h2 | Anton 400 | clamp(30→48px) / 1.1 / -.025em | |
| h3 / título de card | Bebas Neue 400 | 21–22px / 1.05 / .025em | |
| Subheading / nav / botón | Bebas Neue 400 | 14–16px / 1 / .05em (tracking-wider) | |
| Label / eyebrow | Bebas Neue 400 | 12px / 1.33 / .05–.1em | Piso 12px |
| Cuerpo | Outfit 400 (300 en leads) | 16px / 1.625; 14px en cards | max-width 56ch |
| Datos | Geist Mono 400/700 | 12–16px, tabular-nums | teléfonos, horarios, precios |

**Problema de pesos (verificado):** `font-bold` se aplica 538 veces sobre `font-display`/`font-subheading`, y Anton/Bebas Neue solo se cargan (y solo existen) en 400 ⇒ el navegador sintetiza la negrita. Corrección: quitar `font-bold` de todo display/subheading; los componentes del sistema fijan `font-weight:400`. Outfit `font-light` (70 usos) y Geist Mono bold sí están cargados (variables 100..900).

**Piso de legibilidad:** 12px. `--text-2xs` (10px) queda en tokens por compatibilidad pero no se usa en componentes.

Carga: Google Fonts vía `tokens/fonts.css` (decisión del usuario; licencia de self-hosting **no verificada**). Copias locales en `assets/fonts/` (Anton, Bebas Neue, Outfit, Geist Mono) quedan como respaldo, sin referenciar. `AntonSC-Regular.ttf` (primera opción de `--font-display` en el CSS original, nunca cargada) y un duplicado de Bebas siguen sin usar en `uploads/`.

**Decisión confirmada:** texto de cuerpo en azul-500 (sin gris neutro).

## 4. Componentes

### 4.1 Button / CTA (prioritario) — `components/core/Button`

Un solo componente. Props: `variant` primary | secondary | ghost | social · `surface` light | dark · `size` sm 44px | md 48px | lg 52px · `fullWidth` · `external` · `loading` · `disabled` · `icon` · `hideIcon` · `href`.

Anatomía: píldora `rounded-full` (único radio), Bebas Neue 400 mayúsculas `tracking-wider` (.05em, solo token), icono circular a la derecha (28/32px), borde 1px (2px en secundario), transición .25s spring.

| variant × surface | reposo | hover (único) |
|---|---|---|
| primary (light = dark) | amarillo-500 / texto azul-500 / sombra accent-sm | amarillo-400 + cta-glow; icono se rellena azul→amarillo y +4px |
| secondary light | blanco / azul-500 / borde 2px azul-500 | fondo azul-50 |
| secondary dark | transparente / blanco / borde 2px white 40% | fondo white 10%, borde blanco |
| ghost light (nav sobre blanco) | transparente / azul-500 | fondo azul-50 |
| ghost dark (nav sobre azul) | transparente / blanco | fondo white 10%, texto amarillo |
| social light | azul-500 / blanco | sombra elevated, -1px |
| social dark | blanco / azul-500 | fondo azul-50 |

Estados (todas las variantes): **focus-visible** anillo 2px + offset 2px (azul-500 en light, amarillo-500 en dark) · **active** scale(.98) translateY(1px) · **disabled** opacity .5, `disabled`/`aria-disabled`, sin eventos · **loading** `aria-busy="true"`, spinner reemplaza el icono, texto visible, sin eventos.

Accesibilidad: alto táctil ≥44px en todos (nav y sociales incluidos); `external` ⇒ `target="_blank" rel="noopener noreferrer"` + `<span class="sr-only">(abre en una pestaña nueva)</span>` + icono arrow-up-right; texto siempre ≥14px; contraste mínimo 4.94:1 (amarillo) / 6.02:1 (azul/blanco).

Unificaciones: **skip-link** = `<Button size="sm">Saltar al contenido</Button>` (antes: rounded-xl + sombra brutal). **Nav** = `variant="ghost" surface="dark" size="sm"` (antes rounded-xl, py-2.5 ⇒ 40px). **Botones sociales** = `variant="social"` (antes `bg-[#0B5ED7] hover:bg-brand-blue-600 shadow-[#1877F2]/30`).

### 4.2 Badge — accent / invert / muted / outline; sm 12px / md 14px; `mono`; rotación -1° opcional. Texto nunca menor a 12px.
### 4.3 Input — label Bebas 12px, caja 44px rounded-xl, borde 2px azul-300 → azul-400 hover → azul-500 foco + anillo 20%; error borde rojo-500 + texto rojo-600 `role=alert`; `as` input/select/textarea; `aria-describedby` automático.
### 4.4 BezelCard — light / dark / accent; hover borde azul-300 + antigravity-deep + -4px (`hoverLift`).
### 4.5 SiteHeader — fijo, 72px, azul-500 → `compact` al scroll; nav ghost/dark; dropdown azul-500 rounded-2xl con ítems de 44px.
### 4.6 SiteFooter — columnas Bebas, hover amarillo + 4px, barra legal mono.
### 4.8 Bloques de página (components/blocks)
PageHero (blue | yellow, aside 7/5), Section + SectionHead, Display/Lead/Eyebrow/Highlight, Steps (ol numerado 01·02·03), TagList (rubros), StatList (cifras mono), CtaBanner, SocialCard (canal | post; botón social azul-500), ContactRow (glass 44px), CopyField (copiar teléfono, aria-live), QuantityStepper (botones 44px), SkipLink (primary sm). Cubren las 12 páginas: contrareembolso, cuenta corriente, LowCost/Flex (pasos y beneficios reales), emprendedores (3 planes + calculadora DropOFF), contacto, redes, FAQ, nosotros.

### 4.7 Marquee — izquierda 36s / derecha 42s lineal, pausa al hover, `prefers-reduced-motion`.

## 5. Layout

Contenedor 1280px (`max-w-7xl`), gutters 16/24/32px, secciones 48/64/96px, header fijo 72px, grilla 12 columnas en heroes (7/5), tarjetas `auto-fit minmax(240px,1fr)` gap 20. Breakpoints Tailwind: 640/768/1024/1280. Heroes: solo azul-500 o amarillo-500.

## 6. Inconsistencias encontradas y resolución

1. **Escala azul rota y azules oscuros** (600–900, `brand-ink`, 263 usos de `text-brand-blue-900`, 57 de la clase inexistente `text-brand-blue-1000`) → todo texto/borde/fondo a brand-blue-500 (6.02:1 sobre blanco).
2. **Hex fuera de paleta** #0B5ED7 (48), #0A4FC0 (12), #1877F2 (288) → brand-blue-500; colores de redes quedan solo en íconos.
3. **h1 con 3 recetas** (`tracking-[-0.03em] leading-[0.92]` ×9; `tracking-tight leading-[0.98]` ×2; `clamp(2.75rem,11vw,3.5rem) leading-[1.08]` ×1) → una sola: `--type-h1`.
4. **Botón:** 75 instancias, 76 clases distintas, 8 combinaciones visuales, 7 valores arbitrarios, `hover:shadow-hover-lift` sin definir (4), `font-bold` en el 100% → componente único (ver §7).
5. **Negrita sintética** sobre Anton/Bebas (538) → weight 400 fijo.
6. **Radios mixtos** en elementos de acción (nav `rounded-xl`, skip-link `rounded-xl`, CTA `rounded-full`) → `rounded-full` para toda acción; `rounded-xl` solo controles/inputs; `rounded-2xl` tarjetas.
7. **Sombra brutalista como valor arbitrario** (×19) → `--shadow-brutal(-sm)`.
8. **Tokens auto-referenciados** (`--font-sans:var(--font-sans,"Outfit")…`) → valores directos.
9. **`shadow-hover-lift` indefinida** → alias de `--shadow-elevated` (propuesto).
10. **Touch targets** de 40px en nav desktop (py-2.5 + text-base) y de 32px en iconos de copiar → mínimo 44px.
11. **Texto 9–11px** (149 usos según auditoría, ya corregidos en estos HTML a 12px) → piso 12px en tokens de rol.
12. **Contraste** `text-brand-blue-400` sobre blanco (4.35) → azul-500; blanco sobre #1877F2 (4.23) → eliminado.
13. **`alt=""`** en imagen de hero express → el UI kit usa alt descriptivo.
14. **Dos sets de `--font-sans`** entre páginas (`"Outfit","IBM Plex Sans"` vs `"Outfit",ui-sans-serif`) → uno.

## 7. Verificación

### Contrastes recalculados (WCAG 2.x)
- #0950F6 sobre #FFFFFF: **6.02** ✓ · #FFFFFF sobre #0950F6: **6.02** ✓
- #0950F6 sobre #FFEC01: **4.94** ✓ · #0950F6 sobre #FFF12E (hover): **5.12** ✓
- #0950F6 sobre #E6EEFE: **5.17** ✓ · sobre #F8FAFC: **5.75** ✓ · sobre #BACEFD: **3.82** (solo bordes, nunca texto)
- #DC2626 sobre #FFFFFF: **4.83** ✓ (texto de error) · #EF4444: 3.76 (solo asterisco/borde)
- Eliminados: #3570F8/blanco 4.35 ✗ · blanco/#1877F2 4.23 ✗ · blanco/#E1306C 4.34 ✗ · #FFEC01/blanco 1.22 ✗ · #FFEC01/#3570F8 3.58 ✗
- Propuestos (solo ícono/borde): #16A34A/blanco 3.30 · #0950F6/#F59E0B 2.80

### Clases del botón, antes y después
- **Antes:** 75 instancias de `cta-nested-pill`; **76 clases distintas**; **29,9 clases por botón** en promedio (mín. 15, máx. 36); 8 combinaciones visuales; 7 valores arbitrarios (`tracking-[.05em]` ×58, `min-h-[44px]`, `min-h-[48px]`, `min-h-[52px]`, `active:scale-[.98]`, `active:translate-y-[1px]`, `shadow-[0_0_24px_rgba(9,80,246,0.28)]`); 1 clase indefinida (`hover:shadow-hover-lift` ×4); `font-bold` en 75/75.
- **Después:** 1 componente, **6 props** (`variant`, `surface`, `size`, `fullWidth`, `external`, `loading` + `disabled`), **0 clases por instancia** (`<Button size="lg">`), 24 combinaciones cubiertas por 7 skins; 0 valores arbitrarios (alturas = tokens `--control-sm/md/lg`, tracking = `--tracking-wider`); 0 clases indefinidas; 0 `font-bold`. Equivalente en utilidades Tailwind, si se quisiera reescribir el sitio: 16 clases base + 4 por tamaño + 3–8 por variante/superficie + 3 de estado = **70 distintas en todo el sistema**, pero cada instancia pasa de ~30 a 1 tag.

## 8. Notas de generación

- Heroes solo azul-500 o amarillo-500; nunca degradados multicolor ni morado.
- Texto sobre amarillo siempre #0950F6; amarillo nunca sobre blanco.
- No usar `font-bold` con Anton/Bebas. Jerarquía por tamaño y mayúsculas.
- Toda acción es `Button`; todo eyebrow es `Badge`; todo contenedor es `BezelCard`.
- Datos (horarios, teléfonos, precios) en Geist Mono tabular.
- Íconos Lucide 2px; no emoji; íconos de redes solo como SVG de marca, nunca como color de fondo.
- Loops (pulse/ping/marquee) solo donde comuniquen estado real; respetar `prefers-reduced-motion`.
