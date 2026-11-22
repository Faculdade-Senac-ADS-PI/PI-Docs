---
title: 8. Validação, testes e análise dos repositórios
sidebar_label: Validação
---

A validação combinou:

1. **Testes automatizados** — unitários dos modelos e de integração dos endpoints, com Django `TestCase` e `APITestCase` em `apps/usuarios/tests` e `apps/servicos/tests`;
2. **Medição de desempenho** dos endpoints da API;
3. **Verificação visual** das telas em desktop e mobile ([Protótipo](../prototipo.md));
4. **Avaliação de usabilidade** com a escala SUS.

| Página | Resultado |
|---|---|
| [Casos de teste](./testes.md) | 18 casos; **39 testes automatizados, 39 aprovados (100%)** |
| [Desempenho](./desempenho.md) | Consultas com p95 ≤ 10,3 ms; login ≈ 1,5 s |
| [Usabilidade (SUS)](./usabilidade-sus.md) | Questionário pronto; aplicação com usuários reais pendente |
| [Análise dos repositórios](./analise-repositorios.md) | Pontos de alinhamento entre frontend, backend e documentação |

CT05 a CT08 dependem de funcionalidades previstas e por isso ainda não puderam ser executados.
