import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ORBIT UNSURYA',
  tagline: 'Panduan Penggunaan Sistem Manajemen Penelitian dan Pengabdian Masyarakat',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://halimtuhu.github.io',
  baseUrl: '/orbit-unsurya-docs/',

  organizationName: 'halimtuhu',
  projectName: 'orbit-unsurya-docs',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'id',
    locales: ['id'],
    localeConfigs: {
      id: {
        label: 'Bahasa Indonesia',
        htmlLang: 'id',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/halimtuhu/orbit-unsurya-docs/edit/main/',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/orbit-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'ORBIT UNSURYA',
      logo: {
        alt: 'ORBIT UNSURYA Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Panduan',
        },
        {
          href: 'https://github.com/halimtuhu/orbit-unsurya-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Panduan',
          items: [
            {label: 'Getting Started', to: '/getting-started/tentang-orbit'},
            {label: 'Panduan Admin', to: '/admin/user-management'},
            {label: 'Panduan Dosen', to: '/dosen/membuat-proposal'},
            {label: 'Panduan Reviewer', to: '/reviewer/assigned-proposals'},
          ],
        },
        {
          title: 'Universitas Dirgantara Marsekal Suryadarma',
          items: [
            {
              label: 'Website UNSURYA',
              href: 'https://unsurya.ac.id',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Universitas Dirgantara Marsekal Suryadarma`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
