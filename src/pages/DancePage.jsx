import { motion } from 'framer-motion'
import PageShell from '../components/PageShell'
import Photo from '../components/Photo'
import PortfolioButton from '../components/PortfolioButton'
import { PAGES } from '../content/pages'
import { contentVariants } from '../transitions/slide'

/**
 * PAGE 1 — Dance Artist
 * Layout: photo on the LEFT, text on the RIGHT (matches the sketch).
 * Theme: Persona 5 inspired, red / black / cream. Styles in styles/themes.css.
 * Content: edit src/content/pages.js → PAGES.dance
 */
export default function DancePage({ direction, go }) {
  const c = PAGES.dance
  return (
    <PageShell id="dance" direction={direction} go={go} theme="theme-dance">
      <div className="mx-auto grid min-h-full max-w-7xl grid-cols-1 items-center gap-8 px-6 pb-28 pt-20 md:grid-cols-[5fr_6fr] md:gap-12 md:px-20 md:pb-24">
        <Photo src={c.photo} alt={c.photoAlt} className="h-[42vh] w-full md:h-[72vh]" />

        <div className="flex flex-col items-start md:pl-6">
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
      </div>
    </PageShell>
  )
}
