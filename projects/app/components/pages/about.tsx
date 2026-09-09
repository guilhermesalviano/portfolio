import Link from 'next/link'
import Footer from 'app/components/footer'
import { Navbar } from 'app/components/nav'
import { JsonLd } from 'app/components/json-ld'
import { content, faq } from 'app/lib/content'
import { breadcrumbSchema, faqSchema, pageSchema } from 'app/lib/schema'
import { locales, pathFor, skills, type Locale } from 'app/lib/site'

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function AboutPage({ locale }: { locale: Locale }) {
  const t = content[locale].about
  const questions = faq[locale]
  const lang = locales[locale].htmlLang

  const schema = [
    pageSchema({
      type: 'AboutPage',
      path: pathFor(locale, '/about'),
      name: t.title,
      description: t.description,
      locale,
    }),
    faqSchema(questions.map((q) => ({ question: q.question, answer: q.answer }))),
    breadcrumbSchema([
      { name: content[locale].breadcrumbHome, path: pathFor(locale, '') },
      { name: t.title, path: pathFor(locale, '/about') },
    ]),
  ]

  return (
    <div
      lang={lang}
      className="flex-auto min-w-0 flex flex-col mx-4 mt-8 px-2 md:px-0 max-w-xl sm:mx-auto"
    >
      <JsonLd data={schema} />
      <Navbar locale={locale} />
      <section>
        <h1 className="mb-6 text-2xl font-semibold tracking-tighter">{t.h1}</h1>
        <p className="mb-4">{t.intro}</p>

        <h2 className="mb-4 mt-8 text-xl font-semibold tracking-tighter">
          {t.experienceTitle}
        </h2>
        <p className="mb-4">{t.experience}</p>

        <h2 className="mb-4 mt-8 text-xl font-semibold tracking-tighter">
          {t.educationTitle}
        </h2>
        <p className="mb-4">{t.education}</p>

        <h2 className="mb-4 mt-8 text-xl font-semibold tracking-tighter">
          {t.skillsTitle}
        </h2>
        <ul className="mb-4 list-disc pl-6">
          <li className="mb-1">
            <strong className="font-medium">{content[locale].home.stackCrmLabel}:</strong>{' '}
            {skills.marketingCloud.join(', ')}
          </li>
          <li>
            <strong className="font-medium">
              {content[locale].home.stackEngineeringLabel}:
            </strong>{' '}
            {skills.engineering.join(', ')}
          </li>
        </ul>

        <h2 className="mb-4 mt-8 text-xl font-semibold tracking-tighter">
          {t.projectsTitle}
        </h2>
        <p className="mb-4">
          {t.projectsBlurb}{' '}
          <Link
            className="underline hover:text-neutral-800 dark:hover:text-neutral-200"
            href={pathFor(locale, '/projects')}
          >
            {t.projectsLink}
          </Link>{' '}
          {t.projectsBlurbEnd}
        </p>

        <h2 className="mb-4 mt-8 text-xl font-semibold tracking-tighter">
          {t.resumeTitle}
        </h2>
        <p className="mb-4">
          <a
            className="flex items-center w-fit transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            href="/resume.pdf"
            download
          >
            <ArrowIcon />
            <span className="ml-2">{t.resumeLink}</span>
          </a>
        </p>

        <h2 className="mb-4 mt-8 text-xl font-semibold tracking-tighter">
          {t.faqTitle}
        </h2>
        <dl className="mb-4">
          {questions.map(({ question, answer }) => (
            <div key={question} className="mb-4">
              <dt className="font-medium mb-1">{question}</dt>
              <dd className="text-neutral-700 dark:text-neutral-300 m-0">{answer}</dd>
            </div>
          ))}
        </dl>
      </section>
      <Footer />
    </div>
  )
}
