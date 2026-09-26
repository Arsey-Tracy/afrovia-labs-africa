"use client"

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu } from "lucide-react"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

const solutions = [
    { title: "AI Learning Assistant", href: "/solutions/ai-learning-assistant" },
    { title: "School Management", href: "/solutions/school-management-system" },
    { title: "Virtual Science Labs", href: "/solutions/virtual-science-labs" },
    { title: "Simulators", href: "/solutions/simulators" },
    { title: "Digital Library", href: "/solutions/digital-library" },
]

const about = [
    { title: "Our Story", href: "/about/story" },
    { title: "Team", href: "/about/team" },
    { title: "Careers", href: "/about/careers" },
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
            className="sticky top-0 z-50 w-full border-b border-forest/15 bg-paper"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" as const }}
        >
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative size-9 overflow-hidden rounded-md">
                        <Image
                            src="/afrivialogo.png"
                            alt="Afrovia Labs"
                            fill
                            sizes="36px"
                            className="object-cover"
                        />
                    </div>
                    <span className="font-bold tracking-tight text-lg">
                        <span className="text-leaf">Afrovia</span><span className="text-ember">Labs</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
                    <Link href="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Home</Link>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    Solutions
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-64 gap-1 p-3">
                                        {solutions.map((s) => (
                                            <li key={s.href}>
                                                <NavigationMenuLink asChild>
                                                    <Link href={s.href} className="block border-l-2 border-transparent px-3 py-2 text-sm text-foreground/80 hover:border-ember hover:bg-accent">
                                                        {s.title}
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <Link href="/products" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Products</Link>
                    <Link href="/projects" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Projects</Link>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    About Us
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-64 gap-1 p-3">
                                        {about.map((a) => (
                                            <li key={a.href}>
                                                <NavigationMenuLink asChild>
                                                    <Link href={a.href} className="block border-l-2 border-transparent px-3 py-2 text-sm text-foreground/80 hover:border-ember hover:bg-accent">
                                                        {a.title}
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <Link href="/resources" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Resources</Link>
                    <Link href="/contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Get in Touch</Link>
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
                                        className="flex items-center border-l-2 border-transparent px-4 py-3 text-base font-medium text-foreground transition-colors hover:border-ember hover:bg-accent"
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
    );
}