'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ScrollVelocityText } from '@/components/ui/ScrollVelocityText'

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.3])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const textY = useTransform(scrollYProgress, [0, 0.5], ['0%', '30%'])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.4, 0.9])

  return (
    <section
      ref={containerRef}
      className="relative h-[120vh] overflow-hidden bg-arise-black"
    >
      {/* Background image with scale/pan effect */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          scale: imageScale,
          opacity: imageOpacity,
          y: imageY,
        }}
      >
        {/* Architectural gradient placeholder - replace with real image */}
        <div
          className="w-full h-full"
          style={{
            background: `
              radial-gradient(ellipse at 30% 50%, rgba(40, 40, 45, 0.8) 0%, transparent 60%),
              radial-gradient(ellipse at 70% 30%, rgba(30, 35, 40, 0.6) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 80%, rgba(25, 25, 30, 0.9) 0%, transparent 70%),
              linear-gradient(180deg, #0a0a0c 0%, #151518 30%, #0d0d10 70%, #000000 100%)
            `,
          }}
        />
        {/* Subtle grid pattern for architectural feel */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(245,245,247,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(245,245,247,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </motion.div>

      {/* Dark overlay */}
      <motion.div
        className="absolute inset-0 bg-arise-black"
        style={{ opacity: overlayOpacity }}
      />

      {/* Hero content */}
      <div className="relative z-10 h-screen flex flex-col items-center justify-center px-6">
        <motion.div
          style={{ y: textY }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.p
            className="text-arise-white/50 text-sm md:text-base uppercase tracking-[0.3em] mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            Operational Design Consultancy
          </motion.p>

          <ScrollVelocityText>
            <motion.h1
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-ultra-tight leading-[0.9] text-arise-white"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.4, ease: [0.25, 0.4, 0.25, 1] }}
            >
              Human First.
              <br />
              <span className="text-arise-white/60">System Second.</span>
            </motion.h1>
          </ScrollVelocityText>

          <motion.p
            className="mt-8 md:mt-12 text-lg md:text-xl text-arise-white/50 font-light max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
          >
            Your business deserves architecture, not duct tape.
            We diagnose before we prescribe.
          </motion.p>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.2 }}
          >
            <a
              href="#contact"
              data-magnetic
              className="inline-block px-8 py-4 text-sm font-medium tracking-wide text-arise-black bg-arise-white rounded-full transition-all duration-500 hover:bg-white hover:scale-105 hover:shadow-[0_0_40px_rgba(245,245,247,0.15)] active:scale-95"
            >
              Initiate Diagnostic
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
        >
          <motion.div
            className="w-[1px] h-12 bg-gradient-to-b from-arise-white/40 to-transparent"
            animate={{ scaleY: [1, 0.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  )
}
