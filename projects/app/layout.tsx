import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { baseUrl } from './sitemap'
import './global.css'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'CRM Developer & Software Developer | Guilherme Salviano',
    template: '%s | CRM Developer & Software Developer | Guilherme Salviano',
  },
  description: 'A CRM Developer with Mid & Senior experience at Enext Consultoria, currently studying Digital Games at Fatec.',
  openGraph: {
    title: 'Guilherme Salviano | CRM Developer & Software Developer',
    description: 'A CRM Developer with Mid & Senior experience at Enext Consultoria, currently studying Digital Games at Fatec.',
    url: baseUrl,
    siteName: 'CRM Developer & Software Developer | Guilherme Salviano',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: 'https://guilhermesalviano.github.io/og' }],
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
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  other: {
    'application/ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      url: 'https://guilhermesalviano.github.io',
      logo: 'https://guilhermesalviano.github.io/logo.png',
    }),
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guilherme Salviano | CRM Developer & Software Developer',
    description: 'A CRM Developer with Mid & Senior experience at Enext Consultoria, currently studying Digital Games at Fatec.',
    images: ['https://guilhermesalviano.github.io/og'],
  },
}

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

const cx = (...classes: (string | undefined | null | false)[]) =>
  classes.filter(Boolean).join(' ')

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
        geistSans.variable,
        geistMono.variable
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