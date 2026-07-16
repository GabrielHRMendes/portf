import { Reveal } from "./Reveal";

const technologies = [
  "OpenAI",
  "N8N",
  "WhatsApp API",
  "Instagram Graph",
  "Telegram API",
  "Notion",
  "React",
  "Next.js",
  "TypeScript",
  "Docker",
  "PostgreSQL",
  "Supabase",
  "Vercel",
];

export function Technologies() {
  return (
    <section className="relative py-20 md:py-28" aria-labelledby="tech-title">
      <div className="container-shell">
        <Reveal className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-4 text-xs font-black uppercase text-[#3B82F6]">Tecnologias</p>
          <h2 id="tech-title" className="text-balance text-4xl font-black leading-[0.98] md:text-6xl">
            Stack moderna para construir agora e evoluir depois.
          </h2>
        </Reveal>

        <Reveal>
          <div className="premium-card rounded-[2rem] p-4 md:p-6">
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/[.035] px-5 py-3 text-sm font-bold text-white/68 transition duration-300 hover:-translate-y-1 hover:border-[#3B82F6]/50 hover:text-white hover:shadow-[0_0_28px_rgba(37,99,235,.22)]"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
