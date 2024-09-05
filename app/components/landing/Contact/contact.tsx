import DotPattern from "app/components/magicui/dot-pattern"
import { Button } from "app/components/shadcn/button"
import { cn } from "lib/utils"

const ContactSection = () => {
  return (
    <section>
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden border-none bg-background ">
        <h2 className="z-10 mb-4 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
          Get in Touch
        </h2>
        <p className="z-10">Lets Build Together</p>

        <Button
          variant={"outline"}
          className="z-20 shadow-black shadow-md bg-black dark:bg-white mt-5 border-none"
        >
          <p className="text-white dark:text-black">Message me</p>
        </Button>

        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] z-0"
          )}
        />
      </div>
    </section>
  )
}

export default ContactSection
