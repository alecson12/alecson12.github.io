/**
 * Horizontal slide transition used by every page.
 * `custom` is the direction from useNavigation: 1 = forward, -1 = back.
 * Tweak `duration` and `ease` here to change the feel site-wide.
 */
export const slideVariants = {
  enter: (direction) => ({ x: direction > 0 ? '100%' : '-100%' }),
  center: { x: 0 },
  exit: (direction) => ({ x: direction > 0 ? '-100%' : '100%' }),
}

export const slideTransition = {
  x: { type: 'tween', duration: 0.7, ease: [0.76, 0, 0.24, 1] },
}

/** Staggered fade-up for the text inside a page once it has slid in. */
export const contentVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.45 + i * 0.08, duration: 0.5, ease: 'easeOut' },
  }),
}
