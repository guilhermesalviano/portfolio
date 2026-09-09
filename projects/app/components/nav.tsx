import Link from 'next/link'
import { content } from 'app/lib/content'
import { pathFor, type Locale } from 'app/lib/site'

export function Navbar({ locale = 'en' }: { locale?: Locale }) {
  const t = content[locale]
  const other: Locale = locale === 'en' ? 'pt' : 'en'

  const navItems = [
    { href: pathFor(locale, ''), name: t.nav.home },
    { href: pathFor(locale, '/projects'), name: t.nav.projects },
    { href: pathFor(locale, '/about'), name: t.nav.about },
  ]

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {navItems.map(({ href, name }) => (
              <Link
                key={href}
                href={href}
                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
              >
                {name}
              </Link>
            ))}
            <Link
              href={pathFor(other, '')}
              hrefLang={other === 'pt' ? 'pt-BR' : 'en-US'}
              lang={other === 'pt' ? 'pt-BR' : 'en-US'}
              className="transition-all text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 flex align-middle relative py-1 px-2 m-1"
            >
              {t.switchLocale}
            </Link>
          </div>
        </nav>
      </div>
    </aside>
  )
}
