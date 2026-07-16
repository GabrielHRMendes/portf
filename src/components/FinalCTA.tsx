"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section id="contato" className="relative py-28 md:py-40" aria-labelledby="cta-title">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2F6BFF]/[0.08] blur-[120px]" />
      </div>

      <div className="container-shell relative z-10">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[.04] px-4 py-2 text-xs font-black uppercase text-[#2F6BFF]">
              Próximo passo
            </p>
            <h2
              id="cta-title"
              className="text-balance text-4xl font-black leading-[0.94] text-white md:text-7xl"
            >
              Pronto para transformar sua presença digital?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/66 md:text-lg">
              Solicite um orçamento e descubra como posso criar a solução perfeita para o seu negócio.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <motion.a
                href="#contato"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#2F6BFF] to-[#1D4ED8] px-8 text-sm font-black text-white shadow-[0_0_30px_rgba(47,107,255,0.45)] transition hover:shadow-[0_0_40px_rgba(47,107,255,0.55)]"
              >
                Solicitar orçamento
                <span aria-hidden="true">→</span>
              </motion.a>
              <motion.a
                href="https://wa.me/5537998668569"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-8 text-sm font-black text-white transition hover:border-[#2F6BFF]/30 hover:bg-white/[0.06]"
              >
                <MessageCircle className="size-4" />
                Conversar no WhatsApp
              </motion.a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
