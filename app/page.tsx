import About from "./components/landing/about"
import Education from "./components/landing/education"
import Experience from "./components/landing/Experience/exp"
import Header from "./components/landing/header"
import { ProjectSection } from "./components/landing/projects"
import SkillsSection from "./components/landing/skills"
import BlurFade from "./components/magicui/blur"

export default function Page() {
  const dspeed = 0.25
  return (
    <section>
      <BlurFade delay={dspeed} inView>
        <Header />
      </BlurFade>

      <BlurFade delay={dspeed * 2} inView>
        <About />
      </BlurFade>

      <BlurFade delay={dspeed * 2} inView>
        <Experience />
      </BlurFade>

      <BlurFade delay={dspeed * 2.3} inView>
        <Education />
      </BlurFade>

      <BlurFade delay={dspeed * 2.5} inView>
        <SkillsSection />
      </BlurFade>

      <BlurFade delay={dspeed * 2.8} inView>
        <ProjectSection />
      </BlurFade>
    </section>
  )
}
