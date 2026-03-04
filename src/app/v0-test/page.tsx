import { AboutSection } from "~/components/v0/about-section";
import { HeroSection } from "~/components/v0/hero-section";
import { JourneySection } from "~/components/v0/journey-section";
import { ProjectsSection } from "~/components/v0/projects-section";
import { TechSection } from "~/components/v0/tech-section";

export default function V0TestPage() {
  return (
    <main className="bg-zinc-950 text-white">
      <HeroSection />
      <AboutSection />
      <JourneySection />
      <TechSection />
      <ProjectsSection />
    </main>
  );
}
