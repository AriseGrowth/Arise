'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WORDS = ['Diagnose', 'Architect', 'Peace of Mind']

export function LoadingSequence() {
  const [currentWord, setCurrentWord] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const timers: NodeJS.Timeout[] = []

    WORDS.forEach((_, i) => {
      timers.push(
        setTimeout(() => setCurrentWord(i), i * 600)
      )
    })

    timers.push(
      setTimeout(() => setIsComplete(true), WORDS.length * 600 + 400)
    )

    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-[100000] bg-arise-black flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={currentWord}
              className="text-4xl md:text-6xl font-light tracking-editorial text-arise-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {WORDS[currentWord]}
            </motion.span>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
