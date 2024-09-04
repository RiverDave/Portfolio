import React from "react"
import Image from "next/image"

export default function Header() {
  return (
    <div className="mb-8 flex flex-col md:flex-row">
      <div className="flex flex-col items-start justify-center">
        <h1 className="text-start text-4xl font-semibold tracking-tighter">
          David Rivera
        </h1>
        <p className="mt-2 text-start">
          {`
            I'm an Aspiring Software developer who enjoys building unique projects and solving complex problems. I love Compilers and low level programming. Seneca Polytechnic Student.
          `}
        </p>
      </div>

      <div className="flex justify-center md:justify-end py-8">
        <div className="flex w-48 justify-center md:justify-end">
          {/* Sexy pic of mine lmao */}
          <Image
            className="h-36 w-36 rounded-full"
            width={80}
            height={80}
            src="/images/david.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
