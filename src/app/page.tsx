import { PageShell } from "@/components/layout/page-shell";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { OpenSourceSection } from "@/components/sections/open-source-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SocialWallSection } from "@/components/sections/social-wall-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { WritingSection } from "@/components/sections/writing-section";

export default function Home() {
  return (
    <PageShell>
      <AboutSection />

      <div className="shell-section-stack">
        <ProjectsSection />
        <OpenSourceSection />
        <WritingSection />
        <TestimonialsSection />
        <SocialWallSection />
        <ContactSection />
      </div>
    </PageShell>
  );
}
