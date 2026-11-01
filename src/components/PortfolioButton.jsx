import { motion } from 'framer-motion'

/**
 * The "View Portfolio" call-to-action. Opens external URLs in a new tab,
 * internal paths (starting with / or #) in the same tab.
 */
export default function PortfolioButton({ href, label, className = '' }) {
  const external = /^https?:\/\//.test(href)
  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={`portfolio-btn inline-flex w-fit items-center gap-3 px-8 py-4 text-sm uppercase tracking-[0.25em] ${className}`}
    >
      {label}
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </motion.a>
  )
}
