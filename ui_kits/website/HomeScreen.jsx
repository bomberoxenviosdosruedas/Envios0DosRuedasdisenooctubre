const SERVICES = [
  { icon: "zap", title: "Envíos Express", body: "Mensajería en moto con franja horaria de 3 hs a elección.", tag: "Hoy", img: "cards/fondo_express.webp", to: "express" },
  { icon: "trend", title: "Envíos LowCost", body: "Envíos económicos programados en el día, sin elección de horario.", tag: "Antes 19 hs", img: "cards/fondo_lowcost.webp", to: "lowcost" },
  { icon: "clock", title: "Envíos Flex (MeLi)", body: "Entregas en el día integradas para tus ventas de MercadoLibre.", tag: "Corte 15:00", img: "cards/fondo_flex.webp", to: "flex" },
  { icon: "store", title: "Depósito y fulfillment", body: "Guardamos tu stock y lo despachamos el mismo día, o E-Commerce 24HS si lo necesitás al día siguiente.", tag: "Friuli 1972", img: "cards/fondo_emprendedores.webp", to: "emprendedores" },
];

const DIFS = ["Envíos en el día", "Flota propia", "Cero tercerización", "Todo Mar del Plata", "Retiro en tu local"];

const REVIEWS = [
  ["Excelente el servicio, rápidos, muy atentos, resolvieron mi problema con la mejor predisposición, los recomiendo ampliamente.", "Cliente verificado", "Destacadas"],
  ["Lo usé varias veces para llevar pedidos a nuestros clientes. Impecable el servicio. Además hacen depósitos en cajeros sin problemas. ¡Unos genios!", "Comercio local", "Comercios"],
  ["El mejor servicio premium de la zona en Mar del Plata. 100% recomendable por puntualidad y trato.", "Cliente verificado", "Destacadas"],
  ["Muy buenos humanos 😊. Servicio cálido, responsable y de total confianza para cualquier trámite o paquete.", "Cliente verificado", "Cara Humana"],
  ["¡La mejor mensajería de Mar del Plata! Cumplen siempre con lo prometido y no te dejan tirado.", "Vendedor Flex", "Express & Flex"],
  ["10 de 10 muy buenos en lo que hacen, responsables por sobre todas las cosas, súper recomendable para tu negocio.", "Comercio local", "Comercios"],
  ["Recomendado lo de estos muchachos. Buena atención y rapidez en la entrega en toda la ciudad.", "Cliente verificado", "Cara Humana"],
  ["Excelente servicio, atención de primera, rápido, confiable y seguro. Recomendado 100% para envíos puntuales.", "Vendedor Flex", "Express & Flex"],
];

function HomeScreen({ go }) {
  const [filter, setFilter] = React.useState("Todas");
  const list = REVIEWS.filter((r) => filter === "Todas" || r[2] === filter);
  const tones = ["light", "dark", "accent"];
  const row = (arr, off) => arr.map((r, k) => <ReviewCard key={k} tone={tones[(k + off) % 3]} name={r[1]} text={r[0]} when={["hace 2 sem", "hace 1 mes", "hace 3 sem"][(k + off) % 3]} />);

  // BentoGrid items para servicios
  const bentoItems = [
    <BentoGridItem key="express" span="hero" variant="dark">
      <FeatureCard icon={<Icon d={ICONS.zap} size={20} />} tag="Hoy" title="Envíos Express" body="Mensajería en moto con franja horaria de 3 hs a elección." bg={A("cards/fondo_express.webp")} footer={<Button variant="primary" size="sm" fullWidth onClick={() => go("express")}>Ver servicio</Button>} hoverLift={false} />
    </BentoGridItem>,
    <BentoGridItem key="lowcost" span="standard" variant="light">
      <FeatureCard icon={<Icon d={ICONS.trend} size={20} />} tag="Antes 19 hs" title="Envíos LowCost" body="Envíos económicos programados en el día, sin elección de horario." bg={A("cards/fondo_lowcost.webp")} footer={<Button variant="secondary" size="sm" fullWidth onClick={() => go("lowcost")}>Ver servicio</Button>} hoverLift={false} />
    </BentoGridItem>,
    <BentoGridItem key="flex" span="standard" variant="light">
      <FeatureCard icon={<Icon d={ICONS.clock} size={20} />} tag="Corte 15:00" title="Envíos Flex (MeLi)" body="Entregas en el día integradas para tus ventas de MercadoLibre." bg={A("cards/fondo_flex.webp")} footer={<Button variant="secondary" size="sm" fullWidth onClick={() => go("flex")}>Ver servicio</Button>} hoverLift={false} />
    </BentoGridItem>,
    <BentoGridItem key="emprendedores" span="hero" variant="accent">
      <FeatureCard icon={<Icon d={ICONS.store} size={20} />} tag="Friuli 1972" title="Depósito y fulfillment" body="Guardamos tu stock y lo despachamos el mismo día, o E-Commerce 24HS si lo necesitás al día siguiente." bg={A("cards/fondo_emprendedores.webp")} footer={<Button variant="social" size="sm" fullWidth onClick={() => go("emprendedores")}>Ver servicio</Button>} hoverLift={false} />
    </BentoGridItem>,
  ];

  // Network logos
  const logos = [
    { src: "https://cdn.simpleicons.org/mercadolibre/0950F6", alt: "MercadoLibre Flex", href: "https://www.mercadolibre.com.ar/" },
    { src: "https://cdn.simpleicons.org/vercel/0950F6", alt: "Vercel", href: "https://vercel.com/" },
    { src: "https://cdn.simpleicons.org/postgresql/0950F6", alt: "PostgreSQL", href: "https://www.postgresql.org/" },
    { src: "https://cdn.simpleicons.org/prisma/0950F6", alt: "Prisma", href: "https://www.prisma.io/" },
    { src: "https://cdn.simpleicons.org/tailwindcss/0950F6", alt: "Tailwind CSS", href: "https://tailwindcss.com/" },
    { src: "https://cdn.simpleicons.org/nextdotjs/0950F6", alt: "Next.js", href: "https://nextjs.org/" },
    { src: "https://cdn.simpleicons.org/typescript/0950F6", alt: "TypeScript", href: "https://www.typescriptlang.org/" },
    { src: "https://cdn.simpleicons.org/github/0950F6", alt: "GitHub", href: "https://github.com/" },
  ];

  return <>
    <HeroAnimated aside={
      <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
        <span aria-hidden="true" style={{ position: "absolute", left: "50%", top: "50%", width: "60%", aspectRatio: "1", borderRadius: "50%", border: "2px solid rgba(255,236,1,.6)", animation: "pulse-ring 3.2s var(--ease-spring) infinite" }}></span>
        <img src={A("heroes/inicio-mapa.webp")} alt="Pin de Envíos DosRuedas sobre un mapa de Mar del Plata" style={{ position: "relative", width: "100%", maxWidth: 460, animation: "var(--animate-float-slow)" }} />
        <div style={{ position: "absolute", left: 0, top: "8%", padding: "10px 14px", borderRadius: 16, background: "var(--color-white)", color: "var(--color-brand-blue-500)", boxShadow: "var(--shadow-elevated)", font: "400 16px/1 var(--font-subheading)", letterSpacing: ".05em", textTransform: "uppercase" }}>Retiro en tu local<br /><span style={{ font: "700 12px/1.6 var(--font-mono)" }}>Hoy · MDQ</span></div>
        <div style={{ position: "absolute", right: 0, bottom: "12%", padding: "10px 14px", borderRadius: 16, background: "var(--color-brand-yellow-500)", color: "var(--color-brand-blue-500)", boxShadow: "var(--shadow-elevated)", font: "400 16px/1 var(--font-subheading)", letterSpacing: ".05em", textTransform: "uppercase" }}>Franja de 3 hs<br /><span style={{ font: "700 12px/1.6 var(--font-mono)" }}>A elección</span></div>
      </div>
    }>
      <Badge icon={<Icon d={ICONS.pin} />}>Flota propia · Todo Mar del Plata</Badge>
      <H1>El motor de tu <Mark>última milla</Mark> Somos la solución a tus envíos</H1>
      <Lead invert>Mensajería y logística e-commerce en Mar del Plata: envíos en el día con motos propias. Llegamos a toda la ciudad y los repartidores son nuestros, sin tercerizar.</Lead>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
        <Button size="lg" onClick={() => go("contacto")}>Cotizá tu envío</Button>
        <Button variant="ghost" surface="dark" size="lg" hideIcon onClick={() => go("express")}>Ver servicios</Button>
      </div>
    </HeroAnimated>

    <div style={{ borderTop: "1px solid rgba(255,255,255,.18)", background: "var(--color-brand-blue-500)", backgroundImage: "linear-gradient(rgba(255,255,255,.06),rgba(255,255,255,.06))", color: "var(--color-white)", padding: "16px 0" }} aria-label="Diferenciales de Envíos DosRuedas">
      <Marquee duration={30} gap={40}>{DIFS.map((d) => <span key={d} style={{ display: "inline-flex", alignItems: "center", gap: 40, font: "400 24px/1 var(--font-subheading)", letterSpacing: ".05em", textTransform: "uppercase", whiteSpace: "nowrap" }}>{d}<span style={{ width: 8, height: 8, borderRadius: 2, background: "var(--color-brand-yellow-500)" }}></span></span>)}</Marquee>
    </div>

    <Section>
      <SectionHead eyebrow="Elegí tu solución a medida" title="¿Cómo podemos impulsar tu logística hoy?" lead="Seleccioná tu tipo de negocio o necesidad y descubrí el servicio ideal diseñado para las calles de Mar del Plata." />
      <Grid min={240}>{SERVICES.map((s, k) => <FeatureCard key={s.title} tone={k === 0 ? "accent" : "light"} icon={<Icon d={ICONS[s.icon]} size={20} />} tag={s.tag} title={s.title} body={s.body} onClick={() => go(s.to)} footer={<span style={{ font: "400 16px/1 var(--font-subheading)", letterSpacing: ".05em", textTransform: "uppercase", display: "inline-flex", gap: 8, alignItems: "center", minHeight: 44 }}>Ver servicio <Icon d={ICONS.arrow} /></span>} />)}</Grid>
    </Section>

    {/* BentoGrid Services Showcase */}
    <Section>
      <SectionHead eyebrow="Nuestros servicios" title="Soluciones logísticas" lead="Cuatro soluciones diseñadas para cada necesidad de envío en Mar del Plata." />
      <BentoGrid>{bentoItems}</BentoGrid>
    </Section>

    {/* ServicesCarousel - keep existing or migrate to SocialCarousel */}
    <ServicesCarousel go={go} />

    {/* Partner section with NetworkLogos */}
    <Section bg="var(--color-brand-blue-500)" style={{ borderTop: "1px solid rgba(255,255,255,.1)", borderBottom: "1px solid rgba(255,255,255,.1)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 48, alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "flex-start" }}>
          <Badge tone="outline" size="sm" rotate={false}>Socio estratégico local</Badge>
          <H2 color="var(--color-white)" style={{ fontSize: "clamp(2rem,5vw,3rem)" }}>Potenciamos tu marca en <Mark>MDQ</Mark></H2>
          <Lead invert>Si vendés online, necesitás un socio logístico que responda al toque. Creamos planes a tu medida: LowCost, Flex, depósito y cuenta corriente.</Lead>
          <Button size="lg" onClick={() => go("emprendedores")}>Plan Emprendedores</Button>
        </div>
        <Grid min={200} gap={16}>{[["Envíos LowCost", "Hasta 3 km desde $3.000 por despacho.", "accent"], ["Envíos Flex", "Retiro antes de las 15 hs, entrega en el día.", "light"], ["Depósito 3PL", "Stock en Friuli 1972, picking y empaque.", "light"]].map(([t, b, tn]) => <FeatureCard key={t} tone={tn} title={t} body={b} hoverLift={false} />)}</Grid>
      </div>
      <div style={{ marginTop: 40, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,.1)" }}>
        <p style={{ margin: "0 0 12px", font: "400 12px/1.3 var(--font-subheading)", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--color-brand-blue-50)" }}>Marcas locales que confían en nosotros</p>
        <NetworkLogos logos={logos} speed={30} gap={40} />
        <p style={{ margin: "8px 0 0", font: "400 12px/1.3 var(--font-mono)", color: "rgba(255,255,255,.85)" }}>Marcas y tecnologías que confían en nuestra logística.</p>
      </div>
    </Section>

    <Section bg="var(--color-white)" style={{ padding: "var(--section-y-sm) 0", borderBottom: "1px solid rgba(186,206,253,.6)" }}>
      <div style={{ padding: "0 var(--page-gutter-lg)", maxWidth: "var(--container-page)", margin: "0 auto 32px", display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 16 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start" }}>
            <Badge size="sm" rotate={false} tone="accent" icon={<Icon d={ICONS.star} size={14} />}>5.0 / 5.0 verificado · +120 valoraciones</Badge>
            <H2>La palabra de quienes <Mark>venden y envían</Mark> en MDQ</H2>
          </div>
          <Button size="sm" external href="https://maps.google.com/?q=Friuli+1972,+Mar+del+Plata">Ver en Google Maps</Button>
        </div>
        <FilterChips label="Filtrar reseñas" options={["Todas", "Destacadas", "Express & Flex", "Comercios", "Cara Humana"]} value={filter} onChange={setFilter} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <Marquee duration={36} gap={20}>{row(list.length ? list : REVIEWS, 0)}</Marquee>
        <Marquee direction="right" duration={42} gap={20}>{row([...(list.length ? list : REVIEWS)].reverse(), 1)}</Marquee>
      </div>
    </Section>

    <CtaForm />
    <SocialBand />
  </>;
}
window.HomeScreen = HomeScreen;