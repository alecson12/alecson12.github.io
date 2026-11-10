import World from './World'

/**
 * One door of the character select.
 *   state  'idle'   all three equal
 *          'active' this one is open (grows, shows the full copy)
 *          'dim'    another one is open (shrinks)
 * On hover devices the panel opens on hover; on touch the first tap opens
 * it and the buttons inside do the rest.
 */
export default function Panel({ role, state, touch, onActivate, onHire }) {
  const external = /^https?:\/\//.test(role.portfolioLink)
  const open = state === 'active'
  return (
    <section
      className={`panel world-${role.id} is-${state}`}
      aria-label={role.title}
      tabIndex={0}
      onMouseEnter={() => !touch && onActivate()}
      onFocus={onActivate}
      onClick={onActivate}
      onKeyDown={(e) => {
        if (e.key === 'Enter' && e.target === e.currentTarget) onHire()
      }}
    >
      <World role={role} />

      {/* the cut-out, standing on the bottom edge */}
      <figure className="photo m-0">
        <img src={role.photo} alt={role.photoAlt} draggable="false" />
      </figure>

      {/* the copy, top-left; the lower part only shows when open */}
      <div className="copy">
        {role.mark && (
          <span className="mark" aria-hidden>
            <img src={role.mark} alt="" draggable="false" />
            <span className="mark-sheen" style={{ WebkitMaskImage: `url("${role.markStencil}")`, maskImage: `url("${role.markStencil}")` }} />
          </span>
        )}
        <p className="eyebrow">{role.eyebrow}</p>
        {role.wordmark ? (
          <h2 className="title title-img">
            <img src={role.wordmark} alt={role.title} width={2404} height={866} draggable="false" />
          </h2>
        ) : (
          <h2 className="title">
            {role.title.split(' ').map((w, i) => (
              <span key={i} className={`block ${i === 0 ? 'title-top' : 'title-big'}`}>
                {w}
              </span>
            ))}
          </h2>
        )}

        <div className="more" aria-hidden={!open}>
          <p className="pitch">{role.pitch}</p>
          <ul className="chips" aria-label="Hire me for">
            {role.services.map((s) => (
              <li key={s} className="chip">
                {s}
              </li>
            ))}
          </ul>
          <div className="actions">
            <button
              type="button"
              tabIndex={open ? 0 : -1}
              className="btn btn-hire"
              onClick={(e) => {
                e.stopPropagation()
                onHire()
              }}
            >
              {role.hireLabel}
              <Arrow />
            </button>
            <a
              href={role.portfolioLink}
              tabIndex={open ? 0 : -1}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
              className="btn btn-portfolio"
              onClick={(e) => e.stopPropagation()}
            >
              {role.portfolioLabel}
              <Arrow out />
            </a>
          </div>
          {role.availability && <p className="avail">{role.availability}</p>}
        </div>
      </div>
    </section>
  )
}

function Arrow({ out = false }) {
  return (
    <svg viewBox="0 0 24 24" className="h-[14px] w-[14px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {out ? <path d="M7 17L17 7M9 7h8v8" /> : <path d="M5 12h14M13 6l6 6-6 6" />}
    </svg>
  )
}
