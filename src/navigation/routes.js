/**
 * Navigation map.
 *
 *  LAYOUT     places each page on a 2D grid. The slide direction between
 *             two pages is the vector between their positions, so
 *             Dance → Design slides horizontally, Dance → Unity slides
 *             down, Design → Unity slides diagonally.
 *
 *               dance (0,0)        design (1,0)
 *                         unity (0.5,1)
 *
 *  NAV_LINKS  decides which arrow buttons each page shows and where they
 *             sit on screen. Edit labels or positions here.
 *
 *  position options: 'left' | 'right' | 'bottom' | 'top-left' | 'top-right'
 */

export const LAYOUT = {
  dance: { x: 0, y: 0 },
  design: { x: 1, y: 0 },
  unity: { x: 0.5, y: 1 },
}

export const NAV_LINKS = {
  dance: [
    { to: 'design', position: 'right', label: 'Graphic Design' },
    { to: 'unity', position: 'bottom', label: 'Unity Developer' },
  ],
  design: [
    { to: 'dance', position: 'left', label: 'Dance Artist' },
    { to: 'unity', position: 'bottom', label: 'Unity Developer' },
  ],
  unity: [
    { to: 'dance', position: 'top-left', label: 'Dance Artist' },
    { to: 'design', position: 'top-right', label: 'Graphic Design' },
  ],
}

/** Keyboard arrows: which page each key leads to from each page. */
export const KEYS = {
  dance: { ArrowRight: 'design', ArrowDown: 'unity' },
  design: { ArrowLeft: 'dance', ArrowDown: 'unity' },
  unity: { ArrowUp: 'dance', ArrowLeft: 'dance', ArrowRight: 'design' },
}

export const PAGE_IDS = Object.keys(LAYOUT)
export const DEFAULT_PAGE = 'dance'
export const isPage = (id) => id in LAYOUT

/** Unit-ish direction vector from one page to another (longest axis = 1). */
export function directionBetween(from, to) {
  const a = LAYOUT[from]
  const b = LAYOUT[to]
  const dx = b.x - a.x
  const dy = b.y - a.y
  const m = Math.max(Math.abs(dx), Math.abs(dy)) || 1
  return { x: dx / m, y: dy / m }
}
