---
title: Histórias de usuário
sidebar_label: Histórias de usuário
---

Formato: *Como &lt;papel&gt;, quero &lt;ação&gt; para &lt;benefício&gt;*. Cada história está rastreada a um requisito funcional ([matriz de rastreabilidade](../requisitos/rastreabilidade.md)).

| ID | História | Critério de aceitação | RF | Situação |
|---|---|---|---|---|
| US01 | Como visitante, quero criar uma conta para usar a plataforma. | E-mail e username únicos; senha confirmada; resposta 201 | RF01 | ✅ Implementado |
| US02 | Como usuário, quero entrar com minhas credenciais para acessar áreas privadas. | Login retorna `access` e `refresh`; credenciais erradas retornam 401 | RF02 | ✅ Implementado |
| US03 | Como usuário, quero continuar logado sem digitar a senha a toda hora. | Refresh token gera novo access token | RF02 | ✅ Implementado |
| US04 | Como prestador, quero publicar um serviço com preço e local para ser encontrado. | Serviço fica vinculado ao meu usuário e ativo | RF03 | ✅ Implementado |
| US05 | Como prestador, quero editar ou remover apenas os meus serviços. | Outro usuário recebe 403 | RF03 | ✅ Implementado |
| US06 | Como contratante, quero filtrar serviços por categoria, preço e localização. | Só serviços ativos; filtros combináveis | RF05 | 🟡 Parcial (API pronta; tela usa dados simulados) |
| US07 | Como usuário, quero editar meu perfil (telefone, bio, foto). | Alterações salvas; e-mail não editável; senha nunca retornada | RF06 | ✅ Implementado |
| US08 | Como prestador, quero ver meus serviços, inclusive inativos. | `meus=true` lista todos os meus serviços | RF06 | ✅ Implementado |
| US09 | Como administrador, quero aprovar ou suspender prestadores com justificativa. | Mudança de status registrada com motivo | RF04 | ⚪ Previsto |
| US10 | Como contratante, quero solicitar um serviço com data e descrição. | Solicitação criada com status “Aguardando resposta” | RF07 | ⚪ Previsto |
| US11 | Como prestador, quero aceitar, recusar ou negociar uma solicitação. | Status e histórico atualizados; sem conflito de horário | RF08, RF09 | ⚪ Previsto |
| US12 | Como contratante, quero conversar com o prestador sobre a solicitação. | Mensagens visíveis só às partes | RF11 | ⚪ Previsto |
| US13 | Como contratante, quero avaliar o prestador após o serviço concluído. | Uma avaliação por serviço; média recalculada | RF13 | ⚪ Previsto |
| US14 | Como usuário, quero excluir minha conta e meus dados. | Dados pessoais eliminados ou anonimizados | RF15 | ⚪ Previsto |
