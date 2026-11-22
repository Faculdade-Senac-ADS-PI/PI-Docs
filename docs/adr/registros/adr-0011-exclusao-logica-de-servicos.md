---
title: "ADR-0011: Exclusão lógica de serviços (campo ativo)"
sidebar_label: "0011 — Exclusão lógica de serviços (campo ativo)"
sidebar_position: 12
slug: /adr/registros/0011-exclusao-logica-de-servicos
status: accepted
date: 2026-09-14
decision-makers: Enzo de Oliveira Azevedo, Gabriel Caetano Chagas da Silva, Rafael da Silva Amoury, Devid Ribeiro de Sousa
---

| Status | Data | Responsáveis |
|---|---|---|
| **Aceita** | 14/09/2026 | Equipe ChamaServ |

## Contexto e problema

Prestadores precisam pausar ou retirar anúncios sem perder o histórico, e futuras solicitações e avaliações precisarão referenciar serviços antigos.

## Fatores de decisão

* Preservar histórico e integridade referencial
* Permitir reativar anúncios
* Ocultar da busca pública (RN14)

## Opções consideradas

* Campo booleano ativo; listagem pública só com ativo = true; dono vê todos com meus=true
* Exclusão física (DELETE)

## Resultado da decisão

Opção escolhida: **"Campo booleano ativo; listagem pública só com ativo = true; dono vê todos com meus=true"**, porque atende a busca pública e preserva o histórico.

### Consequências

* Bom, porque testado em CT03 (inativos ocultos) e CT16 (meus=true)
* Ruim, porque o DELETE da API ainda remove o registro fisicamente; a exclusão lógica é feita pela edição do campo ativo

### Confirmação

ServicoViewSet.get_queryset filtra ativo=True; testes test_ct03_listagem_exibe_somente_ativos e test_meus_servicos_inclui_inativos.

## Prós e contras das opções

### Campo booleano ativo; listagem pública só com ativo = true; dono vê todos com meus=true

* Bom, porque reativação simples
* Bom, porque histórico preservado
* Ruim, porque registros inativos continuam ocupando espaço

### Exclusão física (DELETE)

* Bom, porque base mais enxuta
* Ruim, porque perde histórico e quebra referências futuras
