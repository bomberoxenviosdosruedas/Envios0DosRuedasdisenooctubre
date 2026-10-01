# Prompts de imagen · Envíos DosRuedas

Generado a partir del sistema v2. Estructura canónica: Subject / Style / Palette / Lighting / Composition / Quality / Background / Negative.

> **Fuente del Kit 3D:** el meta-prompt de abajo (aportado por el equipo). Antes se había inferido de `assets/`.

## Personajes y vehículos del Kit
moto urbana tipo underbone con espejos redondos y top box grande amarilla; courier con chomba azul de cuello amarillo, figura estilizada tipo vinyl toy, casco con visor cerrado, sin cara visible; dioramas isométricos de manzanas azules; ruta en tubo amarillo brillante; pin de mapa facetado.

## Reglas
- Nada más oscuro que #0950F6. Sin navy ni negro.
- Sin texto, números ni logos dentro de la imagen; el texto va en HTML/Canva.
- Sin marcas de terceros (Mercado Libre, Mercado Pago, Facebook, Instagram).
- Figuras humanas sin rasgos faciales. 3D y foto real nunca juntos.
- La imagen complementa la UI: no repite precios, horarios ni direcciones.
- Web: alt en español, sizes correcto, priority solo en el hero.

## Bloques reutilizables
### Palette · sobre azul
Base material colors ONLY: white #FFFFFF and pale blue #E6EEFE for main volumes and top faces, light blue #8EAFFB and sky blue #628FF9 for side faces and the diorama edge, signal yellow #FFEC01 as the single accent covering at most 15% of the image. The darkest tone anywhere is bright blue #0950F6, used only in small details. No navy, no black. The object must separate clearly from a bright blue #0950F6 background.

### Palette · sobre amarillo
Base material colors ONLY: bright blue #0950F6 and sky blue #628FF9 for main volumes, blue #3570F8 for side faces, pale blue #E6EEFE and white #FFFFFF for top faces and highlights. Signal yellow only in tiny details, always outlined by white or blue so it does not melt into a #FFEC01 background. No navy, no black.

### Palette · sobre blanco
Base material colors ONLY: bright blue #0950F6 for main volumes, blue #3570F8 and sky blue #628FF9 for side faces and the diorama edge, pale blue #E6EEFE for top faces, signal yellow #FFEC01 as the single accent covering at most 15% of the image. No large white volumes, no navy, no black.

### Background · sitio (recorte)
Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.

### Negative base
text, letters, words, numbers, captions, logos, watermarks, brand marks of other companies, realistic human faces, photographs mixed with 3D, dark navy, black, grey, green, purple, neon gradients, harsh black shadows, clutter, busy background, cropped subject, phone numbers, visible faces, charcoal, red, orange, violet, flat vector, cartoon outlines, cyberpunk neon

## Formatos
| Destino | Ratio | Tamaño |
|---|---|---|
| Hero (columna derecha) | 1:1 o 4:3 | 1200 px |
| Tarjeta / sección | 4:3 o 3:2 | 960 px |
| Open Graph | 1.91:1 | 1200×630 |
| Post IG/FB | 4:5 | 1080×1350 |
| Post cuadrado | 1:1 | 1080×1080 |
| Historia / WhatsApp / Reels | 9:16 | 1080×1920 |

## Fichas

### VIS-HOME-1
- **Dónde:** home.html · #hero-animado (columna derecha)
- **Superficie:** azul
- **Decisión:** Reusar assets/heroes/inicio-mapa.webp
- **Por qué:** Ya cumple: pin facetado sobre diorama con ruta amarilla, sin texto ajeno al logo del pin. Las chips flotantes ("Retiro en tu local", "Franja de 3 hs") se superponen en HTML.
- **Concepto:** Pin azul sobre manzanas de Mar del Plata con ruta amarilla brillante.
- **Composición:** Sujeto centrado, 1:1. Chips flotantes arriba izquierda y abajo derecha en HTML.
- **Ratio:** 1:1, 1200 px
- **Alt (es):** Pin de Envíos DosRuedas sobre un mapa de Mar del Plata con una ruta amarilla
- **Archivo:** public/img/heroes/inicio-mapa.webp

```text
[Subject] A faceted bright-blue map pin with a round badge at its center, standing on an isometric miniature of Mar del Plata city blocks, a glowing yellow delivery route winding between the blocks to the pin's base, a small courier motorbike with a rounded yellow top-box riding along the route, a hint of coastline on one edge.
[Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
[Palette] Base material colors ONLY: white #FFFFFF and pale blue #E6EEFE for main volumes and top faces, light blue #8EAFFB and sky blue #628FF9 for side faces and the diorama edge, signal yellow #FFEC01 as the single accent covering at most 15% of the image. The darkest tone anywhere is bright blue #0950F6, used only in small details. No navy, no black. The object must separate clearly from a bright blue #0950F6 background.
[Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion tinted light blue, never black; tight emissive glow only on yellow route elements.
[Composition] Isometric three-quarter view from 30 degrees above, centered, 1:1, 1200 px, subject fills about 78% of the width with at least 8% empty margin on every side, fully contained, nothing cropped, bold readable silhouette at 340px wide.
[Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
[Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
[Negative] text, letters, words, numbers, captions, logos, watermarks, brand marks of other companies, realistic human faces, photographs mixed with 3D, dark navy, black, grey, green, purple, neon gradients, harsh black shadows, clutter, busy background, cropped subject, phone numbers, visible faces, charcoal, red, orange, violet, flat vector, cartoon outlines, cyberpunk neon
```

### VIS-EXPRESS-1
- **Dónde:** servicios-envios-express.html · #express-hero
- **Superficie:** azul
- **Decisión:** Reusar assets/heroes/express-moto.webp (no verificado: revisar texto horneado)
- **Por qué:** El alt original de la página es "" en el HTML; la imagen aporta el mensaje "directo, sin paradas". No repetir el precio de las tarjetas.
- **Concepto:** Moto en tramo directo hacia una casa, con cronómetro 3D marcando franja.
- **Composición:** Sujeto a la derecha, espacio libre arriba izquierda. 1:1.
- **Ratio:** 1:1, 1200 px
- **Alt (es):** Moto de reparto yendo en línea recta a una casa junto a un cronómetro
- **Archivo:** public/img/heroes/express-moto.webp

```text
[Subject] A courier motorbike with a rounded top-box riding in a single straight glowing yellow line from a small shop to a small house, no stops, a chunky 3D stopwatch with a highlighted 3-hour arc standing beside the house, a few simplified city blocks.
[Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
[Palette] Base material colors ONLY: white #FFFFFF and pale blue #E6EEFE for main volumes and top faces, light blue #8EAFFB and sky blue #628FF9 for side faces and the diorama edge, signal yellow #FFEC01 as the single accent covering at most 15% of the image. The darkest tone anywhere is bright blue #0950F6, used only in small details. No navy, no black. The object must separate clearly from a bright blue #0950F6 background.
[Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion tinted light blue, never black; tight emissive glow only on yellow route elements.
[Composition] Isometric three-quarter view from 30 degrees above, centered, 1:1, 1200 px, subject fills about 78% of the width with at least 8% empty margin on every side, fully contained, nothing cropped, bold readable silhouette at 340px wide.
[Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
[Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
[Negative] text, letters, words, numbers, captions, logos, watermarks, brand marks of other companies, realistic human faces, photographs mixed with 3D, dark navy, black, grey, green, purple, neon gradients, harsh black shadows, clutter, busy background, cropped subject, phone numbers, visible faces, charcoal, red, orange, violet, flat vector, cartoon outlines, cyberpunk neon
```

### VIS-LOWCOST-1
- **Dónde:** servicios-envios-lowcost.html · #lowcost-hero
- **Superficie:** amarillo
- **Decisión:** Imagen nueva
- **Por qué:** No hay hero propio en assets. LowCost se explica por consolidación de volumen: una plataforma con pirámide de paquetes. No mostrar cifras (corte 13:00 / 19:00 ya están en UI).
- **Concepto:** Plataforma de consolidación con pirámide de paquetes y moto de cajón grande en circuito.
- **Composición:** Hero amarillo: sujeto azul, a la derecha. 4:3.
- **Ratio:** 4:3, 1200 px
- **Alt (es):** Pirámide de paquetes sobre una plataforma con una moto de carga en circuito
- **Archivo:** public/img/heroes/lowcost-consolidacion.webp

```text
[Subject] A round consolidation platform holding a neat pyramid of identical parcels, a courier motorbike with a large cargo box looping around it on a circular blue-and-white route that fans out to three small house icons, simplified geometry.
[Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
[Palette] Base material colors ONLY: bright blue #0950F6 and sky blue #628FF9 for main volumes, blue #3570F8 for side faces, pale blue #E6EEFE and white #FFFFFF for top faces and highlights. Signal yellow only in tiny details, always outlined by white or blue so it does not melt into a #FFEC01 background. No navy, no black.
[Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion tinted light blue, never black; tight emissive glow only on yellow route elements.
[Composition] Isometric three-quarter view from 30 degrees above, centered, 4:3, 1200 px, subject fills about 78% of the width with at least 8% empty margin on every side, fully contained, nothing cropped, bold readable silhouette at 340px wide.
[Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
[Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
[Negative] text, letters, words, numbers, captions, logos, watermarks, brand marks of other companies, realistic human faces, photographs mixed with 3D, dark navy, black, grey, green, purple, neon gradients, harsh black shadows, clutter, busy background, cropped subject, phone numbers, visible faces, charcoal, red, orange, violet, flat vector, cartoon outlines, cyberpunk neon, yellow object touching the background edge
```

### VIS-FLEX-1
- **Dónde:** servicios-enviosflex.html · #flex-hero
- **Superficie:** azul
- **Decisión:** Imagen nueva
- **Por qué:** Vendedores de Mercado Libre: la clave es reputación y retiro puntual. Nada de logo ni gráfica de Mercado Libre.
- **Concepto:** Taller e-commerce: escaneo de paquete con haz amarillo, moto esperando, medalla de reputación.
- **Composición:** Sujeto centrado, espacio de texto a la izquierda. 1:1.
- **Ratio:** 1:1, 1200 px
- **Alt (es):** Banco de preparación de pedidos con un paquete escaneado y una moto esperando
- **Archivo:** public/img/heroes/flex-taller.webp

```text
[Subject] A small e-commerce workshop bench with a parcel being scanned by a thin glowing yellow beam, a courier motorbike with a top-box waiting beside it with its engine idle, a chunky rounded medal with a star floating above the parcel as a reputation badge, a tiny shelf of boxes behind.
[Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
[Palette] Base material colors ONLY: white #FFFFFF and pale blue #E6EEFE for main volumes and top faces, light blue #8EAFFB and sky blue #628FF9 for side faces and the diorama edge, signal yellow #FFEC01 as the single accent covering at most 15% of the image. The darkest tone anywhere is bright blue #0950F6, used only in small details. No navy, no black. The object must separate clearly from a bright blue #0950F6 background.
[Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion tinted light blue, never black; tight emissive glow only on yellow route elements.
[Composition] Isometric three-quarter view from 30 degrees above, centered, 1:1, 1200 px, subject fills about 78% of the width with at least 8% empty margin on every side, fully contained, nothing cropped, bold readable silhouette at 340px wide.
[Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
[Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
[Negative] text, letters, words, numbers, captions, logos, watermarks, brand marks of other companies, realistic human faces, photographs mixed with 3D, dark navy, black, grey, green, purple, neon gradients, harsh black shadows, clutter, busy background, cropped subject, phone numbers, visible faces, charcoal, red, orange, violet, flat vector, cartoon outlines, cyberpunk neon, Mercado Libre logo, yellow handshake, any marketplace branding
```

### VIS-DEPOSITO-1
- **Dónde:** servicios-deposito-fulfillment.html y servicios-plan-emprendedores.html · #plan-emprendedores-hero
- **Superficie:** amarillo
- **Decisión:** Reusar assets/heroes/deposito-local.webp (no verificado: revisar)
- **Por qué:** Ya existe hero de depósito. Si se regenera, mostrar el flujo stock → picking QR → empaque → bahía de motos, sin texto de planes.
- **Concepto:** Micro-hub en corte tipo casa de muñecas.
- **Composición:** Sujeto azul centrado sobre hero amarillo. 4:3.
- **Ratio:** 4:3, 1200 px
- **Alt (es):** Depósito en corte con estantes, estación de picking, empaque y motos listas
- **Archivo:** public/img/heroes/deposito-local.webp

```text
[Subject] A cutaway doll-house style micro-warehouse showing four connected stations left to right: shelves of stock, a picking station with a handheld scanner showing a QR-like square, a packing table with a taped box, and a loading bay with two motorbikes ready, a thin route line connecting the stations.
[Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
[Palette] Base material colors ONLY: bright blue #0950F6 and sky blue #628FF9 for main volumes, blue #3570F8 for side faces, pale blue #E6EEFE and white #FFFFFF for top faces and highlights. Signal yellow only in tiny details, always outlined by white or blue so it does not melt into a #FFEC01 background. No navy, no black.
[Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion tinted light blue, never black; tight emissive glow only on yellow route elements.
[Composition] Isometric three-quarter view from 30 degrees above, centered, 4:3, 1200 px, subject fills about 78% of the width with at least 8% empty margin on every side, fully contained, nothing cropped, bold readable silhouette at 340px wide.
[Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
[Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
[Negative] text, letters, words, numbers, captions, logos, watermarks, brand marks of other companies, realistic human faces, photographs mixed with 3D, dark navy, black, grey, green, purple, neon gradients, harsh black shadows, clutter, busy background, cropped subject, phone numbers, visible faces, charcoal, red, orange, violet, flat vector, cartoon outlines, cyberpunk neon
```

### VIS-CUENTA-1
- **Dónde:** servicios-empresas-cuenta-corriente.html · hero
- **Superficie:** azul
- **Decisión:** Imagen nueva
- **Por qué:** Concepto: "pagás juntos por semana, quincena o mes". Se resuelve con agrupar entregas en un calendario, no con cifras.
- **Concepto:** Calendario 3D con bloques de paquetes agrupados y una llave de cuenta.
- **Composición:** Sujeto a la derecha, formulario a la izquierda/arriba. 4:3.
- **Ratio:** 4:3, 1200 px
- **Alt (es):** Calendario con paquetes agrupados por semana y una moto de reparto
- **Archivo:** public/img/heroes/cuenta-corriente.webp

```text
[Subject] A chunky 3D calendar block with a row of highlighted weekly slots, each slot holding a small stack of parcels bundled by a yellow ribbon, a courier motorbike parked at the end of the row, a rounded key-shaped token floating above the calendar.
[Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
[Palette] Base material colors ONLY: white #FFFFFF and pale blue #E6EEFE for main volumes and top faces, light blue #8EAFFB and sky blue #628FF9 for side faces and the diorama edge, signal yellow #FFEC01 as the single accent covering at most 15% of the image. The darkest tone anywhere is bright blue #0950F6, used only in small details. No navy, no black. The object must separate clearly from a bright blue #0950F6 background.
[Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion tinted light blue, never black; tight emissive glow only on yellow route elements.
[Composition] Isometric three-quarter view from 30 degrees above, centered, 4:3, 1200 px, subject fills about 78% of the width with at least 8% empty margin on every side, fully contained, nothing cropped, bold readable silhouette at 340px wide.
[Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
[Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
[Negative] text, letters, words, numbers, captions, logos, watermarks, brand marks of other companies, realistic human faces, photographs mixed with 3D, dark navy, black, grey, green, purple, neon gradients, harsh black shadows, clutter, busy background, cropped subject, phone numbers, visible faces, charcoal, red, orange, violet, flat vector, cartoon outlines, cyberpunk neon
```

### VIS-CONTRA-1
- **Dónde:** servicios-envios-contrareembolso.html · hero
- **Superficie:** azul
- **Decisión:** Imagen nueva (página no leída en detalle: no verificado)
- **Por qué:** Cobro en destino sin comisión. La imagen muestra la entrega y el cobro en mano, sin dinero con cifras.
- **Concepto:** Entrega de paquete con sobre de cobro y check.
- **Composición:** Sujeto centrado. 1:1.
- **Ratio:** 1:1, 1200 px
- **Alt (es):** Repartidor entregando un paquete y recibiendo el cobro en mano
- **Archivo:** public/img/heroes/contrareembolso.webp

```text
[Subject] A courier figure without facial features handing a parcel to a recipient figure at a doorstep, a rounded envelope passing in the opposite direction, a large chunky yellow checkmark badge floating above the exchange, a courier motorbike parked at the curb.
[Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
[Palette] Base material colors ONLY: white #FFFFFF and pale blue #E6EEFE for main volumes and top faces, light blue #8EAFFB and sky blue #628FF9 for side faces and the diorama edge, signal yellow #FFEC01 as the single accent covering at most 15% of the image. The darkest tone anywhere is bright blue #0950F6, used only in small details. No navy, no black. The object must separate clearly from a bright blue #0950F6 background.
[Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion tinted light blue, never black; tight emissive glow only on yellow route elements.
[Composition] Isometric three-quarter view from 30 degrees above, centered, 1:1, 1200 px, subject fills about 78% of the width with at least 8% empty margin on every side, fully contained, nothing cropped, bold readable silhouette at 340px wide.
[Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
[Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
[Negative] text, letters, words, numbers, captions, logos, watermarks, brand marks of other companies, realistic human faces, photographs mixed with 3D, dark navy, black, grey, green, purple, neon gradients, harsh black shadows, clutter, busy background, cropped subject, phone numbers, visible faces, charcoal, red, orange, violet, flat vector, cartoon outlines, cyberpunk neon, currency symbols, banknotes with numbers
```

### VIS-NOSOTROS-1
- **Dónde:** nosotros-sobre-nosotros.html · #about-hero
- **Superficie:** azul
- **Decisión:** Imagen nueva
- **Por qué:** Ancla local real: Friuli 1972, depósito central, faro de Punta Mogotes. Sin rostros.
- **Concepto:** Sede con persiana abierta y flota alineada.
- **Composición:** Sujeto centrado, 4:3.
- **Ratio:** 4:3, 1200 px
- **Alt (es):** Sede de Envíos DosRuedas con la flota de motos alineada frente al depósito
- **Archivo:** public/img/heroes/sobre-nosotros.webp

```text
[Subject] A small corner headquarters building with its roller shutter half open revealing stacked parcels, a row of four identical courier motorbikes with top-boxes parked in front, a simplified striped lighthouse in the background referencing the Mar del Plata coast, a couple of faceless courier figures in uniform.
[Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
[Palette] Base material colors ONLY: white #FFFFFF and pale blue #E6EEFE for main volumes and top faces, light blue #8EAFFB and sky blue #628FF9 for side faces and the diorama edge, signal yellow #FFEC01 as the single accent covering at most 15% of the image. The darkest tone anywhere is bright blue #0950F6, used only in small details. No navy, no black. The object must separate clearly from a bright blue #0950F6 background.
[Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion tinted light blue, never black; tight emissive glow only on yellow route elements.
[Composition] Isometric three-quarter view from 30 degrees above, centered, 4:3, 1200 px, subject fills about 78% of the width with at least 8% empty margin on every side, fully contained, nothing cropped, bold readable silhouette at 340px wide.
[Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
[Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
[Negative] text, letters, words, numbers, captions, logos, watermarks, brand marks of other companies, realistic human faces, photographs mixed with 3D, dark navy, black, grey, green, purple, neon gradients, harsh black shadows, clutter, busy background, cropped subject, phone numbers, visible faces, charcoal, red, orange, violet, flat vector, cartoon outlines, cyberpunk neon
```

### VIS-FAQ-1
- **Dónde:** nosotros-preguntas-frecuentes.html · #faq-hero
- **Superficie:** azul
- **Decisión:** Reusar assets/elementos/dudas_transparent.webp
- **Por qué:** Ya es un elemento transparente de dudas. Si se regenera: signo de pregunta enlazado a un paquete abierto del que sale un check.
- **Concepto:** Signo de pregunta + paquete abierto + check.
- **Composición:** Sujeto centrado sobre fondo transparente. 1:1.
- **Ratio:** 1:1, 1000 px
- **Alt (es):** Signo de pregunta junto a un paquete abierto con un check
- **Archivo:** public/elementos/dudas_transparent.webp

```text
[Subject] A large chunky 3D question mark leaning on an open cardboard parcel, a bright yellow checkmark rising out of the parcel, a small motorbike silhouette tucked behind.
[Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
[Palette] Base material colors ONLY: white #FFFFFF and pale blue #E6EEFE for main volumes and top faces, light blue #8EAFFB and sky blue #628FF9 for side faces and the diorama edge, signal yellow #FFEC01 as the single accent covering at most 15% of the image. The darkest tone anywhere is bright blue #0950F6, used only in small details. No navy, no black. The object must separate clearly from a bright blue #0950F6 background.
[Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion tinted light blue, never black; tight emissive glow only on yellow route elements.
[Composition] Isometric three-quarter view from 30 degrees above, centered, 1:1, 1000 px, subject fills about 78% of the width with at least 8% empty margin on every side, fully contained, nothing cropped, bold readable silhouette at 340px wide.
[Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
[Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
[Negative] text, letters, words, numbers, captions, logos, watermarks, brand marks of other companies, realistic human faces, photographs mixed with 3D, dark navy, black, grey, green, purple, neon gradients, harsh black shadows, clutter, busy background, cropped subject, phone numbers, visible faces, charcoal, red, orange, violet, flat vector, cartoon outlines, cyberpunk neon
```

### VIS-REDES-1
- **Dónde:** nosotros-nuestras-redes.html · #networks-hero
- **Superficie:** amarillo
- **Decisión:** Reusar assets/heroes/redes-celular.webp
- **Por qué:** Ya hay celular en hero. Si se regenera: feed de miniaturas del reparto, corazones amarillos, sin números de seguidores.
- **Concepto:** Smartphone 3D con feed.
- **Composición:** Sujeto centrado sobre hero amarillo. 1:1.
- **Ratio:** 1:1, 1200 px
- **Alt (es):** Celular con publicaciones de la flota y corazones
- **Archivo:** public/img/heroes/redes-celular.webp

```text
[Subject] A chunky 3D smartphone floating at a slight angle, its screen showing a grid of simplified thumbnail tiles of motorbike couriers and parcels, small rounded heart and chat-bubble shapes floating around it.
[Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
[Palette] Base material colors ONLY: bright blue #0950F6 and sky blue #628FF9 for main volumes, blue #3570F8 for side faces, pale blue #E6EEFE and white #FFFFFF for top faces and highlights. Signal yellow only in tiny details, always outlined by white or blue so it does not melt into a #FFEC01 background. No navy, no black.
[Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion tinted light blue, never black; tight emissive glow only on yellow route elements.
[Composition] Isometric three-quarter view from 30 degrees above, centered, 1:1, 1200 px, subject fills about 78% of the width with at least 8% empty margin on every side, fully contained, nothing cropped, bold readable silhouette at 340px wide.
[Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
[Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
[Negative] text, letters, words, numbers, captions, logos, watermarks, brand marks of other companies, realistic human faces, photographs mixed with 3D, dark navy, black, grey, green, purple, neon gradients, harsh black shadows, clutter, busy background, cropped subject, phone numbers, visible faces, charcoal, red, orange, violet, flat vector, cartoon outlines, cyberpunk neon
```

### VIS-CONTACTO-1
- **Dónde:** contacto.html · #contact-hero (tarjeta de horarios)
- **Superficie:** azul
- **Decisión:** Regenerar sin texto (el alt actual indica el mensaje "Escribinos hoy" horneado)
- **Por qué:** El mensaje debe ser HTML. La imagen aporta teléfono + sobre + base de coordinación.
- **Concepto:** Teléfono y sobre del Kit sobre un puesto de coordinación.
- **Composición:** Sujeto centrado dentro de marco 4:3 con borde blanco/20.
- **Ratio:** 4:3, 960 px
- **Alt (es):** Teléfono y sobre sobre un puesto de coordinación de reparto
- **Archivo:** public/img/heroes/contacto-mensaje.webp

```text
[Subject] A chunky 3D smartphone with an empty chat bubble on its screen and a rounded envelope beside it, both resting on a small coordination desk with a headset and a tiny motorbike model, a thin yellow line linking phone to motorbike.
[Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
[Palette] Base material colors ONLY: white #FFFFFF and pale blue #E6EEFE for main volumes and top faces, light blue #8EAFFB and sky blue #628FF9 for side faces and the diorama edge, signal yellow #FFEC01 as the single accent covering at most 15% of the image. The darkest tone anywhere is bright blue #0950F6, used only in small details. No navy, no black. The object must separate clearly from a bright blue #0950F6 background.
[Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion tinted light blue, never black; tight emissive glow only on yellow route elements.
[Composition] Isometric three-quarter view from 30 degrees above, centered, 4:3, 960 px, subject fills about 78% of the width with at least 8% empty margin on every side, fully contained, nothing cropped, bold readable silhouette at 340px wide.
[Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
[Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
[Negative] text, letters, words, numbers, captions, logos, watermarks, brand marks of other companies, realistic human faces, photographs mixed with 3D, dark navy, black, grey, green, purple, neon gradients, harsh black shadows, clutter, busy background, cropped subject, phone numbers, visible faces, charcoal, red, orange, violet, flat vector, cartoon outlines, cyberpunk neon, any message text, speech bubble words
```

### VIS-COTIZ-1
- **Dónde:** cotizador Express / LowCost (cotizar.html — no incluido en el repo adjunto)
- **Superficie:** blanco
- **Decisión:** Imagen nueva (página no verificada)
- **Por qué:** Cotizadores: medición de ruta (Express) y hub con varias rutas (LowCost). Sin cifras.
- **Concepto:** Calibre geométrico sobre diorama / hub con manifiesto 3D.
- **Composición:** Sujeto en tarjeta blanca, 3:2.
- **Ratio:** 3:2, 960 px
- **Alt (es):** Calibre midiendo la ruta entre dos puntos del mapa
- **Archivo:** public/img/cotizador/express.webp

```text
[Subject] A pair of rounded geometric calipers measuring a glowing yellow route between two pin markers on a small isometric city patch.
[Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
[Palette] Base material colors ONLY: bright blue #0950F6 for main volumes, blue #3570F8 and sky blue #628FF9 for side faces and the diorama edge, pale blue #E6EEFE for top faces, signal yellow #FFEC01 as the single accent covering at most 15% of the image. No large white volumes, no navy, no black.
[Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion tinted light blue, never black; tight emissive glow only on yellow route elements.
[Composition] Isometric three-quarter view from 30 degrees above, centered, 3:2, 960 px, subject fills about 78% of the width with at least 8% empty margin on every side, fully contained, nothing cropped, bold readable silhouette at 340px wide.
[Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
[Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
[Negative] text, letters, words, numbers, captions, logos, watermarks, brand marks of other companies, realistic human faces, photographs mixed with 3D, dark navy, black, grey, green, purple, neon gradients, harsh black shadows, clutter, busy background, cropped subject, phone numbers, visible faces, charcoal, red, orange, violet, flat vector, cartoon outlines, cyberpunk neon
```

### VIS-AD-1
- **Dónde:** Instagram / Facebook post 4:5 · consulta por WhatsApp (Express)
- **Superficie:** azul
- **Decisión:** Pieza nueva
- **Por qué:** Objetivo: consulta. Objeto del servicio en primer plano y zona de texto libre arriba (≥35%). El precio y el CTA se superponen en Canva/HTML con datos de pricing.
- **Concepto:** Moto con top-box en primer plano.
- **Composición:** Sujeto abajo; arriba 40% libre.
- **Ratio:** 4:5, 1080×1350
- **Alt (es):** Moto de reparto con cofre sobre una ruta amarilla
- **Archivo:** public/img/ads/express-post.webp

```text
[Subject] A courier motorbike with a rounded top-box in the foreground on a short curved yellow route, a small house in the distance.
[Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
[Palette] Base material colors ONLY: white #FFFFFF and pale blue #E6EEFE for main volumes and top faces, light blue #8EAFFB and sky blue #628FF9 for side faces and the diorama edge, signal yellow #FFEC01 as the single accent covering at most 15% of the image. The darkest tone anywhere is bright blue #0950F6, used only in small details. No navy, no black. The object must separate clearly from a bright blue #0950F6 background.
[Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion tinted light blue, never black; tight emissive glow only on yellow route elements.
[Composition] Isometric three-quarter view from 30 degrees above, centered, 4:5, 1080×1350, subject fills about 78% of the width with at least 8% empty margin on every side, fully contained, nothing cropped, bold readable silhouette at 340px wide. Keep the top 40% of the frame empty for overlaid text.
[Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
[Background] Solid flat background in bright blue #0950F6, no gradient, no texture.
[Negative] text, letters, words, numbers, captions, logos, watermarks, brand marks of other companies, realistic human faces, photographs mixed with 3D, dark navy, black, grey, green, purple, neon gradients, harsh black shadows, clutter, busy background, cropped subject, phone numbers, visible faces, charcoal, red, orange, violet, flat vector, cartoon outlines, cyberpunk neon
```

### VIS-AD-2
- **Dónde:** Historia / Estado de WhatsApp / Reels 9:16 · aviso operativo
- **Superficie:** azul
- **Decisión:** Pieza simple (ícono grande del Kit)
- **Por qué:** Avisos de lluvia, horarios o feriados no necesitan render complejo. Zonas seguras: 250 px arriba y 340 px abajo sin elementos clave.
- **Concepto:** Ícono grande centrado (paraguas / reloj / calendario) + moto.
- **Composición:** Ícono entre las zonas seguras.
- **Ratio:** 9:16, 1080×1920
- **Alt (es):** Paraguas con una moto de reparto debajo
- **Archivo:** public/img/ads/aviso-lluvia.webp

```text
[Subject] One large chunky 3D umbrella icon with a small courier motorbike beneath it, soft rounded raindrop shapes in sky blue.
[Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
[Palette] Base material colors ONLY: white #FFFFFF and pale blue #E6EEFE for main volumes and top faces, light blue #8EAFFB and sky blue #628FF9 for side faces and the diorama edge, signal yellow #FFEC01 as the single accent covering at most 15% of the image. The darkest tone anywhere is bright blue #0950F6, used only in small details. No navy, no black. The object must separate clearly from a bright blue #0950F6 background.
[Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion tinted light blue, never black; tight emissive glow only on yellow route elements.
[Composition] Isometric three-quarter view from 30 degrees above, centered, 9:16, 1080×1920, subject fills about 78% of the width with at least 8% empty margin on every side, fully contained, nothing cropped, bold readable silhouette at 340px wide. Keep 250px at the top and 340px at the bottom of the 1080x1920 frame free of any element.
[Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
[Background] Solid flat background in bright blue #0950F6, no gradient, no texture.
[Negative] text, letters, words, numbers, captions, logos, watermarks, brand marks of other companies, realistic human faces, photographs mixed with 3D, dark navy, black, grey, green, purple, neon gradients, harsh black shadows, clutter, busy background, cropped subject, phone numbers, visible faces, charcoal, red, orange, violet, flat vector, cartoon outlines, cyberpunk neon
```

## Mejor en código (no generar imagen)
- **Tarifas y niveles (precios, km, horarios):** UI en código: PricingCard. Una imagen se desactualiza.
- **Cómo funciona (3 pasos):** Stepper / FeatureCard con íconos Lucide.
- **Reseñas (social proof):** Nada generado: ReviewCard con reseñas reales y fuente.
- **Equipo / flota real:** Foto real, nunca mezclada con 3D.
- **Fondos de tarjetas de servicio (assets/cards/fondo_*.webp):** Ya son trazos de luz amarilla sobre azul, sin texto: reusar.

## Meta-prompt: generador de prompts de imagen
Pegalo tal cual en Claude, ChatGPT o Gemini y completá `PEDIDO`.

```text
Actuá como director de arte y prompt engineer para la marca Envíos DosRuedas, de Mar del Plata, Argentina. Tu única salida es un prompt de generación de imagen en inglés, listo para pegar en una herramienta de imágenes (Gemini / Nano Banana, ChatGPT), más una lista corta de control. No generes la imagen.

MARCA
Envíos DosRuedas: mensajería y logística de última milla en moto propia, +7 años en Mar del Plata. Servicios: Express (franja de entrega de 3 hs a elección, con 2 hs de anticipación mínima), LowCost (pedido antes de las 13 h, entrega antes de las 19 h), Mercado Envíos Flex, Depósito y Fulfillment en Friuli 1972, Contrareembolso.
   Paleta obligatoria: bright blue #0950F6 (el azul más oscuro permitido en toda la imagen, incluso en sombras y rincones), sky blue #628FF9, deeper sky blue #3570F8 (caras laterales y cantos), pale blue #E6EEFE, white #FFFFFF, signal yellow #FFEC01 como único acento (rutas, llantas, top box, detalles) cubriendo como máximo el 15 %.
   Prohibido: verde de cualquier tono, gris, carbón, negro, rojo, naranja, violeta y cualquier azul más oscuro que #0950F6 (por ejemplo #0636A5, #00277C, navy).
   Motivos: moto urbana tipo underbone con espejos redondos y top box grande amarilla; courier con chomba azul de cuello amarillo, figura estilizada tipo vinyl toy sin cara visible (casco con visor cerrado); dioramas isométricos de manzanas azules; ruta en tubo amarillo brillante; pin de mapa facetado.

ESTILO BASE (salvo que el PEDIDO diga "foto")
Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, premium Blender Cycles / Octane product-render look, soft studio three-point lighting with a thin white rim light, soft ambient occlusion.
Si el PEDIDO dice "foto": fotografía realista de calles reales de Mar del Plata a luz de día, con la paleta aplicada como tinte y en los objetos de marca, sin personas identificables de frente.

REGLAS DE SALIDA
- Estructura exacta del prompt, en inglés, un párrafo por etiqueta: [Subject] [Style] [Palette] [Lighting] [Composition] [Quality] [Background] [Negative].
- [Palette]: listá los hex de la marca, con el rol de cada uno. Decí explícitamente cuál es el único acento y su porcentaje máximo.
- [Composition]: formato pedido (4:3, 4:5, 9:16, 16:9, 1:1), sujeto que ocupe cerca del 80 % del ancho con al menos 8 % de margen en cada lado, nada cortado. Si la pieza lleva texto encima (posts, historias, portadas), reservá un área vacía y lisa del color de fondo de la marca, y decí dónde (por ejemplo "upper 40% left empty").
- [Background]: si es un recorte para el sitio (hero card media), usá "Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject". Si es una pieza de redes, usá el color de fondo de la marca, liso.
- [Negative]: siempre incluí "no text, no letters, no numbers, no logos, no brand names, no watermark, no phone numbers, no visible faces, no realistic humans", los colores prohibidos de la marca, y "no flat vector, no cartoon outlines, no cyberpunk neon, nothing cropped".
- Nunca pongas precios, plazos, teléfonos ni textos dentro de la imagen: se agregan después con los datos oficiales.
- Si el PEDIDO pide algo que viola estas reglas (por ejemplo, verde o un azul más oscuro que #0950F6), no lo incluyas y explicá en una línea por qué.

FORMATO DE TU RESPUESTA
1. Formato detectado (una línea).
2. Referencias a adjuntar, en orden, si hacen falta (solo archivos que te nombre en el PEDIDO).
3. El prompt, en un bloque de código.
4. Checklist de 5 puntos para revisar la imagen generada.
5. Dos instrucciones de corrección de un turno para los fallos más probables.

PEDIDO
- Pieza y dónde se usa (hero del sitio, post 4:5, historia 9:16, portada, anuncio):
- Idea o mensaje que tiene que transmitir (sin textos: lo que se tiene que ver):
- Formato:
- ¿Va texto encima? ¿Dónde?:
- Referencias disponibles (archivos que vas a adjuntar):
```

### Ejemplo de PEDIDO

```text
PEDIDO
- Pieza y dónde se usa: hero del sitio, tarjeta derecha de /servicios/envios-lowcost
- Idea: varios paquetes consolidados en una misma ruta programada que termina antes de que caiga el sol
- Formato: 4:3
- ¿Va texto encima?: no, es recorte
```
