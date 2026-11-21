---
title: "ADR-0001: Arquitetura desacoplada: SPA + API REST em repositórios separados"
sidebar_label: "0001 — Arquitetura desacoplada: SPA + API REST em repositórios separados"
sidebar_position: 2
slug: /adr/registros/0001-arquitetura-desacoplada-spa-e-api-rest
status: accepted
date: 2026-09-14
decision-makers: Enzo de Oliveira Azevedo, Gabriel Caetano Chagas da Silva, Rafael da Silva Amoury, Devid Ribeiro de Sousa
---

| Status | Data | Responsáveis |
|---|---|---|
| **Aceita** | 14/09/2026 | Equipe ChamaServ |

## Contexto e problema

O ChamaServ precisa de uma interface responsiva para celular e computador e de regras de negócio seguras (autenticação, permissões, futuras regras de contratação). A equipe tem integrantes dedicados ao front-end e ao back-end trabalhando em paralelo.

## Fatores de decisão

* Trabalho paralelo entre front-end e back-end
* Interface responsiva e fluida (RNF03)
* Separação de camadas (RNF06)
* Possibilidade futura de aplicativo móvel consumindo a mesma API

## Opções consideradas

* SPA (React) + API REST (Django) em dois repositórios
* Monólito Django com templates
* Monorepo com SPA e API

## Resultado da decisão

Opção escolhida: **"SPA (React) + API REST (Django) em dois repositórios"**, porque permite que front-end e back-end evoluam em paralelo e deixa a API pronta para outros clientes.

### Consequências

* Bom, porque pI-Frontend e PI-Backend versionados e implantados de forma independente
* Bom, porque camadas de apresentação, negócio e dados bem separadas
* Ruim, porque a integração ficou atrasada: o frontend ainda usa rotas e dados simulados diferentes da API (ver análise dos repositórios)

### Confirmação

O frontend só deve acessar dados via /api/v1; a documentação OpenAPI é o contrato oficial.

## Prós e contras das opções

### SPA (React) + API REST (Django) em dois repositórios

* Bom, porque equipes independentes, cada uma com seu repositório
* Bom, porque a mesma API poderá atender um app móvel
* Bom, porque contrato explícito documentado em OpenAPI
* Ruim, porque exige alinhar contrato de rotas e payloads (hoje divergente)
* Ruim, porque configuração de CORS e de dois deploys

### Monólito Django com templates

* Bom, porque um único deploy
* Bom, porque sem CORS
* Ruim, porque interface menos interativa
* Ruim, porque acoplamento entre telas e regras de negócio

### Monorepo com SPA e API

* Bom, porque mudanças de contrato num único commit
* Ruim, porque a organização no GitHub já previa repositórios separados

## Mais informações

Ver C4 — Contêineres e ADR-0007.
