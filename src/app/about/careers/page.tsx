import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-paper">
        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <span className="font-mono text-xs uppercase tracking-widest text-forest/60">Careers</span>
            <h1 className="mt-3 font-display text-4xl font-semibold text-ink md:text-5xl">
              Join the team
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-ink/80">
              Help us shape the future of education technology across Africa.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
