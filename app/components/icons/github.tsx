import React from "react"
import GithubIcon from "../../../public/images/github.svg"

const ThemeColoredSvg = ({ color, ...props }) => {
  return <GithubIcon fill={color} {...props} />
}

export default ThemeColoredSvg
