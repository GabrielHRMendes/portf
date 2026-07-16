"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { ButtonLink } from "./ButtonLink";
import heroImage from "../../public/images/hero-automation-lab.png";

export function Hero() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 700], [0, 82]);
  const glowScale = useTransform(scrollY, [0, 700], [1, 0.78]);

  return (
    <section
      id="home"
      className="relative flex min-h-[76svh] items-center overflow-hidden pb-10 pt-24 md:min-h-[82svh] md:pb-16 md:pt-30"
      aria-labelledby="hero-title"
    >
      <motion.div
        style={{ scale: glowScale }}
        className="pointer-events-none absolute left-1/2 top-20 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[#2563EB]/20 blur-[110px]"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,.14),transparent_34rem)]" />

      <motion.div
        style={{ y: imageY }}
        className="absolute inset-y-16 right-[-18%] hidden w-[76%] opacity-80 lg:block"
      >
        <Image
          src={heroImage}
          alt=""
          aria-hidden="true"
          priority
          fill
          sizes="76vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,.72)_26%,rgba(5,5,5,.16)_58%,#050505_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#050505_0%,transparent_25%,#050505_100%)]" />
      </motion.div>

      <div className="container-shell relative z-10">
        <div className="mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-[#3B82F6]/50 bg-[#121214]/70 px-4 py-2 text-xs font-extrabold text-white shadow-[0_0_38px_rgba(37,99,235,.26)] backdrop-blur-xl"
          >
            <span aria-hidden="true">🚀</span>
            Desenvolvendo soluções inteligentes para empresas
          </motion.div>

          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 26, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.86, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance text-[clamp(2.72rem,8vw,7.4rem)] font-extrabold leading-[0.92] text-white"
          >
            Transformo Processos em{" "}
            <span className="hero-word">Automação Inteligente</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-7 max-w-3xl text-balance text-base font-medium leading-7 text-white/72 md:text-xl md:leading-8"
          >
            Desenvolvo soluções com <span className="accent-word">IA</span>, automações e
            sistemas personalizados para empresas que querem gerar{" "}
            <span className="accent-word">Resultados</span> com velocidade, organização e
            escala.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <ButtonLink href="#contato" className="w-full sm:w-auto">
              Solicitar orçamento
            </ButtonLink>
            <ButtonLink href="#portfolio" variant="secondary" className="w-full sm:w-auto">
              Ver Portfólio
            </ButtonLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.64, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-12 hidden max-w-3xl grid-cols-1 overflow-hidden rounded-3xl border border-white/10 bg-white/[.025] backdrop-blur-xl sm:grid-cols-3 md:grid"
          >
            {[
              ["+100", "automações planejadas"],
              ["24/7", "fluxos sempre ativos"],
              ["IA", "aplicada à operação"],
            ].map(([value, label]) => (
              <div key={label} className="border-white/10 px-5 py-4 sm:border-r last:sm:border-r-0">
                <p className="flex items-center justify-center gap-2 text-lg font-black text-white">
                  <Sparkles className="size-4 text-[#3B82F6]" />
                  {value}
                </p>
                <p className="mt-1 text-xs font-bold uppercase text-white/48">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <a
        href="#servicos"
        aria-label="Ir para serviços"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 rounded-full border border-white/12 bg-white/[.03] p-3 text-white/60 transition hover:text-white md:block"
      >
        <ArrowDown className="size-4" />
      </a>
    </section>
  );
}
