'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, scaleReveal } from '@/lib/animations'

const SERVICES = [
  {
    title: 'Operational Diagnostic',
    description: 'A deep-tissue scan of your workflows, dependencies, and structural fractures. The foundation of everything we build.',
    tag: 'Phase 1',
    duration: '2-3 weeks',
    span: 'md:col-span-2',
  },
  {
    title: 'System Architecture',
    description: 'Custom-built operational systems on monday.com. Automations that eliminate manual updates. A single source of truth.',
    tag: 'Phase 2',
    duration: '8-12 weeks',
    span: 'md:col-span-1',
  },
  {
    title: 'Team Adoption',
    description: 'We do not hand over a system and leave. We embed with your team until adoption reaches 98%. No training decks. Real change.',
    tag: 'Phase 3',
    duration: '4-6 weeks',
    span: 'md:col-span-1',
  },
  {
    title: 'Fractional CTO Retainer',
    description: 'Your systems evolve. Your business grows. We stay as your operational partner, tuning, optimizing, and scaling what we built.',
    tag: 'Ongoing',
    duration: 'Monthly',
    span: 'md:col-span-2',
  },
]

export function ServicesSection() {
  return (
    <section className="relative py-32 md:py-48 bg-arise-black">
      <motion.div
        className="max-w-7xl mx-auto px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div variants={fadeInUp} className="mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-arise-white/30 block mb-6">
            The Process
          </span>
          <h2 className="text-4xl md:text-6xl font-light tracking-editorial text-arise-white leading-tight">
            Four phases to
            <br />
            <span className="text-arise-white/50">operational peace.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              variants={scaleReveal}
              className={`${service.span} group relative p-8 md:p-10 rounded-2xl border border-arise-white/5 bg-arise-white/[0.02] hover:bg-arise-white/[0.04] hover:border-arise-white/10 transition-all duration-500`}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs uppercase tracking-[0.2em] text-arise-white/30 px-3 py-1 border border-arise-white/10 rounded-full">
                  {service.tag}
                </span>
                <span className="text-xs text-arise-white/20">{service.duration}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-light tracking-editorial text-arise-white mb-4">
                {service.title}
              </h3>
              <p className="text-base text-arise-white/40 font-light leading-relaxed">
                {service.description}
              </p>
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-arise-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
