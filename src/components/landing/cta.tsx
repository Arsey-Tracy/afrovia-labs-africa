"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: 0.2 }
  },
};

export function CTASection() {
    return (
        <motion.section 
            className="border-t border-ink/15 bg-peach px-6 py-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={containerVariants}
        >
            <motion.div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[0.85fr_1.15fr]" variants={itemVariants}>
                <div className="overflow-hidden border border-forest">
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
                    <p className="font-mono text-xs uppercase tracking-widest text-forest/70">Ready to make access practical?</p>
                    <h2 className="mt-3 font-display text-3xl font-semibold text-forest md:text-5xl">
                        Put better tools in the hands of every school.
                    </h2>
                    <p className="mt-4 max-w-md text-ink/85">
                        Join schools and partners building a more resilient learning system across Africa. Start with a conversation about your learners, your context, and what is possible next.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link href="/contact" className="bg-forest px-6 py-3 font-medium text-paper transition hover:bg-forest-600">
                            Start a conversation
                        </Link>
                                <Link href="/projects" className="border border-forest px-6 py-3 font-medium text-forest transition hover:bg-forest/10">
                                    See the impact
                        </Link>
                    </div>
                </div>
            </motion.div>
        </motion.section>
    )
}
