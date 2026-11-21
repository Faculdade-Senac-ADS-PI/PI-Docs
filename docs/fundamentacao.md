---
title: 2. Fundamentação teórica
sidebar_label: 2. Fundamentação teórica
---

## 2.1 Aplicação web e arquitetura SPA

O desenvolvimento web moderno, baseado em arquiteturas SPA (*Single Page Application*) e APIs REST, permite criar aplicações rápidas, responsivas e acessíveis. Na SPA, o navegador carrega a aplicação uma única vez e passa a trocar apenas dados (JSON) com o servidor, o que reduz o tempo de navegação e separa a interface das regras de negócio (PRESSMAN; MAXIM, 2021).

## 2.2 Aplicação mobile e responsividade

Para tornar o projeto acessível a quem não possui computador, a abordagem *mobile-first* e responsiva permite o uso cotidiano pelo smartphone, unindo a experiência web e mobile em uma mesma aplicação (ver [telas do protótipo](./prototipo.md)).

## 2.3 Serviço de atendimento personalizado

Para auxiliar usuários que não dominam ferramentas digitais, a plataforma prevê canais de suporte e orientações claras para dúvidas de cadastro, publicação de serviços e navegação, atendendo prestadores e contratantes.

## 2.4 APIs REST e autenticação JWT

O estilo REST organiza o sistema em recursos acessados por métodos HTTP padronizados e sem estado de sessão no servidor (FIELDING, 2000). A autenticação *stateless* usa JSON Web Tokens (JWT), tokens assinados que carregam a identidade do usuário e têm prazo de validade (JONES; BRADLEY; SAKIMURA, 2015). A documentação OpenAPI (Swagger/ReDoc) descreve todos os endpoints e prepara o sistema para implantação em nuvem.

## 2.5 Usabilidade e escala SUS

A *System Usability Scale* (SUS) é um questionário de dez itens em escala Likert que gera uma pontuação de 0 a 100 (BROOKE, 1996). Pontuações acima de 68 são consideradas acima da média, e a escala adjetiva de Bangor, Kortum e Miller (2009) associa faixas de pontuação a conceitos como “bom” e “excelente”.

## 2.6 Documentação de arquitetura: C4 e MADR

- **Modelo C4** — descreve a arquitetura em quatro níveis de zoom: Contexto, Contêineres, Componentes e Código (BROWN, 2018). Ver [Arquitetura (C4)](/arquitetura).
- **MADR** (*Markdown Architectural Decision Records*) — formato em Markdown para registrar cada decisão de arquitetura com contexto, opções consideradas, decisão e consequências (MADR, 2024). Ver [Decisões (ADR)](/adr).
