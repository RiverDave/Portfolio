"use client"

import { Avatar, AvatarFallback, AvatarImage } from "../../shadcn/avatar"
import { Badge } from "../../shadcn/badge"
import { Card, CardHeader } from "../../shadcn/card"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ChevronRightIcon } from "lucide-react"
import Link from "next/link"
import React from "react"

interface ResumeCardProps {
  logoUrl: string
  altText: string
  title: string
  subtitle?: string
  href?: string
  badges?: readonly string[]
  period: string
  description?: string
  isExpanded?: boolean
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  isExpanded: expanded,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(expanded || false)

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (description) {
      e.preventDefault()
      setIsExpanded(!isExpanded)
    }
  }

  const CardContent = (
    <Card className="flex flex-col rounded-none border-none justify-center mb-4">
      <CardHeader className="flex-row items-center">
        <Avatar className="border dark:border-neutral-500 size-10 bg-muted-background dark:bg-foreground mr-4">
          <AvatarImage src={logoUrl} alt={altText} className="object-contain" />
          <AvatarFallback>{altText[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-grow">
          <div className="flex items-center justify-between text-base">
            <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
              {title}
              {badges && (
                <span className="inline-flex gap-x-1">
                  {badges.map((badge, index) => (
                    <Badge
                      variant="secondary"
                      className="align-middle text-xs"
                      key={index}
                    >
                      {badge}
                    </Badge>
                  ))}
                </span>
              )}
              <ChevronRightIcon
                className={cn(
                  "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                  isExpanded ? "rotate-90" : "rotate-0"
                )}
              />
            </h3>
          </div>

          <small className=" text-xs sm:text-sm tabular-nums text-muted-foreground text-right dark:text-neutral-400">
            {period}
          </small>
          {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
        </div>
      </CardHeader>
      {description && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isExpanded ? 1 : 0,
            height: isExpanded ? "auto" : 0,
          }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-2 text-xs sm:text-sm"
        >
          <p className="text-neutral-600  dark:text-neutral-300 pl-20  mb-5">
            {description}
          </p>
        </motion.div>
      )}
    </Card>
  )

  return href ? (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block cursor-pointer"
      onClick={handleClick}
    >
      {CardContent}
    </Link>
  ) : (
    <div className="block cursor-pointer" onClick={handleClick}>
      {CardContent}
    </div>
  )
}
