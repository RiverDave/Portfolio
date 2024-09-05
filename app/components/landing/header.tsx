import React from "react"
import Image from "next/image"
import Icons from "./icons"

export default function Header() {
  return (
    <div className="mb-8 flex flex-col md:flex-row">
      <div className="flex flex-col items-start justify-center">
        <h1 className="text-start text-6xl font-semibold tracking-tighter">
          Hi, I&apos;m David Rivera 👋
        </h1>
        <p className="text-xl mt-2 text-start ">
          {`
            Seneca Polytechnic student with a passion for software development.
          `}
        </p>

        <Icons />
      </div>

      <div className="flex justify-center md:justify-end py-8">
        <div className="flex w-48 justify-center md:justify-end">
          {/* Sexy pic of mine lmao */}
          <Image
            className="h-36 w-36 rounded-full"
            width={400}
            height={400}
            src="/images/david.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
