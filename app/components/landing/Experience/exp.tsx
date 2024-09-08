import { ResumeCard } from "./resumecard"

const data = [
  {
    title: "Loblaws Inc.",
    subtitle: "Customer Service Representative",
    period: "August 2023 - Present",
    logoUrl: "/images/loblaws.png",
    altText: "Loblaws",
    description:
      "provided exceptional customer service, addressing inquiries, resolving issues, and ensuring a positive shopping experience for Loblaws customers. My responsibilities included handling transactions, assisting with product returns, and offering personalized assistance to meet customer needs.",
  },
]
const Experience = () => {
  return (
    <section>
      <h2 className="text-xl font-semibold tracking-tighter mb-3">
        Experience
      </h2>
      {data.map((item, index) => (
        <ResumeCard
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          period={item.period}
          logoUrl={item.logoUrl}
          altText={item.altText}
          description={item.description}
          isExpanded
        />
      ))}
    </section>
  )
}
export default Experience
