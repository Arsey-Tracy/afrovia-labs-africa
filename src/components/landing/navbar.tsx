"use client"

import Link from "next/link";
import { ArrowRight, Menu, School } from "lucide-react"
import { Button } from "../ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { motion } from "framer-motion";

const solutions =  [
    {title: "AI Learning Assistant", href:"/solutions/ai-learning-assistant"},
    {title: "School Management", href:"/solutions/school-management-system"},
    {title: "Virtual Science Labs", href:"/solutions/virtual-science-labs"},
    {title: "Simulators", href:"/solutions/simulators"},
    {title: "Digital Library", href:"/solutions/digital-library"},
]

const about =  [
    {title: "Our Mission", href:"/about"},
    {title: "Careers", href:"/about/careers"},
    {title: "Contact Us", href:"/contact"},
]

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Projects", href: "/projects" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
]

export function Navbar() {
    return (
        <motion.header
            className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" as const }}
        >
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <School className="size-5"/>
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
                                        {solutions.map((s)=>(
                                            <li key={s.href}>
                                                <NavigationMenuLink>
                                                    <Link href={s.href} className="block rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-accent">
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
                                        {about.map((a)=>(
                                            <li key={a.href}>
                                                <NavigationMenuLink>
                                                    <Link href={a.href} className="block rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-accent">
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

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <Button variant="ghost" className="hidden sm:inline-flex">
                        <Link href="/login">Sign In</Link>
                    </Button>
                    <Button className="hidden md:inline-flex">
                        <Link href="/signup">Get Started</Link>
                        <ArrowRight className="ml-2 size-4"/>
                    </Button>

                    {/* Mobile Menu */}
                    <Sheet>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="icon" aria-label="Open menu">
                                <Menu className="size-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-background">
                            <nav className="flex flex-col gap-2 mt-8" aria-label="Mobile navigation">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="flex items-center rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
                                    <Button variant="outline" asChild>
                                        <Link href="/login" className="w-full">Sign In</Link>
                                    </Button>
                                    <Button asChild>
                                        <Link href="/signup" className="w-full">Get Started</Link>
                                    </Button>
                                </div>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </motion.header>
    );
}