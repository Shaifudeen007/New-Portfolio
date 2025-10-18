import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/95 to-background" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'slide-in 20s linear infinite'
        }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <p className="text-primary text-lg font-medium tracking-wider uppercase animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              Hi, I'm
            </p>
            <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              Mohamed Shaifudeen
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              A passionate Computer Science student specializing in{" "}
              <span className="text-primary font-semibold animate-glow">full-stack web development</span>,{" "}
              <span className="text-secondary font-semibold animate-glow" style={{ animationDelay: '1s' }}>Java programming</span>, and{" "}
              <span className="text-primary font-semibold animate-glow" style={{ animationDelay: '2s' }}>AI-driven projects</span>.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center items-center pt-4 animate-fade-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <Button variant="default" size="lg" className="group animate-glow-pulse relative overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce relative z-10" />
              <span className="relative z-10">Download CV</span>
            </Button>
            <Button variant="outline" size="lg" className="gap-2 group relative overflow-hidden border-primary/50 hover:border-primary">
              <span className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Mail className="h-5 w-5 relative z-10 group-hover:scale-110 transition-transform" />
              <span className="relative z-10">Get In Touch</span>
            </Button>
          </div>

          <div className="flex gap-4 justify-center pt-8 animate-fade-in opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <a 
              href="https://github.com/Shaifudeen007" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 card-glow group relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              <Github className="h-6 w-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 card-glow group relative overflow-hidden"
              style={{ animationDelay: '0.1s' }}
            >
              <span className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              <Linkedin className="h-6 w-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            </a>
            <a 
              href="mailto:shaifudeen@example.com"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 card-glow group relative overflow-hidden"
              style={{ animationDelay: '0.2s' }}
            >
              <span className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              <Mail className="h-6 w-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
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
