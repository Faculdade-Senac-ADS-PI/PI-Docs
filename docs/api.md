---
title: 6. Documentação da API
sidebar_label: 6. API REST
---

A API está sob o prefixo `/api/v1` e é documentada automaticamente no padrão **OpenAPI 3.0** pelo drf-spectacular ([ADR-0007](/adr/registros/0007-documentacao-openapi-com-drf-spectacular)). Com o backend em execução:

| Endereço | Conteúdo |
|---|---|
| `/api/docs/` | Swagger UI interativo |
| `/api/redoc/` | ReDoc (leitura) |
| `/api/schema/` | Schema OpenAPI |

Todas as rotas exigem o cabeçalho `Authorization: Bearer <access_token>`, exceto cadastro, login, token e categorias.

## Como executar o backend

```bash
cd PI-Backend
python -m venv .venv
.venv\Scripts\activate          # Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver      # http://127.0.0.1:8000/api/docs/
```

## Endpoints

| Método | Endpoint | Autenticação | Descrição | Respostas |
|---|---|---|---|---|
| POST | `/auth/register/` | Pública | Cadastro de usuário (profissional ou empresa) | 201, 400 |
| POST | `/auth/login/` | Pública | Login com username e senha; retorna `access` e `refresh` | 200, 401 |
| POST | `/auth/token/refresh/` | Pública (refresh) | Novo access token e rotação do refresh | 200, 401 |
| POST | `/auth/token/verify/` | Pública | Verifica a validade de um token | 200, 401 |
| GET / PATCH / PUT | `/auth/profile/` | JWT | Consulta e atualiza o perfil do usuário logado | 200, 400, 401 |
| POST | `/auth/change-password/` | JWT | Altera a senha (exige a senha atual) | 200, 400, 401 |
| GET | `/servicos/` | JWT | Lista serviços ativos com filtros, busca, ordenação e paginação (20 por página) | 200, 401 |
| POST | `/servicos/` | JWT | Cria serviço vinculado ao usuário logado | 201, 400, 401 |
| GET | `/servicos/{id}/` | JWT | Detalha um serviço | 200, 401, 404 |
| PUT / PATCH / DELETE | `/servicos/{id}/` | JWT (dono) | Edita ou remove — somente o dono | 200, 204, 403, 404 |
| GET | `/categorias/` e `/categorias/{id}/` | Pública | Lista e detalha categorias (somente leitura) | 200, 404 |

## Parâmetros de `GET /api/v1/servicos/`

| Parâmetro | Tipo | Exemplo | Efeito |
|---|---|---|---|
| `categoria` | inteiro | `?categoria=1` | Filtra pela categoria |
| `preco_min` / `preco_max` | decimal | `?preco_min=100&preco_max=200` | Faixa de preço |
| `tipo_preco` | `fixo` \| `a_combinar` | `?tipo_preco=fixo` | Tipo de preço |
| `localizacao` | texto | `?localizacao=Fortaleza` | Contém o texto informado |
| `autor` | UUID | `?autor=<uuid>` | Serviços de um usuário |
| `search` | texto | `?search=tomada` | Busca em título e descrição |
| `ordering` | campo | `?ordering=-preco` | Ordena por `preco`, `criado_em` ou `titulo` |
| `meus` | booleano | `?meus=true` | Serviços do usuário logado, incluindo inativos |
| `page` | inteiro | `?page=2` | Página da listagem |

## Exemplos reais

Respostas obtidas na execução da API em 21/11/2026.

**Cadastro** — `POST /api/v1/auth/register/` → `201 Created`

```json
{
  "id": "054d21ad-257f-4f7a-91ca-91e8b8188f4b",
  "email": "ana@email.com",
  "username": "ana",
  "first_name": "Ana",
  "last_name": "Lima",
  "tipo_usuario": "profissional"
}
```

**Listagem filtrada** — `GET /api/v1/servicos/?categoria=1&preco_max=130` → `200 OK` (primeiro item)

```json
{
  "count": 22,
  "total_pages": 2,
  "current_page": 1,
  "next": "http://testserver/api/v1/servicos/?categoria=1&page=2&preco_max=130",
  "previous": null,
  "results": [
    {
      "id": "aeec1eca-a9cc-4d8e-bbd4-29fc44007a5f",
      "titulo": "Instalacao de chuveiro",
      "descricao": "Troca e instalacao",
      "categoria": "Eletricista",
      "preco": "120.00",
      "preco_formatado": "R$ 120,00",
      "tipo_preco": "fixo",
      "localizacao": "Fortaleza, CE",
      "ativo": true,
      "criado_em": "2026-11-21T13:38:57.708010-03:00",
      "autor": {
        "id": "054d21ad-257f-4f7a-91ca-91e8b8188f4b",
        "nome": "Ana Lima",
        "tipo_usuario": "profissional",
        "foto_perfil": null
      }
    }
  ]
}
```

## Erros

Seguem o padrão do Django REST Framework:

| Código | Significado | Exemplo |
|---|---|---|
| 400 | Campos inválidos | `{"email": ["Este email ja esta em uso."]}` |
| 401 | Token ausente, inválido ou expirado | Acesso a `/servicos/` sem `Authorization` |
| 403 | Ação não permitida ao usuário | Editar serviço de outra pessoa |
| 404 | Recurso inexistente | `/servicos/<uuid-inexistente>/` |
| 429 | Limite de requisições | Acima de 100/h (anônimo) ou 1.000/h (autenticado) |

![Swagger UI](/img/telas/p10_swagger.png)

<div className="legenda">Documentação interativa da API (Swagger UI em /api/docs/).</div>
