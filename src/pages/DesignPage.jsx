import PageShell from '../components/PageShell'
import Photo from '../components/Photo'
import PortfolioButton from '../components/PortfolioButton'
import Reveal from '../components/Reveal'
import { useParallax, Layer } from '../components/Parallax'
import { PAGES } from '../content/pages'

/**
 * PAGE 2 — Graphic Design
 * The Kozmik Kreations universe: the void, star fields at three depths,
 * the Earth's glowing horizon, the chrome Kozmik mark with its light
 * sweep, chrome lettering and the polished chrome button.
 * Layout: text LEFT, the cut-out photo RIGHT above the horizon.
 * Theme styles: .theme-design in styles/themes.css
 * Content: src/content/pages.js → PAGES.design
 */

/** The four-point sparkle used throughout the Kozmik artwork. */
function Sparkle({ className = '', size = 12 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden>
      <path d="M12 0c.9 6.6 4.5 10.2 12 12-7.5 1.8-11.1 5.4-12 12-.9-6.6-4.5-10.2-12-12C7.5 10.2 11.1 6.6 12 0Z" fill="currentColor" />
    </svg>
  )
}

/** The chrome mark as supplied, with a light sweep shaped by the mark itself. */
function Mark({ src, stencil, className = '' }) {
  return (
    <span className={`mark ${className}`}>
      <img src={src} alt="Kozmik Kreations" width="2262" height="1971" draggable="false" />
      <span className="mark-sheen" style={{ WebkitMaskImage: `url("${stencil}")`, maskImage: `url("${stencil}")` }} aria-hidden />
    </span>
  )
}

export default function DesignPage({ direction, go }) {
  const c = PAGES.design
  const px = useParallax()
  return (
    <PageShell id="design" index={2} direction={direction} go={go} theme="theme-design">
      {/* ---- star fields at three depths, and a faint nebula ---- */}
      <div aria-hidden className="nebula absolute inset-0" />
      <Layer depth={-4} px={px} className="inset-[-3%]">
        <div className="stars stars-far absolute inset-0" />
      </Layer>
      <Layer depth={-9} px={px} className="inset-[-4%]">
        <div className="stars stars-mid absolute inset-0" />
      </Layer>
      <Layer depth={-16} px={px} className="inset-[-5%]">
        <div className="stars stars-near absolute inset-0" />
      </Layer>
      <div aria-hidden className="shooting-star" />

      {/* ---- the planet, mostly below the viewport ---- */}
      <Layer depth={6} px={px} className="earth-wrap inset-x-0 bottom-0">
        <div className="atmosphere" />
        <div className="earth" />
        <div className="earth-rim" />
      </Layer>

      {/* ---- photo ---- */}
      <div aria-hidden className="photo-halo absolute bottom-0 left-1/2 z-[5] -translate-x-1/2 md:left-auto md:right-[8vw] md:translate-x-0" />
      <Photo
        src={c.photo}
        alt={c.photoAlt}
        className="absolute bottom-0 left-1/2 z-10 h-[46vh] w-[88vw] -translate-x-1/2 md:left-auto md:right-[7vw] md:h-[82vh] md:w-[40vw] md:translate-x-0"
      />

      {/* ---- text ---- */}
      <div className="absolute left-5 right-5 top-[84px] z-10 flex flex-col items-start md:left-[13vw] md:right-auto md:top-1/2 md:w-[40vw] md:-translate-y-1/2">
        {c.mark && (
          <Reveal i={0} className="mb-6 hidden md:block">
            <Mark src={c.mark} stencil={c.markStencil} className="w-[clamp(60px,6.5vw,96px)]" />
          </Reveal>
        )}
        <Reveal i={1} as="p" className="eyebrow flex items-center gap-3">
          <Sparkle size={10} />
          {c.eyebrow}
        </Reveal>
        <Reveal i={2} as="h1" className="title chrome-text mt-4">
          {c.title}
        </Reveal>
        <Reveal i={3} as="p" className="description mt-5 max-w-md">
          {c.description}
        </Reveal>
        <Reveal i={4} className="mt-8">
          <PortfolioButton href={c.portfolioLink} label={c.buttonLabel} />
        </Reveal>
      </div>

      {c.meta && (
        <Reveal i={5} as="p" className="meta absolute bottom-7 left-8 z-10 hidden md:block">
          {c.meta}
        </Reveal>
      )}
    </PageShell>
  )
}
