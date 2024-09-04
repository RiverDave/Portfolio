import Project from "./projects/ProjectCard"

const test = [0, 1, 2]

export function ProjectSection() {
  return (
    <div className="flex flex-col justify-center items-center py-5">
      {test.map((i) => (
        <Project key={i} />
      ))}
    </div>
  )
}
