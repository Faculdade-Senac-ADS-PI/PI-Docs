---
title: "ADR-0008: Pagamento realizado diretamente entre as partes"
sidebar_label: "0008 — Pagamento realizado diretamente entre as partes"
sidebar_position: 9
slug: /adr/registros/0008-pagamento-fora-da-plataforma
status: accepted
date: 2026-09-14
decision-makers: Enzo de Oliveira Azevedo, Gabriel Caetano Chagas da Silva, Rafael da Silva Amoury, Devid Ribeiro de Sousa
---

| Status | Data | Responsáveis |
|---|---|---|
| **Aceita** | 14/09/2026 | Equipe ChamaServ |

## Contexto e problema

Intermediar pagamentos exige integração com gateway, conformidade regulatória e tratamento de dados financeiros, o que foge ao escopo e ao prazo do Projeto Integrador.

## Fatores de decisão

* Escopo acadêmico e prazo
* Minimizar dados sensíveis tratados (LGPD)
* Público com baixa familiaridade digital

## Opções consideradas

* Pagamento direto entre contratante e prestador (fora da plataforma)
* Gateway com split de pagamento

## Resultado da decisão

Opção escolhida: **"Pagamento direto entre contratante e prestador (fora da plataforma)"**, porque mantém o foco na conexão entre as partes e reduz riscos de dados financeiros.

### Consequências

* Bom, porque regra RN23; valor estimado apenas informativo na solicitação
* Ruim, porque pagamento pela plataforma fica no backlog como Won’t have nesta versão

### Confirmação

Não existem entidades ou endpoints de pagamento.

## Prós e contras das opções

### Pagamento direto entre contratante e prestador (fora da plataforma)

* Bom, porque nenhum dado financeiro armazenado
* Bom, porque sem custos de gateway
* Ruim, porque a plataforma não garante o pagamento
* Ruim, porque não há receita por transação

### Gateway com split de pagamento

* Bom, porque segurança para as duas partes e modelo de receita
* Ruim, porque complexidade, custos e exigências regulatórias
