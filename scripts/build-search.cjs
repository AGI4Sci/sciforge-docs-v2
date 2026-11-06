const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');

const catalogs = [
  {
    locale: 'zh-Hans',
    docs: 'docs',
    sections: {'getting-started': '快速开始', cases: '端到端案例', features: '功能与扩展', workbench: '工作台指南', operations: '配置与运维', reference: '参考手册'},
    fallback: '文档导航',
  },
  {
    locale: 'en',
    docs: 'i18n/en/docusaurus-plugin-content-docs/current',
    sections: {'getting-started': 'Getting started', cases: 'End-to-end cases', features: 'Features & Extensions', workbench: 'Workbench guides', operations: 'Configuration & Operations', reference: 'Reference'},
    fallback: 'Documentation',
  },
];

function buildCatalog(catalog) {
  const docsRoot = path.join(root, catalog.docs);
  const files = fs.readdirSync(docsRoot, {recursive: true}).filter(file => /\.mdx?$/.test(file)).sort();
  return files.map(file => {
    const raw = fs.readFileSync(path.join(docsRoot, file), 'utf8');
    const clean = (value) => (value || '').replace(/^['"]|['"]$/g, '');
    const title = clean(raw.match(/^title:\s*(.+)$/m)?.[1]) || file;
    const description = clean(raw.match(/^description:\s*(.+)$/m)?.[1]);
    const body = raw.replace(/^---[\s\S]*?---/, '').replace(/!\[[^\]]*\]\([^)]*\)/g, '').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').replace(/[#*`|>]/g, ' ').replace(/:::[^\n]*/g, '').replace(/\s+/g, ' ').trim();
    return {title, description, body, section: catalog.sections[file.split(path.sep)[0]] || catalog.fallback, route: '/docs/' + file.replace(/\.mdx?$/, '').split(path.sep).join('/')};
  });
}

const index = Object.fromEntries(catalogs.map(catalog => [catalog.locale, buildCatalog(catalog)]));
fs.mkdirSync(path.join(root, 'src/data'), {recursive: true});
fs.writeFileSync(path.join(root, 'src/data/search-index.json'), JSON.stringify(index));
console.log(`Search index: ${Object.entries(index).map(([locale, records]) => `${locale} ${records.length} pages`).join(', ')}`);
