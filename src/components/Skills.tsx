import { Card } from "@/components/ui/card";
import { Code2, Database, Settings } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
      gradient: "from-primary to-primary/50"
    },
    {
      icon: Database,
      title: "Backend",
      skills: ["Java", "Python", "PHP"],
      gradient: "from-secondary to-secondary/50"
    },
    {
      icon: Settings,
      title: "Others",
      skills: ["Git", "C", "Problem Solving", "Algorithms"],
      gradient: "from-primary to-secondary"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-8 bg-card border-border card-glow hover:border-primary transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`mb-6 p-4 rounded-xl bg-gradient-to-br ${category.gradient} w-fit`}>
                <category.icon className="h-8 w-8 text-background" />
              </div>
              
              <h3 className="text-2xl font-bold mb-6">{category.title}</h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex items-center gap-3 group"
                  >
                    <div className="h-2 w-2 rounded-full bg-primary group-hover:scale-125 transition-transform" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
