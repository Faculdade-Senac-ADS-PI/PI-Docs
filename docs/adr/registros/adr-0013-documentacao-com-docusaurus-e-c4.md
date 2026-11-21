---
title: "ADR-0013: Documentação técnica com Docusaurus e modelo C4"
sidebar_label: "0013 — Documentação técnica com Docusaurus e modelo C4"
sidebar_position: 14
slug: /adr/registros/0013-documentacao-com-docusaurus-e-c4
status: accepted
date: 2026-11-21
decision-makers: Enzo de Oliveira Azevedo, Gabriel Caetano Chagas da Silva, Rafael da Silva Amoury, Devid Ribeiro de Sousa
---

| Status | Data | Responsáveis |
|---|---|---|
| **Aceita** | 21/11/2026 | Equipe ChamaServ |

## Contexto e problema

A documentação estava apenas em um documento acadêmico (Word/PDF), difícil de navegar e de manter junto com o código. A arquitetura não tinha visões em níveis de abstração.

## Fatores de decisão

* Documentação navegável e versionada
* Visões de arquitetura para públicos diferentes
* Manter o documento acadêmico em paralelo

## Opções consideradas

* Docusaurus + modelo C4 (PlantUML) + MADR
* Wiki do GitHub
* Apenas o documento Word/PDF

## Resultado da decisão

Opção escolhida: **"Docusaurus + modelo C4 (PlantUML) + MADR"**, porque transforma a documentação em um site navegável sem abandonar o documento acadêmico, que continua sendo entregue em Word/PDF.

### Consequências

* Bom, porque requisitos do site gerados a partir dos mesmos dados do documento Word
* Ruim, porque mudanças precisam ser refletidas nos dois formatos

### Confirmação

npm run build sem links quebrados (onBrokenLinks: throw).

## Prós e contras das opções

### Docusaurus + modelo C4 (PlantUML) + MADR

* Bom, porque site estático publicável no GitHub Pages
* Bom, porque diagramas C4 versionados como código
* Ruim, porque mais um projeto para manter

### Wiki do GitHub

* Bom, porque sem build
* Ruim, porque menos controle de layout e de versionamento

### Apenas o documento Word/PDF

* Bom, porque formato exigido pela faculdade
* Ruim, porque não é navegável nem versionável
