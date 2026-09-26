"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowRight } from "lucide-react"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "../ui/button"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
}

export function Hero() {
  return (
    <motion.section
      className="relative isolate flex h-[calc(100svh-76px)] min-h-[620px] max-h-[790px] items-end overflow-hidden bg-sea-green-100 text-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Image
        src="/images/students-learning-tablet.png"
        alt="Students learning together with a tablet in their classroom"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-sea-green-100/95 via-sea-green-100/75 to-sea-green-100/10" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-linear-to-t from-sea-green-100/85 to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-6 pb-16 pt-28 md:px-10 md:pb-20 lg:px-12">
        <motion.div className="max-w-3xl" variants={itemVariants}>
          <p className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase text-light-green-500">
            <span className="size-2 rounded-full bg-light-green-500" />
            Learning technology, built for Africa
          </p>
          <h1 className="max-w-3xl font-display text-5xl font-medium leading-[1.04] md:text-6xl lg:text-7xl">
            Every learner deserves a world of possibility.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/85 md:text-lg">
            We create practical digital tools that help schools deliver better learning, even when the internet cannot keep up.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#products"
              className={cn(
                buttonVariants(),
                "h-12 rounded-md bg-light-green-500 px-6 font-semibold text-sea-green-100 hover:bg-light-green-600"
              )}
            >
              Explore our solutions <ArrowRight className="ml-2 size-4" />
            </Link>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-12 rounded-md border-white/60 bg-white/5 px-6 text-white hover:bg-white/15 hover:text-white"
              )}
            >
              Partner with us
            </Link>
          </div>
        </motion.div>

        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/30 pt-5 text-sm text-white/85 md:mt-16">
          <span>Offline-ready learning</span>
          <span className="hidden size-1 rounded-full bg-light-green-500 sm:block" />
          <span>Tools for educators</span>
          <span className="hidden size-1 rounded-full bg-light-green-500 sm:block" />
          <span>Designed for local realities</span>
          <Link href="#products" className="ml-auto hidden items-center gap-2 font-medium text-light-green-500 md:flex">
            Discover the platform <ArrowDown className="size-4" />
          </Link>
        </div>
      </div>
    </motion.section>
  )
}