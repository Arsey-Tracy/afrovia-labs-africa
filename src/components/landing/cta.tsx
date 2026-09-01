"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

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
            className="bg-peach/40 px-6 py-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={containerVariants}
        >
            <motion.div className="mx-auto grid max-w-6xl items-center gap-10 rounded-3xl bg-paper p-8 shadow-sm md:grid-cols-[1fr_1.4fr] md:p-10" variants={itemVariants}>
                <div className="overflow-hidden rounded-2xl">
                    <Image src="/images/students-tablet.png" alt="students using a tablet" className="h-56 w-full object-cover md:h-full" width={100} height={50}/>
                </div>
                <div>
                    <h2 className="font-display text-3xl font-semibold text-forest md:text-4xl">
                        Let&apos;s build the future of education together
                    </h2>
                    <p className="mt-4 max-w-md text-ink/85">
                        Join our growing network of schools, partners,  and innovators
                        bringing accessible digital education to every corner of Africa.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link href="#partner" className="rounded-full bg-forest px-6 py-3 font-medium text-paper transition hover:bg-forest-600">
                            Partner with us
                        </Link>
                        <Link href="#partner" className="rounded-full border border-forest px-6 py-3 font-medium text-forest transition hover:bg-forest/60">
                           Join pilot schools
                        </Link>
                    </div>
                </div>
            </motion.div>
        </motion.section>
    )
}
