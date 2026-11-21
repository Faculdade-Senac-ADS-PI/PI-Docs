---
title: 10. Considerações finais
sidebar_label: 10. Considerações finais
---

O ChamaServ apresenta uma solução tecnicamente viável e socialmente relevante para aproximar contratantes, profissionais autônomos e empresas em Fortaleza-CE. Retomando os objetivos específicos:

| Objetivo | Resultado |
|---|---|
| 1. Facilitar divulgação, busca e contratação | 🟡 **Atingido parcialmente.** A API permite publicar serviços e buscá-los por categoria, preço, localização e texto; a contratação com solicitação e agenda está especificada e modelada, mas não implementada. |
| 2. Ampliar a visibilidade com interface responsiva | ✅ **Atingido na interface**, que funciona em desktop e em telas de 390 px; busca por proximidade fica como trabalho futuro. |
| 3. Segurança, tokens e LGPD | ✅ **Atingido no núcleo:** JWT, hash de senhas, controle de acesso por propriedade e HTTPS em produção implementados e testados; eliminação e portabilidade dependem de funcionalidades previstas. |
| 4. Validar funcionalidades e usabilidade | 🟡 **Atingido para o implementado** (39 testes aprovados e desempenho medido); a SUS ainda será aplicada com usuários reais. |

A formalização da arquitetura em camadas, das regras de domínio, das decisões técnicas (MADR) e da modelagem de dados assegura rastreabilidade, segurança via JWT, conformidade com a LGPD e integridade referencial.

## Trabalhos futuros

- integração completa entre PI-Frontend e PI-Backend;
- entidades de prestador, contratação e avaliação na API;
- testes automatizados no frontend;
- aplicação formal da SUS com usuários reais;
- geolocalização e expansão regional.
