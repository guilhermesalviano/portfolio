import Link from "next/link"
import Footer from "app/components/footer"
import { Navbar } from "app/components/nav"
import { content } from "app/lib/content"

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

export default function NotFound() {
  const t = content.en.notFound

  return (
    <div className="flex-auto min-w-0 flex flex-col mx-4 mt-8 px-2 md:px-0 max-w-xl sm:mx-auto">
      <Navbar />
      <section>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">{t.h1}</h1>
        <p className="mb-4">{t.body}</p>

        <Link
          href={"/"}
          className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex items-center gap-2 py-1"
        >
          <ArrowIcon />
          {t.back}
        </Link>
      </section>
      <Footer />
    </div>
  )
}
