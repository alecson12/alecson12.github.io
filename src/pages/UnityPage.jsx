import PageShell from '../components/PageShell'
import Photo from '../components/Photo'
import PortfolioButton from '../components/PortfolioButton'
import BgText from '../components/BgText'
import Reveal from '../components/Reveal'
import { PAGES } from '../content/pages'

/**
 * PAGE 3 — Unity Developer
 * Layout: title + button LEFT, photo CENTER, extra text RIGHT.
 * Mood: dark technical space, perspective floor, cool light, pixel type.
 * Theme styles: .theme-unity in styles/themes.css
 * Content: src/content/pages.js → PAGES.unity
 */
export default function UnityPage({ direction, go }) {
  const c = PAGES.unity
  return (
    <PageShell id="unity" index={3} direction={direction} go={go} theme="theme-unity">
      {/* ---- background layers ---- */}
      <div aria-hidden className="glow glow-a" />
      <div aria-hidden className="glow glow-b" />
      <div aria-hidden className="floor absolute inset-x-0 bottom-0 h-[46vh]" />
      <div aria-hidden className="horizon absolute inset-x-0 bottom-[46vh]" />
      <div aria-hidden className="scanlines absolute inset-0" />
      <BgText className="left-1/2 top-[6vh] -translate-x-1/2 text-center leading-[0.9]">
        UNITY
      </BgText>

      {/* ---- photo ---- */}
      <Photo
        src={c.photo}
        alt={c.photoAlt}
        className="absolute bottom-0 left-1/2 z-10 h-[50vh] w-[90vw] -translate-x-1/2 md:h-[86vh] md:w-[34vw]"
      />

      {/* ---- left column ---- */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-start px-6 pb-24 md:inset-x-auto md:left-[7vw] md:top-1/2 md:w-[26vw] md:-translate-y-1/2 md:pb-0">
        <Reveal i={0} as="p" className="eyebrow">
          {c.eyebrow}
        </Reveal>
        <Reveal i={1} as="h1" className="title mt-4">
          {c.title}
        </Reveal>
        <Reveal i={2} as="p" className="description mt-5 max-w-sm md:hidden">
          {c.description}
        </Reveal>
        <Reveal i={3} className="mt-8">
          <PortfolioButton href={c.portfolioLink} label={c.buttonLabel} />
        </Reveal>
      </div>

      {/* ---- right column (desktop) ---- */}
      <Reveal i={2} className="panel absolute right-[7vw] top-1/2 z-10 hidden w-[24vw] -translate-y-1/2 flex-col gap-4 md:flex">
        <p className="panel-head">// about</p>
        <p className="description">{c.description}</p>
        <p className="panel-head mt-2">// toolkit</p>
        <p className="description opacity-80">{c.secondaryText}</p>
      </Reveal>

      <Reveal i={4} as="p" className="meta absolute bottom-7 right-8 z-10 hidden md:block">
        BUILD 2026.11 · C# · UNITY 6
      </Reveal>
    </PageShell>
  )
}
