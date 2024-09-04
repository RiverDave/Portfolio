import { Button } from "app/components/shadcn/button"
import { Badge } from "app/components/shadcn/badge"
import Image from "next/image"

interface ProjectSectionProps {
  title?: string
  description?: string
  imageUrl?: string
  sourceCodeUrl?: string
  tools?: string[]
}

export default function Component({
  title,
  description,
  imageUrl,
  sourceCodeUrl,
  tools,
}: ProjectSectionProps) {
  // Default values
  const defaultTitle = "Project Title"
  const defaultDescription =
    "This project showcases innovative features and cutting-edge technology. It demonstrates proficiency in various aspects of development, including frontend design, backend integration, and overall system architecture."
  const defaultImageUrl = "/placeholder.svg?height=400&width=600"
  const defaultSourceCodeUrl = "https://github.com/yourusername/project"
  const defaultTools = ["React", "Node.js", "TypeScript"]

  return (
    <section className="py-12 border-b border-gray-200 last:border-b-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <Image
              src={imageUrl || defaultImageUrl}
              alt={`${title || defaultTitle} preview`}
              className="w-full h-auto rounded-lg shadow-md"
              width={600}
              height={600}
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">{title || defaultTitle}</h2>
            <p className="text-gray-600 mb-6">
              {description || defaultDescription}
            </p>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {(tools || defaultTools).map((tool, index) => (
                  <Badge key={index} variant="secondary">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
            <Button variant="outline" className="w-full sm:w-auto" asChild>
              <a
                href={sourceCodeUrl || defaultSourceCodeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  height={40}
                  width={40}
                  alt="Github Logo"
                  src={"/images/github.svg"}
                  className="w-4 h-4 mr-2"
                />
                View Source Code
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
