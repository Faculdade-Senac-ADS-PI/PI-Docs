---
title: "ADR-0003: React, Vite, Tailwind CSS e shadcn/ui no front-end"
sidebar_label: "0003 — React, Vite, Tailwind CSS e shadcn/ui no front-end"
sidebar_position: 4
slug: /adr/registros/0003-react-vite-e-tailwind-no-frontend
status: accepted
date: 2026-09-14
decision-makers: Enzo de Oliveira Azevedo, Gabriel Caetano Chagas da Silva, Rafael da Silva Amoury, Devid Ribeiro de Sousa
---

| Status | Data | Responsáveis |
|---|---|---|
| **Aceita** | 14/09/2026 | Equipe ChamaServ |

## Contexto e problema

A interface precisa ser responsiva, acessível, com identidade visual própria e rápida de desenvolver a partir do protótipo feito no Figma/Lovable.

## Fatores de decisão

* Responsividade mobile-first (RNF03)
* Componentes acessíveis
* Velocidade de desenvolvimento
* Aproveitar o protótipo gerado

## Opções consideradas

* React 19 + Vite + Tailwind CSS + shadcn/ui (Radix)
* Vue + Vuetify
* HTML/CSS/JS puro

## Resultado da decisão

Opção escolhida: **"React 19 + Vite + Tailwind CSS + shadcn/ui (Radix)"**, porque combina produtividade, acessibilidade e liberdade visual.

### Consequências

* Bom, porque telas responsivas verificadas em 390 px de largura
* Bom, porque componentes reutilizáveis (WorkerCard, CategoryCard)
* Ruim, porque o projeto usa JavaScript (JSX), não TypeScript; a documentação antiga citava TypeScript por engano
* Ruim, porque sem testes automatizados no frontend até o momento

### Confirmação

package.json do PI-Frontend: react 19.2, vite 8.3, tailwindcss 3.4.

## Prós e contras das opções

### React 19 + Vite + Tailwind CSS + shadcn/ui (Radix)

* Bom, porque ecossistema amplo e conhecido pela equipe
* Bom, porque vite com build rápido
* Bom, porque componentes Radix acessíveis e personalizáveis
* Ruim, porque muitas dependências para manter atualizadas

### Vue + Vuetify

* Bom, porque curva de aprendizado suave
* Ruim, porque menor familiaridade da equipe

### HTML/CSS/JS puro

* Bom, porque sem dependências
* Ruim, porque baixa produtividade para uma SPA com rotas protegidas

## Mais informações

Ver C4 — Componentes do frontend.
