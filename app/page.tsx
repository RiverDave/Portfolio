import Header from "./components/landing/header"
import { ProjectSection } from "./components/landing/projects"
import SkillsSection from "./components/landing/skills"

export default function Page() {
  return (
    <section>
      <Header />

      <h2 className="text-2xl font-semibold tracking-tighter mb-3">About Me</h2>
      <p className="mb-3 text-sm dark:text-neutral-300">
        {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`}
      </p>

      <SkillsSection />

      <div className="my-8">
        <div className="flex-auto align-middle justify-center pb-10">
          <h2 className="text-center mb-4 mt-10 scroll-m-20  pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            My Projects
          </h2>

          <p className="mb-4 text-sm dark:text-neutral-300">
            {`If there's something I thrive for it's building unusual and unique projects. You won't find your generic TODO, Calculator applications. Overall these are my favorite projects that I've worked on.`}
          </p>

          <ProjectSection />
        </div>
      </div>
    </section>
  )
}
