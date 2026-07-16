import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Gabriel Mendes | IA, Automações e Sistemas",
  description:
    "Soluções premium com inteligência artificial, automações, agentes, sistemas personalizados e landing pages para empresas.",
  applicationName: "Gabriel Mendes",
  authors: [{ name: "Gabriel Mendes" }],
  keywords: [
    "IA",
    "automação",
    "agentes de IA",
    "WhatsApp",
    "Telegram",
    "Notion",
    "landing pages",
    "sistemas web",
  ],
  openGraph: {
    title: "Gabriel Mendes | IA, Automações e Sistemas",
    description:
      "Transforme processos em automações inteligentes com estética premium e tecnologia aplicada.",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#050505",
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
