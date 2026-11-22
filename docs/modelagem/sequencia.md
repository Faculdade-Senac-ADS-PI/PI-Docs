---
title: Diagramas de sequência
sidebar_label: Diagramas de sequência
---

## Login JWT e acesso a rota protegida

Troca de mensagens entre a interface, o cliente HTTP e a API durante o login, o acesso ao perfil e a renovação do token ([ADR-0004](/adr/registros/0004-autenticacao-jwt-com-simplejwt)).

![Sequência — login JWT](/img/diagramas/uml_05_sequencia_login.png)

<div className="legenda">Diagrama de sequência — login JWT e acesso a rota protegida.</div>

## Publicar e editar serviço

Mostra a verificação de propriedade feita pela permissão `EhDonoOuLeitura` (HTTP 403 para quem não é o dono).

![Sequência — publicar e editar serviço](/img/diagramas/uml_06_sequencia_servico.png)

<div className="legenda">Diagrama de sequência — publicar e editar serviço.</div>
