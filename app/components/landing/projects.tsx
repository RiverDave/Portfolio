import Project from "./projects/ProjectCard"

const test = [0, 1, 2]

export function ProjectSection() {
  return (
    <section>
      <div className="flex-auto align-middle justify-center mt-8">
        <h2 className="text-center mb-4 mt-10 scroll-m-20  pb-2 text-4xl font-semibold tracking-tight transition-colors first:mt-0">
          My Projects
        </h2>

        <p className="mb-4 text-xl  dark:text-neutral-300 text-center leading-relaxed ">
          {`If there's something I thrive for it's building unusual and unique projects. You won't find your generic TODO Calculator Tutorial in here.`}
        </p>
      </div>

      <div className="flex flex-col justify-center items-center py-5">
        {test.map((i) => (
          <Project key={i} />
        ))}
      </div>
    </section>
  )
}
