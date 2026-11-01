import { motion } from 'framer-motion'
import NavButton from './NavButton'
import { NAV_LINKS } from '../navigation/routes'
import { slideVariants, slideTransition } from '../transitions/slide'
import { SITE_NAME } from '../content/pages'

/**
 * Full-viewport wrapper every page uses. Handles:
 *  - the horizontal slide in / out (via AnimatePresence in App)
 *  - the site name in the corner
 *  - the arrow buttons for this page (from navigation/routes.js)
 * Pages pass their own theme class and their content as children.
 */
export default function PageShell({ id, direction, go, theme, children }) {
  return (
    <motion.section
      key={id}
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={slideTransition}
      className={`page absolute inset-0 overflow-x-hidden overflow-y-auto md:overflow-hidden ${theme}`}
      aria-label={id}
    >
      <header className="absolute left-6 top-6 z-30 md:left-10 md:top-8">
        <span className="site-name text-[11px] uppercase tracking-[0.4em]">{SITE_NAME}</span>
      </header>

      {children}

      {NAV_LINKS[id].map((link) => (
        <NavButton key={link.to} position={link.position} label={link.label} onClick={() => go(link.to)} />
      ))}
    </motion.section>
  )
}
