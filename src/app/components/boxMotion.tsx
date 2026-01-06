"use client"
import { motion } from "framer-motion"

type MotionElements = keyof typeof motion

interface BoxMotionProps<T extends MotionElements> {
  as?: T
  type: "UP" | "DOWN" | "LEFT" | "RIGHT"
  children: React.ReactNode
}

type CombinedProps<T extends MotionElements> = BoxMotionProps<T> &
  Omit<
    React.ComponentPropsWithoutRef<(typeof motion)[T]>,
    keyof BoxMotionProps<T>
  >

export default function BoxMotionComponent<T extends MotionElements = "div">({
  as,
  type,
  children,
  ...props
}: CombinedProps<T>) {
  const variants = {
    UP: { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } },
    DOWN: { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 } },
    LEFT: { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 } },
    RIGHT: { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 } },
  }

  const selectedVariant = variants[type] || "UP"

  const Component = motion[as || "div"] as React.ElementType

  return (
    <Component
      initial={selectedVariant.initial}
      whileInView={selectedVariant.animate}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      {...props}
    >
      {children}
    </Component>
  )
}
