---
title: "ADR-0002: Django e Django REST Framework no back-end"
sidebar_label: "0002 — Django e Django REST Framework no back-end"
sidebar_position: 3
slug: /adr/registros/0002-django-e-django-rest-framework-no-backend
status: accepted
date: 2026-09-14
decision-makers: Enzo de Oliveira Azevedo, Gabriel Caetano Chagas da Silva, Rafael da Silva Amoury, Devid Ribeiro de Sousa
---

| Status | Data | Responsáveis |
|---|---|---|
| **Aceita** | 14/09/2026 | Equipe ChamaServ |

## Contexto e problema

A API precisa de autenticação, ORM relacional, validação de dados, painel administrativo para moderação e documentação, com curva de aprendizado compatível com a equipe.

## Fatores de decisão

* Produtividade com pouca equipe
* Painel administrativo pronto (UC15)
* Segurança por padrão (hash de senha, proteção contra injeção SQL)
* Ecossistema maduro (JWT, filtros, OpenAPI)

## Opções consideradas

* Django 6 + Django REST Framework
* Node.js + Express
* FastAPI

## Resultado da decisão

Opção escolhida: **"Django 6 + Django REST Framework"**, porque entrega admin, ORM, autenticação e documentação com o menor volume de código próprio.

### Consequências

* Bom, porque moderação via Django Admin sem desenvolvimento adicional
* Bom, porque permissão EhDonoOuLeitura reutilizável
* Bom, porque 39 testes com Django TestCase/APITestCase
* Ruim, porque hash de senha padrão (PBKDF2) deixa o login em torno de 1,5 s no ambiente medido

### Confirmação

requirements.txt fixa Django 6.1.1 e djangorestframework 3.18.1.

## Prós e contras das opções

### Django 6 + Django REST Framework

* Bom, porque oRM, migrações e Django Admin prontos
* Bom, porque dRF oferece serializers, viewsets, permissões, paginação e throttling
* Bom, porque integra com SimpleJWT, django-filter e drf-spectacular
* Ruim, porque mais pesado que microframeworks

### Node.js + Express

* Bom, porque mesma linguagem do frontend
* Ruim, porque sem admin, ORM e validação integrados; mais código de infraestrutura

### FastAPI

* Bom, porque alto desempenho e OpenAPI nativo
* Ruim, porque sem painel administrativo; ORM e migrações à parte

## Mais informações

Ver C4 — Componentes do backend.
