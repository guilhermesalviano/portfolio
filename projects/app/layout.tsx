import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { JsonLd } from './components/json-ld'
import { personSchema, websiteSchema } from './lib/schema'
import { allSkills, baseUrl, siteConfig } from './lib/site'
import './global.css'

const description =
  'Guilherme Salviano — CRM Developer specialising in Salesforce Marketing Cloud: AMPscript, SSJS, Journey Builder and Email Studio. Based in Brazil.'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${siteConfig.name} — ${siteConfig.headline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: baseUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: 'technology',
  keywords: [
    'Guilherme Salviano',
    'Guibs',
    'CRM Developer',
    'Salesforce Marketing Cloud developer',
    'SFMC developer',
    'AMPscript developer',
    'marketing automation developer',
    'desenvolvedor Salesforce Marketing Cloud',
    'desenvolvedor CRM',
    'Enext Consultoria',
    ...allSkills,
  ],
  // Canonical URLs are set per page — a canonical here would be inherited by
  // every route and make them all claim the home page URL.
  alternates: {
    types: {
      'application/rss+xml': `${baseUrl}/rss.xml`,
    },
  },
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.headline}`,
    description,
    url: baseUrl,
    siteName: `${siteConfig.name} — ${siteConfig.headline}`,
    locale: 'en_US',
    alternateLocale: ['pt_BR'],
    type: 'website',
    images: [
      {
        url: `${baseUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.headline}`,
        type: 'image/png',
      },
    ],
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
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — ${siteConfig.headline}`,
    description,
    images: [`${baseUrl}/og.png`],
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
        <JsonLd data={[personSchema, websiteSchema]} />
        <main>{children}</main>
      </body>
    </html>
  )
}
