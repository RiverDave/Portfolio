"use client"

import { GithubIcon } from "@/app/components/svgs"
import { LinkedinIcon } from "@/app/components/svgs"
import { useTheme } from "next-themes"
import Link from "next/link"

const Icons = () => {
  const { theme } = useTheme()
  const githubUrl = "https://github.com/Riverdave"
  const linkedinUrl = "https://linkedin.com/in/david-riverag"
  return (
    <section>
      <div className="flex flex-row pt-3">
        {theme === "dark" ? (
          <span className="flex space-x-3">
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <GithubIcon className="text-white" />
            </Link>

            <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="text-white" />
            </Link>
          </span>
        ) : (
          <span className="flex space-x-2">
            <GithubIcon className="text-black" />
            <LinkedinIcon className="text-black" />
          </span>
        )}
      </div>
    </section>
  )
}
export default Icons
