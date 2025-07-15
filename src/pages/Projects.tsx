
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CardSpotlight } from "@/components/ui/aceternity/card-spotlight";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LampContainer } from "@/components/ui/aceternity/lamp";
import { Github, ExternalLink } from "lucide-react";
import heroImage from "/hero-dashboard.jpg";
// Mock project data
const projects = [
  {
  id: 3,
  title: "AI Outreach Landing Page",
  description: "Landing page for ai.servigo.shop — a modern AI-powered outreach platform that helps businesses convert leads automatically via Email, SMS, WhatsApp, and Voice.",
  image: heroImage, // Replace with your actual hero or meta image
  tags: ["React", "nodejs", "n8n", "AI Automation", "Marketing"],
  live: "https://ai.servigo.shop/",
  achievements: [
    "Built a fully responsive marketing landing page using React and Tailwind CSS",
    "Implemented feature sections, pricing toggle, testimonials, and CTA blocks to drive conversions",
    "Optimized for SEO and performance across mobile, tablet, and desktop devices"
  ]
},

  {
    id: 2,
    title: "Room Buddy",
    description: "A platform that helps users find compatible roommates and available rooms based on their preferences, budget, and location.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=225&fit=crop",
    tags: ["Next.js", "Tailwind CSS", "MongoDB", "WebSockets"],
    github: "https://github.com/parthy018/roomBuddy",
    live: "https://room-buddy-five.vercel.app/",
    achievements: [
      "Re-architected the app using React.js, reducing load times by 60%",
      "Developed real-time room listings and roommate matching features",
      "Launched the platform with React.js and Tailwind CSS, boosting performance by 25%"
    ]
  },
  {
    id: 1,
    title: "SVB Patel School Website",
    description: "An informative and responsive school website for SVB Patel School with sections for news, events, admissions, and more.",
    image: "https://www.svbpatelschool.com/assets/new_circularlogo-D90vp3q1.png", // replace with actual hero/banner image from the site
    tags: ["Next.js", "Tailwind CSS", "SEO", "Responsive Design"],
    github: "", // optional if you didn't make code public
    live: "https://www.svbpatelschool.com/",
    achievements: [
      "Built a fully responsive, production-ready website for a real client",
      "Used modern frontend stack (Next.js, Tailwind CSS) to optimize load times and user experience",
      "Integrated admission form, school info, and news section to enhance parent engagement"
    ]
  },
  
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
