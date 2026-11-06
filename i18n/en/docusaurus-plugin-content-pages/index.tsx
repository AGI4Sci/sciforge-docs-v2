import {useState, type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from '@site/src/pages/index.module.css';

const previews = [
  {name: 'Cross-scale evidence', image: '/img/docs/cases/virtual-cell-evidence-atlas/04-cross-scale-evidence-preview.jpg', caption: 'Connect perturbations, transcriptional responses, and protein responses in one workbench.'},
  {name: 'Artifacts and files', image: '/img/docs/cases/virtual-cell-evidence-atlas/03-artifact-tree.jpg', caption: 'Move from a figure back to the real file, generating script, and task context.'},
  {name: 'Research report', image: '/img/docs/cases/virtual-cell-evidence-atlas/05-final-report-preview.jpg', caption: 'Deliver results while preserving the data baseline, quality checks, and limitations.'},
];
const groups = ['Research workflow', 'Workbench', 'Connections & extensions'] as const;
const capabilities = [
  {group: 'Research workflow', name: 'Evidence & Reproducibility', detail: 'Versions, checkpoints, the Evidence DAG, and research dossiers.', to: '/docs/features/evidence-and-reproducibility'},
  {group: 'Research workflow', name: 'Automation & scheduled tasks', detail: 'Schedule recurring work and use Loops to organize multi-step flows.', to: '/docs/features/automation'},
  {group: 'Research workflow', name: 'Literature, analysis & figures', detail: 'Find Life Science Preview, Dataset API, Scientific Figures, and Visual Review by plugin.', to: '/docs/features/overview'},
  {group: 'Workbench', name: 'Workspaces & sessions', detail: 'Open projects, reference files, and keep context across continuous tasks.', to: '/docs/workbench/workspaces-and-sessions'},
  {group: 'Workbench', name: 'Working with Agents', detail: 'From a clear objective to a plan, execution, and result review.', to: '/docs/workbench/agent-workflows'},
  {group: 'Workbench', name: 'Workbench tools', detail: 'Understand preview, terminal, changes, and Computer Use in context.', to: '/docs/workbench/tools'},
  {group: 'Connections & extensions', name: 'Runtime & models', detail: 'Configure model access and choose Codex or Claude Code.', to: '/docs/getting-started/runtime-and-models'},
  {group: 'Connections & extensions', name: 'Remote resources & collaboration', detail: 'Switch remote workspace sessions and understand cloud collaboration and data boundaries.', to: '/docs/operations/remote-and-collaboration'},
  {group: 'Connections & extensions', name: 'Skills, MCP & extensions', detail: 'Add specialized methods, external tools, and signed extension packages.', to: '/docs/features/extensions'},
];
function Arrow({diagonal = false}: {diagonal?: boolean}) { return <span aria-hidden="true">{diagonal ? '↗' : '→'}</span>; }
function ProductPreview() {
  const [active, setActive] = useState(0);
  const prefix = useBaseUrl('/');
  return <div className={styles.preview}>
    <div className={styles.previewTop}><span className={styles.liveDot} />SciForge workbench<span className={styles.previewMeta}>Real interface / case artifacts</span></div>
    <div aria-label="Workbench preview" className={styles.previewTabs}>
      {previews.map((item, index) => <button key={item.name} type="button" aria-pressed={active === index} aria-controls="preview-panel" onClick={() => setActive(index)}>{item.name}</button>)}
    </div>
    <div id="preview-panel" className={styles.previewPanel}>
      <img key={active} data-sf-preview title="Click or press Enter to enlarge the workbench screenshot" src={prefix + previews[active].image.slice(1)} alt={`SciForge workbench: ${previews[active].name}`} fetchPriority="high" width="1600" height="1000" />
    </div>
    <p className={styles.previewCaption}><span>0{active + 1}</span>{previews[active].caption}</p>
  </div>;
}
export default function Home(): ReactNode {
  const [group, setGroup] = useState<(typeof groups)[number]>('Research workflow');
  const atlasImage = useBaseUrl('/img/docs/cases/virtual-cell-evidence-atlas/06-layer-coverage-preview.jpg');
  const workspaceImage = useBaseUrl('/img/docs/guides/workspace-files.jpg');
  return <Layout title="Research, from here" description="The SciForge handbook. Learn workspaces, Agents, figures, evidence, and reproducible research through virtual-cell cases, and find tools and extensions by goal.">
    <main className={styles.home}>
      <section className={styles.hero}><div className={styles.container}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}><span /> SCIFORGE / FIELD GUIDE</span>
            <Heading as="h1">Every step of research,<br /><em>on the record.</em></Heading>
            <p>Start with a question and a dataset.<br />{' '}Organize Agents, analysis, and figures in SciForge,<br />{' '}and turn the research process into outputs you can inspect and rerun.</p>
            <div className={styles.actions}><Link className={styles.primaryLink} to="/docs/cases/overview">Start with a case <Arrow /></Link><Link className={styles.textLink} to="/docs/getting-started/five-minute-quickstart">Five-minute quickstart <Arrow /></Link></div>
            <Link className={styles.videoLink} to="/guide"><span className={styles.playIcon}>▶</span> Watch the chaptered video tour <Arrow diagonal /></Link>
            <div className={styles.heroFoot}><span>Local and remote workspaces</span><span>Codex / Claude Code / DSH</span></div>
          </div><ProductPreview />
        </div>
        <div className={styles.workflow} aria-label="Research workflow"><span className={styles.workflowLabel}>One complete research path</span>{['Prepare the workspace', 'Analyze with the Agent', 'Review figures and evidence', 'Finalize the research deliverable'].map((label, i) => <span key={label}><small>0{i + 1}</small>{label}{i < 3 && <b aria-hidden="true">→</b>}</span>)}</div>
      </div></section>
      <section id="cases" className={styles.section}><div className={styles.container}>
        <div className={styles.sectionHeader}><div><span className={styles.eyebrow}>01 / END-TO-END CASES</span><Heading as="h2">Start with one complete case</Heading><p>Follow a virtual-cell project from input through analysis, review, and delivery.</p></div><Link className={styles.textLink} to="/docs/cases/overview">Case reading guide <Arrow /></Link></div>
        <div className={styles.caseGrid}>
          <article className={styles.mainCase}>
            <div className={styles.caseCopy}><div className={styles.caseMeta}><span>CASE STUDY 01</span><span className={styles.status}>Artifact browsing verified</span></div><Heading as="h3">ECCITE-seq<br />cross-scale virtual-cell evidence atlas</Heading><p>Begin with a CRISPR perturbation and inspect the evidence relationships among transcription, protein, and cellular fitness. Every figure leads back to its data and methods.</p><div className={styles.tags}><span>Quality audit</span><span>Multimodal response</span><span>Research dossier</span></div><Link className={styles.caseLink} to="/docs/cases/virtual-cell-evidence-atlas">Read the case <Arrow /></Link></div>
            <Link to="/docs/cases/virtual-cell-evidence-atlas" className={styles.caseVisual} aria-label="Read the ECCITE-seq evidence case"><img src={atlasImage} alt="Six-layer data coverage and the case workspace in SciForge" loading="lazy" width="1600" height="1000" /><span>Workspace, task, and figures preserved together.</span></Link>
          </article>
          <article className={styles.secondCase}><div className={styles.caseMeta}><span>CASE STUDY 02</span><span className={styles.experimental}>Experimental route</span></div><Heading as="h3">Virtual cell<br />perturbation prediction benchmark</Heading><p>Connect an existing model, fix the data protocol and runtime, and move from a small-sample preflight to prediction, failure analysis, and reruns.</p><div className={styles.protocol}><span>01 Protocol and inputs</span><span>02 Prediction and validation</span><span>03 Stratified analysis and reruns</span></div><img src={workspaceImage} alt="SciForge workspace Files panel, the entry point for checking benchmark inputs" loading="lazy" width="1600" height="1000" /><small>Models come from user integration; the full demonstration is still being verified.</small><Link className={styles.caseLink} to="/docs/cases/virtual-cell-benchmark">View the benchmark flow <Arrow /></Link></article>
        </div>
      </div></section>
      <section id="start" className={`${styles.section} ${styles.startSection}`}><div className={`${styles.container} ${styles.startGrid}`}>
        <div><span className={styles.eyebrow}>02 / FIRST STEPS</span><Heading as="h2">First time here?<br />Start with a small task.</Heading><p>Prepare a local project and use a read-only analysis to get familiar with<br />the workspace, execution, and result review.</p><Link className={styles.primaryLink} to="/docs/getting-started/five-minute-quickstart">Open the quickstart <Arrow /></Link></div>
        <div className={styles.startSteps}>{[
          ['01', 'Connect your model and Runtime', 'Understand model access and the executor, and confirm the runtime is available.', '/docs/getting-started/runtime-and-models'],
          ['02', 'Confirm the read-only scope and project baseline', 'Check Codex access scope and save the Git state; use a copy for non-Git projects.', '/docs/getting-started/read-only-sandbox'],
          ['03', 'Send the task and review process and results', 'Run a small analysis and compare file state before and after.', '/docs/getting-started/five-minute-quickstart'],
        ].map(([num, title, desc, to]) => <Link to={to} key={num} className={styles.step}><span>{num}</span><div><h3>{title}</h3><p>{desc}</p></div><Arrow /></Link>)}</div>
      </div></section>
      <section id="capabilities" className={styles.section}><div className={styles.container}>
        <div className={styles.sectionHeader}><div><span className={styles.eyebrow}>03 / TOOLBOX</span><Heading as="h2">Find tools by what you want to do</Heading><p>From everyday workbench tools to research workflows and specialized extensions.</p></div><Link className={styles.textLink} to="/docs/features/overview">Full feature guide <Arrow /></Link></div>
        <div aria-label="Feature categories" className={styles.toolTabs}>{groups.map((item) => <button type="button" key={item} aria-pressed={group === item} aria-controls="tool-panel" onClick={() => setGroup(item)}>{item}</button>)}</div>
        <div id="tool-panel" className={styles.toolGrid}>{capabilities.filter((item) => item.group === group).map((item, i) => <Link to={item.to} key={item.name} className={styles.tool}><span className={styles.toolMark}>0{i + 1} /</span><h3>{item.name}</h3><p>{item.detail}</p><span className={styles.toolRead}>Read the guide <Arrow /></span></Link>)}</div>
        <div className={styles.referenceBar}><span>Know the current capabilities and boundaries before you start.</span><Link to="/docs/reference/feature-status">Feature status <Arrow diagonal /></Link><Link to="/docs/operations/security">Permissions & security <Arrow diagonal /></Link><Link to="/docs/reference/troubleshooting">Troubleshooting <Arrow diagonal /></Link></div>
      </div></section>
      <section className={styles.closing}><div className={styles.container}><span className={styles.eyebrow}>YOUR NEXT EXPERIMENT</span><Heading as="h2">Put your next study<br />into a reviewable workflow.</Heading><div><Link className={styles.closingButton} to="/docs/getting-started/five-minute-quickstart">Start your first task <Arrow /></Link><Link to="/guide">Watch the full tour <Arrow /></Link></div><p>From clear inputs to evidence-backed conclusions.</p></div></section>
    </main>
  </Layout>;
}
