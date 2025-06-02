import { Hero } from "@/components/ui/animated-hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

type Tech = {
  name: string;
  color: string;
};

const techStack: Tech[] = [
  { name: "HTML", color: "bg-orange-500" },
  { name: "CSS", color: "bg-blue-500" },
  { name: "JavaScript", color: "bg-yellow-500" },
  { name: "React", color: "bg-blue-400" },
  { name: "ShadCN UI", color: "bg-purple-500" },
  { name: "Node.js", color: "bg-green-500" },
  { name: "Express", color: "bg-gray-500" },
  { name: "MongoDB", color: "bg-green-600" },
  { name: "Problem Solving", color: "bg-red-500" },
  { name: "Data Structures & Algorithms", color: "bg-indigo-600" },
  { name: "API Integration", color: "bg-teal-600" },
  { name: "Version Control (Git)", color: "bg-pink-500" },
  { name: "Responsive Design", color: "bg-lime-600" },
  { name: "Debugging", color: "bg-rose-500" },
  { name: "Clean Code Practices", color: "bg-sky-600" },
];

const chunkArray = (arr: Tech[], chunkSize: number): Tech[][] => {
  const chunks: Tech[][] = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
};

const About = () => {
  const techChunks = chunkArray(techStack, 8);

  return (
    <div id="about" className="block px-4">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-24 gap-12 mt-12">
        <div>
          <Hero />
        </div>
        <div className="flex flex-col items-center gap-10">
          <div className="relative w-96 h-96 rounded-full overflow-hidden border-4 border-primary shadow-xl">
            <img
              src="https://i.postimg.cc/7hK8Tg6F/IMG-20250601-123532.png"
              alt="Karthik Thokala"
              className="object-cover w-full h-full"
            />
          </div>
          <a
            href="https://drive.google.com/drive/folders/1Ya_teLAdAAzGGm9MfQf0yUJTsM5gg6k6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="rounded-full bg-primary text-white hover:bg-primary/90 px-6 py-3 text-base shadow-md">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </a>
        </div>
      </div>
      <div className="mt-12 mb-6 space-y-4">
        {techChunks.map((chunk, index) => (
          <div key={index} className="flex flex-wrap justify-center gap-3">
            {chunk.map((tech: Tech) => (
              <Badge
                key={tech.name}
                className={`${tech.color} text-white hover:scale-105 transition-transform`}
              >
                {tech.name}
              </Badge>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
