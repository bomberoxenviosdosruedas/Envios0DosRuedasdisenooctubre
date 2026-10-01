function ContactoScreen({ go }) {
  const [state, setState] = React.useState("idle");
  const [name, setName] = React.useState("");
  const submit = (e) => { e.preventDefault(); if (!name.trim()) return setState("error"); setState("loading"); setTimeout(() => setState("done"), 1200); };
  const Hours = ({ t, v }) => <div><span style={{ display: "block", fontFamily: "var(--font-subheading)", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--color-brand-yellow-500)" }}>{t}</span>{v}</div>;
  return <>
    <Hero aside={<BezelCard tone="dark" style={{ width: "100%", maxWidth: 440, justifySelf: "center" }}><div style={{ display: "flex", flexDirection: "column", gap: 14 }}><Eyebrow>Base central</Eyebrow><img src={A("heroes/contacto-mensaje.webp")} alt="Teléfono y sobre con el mensaje Escribinos hoy" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", borderRadius: "var(--radius-media)", border: "1px solid rgba(255,255,255,.2)" }} /><div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, paddingTop: 12, borderTop: "1px solid rgba(255,255,255,.15)", fontFamily: "var(--font-mono)", fontSize: 12, color: "rgba(255,255,255,.85)" }}><Hours t="Lun a Vie" v="09:00 - 18:00 hs" /><Hours t="Sábado" v="10:00 - 15:00 hs" /></div></div></BezelCard>}>
      <Badge icon={<Icon d={ICONS.msg} />}>Conexión directa</Badge>
      <H1>Escribinos <Mark>te respondemos</Mark></H1>
      <Lead invert>Contanos qué necesitás mover y te cotizamos al toque. Atendemos desde la base central de Friuli 1972, en Mar del Plata, con flota propia de motos y cero tercerización.</Lead>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}><Button size="lg" external href="https://wa.me/542236602699?text=Hola!%20Quiero%20cotizar%20mis%20env%C3%ADos">Escribinos por WhatsApp</Button><Button variant="ghost" surface="dark" size="lg" href="#contact-form">Completá el formulario</Button></div>
      <ul style={{ listStyle: "none", margin: 0, padding: "24px 0 0", borderTop: "1px solid rgba(255,255,255,.15)", display: "grid", gap: 10, width: "100%", maxWidth: 600 }}>
        <ContactRow icon={<Icon d={ICONS.wa} size={20} fill="var(--color-social-whatsapp)" />} title="WhatsApp comercial" action={<CopyField value="+54 223 660-2699" />} />
        <ContactRow icon={<Icon d={ICONS.pin} size={20} />} iconBg="var(--color-white)" title="Hub central" value="Friuli 1972 · Mar del Plata" action={<Badge size="sm" rotate={false}>Lun a sáb</Badge>} />
      </ul>
    </Hero>
    <Section>
      <div id="contact-form" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 32, alignItems: "start" }}>
        <BezelCard hoverLift={false}><div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}><Badge tone="muted" size="sm">Cotización inmediata</Badge><Badge tone="muted" size="sm" mono rotate={false} icon={<Icon d={ICONS.clock} size={14} />}>Atención &lt; 2 min</Badge></div>
          <H2 style={{ fontSize: "clamp(1.5rem,3vw,1.875rem)", letterSpacing: "-.025em", lineHeight: 1.2 }}>¿Listo para escalar la logística de tu e-commerce?</H2>
          <p style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.625 }}>Olvidate de la gestión de paquetes en Mar del Plata. Completá tus datos y te respondemos por WhatsApp al instante.</p>
          <form onSubmit={submit} noValidate style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Input label="Tu nombre" required placeholder="Nombre y apellido" value={name} onChange={(e) => { setName(e.target.value); if (state === "error") setState("idle"); }} error={state === "error" ? "Por favor, ingresá tu nombre para iniciar el contacto." : undefined} />
            <Input label="Empresa o comercio" placeholder="Opcional" icon={<Icon d={ICONS.building} />} />
            <Input as="select" label="Volumen mensual estimado" defaultValue=""><option value="" disabled>Elegí un rango</option><option>1 a 50 envíos</option><option>50 a 200 envíos</option><option>Más de 200 envíos</option></Input>
            <Button type="submit" fullWidth size="md" loading={state === "loading"} icon={<Icon d={ICONS.wa} fill="currentColor" />}>{state === "done" ? "¡Listo! Te esperamos en WhatsApp" : "Enviar y abrir WhatsApp"}</Button>
            {state === "done" && <p role="status" style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 700, color: "var(--color-brand-blue-500)" }}>Abriendo WhatsApp…</p>}
          </form>
        </div></BezelCard>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <H2>Elegí cómo comunicarte</H2>
          {[["WhatsApp", "Cotizaciones instantáneas, consultas operativas y seguimiento en vivo.", "wa"], ["Instagram", "Novedades de la flota, consejos para tiendas online y fotos reales de nuestro día a día.", "msg"], ["Facebook", "Avisos de servicios, información de tránsito urbano y contacto para empresas.", "shield"]].map(([t, b, ic]) => <BezelCard key={t} padding={20}><div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}><div style={{ flex: 1, minWidth: 200 }}><h3 style={{ margin: 0, fontFamily: "var(--font-subheading)", fontWeight: 400, fontSize: 22, textTransform: "uppercase", letterSpacing: ".025em" }}>{t}</h3><p style={{ margin: "6px 0 0", fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.625 }}>{b}</p></div><Button variant="social" size="sm" external href="#" icon={<Icon d={ICONS[ic]} fill={ic === "wa" ? "currentColor" : undefined} />}>Abrir {t}</Button></div></BezelCard>)}
        </div>
      </div>
    </Section>
  </>;
}
window.ContactoScreen = ContactoScreen;
