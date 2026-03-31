'use client'

import { useMotionValue, useVelocity, useSpring, useScroll } from 'framer-motion'

export function useScrollVelocity() {
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })

  return { scrollY, scrollVelocity, smoothVelocity }
}
