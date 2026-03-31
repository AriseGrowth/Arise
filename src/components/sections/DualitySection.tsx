'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export function DualitySection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const dividerX = useTransform(scrollYProgress, [0.2, 0.5], ['100%', '50%'])
  const leftOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1])
  const rightOpacity = useTransform(scrollYProgress, [0.35, 0.55], [0, 1])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-arise-black overflow-hidden"
    >
      <div className="sticky top-0 h-screen flex">
        {/* Left: Intelligence Officer */}
        <motion.div
          className="w-1/2 h-full flex items-center justify-center px-8 md:px-16"
          style={{ opacity: leftOpacity }}
        >
          <div className="max-w-md">
            <motion.span
              className="text-xs uppercase tracking-[0.3em] text-arise-white/30 block mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              The Intelligence Officer
            </motion.span>
            <h3 className="text-3xl md:text-5xl font-light tracking-editorial text-arise-white leading-tight">
              Analytical
              <br />
              Precision
            </h3>
            <div className="mt-8 space-y-4">
              {['Airtight architectures', 'Data-driven diagnostics', 'Systems that never leak'].map(
                (item, i) => (
                  <motion.p
                    key={i}
                    className="text-arise-white/40 text-base md:text-lg font-light"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {item}
                  </motion.p>
                )
              )}
            </div>
          </div>
        </motion.div>

        {/* Center divider */}
        <motion.div
          className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-arise-white/20 to-transparent"
          style={{ left: dividerX }}
        />

        {/* Right: Social Worker */}
        <motion.div
          className="w-1/2 h-full flex items-center justify-center px-8 md:px-16"
          style={{ opacity: rightOpacity }}
        >
          <div className="max-w-md">
            <motion.span
              className="text-xs uppercase tracking-[0.3em] text-arise-white/30 block mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              The Social Worker
            </motion.span>
            <h3 className="text-3xl md:text-5xl font-light tracking-editorial text-arise-white leading-tight">
              Human
              <br />
              Empathy
            </h3>
            <div className="mt-8 space-y-4">
              {['Change management', 'Team adoption focus', '98% implementation success'].map(
                (item, i) => (
                  <motion.p
                    key={i}
                    className="text-arise-white/40 text-base md:text-lg font-light"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {item}
                  </motion.p>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
