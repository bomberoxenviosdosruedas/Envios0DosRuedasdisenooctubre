import React, { useState, useMemo } from "react";
import { Input } from "../core/Input";
import { FilterChips } from "../data/FilterChips";
import { Accordion } from "../data/Accordion";
import { Display } from "./Display";
import { Lead } from "./Lead";
import { Badge } from "../core/Badge";

/** Default FAQ data from FaqScreen */
const DEFAULT_CATEGORIES = [
  {
    name: "Servicios",
    desc: "Tipos de envío, franjas horarias y cobertura",
    icon: "🚀",
    items: [
      { q: "¿Qué diferencia hay entre Express, LowCost y Flex?", a: "Express: franja de 3 hs a elección, corte 15:00 hs. LowCost: entrega antes de 19:00 hs, corte 13:00 hs. Flex: corte 15:00 hs, entrega antes de 20:00 hs para Mercado Envíos." },
      { q: "¿Llegan a todo Mar del Plata?", a: "Sí, cubrimos toda la ciudad. Hasta 20 km el cálculo es automático; más allá se cotiza por WhatsApp." },
      { q: "¿Cuál es el peso máximo sin recargo?", a: "5 kg o 40×40 cm. Más que eso entra en bulto extra (desde $1.950 según servicio)." },
      { q: "¿Hacen contrareembolso?", a: "Sí, en todos los servicios. Comisión 0% — el repartidor cobra al entregar." },
      { q: "¿Qué pasa si llueve?", a: "Recargo 50% en Express/LowCost, 30% en Flex y e-commerce. Se informa antes de confirmar." },
    ],
  },
  {
    name: "Tarifas",
    desc: "Precios, formas de pago y facturación",
    icon: "💰",
    items: [
      { q: "¿Cómo se calcula el precio?", a: "Por distancia real en km entre retiro y entrega. Tarifa fija por tramos (0-3, 3-5, 5-7, 7-10 km). +10 km: $1.000/km (Express) o $700/km (LowCost)." },
      { q: "¿Hay cuenta corriente para empresas?", a: "Sí, facturación consolidada mensual/quincenal. Tarifa escalonada por volumen. No emitimos Factura A." },
      { q: "¿Qué medios de pago aceptan?", a: "Efectivo, transferencia, cuenta corriente. Contrareembolso: el repartidor cobra en destino." },
      { q: "¿DropOFF tiene descuento?", a: "Sí, -20% en E-Commerce 24HS trayendo paquetes a Friuli 1972. Base $2.400/envío." },
    ],
  },
  {
    name: "Operativa",
    desc: "Horarios, recargos, seguimiento y reclamos",
    icon: "⚙️",
    items: [
      { q: "¿Cuáles son los horarios de atención?", a: "Lunes a viernes 9:00-18:00 hs. Sábados 10:00-15:00 hs. Domingos cerrado. Base Friuli 1972." },
      { q: "¿Cómo funciona el seguimiento?", a: "GPS en vivo vía WhatsApp. Recibís link al confirmar el envío." },
      { q: "¿Qué pasa si el destinatario no está?", a: "Reintento: 2da visita = 100% del valor del envío. Se coordina por WhatsApp." },
      { q: "¿Cuánto tiempo de espera tiene el repartidor?", a: "10 min sin cargo. Desde min 11: $2.100 c/10 min adicionales." },
      { q: "¿Puedo agregar una parada en el camino?", a: "Sí, +50% sobre tarifa base. Máx 2 km de desvío. Más desvío = envío aparte." },
    ],
  },
  {
    name: "Confianza",
    desc: "Seguridad, experiencia y garantías",
    icon: "🛡️",
    items: [
      { q: "¿Cuántos años llevan en Mar del Plata?", a: "+7 años de trayectoria ininterrumpida. Flota propia, base en Friuli 1972." },
      { q: "¿Los repartidores son propios?", a: "Sí, flota propia y cadetes capacitados/uniformados. Cero tercerización." },
      { q: "¿Tienen seguro de carga?", a: "Responsabilidad civil contratada. Para valores altos, consultar cobertura adicional." },
      { q: "¿Cómo reclamo si algo falla?", a: "WhatsApp +54 223 660-2699. Atención comercial < 2 min. Resolvemos en el día." },
    ],
  },
];

/**
 * FaqSearch: buscador de FAQ con filtro por categoría (página /nosotros/preguntas-frecuentes).
 */
export function FaqSearch({ categories = DEFAULT_CATEGORIES, className = "", onSearch }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("ALL");

  // Flatten all items for search
  const allItems = useMemo(() => categories.flatMap(cat => cat.items.map(item => ({ ...item, category: cat.name }))), [categories]);

  // Filter items
  const filteredItems = useMemo(() => {
    let items = allItems;
    if (activeCategory !== "ALL") {
      items = items.filter(item => item.category === activeCategory);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      items = items.filter(item => item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q));
    }
    return items;
  }, [allItems, activeCategory, query]);

  // Categories with counts
  const categoriesWithCounts = useMemo(() => [
    { name: "ALL", label: "Todas", count: allItems.length },
    ...categories.map(cat => ({ name: cat.name, label: cat.name, count: cat.items.length })),
  ], [categories, allItems]);

  const handleSearch = (e) => {
    const val = e.target.value;
    setQuery(val);
    onSearch?.(val, filteredItems);
  };

  return (
    <div style={{ ...parseClassName(className) }}>
      {/* Search Input */}
      <Input
        as="search"
        label="Buscar preguntas"
        placeholder="Ej: horario, zonas, peso, contrareembolso"
        value={query}
        onChange={handleSearch}
        icon={<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>}
      />

      {/* Category Chips */}
      <FilterChips
        label="Categorías"
        options={categoriesWithCounts.map(c => c.name)}
        value={activeCategory}
        onChange={setActiveCategory}
        badges={categoriesWithCounts.reduce((acc, c) => { acc[c.name] = c.count; return acc; }, {})}
      />

      {/* Results Count */}
      <p style={{
        margin: "var(--spacing-4) 0",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-sm)",
        color: "var(--color-brand-blue-500)",
        textAlign: "center",
      }}>
        {filteredItems.length} pregunta{filteredItems.length !== 1 ? "s" : ""} encontrada{filteredItems.length !== 1 ? "s" : ""}
        {activeCategory !== "ALL" && <span> · Categoría: {activeCategory}</span>}
        {query && <span> · Búsqueda: "{query}"</span>}
        {' · '}
        <a href="https://wa.me/542236602699" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-brand-yellow-500)", textDecoration: "underline" }}>
          +54 223 660-2699
        </a>
      </p>

      {/* Results Accordion */}
      {filteredItems.length > 0 ? (
        <Accordion items={filteredItems.map((item, idx) => ({
          title: item.q,
          content: item.a,
        }))} allowMultiple={true} />
      ) : (
        <div style={{
          textAlign: "center",
          padding: "var(--spacing-10)",
          background: "var(--color-brand-blue-50)",
          border: "1px solid var(--color-brand-blue-100)",
          borderRadius: "var(--radius-card)",
        }}>
          <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ margin: "0 auto var(--spacing-4)", color: "var(--color-brand-blue-500)" }}><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          <h3 style={{ margin: "0 0 var(--spacing-2)", fontFamily: "var(--font-subheading)", fontSize: "var(--text-lg)", textTransform: "uppercase", letterSpacing: "var(--tracking-wider)", color: "var(--color-brand-blue-500)" }}>
            No encontramos preguntas con ese término
          </h3>
          <p style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", lineHeight: "var(--leading-relaxed)", color: "var(--color-brand-blue-500)" }}>
            Cubrimos todo Mar del Plata. Escribinos por WhatsApp y te respondemos al toque.
          </p>
          <div style={{ marginTop: "var(--spacing-4)" }}>
            <a href="https://wa.me/542236602699?text=Hola%20Env%C3%ADos%20DosRuedas!%20Tengo%20una%20consulta%20sobre%20cobertura." target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 24px",
              background: "var(--color-brand-blue-500)",
              color: "var(--color-white)",
              borderRadius: "var(--radius-button)",
              fontFamily: "var(--font-subheading)",
              fontSize: "var(--text-sm)",
              textTransform: "uppercase",
              letterSpacing: "var(--tracking-wider)",
              textDecoration: "none",
            }}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20Z"/></svg>
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

function parseClassName(className) {
  return {};
}