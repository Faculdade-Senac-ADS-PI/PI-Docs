---
title: "ADR-0007: Documentação da API em OpenAPI com drf-spectacular"
sidebar_label: "0007 — Documentação da API em OpenAPI com drf-spectacular"
sidebar_position: 8
slug: /adr/registros/0007-documentacao-openapi-com-drf-spectacular
status: accepted
date: 2026-09-14
decision-makers: Enzo de Oliveira Azevedo, Gabriel Caetano Chagas da Silva, Rafael da Silva Amoury, Devid Ribeiro de Sousa
---

| Status | Data | Responsáveis |
|---|---|---|
| **Aceita** | 14/09/2026 | Equipe ChamaServ |

## Contexto e problema

Com repositórios separados (ADR-0001), o contrato da API precisa estar documentado e atualizado para o frontend e para avaliação acadêmica.

## Fatores de decisão

* Contrato sempre sincronizado com o código
* Teste manual de endpoints
* Padrão aberto

## Opções consideradas

* drf-spectacular (OpenAPI 3.0, Swagger UI e ReDoc)
* Documentação manual em Markdown
* Coleção do Insomnia/Postman

## Resultado da decisão

Opção escolhida: **"drf-spectacular (OpenAPI 3.0, Swagger UI e ReDoc)"**, porque mantém o contrato gerado a partir do próprio código.

### Consequências

* Bom, porque documentação em /api/docs/, /api/redoc/ e /api/schema/
* Bom, porque schema.yml versionado no repositório
* Ruim, porque o frontend ainda não segue esse contrato (rotas divergentes)

### Confirmação

Rotas de documentação em config/urls.py.

## Prós e contras das opções

### drf-spectacular (OpenAPI 3.0, Swagger UI e ReDoc)

* Bom, porque gera o schema a partir das views e serializers
* Bom, porque swagger UI permite testar com token
* Ruim, porque exige anotações (extend_schema) para descrições ricas

### Documentação manual em Markdown

* Bom, porque livre
* Ruim, porque fica desatualizada facilmente

### Coleção do Insomnia/Postman

* Bom, porque útil para testes
* Ruim, porque não é um contrato formal
