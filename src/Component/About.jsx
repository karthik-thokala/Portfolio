import React from "react";
import AboutImg from "/src/assets/work.jpg";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80 rounded-2xl" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                I specialize in front-end development, creating responsive, user-centric interfaces with HTML, CSS, and JavaScript. My expertise extends to advanced ReactJS, where I build dynamic, high-performance applications like an Expense Tracker and a Transcript Editor. I’m skilled in crafting clean, maintainable code and using Tailwind CSS for modern, streamlined designs. Focused on functionality and aesthetics, I ensure seamless experiences across all devices. Each project I undertake is aimed at delivering impactful digital solutions that resonate with users</p>
              </span>
            </div>
            
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                My backend journey began with mastering Node.js and Express.js, focusing on creating efficient and scalable web applications. I’ve built RESTful APIs to manage data flows, ensuring security and optimized performance. My projects include developing custom backend solutions like a Transcript Editor and Expense Tracker, where data integrity and speed were essential. I've integrated databases like MongoDB to handle data persistence with ease. This experience has strengthened my full-stack skill set, allowing me to deliver end-to-end solutions.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;