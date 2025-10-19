import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/profile.jpg";

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
      <div className="container mx-auto px-4 z-10 animate-fade-in">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6 text-left">
            <div className="space-y-3">
              <p className="text-primary text-sm font-medium tracking-wider uppercase animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                Hi, I'm
              </p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold gradient-text animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                Mohamed Shaifudeen
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                A passionate Computer Science student specializing in{" "}
                <span className="text-primary font-semibold">full-stack web development</span>,{" "}
                <span className="text-secondary font-semibold">Java programming</span>, and{" "}
                <span className="text-primary font-semibold">AI-driven projects</span>.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 items-center pt-4 animate-fade-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              <Button variant="default" size="lg" className="group animate-glow-pulse">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download CV
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Mail className="h-5 w-5" />
                Get In Touch
              </Button>
            </div>

            <div className="flex gap-4 pt-8 animate-fade-in opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
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

          {/* Right Side - Profile Image */}
          <div className="flex justify-center md:justify-end animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-3xl opacity-50 animate-pulse" />
              <div className="relative">
                <img 
                  src={profileImg} 
                  alt="Mohamed Shaifudeen Profile" 
                  className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-primary/30 shadow-2xl hover:scale-105 transition-transform duration-300"
                />
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-float" />
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
              </div>
            </div>
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
