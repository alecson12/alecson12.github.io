import { motion } from 'framer-motion'

/**
 * The "View Portfolio" call-to-action. Opens external URLs in a new tab,
 * internal paths (starting with / or #) in the same tab.
 * Look and feel per page: .portfolio-btn in themes.css
 */
export default function PortfolioButton({ href, label }) {
  const external = /^https?:\/\//.test(href)
  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="portfolio-btn relative inline-flex w-fit items-center gap-4 overflow-hidden px-9 py-4 text-xs uppercase tracking-[0.3em]"
    >
      <span className="relative z-10">{label}</span>
      <svg viewBox="0 0 24 24" className="relative z-10 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
      <span aria-hidden className="btn-sheen absolute inset-0" />
    </motion.a>
  )
}
