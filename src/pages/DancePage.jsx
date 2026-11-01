import PageShell from '../components/PageShell'
import Photo from '../components/Photo'
import PortfolioButton from '../components/PortfolioButton'
import BgText from '../components/BgText'
import Reveal from '../components/Reveal'
import { PAGES } from '../content/pages'

/** Four-point comic star used as a graphic accent. */
function Star({ className = '', style }) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden>
      <path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" fill="currentColor" />
    </svg>
  )
}

/**
 * PAGE 1 — Dance Artist
 * Layout: photo LEFT (bleeds to the bottom edge), text RIGHT.
 * World: Persona-5-inspired character intro. Red / black / cream,
 *        angular black panels, halftone, jagged tags, comic stars.
 * Theme styles: .theme-dance in styles/themes.css
 * Content: src/content/pages.js → PAGES.dance
 */
export default function DancePage({ direction, go }) {
  const c = PAGES.dance
  const tags = c.tags ?? []
  return (
    <PageShell id="dance" index={1} direction={direction} go={go} theme="theme-dance">
      {/* ---- background layers ---- */}
      <div aria-hidden className="halftone absolute inset-0" />
      <div aria-hidden className="panel-black" />
      <div aria-hidden className="panel-stripes" />
      <div aria-hidden className="panel-white" />
      <BgText className="right-[-3vw] top-[4vh] text-right leading-[0.78]">
        TAKE
        <br />
        YOUR
        <br />
        HEART
      </BgText>
      <Star className="star absolute left-[44%] top-[12%] h-10 w-10 md:h-16 md:w-16" />
      <Star className="star star-2 absolute left-[6%] top-[18%] h-6 w-6 md:h-9 md:w-9" />
      <Star className="star star-3 absolute bottom-[14%] right-[38%] hidden h-7 w-7 md:block" />

      {/* ---- photo ---- */}
      <div aria-hidden className="photo-shadow absolute bottom-0 left-1/2 z-[5] h-[52vh] w-[90vw] -translate-x-1/2 md:left-[9vw] md:h-[94vh] md:w-[44vw] md:translate-x-0" />
      <Photo
        src={c.photo}
        alt={c.photoAlt}
        className="absolute bottom-0 left-1/2 z-10 h-[52vh] w-[90vw] -translate-x-1/2 md:left-[7vw] md:h-[94vh] md:w-[44vw] md:translate-x-0"
      />

      {/* ---- text ---- */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-start px-6 pb-24 md:inset-x-auto md:right-[8vw] md:top-1/2 md:w-[42vw] md:-translate-y-1/2 md:pb-0">
        <Reveal i={0} as="p" className="eyebrow tag">
          {c.eyebrow}
        </Reveal>
        <Reveal i={1} as="h1" className="title mt-5">
          <span className="block -rotate-2">{c.title.split(' ')[0]}</span>
          <span className="title-alt block rotate-1">{c.title.split(' ').slice(1).join(' ')}</span>
        </Reveal>
        <Reveal i={2} as="p" className="description mt-6 max-w-md">
          {c.description}
        </Reveal>
        {tags.length > 0 && (
          <Reveal i={3} className="mt-5 flex flex-wrap gap-2">
            {tags.map((t, i) => (
              <span key={t} className={`chip ${i % 2 ? 'chip-alt' : ''}`}>
                {t}
              </span>
            ))}
          </Reveal>
        )}
        <Reveal i={4} className="mt-9">
          <PortfolioButton href={c.portfolioLink} label={c.buttonLabel} />
        </Reveal>
      </div>

      <Reveal i={5} as="p" className="meta absolute bottom-7 right-8 z-10 hidden md:block">
        JR TSUBAKI · BULACAN, PH
      </Reveal>
    </PageShell>
  )
}
