import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: '快速开始',
      link: {type: 'generated-index', slug: '/category/快速开始'},
      items: [
        'getting-started/five-minute-quickstart',
        'getting-started/runtime-and-models',
        'getting-started/read-only-sandbox',
      ],
    },
    {
      type: 'category',
      label: '端到端案例',
      link: {type: 'generated-index', slug: '/category/端到端案例'},
      items: [
        'cases/overview',
        'cases/virtual-cell-evidence-atlas',
        'cases/virtual-cell-benchmark',
      ],
    },
    {
      type: 'category',
      label: '功能与扩展',
      link: {type: 'doc', id: 'features/overview'},
      items: [
        {
          type: 'category',
          label: '研究资料与科学对象',
          link: {type: 'generated-index', slug: '/category/研究资料与科学对象', description: '预览科学文件、接入外部数据源、组织生物学对象，并用受治理的计算步骤处理数据。'},
          items: [
            'features/life-science-preview',
            'features/dataset-api',
            'features/biology-room',
            'features/scientific-compute',
          ],
        },
        {
          type: 'category',
          label: '分析与审阅',
          link: {type: 'generated-index', slug: '/category/分析与审阅', description: '生成可复跑图表、对图像做人工审改，并把批注锚定到具体位置。'},
          items: [
            'features/scientific-plotting',
            'features/visual-review',
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
          link: {type: 'generated-index', slug: '/category/agent-与工作台工具', description: '终端、浏览器、桌面操作与远程主机：让 Agent 在明确边界内执行。'},
          items: [
            'features/terminal',
            'features/browser-preview',
            'features/computer-use',
            'features/remote-ssh',
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
          link: {type: 'generated-index', slug: '/category/协作与内容', description: '身份与登录、团队协作、内容空间与思源笔记。'},
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
      label: '工作台指南',
      items: [
        'workbench/workspaces-and-sessions',
        'workbench/agent-workflows',
        'workbench/tools',
      ],
    },
    {
      type: 'category',
      label: '配置与运维',
      items: [
        'operations/security',
        'operations/remote-and-collaboration',
      ],
    },
    {
      type: 'category',
      label: '参考手册',
      items: [
        'reference/feature-status',
        'reference/troubleshooting',
      ],
    },
  ],
};

export default sidebars;
