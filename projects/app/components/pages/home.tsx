import Link from 'next/link'
import Footer from 'app/components/footer'
import { Navbar } from 'app/components/nav'
import { JsonLd } from 'app/components/json-ld'
import { content } from 'app/lib/content'
import { breadcrumbSchema, pageSchema } from 'app/lib/schema'
import { certifications, locales, pathFor, siteConfig, skills, type Locale } from 'app/lib/site'

function Tags({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5 mb-4 list-none p-0">
      {items.map((item) => (
        <li
          key={item}
          className="text-xs px-2 py-0.5 rounded-full border border-neutral-300 text-neutral-600 dark:border-neutral-700 dark:text-neutral-400"
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

export function HomePage({ locale }: { locale: Locale }) {
  const t = content[locale].home
  const lang = locales[locale].htmlLang

  const schema = [
    pageSchema({
      type: 'ProfilePage',
      path: pathFor(locale, ''),
      name: `${siteConfig.name} — ${t.title}`,
      description: t.description,
      locale,
    }),
    breadcrumbSchema([{ name: content[locale].breadcrumbHome, path: pathFor(locale, '') }]),
  ]

  return (
    <div
      lang={lang}
      className="flex-auto min-w-0 flex flex-col mx-4 mt-8 px-2 md:px-0 max-w-xl sm:mx-auto"
    >
      <JsonLd data={schema} />
      <Navbar locale={locale} />
      <section>
        <div className="flex items-baseline flex-col-reverse md:flex-row justify-between">
          <div className="pr-4">
            <h1 className="mb-6 text-2xl font-semibold tracking-tighter text-balance">
              {t.h1}
            </h1>
            <p className="mb-4">{t.intro}</p>
          </div>
          <img
            src={`${siteConfig.image}&size=116`}
            alt={`${siteConfig.name}, ${t.title}`}
            width={116}
            height={116}
            fetchPriority="high"
            decoding="async"
            className="w-[116px] h-[116px] rounded-full m-auto object-cover max-md:mb-4"
          />
        </div>

        <h2 className="mb-4 mt-8 text-xl font-semibold tracking-tighter">
          {t.whatIDoTitle}
        </h2>
        <p className="mb-4">{t.whatIDo}</p>
        <p className="mb-4">{t.whatIDoSecond}</p>

        <h2 className="mb-4 mt-8 text-xl font-semibold tracking-tighter">
          {t.stackTitle}
        </h2>
        <h3 className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
          {t.stackAiLabel}
        </h3>
        <Tags items={skills.ai} />
        <h3 className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
          {t.stackCrmLabel}
        </h3>
        <Tags items={skills.marketingCloud} />
        <h3 className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
          {t.stackEngineeringLabel}
        </h3>
        <Tags items={skills.engineering} />

        <h2 className="mb-4 mt-8 text-xl font-semibold tracking-tighter">
          {t.certificationsTitle}
        </h2>
        <ul className="mb-4 list-disc pl-6">
          {certifications.map((certification) => (
            <li key={certification.name} className="mb-1">
              {certification.name}
            </li>
          ))}
        </ul>

        <h2 className="mb-4 mt-8 text-xl font-semibold tracking-tighter">
          {t.currentlyTitle}
        </h2>
        <p className="mb-4">{t.currently}</p>

        <p className="mb-4 mt-8">{t.cta}</p>
        <p className="flex flex-col sm:flex-row gap-2 sm:gap-4">
          <Link
            className="underline hover:text-neutral-800 dark:hover:text-neutral-200"
            href={pathFor(locale, '/projects')}
          >
            {t.seeProjects}
          </Link>
          <Link
            className="underline hover:text-neutral-800 dark:hover:text-neutral-200"
            href={pathFor(locale, '/about')}
          >
            {t.readAbout}
          </Link>
        </p>
      </section>
      <Footer />
    </div>
  )
}
