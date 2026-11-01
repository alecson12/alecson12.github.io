import { useCallback, useEffect, useRef, useState } from 'react'
import { DEFAULT_PAGE, KEYS, directionBetween, isPage } from './routes'
import { SLIDE_DURATION } from '../transitions/slide'

const fromHash = () => {
  const id = window.location.hash.replace('#', '')
  return isPage(id) ? id : DEFAULT_PAGE
}

/**
 * Holds the current page and the 2D direction of the last move.
 *  direction = { x, y }  e.g. { x: 1, y: 0 } slides left (moving right),
 *                            { x: 0, y: 1 } slides up (moving down).
 * Syncs with the URL hash (#dance, #design, #unity), supports the browser
 * back button and arrow keys, and ignores clicks while a slide is running.
 */
export function useNavigation() {
  const [page, setPage] = useState(fromHash)
  const [direction, setDirection] = useState({ x: 1, y: 0 })
  const busy = useRef(false)

  const move = useCallback(
    (to, pushHistory) => {
      if (!isPage(to) || to === page || busy.current) return
      busy.current = true
      setTimeout(() => (busy.current = false), SLIDE_DURATION * 1000 + 50)
      setDirection(directionBetween(page, to))
      setPage(to)
      if (pushHistory) window.history.pushState(null, '', `#${to}`)
    },
    [page],
  )

  const go = useCallback((to) => move(to, true), [move])

  // Browser back / forward
  useEffect(() => {
    const onPop = () => move(fromHash(), false)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [move])

  // Keyboard arrows
  useEffect(() => {
    const onKey = (e) => {
      const to = KEYS[page]?.[e.key]
      if (to) {
        e.preventDefault()
        go(to)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [page, go])

  return { page, direction, go }
}
