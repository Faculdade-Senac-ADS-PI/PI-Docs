---
title: Equipe e processo ágil
sidebar_label: Equipe e processo
---

## Papéis da equipe

| Papel | Integrante | Responsabilidade |
|---|---|---|
| Full stack | Enzo de Oliveira Azevedo | Integração entre interface e API, modelagem e documentação; encarregado de dados (LGPD) |
| Full stack | Gabriel Caetano Chagas da Silva | Integração entre interface e API, modelagem e documentação |
| Front-end | Rafael da Silva Amoury | Interface SPA em React (PI-Frontend) |
| Back-end | Devid Ribeiro de Sousa | API REST em Django (PI-Backend) |

## Scrum adaptado

O projeto seguiu uma adaptação do Scrum (SCHWABER; SUTHERLAND, 2020), ajustada à rotina acadêmica:

- ciclos semanais com definição das tarefas no início e revisão das entregas ao final;
- *Product Backlog* mantido e priorizado pelo grupo com a matriz MoSCoW;
- comunicação, distribuição de tarefas e acompanhamento feitos em **grupo interno de WhatsApp**, em substituição a uma ferramenta de quadro Kanban;
- versionamento no GitHub, que registra as entregas de cada repositório.

## Backlog do produto (MoSCoW)

| Prioridade | Itens | Situação |
|---|---|---|
| Must have | Cadastro e login JWT (RF01, RF02); publicação e busca com filtros (RF03, RF05); perfil (RF06); permissões por dono | ✅ Implementado |
| Must have | Integração do PI-Frontend com a API real | ⚪ Pendente |
| Should have | Prestador com validação (RF04); solicitação, negociação e agenda (RF07–RF10); cancelamento (RF12); avaliação (RF13); exclusão de conta (RF15) | ⚪ Previsto |
| Could have | Chat (RF11); moderação de avaliações (RF14); busca por proximidade com mapas | ⚪ Previsto |
| Won’t have (nesta versão) | Pagamento pela plataforma (RN23); aplicativo nativo | — |

## Evidência de execução — histórico de commits

Extraído do Git em 21/11/2026.

| Repositório | Commit | Data | Descrição |
|---|---|---|---|
| PI-Frontend | `3158208` | 14/09/2026 | Projeto base React — plataforma de serviços autônomos |
| PI-Backend | `cfde549` | 14/09/2026 | API REST da plataforma de serviços (Django + DRF) |
| PI-Frontend | `3bd184c` | 19/10/2026 | Redesign completo em glassmorphism e rebrand para ChamaServ |

:::tip Recomendação
Como a organização ocorreu em grupo de mensagens, recomenda-se adotar um quadro Kanban (Trello ou GitHub Projects) nas próximas etapas para registrar formalmente o fluxo das tarefas.
:::
