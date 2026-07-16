"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  const [status, setStatus] = useState("");

  return (
    <section id="contato" className="relative py-24 md:py-36" aria-labelledby="cta-title">
      <div className="container-shell">
        <Reveal>
          <div className="animated-border blue-glow relative grid overflow-hidden rounded-[2rem] lg:grid-cols-[1.05fr_.95fr]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_0%,rgba(59,130,246,.32),transparent_42%),linear-gradient(180deg,#121214,#050505)]" />
            <div className="relative z-10 p-7 md:p-12 lg:p-16">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[.04] px-4 py-2 text-xs font-black uppercase text-[#3B82F6]">
                <ArrowUpRight className="size-4" />
                Próximo passo
              </p>
              <h2 id="cta-title" className="text-balance text-4xl font-black leading-[0.94] text-white md:text-7xl">
                Entre em Contato
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/66 md:text-lg">
                Esclarecer dúvidas, solicitar orçamentos personalizados, ou apenas conversar sobre a área de criação de sites, basta entrar em contato da forma que achar melhor.
              </p>
            </div>

            <form
              className="relative z-10 grid gap-4 border-t border-white/10 bg-[#050505]/38 p-7 backdrop-blur-xl md:p-10 lg:border-l lg:border-t-0"
              onSubmit={(event) => {
                event.preventDefault();
                setStatus("Briefing registrado. Conecte este formulário ao canal oficial de contato.");
                event.currentTarget.reset();
              }}
            >
              <label className="grid gap-2 text-sm font-bold text-white/70">
                Nome
                <input
                  required
                  name="nome"
                  autoComplete="name"
                  placeholder="Seu nome"
                  className="min-h-12 rounded-2xl border border-white/12 bg-[#050505]/70 px-4 text-white outline-none transition placeholder:text-white/28 focus:border-[#3B82F6]/70 focus:ring-4 focus:ring-[#2563EB]/15"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-white/70">
                Prioridade
                <select
                  required
                  name="prioridade"
                  className="min-h-12 rounded-2xl border border-white/12 bg-[#050505]/70 px-4 text-white outline-none transition focus:border-[#3B82F6]/70 focus:ring-4 focus:ring-[#2563EB]/15"
                >
                  <option value="">Selecione</option>
                  <option>Agente de IA</option>
                  <option>Automação</option>
                  <option>Site ou landing page</option>
                  <option>Sistema web</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-bold text-white/70">
                Contexto
                <textarea
                  required
                  name="contexto"
                  rows={4}
                  placeholder="Conte o que você quer automatizar ou construir"
                  className="min-h-32 resize-y rounded-2xl border border-white/12 bg-[#050505]/70 px-4 py-3 text-white outline-none transition placeholder:text-white/28 focus:border-[#3B82F6]/70 focus:ring-4 focus:ring-[#2563EB]/15"
                />
              </label>
              <button
                type="submit"
                className="blue-glow inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#3B82F6]/70 bg-[linear-gradient(135deg,#2563EB,#14213D)] px-6 text-sm font-black text-white transition hover:-translate-y-1"
              >
                Solicitar orçamento
                <span aria-hidden="true">→</span>
              </button>
              <p role="status" aria-live="polite" className="min-h-5 text-sm font-semibold text-[#3B82F6]">
                {status}
              </p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
