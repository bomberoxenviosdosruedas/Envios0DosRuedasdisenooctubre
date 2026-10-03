import React, { useState } from "react";
import { BezelCard } from "../core/BezelCard";
import { Input } from "../core/Input";
import { Button } from "../core/Button";
import { Badge } from "../core/Badge";

/** WhatsApp icon */
const WhatsAppIcon = () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20Z"/></svg>;

/**
 * ContactFormBlock: formulario de contacto reutilizable (Contacto, Cotizador, Landing).
 */
export function ContactFormBlock({
  title = "¿Listo para escalar la logística de tu e-commerce?",
  lead = "Olvidate de la gestión de paquetes en Mar del Plata. Completá tus datos y te respondemos por WhatsApp al instante.",
  submitLabel = "Cotizar por WhatsApp",
  whatsappNumber = "+542236602699",
  onSubmit,
  className = "",
  variant = "inline", // 'inline' | 'modal' | 'banner'
}) {
  const [formData, setFormData] = useState({ name: "", company: "", volume: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | done | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Por favor, ingresá tu nombre.";
    if (!formData.volume) newErrors.volume = "Seleccioná un volumen.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return setStatus("error");

    setStatus("loading");
    const message = `Hola! Soy ${formData.name} de ${formData.company || "mi comercio"}. Manejo ${formData.volume} envíos/mes y quiero cotizar.`;
    const url = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

    // Simulate async submission
    setTimeout(() => {
      setStatus("done");
      onSubmit?.(formData);
      // Open WhatsApp
      window.open(url, "_blank", "noopener,noreferrer");
    }, 1100);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (status === "error" && errors[field] && value.trim()) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const tone = variant === "inline" ? "light" : "dark";

  return (
    <BezelCard tone={tone} hoverLift={false} padding={32} style={{ ...parseClassName(className) }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-5)" }}>
        {/* Header */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-3)", alignItems: "flex-start" }}>
          <Badge tone="muted" size="sm">Cotización inmediata</Badge>
          <h2 style={{
            margin: 0,
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
            fontWeight: 400,
            lineHeight: "var(--leading-display)",
            letterSpacing: "var(--tracking-display)",
            textTransform: "uppercase",
            color: tone === "dark" ? "var(--color-white)" : "var(--color-brand-blue-500)",
          }}>
            {title}
          </h2>
          <p style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", lineHeight: "var(--leading-relaxed)", color: tone === "dark" ? "rgba(255,255,255,.85)" : "var(--color-brand-blue-500)" }}>
            {lead}
          </p>
          <p style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: "12px", lineHeight: "1.3", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: tone === "dark" ? "var(--color-brand-yellow-500)" : "var(--color-brand-blue-500)" }}>
            Atención comercial < 2 min
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--spacing-4)",
          background: tone === "dark" ? "rgba(255,255,255,.1)" : "var(--color-brand-blue-50)",
          borderRadius: "var(--radius-card)",
          border: `2px solid ${tone === "dark" ? "rgba(255,255,255,.25)" : "var(--color-brand-blue-100)"}`,
          boxShadow: "var(--shadow-xl)",
          padding: 24,
        }}>
          <Input
            label="Tu nombre"
            required
            placeholder="Nombre y apellido"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            error={errors.name}
          />

          <Input
            label="Comercio"
            placeholder="Opcional"
            value={formData.company}
            onChange={(e) => handleChange("company", e.target.value)}
          />

          <Input
            as="select"
            label="Volumen mensual"
            value={formData.volume}
            onChange={(e) => handleChange("volume", e.target.value)}
            error={errors.volume}
          >
            <option value="" disabled>Elegí un rango</option>
            <option value="1 a 50">1 a 50</option>
            <option value="50 a 200">50 a 200</option>
            <option value="+200">+200</option>
          </Input>

          <Button
            type="submit"
            fullWidth
            loading={status === "loading"}
            icon={<WhatsAppIcon />}
            variant="primary"
            size="lg"
          >
            {status === "done" ? "¡Listo! Te esperamos en WhatsApp" : submitLabel}
          </Button>

          {status === "error" && (
            <p role="alert" style={{
              margin: 0,
              fontFamily: "var(--font-sans)",
              fontSize: "var(--text-sm)",
              color: "var(--color-error-600)",
              textAlign: "center",
            }}>
              Por favor, completá los campos requeridos.
            </p>
          )}

          {status === "done" && (
            <p style={{
              margin: 0,
              fontFamily: "var(--font-sans)",
              fontSize: "var(--text-sm)",
              color: "var(--color-success-500)",
              textAlign: "center",
            }}>
              ¡Enviado! Se abrió WhatsApp con tu consulta.
            </p>
          )}
        </form>
      </div>
    </BezelCard>
  );
}

function parseClassName(className) {
  return {};
}