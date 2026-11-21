---
title: Ferramentas e tecnologias
sidebar_label: Ferramentas e tecnologias
---

Versões efetivamente utilizadas, conforme `package.json` (PI-Frontend) e `requirements.txt` (PI-Backend). As escolhas estão justificadas nos [registros de decisão](/adr).

| Camada / uso | Tecnologia (versão) | Finalidade |
|---|---|---|
| Frontend | React 19.2 e React DOM 19.2; JavaScript (JSX) | Interface SPA |
| Frontend | Vite 8.3 | Servidor de desenvolvimento e build |
| Frontend | Tailwind CSS 3.4; shadcn/ui sobre Radix UI; lucide-react | Estilização, componentes acessíveis e ícones |
| Frontend | React Router 7.18; Axios 1.20; TanStack React Query 5 | Rotas, cliente HTTP com interceptor JWT e cache de requisições |
| Backend | Python 3.14; Django 6.1.1; Django REST Framework 3.18.1 | API REST, ORM e painel administrativo |
| Backend | djangorestframework-simplejwt 5.5.1 | Autenticação JWT (access e refresh) |
| Backend | drf-spectacular 0.30; django-filter 26.1; django-cors-headers 4.9; Pillow 12.3; python-decouple 3.8 | OpenAPI, filtros, CORS, imagens e variáveis de ambiente |
| Banco de dados | SQLite 3 (desenvolvimento); PostgreSQL via psycopg2 2.9 (produção) | Persistência relacional |
| Prototipagem | Figma; Lovable | Wireframes, protótipo interativo e fluxos |
| Gestão e versionamento | Git e GitHub; WhatsApp (grupo da equipe) | Controle de versão; comunicação e acompanhamento das tarefas |
| Documentação e testes | Swagger UI / ReDoc; Insomnia; Django TestCase / APITestCase; PlantUML; Docusaurus | Documentação da API, testes automatizados, diagramas e este site |
| Ambiente | VS Code; oxlint | Desenvolvimento e análise estática do frontend |
| ⚪ Prevista | API de mapas (geolocalização) | Busca por proximidade — ainda não integrada |
