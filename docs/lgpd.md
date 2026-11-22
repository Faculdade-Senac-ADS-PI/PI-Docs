---
title: 7. Segurança, ética e privacidade (LGPD)
sidebar_label: 7. LGPD e segurança
---

O ChamaServ trata dados pessoais e observa os princípios e direitos da Lei Geral de Proteção de Dados Pessoais — LGPD (BRASIL, 2018).

## Princípios aplicados

- **Finalidade e necessidade (art. 6º, I e III)** — coleta apenas o necessário ao cadastro, à divulgação de serviços e à contratação.
- **Transparência (art. 6º, VI)** — termos de uso e política de privacidade acessíveis no cadastro e no rodapé.
- **Segurança e prevenção (art. 6º, VII e VIII)** — senhas com hash, tokens com validade curta e HTTPS em produção.
- **Não discriminação (art. 6º, IX)** — a busca não usa dados sensíveis (art. 5º, II) como critério.

## Inventário de dados pessoais

| Dado | Finalidade | Base legal (art. 7º) | Visibilidade | Situação |
|---|---|---|---|---|
| Nome, e-mail, username | Cadastro, autenticação e contato | Execução de contrato (V) | Nome público; e-mail privado | ✅ Implementado |
| Senha | Autenticação | Execução de contrato (V) | Nunca exibida; armazenada com hash | ✅ Implementado |
| Telefone | Contato entre as partes | Execução de contrato (V) | Privado ao titular | ✅ Implementado |
| Endereço / localização | Área de atendimento e busca | Execução de contrato (V) | Apenas cidade/bairro (RN15) | 🟡 Parcial |
| Foto de perfil, bio | Identificação e divulgação do prestador | Consentimento (I) | Pública | ✅ Implementado |
| Data de nascimento | Verificação de maioridade | Execução de contrato (V) | Privada | ✅ Implementado (opcional) |
| CPF / CNPJ e documentos | Verificação de identidade e prevenção a fraudes | Execução de contrato (V) e legítimo interesse (IX) | Restritos à validação (RN12) | ⚪ Previsto |
| Mensagens e avaliações | Execução do serviço e reputação | Execução de contrato (V) | Mensagens: só as partes; avaliações: públicas | ⚪ Previsto |
| Registros de acesso | Segurança e obrigação legal | Obrigação legal (II) | Restritos à equipe | ⚪ Previsto |

## Direitos do titular (art. 18)

| Direito | Como é atendido | Situação |
|---|---|---|
| Confirmação e acesso | `GET /api/v1/auth/profile/` e tela Perfil | ✅ Implementado |
| Correção | `PATCH /api/v1/auth/profile/` e tela Perfil | ✅ Implementado |
| Eliminação e anonimização | Exclusão da conta pelo próprio usuário (RF15); hoje feita pelo administrador | ⚪ Previsto |
| Portabilidade | Exportação do perfil e dos serviços em JSON | ⚪ Previsto |
| Revogação do consentimento | Remoção da foto e da bio pelo próprio usuário | ✅ Implementado |
| Informação sobre compartilhamento | Política de privacidade: sem compartilhamento com terceiros nesta versão | 🟡 Parcial |

## Retenção e eliminação

Os dados ficam armazenados enquanto a conta estiver ativa. Após a solicitação de exclusão, os dados pessoais devem ser eliminados ou anonimizados; avaliações já publicadas podem ser mantidas de forma anonimizada. A regra `ON DELETE CASCADE` já remove os serviços do usuário excluído. Registros de acesso devem ser mantidos por seis meses (Marco Civil da Internet, art. 15 — BRASIL, 2014).

## Medidas de segurança (art. 46)

- senhas com hash PBKDF2 (padrão do Django) e validadores de senha;
- JWT com access token de 60 minutos e refresh de 7 dias, rotacionado a cada uso ([ADR-0004](/adr/registros/0004-autenticacao-jwt-com-simplejwt));
- HTTPS obrigatório em produção, com redirecionamento SSL e HSTS de um ano;
- controle de acesso por token e por propriedade (`EhDonoOuLeitura`), validado por testes (HTTP 401 e 403);
- limitação de taxa (*throttling*) e CORS restrito às origens configuradas em produção;
- verificação contra o OWASP Top 10, em especial quebra de controle de acesso e falhas de autenticação.

## Governança

O **encarregado pelo tratamento de dados** (art. 41) é **Enzo de Oliveira Azevedo**, responsável por receber as solicitações dos titulares e orientar a equipe sobre proteção de dados. Em caso de incidente de segurança com risco relevante, a equipe comunicará a ANPD e os titulares afetados (art. 48). A moderação é transparente: avaliações dependem de serviço concluído, denúncias podem ocultar temporariamente conteúdos abusivos e ações administrativas exigem justificativa registrada.
