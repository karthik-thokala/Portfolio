import React from 'react'
import AboutImg from "/src/assets/output.jpg";
import Textchange from './Textchange';
 const Home = () => {
    return (
        <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
            <div className="mdw-2/4 md:pt-10">
                <h1 className="text-2xl md:text-6xl font-bold flex leading-normal tracking-tighter"><Textchange /></h1>
                <p className="text-sm md:text-2xl tracking-tight">I’m Karthik Thokala, a passionate software engineer skilled in crafting seamless web experiences with a focus on Front-end  and Back-end mastery.</p>
                <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">Contact Me</button>
            </div>
            <div>
                <div><img className="rounded-2xl" src={AboutImg} alt=""></img></div>
            </div>
        </div>
    )
}

export default Home
