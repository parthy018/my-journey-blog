
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { GridBackground } from "@/components/ui/aceternity/grid-background";
import { Sparkles } from "@/components/ui/aceternity/sparkles";
import { Typewriter } from "@/components/ui/aceternity/typewriter";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      <GridBackground 
        className="absolute inset-0" 
        dotColor="rgba(var(--primary-rgb), 0.15)"
        dotSpacing={24}
        dotSize={1}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background to-background"></div>
      </GridBackground>

      <div className="container px-4 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <Sparkles className="w-full">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/70 dark:from-primary dark:via-primary/90 dark:to-primary/70 bg-clip-text text-transparent">
              Welcome to My Dev Journey
            </h1>
          </Sparkles>

          <p className="text-xl md:text-2xl text-muted-foreground mb-3 leading-relaxed">
            Exploring the world of
          </p>
          
          <div className="text-xl md:text-2xl font-medium text-foreground mb-8 h-8">
            <Typewriter
              words={[
                "Software Development",
                "Cloud Architecture",
                "Machine Learning",
                "Web Design",
                "DevOps Practices"
              ]}
              typingSpeed={80}
              deletingSpeed={50}
              delayBetweenWords={1800}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg" className="text-lg px-8 py-3">
              Read My Blog
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              View Projects
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-muted-foreground" />
      </div>
    </section>
  );
};
