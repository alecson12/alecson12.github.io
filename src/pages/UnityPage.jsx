import PageShell from '../components/PageShell'
import Photo from '../components/Photo'
import PortfolioButton from '../components/PortfolioButton'
import Reveal from '../components/Reveal'
import { PAGES } from '../content/pages'

/* ------------------------------------------------------------------ */
/*  Pixel sprites: a tiny party running across the meadow.             */
/*  Each sprite is a 12x16 grid; letters map to colours per character. */
/* ------------------------------------------------------------------ */
const HERO = [
  '....HHHH....',
  '...HHHHHH...',
  '...HSSSSH...',
  '...HSESEH...',
  '...HSSSSH...',
  '....SSSS....',
  '..CCCCCCCC..',
  '.CCCCCCCCCC.',
  'SCCCCCCCCCCS',
  'SCCCCCCCCCCS',
  '..CCCCCCCC..',
  '..CC....CC..',
  '..PP....PP..',
  '..PP....PP..',
  '.BBB....BBB.',
  '.BBB....BBB.',
]
const PARTY = [
  { pal: { H: '#8a5a2b', S: '#f3c89d', E: '#222', C: '#2d3a6b', P: '#1b1b2f', B: '#3a2a1a' }, delay: 0, scale: 6 },
  { pal: { H: '#d9d9e6', S: '#f3c89d', E: '#222', C: '#4a4a5a', P: '#2b2b3b', B: '#3a2a1a' }, delay: -1.1, scale: 6 },
  { pal: { H: '#9cc9ff', S: '#f3c89d', E: '#222', C: '#7aa7ff', P: '#2b4a8b', B: '#3a2a1a' }, delay: -2.2, scale: 6 },
  { pal: { H: '#e0a040', S: '#f3c89d', E: '#222', C: '#c62828', P: '#5a1a1a', B: '#3a2a1a' }, delay: -3.3, scale: 6 },
]

function Sprite({ pal, scale }) {
  return (
    <div className="sprite" style={{ display: 'grid', gridTemplateColumns: `repeat(12, ${scale}px)` }}>
      {HERO.flatMap((row, y) =>
        row.split('').map((ch, x) => (
          <div key={`${x}-${y}`} style={{ width: scale, height: scale, background: pal[ch] || 'transparent' }} />
        )),
      )}
    </div>
  )
}

/** Far mountains and a castle on a hill, as flat silhouettes. */
function Mountains({ className = '' }) {
  return (
    <svg viewBox="0 0 1440 300" className={className} aria-hidden preserveAspectRatio="none">
      <path fill="currentColor" d="M0 300V190l90-70 70 40 110-110 120 90 90-60 100 70 60-40 80 50 40-20 60 30 120-120 110 100 70-40 90 60 50-30 80 40V300z" />
    </svg>
  )
}
function Castle({ className = '' }) {
  return (
    <svg viewBox="0 0 200 160" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M20 160V100h12V84l6-10 6 10v16h14V60h10V40l8-20 8 20v20h10v40h14V70h8V50l10-25 10 25v20h8v40h14V88h12v-8l6-10 6 10v8h12v72z"
      />
    </svg>
  )
}

/**
 * PAGE 3 — Unity Developer
 * Layout: title + button LEFT, photo CENTER on the meadow, lore panel RIGHT.
 * World: bright HD-2D JRPG overworld. Blue sky, soft clouds, far mountains
 *        and a castle, rolling green meadow, blurred foreground flowers,
 *        and a small pixel party running across the hill.
 * Theme styles: .theme-unity in styles/themes.css
 * Content: src/content/pages.js → PAGES.unity
 */
export default function UnityPage({ direction, go }) {
  const c = PAGES.unity
  return (
    <PageShell id="unity" index={3} direction={direction} go={go} theme="theme-unity">
      {/* ---- sky ---- */}
      <div aria-hidden className="sky absolute inset-0" />
      <div aria-hidden className="sun" />
      <div aria-hidden className="cloud cloud-1" />
      <div aria-hidden className="cloud cloud-2" />
      <div aria-hidden className="cloud cloud-3" />

      {/* ---- distance ---- */}
      <Mountains className="mountains mountains-far absolute inset-x-[-5%] bottom-[38vh] h-[30vh] w-[110%]" />
      <Mountains className="mountains mountains-near absolute inset-x-[-10%] bottom-[34vh] h-[26vh] w-[120%]" />
      <Castle className="castle absolute bottom-[38vh] left-[54%] h-[16vh] w-auto" />
      <div aria-hidden className="haze absolute inset-x-0 bottom-[30vh] h-[20vh]" />

      {/* ---- meadow ---- */}
      <div aria-hidden className="hill hill-back" />
      <div aria-hidden className="hill hill-front" />
      <div aria-hidden className="grass-blades" />

      {/* ---- pixel party running on the hill ---- */}
      <div aria-hidden className="party absolute bottom-[26vh] left-0 hidden md:block">
        {PARTY.map((p, i) => (
          <div key={i} className="runner" style={{ animationDelay: `${p.delay}s` }}>
            <Sprite pal={p.pal} scale={p.scale} />
          </div>
        ))}
      </div>

      {/* ---- foreground flowers (blurred, depth of field) ---- */}
      <div aria-hidden className="flowers absolute inset-x-0 bottom-0 h-[26vh]" />

      {/* ---- photo ---- */}
      <div aria-hidden className="photo-ground absolute bottom-0 left-1/2 -translate-x-1/2" />
      <Photo
        src={c.photo}
        alt={c.photoAlt}
        className="absolute bottom-0 left-1/2 z-10 h-[50vh] w-[90vw] -translate-x-1/2 md:h-[82vh] md:w-[34vw]"
      />

      {/* ---- left column: JRPG window ---- */}
      <div className="window absolute inset-x-4 bottom-20 z-10 flex flex-col items-start md:inset-x-auto md:left-[6vw] md:top-1/2 md:w-[28vw] md:-translate-y-1/2">
        <Reveal i={0} as="p" className="eyebrow">
          {c.eyebrow}
        </Reveal>
        <Reveal i={1} as="h1" className="title mt-3">
          {c.title}
        </Reveal>
        <Reveal i={2} className="ornament mt-4" />
        <Reveal i={2} as="p" className="description mt-4 md:hidden">
          {c.description}
        </Reveal>
        <Reveal i={3} className="mt-6">
          <PortfolioButton href={c.portfolioLink} label={c.buttonLabel} />
        </Reveal>
      </div>

      {/* ---- right column: lore window (desktop) ---- */}
      <Reveal i={2} className="window lore absolute right-[6vw] top-1/2 z-10 hidden w-[26vw] -translate-y-1/2 flex-col gap-3 md:flex">
        <p className="lore-head">Chronicle</p>
        <p className="description">{c.description}</p>
        <p className="lore-head mt-2">Arcana &amp; Tools</p>
        <p className="description">{c.secondaryText}</p>
      </Reveal>

      <Reveal i={4} as="p" className="meta absolute bottom-7 right-8 z-10 hidden md:block">
        CHAPTER III · C# · UNITY 6
      </Reveal>
    </PageShell>
  )
}
