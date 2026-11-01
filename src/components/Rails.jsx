/**
 * Thin vertical decorative lines with glowing nodes near the left and
 * right edges. Shared by all pages; colour comes from the theme's
 * --accent variable. Purely decorative (aria-hidden).
 */
export default function Rails() {
  return (
    <div aria-hidden className="rails pointer-events-none absolute inset-0 hidden md:block">
      <div className="rail rail-l" />
      <div className="rail rail-r" />
      <span className="node" style={{ left: 'calc(6vw - 3px)', top: '28%' }} />
      <span className="node" style={{ left: 'calc(6vw - 3px)', top: '71%', animationDelay: '1.4s' }} />
      <span className="node" style={{ right: 'calc(6vw - 3px)', top: '34%', animationDelay: '0.7s' }} />
      <span className="node" style={{ right: 'calc(6vw - 3px)', top: '66%', animationDelay: '2.1s' }} />
    </div>
  )
}
