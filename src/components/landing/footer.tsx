"use client"

import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const quickLinks = ["Home", "Solutions", "Products", "Projects", "About Us", "Resources"];
const solutions = ["AI Learnng Assistant", "School Management", "Offline Learning Infrastructure", "SMS & USSD Access"];
const company = ["About Us", "Our Mission", "Careers", "Blog", "Contact Us"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export function FooterColumn({title, items}: {title: string; items: string[]}){
    return (
        <motion.div variants={itemVariants}>
            <h4 className="font-mono text-xs uppercase tracking-widest text-paper/70">{title}</h4>
            <ul className="mt-4 space-y-2 text-sm">
                {items.map((item)=>(
                    <li key={item}>
                        <Link href="#" className="text-paper/70 transition hover:text-leaf">{item}</Link>
                    </li>
                ))}
            </ul>
        </motion.div>
    )
}
export function Footer() {
    return (
        <motion.footer
            className="bg-forest px-6 pt-16 text-paper/80"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={containerVariants}
        >
            <div className="mx-auto grid max-w-6xl gap-10 pb-12 md:grid-cols-[1.3fr_1fr_1fr_1fr_1.2fr]">
                <motion.div variants={itemVariants}>
                    <div className="flex items-center gap-2 font-display text-xl font-semibold text-paper">
                        <span className="text-ember">Afrovia</span>Labs
                    </div>
                    <p className="mt-4 max-w-xs text-sm text-paper/70">
                        Building offline-first digital education systems that are simple, reliable, and inclusive for Africa
                    </p>
                    <div className="mt-5 flex gap-3">
                        {["Facebook", "Twitter", "LinkedIn", "Youtube"].map((label) => (
                            <Link key={label} href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-paper/30 text-xs transition hover:border-leaf hover:text-leaf" aria-label={`Follow us on ${label}`}>
                                {label[0]}
                            </Link>
                        ))}
                    </div>
                </motion.div>
                <FooterColumn title="Quick Links" items={quickLinks}/>
                <FooterColumn title="Solutions" items={solutions}/>
                <FooterColumn title="Company" items={company}/>
                <motion.div variants={itemVariants}>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-paper/70">Stay Connected</h4>
                    <p className="mt-4 text-sm text-paper/70">
                        Get updates on our latest solutions and impact stories.
                    </p>
                    <form action="" className="mt-4 flex overflow-hidden rounded-full border border-paper/30">
                        <Input type="email" className="w-full bg-transparent px-4 py-2 text-sm text-paper placeholder:text-paper/60 focus:outline-none" placeholder="Enter your email" aria-label="Email address"/>
                        <Button type="submit" className="shrink-0 bg-ember px-4 py-2 text-sm font-medium text-forest transition hover:bg-ember-600">
                            Submit
                        </Button>
                    </form>
                </motion.div>
            </div>
            <motion.div variants={itemVariants} className="flex flex-col gap-3 border-t border-paper/20 py-6 text-xs text-paper/70 md:flex-row md:items-center md:justify-between">
                <p>&copy; {new Date().getFullYear()} AfroviaLabs. All rights reserved.</p>
                <div className="flex gap-6">
                    <Link href="#" className="hover:text-paper">Privacy Policy</Link>
                    <Link href="#" className="hover:text-paper">Terms of Service</Link>
                </div>
            </motion.div>
        </motion.footer>
    );
}
