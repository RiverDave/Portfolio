const About = () => {
  return (
    <section>
      <h2 className="text-xl font-semibold tracking-tighter">About Me</h2>
      <p className="my-4 text-base dark:text-neutral-300 leading-relaxed">
        {`I'm an aspiring `}
        <span className="underline text text-black dark:text-white">
          software developer
        </span>
        {`, currently working towards a degree in `}
        <span className="underline text-black dark:text-white">
          Computer Programming & Analysis
        </span>
        {` at `}
        <span className="underline text-black dark:text-white">
          Seneca Polytechnic
        </span>
        {`. My passion lies in `}
        <span className="underline text-black dark:text-white">
          software development
        </span>
        {`, with a strong focus on `}
        <span className="underline text-black dark:text-white">
          full stack applications
        </span>
        {` and `}
        <span className="underline text-black dark:text-white">
          low-level programming
        </span>
        {`. Over the course of my studies and projects, I've gained experience with a wide range of `}
        <span className="underline text-black dark:text-white">
          programming languages
        </span>
        {` and `}
        <span className="underline text-black dark:text-white">
          technologies
        </span>
        {`, from `}
        <span className="underline text-black dark:text-white">
          compiler development
        </span>
        {` to `}
        <span className="underline text-black dark:text-white">
          web-based applications
        </span>
        {`.`}
      </p>
    </section>
  )
}

export default About
