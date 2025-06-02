import React from "react";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  return (
    <section id="experience" className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">
          My Experience
        </h2>

        <div className="bg-white p-8 rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-gray-700 transition-all hover:ring-2 hover:ring-blue-500">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            JPMorgan Chase & Co
          </h3>
          <p className="text-lg text-gray-600 mb-4">
            Software Engineering Virtual Internship | June 2024 - July 2024
          </p>
          <ul className="space-y-3 text-gray-700 list-disc pl-5">
            <li className="text-lg">Developed a real-time stock price tracker handling 10,000+ data points per second using Python and React.js.
</li>
            <li className="text-lg">Integrated Python and JavaScript to optimize data processing, achieving 40% faster performance.</li>
            <li className="text-lg">Automated Git-based data validation, reducing manual errors by 40% and deployment time by 25%.</li>
            <li className="text-lg"> Built a scalable 10,000+ LOC application leveraging JPMorgan frameworks and financial data APIs.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
