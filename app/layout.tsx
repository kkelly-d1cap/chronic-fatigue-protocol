import type { Metadata } from 'next'
import './globals.css'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Chronic Fatigue Protocol - Reclaim Your Energy from CFS/ME',
  description: 'A proven 5-pillar framework to rebuild your cells and heal your nervous system. Evidence-based protocol backed by Katie\'s personal recovery journey from Chronic Fatigue Syndrome.',
  keywords: ['chronic fatigue', 'CFS', 'ME', 'energy recovery', 'health protocol', 'mitochondrial health'],
  authors: [{ name: 'Katie' }],
  openGraph: {
    title: 'Chronic Fatigue Protocol - Reclaim Your Energy',
    description: 'A proven 5-pillar framework for recovering from Chronic Fatigue Syndrome',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
