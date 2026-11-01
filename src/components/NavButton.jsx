const POSITIONS = {
  left: 'left-4 top-1/2 -translate-y-1/2 md:left-8',
  right: 'right-4 top-1/2 -translate-y-1/2 md:right-8',
  bottom: 'bottom-5 right-4 md:bottom-8 md:left-1/2 md:right-auto md:-translate-x-1/2',
  'top-left': 'top-20 left-4 md:top-8 md:left-1/4',
  'top-right': 'top-20 right-4 md:top-8 md:right-1/4',
}

// Chevron direction per position
const CHEVRON = {
  left: 'M15 6l-6 6 6 6',
  right: 'M9 6l6 6-6 6',
  bottom: 'M6 9l6 6 6-6',
  'top-left': 'M6 15l6-6 6 6',
  'top-right': 'M6 15l6-6 6 6',
}

const LABEL_SIDE = {
  left: 'flex-row-reverse',
  right: 'flex-row',
  bottom: 'flex-col-reverse',
  'top-left': 'flex-col',
  'top-right': 'flex-col',
}

/**
 * Arrow button that moves to another page.
 * Colours come from the page via the `className` (uses currentColor).
 */
export default function NavButton({ position, label, onClick, className = '' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Go to ${label}`}
      className={`nav-btn group absolute z-30 flex items-center gap-2 ${LABEL_SIDE[position]} ${POSITIONS[position]} ${className}`}
    >
      <span className="nav-label hidden text-[10px] uppercase tracking-[0.3em] opacity-0 transition-opacity group-hover:opacity-80 group-focus-visible:opacity-80 md:block">
        {label}
      </span>
      <span className="grid h-12 w-12 place-items-center rounded-full border border-current/40 transition-all group-hover:scale-110 group-hover:border-current md:h-14 md:w-14">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d={CHEVRON[position]} />
        </svg>
      </span>
    </button>
  )
}
