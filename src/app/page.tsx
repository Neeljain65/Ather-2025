import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { CompetitionsSection } from "@/components/sections/CompetitionsSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { HighlightsSection } from "@/components/sections/HighlightsSection";
import { Footer } from "@/components/sections/Footer";
import { FloatingNavbar } from "@/components/FloatingNavbar";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden relative">
      <FloatingNavbar />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="competitions">
        <CompetitionsSection />
      </div>
      <div id="timeline">
        <TimelineSection />
      </div>
      <div id="highlights">
        <HighlightsSection />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}
