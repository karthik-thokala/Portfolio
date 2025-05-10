import { Hero } from "@/components/ui/animated-hero";
import { Badge } from "@/components/ui/badge"; 
import { Download } from "lucide-react"; // Importing download icon from lucide-react (or use your preferred icon library)

const techStack = [
  { name: "HTML", color: "bg-orange-500" },
  { name: "CSS", color: "bg-blue-500" },
  { name: "JavaScript", color: "bg-yellow-500" },
  { name: "React", color: "bg-blue-400" },
  { name: "Next.js", color: "bg-black dark:bg-white text-white dark:text-black" },
  { name: "Node.js", color: "bg-green-500" },
  { name: "Express", color: "bg-gray-500" },
  { name: "MongoDB", color: "bg-green-600" },
];

const About = () => {
  return (
    <div id="about" className="block">
      <Hero />
      
      
      
      <div className="flex flex-wrap justify-center gap-3 mb-12 mt-[-3rem] px-4">
        {techStack.map((tech) => (
          <Badge
            key={tech.name}
            className={`${tech.color} text-white hover:scale-105 transition-transform`}
          >
            {tech.name}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default About;

