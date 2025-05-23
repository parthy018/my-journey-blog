
import { GridBackground } from "@/components/ui/aceternity/grid-background";
import { Sparkles } from "@/components/ui/aceternity/sparkles";
import { CardSpotlight } from "@/components/ui/aceternity/card-spotlight";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: "💻", level: 90 },
      { name: "Next.js", icon: "⚡", level: 85 },
      { name: "TypeScript", icon: "📘", level: 80 },
      { name: "Tailwind CSS", icon: "🎨", level: 95 },
      { name: "Redux", icon: "🔄", level: 85 }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "🖥️", level: 85 },
      { name: "Express.js", icon: "🚀", level: 80 },
      { name: "MongoDB", icon: "🍃", level: 85 },
      { name: "MySQL", icon: "🐬", level: 75 },
      { name: "REST APIs", icon: "🔌", level: 90 }
    ]
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git & GitHub", icon: "🐙", level: 90 },
      { name: "Docker", icon: "🐳", level: 70 },
      { name: "AWS", icon: "☁️", level: 65 },
      { name: "Agile/Scrum", icon: "📊", level: 80 },
      { name: "Testing", icon: "🧪", level: 75 }
    ]
  }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      <GridBackground 
        className="absolute inset-0" 
        dotColor="rgba(var(--primary-rgb), 0.15)"
        dotSpacing={24}
        dotSize={1}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background to-background"></div>
      </GridBackground>

      <div className="container px-4 relative z-10">
        <div className="text-center mb-16">
          <Sparkles>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          </Sparkles>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My expertise and technologies I work with
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <CardSpotlight key={index} className="overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-6 text-center">{skillGroup.category}</h3>
                <div className="space-y-6">
                  {skillGroup.items.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardSpotlight>
          ))}
        </div>
      </div>
    </section>
  );
};
