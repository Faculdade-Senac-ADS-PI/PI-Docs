---
title: "ADR-0012: Acesso do visitante à listagem de serviços"
sidebar_label: "0012 — Acesso do visitante à listagem de serviços"
sidebar_position: 13
slug: /adr/registros/0012-leitura-de-servicos-exige-autenticacao
status: proposed
date: 2026-11-21
decision-makers: Enzo de Oliveira Azevedo, Gabriel Caetano Chagas da Silva, Rafael da Silva Amoury, Devid Ribeiro de Sousa
---

| Status | Data | Responsáveis |
|---|---|---|
| **Proposta** | 21/11/2026 | Equipe ChamaServ |

## Contexto e problema

Hoje GET /api/v1/servicos/ exige JWT (IsAuthenticated), mas o README do backend descreve a listagem como pública e a interface permite buscar sem login. Para atrair contratantes, faz sentido o visitante ver os serviços antes de se cadastrar.

## Fatores de decisão

* Experiência do visitante (conversão em cadastro)
* Privacidade dos prestadores (RN40)
* Consistência entre README, API e interface

## Opções consideradas

* Leitura pública (AllowAny para GET), escrita autenticada
* Manter leitura apenas para autenticados

## Resultado da decisão

Opção escolhida: **"Leitura pública (AllowAny para GET), escrita autenticada"**, porque favorece a conversão de visitantes sem expor dados sensíveis, desde que o serializer público mostre só nome, foto e localização.

### Consequências

* Bom, porque uC04 passa a valer para o visitante
* Ruim, porque o teste test_listar_servicos_sem_token_retorna_401 precisará ser ajustado

### Confirmação

Proposta: depende de aprovação da equipe.

## Prós e contras das opções

### Leitura pública (AllowAny para GET), escrita autenticada

* Bom, porque visitante pode buscar antes de se cadastrar
* Bom, porque alinha com o README e com a interface
* Ruim, porque exige revisar quais campos do autor ficam públicos

### Manter leitura apenas para autenticados

* Bom, porque menos exposição de dados
* Ruim, porque reduz o alcance da plataforma; contradiz a interface
