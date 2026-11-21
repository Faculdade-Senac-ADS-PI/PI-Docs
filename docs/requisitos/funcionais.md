---
title: 4.1 Requisitos funcionais
sidebar_label: Requisitos funcionais
---

**Resumo:** ✅ 2 implementados · 🟡 4 parciais · ⚪ 9 previstos.

| ID | Módulo | Descrição | Prioridade | Situação | Observação |
|---|---|---|---|---|---|
| RF01 | Acesso | Cadastrar usuário como contratante ou prestador (profissional/empresa) | Alta | 🟡 Parcial | Cadastro existe com tipos profissional/empresa; perfil contratante e CPF/CNPJ ainda não |
| RF02 | Acesso | Autenticar, renovar/verificar token e encerrar sessão | Alta | ✅ Implementado | Login, refresh e verify na API; logout remove o token no frontend |
| RF03 | Prestador | Cadastrar perfil profissional, serviços, categorias e área de atendimento | Alta | 🟡 Parcial | Serviços com categoria e localização; perfil de prestador dedicado previsto |
| RF04 | Administração | Analisar, aprovar, rejeitar, suspender ou reativar prestador e gerenciar dados | Alta | 🟡 Parcial | Gestão de dados via Django Admin; fluxo de aprovação previsto |
| RF05 | Busca | Pesquisar e filtrar prestadores/serviços por categoria, preço e localização | Alta | ✅ Implementado | Na API (testado); a tela ainda usa dados simulados |
| RF06 | Perfil | Exibir e editar perfil, portfólio, disponibilidade e avaliações | Alta | 🟡 Parcial | Perfil e foto implementados; portfólio, disponibilidade e avaliações previstos |
| RF07 | Serviço | Criar solicitação com descrição, região, data e anexos | Alta | ⚪ Previsto | Entidade Solicitacao no modelo expandido |
| RF08 | Serviço | Aceitar, recusar ou negociar uma solicitação | Alta | ⚪ Previsto | — |
| RF09 | Agenda | Confirmar agendamento após concordância das partes | Alta | ⚪ Previsto | — |
| RF10 | Acompanhamento | Atualizar e consultar o status do serviço | Alta | ⚪ Previsto | Entidade HistoricoStatus |
| RF11 | Comunicação | Trocar mensagens vinculadas à solicitação | Média | ⚪ Previsto | Entidade Mensagem |
| RF12 | Cancelamento | Cancelar serviço com registro do motivo | Alta | ⚪ Previsto | — |
| RF13 | Avaliação | Avaliar prestador após serviço concluído | Alta | ⚪ Previsto | Entidade Avaliacao |
| RF14 | Moderação | Denunciar e moderar avaliações | Média | ⚪ Previsto | Entidade Denuncia |
| RF15 | Privacidade | Solicitar exclusão da conta e dos dados aplicáveis | Alta | ⚪ Previsto | Exclusão hoje apenas pelo administrador |
