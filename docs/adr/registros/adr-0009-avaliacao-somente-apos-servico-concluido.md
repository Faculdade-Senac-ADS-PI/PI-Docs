---
title: "ADR-0009: Avaliação somente após serviço concluído e registrado"
sidebar_label: "0009 — Avaliação somente após serviço concluído e registrado"
sidebar_position: 10
slug: /adr/registros/0009-avaliacao-somente-apos-servico-concluido
status: accepted
date: 2026-11-21
decision-makers: Enzo de Oliveira Azevedo, Gabriel Caetano Chagas da Silva, Rafael da Silva Amoury, Devid Ribeiro de Sousa
---

| Status | Data | Responsáveis |
|---|---|---|
| **Aceita** | 21/11/2026 | Equipe ChamaServ |

## Contexto e problema

Plataformas similares sofrem com avaliações falsas ou sem vínculo com um serviço real. A reputação é o principal diferencial proposto pelo ChamaServ.

## Fatores de decisão

* Confiabilidade da reputação
* Moderação transparente
* Diferencial frente ao benchmarking

## Opções consideradas

* Avaliação vinculada a uma Solicitacao concluída (uma por serviço)
* Avaliação livre no perfil do prestador

## Resultado da decisão

Opção escolhida: **"Avaliação vinculada a uma Solicitacao concluída (uma por serviço)"**, porque garante que a reputação reflita serviços realmente prestados.

### Consequências

* Bom, porque regras RN28 a RN35; Avaliacao.solicitacao_id UNIQUE no DER expandido
* Ruim, porque prestadores novos ficam sem nota até concluírem serviços (tratado pela RN16: “novo”, sem nota zero)

### Confirmação

Casos de teste CT06 e CT07, a executar quando o fluxo for implementado.

## Prós e contras das opções

### Avaliação vinculada a uma Solicitacao concluída (uma por serviço)

* Bom, porque só quem contratou avalia
* Bom, porque média calculada apenas com avaliações válidas
* Ruim, porque depende do fluxo de contratação, ainda não implementado

### Avaliação livre no perfil do prestador

* Bom, porque simples de implementar
* Ruim, porque permite avaliações falsas e ataques de reputação

## Mais informações

Registro retroativo: decisão tomada no levantamento de requisitos e registrada em 21/11/2026.
