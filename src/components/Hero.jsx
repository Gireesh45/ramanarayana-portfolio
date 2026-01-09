import React, { useEffect, useState } from "react";
import ProfileImage from "../assets/Ramanarayana-port-folio-img.jpeg";
const Hero = () => {
  const [key, setKey] = useState(0); // 👈 force re-render

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#home") {
        setKey(prev => prev + 1); // change key → forces animation reset
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const headingText = "Hi, I'm Ramanarayana Kudupudi";

  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-20 md:py-32"
      key={key} // 👈 animation restarts when key changes
    >
      {/* Left Side */}
      <div className="flex flex-col items-start text-left space-y-6 md:w-1/2">
        {/* Animated Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          {headingText.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.05,
                duration: 0.3,
              }}
              className={char === "R" ? "text-blue-600" : ""}
            >
              {char}
            </motion.span>
          ))}
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
          Frontend Developer
        </h2>

        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          I build responsive and user-friendly web interfaces using React.js, JavaScript, and Tailwind CSS.
          I enjoy turning creative ideas into real, functional web experiences.
        </p>

        <div className="flex space-x-4">
          <a
            href="#projects"
            className="inline-block backdrop-blur-md bg-white/10 border border-blue-500/40 
              text-blue-100 font-semibold px-6 py-2 rounded-lg
              hover:bg-blue-600/60 hover:text-white hover:border-blue-400
              transition-all duration-300"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-blue-600 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
        <img
          src={ProfileImage}
          alt="Ramanarayana Kudupudi"
          className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg border-4 border-none"
        />
      </div>
    </section>
  );
};

export default Hero;
