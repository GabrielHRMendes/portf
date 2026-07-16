"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Planejamento",
    description:
      "Entendo o seu negócio, mapeio objetivos e defino a estratégia ideal.",
  },
  {
    number: "02",
    title: "Desenvolvimento",
    description:
      "Crio a solução com design premium, código limpo e performance otimizada.",
  },
  {
    number: "03",
    title: "Entrega & Suporte",
    description:
      "Lanço o projeto e ofereço acompanhamento contínuo para garantir resultados.",
  },
];

export function ProcessSimple() {
  return (
    <section id="processo" className="relative py-28 md:py-40" aria-labelledby="process-title">
      <div className="container-shell">
        <Reveal className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-xs font-black uppercase text-[#2F6BFF]">Processo</p>
          <h2
            id="process-title"
            className="text-balance text-4xl font-black leading-[0.98] md:text-6xl"
          >
            Como trabalho
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/64 md:text-lg">
            Um processo simples, direto e focado em resultados.
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal key={step.number} as="article" delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="group h-full rounded-3xl border border-white/[0.06] bg-[#0E1117]/80 p-8 backdrop-blur-xl transition duration-300 hover:border-[#2F6BFF]/30 hover:shadow-[0_0_30px_rgba(47,107,255,0.12)]"
              >
                <span className="block text-6xl font-black leading-none text-[#2F6BFF]/20 transition group-hover:text-[#2F6BFF]/35">
                  {step.number}
                </span>
                <h3 className="mt-4 text-2xl font-black leading-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/62">{step.description}</p>
                <div className="mt-8 h-px w-12 bg-[#2F6BFF]/60 transition-all group-hover:w-24" />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
