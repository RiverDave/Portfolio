import { Badge } from "../shadcn/badge"

export default function SkillsSection() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "C",
    "C++",
    "React",
    "Go",
    "REST API",
    "NodeJS",
    "NextJS",
    "LLVM",
    "Bash",
    "Assembly",
    "Agile",
    "Docker",
    "Google Cloud",
    "SQL",
  ]

  return (
    <div className="max-h-svh w-full flex-col py-4">
      <div className="mb-5">
        <h2 className="mb-4 mt-10 scroll-m-20 pb-2 text-center text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Skills
        </h2>
      </div>

      <div className="flex flex-row flex-wrap items-center justify-center">
        {skills.map((e: string) => (
          <div key={e} className="px-1">
            <Badge className="mt-3">{e}</Badge>
          </div>
        ))}
      </div>
    </div>
  )
}
