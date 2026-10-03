const POSTS = [
  { image: "/assets/redes/ig1.webp", caption: "Envíos DosRuedas ~ ¡Somos la solución para tus envíos en Mar del Plata! ~ Confianza y responsabilidad son nuestros pilares.", date: "2026-06-21", likes: 247, comments: 12, href: "https://www.instagram.com/enviosdosruedas", platform: "instagram" },
  { image: "/assets/redes/fac1.webp", caption: "Envíos DosRuedas ~ ¡Somos la solución para tus envíos en Mar del Plata! ~ Te ofrecemos un servicio confiable...", date: "2026-06-21", likes: 189, comments: 8, href: "https://www.facebook.com/enviosdosruedas", platform: "facebook" },
  { image: "/assets/redes/ig3.webp", caption: "Detrás de escena de nuestros riders y la flota recorriendo las calles de MDQ.", date: "2026-06-19", likes: 312, comments: 18, href: "https://www.instagram.com/enviosdosruedas", platform: "instagram" },
];

function RedesScreen({ go }) {
  return <>
    <Hero aside={<img src={A("heroes/redes-celular.webp")} alt="Celular con las redes de Envíos DosRuedas" style={{ width: "100%", maxWidth: 420, justifySelf: "center", animation: "var(--animate-float-slow)" }} />}>
      <Badge tone="invert" icon={<Icon d={ICONS.users} />}>Comunidad en redes</Badge>
      <H1 color="var(--color-brand-blue-500)">Seguinos en <span style={{ display: "inline-block", background: "var(--color-brand-blue-500)", color: "var(--color-brand-yellow-500)", borderRadius: 999, padding: "0 .3em", transform: "rotate(-1deg)", lineHeight: 1.1 }}>redes</span></H1>
      <Lead>Seguí nuestro día a día, novedades operativas y la comunidad comercial en Mar del Plata.</Lead>
    </Hero>

    <Section>
      <SectionHead eyebrow="Canales oficiales" title="Conectate al instante" lead="Formá parte de la mayor comunidad logística de Mar del Plata." />
      <NetworkChannels />
    </Section>

    <Section bg="var(--color-brand-blue-500)">
      <SectionHead invert eyebrow="Últimas novedades" title="Publicaciones recientes" lead="Lo que está pasando ahora mismo en nuestras redes sociales oficiales de Mar del Plata." />
      <RecentPosts posts={POSTS} />
      <SocialCarousel posts={POSTS} />
    </Section>

    <ConversionBanner
      eyebrow="Comunidad digital"
      title="Seguí nuestro <Mark>movimiento</Mark>"
      lead="Sumate a nuestros canales digitales y enterate al toque de todas las novedades operativas en Mar del Plata."
      ctaLabel="Seguinos en Instagram"
      ctaHref="https://www.instagram.com/enviosdosruedas"
      secondaryLabel="Seguinos en Facebook"
      secondaryHref="https://www.facebook.com/enviosdosruedas"
      background="blue"
    />

    <CtaForm />
    <SocialBand />
  </>;
}
window.RedesScreen = RedesScreen;