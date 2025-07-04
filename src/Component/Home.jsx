"use client";

import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";

const Home = () => {
  return (
    <section className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md relative">
      
      <h2 className="text-white text-xl md:text-4xl lg:text-4xl font-semibold mb-4 animate__animated animate__fadeIn">
   Hey, I’m
</h2>

      
      
      <h1 className="md:text-7xl text-4xl lg:text-9xl font-bold text-center text-white relative z-20">
        Karthik Thokala
      </h1>

      <div className="w-[40rem] h-40 relative mt-8">
        
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </section>
  );
};

export default Home;



