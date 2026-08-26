import { baseUrl } from 'app/sitemap'

export const dynamic = 'force-static'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: "/",
        disallow: ["/countdown", "/time-to-a-year"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
