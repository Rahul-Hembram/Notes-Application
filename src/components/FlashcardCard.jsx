import { useState } from 'react'
import { Layers3, RotateCcw } from 'lucide-react'

function Flashcard({ card, index }) {
  const [flipped, setFlipped] = useState(false)
  return <button onClick={() => setFlipped(!flipped)} className="group h-44 w-full [perspective:900px]" aria-label={`Flip flashcard ${index + 1}`}><div className={`relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] ${flipped ? '[transform:rotateY(180deg)]' : ''}`}><div className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-ink/10 bg-cream p-4 text-left [backface-visibility:hidden] dark:border-white/10 dark:bg-ink/50"><span className="text-[10px] font-bold uppercase tracking-[.16em] text-coral">Card 0{index + 1}</span><p className="font-display text-base font-bold leading-6">{card.question}</p><span className="flex items-center gap-1 text-[10px] font-semibold text-ink/40 dark:text-white/40"><RotateCcw size={12} /> Click to flip</span></div><div className="absolute inset-0 flex flex-col justify-between rounded-2xl bg-mint p-4 text-left text-ink [backface-visibility:hidden] [transform:rotateY(180deg)]"><span className="text-[10px] font-bold uppercase tracking-[.16em] text-ink/50">Answer</span><p className="text-sm font-semibold leading-6">{card.answer}</p><span className="text-[10px] font-bold uppercase tracking-[.16em] text-ink/45">Remember this</span></div></div></button>
}

export default function FlashcardCard({ flashcards }) {
  return <article className="rounded-3xl border border-ink/10 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-white/[.06]"><div className="mb-6 flex items-center gap-3"><div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-100 text-sky-700 dark:bg-sky-300/20 dark:text-sky-300"><Layers3 size={17} /></div><div><p className="text-[10px] font-bold uppercase tracking-[.16em] text-ink/45 dark:text-white/45">04 / recall</p><h3 className="font-display text-lg font-bold">Flashcards</h3></div></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{flashcards.map((card, index) => <Flashcard key={card.question} card={card} index={index} />)}</div></article>
}
