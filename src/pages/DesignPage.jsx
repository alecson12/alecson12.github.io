import { useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import PageShell from '../components/PageShell'
import Photo from '../components/Photo'
import PortfolioButton from '../components/PortfolioButton'
import BgText from '../components/BgText'
import Reveal from '../components/Reveal'
import { PAGES } from '../content/pages'

/**
 * Tracks the mouse as -1..1 and returns spring-smoothed x/y motion values.
 * Layers multiply these by a depth factor for parallax.
 */
function useParallax() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  useEffect(() => {
    const onMove = (e) => {
      mx.set((e.clientX / window.innerWidth) * 2 - 1)
      my.set((e.clientY / window.innerHeight) * 2 - 1)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [mx, my])
  const cfg = { stiffness: 40, damping: 20 }
  return { x: useSpring(mx, cfg), y: useSpring(my, cfg) }
}

function Layer({ depth, px, className = '', children, style }) {
  const x = useTransform(px.x, (v) => v * depth)
  const y = useTransform(px.y, (v) => v * depth)
  return (
    <motion.div aria-hidden style={{ x, y, ...style }} className={`pointer-events-none absolute ${className}`}>
      {children}
    </motion.div>
  )
}

/**
 * PAGE 2 — Graphic Design
 * Layout: text LEFT, photo RIGHT, standing in front of a ringed planet.
 * World: observing a creative universe from deep space. Nebula, stars,
 *        a large ringed planet, a distant moon, orbital paths, parallax.
 * Theme styles: .theme-design in styles/themes.css
 * Content: src/content/pages.js → PAGES.design
 */
export default function DesignPage({ direction, go }) {
  const c = PAGES.design
  const px = useParallax()
  return (
    <PageShell id="design" index={2} direction={direction} go={go} theme="theme-design">
      {/* ---- deep background: nebula + star fields (slow parallax) ---- */}
      <Layer depth={-6} px={px} className="inset-[-3%]">
        <div className="nebula absolute inset-0" />
        <div className="stars stars-far absolute inset-0" />
      </Layer>
      <Layer depth={-14} px={px} className="inset-[-4%]">
        <div className="stars stars-near absolute inset-0" />
      </Layer>

      {/* ---- distant galaxy + moon ---- */}
      <Layer depth={-10} px={px} className="galaxy left-[8%] top-[14%] hidden md:block" />
      <Layer depth={-18} px={px} className="moon left-[22%] top-[22%]" />

      {/* ---- ringed planet behind the photo ---- */}
      <Layer depth={-22} px={px} className="planet-wrap right-[-14vw] top-1/2 -translate-y-1/2 md:right-[2vw]">
        <div className="planet" />
        <div className="ring" />
        <div className="ring ring-2" />
      </Layer>

      {/* ---- orbital paths ---- */}
      <Layer depth={-8} px={px} className="orbit orbit-1" />
      <Layer depth={-8} px={px} className="orbit orbit-2" />

      <BgText className="left-[-1vw] top-[5vh] leading-[0.82]">
        KOZMIK
        <br />
        KREATIONS
      </BgText>

      {/* ---- photo ---- */}
      <Photo
        src={c.photo}
        alt={c.photoAlt}
        className="absolute bottom-0 left-1/2 z-10 h-[52vh] w-[90vw] -translate-x-1/2 md:left-auto md:right-[10vw] md:h-[88vh] md:w-[38vw] md:translate-x-0"
      />

      {/* ---- text ---- */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-start px-6 pb-24 md:inset-x-auto md:left-[8vw] md:top-1/2 md:w-[42vw] md:-translate-y-1/2 md:pb-0">
        <Reveal i={0} as="p" className="eyebrow">
          {c.eyebrow}
        </Reveal>
        <Reveal i={1} as="h1" className="title mt-4">
          {c.title}
        </Reveal>
        <Reveal i={2} className="rule mt-6" />
        <Reveal i={2} as="p" className="description mt-6 max-w-md">
          {c.description}
        </Reveal>
        <Reveal i={3} className="mt-9">
          <PortfolioButton href={c.portfolioLink} label={c.buttonLabel} />
        </Reveal>
      </div>

      <Reveal i={4} as="p" className="meta absolute bottom-7 left-8 z-10 hidden md:block">
        BRANDING · IDENTITY · LAYOUT
      </Reveal>
    </PageShell>
  )
}
