import { MediaLink } from "../footer"

const Icons = () => {
  const linkedinUrl = process.env.LINKEDIN_URL
  const githubUrl = process.env.GH_URL
  const cvUrl = process.env.CV_URL

  const data = [
    {
      title: "Github",
      link: githubUrl,
    },
    {
      title: "Linkedin",
      link: linkedinUrl,
    },

    {
      title: "CV",
      link: cvUrl,
    },
  ]
  if (!linkedinUrl || !githubUrl || !cvUrl) {
    return null
  }
  return (
    <section>
      <div className="flex flex-row pt-3 space-x-5 text-neutral-700 dark:text-neutral-300">
        {data.map(
          (item, index) =>
            item &&
            item.link && (
              <MediaLink key={index} title={item.title} link={item.link} />
            )
        )}
      </div>
    </section>
  )
}
export default Icons
