import { formatDate } from "app/utils/formatDate"
import { content } from "app/lib/content"
import { projects, type Project } from "app/lib/projects"
import { locales, type Locale } from "app/lib/site"
import Link from "next/link"

const UTM_BASE = "utm_source=portifolio&utm_medium=site&campaign=seemyprojects"

function withUtm(url: string): string {
  const date = new Date().toISOString().split("T")[0]
  return `${url}?${UTM_BASE}&utm_content=${date}`
}

function ProjectRow({
  project,
  locale,
}: {
  project: Project
  locale: Locale
}) {
  const { href, label, startDate, endDate, tags } = project
  const description =
    locale === "pt" ? project.descriptionPt ?? project.description : project.description
  const intl = locales[locale].intl
  const resolvedHref = href ? withUtm(href) : undefined
  const present = content[locale].projects.present
  const dateRange = endDate
    ? `${formatDate(startDate, false, intl)} - ${formatDate(endDate, false, intl)}`
    : `${formatDate(startDate, false, intl)} - ${present}`

  const body = (
    <div className="w-full flex flex-col gap-1">
      <div className="w-full flex max-sm:flex-col flex-row space-x-0 sm:space-x-2">
        <p className="text-neutral-600 dark:text-neutral-400 w-[160px] min-w-20 tabular-nums">
          {dateRange}
        </p>
        <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
          {label}
        </p>
      </div>
      {description && (
        <p className="text-sm text-neutral-600 dark:text-neutral-400 sm:ml-[168px]">
          {description}
        </p>
      )}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 sm:ml-[168px]">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full border border-neutral-300 text-neutral-600 dark:border-neutral-700 dark:text-neutral-400"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )

  if (!resolvedHref) {
    return body
  }

  return (
    <Link target="_blank" rel="noopener noreferrer" href={resolvedHref}>
      {body}
    </Link>
  )
}

function ProjectList({ list, locale }: { list: Project[]; locale: Locale }) {
  return (
    <div className="flex flex-col gap-5">
      {list.map((project) => (
        <ProjectRow key={project.label} project={project} locale={locale} />
      ))}
    </div>
  )
}

export function Projects({ locale = "en" }: { locale?: Locale }) {
  const featured = projects.filter((project) => project.featured)
  const earlier = projects.filter((project) => !project.featured)

  return (
    <>
      <ProjectList list={featured} locale={locale} />
      <h2 className="mb-5 mt-10 text-xl font-semibold tracking-tighter">
        {content[locale].projects.earlierTitle}
      </h2>
      <ProjectList list={earlier} locale={locale} />
    </>
  )
}
