"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#sobre", label: "Sobre" },
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
        className="mx-auto flex h-14 max-w-[1280px] items-center justify-between rounded-full border border-white/10 bg-[#050505]/72 px-4 shadow-[0_18px_70px_rgba(0,0,0,.42)] backdrop-blur-2xl md:px-6"
      >
        <Link href="#home" className="group flex items-center gap-3" aria-label="Gabriel Mendes">
          <span className="grid size-9 place-items-center rounded-full border border-[#3B82F6]/50 bg-[#14213D]/70 text-[0.68rem] font-black text-white shadow-[0_0_28px_rgba(59,130,246,.24)]">
            GM
          </span>
          <span className="leading-none">
            <span className="block text-sm font-extrabold text-white md:text-base">Gabriel Mendes</span>
            <span className="hidden text-[0.68rem] font-medium text-white/48 sm:block">
              Sites, Landing Pages, Automações e Sistemas
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium text-white/54 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-white focus-visible:text-white focus-visible:outline-none"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="#contato"
          className="rounded-full border border-[#3B82F6]/70 bg-white px-5 py-2 text-xs font-extrabold text-[#050505] shadow-[0_0_26px_rgba(59,130,246,.36)] transition hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(59,130,246,.46)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3B82F6]"
        >
          ORÇAMENTO
        </Link>
      </nav>
    </motion.header>
  );
}
