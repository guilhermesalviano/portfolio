// import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <div className="flex items-baseline flex-col-reverse md:flex-row justify-between">
        <div>
          <h1 className="my-6  text-2xl font-semibold tracking-tighter">
            Hi! My name is Guilherme,
          </h1>
          <p className="mb-4">
            {`but you can call me Guibs. I graduated in Systems Development from ETEC and am currently studying Digital Games at Fatec. I’m passionate about technology, innovation, and solutions that positively impact people’s lives.`}
          </p>
        </div>
        <img src="https://avatars.githubusercontent.com/u/36766110?v=4&size=116" className="w-[116px] h-[116px] rounded-full m-auto object-cover" />
      </div>
      <p className="mb-4">
        {`My career began as a CRM Apprentice, where I learned and grew. Since then, I’ve gained valuable experience as a CRM Developer (Mid and Senior levels) at Enext Consultoria, honing both technical and strategic skills along the way.`}
      </p>
      <p className="mb-4">
        {`Let’s connect and create something amazing!`}
      </p>
    </section>
  )
}
