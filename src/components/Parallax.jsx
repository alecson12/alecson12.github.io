import { useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

/**
 * Mouse parallax shared by the pages.
 * useParallax() tracks the pointer as -1..1 on each axis (spring-smoothed).
 * <Layer depth={n}> moves by depth * that value in px, so a bigger depth
 * means a nearer, faster layer; negative depths move against the mouse.
 */
export function useParallax() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  useEffect(() => {
    const onMove = (e) => {
      mx.set((e.clientX / window.innerWidth) * 2 - 1)
      my.set((e.clientY / window.innerHeight) * 2 - 1)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [mx, my])
  const cfg = { stiffness: 40, damping: 20 }
  return { x: useSpring(mx, cfg), y: useSpring(my, cfg) }
}

export function Layer({ depth, px, className = '', children, style }) {
  const x = useTransform(px.x, (v) => v * depth)
  const y = useTransform(px.y, (v) => v * depth)
  return (
    <motion.div aria-hidden style={{ x, y, ...style }} className={`pointer-events-none absolute ${className}`}>
      {children}
    </motion.div>
  )
}
