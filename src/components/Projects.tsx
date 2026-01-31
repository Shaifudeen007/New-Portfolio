import { ExternalLink, ArrowRight } from "lucide-react";
import smartlockerImage from "@/assets/smartlocker.png";
import ranjithPortfolioImg from "@/assets/image.png";


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
      image: smartlockerImage
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
      title: "Root & Rise",
      description: "Promotes healthy eating through delicious recipe ideas. A beautifully designed frontend application showcasing sustainable and nutritious food choices.",
      domain: "Front-end",
      type: "Project",
      link: "https://root-and-rise.vercel.app/",
      image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=800&q=80"
    },
    {
  title: "BS Ranjith Portfolio",
  description: "A professional portfolio website developed for a freelance client to showcase profile, skills, projects, and achievements. Focused on clean UI, smooth navigation, and strong personal branding.",
  domain: "Front-end",
  type: "Freelance Project",
  link: "https://portfolio-ranjithbs.vercel.app/",
  image: ranjithPortfolioImg
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article 
              key={index}
              className="animate-fade-in group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                {/* Small Image */}
                <div className="relative overflow-hidden aspect-[16/10] bg-muted">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-background/90 backdrop-blur-sm rounded-full p-2">
                      <ExternalLink className="h-4 w-4 text-foreground" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider mb-2 block">
                    {project.type} • {project.domain}
                  </span>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {project.description}
                  </p>
                  <span className="inline-flex items-center text-sm text-primary gap-1.5">
                    View project
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
