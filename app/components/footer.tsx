import React from "react"
import { it } from "node:test"
import { cn } from "@/lib/utils"

interface MediaLinkProps {
  title: string
  link: string
  className?: string
}

const data = [
  {
    title: "Github",
    link: "https://github.com/Riverdave",
  },
  {
    title: "Linkedin",
    link: "https://linkedin.com/in/david-riverag",
  },

  // {
  //   title: "CV",
  //   link: "https://drive.google.com/file/d/1GJH1eJj9VH1Q3d8J3zK0wXQV8zH6R9z4/view?usp=sharing",
  // },
]

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function MediaLink({ link, title, className }: MediaLinkProps) {
  return (
    <a
      className={cn(
        "flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100",
        className
      )}
      target="_blank"
      rel="noopener noreferrer"
      href={link}
    >
      <ArrowIcon />
      <p className="ml-2 h-7">{title}</p>
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        {data.map((item) => (
          <li key={item.link}>
            <MediaLink link={item.link} title={item.title} />
          </li>
        ))}
      </ul>
      <p className="mt-8 text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()} David Rivera
      </p>
    </footer>
  )
}
