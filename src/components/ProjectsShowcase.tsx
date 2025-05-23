
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { InfiniteMovingCards } from "@/components/ui/aceternity/infinite-moving-cards";

const projects = [
  {
    id: 1,
    title: "Survey Insights Platform",
    description: "A SaaS survey application built with React.js for creating and analyzing customer surveys",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=225&fit=crop"
  },
  {
    id: 2,
    title: "Room Buddy",
    description: "A platform that connects people looking for rooms with suitable roommates",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=225&fit=crop"
  },
  {
    id: 3,
    title: "Dev Portfolio Generator",
    description: "Create personalized portfolios by importing GitHub repositories and customizing layouts",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=225&fit=crop"
  },
  {
    id: 4,
    title: "Code Snippet Manager",
    description: "Organize, search, and share code snippets with syntax highlighting and tagging",
    image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=400&h=225&fit=crop"
  },
  {
    id: 5,
    title: "Task Flow",
    description: "A productivity app for managing tasks with customizable workflows and analytics",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=225&fit=crop"
  },
  {
    id: 6,
    title: "Weather Dashboard",
    description: "Real-time weather updates with interactive maps and historical data analysis",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=225&fit=crop"
  }
];

export const ProjectsShowcase = () => {
  return (
    <section id="projects-preview" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore some of my recent work and side projects
          </p>
        </div>

        <div className="relative h-[400px] w-full overflow-hidden">
          <InfiniteMovingCards
            items={projects}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link to="/projects" className="text-lg px-8 py-6">
              View All Projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
