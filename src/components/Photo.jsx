import { motion } from 'framer-motion'
import { photoVariants } from '../transitions/slide'

/**
 * The large personal photograph on each page.
 * Replace the image by changing `photo` in src/content/pages.js.
 * The theme (.photo in themes.css) controls the frame, glow and fade.
 */
export default function Photo({ src, alt, className = '' }) {
  return (
    <motion.figure
      variants={photoVariants}
      initial="hidden"
      animate="show"
      className={`photo m-0 ${className}`}
    >
      <img src={src} alt={alt} className="h-full w-full object-contain object-bottom" draggable="false" />
    </motion.figure>
  )
}
