import { motion } from 'framer-motion'
import { LINKS } from '../links'

// 12x16 pixel hero sprite. Letters map to colors below.
const SPRITE = [
  '....BBBB....',
  '...BBBBBB...',
  '...BSSSSB...',
  '...BSESEB...',
  '...BSSSSB...',
  '....SSSS....',
  '..RRRRRRRR..',
  '.RRRRRRRRRR.',
  'SRRRRRRRRRRS',
  'SRRRRRRRRRRS',
  '..RRRRRRRR..',
  '..RR....RR..',
  '..PP....PP..',
  '..PP....PP..',
  '.BBB....BBB.',
  '.BBB....BBB.',
]
const COLORS = { B: '#1b1b2f', S: '#f3c89d', E: '#0a0a0a', R: '#c62828', P: '#3949ab' }

function Sprite({ scale = 8 }) {
  return (
    <div className="bob" style={{ display: 'grid', gridTemplateColumns: `repeat(12, ${scale}px)` }}>
      {SPRITE.flatMap((row, y) =>
        row.split('').map((c, x) => (
          <div key={`${x}-${y}`} style={{ width: scale, height: scale, background: COLORS[c] || 'transparent' }} />
        )),
      )}
    </div>
  )
}

const stats = [
  ['C#', 'LV 9'],
  ['Unity', 'LV 9'],
  ['Shaders', 'LV 6'],
  ['Pixel Art', 'LV 7'],
]

export default function Unity() {
  return (
    <section id="unity" className="snap-section relative overflow-hidden bg-pixel-sky text-p5-black">
      <div className="pixel-clouds pointer-events-none absolute inset-0 opacity-90" />
      <div className="scanlines pointer-events-none absolute inset-0 z-20 opacity-40" />

      {/* pixel sun */}
      <div className="pixel-box absolute right-[12%] top-[12%] h-20 w-20 bg-[#ffd54f]" />

      {/* ground */}
      <div className="pixel-grass absolute bottom-0 left-0 z-10 h-28 w-full" />
      <div className="pixel-dirt absolute bottom-0 left-0 h-16 w-full" />

      {/* hero */}
      <motion.div
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1.2, ease: 'linear' }}
        className="absolute bottom-24 left-[8%] z-10 md:left-[14%]"
      >
        <Sprite scale={9} />
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-dvh max-w-6xl flex-col justify-center px-6 py-24 md:items-end md:px-12">
        {/* dialogue box */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, type: 'spring' }}
          className="pixel-box w-full max-w-xl bg-[#1b1b2f] p-6 text-left text-white md:p-8"
        >
          <p className="font-pixel text-[10px] text-[#ffd54f] md:text-xs">03 / NEW GAME</p>
          <h2 className="mt-5 font-pixel text-2xl leading-[1.3] uppercase md:text-4xl">
            Unity
            <br />
            Developer
          </h2>
          <p className="mt-5 font-pixelsans text-lg leading-snug text-white/90 md:text-xl">
            Gameplay programmer and game designer. Systems, mechanics, and worlds built pixel by
            pixel. RPG hearts, tight controls, and a love for the classics.
            <span className="blink ml-1">&#9646;</span>
          </p>

          <div className="mt-5 grid grid-cols-2 gap-2 font-pixelsans text-sm md:grid-cols-4">
            {stats.map(([k, v]) => (
              <div key={k} className="border-2 border-white/40 px-2 py-1">
                <div className="text-[#7ec8e3]">{k}</div>
                <div className="text-[#ffd54f]">{v}</div>
              </div>
            ))}
          </div>

          <motion.a
            href={LINKS.unity}
            target="_blank"
            rel="noreferrer"
            whileHover={{ x: 4 }}
            className="pixel-box pixel-btn mt-7 inline-block bg-[#4caf50] px-6 py-4 font-pixel text-[10px] uppercase text-p5-black md:text-xs"
          >
            &#9654; View Unity Portfolio
          </motion.a>
        </motion.div>
      </div>

      <div className="absolute bottom-32 right-6 z-10 font-pixel text-[8px] text-p5-black/70 md:right-12">
        ALECSON GANTICA &middot; PRESS START
      </div>
    </section>
  )
}
