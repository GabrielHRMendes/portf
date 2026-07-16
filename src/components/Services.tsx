"use client";

import {
  Bot,
  BrainCircuit,
  CalendarClock,
  Code2,
  Globe2,
  Layers3,
  MessageCircle,
  Rocket,
  Send,
  Workflow,
} from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const services = [
  {
    icon: MessageCircle,
    title: "Agentes de IA para WhatsApp",
    description: "Atendimento, qualificação e respostas assistidas para conversas de alta intenção.",
  },
  {
    icon: Send,
    title: "Agentes de IA para Instagram",
    description: "Fluxos inteligentes para transformar interação social em relacionamento comercial.",
  },
  {
    icon: Bot,
    title: "Bots automáticos para Telegram",
    description: "Comandos, alertas, rotinas internas e automações conectadas aos seus dados.",
  },
  {
    icon: Workflow,
    title: "Automações com N8N",
    description: "Orquestração de tarefas, webhooks, eventos e integrações entre ferramentas.",
  },
  {
    icon: Code2,
    title: "Integrações via API",
    description: "Conexões robustas para fazer sistemas conversarem com menos operação manual.",
  },
  {
    icon: CalendarClock,
    title: "Sistemas de Agendamento",
    description: "Fluxos de reserva, confirmação e acompanhamento para reduzir atrito comercial.",
  },
  {
    icon: BrainCircuit,
    title: "Organização com Notion",
    description: "Sistemas internos para documentação, processos, tarefas e gestão operacional.",
  },
  {
    icon: Globe2,
    title: "Desenvolvimento de Sites",
    description: "Experiências digitais premium, rápidas e orientadas à autoridade da marca.",
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    description: "Páginas com narrativa, performance e conversão para ofertas e serviços.",
  },
  {
    icon: Layers3,
    title: "Sistemas Web",
    description: "Produtos digitais sob medida para automatizar e escalar operações.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative py-28 md:py-40" aria-labelledby="services-title">
      <div className="container-shell">
        <Reveal className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-xs font-black uppercase text-[#2F6BFF]">Serviços</p>
          <h2 id="services-title" className="text-balance text-4xl font-black leading-[0.98] md:text-6xl">
            Soluções inteligentes para empresas que precisam operar melhor.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/64 md:text-lg">
            Cada serviço foi desenhado para conectar canais, organizar processos e transformar
            tecnologia em eficiência mensurável.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} as="article" delay={index * 0.035}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.012 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className={`group h-full rounded-3xl border bg-[#0E1117]/80 p-6 backdrop-blur-xl transition duration-300 hover:border-[#2F6BFF]/30 hover:shadow-[0_0_30px_rgba(47,107,255,0.12)] ${
                    index === 0
                      ? "border-[#2F6BFF]/40 shadow-[0_0_40px_rgba(47,107,255,0.18)] xl:col-span-2"
                      : "border-white/[0.06]"
                  }`}
                >
                  <div className="relative z-10 flex h-full min-h-64 flex-col justify-between">
                    <div>
                      <div className="mb-8 grid size-12 place-items-center rounded-2xl border border-[#2F6BFF]/25 bg-[#2F6BFF]/10 text-[#2F6BFF] transition group-hover:scale-110">
                        <Icon className="size-5" />
                      </div>
                      <h3 className="text-xl font-black leading-tight text-white">{service.title}</h3>
                      <p className="mt-4 text-sm leading-6 text-white/62">{service.description}</p>
                    </div>
                    <div className="mt-8 h-px w-12 bg-[#2F6BFF]/60 transition-all group-hover:w-24" />
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
