import { motion } from 'framer-motion'
import { contentVariants } from '../transitions/slide'

/** Wraps a block of text so it fades up after the page slides in. `i` staggers. */
export default function Reveal({ i = 0, as = 'div', className = '', children }) {
  const Tag = motion[as]
  return (
    <Tag custom={i} variants={contentVariants} initial="hidden" animate="show" className={className}>
      {children}
    </Tag>
  )
}
