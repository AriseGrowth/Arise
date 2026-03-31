import { Inter, Noto_Serif_Hebrew } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const notoSerifHebrew = Noto_Serif_Hebrew({
  subsets: ['hebrew'],
  variable: '--font-noto-serif-hebrew',
  display: 'swap',
  weight: ['400', '700'],
})
