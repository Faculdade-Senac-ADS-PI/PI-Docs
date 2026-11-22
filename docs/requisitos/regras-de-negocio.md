---
title: 4.3 Regras de negócio
sidebar_label: Regras de negócio
---

**Resumo:** ✅ 5 implementados · 🟡 9 parciais · ⚪ 27 previstos.

| ID | Grupo | Regra | Situação |
|---|---|---|---|
| RN01 | Cadastro | Informar nome, e-mail, CPF/CNPJ, telefone e senha. | 🟡 Parcial — sem CPF/CNPJ |
| RN02 | Cadastro | CPF, CNPJ, username e e-mail devem ser únicos. | 🟡 Parcial — e-mail e username únicos (testado) |
| RN03 | Cadastro | Escolher perfil de contratante ou prestador (profissional/empresa). | 🟡 Parcial — apenas profissional/empresa |
| RN04 | Acesso | Funcionalidades privadas exigem autenticação JWT válida. | ✅ Implementado (testado) |
| RN05 | Privacidade | Aceitar termos de uso e política de privacidade. | ⚪ Previsto — links na interface, sem registro do aceite |
| RN06 | Segurança | A senha deve ser protegida por hash e nunca exibida. | ✅ Implementado (testado) |
| RN07 | Prestador | Informar categorias, descrição, área de atendimento e disponibilidade. | 🟡 Parcial — sem disponibilidade |
| RN08 | Prestador | Permitir fotos de trabalhos no portfólio e foto de perfil. | 🟡 Parcial — apenas foto de perfil |
| RN09 | Prestador | Usar os estados Pendente, Em análise, Aprovado, Rejeitado, Suspenso ou Inativo. | ⚪ Previsto |
| RN10 | Prestador | Somente prestador aprovado e ativo aparece na busca e recebe solicitações. | ⚪ Previsto |
| RN11 | Prestador | A rejeição deve conter justificativa e permitir correção. | ⚪ Previsto |
| RN12 | Privacidade | Documentos do prestador são restritos à validação. | ⚪ Previsto |
| RN13 | Busca | Buscar serviços/prestadores por categoria, faixa de preço e localização. | ✅ Implementado (testado) |
| RN14 | Busca | Exibir somente prestadores/serviços aprovados e ativos na listagem pública. | 🟡 Parcial — serviços inativos ocultos (testado) |
| RN15 | Busca | Usar área de atendimento sem divulgar endereço residencial completo. | 🟡 Parcial — campo livre de localização |
| RN16 | Reputação | Prestador sem avaliação deve ser identificado como novo, sem nota zero. | ⚪ Previsto |
| RN17 | Solicitação | Informar categoria, descrição, região e data desejada. | ⚪ Previsto |
| RN18 | Solicitação | Permitir fotografias e informações complementares. | ⚪ Previsto |
| RN19 | Negociação | O prestador pode aceitar, recusar ou negociar. | ⚪ Previsto |
| RN20 | Agenda | Confirmar somente após acordo de data, horário e valor estimado. | ⚪ Previsto |
| RN21 | Agenda | Impedir serviços confirmados em horários conflitantes. | ⚪ Previsto |
| RN22 | Histórico | Registrar alterações relevantes de data, horário e valor. | ⚪ Previsto |
| RN23 | Pagamento | O pagamento é realizado diretamente entre as partes nesta versão. | ✅ Implementado (fora do escopo do sistema) |
| RN24 | Status | Usar Aguardando resposta, Em negociação, Confirmada, Em andamento, Concluída, Recusada ou Cancelada. | ⚪ Previsto |
| RN25 | Cancelamento | O contratante pode cancelar antes da conclusão e deve justificar após a confirmação. | ⚪ Previsto |
| RN26 | Cancelamento | O prestador pode cancelar serviço confirmado mediante justificativa. | ⚪ Previsto |
| RN27 | Histórico | Manter cancelamentos e mudanças de status no histórico. | ⚪ Previsto |
| RN28 | Conclusão | Liberar a avaliação somente após o registro da conclusão. | ⚪ Previsto |
| RN29 | Avaliação | Somente o contratante do serviço concluído pode avaliar. | ⚪ Previsto |
| RN30 | Avaliação | Permitir uma avaliação por serviço. | ⚪ Previsto |
| RN31 | Avaliação | Compor a avaliação por nota e comentário opcional. | ⚪ Previsto |
| RN32 | Reputação | Calcular a média apenas com avaliações válidas de serviços concluídos. | ⚪ Previsto |
| RN33 | Avaliação | O prestador pode responder, mas não alterar ou excluir a avaliação. | ⚪ Previsto |
| RN34 | Moderação | Avaliação denunciada pode ser ocultada até análise. | ⚪ Previsto |
| RN35 | Avaliação | Serviço recusado ou cancelado não gera avaliação de qualidade. | ⚪ Previsto |
| RN36 | Administração | Registrar o motivo ao aprovar, rejeitar, suspender ou reativar prestador. | ⚪ Previsto |
| RN37 | Administração | O administrador mantém as categorias de serviço. | ✅ Implementado — via Django Admin; API somente leitura (testado) |
| RN38 | Suspensão | Usuário suspenso não cria nem aceita novas solicitações. | ⚪ Previsto |
| RN39 | Privacidade | Coletar apenas dados necessários e permitir solicitação de exclusão. | 🟡 Parcial — exclusão pelo titular prevista |
| RN40 | Privacidade | Não exibir publicamente dados sensíveis, documentos ou endereços completos. | 🟡 Parcial |
| RN41 | Prestador | O CNPJ, único, é obrigatório para aprovar prestador do tipo empresa e não é exibido na busca pública. | ⚪ Previsto |
