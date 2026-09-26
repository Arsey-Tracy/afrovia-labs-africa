
import { MarketingPage } from "@/components/landing/marketing-page";

export default function ProductsPage() {
  return (
    <MarketingPage
      eyebrow="Our products"
      title="One connected suite for a richer learning experience."
      description="Explore digital tools for learning, school operations and hands-on discovery, designed for the needs of African education."
      image="/images/students-tablet.png"
      imageAlt="Students learning together with a digital device"
      sectionTitle="More than a collection of apps."
      sectionCopy="From classroom learning to the work behind the scenes, our products are designed to support the wider school experience and make digital education more practical."
      points={["AI-powered learning assistance", "School management and administration", "Virtual labs, simulators and digital library access"]}
      related={[{ label: "AI Learning Assistant", href: "/solutions/ai-learning-assistant" }, { label: "School Management", href: "/solutions/school-management-system" }, { label: "Virtual Science Labs", href: "/solutions/virtual-science-labs" }, { label: "Digital Library", href: "/solutions/digital-library" }, { label: "Simulators", href: "/solutions/simulators" }]}
    />
  );
}
