'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SparkButton } from './SparkButton'
import { TypingIndicator } from './TypingIndicator'

interface Message {
  role: 'system' | 'user'
  content: string
}

function getGreeting(): string {
  const israelHour = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Jerusalem',
    hour: 'numeric',
    hour12: false,
  })
  const hour = parseInt(israelHour)
  if (hour < 12) return 'Good morning.'
  if (hour < 17) return 'Good afternoon.'
  return 'Good evening.'
}

const INITIAL_MESSAGE: Message = {
  role: 'system',
  content: `${getGreeting()} Arise Intelligence online. I can help you understand if your organization has operational fractures. What industry are you in?`,
}

export function AriseOS() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isTyping])

  // Load persisted messages
  useEffect(() => {
    const saved = localStorage.getItem('arise-os-messages')
    if (saved) {
      try {
        setMessages(JSON.parse(saved))
      } catch {}
    }
  }, [])

  // Persist messages
  useEffect(() => {
    if (messages.length > 1) {
      localStorage.setItem('arise-os-messages', JSON.stringify(messages))
    }
  }, [messages])

  const handleSend = () => {
    if (!input.trim()) return
    const userMsg: Message = { role: 'user', content: input.trim() }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const response = generateResponse(userMsg.content)
      setIsTyping(false)
      setMessages((prev) => [...prev, { role: 'system', content: response }])
    }, 1500 + Math.random() * 1000)
  }

  return (
    <>
      <SparkButton onClick={() => setIsOpen(true)} isOpen={isOpen} />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-0 right-0 md:bottom-8 md:right-8 z-[60] w-full md:w-[420px] h-full md:h-[600px] md:rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(10, 10, 12, 0.95)',
              backdropFilter: 'blur(40px)',
              border: '1px solid rgba(245, 245, 247, 0.08)',
            }}
            initial={{ opacity: 0, scale: 0.8, y: 20, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 40 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-arise-white/80 tracking-wide">
                  Arise Intelligence
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-arise-white/40 hover:text-arise-white transition-colors text-lg"
              >
                &times;
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4" style={{ height: 'calc(100% - 130px)' }}>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-arise-white/10 text-arise-white/90'
                        : 'bg-transparent text-arise-white/70 border border-white/5'
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isTyping && <TypingIndicator />}
            </div>

            {/* Input */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/5 bg-black/50 backdrop-blur-xl">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSend()
                }}
                className="flex gap-3"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Describe your operational challenge..."
                  className="flex-1 bg-arise-white/5 text-arise-white text-sm rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-arise-white/20 placeholder:text-arise-white/20 border border-white/5"
                />
                <button
                  type="submit"
                  className="px-4 py-3 bg-arise-white/10 hover:bg-arise-white/20 text-arise-white text-sm rounded-xl transition-colors"
                >
                  Send
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function generateResponse(input: string): string {
  const lower = input.toLowerCase()

  if (lower.includes('construction') || lower.includes('building') || lower.includes('contractor')) {
    return 'Construction is one of the highest-coordination industries we serve. Common fractures: project updates trapped in WhatsApp, no single source of truth for subcontractor status, and purchase orders that fall through the cracks. Would you like a 3-point diagnostic preview?'
  }
  if (lower.includes('real estate') || lower.includes('property')) {
    return 'Real estate operations often rely on manual handoffs between sales, legal, and operations. We typically find 3-5 redundant communication channels and zero automated status tracking. How many employees are on your team?'
  }
  if (lower.includes('mess') || lower.includes('chaos') || lower.includes('losing') || lower.includes('frustrated')) {
    return 'I hear you. That feeling of things slipping through the cracks is exactly why we exist. The good news: this is structural, not personal. It is not about working harder. It is about building systems where the right action is the easiest action. Tell me more about where the biggest bottleneck is.'
  }
  if (lower.includes('whatsapp') || lower.includes('excel') || lower.includes('spreadsheet')) {
    return 'WhatsApp dependency is the number one symptom we diagnose. Information goes in but never comes out in a structured way. We call this "tribal knowledge" -- when critical data lives only in private conversations. This is solvable. How many people are on your team?'
  }
  if (lower.includes('how') || lower.includes('what do you do') || lower.includes('process')) {
    return 'We follow three principles: (1) Diagnose before prescribing -- we map your actual workflows before suggesting changes. (2) Structural solutions over behavioral expectations -- we build systems where the right action is automatic. (3) We stay until adoption reaches 98%. Would you like to book a diagnostic call?'
  }
  if (lower.includes('price') || lower.includes('cost') || lower.includes('how much')) {
    return 'Engagements begin at 15,000 NIS for the initial diagnostic phase. Full implementation varies based on organizational complexity. The ROI typically materializes within 90 days through reduced management overhead and eliminated information silos. Would you like to discuss specifics?'
  }
  if (lower.includes('intelligence officer')) {
    return '> CLASSIFIED // ACCESS GRANTED\n\nMethodology Core: Diagnose. Architect. Adopt. Retain.\nOperational Status: Active.\nMission: Eliminate structural chaos in Israeli SMBs.\n\n[Terminal mode activated]'
  }

  return 'That is an important consideration. Every organization has unique fractures in their operational structure. What we find consistently is that the symptoms -- missed deadlines, duplicated work, information silos -- are structural, not behavioral. Could you tell me about your team size and primary industry?'
}
