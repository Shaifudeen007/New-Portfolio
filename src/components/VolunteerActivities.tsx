import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Trophy } from "lucide-react";

const VolunteerActivities = () => {
  const activities = [
    {
      icon: Users,
      title: "Vice President",
      organization: "College Student Council",
      description: "Served as Vice President, leading initiatives and managing student activities to enhance campus life."
    },
    {
      icon: Trophy,
      title: "Infxtron Symposium",
      organization: "Event Coordinator",
      description: "Successfully coordinated and completed the Infxtron Symposium, managing logistics and ensuring smooth execution."
    }
  ];

  return (
    <section id="volunteer" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          Volunteer Activities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <Card
                key={index}
                className="glass-card hover:scale-105 transition-all duration-300 border border-border/50"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{activity.title}</CardTitle>
                  </div>
                  <p className="text-sm text-primary font-medium">
                    {activity.organization}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{activity.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VolunteerActivities;
