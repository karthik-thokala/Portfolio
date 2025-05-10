import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Mail className="text-blue-400" />
            <a
              href="mailto:Karthikthokala23@gmail.com"
              className="hover:underline text-blue-300"
            >
              Karthikthokala23@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Linkedin className="text-blue-400" />
            <a
              href="https://www.linkedin.com/in/karthik-thokala/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-blue-300"
            >
              Karthik Thokala
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Github className="text-blue-400" />
            <a
              href="https://github.com/karthik-thokala"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-blue-300"
            >
              Karthik Thokala
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
