'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const ANTI_VALUES = [
  'We do not sell software.',
  'We do not do behavioral training.',
  'We do not build dashboards nobody checks.',
  'We do not leave before the team adopts.',
  'We do not optimize what should be eliminated.',
]

export function AntiValueSection() {
  return (
    <section className="relative py-32 md:py-48 bg-arise-black">
      <motion.div
        className="max-w-4xl mx-auto px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.span
          variants={fadeInUp}
          className="text-xs uppercase tracking-[0.3em] text-arise-white/30 block mb-12"
        >
          What we do not do
        </motion.span>

        <div className="space-y-6">
          {ANTI_VALUES.map((value, i) => (
            <motion.div
              key={i}
              className="group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              viewport={{ once: true }}
            >
              <p className="text-2xl md:text-4xl font-light tracking-editorial text-arise-white/60 group-hover:text-arise-white/90 transition-colors duration-500 py-4 border-b border-arise-white/5">
                {value}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
