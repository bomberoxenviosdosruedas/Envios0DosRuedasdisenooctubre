function ContactoScreen({ go }) {
  const Hours = ({ t, v }) => <div><span style={{ display: "block", fontFamily: "var(--font-subheading)", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--color-brand-yellow-500)" }}>{t}</span>{v}</div>;

  return <>
    <Hero aside={<BezelCard tone="dark" style={{ width: "100%", maxWidth: 440, justifySelf: "center" }}><div style={{ display: "flex", flexDirection: "column", gap: 14 }}><Eyebrow>Base central</Eyebrow><img src={A("heroes/contacto-mensaje.webp")} alt="Teléfono y sobre con el mensaje Escribinos hoy" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", borderRadius: "var(--radius-media)", border: "1px solid rgba(255,255,255,.2)" }} /><div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, paddingTop: 12, borderTop: "1px solid rgba(255,255,255,.15)", fontFamily: "var(--font-mono)", fontSize: 12, color: "rgba(255,255,255,.85)" }}><Hours t="Lun a Vie" v="09:00 - 18:00 hs" /><Hours t="Sábado" v="10:00 - 15:00 hs" /></div></div></BezelCard>}>
      <Badge icon={<Icon d={ICONS.msg} />}>Conexión directa</Badge>
      <H1>Escribinos <Mark>te respondemos</Mark></H1>
      <Lead invert>Contanos qué necesitás mover y te cotizamos al toque. Atendemos desde la base central de Friuli 1972, en Mar del Plata, con flota propia de motos y cero tercerización.</Lead>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
        <Button size="lg" external href="https://wa.me/542236602699?text=Hola!%20Quiero%20cotizar%20mis%20env%C3%ADos">Escribinos por WhatsApp</Button>
        <Button variant="ghost" surface="dark" size="lg" href="#contact-form">Completá el formulario</Button>
      </div>
      <ul style={{ listStyle: "none", margin: 0, padding: "24px 0 0", borderTop: "1px solid rgba(255,255,255,.15)", display: "grid", gap: 10, width: "100%", maxWidth: 600 }}>
        <ContactRow icon={<Icon d={ICONS.wa} size={20} fill="var(--color-social-whatsapp)" />} title="WhatsApp comercial" action={<CopyField value="+54 223 660-2699" />} />
        <ContactRow icon={<Icon d={ICONS.pin} size={20} />} iconBg="var(--color-white)" title="Hub central" value="Friuli 1972 · Mar del Plata" action={<Badge size="sm" rotate={false}>Lun a sáb</Badge>} />
      </ul>
    </Hero>

    <Section>
      <ContactFormBlock
        title="¿Listo para escalar la logística de tu e-commerce?"
        lead="Olvidate de la gestión de paquetes en Mar del Plata. Completá tus datos y te respondemos por WhatsApp al instante."
        id="contact-form"
      />

      <NetworkChannels />
    </Section>

    <ConversionBanner
      eyebrow="¿Listo para mejorar tu logística?"
      title="Unite a los comercios que ya envían con <Mark>confianza</Mark>"
      lead="Flota propia, base en Friuli 1972, tarifas transparentes y atención < 2 min."
      ctaLabel="Cotizá tu envío"
      ctaHref="/cotizar"
      secondaryLabel="Escribinos por WhatsApp"
      secondaryHref="https://wa.me/542236602699"
      background="blue"
    />

    <SocialBand />
  </>;
}
window.ContactoScreen = ContactoScreen;