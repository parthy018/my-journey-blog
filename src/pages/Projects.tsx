
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CardSpotlight } from "@/components/ui/aceternity/card-spotlight";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LampContainer } from "@/components/ui/aceternity/lamp";
import { Github, ExternalLink } from "lucide-react";

// Mock project data
const projects = [
  {
    id: 1,
    title: "Survey Insights Platform",
    description: "A SaaS survey application built with React.js that allows businesses to create, distribute, and analyze customer surveys with real-time data visualization.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=225&fit=crop",
    tags: ["React", "Redux Toolkit", "Chart.js", "Firebase"],
    github: "https://github.com/username/survey-insights",
    live: "https://survey-insights-demo.vercel.app",
    achievements: [
      "Improved UI/UX responsiveness by 40%",
      "Optimized Redux state management, reducing complexity by 35%",
      "Added dynamic routing using React Router, reducing page load time by 30%"
    ]
  },
  {
    id: 2,
    title: "Room Buddy",
    description: "A platform that helps users find compatible roommates and available rooms based on their preferences, budget, and location.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=225&fit=crop",
    tags: ["Next.js", "Tailwind CSS", "MongoDB", "WebSockets"],
    github: "https://github.com/username/room-buddy",
    live: "https://room-buddy-demo.vercel.app",
    achievements: [
      "Re-architected the app using React.js, reducing load times by 60%",
      "Developed real-time room listings and roommate matching features",
      "Launched the platform with React.js and Tailwind CSS, boosting performance by 25%"
    ]
  },
  {
    id: 3,
    title: "Dev Portfolio Generator",
    description: "A web application that allows developers to create personalized portfolios by importing their GitHub repositories and customizing the layout and style.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=225&fit=crop",
    tags: ["React", "GitHub API", "CSS Modules", "Vercel"],
    github: "https://github.com/username/dev-portfolio",
    live: "https://dev-portfolio-demo.vercel.app",
    achievements: [
      "Integrated with GitHub API to automatically import user projects",
      "Created a drag-and-drop interface for customizing portfolio layout",
      "Implemented theme customization with real-time preview"
    ]
  },
  {
    id: 4,
    title: "Code Snippet Manager",
    description: "A developer tool for organizing, searching, and sharing code snippets with syntax highlighting and tagging capabilities.",
    image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=400&h=225&fit=crop",
    tags: ["TypeScript", "Express", "PostgreSQL", "Prism.js"],
    github: "https://github.com/username/snippet-manager",
    live: "https://snippet-manager-demo.vercel.app",
    achievements: [
      "Built a search engine with fuzzy matching for code snippets",
      "Implemented syntax highlighting for over 100 programming languages",
      "Created a sharing system with privacy controls and expiration settings"
    ]
  }
];

const Projects = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          {/* Projects Hero */}
          <LampContainer>
            <div className="container px-4 py-20 text-center relative z-10">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">My Projects</h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                A showcase of my development work, side projects, and experiments
              </p>
            </div>
          </LampContainer>

          {/* Projects Grid */}
          <section className="py-20 container px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <CardSpotlight key={project.id} className="p-0 overflow-hidden">
                  <div className="aspect-video w-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Key Achievements:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        {project.achievements.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <Github size={16} />
                          GitHub
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardSpotlight>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Projects;
