import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Python For Machine Learning",
      provider: "Great Learning",
      icon: "🐍"
    },
    {
      title: "Natural Language Processing",
      provider: "NPTEL",
      icon: "🧠"
    },
    {
      title: "Programming in Python",
      provider: "Swayam",
      icon: "💻"
    },
    {
      title: "Foundations of CyberSecurity",
      provider: "Google",
      icon: "🔒"
    },
    {
      title: "Foundations of Prompt Engineering",
      provider: "AWS",
      icon: "🤖"
    },
    {
      title: "Problem Solving Basic",
      provider: "HackerRank",
      icon: "🎯"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border card-glow hover:border-primary transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{cert.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Award className="h-4 w-4 text-primary" />
                    <span>{cert.provider}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
