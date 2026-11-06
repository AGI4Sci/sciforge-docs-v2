import {useEffect, useRef, useState} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import tour from '@site/src/data/tour.json';
import styles from '@site/src/pages/guide.module.css';

type Chapter = {title: string; start: number; route: string};
const englishChapterTitles = [
  'Starting from a research task',
  'Completing your first safe task',
  'Case 1 · cross-scale evidence review',
  'Case 2 · external model prediction benchmark',
  'Understanding the workbench and Agent collaboration',
  'Organizing evidence and reproducible records',
  'Scheduling recurring tasks and multi-step flows',
  'Extending capabilities and collaboration boundaries',
  'Security, troubleshooting, and next steps',
];
const chapters = (tour.chapters as Chapter[]).map((chapter, index) => ({...chapter, title: englishChapterTitles[index] ?? chapter.title}));
function time(seconds: number) { const whole = Math.floor(seconds + .001); return `${Math.floor(whole / 60).toString().padStart(2, '0')}:${(whole % 60).toString().padStart(2, '0')}`; }
export default function Guide() {
  const player = useRef<HTMLVideoElement>(null);
  const pendingChapter = useRef<number | null>(null);
  const chapterList = useRef<HTMLOListElement>(null);
  const cinemaToggle = useRef<HTMLButtonElement>(null);
  const [active, setActive] = useState(0);
  const [playError, setPlayError] = useState(false);
  const [mediaError, setMediaError] = useState(false);
  const [cinema, setCinema] = useState(false);
  const [shareStatus, setShareStatus] = useState('');
  const [chaptersExpanded, setChaptersExpanded] = useState(true);
  const current = chapters[active];
  const media = useBaseUrl('/video/');
  const revision = 'revision' in tour ? String(tour.revision) : '2026-09-05';
  const mediaAsset = (file: string) => `${media}${file}?v=${encodeURIComponent(revision)}`;
  function applyPendingChapter() {
    if (pendingChapter.current === null || !player.current || player.current.readyState < 1) return;
    player.current.currentTime = chapters[pendingChapter.current].start;
    pendingChapter.current = null;
  }
  useEffect(() => {
    function readChapterLink() {
      const match = /^#chapter-(\d+)$/.exec(window.location.hash);
      if (!match) return;
      const index = Number(match[1]) - 1;
      if (index < 0 || index >= chapters.length) return;
      pendingChapter.current = index;
      setActive(index);
      applyPendingChapter();
    }
    readChapterLink();
    window.addEventListener('hashchange', readChapterLink);
    return () => window.removeEventListener('hashchange', readChapterLink);
  }, []);
  useEffect(() => {
    const list = chapterList.current;
    const selected = list?.querySelector('[aria-current="true"]');
    if (!list || !selected || list.scrollHeight <= list.clientHeight) return;
    const bounds = list.getBoundingClientRect();
    const item = selected.getBoundingClientRect();
    if (item.top < bounds.top) list.scrollTop += item.top - bounds.top;
    else if (item.bottom > bounds.bottom) list.scrollTop += item.bottom - bounds.bottom;
  }, [active]);
  useEffect(() => {
    if (!cinema) return;
    function exitCinema(event: KeyboardEvent) {
      if (event.key !== 'Escape' || document.fullscreenElement) return;
      setCinema(false);
      cinemaToggle.current?.focus({preventScroll: true});
    }
    window.addEventListener('keydown', exitCinema);
    return () => window.removeEventListener('keydown', exitCinema);
  }, [cinema]);
  function seek(index: number) {
    if (!player.current || !chapters[index]) return;
    pendingChapter.current = index;
    setActive(index);
    setShareStatus('');
    setPlayError(false);
    applyPendingChapter();
    window.history.replaceState(window.history.state, '', `#chapter-${index + 1}`);
    player.current.play().catch(() => setPlayError(true));
    const bounds = player.current.getBoundingClientRect();
    if (window.matchMedia('(max-width: 996px)').matches && (bounds.bottom < 0 || bounds.top > window.innerHeight)) {
      player.current.scrollIntoView({block: 'center', behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
    }
  }
  async function shareChapter() {
    const url = new URL(window.location.href);
    url.hash = `chapter-${active + 1}`;
    try {
      await navigator.clipboard.writeText(url.toString());
      setShareStatus('Chapter link copied');
    } catch {
      window.history.replaceState(window.history.state, '', url.toString());
      setShareStatus('Copy the chapter link from the address bar');
    }
  }
  return <Layout title="Video tour" description="Learn SciForge chapter by chapter: getting started, virtual-cell cases, the workbench, evidence, and extensions. Chinese narration with English and Chinese captions, an English transcript, and chapter links.">
    <main className={`${styles.guide} ${cinema ? styles.cinema : ''}`}>
      <header className={styles.heading}>
        <div><h1>Video tour</h1><p className={styles.introduction}>Learn SciForge's research workflow and two virtual-cell cases chapter by chapter, then open the matching handbook pages to practice.</p></div>
        <div className={styles.facts} aria-label="Tour information"><span><b>{time(tour.duration)}</b> total length</span><span><b>{chapters.length}</b> chapters</span><span>Chinese narration · English captions</span></div>
      </header>
      <div className={styles.watchToolbar}><span>Pick a chapter to jump to it and play</span><button ref={cinemaToggle} type="button" onClick={() => setCinema(!cinema)} aria-pressed={cinema} aria-controls="guide-player-layout"><span aria-hidden="true">▣</span>{cinema ? 'Exit wide view' : 'Wide view'}</button></div>
      <div id="guide-player-layout" className={styles.playerGrid}>
        <div>
          {tour.ready ? <video ref={player} className={styles.video} aria-label="SciForge video tour with Chinese narration and English captions" tabIndex={0} controls playsInline preload="metadata" poster={mediaAsset('poster.jpg')} onLoadedMetadata={applyPendingChapter} onError={() => setMediaError(true)} onTimeUpdate={() => { if (pendingChapter.current !== null) return; const now = player.current?.currentTime || 0; setActive(chapters.reduce((index, chapter, i) => now + .001 >= chapter.start ? i : index, 0)); }}>
            <source src={mediaAsset('sciforge-guide-2026-09-05.mp4')} type="video/mp4" onError={() => setMediaError(true)} />
            <track src={mediaAsset('captions.en.vtt')} label="English" kind="captions" srcLang="en" default />
            <track src={mediaAsset('captions.vtt')} label="Simplified Chinese" kind="captions" srcLang="zh" />
            Your browser cannot play embedded video; please use the download links below.
          </video> : <div className={styles.preparing}><span>SCIFORGE FIELD GUIDE</span><h2>Chapter-by-chapter video tour</h2><p>This page will be published together with the new video.</p></div>}
          {current && <div className={styles.nowPlaying}><div><span>Current chapter <b>{String(active + 1).padStart(2, '0')} / {String(chapters.length).padStart(2, '0')}</b></span><h2 aria-live="polite" aria-atomic="true">{current.title}</h2></div><div className={styles.chapterControls}><button type="button" onClick={() => seek(active - 1)} disabled={active === 0} aria-label="Previous chapter">←</button><button type="button" onClick={() => seek(active + 1)} disabled={active === chapters.length - 1} aria-label="Next chapter">→</button></div></div>}
          {current && <div className={styles.chapterActions}><Link to={current.route}>Read this chapter in the handbook ↗</Link><button type="button" onClick={shareChapter}>Copy chapter link ↗</button><span role="status">{shareStatus}</span></div>}
          {(playError || mediaError) && <p className={styles.error} role="status">{mediaError ? 'The video could not be loaded. Refresh the page to retry, or use the MP4 download link below.' : 'Press the player\'s play button to continue.'}</p>}
          <p className={styles.scopeNote}>The visuals are documentation demos and full SciForge workspace screenshots, not one continuous experimental run. Experimental capabilities are marked in their own chapters. The video uses an earlier interface; for current tool locations and changes, see the version notes.</p>
        </div>
        <aside className={styles.chapterNav} aria-label="Video chapters"><div className={styles.chapterHeading}><h2>Contents</h2><span>{chapters.length} chapters · watch as needed</span><button className={styles.mobileChapterToggle} type="button" aria-expanded={chaptersExpanded} aria-controls="guide-chapters" onClick={() => setChaptersExpanded(!chaptersExpanded)}>{chaptersExpanded ? 'Collapse contents −' : `Show ${chapters.length} chapters +`}</button></div><ol id="guide-chapters" ref={chapterList} className={`${styles.chapterList} ${chaptersExpanded ? '' : styles.collapsed}`}>{chapters.map((chapter, index) => <li key={chapter.title} className={`${styles.chapter} ${active === index ? styles.active : ''}`}><button type="button" onClick={() => seek(index)} aria-current={active === index ? 'true' : undefined} aria-label={`${active === index ? 'Current chapter, ' : ''}${time(chapter.start)} ${chapter.title}`}><span className={styles.chapterNumber}>{String(index + 1).padStart(2, '0')}</span><span className={styles.chapterInfo}><strong>{chapter.title}</strong><span>{time(chapter.start)}<span aria-hidden="true"> / </span>{time((chapters[index + 1]?.start ?? tour.duration) - chapter.start)} duration</span></span><span className={styles.chapterPlay} aria-hidden="true">{active === index ? '▶' : '↗'}</span></button></li>)}</ol></aside>
      </div>
      {tour.ready && <section className={styles.downloads} aria-labelledby="take-guide-title"><div><h2 id="take-guide-title">Downloads and text review</h2><p>Save the video for offline viewing, or search the narration and timeline.</p></div><div className={styles.downloadLinks}><a href={mediaAsset('sciforge-guide-2026-09-05.mp4')} download><span>Full video<small>MP4 · Chinese narration</small></span><span aria-hidden="true">↓</span></a><a href={mediaAsset('captions.en.srt')} download><span>English captions<small>SRT · English</small></span><span aria-hidden="true">↓</span></a><a href={mediaAsset('captions.srt')} download><span>Chinese captions<small>SRT · Simplified Chinese</small></span><span aria-hidden="true">↓</span></a><a href={mediaAsset('transcript.en.md')} download><span>Narration and timeline<small>Markdown · English · searchable</small></span><span aria-hidden="true">↓</span></a></div></section>}
      <section className={styles.next}><div><h2>Next, practice</h2><p>Start with the quickstart, or keep reading the cases and the feature manual.</p></div><div className={styles.nextLinks}><Link to="/docs/getting-started/five-minute-quickstart"><span>01</span>Five-minute quickstart <b aria-hidden="true">→</b></Link><Link to="/docs/cases/virtual-cell-evidence-atlas"><span>02</span>ECCITE-seq evidence case <b aria-hidden="true">→</b></Link><Link to="/docs/features/overview"><span>03</span>Find features and extensions <b aria-hidden="true">→</b></Link></div></section>
    </main>
  </Layout>;
}
