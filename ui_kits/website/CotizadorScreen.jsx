import React, { useState } from "react";
import { HeroAnimated } from "../../components/blocks/HeroAnimated";
import { Section } from "../../components/blocks/Section";
import { StepperHorizontal } from "../../components/core/StepperHorizontal";
import { QuoteGuide } from "../../components/blocks/QuoteGuide";
import { AddressAutocomplete } from "../../components/core/AddressAutocomplete";
import { RadioCardGroup } from "../../components/core/RadioCardGroup";
import { ServicePricing } from "../../components/data/ServicePricing";
import { SurchargesPanel } from "../../components/blocks/SurchargesPanel";
import { ServiceComparison } from "../../components/blocks/ServiceComparison";
import { ContactFormBlock } from "../../components/blocks/ContactFormBlock";
import { CoverageMap } from "../../components/data/CoverageMap";
import { CtaForm } from "../website/shared";
import { SocialBand } from "../website/shared";

/** CotizadorScreen: página completa del cotizador unificado (/cotizar) */
export function CotizadorScreen({ go }) {
  const [step, setStep] = useState(0);
  const [service, setService] = useState("EXPRESS");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [volume, setVolume] = useState("");

  const serviceOptions = [
    {
      id: "EXPRESS",
      label: "Envíos Express",
      description: "Franja de 3 hs a elección · Corte 15:00 hs",
      price: "Desde $3.700",
      badge: "PRIORITARIO",
      serviceType: "EXPRESS",
      icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z"/></svg>,
    },
    {
      id: "LOW_COST",
      label: "Envíos LowCost",
      description: "Entrega antes de 19:00 hs · Corte 13:00 hs",
      price: "Desde $3.000",
      badge: "ECONÓMICO",
      serviceType: "LOW_COST",
      icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 17h6v-6"/><path d="M22 17-8.5-8.5-5 5L2 7"/></svg>,
    },
    {
      id: "FLEX",
      label: "Mercado Envíos Flex",
      description: "Corte 15:00 hs · Entrega antes de 20:00 hs",
      price: "Desde $3.000",
      badge: "MELI",
      serviceType: "FLEX",
      icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 6v6l4 2"/><path d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0"/></svg>,
    },
  ];

  const guideSteps = [
    { step: 1, title: "Origen y destino", description: "Elegí dónde retiramos y a dónde entregamos. Usá el autocompletado de barrios.", icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><path d="M12 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/></svg> },
    { step: 2, title: "Servicio", description: "Seleccioná Express, LowCost o Flex según urgencia y presupuesto.", icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z"/></svg> },
    { step: 3, title: "Confirmá y listo", description: "Revisá el resumen, cargá los datos y confirmá. Te contactamos por WhatsApp.", icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg> },
  ];

  const comparisonRows = [
    { feature: "Franja horaria", express: "3 hs a elección", lowcost: "Sin franja (programado)", flex: "Corte 15:00", emprendedores: "Same-day" },
    { feature: "Corte de pedido", express: "15:00 hs", lowcost: "13:00 hs", flex: "15:00 hs", emprendedores: "13:00 hs" },
    { feature: "Peso sin cargo", express: "5 kg / 40×40 cm", lowcost: "5 kg / 40×40 cm", flex: "5 kg / 40×40 cm", emprendedores: "5 kg / 40×40 cm" },
    { feature: "Recargo lluvia", express: "50%", lowcost: "50%", flex: "30%", emprendedores: "30%" },
    { feature: "Contrareembolso", express: "Sí (0% comisión)", lowcost: "Sí (0% comisión)", flex: "Sí (0% comisión)", emprendedores: "Sí (0% comisión)" },
    { feature: "DropOFF -20%", express: "No", lowcost: "No", flex: "No", emprendedores: "Solo E-comm 24HS" },
    { feature: "Cobertura", express: "MDQ urbana", lowcost: "MDQ urbana", flex: "MDQ urbana", emprendedores: "MDQ urbana" },
    { feature: "Periferia", express: "$1.000/km ruta", lowcost: "$1.000/km ruta", flex: "$1.000/km ruta", emprendedores: "$1.000/km ruta" },
  ];

  const scrollToStepper = () => {
    document.getElementById("cotizador-stepper")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <HeroAnimated
        aside={
          <div style={{ position: "relative", width: "100%", maxWidth: 480, margin: "0 auto" }}>
            <svg viewBox="0 0 400 500" style={{ width: "100%", height: "auto" }} aria-hidden="true">
              <rect width="400" height="500" fill="var(--color-brand-blue-50)" />
              <path d="M 20 20 L 380 20 L 380 480 L 20 480 Z" fill="none" stroke="var(--color-brand-blue-100)" strokeWidth="2" strokeDasharray="10,10" />
              <circle cx="80" cy="120" r="40" fill="var(--color-brand-blue-500)" />
              <circle cx="320" cy="380" r="40" fill="var(--color-brand-yellow-500)" />
              <path d="M 80 120 Q 200 250 320 380" fill="none" stroke="var(--color-brand-yellow-500)" strokeWidth="3" strokeDasharray="10,5" />
              <text x="80" y="125" textAnchor="middle" fill="var(--color-white)" fontSize="14" fontFamily="var(--font-display)">A</text>
              <text x="320" y="385" textAnchor="middle" fill="var(--color-brand-blue-500)" fontSize="14" fontFamily="var(--font-display)">B</text>
            </svg>
          </div>
        }
      >
        <Badge icon={<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><path d="M12 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/></svg>}>Cotizador online</Badge>
        <H1>Cotizá tu <Mark>envío</Mark> al toque</H1>
        <Lead invert>Calculá precio exacto por distancia real. Elegí servicio, cargá datos y listo.</Lead>
        <Button size="lg" onClick={scrollToStepper}>Empezar cotización</Button>
      </HeroAnimated>

      <Section id="cotizador-stepper">
        <StepperHorizontal
          steps={[
            { title: "Origen / Destino", subtitle: "Barrios de Mar del Plata" },
            { title: "Servicio", subtitle: "Express · LowCost · Flex" },
            { title: "Confirmar", subtitle: "Datos + WhatsApp" },
          ]}
          currentStep={step}
          onStepClick={setStep}
        />

        {step === 0 && <QuoteGuide steps={guideSteps} currentStep={0} orientation="horizontal" />}

        {step === 0 && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "var(--spacing-6)", marginTop: "var(--spacing-8)" }}>
            <style>{`@media (min-width: 768px) { .addr-grid { grid-template-columns: 1fr 1fr; } }`}</style>
            <div className="addr-grid">
              <AddressAutocomplete
                label="Origen (retiro)"
                type="origin"
                placeholder="Buscá tu barrio (ej. Güemes, Mogotes, Puerto)..."
                value={origin}
                onChange={setOrigin}
                onSelect={(place) => console.log("Origin:", place)}
              />
              <AddressAutocomplete
                label="Destino (entrega)"
                type="destination"
                placeholder="Buscá tu barrio (ej. Güemes, Mogotes, Puerto)..."
                value={destination}
                onChange={setDestination}
                onSelect={(place) => console.log("Destination:", place)}
              />
            </div>
            <Button variant="secondary" size="lg" onClick={() => setStep(1)} style={{ justifySelf: "end", maxWidth: "280px" }}>
              Continuar al servicio
            </Button>
          </div>
        )}

        {step === 1 && (
          <>
            <QuoteGuide steps={guideSteps} currentStep={1} orientation="horizontal" />
            <RadioCardGroup
              options={serviceOptions}
              value={service}
              onChange={setService}
              style={{ marginTop: "var(--spacing-8)" }}
            />
            <ServicePricing
              serviceType={service}
              style={{ marginTop: "var(--spacing-8)" }}
            />
            <SurchargesPanel
              serviceFilter={service}
              style={{ marginTop: "var(--spacing-8)" }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "var(--spacing-8)" }}>
              <Button variant="secondary" size="lg" onClick={() => setStep(0)}>Volver</Button>
              <Button variant="primary" size="lg" onClick={() => setStep(2)}>Continuar a confirmación</Button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <QuoteGuide steps={guideSteps} currentStep={2} orientation="horizontal" />
            <ServiceComparison rows={comparisonRows} style={{ marginTop: "var(--spacing-8)" }} />
            <ContactFormBlock
              title="Confirmá tu envío"
              lead="Completá tus datos y te contactamos por WhatsApp para coordinar el retiro."
              style={{ marginTop: "var(--spacing-8)" }}
            />
          </>
        )}

        <CoverageMap readonly style={{ marginTop: "var(--section-y-lg)" }} />
      </Section>

      <CtaForm />
      <SocialBand />
    </>
  );
}
window.CotizadorScreen = CotizadorScreen;