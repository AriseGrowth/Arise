import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Arise Growth | Operational Design Consultancy',
  description:
    'Elite operational design consultancy in Israel. We diagnose before we prescribe. Structural solutions for SMBs with 10-200 employees. monday.com Certified Partner.',
  keywords: ['operational design', 'business consulting', 'monday.com', 'Israel', 'SMB', 'automation'],
  openGraph: {
    title: 'Arise Growth | Operational Design Consultancy',
    description: 'Human First. System Second. Delivering Industrial Peace of Mind.',
    type: 'website',
    locale: 'en_US',
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
    <html lang="en">
      <body className="font-sans bg-arise-black text-arise-white antialiased">
        {children}
      </body>
    </html>
  )
}
