"use client"

import { motion } from "framer-motion";

const principles = [
    "Designed for real-world African conditions",
    "Every child deserves quality education",
    "Built with schools and communities",
    "Grown through local partnerships"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const }
  },
};

export function PhilosophyBand(){
    return (
        <motion.section 
            className="bg-forest px-6 py-16 text-paper"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={containerVariants}
        >
            <div className="mx-auto max-w-6xl">
                <motion.p variants={itemVariants} className="max-w-lg font-display text-2xl font-medium leading-snug">
                    Digital inclusion isn&apos;t a feature. It&apos;s the foundation.
                </motion.p>
                <ul className="mt-10 grid gap-6 font-mono text-sm text-paper/70 md:grid-cols-4">
                    {principles.map((p)=>(
                        <motion.li key={p} variants={itemVariants} className="border-t border-paper/30 pt-4">{p}</motion.li>
                    ))}
                </ul>
            </div>
        </motion.section>
    )
}
