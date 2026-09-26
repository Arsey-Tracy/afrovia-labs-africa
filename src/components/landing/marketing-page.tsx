"use client"
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Footer } from "@/components/landing/footer";
import { Navbar } from "@/components/landing/navbar";

type MarketingPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  sectionTitle: string;
  sectionCopy: string;
  points: string[];
  related?: { label: string; href: string }[];
};

export function MarketingPage({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  sectionTitle,
  sectionCopy,
  points,
  related,
}: MarketingPageProps) {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <section className="px-6 py-14 md:py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[1fr_0.9fr] md:gap-14">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase text-sea-green">{eyebrow}</p>
              <h1 className="mt-5 font-display text-4xl font-medium leading-[1.08] text-black md:text-5xl lg:text-6xl">{title}</h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-black-700 md:text-lg md:leading-8">{description}</p>
              <Link href="/contact" className="mt-8 inline-flex h-12 items-center rounded-md bg-sea-green px-5 text-sm font-semibold text-white transition hover:bg-jungle-green">
                Talk with our team <ArrowRight className="ml-2 size-4" />
              </Link>
            </div>
            <div className="relative aspect-5/4 overflow-hidden rounded-md bg-light-green-900">
              <Image src={image} alt={imageAlt} fill sizes="(max-width: 768px) 100vw, 48vw" className="object-cover" />
            </div>
          </div>
        </section>

        <section className="border-y border-black-900/70 bg-light-green-900/35 px-6 py-16 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase text-sea-green">Designed around people</p>
              <h2 className="mt-4 max-w-lg font-display text-3xl font-medium leading-tight text-black md:text-4xl">{sectionTitle}</h2>
            </div>
            <div>
              <p className="max-w-2xl leading-7 text-black-700">{sectionCopy}</p>
              <ul className="mt-7 divide-y divide-black-900/60 border-y border-black-900/60">
                {points.map((point, index) => (
                  <li key={point} className="flex gap-4 py-4 text-sm leading-6 text-black-700">
                    <span className="font-mono text-xs font-medium text-sea-green">0{index + 1}</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              {related && related.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                  {related.map((item) => (
                    <Link key={item.href} href={item.href} className="inline-flex items-center gap-1 text-sm font-semibold text-sea-green hover:text-jungle-green">
                      {item.label} <ArrowUpRight className="size-4" />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="bg-sea-green-100 px-6 py-14 text-white md:py-16">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase text-light-green-500">AfroviaLabs</p>
              <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium leading-tight md:text-4xl">Let&apos;s make learning work better for every school.</h2>
            </div>
            <Link href="/contact" className="inline-flex h-12 shrink-0 items-center justify-center rounded-md bg-light-green-500 px-5 text-sm font-semibold text-sea-green-100 transition hover:bg-light-green-600">
              Get in touch <ArrowRight className="ml-2 size-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}