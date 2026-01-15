import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Code2, Trophy } from "lucide-react";

const CodingProfiles = () => {
  const profiles = [
    {
      platform: "HackerRank",
      icon: Trophy,
      username: "Mdshaif",
      link: "https://www.hackerrank.com/profile/Mdshaif",
      color: "from-green-500 to-emerald-600",
      skills: [
        { name: "Problem Solving", stars: 5 },
        { name: "Python", stars: 4 },
        { name: "SQL", stars: 4 },
      ],
    },
    {
      platform: "Skillrack",
      icon: Code2,
      username: "Mdshaif",
      link: "http://www.skillrack.com/faces/resume.xhtml?id=444465&key=8df518e900bc70569f665d40ee6d0e76e73ff690",
      color: "from-blue-500 to-cyan-600",
      stats: [
        { label: "Problems Solved", value: "100+" },
        { label: "Points Earned", value: "5000+" },
      ],
    },
    {
  platform: "LeetCode",
  icon: Code2,
  username: "Mohamedshaifudeen",
  link: "https://leetcode.com/u/Mohamedshaifudeen/",
  color: "from-orange-500 to-red-600",
  stats: [
    { label: "Problems Solved", value: "42" },
    { label: "Languages Used", value: "Java + others" },
  ],
}

  ];

  return (
    <section id="coding-profiles" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Coding Profiles</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Check out my competitive programming journey and skill badges
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {profiles.map((profile, index) => {
            const Icon = profile.icon;
            return (
              <a
                key={index}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <Card className="h-full overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  {/* Header with gradient */}
                  <div className={`h-2 bg-gradient-to-r ${profile.color}`} />
                  
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${profile.color} shadow-lg`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{profile.platform}</h3>
                          <p className="text-sm text-muted-foreground">@{profile.username}</p>
                        </div>
                      </div>
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>

                    {/* HackerRank Skills */}
                    {profile.skills && (
                      <div className="space-y-3">
                        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Skill Badges</p>
                        {profile.skills.map((skill, i) => (
                          <div key={i} className="flex items-center justify-between">
                            <span className="text-sm">{skill.name}</span>
                            <div className="flex gap-1">
                              {[...Array(5)].map((_, starIndex) => (
                                <div
                                  key={starIndex}
                                  className={`w-4 h-4 rounded-full ${
                                    starIndex < skill.stars
                                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 shadow-sm'
                                      : 'bg-muted'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* LeetCode Stats */}
                    {profile.stats && (
                      <div className="space-y-3">
                        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Statistics</p>
                        <div className="grid grid-cols-2 gap-4">
                          {profile.stats.map((stat, i) => (
                            <div key={i} className="text-center p-3 rounded-lg bg-muted/50">
                              <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                              <p className="text-xs text-muted-foreground">{stat.label}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* View Profile CTA */}
                    <div className="mt-6 pt-4 border-t border-border/50">
                      <span className="text-sm text-primary font-medium group-hover:underline">
                        View Full Profile →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
