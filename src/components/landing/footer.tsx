"use client"

import Link from "next/link"
import { ArrowUpRight, GraduationCap } from "lucide-react"
import { motion } from "motion/react"

const quickLinks = [
  { label: "Products", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
]

const solutions = [
  { label: "AI Learning Assistant", href: "/solutions/ai-learning-assistant" },
  { label: "School Management", href: "/solutions/school-management-system" },
  { label: "Virtual Science Labs", href: "/solutions/virtual-science-labs" },
  { label: "Digital Library", href: "/solutions/digital-library" },
]

const company = [
  { label: "About us", href: "/about" },
  { label: "Careers", href: "/about/careers" },
  { label: "Sign in", href: "/login" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export function FooterColumn({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <motion.div variants={itemVariants}>
      <h4 className="text-xs font-semibold uppercase text-white/55">{title}</h4>
      <ul className="mt-4 space-y-3 text-sm">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-white/75 transition hover:text-light-green-500">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export function Footer() {
  return (
    <motion.footer
      className="bg-sea-green-100 px-6 pt-14 text-white md:pt-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={containerVariants}
    >
      <div className="mx-auto grid max-w-7xl gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1.25fr_0.8fr]">
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-2.5 text-lg font-semibold text-white">
            <span className="flex size-9 items-center justify-center rounded-md bg-white/10 text-light-green-500">
              <GraduationCap className="size-5" />
            </span>
            Afrovia<span className="-ml-2 text-light-green-500">Labs</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/65">
            Practical learning technology for the people shaping education across Africa.
          </p>
          <Link href="/about" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-light-green-500 hover:text-white">
            Our mission <ArrowUpRight className="size-4" />
          </Link>
        </motion.div>

        <FooterColumn title="Quick Links" items={quickLinks} />
        <FooterColumn title="Solutions" items={solutions} />
        <FooterColumn title="Company" items={company} />
      </div>

      <motion.div
        variants={itemVariants}
        className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/20 py-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between"
      >
        <p>&copy; {new Date().getFullYear()} AfroviaLabs. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-white">
            Terms of Service
          </Link>
        </div>
      </motion.div>
    </motion.footer>
  )
}
