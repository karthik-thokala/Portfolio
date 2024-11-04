import React from 'react'
import ProjectCard from './ProjectCard';
import bannerImg from "/src/Component/virtual.png";
import AboutImg from "/src/assets/work.jpg";
import virtual from "/src/assets/expense tracker.jpg";
import tracker from  "/src/Component/Screenshot (136).png"
import mike from "/src/Component/Screenshot (286).png"
const Project = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
        <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
        <div className="py-12 px-8 flex flex-wrap gap-5">
            <ProjectCard 
            title="Virtual Xylophone"
            main = "I developed a virtual xylophone that significantly enhanced user engagement by 50%, featuring interactive and clickable keys that produce real-time musical sounds. To improve usability, I integrated visually appealing sound bar images, resulting in a 25% increase in user interaction time. The seamless user experience I crafted led to a 30% reduction in response time between key clicks and sound playback. This project elevated user satisfaction and fostered a deeper connection with music, encouraging creativity and exploration."
            image={bannerImg}
            />
            <ProjectCard 
            title="Expense Tracker"
            main = "I developed a ReactJS expense tracker capable of managing over 50 transactions daily, delivering real-time updates for income and expenses. By utilizing React hooks, I enhanced transaction performance by 30%, ensuring efficient state management. The responsive UI design significantly boosted mobile engagement by 40% and reduced bounce rates by 25%. This project provides a seamless experience for users across all devices, making financial tracking intuitive and accessible. Overall, the expense tracker demonstrates my ability to create effective solutions that cater to user needs."
            image={tracker}
            />
            <ProjectCard 
            title="Story Stack"
            main = "StoryStack is a full-stack web application built to manage book collections with a sleek front-end using ReactJS and TailwindCSS and a robust back-end for basic CRUD operations (GET, POST, PUT, DELETE). The app displays books in a card and table format on the main page, allowing users to click any book to see detailed information about it. Each book's details are stored in a database, making it easy to add, update, and delete entries efficiently. StoryStack combines a visually appealing UI with a functional, user-friendly system for book management."
            image={mike}
            />
        </div>
      
    </div>
  )
}

export default Project
