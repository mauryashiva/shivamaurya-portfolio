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

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <BackgroundGradient />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <FloatingResume />
      <Footer />
      <MobileNav />
    </main>
  );
}
