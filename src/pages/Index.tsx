import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import VolunteerActivities from "@/components/VolunteerActivities";
import Contact from "@/components/Contact";
import ThemeToggle from "@/components/ThemeToggle";
import Loader from "@/components/Loader";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Loader />
      <ThemeToggle />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <VolunteerActivities />
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
