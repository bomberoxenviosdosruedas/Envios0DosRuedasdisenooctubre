# UI kit · sitio enviosdosruedas.com

Recreación click-through del sitio estático (Tailwind v4) con los componentes del sistema. Navegá con el header (dropdowns y menú móvil), las tarjetas y el footer. La ruta se guarda en localStorage.

Pantallas ← HTML de origen:
- **Home** ← home.html: hero con pulse-ring y chips flotantes, cinta de diferenciales, 4 segmentos, carrusel coverflow de servicios (pausable), socio local (logos = placeholder, no hay assets), reseñas filtrables en 2 marquees, CTA con formulario, bloque de redes, footer completo.
- **Express / LowCost / Flex** ← servicios-envios-express, -lowcost, -enviosflex: hero, ventajas, tarifas (PricingCard), casos de uso / cómo funciona / requisitos, CTA. Precios copiados del HTML.
- **Plan emprendedores** ← servicios-plan-emprendedores / deposito-fulfillment: calculador DropOFF (stepper, slider, atajos), planes.
- **Cuenta corriente** ← servicios-empresas-cuenta-corriente: formulario de apertura.
- **FAQ** ← nosotros-preguntas-frecuentes: buscador, 4 categorías, acordeón. Q&A reales (JSON-LD); la asignación a categorías sigue el orden 8/5/5/3 declarado en el sitio (**no verificado** pregunta por pregunta).
- **Nosotros** ← nosotros-sobre-nosotros: ventajas, valores, timeline, equipo, misión/visión.
- **Redes** ← nosotros-nuestras-redes: canales oficiales, publicaciones recientes.
- **Contacto** ← contacto.html.

- **Contrareembolso** ← servicios-envios-contrareembolso: hero con modalidades, pasos, 4 razones, CTA final.

Las 12 páginas del repo tienen pantalla (E-commerce Same Day y Depósito comparten la pantalla de Plan Emprendedores).
No recreado: radar/mapa SVG animado del hero de contacto, "round-trip" de la línea de despacho.
