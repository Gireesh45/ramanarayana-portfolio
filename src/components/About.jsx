import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [key, setKey] = useState(0); // Re-render trigger
  const headingText = "About Me";

  // Re-trigger animation when coming back to #about
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#about") {
        setKey(prev => prev + 1);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-20 md:py-28 flex flex-col items-center text-center"
      key={key} // Animation resets on key change
    >
      {/* Animated Heading (like Hero section) */}
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
        {headingText.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.05,
              duration: 0.3,
            }}
            className={char === "M" ? "text-blue-600" : ""}
          >
            {char}
          </motion.span>
        ))}
      </h2>

      {/* About Content */}
      <div className="text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed space-y-4">
        <p>
          I’m <span className="font-semibold text-blue-600">Ramanarayana Kudupudi</span>, 
          a passionate Frontend Developer from Andhra Pradesh, India.  
          I love creating interactive, responsive, and user-friendly web applications using 
          modern web technologies.
        </p>

        <p>
          Currently, I’m pursuing my <span className="font-semibold">Industry Ready Certification 
          in Full-Stack Development</span> from Nxtwave Disruptive Technologies, where I’ve built 
          real-world projects using <strong>React.js, JavaScript, HTML, CSS, Bootstrap, and REST APIs</strong>.
        </p>

        <p>
          My goal is to craft seamless user experiences, write clean code, 
          and continue learning new technologies every day.  
          I enjoy turning creative ideas into real, functional, and impactful web products.
        </p>
      </div>

      {/* Education Card */}
      <div className="mt-10 flex justify-center">
        <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl shadow-md max-w-md w-full text-center card">
          <h3 className="text-lg font-semibold text-blue-600 mb-2">
            Education
          </h3>
          <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              🎓 <strong>Government Degree College, Mandapeta</strong>
              <br />
              B.Sc Computer Science — <span className="text-gray-500">2023 | CGPA: 7.0</span>
            </li>
            <li>
              📘 <strong>Vidya Vikas Junior College</strong>
              <br />
              Intermediate - MPC — <span className="text-gray-500">2020 | 56%</span>
              <br />
              <br />Nxtwave Disruptive Technologies (2024 - 2025)
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;

