"use client"

import { Link, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const products = [
    {
        name: "AfroviaLearn",
        tag: "AI Tutor",
        href: "/afrovia-learn",
        desc: "A guided AI tutor with cached lessons, practice, and feedback for learners with limited connectivity."
    },
    {
        name: "SchoolOS",
        tag: "School Management System",
        href: "/school-os",
        desc: "One clear view of attendance, classes, people, and day-to-day operations."
    },
    {
        name: "Virtual Labs",
        tag: "Practical learning",
        href: "/virtual-labs",
        desc: "Safe, visual spaces where students can test ideas and build confidence before the exam."
    }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    }
  },
};

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
                <motion.h2 variants={itemVariants} className="mt-3 max-w-xl font-display text-3xl font-semibold text-ink md:text-4xl">
                     Tools that turn limited access into more learning.
                </motion.h2>
                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    {products.map((p)=> (
                        <motion.div 
                            key={p.name} 
                            className="border border-ink/20 bg-paper p-8"
                            variants={itemVariants}
                            whileHover={{ borderColor: "#16442D", transition: { duration: 0.2 } }}
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
    );
}
