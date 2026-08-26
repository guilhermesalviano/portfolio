
import { formatDate } from "app/utils/formatDate"
import Link from "next/link"

type Project = {
  href?: string
  label: string
  startDate: string
  endDate?: string
  description?: string
  tags?: string[]
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
    description:
      "Autonomous AI agent framework spanning Telegram, WhatsApp, a terminal UI, and a web dashboard, with persistent SQLite memory and cron-driven background tasks.",
    tags: ["TypeScript", "Node.js", "React", "Vite", "SQLite", "Vitest"],
  },
  {
    href: "https://github.com/guilhermesalviano/casaos-coredash",
    label: "Personal Projects - Coredash",
    startDate: "2026-03-05",
    description:
      "Self-hosted personal dashboard for automation, system monitoring, and habit tracking, built for low-cost home-lab hardware.",
    tags: ["Node.js", "Docker", "Docker Compose"],
  },
  {
    href: "https://github.com/guilhermesalviano/koaris-url-shortener",
    label: "URL Shortener",
    startDate: "2025-05-03",
    endDate: "2025-09-20",
    description:
      "Multi-service URL shortener with auth, click analytics, and blog integration; deployed on Vercel with AWS DynamoDB provisioned via Terraform.",
    tags: ["Next.js", "TypeScript", "DynamoDB", "Terraform", "AWS"],
  },
  {
    href: "https://koaris.com/",
    label: "Koaris Tools",
    startDate: "2025-02-24",
    endDate: "2025-03-03",
    description:
      "Suite of ten free browser-based marketing/dev utilities — UTM builder, QR code generator, Base64/URL/HTML converters, favicon generator, image compressor, Pomodoro timer.",
    tags: ["Web tools"],
  },
  {
    href: "https://github.com/guilhermesalviano/koaris-auth",
    label: "Koaris Auth",
    startDate: "2024-11-05",
    description:
      "Authentication service built with clean architecture — role-based access control and token management, deployable via Docker, Serverless, or ECS.",
    tags: ["TypeScript", "Node.js", "Prisma", "Vite", "Vitest", "Docker", "Terraform"],
  },
  {
    href: "https://github.com/koaris",
    label: "Koaris",
    startDate: "2023-08-05",
    description: "Umbrella organization for the Koaris ecosystem (Auth, Tools, Bloom-ui).",
  },
  {
    href: "https://koaris.github.io/bloom-ui/",
    label: "Koaris - Design System - Bloom-ui",
    startDate: "2023-12-04",
    description:
      "Public design system unifying interfaces and simplifying new React project setup across the Koaris ecosystem.",
    tags: ["TypeScript", "React"],
  },
  {
    href: "https://github.com/guilhermesalviano/smaug-preco-do-poder",
    label: "Visual Novel - Preço do poder",
    startDate: "2023-08-24",
    endDate: "2023-11-27",
    description:
      "Branching-narrative visual novel with multiple story paths, built with a small team (writing, art, sound).",
    tags: ["Python", "Ren'Py"],
  },
  {
    href: "https://github.com/guilhermesalviano/ekko-project",
    label: "Platform game - Ekko",
    startDate: "2022-04-01",
    endDate: "2022-07-26",
    description:
      "2D pixel-art horror/suspense game demo inspired by Dead Space, built solo.",
    tags: ["Construct 2", "Aseprite"],
  },
  {
    label: "Graphyk",
    startDate: "2020-06-18",
    endDate: "2021-10-20",
  },
  {
    href: "https://github.com/guilhermesalviano/messenger-clone",
    label: "POC in React Native - Messenger Clone",
    startDate: "2020-08-14",
    endDate: "2020-08-20",
    description:
      "React Native + Socket.IO proof-of-concept for real-time chat, built while learning chat-library integration.",
    tags: ["React Native", "Socket.IO"],
  },
  {
    href: "https://github.com/guilhermesalviano/nlw2-Proffy",
    label: "Rocketseat - Proffy",
    startDate: "2020-08-11",
    endDate: "2020-08-18",
    description:
      "Online platform connecting students with teachers, built during Rocketseat's Next Level Week bootcamp.",
    tags: ["Node.js", "React", "React Native", "Expo"],
  },
  {
    href: "https://github.com/guilhermesalviano/ecoleta",
    label: "Rocketseat - Ecoleta",
    startDate: "2020-06-02",
    endDate: "2020-06-09",
    description:
      "Full-stack recycling collection-point finder with maps, file uploads, and validation.",
    tags: ["Node.js", "Express", "React", "React Native", "TypeScript", "Knex"],
  },
  {
    href: "https://github.com/guilhermesalviano/to-be-hero",
    label: "Rocketseat - To be hero",
    startDate: "2020-03-27",
    endDate: "2020-05-03",
    description:
      "Full-stack app (API + web + mobile) built during Rocketseat's Semana OmniStack.",
    tags: ["Node.js", "React", "React Native"],
  },
]

function ProjectRow({ href, label, startDate, endDate, description, tags }: Project) {
  const resolvedHref = href ? withUtm(href) : undefined
  const dateRange = endDate
    ? `${formatDate(startDate, false)} - ${formatDate(endDate, false)}`
    : `${formatDate(startDate, false)}${!endDate ? " - Present" : ""}`

  const content = (
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
    return content
  }

  return (
    <Link target="_blank" href={resolvedHref}>
      {content}
    </Link>
  )
}

export function Projects() {
  return (
    <div className="flex flex-col gap-5">
      {projects.map((project, id) => (
        <ProjectRow key={id} {...project} />
      ))}
    </div>
  )
}