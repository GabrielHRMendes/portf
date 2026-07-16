import { Headphones, Lightbulb, PackageCheck, PenTool, Wrench } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  {
    icon: Headphones,
    title: "Contato",
    description: "Entendimento do cenário, canais, gargalos e prioridade de negócio.",
  },
  {
    icon: Lightbulb,
    title: "Planejamento",
    description: "Definição da solução, fluxo de dados, integrações e critérios de sucesso.",
  },
  {
    icon: PenTool,
    title: "Desenvolvimento",
    description: "Construção dos agentes, interfaces, automações e sistemas com refinamento visual.",
  },
  {
    icon: PackageCheck,
    title: "Entrega",
    description: "Validação, documentação e preparação para uso real da operação.",
  },
  {
    icon: Wrench,
    title: "Suporte",
    description: "Ajustes, evolução e novas camadas para expandir o ecossistema.",
  },
];

export function Process() {
  return (
    <section className="relative py-24 md:py-36" aria-labelledby="process-title">
      <div className="container-shell">
        <Reveal className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-xs font-black uppercase text-[#3B82F6]">Processo de trabalho</p>
          <h2 id="process-title" className="text-balance text-4xl font-black leading-[0.98] md:text-6xl">
            Uma timeline simples para uma entrega sofisticada.
          </h2>
        </Reveal>

        <div className="relative grid gap-5 lg:grid-cols-5">
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-[#3B82F6]/45 to-transparent lg:block" />
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} as="article" delay={index * 0.05}>
                <div className="premium-card relative h-full rounded-3xl p-6 transition duration-300 hover:-translate-y-2 hover:border-[#3B82F6]/45">
                  <div className="relative z-10">
                    <div className="mb-7 grid size-16 place-items-center rounded-full border border-[#3B82F6]/45 bg-[#14213D]/70 text-[#3B82F6] shadow-[0_0_34px_rgba(37,99,235,.22)]">
                      <Icon className="size-6" />
                    </div>
                    <span className="text-xs font-black uppercase text-white/40">0{index + 1}</span>
                    <h3 className="mt-2 text-2xl font-black text-white">{step.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-white/60">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
