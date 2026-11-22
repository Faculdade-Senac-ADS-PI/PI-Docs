---
title: C3 — Componentes da aplicação web (PI-Frontend)
sidebar_label: C3 — Componentes (frontend)
---

Organização interna da SPA ([ADR-0003](/adr/registros/0003-react-vite-e-tailwind-no-frontend)).

![C3 — Componentes do frontend](/img/c4/c3-componentes-frontend.svg)

| Componente | Arquivos principais | Responsabilidade | Situação |
|---|---|---|---|
| Roteador | `src/App.jsx` | Rotas `/`, `/login`, `/cadastro`, `/buscar`, `/profissional/:id`, `/perfil`, `/dashboard` | ✅ |
| Páginas | `src/pages/*.jsx` | Home, Login, Register, SearchWorkers, WorkerDetail, Profile, Dashboard | ✅ |
| Componentes | `src/components/layout`, `shared`, `ui` | Navbar, Footer, WorkerCard, CategoryCard e componentes shadcn/Radix | ✅ |
| Sessão | `src/contexts/AuthContext.jsx` | Login, cadastro, logout e proteção de rotas | ✅ |
| Cliente HTTP | `src/api/client.js` | Axios com interceptor Bearer JWT | 🟡 Rotas a alinhar com `/api/v1` |
| Cache de dados | `src/hooks/useWorkers.js` | TanStack React Query | 🟡 Pronto, ainda não usado |
| Dados simulados | `src/assets/data/mockData.js` | Fonte temporária de Home, Busca e Detalhe | 🟡 Temporário |
