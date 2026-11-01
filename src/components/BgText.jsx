/**
 * Oversized typography sitting behind the content, like the giant word
 * in a game splash screen. Styled per theme via the .bg-text class.
 */
export default function BgText({ children, className = '' }) {
  return (
    <div aria-hidden className={`bg-text pointer-events-none absolute select-none ${className}`}>
      {children}
    </div>
  )
}
