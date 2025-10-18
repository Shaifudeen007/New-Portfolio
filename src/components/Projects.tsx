import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Shield, Camera, Leaf } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: Shield,
      title: "AI Driven Penetration Testing",
      description: "Smart automation of security audits using AI",
      domain: "Security",
      type: "Final Year Project",
      link: "https://github.com/Shaifudeen007/Automated-penetration-testing-framework",
      gradient: "from-primary to-primary/50"
    },
    {
      icon: Camera,
      title: "Mobile Detection System",
      description: "Real-time monitoring using YOLOv8 and camera feeds",
      domain: "Surveillance",
      type: "Mini Project",
      link: "https://github.com/Shaifudeen007/Mini_Project_Mobile_Detection_System",
      gradient: "from-secondary to-secondary/50"
    },
    {
      icon: Leaf,
      title: "Green Gourmet Website",
      description: "Promotes healthy eating through delicious recipe ideas",
      domain: "Front-end",
      type: "Project",
      link: "https://github.com/Shaifudeen007/Green-Gourmet-_Website",
      gradient: "from-primary to-secondary"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border card-glow hover:border-primary transition-all duration-300 animate-fade-in flex flex-col"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`mb-6 p-4 rounded-xl bg-gradient-to-br ${project.gradient} w-fit`}>
                <project.icon className="h-8 w-8 text-background" />
              </div>

              <div className="mb-3">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {project.type}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              
              <p className="text-muted-foreground mb-4 flex-grow">
                {project.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Domain:</span> {project.domain}
                </span>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="gap-2 hover:text-primary"
                  asChild
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
