---
title: C1 — Contexto do sistema
sidebar_label: C1 — Contexto
---

Visão mais ampla: o ChamaServ como uma caixa única, seus usuários e os sistemas externos com que se integra.

![C1 — Contexto](/img/c4/c1-contexto.svg)

| Elemento | Tipo | Descrição |
|---|---|---|
| Contratante | Pessoa | Procura e contrata serviços em Fortaleza-CE |
| Prestador | Pessoa | Profissional autônomo ou empresa que divulga serviços |
| Administrador | Pessoa | Equipe que modera usuários, serviços e categorias |
| ChamaServ | Sistema | Busca e publicação de serviços; contratação e avaliação (⚪ previstas) |
| Serviço de e-mail | Sistema externo (⚪ previsto) | Notificações e recuperação de senha |
| API de mapas | Sistema externo (⚪ previsto) | Geolocalização para busca por proximidade |

Na versão atual o ChamaServ **não depende de nenhum sistema externo** em tempo de execução. Pagamentos ficam fora da plataforma ([ADR-0008](/adr/registros/0008-pagamento-fora-da-plataforma)).
