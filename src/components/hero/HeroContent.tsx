"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

/* ── Data ── */
const indicators = [
  "Landing Pages",
  "Sites Institucionais",
  "Sistemas Web",
  "Alta Performance",
  "SEO",
  "Responsivo",
  "Integrações",
  "IA",
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

/* ── Component ── */
export function HeroContent() {
  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 600], [0, -40]);
  const contentOpacity = useTransform(scrollY, [0, 450], [1, 0]);

  return (
    <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
      <motion.div style={{ y: contentY, opacity: contentOpacity }}>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease }}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-[#2F6BFF]/20 bg-[#2F6BFF]/[0.06] px-5 py-2.5 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2F6BFF] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2F6BFF]" />
          </span>
          <span className="text-xs font-semibold tracking-widest text-[#93c5fd] uppercase">
            Especialista em Sites Profissionais
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 28, filter: "blur(14px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.90, delay: 0.18, ease }}
          className="text-balance text-[clamp(2.6rem,6.5vw,5.2rem)] font-extrabold leading-[1.04] tracking-tight text-white"
        >
          Criamos{" "}
          <span className="gradient-text">sites</span>{" "}
          que fazem empresas{" "}
          <br className="hidden md:block" />
          <span className="gradient-text">parecerem maiores</span>{" "}
          do que realmente são.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, delay: 0.34, ease }}
          className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/50 md:text-lg md:leading-8"
        >
          Landing Pages, Sites Institucionais e Sistemas Web desenvolvidos para
          gerar autoridade, aumentar conversão e transformar visitantes em
          clientes.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.68, delay: 0.48, ease }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          {/* Primary */}
          <Link
            href="#contato"
            id="hero-cta-primary"
            className="group inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#2F6BFF] to-[#1D4ED8] px-9 py-3.5 text-sm font-bold text-white shadow-[0_0_0_1px_rgba(47,107,255,0.20),0_4px_24px_rgba(47,107,255,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(47,107,255,0.30),0_8px_40px_rgba(47,107,255,0.40)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2F6BFF]"
          >
            Solicitar orçamento
            <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>

          {/* Secondary */}
          <Link
            href="#portfolio"
            id="hero-cta-secondary"
            className="group inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full border border-white/[0.10] bg-white/[0.03] px-9 py-3.5 text-sm font-bold text-white/70 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2F6BFF]/30 hover:bg-[#2F6BFF]/[0.06] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/40"
          >
            Ver projetos
            <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>

        {/* Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.64, ease }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
        >
          {indicators.map((label, i) => (
            <motion.span
              key={label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, delay: 0.68 + i * 0.045, ease }}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-white/38"
            >
              <Check className="h-3.5 w-3.5 text-[#2F6BFF]" strokeWidth={2.5} />
              {label}
            </motion.span>
          ))}
        </motion.div>

      </motion.div>
    </div>
  );
}
