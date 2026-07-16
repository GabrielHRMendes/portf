"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { ButtonLink } from "./ButtonLink";
import { Reveal } from "./Reveal";

const filters = ["Todos", "IA", "Automação", "Sites", "Sistemas"] as const;

const projects = [
  {
    name: "Michael Bragança - Gestão de Viagens",
    category: "Landing Page",
    description: "Gestão de Milhas e Viagens",
    tech: ["JavaScript", "React", "Wordpress"],
    tone: "from-[#14213D] via-[#2563EB] to-[#050505]",
  },
  {
    name: "Dashboard - MRL Travel",
    category: "DASHBOARD",
    description: "Painel com descrição de viagens, gastos, passageiros e cashback para empresas clientes",
    tech: ["TypeScript", "PostgreSQL", "WebScrap", "React"],
    tone: "from-[#050505] via-[#1C1C20] to-[#2563EB]",
  },
  {
    name: "MRL Travel",
    category: "Site",
    description: "Site com páginas de informações sobre a empresa, serviços e contato",
    tech: ["Next.js", "Tailwind", "React"],
    tone: "from-[#121214] via-[#14213D] to-[#3B82F6]",
  },

];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("Todos");

  const visibleProjects = useMemo(
    () =>
      activeFilter === "Todos"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  return (
    <section id="portfolio" className="relative py-24 md:py-36" aria-labelledby="portfolio-title">
      <div className="container-shell">
        <Reveal className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-black uppercase text-[#3B82F6]">Portfólio</p>
            <h2 id="portfolio-title" className="text-balance text-4xl font-black leading-[0.98] md:text-6xl">
              Projetos que geram lucro de verdade para os meus clientes
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-2 text-xs font-black transition ${
                  activeFilter === filter
                    ? "border-[#3B82F6] bg-[#2563EB] text-white shadow-[0_0_28px_rgba(37,99,235,.28)]"
                    : "border-white/12 bg-white/[.03] text-white/58 hover:border-white/24 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.article
                layout
                key={project.name}
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 18, scale: 0.98 }}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                className="group"
              >
                <div className="premium-card rounded-3xl p-3 transition duration-300 group-hover:-translate-y-2 group-hover:border-[#3B82F6]/45">
                  <div className={`mockup-surface relative h-80 overflow-hidden rounded-2xl bg-gradient-to-br ${project.tone}`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,.16),transparent_34%)]" />
                    <div className="portfolio-browser absolute left-8 right-8 top-16 rounded-2xl border border-white/16 bg-[#050505]/80 p-3 backdrop-blur-xl transition duration-500 group-hover:scale-105">
                      <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                        <div className="flex gap-1.5">
                          <span className="size-2 rounded-full bg-[#2563EB]" />
                          <span className="size-2 rounded-full bg-[#3B82F6]" />
                          <span className="size-2 rounded-full bg-white/28" />
                        </div>
                        <div className="h-2 w-24 rounded-full bg-white/12" />
                      </div>
                      <div className="grid gap-3 md:grid-cols-[.8fr_1.2fr]">
                        <div className="rounded-xl bg-[#2563EB]/18 p-4">
                          <div className="mb-10 h-3 w-20 rounded-full bg-white/34" />
                          <div className="h-3 w-16 rounded-full bg-[#3B82F6]" />
                        </div>
                        <div className="space-y-2">
                          <div className="h-3 w-full rounded-full bg-white/32" />
                          <div className="h-3 w-4/5 rounded-full bg-white/18" />
                          <div className="h-3 w-2/3 rounded-full bg-white/12" />
                          <div className="mt-5 grid grid-cols-3 gap-2">
                            <span className="h-12 rounded-lg bg-white/10" />
                            <span className="h-12 rounded-lg bg-[#2563EB]/28" />
                            <span className="h-12 rounded-lg bg-white/10" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <ButtonLink
                      href="#contato"
                      className="absolute bottom-5 right-5 min-h-10 px-5 text-xs"
                    >
                      Quero algo parecido
                    </ButtonLink>
                  </div>
                </div>

                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-1 flex items-center gap-2 text-xs font-bold uppercase text-white/58">
                      {project.category}
                      <span className="size-1.5 rounded-full bg-[#3B82F6]" />
                      {project.tech[0]}
                    </p>
                    <h3 className="text-2xl font-black text-white">{project.name}</h3>
                    <p className="mt-2 max-w-md text-sm leading-6 text-white/58">{project.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <span key={item} className="rounded-full border border-white/10 px-3 py-1 text-[0.68rem] font-bold text-white/52">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href="#contato"
                    className="mt-1 grid size-11 shrink-0 place-items-center rounded-full border border-white/14 text-white/62 transition hover:border-[#3B82F6]/70 hover:text-white"
                    aria-label={`Ver projeto ${project.name}`}
                  >
                    <ExternalLink className="size-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
