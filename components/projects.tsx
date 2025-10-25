import { projects } from "@/data/data";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Code,
  Monitor,
  Database,
  TrendingUp,
} from "lucide-react";

const Projects = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Property Management":
        return <Monitor className="w-5 h-5" />;
      case "Financial Technology":
        return <TrendingUp className="w-5 h-5" />;
      case "Business Management":
        return <Database className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="projects"
      className="py-16 md:py-20 px-4 max-w-7xl mx-auto bg-muted/30"
    >
      <div className="animate-fade-in-up">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-world applications I&apos;ve built, showcasing my development
            skills and problem-solving abilities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.name}
              className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-border/50 hover:border-primary/20 overflow-hidden"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationFillMode: "both",
              }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      {getCategoryIcon(project.category)}
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {project.category}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant={
                      project.status === "Live" ? "default" : "secondary"
                    }
                    className="text-xs"
                  >
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm">
                    Key Features
                  </h4>
                  <ul className="space-y-1">
                    {project.features
                      .slice(0, 3)
                      .map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="text-xs text-muted-foreground flex items-start gap-2"
                        >
                          <span className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    {project.features.length > 3 && (
                      <li className="text-xs text-muted-foreground">
                        +{project.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs px-2 py-0.5 hover:bg-primary/10 hover:border-primary/30 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs px-2 py-0.5">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="pt-0">
                <Button
                  asChild
                  size="sm"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    View Project
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm md:text-base">
            All projects are built with modern technologies and best practices
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
