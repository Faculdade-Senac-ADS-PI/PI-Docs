---
slug: /
sidebar_label: Visão geral
title: ChamaServ — Plataforma de Serviços Autônomos
description: Documentação do Projeto Integrador ChamaServ (Faculdade Senac Ceará — ADS).
---

**Projeto Integrador · Faculdade Senac — Departamento Regional do Ceará · Curso de Análise e Desenvolvimento de Sistemas · 2026**

Eixo de desenvolvimento: **Tecnologia, Educação e Inclusão Digital**

## Resumo

O ChamaServ é uma plataforma digital que conecta **contratantes** a **profissionais autônomos e empresas prestadoras de serviços** — como pedreiros, eletricistas, diaristas e pintores — com foco inicial em **Fortaleza-CE**. A solução facilita a busca por categoria, preço e localização, permite a divulgação de serviços pelos prestadores e prevê avaliações vinculadas a serviços efetivamente concluídos.

O sistema adota arquitetura desacoplada em três camadas: uma SPA em React 19 ([PI-Frontend](https://github.com/Faculdade-Senac-ADS-PI/PI-Frontend)) e uma API REST em Django 6 com Django REST Framework e autenticação JWT ([PI-Backend](https://github.com/Faculdade-Senac-ADS-PI/PI-Backend)), com SQLite no desenvolvimento e PostgreSQL em produção. A validação registrou **39 testes automatizados com 100% de aprovação** e tempos de resposta abaixo de **11 ms (p95)** nas consultas da API.

A proposta vincula-se ao projeto de extensão *“Tecnologia para Jovens – Educação e Inclusão Digital”* e aos ODS 4, 8 e 10.

**Palavras-chave:** plataforma digital; serviços; profissionais autônomos; API REST; inclusão digital.

## Equipe

| Papel | Integrante |
|---|---|
| Full stack | Enzo de Oliveira Azevedo |
| Full stack | Gabriel Caetano Chagas da Silva |
| Front-end | Rafael da Silva Amoury |
| Back-end | Devid Ribeiro de Sousa |

**Coordenador:** Frederico Amorim · **Professores:** Otônio Castro, Thiago Aquino de Menezes e Haélio Márcio Ferreira.

## Como navegar

| Seção | O que contém |
|---|---|
| [Documentação](/introducao) | Introdução, metodologia, requisitos, modelagem UML, API, LGPD, validação e resultados |
| [Arquitetura (C4)](/arquitetura) | Diagramas no modelo C4: contexto, contêineres, componentes e código |
| [Decisões (ADR)](/adr) | Registros de decisões de arquitetura no padrão MADR |

## Legenda de situação

Em todo o site, cada funcionalidade é marcada conforme o estado do código em 21/11/2026:

- ✅ **Implementado** — disponível na API e coberto por teste;
- 🟡 **Parcial** — disponível com limitações;
- ⚪ **Previsto** — especificado e modelado, ainda não implementado.
