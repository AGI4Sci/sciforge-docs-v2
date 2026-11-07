import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'SciForge',
  tagline: 'From research questions to reviewable evidence',
  favicon: 'img/brand/sciforge-icon.svg',

  future: {
    v4: true,
  },

  url: 'https://agi4sci.github.io',
  baseUrl: '/sciforge-docs-v2/',
  organizationName: 'AGI4Sci',
  projectName: 'sciforge-docs-v2',
  trailingSlash: false,
  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
    localeConfigs: {
      'zh-Hans': {
        label: '简体中文',
        htmlLang: 'zh-CN',
      },
      en: {
        label: 'English',
        htmlLang: 'en',
        direction: 'ltr',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/AGI4Sci/sciforge-docs-v2/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docs/quickstart/quickstart-first-task.jpg',
    metadata: [
      {
        name: 'keywords',
        content:
          'SciForge, research agent, Codex, Claude Code, virtual cell, reproducible research, 科研智能体',
      },
    ],
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'SciForge / 使用手册',
      logo: {
        alt: 'SciForge',
        src: 'img/brand/sciforge-icon.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: '使用文档',
        },
        {
          to: '/docs/cases/overview',
          label: '案例教程',
          position: 'left',
        },
        {
          to: '/docs/features/overview',
          label: '功能手册',
          position: 'left',
        },
        {
          to: '/guide',
          label: '视频导览',
          position: 'left',
        },
        {type: 'custom-docSearch', position: 'right'},
        {type: 'localeDropdown', position: 'right'},
        {
          href: 'https://github.com/AGI4Sci/SciForge',
          label: '客户端源码',
          position: 'right',
        },
        {
          href: 'https://github.com/AGI4Sci/sciforge-docs-v2',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '开始使用',
          items: [
            {label: '五分钟快速开始', to: '/docs/getting-started/five-minute-quickstart'},
            {label: 'Runtime 与模型', to: '/docs/getting-started/runtime-and-models'},
            {label: '只读沙箱', to: '/docs/getting-started/read-only-sandbox'},
          ],
        },
        {
          title: '科研案例',
          items: [
            {label: '虚拟细胞证据图', to: '/docs/cases/virtual-cell-evidence-atlas'},
            {label: '扰动预测评测', to: '/docs/cases/virtual-cell-benchmark'},
          ],
        },
        {
          title: '更多',
          items: [
            {label: '功能状态', to: '/docs/reference/feature-status'},
            {label: '故障排查', to: '/docs/reference/troubleshooting'},
            {label: '客户端源码', href: 'https://github.com/AGI4Sci/SciForge'},
            {label: 'GitHub', href: 'https://github.com/AGI4Sci/sciforge-docs-v2'},
          ],
        },
      ],
      copyright: 'Copyright © SciForge Documentation.',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'python'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
