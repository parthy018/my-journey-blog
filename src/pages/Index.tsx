
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BlogTimeline } from "@/components/BlogTimeline";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsShowcase } from "@/components/ProjectsShowcase";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <BlogTimeline />
          <SkillsSection />
          <ProjectsShowcase />
          <About />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
