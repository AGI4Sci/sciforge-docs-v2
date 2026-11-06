import {useEffect, useRef, useState} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import tour from '@site/src/data/tour.json';
import styles from './guide.module.css';

type Chapter = {title: string; start: number; route: string};
const chapters = tour.chapters as Chapter[];
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
      setShareStatus('章节链接已复制');
    } catch {
      window.history.replaceState(window.history.state, '', url.toString());
      setShareStatus('请复制地址栏中的章节链接');
    }
  }
  return <Layout title="视频导览" description="按章节学习 SciForge：快速开始、虚拟细胞案例、工作台、证据与扩展。配有中文旁白、字幕、原文与章节跳转。">
    <main className={`${styles.guide} ${cinema ? styles.cinema : ''}`}>
      <header className={styles.heading}>
        <div><h1>视频导览</h1><p className={styles.introduction}>按章节了解 SciForge 的研究流程与两个虚拟细胞案例，再打开对应手册动手实践。</p></div>
        <div className={styles.facts} aria-label="导览信息"><span><b>{time(tour.duration)}</b> 总时长</span><span><b>{chapters.length}</b> 个章节</span><span>中文旁白与字幕</span></div>
      </header>
      <div className={styles.watchToolbar}><span>选择章节即可跳转播放</span><button ref={cinemaToggle} type="button" onClick={() => setCinema(!cinema)} aria-pressed={cinema} aria-controls="guide-player-layout"><span aria-hidden="true">▣</span>{cinema ? '收起宽屏' : '宽屏观看'}</button></div>
      <div id="guide-player-layout" className={styles.playerGrid}>
        <div>
          {tour.ready ? <video ref={player} className={styles.video} aria-label="SciForge 中文使用导览" tabIndex={0} controls playsInline preload="metadata" poster={mediaAsset('poster.jpg')} onLoadedMetadata={applyPendingChapter} onError={() => setMediaError(true)} onTimeUpdate={() => { if (pendingChapter.current !== null) return; const now = player.current?.currentTime || 0; setActive(chapters.reduce((index, chapter, i) => now + .001 >= chapter.start ? i : index, 0)); }}>
            <source src={mediaAsset('sciforge-guide-2026-09-05.mp4')} type="video/mp4" onError={() => setMediaError(true)} />
            <track src={mediaAsset('captions.vtt')} label="简体中文" kind="captions" srcLang="zh" />
            你的浏览器暂不支持内嵌视频，请使用下方下载链接。
          </video> : <div className={styles.preparing}><span>SCIFORGE FIELD GUIDE</span><h2>分章节视频导览</h2><p>本页将与新版视频一同发布。</p></div>}
          {current && <div className={styles.nowPlaying}><div><span>当前章节 <b>{String(active + 1).padStart(2, '0')} / {String(chapters.length).padStart(2, '0')}</b></span><h2 aria-live="polite" aria-atomic="true">{current.title}</h2></div><div className={styles.chapterControls}><button type="button" onClick={() => seek(active - 1)} disabled={active === 0} aria-label="上一章">←</button><button type="button" onClick={() => seek(active + 1)} disabled={active === chapters.length - 1} aria-label="下一章">→</button></div></div>}
          {current && <div className={styles.chapterActions}><Link to={current.route}>阅读本章手册 ↗</Link><button type="button" onClick={shareChapter}>复制章节链接 ↗</button><span role="status">{shareStatus}</span></div>}
          {(playError || mediaError) && <p className={styles.error} role="status">{mediaError ? '视频暂时无法加载。可以刷新页面重试，或使用下方的 MP4 下载链接。' : '点击播放器的播放按钮继续观看。'}</p>}
          <p className={styles.scopeNote}>画面包含文档演示与完整 SciForge 工作区截图，不代表一次连续实验运行。实验性能力在对应章节中单独说明。</p>
        </div>
        <aside className={styles.chapterNav} aria-label="视频章节"><div className={styles.chapterHeading}><h2>观看目录</h2><span>{chapters.length} 章 · 按需观看</span><button className={styles.mobileChapterToggle} type="button" aria-expanded={chaptersExpanded} aria-controls="guide-chapters" onClick={() => setChaptersExpanded(!chaptersExpanded)}>{chaptersExpanded ? '收起目录 −' : `展开 ${chapters.length} 章 ＋`}</button></div><ol id="guide-chapters" ref={chapterList} className={`${styles.chapterList} ${chaptersExpanded ? '' : styles.collapsed}`}>{chapters.map((chapter, index) => <li key={chapter.title} className={`${styles.chapter} ${active === index ? styles.active : ''}`}><button type="button" onClick={() => seek(index)} aria-current={active === index ? 'true' : undefined} aria-label={`${active === index ? '当前章节，' : ''}${time(chapter.start)} ${chapter.title}`}><span className={styles.chapterNumber}>{String(index + 1).padStart(2, '0')}</span><span className={styles.chapterInfo}><strong>{chapter.title}</strong><span>{time(chapter.start)}<span aria-hidden="true"> / </span>{time((chapters[index + 1]?.start ?? tour.duration) - chapter.start)} 时长</span></span><span className={styles.chapterPlay} aria-hidden="true">{active === index ? '▶' : '↗'}</span></button></li>)}</ol></aside>
      </div>
      {tour.ready && <section className={styles.downloads} aria-labelledby="take-guide-title"><div><h2 id="take-guide-title">下载与文字回顾</h2><p>保存视频离线观看，或检索旁白与时间线。</p></div><div className={styles.downloadLinks}><a href={mediaAsset('sciforge-guide-2026-09-05.mp4')} download><span>完整视频<small>MP4 · 中文旁白</small></span><span aria-hidden="true">↓</span></a><a href={mediaAsset('captions.srt')} download><span>逐句字幕<small>SRT · 简体中文</small></span><span aria-hidden="true">↓</span></a><a href={mediaAsset('transcript.md')} download><span>旁白与时间线<small>Markdown · 可检索</small></span><span aria-hidden="true">↓</span></a></div></section>}
      <section className={styles.next}><div><h2>接下来，动手实践</h2><p>从快速开始入手，或继续阅读案例与功能手册。</p></div><div className={styles.nextLinks}><Link to="/docs/getting-started/five-minute-quickstart"><span>01</span>五分钟快速开始 <b aria-hidden="true">→</b></Link><Link to="/docs/cases/virtual-cell-evidence-atlas"><span>02</span>ECCITE-seq 证据案例 <b aria-hidden="true">→</b></Link><Link to="/docs/features/overview"><span>03</span>查找功能与扩展 <b aria-hidden="true">→</b></Link></div></section>
    </main>
  </Layout>;
}
