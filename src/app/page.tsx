'use client'

import dynamic from 'next/dynamic'
import { SmoothScrollProvider } from '@/providers/SmoothScrollProvider'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { ChaosSection } from '@/components/sections/ChaosSection'
import { DualitySection } from '@/components/sections/DualitySection'
import { HorizontalScroll } from '@/components/sections/HorizontalScroll'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { ClimaxSection } from '@/components/sections/ClimaxSection'
import { AntiValueSection } from '@/components/sections/AntiValueSection'
import { CTASection } from '@/components/sections/CTASection'

const LoadingSequence = dynamic(
  () => import('@/components/ui/LoadingSequence').then((m) => ({ default: m.LoadingSequence })),
  { ssr: false }
)

const FilmGrain = dynamic(
  () => import('@/components/ui/FilmGrain').then((m) => ({ default: m.FilmGrain })),
  { ssr: false }
)

const MagneticCursor = dynamic(
  () => import('@/components/ui/MagneticCursor').then((m) => ({ default: m.MagneticCursor })),
  { ssr: false }
)

const AriseOS = dynamic(
  () => import('@/components/arise-os/AriseOS').then((m) => ({ default: m.AriseOS })),
  { ssr: false }
)

export default function Home() {
  return (
    <SmoothScrollProvider>
      <LoadingSequence />
      <MagneticCursor />
      <FilmGrain />
      <Navigation />

      <main>
        <HeroSection />
        <ChaosSection />
        <DualitySection />
        <HorizontalScroll />
        <ServicesSection />
        <ClimaxSection />
        <AntiValueSection />
        <CTASection />
      </main>

      <Footer />
      <AriseOS />
    </SmoothScrollProvider>
  )
}
