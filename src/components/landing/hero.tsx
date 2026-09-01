"use client"

import Link from "next/link";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

// import Image from "next/image"

const nodes = [
    {x:82, y:18, delay: "0s"},
    {x:92, y:46, delay: "0.4s"},
    {x:78, y:78, delay: "0.8s"},
    {x:46, y:90, delay: "1.2s"},
    {x:14, y:74, delay: "1.6s"},
    {x:6, y:40, delay: "2s"},
    {x:22, y:12, delay: "2.4s"},
]

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
            className="relative overflow-hidden bg-forest text-paper"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center md:py-32">
                <div>
                    <motion.span variants={itemVariants} className="inline-flex items-center gap-2 rounded-full border border-leaf/40 bg-forest-600/60 px-3 py-1 font-mono text-xs uppercase tracking-widest text-leaf">
                        Offline-first Africa-first
                    </motion.span>
                    <motion.h1 variants={itemVariants} className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                        Learning that doesn&apos;t wait <br/> for a signal.
                    </motion.h1>
                    <motion.p variants={itemVariants} className="mt-6 max-w-md text-lg text-paper/80">
                        AfroviaLabs builds offline-first education tools — an AI tutor, school management system, and virtual labs — that work on any phone, anywhere, without internet.
                    </motion.p>
                    <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-4">
                        <Button className="bg-ember text-forest hover:bg-ember-600">
                            <Link href="#products">See the products</Link>
                        </Button>
                        <Button variant="ghost" className="border border-paper/40 text-paper hover:bg-paper/10">
                            <Link href="#contact">Bring it to your school</Link>
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
                    className="relative mx-auto aspect-square w-full max-w-md"
                    variants={itemVariants}
                >
                    <svg viewBox="0 0 100 100" className="h-full w-full">
                        {nodes.map((n, i) => (
                            <line key={`l-${i}`} x1="50" y1="50" x2={n.x} y2={n.y}/>
                        ))}
                        {nodes.map((n, i) => (
                            <circle key={`c-${i}`} cx={n.x} cy={n.y} r="2.2" className="fill-ember" style={{ animation: "node-pulse 3.2s ease-in-out infinite", animationDelay:n.delay}}/>
                        ))}
                        <g style={{ transformOrigin:"50px 50px", animation: "spin-slow 24s linear infinite"}}>
                            <path d="M50 30 L55 50 L50 70 L45 50 Z" className="fill-ember"/>
                            <path d="M30 50 L50 45 L70 50 L50 55 Z" className="fill-ember"/>
                        </g>
                        <circle cx="50" cy="50" r="6" className="fill-leaf"/>
                        <circle cx="50" cy="50" r="3" className="fill-forest"/>
                    </svg>
                </motion.div>
            </div>
        </motion.section >
    );
}