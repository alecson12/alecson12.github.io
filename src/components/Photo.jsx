import { motion } from 'framer-motion'

/**
 * The large personal photograph on each page.
 * Replace the image by changing `photo` in src/content/pages.js.
 */
export default function Photo({ src, alt, className = '' }) {
  return (
    <motion.figure
      initial={{ opacity: 0, scale: 1.04 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.35, duration: 0.8, ease: 'easeOut' }}
      className={`photo relative m-0 overflow-hidden ${className}`}
    >
      <img src={src} alt={alt} className="h-full w-full object-cover object-top" draggable="false" />
    </motion.figure>
  )
}
