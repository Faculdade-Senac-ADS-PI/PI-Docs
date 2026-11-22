---
title: "ADR-0006: UUID como chave primária de usuários e serviços"
sidebar_label: "0006 — UUID como chave primária de usuários e serviços"
sidebar_position: 7
slug: /adr/registros/0006-uuid-como-chave-primaria
status: accepted
date: 2026-09-14
decision-makers: Enzo de Oliveira Azevedo, Gabriel Caetano Chagas da Silva, Rafael da Silva Amoury, Devid Ribeiro de Sousa
---

| Status | Data | Responsáveis |
|---|---|---|
| **Aceita** | 14/09/2026 | Equipe ChamaServ |

## Contexto e problema

Os identificadores de usuários e serviços aparecem em URLs públicas da API (por exemplo, /servicos/&#123;id&#125;/). IDs sequenciais revelam a quantidade de registros e facilitam enumeração.

## Fatores de decisão

* Privacidade e segurança (RNF02, OWASP)
* Evitar enumeração de recursos
* Facilitar futura integração entre bases

## Opções consideradas

* UUID v4 para Usuario e Servico; inteiro para Categoria
* Inteiros autoincrementais em tudo

## Resultado da decisão

Opção escolhida: **"UUID v4 para Usuario e Servico; inteiro para Categoria"**, porque protege recursos expostos em URLs sem complicar as categorias.

### Consequências

* Bom, porque o modelo expandido segue o mesmo padrão nas novas entidades
* Ruim, porque desempenho de índice um pouco menor, irrelevante no volume atual (consultas com p95 de até 10,3 ms)

### Confirmação

models.UUIDField(primary_key=True, default=uuid.uuid4) em Usuario e Servico.

## Prós e contras das opções

### UUID v4 para Usuario e Servico; inteiro para Categoria

* Bom, porque iDs imprevisíveis nas URLs
* Bom, porque categoria, que é pública e pequena, mantém ID simples
* Ruim, porque índices maiores que inteiros
* Ruim, porque uRLs mais longas

### Inteiros autoincrementais em tudo

* Bom, porque simples e compacto
* Ruim, porque permite enumerar usuários e serviços
