---
title: Análise técnica e alinhamento dos repositórios
sidebar_label: Análise dos repositórios
---

A auditoria do código encontrou os pontos abaixo, que orientam as próximas entregas.

| Ponto | Situação encontrada | Encaminhamento |
|---|---|---|
| Integração frontend × backend | `api/client.js` chama `/api/auth/login`, `/auth/me`, `/workers`, `/categories` e `/users`; a API expõe `/api/v1/auth/login/`, `/auth/profile/`, `/servicos/` e `/categorias/`. A API espera `username` e devolve `access`/`refresh`; o frontend envia e-mail e espera `token`/`user`. | Alinhar rotas e contrato de login |
| Dados simulados | Início, Buscar e Detalhe usam `mockData.js` | Consumir a API real |
| Perfis de usuário | Backend: `profissional`/`empresa`; frontend: `client`/`worker` | Unificar em contratante/prestador ([ADR-0010](/adr/registros/0010-nomenclatura-dos-perfis-de-usuario)) |
| Leitura de serviços | Listar e detalhar exigem JWT; o README do backend diz que a listagem é pública | Decidir acesso do visitante ([ADR-0012](/adr/registros/0012-leitura-de-servicos-exige-autenticacao)) |
| Resposta de criação | `POST /servicos/` retorna 201 sem o `id` do serviço | Incluir `id` no serializer de criação |
| Limite de tentativas de login | Taxa `login: 5/min` configurada, mas a `LoginView` não declara o escopo de throttling | Aplicar `ScopedRateThrottle` |
| Modelo de dados | Entidades de solicitação, avaliação e demais ainda não existem no backend | Migrar conforme o [DER expandido](../modelagem/dados.md) |
