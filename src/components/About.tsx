
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  "JavaScript", "TypeScript", "React", "Node.js", "Python",
  "PostgreSQL", "MongoDB", "AWS", "Docker", "Git",
  "Next.js", "Tailwind CSS", "GraphQL", "REST APIs"
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground">
              Passionate software engineer on a continuous learning journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Profile Image */}
            <div className="md:col-span-1 text-center">
              <div className="w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full border-4 border-primary/20">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Alex Johnson</h3>
              <p className="text-muted-foreground">Full Stack Developer</p>
            </div>

            {/* Bio and Skills */}
            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-4">My Story</h4>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Hi! I'm Alex, a software engineer with over 5 years of experience building 
                      web applications and solving complex problems. My journey started with a 
                      curious mind and a simple "Hello, World!" program.
                    </p>
                    <p>
                      I specialize in full-stack development, with a passion for creating 
                      user-friendly interfaces and robust backend systems. I love sharing 
                      knowledge and documenting my learning process through this blog.
                    </p>
                    <p>
                      When I'm not coding, you'll find me exploring new technologies, 
                      contributing to open source projects, or enjoying a good cup of coffee 
                      while reading about the latest in software development.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-4">Skills & Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map(skill => (
                      <Badge key={skill} variant="outline" className="px-3 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
