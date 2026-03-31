import { motion, type Variants } from 'motion/react'
import type { ComponentProps, ReactNode } from 'react'

const springTransition = {
  type: 'spring' as const,
  damping: 28,
  mass: 0.5,
  stiffness: 180,
}

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: springTransition },
}

const fadeRightVariants: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: springTransition },
}

const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: springTransition },
}

const variantMap = {
  up: fadeUpVariants,
  right: fadeRightVariants,
  scale: scaleInVariants,
}

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

type MotionDivProps = ComponentProps<typeof motion.div>

interface FadeInProps extends Omit<MotionDivProps, 'variants' | 'initial' | 'whileInView' | 'viewport'> {
  children: ReactNode
  direction?: 'up' | 'right' | 'scale'
  delay?: number
  className?: string
  once?: boolean
}

export function FadeIn({
  children,
  direction = 'up',
  delay = 0,
  className,
  once = true,
  ...rest
}: FadeInProps) {
  const variants = variantMap[direction]

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      transition={delay ? { ...springTransition, delay } : undefined}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

interface StaggerProps extends Omit<MotionDivProps, 'variants' | 'initial' | 'whileInView' | 'viewport'> {
  children: ReactNode
  className?: string
  stagger?: number
  once?: boolean
}

export function Stagger({
  children,
  className,
  stagger = 0.1,
  once = true,
  ...rest
}: StaggerProps) {
  const variants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
      },
    },
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export { staggerContainer }
