import { AboutSection } from "~/components/v0/about-section";
import { BackToTop } from "~/components/v0/back-to-top";
import { ContactSection } from "~/components/v0/contact-section";
import { Footer } from "~/components/v0/footer";
import { Header } from "~/components/v0/header";
import { HeroSection } from "~/components/v0/hero-section";
import { JourneySection } from "~/components/v0/journey-section";
import { ProjectsSection } from "~/components/v0/projects-section";
import { TechSection } from "~/components/v0/tech-section";

function SectionDivider() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="bg-border h-px" />
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <HeroSection />

      <SectionDivider />
      <AboutSection />

      <SectionDivider />
      <JourneySection />

      <SectionDivider />
      <TechSection />

      <SectionDivider />
      <ProjectsSection />

      <SectionDivider />
      <ContactSection />

      <SectionDivider />
      <Footer />

      <BackToTop />
    </main>
  );
}
