---
title: C2 — Contêineres
sidebar_label: C2 — Contêineres
---

Aplicações e armazenamentos que compõem o ChamaServ. Cada contêiner pode ser implantado de forma independente.

![C2 — Contêineres](/img/c4/c2-conteineres.svg)

| Contêiner | Tecnologia | Responsabilidade | Repositório |
|---|---|---|---|
| Aplicação web | React 19, Vite, Tailwind CSS, shadcn/ui | SPA responsiva; guarda o JWT no navegador | [PI-Frontend](https://github.com/Faculdade-Senac-ADS-PI/PI-Frontend) |
| API REST | Django 6.1, DRF 3.18, SimpleJWT | Regras de negócio, autenticação, filtros e OpenAPI em `/api/v1` | [PI-Backend](https://github.com/Faculdade-Senac-ADS-PI/PI-Backend) |
| Django Admin | Django 6.1 | Painel administrativo | PI-Backend |
| Banco de dados | SQLite (dev) / PostgreSQL (produção) | Usuários, categorias e serviços | — |
| Armazenamento de mídia | Sistema de arquivos (`MEDIA_ROOT`) | Fotos de perfil em `perfis/` | — |

## Comunicação

- Aplicação web → API: **HTTPS + JSON**, com cabeçalho `Authorization: Bearer <access>` ([ADR-0004](/adr/registros/0004-autenticacao-jwt-com-simplejwt)).
- API e Django Admin → banco: **Django ORM** ([ADR-0005](/adr/registros/0005-sqlite-dev-postgresql-producao)).
- CORS liberado em desenvolvimento e restrito às origens configuradas em produção.
