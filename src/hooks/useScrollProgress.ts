'use client'

import { useScroll, useTransform, type MotionValue } from 'framer-motion'
import { useRef } from 'react'

interface ScrollProgressOptions {
  offset?: [string, string]
}

export function useScrollProgress(options?: ScrollProgressOptions) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: (options?.offset as any) || ['start end', 'end start'],
  })

  return { ref, scrollYProgress }
}

export function useScrollRange(
  progress: MotionValue<number>,
  inputRange: number[],
  outputRange: number[]
) {
  return useTransform(progress, inputRange, outputRange)
}
