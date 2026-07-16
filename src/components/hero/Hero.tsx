"use client";

import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pb-16 pt-28"
    >
      {/* Background layers */}
      <HeroBackground />

      {/* Centered content — no mockups, typography is the protagonist */}
      <div className="container-shell relative z-10 flex items-center justify-center">
        <HeroContent />
      </div>

      {/* Scroll-down indicator */}
      <a
        href="#portfolio"
        aria-label="Ir para projetos"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/30 transition-colors duration-300 hover:text-[#2F6BFF]/60 md:flex"
      >
        <span className="text-[10px] font-semibold uppercase tracking-widest">Scroll</span>
        <svg
          width="14"
          height="20"
          viewBox="0 0 14 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="1" y="1" width="12" height="18" rx="6" />
          <path d="M7 5v4">
            <animate attributeName="opacity" values="1;0;1" dur="1.6s" repeatCount="indefinite" />
          </path>
        </svg>
      </a>
    </section>
  );
}
