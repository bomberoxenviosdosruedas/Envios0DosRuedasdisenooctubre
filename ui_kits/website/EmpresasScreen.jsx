function EmpresasScreen({ go }) {
  const [st, setSt] = React.useState("idle");
  const [f, setF] = React.useState({ nombre: "", empresa: "" });
  const sub = (e) => { e.preventDefault(); if (!f.nombre.trim() || !f.empresa.trim()) return setSt("error"); setSt("loading"); setTimeout(() => setSt("done"), 1100); };
  return <>
    <Hero aside={<BezelCard tone="light" hoverLift={false} style={{ width: "100%", maxWidth: 460, justifySelf: "center" }}><form id="formulario-empresas" onSubmit={sub} noValidate style={{ display: "flex", flexDirection: "column", gap: 14, color: "var(--color-brand-blue-500)" }}>
      <Input label="Nombre y apellido" required value={f.nombre} onChange={(e) => setF({ ...f, nombre: e.target.value })} error={st === "error" && !f.nombre.trim() ? "Completá tu nombre." : undefined} />
      <Input label="Razón social o comercio" required value={f.empresa} onChange={(e) => setF({ ...f, empresa: e.target.value })} icon={<Icon d={ICONS.building} />} error={st === "error" && !f.empresa.trim() ? "Completá la razón social o comercio." : undefined} />
      <Input as="select" label="Rubro principal" defaultValue="Otro rubro comercial">{["Autopartes y Repuestos", "Farmacia / Óptica / Salud", "Estudio Contable / Jurídico", "Indumentaria / Calzado", "Gastronomía / Insumos", "Otro rubro comercial"].map((o) => <option key={o}>{o}</option>)}</Input>
      <Input as="select" label="Volumen mensual" defaultValue="20 a 50 envíos">{["20 a 50 envíos", "50 a 200 envíos", "200 a 500 envíos", "+500 envíos"].map((o) => <option key={o}>{o}</option>)}</Input>
      <Input label="WhatsApp / teléfono" required type="tel" placeholder="223 000-0000" icon={<Icon d={ICONS.phone} />} />
      <Button type="submit" fullWidth loading={st === "loading"}>{st === "done" ? "¡Gracias! Abriendo WhatsApp" : "Pedir apertura de cuenta"}</Button>
      {st === "done" && <p role="status" style={{ margin: 0, font: "700 14px/1.4 var(--font-sans)" }}>¡Gracias! Abriendo WhatsApp para confirmar tu solicitud…</p>}
    </form></BezelCard>}>
      <Badge icon={<Icon d={ICONS.building} />}>Cuenta corriente flexible</Badge>
      <H1>Abrí tu <Mark>cuenta corriente</Mark></H1>
      <Lead invert>Olvidate de pagar cada envío en efectivo. Abrí una cuenta corriente para tu comercio o empresa con pagos agrupados por semana, quincena o mes y el resumen de todos tus envíos.</Lead>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}><Button size="lg" external href="https://wa.me/542236602699">Hablá con un asesor B2B</Button><Button variant="ghost" surface="dark" size="lg" hideIcon href="#formulario-empresas">Solicitar apertura online</Button></div>
      <StatList invert items={[["Semanal", "quincenal o mensual"], ["$0", "mantenimiento"], ["Cierre", "quincenal / mensual"]]} />
    </Hero>
    <Section bg="var(--color-neutral-50)"><SectionHead eyebrow="Ventajas para pymes" title="Optimizá la logística de tu empresa" lead="Diseñado para simplificar tu administración con trazabilidad y respaldo." /><Grid min={240}>{[["Pagos agrupados", "Pagás todos los envíos juntos, por semana, quincena o mes, con el resumen de cada envío. No emitimos Factura A.", "file"], ["Tarifas corporativas por volumen", "Accedé a precios preferenciales fijos con bonificaciones escalonadas según tu volumen de despachos mensuales.", "trend"], ["Retiros diarios programados", "Pasamos por tu local, taller, fábrica o depósito en horarios convenidos sin que tengas que pedir una moto cada vez.", "truck"], ["Remitos y trazabilidad digital", "Comprobantes de entrega firmados en formato digital al instante para tu departamento administrativo o contable.", "check"]].map(([t, b, ic]) => <FeatureCard key={t} icon={<Icon d={ICONS[ic]} size={20} />} title={t} body={b} />)}</Grid></Section>
    <Section><SectionHead eyebrow="Más de 7 años de circuitos" title="Rubros con cuenta activa en Mar del Plata" lead="Más de 7 años adaptando nuestros circuitos a los requerimientos de cada sector." /><TagList items={["Repuesteras y Autopartes", "Farmacias, Ópticas y Salud", "Estudios Contables y Gestorías", "Indumentaria y Calzado", "Gastronomía y Descartables", "Tecnología y Servicio Técnico"]} icon={<Icon d={ICONS.check} size={16} />} /></Section>
    <SocialBand />
  </>;
}
window.EmpresasScreen = EmpresasScreen;
