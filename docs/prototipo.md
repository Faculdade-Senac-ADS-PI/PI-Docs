---
title: 9. Protótipo e resultados
sidebar_label: 9. Protótipo e resultados
---

## Desenvolvimento do protótipo

O protótipo foi concebido a partir dos requisitos e validado iterativamente com wireframes e interfaces interativas (Figma e Lovable — [protótipo interativo](https://visual-pdf-planner.lovable.app)), evoluindo para a SPA em React 19 (PI-Frontend) e a API REST em Django 6 (PI-Backend). A identidade visual usa tema escuro com efeito de vidro fosco (*glassmorphism*) e destaque em laranja.

## Telas do sistema

Capturadas da aplicação em execução local em 21/11/2026.

:::note
Início, Buscar e Detalhe exibem **dados de demonstração** (`mockData`), pois a integração com a API ainda não foi concluída. Perfil e Painel foram capturados com sessão de demonstração.
:::

### Tela inicial

![Tela inicial](/img/telas/p01_home.png)

### Login e cadastro

![Tela de login](/img/telas/p02_login.png)

![Tela de cadastro com escolha de perfil](/img/telas/p03_cadastro.png)

### Busca e detalhe do profissional

![Busca de profissionais com filtros](/img/telas/p04_busca.png)

![Detalhe do profissional](/img/telas/p05_detalhe.png)

### Perfil e painéis

![Perfil do usuário](/img/telas/p06_perfil.png)

![Painel do prestador](/img/telas/p07_dashboard.png)

![Painel do contratante](/img/telas/p08_dashboard_cliente.png)

### Versão mobile (390 px)

<img src={require('@site/static/img/telas/p09_home_mobile.png').default} alt="Tela inicial no celular" width="300" />

## Resultados e discussão

Os 15 requisitos funcionais, os 8 não funcionais e as 41 regras de negócio estão rastreados aos casos de uso, às histórias de usuário e aos casos de teste ([matriz](./requisitos/rastreabilidade.md)), à arquitetura em três camadas e aos modelos de dados.

| Funcionalidade planejada | Backend (API) | Frontend (interface) |
|---|---|---|
| Cadastro e login seguros (JWT) | ✅ Implementado e testado | Tela pronta; integração pendente |
| Busca por categoria, preço e localização | ✅ Implementado e testado | Tela pronta com dados simulados |
| Perfil do usuário / prestador | 🟡 Implementado (sem portfólio) | Tela pronta com dados simulados |
| Publicação e gestão de serviços | ✅ Implementado e testado | Painel pronto; integração pendente |
| Painel de métricas | ⚪ Previsto | Tela pronta com dados simulados |
| Solicitação, negociação e agenda | ⚪ Previsto | Elementos visuais no painel |
| Chat entre as partes | ⚪ Previsto | Botão “Enviar mensagem” sem funcionalidade |
| Avaliações vinculadas a serviço concluído | ⚪ Previsto | Exibição com dados simulados |
| Verificação de identidade (CPF/CNPJ) | ⚪ Previsto | — |
| Busca por proximidade (mapas) | ⚪ Previsto | — |

A camada de negócio está consistente com a especificação no núcleo do sistema — cadastro, autenticação, publicação e busca —, comprovado por 39 testes sem falhas e tempos de resposta adequados. A interface está completa e responsiva, mas ainda não consome a API real, o que impede a validação ponta a ponta e a SUS com dados verdadeiros.

**Limitações:** (1) entidades de contratação e avaliação ainda ausentes no backend; (2) divergência de rotas e nomenclaturas entre frontend e backend; (3) ausência de testes automatizados no frontend; (4) avaliação de usabilidade ainda não realizada.
