import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-20 md:py-32"
    >
      {/* Left Side: Text Content */}
      <div className="flex flex-col items-start text-left space-y-6 md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Hi, I'm <span className="text-blue-600">Ramanarayana Kudupudi</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
          Frontend Developer
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          I build responsive and user-friendly web interfaces using React.js, JavaScript, and Tailwind CSS.
          I enjoy turning creative ideas into real, functional web experiences.
        </p>

        {/* Buttons */}
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

      {/* Right Side: Profile Image */}
      <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
        <img
          src="https://res.cloudinary.com/dnn94cb0w/image/upload/v1761543495/IMG_20250908_124644_u7gei2.jpg"
          alt="Ramanarayana Kudupudi"
          className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg border-4 border-blue-600"
        />
      </div>
    </section>
  );
};

export default Hero;

