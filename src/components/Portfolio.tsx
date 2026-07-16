"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ─────────────────────────────────────────
   1. Types & Data
───────────────────────────────────────── */

interface Project {
  id: string;
  title: string;
  category: string;
  tech: string;
  description: string;
  imagePath: string;
  imageAlt: string;
  linkContact: string;
  linkDemo: string;
}

const projectsData: Project[] = [
  {
    id: "michael-braganca",
    title: "Michael Bragança",
    category: "Landing Page",
    tech: "WordPress",
    description: "Gestão de milhas e viagens premium para um público de alta renda.",
    imagePath: "/images/projects/michael-braganca.png",
    imageAlt: "Screenshot do site Michael Bragança — Gestão de Viagens",
    linkContact: "#contato",
    linkDemo: "#",
  },
  {
    id: "dashboard-mrl",
    title: "Dashboard MRL Travel",
    category: "Sistema Web",
    tech: "React · TypeScript",
    description: "Painel analítico com dados de viagens, cashback e relatórios gerenciais.",
    imagePath: "/images/projects/dashboard-mrl.png",
    imageAlt: "Screenshot do Dashboard MRL Travel — Painel analítico",
    linkContact: "#contato",
    linkDemo: "#",
  },
  {
    id: "mrl-travel",
    title: "MRL Travel",
    category: "Site Institucional",
    tech: "Next.js",
    description: "Site institucional com apresentação de serviços para agência de viagens corporativas.",
    imagePath: "/images/projects/mrl-travel.png",
    imageAlt: "Screenshot do site MRL Travel — Site Institucional",
    linkContact: "#contato",
    linkDemo: "#",
  },
];

/* ─────────────────────────────────────────
   2. Animation Variants
───────────────────────────────────────── */

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.68,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

/* ─────────────────────────────────────────
   3. ProjectCard — Isolated sub-component
───────────────────────────────────────── */

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      variants={cardVariants}
      className="group flex cursor-pointer flex-col gap-4"
      aria-label={`Projeto: ${project.title}`}
    >
      {/* ────────────────────────────────────
          IMAGE STAGE
      ──────────────────────────────────── */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-blue-950/30 via-[#0d0f14] to-[#080a0d] p-5 transition-all duration-500 ease-out sm:p-6">

        {/* Subtle inner glow on hover */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(37,99,235,0.08), transparent 70%)",
          }}
        />

        {/* Screenshot wrapper */}
        <div className="relative h-full w-full overflow-hidden rounded-xl shadow-[0_24px_60px_rgba(0,0,0,0.65)]">
          <Image
            src={project.imagePath}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            loading="lazy"
          />
          {/* Thin bottom fade to ground the image */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* PRIMARY CTA — floating bottom-right inside stage */}
        <Link
          href={project.linkContact}
          aria-label={`Quero um projeto parecido com ${project.title}`}
          className="absolute bottom-4 right-4 z-10 rounded-full bg-blue-600 px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-white shadow-[0_0_0_1px_rgba(37,99,235,0.30)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-[0_0_18px_rgba(37,99,235,0.45)] sm:bottom-5 sm:right-5 sm:text-xs"
        >
          Quero um parecido
        </Link>
      </div>

      {/* ────────────────────────────────────
          PROJECT DETAILS — outside stage
      ──────────────────────────────────── */}
      <div className="flex flex-col gap-1.5 px-1">

        {/* Metadata row: CATEGORY • TECH */}
        <div className="flex items-center gap-2" aria-label="Categoria e tecnologia">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-[#B3B3B3]">
            {project.category}
          </span>
          <span
            className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500"
            aria-hidden="true"
          />
          <span className="text-[10px] font-semibold uppercase tracking-widest text-[#B3B3B3]">
            {project.tech}
          </span>
        </div>

        {/* Title + Secondary CTA row */}
        <div className="flex items-center justify-between gap-4 pt-0.5">
          <h3 className="text-xl font-bold leading-snug text-white md:text-2xl">
            {project.title}
          </h3>

          <Link
            href={project.linkDemo}
            aria-label={`Ver projeto ${project.title}`}
            className="shrink-0 rounded-full border border-white/[0.10] px-4 py-1.5 text-xs font-semibold text-white/70 transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
          >
            Ver projeto
          </Link>
        </div>

      </div>
    </motion.article>
  );
}

/* ─────────────────────────────────────────
   4. Portfolio Section
───────────────────────────────────────── */

export function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      aria-labelledby="portfolio-title"
      className="relative py-28 md:py-40"
    >
      <div className="container-shell">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="mb-16 max-w-2xl md:mb-20"
        >
          <p className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-500">
            <span className="inline-block h-px w-6 bg-blue-500" />
            Portfólio
          </p>
          <h2
            id="portfolio-title"
            className="text-balance text-4xl font-extrabold leading-[1.06] tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            Projetos que geram{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
              lucro de verdade
            </span>{" "}
            para meus clientes.
          </h2>
          <p className="mt-5 text-base leading-7 text-[#B3B3B3] md:text-lg">
            Cada entrega com foco em performance, autoridade e conversão.
          </p>
        </motion.div>

        {/* ── Projects Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3"
        >
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* ── Footer CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="mt-16 flex justify-center md:mt-20"
        >
          <Link
            href="#contato"
            className="group inline-flex items-center gap-2.5 rounded-full border border-blue-800/40 bg-blue-950/20 px-7 py-3.5 text-sm font-bold text-blue-400 transition-all duration-300 hover:border-blue-600/50 hover:bg-blue-900/20 hover:text-blue-300"
          >
            Quero um projeto assim
            <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
