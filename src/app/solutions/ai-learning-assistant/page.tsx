import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

export default function AILearningAssistantPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-paper">
        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <span className="font-mono text-xs uppercase tracking-widest text-forest/60">Solutions</span>
            <h1 className="mt-3 font-display text-4xl font-semibold text-ink md:text-5xl">
              AI Learning Assistant
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-ink/80">
              An offline AI learning assistant with locally cached lessons, designed for low-connectivity environments.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
