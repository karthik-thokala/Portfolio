"use client";
import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";

const ProjectCard = ({ image, title, description, liveDemo, sourceCode }) => {
  return (
    <div className="max-w-sm h-full flex flex-col rounded-xl shadow-md overflow-hidden bg-white dark:bg-zinc-900 p-4">
      <img
        src={image}
        alt="Project Screenshot"
        height={300}
        width={400}
        className="rounded-md object-cover w-full"
      />

      <h2 className="text-xl font-semibold mt-4 text-black dark:text-white">
        {title}
      </h2>

      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
        {description}
      </p>

      {/* Buttons pinned to bottom */}
      <div className="mt-auto flex justify-between items-center pt-4">
        <a
          href={liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 flex items-center gap-2"
        >
          <FaGlobe /> Live Demo
        </a>
        <a
          href={sourceCode}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gray-800 text-white text-sm rounded-lg hover:bg-gray-900 flex items-center gap-2"
        >
          <FaGithub /> GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
