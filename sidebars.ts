import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: '快速开始',
      link: {type: 'generated-index', slug: '/category/getting-started'},
      items: [
        'getting-started/five-minute-quickstart',
        'getting-started/runtime-and-models',
        'getting-started/read-only-sandbox',
      ],
    },
    {
      type: 'category',
      label: '工作台指南',
      items: [
        'workbench/workspaces-and-sessions',
        'workbench/agent-workflows',
        'workbench/tools',
      ],
    },
    {
      type: 'category',
      label: '功能与扩展',
      link: {type: 'doc', id: 'features/overview'},
      items: [
        {
          type: 'category',
          label: '科研分析',
          link: {type: 'generated-index', slug: '/category/research-sources', description: '查看科学文件、组织生物学对象，并分析数据。'},
          items: [
            'features/life-science-preview',
            'features/biology-room',
          ],
        },
        {
          type: 'category',
          label: '分析与审阅',
          link: {type: 'generated-index', slug: '/category/analysis-and-review', description: '从数据绘图，并为文字和资源添加批注。'},
          items: [
            'features/scientific-plotting',
            'features/anchored-comments',
          ],
        },
        {
          type: 'category',
          label: '证据与可复现',
          link: {type: 'doc', id: 'features/evidence-and-reproducibility'},
          items: [
            'features/artifact-versions',
            'features/git-checkpoints',
            'features/research-checkpoints',
            'features/change-inspector',
            'features/evidence-dag',
            'features/project-dag',
            'features/research-dossier',
          ],
        },
        {
          type: 'category',
          label: 'Agent 与工作台工具',
          link: {type: 'generated-index', slug: '/category/agent-and-workbench-tools', description: '终端、浏览器与桌面操作：让 Agent 在明确边界内执行。'},
          items: [
            'features/terminal',
            'features/browser-preview',
            'features/computer-use',
          ],
        },
        {
          type: 'category',
          label: '自动化',
          link: {type: 'doc', id: 'features/automation'},
          items: ['features/create-loop'],
        },
        {
          type: 'category',
          label: '协作与内容',
          link: {type: 'generated-index', slug: '/category/collaboration-and-content', description: '身份与登录、团队协作、内容空间与思源笔记。'},
          items: [
            'features/identity-access',
            'features/collaboration',
            'features/content-space',
            'features/siyuan',
          ],
        },
        'features/extensions',
      ],
    },
    {
      type: 'category',
      label: '案例教程',
      link: {type: 'generated-index', slug: '/category/end-to-end-cases'},
      items: [
        'cases/overview',
        'cases/virtual-cell-evidence-atlas',
        'cases/virtual-cell-benchmark',
        'cases/pasilla-collaboration',
        'cases/scientific-figures-complex',
      ],
    },
    {
      type: 'category',
      label: '设置与安全',
      items: [
        'operations/security',
        'operations/remote-and-collaboration',
      ],
    },
    {
      type: 'category',
      label: '参考与排错',
      items: [
        'reference/version-and-compatibility',
        'reference/plugin-licenses',
        'reference/feature-status',
        'reference/troubleshooting',
      ],
    },
  ],
};

export default sidebars;
