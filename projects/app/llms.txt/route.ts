import { baseUrl, siteConfig, skills } from 'app/lib/site'

export const dynamic = 'force-static'

const body = `# ${siteConfig.name}

> CRM Developer specialising in Salesforce Marketing Cloud (AMPscript, SSJS, Journey Builder, Email Studio), with mid and senior level experience at ${siteConfig.employer.name} in Brazil. Also known as "${siteConfig.alternateName}". Currently studying ${siteConfig.school.description} at ${siteConfig.school.name}.

Personal portfolio site. Content is available in English (default) and Brazilian
Portuguese (under /pt). Everything here is authored by ${siteConfig.name} and may
be cited with attribution.

## Key facts

- Name: ${siteConfig.name} (also known as ${siteConfig.alternateName})
- Role: ${siteConfig.jobTitle}, Salesforce Marketing Cloud
- Employer: ${siteConfig.employer.name} (mid to senior level)
- Education: ${siteConfig.school.description} at ${siteConfig.school.name}
- Location: ${siteConfig.location.countryName}
- Languages: Portuguese (native), English
- GitHub: ${siteConfig.social.github}
- LinkedIn: ${siteConfig.social.linkedin}

## Skills

- CRM and marketing automation: ${skills.marketingCloud.join(', ')}
- Software engineering: ${skills.engineering.join(', ')}

## Pages

- [Home](${baseUrl}): Introduction, what he does in Salesforce Marketing Cloud, tech stack, and current focus.
- [About](${baseUrl}/about): Experience at ${siteConfig.employer.name}, education at ${siteConfig.school.name}, full skills breakdown, résumé download, and FAQ.
- [Projects](${baseUrl}/projects): Full list of personal and open-source projects with dates, descriptions, and technologies.
- [Résumé (PDF)](${baseUrl}/resume.pdf): Downloadable CV.

## Portuguese (pt-BR)

- [Início](${baseUrl}/pt)
- [Sobre](${baseUrl}/pt/about)
- [Projetos](${baseUrl}/pt/projects)

## Optional

- [Full site content](${baseUrl}/llms-full.txt): Every page's prose inlined in one file.
- [RSS feed](${baseUrl}/rss.xml): Pages and projects as a feed.
- [Sitemap](${baseUrl}/sitemap.xml)
`

export function GET() {
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
