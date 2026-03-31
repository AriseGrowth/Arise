'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export function Footer() {
  return (
    <footer className="relative bg-arise-black border-t border-white/5">
      <motion.div
        className="max-w-7xl mx-auto px-6 py-20"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={fadeInUp} className="max-w-2xl">
          <p className="text-2xl md:text-3xl font-light leading-relaxed tracking-editorial text-arise-white/90">
            We believe every business deserves architecture, not duct tape.
            We diagnose before we prescribe.
            We build systems that outlast the people who built them.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
        >
          <div>
            <p className="text-arise-white/40 text-sm">
              Arise Growth &mdash; Operational Design Consultancy
            </p>
            <p className="text-arise-white/30 text-xs mt-1">
              Israel &middot; Serving SMBs with 10&ndash;200 employees
            </p>
          </div>
          <div className="flex gap-8 text-sm text-arise-white/40">
            <a href="#" className="hover:text-arise-white transition-colors duration-300">
              LinkedIn
            </a>
            <a href="#" className="hover:text-arise-white transition-colors duration-300">
              Contact
            </a>
            <span className="text-arise-white/20">
              monday.com Certified Partner
            </span>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}
