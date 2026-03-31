import type { Metadata, Viewport } from 'next'
import { inter, notoSerifHebrew } from '@/lib/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Arise Growth | Operational Design Consultancy',
  description:
    'Elite operational design consultancy in Israel. We diagnose before we prescribe. Structural solutions for SMBs with 10-200 employees. monday.com Certified Partner.',
  keywords: ['operational design', 'business consulting', 'monday.com', 'Israel', 'SMB', 'automation'],
  metadataBase: new URL('https://www.arisegrowth.io'),
  openGraph: {
    title: 'Arise Growth | Operational Design Consultancy',
    description: 'Human First. System Second. Delivering Industrial Peace of Mind.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.arisegrowth.io',
    siteName: 'Arise Growth',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSerifHebrew.variable}`}>
      <body className="font-sans bg-arise-black text-arise-white antialiased">
        {children}
      </body>
    </html>
  )
}
