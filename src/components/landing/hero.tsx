"use client"

import Link from "next/link";
import { Button } from "../ui/button";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  },
};

export function Hero() {
    return (
        <motion.section
            className="relative isolate flex min-h-155 h-[calc(100svh-76px)] max-h-197.5 items-end overflow-hidden bg-sea-green-100 text-white"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-end md:px-8 md:py-28">
                <div>
                    <motion.span variants={itemVariants} className="inline-flex border border-leaf px-3 py-1 font-mono text-xs uppercase tracking-widest text-leaf">
                        Education infrastructure for real conditions
                    </motion.span>
                    <motion.h1 variants={itemVariants} className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                        Better learning, <br/><span className="text-ember">wherever school happens.</span>
                    </motion.h1>
                    <motion.p variants={itemVariants} className="mt-6 max-w-md text-lg text-paper/80">
                        AfroviaLabs gives schools practical digital tools that keep teaching moving, online or offline. One connected suite for learners, teachers, and school leaders.
                    </motion.p>
                    <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-4">
                        <Button className="bg-ember text-forest hover:bg-ember-600">
                            <Link href="#products">Explore the suite</Link>
                        </Button>
                        <Button variant="ghost" className="border border-paper/40 text-paper hover:bg-paper/10">
                            <Link href="/contact">Talk to our team</Link>
                        </Button>
                    </motion.div>
                    <motion.dl variants={itemVariants} className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-paper/20 pt-6 font-mono text-sm">
                        <div>
                            <dt className="text-paper/70">Works</dt>
                            <dd className="text-leaf">Offline</dd>
                        </div>
                        <div>
                            <dt className="text-paper/70">Reaches</dt>
                            <dd className="text-leaf">Any phone</dd>
                        </div>
                        <div>
                            <dt className="text-paper/70">Built for</dt>
                            <dd className="text-leaf">Real Schools</dd>
                        </div>
                    </motion.dl>
                </div>
                <motion.div 
                    className="relative mx-auto w-full max-w-md border border-leaf/40 bg-forest-700 p-5 md:p-8"
                    variants={itemVariants}
                >
                    <div className="border border-paper/20 p-6 md:p-8">
                        <p className="font-mono text-xs uppercase tracking-widest text-leaf">A learning system that travels</p>
                        <div className="mt-8 grid grid-cols-2 border-t border-paper/20">
                            <div className="border-r border-paper/20 py-5 pr-5"><strong className="font-display text-4xl text-ember">01</strong><p className="mt-2 text-sm text-paper/70">Learn with cached lessons</p></div>
                            <div className="py-5 pl-5"><strong className="font-display text-4xl text-ember">02</strong><p className="mt-2 text-sm text-paper/70">Manage every classroom</p></div>
                            <div className="border-r border-t border-paper/20 py-5 pr-5"><strong className="font-display text-4xl text-ember">03</strong><p className="mt-2 text-sm text-paper/70">Practice with virtual labs</p></div>
                            <div className="border-t border-paper/20 py-5 pl-5"><strong className="font-display text-4xl text-ember">04</strong><p className="mt-2 text-sm text-paper/70">Connect when ready</p></div>
                        </div>
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
        </motion.section >
    );
}