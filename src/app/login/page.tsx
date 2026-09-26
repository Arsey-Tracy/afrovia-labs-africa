"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, GraduationCap } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="min-h-svh bg-light-green-900/50 px-4 py-6 sm:px-6 sm:py-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-black-700 hover:text-sea-green">
          <ArrowLeft className="size-4" /> Back to AfroviaLabs
        </Link>
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-black">
          <span className="flex size-8 items-center justify-center rounded bg-sea-green text-white"><GraduationCap className="size-4" /></span>
          Afrovia<span className="-ml-2 text-sea-green">Labs</span>
        </Link>
      </div>
      <section className="mx-auto mt-8 grid max-w-6xl overflow-hidden rounded-md border border-black-900/50 bg-white shadow-sm md:mt-12 md:min-h-150 md:grid-cols-2">
        <div className="relative min-h-60 overflow-hidden bg-sea-green-100 md:min-h-full">
          <Image src="/images/students-learning-tablet.png" alt="Students learning together" fill sizes="(max-width: 768px) 100vw, 50vw" loading="eager" className="object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-sea-green-100/95 via-sea-green-100/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-10">
            <p className="text-xs font-semibold uppercase text-light-green-500">Learning without limits</p>
            <p className="mt-3 max-w-md font-display text-3xl font-medium leading-tight">A better learning experience starts here.</p>
          </div>
        </div>
        <div className="flex items-center px-6 py-10 sm:px-10 md:px-14">
          <div className="mx-auto w-full max-w-md">
            <p className="text-xs font-semibold uppercase text-sea-green">Welcome back</p>
            <h1 className="mt-3 font-display text-4xl font-medium text-black">Sign in</h1>
            <p className="mt-3 text-sm leading-6 text-black-700">Access your AfroviaLabs account.</p>
            <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-black" htmlFor="email">Email address</label>
                <input id="email" type="email" autoComplete="email" className="mt-2 h-12 w-full rounded-md border border-black-900 bg-white px-4 text-sm text-black outline-none transition focus:border-sea-green focus:ring-2 focus:ring-sea-green/20" placeholder="you@school.edu" />
              </div>
              <div>
                <label className="block text-sm font-medium text-black" htmlFor="password">Password</label>
                <input id="password" type="password" autoComplete="current-password" className="mt-2 h-12 w-full rounded-md border border-black-900 bg-white px-4 text-sm text-black outline-none transition focus:border-sea-green focus:ring-2 focus:ring-sea-green/20" placeholder="Enter your password" />
              </div>
              <Button className="h-12 w-full rounded-md bg-sea-green text-white hover:bg-jungle-green">Sign in</Button>
            </form>
            <p className="mt-7 text-center text-sm text-black-700">
              New to AfroviaLabs? <Link href="/signup" className="font-semibold text-sea-green hover:underline">Create an account</Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
