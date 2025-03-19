"use client"

import type React from "react"

import { motion } from "framer-motion"
import { forwardRef } from "react"

export const MotionDiv = motion.div

export const FadeIn = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    delay?: number
    duration?: number
    from?: "bottom" | "top" | "left" | "right" | "none"
    distance?: number
  }
>(({ children, delay = 0, duration = 0.5, from = "bottom", distance = 20, ...props }, ref) => {
  const directions = {
    top: { y: -distance },
    bottom: { y: distance },
    left: { x: -distance },
    right: { x: distance },
    none: {},
  }

  return (
    <MotionDiv
      ref={ref}
      initial={{
        opacity: 0,
        ...directions[from],
      }}
      animate={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      {...props}
    >
      {children}
    </MotionDiv>
  )
})
FadeIn.displayName = "FadeIn"

export const StaggerContainer = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    staggerChildren?: number
    delayChildren?: number
  }
>(({ children, staggerChildren = 0.1, delayChildren = 0, ...props }, ref) => {
  return (
    <MotionDiv
      ref={ref}
      initial="hidden"
      animate="show"
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
      }}
      {...props}
    >
      {children}
    </MotionDiv>
  )
})
StaggerContainer.displayName = "StaggerContainer"

export const StaggerItem = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    from?: "bottom" | "top" | "left" | "right" | "none"
    distance?: number
    duration?: number
  }
>(({ children, from = "bottom", distance = 20, duration = 0.5, ...props }, ref) => {
  const directions = {
    top: { y: -distance },
    bottom: { y: distance },
    left: { x: -distance },
    right: { x: distance },
    none: {},
  }

  return (
    <MotionDiv
      ref={ref}
      variants={{
        hidden: {
          opacity: 0,
          ...directions[from],
        },
        show: {
          opacity: 1,
          y: 0,
          x: 0,
          transition: {
            duration,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      {...props}
    >
      {children}
    </MotionDiv>
  )
})
StaggerItem.displayName = "StaggerItem"

export const ScaleOnHover = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    scale?: number
  }
>(({ children, scale = 1.05, ...props }, ref) => {
  return (
    <MotionDiv ref={ref} whileHover={{ scale }} transition={{ type: "spring", stiffness: 400, damping: 17 }} {...props}>
      {children}
    </MotionDiv>
  )
})
ScaleOnHover.displayName = "ScaleOnHover"

