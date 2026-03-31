'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { ScrollVelocityText } from '@/components/ui/ScrollVelocityText'
import { NotificationCascade } from '@/components/whatsapp/NotificationCascade'

export function ChaosSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const textOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0])
  const blurAmount = useTransform(scrollYProgress, [0.6, 0.9], [0, 20])
  const numberScale = useTransform(scrollYProgress, [0.1, 0.35], [0.8, 1])
  const numberOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.65, 0.85], [0, 0.08, 0.08, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[150vh] bg-arise-black overflow-hidden"
    >
      {/* Massive "50" background number */}
      <motion.div
        className="sticky top-0 h-screen flex items-center justify-center"
        style={{ opacity: textOpacity }}
      >
        <motion.span
          className="absolute text-[40vw] md:text-[35vw] font-bold text-arise-white select-none pointer-events-none leading-none tracking-ultra-tight"
          style={{ opacity: numberOpacity, scale: numberScale }}
        >
          50
        </motion.span>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <ScrollVelocityText>
            <motion.h2
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-editorial leading-[1.1] text-arise-white"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
              viewport={{ once: true }}
            >
              You built your company on
              <br />
              <span className="text-arise-white/80">intuition and WhatsApp.</span>
            </motion.h2>
          </ScrollVelocityText>

          <motion.p
            className="mt-8 md:mt-12 text-xl md:text-3xl font-light text-arise-white/40 tracking-editorial"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            But at 50 employees, intuition breaks.
          </motion.p>

          <motion.div
            className="mt-16 space-y-4 text-left max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              'Tasks falling through the cracks',
              'Information trapped in private chats',
              'Managers becoming bottlenecks',
              'No single source of truth',
            ].map((pain, i) => (
              <motion.p
                key={i}
                className="text-lg md:text-xl text-arise-white/30 font-light border-l border-arise-white/10 pl-6 py-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.15 }}
                viewport={{ once: true }}
              >
                {pain}
              </motion.p>
            ))}
          </motion.div>
        </div>

        {/* WhatsApp notification cascade */}
        <motion.div
          style={{ filter: useTransform(blurAmount, (v) => `blur(${v}px)`) }}
          className="absolute inset-0 pointer-events-none"
        >
          <NotificationCascade isActive={isInView} />
        </motion.div>
      </motion.div>
    </section>
  )
}
