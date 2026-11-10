import { useEffect, useState } from 'react'
import Panel from './Panel'
import HireSheet from './HireSheet'
import { ROLES, SITE } from '../content/pages'

/**
 * THE CHARACTER SELECT
 * One screen, three doors. Each role is a tall panel painted in its own
 * world. Hovering (or tapping) a panel opens it: it grows, the other two
 * shrink, and the pitch, services and two buttons appear. "Hire me" opens
 * the contact sheet for that role; "Portfolio" opens the portfolio site.
 *
 * Content: src/content/pages.js
 * Looks:   src/styles/themes.css (.world-dance / .world-design / .world-unity)
 */
export default function Select() {
  const [active, setActive] = useState(null) // role id that is open, or null (all equal)
  const [sheet, setSheet] = useState(null) // role id the hire sheet shows, 'all' for the Contact button, or null
  const [touch, setTouch] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(hover: none)')
    const update = () => setTouch(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  // Arrow keys move between panels, Escape closes everything.
  useEffect(() => {
    const onKey = (e) => {
      if (sheet) return
      const i = ROLES.findIndex((r) => r.id === active)
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') setActive(ROLES[(i + 1) % ROLES.length].id)
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') setActive(ROLES[(i - 1 + ROLES.length) % ROLES.length].id)
      if (e.key === 'Escape') setActive(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, sheet])

  const sheetRole = sheet && sheet !== 'all' ? ROLES.find((r) => r.id === sheet) : null

  return (
    <main className="select fixed inset-0 overflow-hidden bg-black" data-active={active ?? ''}>
      <header className="topbar pointer-events-none absolute inset-x-0 top-0 z-30">
        <div className="flex items-center justify-between px-5 pt-4 md:h-full md:px-8 md:pt-0">
          <span className="site-name text-[12px] uppercase tracking-[0.32em]">{SITE.name}</span>
          <button type="button" onClick={() => setSheet('all')} className="contact-btn pointer-events-auto text-[12px] uppercase tracking-[0.3em]">
            {SITE.contactLabel}
          </button>
        </div>
        <h1 className="question">{SITE.question}</h1>
      </header>

      <div className="panels absolute inset-0 flex flex-col md:flex-row" onMouseLeave={() => !touch && setActive(null)}>
        {ROLES.map((role) => (
          <Panel
            key={role.id}
            role={role}
            state={active === null ? 'idle' : active === role.id ? 'active' : 'dim'}
            touch={touch}
            onActivate={() => setActive(role.id)}
            onHire={() => setSheet(role.id)}
          />
        ))}
      </div>

      {active === null && (
        <p aria-hidden className="hint pointer-events-none absolute bottom-5 left-1/2 z-30 hidden -translate-x-1/2 text-[11px] uppercase tracking-[0.4em] md:block">
          {SITE.hint}
        </p>
      )}

      <HireSheet open={sheet !== null} role={sheetRole} onClose={() => setSheet(null)} />
    </main>
  )
}
