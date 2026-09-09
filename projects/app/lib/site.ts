export const baseUrl = 'https://guilhermesalviano.github.io'

export const siteConfig = {
  baseUrl,
  name: 'Guilherme Salviano',
  alternateName: 'Guibs',
  firstName: 'Guilherme',
  lastName: 'Salviano',
  jobTitle: 'CRM Developer',
  headline: 'Salesforce Marketing Cloud & CRM Developer',
  image: 'https://avatars.githubusercontent.com/u/36766110?v=4',
  employer: {
    name: 'Enext Consultoria',
    url: 'https://www.enext.com.br/',
  },
  school: {
    name: 'Fatec',
    description: 'Digital Games',
  },
  location: {
    country: 'BR',
    countryName: 'Brazil',
  },
  social: {
    github: 'https://github.com/guilhermesalviano',
    linkedin: 'https://www.linkedin.com/in/guilherme-salviano/',
  },
} as const

/** Skills used for `knowsAbout` in JSON-LD and for the visible tech lists. */
export const skills = {
  marketingCloud: [
    'Salesforce Marketing Cloud',
    'AMPscript',
    'Server-Side JavaScript (SSJS)',
    'Journey Builder',
    'Email Studio',
    'Content Builder',
    'Automation Studio',
    'Data Extensions',
    'SQL',
  ],
  engineering: [
    'TypeScript',
    'JavaScript',
    'Node.js',
    'React',
    'Next.js',
    'Docker',
    'Terraform',
    'AWS',
  ],
} as const

export const allSkills: string[] = [...skills.marketingCloud, ...skills.engineering]

export type Locale = 'en' | 'pt'

/** Locale metadata used for hreflang, OG locales and `<div lang>` wrappers. */
export const locales = {
  en: { hreflang: 'en-US', ogLocale: 'en_US', htmlLang: 'en', intl: 'en-US' },
  pt: { hreflang: 'pt-BR', ogLocale: 'pt_BR', htmlLang: 'pt-BR', intl: 'pt-BR' },
} as const

/** Path for a logical page in a given locale. English lives at the root. */
export function pathFor(locale: Locale, page: '' | '/about' | '/projects'): string {
  return locale === 'en' ? page || '/' : `/pt${page}`
}

/**
 * hreflang alternates for a page, in the shape Next's `alternates.languages`
 * expects. Every page references both locales plus `x-default`.
 */
export function languageAlternates(page: '' | '/about' | '/projects') {
  return {
    'en-US': pathFor('en', page),
    'pt-BR': pathFor('pt', page),
    'x-default': pathFor('en', page),
  }
}
