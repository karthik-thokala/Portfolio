import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["DSA Expert", "Software Engineer", "Frontend Developer"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev + 1) % titles.length);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full bg-white">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-spektr-cyan-50">Who am I ?</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? { y: 0, opacity: 1 }
                        : { y: titleNumber > index ? -150 : 150, opacity: 0 }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              I’m Karthik Thokala, an expert in DSA and a skilled full-stack developer specializing in front-end technologies like ReactJS, Tailwind CSS, and ShadCN UI. My passion is to build complex, high-performance applications with a focus on seamless user experience. I integrate advanced AI models, such as GPT-3.5 Turbo and DeepSeek, into projects to elevate user interactions. With strong foundational knowledge in backend development using Node.js, Express.js, and MongoDB, I craft intelligent, scalable solutions that solve real-world problems. Let's create the future of tech — one innovative project at a time."
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export { Hero };
