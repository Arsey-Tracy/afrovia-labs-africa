import { MarketingPage } from "@/components/landing/marketing-page";

export default function ProjectsPage() {
  return (
    <MarketingPage
      eyebrow="Projects"
      title="Turning better ideas into better learning experiences."
      description="Our projects bring education technology closer to the classrooms, communities and learners it is designed to serve."
      image="/images/students-learning-tablet.png"
      imageAlt="Students collaborating with digital learning tools"
      sectionTitle="Progress is built in partnership."
      sectionCopy="Digital education works best when it responds to local needs. We work toward practical deployments that support educators, learners and the wider school community."
      points={["Technology selected for real education needs", "Partnerships that bring schools and communities together", "A focus on access, usability and lasting value"]}
      related={[{ label: "Explore our products", href: "/products" }, { label: "Get in Touch", href: "/contact" }]}
    />
  );
}
