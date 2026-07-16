import { Cpu, Database, MessageSquareText, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const specialties = [
  { icon: Cpu, label: "Arquitetura de automações" },
  { icon: MessageSquareText, label: "Agentes conversacionais" },
  { icon: Database, label: "Sistemas e dados" },
  { icon: ShieldCheck, label: "Entrega premium" },
];

export function About() {
  return (
    <section id="sobre" className="relative py-24 md:py-36" aria-labelledby="about-title">
      <div className="container-shell grid items-center gap-10 lg:grid-cols-[0.86fr_1.14fr]">
        <Reveal>
          <div className="premium-card animated-border blue-glow relative mx-auto aspect-[4/5] max-w-md rounded-[2rem] p-6">
            <div className="absolute inset-8 rounded-[1.5rem] border border-[#3B82F6]/22 bg-[radial-gradient(circle_at_50%_25%,rgba(59,130,246,.42),transparent_34%),linear-gradient(180deg,#1C1C20,#050505)]" />
            <div className="relative z-10 flex h-full flex-col justify-end rounded-[1.35rem] border border-white/10 bg-[#050505]/34 p-7 backdrop-blur-sm">
              <div className="mb-8 grid size-24 place-items-center rounded-full border border-[#3B82F6]/50 bg-[#14213D]/70 text-2xl font-black text-white shadow-[0_0_56px_rgba(37,99,235,.36)]">
                GM
              </div>
              <p className="text-sm font-bold uppercase text-[#3B82F6]">Gabriel Mendes</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mb-4 text-xs font-black uppercase text-[#3B82F6]">Sobre mim</p>
          <h2 id="about-title" className="text-balance text-4xl font-black leading-[0.98] md:text-6xl">
            Construo sistemas para empresas que querem parecer e operar melhor.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/66">
            Meu trabalho é fazer sistemas que não apenas funcionam, mas que também entregam valor real para o seu negócio. O meu objetivo é entregar resultado por um valor justo, com qualidade e com intuito de impulsionar o crescimentos dos meus clientes.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {specialties.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="premium-card rounded-3xl p-5">
                  <div className="relative z-10 flex items-center gap-4">
                    <span className="grid size-11 place-items-center rounded-2xl border border-[#3B82F6]/35 bg-[#14213D]/50 text-[#3B82F6]">
                      <Icon className="size-5" />
                    </span>
                    <span className="font-bold text-white">{item.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
