'use client'

import { motion } from 'framer-motion'

interface SparkButtonProps {
  onClick: () => void
  isOpen: boolean
}

export function SparkButton({ onClick, isOpen }: SparkButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
      style={{
        background: 'linear-gradient(135deg, #333 0%, #1a1a1a 50%, #333 100%)',
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: isOpen ? 0 : 1,
        rotate: isOpen ? 180 : 0,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      data-magnetic
      aria-label="Open Arise Intelligence"
    >
      {/* Pulsing gradient ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'linear-gradient(135deg, rgba(245,245,247,0.2), rgba(245,245,247,0.05))',
        }}
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      {/* Icon */}
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-arise-white relative z-10"
      >
        <path d="M12 2L12 22M2 12L22 12M5.64 5.64L18.36 18.36M18.36 5.64L5.64 18.36" />
      </svg>
    </motion.button>
  )
}
