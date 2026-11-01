/**
 * Directional slide transition used by every page.
 * `custom` is the { x, y } direction from useNavigation.
 *   Moving right  → { x: 1, y: 0 }   page exits left, next enters from right
 *   Moving down   → { x: 0, y: 1 }   page exits up,   next enters from below
 *   Diagonal      → { x: -1, y: 1 }  etc.
 *
 * Each world adds its own flavour on top of the slide (see FLAVORS):
 *   dance  — sharp, snappy, slight skew (comic panel)
 *   design — long, floaty, blurred (travelling through space)
 *   unity  — soft glow on entry (stepping through a portal)
 */
export const SLIDE_DURATION = 0.9

const pct = (n) => `${n * 100}%`

const FLAVORS = {
  dance: {
    enter: { skewX: '-4deg', scale: 1 },
    exit: { skewX: '4deg', scale: 1 },
    ease: [0.9, 0, 0.1, 1],
  },
  design: {
    enter: { scale: 1.06, filter: 'blur(10px)' },
    exit: { scale: 0.96, filter: 'blur(10px)' },
    ease: [0.65, 0, 0.2, 1],
  },
  unity: {
    enter: { scale: 1.03, filter: 'brightness(1.6) blur(4px)' },
    exit: { scale: 0.98, filter: 'brightness(1.4) blur(4px)' },
    ease: [0.7, 0, 0.25, 1],
  },
}

export function slideVariantsFor(id) {
  const f = FLAVORS[id] ?? FLAVORS.design
  return {
    enter: (d) => ({ x: pct(d.x), y: pct(d.y), ...f.enter }),
    center: { x: 0, y: 0, scale: 1, skewX: '0deg', filter: 'brightness(1) blur(0px)' },
    exit: (d) => ({ x: pct(-d.x), y: pct(-d.y), ...f.exit }),
  }
}

export function slideTransitionFor(id) {
  const f = FLAVORS[id] ?? FLAVORS.design
  return { duration: SLIDE_DURATION, ease: f.ease }
}

/** Staggered reveal for text inside a page once it has slid in. */
export const contentVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.55 + i * 0.09, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

/** Photo reveal: slides up slightly and un-blurs. */
export const photoVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { delay: 0.45, duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}
