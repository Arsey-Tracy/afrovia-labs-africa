"use client"

import { motion } from "motion/react"

const principles = [
  "Designed for real-world African conditions",
  "Every child deserves quality education",
  "Built with schools and communities",
  "Grown through local partnerships",
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
}

export function PhilosophyBand() {
  return (
    <motion.section
      className="bg-sea-green-100 px-6 py-16 text-white md:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-7xl">
        <motion.p variants={itemVariants} className="max-w-3xl font-display text-3xl font-medium leading-tight md:text-4xl">
          Technology should meet learners where they are, and help them go further.
        </motion.p>
        <ul className="mt-10 grid gap-x-8 gap-y-6 text-sm text-white/75 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p) => (
            <motion.li key={p} variants={itemVariants} className="border-t border-white/30 pt-4">
              {p}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  )
}
