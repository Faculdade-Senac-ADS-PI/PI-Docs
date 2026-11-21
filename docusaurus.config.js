// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ChamaServ',
  tagline: 'Documentação do Projeto Integrador — plataforma de serviços autônomos',
  favicon: 'img/logo.svg',

  future: {
    v4: true,
  },

  // Publicação no GitHub Pages: https://faculdade-senac-ads-pi.github.io/PI-Docs/
  // Para rodar em outra raiz, defina a variável BASE_URL (ex.: BASE_URL=/ npm run build).
  url: 'https://faculdade-senac-ads-pi.github.io',
  baseUrl: process.env.BASE_URL || '/PI-Docs/',
  organizationName: 'Faculdade-Senac-ADS-PI',
  projectName: 'PI-Docs',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'ChamaServ',
        logo: {
          alt: 'Logo do ChamaServ',
          src: 'img/logo.svg',
        },
        items: [
          {type: 'docSidebar', sidebarId: 'documentacao', position: 'left', label: 'Documentação'},
          {type: 'docSidebar', sidebarId: 'arquitetura', position: 'left', label: 'Arquitetura (C4)'},
          {type: 'docSidebar', sidebarId: 'decisoes', position: 'left', label: 'Decisões (ADR)'},
          {href: 'https://github.com/Faculdade-Senac-ADS-PI/PI-Frontend', label: 'Frontend', position: 'right'},
          {href: 'https://github.com/Faculdade-Senac-ADS-PI/PI-Backend', label: 'Backend', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentação',
            items: [
              {label: 'Visão geral', to: '/'},
              {label: 'Requisitos', to: '/requisitos/funcionais'},
              {label: 'Validação e testes', to: '/validacao/testes'},
            ],
          },
          {
            title: 'Arquitetura',
            items: [
              {label: 'Modelo C4', to: '/arquitetura'},
              {label: 'Registros de decisão (MADR)', to: '/adr'},
              {label: 'API REST', to: '/api'},
            ],
          },
          {
            title: 'Repositórios',
            items: [
              {label: 'PI-Frontend', href: 'https://github.com/Faculdade-Senac-ADS-PI/PI-Frontend'},
              {label: 'PI-Backend', href: 'https://github.com/Faculdade-Senac-ADS-PI/PI-Backend'},
            ],
          },
        ],
        copyright: `ChamaServ — Projeto Integrador · Faculdade Senac Ceará · ADS · ${new Date().getFullYear()}`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'json', 'python'],
      },
    }),
};

export default config;
