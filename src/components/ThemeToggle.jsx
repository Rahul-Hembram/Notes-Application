import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle({ dark, onToggle }) {
  return (
    <button onClick={onToggle} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-white text-ink transition hover:-translate-y-0.5 hover:shadow-soft dark:border-white/10 dark:bg-white/10 dark:text-white" aria-label="Toggle color theme" title="Toggle theme">
      {dark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  )
}
