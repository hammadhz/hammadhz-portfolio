import { experience } from "@/data/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => (
  <section
    id="experience"
    className="py-16 md:py-20 px-4 max-w-6xl mx-auto bg-background"
  >
    <div className="animate-fade-in-up">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
          Professional Experience
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          My journey in software development, building amazing digital
          experiences
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 transform md:-translate-x-0.5"></div>

        <div className="space-y-8 md:space-y-12">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="relative animate-fade-in-up"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationFillMode: "both",
              }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full border-4 border-background transform md:-translate-x-1.5 z-10"></div>

              {/* Experience Card */}
              <div
                className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-8" : "md:ml-auto md:pl-8"
                }`}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-border/50 hover:border-primary/20">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{exp.duration}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {index === 0 ? "Current" : "Previous"}
                      </Badge>
                    </div>

                    <CardTitle className="text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                      {exp.role}
                    </CardTitle>

                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Key Achievements */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies Used */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">
                        Technologies & Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="text-xs hover:bg-primary/10 hover:border-primary/30 transition-colors duration-200"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
