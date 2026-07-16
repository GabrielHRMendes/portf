"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "./Reveal";

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

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative py-28 md:py-40" aria-labelledby="faq-title">
      <div className="container-shell mx-auto max-w-3xl">
        <Reveal className="mb-14 text-center">
          <p className="mb-4 text-xs font-black uppercase text-[#2F6BFF]">FAQ</p>
          <h2
            id="faq-title"
            className="text-balance text-4xl font-black leading-[0.98] md:text-6xl"
          >
            Perguntas frequentes
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/64 md:text-lg">
            Respostas diretas para as dúvidas mais comuns antes de iniciar um projeto.
          </p>
        </Reveal>

        <div className="grid gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={faq.question} delay={index * 0.035}>
                <div
                  className={`rounded-3xl border bg-[#0E1117]/80 backdrop-blur-xl transition duration-300 ${
                    isOpen
                      ? "border-[#2F6BFF]/30 shadow-[0_0_30px_rgba(47,107,255,0.12)]"
                      : "border-white/[0.06]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-black text-white md:text-lg">
                      {faq.question}
                    </span>
                    <span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/12 text-[#2F6BFF] transition hover:border-[#2F6BFF]/50">
                      {isOpen ? (
                        <Minus className="size-4" />
                      ) : (
                        <Plus className="size-4" />
                      )}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-sm leading-7 text-white/62 md:text-base">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
