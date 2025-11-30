import { ArrowRight, ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-secondary/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50 text-sm animate-fade-in">
          <span className="font-semibold text-foreground">CSE Student</span>
          <span className="text-muted-foreground">•</span>
          <span className="text-muted-foreground">Full-Stack Developer</span>
        </div>

        {/* Main Headline */}
        <h1 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-none animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          Mohamed Shaifudeen
        </h1>

        {/* Role/Title */}
        <p 
          className="text-xl md:text-2xl text-primary/80 font-medium animate-fade-in"
          style={{ animationDelay: "0.15s" }}
        >
          Full-Stack Developer & AI Enthusiast
        </p>

        {/* Subtitle */}
        <p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          A passionate Computer Science student at{" "}
          <span className="text-foreground font-semibold">E.G.S. Pillay Engineering College</span>
          , crafting full-stack applications and exploring AI-driven cybersecurity solutions.
        </p>

        {/* Profile Link Button */}
        <div 
          className="flex justify-center animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <button
            onClick={scrollToAbout}
            className="group flex items-center gap-3 px-5 py-3 rounded-full bg-card border border-border/50 hover:border-border hover:bg-muted/50 transition-all duration-300"
          >
            <img
              src={profileImg}
              alt="Mohamed Shaifudeen"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm font-medium">About – Mohamed Shaifudeen</span>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Social Links */}
        <div 
          className="flex justify-center gap-4 animate-fade-in"
          style={{ animationDelay: "0.35s" }}
        >
          <a
            href="https://github.com/Shaifudeen007"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50 hover:border-border hover:bg-muted/50 transition-all duration-300 text-sm"
          >
            <Github className="w-4 h-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/mdshaifudeen"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50 hover:border-border hover:bg-muted/50 transition-all duration-300 text-sm"
          >
            <Linkedin className="w-4 h-4" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            href="mailto:shaifudeen@example.com"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50 hover:border-border hover:bg-muted/50 transition-all duration-300 text-sm"
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">Email</span>
          </a>
        </div>
      </div>

      {/* Featured Project Preview */}
      <div 
        className="relative z-10 w-full max-w-5xl mx-auto mt-16 px-4 animate-fade-in"
        style={{ animationDelay: "0.4s" }}
      >
        <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-card">
          <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-secondary/20 flex items-center justify-center">
            <div className="text-center space-y-4 p-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Featured Project
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">AI-Driven Penetration Testing Framework</h3>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Combining intelligent automation with system security to enhance cybersecurity testing workflows.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
