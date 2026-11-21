---
title: "ADR-0010: Unificar a nomenclatura dos perfis de usuário"
sidebar_label: "0010 — Unificar a nomenclatura dos perfis de usuário"
sidebar_position: 11
slug: /adr/registros/0010-nomenclatura-dos-perfis-de-usuario
status: proposed
date: 2026-11-21
decision-makers: Enzo de Oliveira Azevedo, Gabriel Caetano Chagas da Silva, Rafael da Silva Amoury, Devid Ribeiro de Sousa
---

| Status | Data | Responsáveis |
|---|---|---|
| **Proposta** | 21/11/2026 | Equipe ChamaServ |

## Contexto e problema

Hoje há três nomenclaturas: a documentação usa contratante/prestador, o backend usa tipo_usuario = profissional | empresa e o frontend usa client | worker. Isso impede a integração e confunde a especificação.

## Fatores de decisão

* Integração frontend × backend
* Clareza das regras de negócio
* Prestadores podem ser pessoa física ou empresa

## Opções consideradas

* Papel (contratante | prestador) + tipo de pessoa do prestador (profissional | empresa)
* Adotar client | worker do frontend
* Manter como está

## Resultado da decisão

Opção escolhida: **"Papel (contratante | prestador) + tipo de pessoa do prestador (profissional | empresa)"**, porque é coerente com as regras de negócio e preserva o modelo atual do backend.

### Consequências

* Bom, porque nomenclatura única em documentação, API e interface
* Ruim, porque requer migração de dados e alteração do serializer de cadastro

### Confirmação

Proposta: deve ser aceita pela equipe antes da integração do frontend.

## Prós e contras das opções

### Papel (contratante | prestador) + tipo de pessoa do prestador (profissional | empresa)

* Bom, porque separa “o que faz” de “quem é”
* Bom, porque mantém os valores já usados no backend para o prestador
* Ruim, porque exige migração no backend e ajuste no cadastro do frontend

### Adotar client | worker do frontend

* Bom, porque menos mudança na interface
* Ruim, porque perde a distinção entre profissional e empresa (RN41)

### Manter como está

* Bom, porque nenhum esforço agora
* Ruim, porque integração continua bloqueada
