import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'CRM Developer & Game Developer | Guilherme Salviano',
    template: '%s | CRM Developer & Game Developer | Guilherme Salviano',
  },
  description: 'A CRM Developer with Mid & Senior experience at Enext Consultoria, currently studying Digital Games at Fatec.',
  openGraph: {
    title: 'Guilherme Salviano | CRM Developer & Game Developer',
    description: 'A CRM Developer with Mid & Senior experience at Enext Consultoria, currently studying Digital Games at Fatec.',
    url: baseUrl,
    siteName: 'CRM Developer & Game Developer | Guilherme Salviano',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased">
        <main>
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
