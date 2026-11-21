---
title: 4.2 Requisitos não funcionais
sidebar_label: Requisitos não funcionais
---

Cada requisito tem um critério mensurável de verificação, usado na [validação](../validacao/index.md).

**Resumo:** ✅ 3 implementados · 🟡 4 parciais · ⚪ 1 previstos.

| ID | Categoria | Descrição | Critério de verificação | Prioridade | Situação |
|---|---|---|---|---|---|
| RNF01 | Segurança | Utilizar HTTPS/TLS, tokens JWT e armazenamento seguro de senhas | Senhas com hash (PBKDF2 padrão do Django); access token de 60 min; HSTS em produção | Crítica | ✅ Implementado |
| RNF02 | Privacidade | Aplicar minimização de dados e controle de acesso por perfil/propriedade | Senha nunca retornada pela API; edição apenas pelo dono (HTTP 403 para terceiros) | Crítica | 🟡 Parcial |
| RNF03 | Usabilidade | Interface responsiva e compatível com dispositivos móveis | Telas utilizáveis em 390 px de largura; SUS ≥ 68 | Alta | 🟡 Parcial (SUS pendente) |
| RNF04 | Desempenho | Responder às operações comuns em tempo adequado ao uso interativo | Consultas da API com p95 ≤ 500 ms; autenticação ≤ 2 s (medido no servidor) | Alta | ✅ Implementado |
| RNF05 | Disponibilidade | Registrar falhas e permitir recuperação controlada do serviço | Erros da API padronizados; registro em log das requisições com falha | Média | 🟡 Parcial |
| RNF06 | Manutenibilidade | Separar interface SPA, API REST, regras de negócio e persistência | Repositórios independentes; apps Django por domínio | Alta | ✅ Implementado |
| RNF07 | Compatibilidade | Atender navegadores modernos em desktop e dispositivos móveis | Funcionamento nas duas últimas versões de Chrome, Edge e Firefox | Alta | 🟡 Parcial (verificado em Edge e Chrome) |
| RNF08 | Auditabilidade | Manter histórico de status, cancelamentos e ações administrativas | Toda mudança de status com autor, data e motivo | Alta | ⚪ Previsto |
