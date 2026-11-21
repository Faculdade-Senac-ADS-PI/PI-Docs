---
title: Desempenho da API (RNF04)
sidebar_label: Desempenho
---

Medição feita no servidor com o cliente de testes do DRF, **sem latência de rede**, em banco SQLite em memória com 201 serviços e 4 categorias, num notebook Intel Core (família 6, modelo 142) com Windows 11. Cada consulta foi executada 50 vezes (login: 10).

| Endpoint | Execuções | Média (ms) | Mediana (ms) | p95 (ms) | Máximo (ms) |
|---|---|---|---|---|---|
| `GET /api/v1/categorias/` | 50 | 4,5 | 4,3 | 5,9 | 6,5 |
| `GET /api/v1/servicos/` (200 registros, pág. 20) | 50 | 8,2 | 7,3 | 9,0 | 40,4 |
| `GET /api/v1/servicos/?search=&categoria=&preco_max=` | 50 | 8,3 | 7,8 | 10,3 | 25,9 |
| `GET /api/v1/servicos/{id}/` | 50 | 5,1 | 4,6 | 6,4 | 15,1 |
| `GET /api/v1/auth/profile/` | 50 | 2,9 | 2,6 | 4,1 | 9,0 |
| `POST /api/v1/auth/login/` | 10 | 1.493,7 | 1.466,7 | 1.564,1 | 1.734,8 |

## Interpretação

- Todas as consultas ficaram abaixo de **11 ms no p95**, muito abaixo do limite de **500 ms** definido no RNF04.
- O login levou em média **1,5 s**, dentro do limite de **2 s**, por causa do custo do hash da senha.
- Os valores não incluem rede nem carga concorrente. Antes da implantação, recomenda-se um teste de carga com PostgreSQL.
