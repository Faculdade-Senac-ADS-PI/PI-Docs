---
title: "ADR-0005: SQLite no desenvolvimento e PostgreSQL em produção"
sidebar_label: "0005 — SQLite no desenvolvimento e PostgreSQL em produção"
sidebar_position: 6
slug: /adr/registros/0005-sqlite-dev-postgresql-producao
status: accepted
date: 2026-09-14
decision-makers: Enzo de Oliveira Azevedo, Gabriel Caetano Chagas da Silva, Rafael da Silva Amoury, Devid Ribeiro de Sousa
---

| Status | Data | Responsáveis |
|---|---|---|
| **Aceita** | 14/09/2026 | Equipe ChamaServ |

## Contexto e problema

A equipe precisa de um banco simples para desenvolver localmente e de um banco robusto para produção. A documentação anterior citava também MySQL, o que gerava inconsistência.

## Fatores de decisão

* Configuração local sem instalar servidor de banco
* Robustez e concorrência em produção
* Consistência entre documentação e código

## Opções consideradas

* SQLite (dev) + PostgreSQL (produção)
* PostgreSQL em todos os ambientes
* MySQL

## Resultado da decisão

Opção escolhida: **"SQLite (dev) + PostgreSQL (produção)"**, porque é o que está implementado em config/settings e equilibra simplicidade local com robustez em produção.

### Consequências

* Bom, porque mySQL removido de toda a documentação
* Bom, porque testes rodam em SQLite em memória
* Ruim, porque recomenda-se um teste de carga em PostgreSQL antes da implantação

### Confirmação

config/settings/development.py usa SQLite por padrão e PostgreSQL quando DB_ENGINE é definido; production.py usa PostgreSQL.

## Prós e contras das opções

### SQLite (dev) + PostgreSQL (produção)

* Bom, porque zero configuração local
* Bom, porque postgreSQL é o banco mais bem suportado pelo Django
* Ruim, porque diferenças sutis entre os dois bancos podem aparecer só em produção

### PostgreSQL em todos os ambientes

* Bom, porque paridade total entre ambientes
* Ruim, porque exige Docker ou instalação local para cada integrante

### MySQL

* Bom, porque conhecido no mercado
* Ruim, porque não é usado no código; manter a citação apenas confundia a documentação
