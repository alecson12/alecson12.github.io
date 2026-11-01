import { useEffect, useRef, useState } from 'react'
import SideNav from './components/SideNav'
import Dance from './sections/Dance'
import Design from './sections/Design'
import Unity from './sections/Unity'

export default function App() {
  const rootRef = useRef(null)
  const [active, setActive] = useState('dance')

  useEffect(() => {
    const root = rootRef.current
    const sections = root.querySelectorAll('.snap-section')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
      },
      { root, threshold: 0.6 },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  const jump = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <header className="pointer-events-none fixed left-6 top-6 z-50 mix-blend-difference md:left-12">
        <span className="font-mono text-xs uppercase tracking-[0.4em] text-white">Alecson Gantica</span>
      </header>
      <SideNav active={active} onJump={jump} />
      <main ref={rootRef} className="snap-root">
        <Dance />
        <Design />
        <Unity />
      </main>
    </>
  )
}
