import PageShell from '../components/PageShell'
import Photo from '../components/Photo'
import PortfolioButton from '../components/PortfolioButton'
import Reveal from '../components/Reveal'
import { useParallax, Layer } from '../components/Parallax'
import { PAGES } from '../content/pages'

/**
 * PAGE 2 — Graphic Design
 * Layout: text LEFT, photo RIGHT, both floating above the Earth's horizon.
 * World: literally looking out at space from orbit. Black sky, fine star
 *        fields, the curve of the planet and its atmosphere along the bottom.
 * Theme styles: .theme-design in styles/themes.css
 * Content: src/content/pages.js → PAGES.design
 */
export default function DesignPage({ direction, go }) {
  const c = PAGES.design
  const px = useParallax()
  return (
    <PageShell id="design" index={2} direction={direction} go={go} theme="theme-design">
      {/* ---- star fields at three depths ---- */}
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
      <Photo
        src={c.photo}
        alt={c.photoAlt}
        className="absolute bottom-0 left-1/2 z-10 h-[52vh] w-[90vw] -translate-x-1/2 md:left-auto md:right-[10vw] md:h-[86vh] md:w-[38vw] md:translate-x-0"
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
