import PageShell from '../components/PageShell'
import Photo from '../components/Photo'
import PortfolioButton from '../components/PortfolioButton'
import BgText from '../components/BgText'
import Reveal from '../components/Reveal'
import { PAGES } from '../content/pages'

/**
 * PAGE 1 — Dance Artist
 * Layout: photo LEFT (bleeds to the bottom edge), text RIGHT.
 * Mood: dark stage, red light, street / Persona-5 attitude.
 * Theme styles: .theme-dance in styles/themes.css
 * Content: src/content/pages.js → PAGES.dance
 */
export default function DancePage({ direction, go }) {
  const c = PAGES.dance
  return (
    <PageShell id="dance" index={1} direction={direction} go={go} theme="theme-dance">
      {/* ---- background layers ---- */}
      <div aria-hidden className="glow glow-a" />
      <div aria-hidden className="glow glow-b" />
      <div aria-hidden className="halftone absolute inset-0" />
      <div aria-hidden className="slash" />
      <BgText className="right-[-2vw] top-[8vh] text-right leading-[0.78]">
        DANCE
        <br />
        ARTIST
      </BgText>

      {/* ---- photo ---- */}
      <Photo
        src={c.photo}
        alt={c.photoAlt}
        className="absolute bottom-0 left-1/2 z-10 h-[52vh] w-[90vw] -translate-x-1/2 md:left-[7vw] md:h-[94vh] md:w-[44vw] md:translate-x-0"
      />

      {/* ---- text ---- */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-start px-6 pb-24 md:inset-x-auto md:right-[8vw] md:top-1/2 md:w-[40vw] md:-translate-y-1/2 md:pb-0">
        <Reveal i={0} as="p" className="eyebrow">
          {c.eyebrow}
        </Reveal>
        <Reveal i={1} as="h1" className="title mt-4">
          {c.title}
        </Reveal>
        <Reveal i={2} as="p" className="description mt-6 max-w-md">
          {c.description}
        </Reveal>
        <Reveal i={3} className="mt-9">
          <PortfolioButton href={c.portfolioLink} label={c.buttonLabel} />
        </Reveal>
      </div>

      {/* ---- small details ---- */}
      <Reveal i={4} as="p" className="meta absolute bottom-7 right-8 z-10 hidden md:block">
        JR TSUBAKI · BULACAN, PH
      </Reveal>
    </PageShell>
  )
}
