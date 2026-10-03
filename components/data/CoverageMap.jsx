import React, { useState } from "react";
import { BezelCard } from "../core/BezelCard";

/** Zone definitions for Mar del Plata coverage */
const ZONES = [
  {
    id: "Z1",
    name: "Zona 1 · Microcentro",
    color: "var(--color-brand-blue-500)",
    opacity: 0.4,
    range: "0–3 km",
    expressPrice: 3700,
    lowCostPrice: 3000,
    barrios: ["Chauvín (Base Friuli 1972)", "Centro", "Macrocentro", "Plaza Mitre", "San José", "Güemes / Paseo Aldrey", "Terminal Vieja", "La Perla", "San Juan Comercial", "Don Bosco"],
    // SVG path coordinates (relative to viewBox 0 0 400 500)
    path: "M180,120 Q200,80 220,120 Q250,140 240,180 Q260,220 220,240 Q180,260 150,220 Q120,180 140,140 Q150,100 180,120 Z",
  },
  {
    id: "Z2",
    name: "Zona 2 · Interbarrial",
    color: "var(--color-brand-blue-400)",
    opacity: 0.35,
    range: "3–5 km",
    expressPrice: 4600,
    lowCostPrice: 4000,
    barrios: ["Playa Grande", "Los Troncos", "Stella Maris", "Puerto Mar del Plata", "Playa Varese / Cabo Corrientes", "Nueva Pompeya", "Villa Primera", "Parque Luro", "San Carlos", "Primera Junta"],
    path: "M220,120 Q260,80 300,110 Q320,160 300,200 Q280,240 240,240 Q200,260 180,220 Q160,180 180,140 Q200,100 220,120 Z",
  },
  {
    id: "Z3",
    name: "Zona 3 · Trayecto medio",
    color: "var(--color-brand-blue-300)",
    opacity: 0.3,
    range: "5–7 km",
    expressPrice: 6100,
    lowCostPrice: 5300,
    barrios: ["Punta Mogotes", "Caisamar", "Constitución (Zona Comercial)", "Zacagnini", "Colinas de Peralta Ramos", "Las Avenidas", "Florencio Sánchez", "El Martillo", "Termas Huinco", "Aeroparque"],
    path: "M300,110 Q340,60 380,100 Q390,160 360,200 Q340,240 300,200 Q280,220 260,180 Q250,140 270,120 Q290,100 300,110 Z",
  },
  {
    id: "Z4",
    name: "Zona 4 · Perímetro urbano",
    color: "var(--color-brand-blue-200)",
    opacity: 0.25,
    range: "7–10 km",
    expressPrice: 8200,
    lowCostPrice: 7000,
    barrios: ["Faro Punta Mogotes", "Alfar", "Bosque Peralta Ramos", "Parque Camet", "Libertad", "Virgen de Luján", "Estrada", "Autódromo"],
    path: "M360,200 Q390,160 400,220 Q410,280 380,300 Q350,330 300,280 Q280,260 270,240 Q280,200 300,200 Q330,180 360,200 Z",
  },
  {
    id: "Z5",
    name: "Zona 5 · Periferia (+10 km)",
    color: "var(--color-brand-yellow-500)",
    opacity: 0.3,
    range: "+10 km (por km ruta)",
    expressPrice: null, // calculated per km
    lowCostPrice: null,
    barrios: ["Acantilados", "San Patricio", "Estación Camet", "Camet Norte"],
    path: "M380,300 Q400,260 420,320 Q430,380 400,400 Q370,430 340,380 Q320,340 300,280 Q290,300 300,340 Q320,380 350,400 Q380,420 380,300 Z",
  },
];

/** Marker for base / points of interest */
const MARKERS = [
  { id: "base", name: "Base Friuli 1972", position: { x: 190, y: 140 }, zone: "Z1", icon: "🏢" },
  { id: "port", name: "Puerto Mar del Plata", position: { x: 280, y: 180 }, zone: "Z2", icon: "⚓" },
  { id: "mogotes", name: "Punta Mogotes", position: { x: 330, y: 150 }, zone: "Z3", icon: "🏖️" },
  { id: "camet", name: "Parque Camet", position: { x: 350, y: 260 }, zone: "Z4", icon: "🌲" },
];

/**
 * CoverageMap: mapa de cobertura estático con zonas coloreadas + tooltips CSS.
 * OPCIÓN B: sin Leaflet, solo SVG + CSS (bundle ligero).
 */
export function CoverageMap({
  className = "",
  onZoneClick,
  readonly = false,
}) {
  const [hoveredZone, setHoveredZone] = useState(null);
  const [selectedZone, setSelectedZone] = useState(null);

  const handleZoneClick = (zone) => {
    if (!readonly && onZoneClick) {
      onZoneClick(zone.id);
    }
    setSelectedZone(zone.id === selectedZone ? null : zone.id);
  };

  const formatPrice = (price) => price ? `$${price.toLocaleString("es-AR")}` : "Ver tarifas";

  return (
    <div style={{ position: "relative", width: "100%", ...parseClassName(className) }}>
      <style>{`
        .coverage-map {
          position: relative;
          width: 100%;
          aspect-ratio: 4/3;
          background: var(--color-neutral-50);
          border-radius: var(--radius-card);
          border: 1px solid var(--color-brand-blue-100);
          overflow: hidden;
        }
        .coverage-map svg {
          width: 100%;
          height: 100%;
          display: block;
        }
        .zone-path {
          transition: opacity 0.2s var(--ease-default), filter 0.2s var(--ease-default);
          cursor: ${readonly ? "default" : "pointer"};
        }
        .zone-path:hover {
          opacity: 1 !important;
          filter: brightness(1.1);
        }
        .zone-path.selected {
          stroke: var(--color-brand-yellow-500);
          stroke-width: 3;
          filter: brightness(1.15);
        }
        .zone-tooltip {
          position: absolute;
          pointer-events: none;
          z-index: 10;
          background: var(--color-brand-blue-500);
          color: var(--color-white);
          padding: var(--spacing-3) var(--spacing-4);
          border-radius: var(--radius-control);
          font-family: var(--font-sans);
          font-size: var(--text-sm);
          line-height: var(--leading-relaxed);
          box-shadow: var(--shadow-elevated);
          max-width: 280px;
          transform: translate(-50%, -100%);
          margin-bottom: 8px;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.15s var(--ease-default), visibility 0.15s;
        }
        .zone-tooltip::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 50%;
          transform: translateX(-50%);
          border-width: 6px 6px 0;
          border-style: solid;
          border-color: var(--color-brand-blue-500) transparent transparent;
        }
        .zone-path:hover + .zone-tooltip,
        .zone-path.selected + .zone-tooltip {
          opacity: 1;
          visibility: visible;
        }
        .marker {
          cursor: ${readonly ? "default" : "pointer"};
          transition: transform 0.15s var(--ease-default);
        }
        .marker:hover {
          transform: scale(1.3);
        }
        .legend {
          position: absolute;
          bottom: var(--spacing-4);
          left: var(--spacing-4);
          right: var(--spacing-4);
          display: flex;
          flex-wrap: wrap;
          gap: var(--spacing-2);
          justify-content: center;
          pointer-events: none;
        }
        .legend-item {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          background: var(--color-white);
          border: 1px solid var(--color-brand-blue-100);
          border-radius: var(--radius-button);
          font-family: var(--font-mono);
          font-size: 11px;
          font-variant-numeric: tabular-nums;
          color: var(--color-brand-blue-500);
          pointer-events: auto;
        }
        .legend-color {
          width: 16px;
          height: 16px;
          border-radius: 3px;
          border: 1px solid rgba(0,0,0,0.1);
        }
        @media (min-width: 768px) {
          .coverage-map { aspect-ratio: 16/9; }
          .legend { bottom: var(--spacing-6); left: var(--spacing-6); justify-content: flex-start; }
        }
        @media (prefers-reduced-motion: reduce) {
          .zone-path, .marker { transition: none; }
        }
      `}</style>

      <div className="coverage-map" role="img" aria-label="Mapa de cobertura de Envíos DosRuedas en Mar del Plata por zonas tarifarias">
        <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          <defs>
            {/* Subtle grid pattern */}
            <pattern id="grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--color-brand-blue-100)" stroke-width="0.5" opacity="0.5"/>
            </pattern>
          </defs>
          <rect width="400" height="500" fill="url(#grid-pattern)" />
          
          {/* Zones */}
          {ZONES.map((zone) => (
            <g key={zone.id}>
              <path
                className={`zone-path ${selectedZone === zone.id ? "selected" : ""}`}
                d={zone.path}
                fill={zone.color}
                fillOpacity={zone.opacity}
                stroke="var(--color-brand-blue-100)"
                strokeWidth="1.5"
                onMouseEnter={() => !readonly && setHoveredZone(zone.id)}
                onMouseLeave={() => setHoveredZone(null)}
                onClick={() => handleZoneClick(zone)}
              />
              {/* Tooltip */}
              <div className="zone-tooltip" style={{
                left: zone.id === "Z1" ? "45%" : zone.id === "Z2" ? "55%" : zone.id === "Z3" ? "70%" : zone.id === "Z4" ? "80%" : "85%",
                top: zone.id === "Z1" ? "40%" : zone.id === "Z2" ? "45%" : zone.id === "Z3" ? "45%" : zone.id === "Z4" ? "60%" : "75%",
              }}>
                <strong style={{ fontFamily: "var(--font-subheading)", textTransform: "uppercase", fontSize: "var(--text-xs)", letterSpacing: "var(--tracking-wider)", display: "block", marginBottom: "4px" }}>
                  {zone.name}
                </strong>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", fontFamily: "var(--font-mono)", fontSize: "11px" }}>
                  <span>Rango: {zone.range}</span>
                  <span>Express: {formatPrice(zone.expressPrice)}</span>
                  <span>LowCost: {formatPrice(zone.lowCostPrice)}</span>
                </div>
                <details style={{ marginTop: "var(--spacing-2)", fontSize: "11px" }}>
                  <summary style={{ cursor: "pointer", color: "var(--color-brand-yellow-500)", fontFamily: "var(--font-subheading)", textTransform: "uppercase", fontSize: "10px" }}>
                    Barrios ({zone.barrios.length})
                  </summary>
                  <ul style={{ margin: "4px 0 0", paddingLeft: "16px", columns: 2, columnGap: "8px" }}>
                    {zone.barrios.map((b) => <li key={b} style={{ fontSize: "10px", lineHeight: "1.6" }}>{b}</li>)}
                  </ul>
                </details>
              </div>
            </g>
          ))}

          {/* Markers */}
          {MARKERS.map((marker) => (
            <g
              key={marker.id}
              className="marker"
              onClick={() => !readonly && alert(`${marker.name} - ${marker.zone}`)}
              style={{
                transformOrigin: `${marker.position.x}px ${marker.position.y}px`,
              }}
            >
              <circle
                cx={marker.position.x}
                cy={marker.position.y}
                r="14"
                fill="var(--color-brand-blue-500)"
                stroke="var(--color-white)"
                strokeWidth="2"
                filter="drop-shadow(0 4px 8px rgba(9,80,246,0.3))"
              />
              <text
                x={marker.position.x}
                y={marker.position.y + 5}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="14"
                fill="var(--color-white)"
              >
                {marker.icon}
              </text>
              <title>{marker.name}</title>
            </g>
          ))}
        </svg>

        {/* Legend */}
        <div className="legend" role="navigation" aria-label="Leyenda de zonas tarifarias">
          {ZONES.map((zone) => (
            <div key={zone.id} className="legend-item">
              <span className="legend-color" style={{ background: zone.color, opacity: zone.opacity }}></span>
              <span>{zone.id}: {zone.range}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile fallback: stacked cards */}
      <div style={{ display: "none" }} aria-hidden="true">
        @media (max-width: 480px) {
          .coverage-map { aspect-ratio: 1/1; min-height: 300px; }
          .legend { display: none; }
        }
      </div>
    </div>
  );
}

function parseClassName(className) {
  return {};
}