import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const [key, setKey] = useState(0); // 👈 Used to re-trigger animation

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#skills") {
        setKey(prev => prev + 1);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const skills = [
    { name: "React.js", icon: <FaReact className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  ];

  const headingText = "My Skills";

  return (
    <section
      id="skills"
      key={key}
      className="max-w-6xl mx-auto px-6 py-20 md:py-28 text-center"
    >
      {/* Animated Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 dark:text-white">
        {headingText.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.05,
              duration: 0.3,
            }}
            className={char === "S" ? "text-blue-600" : ""}
          >
            {char}
          </motion.span>
        ))}
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center justify-center 
              bg-blue-50 dark:bg-gray-800 p-6 rounded-xl shadow-md 
              hover:shadow-lg transition duration-300 transform hover:-translate-y-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-5xl mb-3">{skill.icon}</div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </div>

      {/* Extra Info */}
      <p className="mt-10 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
        I specialize in crafting responsive web applications using React.js, JavaScript, and Tailwind CSS.
        I'm passionate about building clean UIs, writing efficient code, and continuously learning modern web technologies.
      </p>
    </section>
  );
};

export default Skills;
