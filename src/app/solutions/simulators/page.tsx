import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

export default function SimulatorsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-paper">
        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <span className="font-mono text-xs uppercase tracking-widest text-forest/60">Solutions</span>
            <h1 className="mt-3 font-display text-4xl font-semibold text-ink md:text-5xl">
              Simulators
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-ink/80">
              Simulation tools for practical learning in science, math, and technical subjects.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
