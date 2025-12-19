import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Internships from "@/components/Internships";
import Certifications from "@/components/Certifications";
import VolunteerActivities from "@/components/VolunteerActivities";
import CodingProfiles from "@/components/CodingProfiles";
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
      <Projects />
      <Internships />
      <Certifications />
      <CodingProfiles />
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
