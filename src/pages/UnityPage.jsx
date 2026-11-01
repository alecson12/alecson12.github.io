import PageShell from '../components/PageShell'
import Photo from '../components/Photo'
import PortfolioButton from '../components/PortfolioButton'
import BgText from '../components/BgText'
import Reveal from '../components/Reveal'
import { PAGES } from '../content/pages'

/** Glowing magic circle: concentric rings with tick marks and a hexagram. */
function MagicCircle({ className = '' }) {
  const ticks = Array.from({ length: 48 }, (_, i) => i * 7.5)
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden fill="none" stroke="currentColor">
      <circle cx="200" cy="200" r="190" strokeWidth="1" opacity=".5" />
      <circle cx="200" cy="200" r="170" strokeWidth=".6" opacity=".35" strokeDasharray="2 6" />
      <circle cx="200" cy="200" r="130" strokeWidth="1.2" opacity=".6" />
      <circle cx="200" cy="200" r="60" strokeWidth=".8" opacity=".5" />
      {ticks.map((a) => (
        <line key={a} x1="200" y1="14" x2="200" y2={a % 45 === 0 ? 30 : 22} strokeWidth="1" opacity=".6" transform={`rotate(${a} 200 200)`} />
      ))}
      <polygon points="200,70 312,265 88,265" strokeWidth="1" opacity=".5" />
      <polygon points="200,330 88,135 312,135" strokeWidth="1" opacity=".5" />
    </svg>
  )
}

/** Silhouette of ruined arches and spires along the horizon. */
function Ruins({ className = '' }) {
  return (
    <svg viewBox="0 0 1440 320" className={className} aria-hidden preserveAspectRatio="none">
      <path
        fill="currentColor"
        d="M0 320V220h40v-60l20-30 20 30v60h50V150h30v-40l15-25 15 25v40h30v70h60V130h20V90l25-50 25 50v40h20v90h50v-50h30v-60l20-40 20 40v60h30v50h70V120l40-70 40 70v100h60V160h30v-30l20-40 20 40v30h30v60h60V110h25V60l30-50 30 50v50h25v110h50v-40h30v-70l20-30 20 30v70h30v40h60V140h25V95l20-35 20 35v45h25v80h70v-60h30V110l15-25 15 25v50h30v60h50v-40h40v110z"
      />
    </svg>
  )
}

/**
 * PAGE 3 — Unity Developer
 * Layout: title + button LEFT, photo CENTER inside a magic circle, lore panel RIGHT.
 * World: premium fantasy RPG title screen. Twilight sky, ruins, fog,
 *        floating motes, gold + violet + emerald light, serif type.
 * Theme styles: .theme-unity in styles/themes.css
 * Content: src/content/pages.js → PAGES.unity
 */
export default function UnityPage({ direction, go }) {
  const c = PAGES.unity
  return (
    <PageShell id="unity" index={3} direction={direction} go={go} theme="theme-unity">
      {/* ---- sky, light, ruins, fog ---- */}
      <div aria-hidden className="sky absolute inset-0" />
      <div aria-hidden className="stars stars-far absolute inset-0 opacity-60" />
      <div aria-hidden className="sunbeam" />
      <Ruins className="ruins ruins-far absolute inset-x-0 bottom-[14vh] h-[34vh] w-full" />
      <Ruins className="ruins ruins-near absolute inset-x-[-10%] bottom-0 h-[30vh] w-[120%]" />
      <div aria-hidden className="fog fog-1" />
      <div aria-hidden className="fog fog-2" />
      <div aria-hidden className="motes absolute inset-0" />
      <div aria-hidden className="motes motes-2 absolute inset-0" />

      <BgText className="left-1/2 top-[5vh] -translate-x-1/2 text-center leading-[0.9]">
        WORLDS
      </BgText>

      {/* ---- magic circle + photo ---- */}
      <MagicCircle className="magic absolute bottom-[4vh] left-1/2 h-[80vw] w-[80vw] -translate-x-1/2 md:bottom-[-10vh] md:h-[62vh] md:w-[62vh]" />
      <div aria-hidden className="pedestal-glow absolute bottom-0 left-1/2 -translate-x-1/2" />
      <Photo
        src={c.photo}
        alt={c.photoAlt}
        className="absolute bottom-0 left-1/2 z-10 h-[50vh] w-[90vw] -translate-x-1/2 md:h-[84vh] md:w-[34vw]"
      />

      {/* ---- left column ---- */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-start px-6 pb-24 md:inset-x-auto md:left-[7vw] md:top-1/2 md:w-[27vw] md:-translate-y-1/2 md:pb-0">
        <Reveal i={0} as="p" className="eyebrow">
          {c.eyebrow}
        </Reveal>
        <Reveal i={1} as="h1" className="title mt-4">
          {c.title}
        </Reveal>
        <Reveal i={2} className="ornament mt-5" />
        <Reveal i={2} as="p" className="description mt-5 max-w-sm md:hidden">
          {c.description}
        </Reveal>
        <Reveal i={3} className="mt-8">
          <PortfolioButton href={c.portfolioLink} label={c.buttonLabel} />
        </Reveal>
      </div>

      {/* ---- right column (desktop) ---- */}
      <Reveal i={2} className="lore absolute right-[7vw] top-1/2 z-10 hidden w-[25vw] -translate-y-1/2 flex-col gap-4 md:flex">
        <p className="lore-head">Chronicle</p>
        <p className="description">{c.description}</p>
        <p className="lore-head mt-2">Arcana &amp; Tools</p>
        <p className="description opacity-85">{c.secondaryText}</p>
      </Reveal>

      <Reveal i={4} as="p" className="meta absolute bottom-7 right-8 z-10 hidden md:block">
        CHAPTER III · C# · UNITY 6
      </Reveal>
    </PageShell>
  )
}
