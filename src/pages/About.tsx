
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CardSpotlight } from "@/components/ui/aceternity/card-spotlight";
import { GridBackground } from "@/components/ui/aceternity/grid-background";
import { Sparkles } from "@/components/ui/aceternity/sparkles";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const skills = [
  "JavaScript", "TypeScript", "React", "Node.js", "Express.js",
  "Next.js", "MongoDB", "MySQL", "Redux Toolkit", "REST APIs",
  "Git/GitHub", "Tailwind CSS", "HTML/CSS", "Agile/Scrum"
];

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Shiavnski Technologies",
    period: "May 2024 - Present",
    location: "Indore",
    achievements: [
      "Worked in an Agile environment, improving team collaboration and productivity",
      "Conducted code reviews, sprint planning, and testing, enhancing application stability by 20%",
      "Created reusable custom hooks and context providers with TypeScript",
      "Developed Node.js/Express APIs with validated requests and error handling using TypeScript",
      "Built secure and type-safe API routes in Next.js, fully covered with TypeScript"
    ]
  }
];

const projects = [
  {
    title: "Survey Insights Platform",
    period: "Jan 2024 - Apr 2024",
    description: "Led the development of a SaaS survey application using React.js and Redux Toolkit.",
    achievements: [
      "Improved UI/UX responsiveness by 40%",
      "Optimized Redux Toolkit state management, reducing data complexity by 35%",
      "Added dynamic routing using React Router, reducing page load time by 30%",
      "Enhanced the admin panel for real-time data updates, cutting manual work by 50%"
    ],
    technologies: ["React.js", "Redux Toolkit", "React Router", "Node.js", "Express.js"]
  },
  {
    title: "Room Buddy",
    period: "Oct 2023 - Dec 2023",
    description: "Re-architected a roommate matching application using React.js and Tailwind CSS.",
    achievements: [
      "Re-architected the app using React.js, reducing load times by 60%",
      "Developed real-time room listings and roommate matching features",
      "Launched the platform with React.js and Tailwind CSS, boosting performance by 25%"
    ],
    technologies: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"]
  }
];

const education = [
  {
    degree: "B. Tech in Computer Science Engineering",
    institution: "Medi-Caps University",
    period: "Nov 2020 - June 2024",
    location: "India"
  }
];

const About = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          {/* About Hero */}
          <section className="relative py-20">
            <GridBackground 
              className="absolute inset-0" 
              dotColor="rgba(var(--primary-rgb), 0.15)"
              dotSpacing={24}
              dotSize={1}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background to-background"></div>
            </GridBackground>
            
            <div className="container px-4 relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-64 h-64 rounded-full border-4 border-primary/20 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face" 
                      alt="Parth Yadav"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <Sparkles>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Parth Yadav</h1>
                  </Sparkles>
                  <h2 className="text-2xl text-primary mb-6">MERN Stack Developer</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Passionate MERN Stack Developer with over 1 year of experience in JavaScript 
                    and web development. Proficient in MongoDB, Express.js, React, and Node.js, 
                    with a strong focus on creating maintainable, efficient, and user-friendly 
                    web applications.
                  </p>
                  <div className="flex gap-4">
                    <Button size="lg" asChild>
                      <a href="mailto:parthyadav141@gmail.com" className="flex items-center gap-2">
                        <Mail size={18} />
                        Contact Me
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="https://github.com/parthy018" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Github size={18} />
                        GitHub
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="https://linkedin.com/in/parth-yadav-54558a175" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Linkedin size={18} />
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="py-16 bg-muted/30">
            <div className="container px-4">
              <h2 className="text-3xl font-bold mb-10 text-center">Skills & Technologies</h2>
              <CardSpotlight className="max-w-4xl mx-auto">
                <div className="flex flex-wrap gap-3 p-6">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="px-4 py-2 text-base">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardSpotlight>
            </div>
          </section>

          {/* Work Experience Timeline */}
          <section className="py-16">
            <div className="container px-4">
              <h2 className="text-3xl font-bold mb-10 text-center">Professional Journey</h2>
              
              <div className="relative max-w-4xl mx-auto">
                {/* Timeline Line */}
                <div className="absolute left-0 md:left-1/2 top-0 h-full w-0.5 bg-border md:transform md:-translate-x-px"></div>
                
                {/* Work Experience */}
                <div className="space-y-16 relative">
                  {experiences.map((exp, index) => (
                    <div key={index} className="relative">
                      {/* Timeline Dot */}
                      <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background"></div>
                      <div className="md:hidden absolute left-0 top-0 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background"></div>
                      
                      {/* Content */}
                      <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'} pl-8 md:pl-0 relative`}>
                        <CardSpotlight className="overflow-hidden">
                          <div className="p-6">
                            <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                            <p className="text-primary font-medium mb-2">{exp.company}</p>
                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                              <span className="flex items-center gap-1">
                                <span className="w-1 h-1 rounded-full bg-primary"></span>
                                {exp.period}
                              </span>
                              <span className="flex items-center gap-1">
                                <span className="w-1 h-1 rounded-full bg-primary"></span>
                                {exp.location}
                              </span>
                            </div>
                            <div className="space-y-2">
                              {exp.achievements.map((achievement, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                                  <p className="text-muted-foreground">{achievement}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </CardSpotlight>
                      </div>
                    </div>
                  ))}

                  {/* Projects Section */}
                  <h3 className="text-2xl font-bold mb-8 text-center">Project Experience</h3>
                  
                  {projects.map((project, index) => (
                    <div key={`project-${index}`} className="relative">
                      {/* Timeline Dot */}
                      <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-primary/70 border-4 border-background"></div>
                      <div className="md:hidden absolute left-0 top-0 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary/70 border-4 border-background"></div>
                      
                      {/* Content */}
                      <div className={`md:w-1/2 ${(index + experiences.length) % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'} pl-8 md:pl-0 relative`}>
                        <CardSpotlight className="overflow-hidden">
                          <div className="p-6">
                            <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                            <p className="text-primary font-medium mb-2">{project.period}</p>
                            <p className="text-muted-foreground mb-4">{project.description}</p>
                            
                            <div className="space-y-2 mb-4">
                              {project.achievements.map((achievement, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                                  <p className="text-muted-foreground">{achievement}</p>
                                </div>
                              ))}
                            </div>
                            
                            <div className="flex flex-wrap gap-2 mt-4">
                              {project.technologies.map((tech, i) => (
                                <Badge key={i} variant="secondary">{tech}</Badge>
                              ))}
                            </div>
                          </div>
                        </CardSpotlight>
                      </div>
                    </div>
                  ))}

                  {/* Education */}
                  <h3 className="text-2xl font-bold mb-8 text-center">Education</h3>
                  
                  {education.map((edu, index) => (
                    <div key={`edu-${index}`} className="relative">
                      {/* Timeline Dot */}
                      <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-primary/50 border-4 border-background"></div>
                      <div className="md:hidden absolute left-0 top-0 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary/50 border-4 border-background"></div>
                      
                      {/* Content */}
                      <div className={`md:w-1/2 ${(index + experiences.length + projects.length) % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'} pl-8 md:pl-0 relative`}>
                        <CardSpotlight className="overflow-hidden">
                          <div className="p-6">
                            <h3 className="text-2xl font-bold mb-1">{edu.degree}</h3>
                            <p className="text-primary font-medium mb-2">{edu.institution}</p>
                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <span className="w-1 h-1 rounded-full bg-primary"></span>
                                {edu.period}
                              </span>
                              <span className="flex items-center gap-1">
                                <span className="w-1 h-1 rounded-full bg-primary"></span>
                                {edu.location}
                              </span>
                            </div>
                          </div>
                        </CardSpotlight>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default About;
