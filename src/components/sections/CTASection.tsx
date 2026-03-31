'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useMagneticEffect } from '@/hooks/useMagneticEffect'

export function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [ripple, setRipple] = useState(false)
  const magnetic = useMagneticEffect(0.15)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.95, 1])

  const handleClick = () => {
    setRipple(true)
    setTimeout(() => setRipple(false), 600)
  }

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative py-32 md:py-48 bg-arise-black"
    >
      <motion.div
        className="max-w-4xl mx-auto px-6 text-center"
        style={{ opacity, scale }}
      >
        <motion.span
          className="text-xs uppercase tracking-[0.3em] text-arise-white/30 block mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Currently accepting 2 new clients for Q2 2026
        </motion.span>

        <motion.h2
          className="text-5xl md:text-7xl lg:text-8xl font-light tracking-ultra-tight text-arise-white leading-none"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Ready to stop
          <br />
          <span className="text-arise-white/50">managing chaos?</span>
        </motion.h2>

        <motion.p
          className="mt-8 text-lg md:text-xl text-arise-white/40 font-light max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Engagements begin at &#x20AA;15,000. One discovery call.
          No commitment required.
        </motion.p>

        <motion.div
          className="mt-14 relative inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            ref={magnetic.ref}
            onMouseMove={magnetic.handleMouseMove}
            onMouseLeave={magnetic.handleMouseLeave}
            style={{ x: magnetic.springX, y: magnetic.springY }}
          >
            <button
              data-magnetic
              onClick={handleClick}
              className="relative px-12 py-5 text-base font-medium tracking-wide text-arise-black bg-arise-white rounded-full transition-all duration-500 hover:bg-white hover:scale-105 hover:shadow-[0_0_60px_rgba(245,245,247,0.2)] active:scale-95 overflow-hidden"
            >
              <span className="relative z-10">Initiate Transformation</span>
              {/* Haptic ripple effect */}
              {ripple && (
                <motion.span
                  className="absolute inset-0 bg-arise-black/10 rounded-full"
                  initial={{ scale: 0, opacity: 0.5 }}
                  animate={{ scale: 3, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                />
              )}
            </button>
          </motion.div>

          {/* Ambient glow */}
          <div className="absolute -inset-4 bg-arise-white/5 rounded-full blur-2xl opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </motion.div>

        <motion.p
          className="mt-8 text-sm text-arise-white/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          monday.com Certified Partner &middot; 90-Day System Adoption Rate
        </motion.p>
      </motion.div>
    </section>
  )
}
