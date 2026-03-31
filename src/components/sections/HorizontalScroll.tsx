'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const VALUES = [
  {
    number: '01',
    title: 'Diagnose Before You Prescribe',
    description:
      'Every engagement begins with a deep operational diagnostic. We map your workflows, identify dependency chains, and find the structural fractures beneath the surface chaos.',
    accent: 'We listen before we build.',
  },
  {
    number: '02',
    title: 'Structural Solutions Over Behavioral Expectations',
    description:
      'Stop expecting people to remember. Stop building systems that rely on discipline. We architect processes where the right action is the easiest action.',
    accent: 'The system does the remembering.',
  },
  {
    number: '03',
    title: 'Partnership, Not Vendor',
    description:
      'We do not hand off a deck and disappear. We embed alongside your team for 90 days. We stay until the system runs without us. Then we remain as your Fractional CTO.',
    accent: 'We leave when you no longer need us.',
  },
]

export function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-66.667%'])
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 h-px bg-arise-white/5 z-20">
          <motion.div
            className="h-full bg-gradient-to-r from-arise-white/40 to-arise-white/80"
            style={{ width: progressWidth }}
          />
        </div>

        {/* Section label */}
        <motion.div
          className="absolute top-8 left-6 md:left-12 z-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-arise-white/30">
            Core Values
          </span>
        </motion.div>

        {/* Horizontal track */}
        <motion.div
          className="flex h-full"
          style={{ x, width: '300%' }}
        >
          {VALUES.map((value, i) => (
            <div
              key={i}
              className="w-screen h-full flex items-center justify-center px-8 md:px-20"
            >
              <div className="max-w-3xl mx-auto">
                <motion.span
                  className="text-[12vw] md:text-[8vw] font-bold text-arise-white/[0.03] leading-none tracking-ultra-tight block mb-8"
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                  viewport={{ once: true }}
                >
                  {value.number}
                </motion.span>

                <motion.h3
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-editorial leading-[1.05] text-arise-white"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  {value.title}
                </motion.h3>

                <motion.p
                  className="mt-8 text-lg md:text-xl text-arise-white/40 font-light leading-relaxed max-w-xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {value.description}
                </motion.p>

                <motion.p
                  className="mt-8 text-base md:text-lg text-arise-white/70 font-light italic border-l-2 border-arise-white/20 pl-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  {value.accent}
                </motion.p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
