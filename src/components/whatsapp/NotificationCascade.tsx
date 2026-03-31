'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const MESSAGES = [
  { name: 'Yossi', text: 'Did anyone update the client?', time: '09:14' },
  { name: 'Noa', text: 'Which version is the latest?', time: '09:15' },
  { name: 'Amit', text: 'I sent it on WhatsApp yesterday', time: '09:15' },
  { name: 'Chen', text: 'Who approved the purchase order?', time: '09:16' },
  { name: 'Yossi', text: 'Wait, which project is this for?', time: '09:16' },
  { name: 'Noa', text: 'The Excel file is outdated again', time: '09:17' },
  { name: 'Ron', text: 'Can someone call the supplier?', time: '09:17' },
  { name: 'Amit', text: 'I thought Maya was handling this', time: '09:18' },
  { name: 'Chen', text: '?? Where is the status update', time: '09:18' },
  { name: 'Maya', text: 'Nobody told me about the change', time: '09:19' },
]

interface NotificationCascadeProps {
  isActive: boolean
}

export function NotificationCascade({ isActive }: NotificationCascadeProps) {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([])

  useEffect(() => {
    if (!isActive) {
      setVisibleMessages([])
      return
    }

    const timers: NodeJS.Timeout[] = []
    MESSAGES.forEach((_, i) => {
      timers.push(
        setTimeout(() => {
          setVisibleMessages((prev) => [...prev, i])
        }, 800 + i * 500)
      )
    })

    return () => timers.forEach(clearTimeout)
  }, [isActive])

  return (
    <div className="absolute top-1/2 right-4 md:right-12 -translate-y-1/2 w-72 md:w-80 space-y-2 max-h-[60vh] overflow-hidden">
      <AnimatePresence>
        {visibleMessages.map((index) => {
          const msg = MESSAGES[index]
          return (
            <motion.div
              key={index}
              className="bg-whatsapp-dark/80 backdrop-blur-sm rounded-xl p-3 border border-white/5"
              initial={{ opacity: 0, x: 80, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.4,
                ease: [0.25, 0.4, 0.25, 1],
              }}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-whatsapp-green text-xs font-medium">
                  {msg.name}
                </span>
                <span className="text-white/20 text-[10px]">{msg.time}</span>
              </div>
              <p className="text-white/60 text-sm leading-snug">{msg.text}</p>
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}
