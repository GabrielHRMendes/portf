"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#portfolio", label: "Projetos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex h-14 max-w-[1280px] items-center justify-between rounded-full border border-white/[0.07] bg-[#06070B]/80 px-4 shadow-[0_8px_40px_rgba(0,0,0,0.40)] backdrop-blur-2xl md:px-6"
      >
        {/* Logo */}
        <Link href="#home" className="group flex items-center gap-3" aria-label="Gabriel Mendes">
          <span className="grid size-9 shrink-0 place-items-center rounded-full border border-[#2F6BFF]/30 bg-[#2F6BFF]/10 text-[0.65rem] font-black text-[#93c5fd] shadow-[0_0_20px_rgba(47,107,255,0.15)]">
            GM
          </span>
          <span className="leading-none">
            <span className="block text-sm font-extrabold text-white md:text-base">Gabriel Mendes</span>
            <span className="hidden text-[0.65rem] font-medium text-white/40 sm:block">
              Sites · Landing Pages · Sistemas
            </span>
          </span>
        </Link>

        {/* Nav links */}
        <div className="hidden items-center gap-7 text-sm font-medium text-white/45 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors duration-200 hover:text-white focus-visible:text-white focus-visible:outline-none"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="#contato"
          id="header-cta"
          className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#2F6BFF] to-[#1D4ED8] px-5 py-2.5 text-xs font-bold text-white shadow-[0_0_20px_rgba(47,107,255,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(47,107,255,0.42)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2F6BFF]"
        >
          Orçamento
        </Link>
      </nav>
    </motion.header>
  );
}
