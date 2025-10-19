import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import ThemeToggle from "@/components/ThemeToggle";
import Loader from "@/components/Loader";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Loader />
      <ThemeToggle />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Mohamed Shaifudeen. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
