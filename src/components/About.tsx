import { Code2, Lightbulb, Shield, Cpu } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Building scalable applications with React, Java, and modern technologies"
    },
    {
      icon: Cpu,
      title: "AI & Machine Learning",
      description: "Working on AI-driven projects including penetration testing frameworks"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Passionate about system security and automated testing solutions"
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Active on HackerRank and Skillrack, tackling algorithmic challenges"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-slide-in">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a final-year <span className="text-foreground font-semibold">Computer Science Engineering student</span> at E.G.S. Pillay Engineering College, passionate about Java development, artificial intelligence, cybersecurity, and problem solving.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I enjoy building scalable, full-stack applications using technologies like <span className="text-primary font-semibold">React</span>, <span className="text-secondary font-semibold">Java</span>, and <span className="text-primary font-semibold">Tailwind CSS</span>, always aiming for clean design and seamless user experience.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently, I'm working on an <span className="text-primary font-semibold">AI-Driven Automated Penetration Testing Framework</span>, combining intelligent automation with system security to enhance cybersecurity testing.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a dedicated and curious learner, always exploring new technologies and striving to build efficient, secure, and user-friendly solutions. I'm actively seeking <span className="text-foreground font-semibold">internship or full-time opportunities</span> in software development where I can grow, contribute, and make a meaningful impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card border-border card-glow hover:border-primary transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
