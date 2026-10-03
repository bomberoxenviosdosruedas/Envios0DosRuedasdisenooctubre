const VALUES = [["Cuidado del paquete", "Manipulación profesional de paquetería e-commerce, indumentaria, tecnología y repuestos. Cada envío viaja seguro y protegido de las inclemencias del clima marplatense.", "shield", "Pilar de confianza"], ["Transparencia total", "Tarifas públicas por kilómetro exacto, con los recargos del viaje publicados. Lo que no sabés al cotizar no aparece después en la liquidación.", "file", "Sin letra chica"], ["Innovación tecnológica", "Ruteo optimizado en tiempo real, trazabilidad GPS instantánea y avisos automáticos para tus clientes en Mar del Plata.", "pin", "GPS"]];
const ADV = [["Atención humana y directa", "Damos la cara siempre. Cuando surge una duda o reprogramación, te comunicás directamente por WhatsApp con operadores en Mar del Plata que gestionan y resuelven en el acto.", "msg", "WhatsApp directo"], ["Flota propia capacitada", "No tercerizamos de forma descontrolada. Nuestro equipo de cadetes está uniformado, capacitado en manejo de paquetes frágiles y con base física en Friuli 1972.", "users", "General Pueyrredón"], ["Garantía operativa sin excusas", "Tu reputación comercial depende de la puntualidad de entrega. Si coordinamos un envío express en 2 horas o un ruteo programado, cumplimos la franja pactada sin desvíos.", "check", "Puntualidad"]];
const HITOS = [["2019", "Lanzamiento inicial en MDQ", "Iniciamos operaciones con flota propia de motocicletas en las calles céntricas de Mar del Plata."], ["2021", "Soluciones PyME y LowCost", "Lanzamos la modalidad LowCost agrupada y el Plan Emprendedores para impulsar las ventas online."], ["2023", "Consolidación de flota propia", "Estructura propia de repartidores uniformados y coordinados por WhatsApp para garantizar entregas puntuales."], ["2024", "Pioneros MercadoLibre Flex en MDQ", "Nos convertimos en el socio logístico de referencia para entregas Same-Day de Mercado Libre en todo Mar del Plata."], ["2025", "Hub logístico Friuli 1972", "Inauguración de nuestro depósito central con depósitos de paquetería, picking y tecnología de ruteo."], ["2026", "Infraestructura 3PL en todo Mar del Plata", "Más de 7 años de trayectoria consolidada con flota propia, cotizadores en tiempo real y fulfillment."]];
const TEAM = [["+20", "Repartidores en calle", "Flota propia", "Cadetes capacitados y uniformados que conocen cada atajo y zona de Mar del Plata."], ["100%", "Base operativa en MDQ", "Hub Chauvín", "Depósito central en Friuli 1972 para recepción, almacenamiento, consolidación y despacho diario."], ["< 2 h", "Tiempo promedio Express", "Máxima velocidad", "Servicio prioritario punto a punto dentro del ejido urbano con monitoreo continuo de ruta."], ["+7", "Años de trayectoria", "Confianza local", "Compromiso ininterrumpido con comerciantes, emprendedores y empresas marplatenses."]];

function NosotrosScreen({ go }) {
  return <>
    <Hero aside={<img src={A("img/repartidor.webp")} alt="Repartidor de Envíos DosRuedas en moto" style={{ width: "100%", maxWidth: 440, justifySelf: "center", borderRadius: "var(--radius-card)", border: "1px solid rgba(255,255,255,.15)" }} />}>
      <Badge icon={<Icon d={ICONS.pin} />}>Base central · Friuli 1972</Badge>
      <H1>Somos tu <Mark>socio en calle</Mark> en Mar del Plata</H1>
      <Lead invert>Más de 7 años transformando la última milla y la mensajería urbana con flota propia, atención directa y cero tercerización.</Lead>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}><Button size="lg" onClick={() => go("contacto")}>Cotizá tu envío</Button><Button variant="ghost" surface="dark" size="lg" hideIcon onClick={() => go("faq")}>Preguntas frecuentes</Button></div>
    </Hero>

    <Section><SectionHead eyebrow="Ventajas territoriales" title="Por qué confiar en DosRuedas" lead="Frente a aplicaciones automatizadas y plataformas impersonales, nosotros brindamos trato humano y cobertura real." /><Grid min={260}>{ADV.map(([t, b, ic, tag]) => <FeatureCard key={t} icon={<Icon d={ICONS[ic]} size={20} />} tag={tag} title={t} body={b} />)}</Grid></Section>

    <Section bg="var(--color-brand-blue-500)"><SectionHead invert eyebrow="Filosofía operativa" title="Nuestros valores" lead="Los pilares innegociables que sostienen nuestra operativa diaria en cada barrio de la ciudad." /><Grid min={260}>{VALUES.map(([t, b, ic, tag], k) => <FeatureCard key={t} tone={k === 1 ? "accent" : "light"} icon={<Icon d={ICONS[ic]} size={20} />} tag={tag} title={t} body={b} hoverLift={false} />)}</Grid></Section>

    <Section bg="var(--color-neutral-50)"><SectionHead eyebrow="Trayectoria & evolución" title="Nuestra historia" lead="Más de 7 años transformando la última milla y la mensajería urbana en la ciudad." /><Timeline items={HITOS.map(([year, title, body]) => ({ year, tag: "Hito MDQ", title, body }))} /></Section>

    <Section bg="var(--color-brand-blue-500)">
      <SectionHead invert eyebrow="Fuerza operativa & experiencia" title="Nuestro equipo en calle" />
      <TeamGrid stats={TEAM.map(([n, l, t, b]) => ({ value: n, label: t, title: l, body: b }))} />
    </Section>

    <Section bg="var(--color-neutral-50)">
      <SectionHead eyebrow="Propósito & futuro" title="Misión, visión & compromiso" />
      <MissionVision
        mission={{ title: "Nuestra misión", body: "Brindar a cada negocio, e-commerce y particular de Mar del Plata una infraestructura de última milla confiable, accesible y ágil. Eliminamos las fricciones logísticas para que nuestros clientes puedan enfocarse en vender." }}
        vision={{ title: "Nuestra visión", body: "Ser el estándar indiscutido de logística urbana y fulfillment 3PL en la Costa Atlántica, reconocidos por nuestra puntualidad, tecnología de ruteo y calidez en la atención humana.", badge: "Visión de futuro 2026" }}
        commitment={{
          title: "¿Listo para enviar con los mejores?",
          body: "Sumate a las cientos de tiendas y emprendimientos de Mar del Plata que confían su logística diaria en Envíos DosRuedas.",
          ctaPrimary: { label: "Cotizar envío", href: "/contacto" },
          ctaSecondary: { label: "Contactar", href: "/contacto" },
        }}
      />
    </Section>

    <SocialBand />
  </>;
}
window.NosotrosScreen = NosotrosScreen;