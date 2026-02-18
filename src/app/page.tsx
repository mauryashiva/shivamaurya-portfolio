import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { MobileNav } from "@/components/mobile-nav";
import { FloatingResume } from "@/components/floating-resume";
import { Footer } from "@/components/footer";
import { BackgroundGradient } from "@/components/background-gradient";
import { Certificates } from "@/components/certificates";

export default function HomePage() {
  return (
    <main className="relative bg-background text-foreground overflow-x-hidden">
      <BackgroundGradient />
      <Navbar />

      {/* Sections Area */}
      <div className="flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />

        {/* We keep the ID here but the internal padding of 
            Certificates should be adjusted as shown below */}
        <Certificates />

        <Contact />
      </div>

      {/* Overlays & Global Components */}
      <FloatingResume />
      <Footer />
      <MobileNav />
    </main>
  );
}
