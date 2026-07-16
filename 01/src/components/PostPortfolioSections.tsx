"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Bot,
  BriefcaseBusiness,
  CalendarCheck,
  Check,
  ChevronDown,
  ClipboardList,
  Code2,
  FileText,
  Handshake,
  MessageCircle,
  Rocket,
  Search,
  Settings2,
  Sparkles,
} from "lucide-react";
import heroImage from "../../public/images/hero-automation-lab.png";
import { ButtonLink } from "./ButtonLink";
import { Reveal } from "./Reveal";

const serviceCards = [
  {
    icon: FileText,
    title: "Landing Pages",
    description:
      "Landing pages desenvolvidas para alta conversão, velocidade e campanhas de marketing.",
    items: ["Captura de Leads", "Produtos Digitais", "Lançamentos", "Eventos", "Campanhas"],
    button: "Quero uma Landing Page",
  },
  {
    icon: BriefcaseBusiness,
    title: "Sites Institucionais",
    description:
      "Sites modernos para empresas que desejam transmitir autoridade e gerar novos clientes.",
    items: ["Empresas", "Profissionais", "Escritórios", "Clínicas", "Portfólios"],
    button: "Quero um Site",
  },
  {
    icon: Bot,
    title: "Outras Soluções",
    description: "Desenvolvimento de soluções inteligentes utilizando IA, automações e integrações.",
    items: [
      "Agente IA para WhatsApp",
      "Agente IA para Instagram",
      "Bots para Telegram",
      "Sistemas no Notion",
      "Sistemas personalizados",
      "Webhooks",
      "Integrações",
      "Agendamentos",
    ],
    button: "Quero Automatizar",
  },
];

const timeline = [
  { icon: Search, title: "Entendemos seu negócio" },
  { icon: ClipboardList, title: "Planejamos a solução" },
  { icon: Code2, title: "Desenvolvemos" },
  { icon: Rocket, title: "Implantamos" },
  { icon: CalendarCheck, title: "Acompanhamos os resultados" },
];

const faqs = [
  {
    question: "Quanto custa um projeto?",
    answer:
      "Depende do escopo, integrações e nível de automação necessário. A proposta é montada após entender objetivos, prazos e complexidade.",
  },
  {
    question: "Quanto tempo demora?",
    answer:
      "Projetos menores podem ser entregues em poucos dias. Soluções com IA, APIs e sistemas personalizados exigem planejamento e cronograma próprio.",
  },
  {
    question: "Vocês fazem manutenção?",
    answer:
      "Sim. É possível manter evolução, suporte, ajustes, melhorias de performance e novas integrações após a entrega.",
  },
  {
    question: "Posso integrar com WhatsApp?",
    answer:
      "Sim. O projeto pode ser planejado para fluxos de atendimento, qualificação, orçamento e automações conectadas ao WhatsApp.",
  },
  {
    question: "Os agentes utilizam ChatGPT?",
    answer:
      "Sim, quando faz sentido para o caso. Os agentes podem utilizar modelos da OpenAI combinados com regras, contexto e integrações do seu negócio.",
  },
  {
    question: "É possível integrar com meu sistema?",
    answer:
      "Sim. Quando o sistema possui API, webhook, banco ou outra forma de conexão, é possível criar integrações sob medida.",
  },
];

function AutomationBanner() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-42, 42]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.14]);

  return (
    <section ref={ref} className="relative py-28 md:py-40" aria-labelledby="automation-title">
      <div className="container-shell">
        <Reveal>
          <div className="animated-border blue-glow relative min-h-[520px] overflow-hidden rounded-[2rem] md:min-h-[600px]">
            <motion.div style={{ y, scale }} className="absolute inset-[-8%]">
              <Image
                src={heroImage}
                alt=""
                aria-hidden="true"
                fill
                sizes="100vw"
                className="object-cover object-center opacity-72"
              />
            </motion.div>
            <div className="absolute inset-0 bg-[#050505]/76" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(59,130,246,.24),transparent_36rem),linear-gradient(90deg,#050505_0%,rgba(5,5,5,.72)_48%,#050505_100%)]" />

            <div className="relative z-10 flex min-h-[520px] items-center px-6 py-16 md:min-h-[600px] md:px-14 lg:px-20">
              <div className="max-w-4xl">
                <p className="mb-5 inline-flex rounded-full border border-[#3B82F6]/40 bg-[#14213D]/40 px-4 py-2 text-xs font-black uppercase text-[#3B82F6]">
                  Operação inteligente
                </p>
                <h2
                  id="automation-title"
                  className="text-balance text-4xl font-black leading-[0.96] text-white md:text-7xl"
                >
                  Por que a sua empresa precisa de um{" "}
                  <span className="accent-word">site ou sistema profissional?</span>
                </h2>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">
                  Para passar credibilidade on-line é preciso estar presente em todas as redes sociais e também ter um território próprio: o seu site, com sua personalidade. Além disso, sistemas e automações inteligentes podem gerar economia de tempo, dinheiro e recursos, além de aumentar a produtividade da sua equipe.
                </p>
                <div className="mt-9">
                  <ButtonLink href="#orcamento-final">Quero automatizar meu negócio</ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative py-24 md:py-32" aria-labelledby="faq-title">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <Reveal>
          <p className="mb-4 text-xs font-black uppercase text-[#3B82F6]">Perguntas Frequentes</p>
          <h2 id="faq-title" className="text-balance text-4xl font-black leading-[0.98] md:text-6xl">
            Respostas diretas antes de começar.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/62">
            Projetos premium precisam de clareza. Estas são as dúvidas mais comuns antes de
            iniciar uma landing, site, automação ou agente de IA.
          </p>
        </Reveal>

        <div className="grid gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={faq.question} delay={index * 0.035}>
                <div className="premium-card rounded-3xl">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="relative z-10 flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-black text-white md:text-lg">{faq.question}</span>
                    <span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/12 text-[#3B82F6] transition group-hover:border-[#3B82F6]/50">
                      <ChevronDown
                        className={`size-4 transition duration-300 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-10 overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-sm leading-7 text-white/62 md:text-base">
                      {faq.answer}
                    </p>
                  </motion.div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section id="orcamento-final" className="relative py-24 md:py-36" aria-labelledby="final-cta-title">
      <div className="container-shell">
        <Reveal>
          <div className="animated-border blue-glow relative overflow-hidden rounded-[2rem] px-6 py-20 text-center md:px-12 md:py-28">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,.28),transparent_38rem),linear-gradient(180deg,#121214,#050505)]" />
            <div className="absolute inset-0 opacity-60" aria-hidden="true">
              {Array.from({ length: 22 }).map((_, index) => (
                <motion.span
                  key={index}
                  className="absolute size-1 rounded-full bg-[#3B82F6]/55"
                  style={{
                    left: `${(index * 37) % 100}%`,
                    top: `${(index * 19) % 100}%`,
                  }}
                  animate={{ opacity: [0.16, 0.72, 0.16], scale: [1, 1.8, 1] }}
                  transition={{
                    duration: 3.4 + (index % 5) * 0.35,
                    repeat: Infinity,
                    delay: index * 0.12,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 mx-auto max-w-4xl">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[.04] px-4 py-2 text-xs font-black uppercase text-[#3B82F6]">
                <Sparkles className="size-4" />
                CTA Final
              </p>
              <h2 id="final-cta-title" className="text-balance text-4xl font-black leading-[0.94] md:text-7xl">
                Vamos construir a próxima solução da sua empresa?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/66 md:text-lg">
                Sites, IA, automações e sistemas personalizados desenvolvidos para gerar resultado.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <ButtonLink href="#contato" className="w-full sm:w-auto">
                  Solicitar orçamento
                </ButtonLink>
                <ButtonLink href="#contato" variant="secondary" className="w-full sm:w-auto">
                  Conversar no WhatsApp
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function PostPortfolioSections() {
  return (
    <div data-post-portfolio>
      <section className="relative py-24 md:py-36" aria-labelledby="new-services-title">
        <div className="container-shell">
          <Reveal className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-xs font-black uppercase text-[#3B82F6]">Serviços</p>
            <h2 id="new-services-title" className="text-balance text-4xl font-black leading-[0.98] md:text-6xl">
              Serviços que <span className="accent-word">transformam</span> empresas
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/64 md:text-lg">
              Mais do que desenvolver sites, crio soluções completas utilizando Inteligência
              Artificial, automações e sistemas personalizados.
            </p>
          </Reveal>

          <div className="grid items-stretch gap-6 lg:grid-cols-3">
            {serviceCards.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} as="article" delay={index * 0.06}>
                  <motion.div
                    whileHover={{ y: -10, scale: 1.012 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    data-new-service-card
                    className="premium-card group flex h-full min-h-[650px] flex-col rounded-3xl p-7 transition duration-300 hover:border-[#3B82F6]/45 lg:min-h-[620px]"
                  >
                    <div className="relative z-10 flex h-full flex-col">
                      <div className="mb-8 grid size-14 place-items-center rounded-2xl border border-[#3B82F6]/35 bg-[#14213D]/60 text-[#3B82F6] transition group-hover:scale-110">
                        <Icon className="size-6" />
                      </div>
                      <h3 className="text-3xl font-black leading-none text-white">{service.title}</h3>
                      <p className="mt-5 text-sm leading-7 text-white/62">{service.description}</p>
                      <ul className="mt-8 grid gap-3 text-sm font-semibold text-white/70">
                        {service.items.map((item) => (
                          <li key={item} className="flex items-center gap-3">
                            <span className="grid size-5 shrink-0 place-items-center rounded-full bg-[#2563EB]/18 text-[#3B82F6]">
                              <Check className="size-3.5" />
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto pt-9">
                        <ButtonLink href="#orcamento-final" className="w-full">
                          {service.button}
                        </ButtonLink>
                      </div>
                    </div>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <AutomationBanner />

      <section className="relative py-24 md:py-32" aria-labelledby="new-process-title">
        <div className="container-shell">
          <Reveal className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-4 text-xs font-black uppercase text-[#3B82F6]">Como funciona</p>
            <h2 id="new-process-title" className="text-balance text-4xl font-black leading-[0.98] md:text-6xl">
              Um processo claro do diagnóstico ao resultado.
            </h2>
          </Reveal>

          <div className="relative grid gap-5 lg:grid-cols-5">
            <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-[#3B82F6]/50 to-transparent lg:block" />
            {timeline.map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.title} as="article" delay={index * 0.05}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="premium-card group relative h-full rounded-3xl p-6 text-center hover:border-[#3B82F6]/45"
                  >
                    <div className="relative z-10">
                      <div className="mx-auto mb-6 grid size-16 place-items-center rounded-full border border-white/12 bg-white/[.03] text-white/70 transition group-hover:border-[#3B82F6]/60 group-hover:bg-[#14213D]/70 group-hover:text-[#3B82F6] group-hover:shadow-[0_0_34px_rgba(37,99,235,.28)]">
                        <Icon className="size-6" />
                      </div>
                      <p className="text-xs font-black uppercase text-[#3B82F6]">Passo {index + 1}</p>
                      <h3 className="mt-3 text-xl font-black leading-tight text-white">{step.title}</h3>
                      {index < timeline.length - 1 && (
                        <span className="mt-6 block text-xl font-black text-[#3B82F6] lg:hidden">↓</span>
                      )}
                    </div>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <FAQAccordion />
      <FinalCTASection />
    </div>
  );
}
