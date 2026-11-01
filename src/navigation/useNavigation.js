import { useCallback, useEffect, useState } from 'react'
import { DEFAULT_PAGE, ORDER, isPage } from './routes'

const fromHash = () => {
  const id = window.location.hash.replace('#', '')
  return isPage(id) ? id : DEFAULT_PAGE
}

/**
 * Holds the current page and the direction of the last move.
 *  direction  1 = slide left (forward), -1 = slide right (back)
 * Also syncs with the URL hash (#dance, #design, #unity) so each page is
 * linkable and the browser back button works, and adds arrow-key support.
 */
export function useNavigation() {
  const [page, setPage] = useState(fromHash)
  const [direction, setDirection] = useState(1)

  const go = useCallback(
    (to) => {
      if (!isPage(to) || to === page) return
      setDirection(ORDER.indexOf(to) > ORDER.indexOf(page) ? 1 : -1)
      setPage(to)
      window.history.pushState(null, '', `#${to}`)
    },
    [page],
  )

  // Browser back / forward
  useEffect(() => {
    const onPop = () => {
      const to = fromHash()
      setDirection(ORDER.indexOf(to) > ORDER.indexOf(page) ? 1 : -1)
      setPage(to)
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [page])

  // Keyboard arrows
  useEffect(() => {
    const onKey = (e) => {
      const i = ORDER.indexOf(page)
      if (e.key === 'ArrowRight' && ORDER[i + 1]) go(ORDER[i + 1])
      if (e.key === 'ArrowLeft' && ORDER[i - 1]) go(ORDER[i - 1])
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [page, go])

  return { page, direction, go }
}
