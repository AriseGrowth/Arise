'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useIsMobile } from '@/hooks/useMediaQuery'

export function MagneticCursor() {
  const isMobile = useIsMobile()
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const cursorScale = useMotionValue(1)
  const isHovering = useRef(false)

  const springX = useSpring(cursorX, { stiffness: 500, damping: 28 })
  const springY = useSpring(cursorY, { stiffness: 500, damping: 28 })
  const springScale = useSpring(cursorScale, { stiffness: 300, damping: 20 })

  useEffect(() => {
    if (isMobile) return

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 8)
      cursorY.set(e.clientY - 8)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-magnetic]')
      ) {
        cursorScale.set(2.5)
        isHovering.current = true
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-magnetic]')
      ) {
        cursorScale.set(1)
        isHovering.current = false
      }
    }

    window.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [isMobile, cursorX, cursorY, cursorScale])

  if (isMobile) return null

  return (
    <>
      <style jsx global>{`
        * { cursor: none !important; }
      `}</style>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-arise-white mix-blend-difference pointer-events-none z-[99999]"
        style={{
          x: springX,
          y: springY,
          scale: springScale,
        }}
      />
    </>
  )
}
