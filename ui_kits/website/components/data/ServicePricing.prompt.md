# Prompt de generación: ServicePricing

**Fecha:** 2026-10-02
**Fase:** 3 - DATA COMPONENTS (Tarea 11)
**Fuente de verdad:**
- `../02enviosdosruedassetiembre/src/components/servicios/express/ExpressPricing.tsx`
- `../02enviosdosruedassetiembre/src/components/servicios/lowcost/LowCostPricing.tsx`
- `../02enviosdosruedassetiembre/src/lib/pricing.ts` (EXPRESS_TIERS, LOW_COST_TIERS, pricePerKm)
- `../02enviosdosruedassetiembre/src/lib/promises.ts` (tarifas fijas, recargos, umbrales)
- `ui_kits/website/EmprendedoresScreen.jsx` (PricingCard usage)

---

## Objetivo

Crear `ServicePricing`: tarjeta de precios **genérica por servicio** que unifica y reemplaza ExpressPricing, LowCostPricing, FlexPricing, EmprendedoresPricing sueltos del repo actual.

---

## Props

```ts
interface PriceTier {
  range: string;
  distance: string;
  price: number | string;
  features: string[];
  tag?: string;
  note?: string;
}

interface ServicePricingProps {
  serviceType: 'EXPRESS' | 'LOW_COST' | 'FLEX' | 'ECOMMERCE_24HS' | 'ECOMMERCE_SAME_DAY' | 'CONTRAREEMBOLSO' | 'CUENTA_CORRIENTE';
  title?: string;
  rangeLabel?: string;
  unit?: string;
  tiers?: PriceTier[];
  ctaLabel?: string | ((tierIndex: number) => string);
  onCta?: (tierIndex: number) => void;
  featuredIndex?: number;
  className?: string;
}
```

---

## Datos de negocio (fuente única: pricing.ts + promises.ts)

| Servicio | Tiers | Precio base | Precio/km excedente | Notas |
|----------|-------|-------------|---------------------|-------|
| **EXPRESS** | 0-3/3-5/5-7/7-10 km | $3700/4600/6100/8200 | $1000 | Ventana 3hs, corte 15:00 |
| **LOW_COST** | 0-3/3-5/5-7/7-10 km | $3000/4000/5300/7000 | $700 | Entrega <19hs, corte 13:00 |
| **FLEX** | Nivel 1/2/3 | $3000/$6500/$4500 | N/A | Niveles por volumen mensual [SIN CONFIRMAR] |
| **ECOMMERCE_24HS** | Único | $3800 fijo | N/A | Recolección gratis ≥10 envíos/día |
| **ECOMMERCE_SAME_DAY** | Único | $6000 fijo | N/A | Corte 13:00, entrega <19hs |
| **CONTRAREEMBOLSO** | Único | $0 comisión | N/A | Sin extra ni comisión |
| **CUENTA_CORRIENTE** | Plan flexible | A medida | N/A | Facturación consolidada mensual |

---

## Visual (basado en ExpressPricing + LowCostPricing + EmprendedoresScreen PricingCard)

- **Header centrado**: Badge "Tarifario transparente 2026" + H1 (Anton) + Lead (Outfit)
- **Grid responsive**: min 220px-260px según cantidad de tiers (auto-fit)
- **Cada tier**: BezelCard (featured → `variant="accent"` con border amarillo-500 2px)
  - Header: tag (Bebas), distancia (mono badge), badge opcional (accent, absolute -top-3)
  - Precio: Geist Mono 700 40px+ tabular-nums, unit mono 14px
  - SLA/Ventana: dl inline bg azul-50, label mono 11px, valor mono xs
  - Note: Outfit 14px muted si existe
  - Features: lista con Check icon (azul-500), Outfit 14px
  - CTA: Button fullWidth, `variant="primary"` (featured) / `"secondary"` (otros)
- **Extended note**: sección abajo con fórmula por km (si aplica)
- **Pricing facts** (opcional): 3 cards BezelCard light con icon + title + body

---

## Tokens utilizados

### Colores
- `var(--color-brand-blue-500)` — textos principales, precios, iconos
- `var(--color-brand-blue-50)` — fondos suaves, badges, SLA box
- `var(--color-brand-blue-100)` — bordes sutiles
- `var(--color-brand-yellow-500)` — badge featured, CTA primary bg
- `var(--color-white)` — fondo cards light

### Espaciado
- `var(--section-y)` — 3rem (section padding Y)
- `var(--page-gutter-lg)` — 2rem (page horizontal padding)
- `var(--spacing-2)` — 8px
- `var(--spacing-4)` — 16px
- `var(--spacing-5)` — 20px (gap grid)
- `var(--spacing-6)` — 24px (card padding)
- `var(--spacing-12)` — 48px (section gaps)

### Radius
- `var(--radius-card)` — 16px (BezelCard outer)
- `var(--radius-card-inner)` — 12px (BezelCard inner)
- `var(--radius-control)` — 12px (badges, SLA box)

### Tipografía
- `var(--font-display)` — Anton (H1, tier range)
- `var(--font-subheading)` — Bebas Neue (badges, CTA, tags)
- `var(--font-sans)` — Outfit (body, lead, features)
- `var(--font-mono)` — Geist Mono (precios, distancia, SLA, fórmula)
- `var(--tracking-wider)` — 0.05em
- `var(--tracking-display)` — -0.03em

### Sombras (via BezelCard)
- `var(--shadow-float)` — base
- `var(--shadow-antigravity-deep)` — hover lift
- `var(--shadow-accent-md)` — featured badge

### Transiciones
- `var(--ease-spring)` / `var(--duration-slow)` (BezelCard hover)

---

## Componibilidad

- **BezelCard** (core) — wrapper principal de cada tier
- **Badge** (core) — tag, featured badge, SLA badge
- **Button** (core) — CTA por tier
- **Check icon** SVG inline — features list

---

## Decisiones tomadas

1. **Config centralizada `SERVICE_TIERS`**: todos los datos vienen de pricing.ts + promises.ts en un objeto único. Props permiten override para casos edge.
2. **featuredIndex default por servicio**: EXPRESS=2 (Zona 3), LOW_COST=1 (Zona 2), FLEX=1 (Nivel 2), ECOMMERCE=0 (único).
3. **ctaLabel flexible**: string único para todos, o función `(idx) => string` para labels personalizados.
4. **Extended note integrada**: solo se muestra si `config.pricePerKm` existe (EXPRESS, LOW_COST).
5. **Pricing facts opcional**: array en config para hechos diferenciadores (distancia real, ventana, tabla pública).
6. **Grid auto-fit**: `grid-template-columns: repeat(auto-fit, minmax(220px, 1fr))` implementado via media query inline para 4 cols max.
7. **`formatArs` helper**: `$${value.toLocaleString('es-AR')}` para formato argentino.
8. **Precios no numéricos**: `price: "A medida"` o `price: 0` soportados (string rendering).

---

## Validación

- ✅ TypeScript types en `.d.ts`
- ✅ Tokens semánticos únicamente (ningún hex/px/rem hardcodeado)
- ✅ Datos desde pricing.ts + promises.ts (fuente única)
- ✅ Componibilidad: BezelCard, Badge, Button
- ✅ Touch targets ≥44px (CTA Button usa `--control-md` = 48px)
- ✅ `prefers-reduced-motion`: BezelCard hover respeta tokens
- ✅ Contraste: precios azul-500 sobre blanco (6.02:1), amarillo-500 sobre azul-500 (4.94:1)
- ✅ Responsive: 1 col mobile, 2 tablet, 4 desktop