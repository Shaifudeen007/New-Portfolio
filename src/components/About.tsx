import { Code2, Lightbulb, Shield, Cpu, Github, Linkedin, Mail, MapPin, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import profileImage from "@/assets/profile.jpg";

const About = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  const navItems = [
    { id: "introduction", label: "Introduction" },
    { id: "education", label: "Education" },
    { id: "highlights", label: "Highlights" },
    { id: "technical-skills", label: "Technical Skills" },
  ];

  const skills = {
    Frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    Backend: ["Java", "Python", "PHP"],
    Others: ["Git", "C", "Problem Solving", "Algorithms"],
  };

  const education = [
    {
      institution: "E.G.S. Pillay Engineering College",
      degree: "B.E. Computer Science Engineering",
      period: "2022 - 2026",
      score: "83%",
    },
    {
      institution: "Government Higher Secondary School",
      degree: "Higher Secondary (12th)",
      period: "2022",
      score: "82%",
    },
    {
      institution: "St. Jude's Matric Higher Secondary School",
      degree: "Secondary (10th)",
      period: "2020",
      score: "88%",
    },
  ];

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

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="about" className="py-20 px-4 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-[300px_1fr] gap-12">
          {/* Left Sidebar */}
          <div className="lg:sticky lg:top-24 lg:self-start space-y-8">
            {/* Profile Card */}
            <div className="text-center space-y-4">
              <div className="relative mx-auto w-48 h-48">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-20 blur-xl animate-pulse" />
                <img
                  src={profileImage}
                  alt="MD Shaif"
                  className="relative w-48 h-48 rounded-full object-cover object-top border-4 border-primary/20 shadow-lg"
                />
              </div>
              
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">India</span>
              </div>
              
              <div className="flex justify-center gap-2">
                <Badge variant="secondary" className="text-xs">English</Badge>
                <Badge variant="secondary" className="text-xs">Tamil</Badge>
              </div>
            </div>

            {/* Sticky Navigation */}
            <nav className="hidden lg:block space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-3 group ${
                    activeSection === item.id
                      ? "bg-primary/10 text-primary border-l-2 border-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  <span className={`w-6 h-[2px] transition-all duration-300 ${
                    activeSection === item.id ? "bg-primary" : "bg-muted-foreground/30 group-hover:bg-muted-foreground"
                  }`} />
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="space-y-16">
            {/* Introduction Section */}
            <div id="introduction" className="space-y-6 scroll-mt-24">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  MD <span className="gradient-text">Shaif</span>
                </h1>
                <p className="text-xl md:text-2xl text-primary/80 font-medium">
                  Computer Science Engineering Student
                </p>
                
                {/* Social Links */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="https://github.com/mdshaif"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted hover:bg-muted/80 transition-colors text-sm"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/mdshaif"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted hover:bg-muted/80 transition-colors text-sm"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                  <a
                    href="mailto:mdshaif@example.com"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted hover:bg-muted/80 transition-colors text-sm"
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                </div>
              </div>

              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm a final-year <span className="text-foreground font-semibold">Computer Science Engineering student</span> at E.G.S. Pillay Engineering College, passionate about Java development, artificial intelligence, cybersecurity, and problem solving.
                </p>
                <p>
                  I enjoy building scalable, full-stack applications using technologies like <span className="text-primary font-semibold">React</span>, <span className="text-foreground font-semibold">Java</span>, and <span className="text-primary font-semibold">Tailwind CSS</span>, always aiming for clean design and seamless user experience.
                </p>
                <p>
                  Currently, I'm working on an <span className="text-primary font-semibold">AI-Driven Automated Penetration Testing Framework</span>, combining intelligent automation with system security to enhance cybersecurity testing.
                </p>
                <p>
                  I'm a dedicated and curious learner, always exploring new technologies and striving to build efficient, secure, and user-friendly solutions. I'm actively seeking <span className="text-foreground font-semibold">internship or full-time opportunities</span> in software development where I can grow, contribute, and make a meaningful impact.
                </p>
              </div>
            </div>

            {/* Education Section */}
            <div id="education" className="space-y-8 scroll-mt-24">
              <h2 className="text-3xl font-bold">Education</h2>
              
              <div className="space-y-4">
                {education.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
                        <h3 className="text-lg font-semibold">{item.institution}</h3>
                        <Badge variant="secondary" className="w-fit text-xs font-medium">
                          {item.score}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{item.degree}</p>
                      <p className="text-sm text-muted-foreground/70 mt-1">{item.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights Section */}
            <div id="highlights" className="space-y-8 scroll-mt-24">
              <h2 className="text-3xl font-bold">Highlights</h2>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <Card 
                    key={index} 
                    className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 group"
                  >
                    <div className="mb-4 p-3 rounded-xl bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Technical Skills Section */}
            <div id="technical-skills" className="space-y-8 scroll-mt-24">
              <h2 className="text-3xl font-bold">Technical Skills</h2>
              
              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category} className="space-y-3">
                    <h3 className="text-lg font-semibold text-muted-foreground">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 rounded-full bg-card border border-border/50 text-sm font-medium hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
