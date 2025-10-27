import React from "react";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "React.js", icon: <FaReact className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  ];

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20 md:py-28 text-center">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 dark:text-white">
        My <span className="text-blue-600">Skills</span>
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center bg-blue-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2"
          >
            <div className="text-5xl mb-3">{skill.icon}</div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
              {skill.name}
            </h3>
          </div>
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
