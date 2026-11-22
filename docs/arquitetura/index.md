---
title: Arquitetura — modelo C4
sidebar_label: Visão geral
slug: /arquitetura
---

A arquitetura do ChamaServ é descrita no **modelo C4** (BROWN, 2018), que apresenta o sistema em quatro níveis de zoom, do mais amplo ao mais detalhado:

| Nível | Pergunta que responde | Página |
|---|---|---|
| **C1 — Contexto** | Quem usa o sistema e com quais sistemas externos ele conversa? | [Contexto](./c1-contexto.md) |
| **C2 — Contêineres** | Quais aplicações e bancos de dados compõem o sistema e como se comunicam? | [Contêineres](./c2-conteineres.md) |
| **C3 — Componentes** | Como cada contêiner está organizado por dentro? | [Backend](./c3-componentes-backend.md) · [Frontend](./c3-componentes-frontend.md) |
| **C4 — Código** | Quais classes implementam os componentes? | [Código](./c4-codigo.md) |

## Arquitetura em camadas

O sistema segue uma arquitetura cliente-servidor em **três camadas**, com front-end e back-end desacoplados e comunicação via HTTP/JSON ([ADR-0001](/adr/registros/0001-arquitetura-desacoplada-spa-e-api-rest)):

| Camada | Tecnologia | Responsabilidade |
|---|---|---|
| Apresentação | React 19, JavaScript (JSX), Vite, Tailwind CSS, shadcn/ui | Telas responsivas, sessão (AuthContext), rotas protegidas e interceptor Axios com Bearer JWT |
| Negócio / API | Python 3.14, Django 6.1, DRF 3.18, SimpleJWT, drf-spectacular, django-filter | Endpoints REST em `/api/v1`, autenticação JWT, permissão `EhDonoOuLeitura`, filtros, paginação e Swagger/ReDoc |
| Dados | SQLite (desenvolvimento), PostgreSQL (produção), armazenamento de mídia | Persistência via Django ORM, integridade referencial e fotos de perfil (`perfis/`) |

![Arquitetura em camadas](/img/diagramas/orig_arquitetura.png)

<div className="legenda">Arquitetura em camadas do ChamaServ.</div>

## Fonte dos diagramas

Os diagramas C4 são gerados com PlantUML (biblioteca padrão C4-PlantUML) a partir de `diagramas/c4/c4.puml`:

```bash
java -jar plantuml.jar -tsvg -charset UTF-8 -o ../../static/img/c4 diagramas/c4/c4.puml
```
