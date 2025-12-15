import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Internships = () => {
  const internships = [
    {
      company: "Ratgle Technologies",
      role: "Web Developer Intern",
      duration: "15 Days",
      location: "Trichy, India",
      description: "Completed a 15-day internship gaining hands-on industry experience and practical technical skills in web development.",
      skills: ["HTML", "CSS", "JavaScript", "Web Development"],
      link: "#"
    },
    {
      company: "Google for Developers | AICTE & EduSkills",
      role: "AI-ML Virtual Intern",
      duration: "10 Weeks",
      location: "Virtual",
      description: "Successfully completed a 10-week AI-ML Virtual Internship supported by Google for Developers under AICTE & EduSkills.",
      skills: ["Machine Learning", "Artificial Intelligence", "Python", "Data Science"],
      link: "#"
    },
    {
      company: "Zscaler | AICTE & EduSkills",
      role: "Networking Virtual Intern",
      duration: "10 Weeks",
      location: "Virtual",
      description: "Completed a 10-week Networking Virtual Internship supported by Zscaler through AICTE & EduSkills.",
      skills: ["Networking", "Cybersecurity", "Cloud Security", "Zero Trust"],
      link: "#"
    },
    {
      company: "EduSkills Academy",
      role: "Python Full Stack Developer Intern",
      duration: "Virtual Internship",
      location: "Virtual",
      description: "Successfully finished a Python Full Stack Developer Virtual Internship under EduSkills Academy, gaining full-stack development skills.",
      skills: ["Python", "Django", "Flask", "Full Stack Development"],
      link: "#"
    },
    {
      company: "Google for Developers | AICTE & EduSkills",
      role: "Android Developer Virtual Intern",
      duration: "10 Weeks",
      location: "Virtual",
      description: "Completed a 10-week Android Developer Virtual Internship supported by Google for Developers under AICTE & EduSkills.",
      skills: ["Android", "Kotlin", "Java", "Mobile Development"],
      link: "#"
    }
  ];

  return (
    <section id="internships" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Internships</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional experience and industry exposure
          </p>
        </div>

        <div className="space-y-6">
          {internships.map((internship, index) => (
            <Card 
              key={index} 
              className="group hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Briefcase className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                          {internship.role}
                        </h3>
                        <p className="text-primary font-medium">{internship.company}</p>
                      </div>
                      {internship.link !== "#" && (
                        <a 
                          href={internship.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {internship.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {internship.location}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground">
                      {internship.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 pt-2">
                      {internship.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary"
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
