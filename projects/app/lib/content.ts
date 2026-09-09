import { skills, type Locale } from './site'

/**
 * Visible copy for both locales, kept side by side so the English and
 * Portuguese pages cannot drift apart.
 */
export const content = {
  en: {
    nav: { home: 'home', projects: 'projects', about: 'about' },
    switchLocale: 'português',
    home: {
      title: 'Salesforce Marketing Cloud & CRM Developer',
      description:
        'Guilherme Salviano — CRM Developer specialising in Salesforce Marketing Cloud: AMPscript, SSJS, Journey Builder and Email Studio. Based in Brazil.',
      h1: 'Guilherme Salviano — Salesforce Marketing Cloud & CRM Developer',
      intro:
        "Hi! You can call me Guibs. I'm a CRM Developer with mid and senior level experience at Enext Consultoria, currently studying Digital Games at Fatec.",
      whatIDoTitle: 'What I do',
      whatIDo:
        'I build and maintain marketing automation on Salesforce Marketing Cloud. Day to day that means writing AMPscript and server-side JavaScript for dynamic email content, designing customer journeys in Journey Builder, modelling data extensions and querying them with SQL, and automating recurring campaign work in Automation Studio.',
      whatIDoSecond:
        'Outside of CRM work I write TypeScript and Node.js, ship small React and Next.js apps, and deploy them with Docker and Terraform on AWS.',
      stackTitle: 'Tech I work with',
      stackCrmLabel: 'CRM & marketing automation',
      stackEngineeringLabel: 'Software engineering',
      currentlyTitle: 'Currently',
      currently:
        'Working as a CRM Developer at Enext Consultoria, studying Digital Games at Fatec, and building side projects — most recently Koris, an autonomous AI assistant framework.',
      cta: 'Let’s connect and create something amazing!',
      seeProjects: 'See my projects',
      readAbout: 'More about me',
    },
    about: {
      title: 'About',
      description:
        'Guilherme Salviano — Salesforce Marketing Cloud and CRM Developer at Enext Consultoria, studying Digital Games at Fatec. Experience, skills and résumé.',
      h1: 'About',
      intro:
        "I'm Guilherme, but you can call me Guibs. I'm a CRM Developer specialising in Salesforce Marketing Cloud, with mid and senior level experience at Enext Consultoria, currently studying Digital Games at Fatec.",
      experienceTitle: 'Experience',
      experience:
        'At Enext Consultoria I work as a CRM Developer on Salesforce Marketing Cloud, progressing from mid to senior level. The work covers AMPscript and SSJS development, Journey Builder orchestration, Email Studio and Content Builder templates, data extension modelling, SQL queries, and Automation Studio scheduling for client campaigns.',
      educationTitle: 'Education',
      education:
        'I study Digital Games at Fatec. Games are also where I started building things — a 2D horror platformer in Construct 2 and a branching visual novel in Ren’Py both came out of that interest.',
      skillsTitle: 'Skills',
      projectsTitle: 'Projects',
      projectsBlurb: 'Outside of client work I build personal tools and side projects — see the',
      projectsLink: 'projects page',
      projectsBlurbEnd: 'for the full list.',
      resumeTitle: 'Résumé',
      resumeLink: 'Download résumé (PDF)',
      faqTitle: 'Frequently asked questions',
    },
    projects: {
      title: 'Projects',
      description:
        'Projects by Guilherme Salviano — an AI assistant framework, a self-hosted dashboard, a URL shortener on AWS, an auth service, a React design system and games.',
      h1: 'My Projects',
      intro:
        'A running list of things I have built — side projects, tools, design systems and games. Most are open source on GitHub.',
    },
    notFound: {
      h1: '404',
      body: 'Are u lost?',
      back: 'Back to home',
    },
    breadcrumbHome: 'Home',
  },
  pt: {
    nav: { home: 'início', projects: 'projetos', about: 'sobre' },
    switchLocale: 'english',
    home: {
      title: 'Desenvolvedor Salesforce Marketing Cloud & CRM',
      description:
        'Guilherme Salviano — Desenvolvedor de CRM especializado em Salesforce Marketing Cloud: AMPscript, SSJS, Journey Builder e Email Studio. Brasil.',
      h1: 'Guilherme Salviano — Desenvolvedor Salesforce Marketing Cloud & CRM',
      intro:
        'Olá! Pode me chamar de Guibs. Sou Desenvolvedor de CRM com experiência pleno e sênior na Enext Consultoria e atualmente estudo Jogos Digitais na Fatec.',
      whatIDoTitle: 'O que eu faço',
      whatIDo:
        'Construo e mantenho automações de marketing no Salesforce Marketing Cloud. No dia a dia isso significa escrever AMPscript e JavaScript server-side para conteúdo dinâmico de e-mail, desenhar jornadas de cliente no Journey Builder, modelar data extensions e consultá-las com SQL, e automatizar rotinas de campanha no Automation Studio.',
      whatIDoSecond:
        'Fora do trabalho com CRM, escrevo TypeScript e Node.js, publico pequenas aplicações React e Next.js e faço deploy com Docker e Terraform na AWS.',
      stackTitle: 'Tecnologias que uso',
      stackCrmLabel: 'CRM e automação de marketing',
      stackEngineeringLabel: 'Engenharia de software',
      currentlyTitle: 'Atualmente',
      currently:
        'Trabalhando como Desenvolvedor de CRM na Enext Consultoria, estudando Jogos Digitais na Fatec e criando projetos pessoais — mais recentemente o Koris, um framework de assistente de IA autônomo.',
      cta: 'Vamos nos conectar e criar algo incrível!',
      seeProjects: 'Ver meus projetos',
      readAbout: 'Mais sobre mim',
    },
    about: {
      title: 'Sobre',
      description:
        'Guilherme Salviano — Desenvolvedor Salesforce Marketing Cloud e CRM na Enext Consultoria, estudante de Jogos Digitais na Fatec. Experiência e currículo.',
      h1: 'Sobre',
      intro:
        'Sou o Guilherme, mas pode me chamar de Guibs. Sou Desenvolvedor de CRM especializado em Salesforce Marketing Cloud, com experiência pleno e sênior na Enext Consultoria, e atualmente estudo Jogos Digitais na Fatec.',
      experienceTitle: 'Experiência',
      experience:
        'Na Enext Consultoria atuo como Desenvolvedor de CRM em Salesforce Marketing Cloud, tendo evoluído de pleno para sênior. O trabalho envolve desenvolvimento em AMPscript e SSJS, orquestração no Journey Builder, templates no Email Studio e Content Builder, modelagem de data extensions, consultas SQL e agendamentos no Automation Studio para campanhas de clientes.',
      educationTitle: 'Formação',
      education:
        'Estudo Jogos Digitais na Fatec. Foi também com jogos que comecei a construir coisas — um platformer 2D de terror no Construct 2 e uma visual novel de narrativa ramificada em Ren’Py nasceram desse interesse.',
      skillsTitle: 'Habilidades',
      projectsTitle: 'Projetos',
      projectsBlurb: 'Fora do trabalho com clientes, crio ferramentas e projetos pessoais — veja a',
      projectsLink: 'página de projetos',
      projectsBlurbEnd: 'para a lista completa.',
      resumeTitle: 'Currículo',
      resumeLink: 'Baixar currículo (PDF)',
      faqTitle: 'Perguntas frequentes',
    },
    projects: {
      title: 'Projetos',
      description:
        'Projetos de Guilherme Salviano — framework de assistente de IA, painel self-hosted, encurtador de URL na AWS, serviço de autenticação e design system.',
      h1: 'Meus Projetos',
      intro:
        'Uma lista contínua do que eu construí — projetos pessoais, ferramentas, design systems e jogos. A maioria é open source no GitHub.',
    },
    notFound: {
      h1: '404',
      body: 'Are u lost?',
      back: 'Back to home',
    },
    breadcrumbHome: 'Início',
  },
} as const

/** Question/answer pairs rendered on the about page and fed to FAQPage schema. */
export const faq: Record<Locale, { question: string; answer: string }[]> = {
  en: [
    {
      question: 'Who is Guilherme Salviano?',
      answer:
        'Guilherme Salviano, also known as Guibs, is a Brazilian CRM Developer specialising in Salesforce Marketing Cloud. He has mid and senior level experience at Enext Consultoria and is currently studying Digital Games at Fatec.',
    },
    {
      question: 'What does he do as a CRM Developer?',
      answer:
        'He builds marketing automation on Salesforce Marketing Cloud: AMPscript and server-side JavaScript for dynamic email content, customer journeys in Journey Builder, data extension modelling and SQL, Email Studio and Content Builder templates, and scheduled automations in Automation Studio.',
    },
    {
      question: 'Which technologies does he work with?',
      answer: `Salesforce Marketing Cloud (${skills.marketingCloud.slice(1).join(', ')}) on the CRM side, and ${skills.engineering.join(', ')} for software engineering.`,
    },
    {
      question: 'Is he available for freelance or contract work?',
      answer:
        'The best way to reach Guilherme is through LinkedIn or GitHub, both linked in the footer of every page on this site.',
    },
    {
      question: 'Where can I see his projects and résumé?',
      answer:
        'His projects are listed on the projects page of this site and published on GitHub, and his résumé is downloadable as a PDF from the about page.',
    },
  ],
  pt: [
    {
      question: 'Quem é Guilherme Salviano?',
      answer:
        'Guilherme Salviano, também conhecido como Guibs, é um Desenvolvedor de CRM brasileiro especializado em Salesforce Marketing Cloud. Tem experiência pleno e sênior na Enext Consultoria e atualmente estuda Jogos Digitais na Fatec.',
    },
    {
      question: 'O que ele faz como Desenvolvedor de CRM?',
      answer:
        'Ele constrói automações de marketing no Salesforce Marketing Cloud: AMPscript e JavaScript server-side para conteúdo dinâmico de e-mail, jornadas de cliente no Journey Builder, modelagem de data extensions e SQL, templates no Email Studio e Content Builder, e automações agendadas no Automation Studio.',
    },
    {
      question: 'Com quais tecnologias ele trabalha?',
      answer: `Salesforce Marketing Cloud (${skills.marketingCloud.slice(1).join(', ')}) na parte de CRM, e ${skills.engineering.join(', ')} em engenharia de software.`,
    },
    {
      question: 'Ele está disponível para freelance ou contrato?',
      answer:
        'A melhor forma de falar com o Guilherme é pelo LinkedIn ou GitHub, ambos no rodapé de todas as páginas deste site.',
    },
    {
      question: 'Onde posso ver os projetos e o currículo dele?',
      answer:
        'Os projetos estão listados na página de projetos deste site e publicados no GitHub, e o currículo pode ser baixado em PDF na página sobre.',
    },
  ],
}
