import Footer from "../components/footer"
import { Navbar } from "../components/nav"

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: "About",
}

export default function AboutPage() {
  return (
    <div className="flex-auto min-w-0 flex flex-col mx-4 mt-8 px-2 md:px-0 max-w-xl sm:mx-auto">
      <Navbar />
      <section>
        <h1 className="mb-6 text-2xl font-semibold tracking-tighter">
          About
        </h1>
        <p className="mb-4">
          I'm Guilherme, but you can call me Guibs. I'm a CRM Developer with
          Mid & Senior experience at Enext Consultoria, currently studying
          Digital Games at Fatec. Outside of client work, I build personal
          tools and side projects — see the{" "}
          <a
            className="underline hover:text-neutral-800 dark:hover:text-neutral-200"
            href="/projects"
          >
            projects page
          </a>{" "}
          for the full list.
        </p>

        <h2 className="mb-4 mt-8 text-xl font-semibold tracking-tighter">
          Resume
        </h2>
        <p className="mb-4">
          <a
            className="flex items-center w-fit transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            href="/resume.pdf"
            download
          >
            <ArrowIcon />
            <span className="ml-2">Download résumé (PDF)</span>
          </a>
        </p>
      </section>
      <Footer />
    </div>
  )
}
