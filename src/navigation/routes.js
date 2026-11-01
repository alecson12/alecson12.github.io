/**
 * Navigation map.
 *
 *  ORDER      decides slide direction: moving to a page further right in
 *             this list slides left, moving back slides right.
 *  NAV_LINKS  decides which arrow buttons each page shows and where they
 *             sit on screen. Edit labels or positions here.
 *
 *  position options: 'left' | 'right' | 'bottom' | 'top-left' | 'top-right'
 */

export const ORDER = ['dance', 'design', 'unity']

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

export const DEFAULT_PAGE = ORDER[0]

export const isPage = (id) => ORDER.includes(id)
