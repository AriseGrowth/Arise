'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useMagneticEffect } from '@/hooks/useMagneticEffect'

export function Navigation() {
  const { scrollY } = useScroll()
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.8])
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.1])
  const magnetic = useMagneticEffect(0.2)

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between"
      style={{
        backgroundColor: useTransform(bgOpacity, (v) => `rgba(0, 0, 0, ${v})`),
        borderBottom: useTransform(borderOpacity, (v) => `1px solid rgba(245, 245, 247, ${v})`),
        backdropFilter: useTransform(scrollY, [0, 100], ['blur(0px)', 'blur(20px)']),
      }}
    >
      <motion.a
        href="/"
        className="text-arise-white text-lg font-medium tracking-editorial"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Arise Growth
      </motion.a>

      <motion.div
        ref={magnetic.ref}
        onMouseMove={magnetic.handleMouseMove}
        onMouseLeave={magnetic.handleMouseLeave}
        style={{ x: magnetic.springX, y: magnetic.springY }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <a
          href="#contact"
          data-magnetic
          className="relative px-6 py-2.5 text-sm font-medium text-arise-black bg-arise-white rounded-full transition-all duration-300 hover:bg-white hover:scale-105 active:scale-95"
        >
          Initiate Diagnostic
        </a>
      </motion.div>
    </motion.nav>
  )
}
