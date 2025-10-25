import { skills } from "@/data/data";
import { Card } from "@/components/ui/card";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaPalette,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { IconType } from "react-icons";

const Skills = () => {
  const getIcon = (iconName: string) => {
    const iconMap: { [key: string]: IconType } = {
      React: FaReact,
      Nextjs: SiNextdotjs,
      Redux: SiRedux,
      TypeScript: SiTypescript,
      Tailwind: SiTailwindcss,
      Nodejs: FaNodeJs,
      Database: FaDatabase,
      Server: FaServer,
      Palette: FaPalette,
    };
    return iconMap[iconName] || FaPalette;
  };

  return (
    <section
      id="skills"
      className="py-16 md:py-20 px-4 text-center max-w-6xl mx-auto bg-muted/30"
    >
      <div className="animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
          Skills & Technologies
        </h2>
        <p className="text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          Technologies and tools I work with to build amazing digital
          experiences
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {skills.map((skill, index) => {
            const IconComponent = getIcon(skill.icon);
            return (
              <Card
                key={skill.name}
                className={`
                  group relative py-2 overflow-hidden border-0 shadow-sm hover:shadow-lg
                  transition-all duration-300 ease-out cursor-pointer
                  hover:scale-105 hover:-translate-y-1
                  ${skill.bgColor}
                  animate-fade-in-up
                `}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "both",
                }}
              >
                <div className="p-4 md:p-6 text-center">
                  <div className="mb-3 flex justify-center">
                    <div
                      className={`
                      p-3 rounded-xl transition-all duration-300
                      group-hover:scale-110 group-hover:rotate-3
                      ${skill.bgColor}
                    `}
                    >
                      <IconComponent
                        className={`w-6 h-6 md:w-8 md:h-8 ${skill.color} transition-colors duration-300`}
                      />
                    </div>
                  </div>

                  <h3
                    className={`
                    font-semibold text-sm md:text-base transition-colors duration-300
                    group-hover:text-foreground
                    ${skill.color}
                  `}
                  >
                    {skill.name}
                  </h3>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm md:text-base">
            Always learning and exploring new technologies
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
