import { GridBackground } from "@/components/ui/aceternity/grid-background";
import { Sparkles } from "@/components/ui/aceternity/sparkles";
import { CardSpotlight } from "@/components/ui/aceternity/card-spotlight";
import { motion } from "framer-motion";

const skills = [
  { name: "React.js", icon: "💻" },
  { name: "Next.js", icon: "⚡" },
  { name: "TypeScript", icon: "📘" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Redux", icon: "🔄" },
  { name: "Node.js", icon: "🖥️" },
  { name: "Express.js", icon: "🚀" },
  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },  // Updated to match PostgreSQL from MySQL
  { name: "REST APIs", icon: "🔌" },
  { name: "Git & GitHub", icon: "🐙" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁️" },
  { name: "CI/CD Pipelines", icon: "🔧" }, // Added CI/CD pipelines to reflect automation
  { name: "Agile/Scrum", icon: "📊" },
  { name: "Testing", icon: "🧪" },
  { name: "Vercel", icon: "🌐" },  // For deployment experience
  { name: "Netlify", icon: "🌍" },  // For deployment experience
  { name: "n8n", icon: "🤖" },  // Automation tool
  { name: "Vapi.ai", icon: "⚙️" },  // AI workflow automation tool
  { name: "Swagger", icon: "📜" },  // For API documentation
  { name: "Postman", icon: "📬" },  // For API testing
  { name: "Shadcn", icon: "🌱" },  // UI design with Shadcn
  { name: "Material-UI", icon: "🔲" }, // UI component library
  { name: "Bootstrap", icon: "📐" }, // Responsive design tool
  { name: "JavaScript (ES6+)", icon: "📦" }  // For front-end development with JS
];


const SkillPill = ({ name, icon }: { name: string; icon: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 px-4 py-3 rounded-full bg-muted/50 backdrop-blur-sm border border-muted-foreground/20 hover:border-primary/50 transition-all"
    >
      <span className="text-2xl">{icon}</span>
      <span className="font-medium">{name}</span>
    </motion.div>
  );
};

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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          </Sparkles>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tools I use to build amazing experiences
          </p>
        </div>

        <CardSpotlight className="p-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.05 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {skills.map((skill, idx) => (
              <SkillPill key={idx} name={skill.name} icon={skill.icon} />
            ))}
          </motion.div>
        </CardSpotlight>
      </div>
    </section>
  );
};