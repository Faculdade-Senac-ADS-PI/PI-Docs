---
title: 3. Metodologia
sidebar_label: Metodologia
---

## 3.1 Tipo de pesquisa

Pesquisa **aplicada**, de natureza **qualitativa e quantitativa**, com caráter exploratório e descritivo. A dimensão qualitativa permite compreender percepções e necessidades dos usuários; a quantitativa subsidia a análise de métricas de teste e de desempenho. O levantamento de base usou pesquisa bibliográfica e documental (artigos, relatórios do IBGE e documentação pública de plataformas similares).

## 3.2 Etapas do projeto

| Etapa | Descrição | Duração estimada |
|---|---|---|
| 1. Pesquisa e análise | Levantamento de plataformas similares, benchmarking e análise de mercado | 2 semanas |
| 2. Levantamento de requisitos | Necessidades de clientes e prestadores; personas e histórias de usuário | 2 semanas |
| 3. Planejamento e design | Funcionalidades (MoSCoW), arquitetura e prototipagem | 3 semanas |
| 4. Desenvolvimento | Frontend, backend, banco de dados e integrações | 8 semanas |
| 5. Testes e melhorias | Testes automatizados, desempenho, usabilidade e correções | 3 semanas |

![Metodologia do projeto e fluxo de processos planejado](/img/diagramas/orig_metodologia_pfd.png)

<div className="legenda">Metodologia do projeto e fluxo de processos planejado (visão de produto). O fluxo inferior inclui funcionalidades previstas, como chat e agendamento.</div>

### Etapa 1 — Pesquisa sobre plataformas similares

Mapeamento de GetNinjas, LinkedIn, TaskRabbit, Workana e Triider quanto a modelo de negócio, funcionalidades, avaliação, verificação de identidade e lacunas ([Benchmarking](../introducao/benchmarking.md)).

### Etapa 2 — Levantamento das necessidades dos usuários

Entrevistas semiestruturadas e questionários com contratantes e prestadores:

- **Dores dos contratantes:** dificuldade em encontrar profissionais confiáveis com histórico comprovado; insegurança quanto à qualidade; falta de transparência em preços e prazos; ausência de canais de comunicação diretos.
- **Dores dos prestadores:** baixa visibilidade; instabilidade na captação de clientes; ausência de canal formal para agenda e demanda; necessidade de avaliação que valorize o trabalho.

Os dados foram organizados em [personas](./personas.md) e [histórias de usuário](./user-stories.md).

### Etapa 3 — Planejamento das funcionalidades

Funcionalidades organizadas em dois módulos e priorizadas com a matriz **MoSCoW** (CLEGG; BARKER, 1994):

- **Módulo do contratante:** cadastro e autenticação; busca por categoria; filtro por localização; perfil do profissional com avaliações; chat; agendamento e acompanhamento de status.
- **Módulo do prestador:** cadastro com verificação de identidade; perfil com portfólio e serviços; gestão de solicitações; resposta a avaliações; painel de métricas.

### Etapa 4 — Desenvolvimento

Prototipagem com Figma e Lovable e implementação em dois repositórios desacoplados (PI-Frontend e PI-Backend) na organização GitHub **Faculdade-Senac-ADS-PI**.

### Etapa 5 — Testes e melhorias

Três níveis: (1) testes automatizados unitários e de integração da API; (2) medição de desempenho e verificação de segurança (OWASP Top 10); (3) teste de usabilidade com a escala SUS. Resultados em [Validação](../validacao/index.md).
