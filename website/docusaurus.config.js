const path = require('node:path');

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: 'Research Wiki',
  tagline: 'Questions, evidence, and connected understanding.',
  url: process.env.SITE_URL || 'https://example.com',
  baseUrl: process.env.SITE_BASE_URL || '/',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  onDuplicateRoutes: 'throw',
  markdown: {
    format: 'md',
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        pages: false,
        theme: {
          customCss: path.resolve(__dirname, 'src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve('./plugins/wiki-docs'),
      {
        path: '..',
        routeBasePath: '/',
        sidebarPath: require.resolve('./sidebars.js'),
        include: [
          '*.md',
          'topics/**/*.md',
          'methods/**/*.md',
          'findings/**/*.md',
          'templates/**/*.md',
          'raw/INDEX.md',
          '.agents/skills/**/SKILL.md',
        ],
        exclude: [],
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Research Wiki',
      items: [
        {type: 'doc', docId: 'topics/INDEX', label: 'Topics', position: 'left'},
        {type: 'doc', docId: 'methods/INDEX', label: 'Methods', position: 'left'},
        {type: 'doc', docId: 'findings/INDEX', label: 'Findings', position: 'left'},
        {type: 'doc', docId: 'RESEARCH-QUEUE', label: 'Research queue', position: 'right'},
      ],
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Explore',
          items: [
            {label: 'Wiki index', to: '/'},
            {label: 'Research queue', to: '/RESEARCH-QUEUE/'},
          ],
        },
        {
          title: 'Contribute',
          items: [
            {label: 'Getting started', to: '/getting-started/'},
            {label: 'Research standards', to: '/AGENTS/'},
            {label: 'Source ledger', to: '/raw/'},
          ],
        },
      ],
      copyright: 'Research Wiki · Follow the evidence. Keep the context.',
    },
  },
};
