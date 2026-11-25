import { useEffect, useState } from 'react'
import { Download, Copy, Check, Sparkles, AlertCircle, LibraryBig } from 'lucide-react'
import html2pdf from 'html2pdf.js'
import Navbar from './components/Navbar'
import NoteInput from './components/NoteInput'
import SummaryCard from './components/SummaryCard'
import QuestionsCard from './components/QuestionsCard'
import MCQCard from './components/MCQCard'
import FlashcardCard from './components/FlashcardCard'
import HistoryPanel from './components/HistoryPanel'
import { demoResult, generateStudyKit } from './services/gemini'

const storageKey = 'studykit-history'

function App() {
  const [notes, setNotes] = useState('')
  const [result, setResult] = useState(null)
  const [history, setHistory] = useState(() => JSON.parse(localStorage.getItem(storageKey) || '[]'))
  const [dark, setDark] = useState(() => localStorage.getItem('studykit-theme') === 'dark')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  useEffect(() => { document.documentElement.classList.toggle('dark', dark); localStorage.setItem('studykit-theme', dark ? 'dark' : 'light') }, [dark])
  useEffect(() => { localStorage.setItem(storageKey, JSON.stringify(history)) }, [history])

  const handleGenerate = async () => {
    if (!notes.trim()) return setError('Add some notes first so there is something to work with.')
    setError(''); setLoading(true)
    try {
      const kit = await generateStudyKit(notes)
      setResult(kit)
      setHistory((current) => [{ id: Date.now(), title: notes.trim().split(/\s+/).slice(0, 6).join(' ') || 'Untitled study kit', notes, result: kit }, ...current.filter((item) => item.notes !== notes).slice(0, 9)])
    } catch (err) { setError(err.response?.data?.error?.message || err.message || 'Something went wrong while generating your kit.') } finally { setLoading(false) }
  }

  const copyText = async (text) => { await navigator.clipboard?.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 1600) }
  const allText = result ? `SUMMARY\n${result.summary}\n\nIMPORTANT QUESTIONS\n${result.questions.map((question, index) => `${index + 1}. ${question}`).join('\n')}\n\nMCQS\n${result.mcqs.map((mcq, index) => `${index + 1}. ${mcq.question}\n${mcq.options.join(', ')}\nAnswer: ${mcq.answer}`).join('\n\n')}\n\nFLASHCARDS\n${result.flashcards.map((card) => `Q: ${card.question}\nA: ${card.answer}`).join('\n\n')}` : ''
  const exportPdf = () => { const element = document.getElementById('results'); html2pdf().set({ margin: 0.45, filename: 'my-study-kit.pdf', image: { type: 'jpeg', quality: 0.95 }, html2canvas: { scale: 2 }, jsPDF: { unit: 'in', format: 'letter' } }).from(element).save() }
  const loadItem = (item) => { setNotes(item.notes); setResult(item.result); setError(''); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  const deleteItem = (id) => setHistory((current) => current.filter((item) => item.id !== id))

  return <div className="min-h-screen bg-cream transition-colors dark:bg-ink"><div className="mx-auto max-w-7xl px-5 pb-16 sm:px-8"><Navbar dark={dark} onToggle={() => setDark(!dark)} historyCount={history.length} /><main className="pt-12 sm:pt-16"><div className="mb-10 grid gap-8 lg:grid-cols-[1fr_280px] lg:items-end"><div className="animate-enter"><div className="mb-4 inline-flex items-center gap-2 rounded-full border border-coral/25 bg-coral/10 px-3 py-1.5 text-xs font-bold text-coral"><Sparkles size={13} /> Your focused study companion</div><h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.04] tracking-[-.04em] sm:text-6xl">Turn messy notes into <span className="relative inline-block">clear thinking<span className="absolute -bottom-4 left-0 h-2 w-full bg-mint/70 z-[-1]" /></span>.</h1><p className="mt-5 max-w-xl text-base leading-7 text-ink/55 dark:text-white/55">A little help from AI, a lot more confidence before your next exam.</p></div><HistoryPanel history={history} onLoad={loadItem} onDelete={deleteItem} /></div><div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]"><div><NoteInput notes={notes} setNotes={setNotes} onGenerate={handleGenerate} onClear={() => { setNotes(''); setError('') }} loading={loading} />{error && <div className="mt-4 flex items-start gap-3 rounded-2xl border border-red-300/50 bg-red-50 p-4 text-sm text-red-700 dark:bg-red-400/10 dark:text-red-300"><AlertCircle size={18} className="mt-0.5 shrink-0" />{error}</div>}</div><div className="hidden rounded-3xl border border-ink/10 bg-mint p-5 lg:block dark:border-white/10"><LibraryBig className="mb-8 text-ink" size={22} /><p className="font-display text-2xl font-bold leading-tight text-ink">One note.<br />Four ways<br />to remember.</p><div className="mt-8 h-px bg-ink/15" /><p className="mt-4 text-xs font-semibold leading-5 text-ink/60">Summary, questions, MCQs, and flashcards in one calm workspace.</p></div></div>{loading && <div className="flex items-center justify-center gap-3 py-16 text-sm font-semibold text-ink/60 dark:text-white/60"><span className="spinner h-5 w-5 rounded-full border-2 border-ink/20 border-t-ink dark:border-white/20 dark:border-t-white" /> Thinking through your notes...</div>}{result && !loading && <section id="results" className="animate-enter mt-14"><div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-[10px] font-bold uppercase tracking-[.18em] text-coral">Your study kit is ready</p><h2 className="mt-1 font-display text-3xl font-bold tracking-tight">Review, recall, repeat.</h2></div><div className="flex gap-2"><button onClick={() => copyText(allText)} className="inline-flex items-center gap-2 rounded-xl border border-ink/10 bg-white px-3 py-2.5 text-xs font-bold transition hover:-translate-y-0.5 hover:shadow-soft dark:border-white/10 dark:bg-white/10">{copied ? <Check size={15} className="text-emerald-500" /> : <Copy size={15} />} {copied ? 'Copied all' : 'Copy all'}</button><button onClick={exportPdf} className="inline-flex items-center gap-2 rounded-xl bg-coral px-3 py-2.5 text-xs font-bold text-white transition hover:-translate-y-0.5 hover:bg-coral/90"><Download size={15} /> Export PDF</button></div></div><div className="grid gap-6 lg:grid-cols-2"><SummaryCard summary={result.summary} onCopy={copyText} /><QuestionsCard questions={result.questions} onCopy={copyText} /><div className="lg:col-span-2"><MCQCard mcqs={result.mcqs} /></div><div className="lg:col-span-2"><FlashcardCard flashcards={result.flashcards} /></div></div></section>} {!result && !loading && <div className="mt-14 border-t border-ink/10 pt-5 text-xs font-semibold text-ink/40 dark:border-white/10 dark:text-white/40">Tip: {import.meta.env.VITE_GEMINI_API_KEY ? 'Your Gemini key is connected. Generate a kit from any lecture notes.' : 'Add a VITE_GEMINI_API_KEY to .env for live Gemini results. Demo content is ready for preview.'}</div>}</main></div></div>
}

export default App
