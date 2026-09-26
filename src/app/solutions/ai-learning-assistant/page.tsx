"use client"

import { MarketingPage } from "@/components/landing/marketing-page";

export default function AILearningAssistantPage() {
  return (
    <MarketingPage
      eyebrow="Learning solution"
      title="Personalised support that helps every learner keep going."
      description="An AI learning assistant with locally cached lessons, designed to make curriculum-aligned help more accessible in low-connectivity environments."
      image="/images/students-learning-tablet.png"
      imageAlt="Learners studying together with a tablet"
      sectionTitle="Learning support, ready when it is needed."
      sectionCopy="Learners benefit from timely explanations and opportunities to practise. An offline-ready assistant can bring useful support closer, even when a strong connection is not available."
      points={["Locally cached learning materials", "On-demand support for independent study", "Designed for classrooms with limited connectivity"]}
      related={[{ label: "Explore School Management", href: "/solutions/school-management-system" }, { label: "Browse all products", href: "/products" }]}
    />
  );
}
