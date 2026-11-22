---
title: "ADR-0000: Usar MADR para registrar decisões de arquitetura"
sidebar_label: "0000 — Usar MADR para registrar decisões de arquitetura"
sidebar_position: 1
slug: /adr/registros/0000-usar-madr-para-registrar-decisoes
status: accepted
date: 2026-11-21
decision-makers: Enzo de Oliveira Azevedo, Gabriel Caetano Chagas da Silva, Rafael da Silva Amoury, Devid Ribeiro de Sousa
---

| Status | Data | Responsáveis |
|---|---|---|
| **Aceita** | 21/11/2026 | Equipe ChamaServ |

## Contexto e problema

As decisões técnicas do ChamaServ estavam espalhadas entre conversas da equipe, READMEs e a documentação acadêmica, o que gerou inconsistências (por exemplo, a documentação citava MySQL e TypeScript, que não são usados). É preciso um registro único, versionado junto com a documentação, explicando por que cada escolha foi feita.

## Fatores de decisão

* Rastreabilidade entre decisão, código e documentação
* Formato simples, em Markdown, que qualquer integrante consiga editar
* Compatibilidade com o Docusaurus

## Opções consideradas

* MADR (Markdown Architectural Decision Records)
* ADR no formato de Michael Nygard
* Registrar apenas no documento acadêmico

## Resultado da decisão

Opção escolhida: **"MADR (Markdown Architectural Decision Records)"**, porque é o formato mais completo entre os leves, registra as alternativas descartadas e funciona diretamente no Docusaurus.

### Consequências

* Bom, porque cada escolha técnica passa a ter justificativa consultável
* Bom, porque decisões antigas podem ser marcadas como obsoletas ou substituídas sem perder o histórico
* Ruim, porque decisões anteriores a 21/11/2026 foram registradas retroativamente, com base no código e no histórico do Git

### Confirmação

Toda mudança de stack, de contrato da API ou de modelo de dados deve vir acompanhada de um novo arquivo em docs/adr/registros.

## Prós e contras das opções

### MADR (Markdown Architectural Decision Records)

* Bom, porque modelo padronizado com contexto, opções, decisão e consequências
* Bom, porque arquivos Markdown versionados no Git e publicados pelo Docusaurus
* Ruim, porque exige disciplina para registrar cada nova decisão

### ADR no formato de Michael Nygard

* Bom, porque muito curto
* Ruim, porque não registra as opções consideradas nem os prós e contras

### Registrar apenas no documento acadêmico

* Bom, porque nenhum artefato novo
* Ruim, porque difícil de manter sincronizado com o código
* Ruim, porque não mostra a evolução das decisões

## Mais informações

Modelo: https://adr.github.io/madr/ (MADR 4.0). Numeração sequencial de quatro dígitos; o modelo vazio está em docs/adr/template.md.
