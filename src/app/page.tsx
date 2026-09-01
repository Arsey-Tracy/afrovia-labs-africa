import { CTASection } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { Navbar } from "@/components/landing/navbar";
import { PhilosophyBand } from "@/components/landing/philosophy-band";
import { ProductSection } from "@/components/landing/products-section";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-ember focus:px-4 focus:py-2 focus:text-forest focus:font-medium"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <ProductSection/>
        <PhilosophyBand/>
        <CTASection/>
        <Footer/>
      </main>
    </>
  );
}
