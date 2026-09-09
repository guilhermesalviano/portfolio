import Footer from 'app/components/footer'
import { Navbar } from 'app/components/nav'
import { Projects } from 'app/components/projects'
import { JsonLd } from 'app/components/json-ld'
import { content } from 'app/lib/content'
import { projects } from 'app/lib/projects'
import { breadcrumbSchema, pageSchema, projectsItemListSchema } from 'app/lib/schema'
import { locales, pathFor, type Locale } from 'app/lib/site'

export function ProjectsPage({ locale }: { locale: Locale }) {
  const t = content[locale].projects
  const lang = locales[locale].htmlLang

  const schema = [
    pageSchema({
      type: 'CollectionPage',
      path: pathFor(locale, '/projects'),
      name: t.title,
      description: t.description,
      locale,
    }),
    projectsItemListSchema(projects, locale),
    breadcrumbSchema([
      { name: content[locale].breadcrumbHome, path: pathFor(locale, '') },
      { name: t.title, path: pathFor(locale, '/projects') },
    ]),
  ]

  return (
    <div
      lang={lang}
      className="flex-auto min-w-0 mx-4 mt-8 flex flex-col px-2 md:px-0 max-w-xl sm:mx-auto"
    >
      <JsonLd data={schema} />
      <Navbar locale={locale} />
      <section>
        <h1 className="font-semibold text-2xl mb-4 tracking-tighter">{t.h1}</h1>
        <p className="mb-8 text-neutral-700 dark:text-neutral-300">{t.intro}</p>
        <Projects locale={locale} />
      </section>
      <Footer />
    </div>
  )
}
