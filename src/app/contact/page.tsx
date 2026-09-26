"use client"

import { MarketingPage } from "@/components/landing/marketing-page";

export default function ContactPage() {
  return (
    <MarketingPage
      eyebrow="Contact"
      title="Let’s make more room for learning."
      description="We would love to hear from schools, educators and partners interested in accessible digital education."
      image="/images/students-learning-tablet.png"
      imageAlt="Learners exploring content together on a tablet"
      sectionTitle="What would you like to build together?"
      sectionCopy="Start a conversation about bringing learning tools to your school, exploring a partnership or learning more about what we do."
      points={["School pilots and education partnerships", "Questions about our learning solutions", "Ideas for making digital learning more accessible"]}
      related={[{ label: "Explore our solutions", href: "/products" }, { label: "Learn about AfroviaLabs", href: "/about" }]}
    />
  );
}
