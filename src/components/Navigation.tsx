import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Volunteer", href: "#volunteer" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-background/70 backdrop-blur-xl border-b border-primary/20 shadow-lg shadow-primary/5"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="relative group"
            >
              <span className="text-2xl font-bold gradient-text animate-glow tracking-wider hover:scale-110 transition-transform duration-300 inline-block">
                MDSHAIF
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2 bg-background/50 backdrop-blur-sm rounded-full px-2 py-2 border border-border/50">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 group ${
                    activeSection === item.href.substring(1)
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {activeSection === item.href.substring(1) && (
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary/80 animate-pulse" />
                  )}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden relative group hover:bg-primary/10 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-primary transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="h-6 w-6 text-primary transition-transform duration-300" />
              )}
              <div className="absolute inset-0 rounded-lg bg-primary/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-30 md:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ top: "80px" }}
      >
        <div className="h-full bg-background/95 backdrop-blur-xl border-t border-primary/20">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col gap-3">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`relative px-6 py-4 text-lg font-medium rounded-xl transition-all duration-300 transform hover:scale-105 ${
                    activeSection === item.href.substring(1)
                      ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/30"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50 border border-border/50"
                  }`}
                  style={{
                    animation: isMobileMenuOpen
                      ? `fade-in 0.3s ease-out ${index * 0.05}s both`
                      : "none",
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
