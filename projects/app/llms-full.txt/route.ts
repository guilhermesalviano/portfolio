import { content, faq } from 'app/lib/content'
import { projects } from 'app/lib/projects'
import { baseUrl, siteConfig, skills } from 'app/lib/site'

export const dynamic = 'force-static'

const home = content.en.home
const about = content.en.about
const projectsCopy = content.en.projects

const projectLines = projects
  .map((project) => {
    const range = project.endDate
      ? `${project.startDate} to ${project.endDate}`
      : `${project.startDate} to present`
    const parts = [`### ${project.label}`, `- Period: ${range}`]
    if (project.href) parts.push(`- URL: ${project.href}`)
    if (project.tags?.length) parts.push(`- Technologies: ${project.tags.join(', ')}`)
    if (project.description) parts.push('', project.description)
    return parts.join('\n')
  })
  .join('\n\n')

const faqLines = faq.en
  .map(({ question, answer }) => `### ${question}\n\n${answer}`)
  .join('\n\n')

const body = `# ${siteConfig.name} — full site content

> ${home.description}

Source: ${baseUrl}
Author: ${siteConfig.name} (${siteConfig.alternateName})
Languages: English (this file), Brazilian Portuguese at ${baseUrl}/pt

## Home — ${baseUrl}

${home.h1}

${home.intro}

### ${home.whatIDoTitle}

${home.whatIDo}

${home.whatIDoSecond}

### ${home.stackTitle}

- ${home.stackCrmLabel}: ${skills.marketingCloud.join(', ')}
- ${home.stackEngineeringLabel}: ${skills.engineering.join(', ')}

### ${home.currentlyTitle}

${home.currently}

## About — ${baseUrl}/about

${about.intro}

### ${about.experienceTitle}

${about.experience}

### ${about.educationTitle}

${about.education}

## ${about.faqTitle}

${faqLines}

## Projects — ${baseUrl}/projects

${projectsCopy.intro}

${projectLines}

## Contact

- GitHub: ${siteConfig.social.github}
- LinkedIn: ${siteConfig.social.linkedin}
- Résumé: ${baseUrl}/resume.pdf
`

export function GET() {
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
