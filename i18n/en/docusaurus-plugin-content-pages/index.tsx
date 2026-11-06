import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from '@site/src/pages/index.module.css';

const tasks = [
  {title: 'Open a project', description: 'Choose a workspace, start a session, and hand the project files to the assistant.', to: '/docs/workbench/workspaces-and-sessions'},
  {title: 'Preview scientific files', description: 'View molecular structure, sequence, and omics files and find the information you need.', to: '/docs/features/life-science-preview'},
  {title: 'Plot research figures', description: 'Prepare data, run plotting code, then view and save figure versions.', to: '/docs/features/scientific-plotting'},
  {title: 'Check file changes', description: 'Compare before and after, and check item by item what the assistant did.', to: '/docs/features/change-inspector'},
  {title: 'Collaborate with a team', description: 'Assign tasks, review deliveries, and let members continue from adopted results.', to: '/docs/features/collaboration'},
  {title: 'Add tools and extensions', description: 'Connect external tools or add specialized skills as your task needs.', to: '/docs/features/extensions'},
];

const steps = [
  {title: 'Prepare a project and a model', description: 'Get a local project ready, connect a model as instructed, and confirm the assistant works.', to: '/docs/getting-started/runtime-and-models', link: 'Connect a model and assistant'},
  {title: 'Open the project and send a task', description: 'Set read-only permissions, start a session, and have the assistant describe the project first.', to: '/docs/getting-started/five-minute-quickstart', link: 'Follow the quickstart'},
  {title: 'Read the answer, check the files', description: 'Check the result and compare file state before and after to finish your first run.', to: '/docs/features/change-inspector', link: 'Learn how to check changes'},
];

const cases = [
  {
    title: 'Scientific figures: complex data and reproduction',
    caption: 'Four-panel figure from synthetic data · click to enlarge ↗',
    description: 'From multi-file cleaning of synthetic data to a four-panel figure: handle missing values, keep run records, and recover failed tasks.',
    to: '/docs/cases/scientific-figures-complex',
    image: '/img/docs/scientific-figures/complex/01-longitudinal-figure.png',
    alt: 'Actual run output for synthetic longitudinal data: mean error bars, individual trajectories, endpoint distribution, and effective sample size',
    width: 2160,
    height: 1620,
  },
  {
    title: 'Pasilla RNA-seq: three-person collaboration',
    caption: 'Descriptive comparison report preview · click to enlarge ↗',
    description: 'Using an excerpt of public count data, follow three members through requirement confirmation, delivery, revision, and downstream handoff.',
    to: '/docs/cases/pasilla-collaboration',
    image: '/img/docs/collaboration/report-preview.png',
    alt: 'A collaborating member previews the descriptive comparison report on Pasilla data in SciForge',
    width: 1280,
    height: 840,
  },
  {
    title: 'ECCITE-seq cross-scale evidence graph',
    caption: 'Figure preview of existing case outputs · click to enlarge ↗',
    description: 'Browse the perturbation, transcription, and protein response figures and report in the existing case outputs, and learn how to check relationships between different data.',
    to: '/docs/cases/virtual-cell-evidence-atlas',
    image: '/img/docs/cases/virtual-cell-evidence-atlas/04-cross-scale-evidence-preview.jpg',
    alt: 'The ECCITE-seq cross-scale evidence graph opened in SciForge',
    width: 1171,
    height: 768,
  },
  {
    title: 'Virtual cell perturbation prediction benchmark',
    caption: 'Workspace view for checking benchmark inputs · click to enlarge ↗',
    description: 'An experimental flow that needs your own model: prepare benchmark data, check outputs, and record results. A full demo is still unverified, so you can read the flow first.',
    to: '/docs/cases/virtual-cell-benchmark',
    image: '/img/docs/guides/workspace-files.jpg',
    alt: 'The SciForge workspace Files panel, used to check benchmark inputs; not a completed benchmark run',
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
        <img data-sf-preview src={image} alt={item.alt} title="Click or press Enter to enlarge the image" loading="lazy" width={item.width} height={item.height} />
        <figcaption>{item.caption}</figcaption>
      </figure>
      <div className={styles.caseCopy}>
        <Heading as="h3"><Link to={item.to}>{item.title} <Arrow /></Link></Heading>
        <p>{item.description}</p>
      </div>
    </article>
  );
}

export default function Home(): ReactNode {
  const heroImage = useBaseUrl('/img/docs/quickstart/quickstart-task-result.jpg');
  return (
    <Layout title="SciForge User Manual" description="From opening a project to analyzing data, plotting figures, and working with a team, complete your task step by step.">
      <main className={styles.home}>
        <section className={styles.hero} aria-labelledby="home-title">
          <div className={`${styles.container} ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <Heading as="h1" id="home-title">SciForge User Manual</Heading>
              <p>From opening a project to analyzing data, plotting figures, and working with a team, complete your task step by step.</p>
              <div className={styles.actions}>
                <Link className={styles.primaryLink} to="/docs/getting-started/five-minute-quickstart">Get started <Arrow /></Link>
                <Link className={styles.secondaryLink} to="/docs/features/overview">Find a feature <Arrow /></Link>
              </div>
              <Link className={styles.videoLink} to="/guide"><span aria-hidden="true">▷</span> Watch the video tour</Link>
            </div>
            <figure className={styles.preview}>
              <img data-sf-preview src={heroImage} alt="The SciForge workbench: viewing the result of a first read-only analysis in a local project session" title="Click or press Enter to enlarge the workbench screenshot" loading="eager" fetchPriority="high" width="1171" height="768" />
              <figcaption>The first task result in the workbench · click to enlarge ↗</figcaption>
            </figure>
          </div>
        </section>

        <section className={`${styles.section} ${styles.taskSection}`} aria-labelledby="tasks-title">
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <Heading as="h2" id="tasks-title">What do you want to do?</Heading>
              <Link className={styles.textLink} to="/docs/features/overview">See all features <Arrow /></Link>
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

        <section className={`${styles.section} ${styles.startSection}`} aria-labelledby="start-title">
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div><Heading as="h2" id="start-title">Using it for the first time? Start here</Heading><p>Use one small task to get familiar with projects, sessions, and checking results.</p></div>
              <Link className={styles.textLink} to="/docs/getting-started/five-minute-quickstart">Five-minute quickstart <Arrow /></Link>
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
              <div><Heading as="h2" id="cases-title">Learn from cases</Heading><p>See, in the real interface, how data, figures, and collaboration tasks play out.</p></div>
              <Link className={styles.textLink} to="/docs/cases/overview">Case reading guide <Arrow /></Link>
            </div>
            <div className={styles.caseGrid}>{cases.map((item) => <CaseStudy key={item.to} item={item} />)}</div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.helpSection}`} aria-labelledby="help-title">
          <div className={`${styles.container} ${styles.helpGrid}`}>
            <div><Heading as="h2" id="help-title">Need help?</Heading><p>When you run into a problem, continue from these notes.</p></div>
            <ul className={styles.helpLinks}>
              <li><Link to="/docs/reference/troubleshooting">Troubleshoot common problems <Arrow /></Link></li>
              <li><Link to="/docs/getting-started/runtime-and-models">Check the model and assistant connection <Arrow /></Link></li>
              <li><Link to="/docs/operations/security">Learn about file permissions and security settings <Arrow /></Link></li>
            </ul>
          </div>
        </section>
      </main>
    </Layout>
  );
}
