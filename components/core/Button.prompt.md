Botón/CTA único de la marca: píldora Bebas Neue en mayúsculas con icono circular a la derecha; usalo para toda acción (hero, nav, formularios, sociales, skip-link).

```jsx
<Button href="/cotizar" size="lg">Cotizá tu envío</Button>
<Button variant="secondary" surface="dark">Ver servicios</Button>
<Button variant="social" href="https://wa.me/542236602699" external icon={<WhatsAppIcon/>}>WhatsApp</Button>
<Button loading>Enviando</Button>
```

- variant: primary (amarillo #FFEC01 + texto azul #0950F6, mismo en light y dark) · secondary (contorno 2px) · ghost (nav) · social (azul-500 sólido, texto blanco; nunca colores de Facebook/Instagram como fondo).
- surface: light | dark. size: sm 44 · md 48 · lg 52. fullWidth. external agrega aviso accesible y rel seguro.
- Estados: hover único (amarillo-400 + cta-glow + icono se rellena), active scale .98, focus-visible anillo 2px (azul en light, amarillo en dark), disabled opacity .5, loading aria-busy + spinner.
- Radio siempre rounded-full. Tracking solo tracking-wider. Nunca font-bold (Bebas solo tiene 400).
