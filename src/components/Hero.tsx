import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <p className="text-primary text-lg font-medium tracking-wider uppercase">
              Hi, I'm
            </p>
            <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-4">
              Mohamed Shaifudeen
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A passionate Computer Science student specializing in{" "}
              <span className="text-primary font-semibold">full-stack web development</span>,{" "}
              <span className="text-secondary font-semibold">Java programming</span>, and{" "}
              <span className="text-primary font-semibold">AI-driven projects</span>.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center items-center pt-4">
            <Button variant="default" size="lg" className="group animate-glow-pulse">
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download CV
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Mail className="h-5 w-5" />
              Get In Touch
            </Button>
          </div>

          <div className="flex gap-4 justify-center pt-8">
            <a 
              href="https://github.com/Shaifudeen007" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 card-glow"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 card-glow"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:shaifudeen@example.com"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 card-glow"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
