"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: 0.2 },
  },
}

export function CTASection() {
  return (
    <motion.section
      id="contact"
      className="bg-light-green-900 px-6 py-14 text-white md:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={containerVariants}
    >
      <motion.div
        className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-16"
        variants={itemVariants}
      >
        <div className="relative min-h-64 overflow-hidden rounded-md md:min-h-[360px]">
          <Image
            src="/images/students-tablet.png"
            alt="Students working together on a tablet"
            className="h-64 w-full object-cover md:absolute md:inset-0 md:h-full"
            width={560}
            height={320}
            sizes="(max-width: 768px) 100vw, 480px"
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase text-sea-green">Let&apos;s work together</p>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-medium leading-tight text-black md:text-5xl">
            Better learning is something we build together.
          </h2>
          <p className="mt-5 max-w-lg leading-7 text-black-700">
            Join schools, educators and partners working to make relevant digital learning more accessible across Africa.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-sea-green px-5 py-3 text-sm font-semibold text-white transition hover:bg-jungle-green"
            >
              Start a conversation
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center rounded-md border border-sea-green px-5 py-3 text-sm font-semibold text-sea-green transition hover:bg-white"
            >
              Learn about our work
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}
