import { Clipboard, Check, AlignLeft } from 'lucide-react'
import { useState } from 'react'

export default function SummaryCard({ summary, onCopy }) {
  const [copied, setCopied] = useState(false)
  const copy = () => { onCopy(summary); setCopied(true); setTimeout(() => setCopied(false), 1600) }
  return <article className="rounded-3xl border border-ink/10 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-white/[.06]"><div className="mb-5 flex items-center justify-between"><div className="flex items-center gap-3"><div className="flex h-9 w-9 items-center justify-center rounded-xl bg-mint text-ink"><AlignLeft size={17} /></div><div><p className="text-[10px] font-bold uppercase tracking-[.16em] text-ink/45 dark:text-white/45">01 / digest</p><h3 className="font-display text-lg font-bold">Summary</h3></div></div><button onClick={copy} className="rounded-lg p-2 text-ink/40 transition hover:bg-ink/5 hover:text-ink dark:text-white/45 dark:hover:bg-white/10 dark:hover:text-white" title="Copy summary">{copied ? <Check size={16} className="text-emerald-500" /> : <Clipboard size={16} />}</button></div><p className="text-sm leading-7 text-ink/70 dark:text-white/70">{summary}</p></article>
}
