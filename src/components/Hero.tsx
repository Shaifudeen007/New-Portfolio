import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary/25 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s', animationDuration: '8s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s', animationDuration: '10s' }} />
        <div className="absolute top-3/4 left-1/3 w-48 h-48 bg-primary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s', animationDuration: '7s' }} />
      </div>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
      </div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div 
          className="absolute inset-0 animate-pulse" 
          style={{
            backgroundImage: 'radial-gradient(circle, hsl(var(--primary) / 0.15) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }} 
        />
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
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                <span className="text-foreground">Mohamed </span>
                <span className="text-primary animate-text-glow" style={{ 
                  textShadow: '0 0 20px hsl(var(--primary) / 0.5), 0 0 40px hsl(var(--primary) / 0.3), 0 0 60px hsl(var(--primary) / 0.2)'
                }}>Shaifudeen</span>
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
            <div className="relative group">
              {/* Multi-layered glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-full blur-3xl opacity-60 animate-glow" />
              <div className="absolute inset-0 bg-gradient-to-tl from-secondary to-primary rounded-full blur-2xl opacity-40 animate-pulse" />
              
              <div className="relative">
                <img 
                  src={profileImg} 
                  alt="Mohamed Shaifudeen Profile" 
                  className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-primary/40 shadow-2xl group-hover:scale-105 group-hover:border-primary/60 transition-all duration-500"
                  style={{ 
                    boxShadow: '0 0 60px hsl(var(--primary) / 0.4), 0 0 100px hsl(var(--secondary) / 0.2)'
                  }}
                />
                
                {/* Floating decorative orbs */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary to-transparent rounded-full blur-2xl opacity-70 animate-float" />
                <div className="absolute -top-8 -left-8 w-40 h-40 bg-gradient-to-br from-secondary to-transparent rounded-full blur-2xl opacity-60 animate-float" style={{ animationDelay: '1.5s', animationDuration: '7s' }} />
                <div className="absolute top-1/2 -right-12 w-24 h-24 bg-gradient-to-br from-accent to-transparent rounded-full blur-xl opacity-50 animate-float" style={{ animationDelay: '3s', animationDuration: '9s' }} />
                
                {/* Rotating ring effect */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-spin" style={{ animationDuration: '20s' }} />
                <div className="absolute inset-4 rounded-full border border-secondary/20 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
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
