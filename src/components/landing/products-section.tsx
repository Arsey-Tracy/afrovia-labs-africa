"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"

const products = [
  {
    name: "AI Learning Assistant",
    tag: "Personalised learning",
    desc: "A learning companion that makes curriculum-aligned support more accessible, including in low-connectivity settings.",
    href: "/solutions/ai-learning-assistant",
  },
  {
    name: "School Management",
    tag: "Simpler school operations",
    desc: "Bring everyday school administration into one clear, reliable system built around how schools work.",
    href: "/solutions/school-management-system",
  },
  {
    name: "Virtual Science Labs",
    tag: "Learning by doing",
    desc: "Give learners room to explore scientific ideas with interactive experiences and guided practice.",
    href: "/solutions/virtual-science-labs",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
}

export function ProductSection() {
  return (
    <motion.section
      id="products"
      className="bg-white px-6 py-20 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-7xl">
        <motion.span variants={itemVariants} className="text-xs font-semibold uppercase text-sea-green">
          Learning that fits real classrooms
        </motion.span>
        <div className="mt-3 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <motion.h2 variants={itemVariants} className="max-w-2xl font-display text-3xl font-medium leading-tight text-black md:text-5xl">
            Practical tools. More room to learn.
          </motion.h2>
          <motion.p variants={itemVariants} className="max-w-md text-base leading-7 text-black-700">
            One connected suite for learners, educators and the people who keep schools moving.
          </motion.p>
        </div>

        <div className="mt-12 grid border-t border-black-900 md:grid-cols-3">
          {products.map((p) => (
            <motion.div
              key={p.name}
              className="group border-b border-black-900 py-7 md:border-b-0 md:px-7 md:py-8 md:first:pl-0 md:last:pr-0 md:[&:not(:last-child)]:border-r"
              variants={itemVariants}
            >
              <span className="text-xs font-semibold uppercase text-jungle-green">{p.tag}</span>
              <h3 className="mt-5 font-display text-2xl font-medium text-black">{p.name}</h3>
              <p className="mt-3 min-h-20 max-w-sm text-sm leading-6 text-black-700">{p.desc}</p>
              <Link href={p.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sea-green transition-colors group-hover:text-jungle-green">
                Discover the solution <ArrowUpRight className="size-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
