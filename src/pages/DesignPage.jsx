import PageShell from '../components/PageShell'
import Photo from '../components/Photo'
import PortfolioButton from '../components/PortfolioButton'
import BgText from '../components/BgText'
import Reveal from '../components/Reveal'
import { PAGES } from '../content/pages'

function Starburst({ className = '' }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      <defs>
        <linearGradient id="chrome-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.45" stopColor="#c9ccd3" />
          <stop offset="0.5" stopColor="#4b4f58" />
          <stop offset="0.6" stopColor="#e9ebef" />
          <stop offset="1" stopColor="#7d828c" />
        </linearGradient>
      </defs>
      <path d="M50 0 L55 45 L100 50 L55 55 L50 100 L45 55 L0 50 L45 45 Z" fill="url(#chrome-g)" />
    </svg>
  )
}

/**
 * PAGE 2 — Graphic Design
 * Layout: text LEFT, photo RIGHT framed by a chrome starburst.
 * Mood: deep space, silver chrome, editorial grid.
 * Theme styles: .theme-design in styles/themes.css
 * Content: src/content/pages.js → PAGES.design
 */
export default function DesignPage({ direction, go }) {
  const c = PAGES.design
  return (
    <PageShell id="design" index={2} direction={direction} go={go} theme="theme-design">
      {/* ---- background layers ---- */}
      <div aria-hidden className="stars absolute inset-0" />
      <div aria-hidden className="glow glow-a" />
      <div aria-hidden className="glow glow-b" />
      <div aria-hidden className="grid-lines absolute inset-0" />
      <BgText className="left-[-1vw] top-[6vh] leading-[0.8]">
        KOZMIK
        <br />
        KREATIONS
      </BgText>
      <Starburst className="starburst absolute right-[-6vw] top-1/2 hidden w-[62vw] -translate-y-1/2 md:block" />

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
