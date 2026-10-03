import React, { useState, useRef, useEffect } from "react";

/** Search icon (Lucide-style) */
const Search = () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m21 21-4.34-4.34"/><path d="M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0"/></svg>;
/** MapPin icon */
const MapPin = () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><path d="M15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/></svg>;
/** Loader icon */
const Loader = () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true" style={{ animation: "spin .8s linear infinite" }}><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>;

/** Barrios de Mar del Plata (fuente: CoberturaExplorer.tsx SEEDS) */
const BARRIOS_MDQ = [
  // Z1
  { name: "Chauvín (Base Friuli 1972)", zone: "Z1", note: "Base operativa central", lat: -38.0055, lng: -57.5425 },
  { name: "Centro", zone: "Z1", lat: -38.0006, lng: -57.5427 },
  { name: "Macrocentro", zone: "Z1", lat: -38.003, lng: -57.548 },
  { name: "Plaza Mitre", zone: "Z1", lat: -37.999, lng: -57.541 },
  { name: "San José", zone: "Z1", lat: -38.01, lng: -57.55 },
  { name: "Güemes / Paseo Aldrey", zone: "Z1", lat: -38.008, lng: -57.535 },
  { name: "Terminal Vieja / Paseo Jesús de Galíndez", zone: "Z1", lat: -38.012, lng: -57.538 },
  { name: "La Perla", zone: "Z1", lat: -38.02, lng: -57.54 },
  { name: "San Juan Comercial", zone: "Z1", lat: -38.015, lng: -57.535 },
  { name: "Don Bosco", zone: "Z1", lat: -38.022, lng: -57.545 },

  // Z2
  { name: "Playa Grande", zone: "Z2", lat: -38.03, lng: -57.55 },
  { name: "Los Troncos", zone: "Z2", lat: -38.04, lng: -57.56 },
  { name: "Stella Maris", zone: "Z2", lat: -38.05, lng: -57.57 },
  { name: "Puerto Mar del Plata", zone: "Z2", lat: -38.04, lng: -57.53 },
  { name: "Playa Varese / Cabo Corrientes", zone: "Z2", lat: -38.05, lng: -57.58 },
  { name: "Nueva Pompeya", zone: "Z2", lat: -38.06, lng: -57.58 },
  { name: "Villa Primera", zone: "Z2", lat: -38.06, lng: -57.56 },
  { name: "Parque Luro", zone: "Z2", lat: -38.07, lng: -57.56 },
  { name: "San Carlos", zone: "Z2", lat: -38.08, lng: -57.57 },
  { name: "Primera Junta", zone: "Z2", lat: -38.07, lng: -57.55 },

  // Z3
  { name: "Punta Mogotes", zone: "Z3", lat: -38.1, lng: -57.56 },
  { name: "Caisamar", zone: "Z3", lat: -38.11, lng: -57.57 },
  { name: "Constitución (Zona Comercial)", zone: "Z3", lat: -38.09, lng: -57.54 },
  { name: "Zacagnini", zone: "Z3", lat: -38.12, lng: -57.54 },
  { name: "Colinas de Peralta Ramos", zone: "Z3", lat: -38.13, lng: -57.55 },
  { name: "Las Avenidas", zone: "Z3", lat: -38.11, lng: -57.53 },
  { name: "Florencio Sánchez", zone: "Z3", lat: -38.12, lng: -57.52 },
  { name: "El Martillo", zone: "Z3", lat: -38.14, lng: -57.55 },
  { name: "Termas Huinco", zone: "Z3", lat: -38.15, lng: -57.56 },
  { name: "Aeroparque", zone: "Z3", lat: -38.09, lng: -57.5 },

  // Z4
  { name: "Faro Punta Mogotes", zone: "Z4", lat: -38.16, lng: -57.57 },
  { name: "Alfar", zone: "Z4", lat: -38.15, lng: -57.58 },
  { name: "Bosque Peralta Ramos", zone: "Z4", lat: -38.14, lng: -57.59 },
  { name: "Parque Camet", zone: "Z4", lat: -38.16, lng: -57.59 },
  { name: "Libertad", zone: "Z4", lat: -38.14, lng: -57.6 },
  { name: "Virgen de Luján", zone: "Z4", lat: -38.15, lng: -57.61 },
  { name: "Estrada", zone: "Z4", lat: -38.16, lng: -57.61 },
  { name: "Autódromo", zone: "Z4", lat: -38.17, lng: -57.6 },

  // Z5 (periferia)
  { name: "Acantilados", zone: "Z5", note: "Periferia +11 km", lat: -38.18, lng: -57.62 },
  { name: "San Patricio", zone: "Z5", note: "Periferia +12 km", lat: -38.19, lng: -57.63 },
  { name: "Estación Camet", zone: "Z5", note: "Periferia +14 km", lat: -38.2, lng: -57.64 },
  { name: "Camet Norte", zone: "Z5", note: "Periferia +15 km", lat: -38.21, lng: -57.64 },
];

/**
 * AddressAutocomplete: autocompletado origen/destino para cotizador (barrios Mar del Plata).
 * Datasource local (array estático) — NO Google Places API (0 deps, 0 coste).
 */
export function AddressAutocomplete({
  label,
  placeholder = "Buscá tu barrio (ej. Güemes, Mogotes, Puerto)...",
  type = "origin",
  value,
  onChange,
  onSelect,
  error,
  disabled = false,
  className = "",
  id,
}) {
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const debounceRef = useRef(null);

  const uid = React.useId ? React.useId() : Math.random().toString(36).slice(2);
  const inputId = id || `address-${type}-${uid}`;
  const listId = `${inputId}-suggestions`;

  // Click outside to close
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
        setSelectedIndex(-1);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter barrios
  const filterBarrios = (query) => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();
    return BARRIOS_MDQ.filter((b) => b.name.toLowerCase().includes(q)).slice(0, 10);
  };

  const handleInputChange = (e) => {
    const val = e.target.value;
    onChange(val);
    setSelectedIndex(-1);

    if (val.trim() === "") {
      setSuggestions([]);
      setIsOpen(false);
      if (onSelect) onSelect(null);
      return;
    }

    if (debounceRef.current) clearTimeout(debounceRef.current);
    setIsLoading(true);

    debounceRef.current = setTimeout(() => {
      const results = filterBarrios(val);
      setSuggestions(results);
      setIsOpen(results.length > 0);
      setIsLoading(false);
    }, 150);
  };

  const handleSelect = (barrio) => {
    onChange(barrio.name);
    setIsOpen(false);
    setSuggestions([]);
    setSelectedIndex(-1);
    if (onSelect) {
      onSelect({ name: barrio.name, address: barrio.name, lat: barrio.lat, lng: barrio.lng });
    }
  };

  const handleKeyDown = (e) => {
    if (!isOpen || suggestions.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : suggestions.length - 1));
    } else if (e.key === "Enter" && selectedIndex >= 0 && selectedIndex < suggestions.length) {
      e.preventDefault();
      handleSelect(suggestions[selectedIndex]);
    } else if (e.key === "Escape") {
      setIsOpen(false);
      setSelectedIndex(-1);
    }
  };

  const handleFocus = () => {
    if (value.trim() && suggestions.length > 0) setIsOpen(true);
  };

  const borderColor = error
    ? "var(--color-error-500)"
    : isOpen || (inputRef.current === document.activeElement)
    ? "var(--color-brand-blue-500)"
    : "var(--color-brand-blue-300)";

  const boxShadow = isOpen || (inputRef.current === document.activeElement)
    ? (error ? "0 0 0 2px rgba(239,68,68,.2)" : "0 0 0 2px rgba(9,80,246,.2)")
    : "none";

  return (
    <div ref={containerRef} style={{ width: "100%", ...parseClassName(className) }}>
      {label && (
        <label
          htmlFor={inputId}
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "var(--spacing-2)",
            fontFamily: "var(--font-subheading)",
            fontSize: "var(--text-xs)",
            textTransform: "uppercase",
            letterSpacing: "var(--tracking-wider)",
            color: "var(--color-brand-blue-500)",
          }}
        >
          <span>
            {label}
            {disabled ? null : <span style={{ color: "var(--color-error-500)", marginLeft: 4 }} aria-hidden="true">*</span>}
          </span>
        </label>
      )}

      <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
        <input
          ref={inputRef}
          type="text"
          id={inputId}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          disabled={disabled}
          required={!disabled}
          autoComplete="off"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={isOpen && suggestions.length > 0}
          aria-controls={listId}
          aria-activedescendant={selectedIndex >= 0 ? `${listId}-option-${selectedIndex}` : undefined}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={error ? `${inputId}-err` : undefined}
          style={{
            width: "100%",
            boxSizing: "border-box",
            minHeight: "var(--control-sm)",
            borderRadius: "var(--radius-control)",
            border: `2px solid ${borderColor}`,
            background: "var(--color-white)",
            fontFamily: "var(--font-sans)",
            fontSize: "var(--text-sm)",
            color: "var(--color-brand-blue-500)",
            padding: "10px 16px 10px 44px",
            outline: "none",
            boxShadow,
            transition: "border-color var(--duration-base) var(--ease-default), box-shadow var(--duration-base) var(--ease-default)",
            cursor: disabled ? "not-allowed" : "text",
            opacity: disabled ? 0.5 : 1,
          }}
        />
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            left: 14,
            display: "inline-flex",
            color: isLoading ? "var(--color-brand-blue-500)" : "var(--color-brand-blue-500)",
            pointerEvents: "none",
          }}
        >
          {isLoading ? <Loader /> : <Search />}
        </span>
      </div>

      {isOpen && suggestions.length > 0 && (
        <ul
          id={listId}
          role="listbox"
          style={{
            position: "absolute",
            zIndex: 50,
            width: "100%",
            marginTop: "var(--spacing-1)",
            background: "var(--color-brand-blue-500)",
            border: "1px solid rgba(255,255,255,.2)",
            borderRadius: "var(--radius-xl)",
            maxHeight: "240px",
            overflowY: "auto",
            boxShadow: "var(--shadow-2xl)",
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {suggestions.map((barrio, idx) => {
            const isSelected = idx === selectedIndex;
            return (
              <li
                key={barrio.name}
                id={`${listId}-option-${idx}`}
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(barrio)}
                onMouseEnter={() => setSelectedIndex(idx)}
                style={{
                  padding: "12px 16px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--spacing-3)",
                  color: "var(--color-white)",
                  fontSize: "var(--text-sm)",
                  fontFamily: "var(--font-sans)",
                  borderBottom: idx < suggestions.length - 1 ? "1px solid rgba(255,255,255,.1)" : "none",
                  background: isSelected ? "rgba(255,255,255,.1)" : "transparent",
                  transition: "background-color var(--duration-base) var(--ease-default)",
                  ...(isSelected ? { outline: "1px solid var(--color-brand-yellow-500)" } : {}),
                }}
              >
                <MapPin style={{ flexShrink: 0, color: "var(--color-brand-yellow-500)", marginTop: 2 }} />
                <div style={{ minWidth: 0 }}>
                  <p style={{ margin: 0, fontWeight: 600, lineHeight: 1.3, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {barrio.name.split(",")[0]}
                  </p>
                  {barrio.zone && (
                    <p style={{ margin: "2px 0 0", fontSize: "var(--text-xs)", color: "rgba(255,255,255,.7)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {barrio.zone} · {barrio.note || ""}
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      )}

      {isOpen && suggestions.length === 0 && value.trim() && (
        <ul
          id={listId}
          role="listbox"
          style={{
            position: "absolute",
            zIndex: 50,
            width: "100%",
            marginTop: "var(--spacing-1)",
            background: "var(--color-brand-blue-500)",
            border: "1px solid rgba(255,255,255,.2)",
            borderRadius: "var(--radius-xl)",
            padding: "var(--spacing-4)",
            boxShadow: "var(--shadow-2xl)",
            listStyle: "none",
            textAlign: "center",
            color: "rgba(255,255,255,.7)",
            fontSize: "var(--text-sm)",
            fontFamily: "var(--font-sans)",
          }}
        >
          <li role="option" aria-disabled="true">
            <MapPin style={{ width: 24, height: 24, margin: "0 auto var(--spacing-2)", color: "var(--color-brand-yellow-500)" }} />
            <p>No se encontraron barrios</p>
            <p style={{ fontSize: "var(--text-xs)", marginTop: "var(--spacing-1)" }}>Cubrimos todo Mar del Plata. Escribinos por WhatsApp.</p>
          </li>
        </ul>
      )}

      {error && (
        <p id={`${inputId}-err`} role="alert" style={{ margin: "var(--spacing-1) 0 0", fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", color: "var(--color-error-600)" }}>
          {error}
        </p>
      )}
    </div>
  );
}

function parseClassName(className) {
  return {};
}