"use client"

import { Button } from "@/app/components/shadcn/button"
import { Badge } from "@/app/components/shadcn/badge"
import Image from "next/image"
import { GithubIcon } from "@/app/components/svgs"
import { useTheme } from "next-themes"
import Link from "next/link"
import { AppWindow } from "lucide-react"

interface ProjectSectionProps {
  title?: string
  description?: string
  imageUrl?: string
  sourceCodeUrl?: string
  webUrl?: string
  tools?: string[]
}

export default function Project({
  title,
  description,
  imageUrl,
  sourceCodeUrl,
  webUrl,
  tools,
}: ProjectSectionProps) {
  // Default values

  const { theme } = useTheme()

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
              className="w-auto h-64 rounded-lg shadow-md object-cover"
              width={600}
              height={400}
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">{title || defaultTitle}</h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-6">
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

            <div className="flex flex-row space-x-4 justify-center">
              <Button
                variant="outline"
                className="w-1/2 bg-black dark:bg-white"
                asChild
              >
                <Link
                  href={sourceCodeUrl || defaultSourceCodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white dark:text-black"
                >
                  {theme === "light" ? (
                    <GithubIcon className="text-xs mr-2 text-white" />
                  ) : (
                    <GithubIcon className="text-xs mr-2 text-black" />
                  )}
                  Code
                </Link>
              </Button>

              {webUrl && (
                <Button
                  variant="outline"
                  className="w-1/2 bg-black dark:bg-white"
                  asChild
                >
                  <Link
                    href={webUrl}
                    target="_blank"
                    className="text-white dark:text-black"
                    rel="noopener noreferrer"
                  >
                    {theme === "light" ? (
                      <AppWindow className="text-xs mr-2 text-white" />
                    ) : (
                      <AppWindow className="text-xs mr-2 text-black" />
                    )}
                    Website
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
