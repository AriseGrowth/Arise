'use client'

import { useReducedMotion } from '@/hooks/useMediaQuery'

export function FilmGrain() {
  const reducedMotion = useReducedMotion()

  if (reducedMotion) return null

  return (
    <div
      className="film-grain animate-grain"
      aria-hidden="true"
    />
  )
}
