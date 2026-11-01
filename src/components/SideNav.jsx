const items = [
  { id: 'dance', label: 'Dance', color: 'bg-p5-red' },
  { id: 'design', label: 'Design', color: 'bg-silver' },
  { id: 'unity', label: 'Unity', color: 'bg-pixel-grass' },
]

export default function SideNav({ active, onJump }) {
  return (
    <nav className="fixed right-2 top-1/2 z-50 -translate-y-1/2 flex flex-col gap-4 md:right-8">
      {items.map((it) => {
        const on = active === it.id
        return (
          <button
            key={it.id}
            onClick={() => onJump(it.id)}
            aria-label={`Go to ${it.label}`}
            className="group flex items-center justify-end gap-3"
          >
            <span
              className={`font-mono text-[10px] uppercase tracking-[0.3em] text-white/70 transition-opacity ${
                on ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}
            >
              {it.label}
            </span>
            <span
              className={`block h-3 w-3 rotate-45 border-2 border-white/80 transition-all ${
                on ? `${it.color} scale-125` : 'bg-transparent'
              }`}
            />
          </button>
        )
      })}
    </nav>
  )
}
