import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CONTACT, ROLES } from '../content/pages'

/**
 * The contact sheet. Opens from a panel's "Hire me" (themed to that role,
 * with its services and its own email if it has one) or from the Contact
 * button in the top bar (plain, all three roles listed).
 */
export default function HireSheet({ open, role, onClose }) {
  const [copied, setCopied] = useState(false)
  const email = role?.email || CONTACT.email
  const subject = role?.hireSubject || 'Hello Alecson'
  const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}`

  useEffect(() => {
    if (!open) return
    setCopied(false)
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard unavailable: the address is still shown as text */
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="sheet-backdrop fixed inset-0 z-40 flex items-end justify-center md:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="sheet-title"
            className={`sheet ${role ? `world-${role.id}` : 'world-all'}`}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" className="sheet-close" aria-label="Close" onClick={onClose}>
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                <path d="M5 5l14 14M19 5L5 19" />
              </svg>
            </button>

            <p className="eyebrow">{role ? 'Hire me as a' : 'Get in touch'}</p>
            <h2 id="sheet-title" className="sheet-title">
              {role ? role.title : 'Alecson Gantica'}
            </h2>
            {role ? (
              <p className="pitch">{role.pitch}</p>
            ) : (
              <ul className="roles">
                {ROLES.map((r) => (
                  <li key={r.id}>{r.title}</li>
                ))}
              </ul>
            )}

            {role && (
              <ul className="chips" aria-label="What for">
                {role.services.map((s) => (
                  <li key={s} className="chip">
                    {s}
                  </li>
                ))}
              </ul>
            )}
            {role?.availability && <p className="avail">{role.availability}</p>}

            <div className="actions">
              <a href={mailto} className="btn btn-hire">
                Email me
              </a>
              <button type="button" className="btn btn-portfolio" onClick={copy}>
                {copied ? 'Copied' : 'Copy address'}
              </button>
            </div>
            <p className="email">{email}</p>

            <ul className="links">
              {CONTACT.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noreferrer">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            {CONTACT.based && <p className="based">{CONTACT.based}</p>}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
