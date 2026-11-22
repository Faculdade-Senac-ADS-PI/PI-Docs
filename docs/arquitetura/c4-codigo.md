---
title: C4 — Código
sidebar_label: C4 — Código
---

Nível mais detalhado: as classes que implementam os componentes. No modelo C4 este nível é representado por diagramas de classes UML.

## Classes implementadas (PI-Backend)

`Usuario` estende o `AbstractUser` do Django; `ServicoViewSet` e `CategoriaViewSet` dependem da permissão `EhDonoOuLeitura` ([ADR-0006](/adr/registros/0006-uuid-como-chave-primaria), [ADR-0011](/adr/registros/0011-exclusao-logica-de-servicos)).

![Classes implementadas](/img/diagramas/uml_01_classes_implementado.png)

## Modelo completo (implementado + previsto)

Classes com o estereótipo «previsto» correspondem às entidades do roadmap (`FUTURAS_INCREMENTACOES.md`) e ao [DER expandido](../modelagem/dados.md).

![Classes do modelo completo](/img/diagramas/uml_02_classes_completo.png)
