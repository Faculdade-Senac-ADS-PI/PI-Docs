---
title: Modelo de dados
sidebar_label: Modelo de dados
---

## MER conceitual

Entidades implementadas na API:

- **USUÁRIO** — pessoa ou empresa que acessa a plataforma: id (PK, UUID), e-mail (único), nome/sobrenome, senha, tipo_usuario (profissional \| empresa), telefone, bio, endereço, foto_perfil, data_nascimento e date_joined.
- **SERVIÇO** — oferta publicada por um usuário: id (PK, UUID), título, descrição, preço, tipo_preco (fixo \| a_combinar), localização, ativo, criado_em e atualizado_em.
- **CATEGORIA** — área de atuação: id (PK), nome (único), descrição e ícone.

Relacionamentos: um USUÁRIO publica vários SERVIÇOS (1:N); uma CATEGORIA classifica vários SERVIÇOS (1:N).

![MER conceitual](/img/diagramas/orig_mer.png)

<div className="legenda">Modelo Entidade-Relacionamento conceitual (domínio implementado).</div>

## DER físico (implementado)

Tabelas geradas pelo Django ORM. Regras de integridade:

- **ON DELETE CASCADE** em `servicos_servico.usuario_id` — ao excluir um usuário, seus serviços são excluídos.
- **ON DELETE PROTECT** em `servicos_servico.categoria_id` — impede excluir categoria com serviços vinculados.
- **Unicidade** — `email` e `username` em `usuarios_usuario`; `nome` em `servicos_categoria`.
- **Validação** — `preco` opcional (NULL) e maior ou igual a zero; `tipo_preco` é `fixo` ou `a_combinar`.
- **Exclusão lógica** — serviços com `ativo = false` somem da listagem, mas continuam visíveis ao dono (`meus=true`). Ver [ADR-0011](/adr/registros/0011-exclusao-logica-de-servicos).

![DER físico](/img/diagramas/orig_der_fisico.png)

<div className="legenda">DER físico das tabelas implementadas.</div>

## DER do modelo expandido

Para suportar contratação, agenda, histórico e moderação, o modelo expandido acrescenta as entidades em branco (previstas). Usa os mesmos padrões do implementado — chaves UUID e PostgreSQL/SQLite — para ser migrado sem retrabalho ([ADR-0005](/adr/registros/0005-sqlite-dev-postgresql-producao), [ADR-0006](/adr/registros/0006-uuid-como-chave-primaria)).

![DER expandido](/img/diagramas/uml_07_der_expandido.png)

<div className="legenda">DER do modelo expandido (tabelas implementadas e previstas).</div>

## Dicionário de entidades

| Entidade | Atributos principais | Situação |
|---|---|---|
| Usuario (`usuarios_usuario`) | id UUID, username, email, first_name, last_name, password (hash), tipo_usuario, telefone, bio, endereco, foto_perfil, data_nascimento, is_active, date_joined; aceite_termos_em (previsto) | ✅ Implementado |
| Categoria (`servicos_categoria`) | id, nome UNIQUE, descricao, icone | ✅ Implementado |
| Servico (`servicos_servico`) | id UUID, usuario_id FK, categoria_id FK, titulo, descricao, preco, tipo_preco, localizacao, ativo, criado_em, atualizado_em | ✅ Implementado |
| Prestador | usuario_id PK/FK, cpf_cnpj UNIQUE, area_atendimento, disponibilidade, status_validacao, justificativa, atualizado_em | ⚪ Previsto |
| PrestadorCategoria | prestador_id PK/FK, categoria_id PK/FK | ⚪ Previsto |
| PortfolioFoto | id, prestador_id FK, url, legenda, criado_em | ⚪ Previsto |
| Solicitacao | id, contratante_id FK, prestador_id FK, categoria_id FK, descricao, regiao, data_desejada, horario, valor_estimado, status, criado_em, atualizado_em | ⚪ Previsto |
| SolicitacaoAnexo | id, solicitacao_id FK, url, tipo, criado_em | ⚪ Previsto |
| HistoricoStatus | id, solicitacao_id FK, ator_id FK, status_anterior, status_novo, motivo, data_hora | ⚪ Previsto |
| Mensagem | id, solicitacao_id FK, remetente_id FK, conteudo, data_hora | ⚪ Previsto |
| Avaliacao | id, solicitacao_id FK UNIQUE, nota (1 a 5), comentario, resposta, status, criado_em | ⚪ Previsto |
| Denuncia | id, avaliacao_id FK, denunciante_id FK, motivo, status, criado_em | ⚪ Previsto |
