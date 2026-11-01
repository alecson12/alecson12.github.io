import { motion } from 'framer-motion'
import PageShell from '../components/PageShell'
import Photo from '../components/Photo'
import PortfolioButton from '../components/PortfolioButton'
import { PAGES } from '../content/pages'
import { contentVariants } from '../transitions/slide'

/**
 * PAGE 3 — Unity Developer
 * Layout: title + button LEFT, photo CENTER, extra text RIGHT (matches the sketch).
 * Theme: pixel / retro RPG. Styles in styles/themes.css.
 * Content: edit src/content/pages.js → PAGES.unity
 */
export default function UnityPage({ direction, go }) {
  const c = PAGES.unity
  return (
    <PageShell id="unity" direction={direction} go={go} theme="theme-unity">
      <div className="scanlines pointer-events-none absolute inset-0 opacity-30" />

      <div className="mx-auto grid min-h-full max-w-7xl grid-cols-1 items-center gap-6 px-6 pb-10 pt-36 md:grid-cols-[4fr_4fr_4fr] md:gap-10 md:px-16 md:pt-28">
        <div className="order-2 flex flex-col items-start md:order-1">
          <motion.p custom={0} variants={contentVariants} initial="hidden" animate="show" className="eyebrow">
            {c.eyebrow}
          </motion.p>
          <motion.h1 custom={1} variants={contentVariants} initial="hidden" animate="show" className="title mt-3">
            {c.title}
          </motion.h1>
          <motion.p custom={2} variants={contentVariants} initial="hidden" animate="show" className="description mt-5 max-w-sm md:hidden">
            {c.description}
          </motion.p>
          <motion.div custom={3} variants={contentVariants} initial="hidden" animate="show" className="mt-8">
            <PortfolioButton href={c.portfolioLink} label={c.buttonLabel} />
          </motion.div>
        </div>

        <Photo src={c.photo} alt={c.photoAlt} className="order-1 mx-auto h-[38vh] w-full max-w-xs md:order-2 md:h-[70vh] md:max-w-none" />

        <motion.div custom={2} variants={contentVariants} initial="hidden" animate="show" className="order-3 hidden flex-col gap-5 md:flex">
          <p className="description">{c.description}</p>
          <p className="description opacity-80">{c.secondaryText}</p>
        </motion.div>
      </div>
    </PageShell>
  )
}
