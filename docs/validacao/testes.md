---
title: Casos de teste e resultados
sidebar_label: Casos de teste
---

## Casos de teste

| ID | Cenário | Resultado esperado | Resultado obtido | Status | Evidência (teste automatizado) |
|---|---|---|---|---|---|
| CT01 | Cadastrar usuário com dados válidos | Conta criada e tokens JWT no login | 201 no cadastro; login retornou access e refresh | ✅ Aprovado | `test_ct01_cadastro_valido_e_login_retorna_tokens` |
| CT02 | Cadastrar e-mail ou username já existente | Rejeitado com mensagem | 400 com mensagem no campo | ✅ Aprovado | `test_ct02_email_duplicado_rejeitado`, `test_ct02_username_duplicado_rejeitado` |
| CT03 | Buscar por categoria, preço e região | Só registros ativos e elegíveis | Inativos ocultos; filtros corretos | ✅ Aprovado | `test_ct03_*` (4 testes) |
| CT04 | Editar ou excluir serviço de outro usuário | Bloqueio (HTTP 403) | 403 em PATCH e DELETE; serviço preservado | ✅ Aprovado | `test_ct04_*` (2 testes) |
| CT05 | Confirmar horário já ocupado | Confirmação bloqueada | — | ⚪ Não executado (previsto) | — |
| CT06 | Avaliar solicitação cancelada ou recusada | Avaliação não liberada | — | ⚪ Não executado (previsto) | — |
| CT07 | Avaliação única após conclusão | Segunda avaliação bloqueada | — | ⚪ Não executado (previsto) | — |
| CT08 | Suspender usuário ou excluir conta | Acesso e solicitações bloqueados | — | ⚪ Não executado (previsto) | — |
| CT09 | Acessar rota privada sem token | HTTP 401 | 401 em `/auth/profile/` e `/servicos/` | ✅ Aprovado | `test_rn04_perfil_sem_token_retorna_401`, `test_listar_servicos_sem_token_retorna_401` |
| CT10 | Armazenamento da senha | Gravada com hash | Diferente do texto puro; `check_password` válido | ✅ Aprovado | `test_rn06_senha_armazenada_com_hash` |
| CT11 | Login com senha incorreta | HTTP 401 | 401 | ✅ Aprovado | `test_login_com_senha_errada_retorna_401` |
| CT12 | Renovar e verificar token | 200 e novo access | 200 em verify e refresh | ✅ Aprovado | `test_refresh_e_verify_de_token` |
| CT13 | Alterar senha | Exige a senha atual | 400 com senha errada; 200 com a correta | ✅ Aprovado | `test_alterar_senha_exige_senha_atual` |
| CT14 | Publicar serviço | Vinculado ao usuário logado | 201; dono = usuário autenticado | ✅ Aprovado | `test_publicar_servico_vincula_ao_usuario_logado` |
| CT15 | Preço negativo | HTTP 400 | 400 | ✅ Aprovado | `test_preco_negativo_rejeitado` |
| CT16 | Listar meus serviços | Inclui inativos do dono | Inativo listado com `meus=true` | ✅ Aprovado | `test_meus_servicos_inclui_inativos` |
| CT17 | Consultar e alterar categorias | Leitura pública; escrita bloqueada | 200 sem token; POST bloqueado | ✅ Aprovado | `test_categorias_sao_publicas`, `test_categorias_sao_somente_leitura` |
| CT18 | Alterar e-mail pelo perfil | E-mail não muda | Preservado | ✅ Aprovado | `test_email_do_perfil_e_somente_leitura` |

## Resultado da execução

Executado em 21/11/2026 no PI-Backend (Python 3.14.3, Django 6.1.1, SQLite em memória, Windows 11):

```bash
python manage.py test apps
```

| Suíte | Tipo | Testes | Aprovados | Falhas |
|---|---|---|---|---|
| `apps.usuarios.tests.test_models` | Unitário (modelo) | 6 | 6 | 0 |
| `apps.servicos.tests.test_models` | Unitário (modelo) | 8 | 8 | 0 |
| `apps.usuarios.tests.test_api` | Integração (API) | 11 | 11 | 0 |
| `apps.servicos.tests.test_api` | Integração (API) | 14 | 14 | 0 |
| **Total** | | **39** | **39 (100%)** | **0** |

```text
Ran 39 tests in 100.366s

OK
```

O tempo total vem principalmente do hash das senhas (PBKDF2) calculado a cada criação de usuário e login — custo intencional de segurança. O PI-Frontend ainda não tem testes automatizados; suas telas foram verificadas visualmente.
