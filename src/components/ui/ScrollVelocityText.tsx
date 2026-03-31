'use client'

import { useRef } from 'react'
import { motion, useScroll, useVelocity, useTransform, useSpring } from 'framer-motion'

interface ScrollVelocityTextProps {
  children: React.ReactNode
  className?: string
}

export function ScrollVelocityText({ children, className }: ScrollVelocityTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const velocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(velocity, { damping: 50, stiffness: 400 })
  const skewY = useTransform(smoothVelocity, [-1000, 0, 1000], [-2, 0, 2])
  const scaleX = useTransform(smoothVelocity, [-1000, 0, 1000], [1.02, 1, 1.02])

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ skewY, scaleX }}
    >
      {children}
    </motion.div>
  )
}
