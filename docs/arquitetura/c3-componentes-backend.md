---
title: C3 — Componentes da API (PI-Backend)
sidebar_label: C3 — Componentes (backend)
---

Organização interna da API REST em apps Django ([ADR-0002](/adr/registros/0002-django-e-django-rest-framework-no-backend)).

![C3 — Componentes do backend](/img/c4/c3-componentes-backend.svg)

| Componente | Arquivos principais | Responsabilidade |
|---|---|---|
| Roteador | `config/urls.py`, `apps/*/urls.py` | Expõe `/api/v1/auth`, `/api/v1/servicos`, `/api/v1/categorias` e `/api/docs` |
| Autenticação | `apps/usuarios/urls.py` (LoginView, RefreshView, VerifyView) | Emite, renova e verifica tokens JWT |
| Cadastro e perfil | `apps/usuarios/views.py`, `serializers.py` | Registro, perfil e alteração de senha |
| ServicoViewSet | `apps/servicos/views.py`, `filters.py` | CRUD de serviços com busca, filtros, ordenação e `meus=true` |
| CategoriaViewSet | `apps/servicos/views.py` | Listagem pública de categorias (somente leitura) |
| Core | `apps/core/permissions.py`, `pagination.py`, `exceptions.py` | `EhDonoOuLeitura`, paginação (20 por página) e erros padronizados |
| Modelos | `apps/usuarios/models.py`, `apps/servicos/models.py` | `Usuario`, `Categoria`, `Servico` |
| Documentação | drf-spectacular | Swagger UI, ReDoc e schema OpenAPI |
