import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import dotenv from 'dotenv';

dotenv.config({path: './.env.local'})

const config: Config = {
  title: 'Arbiter',
  tagline: 'Arbiter Framework',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://arbiter-framework.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Arbiter-WRTC', // Usually your GitHub org/user name.
  projectName: 'Arbiter-WRTC', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Arbiter-WRTC/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/arbiter-transparent',
    navbar: {
      title: 'Arbiter',
      logo: {
        alt: 'logo',
        src: 'img/arbiter-transparent.png',
      },
      items: [
        {to: '/case-study', label: 'Case-Study', position: 'right'},
        // {to: '/docs', label: 'Docs', position: 'right'},
        {to: '/#team', label: 'Team', position: 'right'},
        {to: 'https://github.com/Arbiter-WRTC/', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: "Arbiter Logo",
        src: "img/arbiter-transparent.png",
        width: 80,
      },
      links: [
        {
          title: 'Navigation',
          items: [
            {
              label: "Case Study",
              href: "/case-study",
            },
            // {
            //   label: "Documentation",
            //   href: "/docs",
            // },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/Arbiter-WRTC",
            },
            {
              label: "Tech Talk",
              href: "https://placeholder.com",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Arbiter`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
