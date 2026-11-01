/**
 * Directional slide transition used by every page.
 * `custom` is the { x, y } direction from useNavigation.
 *   Moving right  → { x: 1, y: 0 }   page exits left, next enters from right
 *   Moving down   → { x: 0, y: 1 }   page exits up,   next enters from below
 *   Diagonal      → { x: -0.5, y: 1 } etc.
 * Tweak SLIDE_DURATION / ease here to change the feel site-wide.
 */
export const SLIDE_DURATION = 0.85

const pct = (n) => `${n * 100}%`

export const slideVariants = {
  enter: (d) => ({ x: pct(d.x), y: pct(d.y), scale: 1.02 }),
  center: { x: 0, y: 0, scale: 1 },
  exit: (d) => ({ x: pct(-d.x), y: pct(-d.y), scale: 0.98 }),
}

export const slideTransition = {
  duration: SLIDE_DURATION,
  ease: [0.76, 0, 0.24, 1],
}

/** Staggered reveal for text inside a page once it has slid in. */
export const contentVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.5 + i * 0.09, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

/** Photo reveal: slides up slightly and un-blurs. */
export const photoVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}
