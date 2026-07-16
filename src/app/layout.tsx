import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Gabriel Mendes | Sites, Landing Pages e Sistemas Web",
  description:
    "Especialista em criação de Sites, Landing Pages e Sistemas Web premium. Fazemos empresas parecerem maiores, gerarem autoridade e converterem mais clientes.",
  applicationName: "Gabriel Mendes",
  authors: [{ name: "Gabriel Mendes" }],
  keywords: [
    "criação de sites",
    "landing pages",
    "sistemas web",
    "sites institucionais",
    "desenvolvimento web",
    "sites premium",
    "designer de sites",
    "sites para empresas",
  ],
  openGraph: {
    title: "Gabriel Mendes | Sites, Landing Pages e Sistemas Web",
    description:
      "Criamos sites que fazem empresas parecerem maiores do que realmente são. Design premium, alta conversão e autoridade digital.",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#06070B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Gabriel Mendes",
    description:
      "Serviços premium de IA, automações, agentes, sistemas personalizados, sites e landing pages.",
    areaServed: "Brasil",
    serviceType: [
      "Agentes de IA para WhatsApp",
      "Agentes de IA para Instagram",
      "Bots automáticos para Telegram",
      "Automações com N8N",
      "Integrações via API",
      "Sistemas de Agendamento",
      "Organização empresarial com Notion",
      "Desenvolvimento de Sites",
      "Landing Pages",
      "Sistemas Web",
    ],
  };

  return (
    <html lang="pt-BR" className={geist.variable}>
      <body className={`${geist.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {children}
      </body>
    </html>
  );
}
