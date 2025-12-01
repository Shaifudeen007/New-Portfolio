import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Driven Penetration Testing",
      description: "Smart automation of security audits using AI. A comprehensive framework that leverages machine learning to identify vulnerabilities and automate penetration testing workflows.",
      domain: "Security",
      type: "Final Year Project",
      link: "https://github.com/Shaifudeen007/Automated-penetration-testing-framework",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
    },
    {
      title: "Smart Storage Locker Management",
      description: "Full-stack web application for managing smart storage lockers with user registration, authentication, and role-based access control. Built with Django REST Framework and React with JWT authentication.",
      domain: "Full-Stack",
      type: "Project",
      link: "https://github.com/Shaifudeen007/smartlocker",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
    },
    {
      title: "Mobile Detection System",
      description: "Real-time monitoring using YOLOv8 and camera feeds. Advanced computer vision system for detecting and tracking mobile devices in restricted areas.",
      domain: "Surveillance",
      type: "Mini Project",
      link: "https://github.com/Shaifudeen007/Mini_Project_Mobile_Detection_System",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
    },
    {
      title: "Green Gourmet Website",
      description: "Promotes healthy eating through delicious recipe ideas. A beautifully designed frontend application showcasing sustainable and nutritious food choices.",
      domain: "Front-end",
      type: "Project",
      link: "https://github.com/Shaifudeen007/Green-Gourmet-_Website",
      image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=800&q=80"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <article 
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image Container */}
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 aspect-[16/9] mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-background/90 backdrop-blur-sm rounded-full p-3">
                      <ExternalLink className="h-5 w-5 text-foreground" />
                    </div>
                  </div>
                </div>
              </a>

              {/* Content */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider mb-2 block">
                    {project.type} • {project.domain}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold">{project.title}</h3>
                </div>
                
                <div className="flex-1 md:max-w-md">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-primary gap-2 group/btn"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View project
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Separator */}
              {index < projects.length - 1 && (
                <div className="mt-12 border-b border-border/50" />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
