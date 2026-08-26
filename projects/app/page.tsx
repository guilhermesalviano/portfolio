import Footer from "./components/footer"
import { Navbar } from "./components/nav"

export default function Page() {
  return (
    <div className="flex-auto min-w-0 flex flex-col mx-4 mt-8 px-2 md:px-0 max-w-xl sm:mx-auto">
    <Navbar />
    <section>
      <div className="flex items-baseline flex-col-reverse md:flex-row justify-between">
        <div className="pr-4">
          <h1 className="mb-6  text-2xl font-semibold tracking-tighter">
            Hi! My name is Guilherme,
          </h1>
          <p className="mb-4">
            but you can call me Guibs. I'm a CRM Developer with Mid & Senior experience at Enext Consultoria, currently studying Digital Games at Fatec.
          </p>
        </div>
        <img src="https://avatars.githubusercontent.com/u/36766110?v=4&size=116" alt="Guilherme Salviano" className="w-[116px] h-[116px] rounded-full m-auto object-cover max-md:mb-4" />
      </div>
      <p className="mb-4">
        Let’s connect and create something amazing!
      </p>
      </section>
      <Footer />
    </div>
  )
}
