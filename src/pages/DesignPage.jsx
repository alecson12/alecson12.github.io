import { motion } from 'framer-motion'
import PageShell from '../components/PageShell'
import Photo from '../components/Photo'
import PortfolioButton from '../components/PortfolioButton'
import { PAGES } from '../content/pages'
import { contentVariants } from '../transitions/slide'

/**
 * PAGE 2 — Graphic Design
 * Layout: text on the LEFT, photo on the RIGHT (matches the sketch).
 * Theme: space + silver chrome. Styles in styles/themes.css.
 * Content: edit src/content/pages.js → PAGES.design
 */
export default function DesignPage({ direction, go }) {
  const c = PAGES.design
  return (
    <PageShell id="design" direction={direction} go={go} theme="theme-design">
      <div className="stars pointer-events-none absolute inset-0 opacity-70" />

      <div className="mx-auto grid min-h-full max-w-7xl grid-cols-1 items-center gap-8 px-6 pb-28 pt-20 md:grid-cols-[6fr_5fr] md:gap-12 md:px-20 md:pb-24">
        <div className="order-2 flex flex-col items-start md:order-1 md:pr-6">
          <motion.p custom={0} variants={contentVariants} initial="hidden" animate="show" className="eyebrow">
            {c.eyebrow}
          </motion.p>
          <motion.h1 custom={1} variants={contentVariants} initial="hidden" animate="show" className="title mt-3">
            {c.title}
          </motion.h1>
          <motion.p custom={2} variants={contentVariants} initial="hidden" animate="show" className="description mt-6 max-w-md">
            {c.description}
          </motion.p>
          <motion.div custom={3} variants={contentVariants} initial="hidden" animate="show" className="mt-10">
            <PortfolioButton href={c.portfolioLink} label={c.buttonLabel} />
          </motion.div>
        </div>

        <Photo src={c.photo} alt={c.photoAlt} className="order-1 h-[42vh] w-full md:order-2 md:h-[72vh]" />
      </div>
    </PageShell>
  )
}
