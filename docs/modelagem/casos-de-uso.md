---
title: Casos de uso
sidebar_label: Casos de uso
---

Contratante e Prestador herdam as permissões do Visitante. UC01 a UC15 estão implementados na API e no painel administrativo; UC16 e UC17 (tracejados) representam o fluxo de contratação e avaliação previsto no roadmap (`FUTURAS_INCREMENTACOES.md`).

![Diagrama de casos de uso](/img/diagramas/uml_08_casos_de_uso.png)

<div className="legenda">Diagrama de casos de uso do ChamaServ.</div>

## Atores

| Ator | Descrição |
|---|---|
| Visitante (não autenticado) | Consulta categorias públicas, cadastra-se e faz login. |
| Contratante | Usuário autenticado que busca serviços e profissionais, gerencia o perfil e, no fluxo previsto, solicita e avalia atendimentos. Na versão atual, qualquer usuário autenticado pode atuar como contratante ([ADR-0010](/adr/registros/0010-nomenclatura-dos-perfis-de-usuario)). |
| Prestador (profissional ou empresa) | Publica, edita e remove seus serviços e, no fluxo previsto, responde a solicitações. |
| Administrador (Django Admin) | Gerencia usuários, serviços, categorias e moderação. |

## Catálogo UC01–UC17

| Código | Caso de uso | Descrição | Situação |
|---|---|---|---|
| UC01 | Cadastrar-se | Cria a conta com e-mail, username, senha, nome e tipo de perfil | ✅ Implementado |
| UC02 | Realizar login (JWT) | Valida credenciais e retorna os tokens access e refresh | ✅ Implementado |
| UC03 | Renovar/verificar token | Renova o access token ou verifica sua validade | ✅ Implementado |
| UC04 | Listar e buscar serviços | Lista serviços ativos com paginação e busca por título e descrição | ✅ Implementado |
| UC05 | Filtrar serviços | Estende UC04 com filtros por categoria, preço, tipo de preço, localização e autor | ✅ Implementado |
| UC06 | Ver detalhe do serviço/profissional | Exibe os dados completos do serviço e do responsável | ✅ Implementado |
| UC07 | Consultar categorias | Lista as categorias (acesso público) | ✅ Implementado |
| UC08/UC09 | Ver e editar perfil | Consulta e atualiza telefone, bio, endereço, foto e demais dados | ✅ Implementado |
| UC10 | Alterar senha | Troca a senha mediante a senha atual | ✅ Implementado |
| UC11 | Publicar serviço | Cria serviço vinculado ao usuário logado | ✅ Implementado |
| UC12/UC13 | Editar e remover serviço próprio | Somente o dono (`EhDonoOuLeitura`) | ✅ Implementado |
| UC14 | Listar meus serviços | Inclui inativos (`meus=true`) | ✅ Implementado |
| UC15 | Gerenciar dados (Admin) | CRUD de usuários, serviços e categorias no Django Admin | ✅ Implementado |
| UC16 | Contratar serviço | Solicitação, negociação e confirmação de agendamento | ⚪ Previsto |
| UC17 | Avaliar profissional | Nota e comentário após a conclusão do serviço | ⚪ Previsto |

## Fluxos detalhados

### UC01 — Cadastrar-se

| Campo | Descrição |
|---|---|
| Atores | Visitante |
| Pré-condições | Acesso à plataforma e conexão ativa |
| Fluxo principal | 1. Acessar a tela de cadastro. 2. Informar dados obrigatórios e tipo de perfil. 3. Aceitar termos de uso e política de privacidade. 4. O sistema valida formato e unicidade de e-mail e username (e CPF/CNPJ, quando implementado). 5. O sistema protege a senha com hash e cria a conta. |
| Fluxos alternativos | Dados inválidos ou duplicados impedem o cadastro e geram mensagem de orientação (HTTP 400). |
| Pós-condições | Conta criada e apta à autenticação JWT. |

### UC16 — Solicitar e negociar serviço (previsto)

| Campo | Descrição |
|---|---|
| Atores | Contratante e Prestador |
| Pré-condições | Contratante autenticado; prestador aprovado e ativo |
| Fluxo principal | 1. Selecionar prestador ou serviço. 2. Informar categoria, descrição, região, data e anexos. 3. Enviar a solicitação. 4. Prestador aceita, recusa ou propõe alteração. 5. Contratante concorda ou continua negociando até a confirmação. |
| Fluxos alternativos | Indisponibilidade ou recusa mantém a solicitação sem confirmação de agenda. |
| Pós-condições | Solicitação recusada, em negociação ou confirmada, sem conflito de horário. |

### UC17 — Concluir e avaliar serviço (previsto)

| Campo | Descrição |
|---|---|
| Atores | Contratante e Prestador |
| Pré-condições | Serviço confirmado e executado |
| Fluxo principal | 1. Registrar início e conclusão. 2. Liberar avaliação ao contratante. 3. Registrar nota e comentário opcional. 4. Recalcular a média do prestador. |
| Fluxos alternativos | Serviços cancelados ou recusados não liberam avaliação ([ADR-0009](/adr/registros/0009-avaliacao-somente-apos-servico-concluido)). |
| Pós-condições | Serviço concluído e reputação atualizada. |
