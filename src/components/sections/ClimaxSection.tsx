'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export function ClimaxSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    ['#000000', '#000000', '#f5f5f7', '#f5f5f7']
  )
  const textColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    ['#f5f5f7', '#f5f5f7', '#1d1d1f', '#1d1d1f']
  )
  const hebrewScale = useTransform(scrollYProgress, [0.15, 0.6], [0.4, 1])
  const hebrewOpacity = useTransform(scrollYProgress, [0.1, 0.35], [0, 1])
  const subtitleOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1])
  const subtitleY = useTransform(scrollYProgress, [0.5, 0.7], [30, 0])

  return (
    <section ref={containerRef} className="relative h-[200vh]">
      <motion.div
        className="sticky top-0 h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
        style={{ backgroundColor }}
      >
        <motion.div
          className="text-center"
          style={{ scale: hebrewScale, opacity: hebrewOpacity }}
        >
          <motion.h2
            className="font-hebrew text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-bold leading-none"
            style={{ color: textColor }}
            dir="rtl"
          >
            שקט תעשייתי
          </motion.h2>
        </motion.div>

        <motion.div
          className="mt-8 text-center"
          style={{ opacity: subtitleOpacity, y: subtitleY }}
        >
          <motion.p
            className="text-xl md:text-3xl font-light tracking-editorial"
            style={{ color: textColor }}
          >
            Industrial Peace of Mind
          </motion.p>
          <motion.p
            className="mt-6 text-base md:text-lg font-light max-w-xl mx-auto"
            style={{
              color: useTransform(
                scrollYProgress,
                [0, 0.3, 0.7, 1],
                ['rgba(245,245,247,0.4)', 'rgba(245,245,247,0.4)', 'rgba(29,29,31,0.5)', 'rgba(29,29,31,0.5)']
              ),
            }}
          >
            The moment your systems run without you. The moment your team
            knows exactly what to do. That is what we deliver.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}
