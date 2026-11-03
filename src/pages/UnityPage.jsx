import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import PageShell from '../components/PageShell'
import Photo from '../components/Photo'
import PortfolioButton from '../components/PortfolioButton'
import Reveal from '../components/Reveal'
import { useParallax, Layer } from '../components/Parallax'
import { PAGES } from '../content/pages'

/**
 * PAGE 3 — Unity Developer
 * The Start screen from the Unity portfolio: Alecson's pixel-art Great Wave
 * in three painted layers, set in motion, with the pixel wordmark in the sky
 * and the cutout portrait standing in front of the sea.
 *
 * THE FRAME. The artwork is 1798 × 875. The window shown at rest is the
 * 1353 × 756 box at (267, 59); the spare margins let layers move without
 * showing an edge. Layers sit on the full artwork at their painted offsets:
 *   sky.webp        1798 × 875 at (0, 0)
 *   mountains.webp  1798 × 875 at (0, 0)
 *   waves.webp      1798 × 657 at (0, 218)
 * Assets: public/media/unity/ (used exactly as supplied).
 *
 * MOTION. Sky drifts, sun glow breathes, far swell and wave heave (CSS,
 * transform only). This page does not scroll, so parallax follows the
 * mouse instead: sky least, waves most. All of it stops under
 * prefers-reduced-motion.
 *
 * SIZE. Landscape (vw/vh ≥ 1.15): the frame is full width, bottom-anchored,
 * sky colour continues above. Portrait: the frame is 58% of the height and
 * shifted so the crest and Fuji stay in view.
 *
 * Content: src/content/pages.js → PAGES.unity (photo, wordmark, button, link)
 */
const ART = { W: 1798, H: 875 }
const FRAME = { x: 267, y: 59, w: 1353, h: 756 }
const L = {
  sky: { x: 0, y: 0, w: 1798, h: 875 },
  mountains: { x: 0, y: 0, w: 1798, h: 875 },
  waves: { x: 0, y: 218, w: 1798, h: 657 },
}
const SUN = { x: 1318, y: 245, w: 138, h: 123 }
const SKY = 'linear-gradient(180deg, #1696fa 0%, #1898fb 14%, #1b9dfd 27%, #1ea4fd 34%, #28b1fd 41%, #35bdfd 48%, #38bffd 55%, #8edbfd 62%, #90dbfd 69%, #90dbfd 100%)'
const pct = (v, of) => `${(v / of) * 100}%`
const box = (b) => ({ left: pct(b.x, ART.W), top: pct(b.y, ART.H), width: pct(b.w, ART.W) })

export default function UnityPage({ direction, go }) {
  const c = PAGES.unity
  const reduce = useReducedMotion()
  const anim = reduce ? 'none' : undefined
  const px = useParallax()
  const stage = useRef(null)
  const [portrait, setPortrait] = useState(false)

  // Size the stage from the viewport (see SIZE above).
  useEffect(() => {
    const el = stage.current
    if (!el) return
    const fit = () => {
      const vw = window.innerWidth
      const vh = window.innerHeight
      const ratio = FRAME.w / FRAME.h
      const isPortrait = vw / vh < 1.15
      setPortrait(isPortrait)
      if (!isPortrait) {
        el.style.width = '100%'
        el.style.height = `${vw / ratio}px`
        el.style.setProperty('--shift', '0px')
      } else {
        const h = vh * 0.58
        const w = h * ratio
        el.style.width = `${w}px`
        el.style.height = `${h}px`
        el.style.setProperty('--shift', `${Math.max(vw - w, -w * 0.14)}px`)
      }
    }
    fit()
    window.addEventListener('resize', fit)
    return () => window.removeEventListener('resize', fit)
  }, [])

  return (
    <PageShell id="unity" index={3} direction={direction} go={go} theme="theme-unity">
      {/* ---- the stage: a framed window onto the artwork, bottom-anchored ---- */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 z-0 flex justify-start overflow-hidden">
        <div ref={stage} className="relative shrink-0 overflow-hidden" style={{ transform: 'translateX(var(--shift, 0px))' }}>
          <div
            className="absolute"
            style={{ left: pct(-FRAME.x, FRAME.w), top: pct(-FRAME.y, FRAME.h), width: pct(ART.W, FRAME.w), height: pct(ART.H, FRAME.h), background: SKY }}
          >
            <Layer depth={reduce ? 0 : -4} px={px} style={box(L.sky)}>
              <img src="/media/unity/sky.webp" alt="" width={L.sky.w} height={L.sky.h} className="pixelated drift-sky block w-full" style={{ animation: anim }} />
              <span
                className="sun-glow absolute rounded-full"
                style={{ left: pct(SUN.x - SUN.w * 0.45, L.sky.w), top: pct(SUN.y - SUN.h * 0.45, L.sky.h), width: pct(SUN.w * 1.9, L.sky.w), height: pct(SUN.h * 1.9, L.sky.h), animation: anim }}
              />
            </Layer>
            <Layer depth={reduce ? 0 : -8} px={px} style={box(L.mountains)}>
              <img src="/media/unity/mountains.webp" alt="" width={L.mountains.w} height={L.mountains.h} className="pixelated heave-far block w-full" style={{ animation: anim }} />
            </Layer>
            <Layer depth={reduce ? 0 : -14} px={px} style={box(L.waves)}>
              <img src="/media/unity/waves.webp" alt="" width={L.waves.w} height={L.waves.h} className="pixelated heave-waves block w-full" style={{ animation: anim, transformOrigin: '40% 100%' }} />
            </Layer>
          </div>
        </div>
        {/* the surface darkens into the water below */}
        <div className="absolute inset-x-0 bottom-0 h-[10svh]" style={{ background: 'linear-gradient(180deg, rgba(22,58,102,0) 0%, rgba(22,58,102,0.85) 100%)' }} />
      </div>

      {/* ---- wordmark in the sky ---- */}
      <div className="pointer-events-none absolute inset-x-0 z-10" style={{ top: 'max(96px, 15.5vh)' }}>
        <div className={`flex ${portrait ? 'justify-center' : 'justify-end pr-[5vw]'}`}>
          <motion.img
            src={c.wordmark}
            alt={c.wordmarkAlt ?? ''}
            width={2404}
            height={866}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="bob-slow block h-auto drop-shadow-[0_6px_0_rgba(5,15,40,0.25)]"
            style={{ width: portrait ? 'min(86vw, 900px)' : 'min(44vw, 920px)', animation: anim }}
          />
        </div>
      </div>

      {/* ---- the cutout portrait, standing in front of the sea ---- */}
      <div aria-hidden className="photo-ground absolute bottom-0 left-1/2 z-[9] -translate-x-1/2 md:left-auto md:right-[14vw] md:translate-x-0" />
      <Photo
        src={c.photo}
        alt={c.photoAlt}
        className={
          portrait
            ? 'absolute bottom-0 left-1/2 z-10 h-[44vh] w-[80vw] -translate-x-1/2'
            : 'absolute bottom-0 right-[6vw] z-10 h-[56vh] w-[32vw]'
        }
      />

      {/* ---- the call to action ---- */}
      <div
        className={portrait ? 'absolute inset-x-0 z-10 flex justify-center' : 'absolute bottom-[9vh] left-[7vw] z-10 flex flex-col items-start gap-3'}
        style={portrait ? { top: 'calc(max(96px, 15.5vh) + min(86vw, 900px) * 0.36 + 20px)' } : undefined}
      >
        <Reveal i={2} as="p" className="eyebrow hidden md:block">
          {c.eyebrow}
        </Reveal>
        <Reveal i={3}>
          <PortfolioButton href={c.portfolioLink} label={c.buttonLabel} />
        </Reveal>
      </div>
    </PageShell>
  )
}
