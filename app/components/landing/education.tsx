import React from "react"
import { ResumeCard } from "./Experience/resumecard"

const data = [
  {
    title: "Seneca Polythecnic",
    period: "2023 - 2025",
    subtitle: "Computer Programming and Analysis",
    altText: "Seneca",
    logoUrl: "/images/seneca.png",
    href: "/images/seneca.png",
  },
]

export default function Education() {
  return (
    <section>
      <h2 className="text-xl font-semibold tracking-tighter mb-3">Education</h2>
      {data.map((item, index) => (
        <ResumeCard
          key={index}
          title={item.title}
          period={item.period}
          altText={item.altText}
          subtitle={item.subtitle}
          logoUrl={item.logoUrl}
          href={item.href}
        />
      ))}
    </section>
  )
}
