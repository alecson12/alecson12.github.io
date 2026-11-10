/**
 * The painted background of each panel. Pure decoration (aria-hidden).
 * Dance  — crimson paper, red skyline, zigzag strip, spinning outlined stars
 * Design — the void, star fields, the Earth's glowing horizon
 * Unity  — the pixel Great Wave in its three painted layers, in motion
 * All sizes are relative to the panel, so the worlds work at any width.
 */
export default function World({ role }) {
  if (role.id === 'dance') return <Dance />
  if (role.id === 'design') return <Design />
  if (role.id === 'unity') return <Unity />
  return null
}

const DANCE_STARS = [
  { x: 12, y: 14, w: 9 },
  { x: 86, y: 9, w: 6 },
  { x: 90, y: 62, w: 7 },
  { x: 8, y: 70, w: 5 },
]

function Dance() {
  return (
    <div aria-hidden className="world">
      <div className="paper" />
      <span className="bldg bldg-1" />
      <span className="bldg bldg-2" />
      <span className="bldg bldg-3" />
      <div className="zigzag" />
      <svg viewBox="0 0 24 24" className="sparkle">
        <path d="M12 0c.9 6.6 4.5 10.2 12 12-7.5 1.8-11.1 5.4-12 12-.9-6.6-4.5-10.2-12-12C7.5 10.2 11.1 6.6 12 0Z" fill="currentColor" />
      </svg>
      {DANCE_STARS.map((s, i) => (
        <img
          key={i}
          src="/media/dance/star_p5.png"
          alt=""
          className="p5-star"
          style={{ left: `${s.x}%`, top: `${s.y}%`, width: `${s.w}%`, animationDuration: `${14 + (i % 3) * 4}s`, animationDirection: i % 2 ? 'reverse' : 'normal' }}
        />
      ))}
    </div>
  )
}

function Design() {
  return (
    <div aria-hidden className="world">
      <div className="nebula" />
      <div className="stars stars-far" />
      <div className="stars stars-mid" />
      <div className="stars stars-near" />
      <div className="shooting-star" />
      <div className="earth-wrap">
        <div className="atmosphere" />
        <div className="earth" />
        <div className="earth-rim" />
      </div>
    </div>
  )
}

/* The Start-screen artwork: 1798 × 875, shown through the 1353 × 756 window at (267, 59).
   Layers sit on the full artwork at their painted offsets (see UnityPortfolio/Start.jsx). */
const ART = { W: 1798, H: 875 }
const FRAME = { x: 267, y: 59, w: 1353, h: 756 }
const L = {
  sky: { x: 0, y: 0, w: 1798, h: 875 },
  mountains: { x: 0, y: 0, w: 1798, h: 875 },
  waves: { x: 0, y: 218, w: 1798, h: 657 },
}
const SUN = { x: 1318, y: 245, w: 138, h: 123 }
const SKY = 'linear-gradient(180deg, #1696fa 0%, #1898fb 14%, #1b9dfd 27%, #1ea4fd 34%, #28b1fd 41%, #35bdfd 48%, #38bffd 55%, #8edbfd 62%, #90dbfd 69%, #90dbfd 100%)'
const pct = (v, of) => `${(v / of) * 100}%`
const box = (b) => ({ left: pct(b.x, ART.W), top: pct(b.y, ART.H), width: pct(b.w, ART.W) })

function Unity() {
  return (
    <div aria-hidden className="world">
      <div className="frame">
        <div className="art" style={{ left: pct(-FRAME.x, FRAME.w), top: pct(-FRAME.y, FRAME.h), width: pct(ART.W, FRAME.w), height: pct(ART.H, FRAME.h), background: SKY }}>
          <div className="layer" style={box(L.sky)}>
            <img src="/media/unity/sky.webp" alt="" width={L.sky.w} height={L.sky.h} className="pixelated drift-sky" />
            <span className="sun-glow" style={{ left: pct(SUN.x - SUN.w * 0.45, L.sky.w), top: pct(SUN.y - SUN.h * 0.45, L.sky.h), width: pct(SUN.w * 1.9, L.sky.w), height: pct(SUN.h * 1.9, L.sky.h) }} />
          </div>
          <div className="layer" style={box(L.mountains)}>
            <img src="/media/unity/mountains.webp" alt="" width={L.mountains.w} height={L.mountains.h} className="pixelated heave-far" />
          </div>
          <div className="layer" style={box(L.waves)}>
            <img src="/media/unity/waves.webp" alt="" width={L.waves.w} height={L.waves.h} className="pixelated heave-waves" style={{ transformOrigin: '40% 100%' }} />
          </div>
        </div>
      </div>
      <div className="water" />
    </div>
  )
}
