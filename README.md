# PI-Docs — Documentação do ChamaServ

Site de documentação do Projeto Integrador **ChamaServ** (Faculdade Senac Ceará — ADS), feito com [Docusaurus](https://docusaurus.io/).

- **Documentação**: introdução, metodologia, requisitos, modelagem UML, API, LGPD, validação e resultados.
- **Arquitetura**: diagramas no modelo C4 (contexto, contêineres, componentes e código).
- **Decisões**: registros de decisão de arquitetura no formato MADR 4.0.

## Rodar localmente

```bash
npm install
npm start        # http://localhost:3000
```

## Gerar o site estático

```bash
npm run build    # gera a pasta build/
npm run serve    # serve a pasta build/ localmente
```

## Publicação (GitHub Pages)

O site é publicado em **https://faculdade-senac-ads-pi.github.io/PI-Docs/** pelo workflow `.github/workflows/deploy.yml`, a cada push na branch `main`.

Configuração inicial (uma vez):

1. Criar o repositório `PI-Docs` na organização `Faculdade-Senac-ADS-PI` e enviar este projeto para a branch `main`.
2. No repositório: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Acompanhar a publicação na aba **Actions**.

Para gerar o site em outra raiz (por exemplo, um domínio próprio), use a variável `BASE_URL`:

```bash
BASE_URL=/ npm run build
```

## Estrutura

```text
docs/
  intro.md                 # página inicial
  introducao/ metodologia/ requisitos/ modelagem/ validacao/
  api.md  lgpd.md  prototipo.md  consideracoes-finais.md  referencias.md
  arquitetura/             # modelo C4
  adr/                     # índice, modelo e registros MADR
diagramas/c4/c4.puml       # fonte dos diagramas C4 (PlantUML)
scripts/gerar-adrs.mjs     # gera os ADRs em docs/adr/registros
static/img/                # diagramas, C4 e prints das telas
```

## Atualizar os diagramas C4

```bash
java -jar plantuml.jar -tsvg -charset UTF-8 -o ../../static/img/c4 diagramas/c4/c4.puml
```

## Registrar uma nova decisão (ADR)

Copie `docs/adr/template.md` para `docs/adr/registros/adr-NNNN-titulo.md`, ou acrescente o item em `scripts/gerar-adrs.mjs` e rode `node scripts/gerar-adrs.mjs`.
