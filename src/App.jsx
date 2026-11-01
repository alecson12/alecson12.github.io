import { AnimatePresence } from 'framer-motion'
import { useNavigation } from './navigation/useNavigation'
import DancePage from './pages/DancePage'
import DesignPage from './pages/DesignPage'
import UnityPage from './pages/UnityPage'

// Which component renders for which page id (ids come from navigation/routes.js)
const PAGE_COMPONENTS = {
  dance: DancePage,
  design: DesignPage,
  unity: UnityPage,
}

export default function App() {
  const { page, direction, go } = useNavigation()
  const Page = PAGE_COMPONENTS[page]

  return (
    // Fixed, non-scrolling stage. Pages are absolutely positioned inside it
    // and AnimatePresence keeps the old page mounted while the new one slides in.
    <main className="stage fixed inset-0 overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <Page key={page} direction={direction} go={go} />
      </AnimatePresence>
    </main>
  )
}
