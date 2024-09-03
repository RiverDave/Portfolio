import React from "react"
import Image from "next/image"

export default function Header() {
  return (
    <div className="flex flex-row mb-8">
      <div className="flex flex-col justify-center items-start">
        <h1 className="text-4xl font-semibold tracking-tighter">
          David Rivera
        </h1>
        <p className="mt-2">
          {`
            I'm an Aspiring Software developer who enjoys building unique projects and solving complex problems. I love Compilers and low level programming. Seneca Polytechnic Student.
          `}
        </p>
      </div>

      <div className="flex justify-end items-center py-8">
        <div className="flex justify-end w-48">
          {/* Sexy pic of mine lmao */}
          <Image
            className="h-28 w-28 rounded-full ml-5"
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
