import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const tasks = [
  {title: '打开项目', description: '选择工作区，新建会话，把项目文件交给助手。', to: '/docs/workbench/workspaces-and-sessions'},
  {title: '预览科学文件', description: '查看分子结构、序列与组学文件，找到需要的信息。', to: '/docs/features/life-science-preview'},
  {title: '绘制科研图表', description: '准备数据、运行绘图代码，查看并保存图件版本。', to: '/docs/features/scientific-plotting'},
  {title: '检查文件变更', description: '对照修改前后内容，逐项检查助手做了什么。', to: '/docs/features/change-inspector'},
  {title: '与团队协作', description: '分配任务、评审交付，让成员接着已采纳的结果工作。', to: '/docs/features/collaboration'},
  {title: '添加工具与扩展', description: '按任务需要，连接外部工具或添加专项技能。', to: '/docs/features/extensions'},
];

const steps = [
  {title: '准备项目与模型', description: '准备一个本地项目，按说明连接模型，确认助手可用。', to: '/docs/getting-started/runtime-and-models', link: '连接模型与助手'},
  {title: '打开项目，发送任务', description: '设置只读权限，新建会话，让助手先介绍项目内容。', to: '/docs/getting-started/five-minute-quickstart', link: '跟随快速开始'},
  {title: '查看回答，核对文件', description: '检查任务结果，并对照任务前后的文件状态，完成第一次使用。', to: '/docs/features/change-inspector', link: '了解如何检查变更'},
];

const cases = [
  {
    title: '科研图件：复杂数据与复现',
    label: '合成数据绘图案例',
    description: '从多文件清洗到四面板图，学习处理缺失值、保存运行记录与恢复失败任务。',
    to: '/docs/cases/scientific-figures-complex',
    image: '/img/docs/scientific-figures/complex/01-longitudinal-app.png',
    alt: 'SciForge 会话与科研图件面板中的纵向数据四面板图',
    width: 3046,
    height: 2044,
  },
  {
    title: 'Pasilla RNA-seq 三人协作',
    label: '真实数据摘录 · 协作演示',
    description: '用公开计数数据的摘录，跟随三位成员完成需求确认、交付、返修和下游接力。',
    to: '/docs/cases/pasilla-collaboration',
    image: '/img/docs/collaboration/report-preview.png',
    alt: '协作成员在 SciForge 中预览 Pasilla 数据的描述性比较报告',
    width: 1280,
    height: 840,
  },
  {
    title: 'ECCITE-seq 跨尺度证据图',
    label: '案例产物浏览',
    description: '查看扰动、转录与蛋白响应的图表和报告，了解如何检查不同数据之间的关系。',
    to: '/docs/cases/virtual-cell-evidence-atlas',
    image: '/img/docs/cases/virtual-cell-evidence-atlas/04-cross-scale-evidence-preview.jpg',
    alt: 'SciForge 中打开的 ECCITE-seq 跨尺度证据图',
    width: 1171,
    height: 768,
  },
  {
    title: '虚拟细胞扰动预测评测',
    label: '实验性流程 · 需自备模型',
    description: '为已有模型准备评测数据、检查输出并记录结果。完整演示仍待验证，可先阅读流程。',
    to: '/docs/cases/virtual-cell-benchmark',
    image: '/img/docs/guides/workspace-files.jpg',
    alt: 'SciForge 工作区文件面板，用于检查评测输入；非已完成的评测运行',
    width: 1171,
    height: 768,
  },
];

function Arrow(): ReactNode {
  return <span aria-hidden="true">→</span>;
}

function CaseStudy({item}: {item: (typeof cases)[number]}): ReactNode {
  const image = useBaseUrl(item.image);
  return (
    <article className={styles.case}>
      <figure className={styles.caseImage}>
        <img data-sf-preview src={image} alt={item.alt} title="点击或按 Enter 放大图片" loading="lazy" width={item.width} height={item.height} />
        <figcaption>点击放大 ↗</figcaption>
      </figure>
      <div className={styles.caseCopy}>
        <p className={styles.caseLabel}>{item.label}</p>
        <Heading as="h3"><Link to={item.to}>{item.title} <Arrow /></Link></Heading>
        <p>{item.description}</p>
      </div>
    </article>
  );
}

export default function Home(): ReactNode {
  const heroImage = useBaseUrl('/img/docs/quickstart/quickstart-task-result.jpg');
  return (
    <Layout title="SciForge 使用手册" description="从打开项目到分析数据、绘制图表和团队协作，按步骤完成你的任务。">
      <main className={styles.home}>
        <section className={styles.hero} aria-labelledby="home-title">
          <div className={`${styles.container} ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <Heading as="h1" id="home-title">SciForge 使用手册</Heading>
              <p>从打开项目到分析数据、绘制图表和团队协作，按步骤完成你的任务。</p>
              <div className={styles.actions}>
                <Link className={styles.primaryLink} to="/docs/getting-started/five-minute-quickstart">开始使用 <Arrow /></Link>
                <Link className={styles.secondaryLink} to="/docs/features/overview">查找功能 <Arrow /></Link>
              </div>
              <Link className={styles.videoLink} to="/guide"><span aria-hidden="true">▷</span> 观看视频导览</Link>
            </div>
            <figure className={styles.preview}>
              <img data-sf-preview src={heroImage} alt="SciForge 工作台：在本地项目会话中查看第一次只读分析的结果" title="点击或按 Enter 放大工作台截图" loading="eager" fetchPriority="high" width="1171" height="768" />
              <figcaption>在工作台中查看任务结果 <span>点击图片放大 ↗</span></figcaption>
            </figure>
          </div>
        </section>

        <section className={`${styles.section} ${styles.taskSection}`} aria-labelledby="tasks-title">
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <Heading as="h2" id="tasks-title">你想做什么？</Heading>
              <Link className={styles.textLink} to="/docs/features/overview">查看全部功能 <Arrow /></Link>
            </div>
            <div className={styles.taskGrid}>
              {tasks.map((task) => (
                <Link key={task.title} to={task.to} className={styles.task}>
                  <Heading as="h3">{task.title} <Arrow /></Heading>
                  <p>{task.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="start-title">
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div><Heading as="h2" id="start-title">第一次使用，从这里开始</Heading><p>用一个小任务，熟悉项目、会话和结果检查。</p></div>
              <Link className={styles.textLink} to="/docs/getting-started/five-minute-quickstart">五分钟快速开始 <Arrow /></Link>
            </div>
            <ol className={styles.steps}>
              {steps.map((step, index) => (
                <li key={step.title}>
                  <span className={styles.stepNumber} aria-hidden="true">0{index + 1}</span>
                  <Heading as="h3">{step.title}</Heading>
                  <p>{step.description}</p>
                  <Link className={styles.textLink} to={step.to}>{step.link} <Arrow /></Link>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="cases" className={`${styles.section} ${styles.caseSection}`} aria-labelledby="cases-title">
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div><Heading as="h2" id="cases-title">跟着案例学习</Heading><p>结合实际界面，看看数据、图表和协作任务怎样开展。</p></div>
              <Link className={styles.textLink} to="/docs/cases/overview">案例阅读指南 <Arrow /></Link>
            </div>
            <div className={styles.caseGrid}>{cases.map((item) => <CaseStudy key={item.to} item={item} />)}</div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.helpSection}`} aria-labelledby="help-title">
          <div className={`${styles.container} ${styles.helpGrid}`}>
            <div><Heading as="h2" id="help-title">需要帮助？</Heading><p>遇到问题时，从这些说明继续。</p></div>
            <ul className={styles.helpLinks}>
              <li><Link to="/docs/reference/troubleshooting">排查常见问题 <Arrow /></Link></li>
              <li><Link to="/docs/getting-started/runtime-and-models">检查模型与助手连接 <Arrow /></Link></li>
              <li><Link to="/docs/operations/security">了解文件权限与安全设置 <Arrow /></Link></li>
            </ul>
          </div>
        </section>
      </main>
    </Layout>
  );
}
