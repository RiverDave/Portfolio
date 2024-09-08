import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import DotPattern from "@/app/components/magicui/dot-pattern"
import { Button } from "@/app/components/shadcn/button"
import { cn } from "@/lib/utils"

const ContactSection = () => {
  return (
    <section className="relative">
      <div className="flex h-[500px] w-full flex-col items-center justify-center overflow-hidden border-none bg-background">
        <h2 className="z-10 mb-4 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
          Get in Touch
        </h2>
        <p className="z-10">
          Let&apos;s Build{" "}
          <a
            href="mailto:davidriverg@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Together
          </a>
        </p>
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] absolute inset-0 z-0"
          )}
        />
      </div>
    </section>
  )
}

export default ContactSection
