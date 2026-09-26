"use client"

import Link from "next/link"
import { ArrowRight, ChevronDown, GraduationCap, Menu } from "lucide-react"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "../ui/button"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"

const solutions = [
  { title: "AI Learning Assistant", href: "/solutions/ai-learning-assistant" },
  { title: "School Management", href: "/solutions/school-management-system" },
  { title: "Virtual Science Labs", href: "/solutions/virtual-science-labs" },
  { title: "Simulators", href: "/solutions/simulators" },
  { title: "Digital Library", href: "/solutions/digital-library" },
]

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b border-black-900/60 bg-white/95 backdrop-blur-md"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" as const }}
    >
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-6 px-5 md:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="AfroviaLabs home">
          <span className="flex size-10 items-center justify-center rounded-md bg-sea-green text-white">
            <GraduationCap className="size-5" aria-hidden="true" />
          </span>
          <span className="text-lg font-semibold text-black">
            Afrovia<span className="text-sea-green">Labs</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Main navigation">
          {navLinks.slice(0, 2).map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-black-700 transition-colors hover:text-sea-green">
              {link.label}
            </Link>
          ))}

          <details className="group relative">
            <summary className="flex cursor-pointer list-none items-center gap-1 text-sm font-medium text-black-700 hover:text-sea-green">
              Solutions <ChevronDown className="size-4 transition-transform group-open:rotate-180" />
            </summary>
            <ul className="absolute left-0 top-full z-20 mt-4 flex w-72 flex-col rounded-md border border-black-900 bg-white p-2 shadow-xl group-open:animate-in group-open:fade-in">
              {solutions.map((solution) => (
                <li key={solution.href}>
                  <Link href={solution.href} className="block rounded px-3 py-2.5 text-sm text-black-700 hover:bg-light-green-900 hover:text-sea-green-100">
                    {solution.title}
                  </Link>
                </li>
              ))}
            </ul>
          </details>

          {navLinks.slice(2).map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-black-700 transition-colors hover:text-sea-green">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/login" className={cn(buttonVariants({ variant: "ghost" }), "hidden text-black-700 hover:text-sea-green sm:inline-flex")}>
            Sign in
          </Link>
          <Link href="/signup" className={cn(buttonVariants(), "hidden h-10 rounded-md bg-sea-green px-4 text-white hover:bg-jungle-green md:inline-flex")}>
            Get started <ArrowRight className="ml-2 size-4" />
          </Link>

          <Sheet>
            <SheetTrigger className="inline-flex size-10 items-center justify-center rounded-md text-black hover:bg-light-green-900 lg:hidden" aria-label="Open navigation menu">
              <Menu className="size-5" aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(22rem,calc(100vw-2rem))] border-l border-black-900 bg-white">
              <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile navigation">
                {navLinks.slice(0, 2).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center rounded px-3 py-3 text-base font-medium text-black hover:bg-light-green-900"
                  >
                    {link.label}
                  </Link>
                ))}

                <p className="px-3 pb-1 pt-4 text-xs font-semibold uppercase text-black-600">Solutions</p>
                {solutions.map((solution) => (
                  <Link key={solution.href} href={solution.href} className="rounded px-3 py-2 text-sm text-black-700 hover:bg-light-green-900">
                    {solution.title}
                  </Link>
                ))}

                {navLinks.slice(2).map((link) => (
                  <Link key={link.href} href={link.href} className="rounded px-3 py-3 text-base font-medium text-black hover:bg-light-green-900">
                    {link.label}
                  </Link>
                ))}

                <div className="mt-5 flex flex-col gap-3 border-t border-black-900 pt-5">
                  <Link href="/login" className={cn(buttonVariants({ variant: "outline" }), "w-full border-sea-green text-sea-green hover:bg-light-green-900")}>
                    Sign in
                  </Link>
                  <Link href="/signup" className={cn(buttonVariants(), "w-full bg-sea-green text-white hover:bg-jungle-green")}>
                    Get started <ArrowRight className="ml-2 size-4" />
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}