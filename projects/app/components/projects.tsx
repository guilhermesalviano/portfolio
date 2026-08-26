
import { formatDate } from "app/utils/formatDate"
import Link from "next/link"

type Project = {
  href: string
  label: string
  startDate: string
  endDate?: string
  utmTracked?: boolean
}

const UTM_BASE = "utm_source=portifolio&utm_medium=site&campaign=seemyprojects"

function withUtm(url: string): string {
  const date = new Date().toISOString().split("T")[0]
  return `${url}?${UTM_BASE}&utm_content=${date}`
}

const projects: Project[] = [
  {
    href: "https://guilhermesalviano.github.io/koris/",
    label: "Koris - An AI Assistant",
    startDate: "2026-05-15",
  },
  {
    href: "https://github.com/guilhermesalviano/casaos-coredash",
    label: "Personal Projects - Coredash",
    startDate: "2026-03-05",
  },
  {
    href: "https://github.com/guilhermesalviano/koaris-url-shortener",
    label: "URL Shortener",
    startDate: "2025-05-03",
    endDate: "2025-09-20",
  },
  {
    href: "https://koaris.com/",
    label: "Koaris Tools",
    startDate: "2025-02-24",
    endDate: "2025-03-03",
    utmTracked: true,
  },
  {
    href: "https://github.com/koaris",
    label: "Koaris Auth",
    startDate: "2024-11-05",
  },
  {
    href: "https://github.com/koaris",
    label: "Koaris",
    startDate: "2023-08-05",
    utmTracked: true,
  },
  {
    href: "https://koaris.github.io/bloom-ui/",
    label: "Koaris - Design System - Bloom-ui",
    startDate: "2023-12-04",
  },
  {
    href: "https://github.com/guilhermesalviano/smaug-preco-do-poder",
    label: "Visual Novel - Preço do poder",
    startDate: "2023-08-24",
    endDate: "2023-11-27",
  },
  {
    href: "https://github.com/guilhermesalviano/ekko-project",
    label: "Platform game - Ekko",
    startDate: "2022-04-01",
    endDate: "2022-07-26",
  },
  {
    href: "https://github.com/guilhermesalviano",
    label: "Graphyk",
    startDate: "2020-06-18",
    endDate: "2021-10-20",
  },
  {
    href: "https://github.com/guilhermesalviano/messenger-clone",
    label: "POC in React Native - Messenger Clone",
    startDate: "2020-08-14",
    endDate: "2020-08-20",
  },
  {
    href: "https://github.com/guilhermesalviano/nlw2-Proffy",
    label: "Rocketseat - Proffy",
    startDate: "2020-08-11",
    endDate: "2020-08-18",
  },
  {
    href: "https://github.com/guilhermesalviano/ecoleta",
    label: "Rocketseat - Ecoleta",
    startDate: "2020-06-02",
    endDate: "2020-06-09",
  },
  {
    href: "https://github.com/guilhermesalviano/to-be-hero",
    label: "Rocketseat - To be hero",
    startDate: "2020-03-27",
    endDate: "2020-05-03",
  },
]

function ProjectRow({ href, label, startDate, endDate, utmTracked }: Project) {
  const resolvedHref = utmTracked ? withUtm(href) : href
  const dateRange = endDate
    ? `${formatDate(startDate, false)} - ${formatDate(endDate, false)}`
    : `${formatDate(startDate, false)}${!endDate ? " - Present" : ""}`

  return (
    <Link target="_blank" href={resolvedHref}>
      <div className="w-full flex max-sm:flex-col flex-row space-x-0 sm:space-x-2">
        <p className="text-neutral-600 dark:text-neutral-400 w-[160px] min-w-20 tabular-nums">
          {dateRange}
        </p>
        <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
          {label}
        </p>
      </div>
    </Link>
  )
}

export function Projects() {
  return (
    <div className="flex flex-col gap-3">
      {projects.map((project, id) => (
        <ProjectRow key={id} {...project} />
      ))}
    </div>
  )
}