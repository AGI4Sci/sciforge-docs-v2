import {useEffect, useId, useMemo, useRef, useState} from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import records from '@site/src/data/search-index.json';
import styles from './styles.module.css';

export default function DocSearch() {
  const dialog = useRef<HTMLDialogElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const searchId = useId();
  const inputId = `doc-search-input-${searchId}`;
  const titleId = `doc-search-title-${searchId}`;
  const [query, setQuery] = useState('');
  const {pathname} = useLocation();
  function open() { if (!dialog.current?.open) dialog.current?.showModal(); input.current?.focus(); }
  function close() { dialog.current?.close(); }
  useEffect(() => { close(); }, [pathname]);
  useEffect(() => {
    const handle = (event: KeyboardEvent) => {
      if (event.defaultPrevented || !(event.metaKey || event.ctrlKey) || event.key.toLowerCase() !== 'k') return;
      const button = trigger.current;
      const bounds = button?.getBoundingClientRect();
      if (!button || !bounds?.width || bounds.right <= 0 || bounds.left >= window.innerWidth || getComputedStyle(button).visibility !== 'visible') return;
      event.preventDefault();
      dialog.current?.open ? close() : open();
    };
    document.addEventListener('keydown', handle);
    return () => document.removeEventListener('keydown', handle);
  }, []);
  const results = useMemo(() => {
    const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return records.map(record => {
      const searchable = `${record.title} ${record.description} ${record.body}`.toLowerCase();
      const matches = terms.every(term => searchable.includes(term));
      const score = terms.reduce((sum, term) => sum + (record.title.toLowerCase().includes(term) ? 20 : 0) + (record.description.toLowerCase().includes(term) ? 4 : 0), 0);
      const pos = terms.length ? record.body.toLowerCase().indexOf(terms[0]) : -1;
      const snippet = score >= 20 || pos < 0 ? record.description : `${pos > 25 ? '…' : ''}${record.body.slice(Math.max(0, pos - 25), pos + 120)}…`;
      return {...record, matches, score, snippet};
    }).filter(record => record.matches).sort((a, b) => b.score - a.score).slice(0, query.trim() ? 12 : 6);
  }, [query]);
  return <>
    <button ref={trigger} className={styles.trigger} type="button" onClick={open} aria-label="搜索文档"><svg aria-hidden="true" width="15" height="15" viewBox="0 0 20 20" fill="none"><circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5"/><path d="m12 12 5 5" stroke="currentColor" strokeWidth="1.5"/></svg><span>搜索文档</span><kbd>⌘ K</kbd></button>
    <dialog ref={dialog} className={styles.dialog} aria-labelledby={titleId} onClick={event => { if (event.target === event.currentTarget) close(); }}>
      <div className={styles.top}><label id={titleId} htmlFor={inputId}>搜索使用手册</label><button type="button" onClick={close} aria-label="关闭搜索">Esc</button></div>
      <input ref={input} id={inputId} className={styles.input} type="search" placeholder="搜索案例、工具、配置或问题…" value={query} onChange={event => setQuery(event.target.value)} autoComplete="off" onKeyDown={event => { if (event.key === 'ArrowDown') { event.preventDefault(); dialog.current?.querySelector<HTMLAnchorElement>('[data-search-result]')?.focus(); } }} />
      <p className={styles.count} role="status" aria-live="polite">{query ? `找到 ${results.length}${results.length === 12 ? '+' : ''} 个相关页面` : '推荐阅读 · 支持中文与英文全文搜索'}</p>
      <div className={styles.results}>{results.length ? results.map(record => <Link key={record.route} to={record.route} onClick={close} data-search-result className={styles.result}><span>{record.section}</span><strong>{record.title}<b aria-hidden="true">↗</b></strong><p>{record.snippet}</p></Link>) : <div className={styles.empty}><svg aria-hidden="true" className={styles.emptyIcon} width="56" height="56" viewBox="0 0 56 56" fill="none"><rect x="10" y="6" width="30" height="40" rx="4" stroke="currentColor" strokeWidth="2"/><path d="M17 16h16M17 23h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="35" cy="35" r="9" fill="var(--sf-paper)" stroke="currentColor" strokeWidth="2"/><path d="m42 42 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg><strong>没有找到相关内容</strong><p>换个说法，或只保留任务中的关键词，例如“绘图”“模型连接”。</p><button type="button" className={styles.clearSearch} onClick={() => {setQuery(''); input.current?.focus();}}>清空搜索，重新查找</button><Link to="/docs/features/overview" onClick={close} className={styles.browseLink}>浏览功能手册 →</Link></div>}</div>
      <div className={styles.bottom}>Tab 选择结果 · Enter 打开 · Esc 关闭</div>
    </dialog>
  </>;
}
