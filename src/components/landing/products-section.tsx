"use client"

import { motion } from "framer-motion";

const products = [
    {
        name: "AfroviaLearn",
        tag: "AI Tutor",
        desc: "An offline AI learnin Assistant with locally cached lessons."
    },
    {
        name: "SchoolOS",
        tag: "School Management System",
        desc: "An all in one management system for school operatons."
    },
    {
        name: "Communty Hubs",
        tag: "Local infrastructure",
        desc: "Hubs for students to learn."
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
            className="bg-paper px-6 py-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
        >
            <div  className="mx-auto max-w-6xl">
                <motion.span variants={itemVariants} className="font-mono text-xs uppercase tracking-widest text-forest/60">
                    The suite
                </motion.span>
                <motion.h2 variants={itemVariants} className="mt-3 max-w-xl font-display text-3xl font-semibold text-ink md:text-4xl">
                     The products your schools need.
                </motion.h2>
                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    {products.map((p)=> (
                        <motion.div 
                            key={p.name} 
                            className="rounded-2xl border border-ink/10 bg-paper p-8"
                            variants={itemVariants}
                            whileHover={{ y: -4, transition: { duration: 0.2 } }}
                        >
                            <span className="font-mono text-xs uppercase tracking-widest text-ember">{p.tag}</span>
                            <h3 className="mt-3 font-display text-2xl font-semibold text-forest">{p.name}</h3>
                            <p className="mt-3 text-ink/85">{p.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
