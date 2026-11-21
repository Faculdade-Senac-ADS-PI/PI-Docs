---
title: Registros de decisão de arquitetura (ADR)
sidebar_label: Visão geral
slug: /adr
---

As decisões de arquitetura do ChamaServ são registradas no formato **MADR 4.0** (*Markdown Architectural Decision Records*), traduzido para o português. Cada registro descreve o contexto, os fatores de decisão, as opções consideradas, a escolha feita e suas consequências ([ADR-0000](/adr/registros/0000-usar-madr-para-registrar-decisoes)).

| ADR | Decisão | Status | Data |
|---|---|---|---|
| [ADR-0000](/adr/registros/0000-usar-madr-para-registrar-decisoes) | Usar MADR para registrar decisões de arquitetura | Aceita | 21/11/2026 |
| [ADR-0001](/adr/registros/0001-arquitetura-desacoplada-spa-e-api-rest) | Arquitetura desacoplada: SPA + API REST em repositórios separados | Aceita | 14/09/2026 |
| [ADR-0002](/adr/registros/0002-django-e-django-rest-framework-no-backend) | Django e Django REST Framework no back-end | Aceita | 14/09/2026 |
| [ADR-0003](/adr/registros/0003-react-vite-e-tailwind-no-frontend) | React, Vite, Tailwind CSS e shadcn/ui no front-end | Aceita | 14/09/2026 |
| [ADR-0004](/adr/registros/0004-autenticacao-jwt-com-simplejwt) | Autenticação stateless com JWT (SimpleJWT) | Aceita | 14/09/2026 |
| [ADR-0005](/adr/registros/0005-sqlite-dev-postgresql-producao) | SQLite no desenvolvimento e PostgreSQL em produção | Aceita | 14/09/2026 |
| [ADR-0006](/adr/registros/0006-uuid-como-chave-primaria) | UUID como chave primária de usuários e serviços | Aceita | 14/09/2026 |
| [ADR-0007](/adr/registros/0007-documentacao-openapi-com-drf-spectacular) | Documentação da API em OpenAPI com drf-spectacular | Aceita | 14/09/2026 |
| [ADR-0008](/adr/registros/0008-pagamento-fora-da-plataforma) | Pagamento realizado diretamente entre as partes | Aceita | 14/09/2026 |
| [ADR-0009](/adr/registros/0009-avaliacao-somente-apos-servico-concluido) | Avaliação somente após serviço concluído e registrado | Aceita | 21/11/2026 |
| [ADR-0010](/adr/registros/0010-nomenclatura-dos-perfis-de-usuario) | Unificar a nomenclatura dos perfis de usuário | Proposta | 21/11/2026 |
| [ADR-0011](/adr/registros/0011-exclusao-logica-de-servicos) | Exclusão lógica de serviços (campo ativo) | Aceita | 14/09/2026 |
| [ADR-0012](/adr/registros/0012-leitura-de-servicos-exige-autenticacao) | Acesso do visitante à listagem de serviços | Proposta | 21/11/2026 |
| [ADR-0013](/adr/registros/0013-documentacao-com-docusaurus-e-c4) | Documentação técnica com Docusaurus e modelo C4 | Aceita | 21/11/2026 |

## Status possíveis

| Status | Significado |
|---|---|
| Proposta | Em discussão pela equipe; ainda não vale |
| Aceita | Em vigor |
| Obsoleta | Não se aplica mais |
| Substituída | Trocada por outro ADR (indicado no texto) |

:::info Registros retroativos
Decisões com data de 14/09/2026 correspondem ao commit inicial dos repositórios e foram registradas retroativamente em 21/11/2026, com base no código.
:::

## Como registrar uma nova decisão

1. Copie [o modelo](./template.md) para `docs/adr/registros/adr-NNNN-titulo-curto.md`, usando o próximo número.
2. Preencha as seções e defina o status como `proposed`.
3. Depois de aprovada pela equipe, mude para `accepted`. Se ela substituir outra, marque a antiga como `superseded`.
