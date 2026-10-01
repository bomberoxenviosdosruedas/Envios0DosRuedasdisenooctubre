const POSTS = [["redes/ig1.webp", "Envíos DosRuedas", "21 Jun", "MENSAJERÍA ENVÍOS DOSRUEDAS ~ ¡Somos la solución para tus envíos en Mar del Plata! ~ Confianza y responsabilidad son nuestros pilares.", "Instagram"], ["redes/fac1.webp", "Envíos DosRuedas", "21 Jun", "MENSAJERÍA ENVÍOS DOSRUEDAS ~ ¡Somos la solución para tus envíos en Mar del Plata! ~ Te ofrecemos un servicio confiable…", "Facebook"], ["redes/ig3.webp", "Envíos DosRuedas", "", "Detrás de escena de nuestros riders y la flota recorriendo las calles de MDQ.", "Instagram"]];
function RedesScreen({ go }) {
  return <>
    <Hero yellow aside={<img src={A("heroes/redes-celular.webp")} alt="Celular con las redes de Envíos DosRuedas" style={{ width: "100%", maxWidth: 420, justifySelf: "center", animation: "var(--animate-float-slow)" }} />}>
      <Badge tone="invert" icon={<Icon d={ICONS.users} />}>Comunidad en redes</Badge>
      <H1 color="var(--color-brand-blue-500)">Seguinos en <span style={{ display: "inline-block", background: "var(--color-brand-blue-500)", color: "var(--color-brand-yellow-500)", borderRadius: 999, padding: "0 .3em", transform: "rotate(-1deg)", lineHeight: 1.1 }}>redes</span></H1>
      <Lead>Seguí nuestro día a día, novedades operativas y la comunidad comercial en Mar del Plata.</Lead>
    </Hero>
    <Section>
      <SectionHead eyebrow="Comunidad en redes" title="Canales oficiales" lead="Conectate al instante con nuestras plataformas oficiales y formá parte de la mayor comunidad logística de Mar del Plata." />
      <Grid min={280}><SocialCard tone="accent" icon={<Icon d={ICONS.wa} size={20} fill="currentColor" />} title="WhatsApp directo" handle="+54 223 660-2699" body="Atención personalizada y sin demoras por WhatsApp. El canal más ágil para coordinar cotizaciones, retiros inmediatos, envíos Flex y resolver dudas." cta="Chateá ahora" tag="+3.000 seguidores" href="https://wa.me/542236602699" /><SocialCard icon={<Icon d={ICONS.msg} size={20} />} title="Instagram" handle="@enviosdosruedas" body="Mirá nuestro día a día, fotos reales de las entregas diarias de la flota y promociones especiales diseñadas para tu e-commerce." cta="Seguinos en Instagram" tag="+2.000 seguidores" href="https://www.instagram.com/enviosdosruedas" /><SocialCard icon={<Icon d={ICONS.users} size={20} />} title="Facebook" handle="@enviosdosruedas" body="Seguinos para enterarte de ofertas exclusivas y novedades logísticas sobre Mar del Plata." cta="Seguinos en Facebook" href="https://www.facebook.com/enviosdosruedas" /></Grid>
    </Section>
    <Section bg="var(--color-brand-blue-500)">
      <SectionHead invert eyebrow="En vivo" title="Publicaciones recientes" lead="Lo que está pasando ahora mismo en nuestras redes sociales oficiales de Mar del Plata." />
      <Grid min={260}>{POSTS.map(([img, who, date, text, net], k) => <SocialCard key={k} kind="post" tone="dark" image={A(img)} title={who} date={date} body={text} cta={"Ver original en " + net} />)}</Grid>
    </Section>
    <CtaForm />
  </>;
}
window.RedesScreen = RedesScreen;
