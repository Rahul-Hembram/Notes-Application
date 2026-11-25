import { BookOpen, Sparkles } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

export default function Navbar({ dark, onToggle, historyCount }) {
  return (
    <header className="flex items-center justify-between border-b border-ink/10 py-5 dark:border-white/10">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-mint shadow-sm dark:bg-mint dark:text-ink"><BookOpen size={19} /></div>
        <div><p className="font-display text-base font-bold tracking-tight">StudyKit<span className="text-coral">.</span></p><p className="text-[10px] font-bold uppercase tracking-[.18em] text-ink/45 dark:text-white/45">AI notes lab</p></div>
      </div>
      <div className="flex items-center gap-3"><div className="hidden items-center gap-2 text-xs font-semibold text-ink/50 sm:flex dark:text-white/50"><Sparkles size={14} className="text-coral" /> {historyCount} saved kits</div><ThemeToggle dark={dark} onToggle={onToggle} /></div>
    </header>
  )
}
