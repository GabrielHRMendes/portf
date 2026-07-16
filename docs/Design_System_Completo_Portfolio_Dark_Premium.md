# Design System Completo – Portfólio Dark Premium Neon

Documentação completa de engenharia reversa para recriação e adaptação do estilo.

## 1. Visão Estratégica


Este design segue a linha Dark Premium utilizada por empresas de tecnologia, IA e agências de alto ticket.
Objetivos:
• Gerar percepção de valor.
• Transmitir autoridade.
• Dar foco aos CTAs.
• Criar sensação de exclusividade.


---

## 2. Personalidade da Marca


Arquétipos predominantes:
• Sábio (tecnologia, conhecimento)
• Criador (design e inovação)
• Governante (autoridade)

Palavras-chave:
Tecnologia • Sofisticação • Futurismo • Confiança • Premium


---

## 3. Paleta de Cores


--background: #050505
--background-soft: #0A0A0A
--card: #101010
--primary: #C6FF00
--secondary: #00E5FF
--text: #FFFFFF
--text-secondary: #A1A1AA
--border: #222222


---

## 4. Tipografia


Fonte principal: Inter ou Poppins
Fonte de destaque: Cormorant Garamond (itálica)

Escala:
Hero: 72px
Título: 56px
Subtítulo: 20px
Texto: 16px
Legenda: 13px


---

## 5. Sistema de Espaçamento


Escala base:
8 • 16 • 24 • 32 • 40 • 48 • 64 • 80 • 120 • 160

Container:
max-width: 1280px
padding: 0 40px


---

## 6. Grid System


Desktop: repeat(3,1fr)
Tablet: repeat(2,1fr)
Mobile: 1fr
Gap: 40px


---

## 7. Sistema de Componentes


Botão Primário
- Fundo verde neon
- Border-radius 999px
- Hover: translateY(-3px)

Botão Secundário
- Transparente
- Borda sutil

Cards
- Radius 24px
- Sombra suave
- Elevação no hover


---

## 8. Design Tokens


:root {
 --background:#050505;
 --card:#101010;
 --primary:#C6FF00;
 --secondary:#00E5FF;
 --text:#FFFFFF;
 --radius-lg:24px;
 --container:1280px;
}


---

## 9. Sistema de Animações


Duração padrão: 300ms
Curva: cubic-bezier(.4,0,.2,1)

Animações:
• Fade-up
• Scale
• Hover lift
• Glow suave


---

## 10. Sistema de Layout


Header
Hero
Logos de clientes
Serviços
Projetos
Vídeos de automação
Depoimentos
FAQ
CTA Final
Footer


---

## 11. Wireframe Recomendado


[ HERO ]
[ PROVA SOCIAL ]
[ SERVIÇOS ]
[ PORTFÓLIO ]
[ ESTUDOS DE CASO ]
[ DEPOIMENTOS ]
[ FAQ ]
[ CTA ]
[ FOOTER ]


---

## 12. Arquitetura Next.js


src/
components/
 ├── Header
 ├── Hero
 ├── Services
 ├── PortfolioGrid
 ├── Testimonials
 ├── CTA
 └── Footer

app/
 ├── page.tsx
 ├── layout.tsx
 └── globals.css


---

## 13. Estrutura de Pastas


styles/
├── variables.css
├── typography.css
├── buttons.css
├── cards.css
├── sections.css
└── animations.css


---

## 14. Biblioteca de Componentes


Button
Card
SectionTitle
ProjectCard
TestimonialCard
Navbar
Footer
Badge
Tag
Accordion
Modal
VideoCard


---

## 15. Sistema para Portfólio de IA


Cor principal: Verde Neon
Cor secundária: Azul Ciano

Sessões extras:
• Demonstração de automações
• Integrações
• Casos de uso
• Vídeos de bots
• Resultados e métricas


---

## 16. Guia de UX


Princípios:
• Muito espaço negativo.
• Poucas cores.
• Textos curtos.
• Imagens grandes.
• CTAs evidentes.
• Navegação simples.


---

## 17. Guia de Conversão


CTA acima da dobra.
Provas sociais.
Projetos com botão 'Quero um parecido'.
Depoimentos.
Estudo de caso.
Chamada final com WhatsApp.


---

## 18. Guia de Responsividade


Desktop: 1280px
Laptop: 1024px
Tablet: 768px
Mobile: 480px


---

## 19. Checklist de Implementação


□ Criar design tokens
□ Configurar fontes
□ Implementar grid
□ Criar componentes
□ Adicionar animações
□ Otimizar imagens
□ Configurar SEO
□ Implementar schema.org
□ Adicionar analytics


---

## 20. Fórmula do Design


Minimalismo
+ Tipografia Forte
+ Espaço Negativo
+ Poucas Cores
+ Cards Grandes
+ Prova Social
+ CTAs Visíveis
= Percepção de Alto Valor


---


## Roadmap de Implementação

Semana 1:
- Identidade visual
- Design tokens
- Estrutura base

Semana 2:
- Componentes
- Responsividade
- Animações

Semana 3:
- Conteúdo
- SEO
- Otimização

Semana 4:
- Testes
- Conversão
- Deploy
