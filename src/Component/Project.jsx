"use client";
import React from "react";
import ProjectCard from "./ProjectCard";

import virtual from "./virtual.png";
import project2 from "./Screenshot (136).png";
import project3 from "./Screenshot (286).png";
import project4 from "./Screenshot (368).png";
import project5 from "./Screenshot (363).png";

const Project = () => {
  const projectData = [
    {
      image: virtual,
      title: "Virtual Xylophone",
      description: "Virtual Xylophone is an interactive musical web app that lets users play xylophone sounds by clicking on visually styled xylophone keys. The project features vibrant, responsive images representing each key, and plays corresponding sound files when clicked—offering a fun, educational music experience directly in the browser.",
      liveDemo: "https://karthik-thokala.github.io/Xylophone/",
      sourceCode: "https://github.com/karthik-thokala/Xylophone"
    },
    {
      image: project2,
      title: "Expense Tracker",
      description: "Expense Tracker is a responsive financial tracking web app built with ReactJS and Tailwind CSS. It allows users to add income and expense transactions with names and amounts (+/-), instantly updating the balance. All transactions are displayed clearly in a modern, user-friendly layout with real-time summary updates.",
      liveDemo: "https://expense-tracker-one-navy.vercel.app/",
      sourceCode: "https://github.com/karthik-thokala/Expense-Tracker"
    },
    {
      image: project3,
      title: "StoryStack",
      description: "StoryStack is a full-stack book management web application built with ReactJS, Tailwind CSS, Node.js, and MongoDB. Users can add and view books with details like title, author, and publish year, which are displayed using elegant UI cards and a searchable, sortable table component for efficient organization and browsing.",
      liveDemo: "https://story-stack-11wwvi1g8-karthik-tinkus-projects.vercel.app/",
      sourceCode: "https://github.com/karthik-thokala/Story-Stack"
    },
    {
      image: project4,
      title: "Jet Meal",
      description: "JetMeal is a fully responsive and modern food ordering web application built using ReactJS and Tailwind CSS. It simulates a real-world food delivery experience with dynamic UI features, restaurant listings based on city selection, and an innovative AI Meal Suggestion tool that personalizes meal options based on the user's location and time of day.",
      liveDemo: "https://jet-meal-wlap.vercel.app/",
      sourceCode: "https://github.com/karthik-thokala/JetMeal"
    },
    {
      image: project5,
      title: "StreamAI",
      description: "StreamAI is an innovative movie streaming platform that combines AI movie suggestions and an immersive movie-watching experience. The app is designed to provide a smooth user experience with features like a login system, dynamic movie cards, and movie trailers, along with AI-powered recommendations powered by OpenAI's GPT-3.5 model and DeepReek R1 models.",
      liveDemo: "https://stellular-druid-ca0311.netlify.app/",
      sourceCode: "https://github.com/karthik-thokala/StreamAI"
    }
  ];

  return (
    <div id="projects"  className="px-6 py-[5%] bg-[rgb(23,29,50)]">
      <h1 className="text-3xl font-bold text-center text-white mb-6">Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {projectData.map((project, index) => (
          <div key={index} className="flex justify-center">
            <ProjectCard
              image={project.image}
              title={project.title}
              description={project.description}
              liveDemo={project.liveDemo}
              sourceCode={project.sourceCode}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
