import { motion } from 'framer-motion'
import { LINKS } from '../links'

function Starburst({ className = '', size = 200 }) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={{ width: size, height: size }}>
      <defs>
        <linearGradient id="chrome" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.45" stopColor="#c9ccd3" />
          <stop offset="0.5" stopColor="#5e626b" />
          <stop offset="0.6" stopColor="#e9ebef" />
          <stop offset="1" stopColor="#8f949e" />
        </linearGradient>
      </defs>
      <path d="M50 0 L56 44 L100 50 L56 56 L50 100 L44 56 L0 50 L44 44 Z" fill="url(#chrome)" />
      <path d="M50 18 L53 47 L82 50 L53 53 L50 82 L47 53 L18 50 L47 47 Z" fill="#05060a" opacity="0.7" />
    </svg>
  )
}

const skills = ['Branding', 'Logos', 'Layout', 'Motion']

export default function Design() {
  return (
    <section id="design" className="snap-section nebula relative overflow-hidden text-silver">
      <div className="stars twinkle pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(201,204,211,.12),transparent_50%)]" />

      {/* orbit ring */}
      <div className="spin-slow pointer-events-none absolute left-1/2 top-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-silver/10">
        <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-white shadow-[0_0_12px_#fff]" />
      </div>

      {/* big starburst */}
      <motion.div
        initial={{ scale: 0, rotate: -90, opacity: 0 }}
        whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
        className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 md:right-10"
      >
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}>
          <Starburst size={420} className="opacity-90 drop-shadow-[0_0_40px_rgba(255,255,255,.25)]" />
        </motion.div>
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-dvh max-w-6xl flex-col justify-center px-6 py-24 md:px-12">
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.1em' }}
          whileInView={{ opacity: 1, letterSpacing: '0.5em' }}
          transition={{ duration: 0.8 }}
          className="font-orbitron text-xs uppercase text-silver/70"
        >
          02 / Kozmik Kreations
        </motion.p>

        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="chrome-text mt-6 font-space text-[13vw] leading-[0.95] uppercase md:text-8xl"
        >
          Graphic
          <br />
          Designer
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 h-px w-48 origin-left bg-gradient-to-r from-white via-silver to-transparent"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 max-w-md font-mono text-sm leading-relaxed text-silver/80 md:text-base"
        >
          Branding, logo design, and visual identity. Born from a single point, exploding outward.
          Silver on the void, precision with a pulse.
        </motion.p>

        <div className="mt-8 grid max-w-md grid-cols-2 gap-px bg-silver/15 md:grid-cols-4">
          {skills.map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.08 }}
              className="bg-[#07080c] px-3 py-3 text-center font-orbitron text-[10px] uppercase tracking-[0.25em] text-silver/80"
            >
              {s}
            </motion.div>
          ))}
        </div>

        <motion.a
          href={LINKS.design}
          target="_blank"
          rel="noreferrer"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(255,255,255,.35)' }}
          whileTap={{ scale: 0.97 }}
          className="chrome-border mt-10 inline-block w-fit border-2 bg-gradient-to-b from-[#1a1c22] to-[#07080c] px-10 py-5 font-orbitron text-sm uppercase tracking-[0.35em] text-white"
        >
          View Design Portfolio &#10022;
        </motion.a>
      </div>

      <div className="absolute bottom-6 left-6 font-orbitron text-[10px] tracking-[0.4em] text-silver/50 md:left-12">
        ALECSON GANTICA &middot; KOZMIK KREATIONS
      </div>
    </section>
  )
}
