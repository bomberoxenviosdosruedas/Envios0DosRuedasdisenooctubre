# PROMPTS_GENERACION_OCTUBRE.md

> **Archivo maestro para completar el Design System de Octubre**
> Ubicación de ejecución: `C:\Users\prest\proyectos\Envíos0DosRuedasdiseñooctubre`
> Fuente de verdad (negocio, tarifas, copy, tokens): `C:\Users\prest\proyectos\02enviosdosruedassetiembre`

---

## 🎯 INSTRUCCIÓN MAESTRA PARA EL AGENTE

> **COPIA Y PEGA ESTE BLOQUE EN LA NUEVA SESIÓN DE OCTUBRE:**
>
> ---
>
> **ROL:** Senior Frontend Engineer / Design System Architect
>
> **OBJETIVO:** Completar el Design System de Envíos DosRuedas en `C:\Users\prest\proyectos\Envíos0DosRuedasdiseñooctubre` generando los **38 componentes faltantes** listados abajo, uno por uno, **sin interactuar conmigo hasta culminar los 38**.
>
> **REGLAS ESTRICTAS:**
> 1. **Ejecución secuencial:** Componente 1 → validar → Componente 2 → ... → Componente 38
> 2. **Cero interacción:** No preguntes, no pidas confirmación, no pauses. Si hay ambigüedad, **decide usando la fuente de verdad** (`../02enviosdosruedassetiembre`) y documenta la decisión en el archivo generado.
> 3. **Patrón obligatorio:** Cada componente = 3 archivos:
>    - `components/{categoria}/{Nombre}.jsx` (implementación)
>    - `components/{categoria}/{Nombre}.d.ts` (tipos TypeScript)
>    - `components/{categoria}/{Nombre}.prompt.md` (prompt de generación usado)
> 4. **Composabilidad:** Usa **solo** tokens de `tokens/*.css` (`var(--token-*)`) y componentes ya existentes en octubre (Button, BezelCard, Badge, Input, FeatureCard, PageHero, Section, Display, Lead, etc.). **No inventes valores hardcodeados.**
> 5. **Consistencia visual:** Respeta DESIGN.md v2: 3 colores (#0950F6, #FFEC01, #FFFFFF), Anton/Bebas 400 only, Outfit body, Geist Mono tabular-nums, double bezel, heroes solo azul/amarillo, touch targets ≥44px, `prefers-reduced-motion`.
> 6. **Fuente de negocio:** Tarifas, copy, recargos, horarios, umbrales → `../02enviosdosruedassetiembre/docs/knowledge_base/00-negocio/` y `src/lib/pricing.ts`, `src/lib/promises.ts`.
> 7. **Actualiza `shared.jsx`** al final de cada fase para exportar los nuevos componentes.
> 8. **Valida build** tras cada fase: `npm run build` (o script equivalente del repo).
>
> **ORDEN DE EJECUCIÓN (38 tareas):**
>
> **FASE 1 - TOKENS (5 tareas):**
> 1. `tokens/radius.css` — Añadir `--radius-card`, `--radius-card-inner`, `--radius-control`, `--radius-button`
> 2. `tokens/spacing.css` — Añadir `--control-sm`, `--control-md`, `--control-lg`, `--tap-min`
> 3. `tokens/shadows.css` — Añadir `--shadow-inner`, `--shadow-brutal`, `--shadow-brutal-sm`
> 4. `tokens/typography.css` — Añadir roles `--type-h1` a `--type-data` (ver DESIGN.md §3)
> 5. `tokens/fonts.css` + `public/fonts/` — `@font-face` self-host WOFF2 (Anton, Bebas Neue, Outfit, Geist Mono)
>
> **FASE 2 - CORE PRIMITIVES (5 tareas):**
> 6. `components/core/RadioCardGroup.jsx` + `.d.ts` + `.prompt.md`
> 7. `components/core/BentoGrid.jsx` + `.d.ts` + `.prompt.md`
> 8. `components/core/StepperHorizontal.jsx` + `.d.ts` + `.prompt.md`
> 9. `components/core/StepperVertical.jsx` + `.d.ts` + `.prompt.md`
> 10. `components/core/AddressAutocomplete.jsx` + `.d.ts` + `.prompt.md`
>
> **FASE 3 - DATA COMPONENTS (4 tareas):**
> 11. `components/data/ServicePricing.jsx` + `.d.ts` + `.prompt.md`
> 12. `components/data/DropoffCalculator.jsx` + `.d.ts` + `.prompt.md`
> 13. `components/data/CoverageMap.jsx` + `.d.ts` + `.prompt.md`
> 14. `components/data/NetworkLogos.jsx` + `.d.ts` + `.prompt.md`
>
> **FASE 4 - BLOCKS (11 tareas):**
> 15. `components/blocks/HeroAnimated.jsx` + `.d.ts` + `.prompt.md`
> 16. `components/blocks/ServiceComparison.jsx` + `.d.ts` + `.prompt.md`
> 17. `components/blocks/SurchargesPanel.jsx` + `.d.ts` + `.prompt.md`
> 18. `components/blocks/QuoteGuide.jsx` + `.d.ts` + `.prompt.md`
> 19. `components/blocks/ContactFormBlock.jsx` + `.d.ts` + `.prompt.md`
> 20. `components/blocks/ConversionBanner.jsx` + `.d.ts` + `.prompt.md`
> 21. `components/blocks/FaqSearch.jsx` + `.d.ts` + `.prompt.md`
> 22. `components/blocks/TeamGrid.jsx` + `.d.ts` + `.prompt.md`
> 23. `components/blocks/MissionVision.jsx` + `.d.ts` + `.prompt.md`
> 24. `components/blocks/NetworkChannels.jsx` + `.d.ts` + `.prompt.md`
> 25. `components/blocks/RecentPosts.jsx` + `.d.ts` + `.prompt.md`
>
> **FASE 5 - LAYOUT VARIANTS (4 tareas):**
> 26. `components/layout/OptimizedHeader.jsx` + `.d.ts` + `.prompt.md`
> 27. `components/layout/OptimizedFooter.jsx` + `.d.ts` + `.prompt.md`
> 28. `components/layout/MobileNav.jsx` + `.d.ts` + `.prompt.md`
> 29. `components/layout/SocialCarousel.jsx` + `.d.ts` + `.prompt.md`
>
> **FASE 6 - PAGES / UI_KITS (7 tareas):**
> 30. Actualizar `ui_kits/website/HomeScreen.jsx` → HeroAnimated, BentoGrid, NetworkLogos
> 31. Crear `ui_kits/website/CotizadorScreen.jsx` (página completa nueva)
> 32. Actualizar `ui_kits/website/NosotrosScreen.jsx` → TeamGrid, MissionVision
> 33. Actualizar `ui_kits/website/ContactoScreen.jsx` → ContactFormBlock, ConversionBanner
> 34. Actualizar `ui_kits/website/FaqScreen.jsx` → FaqSearch
> 35. Actualizar `ui_kits/website/RedesScreen.jsx` → NetworkChannels, RecentPosts, SocialCarousel
> 36. Actualizar `ui_kits/website/EmprendedoresScreen.jsx` → DropoffCalculator
> 37. Actualizar `ui_kits/website/shared.jsx` → exportar todos los nuevos componentes
> 38. Verificar `index.html` y consistencia visual completa
>
> **ENTREGA FINAL:** Reporte `GENERACION_REPORT.md` con:
> - ✅/❌ por cada uno de los 38 ítems
> - Decisiones tomadas (fuentes, ambigüedades resueltas)
> - Componentes que requieren revisión manual
> - Comandos de validación ejecutados y resultado
>
> ---
> **INICIA AHORA CON TAREA 1. NO TE DETENGAS HASTA TAREA 38.**
>
> ---

---

## 📦 38 PROMPTS INDIVIDUALES (CONTEXTO LISTO PARA COPIAR/PEgar)

> Cada prompt abajo está diseñado para ser copiado y ejecutado independientemente si se prefiere control granular. El prompt maestro arriba ya los encadena.

---

### FASE 1 — TOKENS BASE

#### PROMPT 1 — `tokens/radius.css` (completar radius semánticos)
```
Completa tokens/radius.css añadiendo estos radius semánticos que usan los componentes pero no existen:
--radius-card: 16px;           /* DoubleBezelCard outer */
--radius-card-inner: 12px;     /* DoubleBezelCard inner */
--radius-control: 12px;        /* Input, Select, Textarea */
--radius-button: 9999px;       /* Botones, Badges, Pills (=== --radius-full) */

Fuente de verdad: DESIGN.md §4.4 (BezelCard), §4.3 (Input), §4.1 (Button), src/components/ui/DoubleBezelCard.tsx (rounded-2xl/rounded-xl), src/components/ui/InputField.tsx (rounded-xl).
No uses valores hardcodeados en componentes: todos deben referenciar var(--radius-*). Guarda el archivo y verifica que no rompe nada.
```

#### PROMPT 2 — `tokens/spacing.css` (controles táctiles)
```
Completa tokens/spacing.css añadiendo tokens de control táctil (mínimo 44px):
--control-sm: 44px;   /* Botón sm, Input height */
--control-md: 48px;   /* Botón md */
--control-lg: 52px;   /* Botón lg */
--tap-min: 44px;      /* Mínimo absoluto WCAG */

Fuente: DESIGN.md §4.1 (Button SIZES), §4.3 (Input minHeight), src/components/ui/CTANestedPill.tsx (min-h-[44px]/[48px]/[52px]), src/components/ui/InputField.tsx (h-11 = 44px).
Añade también --page-gutter: 1rem, --page-gutter-sm: 1.5rem, --page-gutter-lg: 2rem, --section-y: 3rem, --section-y-sm: 4rem, --section-y-lg: 6rem, --header-height: 72px si no existen.
```

#### PROMPT 3 — `tokens/shadows.css` (sombras faltantes)
```
Completa tokens/shadows.css con sombras que usan componentes pero no están definidas:
--shadow-inner: inset 0 2px 4px rgba(9, 80, 246, 0.06);          /* BezelCard inner panel */
--shadow-brutal: 4px 4px 0 0 var(--color-brand-blue-500);         /* Estilo brutalista (hover lift) */
--shadow-brutal-sm: 2px 2px 0 0 var(--color-brand-blue-500);      /* Versión sutil */

Fuente: DESIGN.md §4.4 (BezelCard inner shadow), src/components/ui/DoubleBezelCard.tsx (inset shadow), DESIGN.md §6.7 (sombra brutalista ×19).
Todas las sombras deben usar rgba(9, 80, 246, alpha) — NUNCA grises/negros. Tope #0950F6.
```

#### PROMPT 4 — `tokens/typography.css` (roles semánticos --type-*)
```
Completa tokens/typography.css añadiendo los roles tipográficos semánticos (ya definidos en DESIGN.md §3):
--type-h1: 400 clamp(2.25rem, 6vw, 4.5rem)/var(--leading-display) var(--font-display);
--type-h2: 400 clamp(1.875rem, 4vw, 3rem)/1.1 var(--font-display);
--type-h3: 400 1.5rem/1.3333 var(--font-display);
--type-sub: 400 1rem/1 var(--font-subheading);
--type-label: 400 .75rem/1.3333 var(--font-subheading);
--type-body: 400 1rem/1.625 var(--font-sans);
--type-body-sm: 400 .875rem/1.625 var(--font-sans);
--type-data: 400 .875rem/1.4286 var(--font-mono);

Verifica que --font-display="Anton", --font-subheading="Bebas Neue", --font-sans="Outfit", --font-mono="Geist Mono" estén declarados SIN auto-referencia (ver DESIGN.md §3 problema de pesos).
Elimina --text-2xs (10px) de uso — piso legibilidad 12px.
```

#### PROMPT 5 — `tokens/fonts.css` + `public/fonts/` (self-host WOFF2)
```
1. Convierte los TTF de uploads/ a WOFF2 (woff2_compress) y colócalos en public/fonts/:
   - Anton-Regular.woff2
   - BebasNeue-Regular.woff2
   - Outfit-VariableFont_wght.woff2
   - GeistMono-VariableFont_wght.woff2
   (AntonSC-Regular y duplicado Bebas no se usan)

2. Crea/actualiza tokens/fonts.css con @font-face explícitos:
   @font-face { font-family: "Anton"; src: url("/fonts/Anton-Regular.woff2") format("woff2"); font-weight: 400; font-display: swap; }
   @font-face { font-family: "Bebas Neue"; src: url("/fonts/BebasNeue-Regular.woff2") format("woff2"); font-weight: 400; font-display: swap; }
   @font-face { font-family: "Outfit"; src: url("/fonts/Outfit-VariableFont_wght.woff2") format("woff2-variations"); font-weight: 100 900; font-display: swap; }
   @font-face { font-family: "Geist Mono"; src: url("/fonts/GeistMono-VariableFont_wght.woff2") format("woff2-variations"); font-weight: 100 900; font-display: swap; }

3. En tokens/typography.css cambia --font-* a valores directos (sin var(--font-*, fallback)):
   --font-display: "Anton", Impact, sans-serif;
   --font-subheading: "Bebas Neue", Impact, sans-serif;
   --font-sans: "Outfit", "IBM Plex Sans", ui-sans-serif, system-ui, sans-serif;
   --font-mono: "Geist Mono", ui-monospace, monospace;

Fuente: DESIGN.md §3 (carga Google Fonts decidida por usuario; self-host como respaldo). El repo actual usa next/font implícito; octubre debe ser portable.
```

---

### FASE 2 — CORE PRIMITIVES

#### PROMPT 6 — `components/core/RadioCardGroup.jsx`
```
Crea RadioCardGroup: selector de servicio interactivo (Express/LowCost/Flex) con estados checked diferenciados por tipo.

Props (TypeScript en .d.ts):
interface RadioCardOption {
  id: string;
  label: string;
  description?: string;
  price?: string;
  badge?: string;
  serviceType: 'EXPRESS' | 'LOW_COST' | 'FLEX';
  icon?: React.ReactNode;
  disabled?: boolean;
}
interface RadioCardGroupProps {
  options: RadioCardOption[];
  value: string;
  onChange: (value: string) => void;
  name?: string;
  className?: string;
  gridCols?: string; // default: "grid-cols-1 md:grid-cols-3"
}

Comportamiento (basado en src/components/ui/RadioCardGroup.tsx del repo actual):
- role="radiogroup" accesible, navegación teclado (Space/Enter)
- Grid responsive: 1 col mobile, 3 col desktop
- Card base: BezelCard tone="light", p-6, border-2 border-brand-blue-100
- Checked Express: tone="dark" (azul-500 bg, blanco texto), badge accent amarillo, icon bg white/20, check amarillo
- Checked LowCost: tone="light" azul-50 bg, borde azul-200, texto azul-500, badge muted
- Checked Flex: tone="light" amarillo-50 bg, borde amarillo-200, texto azul-500, badge accent
- Hover lift: translateY(-4px) + shadow-antigravity-deep
- Precio en Geist Mono tabular-nums, label "DESDE" en Bebas uppercase
- Focus-visible ring 2px brand-blue-500

Tokens: var(--color-brand-blue-500), var(--color-brand-yellow-500), var(--color-brand-blue-50), var(--color-brand-blue-100), var(--color-brand-blue-200), var(--color-brand-yellow-50), var(--color-brand-yellow-100), var(--shadow-float), var(--shadow-antigravity-deep), var(--radius-card), var(--radius-card-inner), var(--control-sm), var(--font-display), --font-subheading, --font-sans, --font-mono, --tracking-wider, --ease-spring, --duration-slow.

Componibilidad: usa BezelCard, Badge, Button (icon), Display/Lead para textos.
```

#### PROMPT 7 — `components/core/BentoGrid.jsx`
```
Crea BentoGrid + BentoGridItem: layout asimétrico 12-columnas para showcase de servicios (Home, páginas servicio).

BentoGrid Props:
interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
  gap?: string; // default: "gap-6 lg:gap-8"
  autoRows?: string; // default: "auto-rows-[minmax(340px,auto)] md:auto-rows-95"
}

BentoGridItem Props:
interface BentoGridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  span: '7' | '5' | '12' | 'hero' | 'standard' | 'full' | number; // 7=hero(7/5), 5=standard(5/7), 12=full
  className?: string;
  doubleBezel?: boolean; // default: true
  variant?: 'light' | 'dark' | 'accent'; // para BezelCard
  innerClassName?: string;
}

Span mapping:
- 7 | 'hero' → col-span-1 md:col-span-12 lg:col-span-7
- 5 | 'standard' → col-span-1 md:col-span-6 lg:col-span-5
- 12 | 'full' → col-span-1 md:col-span-12 lg:col-span-12
- number → col-span-1 md:col-span-{min(n,12)} lg:col-span-{n}

Si doubleBezel=true, envuelve children en BezelCard con variant e innerClassName.
Mobile first: todo col-span-1 (full width).
Gap: var(--spacing-6) / var(--spacing-8) en lg.

Fuente: src/components/ui/BentoGrid.tsx (actual), HomeScreen.jsx (uso real: Express=span7, LowCost=span5, Flex=span5, Emprendedores=span7).
```

#### PROMPT 8 — `components/core/StepperHorizontal.jsx`
```
Crea StepperHorizontal: stepper de flujo horizontal para cotizador (pasos: 1. Datos → 2. Servicio → 3. Confirmación).

Props:
interface HorizontalStep { title: string; subtitle?: string; }
interface StepperHorizontalProps {
  steps: HorizontalStep[];
  currentStep: number; // 0-indexed
  onStepClick?: (stepIndex: number) => void;
  className?: string;
}

Visual (basado en src/components/ui/StepperHorizontal.tsx):
- Línea base: 2px brand-blue-100, full width
- Línea progreso: brand-yellow-500, width = (currentStep / (steps.length-1)) * 100%
- Círculos 40px (var(--control-md)):
  - Completed: bg brand-yellow-500, border brand-yellow-500, icon Check (blanco), label azul-500
  - Active: bg brand-blue-500, border brand-blue-500, texto blanco, ring 4px brand-blue-500/20, scale-105
  - Pending: bg white, border brand-blue-300, texto azul-500
- Labels: Bebas Neue 400, text-xs, uppercase, tracking-wider
- Subtitle: Geist Mono text-[11px], azul-500
- Accesible: role="button" si onStepClick, tabindex, Enter/Space
- Hover clickable: scale-110
- Transiciones: var(--ease-spring), var(--duration-slow)

Tokens: var(--color-brand-blue-100), var(--color-brand-yellow-500), var(--color-brand-blue-500), var(--color-brand-blue-300), var(--color-white), var(--control-md), var(--radius-full), var(--font-subheading), var(--font-mono), --tracking-wider, --ease-spring, --duration-slow.
```

#### PROMPT 9 — `components/core/StepperVertical.jsx`
```
Crea StepperVertical: stepper vertical alternativo (lista numerada 01·02·03 con cards).

Props:
interface VerticalStep { title: string; subtitle?: string; body?: string; }
interface StepperVerticalProps {
  steps: VerticalStep[];
  currentStep: number;
  onStepClick?: (stepIndex: number) => void;
  className?: string;
}

Visual (referencia: components/blocks/Steps.jsx existente + src/components/ui/StepperVertical.tsx actual):
- Lista <ol> con grid auto-fit minmax(240px,1fr), gap 20
- Cada item: BezelCard (tone según contexto), hoverLift=false
- Número: círculo 44px (var(--tap-min)), border-radius-full
  - Completed: bg brand-yellow-500, texto brand-blue-500, font-mono 700 16px tabular-nums
  - Active: bg brand-blue-500, texto blanco, ring brand-blue-500/20
  - Pending: bg brand-blue-100, texto brand-blue-500
- Título: Bebas 22px uppercase tracking-wider
- Body: Outfit 14px/1.625
- Subtitle: Geist Mono 12px

Diferencia con Steps.jsx: Steps es para "cómo funciona" (pasos de servicio), StepperVertical es para flujo de UI (progreso de formulario). Mantén ambos.
```

#### PROMPT 10 — `components/core/AddressAutocomplete.jsx`
```
Crea AddressAutocomplete: autocompletado origen/destino para cotizador (barrios Mar del Plata).

Props:
interface AddressAutocompleteProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
  type?: 'origin' | 'destination';
  value: string;
  onChange: (value: string) => void;
  onSelect?: (place: { name: string; address: string; lat: number; lng: number }) => void;
  error?: string;
  disabled?: boolean;
  className?: string;
}

Comportamiento (basado en src/components/ui/AddressAutocomplete.tsx):
- Extiende Input (usa BezelCard? No, Input directo con dropdown)
- Dropdown absolute bajo input, max-h-60 overflow-auto
- Datasource: barrios MDQ locales (array estático desde ../02enviosdosruedassetiembre/src/lib/barrios-mdq.ts o similar) — **NO Google Places API** (0 deps, 0 coste)
- Filtro: match case-insensitive en nombre + dirección
- Teclado: ArrowUp/Down, Enter para seleccionar, Escape para cerrar
- Al seleccionar: llama onSelect con {name, address, lat, lng} y setea value en input
- Estados: loading (spinner), empty ("No se encontraron barrios"), error
- Accesible: role="combobox", aria-expanded, aria-activedescendant, aria-controls

Tokens: var(--color-brand-blue-500), var(--color-brand-blue-100), var(--color-brand-blue-300), var(--color-brand-blue-400), var(--color-brand-blue-50), var(--color-white), var(--color-error-500), var(--control-sm), var(--radius-control), var(--font-subheading), var(--font-sans), var(--font-mono), --tracking-wider, --ease-default, --duration-base.

Componibilidad: usa Input (core) como base + dropdown custom.
```

---

### FASE 3 — DATA COMPONENTS

#### PROMPT 11 — `components/data/ServicePricing.jsx`
```
Crea ServicePricing: tarjeta de precios genérica por servicio (reemplaza ExpressPricing, LowCostPricing, FlexPricing, EmprendedoresPricing sueltos del repo actual).

Props:
interface PriceTier { range: string; distance: string; price: string; features: string[]; tag?: string; note?: string; }
interface ServicePricingProps {
  serviceType: 'EXPRESS' | 'LOW_COST' | 'FLEX' | 'ECOMMERCE_24HS' | 'ECOMMERCE_SAME_DAY' | 'CONTRAREEMBOLSO' | 'CUENTA_CORRIENTE';
  title: string;
  rangeLabel: string; // ej: "Por envío en MDQ"
  unit: string; // ej: "/ despacho final", "/ liquidación quincenal"
  tiers: PriceTier[];
  ctaLabel: (tierIndex: number) => string;
  onCta: (tierIndex: number) => void;
  featuredIndex?: number; // índice del tier destacado (default: 1 para Flex Nivel 2)
  className?: string;
}

Visual (basado en ui_kits/website/ServicioScreen.jsx → PricingCard + repo actual ExpressPricing/LowCostPricing/FlexPricing):
- Grid responsive: min 220px-260px según cantidad de tiers
- Cada tier: BezelCard (featured → tone="accent" o border brand-yellow-500 2px)
- Header: título (Bebas), rango distancia, badge si featured
- Precio: Geist Mono 700 32px+ tabular-nums, unit en mono 14px
- Features: lista con Icon check (brand-blue-500), Outfit 14px
- Note: mono 12px muted si existe
- CTA: Button fullWidth, variant según serviceType (Express=primary, LowCost=secondary, Flex=social, etc.)

Datos de negocio (fuente: ../02enviosdosruedassetiembre/src/lib/pricing.ts + promises.ts):
- EXPRESS: tiers 0-3/3-5/5-7/7-10 km ($3700/4600/6100/8200) + $1000/km >10km
- LOW_COST: tiers 0-3/3-5/5-7/7-10 km ($3000/4000/5300/7000) + $700/km >10km
- FLEX: Nivel 1 $3000, Nivel 2 $6500 [SIN CONFIRMAR], Nivel 3 $4500 [SIN CONFIRMAR] — ver AGENTS.md
- ECOMMERCE_24HS: $3800 fijo (confirmado 2026-09-29)
- ECOMMERCE_SAME_DAY: $6000 fijo
- CONTRAREEMBOLSO: comisión 0%
- PERIPHERY: $1000/km ruta (confirmado 2026-09-30)

Tokens: colores, spacing, radius, shadows, tipografía del sistema.
```

#### PROMPT 12 — `components/data/DropoffCalculator.jsx`
```
Crea DropoffCalculator: calculadora interactiva DropOFF -20% (EmprendedoresScreen).

Props:
interface DropoffCalculatorProps {
  basePrice?: number; // default: 2400 (20% off $3000)
  discountPercent?: number; // default: 20
  initialValue?: number; // default: 120
  onCalculate?: (shipments: number, savings: number) => void;
  className?: string;
}

Visual (basado en ui_kits/website/EmprendedoresScreen.jsx líneas 13-22):
- BezelCard tone="light" padding 24
- Label "Envíos por mes" (Bebas 14px uppercase tracking-wider)
- QuantityStepper (nuevo, ver Prompt 22) + input range sync
- FilterChips atajos: ["25", "100", "250", "500"] → setean valor
- Resultado: "Ahorro estimado" + Geist Mono 700 40px tabular-nums + "/ mes" mono 12px
- Nota: "Base: $X por envío − Y% (cifra de ejemplo del sitio)"
- CTA: Button fullWidth external href WhatsApp con mensaje prellenado: "Hola! Manejo aprox. N envíos por mes y quiero activar DropOFF (Y% off) en Mar del Plata."

Cálculo: savings = Math.round(basePrice * discountPercent / 100) * shipments
Base price real: desde $3000 (tarifa LowCost zona 1) -20% = $2400. Ver promises.ts DROPOFF_DISCOUNT_PERCENT=20.

Tokens: var(--color-brand-blue-500), var(--color-brand-yellow-500), var(--color-brand-blue-100), var(--font-subheading), var(--font-mono), var(--font-sans), --tracking-wider, --ease-spring, --duration-cta.
Componibilidad: usa BezelCard, QuantityStepper, FilterChips, Button.
```

#### PROMPT 13 — `components/data/CoverageMap.jsx`
```
Crea CoverageMap: mapa de cobertura interactivo (página /cobertura, cotizador).

Props:
interface CoverageMapProps {
  center?: [number, number]; // default: Mar del Plata [-38.0, -57.55]
  zoom?: number; // default: 12
  zones?: Array<{ id: string; name: string; polygon: [number,number][]; color: string }>;
  markers?: Array<{ position: [number,number]; popup: string; icon?: string }>;
  readonly?: boolean;
  className?: string;
}

Implementación:
- OPCIÓN A (preferida): Leaflet ligero (como src/components/ui/LeafletRouteMap.tsx actual) — si bundle lo permite
- OPCIÓN B: Imagen estática SVG/WebP de mapa MDQ con zonas coloreadas + tooltips CSS-only
- Decide basándote en bundle size: si Leaflet >50kb gz, usa OPCIÓN B

Features mínimos:
- Zonas coloreadas: Express (azul), LowCost (azul claro), Flex (amarillo), Periferia (gris)
- Hover zona → tooltip con nombre + tarifa base
- Click zona → callback con zoneId
- Marcadores: base Friuli 1972, puntos de retiro
- Responsive: 100% width, aspect-ratio 4/3 mobile, 16/9 desktop
- prefers-reduced-motion: desactivar animaciones zoom/pan

Tokens: var(--color-brand-blue-500), var(--color-brand-blue-100), var(--color-brand-blue-50), var(--color-brand-yellow-500), var(--color-brand-yellow-100), var(--color-neutral-50), var(--radius-card), var(--shadow-float).

Fuente zonas: ../02enviosdosruedassetiembre/src/components/cobertura/CoberturaExplorer.tsx
```

#### PROMPT 14 — `components/data/NetworkLogos.jsx`
```
Crea NetworkLogos: carrusel de logos de marcas/clientes (Home, Footer).

Props:
interface NetworkLogosProps {
  logos: Array<{ src: string; alt: string; href?: string }>;
  speed?: number; // default: 30s (marquee-left)
  gap?: number; // default: 40
  className?: string;
}

Visual (basado en src/components/ui/LogosCarousel.tsx + HomeScreen.jsx líneas 65-66):
- Marquee CSS (var(--animate-marquee-left) 30s linear infinite)
- Pause on hover
- prefers-reduced-motion: animation-play-state: paused
- Logos: altura fija 48px, width auto, object-contain, filter grayscale(100%) opacity-60 → hover grayscale(0) opacity-100
- Gap: var(--spacing-10) (40px)
- Duplica array para loop infinito sin salto

Tokens: var(--color-brand-blue-500), var(--color-brand-blue-100), var(--animate-marquee-left), --ease-spring, --duration-carousel.
Componibilidad: usa Marquee (layout) como base o replica su lógica CSS.
```

---

### FASE 4 — BLOCKS

#### PROMPT 15 — `components/blocks/HeroAnimated.jsx`
```
Crea HeroAnimated: Hero con animaciones procedimentales (extiende PageHero) para Home.

Props:
interface HeroAnimatedProps {
  children: React.ReactNode;
  aside?: React.ReactNode;
  className?: string;
  // Props de PageHero: tone, id, style
}

Animaciones (basado en src/components/ui/HeroProceduralBackground.tsx + HeroAnimado.tsx actual + PageHero.jsx):
- Grilla punteada 48px (ya en PageHero)
- Blobs blur: 2-3 capas radial-gradient con animate-float-slow (6s) / animate-floaty (5s)
- Radar sweep: SVG circle stroke-dashoffset animate-draw (2.4s) + animate-radar (6s linear)
- Shuttle: elemento (moto/pin) animate-shuttle (5s cubic-bezier) alternate
- Pulse rings: animate-pulse-ring (3.2s spring)
- Roundtrip: moto ida-vuelta animate-roundtrip (4.8s)
- TODAS gateadas por @media (prefers-reduced-motion: reduce) → animation: none

Implementación:
- Extiende PageHero (tone="blue", aside=mapa/pin animado)
- Añade capa <div className="hero-animations"> con SVGs absolutos
- Usa var(--animate-*) tokens de motion.css
- Moto/pin: SVG inline o <Image> de assets/heroes/inicio-mapa.webp

Tokens: var(--color-brand-blue-500), var(--color-brand-yellow-500), var(--color-white), var(--animate-float-slow), var(--animate-floaty), var(--animate-radar), var(--animate-shuttle), var(--animate-draw), var(--animate-pulse-ring), var(--animate-roundtrip), var(--ease-spring), --duration-kinetic.
```

#### PROMPT 16 — `components/blocks/ServiceComparison.jsx`
```
Crea ServiceComparison: tabla comparativa de servicios (cotizador, página servicios).

Props:
interface ComparisonRow { feature: string; express: string; lowcost: string; flex: string; emprendedores?: string; }
interface ServiceComparisonProps {
  rows: ComparisonRow[];
  className?: string;
}

Visual (basado en repo actual: no existe tabla comparativa unificada; crear desde cero):
- Tabla responsive: mobile → cards apiladas, desktop → <table> semantic
- Header: Servicio | Express | LowCost | Flex | Emprendedores
- Filas: feature (Bebas 14px) + valores por servicio (Outfit 14px)
- Highlights: check verde (success-500) / cruz roja (error-500) / texto
- Sticky header en scroll
- Row hover: bg brand-blue-50
- Zebra striping: nth-child(even) bg brand-blue-50/50

Datos (fuente: ../02enviosdosruedassetiembre/docs/knowledge_base/00-negocio/servicios.md):
- Franja horaria: Express 3hs a elección | LowCost sin franja | Flex corte 15:00 | Emprendedores same-day
- Corte: Express 15:00 | LowCost 13:00 | Flex 15:00 | Emprendedores 13:00
- Peso sin cargo: 5kg / 40x40cm (todos)
- Recargo lluvia: Express/LowCost 50% | Flex 30% | Emprendedores 30%
- Contrareembolso: Express/LowCost sí | Flex sí | Emprendedores sí ($0 comisión)
- DropOFF -20%: solo Emprendedores/E-commerce 24HS
- Cobertura: todos MDQ urbana; Periferia $1000/km ruta

Tokens: var(--color-brand-blue-500), var(--color-brand-blue-50), var(--color-brand-blue-100), var(--color-brand-yellow-500), var(--color-success-500), var(--color-error-500), var(--font-subheading), var(--font-sans), var(--font-mono), --tracking-wider, --radius-control, var(--shadow-sm).
```

#### PROMPT 17 — `components/blocks/SurchargesPanel.jsx`
```
Crea SurchargesPanel: panel de recargos operativos (cotizador, páginas de servicio).

Props:
interface SurchargeItem { label: string; value: string; condition: string; appliesTo: ('EXPRESS'|'LOW_COST'|'FLEX'|'ALL')[]; }
interface SurchargesPanelProps {
  items?: SurchargeItem[]; // default: desde promises.ts
  serviceFilter?: 'EXPRESS' | 'LOW_COST' | 'FLEX' | 'ALL';
  className?: string;
}

Visual (fuente: ../02enviosdosruedassetiembre/src/lib/promises.ts líneas 41-59 + src/components/cotizar/unified/CotizadorRecargos.tsx):
- BezelCard tone="light" o Section bg="var(--color-neutral-50)"
- Grid 2 cols mobile, 4 cols desktop
- Cada item: Icon + Label (Bebas 12px) + Valor (Mono 16px bold) + Condición (Outfit 12px muted)
- Iconos: 🌧️ Lluvia, ⏱️ Espera, 📍 Parada, 🔄 Reintento, 🚛 Periferia, 📦 Bulto extra
- Valores desde promises.ts:
  - RAIN_SURCHARGE_PERCENT_EXPRESS_LOWCOST = 50%
  - RAIN_SURCHARGE_PERCENT = 30% (otros)
  - WAIT_TOLERANCE_MIN = 10, WAIT_CHARGE_ARS = 2100 c/10min
  - EXTRA_STOP_SURCHARGE_PERCENT = 50%, EXTRA_STOP_MAX_DETOUR_KM = 2
  - RETRY_CHARGE_PERCENT = 100%
  - PERIPHERY_PRICE_PER_KM = 1000
  - BULK_EXTRA_FROM_ARS = 1950
- Filtro por servicio (tabs o chips): muestra solo los que aplican

Tokens: colores, tipografía, spacing, BezelCard, Badge (para tags de servicio).
```

#### PROMPT 18 — `components/blocks/QuoteGuide.jsx`
```
Crea QuoteGuide: guía paso a paso del cotizador (pasos laterales o superior).

Props:
interface GuideStep { step: number; title: string; description: string; icon?: React.ReactNode; }
interface QuoteGuideProps {
  steps: GuideStep[];
  currentStep: number;
  orientation?: 'horizontal' | 'vertical'; // default: horizontal
  className?: string;
}

Visual (basado en src/components/cotizar/unified/CotizadorGuia.tsx):
- Horizontal: StepperHorizontal (ya existe) + descripciones expandibles
- Vertical: lista numerada 01/02/03 con BezelCard, step actual highlighted
- Icons: 1. Pin (origen/destino) 2. Bike (servicio) 3. Check (confirmar)
- Copy: voseo rioplatense ("Elegí origen y destino", "Seleccioná tu servicio", "Confirmá y listo")

Tokens: StepperHorizontal, BezelCard, Display, Lead, Badge, Icon.
```

#### PROMPT 19 — `components/blocks/ContactFormBlock.jsx`
```
Crea ContactFormBlock: formulario de contacto reutilizable (Contacto, Cotizador, Landing).

Props:
interface ContactFormBlockProps {
  title?: string;
  lead?: string;
  submitLabel?: string;
  whatsappNumber?: string; // default: +542236602699
  onSubmit?: (data: { name: string; company?: string; volume: string }) => void;
  className?: string;
  variant?: 'inline' | 'modal' | 'banner'; // default: inline
}

Visual (basado en ui_kits/website/ContactoScreen.jsx líneas 19-29 + shared.jsx CtaForm):
- BezelCard tone="light" (inline) / tone="dark" (modal/banner)
- Campos: Input nombre (required), Input empresa (optional), Select volumen ["1-50","50-200","200+"]
- Submit: Button fullWidth loading state, icon WhatsApp
- Estados: idle → loading (spinner) → done (mensaje + abrir WhatsApp)
- WhatsApp deep link: `https://wa.me/542236602699?text=${encodeURIComponent(\`Hola! Soy ${name} de ${company||'mi comercio'}. Manejo ${volume} envíos/mes y quiero cotizar.\`)}`
- Validación: nombre required, muestra error inline (role="alert", mono 11px error-600)
- Accesible: labels asociados, aria-describedby, focus management

Tokens: Input, Button, BezelCard, Badge, var(--color-brand-blue-500), var(--color-brand-yellow-500), var(--color-error-500), var(--color-error-600), --control-sm, --radius-control, --font-subheading, --font-sans, --font-mono.
```

#### PROMPT 20 — `components/blocks/ConversionBanner.jsx`
```
Crea ConversionBanner: banner CTA destacado (Home, páginas servicio, Footer).

Props:
interface ConversionBannerProps {
  eyebrow?: string;
  title: string;
  mark?: string; // palabra resaltada en píldora amarilla rotada -1°
  lead?: string;
  ctaLabel: string;
  ctaHref?: string;
  ctaOnClick?: () => void;
  secondaryLabel?: string;
  secondaryHref?: string;
  background?: 'blue' | 'yellow' | 'dark'; // default: blue
  className?: string;
}

Visual (basado en src/components/home/CtaSection.tsx + src/components/contacto/ConversionBanner.tsx + shared.jsx CtaForm + OptimizedFooter banner):
- Section bg según background: blue=brand-blue-500, yellow=brand-yellow-500, dark=brand-blue-500
- Contenido centrado max-w-3xl
- Eyebrow: Badge tone="accent" (blue bg) o "invert" (yellow/dark bg)
- Title: Display (H1) + Mark (píldora amarilla rotada -1° sobre azul, azul rotada -1° sobre amarillo)
- Lead: Lead invert
- CTA principal: Button size="lg" variant="primary" (blue bg) o "social" (yellow bg)
- CTA secundario: Button variant="secondary" surface="dark" (blue bg) o "ghost"
- Animación entrada: whileInView fade-up stagger (Framer Motion) — gateado prefers-reduced-motion

Tokens: PageHero/Section/SectionHead/Display/Lead/Mark/Badge/Button, var(--animate-float-slow), var(--ease-spring).
```

#### PROMPT 21 — `components/blocks/FaqSearch.jsx`
```
Crea FaqSearch: buscador de FAQ con filtro por categoría (página /nosotros/preguntas-frecuentes).

Props:
interface FaqCategory { name: string; desc: string; icon: string; items: Array<{q:string; a:string}>; }
interface FaqSearchProps {
  categories: FaqCategory[];
  className?: string;
  onSearch?: (query: string, results: Array<{q:string; a:string; category:string}>) => void;
}

Visual (basado en ui_kits/website/FaqScreen.jsx líneas 16-24):
- Input search: Input as="search" placeholder "Ej: horario, zonas, peso, contrareembolso" icon Search
- Chips categoría: FilterChips (existente) con count badges (mono 12px)
- Resultados: Accordion (existente) con items filtrados
- Empty state: "No encontramos preguntas con ese término. Escribinos por WhatsApp..."
- Contadores: "21 preguntas · 4 categorías · +54 223 660-2699" (mono 14px)
- Categoría activa: bg brand-blue-500, texto blanco; inactiva: bg white, borde brand-blue-100

Datos: FAQ array de ui_kits/website/FaqScreen.jsx (21 preguntas, 4 categorías: Servicios, Tarifas, Operativa, Confianza).
Tokens: Input, FilterChips, Accordion, Display, Lead, Badge, var(--color-brand-blue-500), var(--color-brand-yellow-500), var(--color-brand-blue-100), var(--font-subheading), --tracking-wider.
```

#### PROMPT 22 — `components/blocks/TeamGrid.jsx`
```
Crea TeamGrid: grid de estadísticas/equipo (NosotrosScreen).

Props:
interface TeamStat { value: string; label: string; title: string; body: string; icon?: string; }
interface TeamGridProps {
  stats: TeamStat[];
  className?: string;
}

Visual (basado en ui_kits/website/NosotrosScreen.jsx líneas 4-5, 16-17 TEAM array):
- Grid auto-fit minmax(240px,1fr), gap 24
- Cada item: BezelCard tone="dark" hoverLift=false
- Estructura:
  - Tag: Bebas 14px uppercase tracking-wider amarillo-500
  - Valor: Geist Mono 700 44px tabular-nums (ej: "+20", "100%", "< 2 h", "+7")
  - Título: Bebas 20px uppercase tracking-wider blanco
  - Body: Outfit 14px/1.625 rgba(255,255,255,.85)

Datos TEAM (4 items):
1. "+20" / "Repartidores en calle" / "Flota propia" / "Cadetes capacitados y uniformados..."
2. "100%" / "Base operativa en MDQ" / "Hub Chauvín" / "Depósito central en Friuli 1972..."
3. "< 2 h" / "Tiempo promedio Express" / "Máxima velocidad" / "Servicio prioritario punto a punto..."
4. "+7" / "Años de trayectoria" / "Confianza local" / "Compromiso ininterrumpido..."

Tokens: BezelCard, var(--color-brand-blue-500), var(--color-brand-yellow-500), var(--color-white), var(--font-subheading), var(--font-mono), var(--font-sans), --tracking-wider, --tracking-mega, --ease-spring.
```

#### PROMPT 23 — `components/blocks/MissionVision.jsx`
```
Crea MissionVision: bloque Misión / Visión / Compromiso (NosotrosScreen final).

Props:
interface MissionVisionProps {
  mission: { title: string; body: string };
  vision: { title: string; body: string; badge?: string };
  commitment: { title: string; body: string; ctaPrimary: {label:string; href:string}; ctaSecondary: {label:string; href:string} };
  className?: string;
}

Visual (basado en ui_kits/website/NosotrosScreen.jsx líneas 17-18 último Grid):
- Grid min 280px, 3 columnas
- Col 1: BezelCard light → Misión (title Bebas 24px, body Outfit 14px)
- Col 2: BezelCard light → Visión (title Bebas 24px, body Outfit 14px + Badge muted mono "Visión de futuro 2026")
- Col 3: BezelCard accent (amarillo) hoverLift=false → Compromiso
  - Title Bebas 24px azul-500
  - Body Outfit 14px
  - 2 Botones: Button social size=sm + Button secondary size=sm

Tokens: BezelCard, Badge, Button, Display/Lead, var(--color-brand-blue-500), var(--color-brand-yellow-500), var(--color-white), var(--font-subheading), var(--font-sans), --tracking-wider.
```

#### PROMPT 24 — `components/blocks/NetworkChannels.jsx`
```
Crea NetworkChannels: tarjetas de canales de redes sociales (RedesScreen).

Props:
interface NetworkChannel { name: string; description: string; icon: string; cta: string; href: string; color: string; }
interface NetworkChannelsProps {
  channels: NetworkChannel[];
  className?: string;
}

Visual (basado en ui_kits/website/RedesScreen.jsx + shared.jsx SocialBand + ContactoScreen.jsx líneas 31-33):
- Grid auto-fit minmax(280px,1fr), gap 24
- Cada canal: BezelCard padding 20
  - Flex row: icon circle 48px (bg icon color 10%, color icon) + content (flex:1) + Button social size=sm
  - Title: Bebas 22px uppercase tracking-wider
  - Description: Outfit 14px/1.625
  - Button: variant="social", external href, icon match

Datos (3 canales fijos):
1. WhatsApp: "Cotizaciones instantáneas..." / wa / "Chateá ahora" / #25D366
2. Instagram: "Novedades de la flota..." / msg / "Seguinos" / #E1306C
3. Facebook: "Avisos de servicios..." / users / "Seguinos" / #1877F2

Tokens: BezelCard, Button (variant=social), Badge, var(--color-social-whatsapp), var(--color-social-instagram), var(--color-social-facebook), var(--color-brand-blue-500), var(--color-brand-yellow-500), var(--font-subheading), var(--font-sans), --tracking-wider.
```

#### PROMPT 25 — `components/blocks/RecentPosts.jsx`
```
Crea RecentPosts: carrusel/lista de posts recientes de redes (RedesScreen).

Props:
interface RecentPost { image: string; caption: string; date: string; likes: number; comments: number; href: string; platform: 'instagram' | 'facebook'; }
interface RecentPostsProps {
  posts: RecentPost[];
  className?: string;
  limit?: number; // default: 6
}

Visual (referencia: src/components/nuestras-redes/RecentPosts.tsx actual + ui_kits/website/RedesScreen.jsx):
- Grid 2 cols mobile, 3 cols desktop, gap 20
- Cada post: BezelCard aspect-ratio 4/5
  - Imagen fill object-cover rounded-t-lg
  - Overlay gradiente bottom para caption
  - Caption truncado 2 líneas, platform icon + date (mono 12px)
  - Footer: likes/comments (mono 14px tabular-nums) + icon heart/message
- Hover lift: shadow-antigravity-deep + translateY(-4px)
- CTA "Ver más en Instagram/Facebook" → Button outline fullWidth al final

Datos: placeholder — el repo actual no tiene CMS de posts. Usa array mock con 6 items (assets/redes/ig1.webp, ig3.webp, fac1.webp).
Tokens: BezelCard, Button, Badge, var(--color-brand-blue-500), var(--color-brand-yellow-500), var(--color-brand-blue-100), var(--shadow-float), var(--shadow-antigravity-deep), --ease-spring, --duration-slow.
```

---

### FASE 5 — LAYOUT VARIANTS

#### PROMPT 26 — `components/layout/OptimizedHeader.jsx`
```
Crea OptimizedHeader: Header con Framer Motion, dropdown animado, CTA contextual (reemplaza SiteHeader para Next.js).

Props:
interface OptimizedHeaderProps {
  pathname: string; // usePathname()
  navItems?: NavItem[]; // default: DEFAULT_NAV
  logoSrc?: string; // default: /logo-envios-simplified.webp
  phone?: string; // default: 223 660-2699
  ctaLabel?: string; // default: "Cotizá tu envío"
  ctaHref?: string; // default: /cotizar
  onNavigate?: (item: NavItem) => void;
  onCta?: () => void;
  className?: string;
}

NavItem (basado en src/components/layout/OptimizedHeader.tsx):
interface NavItem { label: string; href?: string; icon?: React.ComponentType; dropdownItems?: Array<{label:string; href:string; icon?:React.ComponentType}>; }

Features (basado en OptimizedHeader.tsx actual + SiteHeader.jsx octubre):
- Fixed top, z-50, bg brand-blue-700 (=== #0950F6), compact al scroll (bg brand-blue-700/95 blur shadow)
- Logo: Image priority fill sizes="40px" + wordmark Anton bicolor (Envíos blanco + DosRuedas amarillo) kinetic-font-stretch hover rotate 12°
- Nav desktop: Bebas 400 (NO font-bold), ghost dark, dropdown Framer Motion AnimatePresence spring staggerChildren 0.06
- Dropdown: bg brand-blue-700, rounded-2xl, items min-h-11 (44px), hover bg-white/10 text-yellow-500
- Phone: Mono bold, icon Phone amarillo, href tel:
- CTA contextual: si pathname en [/, /servicios/*, /cotizar*] → variant="outline" border-white/40 text-white hover:bg-white/10; sino variant="primary" (amarillo)
- Mobile: drawer off-canvas (Framer Motion AnimatePresence), nav items 48px min-h, CTA fullWidth
- prefers-reduced-motion: desactiva todas las animaciones Framer Motion
- Lock scroll body cuando drawer abierto
- Lucide icons (Menu, X, ChevronDown, Phone, Home, Zap, TrendingDown, Clock, ShoppingBag, Info, HelpCircle, Share2, LayoutGrid, HandCoins, Building2, Rocket, Package, Store)

Tokens: var(--color-brand-blue-500), var(--color-brand-blue-700), var(--color-brand-yellow-500), var(--color-white), var(--font-display), var(--font-subheading), var(--font-mono), --tracking-tight, --tracking-wider, --control-sm, --control-md, --radius-control, --radius-xl, --radius-2xl, var(--shadow-elevated), var(--shadow-2xl), --ease-spring, --duration-slow, --duration-cta.
Componibilidad: usa Button (core) para CTA y nav items.
```

#### PROMPT 27 — `components/layout/OptimizedFooter.jsx`
```
Crea OptimizedFooter: Footer con scroll-reveal, spring hover, float loop (reemplaza SiteFooter para Next.js).

Props:
interface OptimizedFooterProps {
  year?: number; // default: 2026
  className?: string;
}

Features (basado en OptimizedFooter.tsx actual + SiteFooter.jsx octubre):
- bg brand-blue-700, border-t border-white/10
- Franja amarilla 6px (h-1.5 bg-brand-yellow-500 shadow-md shadow-brand-yellow-500/30)
- Grid 12-cols: Col 1 (4 cols) Marca + Socials spring hover (y:-4 scale:1.12), Col 2 (4 cols) Servicios 2 grupos (Cotizador + Servicios), Col 3 (4 cols) Base MDQ (4 ContactRow con icons Pin/Phone/Mail/Clock)
- CTA Banner superior: whileInView slide-up (Framer Motion), 2 botones (Cotizar primary + WhatsApp social)
- Scroll-to-top: Button fixed bottom-right, float loop animate y:[0,-5,0] 2s infinite, whileTap scale:0.92, whileHover scale:1.1 y:-7
- Legal bottom: copyright + links servicios/cobertura/guías/nosotros/faq/redes + términos/privacidad
- Animaciones: FOOTER_CONTAINER staggerChildren 0.12, FOOTER_COL spring 280/24, BANNER_VARIANT spring 260/22, SOCIAL_SPRING 480/18
- prefers-reduced-motion: todas las animaciones desactivadas
- next/link para navegación interna

Tokens: var(--color-brand-blue-500), var(--color-brand-blue-700), var(--color-brand-yellow-500), var(--color-brand-yellow-400), var(--color-white), var(--color-brand-blue-50), var(--color-brand-blue-100), var(--font-display), var(--font-subheading), var(--font-sans), var(--font-mono), --tracking-tight, --tracking-wider, --tracking-widest, --section-y, --page-gutter-lg, --container-page, --radius-card, --radius-xl, --radius-full, var(--shadow-md), var(--shadow-xl), var(--shadow-2xl), var(--shadow-accent-md), var(--shadow-cta-glow), var(--animate-marquee-left).
Componibilidad: usa Button, Badge, Display, Lead, Section, SectionHead, ContactRow (blocks), Marquee (layout).
```

#### PROMPT 28 — `components/layout/MobileNav.jsx`
```
Crea MobileNav: navegación móvil off-canvas (usado por OptimizedHeader).

Props:
interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[]; // mismo tipo que OptimizedHeader
  activeDropdown?: string;
  onDropdownToggle?: (label: string) => void;
  className?: string;
}

Visual (basado en OptimizedHeader.tsx líneas 212 + src/components/layout/MobileNav.tsx actual):
- Fixed inset-0 z-100, bg brand-blue-500, border-l border-white/10
- Backdrop overlay fixed inset-0 bg brand-blue-500/70 blur(12px) click→close
- Header drawer: wordmark Anton 20px + close button 44px (X icon)
- Nav: items 48px min-h, Bebas 22px uppercase, chevron rotate 180° al abrir submenu
- Submenu: indent 16px, items 44px min-h, rgba(255,255,255,.85) → hover blanco + amarillo-500 + translateX(4px)
- Footer drawer: Phone mono bold 44px min-h + Button fullWidth CTA
- Animaciones: Framer Motion AnimatePresence mode="wait", slide X [-100%, 0]
- prefers-reduced-motion: sin animaciones
- Escape key → close
- Focus trap en drawer

Tokens: var(--color-brand-blue-500), var(--color-white), var(--color-brand-yellow-500), var(--font-display), var(--font-subheading), var(--font-mono), --tracking-wider, --control-sm, --control-md, --radius-control, var(--shadow-2xl), --ease-spring, --duration-slow.
```

#### PROMPT 29 — `components/layout/SocialCarousel.jsx`
```
Crea SocialCarousel: carrusel de posts sociales (distinto a Marquee: cards con imagen, caption, métricas).

Props:
interface SocialCarouselProps {
  posts: Array<{ image: string; caption: string; platform: 'instagram'|'facebook'; date: string; likes: number; comments: number; href: string }>;
  autoPlay?: boolean; // default: true
  interval?: number; // default: 4500ms
  className?: string;
}

Visual (basado en HomeScreen.jsx ServicesCarousel líneas 18-35 + src/components/layout/CarruselRedes.tsx):
- Carrusel 3D estilo cover-flow: centro scale-104, laterales scale-65-90, opacity fade
- Navegación: dots indicadores (barra amarilla activa 40px, inactiva 10px)
- Auto-play con pause on hover + prefers-reduced-motion
- Cada slide: FeatureCard tone rotativo [accent, light, dark] con bg imagen, tag, title, body, footer Button "Ver post"
- Touch/swipe support (opcional, Framer Motion drag)
- Altura fija 380px, ancho slide 300px, gap visual 230px translateX

Tokens: var(--color-brand-blue-500), var(--color-brand-yellow-500), var(--color-white), var(--color-brand-blue-100), var(--color-brand-blue-50), var(--font-display), var(--font-subheading), var(--font-sans), var(--font-mono), --tracking-wider, --duration-carousel, --ease-spring, var(--shadow-float), var(--shadow-elevated).
Componibilidad: usa FeatureCard, Button, Badge, Marquee (para dots? No, dots custom).
```

---

### FASE 6 — PAGES / UI_KITS

#### PROMPT 30 — Actualizar `ui_kits/website/HomeScreen.jsx`
```
Actualiza HomeScreen.jsx para usar nuevos componentes:
1. Hero → HeroAnimated (nuevo) en lugar de Hero (PageHero)
2. Section servicios → BentoGrid + BentoGridItem (span: Express=7, LowCost=5, Flex=5, Emprendedores=7)
3. FeatureCard existentes → mantener (ya componen bien)
4. ServicesCarousel → mantener (es SocialCarousel especializado) o migrar a SocialCarousel
5. Marcas locales → NetworkLogos (nuevo) en lugar de Marquee placeholders
6. Reviews → mantener (ReviewCard + FilterChips + Marquee dual direction)
7. CtaForm + SocialBand → mantener (shared.jsx)

Importaciones: añade HeroAnimated, BentoGrid, BentoGridItem, NetworkLogos desde window.EnvOsDosRuedasDesignSystem.
Verifica que index.html carga todo.
```

#### PROMPT 31 — Crear `ui_kits/website/CotizadorScreen.jsx` (NUEVA PÁGINA COMPLETA)
```
Crea CotizadorScreen.jsx: página completa del cotizador unificado (/cotizar).

Estructura (basado en src/app/cotizar/page.tsx + src/components/cotizar/unified/*):
<Hero tone="blue" aside={mapa estático}>
  <Badge icon=pin>Cotizador online</Badge>
  <H1>Cotizá tu <Mark>envío</Mark> al toque</H1>
  <Lead invert>Calculá precio exacto por distancia real. Elegí servicio, cargá datos y listo.</Lead>
  <Button size="lg" onClick={scrollToStepper}>Empezar cotización</Button>
</Hero>

<Section>
  <StepperHorizontal steps=[{title:"Origen/Destino"},{title:"Servicio"},{title:"Confirmar"}] currentStep={step} onStepClick={setStep} />

  {step===0 && <QuoteGuide steps=[...] currentStep=0 />}
  {step===0 && <AddressAutocomplete type="origin" ... />}
  {step===0 && <AddressAutocomplete type="destination" ... />}

  {step===1 && <RadioCardGroup options=[Express, LowCost, Flex] value={service} onChange={setService} />}
  {step===1 && <ServicePricing serviceType={service} ... />}
  {step===1 && <SurchargesPanel serviceFilter={service} />}

  {step===2 && <ServiceComparison rows=[...] />}
  {step===2 && <ContactFormBlock title="Confirmá tu envío" ... />}
</Section>

<CoverageMap /> (opcional, sección separada)
<CtaForm />
<SocialBand />
```

Estado: useState para step, service, origin, destination, volume.
Integración: pricing.ts (calculateExpressPrice, calculateLowCostPrice), promises.ts (recargos, umbrales).
Tokens: todo el sistema.
```

#### PROMPT 32 — Actualizar `ui_kits/website/NosotrosScreen.jsx`
```
Actualiza NosotrosScreen.jsx:
1. Hero → mantener (PageHero + aside img/repartidor)
2. Section "Ventajas territoriales" → mantener (FeatureCard grid)
3. Section "Valores" → mantener (FeatureCard grid tone accent/light)
4. Section "Historia" → Timeline (ya existe) — verificar datos HITOS
5. Section "Equipo en calle" → REEMPLAZAR BezelCard grid por TeamGrid (nuevo)
6. Section "Misión, visión & compromiso" → REEMPLAZAR 3 BezelCard por MissionVision (nuevo)
7. SocialBand → mantener

Importaciones: añade TeamGrid, MissionVision.
```

#### PROMPT 33 — Actualizar `ui_kits/website/ContactoScreen.jsx`
```
Actualiza ContactoScreen.jsx:
1. Hero → mantener (PageHero + aside BezelCard dark con horarios)
2. Section formulario → REEMPLAZAR form inline por ContactFormBlock (nuevo) variant="inline"
3. Section "Elegí cómo comunicarte" → REEMPLAZAR 3 BezelCard por NetworkChannels (nuevo)
4. Añadir ConversionBanner (nuevo) al final antes de SocialBand
5. SocialBand → mantener

Importaciones: añade ContactFormBlock, NetworkChannels, ConversionBanner.
```

#### PROMPT 34 — Actualizar `ui_kits/website/FaqScreen.jsx`
```
Actualiza FaqScreen.jsx:
1. Hero → mantener (PageHero + aside dudas_transparent)
2. Section búsqueda + categorías → REEMPLAZAR Input + Grid botones por FaqSearch (nuevo)
3. Section resultados → mantener Accordion (ya existe)
4. Section CTA final → mantener (BezelCard dark + Buttons)
5. SocialBand → mantener

Importaciones: añade FaqSearch.
```

#### PROMPT 35 — Actualizar `ui_kits/website/RedesScreen.jsx`
```
Actualiza RedesScreen.jsx (basado en src/components/nuestras-redes/* actual):
1. Hero → PageHero tone="blue" aside={img redes-celular.webp}
2. Section "Canales oficiales" → NetworkChannels (nuevo)
3. Section "Últimas novedades" → RecentPosts (nuevo) + SocialCarousel (nuevo) para carrusel visual
4. Section CTA → ConversionBanner (nuevo) "Seguí nuestro movimiento"
5. SocialBand → mantener

Importaciones: añade NetworkChannels, RecentPosts, SocialCarousel, ConversionBanner.
```

#### PROMPT 36 — Actualizar `ui_kits/website/EmprendedoresScreen.jsx`
```
Actualiza EmprendedoresScreen.jsx:
1. Hero → mantener (PageHero yellow + aside deposito-local)
2. Section "Soluciones paquetería" → mantener (FeatureCard grid)
3. Section "Partner logístico" → mantener (FeatureCard grid)
4. Section "Modalidad DropOFF" → REEMPLAZAR BezelCard + QuantityStepper + FilterChips inline por DropoffCalculator (nuevo)
5. Section "Planes paquetería" → REEMPLAZAR 3 PricingCard por ServicePricing (nuevo) con serviceType="CUENTA_CORRIENTE" / "ECOMMERCE_SAME_DAY" / "ECOMMERCE_24HS"
6. CtaForm + SocialBand → mantener

Importaciones: añade DropoffCalculator, ServicePricing.
```

#### PROMPT 37 — Actualizar `ui_kits/website/shared.jsx`
```
Actualiza shared.jsx (línea 1 destructuring + línea 38 Object.assign):
1. Añade al destructuring TODOS los nuevos componentes:
   RadioCardGroup, BentoGrid, BentoGridItem, StepperHorizontal, StepperVertical, AddressAutocomplete,
   ServicePricing, DropoffCalculator, CoverageMap, NetworkLogos,
   HeroAnimated, ServiceComparison, SurchargesPanel, QuoteGuide, ContactFormBlock, ConversionBanner, FaqSearch, TeamGrid, MissionVision, NetworkChannels, RecentPosts,
   OptimizedHeader, OptimizedFooter, MobileNav, SocialCarousel

2. Añade al Object.assign(window, { ... }) todos los nuevos.exports

3. Verifica que NO hay duplicados ni faltantes.
```

#### PROMPT 38 — Verificación final `index.html` + consistencia visual
```
Ejecuta validación completa:
1. Abre index.html en browser (live server o file://)
2. Navega TODAS las páginas: Home, Express, LowCost, Flex, Emprendedores, Contrareembolso, Depósito, Cuenta Corriente, Nosotros, FAQ, Redes, Contacto, Cotizador (nueva)
3. Checklist por página:
   - [ ] Hero correcto (azul/amarillo, aside, animaciones gateadas)
   - [ ] Tipografía: Anton/Bebas 400 only, Outfit body, Geist Mono data
   - [ ] Colores: solo #0950F6, #FFEC01, #FFFFFF + semánticos
   - [ ] Touch targets ≥44px (botones, inputs, nav, links)
   - [ ] prefers-reduced-motion: animaciones pausadas
   - [ ] Focus-visible rings 2px brand-blue-500 / amarillo-500 en dark
   - [ ] Contraste WCAG AA: texto azul-500/blanco 6.02:1, azul-500/amarillo 4.94:1
   - [ ] Componentes compuestos usan primitivas (Button, BezelCard, Badge, Input, Display, Lead, Section, etc.)
   - [ ] No hay valores hardcodeados (hex, px, rem) fuera de tokens
   - [ ] Responsive: mobile 390px, tablet 768px, desktop 1440px

4. Corre build script del repo (npm run build / pnpm build / etc.)
5. Genera GENERACION_REPORT.md con resultados.
```

---

## 📋 CHECKLIST DE EJECUCIÓN (para el agente)

| # | Componente | Archivos | Fase | ✅ |
|---|---|---|---|---|
| 1 | tokens/radius.css | 1 | 1 | ☐ |
| 2 | tokens/spacing.css | 1 | 1 | ☐ |
| 3 | tokens/shadows.css | 1 | 1 | ☐ |
| 4 | tokens/typography.css | 1 | 1 | ☐ |
| 5 | tokens/fonts.css + public/fonts/ | 2+ | 1 | ☐ |
| 6 | RadioCardGroup | 3 | 2 | ☐ |
| 7 | BentoGrid | 3 | 2 | ☐ |
| 8 | StepperHorizontal | 3 | 2 | ☐ |
| 9 | StepperVertical | 3 | 2 | ☐ |
| 10 | AddressAutocomplete | 3 | 2 | ☐ |
| 11 | ServicePricing | 3 | 3 | ☐ |
| 12 | DropoffCalculator | 3 | 3 | ☐ |
| 13 | CoverageMap | 3 | 3 | ☐ |
| 14 | NetworkLogos | 3 | 3 | ☐ |
| 15 | HeroAnimated | 3 | 4 | ☐ |
| 16 | ServiceComparison | 3 | 4 | ☐ |
| 17 | SurchargesPanel | 3 | 4 | ☐ |
| 18 | QuoteGuide | 3 | 4 | ☐ |
| 19 | ContactFormBlock | 3 | 4 | ☐ |
| 20 | ConversionBanner | 3 | 4 | ☐ |
| 21 | FaqSearch | 3 | 4 | ☐ |
| 22 | TeamGrid | 3 | 4 | ☐ |
| 23 | MissionVision | 3 | 4 | ☐ |
| 24 | NetworkChannels | 3 | 4 | ☐ |
| 25 | RecentPosts | 3 | 4 | ☐ |
| 26 | OptimizedHeader | 3 | 5 | ☐ |
| 27 | OptimizedFooter | 3 | 5 | ☐ |
| 28 | MobileNav | 3 | 5 | ☐ |
| 29 | SocialCarousel | 3 | 5 | ☐ |
| 30 | HomeScreen (update) | 1 | 6 | ☐ |
| 31 | CotizadorScreen (new) | 1 | 6 | ☐ |
| 32 | NosotrosScreen (update) | 1 | 6 | ☐ |
| 33 | ContactoScreen (update) | 1 | 6 | ☐ |
| 34 | FaqScreen (update) | 1 | 6 | ☐ |
| 35 | RedesScreen (update) | 1 | 6 | ☐ |
| 36 | EmprendedoresScreen (update) | 1 | 6 | ☐ |
| 37 | shared.jsx (update) | 1 | 6 | ☐ |
| 38 | Validación final | 1 | 6 | ☐ |

**TOTAL: 38 tareas = 104+ archivos nuevos/actualizados**

---

## 🔗 FUENTES DE VERDAD (para resolver ambigüedades sin preguntar)

| Qué | Archivo en `../02enviosdosruedassetiembre/` |
|---|---|
| Tarifas Express/LowCost por km | `src/lib/pricing.ts` (EXPRESS_TIERS, LOW_COST_TIERS, EXPRESS_PRICE_PER_KM=1000, LOW_COST_PRICE_PER_KM=700) |
| Tarifas fijas (Flex, E-commerce, Contrareembolso, Periferia, Bulto extra) | `src/lib/promises.ts` (líneas 37-106) |
| Servicios, cortes, definiciones | `docs/knowledge_base/00-negocio/servicios.md` |
| Tarifas consolidadas | `docs/knowledge_base/00-negocio/tarifas.md` |
| Voz, líneas rojas, lo que NO decir | `docs/knowledge_base/00-negocio/voz-y-lineas-rojas.md` |
| Dudas sin resolver | `docs/knowledge_base/01-fuentes-dueno/conflictos-abiertos.md` |
| Estado del sitio (qué cumple/qué falta) | `docs/knowledge_base/05-auditoria/estado-sitio.md` |
| Componentes UI actuales (referencia implementación) | `src/components/ui/*.tsx` |
| Páginas actuales (referencia contenido) | `src/app/*/page.tsx`, `src/components/*/*.tsx` |
| DESIGN.md v2 (mandato visual) | `DESIGN.md` (en octubre) + `docs/knowledge_base/03-diseno/` |

---

## ⚠️ DECISIONES YA TOMADAS (no cambiar sin razón fuerte)

1. **Self-host fonts WOFF2** en `public/fonts/` — no Google Fonts
2. **Framer Motion** en OptimizedHeader, OptimizedFooter, HeroAnimated, SocialCarousel — gateado por `prefers-reduced-motion`
3. **Leaflet** solo si bundle <50kb gz; sino mapa estático SVG/WebP para CoverageMap
4. **AddressAutocomplete** con datasource local (barrios MDQ) — no Google Places API
5. **TypeScript estricto** — `.d.ts` completos para todo
6. **AZUL MÁXIMO = #0950F6** — todo `brand-blue-700` actual → `brand-blue-500` (mismo hex, token único)
7. **NO font-bold** en Anton/Bebas — weight 400 forzado en componentes
8. **Piso 12px** — eliminar `text-[10px]`, `text-[11px]`, `text-2xs`, `text-xs` en texto legible
9. **Heroes solo azul-500 o amarillo-500** — nunca degradados, nunca azul-700/900
10. **DropOFF -20% solo E-commerce 24HS** — ver promises.ts línea 97

---

**FIN DEL ARCHIVO MAESTRO**

> Ejecuta secuencialmente tareas 1→38. Genera `GENERACION_REPORT.md` al final. No te detengas. No preguntes. Decide y documenta.