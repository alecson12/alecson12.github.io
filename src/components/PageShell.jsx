import { motion } from 'framer-motion'
import NavButton from './NavButton'
import Rails from './Rails'
import { NAV_LINKS } from '../navigation/routes'
import { slideVariantsFor, slideTransitionFor } from '../transitions/slide'
import { SITE_NAME } from '../content/pages'

/**
 * Full-viewport wrapper every page uses. Handles:
 *  - the directional slide in / out, flavoured per world (transitions/slide.js)
 *  - the site name in the corner and the page number
 *  - shared atmosphere layers (vignette, grain, rails)
 *  - the arrow buttons for this page (from navigation/routes.js)
 * Pages pass their own theme class and their content as children.
 */
export default function PageShell({ id, index, direction, go, theme, children }) {
  return (
    <motion.section
      key={id}
      custom={direction}
      variants={slideVariantsFor(id)}
      initial="enter"
      animate="center"
      exit="exit"
      transition={slideTransitionFor(id)}
      className={`page absolute inset-0 overflow-hidden ${theme}`}
      aria-label={id}
    >
      <Rails />

      {children}

      {/* atmosphere on top of content, under the UI */}
      <div aria-hidden className="vignette pointer-events-none absolute inset-0 z-20" />
      <div aria-hidden className="grain pointer-events-none absolute inset-0 z-20" />

      <header className="absolute left-6 top-6 z-30 flex items-center gap-4 md:left-10 md:top-8">
        <span className="site-name text-[11px] uppercase tracking-[0.4em]">{SITE_NAME}</span>
        <span className="site-name hidden text-[11px] opacity-50 md:inline">— 0{index} / 03</span>
      </header>

      {NAV_LINKS[id].map((link) => (
        <NavButton key={link.to} position={link.position} label={link.label} onClick={() => go(link.to)} />
      ))}
    </motion.section>
  )
}
