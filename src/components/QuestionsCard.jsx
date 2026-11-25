import { Clipboard, Check, ListChecks } from 'lucide-react'
import { useState } from 'react'

export default function QuestionsCard({ questions, onCopy }) {
  const [copied, setCopied] = useState(false)
  const copy = () => { onCopy(questions.map((question, index) => `${index + 1}. ${question}`).join('\n')); setCopied(true); setTimeout(() => setCopied(false), 1600) }
  return <article className="rounded-3xl border border-ink/10 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-white/[.06]"><div className="mb-5 flex items-center justify-between"><div className="flex items-center gap-3"><div className="flex h-9 w-9 items-center justify-center rounded-xl bg-coral/20 text-coral"><ListChecks size={17} /></div><div><p className="text-[10px] font-bold uppercase tracking-[.16em] text-ink/45 dark:text-white/45">02 / reflect</p><h3 className="font-display text-lg font-bold">Important questions</h3></div></div><button onClick={copy} className="rounded-lg p-2 text-ink/40 transition hover:bg-ink/5 hover:text-ink dark:text-white/45 dark:hover:bg-white/10 dark:hover:text-white" title="Copy questions">{copied ? <Check size={16} className="text-emerald-500" /> : <Clipboard size={16} />}</button></div><ol className="space-y-3">{questions.map((question, index) => <li key={question} className="flex gap-3 text-sm leading-6 text-ink/75 dark:text-white/75"><span className="font-display text-xs font-bold text-coral">0{index + 1}</span><span>{question}</span></li>)}</ol></article>
}
