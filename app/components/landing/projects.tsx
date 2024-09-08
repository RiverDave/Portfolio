import Project from "./projects/ProjectCard"

const test = [
  {
    title: "Interfuse Compiler",
    description:
      "Designed and implemented Interfuse, a modern programming language with LLVM. inspired by C and contemporary language features. This personal project demonstrates proficiency in compiler design, language theory, and strong problem solving.",
    imageUrl: "/images/llvm.png",
    sourceCodeUrl: "https://github.com/RiverDave/InterfuseLang",
    tools: ["C++", "LLVM", "Bison", "Emscripten", "WebAssembly"],
  },

  {
    title: "Containerized compiler",
    description:
      "Created an online compiler for my own programming language using Docker and Google Cloud. This project demonstrates proficiency in containerization, web development, and cloud computing.",
    imageUrl: "/images/editor.png",
    sourceCodeUrl: "https://github.com/RiverDave/Interfuse-website",
    webUrl: "https://interfuselang.com",

    tools: [
      "Docker",
      "Google Cloud",
      "React",
      "Node.js",
      "Next.js",
      "TypeScript",
    ],
  },

  {
    title: "Image-to-Marketing Suggestions API",

    description:
      "Developed an API using machine learning and image recognition to analyze images and generate marketing suggestions. Outputs include ads, captions, hashtags, SEO keywords, and audience insights.",
    imageUrl: "/images/ad.png",
    sourceCodeUrl: "https://github.com/RiverDave/ADVision-api",
    tools: ["Go", "Docker", "Google Cloud", "React", "Node.js", "TypeScript"],
  },
]

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
        {test.map((item, idx) => (
          <Project
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            sourceCodeUrl={item.sourceCodeUrl}
            tools={item.tools}
            key={idx}
            webUrl={item.webUrl}
          />
        ))}
      </div>
    </section>
  )
}
