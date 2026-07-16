import Link from "next/link";

const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505]/78 py-10">
      <div className="container-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <Link href="#home" className="flex items-center gap-3" aria-label="Gabriel Mendes">
          <span className="grid size-10 place-items-center rounded-full border border-[#3B82F6]/50 bg-[#14213D]/70 text-xs font-black text-white">
            GM
          </span>
          <span>
            <span className="block font-black text-white">Gabriel Mendes</span>
            <span className="text-xs font-semibold text-white/48">IA, automações e sistemas</span>
          </span>
        </Link>

        <nav className="flex flex-wrap gap-4 text-sm font-semibold text-white/48" aria-label="Rodapé">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <p className="max-w-sm text-sm leading-6 text-white/44 md:text-right">
          Marca pessoal premium preparada para evoluir em ecossistema de produtos, serviços e
          automações.
        </p>
      </div>
    </footer>
  );
}
