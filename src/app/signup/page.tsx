"use client"

import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SignupPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-paper flex items-center justify-center px-6">
        <div className="w-full max-w-md rounded-2xl border border-ink/10 bg-white p-8 shadow-sm">
          <h1 className="font-display text-3xl font-semibold text-ink">Get started</h1>
          <p className="mt-2 text-ink/80">Create your AfroviaLabs account.</p>
          <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-ink" htmlFor="name">Full name</label>
              <input id="name" type="text" className="mt-1 w-full rounded-lg border border-ink/15 bg-white px-4 py-2 text-sm text-ink outline-none focus:border-forest" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-ink" htmlFor="email">Email</label>
              <input id="email" type="email" className="mt-1 w-full rounded-lg border border-ink/15 bg-white px-4 py-2 text-sm text-ink outline-none focus:border-forest" placeholder="you@school.edu" />
            </div>
            <div>
              <label className="block text-sm font-medium text-ink" htmlFor="password">Password</label>
              <input id="password" type="password" className="mt-1 w-full rounded-lg border border-ink/15 bg-white px-4 py-2 text-sm text-ink outline-none focus:border-forest" placeholder="••••••••" />
            </div>
            <Button className="w-full">Create account</Button>
          </form>
          <p className="mt-6 text-center text-sm text-ink/70">
            Already have an account? <Link href="/login" className="text-ember hover:underline">Sign in</Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
