// Gera os ADRs em docs/adr/registros no formato MADR 4.0 (traduzido para pt-BR).
// Uso: node scripts/gerar-adrs.mjs
// Para uma nova decisão, copie docs/adr/template.md ou acrescente um item em ADRS e rode o script.
import {mkdirSync, writeFileSync, readdirSync, unlinkSync} from 'node:fs';
import {join, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const raiz = join(dirname(fileURLToPath(import.meta.url)), '..');
const destino = join(raiz, 'docs', 'adr', 'registros');
mkdirSync(destino, {recursive: true});
for (const f of readdirSync(destino)) if (f.startsWith('adr-')) unlinkSync(join(destino, f));

const EQUIPE = 'Enzo de Oliveira Azevedo, Gabriel Caetano Chagas da Silva, Rafael da Silva Amoury, Devid Ribeiro de Sousa';
const STATUS = {accepted: 'Aceita', proposed: 'Proposta', deprecated: 'Obsoleta', superseded: 'Substituída'};

const ADRS = [
  {
    n: '0000', slug: 'usar-madr-para-registrar-decisoes', titulo: 'Usar MADR para registrar decisões de arquitetura',
    status: 'accepted', data: '2026-11-21',
    contexto: 'As decisões técnicas do ChamaServ estavam espalhadas entre conversas da equipe, READMEs e a documentação acadêmica, o que gerou inconsistências (por exemplo, a documentação citava MySQL e TypeScript, que não são usados). É preciso um registro único, versionado junto com a documentação, explicando por que cada escolha foi feita.',
    drivers: ['Rastreabilidade entre decisão, código e documentação', 'Formato simples, em Markdown, que qualquer integrante consiga editar', 'Compatibilidade com o Docusaurus'],
    opcoes: [
      {nome: 'MADR (Markdown Architectural Decision Records)', bons: ['Modelo padronizado com contexto, opções, decisão e consequências', 'Arquivos Markdown versionados no Git e publicados pelo Docusaurus'], ruins: ['Exige disciplina para registrar cada nova decisão']},
      {nome: 'ADR no formato de Michael Nygard', bons: ['Muito curto'], ruins: ['Não registra as opções consideradas nem os prós e contras']},
      {nome: 'Registrar apenas no documento acadêmico', bons: ['Nenhum artefato novo'], ruins: ['Difícil de manter sincronizado com o código', 'Não mostra a evolução das decisões']},
    ],
    escolhida: 'MADR (Markdown Architectural Decision Records)', motivo: 'é o formato mais completo entre os leves, registra as alternativas descartadas e funciona diretamente no Docusaurus.',
    boas: ['Cada escolha técnica passa a ter justificativa consultável', 'Decisões antigas podem ser marcadas como obsoletas ou substituídas sem perder o histórico'],
    ruins: ['Decisões anteriores a 21/11/2026 foram registradas retroativamente, com base no código e no histórico do Git'],
    confirmacao: 'Toda mudança de stack, de contrato da API ou de modelo de dados deve vir acompanhada de um novo arquivo em docs/adr/registros.',
    info: 'Modelo: https://adr.github.io/madr/ (MADR 4.0). Numeração sequencial de quatro dígitos; o modelo vazio está em docs/adr/template.md.',
  },
  {
    n: '0001', slug: 'arquitetura-desacoplada-spa-e-api-rest', titulo: 'Arquitetura desacoplada: SPA + API REST em repositórios separados',
    status: 'accepted', data: '2026-09-14',
    contexto: 'O ChamaServ precisa de uma interface responsiva para celular e computador e de regras de negócio seguras (autenticação, permissões, futuras regras de contratação). A equipe tem integrantes dedicados ao front-end e ao back-end trabalhando em paralelo.',
    drivers: ['Trabalho paralelo entre front-end e back-end', 'Interface responsiva e fluida (RNF03)', 'Separação de camadas (RNF06)', 'Possibilidade futura de aplicativo móvel consumindo a mesma API'],
    opcoes: [
      {nome: 'SPA (React) + API REST (Django) em dois repositórios', bons: ['Equipes independentes, cada uma com seu repositório', 'A mesma API poderá atender um app móvel', 'Contrato explícito documentado em OpenAPI'], ruins: ['Exige alinhar contrato de rotas e payloads (hoje divergente)', 'Configuração de CORS e de dois deploys']},
      {nome: 'Monólito Django com templates', bons: ['Um único deploy', 'Sem CORS'], ruins: ['Interface menos interativa', 'Acoplamento entre telas e regras de negócio']},
      {nome: 'Monorepo com SPA e API', bons: ['Mudanças de contrato num único commit'], ruins: ['A organização no GitHub já previa repositórios separados']},
    ],
    escolhida: 'SPA (React) + API REST (Django) em dois repositórios', motivo: 'permite que front-end e back-end evoluam em paralelo e deixa a API pronta para outros clientes.',
    boas: ['PI-Frontend e PI-Backend versionados e implantados de forma independente', 'Camadas de apresentação, negócio e dados bem separadas'],
    ruins: ['A integração ficou atrasada: o frontend ainda usa rotas e dados simulados diferentes da API (ver análise dos repositórios)'],
    confirmacao: 'O frontend só deve acessar dados via /api/v1; a documentação OpenAPI é o contrato oficial.',
    info: 'Ver C4 — Contêineres e ADR-0007.',
  },
  {
    n: '0002', slug: 'django-e-django-rest-framework-no-backend', titulo: 'Django e Django REST Framework no back-end',
    status: 'accepted', data: '2026-09-14',
    contexto: 'A API precisa de autenticação, ORM relacional, validação de dados, painel administrativo para moderação e documentação, com curva de aprendizado compatível com a equipe.',
    drivers: ['Produtividade com pouca equipe', 'Painel administrativo pronto (UC15)', 'Segurança por padrão (hash de senha, proteção contra injeção SQL)', 'Ecossistema maduro (JWT, filtros, OpenAPI)'],
    opcoes: [
      {nome: 'Django 6 + Django REST Framework', bons: ['ORM, migrações e Django Admin prontos', 'DRF oferece serializers, viewsets, permissões, paginação e throttling', 'Integra com SimpleJWT, django-filter e drf-spectacular'], ruins: ['Mais pesado que microframeworks']},
      {nome: 'Node.js + Express', bons: ['Mesma linguagem do frontend'], ruins: ['Sem admin, ORM e validação integrados; mais código de infraestrutura']},
      {nome: 'FastAPI', bons: ['Alto desempenho e OpenAPI nativo'], ruins: ['Sem painel administrativo; ORM e migrações à parte']},
    ],
    escolhida: 'Django 6 + Django REST Framework', motivo: 'entrega admin, ORM, autenticação e documentação com o menor volume de código próprio.',
    boas: ['Moderação via Django Admin sem desenvolvimento adicional', 'Permissão EhDonoOuLeitura reutilizável', '39 testes com Django TestCase/APITestCase'],
    ruins: ['Hash de senha padrão (PBKDF2) deixa o login em torno de 1,5 s no ambiente medido'],
    confirmacao: 'requirements.txt fixa Django 6.1.1 e djangorestframework 3.18.1.',
    info: 'Ver C4 — Componentes do backend.',
  },
  {
    n: '0003', slug: 'react-vite-e-tailwind-no-frontend', titulo: 'React, Vite, Tailwind CSS e shadcn/ui no front-end',
    status: 'accepted', data: '2026-09-14',
    contexto: 'A interface precisa ser responsiva, acessível, com identidade visual própria e rápida de desenvolver a partir do protótipo feito no Figma/Lovable.',
    drivers: ['Responsividade mobile-first (RNF03)', 'Componentes acessíveis', 'Velocidade de desenvolvimento', 'Aproveitar o protótipo gerado'],
    opcoes: [
      {nome: 'React 19 + Vite + Tailwind CSS + shadcn/ui (Radix)', bons: ['Ecossistema amplo e conhecido pela equipe', 'Vite com build rápido', 'Componentes Radix acessíveis e personalizáveis'], ruins: ['Muitas dependências para manter atualizadas']},
      {nome: 'Vue + Vuetify', bons: ['Curva de aprendizado suave'], ruins: ['Menor familiaridade da equipe']},
      {nome: 'HTML/CSS/JS puro', bons: ['Sem dependências'], ruins: ['Baixa produtividade para uma SPA com rotas protegidas']},
    ],
    escolhida: 'React 19 + Vite + Tailwind CSS + shadcn/ui (Radix)', motivo: 'combina produtividade, acessibilidade e liberdade visual.',
    boas: ['Telas responsivas verificadas em 390 px de largura', 'Componentes reutilizáveis (WorkerCard, CategoryCard)'],
    ruins: ['O projeto usa JavaScript (JSX), não TypeScript; a documentação antiga citava TypeScript por engano', 'Sem testes automatizados no frontend até o momento'],
    confirmacao: 'package.json do PI-Frontend: react 19.2, vite 8.3, tailwindcss 3.4.',
    info: 'Ver C4 — Componentes do frontend.',
  },
  {
    n: '0004', slug: 'autenticacao-jwt-com-simplejwt', titulo: 'Autenticação stateless com JWT (SimpleJWT)',
    status: 'accepted', data: '2026-09-14',
    contexto: 'Com front-end e back-end separados, a API precisa autenticar requisições sem depender de sessão no servidor, protegendo as rotas privadas (RN04).',
    drivers: ['Arquitetura desacoplada (ADR-0001)', 'Segurança (RNF01)', 'Escalabilidade horizontal da API'],
    opcoes: [
      {nome: 'JWT com SimpleJWT (access 60 min + refresh 7 dias com rotação)', bons: ['Stateless; qualquer instância da API valida o token', 'Integração direta com DRF', 'Rotação do refresh reduz o impacto de vazamento'], ruins: ['Token guardado no localStorage fica exposto a XSS', 'Revogação antes do vencimento exige blacklist']},
      {nome: 'Sessão Django com cookie', bons: ['Revogação imediata; cookie HttpOnly'], ruins: ['Exige CSRF e cookies entre domínios diferentes']},
      {nome: 'Token simples do DRF (TokenAuthentication)', bons: ['Implementação mínima'], ruins: ['Token sem expiração']},
    ],
    escolhida: 'JWT com SimpleJWT (access 60 min + refresh 7 dias com rotação)', motivo: 'é o padrão para SPAs que consomem APIs REST e já vem integrado ao DRF.',
    boas: ['Rotas privadas retornam 401 sem token (CT09)', 'Renovação e verificação de token testadas (CT12)'],
    ruins: ['Avaliar no futuro o armazenamento do refresh token em cookie HttpOnly'],
    confirmacao: 'SIMPLE_JWT em config/settings/base.py; testes test_refresh_e_verify_de_token e test_rn04_perfil_sem_token_retorna_401.',
    info: 'RFC 7519. Ver diagrama de sequência de login.',
  },
  {
    n: '0005', slug: 'sqlite-dev-postgresql-producao', titulo: 'SQLite no desenvolvimento e PostgreSQL em produção',
    status: 'accepted', data: '2026-09-14',
    contexto: 'A equipe precisa de um banco simples para desenvolver localmente e de um banco robusto para produção. A documentação anterior citava também MySQL, o que gerava inconsistência.',
    drivers: ['Configuração local sem instalar servidor de banco', 'Robustez e concorrência em produção', 'Consistência entre documentação e código'],
    opcoes: [
      {nome: 'SQLite (dev) + PostgreSQL (produção)', bons: ['Zero configuração local', 'PostgreSQL é o banco mais bem suportado pelo Django'], ruins: ['Diferenças sutis entre os dois bancos podem aparecer só em produção']},
      {nome: 'PostgreSQL em todos os ambientes', bons: ['Paridade total entre ambientes'], ruins: ['Exige Docker ou instalação local para cada integrante']},
      {nome: 'MySQL', bons: ['Conhecido no mercado'], ruins: ['Não é usado no código; manter a citação apenas confundia a documentação']},
    ],
    escolhida: 'SQLite (dev) + PostgreSQL (produção)', motivo: 'é o que está implementado em config/settings e equilibra simplicidade local com robustez em produção.',
    boas: ['MySQL removido de toda a documentação', 'Testes rodam em SQLite em memória'],
    ruins: ['Recomenda-se um teste de carga em PostgreSQL antes da implantação'],
    confirmacao: 'config/settings/development.py usa SQLite por padrão e PostgreSQL quando DB_ENGINE é definido; production.py usa PostgreSQL.',
  },
  {
    n: '0006', slug: 'uuid-como-chave-primaria', titulo: 'UUID como chave primária de usuários e serviços',
    status: 'accepted', data: '2026-09-14',
    contexto: 'Os identificadores de usuários e serviços aparecem em URLs públicas da API (por exemplo, /servicos/{id}/). IDs sequenciais revelam a quantidade de registros e facilitam enumeração.',
    drivers: ['Privacidade e segurança (RNF02, OWASP)', 'Evitar enumeração de recursos', 'Facilitar futura integração entre bases'],
    opcoes: [
      {nome: 'UUID v4 para Usuario e Servico; inteiro para Categoria', bons: ['IDs imprevisíveis nas URLs', 'Categoria, que é pública e pequena, mantém ID simples'], ruins: ['Índices maiores que inteiros', 'URLs mais longas']},
      {nome: 'Inteiros autoincrementais em tudo', bons: ['Simples e compacto'], ruins: ['Permite enumerar usuários e serviços']},
    ],
    escolhida: 'UUID v4 para Usuario e Servico; inteiro para Categoria', motivo: 'protege recursos expostos em URLs sem complicar as categorias.',
    boas: ['O modelo expandido segue o mesmo padrão nas novas entidades'],
    ruins: ['Desempenho de índice um pouco menor, irrelevante no volume atual (consultas com p95 de até 10,3 ms)'],
    confirmacao: 'models.UUIDField(primary_key=True, default=uuid.uuid4) em Usuario e Servico.',
  },
  {
    n: '0007', slug: 'documentacao-openapi-com-drf-spectacular', titulo: 'Documentação da API em OpenAPI com drf-spectacular',
    status: 'accepted', data: '2026-09-14',
    contexto: 'Com repositórios separados (ADR-0001), o contrato da API precisa estar documentado e atualizado para o frontend e para avaliação acadêmica.',
    drivers: ['Contrato sempre sincronizado com o código', 'Teste manual de endpoints', 'Padrão aberto'],
    opcoes: [
      {nome: 'drf-spectacular (OpenAPI 3.0, Swagger UI e ReDoc)', bons: ['Gera o schema a partir das views e serializers', 'Swagger UI permite testar com token'], ruins: ['Exige anotações (extend_schema) para descrições ricas']},
      {nome: 'Documentação manual em Markdown', bons: ['Livre'], ruins: ['Fica desatualizada facilmente']},
      {nome: 'Coleção do Insomnia/Postman', bons: ['Útil para testes'], ruins: ['Não é um contrato formal']},
    ],
    escolhida: 'drf-spectacular (OpenAPI 3.0, Swagger UI e ReDoc)', motivo: 'mantém o contrato gerado a partir do próprio código.',
    boas: ['Documentação em /api/docs/, /api/redoc/ e /api/schema/', 'schema.yml versionado no repositório'],
    ruins: ['O frontend ainda não segue esse contrato (rotas divergentes)'],
    confirmacao: 'Rotas de documentação em config/urls.py.',
  },
  {
    n: '0008', slug: 'pagamento-fora-da-plataforma', titulo: 'Pagamento realizado diretamente entre as partes',
    status: 'accepted', data: '2026-09-14',
    contexto: 'Intermediar pagamentos exige integração com gateway, conformidade regulatória e tratamento de dados financeiros, o que foge ao escopo e ao prazo do Projeto Integrador.',
    drivers: ['Escopo acadêmico e prazo', 'Minimizar dados sensíveis tratados (LGPD)', 'Público com baixa familiaridade digital'],
    opcoes: [
      {nome: 'Pagamento direto entre contratante e prestador (fora da plataforma)', bons: ['Nenhum dado financeiro armazenado', 'Sem custos de gateway'], ruins: ['A plataforma não garante o pagamento', 'Não há receita por transação']},
      {nome: 'Gateway com split de pagamento', bons: ['Segurança para as duas partes e modelo de receita'], ruins: ['Complexidade, custos e exigências regulatórias']},
    ],
    escolhida: 'Pagamento direto entre contratante e prestador (fora da plataforma)', motivo: 'mantém o foco na conexão entre as partes e reduz riscos de dados financeiros.',
    boas: ['Regra RN23; valor estimado apenas informativo na solicitação'],
    ruins: ['Pagamento pela plataforma fica no backlog como Won’t have nesta versão'],
    confirmacao: 'Não existem entidades ou endpoints de pagamento.',
  },
  {
    n: '0009', slug: 'avaliacao-somente-apos-servico-concluido', titulo: 'Avaliação somente após serviço concluído e registrado',
    status: 'accepted', data: '2026-11-21',
    contexto: 'Plataformas similares sofrem com avaliações falsas ou sem vínculo com um serviço real. A reputação é o principal diferencial proposto pelo ChamaServ.',
    drivers: ['Confiabilidade da reputação', 'Moderação transparente', 'Diferencial frente ao benchmarking'],
    opcoes: [
      {nome: 'Avaliação vinculada a uma Solicitacao concluída (uma por serviço)', bons: ['Só quem contratou avalia', 'Média calculada apenas com avaliações válidas'], ruins: ['Depende do fluxo de contratação, ainda não implementado']},
      {nome: 'Avaliação livre no perfil do prestador', bons: ['Simples de implementar'], ruins: ['Permite avaliações falsas e ataques de reputação']},
    ],
    escolhida: 'Avaliação vinculada a uma Solicitacao concluída (uma por serviço)', motivo: 'garante que a reputação reflita serviços realmente prestados.',
    boas: ['Regras RN28 a RN35; Avaliacao.solicitacao_id UNIQUE no DER expandido'],
    ruins: ['Prestadores novos ficam sem nota até concluírem serviços (tratado pela RN16: “novo”, sem nota zero)'],
    confirmacao: 'Casos de teste CT06 e CT07, a executar quando o fluxo for implementado.',
    info: 'Registro retroativo: decisão tomada no levantamento de requisitos e registrada em 21/11/2026.',
  },
  {
    n: '0010', slug: 'nomenclatura-dos-perfis-de-usuario', titulo: 'Unificar a nomenclatura dos perfis de usuário',
    status: 'proposed', data: '2026-11-21',
    contexto: 'Hoje há três nomenclaturas: a documentação usa contratante/prestador, o backend usa tipo_usuario = profissional | empresa e o frontend usa client | worker. Isso impede a integração e confunde a especificação.',
    drivers: ['Integração frontend × backend', 'Clareza das regras de negócio', 'Prestadores podem ser pessoa física ou empresa'],
    opcoes: [
      {nome: 'Papel (contratante | prestador) + tipo de pessoa do prestador (profissional | empresa)', bons: ['Separa “o que faz” de “quem é”', 'Mantém os valores já usados no backend para o prestador'], ruins: ['Exige migração no backend e ajuste no cadastro do frontend']},
      {nome: 'Adotar client | worker do frontend', bons: ['Menos mudança na interface'], ruins: ['Perde a distinção entre profissional e empresa (RN41)']},
      {nome: 'Manter como está', bons: ['Nenhum esforço agora'], ruins: ['Integração continua bloqueada']},
    ],
    escolhida: 'Papel (contratante | prestador) + tipo de pessoa do prestador (profissional | empresa)', motivo: 'é coerente com as regras de negócio e preserva o modelo atual do backend.',
    boas: ['Nomenclatura única em documentação, API e interface'],
    ruins: ['Requer migração de dados e alteração do serializer de cadastro'],
    confirmacao: 'Proposta: deve ser aceita pela equipe antes da integração do frontend.',
  },
  {
    n: '0011', slug: 'exclusao-logica-de-servicos', titulo: 'Exclusão lógica de serviços (campo ativo)',
    status: 'accepted', data: '2026-09-14',
    contexto: 'Prestadores precisam pausar ou retirar anúncios sem perder o histórico, e futuras solicitações e avaliações precisarão referenciar serviços antigos.',
    drivers: ['Preservar histórico e integridade referencial', 'Permitir reativar anúncios', 'Ocultar da busca pública (RN14)'],
    opcoes: [
      {nome: 'Campo booleano ativo; listagem pública só com ativo = true; dono vê todos com meus=true', bons: ['Reativação simples', 'Histórico preservado'], ruins: ['Registros inativos continuam ocupando espaço']},
      {nome: 'Exclusão física (DELETE)', bons: ['Base mais enxuta'], ruins: ['Perde histórico e quebra referências futuras']},
    ],
    escolhida: 'Campo booleano ativo; listagem pública só com ativo = true; dono vê todos com meus=true', motivo: 'atende a busca pública e preserva o histórico.',
    boas: ['Testado em CT03 (inativos ocultos) e CT16 (meus=true)'],
    ruins: ['O DELETE da API ainda remove o registro fisicamente; a exclusão lógica é feita pela edição do campo ativo'],
    confirmacao: 'ServicoViewSet.get_queryset filtra ativo=True; testes test_ct03_listagem_exibe_somente_ativos e test_meus_servicos_inclui_inativos.',
  },
  {
    n: '0012', slug: 'leitura-de-servicos-exige-autenticacao', titulo: 'Acesso do visitante à listagem de serviços',
    status: 'proposed', data: '2026-11-21',
    contexto: 'Hoje GET /api/v1/servicos/ exige JWT (IsAuthenticated), mas o README do backend descreve a listagem como pública e a interface permite buscar sem login. Para atrair contratantes, faz sentido o visitante ver os serviços antes de se cadastrar.',
    drivers: ['Experiência do visitante (conversão em cadastro)', 'Privacidade dos prestadores (RN40)', 'Consistência entre README, API e interface'],
    opcoes: [
      {nome: 'Leitura pública (AllowAny para GET), escrita autenticada', bons: ['Visitante pode buscar antes de se cadastrar', 'Alinha com o README e com a interface'], ruins: ['Exige revisar quais campos do autor ficam públicos']},
      {nome: 'Manter leitura apenas para autenticados', bons: ['Menos exposição de dados'], ruins: ['Reduz o alcance da plataforma; contradiz a interface']},
    ],
    escolhida: 'Leitura pública (AllowAny para GET), escrita autenticada', motivo: 'favorece a conversão de visitantes sem expor dados sensíveis, desde que o serializer público mostre só nome, foto e localização.',
    boas: ['UC04 passa a valer para o visitante'],
    ruins: ['O teste test_listar_servicos_sem_token_retorna_401 precisará ser ajustado'],
    confirmacao: 'Proposta: depende de aprovação da equipe.',
  },
  {
    n: '0013', slug: 'documentacao-com-docusaurus-e-c4', titulo: 'Documentação técnica com Docusaurus e modelo C4',
    status: 'accepted', data: '2026-11-21',
    contexto: 'A documentação estava apenas em um documento acadêmico (Word/PDF), difícil de navegar e de manter junto com o código. A arquitetura não tinha visões em níveis de abstração.',
    drivers: ['Documentação navegável e versionada', 'Visões de arquitetura para públicos diferentes', 'Manter o documento acadêmico em paralelo'],
    opcoes: [
      {nome: 'Docusaurus + modelo C4 (PlantUML) + MADR', bons: ['Site estático publicável no GitHub Pages', 'Diagramas C4 versionados como código'], ruins: ['Mais um projeto para manter']},
      {nome: 'Wiki do GitHub', bons: ['Sem build'], ruins: ['Menos controle de layout e de versionamento']},
      {nome: 'Apenas o documento Word/PDF', bons: ['Formato exigido pela faculdade'], ruins: ['Não é navegável nem versionável']},
    ],
    escolhida: 'Docusaurus + modelo C4 (PlantUML) + MADR', motivo: 'transforma a documentação em um site navegável sem abandonar o documento acadêmico, que continua sendo entregue em Word/PDF.',
    boas: ['Requisitos do site gerados a partir dos mesmos dados do documento Word'],
    ruins: ['Mudanças precisam ser refletidas nos dois formatos'],
    confirmacao: 'npm run build sem links quebrados (onBrokenLinks: throw).',
  },
];

const lista = (xs) => xs.map((x) => `* ${x}`).join('\n');
for (const a of ADRS) {
  const opcoes = a.opcoes.map((o) => `* ${o.nome}`).join('\n');
  const proscontras = a.opcoes.map((o) => `### ${o.nome}\n\n${[...(o.bons || []).map((b) => `* Bom, porque ${b.charAt(0).toLowerCase() + b.slice(1)}`), ...(o.neutros || []).map((b) => `* Neutro, porque ${b.charAt(0).toLowerCase() + b.slice(1)}`), ...(o.ruins || []).map((b) => `* Ruim, porque ${b.charAt(0).toLowerCase() + b.slice(1)}`)].join('\n')}`).join('\n\n');
  const md = `---
title: "ADR-${a.n}: ${a.titulo}"
sidebar_label: "${a.n} — ${a.titulo}"
sidebar_position: ${Number(a.n) + 1}
slug: /adr/registros/${a.n}-${a.slug}
status: ${a.status}
date: ${a.data}
decision-makers: ${EQUIPE}
---

| Status | Data | Responsáveis |
|---|---|---|
| **${STATUS[a.status]}** | ${a.data.split('-').reverse().join('/')} | Equipe ChamaServ |

## Contexto e problema

${a.contexto}

## Fatores de decisão

${lista(a.drivers)}

## Opções consideradas

${opcoes}

## Resultado da decisão

Opção escolhida: **"${a.escolhida}"**, porque ${a.motivo}

### Consequências

${[...a.boas.map((b) => `* Bom, porque ${b.charAt(0).toLowerCase() + b.slice(1)}`), ...a.ruins.map((b) => `* Ruim, porque ${b.charAt(0).toLowerCase() + b.slice(1)}`)].join('\n')}

### Confirmação

${a.confirmacao}

## Prós e contras das opções

${proscontras}
${a.info ? `\n## Mais informações\n\n${a.info}\n` : ''}`;
  writeFileSync(join(destino, `adr-${a.n}-${a.slug}.md`), md.replace(/[{}<>]/g, (c) => ({'{': '&#123;', '}': '&#125;', '<': '&lt;', '>': '&gt;'})[c]).replace(/^---\n[\s\S]*?\n---/, (fm) => fm.replace(/&#123;|&#125;|&lt;|&gt;/g, (e) => ({'&#123;': '{', '&#125;': '}', '&lt;': '<', '&gt;': '>'})[e])));
}

// Índice
const linhas = ADRS.map((a) => `| [ADR-${a.n}](/adr/registros/${a.n}-${a.slug}) | ${a.titulo} | ${STATUS[a.status]} | ${a.data.split('-').reverse().join('/')} |`).join('\n');
writeFileSync(join(raiz, 'docs', 'adr', 'index.md'), `---
title: Registros de decisão de arquitetura (ADR)
sidebar_label: Visão geral
slug: /adr
---

As decisões de arquitetura do ChamaServ são registradas no formato **MADR 4.0** (*Markdown Architectural Decision Records*), traduzido para o português. Cada registro descreve o contexto, os fatores de decisão, as opções consideradas, a escolha feita e suas consequências ([ADR-0000](/adr/registros/0000-usar-madr-para-registrar-decisoes)).

| ADR | Decisão | Status | Data |
|---|---|---|---|
${linhas}

## Status possíveis

| Status | Significado |
|---|---|
| Proposta | Em discussão pela equipe; ainda não vale |
| Aceita | Em vigor |
| Obsoleta | Não se aplica mais |
| Substituída | Trocada por outro ADR (indicado no texto) |

:::info Registros retroativos
Decisões com data de 14/09/2026 correspondem ao commit inicial dos repositórios e foram registradas retroativamente em 21/11/2026, com base no código.
:::

## Como registrar uma nova decisão

1. Copie [o modelo](./template.md) para \`docs/adr/registros/adr-NNNN-titulo-curto.md\`, usando o próximo número.
2. Preencha as seções e defina o status como \`proposed\`.
3. Depois de aprovada pela equipe, mude para \`accepted\`. Se ela substituir outra, marque a antiga como \`superseded\`.
`);
console.log('ADRs gerados:', ADRS.length);
