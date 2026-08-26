export const baseUrl = 'https://guilhermesalviano.github.io'

export const dynamic = 'force-static'

export default async function sitemap() {

  let routes = ['', '/projects', '/about'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes]
}
