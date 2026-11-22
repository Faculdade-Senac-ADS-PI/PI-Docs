---
title: "ADR-0004: Autenticação stateless com JWT (SimpleJWT)"
sidebar_label: "0004 — Autenticação stateless com JWT (SimpleJWT)"
sidebar_position: 5
slug: /adr/registros/0004-autenticacao-jwt-com-simplejwt
status: accepted
date: 2026-09-14
decision-makers: Enzo de Oliveira Azevedo, Gabriel Caetano Chagas da Silva, Rafael da Silva Amoury, Devid Ribeiro de Sousa
---

| Status | Data | Responsáveis |
|---|---|---|
| **Aceita** | 14/09/2026 | Equipe ChamaServ |

## Contexto e problema

Com front-end e back-end separados, a API precisa autenticar requisições sem depender de sessão no servidor, protegendo as rotas privadas (RN04).

## Fatores de decisão

* Arquitetura desacoplada (ADR-0001)
* Segurança (RNF01)
* Escalabilidade horizontal da API

## Opções consideradas

* JWT com SimpleJWT (access 60 min + refresh 7 dias com rotação)
* Sessão Django com cookie
* Token simples do DRF (TokenAuthentication)

## Resultado da decisão

Opção escolhida: **"JWT com SimpleJWT (access 60 min + refresh 7 dias com rotação)"**, porque é o padrão para SPAs que consomem APIs REST e já vem integrado ao DRF.

### Consequências

* Bom, porque rotas privadas retornam 401 sem token (CT09)
* Bom, porque renovação e verificação de token testadas (CT12)
* Ruim, porque avaliar no futuro o armazenamento do refresh token em cookie HttpOnly

### Confirmação

SIMPLE_JWT em config/settings/base.py; testes test_refresh_e_verify_de_token e test_rn04_perfil_sem_token_retorna_401.

## Prós e contras das opções

### JWT com SimpleJWT (access 60 min + refresh 7 dias com rotação)

* Bom, porque stateless; qualquer instância da API valida o token
* Bom, porque integração direta com DRF
* Bom, porque rotação do refresh reduz o impacto de vazamento
* Ruim, porque token guardado no localStorage fica exposto a XSS
* Ruim, porque revogação antes do vencimento exige blacklist

### Sessão Django com cookie

* Bom, porque revogação imediata; cookie HttpOnly
* Ruim, porque exige CSRF e cookies entre domínios diferentes

### Token simples do DRF (TokenAuthentication)

* Bom, porque implementação mínima
* Ruim, porque token sem expiração

## Mais informações

RFC 7519. Ver diagrama de sequência de login.
