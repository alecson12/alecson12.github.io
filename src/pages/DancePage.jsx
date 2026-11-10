import PageShell from '../components/PageShell'
import Photo from '../components/Photo'
import PortfolioButton from '../components/PortfolioButton'
import Reveal from '../components/Reveal'
import { PAGES } from '../content/pages'

/**
 * PAGE 1 — Dance Artist
 * The cover of the dance portfolio, as a landing page: crimson paper,
 * cream poster type, cream arrow tags, a dark red skyline, a black-and-
 * white zigzag, and the outlined stars that spin on the portfolio site.
 * Layout: text LEFT, the cut-out photo RIGHT standing on the bottom edge.
 * Theme styles: .theme-dance in styles/themes.css
 * Content: src/content/pages.js → PAGES.dance
 */

// The outlined stars (public/media/dance/star_p5.png, from the portfolio).
// x / y are % of the page, w is width in vw. Odd ones spin the other way.
const STARS = [
  { x: 3, y: 15, w: 4.2 },
  { x: 46, y: 9, w: 2.6 },
  { x: 56, y: 76, w: 3.4 },
  { x: 95, y: 58, w: 2.8 },
  { x: 7, y: 83, w: 2.4, phone: true },
  { x: 90, y: 20, w: 3.2, phone: true },
]

/** The four-point sparkle from the cover's corner. */
function Sparkle({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M12 0c.9 6.6 4.5 10.2 12 12-7.5 1.8-11.1 5.4-12 12-.9-6.6-4.5-10.2-12-12C7.5 10.2 11.1 6.6 12 0Z" fill="currentColor" />
    </svg>
  )
}

export default function DancePage({ direction, go }) {
  const c = PAGES.dance
  const tags = c.tags ?? []
  const [first, ...rest] = c.title.split(' ')
  return (
    <PageShell id="dance" index={1} direction={direction} go={go} theme="theme-dance">
      {/* ---- the paper and the skyline ---- */}
      <div aria-hidden className="paper absolute inset-0" />
      <div aria-hidden className="city absolute inset-0 overflow-hidden">
        <span className="bldg bldg-1" />
        <span className="bldg bldg-2" />
        <span className="bldg bldg-3" />
        <span className="bldg bldg-4" />
      </div>
      <div aria-hidden className="zigzag" />
      <Sparkle className="sparkle absolute right-5 top-5 h-7 w-7 md:right-10 md:top-8 md:h-10 md:w-10" />
      {STARS.map((s, i) => (
        <img
          key={i}
          src="/media/dance/star_p5.png"
          alt=""
          aria-hidden
          className={`p5-star ${s.phone ? '' : 'hidden md:block'}`}
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `max(${s.w}vw, 28px)`,
            animationDuration: `${14 + (i % 3) * 4}s`,
            animationDirection: i % 2 ? 'reverse' : 'normal',
          }}
        />
      ))}

      {/* ---- the photo, standing on the bottom edge ---- */}
      <Photo
        src={c.photo}
        alt={c.photoAlt}
        className="absolute bottom-0 right-[-8vw] z-10 h-[46vh] w-[80vw] md:right-[7vw] md:h-[88vh] md:w-[42vw]"
      />
      <Reveal i={4} as="p" className="name-tag absolute bottom-[27vh] right-[38vw] z-10 hidden md:block">
        Alecson Gantica
      </Reveal>

      {/* ---- text ---- */}
      <div className="absolute left-5 right-5 top-[84px] z-10 flex flex-col items-start md:left-[7vw] md:right-auto md:top-1/2 md:w-[50vw] md:-translate-y-1/2">
        <Reveal i={0} as="p" className="eyebrow tag">
          {c.eyebrow}
        </Reveal>
        <Reveal i={1} as="h1" className="title mt-4">
          <span className="title-top block">{first}</span>
          <span className="title-big block">{rest.join(' ')}</span>
        </Reveal>
        {tags.length > 0 && (
          <Reveal i={2} className="mt-4 flex flex-wrap gap-x-1 gap-y-2">
            {tags.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </Reveal>
        )}
        <Reveal i={3} as="p" className="description mt-5 max-w-[26rem]">
          {c.description}
        </Reveal>
        <Reveal i={4} className="mt-7">
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
