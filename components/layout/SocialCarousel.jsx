import React, { useState, useCallback, useEffect } from "react";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";
import { BezelCard } from "../core/BezelCard";
import { Button } from "../core/Button";
import { Badge } from "../core/Badge";

/** SocialCarousel: carrusel de posts sociales (cards con imagen, caption, métricas) */
export function SocialCarousel({ posts, autoPlay = true, interval = 4500, className = "" }) {
  const prefersReducedMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % posts.length);
  }, [posts.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length);
  }, [posts.length]);

  // Auto-play effect
  useEffect(() => {
    if (!autoPlay || prefersReducedMotion || isHovering) return;
    const timer = setInterval(goToNext, interval);
    return () => clearInterval(timer);
  }, [autoPlay, prefersReducedMotion, isHovering, interval, goToNext]);

  const total = posts.length;
  const post = posts[currentIndex];

  return (
    <div style={{ position: "relative", width: "100%", ...parseClassName(className) }}>
      <style>{`
        .social-carousel-track {
          display: flex;
          align-items: center;
          gap: 20px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          padding: var(--spacing-4) 0;
          -webkit-overflow-scrolling: touch;
        }
        .social-carousel-track::-webkit-scrollbar { display: none; }
        .social-carousel-track { -ms-overflow-style: none; scrollbar-width: none; }
        .social-slide {
          flex: 0 0 300px;
          scroll-snap-align: center;
        }
        @media (max-width: 640px) {
          .social-slide { flex: 0 0 280px; }
        }
        @media (min-width: 1024px) {
          .social-slide { flex: 0 0 340px; }
        }
      `}</style>

      {/* Main carousel track */}
      <div className="social-carousel-track" role="region" aria-label="Posts recientes de redes sociales" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
        {posts.map((post, idx) => (
          <div key={idx} className="social-slide">
            <BezelCard
              tone={idx % 3 === 0 ? "accent" : idx % 3 === 1 ? "light" : "dark"}
              hoverLift={true}
              padding={0}
              style={{ height: 380, display: "flex", flexDirection: "column", overflow: "hidden" }}
            >
              {/* Image with overlay */}
              <div style={{
                position: "relative",
                aspectRatio: "4/5",
                width: "100%",
                backgroundImage: `url(${post.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(9,80,246,.85) 0%, transparent 55%)",
                  pointerEvents: "none",
                }}></div>
                <div style={{
                  position: "absolute",
                  bottom: "var(--spacing-4)",
                  left: "var(--spacing-4)",
                  right: "var(--spacing-4)",
                  color: "var(--color-white)",
                  zIndex: 1,
                }}>
                  <p style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", lineHeight: "var(--leading-relaxed)", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {post.caption}
                  </p>
                </div>
                <div style={{
                  position: "absolute",
                  top: "var(--spacing-3)",
                  left: "var(--spacing-3)",
                  zIndex: 1,
                }}>
                  <Badge tone="muted" size="sm" mono rotate={false}>
                    {post.platform === "instagram" ? "📷 Instagram" : "📘 Facebook"}
                  </Badge>
                </div>
              </div>

              {/* Footer with metrics + CTA */}
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--spacing-3)",
                padding: "var(--spacing-4)",
                background: "var(--color-white)",
                flex: 1,
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "var(--spacing-3)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-4)", fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", fontVariantNumeric: "tabular-nums", color: "var(--color-brand-blue-500)" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 4 }}><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>{post.likes.toLocaleString()}</span>
                    <span style={{ display: "flex", alignItems: "center", gap: 4 }}><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/></svg>{post.comments.toLocaleString()}</span>
                  </div>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--color-brand-blue-500)" }}>
                    {new Date(post.date).toLocaleDateString("es-AR", { day: "numeric", month: "short" })}
                  </span>
                </div>
                <Button variant="outline" fullWidth size="sm" external href={post.href}>
                  Ver post
                </Button>
              </div>
            </BezelCard>
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: "var(--spacing-4)" }} role="tablist" aria-label="Navegación del carrusel">
        {posts.map((_, idx) => (
          <button
            key={idx}
            role="tab"
            aria-selected={idx === currentIndex}
            aria-label={`Ir al post ${idx + 1}`}
            onClick={() => setCurrentIndex(idx)}
            style={{
              width: idx === currentIndex ? 40 : 10,
              height: 8,
              borderRadius: 4,
              border: "none",
              background: idx === currentIndex ? "var(--color-brand-yellow-500)" : "var(--color-brand-blue-100)",
              cursor: "pointer",
              transition: "all var(--duration-base) var(--ease-default)",
            }}
          />
        ))}
      </div>

      {/* Prev/Next arrows (optional, for desktop) */}
      <style>{`
        @media (min-width: 768px) {
          .social-carousel-arrow { display: flex !important; }
        }
      `}</style>
      <button
        className="social-carousel-arrow"
        onClick={goToPrev}
        style={{
          position: "absolute",
          left: -50,
          top: "50%",
          transform: "translateY(-50%)",
          width: 44,
          height: 44,
          borderRadius: "var(--radius-full)",
          background: "var(--color-brand-blue-500)",
          color: "var(--color-white)",
          border: "none",
          cursor: "pointer",
          display: "none",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "var(--shadow-elevated)",
          zIndex: 10,
        }}
        aria-label="Post anterior"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <button
        className="social-carousel-arrow"
        onClick={goToNext}
        style={{
          position: "absolute",
          right: -50,
          top: "50%",
          transform: "translateY(-50%)",
          width: 44,
          height: 44,
          borderRadius: "var(--radius-full)",
          background: "var(--color-brand-blue-500)",
          color: "var(--color-white)",
          border: "none",
          cursor: "pointer",
          display: "none",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "var(--shadow-elevated)",
          zIndex: 10,
        }}
        aria-label="Siguiente post"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
    </div>
  );
}

function parseClassName(className) {
  return {};
}