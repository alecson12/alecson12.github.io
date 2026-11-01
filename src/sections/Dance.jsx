import { motion } from 'framer-motion'
import { LINKS } from '../links'

const tags = ['KRUMP', 'OPEN CHOREO', 'FLOPH', 'NITROUS IMAGE CREW', 'BUCK SHOKT', 'THE ROCKETEERZ']

const stars = [
  { pos: 'top-10 left-[42%]', size: 48, rot: 12 },
  { pos: 'bottom-24 left-[30%]', size: 32, rot: -20 },
  { pos: 'top-32 right-24', size: 60, rot: 30 },
]

export default function Dance() {
  return (
    <section id="dance" className="snap-section relative overflow-hidden bg-p5-red text-p5-cream">
      {/* textures */}
      <div className="p5-halftone pointer-events-none absolute inset-0 opacity-40" />
      <div className="p5-stripes pointer-events-none absolute -left-24 top-0 h-full w-40 -skew-x-12 opacity-90" />
      <div className="p5-stripes-white pointer-events-none absolute -right-20 bottom-0 h-72 w-[60%] skew-y-6 opacity-70" />

      {/* black slash */}
      <div className="pointer-events-none absolute -right-40 top-0 h-full w-[55%] bg-p5-black [clip-path:polygon(30%_0,100%_0,100%_100%,0_100%)]" />

      {/* floating stars */}
      {stars.map((s, i) => (
        <motion.svg
          key={i}
          viewBox="0 0 24 24"
          className={`absolute ${s.pos} fill-p5-cream drop-shadow-[4px_4px_0_#0a0a0a]`}
          style={{ width: s.size, height: s.size }}
          initial={{ rotate: s.rot, scale: 0 }}
          whileInView={{ scale: 1 }}
          animate={{ rotate: [s.rot, s.rot + 15, s.rot] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <path d="M12 0l3 9h9l-7 5 3 10-8-6-8 6 3-10-7-5h9z" />
        </motion.svg>
      ))}

      <div className="relative z-10 mx-auto flex min-h-dvh max-w-6xl flex-col justify-center px-6 py-24 md:px-12">
        <motion.p
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="p5-tag inline-block w-fit -rotate-2 bg-p5-black px-4 py-2 font-bangers text-lg tracking-widest text-p5-cream md:text-2xl"
        >
          01 / TAKE YOUR HEART
        </motion.p>

        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="p5-shadow mt-4 font-persona text-[20vw] leading-[0.82] uppercase md:text-[11rem]"
        >
          <span className="block -rotate-2">Dance</span>
          <span className="block rotate-1 text-p5-black [text-shadow:6px_6px_0_#f4ecd8]">Artist</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 max-w-md font-mono text-sm leading-relaxed text-p5-cream/90 md:text-base"
        >
          Krump &amp; open choreography. Choreographer, performer, and crew member. Movement as
          rebellion, rhythm as discipline. Every piece is a stolen heart.
        </motion.p>

        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((t, i) => (
            <motion.span
              key={t}
              initial={{ scale: 0, rotate: -10 }}
              whileInView={{ scale: 1, rotate: i % 2 ? 2 : -2 }}
              transition={{ delay: 0.35 + i * 0.06, type: 'spring' }}
              className={`${i % 2 ? 'p5-tag-alt bg-p5-cream text-p5-black' : 'p5-tag bg-p5-black text-p5-cream'} px-3 py-1 font-bangers text-sm tracking-wider`}
            >
              {t}
            </motion.span>
          ))}
        </div>

        <motion.a
          href={LINKS.dance}
          target="_blank"
          rel="noreferrer"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          whileHover={{ rotate: -3, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p5-tag mt-10 inline-block w-fit bg-p5-black px-10 py-5 font-persona text-2xl uppercase tracking-widest text-p5-cream shadow-[8px_8px_0_#f4ecd8] md:text-3xl"
        >
          View Dance Portfolio &rarr;
        </motion.a>
      </div>

      <div className="absolute bottom-6 left-6 font-bangers text-sm tracking-[0.4em] text-p5-cream/70 md:left-12">
        ALECSON GANTICA &middot; JR TSUBAKI
      </div>
    </section>
  )
}
