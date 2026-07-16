
# Engenharia Reversa – Design System de Portfólio Dark Premium Neon

## Visão Geral
Estilo visual inspirado em portfólios premium de agências e tecnologia.

**Características**
- Dark Premium
- Minimalista
- Tecnológico
- Sofisticado
- Foco em conversão

---

# Identidade Visual

## Sensações transmitidas
- Autoridade
- Exclusividade
- Tecnologia
- Confiança
- Alto valor percebido

---

# Sistema de Cores

```css
--background: #050505;
--background-soft: #0A0A0A;
--card: #101010;

--primary: #C6FF00;
--primary-hover: #D8FF4A;
--secondary: #00E5FF;

--text: #FFFFFF;
--text-secondary: #A1A1AA;
--border: #222222;
```

---

# Tipografia

## Fonte principal
- Inter
- Poppins

## Fonte de destaque
- Cormorant Garamond (itálica)
- Playfair Display (itálica)

## Escala

| Elemento | Tamanho |
|-----------|----------|
| Hero | 72px |
| Título | 56px |
| Subtítulo | 20px |
| Texto | 16px |
| Legenda | 13px |

---

# Sistema de Espaçamento

Base:

```css
8px
```

Escala:

```txt
8
16
24
32
40
48
64
80
120
160
```

Container:

```css
max-width:1280px;
padding:0 40px;
margin:auto;
```

---

# Grid System

Desktop:

```css
grid-template-columns:repeat(3,1fr);
```

Tablet:

```css
repeat(2,1fr)
```

Mobile:

```css
1fr
```

Gap:

```css
40px
```

---

# Sistema de Bordas

```css
--radius-sm:12px;
--radius-md:16px;
--radius-lg:24px;
--radius-pill:999px;
```

---

# Sistema de Sombras

```css
box-shadow:0 20px 60px rgba(0,0,0,.35);
```

Glow:

```css
box-shadow:0 0 30px rgba(198,255,0,.2);
```

---

# Sistema de Botões

## Primário

```css
background:#C6FF00;
color:#000;
padding:16px 32px;
border-radius:999px;
font-weight:600;
```

## Secundário

```css
background:transparent;
border:1px solid #2b2b2b;
color:#fff;
```

---

# Estrutura HTML Recomendada

```html
<header />
<section class="hero" />
<section class="services" />
<section class="portfolio" />
<section class="testimonials" />
<section class="faq" />
<section class="cta" />
<footer />
```

---

# Estrutura React / Next.js

```txt
src/
components/
├── Header
├── Hero
├── Services
├── PortfolioGrid
├── ProjectCard
├── Testimonials
├── CTA
└── Footer
```

---

# Design Tokens

```css
:root{
 --background:#050505;
 --background-soft:#0A0A0A;
 --card:#101010;
 --primary:#C6FF00;
 --secondary:#00E5FF;
 --text:#FFFFFF;
 --text-secondary:#A1A1AA;
 --border:#222222;
 --radius-sm:12px;
 --radius-md:16px;
 --radius-lg:24px;
 --radius-pill:999px;
 --container:1280px;
}
```

---

# Fórmula do Design

```txt
Minimalismo
+ Tipografia Forte
+ Muito Espaço
+ Poucas Cores
+ Cards Grandes
+ CTAs Visíveis
= Percepção de Alto Valor
```

---

# Adaptação Recomendada para Portfólio de IA

- Verde Neon: CTAs e automações.
- Azul Ciano: IA e tecnologia.
- Fundo escuro premium.
- Vídeos demonstrando automações.
- Depoimentos e estudos de caso.

